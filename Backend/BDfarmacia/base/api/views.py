from rest_framework.viewsets import ModelViewSet
from base.models import persona
from base.api.serializer import PersonaSerializer

class PersonaApiViewSet(ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = persona.objects.all()