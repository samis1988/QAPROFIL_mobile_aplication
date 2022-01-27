webpackJsonp([21],{

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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







var ProfilePage = /** @class */ (function () {
    // Initialise module classes
    function ProfilePage(navCtrl, http, NP, fb, alertCtrl, toastController, userservice, storage, loadingCtrl) {
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
        // Create form builder validation rules
        this.exampleForm = fb.group({
            "name": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
            "phone": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,]),
        });
        this.baseURL = this.userservice.baseURL;
        this.page = this.NP.get('p');
        console.log(this.page);
        this.getValue();
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
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.setValue();
    };
    ProfilePage.prototype.update = function () {
        var _this = this;
        console.log("Validate successfully");
        console.log(this.exampleForm.value['email']);
        var credential = { id: this.user.id, name: this.exampleForm.value['name'], email: this.exampleForm.value['email'], phone: this.exampleForm.value['phone'] };
        this.http.post(this.baseURL + "/user/update", credential, { observe: 'response' }).subscribe(function (data) {
            if (data.status == 200)
                _this.sendNotification('user information updated successfully');
            _this.goback();
        }, function (error) {
            _this.sendNotification(error.error);
        });
    };
    ProfilePage.prototype.sendNotification = function (message) {
        var notification = this.toastController.create({
            message: message,
            cssClass: "custom-class",
            duration: 3000,
        });
        notification.present();
    };
    ProfilePage.prototype.saveValue = function (user) {
        console.log(user);
        if (user) {
            this.storage.set('ID', user.id);
            this.storage.set('NAME', user.name);
        }
    };
    ProfilePage.prototype.getValue = function () {
        var _this = this;
        this.storage.get('ID').then(function (result) {
            _this.id = result;
            console.log('id', _this.id);
        });
    };
    ProfilePage.prototype.showAlert = function (msg, title) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: (msg),
            buttons: ['OK']
        });
        alert.present();
    };
    ProfilePage.prototype.goback = function () {
        this.navCtrl.pop();
        console.log('Click on button Test Console Log');
    };
    ProfilePage.prototype.setValue = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        loading.present();
        var request = this.baseURL + "/user/info";
        this.http.post(request, { id: this.page }, { observe: 'response' }).subscribe(function (data) {
            var info;
            if (data.status == 200)
                loading.dismiss();
            info = data.body;
            _this.user = info;
            console.log(_this.user);
            _this.exampleForm.controls.name.setValue(_this.user.name);
            _this.exampleForm.controls.email.setValue(_this.user.email);
            _this.exampleForm.controls.phone.setValue(_this.user.phone);
        }, function (error) {
            loading.dismiss();
            console.log(error);
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/solidwall/Desktop/qaprofilnew/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n\n  <ion-navbar color="primary" no-border>\n     <ion-title color="white">Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-content [fullscreen]="true" class="back">\n     <div class="banner">\n        <img src="../assets/img/banner.svg" />\n\n        <div class="reg">\n           <div class="text-center">\n              <img src="../assets/img/logo.png">\n           </div>\n           <div>\n              <div padding-top>\n                 <form [formGroup]="exampleForm">\n\n                    <ion-list no-lines>\n                       <ion-item no-lines class="itemform">\n                          <ion-input class="inputClass" id="nameInput" formControlName="name" name="name" type="text"\n                             placeholder="Enter a Name ...">\n                          </ion-input>\n                       </ion-item>\n                       <ion-row *ngIf="exampleForm.controls.name.invalid && exampleForm.controls.name.dirty">\n                          <ion-col>\n                             <span class="error-txt">Please enter a valid Name</span>\n                          </ion-col>\n                       </ion-row>\n                       <p></p>\n\n\n                       <ion-item no-lines class="itemform">\n                          <ion-input class="inputClass" id="nameInput" formControlName="email" type="email"\n                             name="email" placeholder="Enter a Email ...">\n                          </ion-input>\n                       </ion-item>\n                       <ion-row *ngIf="exampleForm.controls.email.invalid && exampleForm.controls.email.dirty">\n                          <ion-col>\n                             <span class="error-txt">Please enter a valid email</span>\n                          </ion-col>\n                       </ion-row>\n                       <p></p>\n\n\n                       <ion-item no-lines class="itemform">\n                          <ion-input class="inputClass" id="nameInput" formControlName="phone" name="phone"\n                             type="number" placeholder="Enter a mobile ...">\n                          </ion-input>\n                       </ion-item>\n                       <ion-row *ngIf="exampleForm.controls.phone.invalid && exampleForm.controls.phone.dirty">\n                          <ion-col>\n                             <span class="error-txt">Please enter a valid phone</span>\n                          </ion-col>\n                       </ion-row>\n                       <p></p>\n                       <button ion-button color="secondary" text-center block [disabled]="exampleForm.invalid"\n                          (click)="update()">Save</button>\n\n\n                    </ion-list>\n\n                 </form>\n              </div>\n           </div>\n        </div>\n     </div>\n</ion-content>'/*ion-inline-end:"/Users/solidwall/Desktop/qaprofilnew/src/pages/profile/profile.html"*/,
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
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=21.js.map