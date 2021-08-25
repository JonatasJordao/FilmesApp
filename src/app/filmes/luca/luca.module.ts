import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LucaPageRoutingModule } from './luca-routing.module';

import { LucaPage } from './luca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LucaPageRoutingModule
  ],
  declarations: [LucaPage]
})
export class LucaPageModule {}
