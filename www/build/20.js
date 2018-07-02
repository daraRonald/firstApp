webpackJsonp([20],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__contact__["a" /* ContactPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__contact__["a" /* ContactPage */]
            ]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

;
//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactPage = (function () {
    function ContactPage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ContactPage.prototype, "mapElement", void 0);
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/pages/contact/contact.html"*/'<ion-header>\n	<ion-navbar color="light">\n		<button ion-button menuToggle >\n			<ion-icon name="menu"></ion-icon>\n		</button>\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n		<ion-list-header>\n			<br>\n			<h2 style="text-align:center;color:#344153;font-size:20px;font-family:Monospace;">GIVE US A CONTACT</h2>\n		</ion-list-header>\n		\n		<ion-item>\n			<ion-icon name="call" item-start class="icon-class"></ion-icon>\n			<p>\n				<a href="tel:0943046001" style="color:#106bd3;">09-43046001</a>,\n				<a href="tel:0269100" style="color:#106bd3;">02-69100</a>, \n				<a href="tel:0223727" style="color:#106bd3;">02-23727</a>\n			</p>\n		</ion-item>\n		\n		<ion-item>\n			<ion-icon name="mail-open" item-start class="icon-class"></ion-icon>\n			<p>\n				<a href="mailto:office@polomaxten.com" style="text-decoration:none;color:#106bd3;">office@polomaxten.com</a>\n			</p>\n		</ion-item>\n		\n		<ion-item>\n			<ion-icon name="map" item-start class="icon-class"></ion-icon>\n				<h6 style="color:#344153;">No.(133), 82nd st, between <br>20th & 21th st, Mandalay, Myanmar.</h6><br>\n				<h6 style="color:#344153;">No.(194), 35th st, between <br>77th & 78th st, Mandalay, Myanmar.</h6>\n		</ion-item>\n		\n		<ion-item>\n			<ion-icon name="globe" item-start class="icon-class"></ion-icon>\n			<p>\n				<a href="https://www.polomaxten.com" style="text-decoration:none;color:#106bd3;">https://www.polomaxten.com</a>\n			</p>\n		</ion-item>\n		\n		<ion-item>\n			<ion-icon name="logo-facebook" item-start style="color:#344153;"></ion-icon>\n			<p>\n				<a href="https://m.facebook.com/polomaxten" style="text-decoration:none;color:#106bd3;">POLO Maxten</a>\n			</p>\n		</ion-item>\n		\n		<ion-item>\n			<h3 style="text-align:center;font-family:Monospace;font-size:16px;color:#344153;" class="icon-class">\n			AVAILABLE AT : <br><br>\n			(9:00 A.M. TO 6:00 P.M.)\n			</h3>\n		</ion-item>\n		\n	</ion-list>\n	  \n</ion-content>\n'/*ion-inline-end:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=20.js.map