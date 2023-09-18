from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JuanViewSet,AzulViewSet,DogViewSet,AzulViewSet,DogViewSet,JuanViewSet,AzulViewSet,DogViewSet,JuanViewSet,AzulViewSet,DogViewSet,JuanViewSet

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

urlpatterns = [
    path("", include(router.urls)),
]
