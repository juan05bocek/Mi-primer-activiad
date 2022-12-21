import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ]
})
export class ProductosModule { }
