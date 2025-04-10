import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ClientProfilePage } from './client-profile.page';
import { ClientProfilePageRoutingModule } from './client-profile-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientProfilePageRoutingModule
  ],
  declarations: [ClientProfilePage]
})
export class ClientProfilePageModule {}
