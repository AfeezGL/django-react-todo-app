# Generated by Django 3.1.3 on 2021-04-24 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todo',
            old_name='task',
            new_name='text',
        ),
    ]
