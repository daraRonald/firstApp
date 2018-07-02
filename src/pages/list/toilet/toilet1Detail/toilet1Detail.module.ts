import { toilet1DetailPage } from './toilet1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    toilet1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(toilet1DetailPage),
  ],
  exports: [
    toilet1DetailPage
  ]
})

export class toilet1DetailPageModule { }
