from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=150)
    completed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now=True)
