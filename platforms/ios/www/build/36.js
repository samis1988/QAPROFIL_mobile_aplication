webpackJsonp([36],{

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndooralumPageModule", function() { return IndooralumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__indooralum__ = __webpack_require__(506);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IndooralumPageModule = /** @class */ (function () {
    function IndooralumPageModule() {
    }
    IndooralumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__indooralum__["a" /* IndooralumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__indooralum__["a" /* IndooralumPage */]),
            ],
        })
    ], IndooralumPageModule);
    return IndooralumPageModule;
}());

//# sourceMappingURL=indooralum.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndooralumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
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
 * Generated class for the IndooralumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IndooralumPage = /** @class */ (function () {
    function IndooralumPage(navCtrl, navParams, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'V Section', component: 'VsectionPage', image: 'assets/img/qaprofil/vsection.png' },
            { title: 'Qap Carrier', component: 'QapcarrierPage', image: 'assets/img/qaprofil/qap_carrier.png' },
            { title: 'Perimeter Angle', component: 'PerimeteranglePage', image: 'assets/img/qaprofil/p_a_alum.png' },
            { title: 'U Channel', component: 'UchannelPage', image: 'assets/img/qaprofil/u_channel.png' },
            { title: '84R and Joints Strips ', component: 'StripsjointPage', image: 'assets/img/qaprofil/84r/1.png' },
            { title: 'Qap 50 Strips', component: 'QapstripsPage', image: 'assets/img/qaprofil/qap50/1.png' },
            { title: 'Qap 100 - 200 Strips', component: 'QaponetwoPage', image: 'assets/img/qaprofil/qap100-200/1.png' },
            { title: 'T- Bar', component: 'TbarPage', image: 'assets/img/qaprofil/tbar/4.png' },
            { title: 'Semi-Round Panel', component: 'SemiroundPage', image: 'assets/img/qaprofil/bambo/1.jpg' },
            { title: 'Photo Gallery', component: 'GalleryalumPage', image: 'assets/img/qaprofil/gallery.png' }
        ];
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("gypsum");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    IndooralumPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    IndooralumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IndooralumPage');
    };
    IndooralumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-indooralum',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/indooralum/indooralum.html"*/'\n<ion-header >\n  <ion-navbar color="primary" >\n       <font   face="Cambria" color="0f056b" size="3"> <b>Indoor Aluminum False Ceilings</b></font> \n  \n  </ion-navbar>\n</ion-header>\n\n\n   <style>\n.masters {\n \n   background: url(\'assets/img/steel.jpg\') repeat ;\n}\n \n</style>\n\n<ion-content>\n\n  <ion-list  >\n    <ion-item-sliding *ngFor="let p of pages" > \n       \n           <button class="masters" menuClose ion-item  (click)="goToSecond(p.component)">\n        <ion-avatar item-start>\n<img width="70" height="70" src="{{p.image}}" alt=""/>\n        </ion-avatar>\n               <h2><b><font   face="Cambria" color="0000" size="4"> {{p.title}} </font></b></h2>\n        \n       \n      </button>\n \n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/indooralum/indooralum.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */]])
    ], IndooralumPage);
    return IndooralumPage;
}());

//# sourceMappingURL=indooralum.js.map

/***/ })

});
//# sourceMappingURL=36.js.map