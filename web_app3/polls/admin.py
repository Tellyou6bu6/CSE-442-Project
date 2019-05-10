from django.contrib import admin

# Register your models here.

from .models import Choice, Question, StudentChoice

class ChoiceInline(admin.TabularInline):
    model = Choice
    extra = 3
    readonly_fields = ['votes']

class StudentChoiceInline(admin.TabularInline):
    model = StudentChoice
    extra = 3



class QuestionAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date'], 'classes': ['collapse']}),
    ]
    inlines = [ChoiceInline, StudentChoiceInline]
    list_display = ('question_text', 'pub_date')
    list_filter = ['pub_date']
    search_fields = ['question_text']



admin.site.register(Question, QuestionAdmin)