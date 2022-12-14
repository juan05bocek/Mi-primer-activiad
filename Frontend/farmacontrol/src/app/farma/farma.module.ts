import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmaRoutingModule } from './farma-routing.module';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoEmpleadoComponent,
    ListaProductosComponent,
    ListaFacturasComponent,
  ],
  imports: [
    CommonModule,
    FarmaRoutingModule,
    RouterModule,
    SharedModule,
    FormsModule,
    NgModule
  ],
  exports:[
    FarmaRoutingModule,
    CommonModule
  ]
})
export class FarmaModule { }
