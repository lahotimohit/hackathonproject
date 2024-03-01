from django.http import JsonResponse
from django.contrib.auth.tokens import default_token_generator
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from . import models
from django.http import HttpResponse
from django.core.mail import send_mail
import secrets
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
    

# User Login
@csrf_exempt
def user_login(request):
    if request.method == "POST": 
        data = json.loads(request.body)
        print(data)
        username = data.get('username')
        user_password = data.get('password')
        print(username, user_password)
        user = authenticate(username=username, password=user_password)
        if user is None:
            return JsonResponse({ 'authenticated': False })
        token = default_token_generator.make_token(user)
        return JsonResponse({'token': token, 'userId': user.id})
# Doctor Login
    

    
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
            token = secrets.token_urlsafe(32)
            doctor.auth_token = token
            doctor.save()
            print(doctor.auth_token)
            response_data = {"message": "Doctor Regsitered successfully", 'token':token, 'doctorId':doctor.id}
            return JsonResponse(response_data)
        else:
            errors = form.errors.as_json()
            return JsonResponse({"error": errors}, status=400)
    else:
        return JsonResponse({'msg': "Enter details..."})
    
@csrf_exempt
def createAppointment(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print(data)
        userId = data.get('userId')
        userToken = data.get('userToken')
        doctorId = data.get('doctorId')
        dateTime = data.get('dateTime')
        user = User.objects.get(id=userId)
        is_valid=default_token_generator.check_token(user, userToken)
        print(is_valid)
        if is_valid:
            room_id = secrets.token_urlsafe(32)
            doctor = models.doctor.objects.get(id=doctorId)
            models.Appointment.objects.create(app_doctor=doctor, app_patient=user, app_date=dateTime)
            url=f"http://localhost:3000/room/{room_id}"
            html_message=f"Meeting is schedule between {user.username} and {doctor.username}<br> Timing of Meeting: {dateTime}<br>Meeting Link:<h4>{url}</h4><br>Team L'Hopital"
            send_mail("Meeting Schedule Successfully",'',
              'Mohit',[doctor.email, user.email], html_message=html_message ,fail_silently=False)
            return JsonResponse({'message': "Meeting Schedule Successfully..."})

        else:
            return HttpResponse("Authentication error...")

@csrf_exempt
def doctor_appointment(request):
    if request.method == "GET":
        data = json.loads(request.body)
        print(data)
        doctor_id = data.get('doctorId')
        doctorToken = data.get('doctorToken')
        doctor = models.doctor.objects.get(id=doctor_id)
        if doctor.auth_token == doctorToken:
            print(True)
            appointments = models.Appointment.objects.filter(app_doctor=doctor)
            appointments_data = [{'app_date': app.app_date, 'app_patient': app.app_patient.username} for app in appointments]
            return HttpResponse(appointments_data)
        else:
            return HttpResponse('Unauthorized Access...')
        
@csrf_exempt
def user_appointments(request):
    if request.method=="GET":
        data = json.loads(request.body)
        print(data)
        user_id = data.get('userId')
        userToken = data.get('userToken')
        user = User.objects.get(id=user_id)
        is_valid = default_token_generator.check_token(user, userToken)
        print(user.username)
        if is_valid:
            appointments = models.Appointment.objects.filter(app_patient=user)
            appointments_data = [{'app_date': app.app_date, 'app_doctor': app.app_doctor.username} for app in appointments]
            return HttpResponse(appointments_data)
        else:
            return HttpResponse("Unauthorized access...")
    
@csrf_exempt
def check_token(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        user_token = data.get('token')
        user_id = data.get('userId')
        user = User.objects.get(id=user_id)
        is_valid = default_token_generator.check_token(user, user_token)
        if is_valid:
            return JsonResponse({'user': {'first_name': user.first_name, 'last_name': user.last_name, 'username': user.username, 'email': user.email, 'role': 'Patient'}})
        else: 
            return JsonResponse({'error': "Authentication token not verified..."})
    else:
        return JsonResponse({ "error": "method not valid" })
    
# Check the doctor token here 
@csrf_exempt 
def check_doctor_token(request):
    if data.method == 'POST':
        data = json.loads(request.body)
        print(data)
        user_token = data.get('token')
        doctor_id = data.get('doctorId')
        doctor = models.doctor.objects.get(id=doctor_id)
        print(doctor)
        if doctor.auth_token == user_token: 
            return JsonResponse({'user': {'first_name': doctor.first_name, 'last_name': doctor.last_name, 'username': doctor.username, 'email': doctor.email, 'role': 'Doctor'}})
        else:
            return JsonResponse({'error': "Authentication token not verified..."})
        
    else:
        return JsonResponse({ "error": "method not valid" })
    

@csrf_exempt
def logout_doctor(request):
    if data.method == 'POST':
        data = json.loads(request.body)
        print(data)
        doctor_id = data.get('userId')
        user_token = data.get('token')
        doctor = models.doctor.objects.get(id=doctor_id)
        print(doctor)
            

        