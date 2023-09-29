from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import JuanViewSet,AzulViewSet,DogViewSet,CatViewSet,TestModelViewSet,TestModel2ViewSet,TestModel3ViewSet,TestModel4ViewSet,TestDataViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestDataViewSet,TestModelViewSet,TestModel2ViewSet,TestModel3ViewSet,TestModel4ViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestDataViewSet,TestModelViewSet,TestModel2ViewSet,TestModel3ViewSet,TestModel4ViewSet,AzulViewSet,CatViewSet,DogViewSet,JuanViewSet,TestDataViewSet,TestModelViewSet,TestModel2ViewSet,TestModel3ViewSet,TestModel4ViewSet

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
router.register('testmodel3', TestModel3ViewSet )
router.register('testmodel4', TestModel4ViewSet )
router.register('testdata', TestDataViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
