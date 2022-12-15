import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Empleado } from '../interfacez/interfacez.listado';
import { EmpleadoServiceService } from '../service/empleado-service.service';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  nuevoempleado: Empleado = {
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
              private activarouter: ActivatedRoute) { }

  
  
  ngOnInit(): void {
    this.editar();
  }
  

    guardar(){
      
      console.log(this.nuevoempleado);
      this.empleadoService.newEmpleado(this.nuevoempleado)
      .subscribe(resp =>{
        console.log('Respuesta', resp);
      })
    };

    editar():void{
      this.activarouter.params
        .subscribe(
          resp =>{
            let id=resp['id'];
            if(id){
              this.empleadoService.get1Empleado(id).subscribe(
                resp=> this.nuevoempleado=resp
              )
            }
          }
        )
    }
   
    
  }
  

