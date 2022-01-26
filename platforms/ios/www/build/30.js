webpackJsonp([30],{

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, items, modalCtrl, platform, app, document, file, fileOpener, transfer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.items = items;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.app = app;
        this.document = document;
        this.file = file;
        this.fileOpener = fileOpener;
        this.transfer = transfer;
        this.pages = [
            { title: 'Gypsum Ceilings', component: 'GypsumPage', image: 'assets/img/qaprofil/new_gypsum.jpg' },
            { title: 'Indoor Aluminum', component: 'IndooralumPage', image: 'assets/img/qaprofil/aluminum.jpg' },
            { title: 'Light Gauge Steel', component: 'LightgaugesteelPage', image: 'assets/img/qaprofil/cabins.jpg' },
            { title: 'Roof Panels', component: 'RoofpanelsPage', image: 'assets/img/qaprofil/roof.jpg' },
            { title: 'Slitting Line', component: 'SlittingPage', image: 'assets/img/qaprofil/new_slitting.jpg' },
            { title: 'Buildings Accessories', component: 'LintelPage', image: 'assets/img/qaprofil/lintel.jpg' },
            { title: 'Youtube Video', component: 'VedioqaprofilPage', image: 'assets/img/qaprofil/youtube.png' }
        ];
        this.pages1 = [
            { title: 'Download Catalogue pdf ', component: 'VedioqaprofilPage', image: 'assets/img/qaprofil/pdf.png' }
        ];
        this.currentItems = this.items.query();
        platform.registerBackButtonAction(function () {
            console.log("backPressed 1");
        }, 1);
        var backAction = platform.registerBackButtonAction(function () {
            console.log("list-master");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    ListMasterPage.prototype.goToSecond = function (page) {
        this.navCtrl.push(page);
    };
    ListMasterPage.prototype.openLocalPdf = function () {
        var _this = this;
        var filePath = this.file.applicationDirectory + 'www/assets';
        if (this.platform.is('android')) {
            var fakeName = Date.now();
            this.file.copyFile(filePath, '5-tools.pdf', this.file.dataDirectory, '${fakeName}.pdf').then(function (result) {
                _this.fileOpener.open(result.nativeURL, 'application/pdf')
                    .then(function () { return console.log('File is opened'); })
                    .catch(function (e) { return console.log('Error opening file', e); });
            });
        }
        else {
            // Use Document viewer for iOS for a better UI
            var options = {
                title: 'My PDF'
            };
            this.document.viewDocument('${filePath}/5–tools.pdf', 'application/pdf', options);
        }
    };
    ListMasterPage.prototype.downloadAndOpenPdf = function () {
        var _this = this;
        var path = null;
        if (this.platform.is('ios')) {
            path = this.file.documentsDirectory;
        }
        else {
            path = this.file.dataDirectory;
        }
        var transfer = this.transfer.create();
        transfer.download('https://qaprofil.com.qa/file/fullcatalog.pdf', path + 'myfile.pdf')
            .then(function (entry) {
            var url = entry.toURL();
            _this.document.viewDocument(url, 'application/pdf', {});
        });
    };
    ListMasterPage.prototype.startApp = function (page) {
        this.navCtrl.setRoot(page, {}, {
            animate: true,
            direction: 'forward'
        });
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/list-master/list-master.html"*/' \n  \n<ion-header >\n  <ion-navbar color="primary" >\n      <table><tr><td>\n             <ion-buttons right  end>\n      <button  ion-button icon-only (click)="startApp(\'WelcomePage\')">\n        <b><ion-icon color="secondary" name="md-arrow-back"></ion-icon></b>\n      </button>\n    </ion-buttons>\n          </td>\n          <td>\n          \n            <ion-title> <font   face="Cambria" color="0f056b" size="4"> <b>Products</b></font></ion-title>\n          \n          </td>\n          \n          \n          \n          </tr></table>\n    \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n  <style>\n.masters {\n \n   background: url(\'assets/img/steel.jpg\') repeat ;\n}\n \n</style>\n\n\n\n<ion-content  >\n\n  <ion-list  >\n     \n       \n           <button class="masters"  menuClose ion-item      *ngFor="let p of pages" (click)="goToSecond(p.component)" >\n        <ion-avatar item-start>\n<img width="70" height="70" src="{{p.image}}" alt=""/>\n        </ion-avatar>\n               <h2><b><font   face="Cambria" color="0000" size="4"> {{p.title}} </font></b></h2>\n        \n       \n      </button>\n        \n         \n           <style type="text/css">\n   a {\n      text-decoration:none;\n   }\n</style>\n      \n      \n       <a href="https://www.qaprofil.com.qa/full_catalogue/mobile/index.html"    >  \n     <button class="masters"  menuClose ion-item      *ngFor="let p1 of pages1"  >\n        <ion-avatar item-start>\n<img width="70" height="70" src="{{p1.image}}" alt=""/>\n        </ion-avatar>\n               <h2><b><font   face="Cambria" color="0000" size="4"> {{p1.title}} </font></b></h2>\n        \n       \n      </button>\n        </a>\n      \n        \n      \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/list-master/list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_document_viewer__["a" /* DocumentViewer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=30.js.map