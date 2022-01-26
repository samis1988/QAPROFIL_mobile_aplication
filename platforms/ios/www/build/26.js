webpackJsonp([26],{

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
            ],
        })
    ], MessagePageModule);
    return MessagePageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
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
var MessagePage = /** @class */ (function () {
    // Initialise module classes
    function MessagePage(navCtrl, http, NP, fb, alertCtrl, toastCtrl) {
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
        this.isInserted = false;
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
            "subject": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            "description": ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
        this.name = this.NP.get('name');
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
    MessagePage.prototype.ionViewWillEnter = function () {
        this.resetFields();
        if (this.NP.get("record")) {
            this.isEdited = true;
            this.isInserted = false;
            this.selectEntry(this.NP.get("record"));
            this.pageTitle = 'Amend entry';
        }
        else {
            this.isEdited = false;
            this.isInserted = true;
            this.pageTitle = 'Create entry';
        }
    };
    MessagePage.prototype.logout = function () {
        this.navCtrl.push('WelcomePage');
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
    MessagePage.prototype.selectEntry = function (item) {
        this.requestDescription = item.description;
        this.requestSubject = item.subject;
        this.recordID = item.id;
    };
    MessagePage.prototype.sigin = function (description, subject) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' }), options = { "key": "create", "name": this.name, "description": description, "subject": subject }, url = this.baseURI + "message_user.php";
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
                _this.navCtrl.push('LoginPage', { name: _this.name });
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
    MessagePage.prototype.resetFields = function () {
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
    MessagePage.prototype.sendNotification = function (message) {
        var notification = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        notification.present();
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n \n \n\n\n\n \n<ion-header >\n  <ion-navbar color="primary" >\n         <button \n         class="add"\n         ion-button \n                  round\n         item-right\n         icon-right\n         margin-bottom\n         color="primary"\n         (click)="logout()">\n          <font   face="Cambria" color="#6d071a" size="2">   Logout</font> \n            <ion-icon  color="danger" name="log-out"></ion-icon>\n      </button>\n        <font   face="Cambria" color="0f056b" size="2"> <b>Username : {{name}}</b> </font> \n   \n  \n  </ion-navbar>\n   \n</ion-header>\n\n \n      \n    \n \n\n\n\n\n\n\n\n\n<ion-content padding>\n\n   <div>\n       \n       \n       <ion-item *ngIf="isEdited && !hideForm">\n       <font   face="Cambria" color="0f056b" size="5"> <b>Request Details :</b></font> \n      </ion-item>\n       \n       <ion-item *ngIf="isInserted && !hideForm">\n       \n        <font   face="Cambria" color="0f056b" size="5"> <b>Send Request</b></font> \n</ion-item>\n\n      <div *ngIf="hideForm">\n         <ion-item class="post-entry-message" text-wrap>\n            <h2>Success!</h2>\n            <p>You will be answered as soon as possible at your email</p>\n             \n         </ion-item>\n      </div>\n\n\n      <div *ngIf="!hideForm">\n         <form [formGroup]="form" (ngSubmit)="sigin(this.requestDescription,this.requestSubject )">\n\n            <ion-list>\n                \n                  <ion-item lines="none" class ="itemform">\n   <ion-input   class ="inputClass" id = "nameInput" formControlName="subject" \n       [(ngModel)]="requestSubject" type = "text" placeholder = \n       "Enter a Subject ..." required>\n   </ion-input>\n</ion-item>\n          <p></p> \n        \n                                <ion-item lines="none" class ="itemform">\n   <ion-textarea  class ="inputClass" id = "nameInput" formControlName="description"  rows="6"\n       [(ngModel)]="requestDescription"   placeholder = \n       "Enter a  Description ..." required>\n   </ion-textarea>\n</ion-item>    \n                 \n                \n                \n              <p></p>  \n\n            </ion-list>\n <ion-item *ngIf="isInserted && !hideForm">\n                  <button    \n                     ion-button \n                          round\n                     color="secondary" \n                     text-center \n                     block \n                     [disabled]="!form.valid ">Save Entry</button>\n                \n</ion-item>  \n         </form>\n      </div>\n   </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/qaprofil1/Desktop/sql/qaprofilnew/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=26.js.map