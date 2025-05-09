import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfilePage } from './my-profile.page';

const routes: Routes = [
  {
    path: '',
    component: MyProfilePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfilePageRoutingModule {}
