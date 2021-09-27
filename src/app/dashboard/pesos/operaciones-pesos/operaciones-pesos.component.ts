import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-operaciones-pesos',
  templateUrl: './operaciones-pesos.component.html',
  styleUrls: ['./operaciones-pesos.component.css']
})
export class OperacionesPesosComponent{
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder 
    ){
   this.buildForm();
   };
   get cvuNovalido(){
    return this.form.get('cvu')?.invalid && this.form.get ('cvu')?.touched
    }

 private buildForm() {
 this.form = this.formBuilder.group({
 cvu: ['', [Validators.required, Validators.minLength(22),Validators.maxLength(22)]],
 saldo: ['',],

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