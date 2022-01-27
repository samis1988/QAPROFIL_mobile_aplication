webpackJsonp([48],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialPage = /** @class */ (function () {
    function TutorialPage(navCtrl, menu, translate, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.platform = platform;
        this.showSkip = true;
        this.dir = 'ltr';
        this.dir = platform.dir();
        translate.get(["TUTORIAL_SLIDE1_TITLE",
            "TUTORIAL_SLIDE1_DESCRIPTION",
            "TUTORIAL_SLIDE2_TITLE",
            "TUTORIAL_SLIDE2_DESCRIPTION",
            "TUTORIAL_SLIDE3_TITLE",
            "TUTORIAL_SLIDE3_DESCRIPTION",
        ]).subscribe(function (values) {
            console.log('Loaded values', values);
            _this.slides = [
                {
                    isend: false,
                    title: 'Welcome To Qaprofil',
                    description: '',
                    image: 'assets/img/1.jpg',
                },
                {
                    isend: false,
                    title: 'Slittng Line',
                    description: '',
                    image: 'assets/img/2.jpg',
                },
                {
                    isend: false,
                    title: 'Gypsum Ceilings & Partions Systems',
                    description: '',
                    image: 'assets/img/3.jpg',
                },
                {
                    isend: false,
                    title: 'Indoor Aluminum False Ceilings',
                    description: '',
                    image: 'assets/img/4.jpg',
                },
                {
                    isend: false,
                    title: 'Light Gauge Steel Building',
                    description: '',
                    image: 'assets/img/5.jpg',
                },
                {
                    isend: true,
                    title: 'Rouf Panels sheet and Accessories',
                    description: '',
                    image: 'assets/img/6.jpg',
                }
            ];
        });
    }
    TutorialPage.prototype.startApp = function () {
        this.navCtrl.setRoot('TabsPage', {}, {
            animate: true,
            direction: 'forward'
        });
    };
    TutorialPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    TutorialPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the tutorial page
        this.menu.enable(false);
    };
    TutorialPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    TutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tutorial',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/tutorial/tutorial.html"*/'\n<ion-content class="ion-padding masters">\n  <ion-slides pager="true" dir="{{dir}}" (ionSlideWillChange)="onSlideChangeStart($event)" #slideWithNav>\n    <ion-slide class="ion-padding" *ngFor="let slide of slides">\n      <div class="navigator">\n      </div>\n      <img [src]="slide.image" >\n      <div class="navig">\n       \n        <button ion-button color="primary" clear (click)="slideWithNav.slideNext()" [disabled]="slide.isend">NEXT</button>\n        <button ion-button color="primary" clear (click)="startApp()">{{ \'TUTORIAL_SKIP_BUTTON\' | translate}}</button>\n      </div>\n      \n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/tutorial/tutorial.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], TutorialPage);
    return TutorialPage;
}());

//# sourceMappingURL=tutorial.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserserviceProvider = /** @class */ (function () {
    function UserserviceProvider(http) {
        this.http = http;
        this.baseURL = "https://erp.qaprofil.com.qa/api/v1";
    }
    UserserviceProvider.prototype.setUser = function (info) {
        this.user = info;
        console.log(this.user);
    };
    UserserviceProvider.prototype.getUser = function () {
        return this.user;
    };
    UserserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserserviceProvider);
    return UserserviceProvider;
}());

//# sourceMappingURL=userservice.js.map

/***/ }),

/***/ 178:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		729,
		47
	],
	"../pages/account/account.module": [
		331
	],
	"../pages/anglebead/anglebead.module": [
		730,
		46
	],
	"../pages/arcroof/arcroof.module": [
		731,
		45
	],
	"../pages/cards/cards.module": [
		732,
		44
	],
	"../pages/cart/cart.module": [
		733,
		43
	],
	"../pages/contact/contact.module": [
		734,
		42
	],
	"../pages/downspout/downspout.module": [
		735,
		41
	],
	"../pages/exit/exit.module": [
		736,
		40
	],
	"../pages/furring-channel/furring-channel.module": [
		737,
		39
	],
	"../pages/galleryalum/galleryalum.module": [
		738,
		38
	],
	"../pages/gypsum/gypsum.module": [
		739,
		37
	],
	"../pages/indooralum/indooralum.module": [
		740,
		36
	],
	"../pages/item-create/item-create.module": [
		741,
		35
	],
	"../pages/item-detail/item-detail.module": [
		742,
		34
	],
	"../pages/jointpanel/jointpanel.module": [
		743,
		33
	],
	"../pages/jtrim/jtrim.module": [
		744,
		32
	],
	"../pages/lightgaugesteel/lightgaugesteel.module": [
		745,
		31
	],
	"../pages/lintel/lintel.module": [
		746,
		30
	],
	"../pages/list-master/list-master.module": [
		338
	],
	"../pages/login/login.module": [
		747,
		29
	],
	"../pages/mainchannel/mainchannel.module": [
		748,
		28
	],
	"../pages/menu/menu.module": [
		749,
		27
	],
	"../pages/message/message.module": [
		750,
		26
	],
	"../pages/myorder/myorder.module": [
		751,
		25
	],
	"../pages/panelstrip/panelstrip.module": [
		753,
		24
	],
	"../pages/perimeter/perimeter.module": [
		752,
		23
	],
	"../pages/perimeterangle/perimeterangle.module": [
		754,
		22
	],
	"../pages/profile/profile.module": [
		755,
		21
	],
	"../pages/qapcarrier/qapcarrier.module": [
		756,
		20
	],
	"../pages/qaponetwo/qaponetwo.module": [
		757,
		19
	],
	"../pages/qapstrips/qapstrips.module": [
		758,
		18
	],
	"../pages/quality/quality.module": [
		759,
		17
	],
	"../pages/register/register.module": [
		760,
		16
	],
	"../pages/resetpwd/resetpwd.module": [
		761,
		15
	],
	"../pages/ridgecap/ridgecap.module": [
		762,
		14
	],
	"../pages/roofpanels/roofpanels.module": [
		763,
		13
	],
	"../pages/roofsheet/roofsheet.module": [
		764,
		12
	],
	"../pages/runner/runner.module": [
		765,
		11
	],
	"../pages/search/search.module": [
		344
	],
	"../pages/semiround/semiround.module": [
		766,
		10
	],
	"../pages/signup/signup.module": [
		767,
		9
	],
	"../pages/slitting/slitting.module": [
		768,
		8
	],
	"../pages/stripsjoint/stripsjoint.module": [
		769,
		7
	],
	"../pages/studles/studles.module": [
		770,
		6
	],
	"../pages/tabs/tabs.module": [
		346
	],
	"../pages/tbar/tbar.module": [
		771,
		5
	],
	"../pages/tutorial/tutorial.module": [
		348
	],
	"../pages/uchannel/uchannel.module": [
		772,
		4
	],
	"../pages/vedioqaprofil/vedioqaprofil.module": [
		773,
		3
	],
	"../pages/vsection/vsection.module": [
		774,
		2
	],
	"../pages/watergater/watergater.module": [
		775,
		1
	],
	"../pages/waveroof/waveroof.module": [
		776,
		0
	],
	"../pages/welcome/welcome.module": [
		349
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 244;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__account__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AccountPageModule = /** @class */ (function () {
    function AccountPageModule() {
    }
    AccountPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__account__["a" /* AccountPage */]),
            ],
        })
    ], AccountPageModule);
    return AccountPageModule;
}());

//# sourceMappingURL=account.module.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
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







/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, storage, loadingCtrl) {
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
        this.isConnect = false;
        this.isRegister = false;
        // Create form builder validation rules
        this.sginForm = fb.group({
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4)]),
        });
        this.exampleForm = fb.group({
            "name": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            "phone": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4)]),
        });
        //this.storage.clear();
        this.getValue();
        this.baseURL = this.userservice.baseURL;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goToPage = function (page) {
        if (page === 'logout') {
            this.storage.clear();
            this.navCtrl.setRoot('TabsPage');
        }
        else if (page == "LoginPage") {
            this.navCtrl.setRoot(page);
        }
        else {
            this.navCtrl.push(page, {
                p: this.id,
            });
        }
    };
    AccountPage.prototype.navigateTo = function (page) {
        if (page == 'RegisterPage') {
            this.isRegister = true;
            //this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }
        else {
            this.navCtrl.push(page);
        }
    };
    AccountPage.prototype.alreday = function () {
        this.isRegister = false;
    };
    AccountPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
            if (_this.id == null) {
                _this.id = 0;
                _this.isConnect = false;
            }
            else {
                _this.isConnect = true;
            }
        });
        this.storage.get('NAME').then(function (result) {
            _this.name = result;
            console.log('name', _this.name);
        });
    };
    AccountPage.prototype.doSignup = function () {
        this.login();
    };
    AccountPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var request = this.baseURL + "/user/login";
        var credential = { email: this.sginForm.value['email'], password: this.sginForm.value['password'] };
        this.http.post(request, credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.name = user.name;
            _this.saveValue(_this.info);
            _this.getValue();
            _this.goback();
        }, function (error) {
            loading.dismiss();
            _this.sendNotification("please check your credential");
        });
    };
    AccountPage.prototype.sigin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { name: this.exampleForm.value['name'], email: this.exampleForm.value['email'], phone: this.exampleForm.value['phone'], password: this.exampleForm.value['password'] };
        this.http.post(this.baseURL + "/user/create", credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.name = user.name;
            _this.userservice.setUser(_this.info);
            _this.saveValue(_this.info);
            _this.getValue();
            _this.sendNotification('user create successfully');
            _this.goback();
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    AccountPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    AccountPage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    AccountPage.prototype.goback = function () {
        this.isConnect = true;
        this.navCtrl.setRoot(this.navCtrl.getActive().component);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="primary" no-border>\n    <ion-title color="white">Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!-- (submit)="doSignup()"-->\n\n\n  <ion-content>\n    <div class="banner" *ngIf="isConnect==false && isRegister==false">\n      <img src="../assets/img/banner.svg" />\n\n      <div class="search">\n        <div class= "text-center">   \n           <img src="../assets/img/logo.png">  \n        </div>\n        <form  [formGroup]="sginForm">\n          <ion-list  no-lines padding>\n      \n            <ion-item  no-lines class="itemform">\n              <ion-input type="email"  formControlName="email"  placeholder="Email" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="sginForm.controls.email.invalid && sginForm.controls.email.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid email</span>\n              </ion-col>\n            </ion-row>\n            <p></p>\n            <ion-item  no-lines class="itemform">\n              <ion-input type="password"  formControlName="password" placeholder="Password" required></ion-input>\n            </ion-item>\n            <ion-row *ngIf="sginForm.controls.password.invalid && sginForm.controls.password.dirty">\n              <ion-col>\n                <span class="error-txt">Please enter a valid password</span>\n              </ion-col>\n            </ion-row>\n            <p class="forget" (click)="navigateTo(\'ResetpwdPage\')">Forgot Password?</p>\n            <div no-lines>\n              <button ion-button color="primary" block [disabled]="sginForm.invalid" (click)="doSignup()">Signup</button>\n            </div>\n      \n          </ion-list>\n        </form> \n        <div class= "text-center">   \n          <h6 class="register" (click)="navigateTo(\'RegisterPage\')"> Dont you have an account! register now</h6>\n       </div>\n      </div>\n    </div>\n    <div class="banner" *ngIf="isConnect==true">\n      <img src="../assets/img/Qaprofil.jpg" />\n\n      \n      <ion-card>\n        <ion-card-header>\n          <b>Welcome {{name}}</b>\n          <p class="sub">Manage your profile:</p>\n        </ion-card-header>\n         \n        <ion-list>\n          <button ion-item (click)="goToPage(\'ProfilePage\')">\n            <ion-icon ios="ios-person" md="md-person" item-start color="secondary"></ion-icon>\n            My Profile\n          </button>\n      \n          <button ion-item (click)="goToPage(\'MyorderPage\')">\n            <ion-icon name="archive" item-start color="secondary"></ion-icon>\n            My Orders\n          </button>\n      \n          <button ion-item (click)="goToPage(\'logout\')">\n            <ion-icon ios="ios-exit" md="md-exit" item-start color="secondary"></ion-icon>\n            Log Out\n          </button>\n    \n        </ion-list>\n      </ion-card>\n    </div>\n    <div class="banner" *ngIf="isRegister==true && isConnect==false">\n      <img src="../assets/img/banner.svg" />\n      <div class="reg">\n         <div class="text-center">\n            <img src="../assets/img/logo.png">\n         </div>\n         <div>\n            <!--(ngSubmit)="sigin(this.requestName,this.requestEmail,this.requestMobile,this.requestDescription)"-->\n            <div padding-top>\n               <form [formGroup]="exampleForm">\n\n                  <ion-list no-lines>\n                     <ion-item no-lines class="item">\n                        <ion-input class="inputClass" id="nameInput" formControlName="name" name="name" type="text"\n                           placeholder="Enter a Name ...">\n                        </ion-input>\n                     </ion-item>\n                     <ion-row *ngIf="exampleForm.controls.name.invalid && exampleForm.controls.name.dirty">\n                        <ion-col>\n                           <span class="error-txt">Please enter a valid Name</span>\n                        </ion-col>\n                     </ion-row>\n                     <p></p>\n\n\n                     <ion-item no-lines class="item">\n                        <ion-input class="inputClass" id="nameInput" formControlName="email" type="email"\n                           name="email" placeholder="Enter a Email ...">\n                        </ion-input>\n                     </ion-item>\n                     <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n                        <ion-col>\n                           <span class="error-txt">Please enter a valid email</span>\n                        </ion-col>\n                     </ion-row>\n                     <p></p>\n\n\n                     <ion-item no-lines class="item">\n                        <ion-input class="inputClass" id="nameInput" formControlName="phone" name="phone"\n                           type="number" placeholder="Enter a mobile ...">\n                        </ion-input>\n                     </ion-item>\n                     <ion-row *ngIf="exampleForm.controls.phone.invalid && exampleForm.controls.phone.dirty">\n                        <ion-col>\n                           <span class="error-txt">Please enter a valid phone</span>\n                        </ion-col>\n                     </ion-row>\n                     <p></p>\n                     <ion-item no-lines class="item">\n                        <ion-input class="inputClass" id="nameInput" formControlName="password" name="password"\n                           type="password" placeholder="Enter a Password ...">\n                        </ion-input>\n                     </ion-item>\n                     <ion-row *ngIf="exampleForm.controls.password.invalid && exampleForm.controls.password.dirty">\n                        <ion-col>\n                           <span class="error-txt">Please enter a valid password</span>\n                        </ion-col>\n                     </ion-row>\n                     <p></p>\n\n                     <button ion-button color="secondary" text-center block [disabled]="exampleForm.invalid"\n                        (click)="sigin()">Register</button>\n\n\n                  </ion-list>\n\n               </form>\n            </div>\n         </div>\n         <div class="text-center">\n            <h6 class="register" (click)="alreday()"> already have an account!</h6>\n         </div>\n      </div>\n   </div>\n  </ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/account/account.html"*/,
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
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Roof Sheet",
            "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
            "about": 'RoofsheetPage',
        };
        var items = [
            {
                "name": "Roof Sheet",
                "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
                about: 'RoofsheetPage'
            },
            {
                "name": "Wave Roof",
                "profilePic": "assets/img/qaprofil/roof_pannel/wave.png",
                "about": 'WaveroofPage'
            },
            {
                "name": "ARC Roof",
                "profilePic": "assets/img/qaprofil/roof_pannel/arc_roof.png",
                "about": "ArcroofPage"
            },
            {
                "name": "Ridge Cap",
                "profilePic": "assets/img/qaprofil/roof_pannel/ridge_cap.png",
                "about": "RidgecapPage"
            },
            {
                "name": "Down Spout",
                "profilePic": "assets/img/qaprofil/roof_pannel/downspot1.png",
                "about": "DownspoutPage"
            },
            {
                "name": "Water Gutter",
                "profilePic": "assets/img/qaprofil/roof_pannel/water_gutter.bmp",
                "about": "WatergaterPage"
            },
            {
                "name": "Lintel",
                "profilePic": "assets/img/qaprofil/lintel.jpg",
                "about": "LintelPage"
            },
            {
                "name": "Perimeter Angle",
                "profilePic": "assets/img/qaprofil/perimeterangle.png",
                "about": "PerimeterPage"
            },
            {
                "name": "Furring Channel",
                "profilePic": "assets/img/qaprofil/furring_channel.png",
                "about": "FurringChannelPage"
            },
            {
                "name": "Main Channel",
                "profilePic": "assets/img/qaprofil/main.png",
                "about": "MainchannelPage"
            },
            {
                "name": "Angle Bead",
                "profilePic": "assets/img/qaprofil/angle.png",
                "about": "AnglebeadPage"
            },
            {
                "name": "Runner",
                "profilePic": "assets/img/qaprofil/runner.png",
                "about": "RunnerPage"
            },
            {
                "name": "J-Trim",
                "profilePic": "assets/img/qaprofil/angle.png",
                "about": "JtrimPage"
            },
            {
                "name": "Stud LES",
                "profilePic": "assets/img/qaprofil/stud_les.png",
                "about": "StudlesPage"
            },
            {
                "name": "V Section",
                "profilePic": "assets/img/qaprofil/vsection.png",
                "about": "VsectionPage"
            },
            {
                "name": "Qap Carrier",
                "profilePic": "assets/img/qaprofil/qap_carrier.png",
                "about": "QapcarrierPage"
            },
            {
                "name": "Perimeter Angle",
                "profilePic": "assets/img/qaprofil/p_a_alum.png",
                "about": "PerimeteranglePage"
            },
            {
                "name": "U Channel",
                "profilePic": "assets/img/qaprofil/u_channel.png",
                "about": "UchannelPage"
            },
            {
                "name": "84R and Joints Strips",
                "profilePic": "assets/img/qaprofil/84r/1.png",
                "about": "StripsjointPage"
            },
            {
                "name": "Qap 50 Strips",
                "profilePic": "assets/img/qaprofil/qap50/1.png",
                "about": "QapstripsPage"
            },
            {
                "name": "Qap 100 - 200 Strips",
                "profilePic": "assets/img/qaprofil/qap100-200/1.png",
                "about": "QaponetwoPage"
            },
            {
                "name": "T- Bar",
                "profilePic": "assets/img/qaprofil/tbar/4.png",
                "about": "TbarPage"
            },
            {
                "name": "Semi-Round Panel",
                "profilePic": "assets/img/qaprofil/bambo/1.jpg",
                "about": "SemiroundPage"
            },
            {
                "name": "Photo Gallery",
                "profilePic": "assets/img/qaprofil/gallery.png",
                "about": "GalleryalumPage"
            },
            {
                "name": "Light Gauge Steel Cabins",
                "profilePic": "assets/img/qaprofil/cabins.jpg",
                "about": "LightgaugesteelPage"
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, items, modalCtrl, platform, app, document, file, fileOpener, inAppBrowser, transfer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.app = app;
        this.document = document;
        this.file = file;
        this.fileOpener = fileOpener;
        this.inAppBrowser = inAppBrowser;
        this.transfer = transfer;
        this.pages = [
            { title: 'Gypsum Ceilings', component: 'GypsumPage', image: 'assets/img/qaprofil/new_gypsum.jpg' },
            { title: 'Indoor Aluminum', component: 'IndooralumPage', image: 'assets/img/qaprofil/aluminum.jpg' },
            { title: 'Light Gauge Steel', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/cabins.jpg' },
            { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/roof.jpg' },
            { title: 'Slitting Line', component: 'SlittingPage', image: 'assets/img/qaprofil/new_slitting.jpg' },
            { title: 'Buildings Accessories', component: 'LintelPage', image: 'assets/img/qaprofil/lintel.jpg' },
            { title: 'Youtube Video', component: 'VedioqaprofilPage', image: 'assets/events/ev3.png' },
            { title: 'Catalogue pdf', component: 'cataloge', image: 'assets/img/pdf.jpg' }
        ];
        this.currentItems = this.items.query();
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("list-master");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    ListMasterPage.prototype.goToSecond = function (page) {
        if (page == "cataloge")
            this.openExternalUrl('https://www.qaprofil.com.qa/full_catalogue/mobile/index.html');
        else
            this.navCtrl.push(page);
    };
    ListMasterPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, '5-tools.pdf', this.file.dataDirectory, '${fakeName}.pdf').then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'My PDF'
            };
            this.document.viewDocument('${filePath}/5–tools.pdf', 'application/pdf', options);
        }
    };
    ListMasterPage.prototype.downloadAndOpenPdf = function () {
        var _this = this;
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else {
            path = this.file.dataDirectory;
        }
        var transfer = this.transfer.create();
        transfer.download('https://qaprofil.com.qa/file/fullcatalog.pdf', path + 'myfile.pdf')
            .then(function (entry) {
            var url = entry.toURL();
            _this.document.viewDocument(url, 'application/pdf', {});
        });
    };
    ListMasterPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    ListMasterPage.prototype.openExternalUrl = function (url) {
        this.inAppBrowser.create(url, '_blank');
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/list-master/list-master.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <table>\n      <tr>\n        <td>\n          <ion-buttons right end>\n            <button ion-button icon-only (click)="startApp(\'WelcomePage\')">\n              <b>\n                <ion-icon color="white" name="md-arrow-back"></ion-icon>\n              </b>\n            </button>\n          </ion-buttons>\n        </td>\n        <td>\n\n          <ion-title> <b>Products</b></ion-title>\n\n        </td>\n\n\n\n      </tr>\n    </table>\n\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="list">\n    <ion-card *ngFor="let p of pages">\n      <ion-list no-lines (click)="goToSecond(p.component)">\n        <ion-item no-padding>\n\n\n          <img class="cover" src="{{p.image}}">\n\n\n          <div text-center>\n            <h4 class="description">{{p.title}}</h4>\n            <button ion-button outline> Discover</button>\n          </div>\n\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(345);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, platform, items) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.currentItems = [];
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("gypsum");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    SearchPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/search/search.html"*/'<ion-header no-border>\n  <ion-navbar color="primary" no-border>\n    <table>\n      <tr>\n        <td>\n          <ion-buttons right end>\n            <button ion-button icon-only (click)="goToSecond(\'WelcomePage\')">\n              <b>\n                <ion-icon color="white" name="md-arrow-back"></ion-icon>\n              </b>\n            </button>\n          </ion-buttons>\n        </td>\n        <td>\n          <ion-title>\n            <font face="Cambria" color="white" size="4"> <b>{{ \'SEARCH_TITLE\' | translate }}</b></font>\n          </ion-title>\n        </td>\n      </tr>\n    </table>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="background">\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Items"></ion-searchbar>\n  </div>\n  <ion-list>\n    <button ion-item (click)="goToSecond(item.about)" *ngFor="let item of currentItems">\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n\n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__tabs__["a" /* TabsPage */]
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__ = __webpack_require__(92);
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
    function WelcomePage(navCtrl, http, NP, fb, alertCtrl, toastCtrl, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.inAppBrowser = inAppBrowser;
        this.products = [
            { title: 'Gypsum Ceilings', component: 'GypsumPage', image: 'assets/img/qaprofil/new_gypsum.jpg' },
            { title: 'Indoor Aluminum', component: 'IndooralumPage', image: 'assets/img/qaprofil/aluminum.jpg' },
            { title: 'Light Gauge Steel', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/cabins.jpg' },
            { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/roof.jpg' },
            { title: 'Slitting Line', component: 'SlittingPage', image: 'assets/img/qaprofil/new_slitting.jpg' },
            { title: 'Buildings Accessories', component: 'LintelPage', image: 'assets/img/qaprofil/lintel.jpg' },
            { title: 'Catalogue pdf', component: 'VedioqaprofilPage', image: 'assets/img/pdf.jpg' }
        ];
    }
    WelcomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplayDisableOnInteraction = true;
    };
    WelcomePage.prototype.addEntry = function () {
        this.navCtrl.push('MessagePage');
    };
    WelcomePage.prototype.cart = function () {
        this.navCtrl.push('CartPage');
    };
    WelcomePage.prototype.goToSecond = function (page) {
        if (page == 'Youtube Video')
            this.navCtrl.push('VedioqaprofilPage');
        else if (page == 'about')
            this.navCtrl.push('AboutPage');
        else if (page == 'VedioqaprofilPage')
            this.openExternalUrl('https://www.qaprofil.com.qa/full_catalogue/mobile/index.html');
        else
            this.navCtrl.push(page);
    };
    WelcomePage.prototype.openExternalUrl = function (url) {
        this.inAppBrowser.create(url, '_blank');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["v" /* Slides */])
    ], WelcomePage.prototype, "slides", void 0);
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/welcome/welcome.html"*/'<ion-header no-border>\n  <ion-toolbar color="primary" no-border>\n    <div class="row">\n    <button ion-button clear left>\n      <button ion-button clear menuToggle>\n        <img src="../assets/img/menu.svg" />\n      </button>\n    </button>\n\n    <ion-title>\n      Qaprofil\n    </ion-title>\n\n    <button ion-button clear right>\n      <button ion-button clear (click)="cart()">\n        <ion-icon class="set" ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </button>\n  </div>\n  </ion-toolbar>\n  \n</ion-header>\n\n<ion-content [fullscreen]="true" class="back">\n  <div class="banner">\n    <img src="../assets/img/banner.svg" />\n\n    <div class="caption ion-padding">\n      Discover our large<br>\n      set of products\n    </div>\n\n    <div class="search" (click)="goToSecond(\'about\')">\n      \n      \n        <h2 class="left"> About</h2>\n    </div>\n  </div>\n\n  <div class="title">\n    <h2>Products</h2>\n\n    \n  </div>\n\n  <div class="event-slider">\n    <ion-slides  class="default-left-padding" #slides>\n      <ion-slide *ngFor="let p of products" (click)="goToSecond(p.component)">\n        <ion-col class="ion-text-left">\n          <ion-card>\n            <ion-card-header no-padding>\n              <img src="{{p.image}}" />\n            </ion-card-header>\n\n            <ion-card-content class="back">\n              \n              <h2 class="eventname">{{p.title}}</h2>\n             \n\n             \n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-slide>\n     \n    </ion-slides>\n  </div>\n\n  <div class="default-top-padding title">\n    <h2>Youtube Videos</h2>\n  </div>\n\n  <div class="live-event">\n    <img src="../assets/events/ev3.png" />\n\n    <div class="info">\n      <div class="content">\n        <h6>Youtube Video</h6>\n\n        <p class="stats">\n          <span><ion-icon name="eye"></ion-icon>&nbsp;2.3K</span><span><ion-icon name="heart"></ion-icon>&nbsp;3758</span>\n        </p>\n\n        <p class="location"><ion-icon name=\'location\'></ion-icon>Middle east, Qatar</p>\n\n      </div>\n\n      <div class="indicator" (click)="goToSecond(\'Youtube Video\')">\n        <div>watch</div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tutorial__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tutorial__["a" /* TutorialPage */]
            ]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());

//# sourceMappingURL=tutorial.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(347);
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

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderserviceProvider = /** @class */ (function () {
    function OrderserviceProvider(http) {
        this.http = http;
        this.order = [];
        console.log('Hello OrderserviceProvider Provider');
    }
    OrderserviceProvider.prototype.setOrder = function (cart) {
        var res = this.order.find(function (p) { return p.product == cart.product; });
        if (res == null)
            this.order.push(cart);
        console.log(this.order);
    };
    OrderserviceProvider.prototype.getOrder = function () {
        console.log(this.order);
        return this.order;
    };
    OrderserviceProvider.prototype.clearOrder = function () {
        this.order.splice(0, this.order.length);
    };
    OrderserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OrderserviceProvider);
    return OrderserviceProvider;
}());

//# sourceMappingURL=orderservice.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemserviceProvider = /** @class */ (function () {
    function ItemserviceProvider(http) {
        this.http = http;
        console.log('Hello ItemserviceProvider Provider');
    }
    ItemserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ItemserviceProvider);
    return ItemserviceProvider;
}());

//# sourceMappingURL=itemservice.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(401);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser_ngx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__mocks_providers_items__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_document_viewer__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_search_search_module__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_list_master_list_master_module__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs_module__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_orderservice_orderservice__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_account_account_module__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_itemservice_itemservice__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_propservice_propservice__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_tutorial_tutorial_module__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_15__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_23__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_search_search_module__["SearchPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_list_master_list_master_module__["ListMasterPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_tutorial_tutorial_module__["TutorialPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_account_account_module__["AccountPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anglebead/anglebead.module#AnglebeadPageModule', name: 'AnglebeadPage', segment: 'anglebead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arcroof/arcroof.module#ArcroofPageModule', name: 'ArcroofPage', segment: 'arcroof', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downspout/downspout.module#DownspoutPageModule', name: 'DownspoutPage', segment: 'downspout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exit/exit.module#ExitPageModule', name: 'ExitPage', segment: 'exit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furring-channel/furring-channel.module#FurringChannelPageModule', name: 'FurringChannelPage', segment: 'furring-channel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galleryalum/galleryalum.module#GalleryalumPageModule', name: 'GalleryalumPage', segment: 'galleryalum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gypsum/gypsum.module#GypsumPageModule', name: 'GypsumPage', segment: 'gypsum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/indooralum/indooralum.module#IndooralumPageModule', name: 'IndooralumPage', segment: 'indooralum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jointpanel/jointpanel.module#JointpanelPageModule', name: 'JointpanelPage', segment: 'jointpanel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jtrim/jtrim.module#JtrimPageModule', name: 'JtrimPage', segment: 'jtrim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lightgaugesteel/lightgaugesteel.module#LightgaugesteelPageModule', name: 'LightgaugesteelPage', segment: 'lightgaugesteel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lintel/lintel.module#LintelPageModule', name: 'LintelPage', segment: 'lintel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainchannel/mainchannel.module#MainchannelPageModule', name: 'MainchannelPage', segment: 'mainchannel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/myorder/myorder.module#MyorderPageModule', name: 'MyorderPage', segment: 'myorder', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perimeter/perimeter.module#PerimeterPageModule', name: 'PerimeterPage', segment: 'perimeter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/panelstrip/panelstrip.module#PanelstripPageModule', name: 'PanelstripPage', segment: 'panelstrip', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perimeterangle/perimeterangle.module#PerimeteranglePageModule', name: 'PerimeteranglePage', segment: 'perimeterangle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qapcarrier/qapcarrier.module#QapcarrierPageModule', name: 'QapcarrierPage', segment: 'qapcarrier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qaponetwo/qaponetwo.module#QaponetwoPageModule', name: 'QaponetwoPage', segment: 'qaponetwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qapstrips/qapstrips.module#QapstripsPageModule', name: 'QapstripsPage', segment: 'qapstrips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quality/quality.module#QualityPageModule', name: 'QualityPage', segment: 'quality', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpwd/resetpwd.module#ResetpwdPageModule', name: 'ResetpwdPage', segment: 'resetpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ridgecap/ridgecap.module#RidgecapPageModule', name: 'RidgecapPage', segment: 'ridgecap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roofpanels/roofpanels.module#RoofpanelsPageModule', name: 'RoofpanelsPage', segment: 'roofpanels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roofsheet/roofsheet.module#RoofsheetPageModule', name: 'RoofsheetPage', segment: 'roofsheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/runner/runner.module#RunnerPageModule', name: 'RunnerPage', segment: 'runner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semiround/semiround.module#SemiroundPageModule', name: 'SemiroundPage', segment: 'semiround', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slitting/slitting.module#SlittingPageModule', name: 'SlittingPage', segment: 'slitting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stripsjoint/stripsjoint.module#StripsjointPageModule', name: 'StripsjointPage', segment: 'stripsjoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studles/studles.module#StudlesPageModule', name: 'StudlesPage', segment: 'studles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tbar/tbar.module#TbarPageModule', name: 'TbarPage', segment: 'tbar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uchannel/uchannel.module#UchannelPageModule', name: 'UchannelPage', segment: 'uchannel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vedioqaprofil/vedioqaprofil.module#VedioqaprofilPageModule', name: 'VedioqaprofilPage', segment: 'vedioqaprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vsection/vsection.module#VsectionPageModule', name: 'VsectionPage', segment: 'vsection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/watergater/watergater.module#WatergaterPageModule', name: 'WatergaterPage', segment: 'watergater', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waveroof/waveroof.module#WaveroofPageModule', name: 'WaveroofPage', segment: 'waveroof', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_22__pages_tutorial_tutorial__["a" /* TutorialPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_14__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_15__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__scaffold_digital_ionic_hardware_buttons__["a" /* HardwareButtons */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number_ngx__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_email_composer__["a" /* EmailComposer */],
                { provide: __WEBPACK_IMPORTED_MODULE_15__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_27__providers_userservice_userservice__["a" /* UserserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_orderservice_orderservice__["a" /* OrderserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_itemservice_itemservice__["a" /* ItemserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_propservice_propservice__["a" /* PropserviceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(336);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(337);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(707);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(708);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(91);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(336);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_master_list_master__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, translateService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__list_master_list_master__["a" /* ListMasterPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__account_account__["a" /* AccountPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__welcome_welcome__["a" /* WelcomePage */];
        this.tab1Title = " ";
        this.tab2Title = " ";
        this.tab3Title = " ";
        this.tab4Title = " ";
        translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE']).subscribe(function (values) {
            _this.tab1Title = values['TAB1_TITLE'];
            _this.tab2Title = values['TAB2_TITLE'];
            _this.tab3Title = "Account";
            _this.tab4Title = "Home";
        });
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab color="primary" [root]="tab4Root" [tabTitle]="tab4Title" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab1Root" [tabTitle]="tab1Title" tabIcon="ios-pricetags" ></ion-tab>\n  <ion-tab [root]="tab2Root" [tabTitle]="tab2Title" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" [tabTitle]="tab3Title" tabIcon="person"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, alertCtrl, app, hardwareButtons) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tutorial_tutorial__["a" /* TutorialPage */];
        //FirstRunPage
        this.alertShown = false;
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage', image: 'assets/img/icon/tutorial.png', ios: "ios-bookmarks", md: "md-bookmarks" },
            { title: 'Quality', component: 'QualityPage', image: 'assets/img/icon/qq.png', ios: "ios-ribbon", md: "md-ribbon" },
            { title: 'Contact', component: 'ContactPage', image: 'assets/img/qaprofil/phone.png', ios: "ios-paper-plane", md: "md-paper-plane" },
            { title: 'Exit', component: 'TutorialPage', image: 'assets/img/exit.png', ios: "ios-power", md: "md-power" }
        ];
        this.pages1 = [
            { title: 'Exit', component: 'TutorialPage', image: 'assets/img/exit.png' }
        ];
        platform.ready().then(function () {
            hardwareButtons.init();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
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
    MyApp.prototype.presentConfirm = function () {
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
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "Exit")
            this.presentConfirm();
        else
            this.nav.push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["q" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/app/app.component.html"*/'<ion-menu [content]="content" type="overlay">\n  <style>\n    .masters {\n\n      background-color: white;\n     \n    }\n\n    .toolbar {\n      background-image: url(\'assets/img/steel.jpg\');\n      background-size: cover;\n      background-position: center center;\n\n    }\n\n    .header {\n      height: 15%;\n      background-color: #fff;\n    }\n\n    .title {\n      text-align: center;\n      color: #800000;\n    }\n\n    .icon {\n      display: inline-block;\n      font-size: 35px;\n      color: #03224c;\n      vertical-align: middle;\n      padding: 2px;\n    }\n\n    .text {\n      display: inline-block;\n      vertical-align: middle;\n    }\n\n    .logo {\n      margin: 5px;\n    }\n  </style>\n\n\n  <ion-header class="header">\n\n\n    <table class="logo">\n\n      <tr>\n        <td> <img height="50" width="50" src="assets/img/logo.png" /></td>\n        <td>\n        <td>\n          <font face="Times New Roman" color="white" size="6" class="title"> <b>QAPROFIL</b></font>\n        </td>\n      </tr>\n    </table>\n  </ion-header>\n\n\n\n\n\n  <ion-content class="masters">\n\n    <ion-list>\n\n\n\n\n      <button class="masters" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <div class="icon">\n          <ion-icon ios="{{p.ios}}" md="{{p.md}}"></ion-icon>\n        </div>\n        <h2 class="text"><b>\n            <font face="Cambria" color="0000" size="4">{{p.title}} </font>\n          </b></h2>\n      </button>\n\n\n\n\n\n\n\n\n    </ion-list>\n\n\n\n\n\n\n\n\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage"></ion-nav>`'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/app/app.component.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_6__scaffold_digital_ionic_hardware_buttons__["a" /* HardwareButtons */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PropserviceProvider = /** @class */ (function () {
    function PropserviceProvider(http) {
        this.http = http;
        console.log('Hello PropserviceProvider Provider');
    }
    PropserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PropserviceProvider);
    return PropserviceProvider;
}());

//# sourceMappingURL=propservice.js.map

/***/ })

},[396]);
//# sourceMappingURL=main.js.map