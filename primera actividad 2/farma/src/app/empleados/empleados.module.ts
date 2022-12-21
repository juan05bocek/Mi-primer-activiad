import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';

/* Angular Materia*/

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
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class EmpleadosModule { }
