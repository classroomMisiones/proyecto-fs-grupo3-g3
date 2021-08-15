import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComisionesVigentesComponent } from './criptos/comisiones-vigentes/comisiones-vigentes.component';
import { ComprarCriptosComponent } from './criptos/comprar-criptos/comprar-criptos.component';
import { OperacionesCriptosComponent } from './criptos/operaciones-criptos/operaciones-criptos.component';
import { VenderCriptosComponent } from './criptos/vender-criptos/vender-criptos.component';
import { ConsultaSaldoComponent } from './pesos/consulta-saldo/consulta-saldo.component';
import { IngresarDineroComponent } from './pesos/ingresar-dinero/ingresar-dinero.component';
import { OperacionesPesosComponent } from './pesos/operaciones-pesos/operaciones-pesos.component';
import { RetirarDineroComponent } from './pesos/retirar-dinero/retirar-dinero.component';
import { TransferirDineroComponent } from './pesos/transferir-dinero/transferir-dinero.component';
import { PrincipalComponent } from './principal/principal.component';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
    
    {path: 'dashboard', component: DashboardComponent, 
        children: [

            {path: '', component: PrincipalComponent},        
            {path: 'comisiones', component: ComisionesVigentesComponent},
            {path: 'opcripto', component:OperacionesCriptosComponent},        
            {path: 'vender', component:VenderCriptosComponent},        
            {path: 'ingresardinero', component: IngresarDineroComponent},        
            {path: 'oppesos', component: OperacionesPesosComponent},        
            {path: 'retirar', component: RetirarDineroComponent},        
            {path: 'transferir', component: TransferirDineroComponent},        
            {path: 'comprar', component: ComprarCriptosComponent},        
            {path: 'consultasaldo', component: ConsultaSaldoComponent},        
            {path: 'sidebar', component: SidebarComponent},

        ]
    },

    
  ];  


@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class DashboardRoutingModule {}
  