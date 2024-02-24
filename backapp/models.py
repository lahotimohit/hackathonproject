from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager

def get_default_user():
    return User.objects.first().id


# Create your models here.
class doctor(models.Model):
    first_name = models.CharField(max_length=40)
    last_name = models.CharField(max_length=40)
    username = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    specialities = TaggableManager()
    ratings = models.IntegerField()

    def __str__(self):
        return self.username
    
class Appointment(models.Model):
    app_doctor = models.ForeignKey(doctor, on_delete=models.CASCADE)
    app_patient = models.ForeignKey(User, on_delete=models.DO_NOTHING, default=get_default_user)
    appointment_date = models.DateTimeField()

    def __str__(self):
        return f"{self.appointment_date}- {self.app_doctor}"
    