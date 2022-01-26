webpackJsonp([32],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightgaugesteelPageModule", function() { return LightgaugesteelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lightgaugesteel__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LightgaugesteelPageModule = /** @class */ (function () {
    function LightgaugesteelPageModule() {
    }
    LightgaugesteelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lightgaugesteel__["a" /* LightgaugesteelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lightgaugesteel__["a" /* LightgaugesteelPage */]),
            ],
        })
    ], LightgaugesteelPageModule);
    return LightgaugesteelPageModule;
}());

//# sourceMappingURL=lightgaugesteel.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LightgaugesteelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(35);
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
 * Generated class for the LightgaugesteelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LightgaugesteelPage = /** @class */ (function () {
    function LightgaugesteelPage(navCtrl, imageViewerCtrl, platform, dom) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.dom = dom;
        this.vid = "https://www.youtube.com/embed/AYFBtgQ6KBM";
        this.elenco = [
            {
                "img": "assets/img/qaprofil/portacabin/1.jpg",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/portacabin/2.png",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/portacabin/3.png",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/portacabin/4.png",
                "posicao": "",
                "nome": ""
            }
        ];
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    LightgaugesteelPage.prototype.sanitaze = function (vid) {
        return this.dom.bypassSecurityTrustResourceUrl(vid);
    };
    LightgaugesteelPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    LightgaugesteelPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    LightgaugesteelPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    LightgaugesteelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LightgaugesteelPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], LightgaugesteelPage.prototype, "mySlider", void 0);
    LightgaugesteelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-lightgaugesteel',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/lightgaugesteel/lightgaugesteel.html"*/'<!--\n  Generated template for the WatergaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n\n<ion-header >\n  <ion-navbar color="primary" >\n      <font   face="Cambria" color="0f056b" size="4"> <b>Light Gauge Steel Cabins </b></font> \n          \n           \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n <ion-navbar  >\n     <ion-slides paginationClickable=true\n                  initialSlide=0\n                  loop=true\n                  autoplay=1000\n                  speed=3000\n                  #mySlider>\n \n        <ion-slide *ngFor="let item of elenco">\n          <ion-item class="itemPosicao" color="dark">\n            {{item.posicao}}\n          </ion-item>\n          <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n          <ion-item color="primary">\n            {{item.nome}}\n          </ion-item>\n        </ion-slide>\n      </ion-slides>\n \n      <div class="swiper-button-next" (click)="slideNext()"></div>\n      <div class="swiper-button-prev" (click)="slidePrev()"></div>\n      \n      </ion-navbar>\n\n<p><font   face="Cambria" color="0f056b" size="4"> <b>Portacabin 1 </b></font> \n </p>\n \n \n   \n    \n    <iframe width="auto" height="auto" src="https://www.youtube.com/embed/AYFBtgQ6KBM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n    \n    \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/lightgaugesteel/lightgaugesteel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LightgaugesteelPage);
    return LightgaugesteelPage;
}());

//# sourceMappingURL=lightgaugesteel.js.map

/***/ })

});
//# sourceMappingURL=32.js.map