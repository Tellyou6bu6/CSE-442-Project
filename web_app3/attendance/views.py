from django.shortcuts import render, render_to_response
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.http import HttpResponseRedirect, HttpResponse
from django.utils import timezone
from django.contrib import messages

from .models import Attendance, Students

from .models import Attendance
# Create your views here.


@login_required
def attendance(request):

    if request.method == 'POST':

        text = request.POST.get('textfield', None)
        print(text)

        user = request.user

        attendance_object = Attendance.objects.last()
        already_taken = attendance_object.students_set.filter(students=user).count()

        end_time = attendance_object.end_dates
        begin_time = attendance_object.begin_dates
        current_time = timezone.now()

        if already_taken == 0 and current_time <= end_time and current_time >= begin_time:
            student_object = Students(students=user)
            stu = Students()
            stu.attendance = attendance_object
            stu.students = user
            stu.dates = current_time
            stu.save()
            messages.success(request, "Your attendance has been recorded")

        if already_taken != 0:
            messages.success(request, "Your attendance has already been taken")

        if current_time > end_time:
            messages.success(request, "The time to take attendance is over")

        if current_time < begin_time:
            messages.success(request, "The attendance has not yet begin")

        return HttpResponseRedirect(request.path_info)



    return render(request, 'attendance/attendance.html', )


def post(self, request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )

def recordAttendance(request):
    print("Work!")
    return render(request, 'attendance/attendance.html', )