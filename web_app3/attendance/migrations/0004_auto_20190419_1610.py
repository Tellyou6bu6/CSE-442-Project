# Generated by Django 2.1.7 on 2019-04-19 20:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('attendance', '0003_auto_20190419_1559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='students',
            name='attendance',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='attendance.Attendance'),
        ),
    ]