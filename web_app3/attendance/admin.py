from django.contrib import admin
from .models import Attendance, Students

# Register your models here.

class StudentsInline(admin.TabularInline):
    model = Students
    extra = 1

class AttendanceAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Key Here', {'fields' : ['key']}),
        ('Begin Date', {'fields' : ['begin_dates']}),
        ('End Date', {'fields' : ['end_dates']})

    ]

    inlines = [StudentsInline]
    list_display = ['begin_dates', 'end_dates', 'key']



admin.site.register(Attendance, AttendanceAdmin)