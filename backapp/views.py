from django.http import JsonResponse
from django.contrib.auth.tokens import default_token_generator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.shortcuts import render
from . import forms
import json

@csrf_exempt
def user_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        form = forms.MyUserCreationForm(data)
        
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
def doctor_signup(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        form = forms.DoctorCreationForm(data)
        
        if form.is_valid():
            doctor = form.save()
            password = make_password(doctor.password)
            doctor.password = password
            doctor.save()
            # new_user = User.objects.get(username=user.username)
            # token = default_token_generator.make_token(new_user)
            # request.session["token"] = token
            # print(request.session.get("token"))
            # print(token)
            response_data = {"message": "Doctor registered successfully"}
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