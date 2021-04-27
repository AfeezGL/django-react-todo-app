from django.db.models import fields
from .models import Todo
from rest_framework.serializers import ModelSerializer

class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = ["id", "text", "completed"]