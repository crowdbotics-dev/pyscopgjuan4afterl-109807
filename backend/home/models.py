from django.conf import settings
from django.db import models
class Juan(models.Model):
    'Generated Model'
    azul = models.BigIntegerField()
class Azul(models.Model):
    'Generated Model'
    bvbv = models.BigIntegerField()
    mkmk = models.ForeignKey("home.Juan",on_delete=models.CASCADE,related_name="azul_mkmk",)
class Dog(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    owner = models.ForeignKey("users.User",on_delete=models.CASCADE,related_name="dog_owner",)
    enemy = models.ForeignKey("home.Cat",null=True,blank=True,on_delete=models.CASCADE,related_name="dog_enemy",)
class Cat(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    enemy = models.ForeignKey("home.Dog",on_delete=models.CASCADE,related_name="cat_enemy",)
