from django.conf import settings
from django.db import models
class Juan(models.Model):
    'Generated Model'
    azul = models.BigIntegerField()
class Azul(models.Model):
    'Generated Model'
    bvbv = models.BigIntegerField()
    mkmk = models.ForeignKey("home.Juan",on_delete=models.CASCADE,related_name="azul_mkmk",)
