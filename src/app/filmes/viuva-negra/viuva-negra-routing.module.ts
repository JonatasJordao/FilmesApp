import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViuvaNegraPage } from './viuva-negra.page';

const routes: Routes = [
  {
    path: '',
    component: ViuvaNegraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViuvaNegraPageRoutingModule {}
