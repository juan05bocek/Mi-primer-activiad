from rest_framework.serializers import ModelSerializer

from base.models import factura

class FacturaSerializaer(ModelSerializer):
    class Meta:
        model = factura
        fields = ['id', 'fecha','empleado','productos']