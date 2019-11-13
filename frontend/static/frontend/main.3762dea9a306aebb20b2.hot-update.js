webpackHotUpdate("main",{

/***/ "./frontend/src/components/leads/Leads.js":
/*!************************************************!*\
  !*** ./frontend/src/components/leads/Leads.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _actions_leads__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/leads */ \"./frontend/src/actions/leads.js\");\n\n\n\n\n\nvar Leads = function Leads(_ref) {\n  var getLeads = _ref.getLeads;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    getLeads();\n  }, [getLeads]);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Leads List\"));\n};\n\nLeads.propTypes = {\n  getLeads: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"connect\"])(null, {\n  getLeads: _actions_leads__WEBPACK_IMPORTED_MODULE_3__[\"getLeads\"]\n})(Leads));\n\n//# sourceURL=webpack:///./frontend/src/components/leads/Leads.js?");

/***/ })

})