import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import {VendasRoutingModule} from './vendas-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule }  from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    VendasRoutingModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    NgScrollbarModule,
    VirtualScrollerModule,
  ],
  declarations: [OrcamentoComponent, TitleComponent, FooterComponent]
})
export class VendasModule { }