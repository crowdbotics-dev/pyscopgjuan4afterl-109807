# Generated by Django 2.2.28 on 2023-09-13 15:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_juan'),
    ]

    operations = [
        migrations.CreateModel(
            name='Azul',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bvbv', models.BigIntegerField()),
                ('mkmk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='azul_mkmk', to='home.Juan')),
            ],
        ),
    ]