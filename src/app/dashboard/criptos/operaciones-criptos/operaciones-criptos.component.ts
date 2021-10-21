import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import {AuthService} from 'src/app/services/auth.service';
import { operacionesmodels } from 'src/app/movimientos.models';

@Component({
  selector: 'app-operaciones-criptos',
  templateUrl: './operaciones-criptos.component.html',
  styleUrls: ['./operaciones-criptos.component.css']
})
export class OperacionesCriptosComponent implements OnInit {

  mostrar_movimientos=true;
  hoy= new Date();
  movimientos: any;
  //movimientos: operacionesmodels = new operacionesmodels();
  
  
  constructor(private cuentaService:CuentaService, private authService:AuthService) {

   }

  ngOnInit(): void {

    this.cuentaService.ObtenerUltimosMovimientos(133).subscribe(data=> {
        this.movimientos = data
        console.log(data);
      }
    );

  }

}
