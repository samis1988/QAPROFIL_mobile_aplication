webpackJsonp([7],{

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbarPageModule", function() { return TbarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tbar__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TbarPageModule = /** @class */ (function () {
    function TbarPageModule() {
    }
    TbarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tbar__["a" /* TbarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tbar__["a" /* TbarPage */]),
            ],
        })
    ], TbarPageModule);
    return TbarPageModule;
}());

//# sourceMappingURL=tbar.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TbarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(266);
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
 * Generated class for the TbarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TbarPage = /** @class */ (function () {
    function TbarPage(navCtrl, navParams, imageViewerCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.elenco = [
            {
                "img": "assets/img/qaprofil/tbar/1.png",
                "posicao": "Main T - Bar",
                "nome": "QSGTBMT32-360"
            },
            {
                "img": "assets/img/qaprofil/tbar/2.png",
                "posicao": "Cross T - Bar",
                "nome": "QSGTBCT24-120 / QSGTBCT24-60"
            },
            {
                "img": "assets/img/qaprofil/tbar/3.png",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/tbar/4.png",
                "posicao": "",
                "nome": ""
            },
            {
                "img": "assets/img/qaprofil/full_image/tbar-1.jpg",
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
    TbarPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    TbarPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    TbarPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    TbarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TbarPage');
    };
    TbarPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], TbarPage.prototype, "mySlider", void 0);
    TbarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tbar',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/tbar/tbar.html"*/'<!--\n  Generated template for the TbarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header >\n  <ion-navbar color="primary" >\n       <font   face="Cambria" color="0f056b" size="4"> <b>T- Bar Suspension System  </b></font> \n    \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n \n\n<ion-content padding>\n  \n             <ion-navbar  >\n     <ion-slides paginationClickable=true\n                  initialSlide=0\n                  loop=true\n                  autoplay=1000\n                  speed=3000\n                  #mySlider>\n \n        <ion-slide *ngFor="let item of elenco">\n          <ion-item class="itemPosicao" color="dark">\n            {{item.posicao}}\n          </ion-item>\n          <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n          <ion-item color="primary">\n            {{item.nome}}\n          </ion-item>\n        </ion-slide>\n      </ion-slides>\n \n      <div class="swiper-button-next" (click)="slideNext()"></div>\n      <div class="swiper-button-prev" (click)="slidePrev()"></div>\n      \n      </ion-navbar>\n         \n        \n        <ion-card-content>\n            \n            <p><font face="Times New Roman" color="black" size="3">- Thickness  / mm :</font> <font   face="Arial Black" color="black" size="3"> 0.3  </font></p> \n            \n             \n              \n        </ion-card-content>\n       \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/tbar/tbar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], TbarPage);
    return TbarPage;
}());

//# sourceMappingURL=tbar.js.map

/***/ })

});
//# sourceMappingURL=7.js.map