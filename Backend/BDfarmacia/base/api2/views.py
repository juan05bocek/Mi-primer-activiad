from rest_framework.viewsets import ModelViewSet

from base.models import producto
from base.api2.serializer import ProductoSerializer



class ProductoApiViewSet(ModelViewSet):
    serializer_class = ProductoSerializer
    queryset = producto.objects.all()