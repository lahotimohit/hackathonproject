# Generated by Django 5.0.2 on 2024-02-24 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backapp', '0011_alter_doctor_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='doctor',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
