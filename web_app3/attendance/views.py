from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponseRedirect

from .models import Attendance
# Create your views here.


@login_required
def attendance(request):

    if request.method == 'POST':
        user = request.user
        print(user)

    return render(request, 'attendance/attendance.html', )


def post(self, request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )

def recordAttendance(request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )