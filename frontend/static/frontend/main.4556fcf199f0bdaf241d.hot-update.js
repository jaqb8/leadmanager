webpackHotUpdate("main",{

/***/ "./frontend/src/components/layout/Alert.js":
/*!*************************************************!*\
  !*** ./frontend/src/components/layout/Alert.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-alert */ \"./node_modules/react-alert/dist/esm/react-alert.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar Alert = function Alert(_ref) {\n  var error = _ref.error;\n  var alert = Object(react_alert__WEBPACK_IMPORTED_MODULE_1__[\"useAlert\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (error.status !== null) {\n      alert.error('There is an error!');\n    }\n  }, [error]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], null);\n};\n\nAlert.propTypes = {\n  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    error: state.errors\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps)(Alert));\n\n//# sourceURL=webpack:///./frontend/src/components/layout/Alert.js?");

/***/ })

})