import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Closure } from './closure.page';

import { ClosureRoutingModule } from './closure-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClosureRoutingModule
  ],
  declarations: [Closure]
})
export class ClosureModule {}
