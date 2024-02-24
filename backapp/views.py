from django.http import JsonResponse
from django.contrib.auth.tokens import default_token_generator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.core.mail import send_mail
from . import models
import secrets
import random
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
            request.session['otp'] = otp_gen(email=doctor.email)
            print(request.session.get('otp'))
            token = secrets.token_urlsafe(32)
            doctor.auth_token = token
            doctor.save()
            print(doctor.auth_token)
            response_data = {"message": "OTP sent successfully", 'token':token, 'doctorId':doctor.id}
            return JsonResponse(response_data)
        else:
            errors = form.errors.as_json()
            return JsonResponse({"error": errors}, status=400)
    else:
        return JsonResponse({'msg': "Enter details..."})

def otp_gen(email):
    print(f"This is the email {email}")
    OTP = random.randint(100001, 999999)
    send_mail("L Hospital Verification Mail", f"Your one time password to authenticate your L'Hospital Doctor account is {OTP}.\nPlease do not disclose it with anyone....",
              'Mohit',[email], fail_silently=False)
    return OTP

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

# @csrf_exempt
# def otp_verify(request): 
#     if request.method == 'POST':
#         data = json.loads(request.body)
#         print(data)
#         doctor_token = data.get('token')
#         doctor_id = data.get('doctorId')
#         doctor = models.doctor.objects.get(id=doctor_id)
#         if(doctor.auth_token == doctor_token)
#         {

#         }
#         print(request.session.get('otp'))
        
#         return JsonResponse({ "error": "method not valid" })
#     else:
#         return JsonResponse({ "error": "method not valid" })
