import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup } from '@angular/forms'



@Component({
  selector: 'app-transferir-dinero',
  templateUrl: './transferir-dinero.component.html',
  styleUrls: ['./transferir-dinero.component.css']
})
export class TransferirDineroComponent implements OnInit {


  createFormGroup() {
    return new FormGroup ({
      destino: new FormControl('',[Validators.required, Validators.minLength(22), Validators.maxLength(22)]),
      moneda: new FormControl('',[Validators.required]),
      monto: new FormControl('',[Validators.required, Validators.min(1)]),
      concepto: new FormControl('',[Validators.required]),
    });
  }

  formulario: FormGroup;

  constructor() {
    this.formulario = this.createFormGroup();
  }

  ngOnInit(): void {
  }


  verificar() {
    if (this.formulario.valid) {
        console.log('saved form');
    }
  }
  get destino() { return this.formulario.get('destino'); } 
  get moneda() { return this.formulario.get('moneda'); } 
  get monto() { return this.formulario.get('monto'); } 
  get concepto() { return this.formulario.get('concepto'); } 
  get referencia() { return this.formulario.get('referencia'); } 

}
