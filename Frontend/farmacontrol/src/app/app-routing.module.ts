import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'listado',
    loadChildren: ()=> import('./farma/farma-routing.module').then( m => m.FarmaRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'listado'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
