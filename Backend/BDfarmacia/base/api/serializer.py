from rest_framework.serializers import ModelSerializer
from base.models import persona


class PersonaSerializer(ModelSerializer):
    class Meta:
        model = persona
        fields = ['id','nombre','apellido','fecha_nacimiento','telefono','direccion','dni','puesto', 'fecha_ingreso', 'antiguedad','sueldo']

