from django.contrib.auth import get_user_model
from home.models import Juan,Azul,Dog,Cat,TestModel,TestModel2,TestModel3,TestModel4,TestData,Azul,Cat,Dog,Juan,TestData,TestModel,TestModel2,TestModel3,TestModel4
from django.http import HttpRequest
from django.utils.translation import ugettext_lazy as _
from allauth.account import app_settings as allauth_settings
from allauth.account.forms import ResetPasswordForm
from allauth.utils import email_address_exists, generate_unique_username
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from rest_framework import serializers
from rest_auth.serializers import PasswordResetSerializer


User = get_user_model()


class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'password')
        extra_kwargs = {
            'password': {
                'write_only': True,
                'style': {
                    'input_type': 'password'
                }
            },
            'email': {
                'required': True,
                'allow_blank': False,
            }
        }

    def _get_request(self):
        request = self.context.get('request')
        if request and not isinstance(request, HttpRequest) and hasattr(request, '_request'):
            request = request._request
        return request

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def create(self, validated_data):
        user = User(
            email=validated_data.get('email'),
            name=validated_data.get('name'),
            username=generate_unique_username([
                validated_data.get('name'),
                validated_data.get('email'),
                'user'
            ])
        )
        user.set_password(validated_data.get('password'))
        user.save()
        request = self._get_request()
        setup_user_email(request, user, [])
        return user

    def save(self, request=None):
        """rest_auth passes request so we must override to accept it"""
        return super().save()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'name']


class PasswordSerializer(PasswordResetSerializer):
    """Custom serializer for rest_auth to solve reset password error"""
    password_reset_form_class = ResetPasswordForm

class JuanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Juan
        fields = "__all__"

class AzulSerializer(serializers.ModelSerializer):

    class Meta:
        model = Azul
        fields = "__all__"

class DogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dog
        fields = "__all__"

class CatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cat
        fields = "__all__"

class TestModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestModel
        fields = "__all__"

class TestModel2Serializer(serializers.ModelSerializer):

    class Meta:
        model = TestModel2
        fields = "__all__"

class TestModel3Serializer(serializers.ModelSerializer):

    class Meta:
        model = TestModel3
        fields = "__all__"

class TestModel4Serializer(serializers.ModelSerializer):

    class Meta:
        model = TestModel4
        fields = "__all__"

class TestDataSerializer(serializers.ModelSerializer):

    class Meta:
        model = TestData
        fields = "__all__"
