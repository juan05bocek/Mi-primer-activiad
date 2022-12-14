import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  miFormulario:FormGroup = this.fb.group({
    nombre    : ['', [Validators.required, Validators.minLength(3)],],
    apellido  : ['', [Validators.required, Validators.minLength(3)],],
    nacimiento: ['', [Validators.required],],
    telefono  : ['', [Validators.required, Validators.minLength(10)],],
    direccion : ['',Validators.required, ,],
    dni       : ['',[Validators.required, Validators.minLength(8)],],
    puesto    : ['',Validators.required,],
    antiguedad: ['',Validators.required,],
    sueldo    : ['',[Validators.required, Validators.min(0)],]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(){
    if (this.miFormulario.invalid){
      return;
    }

    console.log(this.miFormulario.value);
  }

}
