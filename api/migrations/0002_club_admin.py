# Generated by Django 4.1 on 2022-08-10 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='club',
            name='admin',
            field=models.CharField(default='abcd', max_length=100),
            preserve_default=False,
        ),
    ]
