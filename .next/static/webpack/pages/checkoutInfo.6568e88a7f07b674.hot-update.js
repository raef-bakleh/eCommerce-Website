"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkoutInfo",{

/***/ "./components/CheckoutInfo.jsx":
/*!*************************************!*\
  !*** ./components/CheckoutInfo.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/CartContext */ \"./store/CartContext.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar CheckoutInfo = function() {\n    var _this1 = _this;\n    _s();\n    var cartCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_3__.Context);\n    console.log(cartCTX.cartItems);\n    var shippingCost = \"4.99\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"checkoutInfo\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"summary\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"SUMMARY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"orderedProducts\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: cartCTX.cartItems.map(function(items) {\n                                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(items.image[0])\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: items.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: items.price\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 20,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            children: items.qun\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 21,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            children: \" TOTAL\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                            lineNumber: 24,\n                                                            columnNumber: 23\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            children: cartCTX.totalPrice\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                            lineNumber: 25,\n                                                            columnNumber: 23\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                    lineNumber: 23,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            children: \"SHIPPING\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                            lineNumber: 28,\n                                                            columnNumber: 23\n                                                        }, _this1),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                            children: [\n                                                                \"€\",\n                                                                shippingCost\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                            lineNumber: 29,\n                                                            columnNumber: 23\n                                                        }, _this1)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                    lineNumber: 27,\n                                                    columnNumber: 21\n                                                }, _this1),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                        children: \"TOTA\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                        lineNumber: 32,\n                                                        columnNumber: 25\n                                                    }, _this1)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 21\n                                                }, _this1)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 22,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            children: \"CONTINUE & PAY\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 17\n                                }, _this1));\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"checkoutDetail\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/CheckoutInfo.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(CheckoutInfo, \"zNqVLZ+3s3J3Hirs4q3q2OQjRqM=\");\n_c = CheckoutInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckoutInfo);\nvar _c;\n$RefreshReg$(_c, \"CheckoutInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrb3V0SW5mby5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7QUFDSDtBQUNROzs7QUFFOUMsR0FBSyxDQUFDSSxZQUFZLEdBQUcsUUFDckIsR0FEMkIsQ0FBQzs7O0lBQzFCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHSixpREFBVSxDQUFDRSx1REFBTztJQUNsQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csU0FBUztJQUM3QixHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFNO0lBQzNCLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7O3dGQUMxQkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQVM7O2dHQUNyQkMsQ0FBRTtrQ0FBQyxDQUFPOzs7Ozs7Z0dBQ1ZGLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs4R0FDN0JELENBQUc7c0NBQ0RMLE9BQU8sQ0FBQ0csU0FBUyxDQUFDSyxHQUFHLENBQUMsUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQztnQ0FDakMsTUFBTSw2RUFDSEosQ0FBRzs7b0hBQ0RLLENBQUc7NENBQUNDLEdBQUcsRUFBRWQsbURBQU0sQ0FBQ1ksS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQzs7Ozs7O29IQUM3QkMsQ0FBQztzREFBRUosS0FBSyxDQUFDSyxJQUFJOzs7Ozs7b0hBQ2JELENBQUM7c0RBQUVKLEtBQUssQ0FBQ00sS0FBSzs7Ozs7O29IQUNkUixDQUFFO3NEQUFFRSxLQUFLLENBQUNPLEdBQUc7Ozs7OztvSEFDYkMsQ0FBSzs7NEhBQ0hDLENBQUU7O29JQUNBQyxDQUFFO3NFQUFDLENBQU07Ozs7OztvSUFDVEEsQ0FBRTtzRUFBRW5CLE9BQU8sQ0FBQ29CLFVBQVU7Ozs7Ozs7Ozs7Ozs0SEFFeEJGLENBQUU7O29JQUNBQyxDQUFFO3NFQUFDLENBQVE7Ozs7OztvSUFDWEEsQ0FBRTs7Z0VBQUMsQ0FBQztnRUFBQ2YsWUFBWTs7Ozs7Ozs7Ozs7Ozs0SEFFbkJjLENBQUU7MElBQ0VDLENBQUU7a0VBQUMsQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0hBR2JFLENBQU07NENBQUNDLElBQUksRUFBQyxDQUFRO3NEQUFDLENBQWM7Ozs7Ozs7Ozs7Ozs0QkFHMUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSU5qQixDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7OztBQUdyQyxDQUFDO0dBeENLUCxZQUFZO0tBQVpBLFlBQVk7QUEwQ2xCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dEluZm8uanN4P2FjNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVybEZvciB9IGZyb20gXCIuLi9saWIvY2xpZW50XCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL3N0b3JlL0NhcnRDb250ZXh0XCI7XG5cbmNvbnN0IENoZWNrb3V0SW5mbyA9ICgpID0+IHtcbiAgY29uc3QgY2FydENUWCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnNvbGUubG9nKGNhcnRDVFguY2FydEl0ZW1zKTtcbiAgY29uc3Qgc2hpcHBpbmdDb3N0ID0gXCI0Ljk5XCI7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dEluZm9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VtbWFyeVwiPlxuICAgICAgICA8aDE+U1VNTUFSWTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JkZXJlZFByb2R1Y3RzXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtjYXJ0Q1RYLmNhcnRJdGVtcy5tYXAoKGl0ZW1zKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaXRlbXMuaW1hZ2VbMF0pfSAvPlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1zLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e2l0ZW1zLnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxoMT57aXRlbXMucXVufTwvaDE+XG4gICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+IFRPVEFMPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+e2NhcnRDVFgudG90YWxQcmljZX08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoPlNISVBQSU5HPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8dGg+4oKse3NoaXBwaW5nQ29zdH08L3RoPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+VE9UQTwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+Q09OVElOVUUgJiBQQVk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dERldGFpbFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXRJbmZvO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVybEZvciIsIkNvbnRleHQiLCJDaGVja291dEluZm8iLCJjYXJ0Q1RYIiwiY29uc29sZSIsImxvZyIsImNhcnRJdGVtcyIsInNoaXBwaW5nQ29zdCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibWFwIiwiaXRlbXMiLCJpbWciLCJzcmMiLCJpbWFnZSIsInAiLCJuYW1lIiwicHJpY2UiLCJxdW4iLCJ0YWJsZSIsInRyIiwidGgiLCJ0b3RhbFByaWNlIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CheckoutInfo.jsx\n");

/***/ })

});