import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommissionsList } from './commissions-list.page';

const routes: Routes = [
  {
    path: '',
    component: CommissionsList,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommissionsListRoutingModule {}
