"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[slug]",{

/***/ "./pages/product/[slug].js":
/*!*********************************!*\
  !*** ./pages/product/[slug].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"getStaticPath\": function() { return /* binding */ getStaticPath; }\n/* harmony export */ });\n/* harmony import */ var _Users_admin_Desktop_eCommerce_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_admin_Desktop_eCommerce_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_admin_Desktop_eCommerce_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"product-detail-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"image-container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image[0])\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 10,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                    lineNumber: 9,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = ProductDetails;\nvar __N_SSG = true;\nvar getStaticPath = function() {\n    var _ref = _asyncToGenerator(_Users_admin_Desktop_eCommerce_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var query;\n        return _Users_admin_Desktop_eCommerce_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    query = \"*[_type==\\\"product\\\"]{\\n    slug{\\n\\n    }\\n  }\\n\";\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getStaticPath() {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUN3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNqRCxHQUFLLENBQUNFLGNBQWMsR0FBRyxRQUFRLFFBQW1CLENBQUM7UUFBekJDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7SUFDekMsR0FBSyxDQUFHQyxLQUFLLEdBQTJCRixPQUFPLENBQXZDRSxLQUFLLEVBQUVDLElBQUksR0FBcUJILE9BQU8sQ0FBaENHLElBQUksRUFBRUMsT0FBTyxHQUFZSixPQUFPLENBQTFCSSxPQUFPLEVBQUVDLEtBQUssR0FBS0wsT0FBTyxDQUFqQkssS0FBSztJQUNuQyxNQUFNLDZFQUNIQyxDQUFHOzhGQUNEQSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUEwQjtrR0FDdENELENBQUc7c0dBQ0RBLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUFpQjswR0FDN0JDLENBQUc7d0JBQUNDLEdBQUcsRUFBRVgsbURBQU0sQ0FBQ0ksS0FBSyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7S0FiS0gsY0FBYzs7QUFjYixHQUFLLENBQUNXLGFBQWE7bUxBQUcsUUFBUSxXQUFJLENBQUM7WUFDbENDLEtBQUs7Ozs7b0JBQUxBLEtBQUssR0FBSSxDQUtqQjs7Ozs7O0lBQ0EsQ0FBQztvQkFQWUQsYUFBYTs7OztBQXFCMUIsK0RBQWVYLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCB7IGltYWdlLCBuYW1lLCBkZXRhaWxzLCBwcmljZSB9ID0gcHJvZHVjdDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZVswXSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGggPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGU9PVwicHJvZHVjdFwiXXtcbiAgICBzbHVne1xuXG4gICAgfVxuICB9XG5gXG59O1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1ldGVyczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlPT1cInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQ9PScke3NsdWd9J11bMF1gO1xuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gJypbX3R5cGU9PVwicHJvZHVjdFwiXSc7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVybEZvciIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiaW1hZ2UiLCJuYW1lIiwiZGV0YWlscyIsInByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiZ2V0U3RhdGljUGF0aCIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});