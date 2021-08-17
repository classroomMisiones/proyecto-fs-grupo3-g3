
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

   get usuarioNovalido(){
    return this.form.get('usuario')?.invalid && this.form.get ('usuario')?.touched
  }
   get cvuNovalido(){
   return this.form.get('cvu')?.invalid && this.form.get ('cvu')?.touched
   }
  get ingresarNovalido(){
  return this.form.get('ingresar')?.invalid && this.form.get ('ingresar')?.touched
   }



 private buildForm() {
 this.form = this.formBuilder.group({
 usuario: ['', [Validators.required,Validators.pattern ('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
 cvu: ['', [Validators.required, Validators.maxLength(22)]],
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