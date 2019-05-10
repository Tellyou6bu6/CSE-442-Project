import datetime

from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published', default=timezone.now)

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

class StudentChoice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.DO_NOTHING)
    students = models.ForeignKey(User, on_delete=models.CASCADE)
    student_pick = models.IntegerField(default=-1)