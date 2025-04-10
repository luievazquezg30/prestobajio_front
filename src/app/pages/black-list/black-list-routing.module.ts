import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackList } from './black-list.page';

const routes: Routes = [
  {
    path: '',
    component: BlackList,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlackListRoutingModule {}
