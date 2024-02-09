/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --high-priority-color: #dc262690;
  --medium-priority-color: #eab30890;
  --low-priority-color: #22c55e90;

  --high-priority-color-opaque: #dc2626;
  --medium-priority-color-opaque: #eab308;
  --low-priority-color-opaque: #22c55e;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* border: 1px solid red; */
}

button {
  cursor: pointer;
}

body {
  height: 100vh;
  font-family: "Roboto", sans-serif;
}

header {
  padding: 10px 20px;
  background-color: #0c4a6e;
  color: white;
  height: 6%;
}

.main {
  height: 94%;
  display: grid;
  grid-template-columns: 1fr 5fr;
}

.left-panel {
  padding: 20px;
  background-color: #e0f2fe;
}

.left-panel .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button.new-project-btn {
  background-color: unset;
  border: 1px solid black;
  border-radius: 50%;
  font-size: 24px;
  width: 30px;
  height: 30px;
}

.projects-list {
  margin-top: 5px;
  padding: 5px;
  font-size: 20px;
}

.project {
  padding: 10px 0px;
  margin-left: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}

.project:hover::after {
  content: " >>";
}
/* ----------------------- */

.content {
  padding: 40px;
}

.content .top {
  display: flex;
  /* justify-content: space-between; */
  gap: 20px;
  align-items: center;
}

.new-task-btn {
  padding: 5px;
  font-size: 18px;
}

.tasks-container {
  margin-top: 10px;
  display: flex;
  flex-flow: column;
  gap: 10px;
}

.task {
  padding: 10px;
  border: 1px solid rgb(185, 185, 185);
  display: flex;
  flex-flow: column;
  font-size: 18px;
  gap: 10px;
  border-left: 10px solid rgb(185, 185, 185);
}

.task .basic {
  display: grid;
  grid-template-columns: 0.2fr 12fr 1fr 0.5fr;
  align-items: center;
  /* padding: 10px; */
  gap: 10px;
}

.task .details {
  border-top: 1px solid gray;
  padding: 10px 5px;
  padding-bottom: 0;
}

.task .priority,
.dueDate {
  width: min-content;
}

.view-btn {
  font-size: 16px;
  width: 60px;
  padding: 5px;
}

.task input[type="checkbox"]:checked ~ label {
  text-decoration: line-through;
  color: gray;
}

.task input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

/* ---------------- */

dialog {
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  border-radius: 4px;
}

dialog::backdrop {
  background-color: rgba(0, 0, 0, 0.6);
}

dialog .top {
  display: flex;
  justify-content: space-between;
  background-color: #0c4a6e;
  color: white;
  padding: 10px 15px;
}

.close-btn {
  border: none;
  outline: none;
  background-color: unset;
  font-size: 20px;
  color: white;
}

.modal-content {
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

form {
  padding: 15px;
  height: 100%;
  display: flex;
  flex-flow: column;
  gap: 15px;
  font-size: 20px;
}

button[type="submit"] {
  padding: 10px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  align-self: flex-end;
  background-color: #0c4a6e;
  color: white;
  border: none;
}

input,
textarea {
  padding: 10px;
  font-size: 18px;
}

textarea {
  resize: none;
}

fieldset {
  border: none;
  display: flex;
  gap: 10px;
}

legend {
  margin-bottom: 20px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] ~ label {
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 5px 10px;
}

input[type="radio"]:checked ~ label {
  color: white;
  background-color: gray;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,+BAA+B;;EAE/B,qCAAqC;EACrC,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,cAAc;AAChB;AACA,4BAA4B;;AAE5B;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,SAAS;EACT,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,qBAAqB;;AAErB;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n:root {\n  --high-priority-color: #dc262690;\n  --medium-priority-color: #eab30890;\n  --low-priority-color: #22c55e90;\n\n  --high-priority-color-opaque: #dc2626;\n  --medium-priority-color-opaque: #eab308;\n  --low-priority-color-opaque: #22c55e;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\nheader {\n  padding: 10px 20px;\n  background-color: #0c4a6e;\n  color: white;\n  height: 6%;\n}\n\n.main {\n  height: 94%;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.left-panel {\n  padding: 20px;\n  background-color: #e0f2fe;\n}\n\n.left-panel .top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nbutton.new-project-btn {\n  background-color: unset;\n  border: 1px solid black;\n  border-radius: 50%;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n}\n\n.projects-list {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 20px;\n}\n\n.project {\n  padding: 10px 0px;\n  margin-left: 15px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n}\n\n.project:hover::after {\n  content: \" >>\";\n}\n/* ----------------------- */\n\n.content {\n  padding: 40px;\n}\n\n.content .top {\n  display: flex;\n  /* justify-content: space-between; */\n  gap: 20px;\n  align-items: center;\n}\n\n.new-task-btn {\n  padding: 5px;\n  font-size: 18px;\n}\n\n.tasks-container {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.task {\n  padding: 10px;\n  border: 1px solid rgb(185, 185, 185);\n  display: flex;\n  flex-flow: column;\n  font-size: 18px;\n  gap: 10px;\n  border-left: 10px solid rgb(185, 185, 185);\n}\n\n.task .basic {\n  display: grid;\n  grid-template-columns: 0.2fr 12fr 1fr 0.5fr;\n  align-items: center;\n  /* padding: 10px; */\n  gap: 10px;\n}\n\n.task .details {\n  border-top: 1px solid gray;\n  padding: 10px 5px;\n  padding-bottom: 0;\n}\n\n.task .priority,\n.dueDate {\n  width: min-content;\n}\n\n.view-btn {\n  font-size: 16px;\n  width: 60px;\n  padding: 5px;\n}\n\n.task input[type=\"checkbox\"]:checked ~ label {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.task input[type=\"checkbox\"] {\n  width: 20px;\n  height: 20px;\n}\n\n/* ---------------- */\n\ndialog {\n  width: 25%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  border-radius: 4px;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\ndialog .top {\n  display: flex;\n  justify-content: space-between;\n  background-color: #0c4a6e;\n  color: white;\n  padding: 10px 15px;\n}\n\n.close-btn {\n  border: none;\n  outline: none;\n  background-color: unset;\n  font-size: 20px;\n  color: white;\n}\n\n.modal-content {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n\nform {\n  padding: 15px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  gap: 15px;\n  font-size: 20px;\n}\n\nbutton[type=\"submit\"] {\n  padding: 10px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid black;\n  align-self: flex-end;\n  background-color: #0c4a6e;\n  color: white;\n  border: none;\n}\n\ninput,\ntextarea {\n  padding: 10px;\n  font-size: 18px;\n}\n\ntextarea {\n  resize: none;\n}\n\nfieldset {\n  border: none;\n  display: flex;\n  gap: 10px;\n}\n\nlegend {\n  margin-bottom: 20px;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\ninput[type=\"radio\"] ~ label {\n  cursor: pointer;\n  border: 1px solid gray;\n  border-radius: 4px;\n  padding: 5px 10px;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: white;\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayController: () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/modules/projects.js");


const displayController = (() => {
  let activeProject = null;

  const displayProjectsList = () => {
    const projectsListDiv = document.querySelector(".projects-list");
    projectsListDiv.innerHTML = "";

    for (let project of _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList) {
      const projectItem = document.createElement("div");
      projectItem.innerText = project.name;
      projectItem.className = "project";
      projectItem.addEventListener("click", () => viewProject(project));
      projectsListDiv.appendChild(projectItem);
    }
  };

  const createTaskDiv = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const basicDiv = document.createElement("div");
    basicDiv.className = "basic";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      task.toggleComplete();
    });
    if (task.completed) checkbox.checked = true;
    basicDiv.appendChild(checkbox);

    const label = document.createElement("label");
    label.innerText = task.title;
    basicDiv.appendChild(label);

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";
    dueDate.innerText = task.dueDate;
    basicDiv.appendChild(dueDate);

    // const priority = document.createElement("p");
    // priority.className = "priority";
    // priority.innerText = task.priority;
    // taskDiv.appendChild(priority);

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-btn";
    viewBtn.innerText = "View";
    basicDiv.appendChild(viewBtn);

    taskDiv.appendChild(basicDiv);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";
    detailsDiv.style.display = "none";

    const h4 = document.createElement("h4");
    h4.innerText = "Description:";
    detailsDiv.appendChild(h4);

    const description = document.createElement("p");
    description.className = "description";
    description.innerText = task.description;
    detailsDiv.appendChild(description);

    taskDiv.appendChild(detailsDiv);

    viewBtn.addEventListener("click", () => {
      if (detailsDiv.style.display === "none")
        detailsDiv.style.display = "initial";
      else detailsDiv.style.display = "none";
    });

    if (task.priority)
      taskDiv.style.borderColor = `var(--${task.priority}-priority-color)`;

    return taskDiv;
  };

  const displayTasksList = (project) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    tasksListDiv.innerHTML = "";

    for (let task of project.tasks) {
      // const taskItem = document.createElement("div");
      // taskItem.className = "task";

      // const checkbox = document.createElement("input");
      // checkbox.type = "checkbox";
      // checkbox.addEventListener("change", function () {
      //   task.toggleComplete();
      // });
      // if (task.completed) checkbox.checked = true;
      // taskItem.appendChild(checkbox);

      // const label = document.createElement("label");
      // label.innerText = task.title;
      // taskItem.appendChild(label);
      tasksListDiv.appendChild(createTaskDiv(task));
    }
  };

  const viewProject = (project) => {
    activeProject = project;
    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = project.name;
    displayTasksList(project);
  };

  _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.createNewProject("Personal");
  _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.createNewProject("Work");
  _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.createNewProject("Gym");
  displayProjectsList();

  document.querySelector(".new-project-btn").addEventListener("click", () => {
    document.querySelector(".new-project-dialog").showModal();
  });

  const newProjectForm = document.querySelector(".new-project-dialog form");
  newProjectForm.addEventListener("submit", () => {
    const projectName = document.querySelector("#name").value;
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.createNewProject(projectName);
    displayProjectsList();
    newProjectForm.reset();
  });

  document.querySelector(".new-task-btn").addEventListener("click", () => {
    if (activeProject) {
      // activeProject.addNewTask("marika " + activeProject.name);
      document.querySelector(".new-task-dialog").showModal();
    }
  });

  const newTaskForm = document.querySelector(".new-task-dialog form");
  newTaskForm.addEventListener("submit", () => {
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const dueDate = document.querySelector("#due-date").value;

    let priority = undefined;
    if (document.querySelector("input[name='priority']:checked"))
      priority = document.querySelector("input[name='priority']:checked").value;

    activeProject.addNewTask(title, description, dueDate, priority);
    displayTasksList(activeProject);
    newTaskForm.reset();
  });
})();


/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectsController: () => (/* binding */ projectsController)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");


const projectsController = (function () {
  class Project {
    constructor(name) {
      this.name = name;
      this.tasks = [];
    }

    addNewTask(title, description, dueDate, priority) {
      const task = new _task__WEBPACK_IMPORTED_MODULE_0__.Task(title, description, dueDate, priority, this);
      this.tasks.push(task);
    }
  }

  let projectsList = [];

  const createNewProject = (projectName) => {
    const project = new Project(projectName);
    projectsList.push(project);
  };

  return { projectsList, createNewProject };
})();


/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Task: () => (/* binding */ Task)
/* harmony export */ });
class Task {
  constructor(title, description, dueDate, priority, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }
}


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
/* harmony import */ var _modules_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projects */ "./src/modules/projects.js");
/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ "./src/modules/task.js");
/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayController */ "./src/modules/displayController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





console.log("Okayyyyyyyyyyyyyy");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxhQUFhLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FB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QWtCO0FBQ3BCLEVBQUUseURBQWtCO0FBQ3BCLEVBQUUseURBQWtCO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQWtCO0FBQ3RCO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcko2Qjs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLHVDQUFJO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdkJNO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBNkM7QUFDUDtBQUMwQjtBQUMzQzs7QUFFckIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNkYzI2MjY5MDtcbiAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNlYWIzMDg5MDtcbiAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICMyMmM1NWU5MDtcblxuICAtLWhpZ2gtcHJpb3JpdHktY29sb3Itb3BhcXVlOiAjZGMyNjI2O1xuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvci1vcGFxdWU6ICNlYWIzMDg7XG4gIC0tbG93LXByaW9yaXR5LWNvbG9yLW9wYXF1ZTogIzIyYzU1ZTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNiU7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiA5NCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLmxlZnQtcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xufVxuXG4ubGVmdC1wYW5lbCAudG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24ubmV3LXByb2plY3QtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnByb2plY3RzLWxpc3Qge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucHJvamVjdCB7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcm9qZWN0OmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiID4+XCI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5jb250ZW50IC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy10YXNrLWJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnRhc2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDE4NSwgMTg1LCAxODUpO1xufVxuXG4udGFzayAuYmFzaWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDEyZnIgMWZyIDAuNWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xuICBnYXA6IDEwcHg7XG59XG5cbi50YXNrIC5kZXRhaWxzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnRhc2sgLnByaW9yaXR5LFxuLmR1ZURhdGUge1xuICB3aWR0aDogbWluLWNvbnRlbnQ7XG59XG5cbi52aWV3LWJ0biB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnRhc2sgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgfiBsYWJlbCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogZ3JheTtcbn1cblxuLnRhc2sgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5kaWFsb2cge1xuICB3aWR0aDogMjUlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuZGlhbG9nIC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweCAxNXB4O1xufVxuXG4uY2xvc2UtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5mb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgZ2FwOiAxNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG5maWVsZHNldCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xufVxuXG5sZWdlbmQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0gfiBsYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cblxuaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGdDQUFnQztFQUNoQyxrQ0FBa0M7RUFDbEMsK0JBQStCOztFQUUvQixxQ0FBcUM7RUFDckMsdUNBQXVDO0VBQ3ZDLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0EsNEJBQTRCOztBQUU1QjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixTQUFTO0VBQ1QsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJDQUEyQztFQUMzQyxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEscUJBQXFCOztBQUVyQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS1oaWdoLXByaW9yaXR5LWNvbG9yOiAjZGMyNjI2OTA7XFxuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvcjogI2VhYjMwODkwO1xcbiAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICMyMmM1NWU5MDtcXG5cXG4gIC0taGlnaC1wcmlvcml0eS1jb2xvci1vcGFxdWU6ICNkYzI2MjY7XFxuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvci1vcGFxdWU6ICNlYWIzMDg7XFxuICAtLWxvdy1wcmlvcml0eS1jb2xvci1vcGFxdWU6ICMyMmM1NWU7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDYlO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBoZWlnaHQ6IDk0JTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi5sZWZ0LXBhbmVsIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xcbn1cXG5cXG4ubGVmdC1wYW5lbCAudG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24ubmV3LXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG59XFxuXFxuLnByb2plY3RzLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgPj5cXFwiO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5jb250ZW50IC50b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1idG4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XFxufVxcblxcbi50YXNrIC5iYXNpYyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxMmZyIDFmciAwLjVmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBwYWRkaW5nOiAxMHB4OyAqL1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzayAuZGV0YWlscyB7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JheTtcXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcblxcbi50YXNrIC5wcmlvcml0eSxcXG4uZHVlRGF0ZSB7XFxuICB3aWR0aDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi52aWV3LWJ0biB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB3aWR0aDogNjBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkIH4gbGFiZWwge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICBjb2xvcjogZ3JheTtcXG59XFxuXFxuLnRhc2sgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbmRpYWxvZyB7XFxuICB3aWR0aDogMjUlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxufVxcblxcbmRpYWxvZyAudG9wIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbn1cXG5cXG4uY2xvc2UtYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDE1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB+IGxhYmVsIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpjaGVja2VkIH4gbGFiZWwge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gXCIuL3Byb2plY3RzXCI7XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5Q29udHJvbGxlciA9ICgoKSA9PiB7XG4gIGxldCBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcblxuICBjb25zdCBkaXNwbGF5UHJvamVjdHNMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RzTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcbiAgICBwcm9qZWN0c0xpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IHByb2plY3Qgb2YgcHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzTGlzdCkge1xuICAgICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJvamVjdEl0ZW0uaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgICAgcHJvamVjdEl0ZW0uY2xhc3NOYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlld1Byb2plY3QocHJvamVjdCkpO1xuICAgICAgcHJvamVjdHNMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFza0RpdiA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2tcIjtcblxuICAgIGNvbnN0IGJhc2ljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXNpY0Rpdi5jbGFzc05hbWUgPSBcImJhc2ljXCI7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgIH0pO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS5jbGFzc05hbWUgPSBcImR1ZURhdGVcIjtcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IHRhc2suZHVlRGF0ZTtcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIC8vIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgLy8gcHJpb3JpdHkuY2xhc3NOYW1lID0gXCJwcmlvcml0eVwiO1xuICAgIC8vIHByaW9yaXR5LmlubmVyVGV4dCA9IHRhc2sucHJpb3JpdHk7XG4gICAgLy8gdGFza0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICBjb25zdCB2aWV3QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB2aWV3QnRuLmNsYXNzTmFtZSA9IFwidmlldy1idG5cIjtcbiAgICB2aWV3QnRuLmlubmVyVGV4dCA9IFwiVmlld1wiO1xuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKHZpZXdCdG4pO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChiYXNpY0Rpdik7XG5cbiAgICBjb25zdCBkZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZXRhaWxzRGl2LmNsYXNzTmFtZSA9IFwiZGV0YWlsc1wiO1xuICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgaDQuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBkZXRhaWxzRGl2LmFwcGVuZENoaWxkKGg0KTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICAgIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgZGV0YWlsc0Rpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRldGFpbHNEaXYpO1xuXG4gICAgdmlld0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpXG4gICAgICAgIGRldGFpbHNEaXYuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgICAgZWxzZSBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9KTtcblxuICAgIGlmICh0YXNrLnByaW9yaXR5KVxuICAgICAgdGFza0Rpdi5zdHlsZS5ib3JkZXJDb2xvciA9IGB2YXIoLS0ke3Rhc2sucHJpb3JpdHl9LXByaW9yaXR5LWNvbG9yKWA7XG5cbiAgICByZXR1cm4gdGFza0RpdjtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5VGFza3NMaXN0ID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0YXNrc0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0xpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgLy8gY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgLy8gdGFza0l0ZW0uY2xhc3NOYW1lID0gXCJ0YXNrXCI7XG5cbiAgICAgIC8vIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgLy8gY2hlY2tib3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgIC8vIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gICB0YXNrLnRvZ2dsZUNvbXBsZXRlKCk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIGlmICh0YXNrLmNvbXBsZXRlZCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAvLyB0YXNrSXRlbS5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgIC8vIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgLy8gbGFiZWwuaW5uZXJUZXh0ID0gdGFzay50aXRsZTtcbiAgICAgIC8vIHRhc2tJdGVtLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHRhc2tzTGlzdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUYXNrRGl2KHRhc2spKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgdmlld1Byb2plY3QgPSAocHJvamVjdCkgPT4ge1xuICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LW5hbWVcIik7XG4gICAgcHJvamVjdE5hbWVEaXYuaW5uZXJUZXh0ID0gcHJvamVjdC5uYW1lO1xuICAgIGRpc3BsYXlUYXNrc0xpc3QocHJvamVjdCk7XG4gIH07XG5cbiAgcHJvamVjdHNDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QoXCJQZXJzb25hbFwiKTtcbiAgcHJvamVjdHNDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QoXCJXb3JrXCIpO1xuICBwcm9qZWN0c0NvbnRyb2xsZXIuY3JlYXRlTmV3UHJvamVjdChcIkd5bVwiKTtcbiAgZGlzcGxheVByb2plY3RzTGlzdCgpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcHJvamVjdC1kaWFsb2cgZm9ybVwiKTtcbiAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25hbWVcIikudmFsdWU7XG4gICAgcHJvamVjdHNDb250cm9sbGVyLmNyZWF0ZU5ld1Byb2plY3QocHJvamVjdE5hbWUpO1xuICAgIGRpc3BsYXlQcm9qZWN0c0xpc3QoKTtcbiAgICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmIChhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAvLyBhY3RpdmVQcm9qZWN0LmFkZE5ld1Rhc2soXCJtYXJpa2EgXCIgKyBhY3RpdmVQcm9qZWN0Lm5hbWUpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1kaWFsb2dcIikuc2hvd01vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBuZXdUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGlhbG9nIGZvcm1cIik7XG4gIG5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0aXRsZVwiKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZHVlLWRhdGVcIikudmFsdWU7XG5cbiAgICBsZXQgcHJpb3JpdHkgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikpXG4gICAgICBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddOmNoZWNrZWRcIikudmFsdWU7XG5cbiAgICBhY3RpdmVQcm9qZWN0LmFkZE5ld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgZGlzcGxheVRhc2tzTGlzdChhY3RpdmVQcm9qZWN0KTtcbiAgICBuZXdUYXNrRm9ybS5yZXNldCgpO1xuICB9KTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdHNDb250cm9sbGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICB9XG5cbiAgICBhZGROZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCB0aGlzKTtcbiAgICAgIHRoaXMudGFza3MucHVzaCh0YXNrKTtcbiAgICB9XG4gIH1cblxuICBsZXQgcHJvamVjdHNMaXN0ID0gW107XG5cbiAgY29uc3QgY3JlYXRlTmV3UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdHNMaXN0LnB1c2gocHJvamVjdCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvamVjdHNMaXN0LCBjcmVhdGVOZXdQcm9qZWN0IH07XG59KSgpO1xuIiwiZXhwb3J0IGNsYXNzIFRhc2sge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICB0b2dnbGVDb21wbGV0ZSgpIHtcbiAgICB0aGlzLmNvbXBsZXRlZCA9ICF0aGlzLmNvbXBsZXRlZDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc29sZS5sb2coXCJPa2F5eXl5eXl5eXl5eXl5eVwiKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==