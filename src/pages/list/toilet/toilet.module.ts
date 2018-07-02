import {ToiletPage } from './toilet';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    ToiletPage,
    ],
    imports: [
        IonicPageModule.forChild(ToiletPage),
    ],
    exports: [
        ToiletPage
    ]
})

export class ToiletPageModule { };
