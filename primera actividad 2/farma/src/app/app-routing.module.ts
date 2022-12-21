import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosModule } from './empleados/empleados.module';

const routes: Routes = [
  
  {
    path:'empleados',
    loadChildren: ()=> import('./empleados/empleados.module').then( m => m.EmpleadosModule),
  },
  {
    path:'productos',
    loadChildren: ()=> import('./productos/productos.module').then( m => m.ProductosModule),
  },
  {
    path: '**',
    redirectTo: 'productos'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
