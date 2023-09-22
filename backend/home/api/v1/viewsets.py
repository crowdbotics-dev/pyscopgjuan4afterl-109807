from rest_framework import viewsets
from home.models import Juan,Azul,Dog,Cat,TestModel,TestModel2,TestModel3,TestModel4,Azul,Cat,Dog,Juan,TestModel,TestModel2,TestModel3,TestModel4,Azul,Cat,Dog,Juan,TestModel,TestModel2,TestModel3,TestModel4
from .serializers import JuanSerializer,AzulSerializer,DogSerializer,CatSerializer,TestModelSerializer,TestModel2Serializer,TestModel3Serializer,TestModel4Serializer,AzulSerializer,CatSerializer,DogSerializer,JuanSerializer,TestModelSerializer,TestModel2Serializer,TestModel3Serializer,TestModel4Serializer,AzulSerializer,CatSerializer,DogSerializer,JuanSerializer,TestModelSerializer,TestModel2Serializer,TestModel3Serializer,TestModel4Serializer
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

class TestModelViewSet(viewsets.ModelViewSet):
    serializer_class = TestModelSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModel.objects.all()

class TestModel2ViewSet(viewsets.ModelViewSet):
    serializer_class = TestModel2Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModel2.objects.all()

class TestModel3ViewSet(viewsets.ModelViewSet):
    serializer_class = TestModel3Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModel3.objects.all()

class TestModel4ViewSet(viewsets.ModelViewSet):
    serializer_class = TestModel4Serializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = TestModel4.objects.all()
