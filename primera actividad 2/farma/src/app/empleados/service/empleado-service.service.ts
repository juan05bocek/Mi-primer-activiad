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

  get1Empleado(id: number):Observable<Empleado>{
    return this.http.get<Empleado>(`http://127.0.0.1:8000/api/persona/${id}`);
  }

  newEmpleado(empleado: Empleado): Observable<Empleado>{    
    return this.http.post<Empleado>('http://127.0.0.1:8000/api/persona/', empleado);
  }

  updateEmpleado(empleado: Empleado):Observable<Empleado>{
    return this.http.put<Empleado>('http://127.0.0.1:8000/api/persona/', empleado);
  }

  borrarEmpleado(id:number):Observable<any>{
    return this.http.delete<any>(`http://127.0.0.1:8000/api/persona/${id}`);
  }

  buscarEmpleado(termino:string){
    const url = `http://127.0.0.1:8000/api/persona/?nombre=${termino}`;
    return this.http.get(url);
  }
}
