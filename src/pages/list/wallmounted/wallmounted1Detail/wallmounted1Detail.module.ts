import { wallmounted1DetailPage } from './wallmounted1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    wallmounted1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(wallmounted1DetailPage),
  ],
  exports: [
    wallmounted1DetailPage
  ]
})

export class wallmounted1DetailPageModule { }
