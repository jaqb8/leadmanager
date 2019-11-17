webpackHotUpdate("main",{

/***/ "./frontend/src/actions/leads.js":
/*!***************************************!*\
  !*** ./frontend/src/actions/leads.js ***!
  \***************************************/
/*! exports provided: getLeads, deleteLead, addLead */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLeads\", function() { return getLeads; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteLead\", function() { return deleteLead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addLead\", function() { return addLead; });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./frontend/src/actions/types.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/stable */ \"./node_modules/core-js/stable/index.js\");\n/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ \"./frontend/src/actions/messages.js\");\n\n\n\n\n // Get Leads\n\nvar getLeads = function getLeads() {\n  return function _callee(dispatch) {\n    var res;\n    return regeneratorRuntime.async(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/leads'));\n\n          case 3:\n            res = _context.sent;\n            dispatch({\n              type: _types__WEBPACK_IMPORTED_MODULE_0__[\"GET_LEADS\"],\n              payload: res.data\n            });\n            _context.next = 10;\n            break;\n\n          case 7:\n            _context.prev = 7;\n            _context.t0 = _context[\"catch\"](0);\n            dispatch(Object(_messages__WEBPACK_IMPORTED_MODULE_4__[\"returnErrors\"])(_context.t0.response.data, _context.t0.response.status));\n\n          case 10:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, null, null, [[0, 7]]);\n  };\n}; // Delete Lead\n\nvar deleteLead = function deleteLead(id) {\n  return function _callee2(dispatch) {\n    return regeneratorRuntime.async(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a[\"delete\"](\"api/leads/\".concat(id)));\n\n          case 3:\n            dispatch(Object(_messages__WEBPACK_IMPORTED_MODULE_4__[\"createMessage\"])({\n              deleteLead: 'Lead Deleted'\n            }));\n            dispatch({\n              type: _types__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_LEAD\"],\n              payload: id\n            });\n            _context2.next = 10;\n            break;\n\n          case 7:\n            _context2.prev = 7;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.error(_context2.t0);\n\n          case 10:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, null, null, [[0, 7]]);\n  };\n}; // Add Lead\n\nvar addLead = function addLead(formData) {\n  return function _callee3(dispatch) {\n    var config, res;\n    return regeneratorRuntime.async(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            config = {\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            };\n            _context3.prev = 1;\n            _context3.next = 4;\n            return regeneratorRuntime.awrap(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/leads/', formData, config));\n\n          case 4:\n            res = _context3.sent;\n            dispatch(Object(_messages__WEBPACK_IMPORTED_MODULE_4__[\"createMessage\"])({\n              addLead: 'Lead Added'\n            }));\n            dispatch({\n              type: _types__WEBPACK_IMPORTED_MODULE_0__[\"ADD_LEAD\"],\n              payload: res.data\n            });\n            _context3.next = 12;\n            break;\n\n          case 9:\n            _context3.prev = 9;\n            _context3.t0 = _context3[\"catch\"](1);\n            dispatch(Object(_messages__WEBPACK_IMPORTED_MODULE_4__[\"returnErrors\"])(_context3.t0.response.data, _context3.t0.response.status));\n\n          case 12:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, null, null, [[1, 9]]);\n  };\n};\n\n//# sourceURL=webpack:///./frontend/src/actions/leads.js?");

/***/ })

})