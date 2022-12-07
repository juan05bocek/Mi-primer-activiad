import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './shared/menu/menu.component';

const routes: Routes = [

  {
    path:'farma',
    loadChildren: ()=> import('./farma/farma-routing.module').then( m => m.FarmaRoutingModule),
  },
  {
    path: '**',
    redirectTo: 'farma'
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
