webpackJsonp([19],{

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaponetwoPageModule", function() { return QaponetwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qaponetwo__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QaponetwoPageModule = /** @class */ (function () {
    function QaponetwoPageModule() {
    }
    QaponetwoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qaponetwo__["a" /* QaponetwoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qaponetwo__["a" /* QaponetwoPage */]),
            ],
        })
    ], QaponetwoPageModule);
    return QaponetwoPageModule;
}());

//# sourceMappingURL=qaponetwo.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaponetwoPage; });
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
 * Generated class for the QaponetwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QaponetwoPage = /** @class */ (function () {
    function QaponetwoPage(navCtrl, navParams, imageViewerCtrl, platform, userservice, orderservice, http, toastController) {
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
        this.product1 = false;
        this.product2 = false;
        this.title = "Qap 100 Strip - Panel";
        this.p1 = "";
        this.p2 = "";
        this.orders = [];
        this.elenco = [
            {
                "img": "assets/img/qaprofil/qap100-200/1.png",
                "posicao": "Qap 100 - 200 Strips",
                "nome": "Qap 100 - Qap 200"
            },
            {
                "img": "assets/img/qaprofil/qap100-200/2.png",
                "posicao": "Qap 100 - 200 Strips",
                "nome": "Qap 100 - Qap 200"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap100-1.jpg",
                "posicao": "Qap 100 - 200 Strips",
                "nome": "Qap 100 - Qap 200"
            }
        ];
        this.baseURL = this.userservice.baseURL;
        this._imageViewerCtrl = imageViewerCtrl;
        this.quantity = 1;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    QaponetwoPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    QaponetwoPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    QaponetwoPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    QaponetwoPage.prototype.ionViewDidLoad = function () {
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
    QaponetwoPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    QaponetwoPage.prototype.producOne = function (e) {
        console.log(this.product1);
        if (this.product1 == true)
            this.p1 = "Qap 100 Strip - Panel";
        else
            this.p1 = "";
        console.log(this.p1);
    };
    QaponetwoPage.prototype.producTwo = function (e) {
        console.log(this.p1 + this.product2);
        if (this.product2 == true)
            this.p2 = "Qap 200 Strip - Panel";
        else
            this.p2 = "";
        console.log(this.p2);
    };
    QaponetwoPage.prototype.addToCart = function () {
        if (this.product1 == false && this.product2 == false)
            this.sendNotification("Please choose a product to add to the cart");
        else {
            if (this.color == null || this.width == null || this.thicknes == null || this.quantity == null || this.quantity < 0) {
                this.sendNotification("Please choose the characteristics of the product");
            }
            else {
                if (this.product1 == true) {
                    var data = {
                        product: this.p1,
                        color: this.color,
                        width: this.width,
                        thickness: this.thicknes,
                        image: "assets/img/qaprofil/qap100-200/2.png",
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
                        image: "assets/img/qaprofil/full_image/qap100-1.jpg",
                        quantity: this.quantity,
                    };
                    console.log(data);
                    this.orderservice.setOrder(data);
                }
                this.sendNotification('Product added to the cart');
            }
        }
    };
    QaponetwoPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], QaponetwoPage.prototype, "mySlider", void 0);
    QaponetwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qaponetwo',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/qaponetwo/qaponetwo.html"*/'<!--\n  Generated template for the QaponetwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> <b>Qap 100 - 200 Strips </b></ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-navbar>\n    <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=1000 speed=3000 #mySlider>\n\n      <ion-slide *ngFor="let item of elenco">\n        <ion-item class="itemPosicao" color="dark">\n          {{item.posicao}}\n        </ion-item>\n        <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n        <ion-item color="primary">\n          {{item.nome}}\n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="swiper-button-next" (click)="slideNext()"></div>\n    <div class="swiper-button-prev" (click)="slidePrev()"></div>\n\n  </ion-navbar>\n\n\n  <ion-card-content>\n    <p>\n      <font face="Times New Roman" color="black" size="3">Qap 100, 200: 80mm (Qap 100) and 180mm (Qap 200) wide strips\n        recessed with a aluminum false ceilings strips. </font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="4">* Customise your product :</font>\n    </p>\n\n\n\n    <ion-list>\n      <ion-item>\n        <ion-label>Qap 100 Strip - Panel</ion-label>\n        <ion-checkbox [(ngModel)]="product1" (click)="producOne($event)"></ion-checkbox>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Qap 200 Strip - Panel</ion-label>\n        <ion-checkbox [(ngModel)]="product2" (click)="producTwo($event)"></ion-checkbox>\n      </ion-item>\n      <ion-item>\n        <ion-label>Colors</ion-label>\n        <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Width</ion-label>\n        <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thickness</ion-label>\n        <ion-select [(ngModel)]="thicknes" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let t of thinkness" value="{{t.value}}">{{t.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n    <ion-item no-lines class="itemform">\n      <ion-label>Qty</ion-label>\n      <ion-input class="inputClass" id="quantity" name="quantity" type="number" [(ngModel)]="quantity" required="true" clearInput=true min="0"\n         placeholder="Enter a quantity ...">\n      </ion-input>\n   </ion-item>\n  </ion-card-content>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addToCart()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/qaponetwo/qaponetwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_orderservice_orderservice__["a" /* OrderserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], QaponetwoPage);
    return QaponetwoPage;
}());

//# sourceMappingURL=qaponetwo.js.map

/***/ })

});
//# sourceMappingURL=19.js.map