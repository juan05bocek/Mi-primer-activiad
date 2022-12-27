from rest_framework.viewsets import ModelViewSet

from base.models import factura
from base.api3.serializer import FacturaSerializaer


class FacturaApiViewSet(ModelViewSet):
    serializer_class = FacturaSerializaer
    queryset = factura.objects.all()