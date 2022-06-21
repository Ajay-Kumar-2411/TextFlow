# Views.py
# I have created this file - Harry
from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'index.html')

def analyze(request):
    flag = 0
    #Get the text
    djtext = request.POST.get('text', 'default')

    # Check checkbox values
    removepunc = request.POST.get('removepunc', 'off')
    fullcaps = request.POST.get('fullcaps', 'off')
    lowercase = request.POST.get('lowercase','off')
    newlineremover = request.POST.get('newlineremover', 'off')
    extraspaceremover = request.POST.get('extraspaceremover', 'off')
    char_count = request.POST.get('char_count','off')
    word_count = request.POST.get('word_count','off')

    params = {'purpose' : "Text analyzed with all functionalities implemented"}
    #Check which checkbox is on
    if removepunc == "on":
        flag = 1
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analyzed = ""
        for char in djtext:
            if char not in punctuations:
                analyzed = analyzed + char
        djtext = analyzed
        params["analyzed_text"] = analyzed

    if(fullcaps=="on"):
        flag = 1
        analyzed = ""
        for char in djtext:
            analyzed = analyzed + char.upper()
        # Analyze the text
        djtext = analyzed
        params["analyzed_text"] = analyzed
    
    if(lowercase == "on"):
        flag = 1
        analyzed = ""
        for char in djtext:
            analyzed = analyzed + char.lower()
        djtext = analyzed
        params["analyzed_text"] = analyzed

    if(extraspaceremover=="on"):
        flag = 1
        analyzed = ""
        for index, char in enumerate(djtext):
            if not(djtext[index] == " " and djtext[index+1]==" "):
                analyzed = analyzed + char

        djtext = analyzed
        params["analyzed_text"] = analyzed

    if (newlineremover == "on"):
        flag = 1
        analyzed = ""
        for char in djtext:
            if char != "\n" and char!="\r":
                analyzed = analyzed + char
        params["analyzed_text"] = analyzed

    if(char_count == "on"):
        flag = 1
        charCount = f"Number of character : + {len(djtext)}"
        params["char_count"] = charCount

    if(word_count == "on"):
        flag = 1
        wordCount = f"Number of words : + {len(djtext.split())}"
        params["word_count"] = wordCount

    if(flag == 1):
        return render(request,'analyze.html',params)

    else:
        return HttpResponse("Error")

# def capfirst(request):
#     return HttpResponse("capitalize first")
#
# def newlineremove(request):
#     return HttpResponse("newline remove first")
#
#
# def spaceremove(request):
#     return HttpResponse("space remover back")
#
# def charcount(request):
#     return HttpResponse("charcount ")