import {WallMountedPage } from './wallmounted';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [
    WallMountedPage,
    ],
    imports: [
        IonicPageModule.forChild(WallMountedPage),
    ],
    exports: [
        WallMountedPage
    ]
})

export class WallMountedPageModule { };
