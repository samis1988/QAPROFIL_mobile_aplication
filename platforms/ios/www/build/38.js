webpackJsonp([38],{

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryalumPageModule", function() { return GalleryalumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__galleryalum__ = __webpack_require__(504);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GalleryalumPageModule = /** @class */ (function () {
    function GalleryalumPageModule() {
    }
    GalleryalumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__galleryalum__["a" /* GalleryalumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__galleryalum__["a" /* GalleryalumPage */]),
            ],
        })
    ], GalleryalumPageModule);
    return GalleryalumPageModule;
}());

//# sourceMappingURL=galleryalum.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryalumPage; });
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
 * Generated class for the GalleryalumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GalleryalumPage = /** @class */ (function () {
    function GalleryalumPage(navCtrl, imageViewerCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.elenco = [
            {
                "img": "assets/img/qaprofil/full_image/84r-1.png",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-2.jpg",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-3.jpg",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-4.jpg",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-5.jpg",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-6.jpg",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            }
            ///////////////// qap 50 **********************************************************************
            ,
            {
                "img": "assets/img/qaprofil/full_image/qap50-1.jpg",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap50-2.jpg",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap50-3.jpg",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap50-4.jpg",
                "posicao": "Qap 50 Strips",
                "nome": "QAQ50"
            }
            /////////*********** qap 100 ......................................................*********** 
            ,
            {
                "img": "assets/img/qaprofil/full_image/qap100-1.jpg",
                "posicao": "Qap 100 - 200 Strips",
                "nome": "Qap 100 - Qap 200"
            },
            {
                "img": "assets/img/qaprofil/full_image/qap100-2.jpg",
                "posicao": "Qap 100 - 200 Strips",
                "nome": "Qap 100 - Qap 200"
            },
            /////////*********** semi_round ......................................................*********** 
            {
                "img": "assets/img/qaprofil/full_image/semi_round-1.jpg",
                "posicao": "Semi-Round Panel",
                "nome": "QASRPR"
            },
            {
                "img": "assets/img/qaprofil/full_image/semi_round-2.jpg",
                "posicao": "Semi-Round Panel",
                "nome": "QASRPR"
            },
            /////////*********** t bar ......................................................*********** 
            {
                "img": "assets/img/qaprofil/full_image/tbar-1.jpg",
                "posicao": "Semi-Round Panel",
                "nome": "QASRPR"
            },
            {
                "img": "assets/img/qaprofil/full_image/tbar-2.jpg",
                "posicao": "Semi-Round Panel",
                "nome": "QASRPR"
            }
        ];
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    GalleryalumPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    GalleryalumPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    GalleryalumPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    GalleryalumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GalleryalumPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], GalleryalumPage.prototype, "mySlider", void 0);
    GalleryalumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-galleryalum',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/galleryalum/galleryalum.html"*/'<!--\n  Generated template for the GalleryalumPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header >\n  <ion-navbar color="primary" >\n      <font   face="Cambria" color="0f056b" size="4"> <b>Gallery  </b></font> \n          \n           \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n <ion-navbar  >\n     <ion-slides paginationClickable=true\n                  initialSlide=0\n                  loop=true\n                  autoplay=1000\n                  speed=3000\n                  #mySlider>\n \n        <ion-slide *ngFor="let item of elenco">\n          <ion-item class="itemPosicao" color="dark">\n            {{item.posicao}}\n          </ion-item>\n          <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n          <ion-item color="primary">\n            {{item.nome}}\n          </ion-item>\n        </ion-slide>\n      </ion-slides>\n \n      <div class="swiper-button-next" (click)="slideNext()"></div>\n      <div class="swiper-button-prev" (click)="slidePrev()"></div>\n      \n      </ion-navbar>\n\n\n \n    \n \n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/galleryalum/galleryalum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], GalleryalumPage);
    return GalleryalumPage;
}());

//# sourceMappingURL=galleryalum.js.map

/***/ })

});
//# sourceMappingURL=38.js.map