import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CentralComponent } from './home/central/central.component';
import { RegistroComponent } from './home/registro/registro.component';
import { TransferirDineroComponent } from './dashboard/pesos/transferir-dinero/transferir-dinero.component';
import { ComprarCriptosComponent } from './dashboard/criptos/comprar-criptos/comprar-criptos.component';
import { ConsultaSaldoComponent } from './dashboard/pesos/consulta-saldo/consulta-saldo.component';
import { ComisionesVigentesComponent } from './dashboard/criptos/comisiones-vigentes/comisiones-vigentes.component';


const routes: Routes = [
  {path: 'login',
  component:LoginComponent,},

  {path:'',
  component:CentralComponent,
  pathMatch: 'full'},

  {path: 'registro',
  component:RegistroComponent,

},
  {path: 'transferir',
  component:TransferirDineroComponent,
},

{path: 'comprar',
component:ComprarCriptosComponent,
},

{path: 'consultasaldo',
component:ConsultaSaldoComponent,
},


{path:'comisionesvigentes',
component:ComisionesVigentesComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
