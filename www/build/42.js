webpackJsonp([42],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact__["a" /* ContactPage */]),
            ],
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__ = __webpack_require__(394);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, callNumber, inAppBrowser, emailComposer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
        this.inAppBrowser = inAppBrowser;
        this.emailComposer = emailComposer;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    ContactPage.prototype.makeCall = function (n) {
        window.open("tel:" + n, '_system');
    };
    ContactPage.prototype.openExternalUrl = function (url) {
        this.inAppBrowser.create(url, '_blank');
    };
    ContactPage.prototype.sendEmail = function () {
       /* var email = {
            to: 'info@qaprofil.com.qa',
            cc: [],
            bcc: [],
            attachments: [],
            subject: '',
            body: '',
            isHtml: true
        };*/
        window.location.href = "mailto:info@qaprofil.com.qa";
        // Send a text message using default options
        //this.emailComposer.open(email);
        //window.open('mailto:info@qaprofil.com.qa', '_system')
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n   \n\n          <ion-title>\n            <h4 face="Cambria">Contacts</h4>\n          </ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="salon-detail">\n  <ion-card text-wrap>\n\n    <img src="../assets/img/Qaprofil.jpg" alt="chouchouimage">\n\n\n    <ion-item-group>\n      <ion-item lines="none">\n        <h2 class="titl">QAPROFIL</h2>\n      </ion-item>\n      <ion-item lines="none">\n        <ion-icon color="danger" ios="ios-compass" md="md-compass"></ion-icon>\n        P.O. Box 304: Doha Qatar New Industrial Area\n      </ion-item>\n      <ion-item lines="none"\n        (click)="openExternalUrl(\'https://www.google.com/maps/place/Qatar+Profiles+and+False+Ceilings+Factory/@25.1522135,51.4037525,15z/data=!4m5!3m4!1s0x0:0x9f2059796b4c5580!8m2!3d25.1522135!4d51.4037525\', \'_system\', \'location=yes\')">\n        <ion-icon color="danger" ios="ios-navigate" md="md-navigate"></ion-icon>\n        show map\n      </ion-item>\n      <ion-item lines="none" class="stars">\n        <ion-icon color="danger" ios="ios-star" md="md-star"></ion-icon>\n\n        5.0 Great\n\n      </ion-item>\n\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider>\n      </ion-item-divider>\n      <ion-item lines="none" >\n        <ion-icon color="danger" ios="ios-call" md="md-call"></ion-icon>\n    <a href="tel:+0097444601734" style="text-decoration: none;color:black;">    0097444601734\n     </a> </ion-item>\n      <ion-item lines="none" (click)="sendEmail()">\n        <ion-icon color="danger" ios="ios-mail" md="md-mail"></ion-icon>\n  <a href="mailto:info@qaprofil.com.qa" style="text-decoration: none;color:blue;">    info@qaprofil.com.qa\n     </a>          </ion-item>\n      <ion-item lines="none" (click)="openExternalUrl(\'https://qaprofil.com.qa/\')">\n        <ion-icon color="danger" ios="ios-globe" md="md-globe"></ion-icon>\n        qaprofil.com.qa\n      </ion-item>\n    </ion-item-group>\n  </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number_ngx__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=42.js.map
