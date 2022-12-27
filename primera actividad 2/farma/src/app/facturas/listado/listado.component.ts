import { Component, OnInit } from '@angular/core';
import { ServiceFacturaService } from '../service/service-factura.service';
import { forkJoin, Observable } from 'rxjs';



@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
 
 

  item: string[] = ['A','B','C','D'];
  data: Observable<any[]>[] = [];
  constructor(private service: ServiceFacturaService) { }

  ngOnInit(): void {
    this.data.push(this.service.getEmpleados());
    this.data.push(this.service.getProductos());
    this.data.push(this.service.getFacturas())

    forkJoin(this.data).subscribe(item=>{
      console.log('empleados');
      console.log(JSON.stringify(item[0]));

      console.log('productos');
      console.log(JSON.stringify(item[1]));
    
      console.log('facturas');
      console.log(JSON.stringify(item[2]));
    })
  }

}
