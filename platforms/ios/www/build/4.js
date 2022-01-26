webpackJsonp([4],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VedioqaprofilPageModule", function() { return VedioqaprofilPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vedioqaprofil__ = __webpack_require__(538);
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

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VedioqaprofilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
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
        this.vid = "https://www.youtube.com/embed/odWrm4nZxuA";
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
    VedioqaprofilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vedioqaprofil',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/vedioqaprofil/vedioqaprofil.html"*/'<!--\n  Generated template for the VedioqaprofilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n<ion-header >\n  <ion-navbar color="primary" >\n       <font   face="Cambria" color="0f056b" size="4"> <b>Qaprofil Video</b></font> \n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<iframe width="340" height="315"  [src]="sanitaze(vid)" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/vedioqaprofil/vedioqaprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */]])
    ], VedioqaprofilPage);
    return VedioqaprofilPage;
}());

//# sourceMappingURL=vedioqaprofil.js.map

/***/ })

});
//# sourceMappingURL=4.js.map