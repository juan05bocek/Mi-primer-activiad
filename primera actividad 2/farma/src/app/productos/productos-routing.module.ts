import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NuevoProductoComponent } from './nuevo-producto/nuevo-producto.component';

const routes: Routes = [
  { 
    path:'',
    children:[
    {path: 'listado', component: ListadoComponent},
    {path: 'nuevo', component: NuevoProductoComponent},
    {path: '**', redirectTo:'listado'}
    ]
    
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
