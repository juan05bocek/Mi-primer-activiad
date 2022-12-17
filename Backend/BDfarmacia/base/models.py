from django.db import models

# Create your models here.
class persona(models.Model):
    nombre = models.CharField(max_length=20)
    apellido = models.CharField(max_length=20)
    fecha_nacimiento = models.CharField(max_length=10)
    telefono = models.CharField(max_length=12)
    direccion = models.TextField()
    dni = models.CharField(max_length=10)
    puesto = models.CharField(max_length=20)
    fecha_ingreso = models.CharField(max_length=10)
    antiguedad = models.CharField(max_length=20)
    sueldo = models.CharField(max_length=10)



class producto(models.Model):
    nombre =  models.CharField(max_length=20)
    codigo_barra = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=100)
    precio = models.CharField(max_length=9)
    imagen = models.ImageField(upload_to='base/media')

class factura(models.Model):
    fecha = models.CharField(max_length=10)
    empleado = models.ForeignKey(persona, on_delete=models.CASCADE)
    productos = models.ForeignKey(producto, on_delete=models.CASCADE)
