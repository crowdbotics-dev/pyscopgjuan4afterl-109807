from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JuanViewSet,AzulViewSet,DogViewSet,CatViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('juan', JuanViewSet )
router.register('azul', AzulViewSet )
router.register('dog', DogViewSet )
router.register('cat', CatViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
