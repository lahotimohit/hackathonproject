from django.http import JsonResponse
from django.contrib.auth.tokens import default_token_generator
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.shortcuts import render
from .forms import MyUserCreationForm
import json

@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        form = MyUserCreationForm(data)
        
        if form.is_valid():
            user = form.save()
            user.set_password(user.password)
            user.save()
            new_user = User.objects.get(username=user.username)
            token = default_token_generator.make_token(new_user)
            request.session["token"] = token
            print(request.session.get("token"))
            print(token)
            response_data = {"message": "User registered successfully", "token": token, "userId": user.id}
            return JsonResponse(response_data)
        else:
            errors = form.errors.as_json()
            return JsonResponse({"error": errors}, status=400)
    else:
        return JsonResponse({'msg': "Enter details..."})
    
@csrf_exempt
def check_token(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        
        user_token = data.get('token')
        user_id = data.get('userId')
        user = User.objects.get(id=user_id)
        is_valid = default_token_generator.check_token(user, user_token)
        return JsonResponse({ "verified": is_valid })
    else:
        return JsonResponse({ "error": "method not valid" })