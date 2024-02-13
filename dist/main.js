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
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left-panel .top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tab {
  cursor: pointer;
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
}

.tab:hover::after {
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
  grid-template-columns: 0.2fr 12fr 1fr 1fr 0.5fr;
  align-items: center;
  gap: 10px;
}

.task .project-name {
  border: 1px solid rgb(50, 50, 50);
  padding: 5px;
  border-radius: 50px;
  text-align: center;
  color: rgb(50, 50, 50);
}

.task .dueDate {
  text-align: center;
}

.task .details {
  border-top: 1px solid gray;
  padding: 10px 5px;
  padding-bottom: 0;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,gCAAgC;EAChC,kCAAkC;EAClC,+BAA+B;;EAE/B,qCAAqC;EACrC,uCAAuC;EACvC,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;AACA,4BAA4B;;AAE5B;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,aAAa;EACb,iBAAiB;EACjB,eAAe;EACf,SAAS;EACT,0CAA0C;AAC5C;;AAEA;EACE,aAAa;EACb,+CAA+C;EAC/C,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,iCAAiC;EACjC,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,YAAY;AACd;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,qBAAqB;;AAErB;EACE,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,oBAAoB;EACpB,yBAAyB;EACzB,YAAY;EACZ,YAAY;AACd;;AAEA;;EAEE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto&display=swap\");\n\n:root {\n  --high-priority-color: #dc262690;\n  --medium-priority-color: #eab30890;\n  --low-priority-color: #22c55e90;\n\n  --high-priority-color-opaque: #dc2626;\n  --medium-priority-color-opaque: #eab308;\n  --low-priority-color-opaque: #22c55e;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  height: 100vh;\n  font-family: \"Roboto\", sans-serif;\n}\n\nheader {\n  padding: 10px 20px;\n  background-color: #0c4a6e;\n  color: white;\n  height: 6%;\n}\n\n.main {\n  height: 94%;\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n.left-panel {\n  padding: 20px;\n  background-color: #e0f2fe;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n\n.left-panel .top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.tab {\n  cursor: pointer;\n}\n\nbutton.new-project-btn {\n  background-color: unset;\n  border: 1px solid black;\n  border-radius: 50%;\n  font-size: 24px;\n  width: 30px;\n  height: 30px;\n}\n\n.projects-list {\n  margin-top: 5px;\n  padding: 5px;\n  font-size: 20px;\n}\n\n.project {\n  padding: 10px 0px;\n  margin-left: 15px;\n}\n\n.tab:hover::after {\n  content: \" >>\";\n}\n/* ----------------------- */\n\n.content {\n  padding: 40px;\n}\n\n.content .top {\n  display: flex;\n  /* justify-content: space-between; */\n  gap: 20px;\n  align-items: center;\n}\n\n.new-task-btn {\n  padding: 5px;\n  font-size: 18px;\n}\n\n.tasks-container {\n  margin-top: 10px;\n  display: flex;\n  flex-flow: column;\n  gap: 10px;\n}\n\n.task {\n  padding: 10px;\n  border: 1px solid rgb(185, 185, 185);\n  display: flex;\n  flex-flow: column;\n  font-size: 18px;\n  gap: 10px;\n  border-left: 10px solid rgb(185, 185, 185);\n}\n\n.task .basic {\n  display: grid;\n  grid-template-columns: 0.2fr 12fr 1fr 1fr 0.5fr;\n  align-items: center;\n  gap: 10px;\n}\n\n.task .project-name {\n  border: 1px solid rgb(50, 50, 50);\n  padding: 5px;\n  border-radius: 50px;\n  text-align: center;\n  color: rgb(50, 50, 50);\n}\n\n.task .dueDate {\n  text-align: center;\n}\n\n.task .details {\n  border-top: 1px solid gray;\n  padding: 10px 5px;\n  padding-bottom: 0;\n}\n\n.view-btn {\n  font-size: 16px;\n  width: 60px;\n  padding: 5px;\n}\n\n.task input[type=\"checkbox\"]:checked ~ label {\n  text-decoration: line-through;\n  color: gray;\n}\n\n.task input[type=\"checkbox\"] {\n  width: 20px;\n  height: 20px;\n}\n\n/* ---------------- */\n\ndialog {\n  width: 25%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: none;\n  border-radius: 4px;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n\ndialog .top {\n  display: flex;\n  justify-content: space-between;\n  background-color: #0c4a6e;\n  color: white;\n  padding: 10px 15px;\n}\n\n.close-btn {\n  border: none;\n  outline: none;\n  background-color: unset;\n  font-size: 20px;\n  color: white;\n}\n\n.modal-content {\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n}\n\nform {\n  padding: 15px;\n  height: 100%;\n  display: flex;\n  flex-flow: column;\n  gap: 15px;\n  font-size: 20px;\n}\n\nbutton[type=\"submit\"] {\n  padding: 10px;\n  font-size: 18px;\n  border-radius: 5px;\n  border: 1px solid black;\n  align-self: flex-end;\n  background-color: #0c4a6e;\n  color: white;\n  border: none;\n}\n\ninput,\ntextarea {\n  padding: 10px;\n  font-size: 18px;\n}\n\ntextarea {\n  resize: none;\n}\n\nfieldset {\n  border: none;\n  display: flex;\n  gap: 10px;\n}\n\nlegend {\n  margin-bottom: 20px;\n}\n\ninput[type=\"radio\"] {\n  display: none;\n}\n\ninput[type=\"radio\"] ~ label {\n  cursor: pointer;\n  border: 1px solid gray;\n  border-radius: 4px;\n  padding: 5px 10px;\n}\n\ninput[type=\"radio\"]:checked ~ label {\n  color: white;\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
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
      projectItem.className = "project tab";
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

    const titleLabel = document.createElement("label");
    titleLabel.innerText = task.title;
    basicDiv.appendChild(titleLabel);

    const projectName = document.createElement("h4");
    projectName.innerText = task.project.name;
    projectName.className = "project-name";
    basicDiv.appendChild(projectName);

    const dueDate = document.createElement("p");
    dueDate.className = "dueDate";
    dueDate.innerText = task.dueDate;
    basicDiv.appendChild(dueDate);

    const viewBtn = document.createElement("button");
    viewBtn.className = "view-btn";
    viewBtn.innerText = "View";
    basicDiv.appendChild(viewBtn);

    taskDiv.appendChild(basicDiv);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "details";
    detailsDiv.style.display = "none";

    const descriptionLabel = document.createElement("h4");
    descriptionLabel.innerText = "Description:";
    detailsDiv.appendChild(descriptionLabel);

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

  const displayTasksList = (project, resetPrevious = true) => {
    const tasksListDiv = document.querySelector(".tasks-container");
    if (resetPrevious) tasksListDiv.innerHTML = "";

    for (let task of project.tasks) {
      tasksListDiv.appendChild(createTaskDiv(task));
    }
  };

  const displayAllTasks = () => {
    document.querySelector(".tasks-container").innerHTML = "";
    for (let project of _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList) {
      displayTasksList(project, false);
    }
  };

  const viewProject = (project) => {
    activeProject = project;
    const projectNameDiv = document.querySelector(".project-name");
    projectNameDiv.innerText = project.name;
    displayTasksList(project);
  };

  document.querySelector(".new-project-btn").addEventListener("click", () => {
    document.querySelector(".new-project-dialog").showModal();
  });

  const newProjectForm = document.querySelector(".new-project-dialog form");
  newProjectForm.addEventListener("submit", () => {
    const projectName = document.querySelector("#name").value;
    _projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.addNewProject(projectName);
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

  const initDisplay = () => {
    displayProjectsList();
    displayAllTasks();
  };

  document
    .querySelector(".left-panel .all-tasks")
    .addEventListener("click", displayAllTasks);

  return { initDisplay };
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

  const addNewProject = (projectName) => {
    const project = new Project(projectName);
    projectsList.push(project);
  };

  return { projectsList, addNewProject };
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





console.log("Add demo projects and tasks");

_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.addNewProject("Personal");
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.addNewProject("Work");
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.addNewProject("Gym");

_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[0].addNewTask("Cook dinner", "", "", "medium");
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[0].addNewTask(
  "Go shopping",
  "Need: sneakers, totebag",
  "",
  "low"
);
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[0].addNewTask(
  "Take a shower",
  "Lalalalalalalala",
  "",
  ""
);
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[0].addNewTask(
  "Go to the dentist",
  "Location: nai nai nai\n Tel: 123456789",
  "20-02-2024",
  "high"
);

_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[1].addNewTask(
  "Fix bug #7677",
  "",
  "15-02-2024",
  "high"
);
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[1].addNewTask(
  "Fix bug #5588",
  "",
  "14-02-2024",
  "high"
);
_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[1].addNewTask(
  "Read lesson X",
  "www.example.com/lesson-X",
  "",
  "medium"
);

_modules_projects__WEBPACK_IMPORTED_MODULE_0__.projectsController.projectsList[2].addNewTask(
  "Workout",
  "",
  "13-02-2024",
  "high"
);

_modules_displayController__WEBPACK_IMPORTED_MODULE_2__.displayController.initDisplay();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLG9IQUFvSDtBQUNwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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QUFDM0M7O0FBRXJCOztBQUVBLGlFQUFrQjtBQUNsQixpRUFBa0I7QUFDbEIsaUVBQWtCOztBQUVsQixpRUFBa0I7QUFDbEIsaUVBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RUFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNkYzI2MjY5MDtcbiAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNlYWIzMDg5MDtcbiAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICMyMmM1NWU5MDtcblxuICAtLWhpZ2gtcHJpb3JpdHktY29sb3Itb3BhcXVlOiAjZGMyNjI2O1xuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvci1vcGFxdWU6ICNlYWIzMDg7XG4gIC0tbG93LXByaW9yaXR5LWNvbG9yLW9wYXF1ZTogIzIyYzU1ZTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJvZHkge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaGVhZGVyIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNiU7XG59XG5cbi5tYWluIHtcbiAgaGVpZ2h0OiA5NCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcbn1cblxuLmxlZnQtcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDIwcHg7XG59XG5cbi5sZWZ0LXBhbmVsIC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YWIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5uZXctcHJvamVjdC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucHJvamVjdHMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5wcm9qZWN0IHtcbiAgcGFkZGluZzogMTBweCAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4udGFiOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiID4+XCI7XG59XG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDQwcHg7XG59XG5cbi5jb250ZW50IC50b3Age1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gIGdhcDogMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm5ldy10YXNrLWJ0biB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGdhcDogMTBweDtcbn1cblxuLnRhc2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGdhcDogMTBweDtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgcmdiKDE4NSwgMTg1LCAxODUpO1xufVxuXG4udGFzayAuYmFzaWMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMmZyIDEyZnIgMWZyIDFmciAwLjVmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4udGFzayAucHJvamVjdC1uYW1lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDUwLCA1MCwgNTApO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcbn1cblxuLnRhc2sgLmR1ZURhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrIC5kZXRhaWxzIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGdyYXk7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnZpZXctYnRuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogNjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udGFzayBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCB+IGxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiBncmF5O1xufVxuXG4udGFzayBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tICovXG5cbmRpYWxvZyB7XG4gIHdpZHRoOiAyNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG5kaWFsb2cgLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG5cbi5jbG9zZS1idG4ge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBnYXA6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGM0YTZlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59XG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG59XG5cbmxlZ2VuZCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSB+IGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtDQUFrQztFQUNsQywrQkFBK0I7O0VBRS9CLHFDQUFxQztFQUNyQyx1Q0FBdUM7RUFDdkMs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QjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG46cm9vdCB7XFxuICAtLWhpZ2gtcHJpb3JpdHktY29sb3I6ICNkYzI2MjY5MDtcXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZWFiMzA4OTA7XFxuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogIzIyYzU1ZTkwO1xcblxcbiAgLS1oaWdoLXByaW9yaXR5LWNvbG9yLW9wYXF1ZTogI2RjMjYyNjtcXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yLW9wYXF1ZTogI2VhYjMwODtcXG4gIC0tbG93LXByaW9yaXR5LWNvbG9yLW9wYXF1ZTogIzIyYzU1ZTtcXG59XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJlZDsgKi9cXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogNiU7XFxufVxcblxcbi5tYWluIHtcXG4gIGhlaWdodDogOTQlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLmxlZnQtcGFuZWwge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGYyZmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmxlZnQtcGFuZWwgLnRvcCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5uZXctcHJvamVjdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG5cXG4ucHJvamVjdHMtbGlzdCB7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcblxcbi50YWI6aG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgPj5cXFwiO1xcbn1cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDQwcHg7XFxufVxcblxcbi5jb250ZW50IC50b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cXG4gIGdhcDogMjBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdGFzay1idG4ge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50YXNrIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBnYXA6IDEwcHg7XFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCByZ2IoMTg1LCAxODUsIDE4NSk7XFxufVxcblxcbi50YXNrIC5iYXNpYyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciAxMmZyIDFmciAxZnIgMC41ZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGFzayAucHJvamVjdC1uYW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig1MCwgNTAsIDUwKTtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbn1cXG5cXG4udGFzayAuZHVlRGF0ZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIC5kZXRhaWxzIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCBncmF5O1xcbiAgcGFkZGluZzogMTBweCA1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLnZpZXctYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgfiBsYWJlbCB7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gIGNvbG9yOiBncmF5O1xcbn1cXG5cXG4udGFzayBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuZGlhbG9nIHtcXG4gIHdpZHRoOiAyNSU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuZGlhbG9nIC50b3Age1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzRhNmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbmZvcm0ge1xcbiAgcGFkZGluZzogMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGdhcDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjNGE2ZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdIH4gbGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdOmNoZWNrZWQgfiBsYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKCgpID0+IHtcbiAgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0c0xpc3QgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xuICAgIHByb2plY3RzTGlzdERpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0KSB7XG4gICAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcm9qZWN0SXRlbS5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc05hbWUgPSBcInByb2plY3QgdGFiXCI7XG4gICAgICBwcm9qZWN0SXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdmlld1Byb2plY3QocHJvamVjdCkpO1xuICAgICAgcHJvamVjdHNMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlVGFza0RpdiA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5jbGFzc05hbWUgPSBcInRhc2tcIjtcblxuICAgIGNvbnN0IGJhc2ljRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXNpY0Rpdi5jbGFzc05hbWUgPSBcImJhc2ljXCI7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgdGFzay50b2dnbGVDb21wbGV0ZSgpO1xuICAgIH0pO1xuICAgIGlmICh0YXNrLmNvbXBsZXRlZCkgY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IHRhc2sudGl0bGU7XG4gICAgYmFzaWNEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBwcm9qZWN0TmFtZS5pbm5lclRleHQgPSB0YXNrLnByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc05hbWUgPSBcInByb2plY3QtbmFtZVwiO1xuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlRGF0ZVwiO1xuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gdGFzay5kdWVEYXRlO1xuICAgIGJhc2ljRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgY29uc3Qgdmlld0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgdmlld0J0bi5jbGFzc05hbWUgPSBcInZpZXctYnRuXCI7XG4gICAgdmlld0J0bi5pbm5lclRleHQgPSBcIlZpZXdcIjtcbiAgICBiYXNpY0Rpdi5hcHBlbmRDaGlsZCh2aWV3QnRuKTtcblxuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYmFzaWNEaXYpO1xuXG4gICAgY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGV0YWlsc0Rpdi5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgICBkZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGRldGFpbHNEaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZXRhaWxzRGl2KTtcblxuICAgIHZpZXdCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGlmIChkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKVxuICAgICAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgICAgIGVsc2UgZGV0YWlsc0Rpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSk7XG5cbiAgICBpZiAodGFzay5wcmlvcml0eSlcbiAgICAgIHRhc2tEaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBgdmFyKC0tJHt0YXNrLnByaW9yaXR5fS1wcmlvcml0eS1jb2xvcilgO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2tzTGlzdCA9IChwcm9qZWN0LCByZXNldFByZXZpb3VzID0gdHJ1ZSkgPT4ge1xuICAgIGNvbnN0IHRhc2tzTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xuICAgIGlmIChyZXNldFByZXZpb3VzKSB0YXNrc0xpc3REaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGZvciAobGV0IHRhc2sgb2YgcHJvamVjdC50YXNrcykge1xuICAgICAgdGFza3NMaXN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tEaXYodGFzaykpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkaXNwbGF5QWxsVGFza3MgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBwcm9qZWN0IG9mIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0xpc3QpIHtcbiAgICAgIGRpc3BsYXlUYXNrc0xpc3QocHJvamVjdCwgZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCB2aWV3UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3Q7XG4gICAgY29uc3QgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtbmFtZVwiKTtcbiAgICBwcm9qZWN0TmFtZURpdi5pbm5lclRleHQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgZGlzcGxheVRhc2tzTGlzdChwcm9qZWN0KTtcbiAgfTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0LWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICB9KTtcblxuICBjb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXByb2plY3QtZGlhbG9nIGZvcm1cIik7XG4gIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpLnZhbHVlO1xuICAgIHByb2plY3RzQ29udHJvbGxlci5hZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICBkaXNwbGF5UHJvamVjdHNMaXN0KCk7XG4gICAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFzay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgLy8gYWN0aXZlUHJvamVjdC5hZGROZXdUYXNrKFwibWFyaWthIFwiICsgYWN0aXZlUHJvamVjdC5uYW1lKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2stZGlhbG9nXCIpLnNob3dNb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgbmV3VGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrLWRpYWxvZyBmb3JtXCIpO1xuICBuZXdUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2R1ZS1kYXRlXCIpLnZhbHVlO1xuXG4gICAgbGV0IHByaW9yaXR5ID0gdW5kZWZpbmVkO1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpKVxuICAgICAgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkXCIpLnZhbHVlO1xuXG4gICAgYWN0aXZlUHJvamVjdC5hZGROZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgIGRpc3BsYXlUYXNrc0xpc3QoYWN0aXZlUHJvamVjdCk7XG4gICAgbmV3VGFza0Zvcm0ucmVzZXQoKTtcbiAgfSk7XG5cbiAgY29uc3QgaW5pdERpc3BsYXkgPSAoKSA9PiB7XG4gICAgZGlzcGxheVByb2plY3RzTGlzdCgpO1xuICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICB9O1xuXG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1wYW5lbCAuYWxsLXRhc2tzXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5QWxsVGFza3MpO1xuXG4gIHJldHVybiB7IGluaXREaXNwbGF5IH07XG59KSgpO1xuIiwiaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuL3Rhc2tcIjtcblxuZXhwb3J0IGNvbnN0IHByb2plY3RzQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkTmV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgdGhpcyk7XG4gICAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgfVxuICB9XG5cbiAgbGV0IHByb2plY3RzTGlzdCA9IFtdO1xuXG4gIGNvbnN0IGFkZE5ld1Byb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RzTGlzdC5wdXNoKHByb2plY3QpO1xuICB9O1xuXG4gIHJldHVybiB7IHByb2plY3RzTGlzdCwgYWRkTmV3UHJvamVjdCB9O1xufSkoKTtcbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSAhdGhpcy5jb21wbGV0ZWQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gXCIuL21vZHVsZXMvcHJvamVjdHNcIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi9tb2R1bGVzL3Rhc2tcIjtcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vbW9kdWxlcy9kaXNwbGF5Q29udHJvbGxlclwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuY29uc29sZS5sb2coXCJBZGQgZGVtbyBwcm9qZWN0cyBhbmQgdGFza3NcIik7XG5cbnByb2plY3RzQ29udHJvbGxlci5hZGROZXdQcm9qZWN0KFwiUGVyc29uYWxcIik7XG5wcm9qZWN0c0NvbnRyb2xsZXIuYWRkTmV3UHJvamVjdChcIldvcmtcIik7XG5wcm9qZWN0c0NvbnRyb2xsZXIuYWRkTmV3UHJvamVjdChcIkd5bVwiKTtcblxucHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzTGlzdFswXS5hZGROZXdUYXNrKFwiQ29vayBkaW5uZXJcIiwgXCJcIiwgXCJcIiwgXCJtZWRpdW1cIik7XG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzBdLmFkZE5ld1Rhc2soXG4gIFwiR28gc2hvcHBpbmdcIixcbiAgXCJOZWVkOiBzbmVha2VycywgdG90ZWJhZ1wiLFxuICBcIlwiLFxuICBcImxvd1wiXG4pO1xucHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzTGlzdFswXS5hZGROZXdUYXNrKFxuICBcIlRha2UgYSBzaG93ZXJcIixcbiAgXCJMYWxhbGFsYWxhbGFsYWxhXCIsXG4gIFwiXCIsXG4gIFwiXCJcbik7XG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzBdLmFkZE5ld1Rhc2soXG4gIFwiR28gdG8gdGhlIGRlbnRpc3RcIixcbiAgXCJMb2NhdGlvbjogbmFpIG5haSBuYWlcXG4gVGVsOiAxMjM0NTY3ODlcIixcbiAgXCIyMC0wMi0yMDI0XCIsXG4gIFwiaGlnaFwiXG4pO1xuXG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzFdLmFkZE5ld1Rhc2soXG4gIFwiRml4IGJ1ZyAjNzY3N1wiLFxuICBcIlwiLFxuICBcIjE1LTAyLTIwMjRcIixcbiAgXCJoaWdoXCJcbik7XG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzFdLmFkZE5ld1Rhc2soXG4gIFwiRml4IGJ1ZyAjNTU4OFwiLFxuICBcIlwiLFxuICBcIjE0LTAyLTIwMjRcIixcbiAgXCJoaWdoXCJcbik7XG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzFdLmFkZE5ld1Rhc2soXG4gIFwiUmVhZCBsZXNzb24gWFwiLFxuICBcInd3dy5leGFtcGxlLmNvbS9sZXNzb24tWFwiLFxuICBcIlwiLFxuICBcIm1lZGl1bVwiXG4pO1xuXG5wcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNMaXN0WzJdLmFkZE5ld1Rhc2soXG4gIFwiV29ya291dFwiLFxuICBcIlwiLFxuICBcIjEzLTAyLTIwMjRcIixcbiAgXCJoaWdoXCJcbik7XG5cbmRpc3BsYXlDb250cm9sbGVyLmluaXREaXNwbGF5KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=