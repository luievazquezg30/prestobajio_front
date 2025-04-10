import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPayment } from './register-payment.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPayment,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterPaymentRoutingModule {}
