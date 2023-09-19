from rest_framework import authentication
from house.models import Mojo,Mojo,Mojo
from .serializers import MojoSerializer,MojoSerializer,MojoSerializer
from rest_framework import viewsets

class MojoViewSet(viewsets.ModelViewSet):
    serializer_class = MojoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Mojo.objects.all()