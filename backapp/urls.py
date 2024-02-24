from django.urls import path
from .views import example_view

urlpatterns = [
    path('api/example/', example_view, name='example_view'),
]