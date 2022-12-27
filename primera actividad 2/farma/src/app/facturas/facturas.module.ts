import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturasRoutingModule } from './facturas-routing.module';
import { ListadoComponent } from './listado/listado.component';

import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ListadoComponent
  ],
  imports: [
    CommonModule,
    FacturasRoutingModule,
    MatTableModule

  ]
})
export class FacturasModule { }
