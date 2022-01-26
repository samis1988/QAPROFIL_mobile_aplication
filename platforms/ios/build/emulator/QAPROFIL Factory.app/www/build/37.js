webpackJsonp([37],{

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GypsumPageModule", function() { return GypsumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gypsum__ = __webpack_require__(505);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GypsumPageModule = /** @class */ (function () {
    function GypsumPageModule() {
    }
    GypsumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gypsum__["a" /* GypsumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gypsum__["a" /* GypsumPage */]),
            ],
        })
    ], GypsumPageModule);
    return GypsumPageModule;
}());

//# sourceMappingURL=gypsum.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GypsumPage; });
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
 * Generated class for the GypsumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GypsumPage = /** @class */ (function () {
    function GypsumPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'Perimeter Angle', component: 'PerimeterPage', image: 'assets/img/qaprofil/perimeterangle.png' },
            { title: 'Furring Channel', component: 'FurringChannelPage', image: 'assets/img/qaprofil/furring_channel.png' },
            { title: 'Main Channel', component: 'MainchannelPage', image: 'assets/img/qaprofil/main.png' },
            { title: 'Angle Bead', component: 'AnglebeadPage', image: 'assets/img/qaprofil/angle.png' },
            { title: 'Runner', component: 'RunnerPage', image: 'assets/img/qaprofil/runner.png' },
            { title: 'J-Trim', component: 'JtrimPage', image: 'assets/img/qaprofil/jtrim.png' },
            { title: 'Stud', component: 'StudlesPage', image: 'assets/img/qaprofil/stud_les.png' }
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
    GypsumPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    GypsumPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    GypsumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GypsumPage');
    };
    GypsumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gypsum',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/gypsum/gypsum.html"*/' \n\n<ion-header >\n  <ion-navbar color="primary" >\n          \n             <font   face="Cambria" color="0f056b" size="3"> <b>Gypsum Ceilings & Partitions Systems</b></font>\n          \n        \n  </ion-navbar>\n</ion-header>\n\n\n\n  <style>\n.masters {\n \n   background: url(\'assets/img/steel.jpg\') repeat ;\n}\n \n</style>\n\n\n\n<ion-content>\n\n  <ion-list  >\n    <ion-item-sliding  *ngFor="let p of pages" > \n       \n           <button  class="masters"  menuClose ion-item  (click)="goToSecond(p.component)">\n        <ion-avatar item-start>\n<img width="70" height="70" src="{{p.image}}" alt=""/>\n        </ion-avatar>\n               <h2><b><font   face="Cambria" color="0000" size="4">{{p.title}}</font></b></h2>\n        \n       \n      </button>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/gypsum/gypsum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], GypsumPage);
    return GypsumPage;
}());

//# sourceMappingURL=gypsum.js.map

/***/ })

});
//# sourceMappingURL=37.js.map