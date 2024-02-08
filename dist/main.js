/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/displayController */ \"./src/modules/displayController.js\");\n\n\n\n\nconsole.log(\"Okayyyyyyyyyyyyyy\");\n\nconst projectWork = new _modules_project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Work\");\nprojectWork.addNewTask(\n  new _modules_task__WEBPACK_IMPORTED_MODULE_1__.Task(\"Work on odin-todo-list\", \"euvhsuhv\", \"13/02\", \"high\", projectWork)\n);\nprojectWork.addNewTask(\n  new _modules_task__WEBPACK_IMPORTED_MODULE_1__.Task(\"Read JS in real world section\", \"---\", \"\", \"low\", projectWork)\n);\nconsole.log(projectWork);\n\n// displayController\n\n\n//# sourceURL=webpack://odin-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/displayController.js":
/*!******************************************!*\
  !*** ./src/modules/displayController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayController: () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nconst displayController = (() => {\n  const displayProject = (project) => {\n    const projectsList = document.querySelector(\".projects-list\");\n    const listItem = document.createElement(\"li\");\n    listItem.innerText = project.name;\n\n    projectsList.appendChild(listItem);\n  };\n\n  document.querySelector(\".new-project-btn\").addEventListener(\"click\", () => {\n    document.querySelector(\"dialog\").show();\n  });\n\n  document\n    .querySelector(\".create-new-project-btn\")\n    .addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      const project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(document.querySelector(\"#name\").value);\n      displayProject(project);\n      document.querySelector(\"form\").reset();\n      document.querySelector(\"dialog\").close();\n    });\n})();\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/displayController.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.tasks = [];\n  }\n\n  addNewTask(task) {\n    this.tasks.push(task);\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(title, description, dueDate, priority, project) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.project = project;\n  }\n}\n\n\n//# sourceURL=webpack://odin-todo-list/./src/modules/task.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;