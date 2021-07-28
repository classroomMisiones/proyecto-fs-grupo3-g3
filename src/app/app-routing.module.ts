import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CentralComponent } from './home/central/central.component';
import { RegistroComponent } from './home/registro/registro.component';
import { TransferirDineroComponent } from './dashboard/pesos/transferir-dinero/transferir-dinero.component';
import { ComprarCriptosComponent } from './dashboard/criptos/comprar-criptos/comprar-criptos.component';
import { ConsultaSaldoComponent } from './dashboard/pesos/consulta-saldo/consulta-saldo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: CentralComponent, pathMatch: 'full' },

  { path: 'registro', component: RegistroComponent },
  { path: 'transferir', component: TransferirDineroComponent },

  { path: 'comprar', component: ComprarCriptosComponent },


{path: 'consultasaldo',
component:ConsultaSaldoComponent,
},

{path: 'dashboard',
component:DashboardComponent,
},

{path: 'sidebar',
component:SidebarComponent,},

  

  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
