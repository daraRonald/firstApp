import { washbasin1DetailPage } from './washbasin1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    washbasin1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(washbasin1DetailPage),
  ],
  exports: [
    washbasin1DetailPage
  ]
})

export class washbasin1DetailPageModule { }
