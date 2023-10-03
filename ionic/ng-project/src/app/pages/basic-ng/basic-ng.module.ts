import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicNgPageRoutingModule } from './basic-ng-routing.module';

import { BasicNgPage } from './basic-ng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicNgPageRoutingModule
  ],
  declarations: [BasicNgPage]
})
export class BasicNgPageModule {}
