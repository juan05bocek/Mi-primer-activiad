import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'listadoempleado',
    loadChildren: ()=> import('./farma/farma-routing.module').then( m => m.FarmaRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'listadoempleado'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
