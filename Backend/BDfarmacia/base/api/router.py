from rest_framework.routers import DefaultRouter
from base.api.views import PersonaApiViewSet

router_perosna = DefaultRouter()

router_perosna.register(prefix='persona', basename='persona', viewset=PersonaApiViewSet)