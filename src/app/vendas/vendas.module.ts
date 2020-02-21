import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import {VendasRoutingModule} from './vendas-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'
import { NgScrollbarModule } from 'ngx-scrollbar';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatListModule,
    MatGridListModule,
    FlexLayoutModule,
    NgScrollbarModule,
    VirtualScrollerModule,
  ],
  declarations: [OrcamentoComponent]
})
export class VendasModule { }