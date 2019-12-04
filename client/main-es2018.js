(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\r\n<div class=\"toolbar\" role=\"banner\">\r\n  <img\r\n    width=\"30\"\r\n    alt=\"Cellebrite Logo\"\r\n    src=\"assets/favicon.png\"\r\n  />\r\n  <h2>Crime Tester</h2>\r\n    <div class=\"spacer\"></div>\r\n  <!-- <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\"> -->\r\n    \r\n    <!-- <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\r\n      <defs>\r\n        <style>\r\n          .cls-1 {\r\n            fill: none;\r\n          }\r\n\r\n          .cls-2 {\r\n            fill: #ffffff;\r\n          }\r\n        </style>\r\n      </defs>\r\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\r\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\r\n      />\r\n    </svg> -->\r\n    \r\n  <!-- </a> -->\r\n</div>\r\n\r\n<div class=\"content\" role=\"main\">\r\n \r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n  \r\n\r\n   ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/camera/camera.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/camera/camera.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<input [ngModel]=\"blur\" type=\"checkbox\" (change)=\"blur = !blur\" class=\"filter\">Blur\r\n<input [ngModel]=\"sepia\" type=\"checkbox\" (change)=\"sepia = !sepia\" class=\"filter\">Sepia\r\n<input [ngModel]=\"invert\" type=\"checkbox\" (change)=\"invert = !invert\" class=\"filter\">Invert\r\n<input [ngModel]=\"flip\" type=\"checkbox\" (change)=\"flip = !flip\" class=\"filter\">Flip-->\r\n<div>\r\n<video #camera autoplay playinline [ngStyle]=\"videoStyle()\"></video>\r\n  <div class=\"snapshot-btn\" (click)=\"captureImage()\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel *ngIf=\"images\">\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img [src]=\"images[0]\" alt=\"Random first slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>First slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img [src]=\"images[1]\" alt=\"Random second slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>Second slide label</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div>\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <div class=\"picsum-img-wrapper\">\r\n        <img [src]=\"images[2]\" alt=\"Random third slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h3>Third slide label</h3>\r\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n      </div>\r\n    </ng-template>\r\n  </ngb-carousel>\r\n\r\n \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>cases works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/map/map.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/map/map.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <h2>Simple Mapbox</h2> -->\r\n<button id='pause' class=\"pause\"></button>\r\n  <div style=\"width: 500px; height: 500px;\" class=\"map\" id=\"map\" class=\"match-parent\"></div>\r\n\r\n\r\n\r\n<div class=\"carusal\">\r\n    <app-carusal></app-carusal>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _features_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/map/map.component */ "./src/app/features/map/map.component.ts");
/* harmony import */ var _features_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/camera/camera.component */ "./src/app/features/camera/camera.component.ts");
/* harmony import */ var _features_cases_cases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/cases/cases.component */ "./src/app/features/cases/cases.component.ts");






const routes = [
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full'
    },
    {
        path: 'map',
        component: _features_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"]
    },
    {
        path: 'camera',
        component: _features_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]
    },
    {
        path: 'cases',
        component: _features_cases_cases_component__WEBPACK_IMPORTED_MODULE_5__["CasesComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _features_map_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/map.module */ "./src/app/features/map.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _features_map_module__WEBPACK_IMPORTED_MODULE_8__["MapModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].production }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app/app.component.scss":
/*!****************************************!*\
  !*** ./src/app/app/app.component.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n:host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\np {\n  margin: 0;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar {\n  height: 60px;\n  margin: -8px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar img {\n  margin: 0 16px;\n}\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n.content {\n  display: flex;\n  margin: 20px auto;\n  padding: 0px 0px 0px 5px;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n.card svg.material-icons path {\n  fill: #888;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small {\n  height: 16px;\n  width: 168px;\n}\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card span {\n  margin-left: 60px;\n}\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na:hover {\n  color: #125699;\n}\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter a {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n.terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREVKO0FDQ0U7Ozs7OztFQU1FLGFBQUE7QURFSjtBQ0NFO0VBQ0UsU0FBQTtBREVKO0FDQ0U7RUFDRSxPQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NFO0VBQ0UsY0FBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBREVKO0FDQ0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBREVKO0FDQ0U7RUFDRSxpQkFBQTtBREVKO0FDQ0U7RUFDRSxVQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBREVKO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0FERUo7QUNDRTtFQUNFLGVBQUE7QURFSjtBQ0NFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QURFSjtBQ0NFO0VBQ0UsZUFBQTtBREVKO0FDQ0U7RUFDRSwyQkFBQTtFQUNBLDBDQUFBO0FERUo7QUNDRTtFQUNFLGFBQUE7QURFSjtBQ0NFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBREVKO0FDQ0U7RUFDRSxpQkFBQTtBREVKO0FDQ0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBREVKO0FDQ0U7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURFSjtBQ0NFOzs7RUFHRSxjQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0NFO0VBQ0UsY0FBQTtBREVKO0FDQ0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBREVKO0FDQ0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QURFSjtBQ0NFO0VBQ0Usd0VBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHdFQUFBO0VBQ0EsdUJBQUE7QURFSjtBQ0NFO0VBQ0UsK0JBQUE7RUFDQSwyQ0FBQTtBREVKO0FDQ0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0NFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FERUo7QUNDRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMElBQUE7QURFSjtBQ0NFO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QURFSjtBQ0NFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURFSjtBQ0VFLHNCQUFBO0FBQ0E7RUFFRTs7SUFFRSxXQUFBO0VEQUo7O0VDR0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFREFKOztFQ0dFO0lBQ0UsaUJBQUE7RURBSjs7RUNHRTtJQUNFLFlBQUE7SUFDQSx3QkFBQTtFREFKO0FBQ0Y7QUNHRTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VEREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbjogOHB4IDA7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4udG9vbGJhciB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAtOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50b29sYmFyIGltZyB7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDIwcHggYXV0bztcbiAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM2OTY3Njc7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG59XG5cbi5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZjBmM2Y2LCAjZTZlYmYxIDkwJSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNywgMzEsIDM1LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTAuNWVtO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbnN2ZyNjbG91ZHMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogLTE2MHB4O1xuICBsZWZ0OiAtMjMwcHg7XG4gIHotaW5kZXg6IC0xMDtcbiAgd2lkdGg6IDE5MjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkLWNvbnRhaW5lciA+ICo6bm90KC5jaXJjbGUtbGluayksXG4udGVybWluYWwge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICB9XG5cbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDcycHg7XG4gIH1cblxuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICByaWdodDogMTIwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xuICBzdmcjcm9ja2V0LXNtb2tlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufSIsIjpob3N0IHtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIGgxLFxyXG4gIGgyLFxyXG4gIGgzLFxyXG4gIGg0LFxyXG4gIGg1LFxyXG4gIGg2IHtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1hcmdpbjogLThweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciBpbWcge1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIgI3R3aXR0ZXItbG9nbzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCA1cHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIHN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogIzg4ODtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDAgOHB4IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC1zbWFsbCB7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTY4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYShibGFjaywgMC4zNSk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xyXG4gICAgZmlsbDogcmdiKDEwNSwgMTAzLCAxMDMpO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldCB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IC0xMHB4O1xyXG4gICAgdG9wOiAtMjRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxODBweDtcclxuICAgIHotaW5kZXg6IC0xMDtcclxuICB9XHJcblxyXG4gIGEsXHJcbiAgYTp2aXNpdGVkLFxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTI1Njk5O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTYpO1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXDIwMjIgXFwyMDIyIFxcMjAyMlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDU4LCA1OCwgNTgpO1xyXG4gICAgY29sb3I6ICNjMmMzYzQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgdGV4dC1pbmRlbnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbCBwcmUge1xyXG4gICAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLENvbnNvbGFzLExpYmVyYXRpb24gTW9ubyxNZW5sbyxtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluayB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcclxuICB9XHJcblxyXG4gIC5jaXJjbGUtbGluazpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMjVyZW0pO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcblxyXG4gIGZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2Uge1xyXG4gICAgY29sb3I6ICMyNDI5MmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywzMSwzNSwuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZmFmYmZjLCNlZmYzZjYgOTAlKTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLEhlbHZldGljYSxBcmlhbCxzYW5zLXNlcmlmLEFwcGxlIENvbG9yIEVtb2ppLFNlZ29lIFVJIEVtb2ppLFNlZ29lIFVJIFN5bWJvbDtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywjZjBmM2Y2LCNlNmViZjEgOTAlKTtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgyNywzMSwzNSwuMzUpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLS41ZW07XHJcbiAgfVxyXG5cclxuICAuZ2l0aHViLXN0YXItYmFkZ2UgLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgfVxyXG5cclxuICBzdmcjY2xvdWRzIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogLTE2MHB4O1xyXG4gICAgbGVmdDogLTIzMHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gICAgd2lkdGg6IDE5MjBweDtcclxuICB9XHJcblxyXG5cclxuICAvKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSAsXHJcbiAgICAudGVybWluYWwge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDcycHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgIHN2ZyNyb2NrZXQtc21va2Uge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'crime-tester';
    }
    onbeforeinstallprompt(e) {
        // if (environment.enablePWAInstallationPopup) {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        // e.preventDefault();
        // Stash the event so it can be triggered later.
        this.deferredPrompt = e;
        this.addToHomeScreen();
        // }
    }
    addToHomeScreen() {
        this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            }
            else {
                console.log('User dismissed the A2HS prompt');
            }
            this.deferredPrompt = null;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:beforeinstallprompt', ['$event'])
], AppComponent.prototype, "onbeforeinstallprompt", null);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core.state */ "./src/app/core/core.state.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _map_map_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./map/map.effects */ "./src/app/core/map/map.effects.ts");










let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            // ngrx
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_core_state__WEBPACK_IMPORTED_MODULE_7__["reducers"], {
                metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_7__["metaReducers"],
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true,
                    strictActionSerializability: true,
                    strictStateSerializability: true
                }
            }),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot([
                _map_map_effects__WEBPACK_IMPORTED_MODULE_9__["MapEffects"],
            ]),
            src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
                ? []
                : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({
                    name: 'Crime Tester'
                }),
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/core.state.ts":
/*!************************************!*\
  !*** ./src/app/core/core.state.ts ***!
  \************************************/
/*! exports provided: reducers, metaReducers, selectMapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMapState", function() { return selectMapState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _map_map_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.reducer */ "./src/app/core/map/map.reducer.ts");



const reducers = {
    map: _map_map_reducer__WEBPACK_IMPORTED_MODULE_2__["mapReducer"],
};
const metaReducers = [
//initStateFromLocalStorage
];
//   if (!environment.production) {
//     if (!environment.test) {
//       metaReducers.unshift(debug);
//     }
//   }
const selectMapState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('map');


/***/ }),

/***/ "./src/app/core/map/map.actions.ts":
/*!*****************************************!*\
  !*** ./src/app/core/map/map.actions.ts ***!
  \*****************************************/
/*! exports provided: loadMapData, mapAddMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapData", function() { return loadMapData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAddMarker", function() { return mapAddMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const loadMapData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Map] Load');
const mapAddMarker = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Map] Add Marker');


/***/ }),

/***/ "./src/app/core/map/map.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/core/map/map.effects.ts ***!
  \*****************************************/
/*! exports provided: MapEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEffects", function() { return MapEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.actions */ "./src/app/core/map/map.actions.ts");
/* harmony import */ var src_app_features_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/map.service */ "./src/app/features/map.service.ts");







let MapEffects = class MapEffects {
    constructor(actions$, mapService, router) {
        this.actions$ = actions$;
        this.mapService = mapService;
        this.router = router;
        // login = createEffect(
        //   () =>
        //     // this.actions$.pipe(
        //     //   ofType(loadMapData),
        //     //   concatMap(() =>
        //     //     this.mapService.get(environment.dataUrl)
        //     //   ),
        //     //   map((results) => {
        //     //     console.log(results);
        //     //     return mapLoaded({ users, adMode, gridConfigRequest });
        //     // })
        //     // ),
        // );
        this.logout = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_map_actions__WEBPACK_IMPORTED_MODULE_5__["mapAddMarker"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => {
            this.router.navigate(['']);
            //   this.localStorageService.setItem(AUTH_KEY, {
            //     isAuthenticated: false
            //   });
        })), { dispatch: false });
    }
};
MapEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
    { type: src_app_features_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MapEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MapEffects);



/***/ }),

/***/ "./src/app/core/map/map.reducer.ts":
/*!*****************************************!*\
  !*** ./src/app/core/map/map.reducer.ts ***!
  \*****************************************/
/*! exports provided: initialState, mapReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapReducer", function() { return mapReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.actions */ "./src/app/core/map/map.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



const initialState = {
    data: null
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_map_actions__WEBPACK_IMPORTED_MODULE_1__["loadMapData"], state => ({ ...state, data: true })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_map_actions__WEBPACK_IMPORTED_MODULE_1__["mapAddMarker"], state => ({ ...state, isAuthenticated: false })));
function mapReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/features/camera/camera.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/features/camera/camera.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("video {\n  width: 100vw;\n}\n\ndiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\ndiv video {\n  width: 100vw;\n}\n\ndiv div.snapshot-btn {\n  border: solid 4px white;\n  background-color: transparent;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n  left: calc(50% - 40px);\n  opacity: 0.8;\n}\n\n.filter {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FtZXJhL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcZmVhdHVyZXNcXGNhbWVyYVxcY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtBQ0VKOztBREFFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbiAgZGl2LnNuYXBzaG90LWJ0biB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDRweCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIiwidmlkZW8ge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdiB2aWRlbyB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbmRpdiBkaXYuc25hcHNob3QtYnRuIHtcbiAgYm9yZGVyOiBzb2xpZCA0cHggd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5maWx0ZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/features/camera/camera.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/camera/camera.component.ts ***!
  \*****************************************************/
/*! exports provided: CameraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function() { return CameraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const scale = 0.25;
let CameraComponent = class CameraComponent {
    constructor() { }
    ngOnInit() {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'user'
            }
        }).then(stream => {
            this.video.nativeElement.srcObject = stream;
        });
    }
    captureImage() {
        const canvas = document.createElement('canvas');
        canvas.width = this.video.nativeElement.videoWidth * scale;
        canvas.height = this.video.nativeElement.videoHeight * scale;
        canvas.getContext('2d')
            .drawImage(this.video.nativeElement, 0, 0, canvas.width, canvas.height);
        const base64 = canvas.toDataURL();
        console.log(base64);
    }
    videoStyle() {
        let filter = '';
        let transform = '';
        if (this.blur) {
            filter += 'blur(5px)';
        }
        if (this.sepia) {
            filter += 'sepia(60%)';
        }
        if (this.invert) {
            filter += 'invert(1)';
        }
        if (this.flip) {
            transform += 'scaleX(-1)';
        }
        return {
            filter,
            transform
        };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('camera', { static: true })
], CameraComponent.prototype, "video", void 0);
CameraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-camera',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./camera.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/camera/camera.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./camera.component.scss */ "./src/app/features/camera/camera.component.scss")).default]
    })
], CameraComponent);

/*(function() {
  "use strict";

  var video, $output;
  var scale = 0.25;

  var initialize = function() {
    $output = $("#output");
    video = $("#video").get(0);
    $("#capture").click(captureImage);
  };

  var captureImage = function() {
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth * scale;
    canvas.height = video.videoHeight * scale;
    canvas.getContext('2d')
      .drawImage(video, 0, 0, canvas.width, canvas.height);

    var img = document.createElement("img");
    img.src = canvas.toDataURL();
    $output.prepend(img);
  };

  $(initialize);

}());

<video id="video" controls="controls">
    <source src=".mp4" />
</video>

<button id="capture">Capture</button>

<div id="output"></div>
*/


/***/ }),

/***/ "./src/app/features/carusal/carusal.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/features/carusal/carusal.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".picsum-img-wrapper {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FydXNhbC9DOlxcVXNlcnNcXE5lbWV0XFxEZXNrdG9wXFxjcmltZS10ZXN0ZXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxjYXJ1c2FsXFxjYXJ1c2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9jYXJ1c2FsL2NhcnVzYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYXJ1c2FsL2NhcnVzYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljc3VtLWltZy13cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuIiwiLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/features/carusal/carusal.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/carusal/carusal.component.ts ***!
  \*******************************************************/
/*! exports provided: CarusalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarusalComponent", function() { return CarusalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let CarusalComponent = class CarusalComponent {
    constructor(config) {
        this.config = config;
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = false;
        config.interval = 60000;
    }
    ngOnInit() {
    }
};
CarusalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
];
CarusalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carusal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carusal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carusal.component.scss */ "./src/app/features/carusal/carusal.component.scss")).default]
    })
], CarusalComponent);



/***/ }),

/***/ "./src/app/features/cases/cases.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/features/cases/cases.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Nhc2VzL2Nhc2VzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/features/cases/cases.component.ts":
/*!***************************************************!*\
  !*** ./src/app/features/cases/cases.component.ts ***!
  \***************************************************/
/*! exports provided: CasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function() { return CasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CasesComponent = class CasesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cases',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cases.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cases.component.scss */ "./src/app/features/cases/cases.component.scss")).default]
    })
], CasesComponent);



/***/ }),

/***/ "./src/app/features/consts.ts":
/*!************************************!*\
  !*** ./src/app/features/consts.ts ***!
  \************************************/
/*! exports provided: MAP_INITIAL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_INITIAL", function() { return MAP_INITIAL; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const telAvivLat = 32.109333;
const telAvivLng = 34.855499;
const center = [telAvivLng, telAvivLat];
const MAP_INITIAL = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 11,
    center: center
};


/***/ }),

/***/ "./src/app/features/map.module.ts":
/*!****************************************!*\
  !*** ./src/app/features/map.module.ts ***!
  \****************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/features/map/map.component.ts");
/* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/features/camera/camera.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cases/cases.component */ "./src/app/features/cases/cases.component.ts");
/* harmony import */ var _carusal_carusal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carusal/carusal.component */ "./src/app/features/carusal/carusal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let MapModule = class MapModule {
};
MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
            _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"],
            _cases_cases_component__WEBPACK_IMPORTED_MODULE_6__["CasesComponent"],
            _carusal_carusal_component__WEBPACK_IMPORTED_MODULE_7__["CarusalComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
        ],
        exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]]
    })
], MapModule);



/***/ }),

/***/ "./src/app/features/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/features/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map */ "./src/app/map.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let MapService = class MapService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.db = [];
        const telAvivLat = 32.109333;
        const telAvivLng = 34.855499;
        const taCoordinates = [telAvivLat, telAvivLng];
        const newMarker = new _map__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"](taCoordinates, { massage: 'hello tel aviv' });
        this.db.push(newMarker);
    }
    getMarkers() {
        return this.db;
    }
    createMarker(data) {
        this.db.push(data);
    }
    removeMarker(key) {
        this.db.slice(1);
    }
    getMockData2() {
        const result = [{ "updateTime": "2019-12-04T08:57:07.578Z", "event": "POI", "data": [{ "lon": "32.090280", "lat": "34.820134" }, { "lon": "32.087415", "lat": "34.812946" }, { "lon": "32.090677", "lat": "34.805180" }, { "lon": "32.091011", "lat": "34.804824" }, { "lon": "32.091155", "lat": "34.804372" }] }];
        return result;
    }
    getMockData() {
        const geojson = {
            type: 'FeatureCollection',
            features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-77.032, 38.913]
                    },
                    properties: {
                        title: 'Mapbox',
                        description: 'Washington, D.C.'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.414, 37.776]
                    },
                    properties: {
                        title: 'Mapbox',
                        description: 'San Francisco, California'
                    }
                },
                {
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        coordinates: [-122.41, 37.75]
                    },
                    properties: {
                        title: 'Mapbox',
                        description: 'roni'
                    }
                }
            ]
        };
        return geojson;
    }
    get(resource, options) {
        return this.httpClient.get(resource, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    post(resource, body, options) {
        return this.httpClient.post(resource, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    delete(resource) {
        return this.httpClient.delete(resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    put(resource, body, options) {
        return this.httpClient.put(resource, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    }
    handleError(error) {
        console.error(error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(`Server Error: ${error.message}`);
    }
};
MapService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MapService);



/***/ }),

/***/ "./src/app/features/map/map.component.scss":
/*!*************************************************!*\
  !*** ./src/app/features/map/map.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.match-parent {\n  width: 100%;\n  height: 100%;\n}\n.marker {\n  background-image: url('marker3.png');\n  background-size: cover;\n  width: 20px;\n  height: 30px;\n  cursor: pointer;\n}\n.marker2 {\n  width: 59px;\n  height: 59px;\n  background-color: blue;\n}\n.content {\n  display: flex;\n  margin: 32px auto;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  width: 100wh;\n  height: 100vh;\n}\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n.card svg.material-icons path {\n  fill: #888;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small {\n  height: 16px;\n  width: 168px;\n}\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card span {\n  margin-left: 60px;\n}\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na:hover {\n  color: #125699;\n}\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\n.mapboxgl-popup {\n  max-width: 200px;\n}\n.mapboxgl-popup-content {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n}\n.pause {\n  position: absolute;\n  margin: 20px;\n  z-index: 99;\n}\n#pause::after {\n  content: \"Pause\";\n}\n#pause.pause::after {\n  content: \"Play\";\n}\n.carusal {\n  width: 56%;\n}\n.carousel-inner {\n  height: 150px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZmVhdHVyZXMvbWFwL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcZmVhdHVyZXNcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FERUo7QUNDRTtFQUNFLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURFSjtBQ0NFO0VBUUUsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBRExKO0FDU0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUROSjtBQ1NFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUROSjtBQ1NFO0VBQ0UsaUJBQUE7QUROSjtBQ1NFO0VBQ0UsVUFBQTtBRE5KO0FDU0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUROSjtBQ1NFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBRE5KO0FDU0U7RUFDRSxlQUFBO0FETko7QUNTRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FETko7QUNTRTtFQUNFLGVBQUE7QUROSjtBQ1NFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBRE5KO0FDU0U7RUFDRSxhQUFBO0FETko7QUNTRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUROSjtBQ1NFO0VBQ0UsaUJBQUE7QUROSjtBQ1NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUROSjtBQ1NFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FETko7QUNTRTs7O0VBR0UsY0FBQTtFQUNBLHFCQUFBO0FETko7QUNTRTtFQUNFLGNBQUE7QUROSjtBQ1NFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUROSjtBQ1NFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FETko7QUNTRTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBRE5KO0FDU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLHVCQUFBO0FETko7QUNTRTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QUROSjtBQ1NFO0VBQ0UsZ0JBQUE7QUROSjtBQ1NFO0VBQ0Usa0JBQUE7RUFDQSxvQ0FBQTtBRE5KO0FDU0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FETko7QUNTSTtFQUNBLGdCQUFBO0FETko7QUNTSTtFQUNBLGVBQUE7QUROSjtBQ1FFO0VBQ0UsVUFBQTtBRExKO0FDUUU7RUFDRSx3QkFBQTtBRExKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5tYXRjaC1wYXJlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFya2VyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21hcmtlcjMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXJrZXIyIHtcbiAgd2lkdGg6IDU5cHg7XG4gIGhlaWdodDogNTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDMycHggYXV0bztcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwd2g7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29ucyB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbnN2Zy5tYXRlcmlhbC1pY29uczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkIHN2Zy5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzg4ODtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgOHB4IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTY4cHg7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiAwIDRweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59XG5cbi5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XG4gIGZpbGw6ICM2OTY3Njc7XG59XG5cbi5jYXJkLmhpZ2hsaWdodC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuc3ZnI3JvY2tldCB7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0xMHB4O1xuICB0b3A6IC0yNHB4O1xufVxuXG5zdmcjcm9ja2V0LXNtb2tlIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxODBweDtcbiAgei1pbmRleDogLTEwO1xufVxuXG5hLFxuYTp2aXNpdGVkLFxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTk3NmQyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbmE6aG92ZXIge1xuICBjb2xvcjogIzEyNTY5OTtcbn1cblxuLnRlcm1pbmFsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmctdG9wOiA0NXB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwZjBmMTA7XG59XG5cbi50ZXJtaW5hbDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLigKLigKLigKJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjM2EzYTNhO1xuICBjb2xvcjogI2MyYzNjNDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBhZGRpbmc6IDE0cHggMDtcbiAgdGV4dC1pbmRlbnQ6IDRweDtcbn1cblxuLnRlcm1pbmFsIHByZSB7XG4gIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhciwgQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIG1vbm9zcGFjZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwIDFyZW0gMXJlbTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2lyY2xlLWxpbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBtYXJnaW46IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWVlZWU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgdHJhbnNpdGlvbjogMXMgZWFzZS1vdXQ7XG59XG5cbi5jaXJjbGUtbGluazpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5tYXBib3hnbC1wb3B1cCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5tYXBib3hnbC1wb3B1cC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBhdXNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDIwcHg7XG4gIHotaW5kZXg6IDk5O1xufVxuXG4jcGF1c2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJQYXVzZVwiO1xufVxuXG4jcGF1c2UucGF1c2U6OmFmdGVyIHtcbiAgY29udGVudDogXCJQbGF5XCI7XG59XG5cbi5jYXJ1c2FsIHtcbiAgd2lkdGg6IDU2JTtcbn1cblxuLmNhcm91c2VsLWlubmVyIHtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xufSIsIi5tYXRjaC1wYXJlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubWFya2VyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL21hcmtlcjMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubWFya2VyMiB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgLy8gd2lkdGg6IDUwcHg7XHJcbiAgICAvLyBoZWlnaHQ6IDUwcHg7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAvLyBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG5cclxuICAgIHdpZHRoOiA1OXB4O1xyXG4gICAgaGVpZ2h0OiA1OXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuXHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAzMnB4IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwd2g7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgLm1hcGJveGdsLXBvcHVwIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXBib3hnbC1wb3B1cC1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICB9XHJcblxyXG4gIC5wYXVzZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIH1cclxuICAgICBcclxuICAgICNwYXVzZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1BhdXNlJztcclxuICAgIH1cclxuICAgICBcclxuICAgICNwYXVzZS5wYXVzZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1BsYXknO1xyXG4gICAgfVxyXG4gIC5jYXJ1c2Fse1xyXG4gICAgd2lkdGg6IDU2JTtcclxuICB9XHJcblxyXG4gIC5jYXJvdXNlbC1pbm5lcntcclxuICAgIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/features/map/map.component.ts":
/*!***********************************************!*\
  !*** ./src/app/features/map/map.component.ts ***!
  \***********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map.service */ "./src/app/features/map.service.ts");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consts */ "./src/app/features/consts.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");







let MapComponent = class MapComponent {
    constructor(mapService, renderer2, store) {
        this.mapService = mapService;
        this.renderer2 = renderer2;
        this.store = store;
        this.markerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputFocus = false;
        this.mock = [{ "updateTime": "2019-12-04T12:15:51.621Z", "event": "POI", "data": [{ "owner": "killer", "points": [{ "lon": "32.090280", "lat": "34.820134" }, { "lon": "32.087415", "lat": "34.812946" }, { "lon": "32.090677", "lat": "34.805180" }, { "lon": "32.091011", "lat": "34.804824" }, { "lon": "32.091155", "lat": "34.804372" }] }] }];
    }
    ngOnInit() {
        this.setToken();
        // this.store.dispatch(loadMapData());
        this.mapService.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dataUrl).subscribe((response) => {
            this.markersData = response[0].data;
            this.displayMap();
            this.displayMarkers();
        });
    }
    setToken() {
        // mapboxgl.accessToken = environment.mapbox.accessToken;
        Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, "accessToken").set(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mapbox.accessToken);
    }
    displayMap() {
        this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"](_consts__WEBPACK_IMPORTED_MODULE_5__["MAP_INITIAL"]);
        // Add map controls
        this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"]());
    }
    displayMarkers() {
        this.markersData.forEach(marker => {
            marker.points.forEach(point => {
                let el = this.renderer2.createElement('div');
                el.className = 'marker';
                const coordinate = [point.lat, point.lon];
                new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"](el)
                    .setLngLat(coordinate)
                    .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ offset: 25 })
                    .setHTML('<h3>' + marker.owner + '</h3><p>' + 'description 1234567890' + '</p>'))
                    .addTo(this.map);
            });
            // create a HTML element for each feature
            // let el = document.createElement('div');
            // el.className = 'marker2';
            // el["style"] = `width: 59px;
            // height: 59px;
            // background-color: red;`;
            // // make a marker for each feature and add to the map
            // new mapboxgl.Marker(el)
            //   .setLngLat(marker.geometry.coordinates as mapboxgl.LngLatLike)
            //   .addTo(this.map);
        });
        this.map.on('load', () => {
            // Insert the layer beneath any symbol layer.
            var layers = this.map.getStyle().layers;
            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }
            this.map.addLayer({
                'id': '3d-buildings',
                'source': 'composite',
                'source-layer': 'building',
                'filter': ['==', 'extrude', 'true'],
                'type': 'fill-extrusion',
                'minzoom': 15,
                'paint': {
                    'fill-extrusion-color': '#aaa',
                    // use an 'interpolate' expression to add a smooth transition effect to the
                    // buildings as the user zooms in
                    'fill-extrusion-height': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "height"]
                    ],
                    'fill-extrusion-base': [
                        "interpolate", ["linear"], ["zoom"],
                        15, 0,
                        15.05, ["get", "min_height"]
                    ],
                    'fill-extrusion-opacity': .6
                }
            }, labelLayerId);
        });
    }
};
MapComponent.ctorParameters = () => [
    { type: _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MapComponent.prototype, "markerClicked", void 0);
MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/map/map.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./map.component.scss */ "./src/app/features/map/map.component.scss")).default]
    })
], MapComponent);



/***/ }),

/***/ "./src/app/map.ts":
/*!************************!*\
  !*** ./src/app/map.ts ***!
  \************************/
/*! exports provided: Map, GeoJSON, FeatureCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoJSON", function() { return GeoJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollection", function() { return FeatureCollection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Map {
}
class GeoJSON {
    constructor(coordinates, properties) {
        this.properties = properties;
        this.type = 'Feature';
        this.geometry = {
            type: 'Point',
            coordinates: coordinates
        };
    }
}
class FeatureCollection {
    constructor(features) {
        this.features = features;
        this.type = 'FeatureCollection';
    }
}


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");



















let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1IjoicmVzaGJldCIsImEiOiJjazJldW83cHIwOTVvM2dvZWdrZ2Z6dHoxIn0.dC17JvoskGT6-1NlddFthw'
    },
    pusher: {
        key: 'PUSHER_API_KEY',
        cluster: 'PUSHER_CLUSTER',
    },
    dataUrl: 'http://44.229.50.66:5000/data'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nemet\Desktop\crime-tester\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2018.js.map