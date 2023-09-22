from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JuanViewSet,AzulViewSet,DogViewSet,CatViewSet,TestModelViewSet,TestModel2ViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestModelViewSet,TestModel2ViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestModelViewSet,TestModel2ViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestModelViewSet,TestModel2ViewSet

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
router.register('testmodel', TestModelViewSet )
router.register('testmodel2', TestModel2ViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
