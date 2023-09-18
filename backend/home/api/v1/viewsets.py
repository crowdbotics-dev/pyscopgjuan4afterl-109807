from rest_framework import viewsets
from home.models import Juan,Azul,Dog,Cat,Azul,Cat,Dog,Juan,Azul,Cat,Dog,Juan
from .serializers import JuanSerializer,AzulSerializer,DogSerializer,CatSerializer,AzulSerializer,CatSerializer,DogSerializer,JuanSerializer,AzulSerializer,CatSerializer,DogSerializer,JuanSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class JuanViewSet(viewsets.ModelViewSet):
    serializer_class = JuanSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Juan.objects.all()

class AzulViewSet(viewsets.ModelViewSet):
    serializer_class = AzulSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Azul.objects.all()

class DogViewSet(viewsets.ModelViewSet):
    serializer_class = DogSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Dog.objects.all()

class CatViewSet(viewsets.ModelViewSet):
    serializer_class = CatSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Cat.objects.all()
