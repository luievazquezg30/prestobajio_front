import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DefaultersClients } from './defaulters-clients.page';

import { DefaultersClientsRoutingModule } from './defaulters-clients-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefaultersClientsRoutingModule
  ],
  declarations: [DefaultersClients]
})
export class DefaultersClientsModule {}
