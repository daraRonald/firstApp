import { miscellaneous1DetailPage } from './miscellaneous1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    miscellaneous1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(miscellaneous1DetailPage),
  ],
  exports: [
    miscellaneous1DetailPage
  ]
})

export class miscellaneous1DetailPageModule { }
