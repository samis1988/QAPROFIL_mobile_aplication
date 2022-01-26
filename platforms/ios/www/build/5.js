webpackJsonp([5],{

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UchannelPageModule", function() { return UchannelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__uchannel__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UchannelPageModule = /** @class */ (function () {
    function UchannelPageModule() {
    }
    UchannelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__uchannel__["a" /* UchannelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__uchannel__["a" /* UchannelPage */]),
            ],
        })
    ], UchannelPageModule);
    return UchannelPageModule;
}());

//# sourceMappingURL=uchannel.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UchannelPage; });
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
 * Generated class for the UchannelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UchannelPage = /** @class */ (function () {
    function UchannelPage(navCtrl, imageViewerCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    UchannelPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    UchannelPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UchannelPage');
    };
    UchannelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-uchannel',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/uchannel/uchannel.html"*/'<!--\n  Generated template for the UchannelPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header >\n  <ion-navbar color="primary" >\n      <font   face="Cambria" color="0f056b" size="4"> <b>Prepainted U Channel</b></font> \n    \n  \n  </ion-navbar>\n</ion-header>\n\n \n\n<ion-content padding>\n \n        <img src="assets/img/qaprofil/u_channel.png" #myImage (click)="presentImage(myImage)" />\n       \n        <ion-card-content>\n            <p><font face="Times New Roman" color="black" size="3">Item\'s Name:</font> <font   face="Arial Black" color="black" size="3"> Prepainted U Channel</font></p> \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3">QSGPA18-3-40MW</font></p> \n           \n             \n            <p><font face="Times New Roman" color="black" size="3">Prepainted U Channel : A prepainted U shaped profile fixed on the  perimeter of  the walls of the designated area as a leveling system into which the edges of Aluminum Strips are fixed .</font></p> \n            <p><font face="Times New Roman" color="black" size="4">* Customized lengths are available :</font> </p> \n           \n            <p><font face="Times New Roman" color="black" size="3">- Thickness  / mm :</font> <font   face="Arial Black" color="black" size="3"> 0.4  </font></p> \n            <p><font face="Times New Roman" color="black" size="3">- Length / mm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </font> <font   face="Arial Black" color="black" size="3"> 3000 </font></p> \n              \n             \n              \n        </ion-card-content>\n       \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/uchannel/uchannel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], UchannelPage);
    return UchannelPage;
}());

//# sourceMappingURL=uchannel.js.map

/***/ })

});
//# sourceMappingURL=5.js.map