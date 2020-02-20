import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcamentoComponent } from './orcamento/orcamento.component';


const routes: Routes = [
  {
    path: 'orcamento',
    component: OrcamentoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class VendasRoutingModule { }