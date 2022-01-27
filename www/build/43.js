webpackJsonp([43],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(781);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(91);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, http, alertCtrl, toastController, userservice, orderservice, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.orderservice = orderservice;
        this.storage = storage;
        this.orders = [];
        this.id = 0;
        this.isEmptyCart = true;
        //this.storage.clear();
        this.baseURL = this.userservice.baseURL;
        this.orders = this.orderservice.getOrder();
        this.getValue();
        if (this.orders.length > 0)
            this.isEmptyCart = false;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.checkOut = function () {
        var _this = this;
        if (this.id === null || this.id === undefined || this.id === 0) {
            console.log("error");
            this.goToPage("LoginPage");
        }
        else {
            if (this.orders.length != 0) {
                console.log(this.id);
                var request = this.baseURL + "/order/create";
                var order = { id: this.id, items: this.orders };
                this.http.post(request, order, { observe: 'response' }).subscribe(function (data) {
                    var user;
                    if (data.status == 200) {
                        _this.orders.splice(0, _this.orders.length);
                        _this.orderservice.clearOrder();
                        _this.sendNotification('your order saved successfully');
                        _this.navCtrl.push('TabsPage');
                    }
                }, function (error) {
                    _this.sendNotification(error.error);
                });
            }
        }
    };
    CartPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
            if (_this.id == null)
                _this.id = 0;
        });
    };
    // Minus Product Quantity
    CartPage.prototype.minusQuantity = function (product, index) {
        if (product.quantity > 1) {
            this.orders[index].quantity = this.orders[index].quantity - 1;
        }
        console.log(this.orders);
    };
    // Add More Quantity
    CartPage.prototype.addQuantity = function (product, index) {
        if (product.quantity) {
            this.orders[index].quantity = this.orders[index].quantity + 1;
        }
        else {
            this.orders[index].quantity = 1;
        }
        console.log(this.orders);
    };
    // Remove Product From Cart
    CartPage.prototype.removeProduct = function (product, index) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.orders.splice(index, 1);
                console.log(this.orders);
                return [2 /*return*/];
            });
        });
    };
    CartPage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    CartPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    CartPage.prototype.goToPage = function (page) {
        this.navCtrl.push('LoginPage', {
            p: 'CartPage',
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>cart</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isEmptyCart" class="empty-cart">\n    <div class="empty-results">\n      <h3 text-center>\n        <ion-icon name="cart"></ion-icon>\n      </h3>\n      <p text-center>\n        Your cart is empty\n      </p>\n    </div>\n  </div>\n  <!--<div *ngIf="!isEmptyCart" class="cart-itm-wrap">\n\n    <ion-card *ngFor="let itm of  cartItems">\n     Contents -->\n  <div *ngIf="!isEmptyCart"> \n    <!-- Cart Product List -->\n    <ion-card *ngFor="let item of orders; let i = index">\n      \n      <ion-list no-lines>\n        <ion-item>\n          <ion-thumbnail item-start>\n            <img src="{{ item.image }}">\n          </ion-thumbnail>\n          <ion-row>\n          <ion-col style="text-align: right">\n            <ion-icon name="trash" color="primary" (click)="removeProduct(item, i)"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col style="text-align: left"> <h2>{{ item.product }}</h2></ion-col>\n        </ion-row>\n         \n          <ion-row>\n            <!-- Add More Product Quantity -->\n            <ion-col (click)="addQuantity(item, i)" style="text-align: left">\n              <ion-icon style="zoom:2.0;" ios="ios-add-circle" md="md-add-circle" color="secondary">\n              </ion-icon>\n            </ion-col>\n\n            <!-- Total Quantity -->\n            <ion-col class="ion-text-center" style="text-align: center">{{ item.quantity }}</ion-col>\n\n            <!-- Minus Product Quantity -->\n            <ion-col (click)="minusQuantity(item, i)" style="text-align: right">\n              <ion-icon style="zoom:2.0;" ios="ios-remove-circle" md="md-remove-circle" color="secondary"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n  </div>\n</ion-content>\n\n\n\n<ion-footer *ngIf="!isEmptyCart" class="single-footer">\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="addCart" (click)="checkOut()">\n        <button round=true ion-button full color="secondary">\n          Checkout\n        </button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-footer>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_orderservice_orderservice__["a" /* OrderserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=43.js.map