import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CentralComponent } from './home/central/central.component';
import { RegistroComponent } from './home/registro/registro.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: CentralComponent, pathMatch: 'full' },

  { path: 'registro', component: RegistroComponent },

  {path: 'aboutus', component: AboutusComponent},

  {path: 'cotizaciones', component: CotizacionesComponent}

];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
