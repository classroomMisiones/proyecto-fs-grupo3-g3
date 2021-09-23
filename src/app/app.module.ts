import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { CentralComponent } from './home/central/central.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { PrincipalComponent } from './dashboard/principal/principal.component';
import { PesosComponent } from './dashboard/pesos/pesos.component';
import { CriptosComponent } from './dashboard/criptos/criptos.component';

import { IngresarDineroComponent,} from './dashboard/pesos/ingresar-dinero/ingresar-dinero.component';
import { RetirarDineroComponent } from './dashboard/pesos/retirar-dinero/retirar-dinero.component';
import { TransferirDineroComponent } from './dashboard/pesos/transferir-dinero/transferir-dinero.component';
import { OperacionesPesosComponent } from './dashboard/pesos/operaciones-pesos/operaciones-pesos.component';


import { ComisionesVigentesComponent } from './dashboard/criptos/comisiones-vigentes/comisiones-vigentes.component';
import { OperacionesCriptosComponent } from './dashboard/criptos/operaciones-criptos/operaciones-criptos.component';
import { LoginComponent } from './home/login/login.component';
import { RegistroComponent } from './home/registro/registro.component';
import { DashboardRoutingModule } from './dashboard/dashboard.routing';
import { ComprarCriptosComponent } from './dashboard/criptos/comprar-criptos/comprar-criptos.component';
import { VenderCriptosComponent } from './dashboard/criptos/vender-criptos/vender-criptos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    CentralComponent,
    FooterComponent,
    SidebarComponent,
    PrincipalComponent,
    PesosComponent,
    CriptosComponent,
    ComprarCriptosComponent,
    IngresarDineroComponent,
    RetirarDineroComponent,
    TransferirDineroComponent,
    OperacionesPesosComponent,
    ComisionesVigentesComponent,
    OperacionesCriptosComponent,
    LoginComponent,
    RegistroComponent,
    VenderCriptosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
