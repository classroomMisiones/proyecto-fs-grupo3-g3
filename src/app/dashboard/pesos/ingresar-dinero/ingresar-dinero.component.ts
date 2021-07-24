import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-dinero',
  templateUrl: './ingresar-dinero.component.html',
  styleUrls: ['./ingresar-dinero.component.css']
})
export class IngresarDineroComponent {

  title = 'Igresar Dinero';
  mensaje='';
  registrado=false;

  ingresar(){
  this.registrado=true;  
  this.mensaje="Transferencia de dinero realizada con éxito"

  }

}
