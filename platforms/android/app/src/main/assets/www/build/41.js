webpackJsonp([41],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownspoutPageModule", function() { return DownspoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__downspout__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DownspoutPageModule = /** @class */ (function () {
    function DownspoutPageModule() {
    }
    DownspoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__downspout__["a" /* DownspoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__downspout__["a" /* DownspoutPage */]),
            ],
        })
    ], DownspoutPageModule);
    return DownspoutPageModule;
}());

//# sourceMappingURL=downspout.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownspoutPage; });
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
 * Generated class for the StripsjointPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownspoutPage = /** @class */ (function () {
    function DownspoutPage(navCtrl, navParams, imageViewerCtrl, platform, userservice, orderservice, http, toastController) {
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
        this.title = "DownSpout";
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
    DownspoutPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    DownspoutPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad StripsjointPage');
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
    DownspoutPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    DownspoutPage.prototype.producOne = function (e) {
        console.log(this.product1);
        if (this.product1 == true)
            this.p1 = "DownSpout";
        else
            this.p1 = "";
        console.log(this.p1);
    };
    DownspoutPage.prototype.producTwo = function (e) {
        console.log(this.p1 + this.product2);
        if (this.product2 == true)
            this.p2 = "Downspout Elbow";
        else
            this.p2 = "";
        console.log(this.p2);
    };
    DownspoutPage.prototype.addToCart = function () {
        if (this.product1 == false && this.product2 == false)
            this.sendNotification("Please choose a product to add to the cart");
        else {
            if (this.color == null || this.width == null || this.thicknes == null || this.quantity == null || this.quantity < 1) {
                this.sendNotification("Please choose the characteristics of the product");
            }
            else {
                if (this.product1 == true) {
                    var data = {
                        product: this.p1,
                        color: this.color,
                        width: this.width,
                        thickness: this.thicknes,
                        image: "assets/img/qaprofil/roof_pannel/downspot1.png",
                        quantity: this.quantity,
                    };
                    this.orderservice.setOrder(data);
                }
                if (this.product2 == true) {
                    var data = {
                        product: this.p2,
                        color: this.color,
                        width: this.width,
                        thickness: this.thicknes,
                        image: "assets/img/qaprofil/roof_pannel/downspot1.png",
                        quantity: 1,
                    };
                    console.log(data);
                    this.orderservice.setOrder(data);
                }
                this.sendNotification('Product added to the cart');
            }
        }
    };
    DownspoutPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    DownspoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-downspout',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/downspout/downspout.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title color="white"> <b>Down Spout</b></ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <table>\n    <tr>\n      <td> <img src="assets/img/qaprofil/roof_pannel/downspot1.png" #myImage (click)="presentImage(myImage)" /></td>\n      <td><img src="assets/img/qaprofil/roof_pannel/downspot2.png" #myImage1 (click)="presentImage(myImage1)" /></td>\n    </tr>\n  </table>\n\n  <ion-card-content>\n\n    <p>\n      <font face="Times New Roman" color="black" size="3">Item\'s Name:</font>\n      <font face="Arial Black" color="black" size="3"> Down Spout 105 X 73</font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="3">Item\'s Code:</font>\n      <font face="Arial Black" color="black" size="3">QSGDS105-73 </font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="4">* Customise your product :</font>\n    </p>\n    <ion-list>\n      <ion-item>\n        <ion-label>DownSpout</ion-label>\n        <ion-checkbox [(ngModel)]="product1" (click)="producOne($event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Downspout Elbow</ion-label>\n        <ion-checkbox [(ngModel)]="product2" (click)="producTwo($event)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Colors</ion-label>\n        <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Width</ion-label>\n        <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thickness</ion-label>\n        <ion-select [(ngModel)]="thicknes" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let t of thinkness" value="{{t.value}}">{{t.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines class="itemform">\n        <ion-label>Qty</ion-label>\n        <ion-input class="inputClass" id="quantity" name="quantity" type="number" [(ngModel)]="quantity" required="true" clearInput=true min="0"\n           placeholder="Enter a quantity ...">\n        </ion-input>\n     </ion-item>\n    </ion-list>\n  </ion-card-content>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addToCart()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/downspout/downspout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_orderservice_orderservice__["a" /* OrderserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], DownspoutPage);
    return DownspoutPage;
}());

//# sourceMappingURL=downspout.js.map

/***/ })

});
//# sourceMappingURL=41.js.map