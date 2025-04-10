import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultersClients } from './defaulters-clients.page';

const routes: Routes = [
  {
    path: '',
    component: DefaultersClients,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultersClientsRoutingModule {}
