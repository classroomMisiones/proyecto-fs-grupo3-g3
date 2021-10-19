import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator} from '@angular/forms';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  form!: FormGroup;
  constructor(private formBuilder: FormBuilder 
    ){
    this.buildForm();
   };
   get usernameNovalido(){
    return this.form.get('username')?.invalid && this.form.get ('username')?.touched
 }

   get nombreNovalido(){
    return this.form.get('nombre')?.invalid && this.form.get ('nombre')?.touched
 }

 get apellidoNovalido(){
  return this.form.get('apellido')?.invalid && this.form.get ('apellido')?.touched
}

get emailNovalido(){
  return this.form.get('email')?.invalid && this.form.get ('email')?.touched
}

get dniNovalido(){
  return this.form.get('dni')?.invalid && this.form.get ('dni')?.touched
}

get localidadNovalido(){
  return this.form.get('localidad')?.invalid && this.form.get ('localidad')?.touched
}

get telefonoNovalido(){
  return this.form.get('telefono')?.invalid && this.form.get ('telefono')?.touched
}

get fechaNovalido(){
  return this.form.get('fecha')?.invalid && this.form.get ('telefono')?.touched
}


get password1Novalido(){
  return this.form.get('password1')?.invalid && this.form.get ('password1')?.touched
}

 get password2Novalido(){
   return this.form.get('password2')?.invalid && this.form.get ('password2')?.touched
 }

   private buildForm() {
    this.form = this.formBuilder.group({

    username: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    apellido: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    email: ['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")],
    dni: ['', [Validators.required,Validators.maxLength(8)]],
    localidad: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    telefono: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    fecha: ['', [Validators.required, Validators.minLength(9)]],
    password1:['',[Validators.required]],
    password2:['',[Validators.required]],
     });
  
   }

   save(event: Event) {
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);
    }
  }
   
}
