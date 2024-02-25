from django.urls import path
from . import views

urlpatterns = [
    path('api/user/signup', views.user_signup, name='user_signup'),
    path('api/doctor/signup', views.doctor_signup, name='doctor_signup'),
    path('api/checkToken', views.check_token, name='check_token'),
    path('api/appointment/create', views.createAppointment, name="appointmentcreate"),
    path('api/doctor/appointment', views.doctor_appointment, name="doctorAppointment"),
    path('api/user/appointment', views.user_appointments, name="userAppointment")
    
]