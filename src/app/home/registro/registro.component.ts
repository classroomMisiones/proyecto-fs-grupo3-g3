import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator, NgForm} from '@angular/forms';
import { UsuarioModels } from 'src/app/usuario.models';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  form!: FormGroup;
 
  usuario: UsuarioModels = new UsuarioModels();

  ngOnInit(): void {
 
 this.usuario.Email="gustavomisio@yahoo.com.ar"

  }
  

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuarioService, private router: Router){
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

get Fecha_NacNovalido(){
  return this.form.get('Fecha_Nac')?.invalid && this.form.get ('Fecha_Nac')?.touched
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
    Fecha_Nac: ['', [Validators.required, Validators.minLength(9)]],
    password1:['',[Validators.required]],
    password2:['',[Validators.required]],
     });
  
   }
  

      save(event: Event, usuario:UsuarioModels):void { //en el la profe dice void
       event.preventDefault();
       
    if (this.form.valid)
    {
      console.log(usuario);
      this.usuarioService.onCrearRegistro(usuario).subscribe(
        data => {
          console.log(data);
          if (data['ID_usuario']>0)
          {
            alert("El registro ha sido creado satisfactoriamente. A continuación, por favor Inicie Sesión.");
            this.router.navigate(['/login'])
          }
      })
  }
  else
  {
    this.form.markAllAsTouched(); 
  }
};
   
}
