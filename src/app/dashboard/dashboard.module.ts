import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ComisionesVigentesComponent } from "./criptos/comisiones-vigentes/comisiones-vigentes.component";
import { ComprarCriptosComponent } from "./criptos/comprar-criptos/comprar-criptos.component";
import { OperacionesCriptosComponent } from "./criptos/operaciones-criptos/operaciones-criptos.component";
import { VenderCriptosComponent } from "./criptos/vender-criptos/vender-criptos.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing";
import { ConsultaSaldoComponent } from "./pesos/consulta-saldo/consulta-saldo.component";
import { IngresarDineroComponent } from "./pesos/ingresar-dinero/ingresar-dinero.component";
import { RetirarDineroComponent } from "./pesos/retirar-dinero/retirar-dinero.component";
import { TransferirDineroComponent } from "./pesos/transferir-dinero/transferir-dinero.component";
import { PrincipalComponent } from "./principal/principal.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        DashboardRoutingModule
    ],
    exports: [
        /* ComisionesVigentesComponent,
        ComprarCriptosComponent,
        OperacionesCriptosComponent,
        VenderCriptosComponent,
        ConsultaSaldoComponent,
        IngresarDineroComponent,
        OperacionesCriptosComponent,
        RetirarDineroComponent,
        TransferirDineroComponent,
        PrincipalComponent,
        DashboardComponent */
    ],
    declarations: [
        ComisionesVigentesComponent,
        ComprarCriptosComponent,
        OperacionesCriptosComponent,
        VenderCriptosComponent,
        ConsultaSaldoComponent,
        IngresarDineroComponent,
        OperacionesCriptosComponent,
        RetirarDineroComponent,
        TransferirDineroComponent,
        PrincipalComponent,
        DashboardComponent
    ]
  })

  export class AppModule { }