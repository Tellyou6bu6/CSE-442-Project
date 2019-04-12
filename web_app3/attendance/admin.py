from django.contrib import admin
from .models import Attendance

# Register your models here.

class AttendanceAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Hello', {'fields' : ['students']})
    ]

    list_display = ['students', 'dates']
    search_fields = ['students']



admin.site.register(Attendance, AttendanceAdmin)