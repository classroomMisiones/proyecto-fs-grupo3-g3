import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup } from '@angular/forms'



@Component({
  selector: 'app-comprar-criptos',
  templateUrl: './comprar-criptos.component.html',
  styleUrls: ['./comprar-criptos.component.css']
})
export class ComprarCriptosComponent implements OnInit {


  createFormGroup() {
    return new FormGroup ({
      moneda: new FormControl('',[Validators.required]),
      monto: new FormControl('',[Validators.required, Validators.min(1)]),
      selectmoneda: new FormControl('',[Validators.required]),
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
  get moneda() { return this.formulario.get('moneda'); } 
  get monto() { return this.formulario.get('monto'); } 
  get selectmoneda() { return this.formulario.get('selectmoneda'); } 

}
