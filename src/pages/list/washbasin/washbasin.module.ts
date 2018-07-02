import {WashBasinPage } from './washbasin';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    WashBasinPage,
    ],
    imports: [
        IonicPageModule.forChild(WashBasinPage),
    ],
    exports: [
        WashBasinPage
    ]
})

export class WashBasinPageModule { };
