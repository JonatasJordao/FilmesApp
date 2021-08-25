import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquadraoSuicidaPageRoutingModule } from './esquadrao-suicida-routing.module';

import { EsquadraoSuicidaPage } from './esquadrao-suicida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquadraoSuicidaPageRoutingModule
  ],
  declarations: [EsquadraoSuicidaPage]
})
export class EsquadraoSuicidaPageModule {}
