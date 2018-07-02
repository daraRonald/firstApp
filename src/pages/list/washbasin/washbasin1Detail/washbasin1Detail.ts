import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as myGlobals1 from '../../list';
import * as myGlobals from '../washbasin';
var page=new myGlobals1.ListPage(myGlobals1.h1,myGlobals1.h2,myGlobals1.h3);

@IonicPage()
@Component({
  selector: 'page-washbasin1Detail',
  templateUrl: 'washbasin1Detail.html'
})

export class washbasin1DetailPage {
 posts: any;
 load:any;
  constructor(public navCtrl: NavController, public http: Http) {
        this.posts=myGlobals1.washbasin[myGlobals.k1];
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
