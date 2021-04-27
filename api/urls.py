from django.urls import path, include
from .views import TodoView
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'todo', TodoView)

urlpatterns = [
    path('', include(router.urls)),
]