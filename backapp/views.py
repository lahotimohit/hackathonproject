from django.http import JsonResponse

def example_view(request):
    data = {"message": "Hello from Django!"}
    return JsonResponse(data)