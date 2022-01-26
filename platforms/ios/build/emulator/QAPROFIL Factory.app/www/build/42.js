webpackJsonp([42],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact__ = __webpack_require__(500);
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

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
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
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/contact/contact.html"*/'<ion-header >\n  <ion-navbar color="primary" >\n      <table><tr><td>\n             <ion-buttons right  end>\n      <button  ion-button icon-only (click)="startApp(\'WelcomePage\')">\n        <b><ion-icon color="secondary" name="md-arrow-back"></ion-icon></b>\n      </button>\n    </ion-buttons>\n          </td>\n          <td>\n          \n            <ion-title> <font   face="Cambria" color="0f056b" size="4"> <b>Contacts</b></font></ion-title>\n          \n          </td>\n          \n          \n          \n          </tr></table>\n    \n  \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n    \n  \n\n\n    <ion-list>\n      <style type="text/css">\n   a {\n      text-decoration:none;\n   }\n</style>\n      \n      \n  <a href="#" onclick="window.open(\'https://www.qaprofil.com.qa/\', \'_system\', \'location=yes\');" > <ion-item class="ion-item1">\n       \n      <ion-label><table><tr><td><img width="30" height="30" src="assets/img/qaprofil/web.png" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td> <font face="Times New Roman" color="black" size="2"> www.qaprofil.com.qa </font></td></tr></table></ion-label>\n    </ion-item>\n       </a>\n         <a href="mailto:info@qaprofil.com.qa"> \n    <ion-item  class="ion-item2">\n    \n      \n        \n        <ion-label><table><tr><td><img width="30" height="30" src="assets/img/qaprofil/email.png" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">info@qaprofil.com.qa</font> </td></tr></table> </ion-label>\n    </ion-item>  \n      </a>\n        \n        \n      <a href="tel:0097444601734">  \n    <ion-item > \n        <ion-label><table><tr><td><img width="30" height="30" src="assets/img/qaprofil/phone.png" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">00974- 44601734</font></td></tr></table> </ion-label>\n    </ion-item>\n        </a>  \n          \n    <ion-item  class="ion-item2">\n     \n        <ion-label><table><tr><td><img width="30" height="30" src="assets/img/qaprofil/fax.png" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">00974- 40379886</font></td></tr></table> </ion-label>\n    </ion-item>\n           <ion-item  class="ion-item1" href="https://www.qaprofil.com.qa">\n       \n      <ion-label>\n          <table><tr><td><img width="30" height="30" src="assets/img/qaprofil/pobox.jpg" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">P.O. Box 304: Doha Qatar</font>\n  </td></tr>\n          \n              <tr><td>&nbsp;</td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">New Industrial Area </font> </td></tr>\n          \n          \n          </table>\n               \n               </ion-label>\n    </ion-item>\n      \n        \n        \n         <a href="#" onclick="window.open(\'https://www.google.com/maps/place/Qatar+Profiles+and+False+Ceilings+Factory/@25.1522135,51.4037525,15z/data=!4m5!3m4!1s0x0:0x9f2059796b4c5580!8m2!3d25.1522135!4d51.4037525\', \'_system\', \'location=yes\');" > \n        \n        \n       <ion-item >\n       \n           <ion-label><table><tr><td><img width="30" height="30" src="assets/img/qaprofil/maps.jpg" alt=""/></td><td>&nbsp;&nbsp;&nbsp;&nbsp;</td><td><font face="Times New Roman" color="black" size="2">Maps </font></td></tr></table></ion-label>\n    </ion-item>\n        </a>\n      \n  </ion-list>\n    \n    \n    \n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

});
//# sourceMappingURL=42.js.map