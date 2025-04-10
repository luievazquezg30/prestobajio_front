import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentConfirmation } from './appointment-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentConfirmation,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentConfirmationRoutingModule {}
