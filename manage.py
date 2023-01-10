import openai
from django.shortcuts import render
#from django.urls import path
#from . import views

import openai
openai.api_key = "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"

def generate_gift_ideas(request):
  age = request.GET.get('age')
  gender = request.GET.get('gender')
  interests = request.GET.get('interests')
  relationship = request.GET.get('relationship')
  occasion = request.GET.get('occasion')
  
  prompt = f"Gift ideas for a {age} year old {gender} for their {occasion}, based on their interests in {interests} and their relationship with the recipient as a {relationship}:"
  completions = openai.Completion.create(
    engine="text-davinci-002",
    prompt=prompt,
    max_tokens=1024,
    n=1,
    stop=None,
    temperature=0.5,
  )
  message = completions.choices[0].text
  #urlpatterns = [path('gift-ideas/', views.generate_gift_ideas, name='gift_ideas'),]
  return render(request, 'index.html', {'gift_ideas': message})

