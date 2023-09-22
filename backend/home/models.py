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
class TestModel(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
    r1 = models.ForeignKey("home.TestModel3",on_delete=models.CASCADE,null=True,blank=True,related_name="testmodel_r1",)
    r2 = models.ForeignKey("home.TestModel4",on_delete=models.CASCADE,null=True,blank=True,related_name="testmodel_r2",)
class TestModel2(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,)
    enemy = models.ForeignKey("home.TestModel",on_delete=models.CASCADE,related_name="testmodel2_enemy",)
class TestModel3(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
class TestModel4(models.Model):
    'Generated Model'
    age = models.BigIntegerField()
