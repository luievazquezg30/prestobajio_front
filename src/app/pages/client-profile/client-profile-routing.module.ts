import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientProfilePage } from './client-profile.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProfilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientProfilePageRoutingModule {}
