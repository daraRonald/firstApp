import { valve1DetailPage } from './valve1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    valve1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(valve1DetailPage),
  ],
  exports: [
    valve1DetailPage
  ]
})

export class valve1DetailPageModule { }
