webpackJsonp([29],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, http, navParams, fb, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.navParams = navParams;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        // Initialise module classes
        this.items = [];
        this.name = this.navParams.get('name');
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        this.load();
    };
    LoginPage.prototype.load = function () {
        var _this = this;
        var oo = this.name;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "name": oo }, url = "https://qaprofil.com.qa/ionic/retrieve-data-user.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (data) {
            console.dir(data);
            _this.items = data;
        }, function (error) {
            console.dir(error);
        });
    };
    LoginPage.prototype.viewEntry = function (param) {
        this.navCtrl.push('MessagePage', param);
    };
    LoginPage.prototype.logout = function () {
        this.navCtrl.push('WelcomePage');
    };
    LoginPage.prototype.addEntry = function () {
        this.navCtrl.push('MessagePage', { name: this.name });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/login/login.html"*/' \n<ion-header >\n  <ion-navbar color="primary" >\n         <button \n         class="add"\n         ion-button \n                  round\n         item-right\n         icon-right\n         margin-bottom\n         color="primary"\n         (click)="logout()">\n          <font   face="Cambria" color="#6d071a" size="2">   Logout</font> \n            <ion-icon  color="danger" name="log-out"></ion-icon>\n      </button>\n        <font   face="Cambria" color="0f056b" size="2"> <b>Username : {{name}}</b> </font> \n   \n  \n  </ion-navbar>\n   \n</ion-header>\n\n \n\n<ion-content>\n    \n    \n    <ion-item>\n      <button \n         class="add"\n         ion-button \n         item-right\n         icon-right\n         margin-bottom\n         color="secondary"\n         (click)="addEntry()">\n            Send request\n            <ion-icon name="add"></ion-icon>\n      </button>\n   \n   </ion-item>\n    \n    \n   \n    \n    <p>  <font   face="Arial Black" color="black" size="3"> List Of Request : </font></p>\n    \n  <ion-item  color="marwa"  *ngFor="let item of items">\n      <h2>{{ item.subject }} </h2>\n      <button \n         ion-button \n         color="danger" \n         item-right\n         (click)="viewEntry({ record: item })">View</button>\n   </ion-item>\n\n</ion-content>'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=29.js.map