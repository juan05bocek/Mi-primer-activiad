import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NuevoComponent } from './nuevo/nuevo.component';


@NgModule({
  declarations: [
    ListadoComponent,
    AgregarEmpleadosComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmpleadosModule { }
