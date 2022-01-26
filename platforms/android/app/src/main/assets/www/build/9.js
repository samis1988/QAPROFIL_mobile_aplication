webpackJsonp([9],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(815);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, user, toastCtrl, translateService, navParams, http, formBuilder, alertCtrl, toastController, userservice, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.user = user;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.storage = storage;
        this.email = '';
        this.password = '';
        this.account = {
            email: '',
            password: ''
        };
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signupErrorString = value;
        });
        this.baseURL = this.userservice.baseURL;
        this.exampleForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormGroup */]({
            'email': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            'password': new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+$'), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(4)]),
        });
        /*this.page= this.navParams.get('p');
        console.log(this.page);*/
    }
    SignupPage.prototype.doSignup = function () {
        console.log("Validate successfully");
        console.log(this.exampleForm);
        this.sigin();
    };
    SignupPage.prototype.sigin = function () {
        var _this = this;
        var request = this.baseURL + "/user/login";
        var credential = { email: this.exampleForm.value['email'], password: this.exampleForm.value['password'] };
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        this.http.post(request, credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                user = data.body;
            _this.info = user;
            _this.saveValue(_this.info);
            _this.getValue();
            _this.goback();
        }, function (error) {
            _this.sendNotification(error.error);
        });
    };
    SignupPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    SignupPage.prototype.observe = function (arg0, credential, arg2, observe, arg4) {
        throw new Error('Function not implemented.');
    };
    SignupPage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    SignupPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
        });
    };
    SignupPage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    SignupPage.prototype.goback = function () {
        this.navCtrl.pop();
        console.log('Click on button Test Console Log');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/signup/signup.html"*/'<ion-header no-border>\n\n  <ion-navbar color="danger" no-border>\n    <ion-title color="white">{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- (submit)="doSignup()"-->\n\n\n<ion-content>\n  <ion-content [fullscreen]="true" class="back">\n    <div class="banner">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="exampleForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="{{ \'EMAIL\' | translate }}" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <ion-item  no-lines class="itemform">\n              <ion-input type="password"  formControlName="password" placeholder="{{ \'PASSWORD\' | translate }}" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="exampleForm.controls.password.invalid && exampleForm.controls.password.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid password</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="exampleForm.invalid" (click)="doSignup()">{{ \'SIGNUP_BUTTON\' | translate }}</button>\n            </div>\n      \n          </ion-list>\n        </form> \n        <div class= "text-center">   \n          <h6 class="register"> Dont you have an account! register now</h6>\n       </div>\n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], Object, __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=9.js.map