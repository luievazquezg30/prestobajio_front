import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AppointmentConfirmation } from './appointment-confirmation.page';

import { AppointmentConfirmationRoutingModule } from './appointment-confirmation-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentConfirmationRoutingModule
  ],
  declarations: [AppointmentConfirmation]
})
export class AppointmentConfirmationModule {}
