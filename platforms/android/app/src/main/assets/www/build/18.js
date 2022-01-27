webpackJsonp([18],{

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QapstripsPageModule", function() { return QapstripsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qapstrips__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QapstripsPageModule = /** @class */ (function () {
    function QapstripsPageModule() {
    }
    QapstripsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__qapstrips__["a" /* QapstripsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__qapstrips__["a" /* QapstripsPage */]),
            ],
        })
    ], QapstripsPageModule);
    return QapstripsPageModule;
}());

//# sourceMappingURL=qapstrips.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QapstripsPage; });
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
var QapstripsPage = /** @class */ (function () {
    function QapstripsPage(navCtrl, navParams, imageViewerCtrl, platform, userservice, orderservice, http, toastController) {
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
        this.title = "Qap 50 Strip - Panel";
        this.p1 = "";
        this.p2 = "";
        this.orders = [];
        this.elenco = [
            {
                "img": "assets/img/qaprofil/qap50/1.png",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            },
            {
                "img": "assets/img/qaprofil/qap50/2.png",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap50-1.jpg",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
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
    QapstripsPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    QapstripsPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    QapstripsPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    QapstripsPage.prototype.ionViewDidLoad = function () {
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
    QapstripsPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    QapstripsPage.prototype.addToCart = function () {
        if (this.color == null || this.width == null || this.thicknes == null || this.quantity == null || this.quantity < 0) {
            this.sendNotification("Please choose the characteristics of the product");
        }
        else {
            var data = {
                product: this.title,
                color: this.color,
                width: this.width,
                thickness: this.thicknes,
                image: "assets/img/qaprofil/qap50/1.png",
                quantity: this.quantity,
            };
            this.orderservice.setOrder(data);
            this.sendNotification('Product added to the cart');
        }
    };
    QapstripsPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], QapstripsPage.prototype, "mySlider", void 0);
    QapstripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qapstrips',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/qapstrips/qapstrips.html"*/'<!--\n  Generated template for the QapstripsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title> <b>Qap 50 Strips </b></ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n  <ion-navbar>\n    <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=1000 speed=3000 #mySlider>\n\n      <ion-slide *ngFor="let item of elenco">\n        <ion-item class="itemPosicao" color="dark">\n          {{item.posicao}}\n        </ion-item>\n        <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n        <ion-item color="primary">\n          {{item.nome}}\n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="swiper-button-next" (click)="slideNext()"></div>\n    <div class="swiper-button-prev" (click)="slidePrev()"></div>\n\n  </ion-navbar>\n  <ion-card-content>\n    <p>\n      <font face="Times New Roman" color="black" size="3">Item\'s Name:</font>\n      <font face="Arial Black" color="black" size="3"> Qap 50 Strips</font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="3">Item\'s Code:</font>\n      <font face="Arial Black" color="black" size="3">QAQ50</font>\n    </p>\n\n\n    <p>\n      <font face="Times New Roman" color="black" size="3">Qap 50 : A 41mm wide strips recessed with 9mm groove of 7.5mm\n        deep. The ideal design for wood imitation colors for aluminum false ceilings strips. </font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="4">* Customise your product :</font>\n    </p>\n    <ion-list>\n      <ion-item>\n        <ion-label>Colors</ion-label>\n        <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>Width</ion-label>\n        <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Thickness</ion-label>\n        <ion-select [(ngModel)]="thicknes" cancelText="cancel" okText="Ok">\n          <ion-option *ngFor="let t of thinkness" value="{{t.value}}">{{t.value}}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item no-lines class="itemform">\n        <ion-label>Qty</ion-label>\n        <ion-input class="inputClass" id="quantity" name="quantity" type="number" [(ngModel)]="quantity" required="true" clearInput=true min="0"\n           placeholder="Enter a quantity ...">\n        </ion-input>\n     </ion-item>\n    </ion-list>\n  </ion-card-content>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addToCart()">\n      <ion-icon name="cart"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/qapstrips/qapstrips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers_userservice_userservice__["a" /* UserserviceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_orderservice_orderservice__["a" /* OrderserviceProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], QapstripsPage);
    return QapstripsPage;
}());

//# sourceMappingURL=qapstrips.js.map

/***/ })

});
//# sourceMappingURL=18.js.map