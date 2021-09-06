import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { CentralComponent } from './home/central/central.component';
import { RegistroComponent } from './home/registro/registro.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: '', component: CentralComponent, pathMatch: 'full' },

  { path: 'registro', component: RegistroComponent },


  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
