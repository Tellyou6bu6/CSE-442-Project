from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Attendance(models.Model):
    students = models.ForeignKey(User, on_delete=models.CASCADE)
    dates = models.DateTimeField(auto_now=True)