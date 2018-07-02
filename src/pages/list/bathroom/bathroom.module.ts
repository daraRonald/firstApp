import {BathroomPage } from './bathroom';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    BathroomPage,
    ],
    imports: [
        IonicPageModule.forChild(BathroomPage),
    ],
    exports: [
        BathroomPage
    ]
})

export class BathroomPageModule { };
