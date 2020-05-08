import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface iUsuario {
  nombre: string
  apellido: string
  correo: string
  contrasena: string
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  registro: FormGroup

  nombresProhibidos: string[] = ['madeinusa', 'neurona', 'amor', 'beteta']

  constructor() { }

  ngOnInit() {
    this.registro = new FormGroup({
      nombre: new FormControl(null, [Validators.required, this.validarNombreProhibido.bind(this)]),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contrasena: new FormControl(null, Validators.required)
    })
  }

  registrar(){
    const datosUsuario: iUsuario = {
      nombre: this.registro.value.nombre,
      apellido: this.registro.value.apellido,
      correo: this.registro.value.correo,
      contrasena: this.registro.value.contrasena
    }
    console.log(this.registro)
  }

  crear(){
    this.registro.patchValue({
      nombre: "Eric"
    })
  }

  reseteo(){
    this.registro.reset({
      nombre: "Eric",
      apellido: "Idrogo",
      correo: "eric@correo.com"
    })
  }

  validarNombreProhibido(control: FormControl): {[s: string]: boolean}
  {
    if(!control.value) return null
    
    const nombreIngresado = control.value.toString().toLowerCase().trim()

    if(this.nombresProhibidos.indexOf(nombreIngresado) != -1) {
      return {'nombreProhibido': true}
    }

    return null
  }



}
