import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ClientListPage } from './client-list.page';
import { ClientListPageRoutingModule } from './client-list-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientListPageRoutingModule
  ],
  declarations: [ClientListPage]
})
export class ClientListPageModule {}
