import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Empleado } from '../interfacez/interfacez.listado';
import { EmpleadoServiceService } from '../service/empleado-service.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoempleado: Empleado = {
    id: 0,
    nombre : '',
    apellido : '',
    fecha_nacimiento : '',
    telefono : 0,
    direccion : '',
    dni : '',
    fecha_ingreso : '',
    puesto : '',
    antiguedad: '',
    sueldo: 0
  }
  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoServiceService,
              private activarouter: ActivatedRoute,
              private router: Router) { }

  
  
  ngOnInit(): void {
    this.activarouter.params
    .pipe(
      switchMap( ({id}) => this.empleadoService.get1Empleado(id))
    )
    .subscribe( empleado => this.nuevoempleado = empleado);
  }
  

    guardar(){
      
      console.log(this.nuevoempleado);
      this.empleadoService.newEmpleado(this.nuevoempleado)
      .subscribe(resp =>{
        console.log('Respuesta', resp);

        this.router.navigate(['/empleados/listado']);
      })
    };

    

    
  }
  

