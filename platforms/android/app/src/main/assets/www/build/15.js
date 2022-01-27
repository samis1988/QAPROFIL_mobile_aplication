webpackJsonp([15],{

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpwdPageModule", function() { return ResetpwdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpwd__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResetpwdPageModule = /** @class */ (function () {
    function ResetpwdPageModule() {
    }
    ResetpwdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__resetpwd__["a" /* ResetpwdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__resetpwd__["a" /* ResetpwdPage */]),
            ],
        })
    ], ResetpwdPageModule);
    return ResetpwdPageModule;
}());

//# sourceMappingURL=resetpwd.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__ = __webpack_require__(165);
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
 * Generated class for the ResetpwdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResetpwdPage = /** @class */ (function () {
    function ResetpwdPage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.password = '';
        this.phone = '';
        this.name = '';
        this.STORAGE_VALUE = '';
        this.isCode = false;
        this.isCheck = false;
        // Create form builder validation rules
        this.exampleForm = fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
        });
        this.checkForm = fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            'code': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
        });
        this.changeForm = fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4)]),
        });
        this.baseURL = this.userservice.baseURL;
        /* this.tab = this.navCtrl.parent;*/
        this.page = this.NP.get('p');
    }
    ResetpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpwdPage');
    };
    ResetpwdPage.prototype.doSend = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { email: this.exampleForm.value['email'] };
        this.email = credential.email;
        this.http.post(this.baseURL + "/user/forgetpassword", credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.userservice.setUser(_this.info);
            _this.sendNotification('please check your email to get the code');
            _this.goback("1");
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    ResetpwdPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    ResetpwdPage.prototype.goback = function (a) {
        if (a == "1") {
            this.isCode = true;
            this.checkForm.controls.email.setValue(this.email);
        }
        if (a == "2") {
            this.isCode = true;
            this.isCheck = true;
            this.changeForm.controls.email.setValue(this.email);
            console.log("true");
            //this.navCtrl.setRoot(this.navCtrl.getActive().component); 
        }
        if (a == "3") {
            if (this.page == "LoginPage")
                this.navCtrl.setRoot('CartPage');
            else
                this.navCtrl.setRoot('TabsPage');
        }
    };
    ResetpwdPage.prototype.check = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { email: this.checkForm.value['email'], code: this.checkForm.value['code'] };
        this.email = credential.email;
        this.http.post(this.baseURL + "/user/checkcode", credential, { observe: 'response' }).subscribe(function (data) {
            if (data.status == 200)
                loading.dismiss();
            _this.sendNotification('please change your password');
            _this.goback("2");
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    ResetpwdPage.prototype.changepwd = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { email: this.changeForm.value['email'], password: this.changeForm.value['password'] };
        this.email = credential.email;
        this.http.post(this.baseURL + "/user/changepwd", credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.userservice.setUser(_this.info);
            _this.sendNotification('password changed successfully');
            _this.goback("3");
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/resetpwd/resetpwd.html"*/'<!--\n  Generated template for the ResetpwdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="primary" no-border>\n    <ion-title color="white">Reset Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!-- (submit)="doSignup()"-->\n<ion-content>\n  <ion-content [fullscreen]="true" class="back">\n    <div class="banner" *ngIf="isCode==false && isCheck==false">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="exampleForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="Email" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="exampleForm.invalid" (click)="doSend()">Send</button>\n            </div>\n          </ion-list>\n        </form> \n      </div>\n    </div>\n    <div class="banner" *ngIf="isCode==true && isCheck==false">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="checkForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="Email" required [disabled]></ion-input>\n            </ion-item>\n            <ion-row *ngIf="checkForm.controls.email.invalid && checkForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <ion-item  no-lines class="itemform">\n              <ion-input type="text"  formControlName="code" placeholder="Code" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="checkForm.controls.code.invalid && checkForm.controls.code.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid code</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="checkForm.invalid" (click)="check()">Check</button>\n            </div>\n      \n          </ion-list>\n        </form> \n      </div>\n    </div>\n    <div class="banner" *ngIf="isCode==true && isCheck==true">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="changeForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="Email" required [disabled]></ion-input>\n            </ion-item>\n            <ion-row *ngIf="changeForm.controls.email.invalid && changeForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <ion-item  no-lines class="itemform">\n              <ion-input type="password"  formControlName="password" placeholder="Password" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="changeForm.controls.password.invalid && changeForm.controls.password.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid Password</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="changeForm.invalid" (click)="changepwd()">Save</button>\n            </div>\n      \n          </ion-list>\n        </form> \n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/resetpwd/resetpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ })

});
//# sourceMappingURL=15.js.map