import { Component, ViewChild } from '@angular/core';
import { NavController,Slides} from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as myGlobals1 from '../list';
var page=new myGlobals1.ListPage(myGlobals1.h1,myGlobals1.h2,myGlobals1.h3);

export var k1;

@IonicPage()
@Component({
  selector: 'page-miscellaneous',
  templateUrl: 'miscellaneous.html'
})
  
export class MiscellaneousPage {
  load:any;
  posts: any;
  polomaxs:any;
  @ViewChild('slider') slider: Slides;
  constructor(public navCtrl: NavController, public http: Http) {
        this.polomaxs=myGlobals1.miscellaneous;
  }
 
cardTapped(event,kk) {
     this.navCtrl.push('miscellaneous1DetailPage');
     k1=kk;
      }
doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      page.refresh(refresher);
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
    }
 
       
   

