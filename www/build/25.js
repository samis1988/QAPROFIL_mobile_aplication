webpackJsonp([25],{

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyorderPageModule", function() { return MyorderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__myorder__ = __webpack_require__(800);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyorderPageModule = /** @class */ (function () {
    function MyorderPageModule() {
    }
    MyorderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__myorder__["a" /* MyorderPage */]),
            ],
        })
    ], MyorderPageModule);
    return MyorderPageModule;
}());

//# sourceMappingURL=myorder.module.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyorderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_itemservice_itemservice__ = __webpack_require__(395);
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
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyorderPage = /** @class */ (function () {
    function MyorderPage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, itemservice, loadingCtrl, storage) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.itemservice = itemservice;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.STORAGE_VALUE = '';
        this.items = [];
        this.isEmptyCart = true;
        this.baseURL = this.userservice.baseURL;
        this.page = this.NP.get('p');
        console.log(this.page);
        this.getValue();
    }
    MyorderPage.prototype.ionViewDidLoad = function () {
        this.getOrder();
    };
    MyorderPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000,
        });
        notification.present();
    };
    MyorderPage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    MyorderPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
        });
    };
    MyorderPage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    MyorderPage.prototype.goback = function () {
        this.navCtrl.pop();
        console.log('Click on button Test Console Log');
    };
    MyorderPage.prototype.getOrder = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var request = this.baseURL + "/user/order";
        this.http.post(request, { id: this.page }, { observe: 'response' }).subscribe(function (data) {
            if (data.status == 200)
                console.log(data.body);
            loading.dismiss();
            _this.products = data.body;
            console.log(_this.products);
            _this.items = _this.products;
            if (_this.items.length > 0) {
                _this.isEmptyCart = false;
            }
            else {
                _this.isEmptyCart = true;
            }
            console.log(_this.items);
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
    };
    MyorderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myorder',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/myorder/myorder.html"*/'<!--\n  Generated template for the MyorderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>My order</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isEmptyCart" class="empty-cart">\n    <div class="empty-results">\n      <h3 text-center>\n        <ion-icon name="archive"></ion-icon>\n      </h3>\n      <p text-center>\n        Your order list is empty\n      </p>\n    </div>\n  </div>\n  <div *ngIf="!isEmptyCart">\n    <!-- Cart Product List -->\n\n    <ion-list no-lines >\n      <ion-card text-wrap>\n      <ion-item-group *ngFor="let item of items; let i = index">\n        <ion-item-divider color="secondary">Order N° {{ i+1 }}--{{ item.id }}</ion-item-divider>\n        <div *ngFor="let p of item.products">\n        <ion-item> <b>{{ p.product }}</b> </ion-item>\n        <ion-item> Color:{{ p.color }}, width:{{ p.width }},  thickness:{{ p.thickness }}</ion-item>\n        </div>\n      </ion-item-group>\n    </ion-card>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/myorder/myorder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_itemservice_itemservice__["a" /* ItemserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MyorderPage);
    return MyorderPage;
}());

//# sourceMappingURL=myorder.js.map

/***/ })

});
//# sourceMappingURL=25.js.map