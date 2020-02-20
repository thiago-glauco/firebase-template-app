import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import {VendasRoutingModule} from './vendas-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatListModule,
    MatGridListModule,
    NgScrollbarModule
  ],
  declarations: [OrcamentoComponent]
})
export class VendasModule { }