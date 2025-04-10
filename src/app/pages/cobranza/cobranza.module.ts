import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CobranzaPage } from './cobranza.page';
import { CobranzaPageRoutingModule } from './cobranza-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CobranzaPageRoutingModule
  ],
  declarations: [CobranzaPage]
})
export class CobranzaPageModule {}
