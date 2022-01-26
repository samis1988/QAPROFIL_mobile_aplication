webpackJsonp([22],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QaponetwoPageModule", function() { return QaponetwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qaponetwo__ = __webpack_require__(520);
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

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QaponetwoPage; });
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
 * Generated class for the QaponetwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QaponetwoPage = /** @class */ (function () {
    function QaponetwoPage(navCtrl, navParams, imageViewerCtrl, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
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
        this._imageViewerCtrl = imageViewerCtrl;
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
        console.log('ionViewDidLoad QaponetwoPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], QaponetwoPage.prototype, "mySlider", void 0);
    QaponetwoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-qaponetwo',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/qaponetwo/qaponetwo.html"*/'<!--\n  Generated template for the QaponetwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="primary" >\n        <font   face="Cambria" color="0f056b" size="4"> <b>Qap 100 - 200 Strips  </b></font> \n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n \n               \n        <ion-navbar  >\n     <ion-slides paginationClickable=true\n                  initialSlide=0\n                  loop=true\n                  autoplay=1000\n                  speed=3000\n                  #mySlider>\n \n        <ion-slide *ngFor="let item of elenco">\n          <ion-item class="itemPosicao" color="dark">\n            {{item.posicao}}\n          </ion-item>\n          <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n          <ion-item color="primary">\n            {{item.nome}}\n          </ion-item>\n        </ion-slide>\n      </ion-slides>\n \n      <div class="swiper-button-next" (click)="slideNext()"></div>\n      <div class="swiper-button-prev" (click)="slidePrev()"></div>\n      \n      </ion-navbar>\n    \n     \n        <ion-card-content>\n            <p><font face="Times New Roman" color="black" size="3">Item\'s Name:</font> <font   face="Arial Black" color="black" size="3"> Qap 100</font></p> \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3">QAQ104</font></p> \n           \n            \n             <p><font face="Times New Roman" color="black" size="3">Item\'s Name:</font> <font   face="Arial Black" color="black" size="3"> Qap 200</font></p> \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3">QAQ204</font></p> \n            \n             \n            <p><font face="Times New Roman" color="black" size="3">Qap 100, 200: 80mm (Qap 100) and 180mm (Qap 200) wide strips recessed with a  aluminum false ceilings strips. </font></p> \n            <p><font face="Times New Roman" color="black" size="4">* Customized lengths are available :</font> </p> \n           \n            <p><font face="Times New Roman" color="black" size="3">- Thickness  / mm :</font> <font   face="Arial Black" color="black" size="3"> 0.45  </font></p> \n            <p><font face="Times New Roman" color="black" size="3">- Length / mm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </font> <font   face="Arial Black" color="black" size="3"> 4000-6000 </font></p> \n              \n             \n              \n        </ion-card-content>\n      \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/qaponetwo/qaponetwo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], QaponetwoPage);
    return QaponetwoPage;
}());

//# sourceMappingURL=qaponetwo.js.map

/***/ })

});
//# sourceMappingURL=22.js.map