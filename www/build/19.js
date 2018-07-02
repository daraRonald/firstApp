webpackJsonp([19],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */]
            ]
        })
    ], ListPageModule);
    return ListPageModule;
}());

;
//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return wallmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return valve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bathroom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return washbasin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return toilet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return shower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return steelsink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return faucet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return miscellaneous; });
/* unused harmony export myFunction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return h1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return h2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return h3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_cache__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var wallmounted = [];
var valve = [];
var bathroom = [];
var washbasin = [];
var toilet = [];
var shower = [];
var steelsink = [];
var faucet = [];
var miscellaneous = [];
var myFunction = [];
var bgslides = [];
var h1;
var h2;
var h3;
var ttl = 5;
var delayType = 'all';
var url = 'https://www.polomaxten.com/wp-json/wp/v2/media?per_page=40';
var purl = 'https://www.polomaxten.com/wp-json/wc/v1/products?fields=18&consumer_key=ck_12f20405a9cecb93ddd1f5dfeb67d7d37ca9e09e&consumer_secret=cs_8185efc705304b578e40e9701bc4fe27326b7104&per_page=100';
var ListPage = (function () {
    function ListPage(navCtrl, http, cache) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.cache = cache;
        this.filmsKey = 'my-films-group';
        this.cards1 = [{ map: 'WallMountedPage' }];
        this.cards2 = [{ map: 'ValvePage' }];
        this.cards3 = [{ map: 'BathroomPage' }];
        this.cards4 = [{ map: 'WashBasinPage' }];
        this.cards5 = [{ map: 'ToiletPage' }];
        this.cards6 = [{ map: 'ShowerPage' }];
        this.cards7 = [{ map: 'SteelSinkPage' }];
        this.cards8 = [{ map: 'FaucetPage' }];
        this.cards9 = [{ map: 'MiscellaneousPage' }];
        h1 = this.navCtrl;
        h2 = this.http;
        h3 = this.cache;
        var req = this.http.get(url).map(function (res) { return res.json(); });
        var preq = this.http.get(purl).map(function (res) { return res.json(); });
        this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
        this.films1 = this.cache.loadFromDelayedObservable(purl, preq, this.filmsKey, ttl, delayType);
        this.films.subscribe(function (data) {
            _this.slide(data);
        }, function (err) {
            console.log("Oops!");
        });
        this.films1.subscribe(function (data) {
            _this.product(data);
        }, function (err) {
            console.log("Oops!");
        });
    }
    ListPage.prototype.cardTapped = function (event, card) {
        this.navCtrl.push(card.map);
    };
    ListPage.prototype.refresh = function (refresher) {
        var _this = this;
        var req = this.http.get(url).map(function (res) { return res.json(); });
        var preq = this.http.get(purl).map(function (res) { return res.json(); });
        this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
        this.films1 = this.cache.loadFromDelayedObservable(purl, preq, this.filmsKey, ttl, delayType);
        this.films.subscribe(function (data) {
            _this.slide(data);
        }, function (err) {
            console.log("Oops!");
        });
        this.films1.subscribe(function (data) {
            _this.product(data);
        }, function (err) {
            console.log("Oops!");
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 4000);
    };
    ListPage.prototype.product = function (data) {
        var i = null;
        var j = 0;
        var k = 0;
        var l = 0;
        var m = 0;
        var n = 0;
        var o = 0;
        var p = 0;
        var q = 0;
        var r = 0;
        for (i = 0; i < data.length; i++) {
            switch (data[i].categories[0].name) {
                case "Wall Mounted":
                    wallmounted[j] = data[i];
                    j++;
                    break;
                case "Valve &amp; Acc;":
                    valve[k] = data[i];
                    k++;
                    break;
                case "Bathroom Acc;":
                    bathroom[l] = data[i];
                    l++;
                    break;
                case "Wash Basin":
                    washbasin[m] = data[i];
                    m++;
                    break;
                case "Toilet":
                    toilet[n] = data[i];
                    n++;
                    break;
                case "Shower":
                    shower[o] = data[i];
                    o++;
                    break;
                case "Steel Sink":
                    steelsink[p] = data[i];
                    p++;
                    break;
                case "Faucet":
                    faucet[q] = data[i];
                    q++;
                    break;
                case "Miscellaneous":
                    miscellaneous[r] = data[i];
                    r++;
                    break;
            }
        }
        this.categories1 = wallmounted;
        this.categories2 = valve;
        this.categories3 = bathroom;
        this.categories4 = washbasin;
        this.categories5 = toilet;
        this.categories6 = shower;
        this.categories7 = steelsink;
        this.categories8 = faucet;
        this.categories9 = miscellaneous;
    };
    ListPage.prototype.slide = function (data) {
        for (var i = 0; i < data.length; i++) {
            switch (data[i].title.rendered) {
                case "slide1":
                    bgslides[0] = data[i].source_url;
                    break;
                case "slide2":
                    bgslides[1] = data[i].source_url;
                    break;
                case "slide3":
                    bgslides[2] = data[i].source_url;
                    break;
                case "slide4":
                    bgslides[3] = data[i].source_url;
                    break;
            }
        }
        this.backslide = bgslides;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", Object)
    ], ListPage.prototype, "slides", void 0);
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar color="light">\n    <button ion-button menuToggle >\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Maxten</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n	 <ion-refresher (ionRefresh)="refresh($event)">\n     <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n     </ion-refresher-content>\n     </ion-refresher>\n     \n	 \n	      <ion-slides pager class="home-slide" *ngIf="backslide && backslide.length" autoplay="2000" loop="true">	\n		  <ion-slide *ngFor="let img of backslide" slidesPerView="1.5" >\n		   <img [src]="img">\n		  </ion-slide >\n	     </ion-slides>\n    \n\n	<ion-row>			\n			<ion-col col-6>\n			<span *ngFor="let poloMax of categories1;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card1 of cards1" (click)="cardTapped($event,card1)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories2;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card2 of cards2" (click)="cardTapped($event,card2)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories3;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card3 of cards3" (click)="cardTapped($event,card3)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories4;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card4 of cards4" (click)="cardTapped($event,card4)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories5;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card5 of cards5" (click)="cardTapped($event,card5)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories6;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card6 of cards6" (click)="cardTapped($event,card6)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories7;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card7 of cards7" (click)="cardTapped($event,card7)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories8;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">  {{client.name}} <br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card8 of cards8" (click)="cardTapped($event,card8)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n			<ion-col col-6>\n			<span   *ngFor="let poloMax of categories9;let k=index;">\n				    <span *ngIf="k==0">\n						<ion-card *ngFor="let client of poloMax.categories;let i=index;" class="text-center slider-item"	style="color:blue;">\n							<span *ngIf="i==0">\n							 <span *ngFor="let img of poloMax.images;let j=index;" >\n								 <ion-card *ngIf="j==0" class="img-width">\n									   <img [src]="img.src" />\n							     </ion-card>\n							  </span>\n									<div style="text-align:center;width:100%;margin:10px 10px 10px 2px;color:black;">   {{client.name}}<br>\n									   <button ion-button style="text-align:center" color="dark" small style="box-shadow:5px 5px 2px grey"  *ngFor="let card9 of cards9" (click)="cardTapped($event,card9)">~ View More ~\n							  </button></div>\n							 </span> \n					</ion-card>	\n				</span>\n			</span>\n			</ion-col>\n	 </ion-row>\n   \n \n'/*ion-inline-end:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_cache__["b" /* CacheService */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ })

});
//# sourceMappingURL=19.js.map