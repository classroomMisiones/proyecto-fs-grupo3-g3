import { Component } from '@angular/core';
import { ServicioModeloService } from './servicio-modelo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ewallet-g3';

  constructor(private MiServicio:ServicioModeloService){}

  
}

