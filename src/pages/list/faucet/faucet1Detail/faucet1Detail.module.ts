import { faucet1DetailPage } from './faucet1Detail';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    faucet1DetailPage,
  ],
  imports: [
    IonicPageModule.forChild(faucet1DetailPage),
  ],
  exports: [
    faucet1DetailPage
  ]
})

export class faucet1DetailPageModule { }
