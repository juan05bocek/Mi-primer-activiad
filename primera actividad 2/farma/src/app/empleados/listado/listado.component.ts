import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { Empleado } from '../interfacez/interfacez.listado';
import { EmpleadoServiceService } from '../service/empleado-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  empleados: Empleado[] = [];

  constructor(private empleadoService: EmpleadoServiceService,
              private router: Router)
              { }

    ngOnInit(): void {
    this.empleadoService.getEmpleado()
    .subscribe( empleados => this.empleados = empleados);
    }

  
   nuevo(){
    this.router.navigate(['/empleados/nuevo']);
   }

}
