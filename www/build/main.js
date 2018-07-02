webpackJsonp([21],{

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this.clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype.clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    AppState = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppState);
    return AppState;
}());

//# sourceMappingURL=app.global.js.map

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		679,
		20
	],
	"../pages/list/bathroom/bathroom.module": [
		680,
		17
	],
	"../pages/list/bathroom/bathroom1Detail/bathroom1Detail.module": [
		681,
		8
	],
	"../pages/list/faucet/faucet.module": [
		682,
		16
	],
	"../pages/list/faucet/faucet1Detail/faucet1Detail.module": [
		683,
		7
	],
	"../pages/list/list.module": [
		684,
		19
	],
	"../pages/list/miscellaneous/miscellaneous.module": [
		685,
		15
	],
	"../pages/list/miscellaneous/miscellaneous1Detail/miscellaneous1Detail.module": [
		686,
		6
	],
	"../pages/list/shower/shower.module": [
		687,
		14
	],
	"../pages/list/shower/shower1Detail/shower1Detail.module": [
		688,
		5
	],
	"../pages/list/steelsink/steelsink.module": [
		689,
		13
	],
	"../pages/list/steelsink/steelsink1Detail/steelsink1Detail.module": [
		690,
		4
	],
	"../pages/list/toilet/toilet.module": [
		691,
		12
	],
	"../pages/list/toilet/toilet1Detail/toilet1Detail.module": [
		692,
		3
	],
	"../pages/list/valve/valve.module": [
		693,
		11
	],
	"../pages/list/valve/valve1Detail/valve1Detail.module": [
		694,
		2
	],
	"../pages/list/wallmounted/wallmounted.module": [
		695,
		10
	],
	"../pages/list/wallmounted/wallmounted1Detail/wallmounted1Detail.module": [
		696,
		1
	],
	"../pages/list/washbasin/washbasin.module": [
		697,
		9
	],
	"../pages/list/washbasin/washbasin1Detail/washbasin1Detail.module": [
		698,
		0
	],
	"../pages/theming/theming.module": [
		699,
		18
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 209;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(356);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_cache__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/bathroom/bathroom.module#BathroomPageModule', name: 'BathroomPage', segment: 'bathroom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/bathroom/bathroom1Detail/bathroom1Detail.module#bathroom1DetailPageModule', name: 'bathroom1DetailPage', segment: 'bathroom1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/faucet/faucet.module#FaucetPageModule', name: 'FaucetPage', segment: 'faucet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/faucet/faucet1Detail/faucet1Detail.module#faucet1DetailPageModule', name: 'faucet1DetailPage', segment: 'faucet1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/miscellaneous/miscellaneous.module#MiscellaneousPageModule', name: 'MiscellaneousPage', segment: 'miscellaneous', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/miscellaneous/miscellaneous1Detail/miscellaneous1Detail.module#miscellaneous1DetailPageModule', name: 'miscellaneous1DetailPage', segment: 'miscellaneous1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/shower/shower.module#ShowerPageModule', name: 'ShowerPage', segment: 'shower', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/shower/shower1Detail/shower1Detail.module#shower1DetailPageModule', name: 'shower1DetailPage', segment: 'shower1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/steelsink/steelsink.module#SteelSinkPageModule', name: 'SteelSinkPage', segment: 'steelsink', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/steelsink/steelsink1Detail/steelsink1Detail.module#steelsink1DetailPageModule', name: 'steelsink1DetailPage', segment: 'steelsink1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/toilet/toilet.module#ToiletPageModule', name: 'ToiletPage', segment: 'toilet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/toilet/toilet1Detail/toilet1Detail.module#toilet1DetailPageModule', name: 'toilet1DetailPage', segment: 'toilet1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/valve/valve.module#ValvePageModule', name: 'ValvePage', segment: 'valve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/valve/valve1Detail/valve1Detail.module#valve1DetailPageModule', name: 'valve1DetailPage', segment: 'valve1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/wallmounted/wallmounted.module#WallMountedPageModule', name: 'WallMountedPage', segment: 'wallmounted', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/wallmounted/wallmounted1Detail/wallmounted1Detail.module#wallmounted1DetailPageModule', name: 'wallmounted1DetailPage', segment: 'wallmounted1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/washbasin/washbasin.module#WashBasinPageModule', name: 'WashBasinPage', segment: 'washbasin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/washbasin/washbasin1Detail/washbasin1Detail.module#washbasin1DetailPageModule', name: 'washbasin1DetailPage', segment: 'washbasin1Detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/theming/theming.module#ThemingPageModule', name: 'ThemingPage', segment: 'theming', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic_cache__["a" /* CacheModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* AppState */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_global__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_cache__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, global, menuCtrl, cache, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.global = global;
        this.menuCtrl = menuCtrl;
        this.rootPage = 'ListPage';
        this.activePage = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        platform.ready().then(function () {
            // Set TTL to 12h
            cache.setDefaultTTL(60 * 60 * 12);
            // Keep our cached results when device is offline!
            cache.setOfflineInvalidate(false);
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.initializeApp();
        this.rightMenuItems = [
            { icon: 'home', active: true },
            { icon: 'contact', active: false },
            { icon: 'setting', active: false },
        ];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: ' Home', component: 'ListPage', active: true, icon: 'home' },
            { title: 'Contact Us ', component: 'ContactPage', active: false, icon: 'contact' },
            { title: 'Setting', component: 'ThemingPage', active: false, icon: 'setting' },
        ];
        this.activePage.subscribe(function (selectedPage) {
            _this.pages.map(function (page) {
                page.active = page.title === selectedPage.title;
            });
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.menuCtrl.enable(false, 'right');
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage.next(page);
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot('ListPage');
    };
    MyApp.prototype.contact = function () {
        this.nav.push('ContactPage');
    };
    MyApp.prototype.setting = function () {
        this.nav.push('ThemingPage');
    };
    MyApp.prototype.rightMenuClick = function (item) {
        this.rightMenuItems.map(function (menuItem) { return menuItem.active = false; });
        item.active = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/app/app.html"*/'<div class="{{global.state[\'theme\']}}">\n	<ion-menu [content]="content" id="menu-avatar">\n		<ion-header color="light">\n			<ion-toolbar color="light">\n				<ion-title>Menu</ion-title>\n			</ion-toolbar>\n		</ion-header>\n		\n		<ion-content>\n			<div class="menu-header backI">\n				\n				<!--\n				<br><br><br><br>\n				\n				\n				<h2 style="margin-bottom:-20px;color:#ffffff;font-size:25px;">Maxten</h2>\n				-->\n				\n				<div class="container">\n					<img src="https://www.polomaxten.com/wp-content/uploads/2017/08/bathroom.jpg" alt="Notebook" style="width:100%;height : 140px;">\n						<div class="content">\n							<br><br><br><br><br>\n							<h1></h1>\n							<img src="https://www.polomaxten.com/wp-content/uploads/2017/08/polo.png" alt="Notebook" style="width:50%;height : 20%;">\n						</div>\n				</div>\n				\n			</div>\n			\n			<ion-list no-lines>\n				\n				<ion-item-divider (click)="home()" menuClose>\n					<ion-icon name="home" item-left style="color:#ffffff;"></ion-icon>\n					Home\n				</ion-item-divider>\n				\n				<ion-item-divider (click)="contact()" menuClose>\n					<ion-icon name="contact" item-left style="color:#ffffff;"></ion-icon>\n					Contact Us \n				</ion-item-divider>\n				\n				<ion-item-divider (click)="setting()" menuClose>\n					<ion-icon name="settings" item-left style="color:#ffffff;"></ion-icon>\n					Settings\n				</ion-item-divider>\n				\n			</ion-list>\n		</ion-content>\n	</ion-menu>\n	\n	<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n	<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n</div>\n'/*ion-inline-end:"/home/poeeiphyu/Desktop/MyLifeCH-Ver3/Maxten/Maxten/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__app_global__["a" /* AppState */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */], __WEBPACK_IMPORTED_MODULE_5_ionic_cache__["b" /* CacheService */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[351]);
//# sourceMappingURL=main.js.map