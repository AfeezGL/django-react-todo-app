from rest_framework.viewsets import ModelViewSet
from .serializers import TodoSerializer
from .models import Todo

class TodoView(ModelViewSet):
    queryset = Todo.objects.all().order_by("-crated")
    serializer_class = TodoSerializer