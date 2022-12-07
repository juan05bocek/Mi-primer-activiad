import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado.interface';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  
  constructor(private http: HttpClient) { }

  buscarEmpleado():(Observable<Empleado[]>){   
    return this.http.get<Empleado[]>('http://127.0.0.1:8000/api/persona/')
  }

  

}
