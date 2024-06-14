/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Yellowtail-Regular.ttf */ "./src/resources/Yellowtail-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Bungee-Regular.ttf */ "./src/resources/Bungee-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Roboto-Regular.ttf */ "./src/resources/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Roboto-Medium.ttf */ "./src/resources/Roboto-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./resources/Roboto-Bold.ttf */ "./src/resources/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --budi-dark-orange: #F55226;
    --budi-light-orange: #FFAB48;
}

/* FONTS */
@font-face {
    font-family: 'Yellowtail';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Bungee';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    font-weight: normal;
    font-style: normal;
}

@font-face {
    --medium: 500;
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    font-weight: var(--medium);
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_4___});
    font-weight: bold;
    font-style: normal;
}

body {
    background-color: var(--budi-light-orange);
}

.button {
    font-family: 'Bungee';
    font-size: 1.5em;
    border-radius: 4px;
    border: 0px;
    padding: 0.5em 0.5em;
    cursor: pointer;
}

.button-primary {
    background-color: var(--budi-dark-orange);
    color: white;
}

.button-tertiary {
    background-color: transparent;
    color: var(--budi-dark-orange);
}

.tab-bar {
    display: flex;
    padding: 1em 1em;
    background-color: rgba(255, 255, 255, 0.3);
    justify-content: space-between;
    border: 0px;
    border-radius: 16px;
    max-width: 480px;
    margin: 0 auto;
}

#shop-name {
    font-family: 'Yellowtail', sans-serif;
    font-size: 4em;
    color: var(--budi-dark-orange);
    margin: 40px 0;
}

header {
    text-align: center;
}

.section-title {
    font-family: Impact, sans-serif;
    font-size: 48px;
    text-decoration: underline;
    text-transform: uppercase;
    margin: 24px 0;
}

/* HOME */

.section {
    text-align: center;
    color: white;
    font-family: 'Roboto';
    font-weight: normal;
}

.timetable {
    display: flex;
    justify-content: center;
    gap: 45px;
}

.timetable > ul {
    list-style: none;
    padding: 0;
}

.timetable > ul > li {
    margin-bottom: 10px;
}

.timetable-days > li {
    font-weight: bold;
}

/* MENU */

.menu {
    display: flex;
    flex-direction: column;
    row-gap: 24px;
    align-items: center;
    padding: 40px 0;
}

.product-card {
    background-color: rgba(255, 255, 255, 0.8);
    border: 0px;
    border-radius: 16px;
    display: flex;
    column-gap: 8px;
    font-family: 'Roboto';
    box-shadow: 1px 2px 3px rgba(0,0,0, 0.3);
    padding: 13px 8px;
    color: var(--budi-dark-orange);
    max-width: 700px;
}

@media screen and (max-width: 700px) {
    .product-card {
        flex-wrap: wrap;
    }

    .price {
        text-align: right;
    }

    .product-card>img {
        align-self: center;
    }
}

.product-card > img {
    width: 200px;
    height: 200px;
    object-fit: scale-down;
}

.product-details-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 100%;
    gap: 12px;
}

.product-details-container>div {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
}

.price {
    font-size: 32px;
    font-weight: bold;
    margin: 0;
}

.product-description {
    font-size: 16px;
    margin: 0;
}

.product-title {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}

/* ABOUT */
.about { 
    text-align: center;
    padding: 40px;
}

.budi-container {
    font-family: "Yellowtail", sans-serif;
    color: var(--budi-dark-orange);
    font-size: 64px;
}

.budi-container>p{
    margin: 0;
}

#budi {
    --image-size: 250px;
    border: 1px;
    width: var(--image-size);
    height: var(--image-size);
    border-radius: calc(var(--image-size)/2);
    object-fit: cover;
}

#budi-description { 
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    text-align: left;
    max-width: 800px;
    margin: 24px auto;
    line-height: 1.5em;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA,UAAU;AACV;IACI,yBAAyB;IACzB,4CAA8C;IAC9C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAA0C;IAC1C,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAA0C;IAC1C,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,4CAAyC;IACzC,0BAA0B;IAC1B,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,4CAAuC;IACvC,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,0CAA0C;AAC9C;;AAEA;IACI,qBAAqB;IACrB,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;IACX,oBAAoB;IACpB,eAAe;AACnB;;AAEA;IACI,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,0CAA0C;IAC1C,8BAA8B;IAC9B,WAAW;IACX,mBAAmB;IACnB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,qCAAqC;IACrC,cAAc;IACd,8BAA8B;IAC9B,cAAc;AAClB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,+BAA+B;IAC/B,eAAe;IACf,0BAA0B;IAC1B,yBAAyB;IACzB,cAAc;AAClB;;AAEA,SAAS;;AAET;IACI,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,0CAA0C;IAC1C,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,qBAAqB;IACrB,wCAAwC;IACxC,iBAAiB;IACjB,8BAA8B;IAC9B,gBAAgB;AACpB;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,UAAU;IACV,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,SAAS;AACb;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,SAAS;AACb;;AAEA,UAAU;AACV;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,WAAW;IACX,wBAAwB;IACxB,yBAAyB;IACzB,wCAAwC;IACxC,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB","sourcesContent":[":root {\n    --budi-dark-orange: #F55226;\n    --budi-light-orange: #FFAB48;\n}\n\n/* FONTS */\n@font-face {\n    font-family: 'Yellowtail';\n    src: url('./resources/Yellowtail-Regular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Bungee';\n    src: url('./resources/Bungee-Regular.ttf');\n    font-weight: 400;\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./resources/Roboto-Regular.ttf');\n    font-weight: normal;\n    font-style: normal;\n}\n\n@font-face {\n    --medium: 500;\n    font-family: 'Roboto';\n    src: url('./resources/Roboto-Medium.ttf');\n    font-weight: var(--medium);\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url('./resources/Roboto-Bold.ttf');\n    font-weight: bold;\n    font-style: normal;\n}\n\nbody {\n    background-color: var(--budi-light-orange);\n}\n\n.button {\n    font-family: 'Bungee';\n    font-size: 1.5em;\n    border-radius: 4px;\n    border: 0px;\n    padding: 0.5em 0.5em;\n    cursor: pointer;\n}\n\n.button-primary {\n    background-color: var(--budi-dark-orange);\n    color: white;\n}\n\n.button-tertiary {\n    background-color: transparent;\n    color: var(--budi-dark-orange);\n}\n\n.tab-bar {\n    display: flex;\n    padding: 1em 1em;\n    background-color: rgba(255, 255, 255, 0.3);\n    justify-content: space-between;\n    border: 0px;\n    border-radius: 16px;\n    max-width: 480px;\n    margin: 0 auto;\n}\n\n#shop-name {\n    font-family: 'Yellowtail', sans-serif;\n    font-size: 4em;\n    color: var(--budi-dark-orange);\n    margin: 40px 0;\n}\n\nheader {\n    text-align: center;\n}\n\n.section-title {\n    font-family: Impact, sans-serif;\n    font-size: 48px;\n    text-decoration: underline;\n    text-transform: uppercase;\n    margin: 24px 0;\n}\n\n/* HOME */\n\n.section {\n    text-align: center;\n    color: white;\n    font-family: 'Roboto';\n    font-weight: normal;\n}\n\n.timetable {\n    display: flex;\n    justify-content: center;\n    gap: 45px;\n}\n\n.timetable > ul {\n    list-style: none;\n    padding: 0;\n}\n\n.timetable > ul > li {\n    margin-bottom: 10px;\n}\n\n.timetable-days > li {\n    font-weight: bold;\n}\n\n/* MENU */\n\n.menu {\n    display: flex;\n    flex-direction: column;\n    row-gap: 24px;\n    align-items: center;\n    padding: 40px 0;\n}\n\n.product-card {\n    background-color: rgba(255, 255, 255, 0.8);\n    border: 0px;\n    border-radius: 16px;\n    display: flex;\n    column-gap: 8px;\n    font-family: 'Roboto';\n    box-shadow: 1px 2px 3px rgba(0,0,0, 0.3);\n    padding: 13px 8px;\n    color: var(--budi-dark-orange);\n    max-width: 700px;\n}\n\n@media screen and (max-width: 700px) {\n    .product-card {\n        flex-wrap: wrap;\n    }\n\n    .price {\n        text-align: right;\n    }\n\n    .product-card>img {\n        align-self: center;\n    }\n}\n\n.product-card > img {\n    width: 200px;\n    height: 200px;\n    object-fit: scale-down;\n}\n\n.product-details-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    flex: 100%;\n    gap: 12px;\n}\n\n.product-details-container>div {\n    display: flex;\n    flex-direction: column;\n    row-gap: 8px;\n}\n\n.price {\n    font-size: 32px;\n    font-weight: bold;\n    margin: 0;\n}\n\n.product-description {\n    font-size: 16px;\n    margin: 0;\n}\n\n.product-title {\n    font-size: 24px;\n    font-weight: bold;\n    margin: 0;\n}\n\n/* ABOUT */\n.about { \n    text-align: center;\n    padding: 40px;\n}\n\n.budi-container {\n    font-family: \"Yellowtail\", sans-serif;\n    color: var(--budi-dark-orange);\n    font-size: 64px;\n}\n\n.budi-container>p{\n    margin: 0;\n}\n\n#budi {\n    --image-size: 250px;\n    border: 1px;\n    width: var(--image-size);\n    height: var(--image-size);\n    border-radius: calc(var(--image-size)/2);\n    object-fit: cover;\n}\n\n#budi-description { \n    color: white;\n    font-family: 'Roboto', sans-serif;\n    font-size: 24px;\n    text-align: left;\n    max-width: 800px;\n    margin: 24px auto;\n    line-height: 1.5em;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _resources_budi_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/budi.png */ "./src/resources/budi.png");


const budiDescription = "Meet Budi, our extraordinary owner with a heartwarming story and a passion for bananas! Rescued from dire circumstances, Budi now thrives as the proud owner of his very own Banana Bar. Here, he delights visitors with his creative and delicious banana-based recipes. From banana smoothies to gourmet banana splits, Budi's culinary skills and charming personality make every visit a delightful experience. Come say hello to Budi and taste the magic of his banana creations!";

function About() { 
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about";

    const budiContainerDiv = document.createElement("div");
    budiContainerDiv.className = "budi-container";

    const budiImg = document.createElement("img");
    budiImg.src = _resources_budi_png__WEBPACK_IMPORTED_MODULE_0__;
    budiImg.width = "200px";
    budiImg.height = "200px";
    budiImg.alt = "Budi";
    budiImg.id = "budi";
    budiContainerDiv.appendChild(budiImg);

    const budiP = document.createElement("p");
    budiP.innerText = "Budi";
    budiContainerDiv.appendChild(budiP);
    aboutDiv.appendChild(budiContainerDiv);

    const budiDescriptionP = document.createElement("p");
    budiDescriptionP.id = "budi-description";
    budiDescriptionP.innerText = budiDescription;
    aboutDiv.appendChild(budiDescriptionP);

    return aboutDiv;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const hours = ["09-18", "09-18", "09-18", "09-18", "09-18", "10-19", "CLOSED"];

function Home() {
    const homeSection = document.createElement("div");

    const hoursSection = document.createElement("div");
    hoursSection.className = "section";
    homeSection.appendChild(hoursSection);

    const hoursSectionTitle = document.createElement("p");
    hoursSectionTitle.className = "section-title";
    hoursSectionTitle.innerText = "Hours"
    hoursSection.appendChild(hoursSectionTitle);

    const timetableDiv = document.createElement("div");
    timetableDiv.className = "timetable";
    hoursSection.appendChild(timetableDiv);

    const timetableDaysUl = createUlWithElements(days);
    timetableDaysUl.className = "timetable-days";
    timetableDiv.appendChild(timetableDaysUl);

    const timetableHours = createUlWithElements(hours);
    timetableHours.className = "timetable-hours";
    timetableDiv.appendChild(timetableHours);

    const locationSection = document.createElement("div");
    locationSection.className = "section";
    homeSection.appendChild(locationSection);

    const locationSectionTitle = document.createElement("p");
    locationSectionTitle.className = "section-title";
    locationSectionTitle.innerText = "Location";
    locationSection.appendChild(locationSectionTitle);

    const locationValue = document.createElement("p");
    locationValue.innerText = "Bukit Baka Bukit Raya National Park";
    locationSection.appendChild(locationValue);

    return homeSection;
}

const createUlWithElements = (listElements) => { 
    const ul = document.createElement("ul");
    for(let i=0; i<listElements.length; i++) {
        const li = document.createElement("li");
        li.innerText = listElements[i];
        ul.appendChild(li);
    }
    return ul
};

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _resources_banana_bread_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/banana-bread.png */ "./src/resources/banana-bread.png");
/* harmony import */ var _resources_tropical_smoothie_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/tropical-smoothie.png */ "./src/resources/tropical-smoothie.png");
/* harmony import */ var _resources_banana_stack_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resources/banana-stack.png */ "./src/resources/banana-stack.png");
/* harmony import */ var _resources_banana_nut_mufin_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resources/banana-nut-mufin.png */ "./src/resources/banana-nut-mufin.png");
/* harmony import */ var _resources_banana_crepe_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resources/banana-crepe.png */ "./src/resources/banana-crepe.png");







class Product {
    constructor(imageSrc, title, description, price) {
        this.imageSrc = imageSrc;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    get formattedPrice() { 
        return `$${this.price}`;
    }
}

const ProductCard = (product) => { 
    const productCardDiv = document.createElement("div");
    productCardDiv.className = "product-card";

    const productImg = document.createElement("img");
    productImg.src = product.imageSrc;
    productImg.width = "200px";
    productImg.height = "200px";
    productImg.alt = `Image of ${product.title}`;
    productCardDiv.appendChild(productImg);

    const productDetailsContainerDiv = document.createElement("div");
    productDetailsContainerDiv.className = "product-details-container";

    const wrapperDiv = document.createElement("div");

    const productTitleP = document.createElement("p");
    productTitleP.className = "product-title";
    productTitleP.innerText = product.title;
    wrapperDiv.appendChild(productTitleP);

    const productDescriptionP = document.createElement("p");
    productDescriptionP.className = "product-description";
    productDescriptionP.innerText = product.description;
    wrapperDiv.appendChild(productDescriptionP);

    productDetailsContainerDiv.appendChild(wrapperDiv);

    const priceP = document.createElement("p");
    priceP.className = "price";
    priceP.innerText = product.formattedPrice;
    productDetailsContainerDiv.appendChild(priceP);

    productCardDiv.appendChild(productDetailsContainerDiv);
    return productCardDiv;
};

const productsMock = [ 
    new Product(
        _resources_banana_bread_png__WEBPACK_IMPORTED_MODULE_0__,
        "Budi's Famous Banana Bread",
        "Made with fresh bananas harvested every morning by Budi himself. We recommend you try this delight with a cup of Tropical Banana Smoothie.",
        "3.99"
    ),
    new Product(
        _resources_tropical_smoothie_png__WEBPACK_IMPORTED_MODULE_1__,
        "Tropical Banana Smoothie",
        "A refreshing blend of ripe bananas, coconut milk, and a hint of pineapple, perfect for a hot day.",
        "4.50"
    ),
    new Product(
        _resources_banana_stack_png__WEBPACK_IMPORTED_MODULE_2__,
        "Banana Pancake Stack",
        "Fluffy pancakes layered with sliced bananas and drizzled with maple syrup. Served with a dollop of whipped cream.",
        "5.99"
    ),
    new Product(
        _resources_banana_nut_mufin_png__WEBPACK_IMPORTED_MODULE_3__,
        "Banana Nut Muffins",
        "Deliciously moist muffins loaded with bananas and crunchy walnuts, baked to perfection.",
        "2.99"
    ),
    new Product(
        _resources_banana_crepe_png__WEBPACK_IMPORTED_MODULE_4__,
        "Choco-Banana Sundae",
        "Thin crepes filled with caramelized bananas and served with a scoop of vanilla ice cream.",
        "7.50"
    )
];

function Menu() {
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu";

    productsMock
    .map((product) => ProductCard(product))
    .forEach((productCardDiv) => menuDiv.appendChild(productCardDiv));
    return menuDiv;
}

/***/ }),

/***/ "./src/resources/Bungee-Regular.ttf":
/*!******************************************!*\
  !*** ./src/resources/Bungee-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3d95fa68283102c29cd9.ttf";

/***/ }),

/***/ "./src/resources/Roboto-Bold.ttf":
/*!***************************************!*\
  !*** ./src/resources/Roboto-Bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f80816a5455d171f948d.ttf";

/***/ }),

/***/ "./src/resources/Roboto-Medium.ttf":
/*!*****************************************!*\
  !*** ./src/resources/Roboto-Medium.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c8d04cd831df3033c8a.ttf";

/***/ }),

/***/ "./src/resources/Roboto-Regular.ttf":
/*!******************************************!*\
  !*** ./src/resources/Roboto-Regular.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ }),

/***/ "./src/resources/Yellowtail-Regular.ttf":
/*!**********************************************!*\
  !*** ./src/resources/Yellowtail-Regular.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68015177cbf9575be4a4.ttf";

/***/ }),

/***/ "./src/resources/banana-bread.png":
/*!****************************************!*\
  !*** ./src/resources/banana-bread.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2ffbbc50706ef7bf5f27.png";

/***/ }),

/***/ "./src/resources/banana-crepe.png":
/*!****************************************!*\
  !*** ./src/resources/banana-crepe.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4d351e078b953a98d8a6.png";

/***/ }),

/***/ "./src/resources/banana-nut-mufin.png":
/*!********************************************!*\
  !*** ./src/resources/banana-nut-mufin.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b2edd3ee747d808e35e1.png";

/***/ }),

/***/ "./src/resources/banana-stack.png":
/*!****************************************!*\
  !*** ./src/resources/banana-stack.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "074e02a0a45784b8a4e8.png";

/***/ }),

/***/ "./src/resources/budi.png":
/*!********************************!*\
  !*** ./src/resources/budi.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49f69569fce751e26f7f.png";

/***/ }),

/***/ "./src/resources/tropical-smoothie.png":
/*!*********************************************!*\
  !*** ./src/resources/tropical-smoothie.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7799b2e44c0f34a81f7.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _resources_budi_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resources/budi.png */ "./src/resources/budi.png");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about.js */ "./src/about.js");






const TabBar = { 
    home: "home",
    menu: "menu",
    about: "about"
};
let activeTab = TabBar.home;

const didClickButton = (event) => {
    const buttonName = event.target.name;
    switchTab(buttonName);
};

const buttonPrimaryClass = "button-primary";
const buttonTertiaryClass = "button-tertiary";

const switchTab = (buttonName) => { 
    let pageNode;
    if (buttonName === "home") {
        activeTab = TabBar.home;
        pageNode = (0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    } else if (buttonName === "menu") {
        activeTab = TabBar.menu;
        pageNode = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    } else if (buttonName === "about") {
        activeTab = TabBar.about;
        pageNode = (0,_about_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }

    makeActiveButton(buttonName);
    clearContent();

    if (pageNode !== undefined) {
        document.querySelector("#content").appendChild(pageNode);
    }
}

const makeActiveButton = (buttonName) => {
    document.querySelectorAll(".button").forEach((button) => {
        button.classList.remove(buttonPrimaryClass);
        button.classList.remove(buttonTertiaryClass);
        
        if(button.name === buttonName) {
            button.classList.add(buttonPrimaryClass);
        } else {
            button.classList.add(buttonTertiaryClass);
        }
    });
};

const clearContent = () => {
    const content = document.querySelector("#content");
    content.innerHTML = "";
}

document.querySelectorAll(".button").forEach((button) => button.addEventListener("click", didClickButton));
clearContent();
document.querySelector("#content").appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpSkFBcUQ7QUFDakcsNENBQTRDLHlJQUFpRDtBQUM3Riw0Q0FBNEMseUlBQWlEO0FBQzdGLDRDQUE0Qyx1SUFBZ0Q7QUFDNUYsNENBQTRDLG1JQUE4QztBQUMxRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FB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azovL2J1ZGktYmFyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9idWRpLWJhci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9idWRpLWJhci8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2J1ZGktYmFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2J1ZGktYmFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2J1ZGktYmFyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9idWRpLWJhci8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9idWRpLWJhci8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2J1ZGktYmFyLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2J1ZGktYmFyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnVkaS1iYXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9idWRpLWJhci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2J1ZGktYmFyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2J1ZGktYmFyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2J1ZGktYmFyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9idWRpLWJhci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yZXNvdXJjZXMvWWVsbG93dGFpbC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL0J1bmdlZS1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcmVzb3VyY2VzL1JvYm90by1NZWRpdW0udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9yZXNvdXJjZXMvUm9ib3RvLUJvbGQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tYnVkaS1kYXJrLW9yYW5nZTogI0Y1NTIyNjtcbiAgICAtLWJ1ZGktbGlnaHQtb3JhbmdlOiAjRkZBQjQ4O1xufVxuXG4vKiBGT05UUyAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdZZWxsb3d0YWlsJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdCdW5nZWUnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBmb250LWZhY2Uge1xuICAgIC0tbWVkaXVtOiA1MDA7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZWRpdW0pO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVkaS1saWdodC1vcmFuZ2UpO1xufVxuXG4uYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSc7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgcGFkZGluZzogMC41ZW0gMC41ZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1ZGktZGFyay1vcmFuZ2UpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi10ZXJ0aWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHZhcigtLWJ1ZGktZGFyay1vcmFuZ2UpO1xufVxuXG4udGFiLWJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAxZW0gMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4jc2hvcC1uYW1lIHtcbiAgICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIGNvbG9yOiB2YXIoLS1idWRpLWRhcmstb3JhbmdlKTtcbiAgICBtYXJnaW46IDQwcHggMDtcbn1cblxuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbjogMjRweCAwO1xufVxuXG4vKiBIT01FICovXG5cbi5zZWN0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4udGltZXRhYmxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogNDVweDtcbn1cblxuLnRpbWV0YWJsZSA+IHVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi50aW1ldGFibGUgPiB1bCA+IGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udGltZXRhYmxlLWRheXMgPiBsaSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIE1FTlUgKi9cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAyNHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweCAwO1xufVxuXG4ucHJvZHVjdC1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgYm9yZGVyOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAzcHggcmdiYSgwLDAsMCwgMC4zKTtcbiAgICBwYWRkaW5nOiAxM3B4IDhweDtcbiAgICBjb2xvcjogdmFyKC0tYnVkaS1kYXJrLW9yYW5nZSk7XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAucHJvZHVjdC1jYXJkIHtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC5wcmljZSB7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cblxuICAgIC5wcm9kdWN0LWNhcmQ+aW1nIHtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbn1cblxuLnByb2R1Y3QtY2FyZCA+IGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cblxuLnByb2R1Y3QtZGV0YWlscy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZmxleDogMTAwJTtcbiAgICBnYXA6IDEycHg7XG59XG5cbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyPmRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDhweDtcbn1cblxuLnByaWNlIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMDtcbn1cblxuLnByb2R1Y3QtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG59XG5cbi8qIEFCT1VUICovXG4uYWJvdXQgeyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNDBweDtcbn1cblxuLmJ1ZGktY29udGFpbmVyIHtcbiAgICBmb250LWZhbWlseTogXCJZZWxsb3d0YWlsXCIsIHNhbnMtc2VyaWY7XG4gICAgY29sb3I6IHZhcigtLWJ1ZGktZGFyay1vcmFuZ2UpO1xuICAgIGZvbnQtc2l6ZTogNjRweDtcbn1cblxuLmJ1ZGktY29udGFpbmVyPnB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4jYnVkaSB7XG4gICAgLS1pbWFnZS1zaXplOiAyNTBweDtcbiAgICBib3JkZXI6IDFweDtcbiAgICB3aWR0aDogdmFyKC0taW1hZ2Utc2l6ZSk7XG4gICAgaGVpZ2h0OiB2YXIoLS1pbWFnZS1zaXplKTtcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWltYWdlLXNpemUpLzIpO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4jYnVkaS1kZXNjcmlwdGlvbiB7IFxuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDI0cHggYXV0bztcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUEsVUFBVTtBQUNWO0lBQ0kseUJB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QWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1idWRpLWRhcmstb3JhbmdlOiAjRjU1MjI2O1xcbiAgICAtLWJ1ZGktbGlnaHQtb3JhbmdlOiAjRkZBQjQ4O1xcbn1cXG5cXG4vKiBGT05UUyAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1llbGxvd3RhaWwnO1xcbiAgICBzcmM6IHVybCgnLi9yZXNvdXJjZXMvWWVsbG93dGFpbC1SZWd1bGFyLnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ0J1bmdlZSc7XFxuICAgIHNyYzogdXJsKCcuL3Jlc291cmNlcy9CdW5nZWUtUmVndWxhci50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBzcmM6IHVybCgnLi9yZXNvdXJjZXMvUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIC0tbWVkaXVtOiA1MDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gICAgc3JjOiB1cmwoJy4vcmVzb3VyY2VzL1JvYm90by1NZWRpdW0udHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1tZWRpdW0pO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuL3Jlc291cmNlcy9Sb2JvdG8tQm9sZC50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1ZGktbGlnaHQtb3JhbmdlKTtcXG59XFxuXFxuLmJ1dHRvbiB7XFxuICAgIGZvbnQtZmFtaWx5OiAnQnVuZ2VlJztcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBib3JkZXI6IDBweDtcXG4gICAgcGFkZGluZzogMC41ZW0gMC41ZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmJ1dHRvbi1wcmltYXJ5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnVkaS1kYXJrLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJ1dHRvbi10ZXJ0aWFyeSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBjb2xvcjogdmFyKC0tYnVkaS1kYXJrLW9yYW5nZSk7XFxufVxcblxcbi50YWItYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcGFkZGluZzogMWVtIDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlcjogMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xcbiAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuI3Nob3AtbmFtZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnWWVsbG93dGFpbCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBjb2xvcjogdmFyKC0tYnVkaS1kYXJrLW9yYW5nZSk7XFxuICAgIG1hcmdpbjogNDBweCAwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5zZWN0aW9uLXRpdGxlIHtcXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgbWFyZ2luOiAyNHB4IDA7XFxufVxcblxcbi8qIEhPTUUgKi9cXG5cXG4uc2VjdGlvbiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbi50aW1ldGFibGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiA0NXB4O1xcbn1cXG5cXG4udGltZXRhYmxlID4gdWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4udGltZXRhYmxlID4gdWwgPiBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbi50aW1ldGFibGUtZGF5cyA+IGxpIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi8qIE1FTlUgKi9cXG5cXG4ubWVudSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDI0cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDQwcHggMDtcXG59XFxuXFxuLnByb2R1Y3QtY2FyZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgYm9yZGVyOiAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbHVtbi1nYXA6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDNweCByZ2JhKDAsMCwwLCAwLjMpO1xcbiAgICBwYWRkaW5nOiAxM3B4IDhweDtcXG4gICAgY29sb3I6IHZhcigtLWJ1ZGktZGFyay1vcmFuZ2UpO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcbiAgICAucHJvZHVjdC1jYXJkIHtcXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgfVxcblxcbiAgICAucHJpY2Uge1xcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIH1cXG5cXG4gICAgLnByb2R1Y3QtY2FyZD5pbWcge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxufVxcblxcbi5wcm9kdWN0LWNhcmQgPiBpbWcge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XFxufVxcblxcbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBmbGV4OiAxMDAlO1xcbiAgICBnYXA6IDEycHg7XFxufVxcblxcbi5wcm9kdWN0LWRldGFpbHMtY29udGFpbmVyPmRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDhweDtcXG59XFxuXFxuLnByaWNlIHtcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ucHJvZHVjdC10aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuLyogQUJPVVQgKi9cXG4uYWJvdXQgeyBcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA0MHB4O1xcbn1cXG5cXG4uYnVkaS1jb250YWluZXIge1xcbiAgICBmb250LWZhbWlseTogXFxcIlllbGxvd3RhaWxcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBjb2xvcjogdmFyKC0tYnVkaS1kYXJrLW9yYW5nZSk7XFxuICAgIGZvbnQtc2l6ZTogNjRweDtcXG59XFxuXFxuLmJ1ZGktY29udGFpbmVyPnB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2J1ZGkge1xcbiAgICAtLWltYWdlLXNpemU6IDI1MHB4O1xcbiAgICBib3JkZXI6IDFweDtcXG4gICAgd2lkdGg6IHZhcigtLWltYWdlLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLWltYWdlLXNpemUpO1xcbiAgICBib3JkZXItcmFkaXVzOiBjYWxjKHZhcigtLWltYWdlLXNpemUpLzIpO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuI2J1ZGktZGVzY3JpcHRpb24geyBcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYnVkaUltYWdlU3JjIGZyb20gJy4vcmVzb3VyY2VzL2J1ZGkucG5nJztcblxuY29uc3QgYnVkaURlc2NyaXB0aW9uID0gXCJNZWV0IEJ1ZGksIG91ciBleHRyYW9yZGluYXJ5IG93bmVyIHdpdGggYSBoZWFydHdhcm1pbmcgc3RvcnkgYW5kIGEgcGFzc2lvbiBmb3IgYmFuYW5hcyEgUmVzY3VlZCBmcm9tIGRpcmUgY2lyY3Vtc3RhbmNlcywgQnVkaSBub3cgdGhyaXZlcyBhcyB0aGUgcHJvdWQgb3duZXIgb2YgaGlzIHZlcnkgb3duIEJhbmFuYSBCYXIuIEhlcmUsIGhlIGRlbGlnaHRzIHZpc2l0b3JzIHdpdGggaGlzIGNyZWF0aXZlIGFuZCBkZWxpY2lvdXMgYmFuYW5hLWJhc2VkIHJlY2lwZXMuIEZyb20gYmFuYW5hIHNtb290aGllcyB0byBnb3VybWV0IGJhbmFuYSBzcGxpdHMsIEJ1ZGkncyBjdWxpbmFyeSBza2lsbHMgYW5kIGNoYXJtaW5nIHBlcnNvbmFsaXR5IG1ha2UgZXZlcnkgdmlzaXQgYSBkZWxpZ2h0ZnVsIGV4cGVyaWVuY2UuIENvbWUgc2F5IGhlbGxvIHRvIEJ1ZGkgYW5kIHRhc3RlIHRoZSBtYWdpYyBvZiBoaXMgYmFuYW5hIGNyZWF0aW9ucyFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7IFxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhYm91dERpdi5jbGFzc05hbWUgPSBcImFib3V0XCI7XG5cbiAgICBjb25zdCBidWRpQ29udGFpbmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidWRpQ29udGFpbmVyRGl2LmNsYXNzTmFtZSA9IFwiYnVkaS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGJ1ZGlJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGJ1ZGlJbWcuc3JjID0gYnVkaUltYWdlU3JjO1xuICAgIGJ1ZGlJbWcud2lkdGggPSBcIjIwMHB4XCI7XG4gICAgYnVkaUltZy5oZWlnaHQgPSBcIjIwMHB4XCI7XG4gICAgYnVkaUltZy5hbHQgPSBcIkJ1ZGlcIjtcbiAgICBidWRpSW1nLmlkID0gXCJidWRpXCI7XG4gICAgYnVkaUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChidWRpSW1nKTtcblxuICAgIGNvbnN0IGJ1ZGlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYnVkaVAuaW5uZXJUZXh0ID0gXCJCdWRpXCI7XG4gICAgYnVkaUNvbnRhaW5lckRpdi5hcHBlbmRDaGlsZChidWRpUCk7XG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYnVkaUNvbnRhaW5lckRpdik7XG5cbiAgICBjb25zdCBidWRpRGVzY3JpcHRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYnVkaURlc2NyaXB0aW9uUC5pZCA9IFwiYnVkaS1kZXNjcmlwdGlvblwiO1xuICAgIGJ1ZGlEZXNjcmlwdGlvblAuaW5uZXJUZXh0ID0gYnVkaURlc2NyaXB0aW9uO1xuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGJ1ZGlEZXNjcmlwdGlvblApO1xuXG4gICAgcmV0dXJuIGFib3V0RGl2O1xufSIsImNvbnN0IGRheXMgPSBbXCJNT05cIiwgXCJUVUVcIiwgXCJXRURcIiwgXCJUSFVcIiwgXCJGUklcIiwgXCJTQVRcIiwgXCJTVU5cIl07XG5jb25zdCBob3VycyA9IFtcIjA5LTE4XCIsIFwiMDktMThcIiwgXCIwOS0xOFwiLCBcIjA5LTE4XCIsIFwiMDktMThcIiwgXCIxMC0xOVwiLCBcIkNMT1NFRFwiXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICBjb25zdCBob21lU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBjb25zdCBob3Vyc1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvdXJzU2VjdGlvbi5jbGFzc05hbWUgPSBcInNlY3Rpb25cIjtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChob3Vyc1NlY3Rpb24pO1xuXG4gICAgY29uc3QgaG91cnNTZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBob3Vyc1NlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSBcInNlY3Rpb24tdGl0bGVcIjtcbiAgICBob3Vyc1NlY3Rpb25UaXRsZS5pbm5lclRleHQgPSBcIkhvdXJzXCJcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQoaG91cnNTZWN0aW9uVGl0bGUpO1xuXG4gICAgY29uc3QgdGltZXRhYmxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aW1ldGFibGVEaXYuY2xhc3NOYW1lID0gXCJ0aW1ldGFibGVcIjtcbiAgICBob3Vyc1NlY3Rpb24uYXBwZW5kQ2hpbGQodGltZXRhYmxlRGl2KTtcblxuICAgIGNvbnN0IHRpbWV0YWJsZURheXNVbCA9IGNyZWF0ZVVsV2l0aEVsZW1lbnRzKGRheXMpO1xuICAgIHRpbWV0YWJsZURheXNVbC5jbGFzc05hbWUgPSBcInRpbWV0YWJsZS1kYXlzXCI7XG4gICAgdGltZXRhYmxlRGl2LmFwcGVuZENoaWxkKHRpbWV0YWJsZURheXNVbCk7XG5cbiAgICBjb25zdCB0aW1ldGFibGVIb3VycyA9IGNyZWF0ZVVsV2l0aEVsZW1lbnRzKGhvdXJzKTtcbiAgICB0aW1ldGFibGVIb3Vycy5jbGFzc05hbWUgPSBcInRpbWV0YWJsZS1ob3Vyc1wiO1xuICAgIHRpbWV0YWJsZURpdi5hcHBlbmRDaGlsZCh0aW1ldGFibGVIb3Vycyk7XG5cbiAgICBjb25zdCBsb2NhdGlvblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxvY2F0aW9uU2VjdGlvbi5jbGFzc05hbWUgPSBcInNlY3Rpb25cIjtcbiAgICBob21lU2VjdGlvbi5hcHBlbmRDaGlsZChsb2NhdGlvblNlY3Rpb24pO1xuXG4gICAgY29uc3QgbG9jYXRpb25TZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2NhdGlvblNlY3Rpb25UaXRsZS5jbGFzc05hbWUgPSBcInNlY3Rpb24tdGl0bGVcIjtcbiAgICBsb2NhdGlvblNlY3Rpb25UaXRsZS5pbm5lclRleHQgPSBcIkxvY2F0aW9uXCI7XG4gICAgbG9jYXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGxvY2F0aW9uU2VjdGlvblRpdGxlKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uVmFsdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsb2NhdGlvblZhbHVlLmlubmVyVGV4dCA9IFwiQnVraXQgQmFrYSBCdWtpdCBSYXlhIE5hdGlvbmFsIFBhcmtcIjtcbiAgICBsb2NhdGlvblNlY3Rpb24uYXBwZW5kQ2hpbGQobG9jYXRpb25WYWx1ZSk7XG5cbiAgICByZXR1cm4gaG9tZVNlY3Rpb247XG59XG5cbmNvbnN0IGNyZWF0ZVVsV2l0aEVsZW1lbnRzID0gKGxpc3RFbGVtZW50cykgPT4geyBcbiAgICBjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICBmb3IobGV0IGk9MDsgaTxsaXN0RWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGxpc3RFbGVtZW50c1tpXTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICByZXR1cm4gdWxcbn07IiwiXG5pbXBvcnQgYmFuYW5hQnJlYWRJbWFnZSBmcm9tICcuL3Jlc291cmNlcy9iYW5hbmEtYnJlYWQucG5nJztcbmltcG9ydCB0cm9waWNhbFNtb290aGllSW1hZ2UgZnJvbSAnLi9yZXNvdXJjZXMvdHJvcGljYWwtc21vb3RoaWUucG5nJztcbmltcG9ydCBiYW5hbmFTdGFja0ltYWdlIGZyb20gJy4vcmVzb3VyY2VzL2JhbmFuYS1zdGFjay5wbmcnO1xuaW1wb3J0IGJhbmFuYU51dE11ZmZpbkltYWdlIGZyb20gJy4vcmVzb3VyY2VzL2JhbmFuYS1udXQtbXVmaW4ucG5nJztcbmltcG9ydCBiYW5hbmFDcmVwZUltYWdlIGZyb20gJy4vcmVzb3VyY2VzL2JhbmFuYS1jcmVwZS5wbmcnO1xuXG5jbGFzcyBQcm9kdWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpbWFnZVNyYywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgICAgICB0aGlzLmltYWdlU3JjID0gaW1hZ2VTcmM7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm1hdHRlZFByaWNlKCkgeyBcbiAgICAgICAgcmV0dXJuIGAkJHt0aGlzLnByaWNlfWA7XG4gICAgfVxufVxuXG5jb25zdCBQcm9kdWN0Q2FyZCA9IChwcm9kdWN0KSA9PiB7IFxuICAgIGNvbnN0IHByb2R1Y3RDYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9kdWN0Q2FyZERpdi5jbGFzc05hbWUgPSBcInByb2R1Y3QtY2FyZFwiO1xuXG4gICAgY29uc3QgcHJvZHVjdEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgcHJvZHVjdEltZy5zcmMgPSBwcm9kdWN0LmltYWdlU3JjO1xuICAgIHByb2R1Y3RJbWcud2lkdGggPSBcIjIwMHB4XCI7XG4gICAgcHJvZHVjdEltZy5oZWlnaHQgPSBcIjIwMHB4XCI7XG4gICAgcHJvZHVjdEltZy5hbHQgPSBgSW1hZ2Ugb2YgJHtwcm9kdWN0LnRpdGxlfWA7XG4gICAgcHJvZHVjdENhcmREaXYuYXBwZW5kQ2hpbGQocHJvZHVjdEltZyk7XG5cbiAgICBjb25zdCBwcm9kdWN0RGV0YWlsc0NvbnRhaW5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvZHVjdERldGFpbHNDb250YWluZXJEaXYuY2xhc3NOYW1lID0gXCJwcm9kdWN0LWRldGFpbHMtY29udGFpbmVyXCI7XG5cbiAgICBjb25zdCB3cmFwcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgIGNvbnN0IHByb2R1Y3RUaXRsZVAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9kdWN0VGl0bGVQLmNsYXNzTmFtZSA9IFwicHJvZHVjdC10aXRsZVwiO1xuICAgIHByb2R1Y3RUaXRsZVAuaW5uZXJUZXh0ID0gcHJvZHVjdC50aXRsZTtcbiAgICB3cmFwcGVyRGl2LmFwcGVuZENoaWxkKHByb2R1Y3RUaXRsZVApO1xuXG4gICAgY29uc3QgcHJvZHVjdERlc2NyaXB0aW9uUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2R1Y3REZXNjcmlwdGlvblAuY2xhc3NOYW1lID0gXCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI7XG4gICAgcHJvZHVjdERlc2NyaXB0aW9uUC5pbm5lclRleHQgPSBwcm9kdWN0LmRlc2NyaXB0aW9uO1xuICAgIHdyYXBwZXJEaXYuYXBwZW5kQ2hpbGQocHJvZHVjdERlc2NyaXB0aW9uUCk7XG5cbiAgICBwcm9kdWN0RGV0YWlsc0NvbnRhaW5lckRpdi5hcHBlbmRDaGlsZCh3cmFwcGVyRGl2KTtcblxuICAgIGNvbnN0IHByaWNlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaWNlUC5jbGFzc05hbWUgPSBcInByaWNlXCI7XG4gICAgcHJpY2VQLmlubmVyVGV4dCA9IHByb2R1Y3QuZm9ybWF0dGVkUHJpY2U7XG4gICAgcHJvZHVjdERldGFpbHNDb250YWluZXJEaXYuYXBwZW5kQ2hpbGQocHJpY2VQKTtcblxuICAgIHByb2R1Y3RDYXJkRGl2LmFwcGVuZENoaWxkKHByb2R1Y3REZXRhaWxzQ29udGFpbmVyRGl2KTtcbiAgICByZXR1cm4gcHJvZHVjdENhcmREaXY7XG59O1xuXG5jb25zdCBwcm9kdWN0c01vY2sgPSBbIFxuICAgIG5ldyBQcm9kdWN0KFxuICAgICAgICBiYW5hbmFCcmVhZEltYWdlLFxuICAgICAgICBcIkJ1ZGkncyBGYW1vdXMgQmFuYW5hIEJyZWFkXCIsXG4gICAgICAgIFwiTWFkZSB3aXRoIGZyZXNoIGJhbmFuYXMgaGFydmVzdGVkIGV2ZXJ5IG1vcm5pbmcgYnkgQnVkaSBoaW1zZWxmLiBXZSByZWNvbW1lbmQgeW91IHRyeSB0aGlzIGRlbGlnaHQgd2l0aCBhIGN1cCBvZiBUcm9waWNhbCBCYW5hbmEgU21vb3RoaWUuXCIsXG4gICAgICAgIFwiMy45OVwiXG4gICAgKSxcbiAgICBuZXcgUHJvZHVjdChcbiAgICAgICAgdHJvcGljYWxTbW9vdGhpZUltYWdlLFxuICAgICAgICBcIlRyb3BpY2FsIEJhbmFuYSBTbW9vdGhpZVwiLFxuICAgICAgICBcIkEgcmVmcmVzaGluZyBibGVuZCBvZiByaXBlIGJhbmFuYXMsIGNvY29udXQgbWlsaywgYW5kIGEgaGludCBvZiBwaW5lYXBwbGUsIHBlcmZlY3QgZm9yIGEgaG90IGRheS5cIixcbiAgICAgICAgXCI0LjUwXCJcbiAgICApLFxuICAgIG5ldyBQcm9kdWN0KFxuICAgICAgICBiYW5hbmFTdGFja0ltYWdlLFxuICAgICAgICBcIkJhbmFuYSBQYW5jYWtlIFN0YWNrXCIsXG4gICAgICAgIFwiRmx1ZmZ5IHBhbmNha2VzIGxheWVyZWQgd2l0aCBzbGljZWQgYmFuYW5hcyBhbmQgZHJpenpsZWQgd2l0aCBtYXBsZSBzeXJ1cC4gU2VydmVkIHdpdGggYSBkb2xsb3Agb2Ygd2hpcHBlZCBjcmVhbS5cIixcbiAgICAgICAgXCI1Ljk5XCJcbiAgICApLFxuICAgIG5ldyBQcm9kdWN0KFxuICAgICAgICBiYW5hbmFOdXRNdWZmaW5JbWFnZSxcbiAgICAgICAgXCJCYW5hbmEgTnV0IE11ZmZpbnNcIixcbiAgICAgICAgXCJEZWxpY2lvdXNseSBtb2lzdCBtdWZmaW5zIGxvYWRlZCB3aXRoIGJhbmFuYXMgYW5kIGNydW5jaHkgd2FsbnV0cywgYmFrZWQgdG8gcGVyZmVjdGlvbi5cIixcbiAgICAgICAgXCIyLjk5XCJcbiAgICApLFxuICAgIG5ldyBQcm9kdWN0KFxuICAgICAgICBiYW5hbmFDcmVwZUltYWdlLFxuICAgICAgICBcIkNob2NvLUJhbmFuYSBTdW5kYWVcIixcbiAgICAgICAgXCJUaGluIGNyZXBlcyBmaWxsZWQgd2l0aCBjYXJhbWVsaXplZCBiYW5hbmFzIGFuZCBzZXJ2ZWQgd2l0aCBhIHNjb29wIG9mIHZhbmlsbGEgaWNlIGNyZWFtLlwiLFxuICAgICAgICBcIjcuNTBcIlxuICAgIClcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudURpdi5jbGFzc05hbWUgPSBcIm1lbnVcIjtcblxuICAgIHByb2R1Y3RzTW9ja1xuICAgIC5tYXAoKHByb2R1Y3QpID0+IFByb2R1Y3RDYXJkKHByb2R1Y3QpKVxuICAgIC5mb3JFYWNoKChwcm9kdWN0Q2FyZERpdikgPT4gbWVudURpdi5hcHBlbmRDaGlsZChwcm9kdWN0Q2FyZERpdikpO1xuICAgIHJldHVybiBtZW51RGl2O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xuaW1wb3J0IGJ1ZGkgZnJvbSAnLi9yZXNvdXJjZXMvYnVkaS5wbmcnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnLi9hYm91dC5qcyc7XG5cbmNvbnN0IFRhYkJhciA9IHsgXG4gICAgaG9tZTogXCJob21lXCIsXG4gICAgbWVudTogXCJtZW51XCIsXG4gICAgYWJvdXQ6IFwiYWJvdXRcIlxufTtcbmxldCBhY3RpdmVUYWIgPSBUYWJCYXIuaG9tZTtcblxuY29uc3QgZGlkQ2xpY2tCdXR0b24gPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b25OYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XG4gICAgc3dpdGNoVGFiKGJ1dHRvbk5hbWUpO1xufTtcblxuY29uc3QgYnV0dG9uUHJpbWFyeUNsYXNzID0gXCJidXR0b24tcHJpbWFyeVwiO1xuY29uc3QgYnV0dG9uVGVydGlhcnlDbGFzcyA9IFwiYnV0dG9uLXRlcnRpYXJ5XCI7XG5cbmNvbnN0IHN3aXRjaFRhYiA9IChidXR0b25OYW1lKSA9PiB7IFxuICAgIGxldCBwYWdlTm9kZTtcbiAgICBpZiAoYnV0dG9uTmFtZSA9PT0gXCJob21lXCIpIHtcbiAgICAgICAgYWN0aXZlVGFiID0gVGFiQmFyLmhvbWU7XG4gICAgICAgIHBhZ2VOb2RlID0gSG9tZSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uTmFtZSA9PT0gXCJtZW51XCIpIHtcbiAgICAgICAgYWN0aXZlVGFiID0gVGFiQmFyLm1lbnU7XG4gICAgICAgIHBhZ2VOb2RlID0gTWVudSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uTmFtZSA9PT0gXCJhYm91dFwiKSB7XG4gICAgICAgIGFjdGl2ZVRhYiA9IFRhYkJhci5hYm91dDtcbiAgICAgICAgcGFnZU5vZGUgPSBBYm91dCgpO1xuICAgIH1cblxuICAgIG1ha2VBY3RpdmVCdXR0b24oYnV0dG9uTmFtZSk7XG4gICAgY2xlYXJDb250ZW50KCk7XG5cbiAgICBpZiAocGFnZU5vZGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQocGFnZU5vZGUpO1xuICAgIH1cbn1cblxuY29uc3QgbWFrZUFjdGl2ZUJ1dHRvbiA9IChidXR0b25OYW1lKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b25cIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGJ1dHRvblByaW1hcnlDbGFzcyk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKGJ1dHRvblRlcnRpYXJ5Q2xhc3MpO1xuICAgICAgICBcbiAgICAgICAgaWYoYnV0dG9uLm5hbWUgPT09IGJ1dHRvbk5hbWUpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGJ1dHRvblByaW1hcnlDbGFzcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChidXR0b25UZXJ0aWFyeUNsYXNzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvblwiKS5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlkQ2xpY2tCdXR0b24pKTtcbmNsZWFyQ29udGVudCgpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpLmFwcGVuZENoaWxkKEhvbWUoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9