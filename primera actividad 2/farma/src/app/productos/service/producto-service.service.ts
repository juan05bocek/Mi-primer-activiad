import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/productos.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductoSErviceService {

  constructor(private http:HttpClient) { }

  getProductos(): Observable<Producto>{
    return this.http.get<Producto>('http://127.0.0.1:8000/api2/producto/')
  }

}
