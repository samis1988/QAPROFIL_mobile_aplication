webpackJsonp([30],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LintelPageModule", function() { return LintelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lintel__ = __webpack_require__(793);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LintelPageModule = /** @class */ (function () {
    function LintelPageModule() {
    }
    LintelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lintel__["a" /* LintelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lintel__["a" /* LintelPage */]),
            ],
        })
    ], LintelPageModule);
    return LintelPageModule;
}());

//# sourceMappingURL=lintel.module.js.map

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LintelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__ = __webpack_require__(391);
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
 * Generated class for the LintelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LintelPage = /** @class */ (function () {
    function LintelPage(navCtrl, navParams, imageViewerCtrl, platform, userservice, orderservice, http, toastController) {
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
        this.isValid = false;
        this.title = "lintel";
        this.p1 = "";
        this.orders = [];
        this.elenco = [
            {
                "img": "assets/img/qaprofil/lintel/1.png",
                "posicao": "Lintel",
                "nome": "QSGLNTL"
            },
            {
                "img": "assets/img/qaprofil/lintel/2.png",
                "posicao": "Lintel",
                "nome": "QSGLNTL"
            },
            {
                "img": "assets/img/qaprofil/lintel/3.png",
                "posicao": "Lintel",
                "nome": "QSGLNTL"
            },
            {
                "img": "assets/img/qaprofil/lintel/4.bmp",
                "posicao": "Lintel",
                "nome": "QSGLNTL"
            }
        ];
        this._imageViewerCtrl = imageViewerCtrl;
        this.baseURL = this.userservice.baseURL;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("lintel");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    LintelPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    LintelPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    LintelPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    LintelPage.prototype.ionViewDidLoad = function () {
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
            if (_this.colors.length != 0) {
                _this.isValid = true;
            }
        }, function (error) {
            console.log(error);
        });
    };
    LintelPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    LintelPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    LintelPage.prototype.addToCart = function () {
        if (this.color == null || this.width == null || this.thicknes == null || this.quantity == null || this.quantity < 1) {
            this.sendNotification("Please choose the characteristics of the product");
        }
        else {
            var data = {
                product: this.title,
                color: this.color,
                width: this.width,
                thickness: this.thicknes,
                image: "assets/img/qaprofil/lintel/1.png",
                quantity: this.quantity,
            };
            this.orderservice.setOrder(data);
            this.sendNotification('Product added to the cart');
        }
    };
    LintelPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], LintelPage.prototype, "mySlider", void 0);
    LintelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lintel',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/lintel/lintel.html"*/'<!--\n  Generated template for the WatergaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n\n\n \n\n <ion-content > \n  \n   \n         \n        <ion-card-content>     \n       \n             \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3"> QSGLNTL </font></p> \n             <p><font face="Times New Roman" color="black" size="3">Lintel: Horizontal support of timber, stone, concrete, or steel across the top of a door or window.  </font></p>\n              \n           \n            \n          \n     </ion-card-content>\n              \n       \n</ion-content>\n<ion-header >\n  <ion-navbar color="primary" >\n      <ion-title color="white">Lintel</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="salon-detail">\n  <ion-card  text-wrap>\n    <ion-slides pager="true" paginationClickable=true\n    initialSlide=0\n    loop=true\n    autoplay=1000\n    speed=3000\n    #mySlide\n    >\n      <ion-slide *ngFor="let item of elenco">\n        <img src={{item.img}} alt="chouchouimage" #myImage (click)="presentImage(myImage)">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-item-group>\n      <ion-item lines="none">\n        <h2>Lintel</h2>\n      </ion-item>\n      <ion-item lines="none">\n        <h5 class="detail-item">Item\'s Code:  QSGLNTL</h5>\n      </ion-item>\n      <ion-item lines="none">\n        <h5 class="detail-item">Lintel: Horizontal support of timber, stone, concrete, or steel across the top of a door or window.</h5>\n      </ion-item>\n    </ion-item-group>\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Colors</ion-label>\n        <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Width</ion-label>\n        <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thickness</ion-label>\n        <ion-select [(ngModel)]="thicknes" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let t of thinkness" value="{{t.value}}">{{t.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines class="itemform">\n        <ion-label>Qty</ion-label>\n        <ion-input class="inputClass" id="quantity" name="quantity" type="number" [(ngModel)]="quantity" required="true" clearInput=true min="0"\n           placeholder="Enter a quantity ...">\n        </ion-input>\n     </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-fab right bottom *ngIf="isValid">\n    <button ion-fab color="secondary" (click)="addToCart()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/lintel/lintel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__["a" /* OrderserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], LintelPage);
    return LintelPage;
}());

//# sourceMappingURL=lintel.js.map

/***/ })

});
//# sourceMappingURL=30.js.map