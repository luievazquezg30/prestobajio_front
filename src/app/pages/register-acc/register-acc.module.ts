import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RegisterAccPage } from './register-acc.page';

import { RegisterAccPageRoutingModule } from './register-acc-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterAccPageRoutingModule
  ],
  declarations: [RegisterAccPage]
})
export class RegisterAccPageModule {}
