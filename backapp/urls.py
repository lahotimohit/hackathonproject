from django.urls import path
from . import views

urlpatterns = [
    path('api/user/signup', views.user_signup, name='userSignup'),
    path('api/doctor/signup', views.doctor_signup, name='doctorSignup'),
    path('api/checkToken', views.check_token, name='checkToken'),
    path('api/appointment/create', views.createAppointment, name="appointmentcreate"),
    path('api/doctor/appointment', views.doctor_appointment, name="doctorAppointment"),
    path('api/user/appointment', views.user_appointments, name="userAppointment"),
    path('api/doctor/checkToken', views.check_doctor_token, name="checkDoctorToken"),
    path('api/user/login', views.user_login, name='userLogin')
]