webpackJsonp([13],{

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoofpanelsPageModule", function() { return RoofpanelsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__roofpanels__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RoofpanelsPageModule = /** @class */ (function () {
    function RoofpanelsPageModule() {
    }
    RoofpanelsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__roofpanels__["a" /* RoofpanelsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__roofpanels__["a" /* RoofpanelsPage */]),
            ],
        })
    ], RoofpanelsPageModule);
    return RoofpanelsPageModule;
}());

//# sourceMappingURL=roofpanels.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoofpanelsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the RoofpanelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RoofpanelsPage = /** @class */ (function () {
    function RoofpanelsPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'Roof Sheet', component: 'RoofsheetPage', image: 'assets/img/qaprofil/roof_pannel/roof-sheet.png' },
            { title: 'Wave Roof', component: 'WaveroofPage', image: 'assets/img/qaprofil/roof_pannel/wave.png' },
            { title: 'ARC Roof', component: 'ArcroofPage', image: 'assets/img/qaprofil/roof_pannel/arc_roof.png' },
            { title: 'Ridge Cap', component: 'RidgecapPage', image: 'assets/img/qaprofil/roof_pannel/ridge_cap.png' },
            { title: 'Down Spout', component: 'DownspoutPage', image: 'assets/img/qaprofil/roof_pannel/downspot1.png' },
            { title: 'Water Gutter', component: 'WatergaterPage', image: 'assets/img/qaprofil/roof_pannel/water_gutter.bmp' }
        ];
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("roofpanels");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    RoofpanelsPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    RoofpanelsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RoofpanelsPage');
    };
    RoofpanelsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-roofpanels',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/roofpanels/roofpanels.html"*/'<ion-header >\n  <ion-navbar color="primary" >\n          \n    <ion-title  face="Cambria" color="white">Roof Panels, Sheets</ion-title>\n           \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-item *ngFor="let p of pages" (click)="goToSecond(p.component)">\n      <ion-thumbnail item-start>\n        <img src="{{p.image}}">\n      </ion-thumbnail>\n      <h2>{{p.title}}</h2>\n      <p>Roof Panels, Sheets</p>\n      <button ion-button clear item-end>View</button>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/roofpanels/roofpanels.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */]])
    ], RoofpanelsPage);
    return RoofpanelsPage;
}());

//# sourceMappingURL=roofpanels.js.map

/***/ })

});
//# sourceMappingURL=13.js.map