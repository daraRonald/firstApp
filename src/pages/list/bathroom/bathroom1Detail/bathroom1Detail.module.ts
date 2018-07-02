import { bathroom1DetailPage } from './bathroom1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    bathroom1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(bathroom1DetailPage),
  ],
  exports: [
    bathroom1DetailPage
  ]
})

export class bathroom1DetailPageModule { }
