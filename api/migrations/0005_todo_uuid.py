# Generated by Django 3.1.3 on 2021-05-07 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210428_1601'),
    ]

    operations = [
        migrations.AddField(
            model_name='todo',
            name='uuid',
            field=models.CharField(default='fjdiriajfiiai8ei', max_length=36),
            preserve_default=False,
        ),
    ]