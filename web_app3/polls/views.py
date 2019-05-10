from django.http import Http404
from django.shortcuts import render

from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.contrib import messages
from  django.views import generic

from django.utils import timezone

from django.contrib.auth.decorators import login_required

# Create your views here.

from django.http import HttpResponse
from django.template import loader

from .models import Choice, Question


def index(request):
    if request.user.is_authenticated:
        latest_question_list = Question.objects.order_by('-pub_date')[:5]
        context = {'latest_question_list': latest_question_list}
        return render(request, 'polls/index.html', context)

    return HttpResponseRedirect('/login/')


def detail(request, question_id):
    if request.user.is_authenticated:
        question = get_object_or_404(Question, pk=question_id)
        return render(request, 'polls/detail.html', {'question': question})

    return HttpResponseRedirect('/login/')

def results(request, question_id):
    if request.user.is_authenticated:
        question = get_object_or_404(Question, pk=question_id)
        return render(request, 'polls/results.html', {'question': question})

    return HttpResponseRedirect('/login/')

def vote(request, question_id):
    if request.user.is_authenticated:
        question = get_object_or_404(Question, pk=question_id)
        try:
            selected_choice = question.choice_set.get(pk=request.POST['choice'])
        except (KeyError, Choice.DoesNotExist):
            # Redisplay the question voting form.
            return render(request, 'polls/detail.html', {
                'question': question,
                'error_message': "You didn't select a choice.",
            })
        else:

            user = request.user

            a = question.studentchoice_set.filter(students=user)

            print(a)













            selected_choice.votes += 1
            selected_choice.save()
            # Always return an HttpResponseRedirect after successfully dealing
            # with POST data. This prevents data from being posted twice if a
            # user hits the Back button.
            return HttpResponseRedirect(reverse('polls:results', args=(question.id,)))

        return HttpResponseRedirect('/login/')