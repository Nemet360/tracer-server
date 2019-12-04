var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app/app.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\r\n<div class=\"toolbar\" role=\"banner\">\r\n  <img width=\"30\" src=\"assets/favicon.png\" />\r\n  <h2>Crime Tracer</h2>\r\n  <div class=\"spacer\"></div>\r\n</div>\r\n\r\n<div class=\"content\" role=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/camera/camera.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/camera/camera.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!--<input [ngModel]=\"blur\" type=\"checkbox\" (change)=\"blur = !blur\" class=\"filter\">Blur\r\n<input [ngModel]=\"sepia\" type=\"checkbox\" (change)=\"sepia = !sepia\" class=\"filter\">Sepia\r\n<input [ngModel]=\"invert\" type=\"checkbox\" (change)=\"invert = !invert\" class=\"filter\">Invert\r\n<input [ngModel]=\"flip\" type=\"checkbox\" (change)=\"flip = !flip\" class=\"filter\">Flip-->\r\n<div>\r\n<video #camera autoplay playinline [ngStyle]=\"videoStyle()\"></video>\r\n  <div class=\"snapshot-btn\" (click)=\"captureImage()\"></div>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ngb-carousel *ngIf=\"images\">\r\n    <ng-template ngbSlide>\r\n       \r\n      <app-event-item [data]=\"'slice1'\"></app-event-item>\r\n      <!-- <div class=\"carousel-caption\">\r\n        <h3>First slide label</h3>\r\n        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n      </div> -->\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n          \r\n      <app-event-item [data]=\"'slice2'\"></app-event-item>\r\n      <!-- <div class=\"carousel-caption\">\r\n        <h3>Second slide label</h3>\r\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n      </div> -->\r\n    </ng-template>\r\n    <ng-template ngbSlide>\r\n      <app-event-item [data]=\"'slice3'\"></app-event-item>\r\n      <!-- <div class=\"carousel-caption\">\r\n        <h3>Third slide label</h3>\r\n        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n      </div> -->\r\n    </ng-template>\r\n  </ngb-carousel>\r\n\r\n \r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>cases works!</p>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/event-item/event-item.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/event-item/event-item.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"event-item\">\r\n    <!-- <div class=\"title\">{{data}}</div>\r\n    <div class=\"Contnet\">Contnet</div>     -->\r\n    <mat-card class=\"example-card\">\r\n            <mat-card-header>\r\n              \r\n              <mat-card-title>{{data}}</mat-card-title>\r\n              \r\n            </mat-card-header>\r\n            <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\r\n            <mat-card-content>\r\n             \r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-button>LIKE</button>         \r\n            </mat-card-actions>\r\n          </mat-card>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/map/map.component.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/map/map.component.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"map\" class=\"map-container\"></div>\r\n\r\n\r\n\r\n<!-- <div class=\"carusal\">\r\n    <app-carusal></app-carusal>\r\n</div> -->\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _features_map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/map/map.component */ "./src/app/features/map/map.component.ts");
            /* harmony import */ var _features_camera_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/camera/camera.component */ "./src/app/features/camera/camera.component.ts");
            /* harmony import */ var _features_cases_cases_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/cases/cases.component */ "./src/app/features/cases/cases.component.ts");
            var routes = [
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
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/app/app.component.scss": 
        /*!****************************************!*\
          !*** ./src/app/app/app.component.scss ***!
          \****************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n:host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 8px 0;\n}\np {\n  margin: 0;\n}\n.spacer {\n  flex: 1;\n}\n.toolbar {\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n.toolbar img {\n  margin: 0 16px;\n}\n.toolbar #twitter-logo {\n  height: 40px;\n  margin: 0 16px;\n}\n.toolbar #twitter-logo:hover {\n  opacity: 0.8;\n}\n.content {\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\nsvg.material-icons {\n  height: 24px;\n  width: auto;\n}\nsvg.material-icons:not(:last-child) {\n  margin-right: 8px;\n}\n.card svg.material-icons path {\n  fill: #888;\n}\n.card-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 16px;\n}\n.card {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #fafafa;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n.card-container .card:not(:last-child) {\n  margin-right: 0;\n}\n.card.card-small {\n  height: 16px;\n  width: 168px;\n}\n.card-container .card:not(.highlight-card) {\n  cursor: pointer;\n}\n.card-container .card:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n.card-container .card:not(.highlight-card):hover .material-icons path {\n  fill: #696767;\n}\n.card.highlight-card {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n.card.card.highlight-card span {\n  margin-left: 60px;\n}\nsvg#rocket {\n  width: 80px;\n  position: absolute;\n  left: -10px;\n  top: -24px;\n}\nsvg#rocket-smoke {\n  height: 100vh;\n  position: absolute;\n  top: 10px;\n  right: 180px;\n  z-index: -10;\n}\na,\na:visited,\na:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\na:hover {\n  color: #125699;\n}\n.terminal {\n  position: relative;\n  width: 80%;\n  max-width: 600px;\n  border-radius: 6px;\n  padding-top: 45px;\n  margin-top: 8px;\n  overflow: hidden;\n  background-color: #0f0f10;\n}\n.terminal::before {\n  content: \"•••\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 4px;\n  background: #3a3a3a;\n  color: #c2c3c4;\n  width: 100%;\n  font-size: 2rem;\n  line-height: 0;\n  padding: 14px 0;\n  text-indent: 4px;\n}\n.terminal pre {\n  font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;\n  color: white;\n  padding: 0 1rem 1rem;\n  margin: 0;\n}\n.circle-link {\n  height: 40px;\n  width: 40px;\n  border-radius: 40px;\n  margin: 8px;\n  background-color: white;\n  border: 1px solid #eeeeee;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: 1s ease-out;\n}\n.circle-link:hover {\n  transform: translateY(-0.25rem);\n  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n}\nfooter {\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n}\nfooter a {\n  display: flex;\n  align-items: center;\n}\n.github-star-badge {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n.github-star-badge:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n.github-star-badge .material-icons {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\nsvg#clouds {\n  position: fixed;\n  bottom: -160px;\n  left: -230px;\n  z-index: -10;\n  width: 1920px;\n}\n/* Responsive Styles */\n@media screen and (max-width: 767px) {\n  .card-container > *:not(.circle-link),\n.terminal {\n    width: 100%;\n  }\n\n  .card:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n\n  .card.highlight-card span {\n    margin-left: 72px;\n  }\n\n  svg#rocket-smoke {\n    right: 120px;\n    transform: rotate(-5deg);\n  }\n}\n@media screen and (max-width: 575px) {\n  svg#rocket-smoke {\n    display: none;\n    visibility: hidden;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksMEpBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREVKO0FDQ0U7Ozs7OztFQU1FLGFBQUE7QURFSjtBQ0NFO0VBQ0UsU0FBQTtBREVKO0FDQ0U7RUFDRSxPQUFBO0FERUo7QUNDRTtFQUNFLFlBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBRENKO0FDRUU7RUFDRSxjQUFBO0FEQ0o7QUNFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FEQ0o7QUNFRTtFQUNFLFlBQUE7QURDSjtBQ0VFO0VBQ0UsYUFBQTtFQUdBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QURESjtBQ0lFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURESjtBQ0lFO0VBQ0UsaUJBQUE7QURESjtBQ0lFO0VBQ0UsVUFBQTtBRERKO0FDSUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QURESjtBQ0lFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBRERKO0FDSUU7RUFDRSxlQUFBO0FEREo7QUNJRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FEREo7QUNJRTtFQUNFLGVBQUE7QURESjtBQ0lFO0VBQ0UsMkJBQUE7RUFDQSwwQ0FBQTtBRERKO0FDSUU7RUFDRSxhQUFBO0FEREo7QUNJRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURESjtBQ0lFO0VBQ0UsaUJBQUE7QURESjtBQ0lFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURESjtBQ0lFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEREo7QUNJRTs7O0VBR0UsY0FBQTtFQUNBLHFCQUFBO0FEREo7QUNJRTtFQUNFLGNBQUE7QURESjtBQ0lFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QURESjtBQ0lFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FEREo7QUNJRTtFQUNFLHdFQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx3RUFBQTtFQUNBLHVCQUFBO0FEREo7QUNJRTtFQUNFLCtCQUFBO0VBQ0EsMkNBQUE7QURESjtBQ0lFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEREo7QUNJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUU7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBJQUFBO0FEREo7QUNJRTtFQUNFLGdFQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtBRERKO0FDSUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEREo7QUNJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEREo7QUNLRSxzQkFBQTtBQUNBO0VBRUU7O0lBRUUsV0FBQTtFREhKOztFQ01FO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RURISjs7RUNNRTtJQUNFLGlCQUFBO0VESEo7O0VDTUU7SUFDRSxZQUFBO0lBQ0Esd0JBQUE7RURISjtBQUNGO0FDTUU7RUFDRTtJQUNFLGFBQUE7SUFDQSxrQkFBQTtFREpKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3Qge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cblxuLnRvb2xiYXIge1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zIHtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmNhcmQgc3ZnLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICBmaWxsOiAjODg4O1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbjogMCA4cHggMTZweDtcbiAgcGFkZGluZzogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jYXJkLmNhcmQtc21hbGwge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNjhweDtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE3cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIC5tYXRlcmlhbC1pY29ucyBwYXRoIHtcbiAgZmlsbDogIzY5Njc2Nztcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1pbi13aWR0aDogMzAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jYXJkLmNhcmQuaGlnaGxpZ2h0LWNhcmQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xufVxuXG5zdmcjcm9ja2V0IHtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTEwcHg7XG4gIHRvcDogLTI0cHg7XG59XG5cbnN2ZyNyb2NrZXQtc21va2Uge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDE4MHB4O1xuICB6LWluZGV4OiAtMTA7XG59XG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuYTpob3ZlciB7XG4gIGNvbG9yOiAjMTI1Njk5O1xufVxuXG4udGVybWluYWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZy10b3A6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMGYxMDtcbn1cblxuLnRlcm1pbmFsOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKAouKAouKAolwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6ICMzYTNhM2E7XG4gIGNvbG9yOiAjYzJjM2M0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAycmVtO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcGFkZGluZzogMTRweCAwO1xuICB0ZXh0LWluZGVudDogNHB4O1xufVxuXG4udGVybWluYWwgcHJlIHtcbiAgZm9udC1mYW1pbHk6IFNGTW9uby1SZWd1bGFyLCBDb25zb2xhcywgTGliZXJhdGlvbiBNb25vLCBNZW5sbywgbW9ub3NwYWNlO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xuICBtYXJnaW46IDA7XG59XG5cbi5jaXJjbGUtbGluayB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIG1hcmdpbjogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZWVlZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiAxcyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZS1saW5rOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjI1cmVtKTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuZm9vdGVyIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuZm9vdGVyIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2l0aHViLXN0YXItYmFkZ2Uge1xuICBjb2xvcjogIzI0MjkyZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNywgMzEsIDM1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjZmFmYmZjLCAjZWZmM2Y2IDkwJSk7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuc3ZnI2Nsb3VkcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAtMTYwcHg7XG4gIGxlZnQ6IC0yMzBweDtcbiAgei1pbmRleDogLTEwO1xuICB3aWR0aDogMTkyMHB4O1xufVxuXG4vKiBSZXNwb25zaXZlIFN0eWxlcyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSxcbi50ZXJtaW5hbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gIH1cblxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgfVxuXG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KSB7XG4gIHN2ZyNyb2NrZXQtc21va2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59IiwiOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgLy8gbWFyZ2luOiAtOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyIGltZyB7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICB9XHJcblxyXG4gIC50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgfVxyXG5cclxuICAudG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIC8vIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgc3ZnLm1hdGVyaWFsLWljb25zOm5vdCg6bGFzdC1jaGlsZCkge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCBzdmcubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiAjODg4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIG1hcmdpbjogMCA4cHggMTZweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLXNtYWxsIHtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKGJsYWNrLCAwLjM1KTtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNvbnRhaW5lciAuY2FyZDpub3QoLmhpZ2hsaWdodC1jYXJkKTpob3ZlciAubWF0ZXJpYWwtaWNvbnMgcGF0aCB7XHJcbiAgICBmaWxsOiByZ2IoMTA1LCAxMDMsIDEwMyk7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5oaWdobGlnaHQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICAuY2FyZC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBzdmcjcm9ja2V0IHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB0b3A6IC0yNHB4O1xyXG4gIH1cclxuXHJcbiAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgcmlnaHQ6IDE4MHB4O1xyXG4gICAgei1pbmRleDogLTEwO1xyXG4gIH1cclxuXHJcbiAgYSxcclxuICBhOnZpc2l0ZWQsXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzE5NzZkMjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMjU2OTk7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNik7XHJcbiAgfVxyXG5cclxuICAudGVybWluYWw6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlxcMjAyMiBcXDIwMjIgXFwyMDIyXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDU4LCA1OCk7XHJcbiAgICBjb2xvcjogI2MyYzNjNDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rIHtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcclxuICAgIHRyYW5zaXRpb246IDFzIGVhc2Utb3V0O1xyXG4gIH1cclxuXHJcbiAgLmNpcmNsZS1saW5rOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4yNXJlbSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgYSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSB7XHJcbiAgICBjb2xvcjogIzI0MjkyZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI3LDMxLDM1LC4yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmYWZiZmMsI2VmZjNmNiA5MCUpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksSGVsdmV0aWNhLEFyaWFsLHNhbnMtc2VyaWYsQXBwbGUgQ29sb3IgRW1vamksU2Vnb2UgVUkgRW1vamksU2Vnb2UgVUkgU3ltYm9sO1xyXG4gIH1cclxuXHJcbiAgLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCNmMGYzZjYsI2U2ZWJmMSA5MCUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LDMxLDM1LC4zNSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtLjVlbTtcclxuICB9XHJcblxyXG4gIC5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAtMTYwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogMTkyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIgPiAqOm5vdCguY2lyY2xlLWxpbmspICxcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNzJweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcjcm9ja2V0LXNtb2tlIHtcclxuICAgICAgcmlnaHQ6IDEyMHB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gICAgc3ZnI3JvY2tldC1zbW9rZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app/app.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/app/app.component.ts ***!
          \**************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'crime-tester';
                }
                AppComponent.prototype.onbeforeinstallprompt = function (e) {
                    // if (environment.enablePWAInstallationPopup) {
                    // Prevent Chrome 67 and earlier from automatically showing the prompt
                    // e.preventDefault();
                    // Stash the event so it can be triggered later.
                    this.deferredPrompt = e;
                    this.addToHomeScreen();
                    // }
                };
                AppComponent.prototype.addToHomeScreen = function () {
                    var _this = this;
                    this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt
                    this.deferredPrompt.userChoice.then(function (choiceResult) {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                        }
                        else {
                            console.log('User dismissed the A2HS prompt');
                        }
                        _this.deferredPrompt = null;
                    });
                };
                return AppComponent;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/core/core.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/core/core.module.ts ***!
          \*************************************/
        /*! exports provided: CoreModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function () { return CoreModule; });
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
            var CoreModule = /** @class */ (function () {
                function CoreModule() {
                }
                return CoreModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/core/core.state.ts": 
        /*!************************************!*\
          !*** ./src/app/core/core.state.ts ***!
          \************************************/
        /*! exports provided: reducers, metaReducers, selectMapState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function () { return reducers; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function () { return metaReducers; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectMapState", function () { return selectMapState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var _map_map_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map/map.reducer */ "./src/app/core/map/map.reducer.ts");
            var reducers = {
                map: _map_map_reducer__WEBPACK_IMPORTED_MODULE_2__["mapReducer"],
            };
            var metaReducers = [
            //initStateFromLocalStorage
            ];
            //   if (!environment.production) {
            //     if (!environment.test) {
            //       metaReducers.unshift(debug);
            //     }
            //   }
            var selectMapState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('map');
            /***/ 
        }),
        /***/ "./src/app/core/map/map.actions.ts": 
        /*!*****************************************!*\
          !*** ./src/app/core/map/map.actions.ts ***!
          \*****************************************/
        /*! exports provided: loadMapData, mapAddMarker */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMapData", function () { return loadMapData; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAddMarker", function () { return mapAddMarker; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var loadMapData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Map] Load');
            var mapAddMarker = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Map] Add Marker');
            /***/ 
        }),
        /***/ "./src/app/core/map/map.effects.ts": 
        /*!*****************************************!*\
          !*** ./src/app/core/map/map.effects.ts ***!
          \*****************************************/
        /*! exports provided: MapEffects */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapEffects", function () { return MapEffects; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.actions */ "./src/app/core/map/map.actions.ts");
            /* harmony import */ var src_app_features_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/map.service */ "./src/app/features/map.service.ts");
            var MapEffects = /** @class */ (function () {
                function MapEffects(actions$, mapService, router) {
                    var _this = this;
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
                    this.logout = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_map_actions__WEBPACK_IMPORTED_MODULE_5__["mapAddMarker"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
                        _this.router.navigate(['']);
                        //   this.localStorageService.setItem(AUTH_KEY, {
                        //     isAuthenticated: false
                        //   });
                    })); }, { dispatch: false });
                }
                return MapEffects;
            }());
            MapEffects.ctorParameters = function () { return [
                { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"] },
                { type: src_app_features_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            MapEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], MapEffects);
            /***/ 
        }),
        /***/ "./src/app/core/map/map.reducer.ts": 
        /*!*****************************************!*\
          !*** ./src/app/core/map/map.reducer.ts ***!
          \*****************************************/
        /*! exports provided: initialState, mapReducer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function () { return initialState; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapReducer", function () { return mapReducer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _map_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.actions */ "./src/app/core/map/map.actions.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            var initialState = {
                data: null
            };
            var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_map_actions__WEBPACK_IMPORTED_MODULE_1__["loadMapData"], function (state) { return (__assign({}, state, { data: true })); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_map_actions__WEBPACK_IMPORTED_MODULE_1__["mapAddMarker"], function (state) { return (__assign({}, state, { isAuthenticated: false })); }));
            function mapReducer(state, action) {
                return reducer(state, action);
            }
            /***/ 
        }),
        /***/ "./src/app/features/camera/camera.component.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/features/camera/camera.component.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("video {\n  width: 100vw;\n}\n\ndiv {\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n\ndiv video {\n  width: 100vw;\n}\n\ndiv div.snapshot-btn {\n  border: solid 4px white;\n  background-color: transparent;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 10px;\n  left: calc(50% - 40px);\n  opacity: 0.8;\n}\n\n.filter {\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FtZXJhL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcZmVhdHVyZXNcXGNhbWVyYVxcY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREFFO0VBQ0UsWUFBQTtBQ0VKOztBREFFO0VBQ0UsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURFQTtFQUNFLGlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYW1lcmEvY2FtZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidmlkZW8ge1xyXG4gIHdpZHRoOiAxMDB2dztcclxufVxyXG5cclxuZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHZpZGVvIHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICB9XHJcbiAgZGl2LnNuYXBzaG90LWJ0biB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDRweCB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIiwidmlkZW8ge1xuICB3aWR0aDogMTAwdnc7XG59XG5cbmRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbmRpdiB2aWRlbyB7XG4gIHdpZHRoOiAxMDB2dztcbn1cbmRpdiBkaXYuc25hcHNob3QtYnRuIHtcbiAgYm9yZGVyOiBzb2xpZCA0cHggd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5maWx0ZXIge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/features/camera/camera.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/features/camera/camera.component.ts ***!
          \*****************************************************/
        /*! exports provided: CameraComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraComponent", function () { return CameraComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var scale = 0.25;
            var CameraComponent = /** @class */ (function () {
                function CameraComponent() {
                }
                CameraComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    navigator.mediaDevices.getUserMedia({
                        video: {
                            facingMode: 'user'
                        }
                    }).then(function (stream) {
                        _this.video.nativeElement.srcObject = stream;
                    });
                };
                CameraComponent.prototype.captureImage = function () {
                    var canvas = document.createElement('canvas');
                    canvas.width = this.video.nativeElement.videoWidth * scale;
                    canvas.height = this.video.nativeElement.videoHeight * scale;
                    canvas.getContext('2d')
                        .drawImage(this.video.nativeElement, 0, 0, canvas.width, canvas.height);
                    var base64 = canvas.toDataURL();
                    console.log(base64);
                };
                CameraComponent.prototype.videoStyle = function () {
                    var filter = '';
                    var transform = '';
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
                        filter: filter,
                        transform: transform
                    };
                };
                return CameraComponent;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/features/carusal/carusal.component.scss": 
        /*!*********************************************************!*\
          !*** ./src/app/features/carusal/carusal.component.scss ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".picsum-img-wrapper {\n  height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvY2FydXNhbC9DOlxcVXNlcnNcXE5lbWV0XFxEZXNrdG9wXFxjcmltZS10ZXN0ZXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxjYXJ1c2FsXFxjYXJ1c2FsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9jYXJ1c2FsL2NhcnVzYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9jYXJ1c2FsL2NhcnVzYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGljc3VtLWltZy13cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuIiwiLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gIGhlaWdodDogMTUwcHg7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/features/carusal/carusal.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/features/carusal/carusal.component.ts ***!
          \*******************************************************/
        /*! exports provided: CarusalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarusalComponent", function () { return CarusalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            var CarusalComponent = /** @class */ (function () {
                function CarusalComponent(config) {
                    this.config = config;
                    this.images = [944, 1011, 984].map(function (n) { return "https://picsum.photos/id/" + n + "/900/500"; });
                    // customize default values of carousels used by this component tree
                    config.showNavigationArrows = true;
                    config.showNavigationIndicators = false;
                    config.interval = 60000;
                }
                CarusalComponent.prototype.ngOnInit = function () {
                };
                return CarusalComponent;
            }());
            CarusalComponent.ctorParameters = function () { return [
                { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
            ]; };
            CarusalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-carusal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./carusal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/carusal/carusal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./carusal.component.scss */ "./src/app/features/carusal/carusal.component.scss")).default]
                })
            ], CarusalComponent);
            /***/ 
        }),
        /***/ "./src/app/features/cases/cases.component.scss": 
        /*!*****************************************************!*\
          !*** ./src/app/features/cases/cases.component.scss ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Nhc2VzL2Nhc2VzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/features/cases/cases.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/features/cases/cases.component.ts ***!
          \***************************************************/
        /*! exports provided: CasesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasesComponent", function () { return CasesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var CasesComponent = /** @class */ (function () {
                function CasesComponent() {
                }
                CasesComponent.prototype.ngOnInit = function () {
                };
                return CasesComponent;
            }());
            CasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-cases',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cases.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/cases/cases.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cases.component.scss */ "./src/app/features/cases/cases.component.scss")).default]
                })
            ], CasesComponent);
            /***/ 
        }),
        /***/ "./src/app/features/consts.ts": 
        /*!************************************!*\
          !*** ./src/app/features/consts.ts ***!
          \************************************/
        /*! exports provided: MAP_INITIAL */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_INITIAL", function () { return MAP_INITIAL; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var telAvivLat = 32.109333;
            var telAvivLng = 34.855499;
            var firstLat = 32.090280;
            var firstLon = 34.820134;
            var centerTA = [telAvivLng, telAvivLat];
            var centerSF = [-122.48369693756104, 37.83381888486939];
            var centerPT = [firstLon, firstLat];
            var MAP_INITIAL = {
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                zoom: 10,
                center: centerPT
            };
            /***/ 
        }),
        /***/ "./src/app/features/event-item/event-item.component.scss": 
        /*!***************************************************************!*\
          !*** ./src/app/features/event-item/event-item.component.scss ***!
          \***************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".mat-card-image {\n  width: 80vh;\n  height: 10vh;\n}\n\n.mat-card-title {\n  margin-left: 70px;\n}\n\n.mat-card-content {\n  display: inline;\n}\n\n.mat-card-actions {\n  margin-left: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXZlbnQtaXRlbS9DOlxcVXNlcnNcXE5lbWV0XFxEZXNrdG9wXFxjcmltZS10ZXN0ZXIvc3JjXFxhcHBcXGZlYXR1cmVzXFxldmVudC1pdGVtXFxldmVudC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9ldmVudC1pdGVtL2V2ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ldmVudC1pdGVtL2V2ZW50LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1hdC1jYXJkLWltYWdleyAgIFxyXG4gICAgd2lkdGg6IDgwdmg7XHJcbiAgICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG59XHJcblxyXG4ubWF0LWNhcmQtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcclxufVxyXG5cclxuIiwiLm1hdC1jYXJkLWltYWdlIHtcbiAgd2lkdGg6IDgwdmg7XG4gIGhlaWdodDogMTB2aDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG5cbi5tYXQtY2FyZC1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ubWF0LWNhcmQtYWN0aW9ucyB7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/features/event-item/event-item.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/features/event-item/event-item.component.ts ***!
          \*************************************************************/
        /*! exports provided: EventItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventItemComponent", function () { return EventItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var EventItemComponent = /** @class */ (function () {
                function EventItemComponent() {
                }
                EventItemComponent.prototype.ngOnInit = function () {
                };
                return EventItemComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], EventItemComponent.prototype, "data", void 0);
            EventItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-event-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./event-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/features/event-item/event-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./event-item.component.scss */ "./src/app/features/event-item/event-item.component.scss")).default]
                })
            ], EventItemComponent);
            /***/ 
        }),
        /***/ "./src/app/features/map.module.ts": 
        /*!****************************************!*\
          !*** ./src/app/features/map.module.ts ***!
          \****************************************/
        /*! exports provided: MapModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function () { return MapModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/features/map/map.component.ts");
            /* harmony import */ var _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./camera/camera.component */ "./src/app/features/camera/camera.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _cases_cases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cases/cases.component */ "./src/app/features/cases/cases.component.ts");
            /* harmony import */ var _carusal_carusal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carusal/carusal.component */ "./src/app/features/carusal/carusal.component.ts");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _event_item_event_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-item/event-item.component */ "./src/app/features/event-item/event-item.component.ts");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            var MapModule = /** @class */ (function () {
                function MapModule() {
                }
                return MapModule;
            }());
            MapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    declarations: [
                        _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"],
                        _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"],
                        _cases_cases_component__WEBPACK_IMPORTED_MODULE_6__["CasesComponent"],
                        _carusal_carusal_component__WEBPACK_IMPORTED_MODULE_7__["CarusalComponent"],
                        _event_item_event_item_component__WEBPACK_IMPORTED_MODULE_9__["EventItemComponent"]
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
                    ],
                    exports: [_map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _camera_camera_component__WEBPACK_IMPORTED_MODULE_4__["CameraComponent"]]
                })
            ], MapModule);
            /***/ 
        }),
        /***/ "./src/app/features/map.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/features/map.service.ts ***!
          \*****************************************/
        /*! exports provided: MapService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function () { return MapService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map */ "./src/app/map.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var MapService = /** @class */ (function () {
                function MapService(httpClient) {
                    this.httpClient = httpClient;
                    this.db = [];
                    var telAvivLat = 32.109333;
                    var telAvivLng = 34.855499;
                    var taCoordinates = [telAvivLat, telAvivLng];
                    var newMarker = new _map__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"](taCoordinates, { massage: 'hello tel aviv' });
                    this.db.push(newMarker);
                }
                MapService.prototype.getMarkers = function () {
                    return this.db;
                };
                MapService.prototype.createMarker = function (data) {
                    this.db.push(data);
                };
                MapService.prototype.removeMarker = function (key) {
                    this.db.slice(1);
                };
                MapService.prototype.getMockData2 = function () {
                    var result = [{ "updateTime": "2019-12-04T08:57:07.578Z", "event": "POI", "data": [{ "lon": "32.090280", "lat": "34.820134" }, { "lon": "32.087415", "lat": "34.812946" }, { "lon": "32.090677", "lat": "34.805180" }, { "lon": "32.091011", "lat": "34.804824" }, { "lon": "32.091155", "lat": "34.804372" }] }];
                    return result;
                };
                MapService.prototype.getMockData = function () {
                    var geojson = {
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
                };
                MapService.prototype.get = function (resource, options) {
                    return this.httpClient.get(resource, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
                };
                MapService.prototype.post = function (resource, body, options) {
                    return this.httpClient.post(resource, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
                };
                MapService.prototype.delete = function (resource) {
                    return this.httpClient.delete(resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
                };
                MapService.prototype.put = function (resource, body, options) {
                    return this.httpClient.put(resource, body, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
                };
                MapService.prototype.handleError = function (error) {
                    console.error(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])("Server Error: " + error.message);
                };
                return MapService;
            }());
            MapService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
            ]; };
            MapService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], MapService);
            /***/ 
        }),
        /***/ "./src/app/features/map/map.component.scss": 
        /*!*************************************************!*\
          !*** ./src/app/features/map/map.component.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (":host {\n  margin: auto;\n}\n\n.map-container {\n  width: 100vw;\n  height: 100vh;\n}\n\n.marker {\n  background-image: url('marker-red.png');\n  background-size: cover;\n  width: 20px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.marker-curr {\n  background-image: url('marker-black.png');\n  background-size: cover;\n  width: 30px;\n  height: 40px;\n  cursor: pointer;\n}\n\n.content {\n  display: flex;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n}\n\n.mapboxgl-popup {\n  max-width: 200px;\n}\n\n.mapboxgl-popup-content {\n  text-align: center;\n  font-family: \"Open Sans\", sans-serif;\n}\n\n.carusal {\n  width: 500px;\n}\n\n.carousel-inner {\n  height: 30vh;\n}\n\n.carousel-inner .carousel-control-prev {\n  margin-left: 20% important;\n}\n\n.carousel-control-prev {\n  margin-left: 20% important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvbWFwL0M6XFxVc2Vyc1xcTmVtZXRcXERlc2t0b3BcXGNyaW1lLXRlc3Rlci9zcmNcXGFwcFxcZmVhdHVyZXNcXG1hcFxcbWFwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLHlDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFHQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7QUNERjs7QURJQTtFQUNFLFlBQUE7QUNERjs7QURJQTtFQUVFLFlBQUE7QUNGRjs7QURJRTtFQUNFLDBCQUFBO0FDRko7O0FETUE7RUFDRSwwQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYXAtY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1hcmtlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21hcmtlci1yZWQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1hcmtlci1jdXJyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFya2VyLWJsYWNrLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbjogMzJweCBhdXRvO1xyXG4gIC8vIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLm1hcGJveGdsLXBvcHVwIHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubWFwYm94Z2wtcG9wdXAtY29udGVudCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY2FydXNhbCB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gIC8vIGhlaWdodDogMTUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwdmg7XHJcblxyXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwJSBpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcclxuICBtYXJnaW4tbGVmdDogMjAlIGltcG9ydGFudDtcclxufVxyXG4iLCI6aG9zdCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm1hcC1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYXJrZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbWFya2VyLXJlZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1hcmtlci1jdXJyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL21hcmtlci1ibGFjay5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5tYXBib3hnbC1wb3B1cCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5tYXBib3hnbC1wb3B1cC1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcnVzYWwge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5jYXJvdXNlbC1pbm5lciB7XG4gIGhlaWdodDogMzB2aDtcbn1cbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtY29udHJvbC1wcmV2IHtcbiAgbWFyZ2luLWxlZnQ6IDIwJSBpbXBvcnRhbnQ7XG59XG5cbi5jYXJvdXNlbC1jb250cm9sLXByZXYge1xuICBtYXJnaW4tbGVmdDogMjAlIGltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/features/map/map.component.ts": 
        /*!***********************************************!*\
          !*** ./src/app/features/map/map.component.ts ***!
          \***********************************************/
        /*! exports provided: MapComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function () { return MapComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
            /* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map.service */ "./src/app/features/map.service.ts");
            /* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consts */ "./src/app/features/consts.ts");
            /* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var MapComponent = /** @class */ (function () {
                function MapComponent(mapService, renderer2, store, http) {
                    var _this = this;
                    this.mapService = mapService;
                    this.renderer2 = renderer2;
                    this.store = store;
                    this.http = http;
                    this.markerClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.inputFocus = false;
                    this.setIntervalId = null;
                    this.mock = [{ "updateTime": "2019-12-04T12:15:51.621Z", "event": "POI", "data": [{ "owner": "killer", "points": [{ "lon": "32.090280", "lat": "34.820134" }, { "lon": "32.087415", "lat": "34.812946" }, { "lon": "32.090677", "lat": "34.805180" }, { "lon": "32.091011", "lat": "34.804824" }, { "lon": "32.091155", "lat": "34.804372" }] }] }];
                    this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(5000).subscribe((function (x) {
                        _this.doStuff();
                    }));
                }
                MapComponent.prototype.doStuff = function () {
                    var _this = this;
                    this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].dataUrl).subscribe(function (data) {
                        //console.log(data); 
                        if (data.length != _this.lastIndex) {
                            _this.lastIndex = data.length;
                            console.log('writing index : ' + JSON.stringify(data[data.length - 1]));
                            console.log(_this.markersData);
                            _this.markersData = data[data.length - 1].data;
                            _this.displayMarkers(_this.markersData);
                        }
                    });
                };
                MapComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.setToken();
                    // this.store.dispatch(loadMapData());
                    // this.mapService.get(environment.dataUrl).subscribe((response: any) => {
                    //this.markersData = this.mock[0].data;
                    this.displayMap();
                    //this.displayMarkers(this.markersData);
                    this.addCurrentLocationButton();
                    this.setIntervalId = setInterval(function () { _this.focusCurrentLocation(); }, 2000);
                    this.prevEventMarkers = [];
                    // });
                };
                MapComponent.prototype.addCurrentLocationButton = function () {
                    var currLoc = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["GeolocateControl"]({
                        positionOptions: {
                            enableHighAccuracy: true
                        },
                        trackUserLocation: true
                    });
                    this.map.addControl(currLoc);
                };
                MapComponent.prototype.setToken = function () {
                    // mapboxgl.accessToken = environment.mapbox.accessToken;
                    Object.getOwnPropertyDescriptor(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__, "accessToken").set(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].mapbox.accessToken);
                };
                MapComponent.prototype.focusCurrentLocation = function () {
                    var _this = this;
                    navigator.geolocation.getCurrentPosition(function (pos) {
                        var target = [pos.coords.longitude, pos.coords.latitude];
                        //console.log("fly to", target);
                        _this.map.flyTo({
                            // These options control the ending camera position: centered at
                            // the target, at zoom level 9, and north up.
                            center: target,
                            zoom: 12,
                            bearing: 0,
                            // These options control the flight curve, making it move
                            // slowly and zoom out almost completely before starting
                            // to pan.
                            speed: 1,
                            curve: 1,
                            // This can be any easing function: it takes a number between
                            // 0 and 1 and returns another number between 0 and 1.
                            easing: function (t) { return t; }
                        });
                        _this.displayCurrMarker(target);
                    });
                    // currLoc['_geolocateButton'].click();
                };
                MapComponent.prototype.displayCurrMarker = function (target) {
                    if (this.prevCurrMarker) {
                        this.prevCurrMarker.remove();
                    }
                    var el = this.renderer2.createElement('div');
                    el.className = 'marker-curr';
                    this.prevCurrMarker = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"](el);
                    this.prevCurrMarker.setLngLat(target)
                        .addTo(this.map);
                };
                MapComponent.prototype.displayMap = function () {
                    this.map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Map"](_consts__WEBPACK_IMPORTED_MODULE_5__["MAP_INITIAL"]);
                    // Add map controls
                    this.map.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["NavigationControl"]());
                };
                MapComponent.prototype.displayMarkers = function (markersData) {
                    var _this = this;
                    console.log('display markers');
                    var dataLine = [];
                    this.prevEventMarkers.forEach(function (obj) {
                        obj.remove();
                        // console.log("remove");
                    });
                    markersData.forEach(function (marker) {
                        // console.log(marker);
                        marker.points.forEach(function (point) {
                            if (point.lat && point.lon) {
                                var el = _this.renderer2.createElement('div');
                                el.className = 'marker';
                                var coordinate = [point.lat, point.lon];
                                dataLine.push(coordinate);
                                var markerObj = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Marker"](el);
                                markerObj.setLngLat(coordinate)
                                    .setPopup(new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__["Popup"]({ offset: 25 })
                                    .setHTML('<h3 style="color:purple;">' + marker.owner + '</h3><p>' + 'description 1234567890' + '</p>'))
                                    .addTo(_this.map);
                                _this.prevEventMarkers.push(markerObj);
                            }
                        });
                    });
                    this.map.on('load', function () {
                        // Insert the layer beneath any symbol layer.
                        var layers = _this.map.getStyle().layers;
                        var labelLayerId;
                        for (var i = 0; i < layers.length; i++) {
                            if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                                labelLayerId = layers[i].id;
                                break;
                            }
                        }
                        _this.map.addLayer({
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
                        _this.map.addLayer({
                            "id": "route",
                            "type": "line",
                            "source": {
                                "type": "geojson",
                                "data": {
                                    "type": "Feature",
                                    "properties": {},
                                    "geometry": {
                                        "type": "LineString",
                                        "coordinates": dataLine
                                    }
                                }
                            },
                            "layout": {
                                "line-join": "round",
                                "line-cap": "round"
                            },
                            "paint": {
                                "line-color": "blue",
                                "line-width": 7
                            }
                        });
                    });
                };
                return MapComponent;
            }());
            MapComponent.ctorParameters = function () { return [
                { type: _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
                { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/map.ts": 
        /*!************************!*\
          !*** ./src/app/map.ts ***!
          \************************/
        /*! exports provided: Map, GeoJSON, FeatureCollection */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function () { return Map; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoJSON", function () { return GeoJSON; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureCollection", function () { return FeatureCollection; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Map = /** @class */ (function () {
                function Map() {
                }
                return Map;
            }());
            var GeoJSON = /** @class */ (function () {
                function GeoJSON(coordinates, properties) {
                    this.properties = properties;
                    this.type = 'Feature';
                    this.geometry = {
                        type: 'Point',
                        coordinates: coordinates
                    };
                }
                return GeoJSON;
            }());
            var FeatureCollection = /** @class */ (function () {
                function FeatureCollection(features) {
                    this.features = features;
                    this.type = 'FeatureCollection';
                }
                return FeatureCollection;
            }());
            /***/ 
        }),
        /***/ "./src/app/shared/shared.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/shared/shared.module.ts ***!
          \*****************************************/
        /*! exports provided: SharedModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function () { return SharedModule; });
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
            var SharedModule = /** @class */ (function () {
                function SharedModule() {
                }
                return SharedModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Nemet\Desktop\crime-tester\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2018.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map