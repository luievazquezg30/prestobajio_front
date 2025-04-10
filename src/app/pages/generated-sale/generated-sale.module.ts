import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GeneratedSale } from './generated-sale.page';

import { GeneratedSaleRoutingModule } from './generated-sale-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeneratedSaleRoutingModule
  ],
  declarations: [GeneratedSale]
})
export class GeneratedSaleModule {}
