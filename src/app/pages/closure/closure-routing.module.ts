import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Closure } from './closure.page';

const routes: Routes = [
  {
    path: '',
    component: Closure,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClosureRoutingModule {}
