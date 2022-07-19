/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/\",\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n  path: \"/login\",\n  element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_containers_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null)\n}))));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUm91dGVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL1JvdXRlcy5qcz80MTk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBSb3V0ZSxSb3V0ZXMgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBIb21lIGZyb20gXCIuL2NvbnRhaW5lcnMvSG9tZVwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vY29udGFpbmVycy9Mb2dpblwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcblx0PGRpdj5cclxuXHRcdDxSb3V0ZXM+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPVwiL1wiICBlbGVtZW50PXs8SG9tZS8+fS8+XHJcblx0XHRcdDxSb3V0ZSBwYXRoPVwiL2xvZ2luXCIgIGVsZW1lbnQ9ezxMb2dpbi8+fS8+XHJcblx0XHQ8L1JvdXRlcz5cclxuXHQ8L2Rpdj5cclxuKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Routes.js\n");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/\"\n  }, \"Home\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    to: \"/login\"\n  }, \"login\"));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzP2FkOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcblx0cmV0dXJuIDxkaXY+XHJcblx0XHQ8TGluayB0bz17XCIvXCJ9PkhvbWU8L0xpbms+XHJcblx0XHQ8YnIvPlxyXG5cdFx0PExpbmsgdG89e1wiL2xvZ2luXCJ9PmxvZ2luPC9MaW5rPlxyXG5cdDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.js\n");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/action */ \"./src/containers/Home/store/action.js\");\n\n\n\n\n\nvar Home = function Home() {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,_store_action__WEBPACK_IMPORTED_MODULE_3__.getHomeList)(dispatch);\n  }, []);\n  var name = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.home.name;\n  });\n  var list = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {\n    return state.home.list;\n  });\n  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"this is \", name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: function onClick() {\n      return alert(\"click1\");\n    }\n  }, \"btn\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", null, list.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBSUE7O0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udGFpbmVycy9Ib21lL2luZGV4LmpzPzg3YmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0hlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZ2V0SG9tZUxpc3QgfSBmcm9tIFwiLi9zdG9yZS9hY3Rpb25cIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGdldEhvbWVMaXN0KGRpc3BhdGNoKVxyXG5cdH0sW10pXHJcblxyXG5cdGNvbnN0IG5hbWUgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ob21lLm5hbWUpO1xyXG5cdGNvbnN0IGxpc3QgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5ob21lLmxpc3QpXHJcblx0Y29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cdHJldHVybiA8ZGl2PlxyXG5cdFx0PEhlYWRlci8+XHJcblx0XHQ8ZGl2PnRoaXMgaXMge25hbWV9PC9kaXY+XHJcblx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGFsZXJ0KFwiY2xpY2sxXCIpfT5idG48L2J1dHRvbj5cclxuXHRcdDx1bD5cclxuXHRcdFx0e1xyXG5cdFx0XHRcdCBsaXN0Lm1hcChpdGVtID0+IHtcclxuXHRcdFx0XHQgXHRyZXR1cm4gPGxpIGtleT17aXRlbS5pZH0+e2l0ZW0ubmFtZX08L2xpPlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdDwvdWw+XHJcblx0PC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Home/index.js\n");

/***/ }),

/***/ "./src/containers/Home/store/action.js":
/*!*********************************************!*\
  !*** ./src/containers/Home/store/action.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHomeList\": () => (/* binding */ getHomeList)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\n\n\n\nvar ChangeList = function ChangeList(list) {\n  return {\n    type: _constants__WEBPACK_IMPORTED_MODULE_1__.CHANGE_LIST,\n    list: list\n  };\n};\n\nvar getHomeList = function getHomeList(dispatch) {\n  axios__WEBPACK_IMPORTED_MODULE_0___default().get(\"home.json\").then(function (res) {\n    var list = res.data.data.hotMovieList;\n    dispatch(ChangeList(list));\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2FjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL2NvbnRhaW5lcnMvSG9tZS9zdG9yZS9hY3Rpb24uanM/MDVhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcclxuaW1wb3J0IHsgQ0hBTkdFX0xJU1QgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcclxuXHJcbmNvbnN0IENoYW5nZUxpc3QgPSAobGlzdCkgPT4gKHtcclxuXHR0eXBlOkNIQU5HRV9MSVNULFxyXG5cdGxpc3RcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRIb21lTGlzdCA9IChkaXNwYXRjaCkgPT4ge1xyXG5cdFx0YXhpb3MuZ2V0KFwiaG9tZS5qc29uXCIpXHJcblx0XHRcdC50aGVuKChyZXMpID0+IHtcclxuXHRcdFx0XHRjb25zdCBsaXN0ID0gcmVzLmRhdGEuZGF0YS5ob3RNb3ZpZUxpc3RcclxuXHRcdFx0XHRkaXNwYXRjaChDaGFuZ2VMaXN0KGxpc3QpKVxyXG5cdFx0XHR9KVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Home/store/action.js\n");

/***/ }),

/***/ "./src/containers/Home/store/constants.js":
/*!************************************************!*\
  !*** ./src/containers/Home/store/constants.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CHANGE_LIST\": () => (/* binding */ CHANGE_LIST)\n/* harmony export */ });\nvar CHANGE_LIST = \"HOME/CHANGE_LIST\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2NvbnN0YW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2NvbnN0YW50cy5qcz82YTdiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDSEFOR0VfTElTVCA9IFwiSE9NRS9DSEFOR0VfTElTVFwiXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/containers/Home/store/constants.js\n");

/***/ }),

/***/ "./src/containers/Home/store/index.js":
/*!********************************************!*\
  !*** ./src/containers/Home/store/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reducer\": () => (/* reexport safe */ _reducer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ \"./src/containers/Home/store/reducer.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL2luZGV4LmpzPzc1YTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4vcmVkdWNlclwiXHJcblxyXG5leHBvcnQgeyByZWR1Y2VyIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Home/store/index.js\n");

/***/ }),

/***/ "./src/containers/Home/store/reducer.js":
/*!**********************************************!*\
  !*** ./src/containers/Home/store/reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./src/containers/Home/store/constants.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nvar defaultState = {\n  name: \"dell\",\n  list: []\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _constants__WEBPACK_IMPORTED_MODULE_0__.CHANGE_LIST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        list: action.list\n      });\n\n    default:\n      return state;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL3JlZHVjZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7O0FBSUE7QUFDQTtBQVBBO0FBU0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udGFpbmVycy9Ib21lL3N0b3JlL3JlZHVjZXIuanM/ZjEwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDSEFOR0VfTElTVCB9IGZyb20gXCIuL2NvbnN0YW50c1wiXHJcblxyXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcblx0bmFtZTpcImRlbGxcIixcclxuXHRsaXN0OiBbXVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGRlZmF1bHRTdGF0ZSxhY3Rpb24pID0+IHtcclxuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKXtcclxuXHRcdGNhc2UgQ0hBTkdFX0xJU1Q6XHJcblx0XHRcdCByZXR1cm4ge1xyXG5cdFx0XHRcdC4uLnN0YXRlLFxyXG5cdFx0XHRcdGxpc3Q6YWN0aW9uLmxpc3RcclxuXHRcdFx0fVxyXG5cdFx0ZGVmYXVsdDpcclxuXHRcdFx0cmV0dXJuIHN0YXRlO1xyXG5cdH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/Home/store/reducer.js\n");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Login = function Login() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Login\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9Mb2dpbi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFFQTtBQUNBO0FBR0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXIvLi9zcmMvY29udGFpbmVycy9Mb2dpbi9pbmRleC5qcz82ODU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblx0cmV0dXJuKFxyXG5cdFx0PGRpdj5Mb2dpbjwvZGl2PlxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Login/index.js\n");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/server/utils.js\");\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](\"public\"));\napp.get(\"*\", function (req, res) {\n  res.send((0,_utils__WEBPACK_IMPORTED_MODULE_1__.render)(req));\n});\nvar server = app.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL3NlcnZlci9pbmRleC5qcz9hZjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCJcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vdXRpbHNcIlxyXG5cclxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xyXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKFwicHVibGljXCIpKTtcclxuXHJcbmFwcC5nZXQoXCIqXCIsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xyXG5cdHJlcy5zZW5kKHJlbmRlcihyZXEpKVxyXG59KVxyXG5cclxubGV0IHNlcnZlciA9IGFwcC5saXN0ZW4oMzAwMCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/index.js\n");

/***/ }),

/***/ "./src/server/utils.js":
/*!*****************************!*\
  !*** ./src/server/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\n\n\n\n\n\nvar render = function render(req) {\n  var store = (0,_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(react_router_dom_server__WEBPACK_IMPORTED_MODULE_1__.StaticRouter, {\n    location: req.path\n  }, _Routes__WEBPACK_IMPORTED_MODULE_2__[\"default\"])));\n  return \"\\n\\t\\t<html>\\n\\t\\t<head>\\n\\t\\t\\t<title>ssr</title>\\n\\t\\t</head>\\n\\t\\t<body>\\n\\t\\t\\t<div id=\\\"root\\\">\".concat(content, \"</div>\\t\\t\\t\\t\\n\\t\\t\\t<script src=\\\"/index.js\\\"></script>\\n\\t\\t</body>\\n\\t\\t</html>\\n\\t\\t\");\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyL3V0aWxzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFNQTtBQWFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL3NlcnZlci91dGlscy5qcz9iNGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cmVuZGVyVG9TdHJpbmd9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XHJcbmltcG9ydCB7U3RhdGljUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbS9zZXJ2ZXJcIjtcclxuaW1wb3J0IFJvdXRlcyBmcm9tIFwiLi4vUm91dGVzXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgZ2V0U3RvcmUgZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyID0gKHJlcSkgPT4ge1xyXG5cclxuXHRjb25zdCBzdG9yZSA9IGdldFN0b3JlKClcclxuXHJcblx0Y29uc3QgY29udGVudCA9IHJlbmRlclRvU3RyaW5nKChcclxuXHRcdDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG5cdFx0XHQ8U3RhdGljUm91dGVyIGxvY2F0aW9uPXtyZXEucGF0aH0gPlxyXG5cdFx0XHRcdHtSb3V0ZXN9XHJcblx0XHRcdDwvU3RhdGljUm91dGVyPlxyXG5cdFx0PC9Qcm92aWRlcj5cclxuXHQpKVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0YFxyXG5cdFx0PGh0bWw+XHJcblx0XHQ8aGVhZD5cclxuXHRcdFx0PHRpdGxlPnNzcjwvdGl0bGU+XHJcblx0XHQ8L2hlYWQ+XHJcblx0XHQ8Ym9keT5cclxuXHRcdFx0PGRpdiBpZD1cInJvb3RcIj4ke2NvbnRlbnR9PC9kaXY+XHRcdFx0XHRcclxuXHRcdFx0PHNjcmlwdCBzcmM9XCIvaW5kZXguanNcIj48L3NjcmlwdD5cclxuXHRcdDwvYm9keT5cclxuXHRcdDwvaHRtbD5cclxuXHRcdGBcclxuXHQpXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/server/utils.js\n");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/Home/store */ \"./src/containers/Home/store/index.js\");\n\n\n\nvar reducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n  home: _containers_Home_store__WEBPACK_IMPORTED_MODULE_2__.reducer\n});\n\nvar getStore = function getStore() {\n  //这里是为了防止所有用户都使用同一个store\n  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_0___default())));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStore);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFDQTtBQUNBOztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLy4vc3JjL3N0b3JlL2luZGV4LmpzPzQzNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSxhcHBseU1pZGRsZXdhcmUsY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHJlZHVjZXIgYXMgaG9tZVJlZHVjZXIgfSBmcm9tIFwiLi4vY29udGFpbmVycy9Ib21lL3N0b3JlXCI7XHJcblxyXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuXHRob21lOmhvbWVSZWR1Y2VyLFxyXG59KVxyXG5jb25zdCBnZXRTdG9yZSA9ICgpID0+IHsgICAgICAgICAgICAgICAgICAvL+i/memHjOaYr+S4uuS6humYsuatouaJgOacieeUqOaIt+mDveS9v+eUqOWQjOS4gOS4qnN0b3JlXHJcblx0cmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsYXBwbHlNaWRkbGV3YXJlKHRodW5rKSk7XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0U3RvcmVcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/index.js");
/******/ 	
/******/ })()
;