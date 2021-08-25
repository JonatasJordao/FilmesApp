import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LucaPage } from './luca.page';

const routes: Routes = [
  {
    path: '',
    component: LucaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LucaPageRoutingModule {}
