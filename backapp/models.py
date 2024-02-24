from django.db import models
from taggit.managers import TaggableManager

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
    appointment_date = models.DateTimeField()

    def __str__(self):
        return f"{self.appointment_date}- {self.app_doctor}"
    