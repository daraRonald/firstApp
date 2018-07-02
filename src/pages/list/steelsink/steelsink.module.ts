import {SteelSinkPage } from './steelsink';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    SteelSinkPage,
    ],
    imports: [
        IonicPageModule.forChild(SteelSinkPage),
    ],
    exports: [
        SteelSinkPage
    ]
})

export class SteelSinkPageModule { };
