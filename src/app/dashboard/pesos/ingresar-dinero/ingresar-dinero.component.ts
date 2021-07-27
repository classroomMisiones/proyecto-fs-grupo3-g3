
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

  @Component({
    selector: 'app-ingresar-dinero',
    templateUrl: './ingresar-dinero.component.html',
    styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent{
   form!: FormGroup;

  constructor(private formBuilder: FormBuilder 
    ){
   this.buildForm();
   };


 private buildForm() {
 this.form = this.formBuilder.group({
 usuario: ['', [Validators.required]],
 cvu: ['', [Validators.required, Validators.maxLength(80)]],
 ingresar: ['', [Validators.required]],
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