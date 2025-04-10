import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterPayment } from './register-payment.page';

import { RegisterPaymentRoutingModule } from './register-payment-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPaymentRoutingModule
  ],
  declarations: [RegisterPayment]
})
export class RegisterPaymentModule {}
