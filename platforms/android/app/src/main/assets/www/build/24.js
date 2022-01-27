webpackJsonp([24],{

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelstripPageModule", function() { return PanelstripPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panelstrip__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PanelstripPageModule = /** @class */ (function () {
    function PanelstripPageModule() {
    }
    PanelstripPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__panelstrip__["a" /* PanelstripPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__panelstrip__["a" /* PanelstripPage */]),
            ],
        })
    ], PanelstripPageModule);
    return PanelstripPageModule;
}());

//# sourceMappingURL=panelstrip.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelstripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the PanelstripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PanelstripPage = /** @class */ (function () {
    function PanelstripPage(navCtrl, navParams, imageViewerCtrl, platform, toastController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.toastController = toastController;
        this.elenco = [
            {
                "img": "assets/img/qaprofil/84r/1.png",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/84r/2.png",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/84r/3.png",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            },
            {
                "img": "assets/img/qaprofil/full_image/84r-1.png",
                "posicao": "84R and Joints Strips ",
                "nome": "QA8 / QAJ"
            }
        ];
        this.colors = [
            {
                "code": "MNTDBMB",
                "name": "Matt Natural Dry Bamboo"
            },
            {
                "code": "MGNBMB",
                "name": "Matt Green Bamboo"
            },
            {
                "code": "MNTDSTR",
                "name": "Matt Natural Dry Straw"
            },
            {
                "code": "MGNSTR",
                "name": "Matt Green Straw"
            },
            {
                "code": "DT",
                "name": "Dark Turquoise"
            },
            {
                "code": "GT",
                "name": "Golden Texture"
            },
            {
                "code": "LG",
                "name": "Light Green"
            },
            {
                "code": "LT",
                "name": "Light Turquoise"
            },
            {
                "code": "MDBN",
                "name": "Matt Dark Brown"
            },
            {
                "code": "MDWD",
                "name": "Matt Dark Wood"
            },
            {
                "code": "MLB",
                "name": "Matt Light Beige"
            },
            {
                "code": "MOW",
                "name": "Matt Off White"
            },
            {
                "code": "MRWD",
                "name": "Matt Red Wood (Mahogany) "
            },
            {
                "code": "MWWD",
                "name": "Matt White Wood"
            },
            {
                "code": "MYWD",
                "name": "Matt Yellow Wood"
            },
            {
                "code": "SB",
                "name": "Shiny Beige"
            },
            {
                "code": "SBK",
                "name": "Shiny Black"
            },
            {
                "code": "SBZ",
                "name": "Shiny Bronze"
            },
            {
                "code": "SC",
                "name": "Shiny Chrome"
            },
            {
                "code": "SDP",
                "name": "Shiny Dark Pink"
            },
            {
                "code": "SHG",
                "name": "Shiny Herbal Green"
            },
            {
                "code": "SLA",
                "name": "Shiny Light Apricot"
            },
            {
                "code": "SLG",
                "name": "Shiny Light Grey"
            },
            {
                "code": "SOW",
                "name": "Shiny Off White"
            },
            {
                "code": "SP ",
                "name": "Shiny Pink"
            },
            {
                "code": "SSBL",
                "name": "Shiny Sky Blue"
            },
            {
                "code": "ST",
                "name": "Silver Texture"
            },
            {
                "code": "MB",
                "name": "Matt Beige"
            },
            {
                "code": "MRBL",
                "name": "Matt Regular Blue"
            },
            {
                "code": "MW",
                "name": " Matt White"
            },
            {
                "code": "SW",
                "name": "Shiny white"
            },
            {
                "code": "SG",
                "name": "Shiny Gold"
            },
            {
                "code": "SL",
                "name": "Shiny Lead"
            }
        ];
        this.widths = [
            {
                "value": 0.98
            },
            {
                "value": 1.22
            },
            {
                "value": 1.46
            },
            {
                "value": 0.51
            },
            {
                "value": 0.64
            },
            {
                "value": 0.77
            },
            {
                "value": 0.38
            },
            {
                "value": 0.24
            },
            {
                "value": 0.13
            },
            {
                "value": 0.48
            },
            {
                "value": 0.59
            },
            {
                "value": 0.71
            },
            {
                "value": 0.73
            },
            {
                "value": 1.47
            }
        ];
        this._imageViewerCtrl = imageViewerCtrl;
        var backAction = platform.registerBackButtonAction(function () {
            console.log("contact");
            _this.navCtrl.pop();
            backAction();
        }, 2);
    }
    PanelstripPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    PanelstripPage.prototype.slideNext = function () {
        this.mySlider.slideNext();
    };
    PanelstripPage.prototype.slidePrev = function () {
        this.mySlider.slidePrev();
    };
    PanelstripPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PanelstripPage');
    };
    PanelstripPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        msg = "item added successfully to the cart";
                        return [4 /*yield*/, this.toastController.create({
                                message: msg,
                                duration: 2000,
                                position: 'top',
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", Object)
    ], PanelstripPage.prototype, "mySlider", void 0);
    PanelstripPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-panelstrip',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/panelstrip/panelstrip.html"*/'<!--\n  Generated template for the PanelstripPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>84R Panel - Strip</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-navbar>\n    <ion-slides paginationClickable=true initialSlide=0 loop=true autoplay=1000 speed=3000 #mySlider>\n\n      <ion-slide *ngFor="let item of elenco">\n        <ion-item class="itemPosicao" color="dark">\n          {{item.posicao}}\n        </ion-item>\n        <img src="{{item.img}}" #myImage (click)="presentImage(myImage)">\n        <ion-item color="primary">\n          {{item.nome}}\n        </ion-item>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="swiper-button-next" (click)="slideNext()"></div>\n    <div class="swiper-button-prev" (click)="slidePrev()"></div>\n\n  </ion-navbar>\n\n\n\n  <ion-card-content>\n\n\n\n    <p>\n      <font face="Times New Roman" color="black" size="3">84R Panel - Strip : One type of Aluminum Strips False Ceilings\n        produced at QAPROFIL. It is known as panel and joint.</font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="4">* Customise your product :</font>\n    </p>\n    <!--<p>\n      <font face="Times New Roman" color="black" size="3">- color:</font>\n      <font face="Arial Black" color="black" size="3"> 0.43 </font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="3">- Thickness / mm :</font>\n      <font face="Arial Black" color="black" size="3"> 0.43 </font>\n    </p>\n    <p>\n      <font face="Times New Roman" color="black" size="3">- Length / mm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </font>\n      <font face="Arial Black" color="black" size="3"> 4000-6000 </font>\n    </p>-->\n\n    <ion-list>\n    <ion-item>\n      <ion-label>Colors</ion-label>\n      <ion-select [(ngModel)]="color" cancelText="cancel" okText="Ok">\n        <ion-option *ngFor="let color of colors" value="{{color.code}}">{{color.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Width</ion-label>\n      <ion-select [(ngModel)]="width" cancelText="cancel" okText="Ok">\n        <ion-option *ngFor="let width of widths" value="{{width.value}}">{{width.value}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  </ion-card-content>\n  <p></p>\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="presentToast()"><ion-icon name="cart"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/panelstrip/panelstrip.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */]])
    ], PanelstripPage);
    return PanelstripPage;
}());

//# sourceMappingURL=panelstrip.js.map

/***/ })

});
//# sourceMappingURL=24.js.map