from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from datetime import datetime

# Create your models here.



def future():
    return timezone.now() + timezone.timedelta(hours=1)

class Attendance(models.Model):
    begin_dates = models.DateTimeField(default=timezone.now)
    end_dates = models.DateTimeField(default=timezone.now)
    key = models.CharField(max_length=50)

class Students(models.Model):
    attendance = models.ForeignKey(Attendance, on_delete=models.CASCADE)
    students = models.ForeignKey(User, on_delete=models.CASCADE)
    dates = models.DateTimeField(timezone.now)