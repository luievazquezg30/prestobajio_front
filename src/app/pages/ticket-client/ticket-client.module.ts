import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TicketClientPage } from './ticket-client.page';
import { TicketClientPageRoutingModule } from './ticket-client-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TicketClientPageRoutingModule
  ],
  declarations: [TicketClientPage]
})
export class TicketClientPageModule {}
