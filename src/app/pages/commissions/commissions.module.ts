import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {CommissionsPage } from './commissions.page';

import { CommissionsPageRoutingModule } from './commissions-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionsPageRoutingModule
  ],
  declarations: [CommissionsPage]
})
export class CommissionsPageModule {}
