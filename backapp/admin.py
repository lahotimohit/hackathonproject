from django.contrib import admin
from . import models

class DoctorAdmin(admin.ModelAdmin):
    list_display = ['username', 'id']

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['app_doctor', 'display_app_date', 'app_patient']

    def display_app_date(self, obj):
        return obj.app_date.strftime('%Y-%m-%d %H:%M:%S')
    
    display_app_date.short_description = 'Appointment Date'

# Register your models here.
admin.site.register(models.doctor, DoctorAdmin)
admin.site.register(models.Appointment, AppointmentAdmin)