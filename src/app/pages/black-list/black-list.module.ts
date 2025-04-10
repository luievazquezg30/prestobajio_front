import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { BlackList } from './black-list.page';

import { BlackListRoutingModule } from './black-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlackListRoutingModule
  ],
  declarations: [BlackList]
})
export class BlackListModule {}
