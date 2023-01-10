from django.template import Template, Context
from django.http import HttpResponse
# Create your views here.

def Empleados(resquet):
    
    doc_externo=open("C:/Users/Bocek Juan Ramon/Desktop/Primera actividad/Backend/BDfarmacia/base/html/plantilla_Empleados.html")
    plt=Template(doc_externo.read())

    doc_externo.close()

    ctx=Context()

    Empleados=plt.render(ctx)
    

    return HttpResponse(Empleados)