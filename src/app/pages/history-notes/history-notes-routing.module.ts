import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryNotesPage } from './history-notes.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryNotesPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryNotesPageRoutingModule {}
