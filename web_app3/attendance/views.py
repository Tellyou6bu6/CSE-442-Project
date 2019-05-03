from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponseRedirect
from django.utils import timezone

from .models import Attendance, Students

from .models import Attendance
# Create your views here.


@login_required
def attendance(request):

    if request.method == 'POST':
        user = request.user

        attendance_object = Attendance.objects.last()
        already_taken = attendance_object.students_set.filter(students=user).count()

        end_time = attendance.end_dates
        begin_time = attendance.begin_dates
        current_time = timezone.now()

        if already_taken == 0 and current_time <= end_time and current_time >= begin_time:
            student_object = Students(students=user)

            #attendance_object.students_set.









    return render(request, 'attendance/attendance.html', )


def post(self, request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )

def recordAttendance(request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )