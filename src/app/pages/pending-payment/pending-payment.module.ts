import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PendingPaymentPage } from './pending-payment.page';
import { PendingPaymentPageRoutingModule } from './pending-payment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingPaymentPageRoutingModule
  ],
  declarations: [PendingPaymentPage]
})
export class PendingPaymentPageModule {}
