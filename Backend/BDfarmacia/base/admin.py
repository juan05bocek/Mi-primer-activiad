from django.contrib import admin
from .models import persona
from .models import producto
from .models import factura

# Register your models here.

@admin.register(persona)
class PersonaAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre','apellido','fecha_nacimiento','telefono','direccion','dni','puesto','antiguedad','sueldo']



@admin.register(producto)
class ProductoAdmin(admin.ModelAdmin):
    list_display = ['nombre','codigo_barra','descripcion','precio','imagen']


@admin.register(factura)
class FacturaAdmin(admin.ModelAdmin):
    list_display = ['fecha','empleado','productos']

