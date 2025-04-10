import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAccPage } from './register-acc.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterAccPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterAccPageRoutingModule {}
