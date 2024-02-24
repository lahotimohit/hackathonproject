from django.urls import path
from . import views

urlpatterns = [
    path('api/user/signup', views.user_signup, name='user_signup'),
    path('api/doctor/signup', views.doctor_signup, name='doctor_signup'),
    path('api/checkToken', views.check_token, name='check_token'),

]