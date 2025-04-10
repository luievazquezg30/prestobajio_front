import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketClientPage } from './ticket-client.page';

const routes: Routes = [
  {
    path: '',
    component: TicketClientPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketClientPageRoutingModule {}
