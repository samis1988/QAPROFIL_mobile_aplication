webpackJsonp([19],{

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(522);
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

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(139);
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    // Initialise module classes
    function RegisterPage(navCtrl, http, NP, fb, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.NP = NP;
        this.fb = fb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
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
        /**
         * @name baseURI
         * @type {String}
         * @public
         * @description     Remote URI for retrieving data from and sending data to
         */
        this.baseURI = "https://qaprofil.com.qa/ionic/";
        // Create form builder validation rules
        this.form = fb.group({
            "name": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "email": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "mobile": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "description": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
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
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Amend entry';
        }
        else {
            this.isEdited = false;
            this.pageTitle = 'Create entry';
        }
    };
    /**
     * Assign the navigation retrieved data to properties
     * used as models on the page's HTML form
     *
     * @public
     * @method selectEntry
     * @param item 		{any} 			Navigation data
     * @return {None}
     */
    RegisterPage.prototype.selectEntry = function (item) {
        this.requestName = item.name;
        this.requestEmail = item.email;
        this.requestMobile = item.mobile;
        this.requestDescription = item.description;
        this.recordID = item.id;
    };
    /**
     * Save a new record that has been added to the page's HTML form
     * Use angular's http post method to submit the record data
     *
     * @public
     * @method createEntry
     * @param name 			{String} 			Name value from form field
     * @param description 	{String} 			Description value from form field
     * @return {None}
     */
    RegisterPage.prototype.sigin = function (name, email, mobile, description) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "create", "name": name, "email": email, "mobile": mobile, "description": description }, url = this.baseURI + "register_user.php";
        this.http.post(url, JSON.stringify(options), headers)
            .subscribe(function (i) {
            console.dir(i);
            if (i == "Registration successfull") {
                var alert_1 = _this.alertCtrl.create({
                    title: 'CONGRATS',
                    subTitle: ("Your Login success"),
                    buttons: ['OK']
                });
                alert_1.present();
                _this.navCtrl.push('LoginPage', { name: email });
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: "Error",
                    subTitle: (i),
                    buttons: ['OK']
                });
                alert_2.present();
            }
        }, function (error) {
            console.dir(error);
        });
    };
    /**
     * Clear values in the page's HTML form fields
     *
     * @public
     * @method resetFields
     * @return {None}
     */
    RegisterPage.prototype.resetFields = function () {
        this.requestName = "";
        this.requestEmail = "";
        this.requestMobile = "";
        this.requestDescription = "";
    };
    /**
     * Manage notifying the user of the outcome of remote operations
     *
     * @public
     * @method sendNotification
     * @param message 	{String} 			Message to be displayed in the notification
     * @return {None}
     */
    RegisterPage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/register/register.html"*/' <!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n \n\n\n<ion-header >\n  <ion-navbar color="primary" >\n        <font   face="Cambria" color="0f056b" size="5"> <b>Register</b></font> \n    \n  \n  </ion-navbar>\n</ion-header>\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n   <div>\n      \n\n\n      <div *ngIf="hideForm">\n         <ion-item class="post-entry-message" text-wrap>\n            <h2>Success!</h2>\n            <p>You will be answered as soon as possible at your email</p>\n             \n         </ion-item>\n      </div>\n\n\n      <div *ngIf="!hideForm">\n         <form [formGroup]="form" (ngSubmit)="sigin(this.requestName,this.requestEmail,this.requestMobile,this.requestDescription)">\n\n            <ion-list>\n                \n           \n     \n                \n                <ion-item lines="none" class ="itemform">\n   <ion-input   class ="inputClass" id = "nameInput" formControlName="name" \n       [(ngModel)]="requestName" type = "text" placeholder = \n       "Enter a Name ..." required>\n   </ion-input>\n</ion-item>\n          <p></p>      \n              \n                \n                        <ion-item lines="none" class ="itemform">\n   <ion-input  class ="inputClass" id = "nameInput" formControlName="email" \n       [(ngModel)]="requestEmail" type = "text" placeholder = \n       "Enter a Email ..." required>\n   </ion-input>\n</ion-item>\n                \n                  <p></p>      \n              \n                \n                        <ion-item lines="none" class ="itemform">\n   <ion-input  class ="inputClass" id = "nameInput" formControlName="mobile" \n       [(ngModel)]="requestMobile" type = "number" placeholder = \n       "Enter a mobile ..." required>\n   </ion-input>\n</ion-item>    \n           <p></p>\n                                 <ion-item lines="none" class ="itemform">\n   <ion-input  class ="inputClass" id = "nameInput" formControlName="description" \n       [(ngModel)]="requestDescription" type = "password" placeholder = \n       "Enter a Password ..." required>\n   </ion-input>\n</ion-item>   \n           <p></p>\n                \n                \n                \n               \n                 \n                \n                \n              <p></p>  \n\n\n              \n                  <button    \n                     ion-button \n                          round\n                     color="secondary" \n                     text-center \n                     block \n                     [disabled]="!form.valid">Save Entry</button>\n                \n\n            </ion-list>\n\n         </form>\n      </div>\n   </div>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=19.js.map