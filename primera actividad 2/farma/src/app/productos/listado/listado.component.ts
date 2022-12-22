import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/productos.interfaces';
import { ProductoSErviceService } from '../service/producto-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  producto:Producto[] = [];

  
  constructor(private productoService:ProductoSErviceService) { }

  ngOnInit(): void {

    
    this.productoService.getProductos()
    .subscribe( productos => this.producto = productos) ;
  }

}
