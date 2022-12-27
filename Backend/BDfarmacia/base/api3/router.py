from rest_framework.routers import DefaultRouter
from base.api3.views import FacturaApiViewSet

router_facturas = DefaultRouter()

router_facturas.register(prefix='factura',basename='factura',viewset=FacturaApiViewSet)