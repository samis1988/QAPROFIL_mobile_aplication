webpackJsonp([39],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurringChannelPageModule", function() { return FurringChannelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__furring_channel__ = __webpack_require__(785);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FurringChannelPageModule = /** @class */ (function () {
    function FurringChannelPageModule() {
    }
    FurringChannelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__furring_channel__["a" /* FurringChannelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__furring_channel__["a" /* FurringChannelPage */]),
            ],
        })
    ], FurringChannelPageModule);
    return FurringChannelPageModule;
}());

//# sourceMappingURL=furring-channel.module.js.map

/***/ }),

/***/ 785:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurringChannelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_orderservice_orderservice__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(35);
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
 * Generated class for the QapstripsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FurringChannelPage = /** @class */ (function () {
    function FurringChannelPage(navCtrl, navParams, imageViewerCtrl, platform, userservice, orderservice, http, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.userservice = userservice;
        this.orderservice = orderservice;
        this.http = http;
        this.toastController = toastController;
        this.colors = [];
        this.widths = [];
        this.thinkness = [];
        this.quantity = 1;
        this.product1 = false;
        this.product2 = false;
        this.title = "Furring Channel";
        this.p1 = "";
        this.p2 = "";
        this.orders = [];
        this.baseURL = this.userservice.baseURL;
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    FurringChannelPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    FurringChannelPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var request = this.baseURL + "/product/" + this.title;
        console.log(request);
        this.http.get(this.baseURL + "/product/" + this.title, { observe: 'response' }).subscribe(function (data) {
            if (data.status == 200)
                _this.res = data.body;
            console.log(_this.res);
            _this.colors = _this.res.colors;
            _this.widths = _this.res.widths;
            _this.thinkness = _this.res.thinkness;
        }, function (error) {
            console.log(error);
        });
    };
    FurringChannelPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    FurringChannelPage.prototype.addToCart = function () {
        if (this.color == null || this.width == null || this.thicknes == null || this.quantity == null || this.quantity < 1) {
            this.sendNotification("Please choose the characteristics of the product");
        }
        else {
            var data = {
                product: this.title,
                color: this.color,
                width: this.width,
                thickness: this.thicknes,
                image: "assets/img/qaprofil/furring_channel.png",
                quantity: this.quantity,
            };
            this.orderservice.setOrder(data);
            this.sendNotification('Product added to the cart');
        }
    };
    FurringChannelPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    FurringChannelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-furring-channel',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/furring-channel/furring-channel.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> <b>Furring Channel</b></ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <img src="assets/img/qaprofil/furring_channel.png" #myImage (click)="presentImage(myImage)" />\n       \n  <ion-card-content>\n      <p><font face="Times New Roman" color="black" size="3">Item\'s Name:</font> <font   face="Arial Black" color="black" size="3">  Furring Channel</font></p> \n      <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3">QSGFC-30</font></p> \n     \n       \n      <p><font face="Times New Roman" color="black" size="3">Furring Channel : It is a ceiling system Profile onto which the boards are screwed which  in turn is carried by the Main Channel mounted on its wings (B) and well connected by wire connecting clips. </font></p> \n    <p>\n      <font face="Times New Roman" color="black" size="4">* Customise your product :</font>\n    </p>\n    <ion-list>\n      <ion-item>\n        <ion-label>Colors</ion-label>\n        <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Width</ion-label>\n        <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thickness</ion-label>\n        <ion-select [(ngModel)]="thicknes" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let t of thinkness" value="{{t.value}}">{{t.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines class="itemform">\n        <ion-label>Qty</ion-label>\n        <ion-input class="inputClass" id="quantity" name="quantity" type="number" [(ngModel)]="quantity" required="true" clearInput=true min="0"\n           placeholder="Enter a quantity ...">\n        </ion-input>\n     </ion-item>\n    </ion-list>\n  </ion-card-content>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addToCart()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/furring-channel/furring-channel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_orderservice_orderservice__["a" /* OrderserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], FurringChannelPage);
    return FurringChannelPage;
}());

//# sourceMappingURL=furring-channel.js.map

/***/ })

});
//# sourceMappingURL=39.js.map