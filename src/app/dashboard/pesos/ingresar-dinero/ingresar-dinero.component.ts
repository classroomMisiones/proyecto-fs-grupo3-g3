
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, MaxLengthValidator} from '@angular/forms';

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

   get cvuNovalido(){
    return this.form.get('cvu')?.invalid && this.form.get ('cvu')?.touched
    }
    get codigoNovalido(){
     return this.form.get('codigo')?.invalid && this.form.get ('codigo')?.touched
     }
   get ingresarNovalido(){
   return this.form.get('ingresar')?.invalid && this.form.get ('ingresar')?.touched
    }




   private buildForm() {
    this.form = this.formBuilder.group({
    
    cvu: ['', [Validators.required, Validators.maxLength(22)]],
    codigo: ['', [Validators.required, Validators.min(100), Validators.max(999)]],
    ingresar: ['', [Validators.required, Validators.min(100), Validators.max(50000)]],
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

// 