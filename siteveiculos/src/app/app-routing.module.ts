import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';
import { LoginComponent } from './components/login/login.component';
import { CadclientesComponent } from './components/cadclientes/cadclientes.component';
import { HomeComponent } from './components/home/home.component';
import { CadveiculosComponent } from './components/cadveiculos/cadveiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Detalhes2Component } from './components/detalhes2/detalhes2.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CadastroVeiculo', component: CadveiculosComponent },
  { path: 'CadastroCliente', component: CadclientesComponent },
  { path: 'Login', component: LoginComponent},
  { path: 'Veiculos', component: VeiculosComponent},
  { path: 'detalhes/:indice', component: DetalhesComponent},
  { path: 'detalhes2/:indice', component: Detalhes2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
