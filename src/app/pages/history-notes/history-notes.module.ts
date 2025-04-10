import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HistoryNotesPage } from './history-notes.page';

import { HistoryNotesPageRoutingModule } from './history-notes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryNotesPageRoutingModule
  ],
  declarations: [HistoryNotesPage]
})
export class HistoryNotesPageModule {}
