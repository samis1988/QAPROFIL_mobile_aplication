webpackJsonp([16],{

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__ = __webpack_require__(165);
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







var RegisterPage = /** @class */ (function () {
    // Initialise module classes
    function RegisterPage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, storage, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userservice = userservice;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.email = '';
        this.password = '';
        this.phone = '';
        this.name = '';
        this.STORAGE_VALUE = '';
        /**
         * @name isEdited
         * @type {Boolean}
         * @public
         * @description     Flag to be used for checking whether we are adding/editing an entry
         */
        this.isEdited = false;
        /**
         * @name hideForm
         * @type {Boolean}
         * @public
         * @description     Flag to hide the form upon successful completion of remote operation
         */
        this.hideForm = false;
        /**
         * @name recordID
         * @type {String}
         * @public
         * @description     Property to store the recordID for when an existing entry is being edited
         */
        this.recordID = null;
        // Create form builder validation rules
        this.exampleForm = fb.group({
            "name": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            "phone": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,]),
            'password': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+$'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4)]),
        });
        this.tab = this.navCtrl.parent;
        this.baseURL = this.userservice.baseURL;
        this.page = this.NP.get('p');
        console.log(this.page);
    }
    /**
     * Triggered when template view is about to be entered
     * Determine whether we adding or editing a record
     * based on any supplied navigation parameters
     *
     * @public
     * @method ionViewWillEnter
     * @return {None}
     */
    RegisterPage.prototype.ionViewWillEnter = function () {
        this.getValue();
    };
    RegisterPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingCtrl.create({
                            content: 'Please wait...',
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RegisterPage.prototype.sigin = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var credential = { name: this.exampleForm.value['name'], email: this.exampleForm.value['email'], phone: this.exampleForm.value['phone'], password: this.exampleForm.value['password'] };
        this.http.post(this.baseURL + "/user/create", credential, { observe: 'response' }).subscribe(function (data) {
            var user;
            if (data.status == 200)
                loading.dismiss();
            user = data.body;
            _this.info = user;
            _this.userservice.setUser(_this.info);
            _this.saveValue(_this.info);
            _this.getValue();
            _this.sendNotification('user create successfully');
            _this.goback();
        }, function (error) {
            loading.dismiss();
            _this.sendNotification(error.error);
        });
    };
    RegisterPage.prototype.resetFields = function () {
        this.requestName = "";
        this.requestEmail = "";
        this.requestMobile = "";
        this.requestDescription = "";
    };
    RegisterPage.prototype.goToTab3 = function () {
        this.tab.select(4);
    };
    RegisterPage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    RegisterPage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    RegisterPage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
        });
    };
    RegisterPage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.goback = function () {
        if (this.page != null || this.page != undefined || this.page != '') {
            this.navCtrl.push(this.page);
        }
        else {
            //profile
            this.navCtrl.pop();
        }
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/register/register.html"*/'<ion-header no-border>\n\n   <ion-navbar color="primary" no-border>\n      <ion-title color="white">Register</ion-title>\n   </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n   <ion-content [fullscreen]="true" class="back">\n      <div class="banner">\n         <img src="../assets/img/banner.svg" />\n\n         <div class="reg">\n            <div class="text-center">\n               <img src="../assets/img/logo.png">\n            </div>\n            <div>\n\n               <!--(ngSubmit)="sigin(this.requestName,this.requestEmail,this.requestMobile,this.requestDescription)"-->\n               <div padding-top>\n                  <form [formGroup]="exampleForm">\n\n                     <ion-list no-lines>\n                        <ion-item no-lines class="itemform">\n                           <ion-input class="inputClass" id="nameInput" formControlName="name" name="name" type="text"\n                              placeholder="Enter a Name ...">\n                           </ion-input>\n                        </ion-item>\n                        <ion-row *ngIf="exampleForm.controls.name.invalid && exampleForm.controls.name.dirty">\n                           <ion-col>\n                              <span class="error-txt">Please enter a valid Name</span>\n                           </ion-col>\n                        </ion-row>\n                        <p></p>\n\n\n                        <ion-item no-lines class="itemform">\n                           <ion-input class="inputClass" id="nameInput" formControlName="email" type="email"\n                              name="email" placeholder="Enter a Email ...">\n                           </ion-input>\n                        </ion-item>\n                        <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n                           <ion-col>\n                              <span class="error-txt">Please enter a valid email</span>\n                           </ion-col>\n                        </ion-row>\n                        <p></p>\n\n\n                        <ion-item no-lines class="itemform">\n                           <ion-input class="inputClass" id="nameInput" formControlName="phone" name="phone"\n                              type="number" placeholder="Enter a mobile ...">\n                           </ion-input>\n                        </ion-item>\n                        <ion-row *ngIf="exampleForm.controls.phone.invalid && exampleForm.controls.phone.dirty">\n                           <ion-col>\n                              <span class="error-txt">Please enter a valid phone</span>\n                           </ion-col>\n                        </ion-row>\n                        <p></p>\n                        <ion-item no-lines class="itemform">\n                           <ion-input class="inputClass" id="nameInput" formControlName="password" name="password"\n                              type="password" placeholder="Enter a Password ...">\n                           </ion-input>\n                        </ion-item>\n                        <ion-row *ngIf="exampleForm.controls.password.invalid && exampleForm.controls.password.dirty">\n                           <ion-col>\n                              <span class="error-txt">Please enter a valid password</span>\n                           </ion-col>\n                        </ion-row>\n                        <p></p>\n\n                        <button ion-button color="secondary" text-center block [disabled]="exampleForm.invalid"\n                           (click)="sigin()">Register</button>\n\n\n                     </ion-list>\n\n                  </form>\n               </div>\n            </div>\n            <div class="text-center">\n               <h6 class="register"> already have an account!</h6>\n            </div>\n         </div>\n      </div>\n   </ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_userservice_userservice__["a" /* UserserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* LoadingController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=16.js.map