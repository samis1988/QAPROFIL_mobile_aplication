webpackJsonp([29],{

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(795);
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
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(91);
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
    function LoginPage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.password = '';
        // Create form builder validation rules
        this.exampleForm = fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
        });
        //this.storage.clear();
        this.baseURL = this.userservice.baseURL;
        this.page = this.NP.get('p');
        console.log(this.page);
    }
    LoginPage.prototype.doSignup = function () {
        console.log("Validate successfully");
        console.log(this.exampleForm);
        this.sigin();
    };
    LoginPage.prototype.sigin = function () {
        var _this = this;
        var request = this.baseURL + "/user/login";
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { email: this.exampleForm.value['email'], password: this.exampleForm.value['password'] };
        this.http.post(request, credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.saveValue(_this.info);
            _this.getValue();
            _this.goback();
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    LoginPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    LoginPage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    LoginPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
        });
    };
    LoginPage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.goback = function () {
        if (this.page != null || this.page != undefined || this.page != '') {
            this.navCtrl.push(this.page);
        }
        else {
            //profile
            this.navCtrl.push('CartPage');
        }
    };
    LoginPage.prototype.register = function () {
        if (this.page != null || this.page != undefined || this.page != '') {
            this.navCtrl.push('RegisterPage', {
                p: this.page,
            });
        }
        else
            this.navCtrl.push('RegisterPage');
    };
    LoginPage.prototype.forget = function () {
        this.navCtrl.push('ResetpwdPage', {
            p: 'LoginPage',
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="primary" no-border>\n    <ion-title color="white">Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- (submit)="doSignup()"-->\n\n\n<ion-content>\n  <ion-content [fullscreen]="true" class="back">\n    <div class="banner">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="exampleForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="Email" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <ion-item  no-lines class="itemform">\n              <ion-input type="password"  formControlName="password" placeholder="Password" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="exampleForm.controls.password.invalid && exampleForm.controls.password.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid password</span>\n              </ion-col>\n            </ion-row>\n            <p class= "forget" (click)="forget()">Forgot Password?</p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="exampleForm.invalid" (click)="doSignup()">Signup</button>\n            </div>\n            \n          </ion-list>\n        </form> \n        <div class= "text-center">   \n          <h6 class="register" (click)="register()"> Dont you have an account! register now</h6>\n       </div>\n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=29.js.map