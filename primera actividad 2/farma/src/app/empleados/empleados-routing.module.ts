import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { AgregarEmpleadosComponent } from './agregar-empleados/agregar-empleados.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  { 
    path:'',
    children:[
    {path: 'listado', component: ListadoComponent},
    {path: 'nuevo', component: NuevoComponent},
    {path: 'agregar', component: AgregarEmpleadosComponent},
    {path: '**', redirectTo:'listado'}
    ]
    
  
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
