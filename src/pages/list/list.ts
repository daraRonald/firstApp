import { Component, ViewChild} from '@angular/core';
import {NavController,Slides, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import { CacheService } from 'ionic-cache';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export var wallmounted=[];
export var valve=[];
export var bathroom=[];
export var washbasin=[];
export var toilet=[];
export var shower=[];
export var steelsink=[];
export var faucet=[];
export var miscellaneous=[];
export var myFunction=[];
var bgslides = []; 
export var h1;
export var h2;
export var h3;
var ttl = 5;
var delayType = 'all';

var url='https://www.polomaxten.com/wp-json/wp/v2/media?per_page=40';
var purl='https://www.polomaxten.com/wp-json/wc/v1/products?fields=18&consumer_key=ck_12f20405a9cecb93ddd1f5dfeb67d7d37ca9e09e&consumer_secret=cs_8185efc705304b578e40e9701bc4fe27326b7104&per_page=100';
@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  films: Observable<any>;
  films1: Observable<any>;
  filmsKey = 'my-films-group';
@ViewChild(Slides) slides:any; 
  categories1:any;categories2:any;categories3:any;categories4:any;categories5:any;categories6:any;categories7:any;categories8:any;categories9:any;
  card1:any;card2:any;card3:any;card4:any;card5:any;card6:any;card7:any;card8:any;card9:any;
  posts: any;backslide:any;bgslides:any;
  gins:any;
  src1:any;s1:any;
 
  cards1 = [{map: 'WallMountedPage'}];
  cards2 = [{map: 'ValvePage'}];
  cards3 = [{map: 'BathroomPage'}];
  cards4 = [{map: 'WashBasinPage'}];
  cards5 = [{map: 'ToiletPage'}];
  cards6 = [{map: 'ShowerPage'}];
  cards7 = [{map: 'SteelSinkPage'}];
  cards8 = [{map: 'FaucetPage'}];
  cards9 = [{map: 'MiscellaneousPage'}];
  constructor(public navCtrl: NavController, public http: Http, private cache: CacheService) {
	h1=this.navCtrl;
    h2=this.http;
    h3=this.cache;
  
	let req=this.http.get(url).map(res =>res.json());
	let preq=this.http.get(purl).map(res=>res.json());
	this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
	this.films1 = this.cache.loadFromDelayedObservable(purl, preq, this.filmsKey, ttl, delayType);
	this.films.subscribe(
        data => {
			this.slide(data);
			},
		err => {
			console.log("Oops!");
			});

	this.films1.subscribe(
		data => {
			this.product(data);
        },
        err => {
				console.log("Oops!");
			});      
	}

	cardTapped(event,card) {
        this.navCtrl.push(card.map);
    }
        
	refresh(refresher) {
		let req=this.http.get(url).map(res =>res.json());
		let preq=this.http.get(purl).map(res=>res.json());
		this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
		this.films1 = this.cache.loadFromDelayedObservable(purl, preq, this.filmsKey, ttl, delayType);
		this.films.subscribe(
			data => {
				this.slide(data);
				},
			err => {
				console.log("Oops!");
				});

		this.films1.subscribe(
			data => {
				this.product(data);
				},
			err => {
				console.log("Oops!");
				});      
		
			setTimeout(() => {
				console.log('Async operation has ended');
				refresher.complete();
				}, 4000);
	}
  
  product(data){
  
	var i=null;
	var j=0;
	var k=0;
	var l=0;
	var m=0;
	var n=0;
	var o=0;
	var p=0;
	var q=0;
	var r=0;
	
	for(i=0;i<data.length;i++){
     
      switch(data[i].categories[0].name){
           case "Wall Mounted":  
                    wallmounted[j]=data[i];
                    j++;
				break;
			case "Valve &amp; Acc;":
					valve[k]=data[i];
					k++;	
		    	break;
		    case "Bathroom Acc;":
					bathroom[l]=data[i];
					l++;
		    	break;
		    case "Wash Basin":
					washbasin[m]=data[i];
					m++;
		    	break;
		    case "Toilet":
					toilet[n]=data[i];
					n++;	
		    	break;
		    case "Shower":
					shower[o]=data[i];
					o++;
		    	break;
		    case "Steel Sink":
					steelsink[p]=data[i];
					p++;	
		    	break;
		    case "Faucet":
					faucet[q]=data[i];
					q++;
		    	break;
		    case "Miscellaneous":
					miscellaneous[r]=data[i];
					r++;
		    	break;			
				}
		}
		this.categories1=wallmounted;
		this.categories2=valve;
		this.categories3=bathroom;
		this.categories4=washbasin;
		this.categories5=toilet;
		this.categories6=shower;
		this.categories7=steelsink;
		this.categories8=faucet;
		this.categories9=miscellaneous;
	}

	slide(data){
		for(var i=0;i<data.length;i++){
			switch(data[i].title.rendered){
				case "slide1":
                      bgslides[0]=data[i].source_url;
                      break;
				case "slide2":
                      bgslides[1]=data[i].source_url;
                      break;
				case "slide3":
                      bgslides[2]=data[i].source_url;
                      break;
				case "slide4":
                      bgslides[3]=data[i].source_url;
                      break;  
				}                        
			}
        this.backslide=bgslides;
	}	

}
