import { Component, OnInit,NgModule } from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Empleado } from '../interface/empleado.interface';
@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
})
export class ListadoEmpleadoComponent implements OnInit {

  empleado: Empleado[] =[];

  termino: string = 'buscar un nombre';

  constructor(private empleadoService: EmpleadosService ) { }

  ngOnInit(): void {
    this.empleadoService.getEmpleado()
    .subscribe(empleados => {
      console.log(empleados)
      this.empleado = empleados;
    });
  }

}
  

