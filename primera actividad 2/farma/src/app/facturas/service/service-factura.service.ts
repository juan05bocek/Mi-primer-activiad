import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceFacturaService {

  constructor(private http: HttpClient) { }

  getEmpleados():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api/persona');
  }

  getProductos():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api2/producto');
  }

  getFacturas():Observable<any[]>{
    return this.http.get<any[]>('http://127.0.0.1:8000/api3facturas/factura');
  }

}
