import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormControl, Validators, FormGroup } from '@angular/forms';

declare var showhidesidebar: any;

@Component({
  selector: 'app-vender-criptos',
  templateUrl: './vender-criptos.component.html',
  styleUrls: ['./vender-criptos.component.css']
})
export class VenderCriptosComponent implements OnInit {
  instanceLib: any;

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
/*     console.log("hola");
    this.instanceLib = showhidesidebar(); */
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