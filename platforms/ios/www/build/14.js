webpackJsonp([14],{

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, platform, items) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = items;
        this.currentItems = [];
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("gypsum");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    SearchPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    /**
     * Perform a service for the proper items.
     */
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.currentItems = [];
            return;
        }
        this.currentItems = this.items.query({
            name: val
        });
    };
    /**
     * Navigate to the detail page for this item.
     */
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('ItemDetailPage', {
            item: item
        });
    };
    SearchPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/search/search.html"*/'\n  \n<ion-header >\n  <ion-navbar color="primary" >\n      <table><tr><td>\n             <ion-buttons right  end>\n      <button  ion-button icon-only (click)="goToSecond(\'WelcomePage\')">\n        <b><ion-icon color="secondary" name="md-arrow-back"></ion-icon></b>\n      </button>\n    </ion-buttons>\n          </td>\n          <td>\n          \n            <ion-title> <font   face="Cambria" color="0f056b" size="4"> <b>{{ \'SEARCH_TITLE\' | translate }}</b></font></ion-title>\n          \n          </td>\n          \n          \n          \n          </tr></table>\n    \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)" placeholder="Items"></ion-searchbar>\n  <ion-list>\n    <button ion-item (click)="goToSecond(item.about)" *ngFor="let item of currentItems">\n      <ion-avatar item-start>\n        <img [src]="item.profilePic" />\n      </ion-avatar>\n      <h2>{{item.name}}</h2>\n     \n      <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=14.js.map