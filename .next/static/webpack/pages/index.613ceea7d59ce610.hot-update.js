"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/CartContext */ \"./store/CartContext.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var products = param.products, banner = param.banner;\n    var _this1 = _this;\n    _s();\n    var cartCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_3__.CartContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (true) {\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartCTX.cartItems));\n        } else {}\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.HeroBanner, {\n                heroBanner: banner.length && banner[0]\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-heading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Best Seller\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Products many variation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-container\",\n                children: products === null || products === void 0 ? void 0 : products.map(function(product) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 31,\n                        columnNumber: 18\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.FooterBanner, {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"l9FcekQebjL/tOB0cR9nayJD7PI=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFvRDtBQVU5QjtBQUM0Qjs7O0FBQ2xELEdBQUssQ0FBQ1csSUFBSSxHQUFHLFFBQVEsUUFBa0IsQ0FBQztRQUF4QkMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE1BQU0sU0FBTkEsTUFBTTs7O0lBQzlCLEdBQUssQ0FBQ0MsT0FBTyxHQUFHYixpREFBVSxDQUFDUywyREFBVztJQUN0Q1IsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1lBQ2xDYSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFXLFlBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSixPQUFPLENBQUNLLFNBQVM7UUFDcEUsQ0FBQyxNQUFNLEVBRU47SUFDSCxDQUFDO0lBQ0QsTUFBTTs7d0ZBRURaLG1EQUFVO2dCQUFDYyxVQUFVLEVBQUVSLE1BQU0sQ0FBQ1MsTUFBTSxJQUFJVCxNQUFNLENBQUMsQ0FBQzs7Ozs7O3dGQUNoRFUsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWtCOztnR0FDOUJDLENBQUU7a0NBQUMsQ0FBVzs7Ozs7O2dHQUNkQyxDQUFDO2tDQUFDLENBQXVCOzs7Ozs7Ozs7Ozs7d0ZBRTNCSCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBb0I7MEJBQ2hDWixRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxRQUFRLENBQUVlLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDO29CQUMzQixNQUFNLDZFQUFFekIsZ0RBQU87d0JBQWtCeUIsT0FBTyxFQUFFQSxPQUFPO3VCQUE1QkEsT0FBTyxDQUFDQyxFQUFFOzs7OztnQkFDakMsQ0FBQzs7Ozs7O3dGQUVGdkIscURBQVk7Ozs7Ozs7QUFHbkIsQ0FBQztHQXhCS0ssSUFBSTtLQUFKQSxJQUFJOztBQXFDViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIi4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIENhcnQsXG4gIEZvb3RlcixcbiAgRm9vdGVyQmFubmVyLFxuICBIZXJvQmFubmVyLFxuICBMYXlvdXQsXG4gIE5hdmJhcixcbn0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSBcIi4uL3N0b3JlL0NhcnRDb250ZXh0XCI7XG5jb25zdCBIb21lID0gKHsgcHJvZHVjdHMsIGJhbm5lciB9KSA9PiB7XG4gIGNvbnN0IGNhcnRDVFggPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydENUWC5jYXJ0SXRlbXMpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2F2ZWRDYXJ0KG51bGwpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZXJvQmFubmVyIGhlcm9CYW5uZXI9e2Jhbm5lci5sZW5ndGggJiYgYmFubmVyWzBdfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1oZWFkaW5nXCI+XG4gICAgICAgIDxoMj5CZXN0IFNlbGxlcjwvaDI+XG4gICAgICAgIDxwPlByb2R1Y3RzIG1hbnkgdmFyaWF0aW9uPC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWNvbnRhaW5lclwiPlxuICAgICAgICB7cHJvZHVjdHM/Lm1hcCgocHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHJldHVybiA8UHJvZHVjdCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlckJhbm5lciAvPlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gJypbX3R5cGU9PVwicHJvZHVjdFwiXSc7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5KTtcbiAgY29uc3QgYmFubmVyUXVlcnkgPSAnKltfdHlwZT09XCJiYW5uZXJcIl0nO1xuICBjb25zdCBiYW5uZXIgPSBhd2FpdCBjbGllbnQuZmV0Y2goYmFubmVyUXVlcnkpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIGJhbm5lcixcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwiUHJvZHVjdCIsIkNhcnQiLCJGb290ZXIiLCJGb290ZXJCYW5uZXIiLCJIZXJvQmFubmVyIiwiTGF5b3V0IiwiTmF2YmFyIiwiQ2FydENvbnRleHQiLCJIb21lIiwicHJvZHVjdHMiLCJiYW5uZXIiLCJjYXJ0Q1RYIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjYXJ0SXRlbXMiLCJzZXRTYXZlZENhcnQiLCJoZXJvQmFubmVyIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwibWFwIiwicHJvZHVjdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});