"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/others",{

/***/ "./pages/others/index.js":
/*!*******************************!*\
  !*** ./pages/others/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar HeadPhones = function(param) {\n    var products = param.products;\n    var _this1 = _this;\n    _s();\n    var actualProducts = products.filter(function(item) {\n        return item.productType !== \"SmartWatch\" && item.productType !== \"earPhones\" && item.productType !== \"HeadPhones\";\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"pageProduktContainer\",\n        children: actualProducts.map(function(product) {\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"product-card-page\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(product.image[0]),\n                            width: 250,\n                            height: 250,\n                            className: \"product-image\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                            lineNumber: 18,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"product-details-container\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-name\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"product-price\",\n                                    children: [\n                                        \"€\",\n                                        product.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 17\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                            lineNumber: 24,\n                            columnNumber: 15\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            className: \"product-detail-button\",\n                            onClick: function() {\n                                return router.push(\"/product/\".concat(product.slug.current));\n                            },\n                            children: \"See Product\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 15\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n                lineNumber: 16,\n                columnNumber: 11\n            }, _this1));\n        })\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/others/index.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this));\n};\n_s(HeadPhones, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HeadPhones;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeadPhones);\nvar _c;\n$RefreshReg$(_c, \"HeadPhones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vdGhlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ2Q7QUFDd0I7OztBQUNqRCxHQUFLLENBQUNHLFVBQVUsR0FBRyxRQUFRLFFBQVUsQ0FBQztRQUFoQkMsUUFBUSxTQUFSQSxRQUFROzs7SUFDNUIsR0FBSyxDQUFDQyxjQUFjLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUNwQyxRQUFRLENBQVBDLElBQUk7UUFDSEEsTUFBTSxDQUFOQSxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFZLGVBQ2pDRCxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFXLGNBQ2hDRCxJQUFJLENBQUNDLFdBQVcsS0FBSyxDQUFZOztJQUVyQyxHQUFLLENBQUNDLE1BQU0sR0FBR1Qsc0RBQVM7SUFDeEIsTUFBTSw2RUFDSFUsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBc0I7a0JBQ2xDTixjQUFjLENBQUNPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO1lBQ2hDLE1BQU0sNkVBQ0hILENBQUc7c0dBQ0RBLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFtQjs7b0dBQy9CRyxDQUFHOzRCQUNGQyxHQUFHLEVBQUViLG1EQUFNLENBQUNXLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLENBQUM7NEJBQzNCQyxLQUFLLEVBQUUsR0FBRzs0QkFDVkMsTUFBTSxFQUFFLEdBQUc7NEJBQ1hQLFNBQVMsRUFBQyxDQUFlOzs7Ozs7b0dBRTFCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMkI7OzRHQUN2Q1EsQ0FBQztvQ0FBQ1IsU0FBUyxFQUFDLENBQWM7OENBQUVFLE9BQU8sQ0FBQ08sSUFBSTs7Ozs7OzRHQUN4Q0QsQ0FBQztvQ0FBQ1IsU0FBUyxFQUFDLENBQWU7O3dDQUFDLENBQUM7d0NBQUNFLE9BQU8sQ0FBQ1EsS0FBSzs7Ozs7Ozs7Ozs7OztvR0FFN0NDLENBQU07NEJBQ0xDLElBQUksRUFBQyxDQUFROzRCQUNiWixTQUFTLEVBQUMsQ0FBdUI7NEJBQ2pDYSxPQUFPLEVBQUUsUUFBUTtnQ0FBRmYsTUFBTSxDQUFOQSxNQUFNLENBQUNnQixJQUFJLENBQUUsQ0FBUyxXQUF1QixPQUFyQlosT0FBTyxDQUFDYSxJQUFJLENBQUNDLE9BQU87O3NDQUM1RCxDQUVEOzs7Ozs7Ozs7Ozs7Ozs7OztRQUlSLENBQUM7Ozs7OztBQUdQLENBQUM7R0FyQ0t4QixVQUFVOztRQU9DSCxrREFBUzs7O0tBUHBCRyxVQUFVOztBQXVDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vdGhlcnMvaW5kZXguanM/YWZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcbmNvbnN0IEhlYWRQaG9uZXMgPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gIGNvbnN0IGFjdHVhbFByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKFxuICAgIChpdGVtKSA9PlxuICAgICAgaXRlbS5wcm9kdWN0VHlwZSAhPT0gXCJTbWFydFdhdGNoXCIgJiZcbiAgICAgIGl0ZW0ucHJvZHVjdFR5cGUgIT09IFwiZWFyUGhvbmVzXCIgJiZcbiAgICAgIGl0ZW0ucHJvZHVjdFR5cGUgIT09IFwiSGVhZFBob25lc1wiXG4gICk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVByb2R1a3RDb250YWluZXJcIj5cbiAgICAgIHthY3R1YWxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNhcmQtcGFnZVwiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IocHJvZHVjdC5pbWFnZVswXSl9XG4gICAgICAgICAgICAgICAgd2lkdGg9ezI1MH1cbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1MH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3Byb2R1Y3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1wcmljZVwiPuKCrHtwcm9kdWN0LnByaWNlfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1idXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdC8ke3Byb2R1Y3Quc2x1Zy5jdXJyZW50fWApfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU2VlIFByb2R1Y3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZFBob25lcztcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7fSkgPT4ge1xuICBjb25zdCBxdWVyeSA9ICcqW190eXBlPT1cInByb2R1Y3RcIl0nO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzLFxuICAgIH0sXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwidXJsRm9yIiwiSGVhZFBob25lcyIsInByb2R1Y3RzIiwiYWN0dWFsUHJvZHVjdHMiLCJmaWx0ZXIiLCJpdGVtIiwicHJvZHVjdFR5cGUiLCJyb3V0ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInAiLCJuYW1lIiwicHJpY2UiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInB1c2giLCJzbHVnIiwiY3VycmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/others/index.js\n");

/***/ })

});