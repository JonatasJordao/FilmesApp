import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KongPage } from './kong.page';

const routes: Routes = [
  {
    path: '',
    component: KongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KongPageRoutingModule {}
