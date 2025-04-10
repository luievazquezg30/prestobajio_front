import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingPaymentPage } from './pending-payment.page';

const routes: Routes = [
  {
    path: '',
    component: PendingPaymentPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PendingPaymentPageRoutingModule {}
