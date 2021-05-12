from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import ListAPIView
from .serializers import TodoSerializer
from .models import Todo

# Todo view to read update and delete todos
class TodoView(ModelViewSet):
    queryset = Todo.objects.all().order_by("-created")
    serializer_class = TodoSerializer

# View for fetching todos for a specific user
class UserTodos(ListAPIView):
    def get_queryset(self):
        return Todo.objects.filter(uuid = self.kwargs["uuid"]).order_by("-created")
    serializer_class = TodoSerializer