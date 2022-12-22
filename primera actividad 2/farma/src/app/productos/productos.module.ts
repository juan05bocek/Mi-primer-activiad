import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoComponent } from './listado/listado.component';

/* Modulos de material */
import {MatCardModule} from '@angular/material/card';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

@NgModule({
  declarations: [
    ListadoComponent,
    NuevoProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatCardModule
  ]
})
export class ProductosModule { }
