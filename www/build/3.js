webpackJsonp([3],{

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VedioqaprofilPageModule", function() { return VedioqaprofilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vedioqaprofil__ = __webpack_require__(822);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VedioqaprofilPageModule = /** @class */ (function () {
    function VedioqaprofilPageModule() {
    }
    VedioqaprofilPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__vedioqaprofil__["a" /* VedioqaprofilPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__vedioqaprofil__["a" /* VedioqaprofilPage */]),
            ],
        })
    ], VedioqaprofilPageModule);
    return VedioqaprofilPageModule;
}());

//# sourceMappingURL=vedioqaprofil.module.js.map

/***/ }),

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VedioqaprofilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the VedioqaprofilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VedioqaprofilPage = /** @class */ (function () {
    function VedioqaprofilPage(navCtrl, navParams, dom, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dom = dom;
        this.platform = platform;
        this.vid = "https://www.youtube.com/embed/RE9aoErJGTk";
        var backAction = platform.registerBackButtonAction(function () {
            console.log("vedioqaprofil");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    VedioqaprofilPage.prototype.sanitaze = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    VedioqaprofilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VedioqaprofilPage');
    };
    VedioqaprofilPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    VedioqaprofilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vedioqaprofil',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/vedioqaprofil/vedioqaprofil.html"*/'<!--\n  Generated template for the VedioqaprofilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n<ion-header >\n  <ion-navbar color="primary" >\n    <div class="row">\n       <ion-title> <b>Qaprofil Videos</b></ion-title> \n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<iframe width="100%" height="100%"  [src]="sanitaze(vid)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/vedioqaprofil/vedioqaprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* Platform */]])
    ], VedioqaprofilPage);
    return VedioqaprofilPage;
}());

//# sourceMappingURL=vedioqaprofil.js.map

/***/ })

});
//# sourceMappingURL=3.js.map