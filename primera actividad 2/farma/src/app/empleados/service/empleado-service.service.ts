import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../interfacez/interfacez.listado';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoServiceService {

  
  
  constructor(private http: HttpClient) { }

  getEmpleado():Observable<Empleado[]> {   
    return this.http.get<Empleado[]>('http://127.0.0.1:8000/api/persona/')
  }

  newEmpleado(nombre: string , apellido:string, nacimiento: string, telefono:number, direccion:string, dni:number, puesto:string, antiguedad:number, sueldo: number|string ){
    
    const url = 'http://127.0.0.1:8000/api/persona/';
    const body = {nombre,apellido,nacimiento, telefono, direccion, dni, puesto, antiguedad, sueldo};
    return this.http.post<Empleado>(url, body);
  }
}
