from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class MyUserCreationForm(forms.ModelForm):
    class Meta():
        model = User
        fields = ['first_name', 'last_name', 'email', 'username', 'password']