import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViuvaNegraPageRoutingModule } from './viuva-negra-routing.module';

import { ViuvaNegraPage } from './viuva-negra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViuvaNegraPageRoutingModule
  ],
  declarations: [ViuvaNegraPage]
})
export class ViuvaNegraPageModule {}
