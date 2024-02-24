from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.doctor)
admin.site.register(models.Appointment)
