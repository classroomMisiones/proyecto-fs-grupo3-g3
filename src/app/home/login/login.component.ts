import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Login.models';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  usuario: LoginRequest = new LoginRequest();
  error: string="";

  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router){
   this.buildForm();
   };

   ngOnInit(): void {
  }

   get UserNameNovalido(){
    return this.form.get('UserName')?.invalid && this.form.get ('UserName')?.touched
    }

   get passwordNovalido(){
   return this.form.get('password')?.invalid && this.form.get ('password')?.touched
   }

   private buildForm() {
    this.form = this.formBuilder.group({
      UserName:['', Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")], 
      password:['',[Validators.required, Validators.minLength(6)]]
   
     });
    }
    // save(event: Event) {
    //   event.preventDefault();
    //   if(this.form.valid){
    //     const value = this.form.value;
    //     console.log(value);
    //   }
    // }
    save(event: Event, usuario: LoginRequest)
    {
      event.preventDefault(); //Cancela la funcionalidad por default.
      if (this.form.valid)
      {
        console.log(this.form.value); //se puede enviar al servidor...
        this.authService.login(this.usuario)
        .subscribe(
          data => {
          console.log("DATA"+ JSON.stringify( data));
          //localStorage.setItem('auth-token', JSON.stringify(data ));
  
          this.router.navigate(['/dashboard']);
         
          },
          error => {
           this.error = error;
          }
        );
      }
      else
      {
        this.form.markAllAsTouched(); //Activa todas las validaciones
      }
    }
    



  }







  





