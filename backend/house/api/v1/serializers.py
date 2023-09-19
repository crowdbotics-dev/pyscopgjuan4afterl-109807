from rest_framework import serializers
from house.models import Mojo,Mojo

class MojoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mojo
        fields = "__all__"