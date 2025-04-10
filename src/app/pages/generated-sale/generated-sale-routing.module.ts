import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneratedSale } from './generated-sale.page';

const routes: Routes = [
  {
    path: '',
    component: GeneratedSale,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneratedSaleRoutingModule {}
