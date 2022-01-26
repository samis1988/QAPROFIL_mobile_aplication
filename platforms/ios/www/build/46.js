webpackJsonp([46],{

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(496);
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

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/about/about.html"*/' \n\n<ion-header >\n  <ion-navbar color="primary" >\n      <table><tr><td>\n             <ion-buttons right  end>\n      <button  ion-button icon-only (click)="startApp(\'WelcomePage\')">\n        <b><ion-icon color="secondary" name="md-arrow-back"></ion-icon></b>\n      </button>\n    </ion-buttons>\n          </td>\n          <td>\n          \n            <ion-title> <font   face="Cambria" color="0f056b" size="4"> <b>About</b></font></ion-title>\n          \n          </td>\n          \n          \n          \n          </tr></table>\n    \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n\n\n<ion-content>\n    <ion-card-content>\n    <p><font face="Times New Roman" color="black" size="5"><b>What is Qaprofil</b></font></p> \n         \n      <p><font face="Times New Roman" color="black" size="3">\n        QAPROFIL - Qatar Profiles and False Ceilings Factory. Established in 2003 under the pavilion of the leader company in the field of Building materials, Al Amodi Group for Trading and General Contracting.\n          </font> </p>\n    \n    \n        <p> <font face="Times New Roman" color="black" size="5"><b> What do we serve</b></font>  </p>\n         \n      <p><font face="Times New Roman" color="black" size="3">\n       QAPROFIL serves in the production field of slitting utilities, indoor false ceilings, dry wall partitions accessories, light gauge steel buildings construction and steel buildings roof sheets and accessories.\n          </font> </p>\n     \n    \n     <p><font face="Times New Roman" color="black" size="5"><b> Qaprofil Standards</b></font></p> \n         \n      <p><font face="Times New Roman" color="black" size="3">\n       QAPROFIL\'s recognition in the local market as a leader in the field should always be a definite choice preserving it\'s customers\' satisfaction and it\'s products Quality Assurance.\n          </font> </p>\n    </ion-card-content> \n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ })

});
//# sourceMappingURL=46.js.map