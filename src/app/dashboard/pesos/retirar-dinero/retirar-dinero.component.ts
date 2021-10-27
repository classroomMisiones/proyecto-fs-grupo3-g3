import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-retirar-dinero',
  templateUrl: './retirar-dinero.component.html',
  styleUrls: ['./retirar-dinero.component.css']
})
export class RetirarDineroComponent {
   form!: FormGroup;

   constructor(private formBuilder: FormBuilder 
     ){
    this.buildForm();
   };

    get cvuNovalido(){
    return this.form.get('cvu')?.invalid && this.form.get ('cvu')?.touched
    }
   get retirarNovalido(){
   return this.form.get('retirar')?.invalid && this.form.get ('retirar')?.touched
   }
   
  //  get saldoNovalido(){
  //   return this.form.get('usuario')?.invalid && this.form.get ('usuario')?.touched
  // }



  private buildForm() {
  this.form = this.formBuilder.group({
  
  cvu: ['', [Validators.required, Validators.minLength(22),Validators.maxLength(22)]],
  retirar: ['', [Validators.required, Validators.min(100), Validators.max(50000)]],
  Saldo:['',],
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

// usuario: ['', [Validators.required,Validators.pattern ('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],