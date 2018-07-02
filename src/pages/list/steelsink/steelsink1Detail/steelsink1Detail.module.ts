import { steelsink1DetailPage } from './steelsink1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    steelsink1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(steelsink1DetailPage),
  ],
  exports: [
    steelsink1DetailPage
  ]
})

export class steelsink1DetailPageModule { }
