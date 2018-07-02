import {ShowerPage } from './shower';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    ShowerPage,
    ],
    imports: [
        IonicPageModule.forChild(ShowerPage),
    ],
    exports: [
        ShowerPage
    ]
})

export class ShowerPageModule { };
