webpackJsonp([1],{

/***/ 144:
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
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/customer/customer.module": [
		435,
		0
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
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__customer_customer__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__customer_customer__["a" /* CustomerPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="Customer" tabIcon="planet"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = (function () {
    function AboutPage(navCtrl, afd) {
        this.navCtrl = navCtrl;
        this.afd = afd;
        this.getDataFromFirebase();
    }
    AboutPage.prototype.getDataFromFirebase = function () {
        var _this = this;
        this.afd.list('/District/').valueChanges().subscribe(function (data) {
            console.log(JSON.stringify(data));
            _this.items = data;
        });
    };
    AboutPage.prototype.addItem = function (name) {
        this.afd.list('/District/').push(name);
    };
    AboutPage.prototype.removeItem = function (id) {
        this.afd.list('/District/').remove(name);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align:center">\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="body">\n\n\n\n  <h1 class="name">Name : Sujith Gamage </h1><br />\n\n\n\n  <h2 *ngFor="let name of nameof">Study at : Wayamba University of Sri Lanka\n   {{ name }}\n  </h2>\n\n  <ion-item>\n\n    <ion-label style="color:blue">District</ion-label>\n\n    <ion-input placeholder="Enter District" [(ngModel)]="distr"></ion-input>\n\n\n\n  </ion-item><br />\n\n  <button ion-button (click)="addItem( distr )" color="dark">Add</button>\n\n  <button ion-button (click)="removeItem( distr.$key)" color="dark">Delete</button>\n\n  <ion-item *ngFor="let item of items">\n\n    {{ item }}\n\n  </ion-item>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title style="text-align:center">\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="body">\n\n  <ion-item>\n\n    <ion-icon name="logo-facebook" item-start></ion-icon>\n\n    Sujith Gamage -> Followers\n\n    <ion-badge item-end>260k</ion-badge>\n\n\n\n\n\n\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-icon name="logo-twitter" item-start></ion-icon>\n\n    Sujith Gamage -> Followers\n\n    <ion-badge item-end>160k</ion-badge>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-icon name="logo-google" item-start></ion-icon>\n\n    Email -> sujithgamage501@gmail.com\n\n    <ion-badge item-end></ion-badge>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-icon name="logo-youtube" item-start></ion-icon>\n\n    New thing -> Subcribers\n\n    <ion-badge item-end>100k</ion-badge>\n\n  </ion-item>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__customer_customer__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.load = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__customer_customer__["a" /* CustomerPage */], {
            val: 'sujith'
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\pages\home\home.html"*/'<ion-header class="bar-dark">\n\n  <ion-navbar>\n\n    <ion-title style="text-align:center" >Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <h2 style="color:blue; text-align-last:center">Welcome to stayHere</h2>\n\n  <ion-slides pager>\n\n\n\n    <ion-slide class="background">\n\n      <h3 >Rent House</h3>\n\n      <div style="width:150px; align-items:center">\n\n        <ion-list>\n\n          <ion-item >\n\n\n\n            <ion-label >District</ion-label>\n\n            <ion-select [(ngModel)]="gaming">\n\n              <ion-option value="Ampara">Ampara</ion-option>\n\n              <ion-option value="Anuradhapura">Anuradhapura</ion-option>\n\n              <ion-option value="Badulla">Badulla</ion-option>\n\n              <ion-option value="Batticaloa">Batticaloa</ion-option>\n\n              <ion-option value="Colombo">Colombo</ion-option>\n\n              <ion-option value="Galle">Galle</ion-option>\n\n            </ion-select>\n\n\n\n\n\n          </ion-item>\n\n        </ion-list>\n\n        <h3 style="text-align:center; color:firebrick">{{gaming}}</h3>\n\n        <button ion-button color="light" (click)="load()" round>Done</button>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color:mediumspringgreen">\n\n      <ion-searchbar [(ngModel)]="serching" ></ion-searchbar>\n\n      \n\n      <h2>{{serching}}</h2>\n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color:tomato">\n\n     <ion-item>\n\n  <ion-label>Date</ion-label>\n\n  <ion-datetime displayFormat="MMM DD, YYYY HH:mm" [(ngModel)]="myDate"></ion-datetime>\n\n</ion-item>\n\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var config = {
    apiKey: "AIzaSyALREuUXfcGiS7aLIT8b6PivVZ6HQ6XMms",
    authDomain: "youtravel-168612.firebaseapp.com",
    databaseURL: "https://youtravel-168612.firebaseio.com",
    projectId: "youtravel-168612",
    storageBucket: "youtravel-168612.appspot.com",
    messagingSenderId: "351247988604"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__["a" /* CustomerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/customer/customer.module#CustomerPageModule', name: 'CustomerPage', segment: 'customer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_customer_customer__["a" /* CustomerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(230);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CustomerPage = (function () {
    function CustomerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(navParams.get('val'));
    }
    CustomerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CustomerPage');
    };
    CustomerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-customer',template:/*ion-inline-start:"D:\ionicApp2\Anonymouse\src\pages\customer\customer.html"*/'<!--\n  Generated template for the CustomerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title style="text-align:center">Customer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="background">\n  <ion-card>\n    <ion-card-header>\n      Login Form\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list no-line>\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Username"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-input type="password" placeholder="Password"></ion-input>\n\n        </ion-item>\n\n\n\n        <a>Forgot your login details? <b>Get help signing in</b></a>\n\n        <button ion-button block outline color="light">Login</button>\n\n        <p>OR</p>\n\n        <button ion-button block color="facebook">\n\n          <ion-icon name="logo-facebook"></ion-icon> Login with facebook\n\n        </button>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <button ion-button clear full color="light">Don\'t have an account? Sign Up</button>\n</ion-content>\n'/*ion-inline-end:"D:\ionicApp2\Anonymouse\src\pages\customer\customer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CustomerPage);
    return CustomerPage;
}());

//# sourceMappingURL=customer.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map