
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MojoViewSet,MojoViewSet,MojoViewSet,MojoViewSet
router = DefaultRouter()
router.register('mojo', MojoViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
