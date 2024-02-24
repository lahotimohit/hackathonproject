from django import forms
from . import models
from django.contrib.auth.models import User


class MyUserCreationForm(forms.ModelForm):
    class Meta():
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']

class DoctorCreationForm(forms.ModelForm):
    class Meta():
        model = models.doctor
        fields = ['first_name', 'last_name', 'email', 'username', 'password', 'specialities']