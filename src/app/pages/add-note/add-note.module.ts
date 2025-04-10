import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddNotePage } from './add-note.page';

import { AddNotePageRoutingModule } from './add-note-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNotePageRoutingModule
  ],
  declarations: [AddNotePage]
})
export class AddNotePageModule {}
