import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommissionsList } from './commissions-list.page';

import { CommissionsListRoutingModule } from './commissions-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommissionsListRoutingModule
  ],
  declarations: [CommissionsList]
})
export class CommissionsListModule {}
