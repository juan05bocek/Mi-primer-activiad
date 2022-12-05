import { Component} from '@angular/core';


interface Menuitem {
  texto: string;
  ruta: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {

  farmaMenu: Menuitem[] = [
    {
      texto: 'Productos',
      ruta: './farma/productos',
    },
    {
      texto: 'Empleados',
      ruta: './farma/empleados',
    },{
      texto: 'Facturas',
      ruta: './farma/facturas',
    },
  ]

}
