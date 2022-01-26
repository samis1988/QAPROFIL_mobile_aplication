webpackJsonp([11],{

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlittingPageModule", function() { return SlittingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slitting__ = __webpack_require__(531);
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

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlittingPage; });
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
            selector: 'page-slitting',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/slitting/slitting.html"*/'<!--\n  Generated template for the WatergaterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header >\n  <ion-navbar color="primary" >\n      <font   face="Cambria" color="0f056b" size="4"> <b>Slitting</b></font>\n  \n  </ion-navbar>\n</ion-header>\n\n\n\n \n\n <ion-content > \n  \n     <ion-navbar  >\n     <ion-slides paginationClickable=true\n                  initialSlide=0\n                  loop=true\n                  autoplay=1000\n                  speed=3000\n                  #mySlider>\n \n        <ion-slide *ngFor="let item of elenco">\n          <ion-item class="itemPosicao" color="dark">\n            {{item.posicao}}\n          </ion-item>\n          <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n          <ion-item color="primary">\n            {{item.nome}}\n          </ion-item>\n        </ion-slide>\n      </ion-slides>\n \n      <div class="swiper-button-next" (click)="slideNext()"></div>\n      <div class="swiper-button-prev" (click)="slidePrev()"></div>\n      \n      </ion-navbar>\n         \n        <ion-card-content>     \n       \n             \n            <p><font face="Times New Roman" color="black" size="4"><b>Uncoiler Capacity :</b>\n</font> </p> \n            \n             <p><font face="Times New Roman" color="black" size="3">1- Coil\'s Max Wt. : 9000 / Kgs.\n</font></p>\n              <p><font face="Times New Roman" color="black" size="3">2- Coil\'s Internal Diameter : 48cm - 55cm.\n\n</font></p>\n              \n       <p><font face="Times New Roman" color="black" size="3">3- Coils Max Width : 1500mm.\n\n\n</font></p>       \n            \n            <p><font face="Times New Roman" color="black" size="4"><b>Slitter Capacity : </b>\n</font></p> \n            \n          \n            \n             <p><font face="Times New Roman" color="black" size="3">1- Slitting Thickness Range : 0.30mm - 2.5mm.\n \n</font></p> \n             <p><font face="Times New Roman" color="black" size="3">2- Max No. of Slits : 40 pcs (Depending on the thickness).\n \n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="3">3- Max Width of Mother Coil : 1500mm.\n \n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="3">4- Width of the slit : 30mm - 450mm (Depending on the thickness).\n\n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="4"><b>Recoiler Capacity :</b>\n \n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="3">1- Coil\'s Max Wt. : 9000 / Kgs.\n\n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="3">2- Coil\'s Internal Diameter : 50cm.\n \n</font></p> \n            \n             <p><font face="Times New Roman" color="black" size="3">3- Coil\'s Max Width : 1500mm.\n \n</font></p> \n            \n              \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n            \n     </ion-card-content>\n              \n       \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/slitting/slitting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], SlittingPage);
    return SlittingPage;
}());

//# sourceMappingURL=slitting.js.map

/***/ })

});
//# sourceMappingURL=11.js.map