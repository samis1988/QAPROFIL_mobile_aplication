webpackJsonp([40],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitPageModule", function() { return ExitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exit__ = __webpack_require__(502);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExitPageModule = /** @class */ (function () {
    function ExitPageModule() {
    }
    ExitPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exit__["a" /* ExitPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exit__["a" /* ExitPage */]),
            ],
        })
    ], ExitPageModule);
    return ExitPageModule;
}());

//# sourceMappingURL=exit.module.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(141);
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
 * Generated class for the ExitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExitPage = /** @class */ (function () {
    function ExitPage(platform, statusBar, splashScreen, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.alertShown = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
        });
    }
    ExitPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExitPage');
    };
    ExitPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want Exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    ExitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exit',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/exit/exit.html"*/'\n \n\n\n\n   <style>\n.masters {\n \n   background: url(\'assets/img/steel.jpg\') repeat ;\n}\n \n</style>\n\n \n\n<ion-content>\n\n  <ion-list  >\n    <ion-item-sliding >\n       \n           <button class="masters" menuClose ion-item  (click)="presentConfirm()">\n        <table><tr><td><img width="70" height="70" src="assets/img/exit.png" alt=""/></td>\n            <td><h2><b><font   face="Cambria" color="0000" size="7">&nbsp;&nbsp; Exit </font></b></h2></td></tr></table>\n\n         \n         \n        \n       \n      </button>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/exit/exit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ExitPage);
    return ExitPage;
}());

//# sourceMappingURL=exit.js.map

/***/ })

});
//# sourceMappingURL=40.js.map