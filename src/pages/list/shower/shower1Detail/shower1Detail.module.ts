import { shower1DetailPage } from './shower1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    shower1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(shower1DetailPage),
  ],
  exports: [
    shower1DetailPage
  ]
})

export class shower1DetailPageModule { }
