import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface iUsuario {
  nombre: string,
  apellido: string,
  correo: string,
  contrasena: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") registro: NgForm //alias de tipo NgForm

  registrar() {
    const datosUsuario: iUsuario = {
        nombre: this.registro.value.nombre, //hace referencia al valor del atributo name del formulario
        apellido: this.registro.value.apellido, 
        correo: this.registro.value.correo, 
        contrasena: this.registro.value.contrasena
    }

    console.log(this.registro)
  }
}
