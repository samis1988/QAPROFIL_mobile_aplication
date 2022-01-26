webpackJsonp([36],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndooralumPageModule", function() { return IndooralumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indooralum__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IndooralumPageModule = /** @class */ (function () {
    function IndooralumPageModule() {
    }
    IndooralumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__indooralum__["a" /* IndooralumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__indooralum__["a" /* IndooralumPage */]),
            ],
        })
    ], IndooralumPageModule);
    return IndooralumPageModule;
}());

//# sourceMappingURL=indooralum.module.js.map

/***/ }),

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndooralumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the IndooralumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndooralumPage = /** @class */ (function () {
    function IndooralumPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'V Section', component: 'VsectionPage', image: 'assets/img/qaprofil/vsection.png' },
            { title: 'Qap Carrier', component: 'QapcarrierPage', image: 'assets/img/qaprofil/qap_carrier.png' },
            { title: 'Perimeter Angle', component: 'PerimeteranglePage', image: 'assets/img/qaprofil/p_a_alum.png' },
            { title: 'U Channel', component: 'UchannelPage', image: 'assets/img/qaprofil/u_channel.png' },
            { title: '84R and Joints Strips ', component: 'StripsjointPage', image: 'assets/img/qaprofil/84r/1.png' },
            { title: 'Qap 50 Strips', component: 'QapstripsPage', image: 'assets/img/qaprofil/qap50/1.png' },
            { title: 'Qap 100 - 200 Strips', component: 'QaponetwoPage', image: 'assets/img/qaprofil/qap100-200/1.png' },
            { title: 'T- Bar', component: 'TbarPage', image: 'assets/img/qaprofil/tbar/4.png' },
            { title: 'Semi-Round Panel', component: 'SemiroundPage', image: 'assets/img/qaprofil/bambo/1.jpg' },
            { title: 'Photo Gallery', component: 'GalleryalumPage', image: 'assets/img/qaprofil/gallery.png' }
        ];
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("gypsum");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    IndooralumPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    IndooralumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndooralumPage');
    };
    IndooralumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-indooralum',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/indooralum/indooralum.html"*/'<ion-header >\n  <ion-navbar color="primary" >\n          \n    <ion-title  face="Cambria" color="white">Indoor Aluminum False Ceilings</ion-title>\n           \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor="let p of pages" (click)="goToSecond(p.component)">\n      <ion-thumbnail item-start>\n        <img src="{{p.image}}">\n      </ion-thumbnail>\n      <h2>{{p.title}}</h2>\n      <p>Indoor Aluminum False Ceilings</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/indooralum/indooralum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], IndooralumPage);
    return IndooralumPage;
}());

//# sourceMappingURL=indooralum.js.map

/***/ })

});
//# sourceMappingURL=36.js.map