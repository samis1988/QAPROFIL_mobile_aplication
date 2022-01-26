webpackJsonp([15],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunnerPageModule", function() { return RunnerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runner__ = __webpack_require__(527);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RunnerPageModule = /** @class */ (function () {
    function RunnerPageModule() {
    }
    RunnerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__runner__["a" /* RunnerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__runner__["a" /* RunnerPage */]),
            ],
        })
    ], RunnerPageModule);
    return RunnerPageModule;
}());

//# sourceMappingURL=runner.module.js.map

/***/ }),

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RunnerPage; });
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
 * Generated class for the RunnerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RunnerPage = /** @class */ (function () {
    function RunnerPage(navCtrl, imageViewerCtrl, navParams, platform) {
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
    RunnerPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    RunnerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RunnerPage');
    };
    RunnerPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    RunnerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-runner',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/runner/runner.html"*/'<!--\n  Generated template for the RunnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header >\n  <ion-navbar color="primary" >\n        <font   face="Cambria" color="0f056b" size="6"> <b>Runner</b></font> \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n \n\n<ion-content padding>\n   \n       \n        <ion-card-content>\n             <img   src="assets/img/qaprofil/runner.png" #myImage (click)="presentImage(myImage)"/> \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Name:</font> <font   face="Arial Black" color="black" size="3"> Runner  </font></p> \n            <p><font face="Times New Roman" color="black" size="3">Item\'s Code:</font> <font   face="Arial Black" color="black" size="3"> QSGR48</font></p> \n           \n             \n            <p><font face="Times New Roman" color="black" size="3">Runner : Fixed to the ground and ceilings to support the studs to form the partition.</font></p> \n            <p><font face="Times New Roman" color="black" size="4">* Customized lengths are available :</font> </p> \n           \n             <p><font face="Times New Roman" color="black" size="3">- Width / mm :</font> <font   face="Arial Black" color="black" size="3">48 - 150  </font></p> \n            \n            <p><font face="Times New Roman" color="black" size="3">- Thickness  / mm :</font> <font   face="Arial Black" color="black" size="3"> 0.45 - 0.6  </font></p> \n            <p><font face="Times New Roman" color="black" size="3">- Length / mm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </font> <font   face="Arial Black" color="black" size="3"> 3000 </font></p> \n              \n             \n              \n        </ion-card-content>\n     \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/runner/runner.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], RunnerPage);
    return RunnerPage;
}());

//# sourceMappingURL=runner.js.map

/***/ })

});
//# sourceMappingURL=15.js.map