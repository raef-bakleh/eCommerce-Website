/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fadmin%2FDesktop%2FeCommerce-Website%2Fpages%2Findex.js!":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fadmin%2FDesktop%2FeCommerce-Website%2Fpages%2Findex.js! ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmFkbWluJTJGRGVza3RvcCUyRmVDb21tZXJjZS1XZWJzaXRlJTJGcGFnZXMlMkZpbmRleC5qcyEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQywwQ0FBa0I7QUFDekM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvPzY5ZDUiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfUC5wdXNoKFtcIi9cIl0pXG4gICAgICB9KTtcbiAgICB9XG4gICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fadmin%2FDesktop%2FeCommerce-Website%2Fpages%2Findex.js!\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Sidebar */ \"./components/Sidebar.jsx\");\n/* harmony import */ var _store_AuthCTX__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/AuthCTX */ \"./store/AuthCTX.js\");\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var products = param.products, banner = param.banner;\n    var _this1 = _this;\n    _s();\n    var authCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_AuthCTX__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    console.log(authCTX.isLoggedIn);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.HeroBanner, {\n                heroBanner: banner.length && banner[0]\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-heading\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Best Seller\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Products many variation\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"products-container\",\n                children: products === null || products === void 0 ? void 0 : products.map(function(product) {\n                    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.Product, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 18\n                    }, _this1));\n                })\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.FooterBanner, {}, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"78ZAlJ+FC2Qb/dhjeQ97c4ALhuA=\");\n_c = Home;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEQ7QUFFRztBQUN0QjtBQUNEOzs7QUFDMUMsR0FBSyxDQUFDUyxJQUFJLEdBQUcsUUFBUSxRQUFrQixDQUFDO1FBQXhCQyxRQUFRLFNBQVJBLFFBQVEsRUFBRUMsTUFBTSxTQUFOQSxNQUFNOzs7SUFDOUIsR0FBSyxDQUFDQyxPQUFPLEdBQUdYLGlEQUFVLENBQUNPLHNEQUFXO0lBQ3RDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxVQUFVO0lBRTlCLE1BQU07O3dGQUVEVCxtREFBVTtnQkFBQ1UsVUFBVSxFQUFFTCxNQUFNLENBQUNNLE1BQU0sSUFBSU4sTUFBTSxDQUFDLENBQUM7Ozs7Ozt3RkFDaERPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFrQjs7Z0dBQzlCQyxDQUFFO2tDQUFDLENBQVc7Ozs7OztnR0FDZEMsQ0FBQztrQ0FBQyxDQUF1Qjs7Ozs7Ozs7Ozs7O3dGQUUzQkgsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQW9COzBCQUNoQ1QsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBYSxHQUFiQSxJQUFJLENBQUpBLENBQWEsR0FBYkEsUUFBUSxDQUFFWSxHQUFHLENBQUMsUUFBUSxDQUFQQyxPQUFPLEVBQUssQ0FBQztvQkFDM0IsTUFBTSw2RUFBRW5CLGdEQUFPO3dCQUFrQm1CLE9BQU8sRUFBRUEsT0FBTzt1QkFBNUJBLE9BQU8sQ0FBQ0MsRUFBRTs7Ozs7Z0JBQ2pDLENBQUM7Ozs7Ozt3RkFFRm5CLHFEQUFZOzs7Ozs7O0FBR25CLENBQUM7R0FuQktJLElBQUk7S0FBSkEsSUFBSTs7QUFpQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tIFwiLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IHsgUHJvZHVjdCwgRm9vdGVyQmFubmVyLCBIZXJvQmFubmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHNcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuLi9jb21wb25lbnRzL1NpZGViYXJcIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vc3RvcmUvQXV0aENUWFwiO1xuY29uc3QgSG9tZSA9ICh7IHByb2R1Y3RzLCBiYW5uZXIgfSkgPT4ge1xuICBjb25zdCBhdXRoQ1RYID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XG4gIGNvbnNvbGUubG9nKGF1dGhDVFguaXNMb2dnZWRJbik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlcm9CYW5uZXIgaGVyb0Jhbm5lcj17YmFubmVyLmxlbmd0aCAmJiBiYW5uZXJbMF19IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RzLWhlYWRpbmdcIj5cbiAgICAgICAgPGgyPkJlc3QgU2VsbGVyPC9oMj5cbiAgICAgICAgPHA+UHJvZHVjdHMgbWFueSB2YXJpYXRpb248L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHtwcm9kdWN0cz8ubWFwKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgICA8Rm9vdGVyQmFubmVyIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9ICcqW190eXBlPT1cInByb2R1Y3RcIl0nO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gIGNvbnN0IGJhbm5lclF1ZXJ5ID0gJypbX3R5cGU9PVwiYmFubmVyXCJdJztcbiAgY29uc3QgYmFubmVyID0gYXdhaXQgY2xpZW50LmZldGNoKGJhbm5lclF1ZXJ5KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdHMsXG4gICAgICBiYW5uZXIsXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdCIsIkZvb3RlckJhbm5lciIsIkhlcm9CYW5uZXIiLCJTaWRlYmFyIiwiQXV0aENvbnRleHQiLCJIb21lIiwicHJvZHVjdHMiLCJiYW5uZXIiLCJhdXRoQ1RYIiwiY29uc29sZSIsImxvZyIsImlzTG9nZ2VkSW4iLCJoZXJvQmFubmVyIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJwIiwibWFwIiwicHJvZHVjdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fadmin%2FDesktop%2FeCommerce-Website%2Fpages%2Findex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);