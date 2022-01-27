webpackJsonp([8],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlittingPageModule", function() { return SlittingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slitting__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlittingPageModule = /** @class */ (function () {
    function SlittingPageModule() {
    }
    SlittingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slitting__["a" /* SlittingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slitting__["a" /* SlittingPage */]),
            ],
        })
    ], SlittingPageModule);
    return SlittingPageModule;
}());

//# sourceMappingURL=slitting.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlittingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(390);
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
 * Generated class for the SlittingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlittingPage = /** @class */ (function () {
    function SlittingPage(navCtrl, navParams, imageViewerCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.elenco = [
            {
                "img": "assets/img/qaprofil/slitting/1.jpg",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/slitting/2.jpg",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/slitting/3.jpg",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/slitting/4.jpg",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/slitting/5.jpg",
                "posicao": "",
                "nome": ""
            }
        ];
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("slitting");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    SlittingPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    SlittingPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    SlittingPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    SlittingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LintelPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], SlittingPage.prototype, "mySlider", void 0);
    SlittingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slitting',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/slitting/slitting.html"*/'<!--\n  Generated template for the WatergaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header >\n  <ion-navbar color="primary" >\n      <ion-title color="white">Slitting</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="salon-detail">\n  <ion-card text-wrap>\n    <ion-slides pager="true" paginationClickable=true\n    initialSlide=0\n    loop=true\n    autoplay=1000\n    speed=3000\n    #mySlide\n    >\n      <ion-slide *ngFor="let item of elenco">\n        <img src={{item.img}} alt="chouchouimage" #myImage (click)="presentImage(myImage)">\n      </ion-slide>\n    </ion-slides>\n\n    <ion-item-group>\n      <ion-item lines="none">\n        <h2>Uncoiler Capacity </h2>\n      </ion-item>\n      <ion-item lines="none">\n        <h5 class="detail-item">1- Coil\'s Max Wt. : 9000 / Kgs.\n        </h5>\n      </ion-item>\n      <ion-item lines="none">\n        <h5 class="detail-item">2- Coil\'s Internal Diameter : 48cm - 55cm.</h5>\n      </ion-item>\n      <ion-item lines="none">\n        <h5 class="detail-item">3- Coils Max Width : 1500mm.</h5>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider>\n      </ion-item-divider>\n      \n        <ion-item lines="none">\n          <h2>Slitter Capacity </h2>\n        </ion-item>\n        <ion-item lines="none">\n        <h5 class="detail-item">\n           1- Slitting Thickness Range : 0.30mm - 2.5mm.</h5>\n        </ion-item>\n      <ion-item lines="none">\n       \n        <h5 class="detail-item">2- Max No. of Slits : 40 pcs (Depending on the thickness).</h5>\n      </ion-item>\n      <ion-item lines="none">\n      \n        <h5 class="detail-item"> 3- Max Width of Mother Coil : 1500mm. </h5>\n      </ion-item>\n      <ion-item lines="none">\n        \n        <h5 class="detail-item">4- Width of the slit : 30mm - 450mm (Depending on the thickness).</h5>\n      </ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider>\n      </ion-item-divider>\n      \n        <ion-item lines="none">\n          <h2>Recoiler Capacity </h2>\n        </ion-item>\n        <ion-item lines="none">\n        <h5 class="detail-item">1- Coil\'s Max Wt. : 9000 / Kgs.</h5>\n        </ion-item>\n      <ion-item lines="none">\n       \n        <h5 class="detail-item">2- Coil\'s Internal Diameter : 50cm.</h5>\n      </ion-item>\n      <ion-item lines="none">\n      \n        <h5 class="detail-item">3- Coil\'s Max Width : 1500mm.</h5>\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n  \n  \n</ion-content>\n'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/slitting/slitting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], SlittingPage);
    return SlittingPage;
}());

//# sourceMappingURL=slitting.js.map

/***/ })

});
//# sourceMappingURL=8.js.map