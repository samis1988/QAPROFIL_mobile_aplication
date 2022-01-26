webpackJsonp([0],{

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(139);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, http, NP, fb, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.baseURI = "https://qaprofil.com.qa/ionic/";
        // Create form builder validation rules
        this.form = fb.group({
            "username": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "password": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    WelcomePage.prototype.signIn = function (name, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "create", "name": name, "password": password }, url = this.baseURI + "manage-data.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (i) {
            console.dir(i);
            if (i > 0) {
                var alert_1 = _this.alertCtrl.create({
                    title: 'CONGRATS',
                    subTitle: ("Your Login success"),
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.push('LoginPage', { name: name });
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: (i),
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (error) {
            console.dir(error);
        });
    };
    WelcomePage.prototype.addEntry = function () {
        this.navCtrl.push('MessagePage');
    };
    WelcomePage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/welcome/welcome.html"*/'<ion-header>\n \n  <ion-toolbar>\n      <button left  menuToggle [ngStyle]="{\'background-color\':\'transparent\'}"><font face="Times New Roman" color="black" size="5"><b> <ion-icon name="ios-list-outline"> Menu</ion-icon></b></font></button>\n    \n  </ion-toolbar>\n     \n</ion-header>\n\n\n<ion-content scroll="false" class="html">\n  <div class="splash-bg"></div>\n  <div class="splash-info">\n    <div class="splash-logo"></div>\n    <div class="splash-intro">\n        <font face="Times New Roman" color="black" size="5"><b>Welcome To Qaprofil</b> </font>\n    </div>\n  </div>\n <p></p>\n <p></p>\n \n          <form [formGroup]="form" (ngSubmit)="signIn (this.requestName,this.requestPassword)">\n\n            <ion-list>\n                \n            \n     \n                \n                <ion-item lines="none" class ="itemform">\n   <ion-input size="20"   class ="inputClass" id = "nameInput" formControlName="username" \n       [(ngModel)]="requestName" type = "text" placeholder = \n       "User Name ........" required>\n   </ion-input>\n</ion-item>\n          <p></p>      \n              \n                \n                        <ion-item lines="none" class ="itemform">\n   <ion-input  class ="inputClass" id = "nameInput" formControlName="password" \n       [(ngModel)]="requestPassword" type = "password" placeholder = \n       "Password ........" required>\n   </ion-input>\n</ion-item>\n                \n             \n             \n                 \n                \n                \n              <p></p>  \n\n\n              \n                  <button    \n                     ion-button  \n                          round\n                     color="secondary" \n                     text-center \n                     block \n                          size="small"\n                     [disabled]="!form.valid">Sign IN</button>\n \n            </ion-list>\n\n         </form>\n    \n     <button \n         class="add"\n         ion-button \n              round\n         item-center\n         icon-center\n              text-center\n         margin-bottom\n              block \n         color="secondary"\n         (click)="register()">\n            Register\n             \n      </button>\n   \n     \n    \n    \n    \n</ion-content>'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map