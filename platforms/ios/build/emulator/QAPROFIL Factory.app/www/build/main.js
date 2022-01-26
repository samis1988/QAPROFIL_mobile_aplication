webpackJsonp([47],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(224);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		449,
		46
	],
	"../pages/anglebead/anglebead.module": [
		450,
		45
	],
	"../pages/arcroof/arcroof.module": [
		451,
		44
	],
	"../pages/cards/cards.module": [
		452,
		43
	],
	"../pages/contact/contact.module": [
		453,
		42
	],
	"../pages/downspout/downspout.module": [
		454,
		41
	],
	"../pages/exit/exit.module": [
		455,
		40
	],
	"../pages/furring-channel/furring-channel.module": [
		456,
		39
	],
	"../pages/galleryalum/galleryalum.module": [
		457,
		38
	],
	"../pages/gypsum/gypsum.module": [
		458,
		37
	],
	"../pages/indooralum/indooralum.module": [
		459,
		36
	],
	"../pages/item-create/item-create.module": [
		460,
		35
	],
	"../pages/item-detail/item-detail.module": [
		461,
		34
	],
	"../pages/jtrim/jtrim.module": [
		462,
		33
	],
	"../pages/lightgaugesteel/lightgaugesteel.module": [
		463,
		32
	],
	"../pages/lintel/lintel.module": [
		464,
		31
	],
	"../pages/list-master/list-master.module": [
		465,
		30
	],
	"../pages/login/login.module": [
		466,
		29
	],
	"../pages/mainchannel/mainchannel.module": [
		468,
		28
	],
	"../pages/menu/menu.module": [
		467,
		27
	],
	"../pages/message/message.module": [
		469,
		26
	],
	"../pages/perimeter/perimeter.module": [
		470,
		25
	],
	"../pages/perimeterangle/perimeterangle.module": [
		471,
		24
	],
	"../pages/qapcarrier/qapcarrier.module": [
		472,
		23
	],
	"../pages/qaponetwo/qaponetwo.module": [
		473,
		22
	],
	"../pages/qapstrips/qapstrips.module": [
		479,
		21
	],
	"../pages/quality/quality.module": [
		474,
		20
	],
	"../pages/register/register.module": [
		475,
		19
	],
	"../pages/ridgecap/ridgecap.module": [
		476,
		18
	],
	"../pages/roofpanels/roofpanels.module": [
		477,
		17
	],
	"../pages/roofsheet/roofsheet.module": [
		478,
		16
	],
	"../pages/runner/runner.module": [
		480,
		15
	],
	"../pages/search/search.module": [
		481,
		14
	],
	"../pages/semiround/semiround.module": [
		482,
		13
	],
	"../pages/signup/signup.module": [
		483,
		12
	],
	"../pages/slitting/slitting.module": [
		484,
		11
	],
	"../pages/stripsjoint/stripsjoint.module": [
		485,
		10
	],
	"../pages/studles/studles.module": [
		486,
		9
	],
	"../pages/tabs/tabs.module": [
		487,
		8
	],
	"../pages/tbar/tbar.module": [
		488,
		7
	],
	"../pages/tutorial/tutorial.module": [
		489,
		6
	],
	"../pages/uchannel/uchannel.module": [
		490,
		5
	],
	"../pages/vedioqaprofil/vedioqaprofil.module": [
		491,
		4
	],
	"../pages/vsection/vsection.module": [
		492,
		3
	],
	"../pages/watergater/watergater.module": [
		493,
		2
	],
	"../pages/waveroof/waveroof.module": [
		494,
		1
	],
	"../pages/welcome/welcome.module": [
		495,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Roof Sheet",
            "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
            "about": 'RoofsheetPage',
        };
        var items = [
            {
                "name": "Roof Sheet",
                "profilePic": "assets/img/qaprofil/roof_pannel/roof-sheet.png",
                about: 'RoofsheetPage'
            },
            {
                "name": "Wave Roof",
                "profilePic": "assets/img/qaprofil/roof_pannel/wave.png",
                "about": 'WaveroofPage'
            },
            {
                "name": "ARC Roof",
                "profilePic": "assets/img/qaprofil/roof_pannel/arc_roof.png",
                "about": "ArcroofPage"
            },
            {
                "name": "Ridge Cap",
                "profilePic": "assets/img/qaprofil/roof_pannel/ridge_cap.png",
                "about": "RidgecapPage"
            },
            {
                "name": "Down Spout",
                "profilePic": "assets/img/qaprofil/roof_pannel/downspot1.png",
                "about": "DownspoutPage"
            },
            {
                "name": "Water Gutter",
                "profilePic": "assets/img/qaprofil/roof_pannel/water_gutter.bmp",
                "about": "WatergaterPage"
            },
            {
                "name": "Lintel",
                "profilePic": "assets/img/qaprofil/lintel.jpg",
                "about": "LintelPage"
            },
            {
                "name": "Perimeter Angle",
                "profilePic": "assets/img/qaprofil/perimeterangle.png",
                "about": "PerimeterPage"
            },
            {
                "name": "Furring Channel",
                "profilePic": "assets/img/qaprofil/furring_channel.png",
                "about": "FurringChannelPage"
            },
            {
                "name": "Main Channel",
                "profilePic": "assets/img/qaprofil/main.png",
                "about": "MainchannelPage"
            },
            {
                "name": "Angle Bead",
                "profilePic": "assets/img/qaprofil/angle.png",
                "about": "AnglebeadPage"
            },
            {
                "name": "Runner",
                "profilePic": "assets/img/qaprofil/runner.png",
                "about": "RunnerPage"
            },
            {
                "name": "J-Trim",
                "profilePic": "assets/img/qaprofil/angle.png",
                "about": "JtrimPage"
            },
            {
                "name": "Stud LES",
                "profilePic": "assets/img/qaprofil/stud_les.png",
                "about": "StudlesPage"
            },
            {
                "name": "V Section",
                "profilePic": "assets/img/qaprofil/vsection.png",
                "about": "VsectionPage"
            },
            {
                "name": "Qap Carrier",
                "profilePic": "assets/img/qaprofil/qap_carrier.png",
                "about": "QapcarrierPage"
            },
            {
                "name": "Perimeter Angle",
                "profilePic": "assets/img/qaprofil/p_a_alum.png",
                "about": "PerimeteranglePage"
            },
            {
                "name": "U Channel",
                "profilePic": "assets/img/qaprofil/u_channel.png",
                "about": "UchannelPage"
            },
            {
                "name": "84R and Joints Strips",
                "profilePic": "assets/img/qaprofil/84r/1.png",
                "about": "StripsjointPage"
            },
            {
                "name": "Qap 50 Strips",
                "profilePic": "assets/img/qaprofil/qap50/1.png",
                "about": "QapstripsPage"
            },
            {
                "name": "Qap 100 - 200 Strips",
                "profilePic": "assets/img/qaprofil/qap100-200/1.png",
                "about": "QaponetwoPage"
            },
            {
                "name": "T- Bar",
                "profilePic": "assets/img/qaprofil/tbar/4.png",
                "about": "TbarPage"
            },
            {
                "name": "Semi-Round Panel",
                "profilePic": "assets/img/qaprofil/bambo/1.jpg",
                "about": "SemiroundPage"
            },
            {
                "name": "Photo Gallery",
                "profilePic": "assets/img/qaprofil/gallery.png",
                "about": "GalleryalumPage"
            },
            {
                "name": "Light Gauge Steel Cabins",
                "profilePic": "assets/img/qaprofil/cabins.jpg",
                "about": "LightgaugesteelPage"
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* unused harmony export Tab3Root */
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(280);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["l" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/anglebead/anglebead.module#AnglebeadPageModule', name: 'AnglebeadPage', segment: 'anglebead', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/arcroof/arcroof.module#ArcroofPageModule', name: 'ArcroofPage', segment: 'arcroof', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downspout/downspout.module#DownspoutPageModule', name: 'DownspoutPage', segment: 'downspout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exit/exit.module#ExitPageModule', name: 'ExitPage', segment: 'exit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/furring-channel/furring-channel.module#FurringChannelPageModule', name: 'FurringChannelPage', segment: 'furring-channel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/galleryalum/galleryalum.module#GalleryalumPageModule', name: 'GalleryalumPage', segment: 'galleryalum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gypsum/gypsum.module#GypsumPageModule', name: 'GypsumPage', segment: 'gypsum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/indooralum/indooralum.module#IndooralumPageModule', name: 'IndooralumPage', segment: 'indooralum', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jtrim/jtrim.module#JtrimPageModule', name: 'JtrimPage', segment: 'jtrim', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lightgaugesteel/lightgaugesteel.module#LightgaugesteelPageModule', name: 'LightgaugesteelPage', segment: 'lightgaugesteel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lintel/lintel.module#LintelPageModule', name: 'LintelPage', segment: 'lintel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mainchannel/mainchannel.module#MainchannelPageModule', name: 'MainchannelPage', segment: 'mainchannel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perimeter/perimeter.module#PerimeterPageModule', name: 'PerimeterPage', segment: 'perimeter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/perimeterangle/perimeterangle.module#PerimeteranglePageModule', name: 'PerimeteranglePage', segment: 'perimeterangle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qapcarrier/qapcarrier.module#QapcarrierPageModule', name: 'QapcarrierPage', segment: 'qapcarrier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qaponetwo/qaponetwo.module#QaponetwoPageModule', name: 'QaponetwoPage', segment: 'qaponetwo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quality/quality.module#QualityPageModule', name: 'QualityPage', segment: 'quality', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ridgecap/ridgecap.module#RidgecapPageModule', name: 'RidgecapPage', segment: 'ridgecap', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roofpanels/roofpanels.module#RoofpanelsPageModule', name: 'RoofpanelsPage', segment: 'roofpanels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/roofsheet/roofsheet.module#RoofsheetPageModule', name: 'RoofsheetPage', segment: 'roofsheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/qapstrips/qapstrips.module#QapstripsPageModule', name: 'QapstripsPage', segment: 'qapstrips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/runner/runner.module#RunnerPageModule', name: 'RunnerPage', segment: 'runner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/semiround/semiround.module#SemiroundPageModule', name: 'SemiroundPage', segment: 'semiround', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slitting/slitting.module#SlittingPageModule', name: 'SlittingPage', segment: 'slitting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/stripsjoint/stripsjoint.module#StripsjointPageModule', name: 'StripsjointPage', segment: 'stripsjoint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/studles/studles.module#StudlesPageModule', name: 'StudlesPage', segment: 'studles', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tbar/tbar.module#TbarPageModule', name: 'TbarPage', segment: 'tbar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uchannel/uchannel.module#UchannelPageModule', name: 'UchannelPage', segment: 'uchannel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vedioqaprofil/vedioqaprofil.module#VedioqaprofilPageModule', name: 'VedioqaprofilPage', segment: 'vedioqaprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vsection/vsection.module#VsectionPageModule', name: 'VsectionPage', segment: 'vsection', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/watergater/watergater.module#WatergaterPageModule', name: 'WatergaterPage', segment: 'watergater', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/waveroof/waveroof.module#WaveroofPageModule', name: 'WaveroofPage', segment: 'waveroof', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["j" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["d" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_14__scaffold_digital_ionic_hardware_buttons__["a" /* HardwareButtons */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["k" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file_opener__["a" /* FileOpener */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(155);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(224);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__scaffold_digital_ionic_hardware_buttons__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen, alertCtrl, app, hardwareButtons) {
        var _this = this;
        this.translate = translate;
        this.platform = platform;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.alertShown = false;
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage', image: 'assets/img/icon/tutorial.png' },
            { title: 'Home', component: 'WelcomePage', image: 'assets/img/icon/home.png' },
            { title: 'Products', component: 'TabsPage', image: 'assets/img/icon/products.png' },
            { title: 'About', component: 'AboutPage', image: 'assets/img/icon/about.png' },
            { title: 'Quality', component: 'QualityPage', image: 'assets/img/icon/quality.png' },
            { title: 'Contact', component: 'ContactPage', image: 'assets/img/qaprofil/phone.png' }
        ];
        this.pages1 = [
            { title: 'Exit', component: 'TutorialPage', image: 'assets/img/exit.png' }
        ];
        platform.ready().then(function () {
            hardwareButtons.init();
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            platform.registerBackButtonAction(function () {
                if (_this.alertShown == false) {
                    _this.presentConfirm();
                }
            }, 0);
        });
    }
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Exit',
            message: 'Do you want Exit?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["p" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\" type=\"overlay\">\n  <style>\n.masters {\n \n   background: url('assets/img/steel.jpg') repeat ;\n}\n.toolbar{\n    background-image: url('assets/img/steel.jpg');\n    background-size: cover;\n    background-position: center center;\n  \n}\n</style>\n\n\n    <ion-header>\n    \n      \n      <table>\n      \n      <tr><td > <img height=\"50\" width=\"50\" src=\"assets/img/icon/menu.png\"/></td>\n      <td>\n    \n     \n    \n      <table>\n      \n      <tr><td >\n      \n      <font   face=\"Cambria\" color=\"#6d071a\" size=\"2\"> <b> </b></font> </td></tr> \n      <tr><td > <font   face=\"Times New Roman\" color=\"0f056b\" size=\"6\"> <b>Menu</b></font>  \n        </td></tr>\n       \n        </table> \n      </td></tr>\n      \n      \n      \n      </table> \n       \n       \n       \n      \n     \n    </ion-header>\n\n\n\n\n\n    <ion-content   class=\"masters\"    >\n     \n      <ion-list   >\n      \n      \n      \n      \n        <button  class=\"masters\"    menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n       <ion-avatar item-start>\n<img width=\"70\" height=\"70\" src=\"{{p.image}}\" alt=\"\"/>\n        </ion-avatar>\n         <h2><b><font   face=\"Cambria\" color=\"0000\" size=\"4\"> {{p.title}} </font></b></h2>\n        </button>\n         \n         \n          <button  class=\"masters\"    menuClose ion-item *ngFor=\"let p of pages1\" (click)=\"presentConfirm()\">\n       <ion-avatar item-start>\n<img width=\"70\" height=\"70\" src=\"{{p.image}}\" alt=\"\"/>\n        </ion-avatar>\n         <h2><b><font   face=\"Cambria\" color=\"0000\" size=\"4\"> {{p.title}} </font></b></h2>\n        </button>\n         \n         \n         \n          \n         \n         \n      </ion-list>\n      \n      \n  \n      \n      \n      \n     \n      \n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["c" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_7__scaffold_digital_ionic_hardware_buttons__["a" /* HardwareButtons */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[273]);
//# sourceMappingURL=main.js.map