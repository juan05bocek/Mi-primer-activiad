from rest_framework.routers import DefaultRouter
from base.api2.views import ProductoApiViewSet

router_producto = DefaultRouter()

router_producto.register(prefix='producto', basename='producto',viewset=ProductoApiViewSet)