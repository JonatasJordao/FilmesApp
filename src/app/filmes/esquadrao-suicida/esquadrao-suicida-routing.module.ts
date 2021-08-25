import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquadraoSuicidaPage } from './esquadrao-suicida.page';

const routes: Routes = [
  {
    path: '',
    component: EsquadraoSuicidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquadraoSuicidaPageRoutingModule {}
