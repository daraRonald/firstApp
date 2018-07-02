import {FaucetPage } from './faucet';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    FaucetPage,
    ],
    imports: [
        IonicPageModule.forChild(FaucetPage),
    ],
    exports: [
        FaucetPage
    ]
})

export class FaucetPageModule { };
