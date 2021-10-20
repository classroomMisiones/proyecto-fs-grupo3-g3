import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest } from 'src/app/Login.models';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  form!: FormGroup;
  usuario: LoginRequest = new LoginRequest();
  error: string="";

  constructor(private formBuilder: FormBuilder 
    ){
   this.buildForm();
   };


   get UserNameNovalido(){
    return this.form.get('UserName')?.invalid && this.form.get ('UserName')?.touched
    }

   get passwordNovalido(){
   return this.form.get('password')?.invalid && this.form.get ('password')?.touched
   }

   private buildForm() {
    this.form = this.formBuilder.group({
      UserName:['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")], 
      password:['',[Validators.required, Validators.minLength(8)]]
   
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







  





