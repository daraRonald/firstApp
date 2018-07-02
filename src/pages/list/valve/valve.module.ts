import {ValvePage } from './valve';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    ValvePage,
    ],
    imports: [
        IonicPageModule.forChild(ValvePage),
    ],
    exports: [
        ValvePage
    ]
})

export class ValvePageModule { };
