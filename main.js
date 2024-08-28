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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --cellSize: 50px\r\n}\r\n\r\nbody {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.gameboard {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n\r\n.announcer {\r\n  font-size: 30px;\r\n  font-weight: 800;\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  button {\r\n    width: max-content;\r\n    height: 20px;\r\n  }\r\n}\r\n\r\n.errorPanel {\r\n  color: red;\r\n  font-size: 50px;\r\n  font-weight: 800;\r\n}\r\n\r\n.titleP1, .titleP2 {\r\n    font-weight: 600;\r\n    font-size: var(--cellSize);\r\n}\r\n\r\n.playerOne, .playerTwo {\r\n  margin-bottom: 40px;\r\n  display: grid;\r\n  grid-template-columns: repeat(10, auto);\r\n}\r\n\r\n.ships1, .ships2 {\r\n  display: flex;\r\n  gap: 10px;\r\n  justify-content: space-between;\r\n  height: min-content;\r\n}\r\n\r\n\r\n.buttonContainer {\r\n  align-items: center;\r\n  margin-top: 18%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  button {\r\n    background-color: black;\r\n    height: 50px;\r\n    width: 50px;\r\n  }\r\n  div {\r\n    width: max-content;\r\n  }\r\n}\r\n\r\n.cell {\r\n    margin: 0;\r\n    padding: 0;\r\n    text-align: center;\r\n  width: var(--cellSize);\r\n  height: var(--cellSize);\r\n  border: 1px solid rgb(0, 0, 0);\r\n  font-size: var(--cellSize);\r\n  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n  font-weight: 800;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/DOMinterface.js":
/*!*****************************!*\
  !*** ./src/DOMinterface.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayCells: () => (/* binding */ displayCells),\n/* harmony export */   startGame: () => (/* binding */ startGame),\n/* harmony export */   startGameBot: () => (/* binding */ startGameBot),\n/* harmony export */   updateScreen: () => (/* binding */ updateScreen)\n/* harmony export */ });\n/* harmony import */ var _images_arrow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/arrow.svg */ \"./src/images/arrow.svg\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\r\n\r\n\r\n\r\nconst announcer = document.querySelector('.announcer');\r\nconst playerOneBoard = document.querySelector('.playerOne');\r\nconst playerTwoBoard = document.querySelector('.playerTwo');\r\nconst titleP1 = document.querySelector('.titleP1');\r\nconst titleP2 = document.querySelector('.titleP2');\r\nconst ships1 = document.querySelector('.ships1');\r\nconst ships2 = document.querySelector('.ships2');\r\nconst buttonContainer = document.querySelector('.buttonContainer');\r\nconst errorPanel = document.querySelector('.errorPanel');\r\n\r\nlet player1 = null;\r\nlet player2 = null;\r\nlet colorP1 = 'cyan';\r\nlet colorP2 = 'pink';\r\nlet orientationList = ['up', 'right', 'down', 'left'];\r\nlet orientation = orientationList[0];\r\nlet winner = null;\r\nlet activePlayer = player1;\r\n\r\nfunction getActivePlayer() {\r\n  return activePlayer;\r\n}\r\n\r\nfunction switchActivePlayer() {\r\n  if (activePlayer === player1) {\r\n    activePlayer = player2;\r\n    return;\r\n  }\r\n  activePlayer = player1;\r\n}\r\n\r\nfunction getEnemyPlayer() {\r\n  let enemyPlayer = null;\r\n  let currentPlayer = getActivePlayer();\r\n  if (currentPlayer === player1) {\r\n    enemyPlayer = player2;\r\n  } else {\r\n    enemyPlayer = player1;\r\n  }\r\n  return enemyPlayer;\r\n}\r\n\r\nfunction startGame() {\r\n  let p1Name = prompt('Player 1 name', 'PlayerOne');\r\n  let p2Name = prompt('Player 2 name', 'PlayerTwo');\r\n  p1Name = setPlayerNameOrDefault(p1Name, 'PlayerOne');\r\n  p2Name = setPlayerNameOrDefault(p2Name, 'PlayerTwo');\r\n  player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](true, p1Name);\r\n  player2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](true, p2Name);\r\n  console.log(player1.ships, player2.ships);\r\n  activePlayer = player1;\r\n  renderShipsToPlace(player1, ships1, colorP1);\r\n  changeOrientation()\r\n  updateScreen();\r\n}\r\n\r\nfunction startGameBot() {\r\n  let p1Name = prompt('Player 1 name', 'PlayerOne');\r\n  p1Name = setPlayerNameOrDefault(p1Name, 'PlayerOne');\r\n  player1 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](true, p1Name);\r\n  player2 = new _player__WEBPACK_IMPORTED_MODULE_1__[\"default\"](false);\r\n  console.log(player1.ships, player2.ships);\r\n  activePlayer = player1;\r\n  renderShipsToPlace(player1, ships1, colorP1);\r\n  changeOrientation()\r\n  updateScreen();\r\n}\r\n\r\nfunction updateScreen() {\r\n  displayCells(player1, player2);\r\n  // changeOrientation();\r\n  console.log(activePlayer.placeStage);\r\n  console.log(player1.gameboard.missedAttacks);\r\n  console.log(player2.gameboard.missedAttacks);\r\n  console.log(player1.gameboard.board, player2.gameboard.board);\r\n}\r\n\r\nfunction createResetBtns() {\r\n  const resetBtn = document.createElement('button');\r\n  resetBtn.textContent = 'Restart with 2 players';\r\n  resetBtn.addEventListener('click', resetGame);\r\n  const resetBtnBot = document.createElement('button');\r\n  resetBtnBot.textContent = 'Restart with bot';\r\n  resetBtnBot.addEventListener('click', resetGameBot);\r\n  announcer.appendChild(resetBtn);\r\n  announcer.appendChild(resetBtnBot);\r\n}\r\n\r\nfunction checkForWinner() {\r\n  const enemyPlayer = getEnemyPlayer();\r\n  if (enemyPlayer.didAllShipsSink()) {\r\n    announcer.textContent = activePlayer.name + ' has won the game';\r\n    createResetBtns();\r\n    winner = activePlayer;\r\n    updateScreen();\r\n    return true;\r\n  }\r\n  return false;\r\n}\r\n\r\nfunction playRound(posX, posY, player, enemyPlayer) {\r\n  if (enemyPlayer.gameboard.receiveAttack(posX, posY)) {\r\n    if (checkForWinner()) {\r\n      return;\r\n    }\r\n  } else {\r\n    switchActivePlayer();\r\n  }\r\n  if (!activePlayer.real && attackRandomPos(player) === 0) {\r\n    if (checkForWinner()) {\r\n      return;\r\n    }\r\n  }\r\n  updateScreen();\r\n}\r\n\r\nfunction displayCells(player1, player2) {\r\n  playerOneBoard.textContent = '';\r\n  playerTwoBoard.textContent = '';\r\n\r\n  titleP1.textContent = player1.name;\r\n  titleP2.textContent = player2.name;\r\n\r\n  renderShipsInCells(player1, colorP1, playerOneBoard);\r\n  renderShipsInCells(player2, colorP2, playerTwoBoard);\r\n}\r\n\r\nlet dragged = null;\r\n\r\nfunction renderShipsToPlace(player, parent, color) {\r\n  parent.textContent = '';\r\n  for (let ship in player.ships) {\r\n    const shipcell = document.createElement('div');\r\n    shipcell.setAttribute('class', `${ship}`);\r\n    for (let i = 0; i < player.ships[ship].length; i++) {\r\n      const cell = document.createElement('div');\r\n      cell.setAttribute('class', `cell ${ship}`);\r\n      shipcell.appendChild(cell);\r\n      cell.setAttribute('draggable', true);\r\n      cell.addEventListener('dragstart', (event) => {\r\n        if (cell === event.target) {\r\n          dragged = event.target;\r\n        }\r\n      });\r\n    }\r\n\r\n    shipcell.style.height = `max-content`;\r\n    shipcell.style.backgroundColor = `${color}`;\r\n    parent.appendChild(shipcell);\r\n  }\r\n}\r\n\r\nfunction renderShipsInCells(player, color, parent) {\r\n  let i = 0;\r\n  for (let index of player.gameboard.board) {\r\n    const cell = document.createElement('div');\r\n    //\r\n    if (player === activePlayer) {\r\n      if (index.hasShip) {\r\n        cell.style.backgroundColor = `${color}`;\r\n      }\r\n    }\r\n    //  Comment ^ and uncomment v if you want to see enemy ships\r\n    // if (index.hasShip) {\r\n    //   cell.style.backgroundColor = `${color}`;\r\n    // }\r\n    //\r\n    if (index.isHit == true) {\r\n      cell.textContent = 'X';\r\n      if (index.hasShip) {\r\n        cell.style.backgroundColor = 'gray';\r\n      }\r\n    }\r\n    cell.setAttribute('class', `cell ${i}`);\r\n    parent.appendChild(cell);\r\n    i++;\r\n    if (player.placeStage) {\r\n      cell.addEventListener('dragover', (event) => {\r\n        event.preventDefault();\r\n      });\r\n      cell.addEventListener('drop', (event) => {\r\n        event.preventDefault();\r\n        const coords = event.target.className.split(' ')[1];\r\n        dropShipIntoCell(dragged, player, coords);\r\n        updateScreen();\r\n      });\r\n    }\r\n    if (\r\n      player !== activePlayer &&\r\n      !player.placeStage &&\r\n      !activePlayer.placeStage &&\r\n      winner === null\r\n    ) {\r\n      if (!index.isHit) {\r\n        cell.addEventListener('click', (event) => {\r\n          const cellCoords = cell.className.split(' ')[1];\r\n          const [posX, posY] = coordsToPos(cellCoords);\r\n          playRound(posX, posY, activePlayer, player);\r\n        });\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction dropShipIntoCell(ship, player, coords) {\r\n  let theShip = ship.className.split(' ')[1];\r\n  let [posX, posY] = coordsToPos(coords);\r\n  try {\r\n    player.gameboard.placeShip(posX, posY, player.ships[theShip], orientation);\r\n  } catch (e) {\r\n    errorPanel.textContent = e;\r\n    return;\r\n  }\r\n  const shipsDiv = dragged.parentElement.parentElement;\r\n  shipsDiv.removeChild(dragged.parentElement);\r\n  if (shipsDiv.childNodes.length === 0) {\r\n    player.placeStage = false;\r\n    switchActivePlayer();\r\n    console.log('switcing player ' + activePlayer.name);\r\n    if (activePlayer.placeStage) {\r\n      renderShipsToPlace(player2, ships2, colorP2);\r\n      ships2.setAttribute('class', 'ships2');\r\n    } else if (!activePlayer.placeStage && !activePlayer.real) {\r\n      createRandomShipsForComputer();\r\n      switchActivePlayer();\r\n      console.log('switcing player ' + activePlayer.name);\r\n    }\r\n  }\r\n}\r\n\r\nfunction coordsToPos(coords) {\r\n  let posY = Math.floor(coords / 10) + 1;\r\n  let posX = coords - (posY - 1) * 10 + 1;\r\n  return [posX, posY];\r\n}\r\n\r\nfunction changeOrientation() {\r\n  buttonContainer.textContent = '';\r\n  const buttonRight = document.createElement('button');\r\n  const buttonImg = document.createElement('img');\r\n  const orientationText = document.createElement('div');\r\n  // buttonRight.style.content = `url(${arrow})`;\r\n  orientationText.textContent = `Place direction: `;\r\n  buttonRight.appendChild(buttonImg)\r\n  buttonContainer.appendChild(orientationText);\r\n  buttonContainer.appendChild(buttonRight);\r\n  buttonImg.src = _images_arrow_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  buttonImg.style.scale = 2;\r\n  buttonImg.style.rotate = `${90 * orientationList.indexOf(orientation, 0)}deg`;\r\n\r\n  buttonRight.addEventListener('click', function () {\r\n    let index = orientationList.indexOf(orientation, 0);\r\n    index++;\r\n    buttonImg.style.rotate = `${90 * index}deg`\r\n    if (index > orientationList.length - 1) {\r\n      orientation = orientationList[0];\r\n    } else {\r\n      orientation = orientationList[index];\r\n    }\r\n    updateScreen();\r\n  });\r\n}\r\n\r\nfunction createRandomShipsForComputer() {\r\n  if (!player2.real) {\r\n    for (const ship in player2.ships) {\r\n      console.log(player2.ships[ship]);\r\n      let shipPlaced = 0;\r\n      while (shipPlaced === 0) {\r\n        if (checkIfRandomPosAvailable(player2.ships[ship])) {\r\n          shipPlaced = 1;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\nfunction setPlayerNameOrDefault(playerName, defaultName) {\r\n  const regex = /\\w+/\r\n  if (!playerName) {\r\n    playerName = defaultName;\r\n  }\r\n  else if (playerName) {\r\n    const match = playerName.match(regex);\r\n    if (!match) {\r\n      playerName = defaultName;\r\n    }\r\n  }\r\n  return playerName\r\n}\r\n\r\nfunction attackRandomPos(enemyPlayer) {\r\n  const availableCoords = [];\r\n  for (let coord in enemyPlayer.gameboard.board) {\r\n    if (!enemyPlayer.gameboard.board[coord].isHit) {\r\n      availableCoords.push(coord);\r\n    }\r\n  }\r\n  console.log(availableCoords);\r\n  console.log(availableCoords.length - 1);\r\n  const random = Math.floor(Math.random() * (availableCoords.length - 1));\r\n  console.log(random);\r\n  const [posX, posY] = coordsToPos(availableCoords[random]);\r\n  if (!enemyPlayer.gameboard.board[availableCoords[random]].isHit) {\r\n    if (enemyPlayer.gameboard.receiveAttack(posX, posY)) {\r\n      attackRandomPos(enemyPlayer);\r\n      return 1;\r\n    } else {\r\n      switchActivePlayer();\r\n      return 0;\r\n    }\r\n  }\r\n}\r\n\r\nfunction checkIfRandomPosAvailable(ship) {\r\n  try {\r\n    const posX = Math.floor(Math.random() * 8 + 1);\r\n    const posY = Math.floor(Math.random() * 8 + 1);\r\n    const orientationC = Math.floor(Math.random() * 4);\r\n    console.log(posX, posY, ship, orientationList[orientationC]);\r\n    player2.gameboard.placeShip(\r\n      posX,\r\n      posY,\r\n      ship,\r\n      orientationList[orientationC]\r\n    );\r\n    return true;\r\n  } catch (e) {\r\n    console.error(e);\r\n    return false;\r\n  }\r\n}\r\n\r\nfunction resetGame() {\r\n  player1 = null;\r\n  player2 = null;\r\n  winner = null;\r\n  announcer.textContent = '';\r\n  startGame();\r\n}\r\n\r\nfunction resetGameBot() {\r\n  player1 = null;\r\n  player2 = null;\r\n  winner = null;\r\n  announcer.textContent = '';\r\n  startGameBot();\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/DOMinterface.js?");

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard),\n/* harmony export */   posToCoords: () => (/* binding */ posToCoords)\n/* harmony export */ });\nclass Gameboard {\r\n  constructor() {\r\n    this.board = [];\r\n    for (let i = 0; i < 100; i++) {\r\n      this.board.push({ hasShip: false, isHit: false });\r\n    }\r\n    this.missedAttacks = [];\r\n  }\r\n\r\n  placeShip(posX, posY, ship, orientation) {\r\n    if (this.checkIfCoordsEmpty(posX, posY)) {\r\n      this.getShipPosFromOrientation(posX, posY, ship, orientation);\r\n      return true;\r\n    } else {\r\n      throw new Error('Cannot place over another ship');\r\n    }\r\n  }\r\n\r\n  receiveAttack(posX, posY) {\r\n    const coords = posToCoords(posX, posY);\r\n    if (!this.board[coords]) {\r\n      return false;\r\n    }\r\n    if (\r\n      this.board[coords]?.hasShip &&\r\n      !this.board[coords].isHit\r\n    ) {\r\n      this.board[coords].isHit = true;\r\n      this.board[coords].hasShip.hit();\r\n      return true;\r\n    }\r\n    this.board[coords].isHit = true;\r\n    this.missedAttacks.push(coords);\r\n    console.log('pushing missed');\r\n    return false;\r\n  }\r\n\r\n  checkIfCoordsEmpty(posX, posY) {\r\n    const coords = posToCoords(posX, posY);\r\n    return (this.board[coords] && !this.board[coords].hasShip)\r\n  }\r\n\r\n  getShipPosFromOrientation(posX, posY, ship, orientation) {\r\n    let queue = [];\r\n    queue.push([posX, posY]);\r\n    for (let i = 1; i < ship.length; i++) {\r\n      if (orientation === 'up') {\r\n        posY--;\r\n      } else if (orientation === 'down') {\r\n        posY++;\r\n      } else if (orientation === 'left') {\r\n        posX--;\r\n      } else if (orientation === 'right') {\r\n        posX++;\r\n      }\r\n      if (posX > 0 && posY > 0 && posX < 11 && posY < 11) {\r\n        console.log(posX, posY);\r\n        console.log(this.checkIfCoordsEmpty(posX, posY));\r\n        if (this.checkIfCoordsEmpty(posX, posY) === true) {\r\n          queue.push([posX, posY]);\r\n        }\r\n      }\r\n    }\r\n    if (queue.length !== ship.length) {\r\n      throw new Error('No room');\r\n    }\r\n    while (queue.length > 0) {\r\n      let u = queue.shift();\r\n      let coords = posToCoords(u[0], u[1]);\r\n      this.board[coords].hasShip = ship;\r\n    }\r\n  }\r\n}\r\n\r\nfunction posToCoords(posX, posY) {\r\n  posX -= 1;\r\n  posY -= 1;\r\n  return posX + posY * 10;\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/gameboard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DOMinterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMinterface */ \"./src/DOMinterface.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\n\r\n(0,_DOMinterface__WEBPACK_IMPORTED_MODULE_0__.startGameBot)();\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/gameboard.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\r\n\r\n\r\nclass Player {\r\n  constructor(real, name) {\r\n    this.real = real;\r\n    if (real !== false) {\r\n      this.name = name;\r\n      this.placeStage = true;\r\n    } else {\r\n      this.name = 'Computer';\r\n      this.placeStage = false;\r\n    }\r\n    this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    this.ships = {\r\n      carrier: new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](5),\r\n      battleship: new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](4),\r\n      cruiser: new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\r\n      submarine: new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](3),\r\n      destroyer: new _ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"](2),\r\n    };\r\n  }\r\n\r\n  didAllShipsSink() {\r\n    if (\r\n      this.ships.carrier.sunk &&\r\n      this.ships.battleship.sunk &&\r\n      this.ships.cruiser.sunk &&\r\n      this.ships.submarine.sunk &&\r\n      this.ships.destroyer.sunk\r\n    ) {\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/player.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\r\n  constructor(length) {\r\n    this.length = length;\r\n    this.timesHit = 0;\r\n    this.sunk = false;\r\n  }\r\n\r\n  hit() {\r\n    this.timesHit += 1;\r\n    this.isSunk();\r\n    return this.timesHit;\r\n  }\r\n\r\n  isSunk() {\r\n    if (this.timesHit === this.length) return (this.sunk = true);\r\n  }\r\n\r\n  stats() {\r\n    return this.length + ` long, ` + this.timesHit + ` hit, sunk: ` + this.sunk;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://todolist/./src/ship.js?");

/***/ }),

/***/ "./src/images/arrow.svg":
/*!******************************!*\
  !*** ./src/images/arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4703be400bdcbfe8b6ad.svg\";\n\n//# sourceURL=webpack://todolist/./src/images/arrow.svg?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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