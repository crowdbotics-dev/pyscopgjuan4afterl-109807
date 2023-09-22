# Generated by Django 2.2.28 on 2023-09-22 15:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0006_dog_enemy'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.BigIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='TestModel2',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('enemy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='testmodel2_enemy', to='home.TestModel')),
            ],
        ),
    ]
