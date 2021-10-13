import { Component, OnInit } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
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

    const imgsrc1 =  document.getElementById('imgmoneda') as HTMLImageElement;
    imgsrc1.src = 'assets/monedas/blank.png';

  }


  verificar() {
    if (this.formulario.valid) {
        console.log('saved form');
    }
  }
  get moneda() { return this.formulario.get('moneda'); } 
  get monto() { return this.formulario.get('monto'); } 
  get selectmoneda() { return this.formulario.get('selectmoneda'); } 






  CambiaIcono() {
    // var num = $(this).val();
    const selmon = document.getElementById('selectmoneda') as HTMLSelectElement;
    var num = Number(selmon.options[selmon.selectedIndex].value);
    var valor = "";
    const imgsrc =  document.getElementById('imgmoneda') as HTMLImageElement;
    // var mysource = imgsrc.options[imgsrc.selectedIndex].value 
    //"assets/monedas/blank.png"

    if (num == 1) {
      valor = "assets/monedas/peso_bn.png";
      console.log('El img mostraría ', valor);
    }
    if (num == 2) {
      valor = "assets/monedas/bitcoin_bn.png";
      console.log('El img mostraría ', valor);
    }
    if (num == 3) {
      valor = "assets/monedas/ethereum_bn.png";
      console.log('El img mostraría ', valor);
    }
    if (num == 4) {
      valor = "assets/monedas/dogecoin_bn.png";
      console.log('El img mostraría ', valor);
    }
    if (num == 5) {
      valor = "assets/monedas/monero_bn.png";
      console.log('El img mostraría ', valor);
    }

    imgsrc.src = valor;
    
    // imageSrc = valor;

    //const imgmon = document.getElementById('imgmoneda') as HTMLSelectElement;
    

    //this.mySource = "/maybeAssets/funnyCats.png";

    // $("#imgmoneda").prop("src", "assets/monedas/" + valor);
  }





}