from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=3000)
    completed = models.BooleanField(default=False)
