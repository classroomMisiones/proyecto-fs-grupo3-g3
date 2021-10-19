import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioModels } from 'src/app/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  usuario: UsuarioModels = new UsuarioModels();
  error: string="";

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group(
      {
        email:['', [Validators.required, Validators.email]],  
        password:['',[Validators.required, Validators.minLength(8)]]
       
      }
    )

   }

   get emailNovalido(){
    return this.form.get('email')?.invalid && this.form.get ('email')?.touched
 }

 get passwordNovalido(){
  return this.form.get('password')?.invalid && this.form.get ('password')?.touched
}


   ngOnInit(): void {
  }

}
