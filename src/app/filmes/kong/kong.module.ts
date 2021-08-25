import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KongPageRoutingModule } from './kong-routing.module';

import { KongPage } from './kong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KongPageRoutingModule
  ],
  declarations: [KongPage]
})
export class KongPageModule {}
