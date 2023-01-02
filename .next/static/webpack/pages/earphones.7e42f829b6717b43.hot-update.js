"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/earphones",{

/***/ "./pages/earphones/index.js":
/*!**********************************!*\
  !*** ./pages/earphones/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar EarPhones = function(param) {\n    var products = param.products;\n    var _this1 = _this;\n    _s();\n    var actualProducts = products.filter(function(item) {\n        return item.productType === \"earPhones\";\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pageProduktContainer\",\n        children: actualProducts.map(function(product) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: function() {\n                    return router.push(\"/product/\".concat(product.slug.current));\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"product-card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(product.image[0]),\n                            width: 250,\n                            height: 250,\n                            className: \"product-image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-name\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-price\",\n                                    children: [\n                                        \"€\",\n                                        product.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                                    lineNumber: 23,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-details\",\n                                    children: [\n                                        \" \",\n                                        product.details\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n                lineNumber: 13,\n                columnNumber: 11\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/earphones/index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, _this));\n};\n_s(EarPhones, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EarPhones;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EarPhones);\nvar _c;\n$RefreshReg$(_c, \"EarPhones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lYXJwaG9uZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2Q7QUFDd0I7OztBQUNqRCxHQUFLLENBQUNHLFNBQVMsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROzs7SUFDM0IsR0FBSyxDQUFDQyxjQUFjLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUNwQyxRQUFRLENBQVBDLElBQUk7UUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFXOztJQUU1QyxHQUFLLENBQUNDLE1BQU0sR0FBR1Qsc0RBQVM7SUFDeEIsTUFBTSw2RUFDSFUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0I7a0JBQ2xDTixjQUFjLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQ2hDLE1BQU0sNkVBQ0hILENBQUc7Z0JBQUNJLE9BQU8sRUFBRSxRQUFRO29CQUFGTCxNQUFNLENBQU5BLE1BQU0sQ0FBQ00sSUFBSSxDQUFFLENBQVMsV0FBdUIsT0FBckJGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxPQUFPOztzR0FDN0RQLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFjOztvR0FDMUJPLENBQUc7NEJBQ0ZDLEdBQUcsRUFBRWpCLG1EQUFNLENBQUNXLE9BQU8sQ0FBQ08sS0FBSyxDQUFDLENBQUM7NEJBQzNCQyxLQUFLLEVBQUUsR0FBRzs0QkFDVkMsTUFBTSxFQUFFLEdBQUc7NEJBQ1hYLFNBQVMsRUFBQyxDQUFlOzs7Ozs7b0dBRTFCRCxDQUFHOzs0R0FDRGEsQ0FBQztvQ0FBQ1osU0FBUyxFQUFDLENBQWM7OENBQUVFLE9BQU8sQ0FBQ1csSUFBSTs7Ozs7OzRHQUN4Q0QsQ0FBQztvQ0FBQ1osU0FBUyxFQUFDLENBQWU7O3dDQUFDLENBQUM7d0NBQUNFLE9BQU8sQ0FBQ1ksS0FBSzs7Ozs7Ozs0R0FDM0NGLENBQUM7b0NBQUNaLFNBQVMsRUFBQyxDQUFpQjs7d0NBQUMsQ0FBQzt3Q0FBQ0UsT0FBTyxDQUFDYSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFLMUQsQ0FBQzs7Ozs7O0FBR1AsQ0FBQztHQTVCS3ZCLFNBQVM7O1FBSUVILGtEQUFTOzs7S0FKcEJHLFNBQVM7O0FBOEJmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWFycGhvbmVzL2luZGV4LmpzPzU3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQsIHVybEZvciB9IGZyb20gXCIuLi8uLi9saWIvY2xpZW50XCI7XG5jb25zdCBFYXJQaG9uZXMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IGFjdHVhbFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBpdGVtLnByb2R1Y3RUeXBlID09PSBcImVhclBob25lc1wiXG4gICk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVByb2R1a3RDb250YWluZXJcIj5cbiAgICAgIHthY3R1YWxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Zy5jdXJyZW50fWApfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jYXJkXCI+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihwcm9kdWN0LmltYWdlWzBdKX1cbiAgICAgICAgICAgICAgICB3aWR0aD17MjUwfVxuICAgICAgICAgICAgICAgIGhlaWdodD17MjUwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2R1Y3QtaW1hZ2VcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntwcm9kdWN0Lm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj7igqx7cHJvZHVjdC5wcmljZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWxzXCI+IHtwcm9kdWN0LmRldGFpbHN9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFYXJQaG9uZXM7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoe30pID0+IHtcbiAgY29uc3QgcXVlcnkgPSAnKltfdHlwZT09XCJwcm9kdWN0XCJdJztcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICB9LFxuICB9O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVybEZvciIsIkVhclBob25lcyIsInByb2R1Y3RzIiwiYWN0dWFsUHJvZHVjdHMiLCJmaWx0ZXIiLCJpdGVtIiwicHJvZHVjdFR5cGUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0Iiwib25DbGljayIsInB1c2giLCJzbHVnIiwiY3VycmVudCIsImltZyIsInNyYyIsImltYWdlIiwid2lkdGgiLCJoZWlnaHQiLCJwIiwibmFtZSIsInByaWNlIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/earphones/index.js\n");

/***/ })

});