import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from '../shared/menu/menu.component';
import { ListaFacturasComponent } from './lista-facturas/lista-facturas.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListadoEmpleadoComponent } from './listado-empleado/listado-empleado.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    
    children: [ 
      { path: 'empleados', component: ListadoEmpleadoComponent },
      { path: 'productos', component: ListaProductosComponent  },
      { path: 'facturas', component: ListaFacturasComponent},
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaRoutingModule { }
