
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

   get tarjetaNovalido(){
    return this.form.get('tarjeta')?.invalid && this.form.get ('tarjeta')?.touched
    }

   get vencimientoNovalido(){
      return this.form.get('vencimiento')?.invalid && this.form.get ('vencimiento')?.touched
    }

   get nombreNovalido(){
       return this.form.get('nombre')?.invalid && this.form.get ('nombre')?.touched
    }

    get apellidoNovalido(){
      return this.form.get('apellido')?.invalid && this.form.get ('apellido')?.touched
   }

    get codigoNovalido(){
     return this.form.get('codigo')?.invalid && this.form.get ('codigo')?.touched
     }
   get ingresarNovalido(){
   return this.form.get('ingresar')?.invalid && this.form.get ('ingresar')?.touched
    }




   private buildForm() {
    this.form = this.formBuilder.group({
    
    tarjeta: ['', [Validators.required, Validators.minLength(16),Validators.maxLength(16)]],
    vencimiento: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
    nombre: ['', [Validators.required, Validators.minLength(3),Validators.maxLength(16)]],
    apellido: ['', [Validators.required, Validators.minLength(2),Validators.maxLength(16)]],
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