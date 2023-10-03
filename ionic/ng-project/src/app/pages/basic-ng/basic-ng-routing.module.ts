import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicNgPage } from './basic-ng.page';

const routes: Routes = [
  {
    path: '',
    component: BasicNgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicNgPageRoutingModule {}
