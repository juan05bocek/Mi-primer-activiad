import { Component, OnInit} from '@angular/core';
import { EmpleadosService } from '../service/empleados.service';
import { Empleado } from '../interface/empleado.interface';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-listado-empleado',
  templateUrl: './listado-empleado.component.html',
})
export class ListadoEmpleadoComponent implements OnInit {

  

  

  constructor(private empleadoService: EmpleadosService,
              private HttpClient: HttpClientModule ) { }




  ngOnInit(): void {}
  

 
}
  

