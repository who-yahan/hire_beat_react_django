# Generated by Django 3.0.7 on 2020-10-29 21:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0014_auto_20201015_1213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='categorys',
            name='questions',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]