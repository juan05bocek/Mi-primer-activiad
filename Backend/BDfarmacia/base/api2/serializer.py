from rest_framework.serializers import ModelSerializer

from base.models import producto


class ProductoSerializer(ModelSerializer):
    class Meta:
        model = producto
        fields = ['id','nombre','codigo_barra','descripcion','precio','imagen']