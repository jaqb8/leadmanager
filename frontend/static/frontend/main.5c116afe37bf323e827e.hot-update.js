webpackHotUpdate("main",{

/***/ "./frontend/src/components/leads/Form.js":
/*!***********************************************!*\
  !*** ./frontend/src/components/leads/Form.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_leads__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/leads */ \"./frontend/src/actions/leads.js\");\nvar _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar Form = function Form() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: \"\",\n    email: \"\",\n    message: \"\"\n  }),\n      _useState2 = _slicedToArray(_useState, 2),\n      formData = _useState2[0],\n      setFormData = _useState2[1];\n\n  var name = formData.name,\n      email = formData.email,\n      message = formData.message;\n\n  var onSubmit = function onSubmit(e) {\n    e.preventDefault(); // addLead(formData);\n  };\n\n  var onChange = function onChange(e) {\n    setFormData(_objectSpread({}, formData, _defineProperty({}, e.target.name, e.targer.value)));\n  };\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card card-body mt-4 mb-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Add Lead\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: _this.onSubmit\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Name\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-control\",\n    type: \"text\",\n    name: \"name\",\n    onChange: _this.onChange,\n    value: name\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Email\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"form-control\",\n    type: \"email\",\n    name: \"email\",\n    onChange: _this.onChange,\n    value: email\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", null, \"Message\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"textarea\", {\n    className: \"form-control\",\n    type: \"text\",\n    name: \"message\",\n    onChange: _this.onChange,\n    value: message\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"form-group\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\"\n  }, \"Submit\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Form);\n\n//# sourceURL=webpack:///./frontend/src/components/leads/Form.js?");

/***/ })

})