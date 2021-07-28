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


 private buildForm() {
 this.form = this.formBuilder.group({
 ingreso: ['', [Validators.required]],
 transferencia: ['', [Validators.required, Validators.maxLength(80)]],
 saldo: ['', [Validators.required]],
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