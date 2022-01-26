webpackJsonp([47],{

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__ = __webpack_require__(92);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, callNumber, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.inAppBrowser = inAppBrowser;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    AboutPage.prototype.makeCall = function (n) {
        window.open("tel:" + n, '_system');
    };
    AboutPage.prototype.openExternalUrl = function (url) {
        this.inAppBrowser.create(url, '_blank');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/about/about.html"*/' <ion-header no-border>\n      <ion-toolbar color="primary">\n       <ion-title><h4 face="Cambria">About</h4></ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n  <ion-content class="speaker-detail">\n\n  <div class="speaker-background">\n  \n  </div>\n\n  <div class="ion-padding speaker-detail">\n    <h2>What is Qaprofil</h2>\n    <p>QAPROFIL - Qatar Profiles and False Ceilings Factory. Established in 2003 under the pavilion of the leader company in the field of Building materials, Al Amodi Group for Trading and General Contracting.</p>\n    <h2>What do we serve</h2>\n    <p>QAPROFIL serves in the production field of slitting utilities, indoor false ceilings, dry wall partitions accessories, light gauge steel buildings construction and steel buildings, roof sheets and accessories.</p>\n    <h2>Qaprofil Standards</h2>\n    <p>QAPROFIL\'s recognition in the local market as a leader in the field should always be a definite choice preserving it\'s customers\' satisfaction and it\'s products Quality Assurance.</p>\n    <hr>\n\n    <ion-chip color="danger" ion-button (click)="openExternalUrl(\'https://qaprofil.com.qa/\')">\n      <ion-icon ios="ios-globe" md="md-globe"></ion-icon>\n      <ion-label>Website</ion-label>\n    </ion-chip>\n\n    <ion-chip color="dark" ion-button (click)="makeCall(\'+0097444601734\')">\n      <ion-icon ios="ios-call" md="md-call"></ion-icon>\n      <ion-label>Phone</ion-label>\n    </ion-chip>\n\n    <ion-chip color="instagram" ion-button (click)="openExternalUrl(\'https://www.google.com/maps/place/Qatar+Profiles+and+False+Ceilings+Factory/@25.1522135,51.4037525,15z/data=!4m5!3m4!1s0x0:0x9f2059796b4c5580!8m2!3d25.1522135!4d51.4037525\', \'_system\', \'location=yes\')">\n      <ion-icon ios="ios-map" md="md-map"></ion-icon>\n      <ion-label>Adresse</ion-label>\n    </ion-chip>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=47.js.map