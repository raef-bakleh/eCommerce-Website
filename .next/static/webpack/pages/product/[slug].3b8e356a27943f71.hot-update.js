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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product */ \"./components/Product.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/CartContext */ \"./store/CartContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var cartCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_4__.Context);\n    {\n        console.log(cartCTX.cartItems);\n    }\n    var image = product.image, name = product.name, details = product.details, price = product.price, qun = product.qun, slug = product.slug;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index1 = ref[0], setIndex = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image[index1]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image.map(function(item, index) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(item),\n                                        className: index === index ? \"small-image selected-image\" : \"small-image\",\n                                        onMouseEnter: function() {\n                                            setIndex(index);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 29,\n                                        columnNumber: 15\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 27,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 46,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 47,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 48,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 49,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 44,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: 20\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"€\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantitiy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: cartCTX.decrement,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 59,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onClick: \"\",\n                                                children: cartCTX.qun\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 61,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: cartCTX.increment,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 64,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 57,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: function() {\n                                            cartCTX.onAddHandler(product, cartCTX.qun);\n                                        },\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 70,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 79,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"May Also Like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    product: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductDetails, \"CvY4eCaM0eq1rlRHf1mxIiHSx4Y=\");\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLENBQUMwQixTQUFTO3NJQUM5Q2hDLHlEQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dHQUluQmtCLENBQUc7Z0NBQUNDLFNBQVMsRUFBQyxDQUFTOztnSEFDckJjLENBQU07d0NBQ0xDLElBQUksRUFBQyxDQUFRO3dDQUNiZixTQUFTLEVBQUMsQ0FBYTt3Q0FDdkJXLE9BQU8sRUFBRSxRQUN2QixHQUQ2QixDQUFDOzRDQUNkeEIsT0FBTyxDQUFDNkIsWUFBWSxDQUFDL0IsT0FBTyxFQUFFRSxPQUFPLENBQUNRLEdBQUc7d0NBQzNDLENBQUM7a0RBQ0YsQ0FFRDs7Ozs7O2dIQUNDbUIsQ0FBTTt3Q0FBQ0MsSUFBSSxFQUFDLENBQVE7d0NBQUNmLFNBQVMsRUFBQyxDQUFTO2tEQUFDLENBRTFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0ZBSUxELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUEwQjs7Z0dBQ3RDaUIsQ0FBRTtrQ0FBQyxDQUFhOzs7Ozs7Z0dBQ2hCbEIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQVM7OEdBQ3JCRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBa0M7c0NBQzlDZCxRQUFRLENBQUNpQixHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzhDQUNqQixNQUFNLCtEQUFMM0IsMkRBQU87b0NBQUNRLE9BQU8sRUFBRW1CLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BDLENBQUM7R0F0RktwQixjQUFjO0tBQWRBLGNBQWM7O0FBNkhwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2R1Y3QvW3NsdWddLmpzP2RiMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RcIjtcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7XG4gIEFpRmlsbFN0YXIsXG4gIEFpT3V0bGluZU1pbnVzLFxuICBBaU91dGxpbmVQbHVzLFxuICBBaU91dGxpbmVTdGFyLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvQ2FydENvbnRleHRcIjtcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBjYXJ0Q1RYID0gdXNlQ29udGV4dChDb250ZXh0KTtcbiAge1xuICAgIGNvbnNvbGUubG9nKGNhcnRDVFguY2FydEl0ZW1zKTtcbiAgfVxuXG4gIGNvbnN0IHsgaW1hZ2UsIG5hbWUsIGRldGFpbHMsIHByaWNlLCBxdW4sIHNsdWcgfSA9IHByb2R1Y3Q7XG5cbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihpbWFnZVtpbmRleF0pfSBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1pbWFnZVwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1pbWFnZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7aW1hZ2UubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaXRlbSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgIGluZGV4ID09PSBpbmRleCA/IFwic21hbGwtaW1hZ2Ugc2VsZWN0ZWQtaW1hZ2VcIiA6IFwic21hbGwtaW1hZ2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldEluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWRlc2NcIj5cbiAgICAgICAgICA8aDE+e25hbWV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJldmlld3NcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaUZpbGxTdGFyIC8+XG4gICAgICAgICAgICAgIDxBaU91dGxpbmVTdGFyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPnsyMH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGg0PkRldGFpbHM6PC9oND5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcmljZVwiPuKCrHtwcmljZX08L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eVwiPlxuICAgICAgICAgICAgPGgzPlF1YW50aXRpeTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxdWFudGl0eS1kZXNjXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1pbnVzXCIgb25DbGljaz17Y2FydENUWC5kZWNyZW1lbnR9PlxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNaW51cyAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiIG9uQ2xpY2s9XCJcIj5cbiAgICAgICAgICAgICAgICB7Y2FydENUWC5xdW59XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGx1c1wiIG9uQ2xpY2s9e2NhcnRDVFguaW5jcmVtZW50fT5cbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGx1cyAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZGQtdG8tY2FydFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJ0Q1RYLm9uQWRkSGFuZGxlcihwcm9kdWN0LCBjYXJ0Q1RYLnF1bik7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ1eS1ub3dcIj5cbiAgICAgICAgICAgICAgQnV5IE5vd1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtd3JhcHBlclwiPlxuICAgICAgICA8aDI+TWF5IEFsc28gTGlrZTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFycXVlZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF5bGlrZS1wcm9kdWN0cy1jb250YWluZXIgdHJhY2tcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFByb2R1Y3QgcHJvZHVjdD17aXRlbX0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgKltfdHlwZT09XCJwcm9kdWN0XCJde1xuICAgIHNsdWd7XG4gICAgICBjdXJyZW50XG5cbiAgICB9XG4gIH1cbmA7XG5cbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuXG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLmN1cnJlbnQsXG4gICAgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IFwiYmxvY2tpbmdcIixcbiAgfTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgaWYgKCFzbHVnKSByZXR1cm4gbnVsbDtcblxuICBjb25zb2xlLmxvZyhzbHVnLmN1cnJlbnQpO1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlPT1cInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQ9PScke3NsdWd9J11bMF1gO1xuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gJypbX3R5cGU9PVwicHJvZHVjdFwiXSc7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJ1cmxGb3IiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlPdXRsaW5lU3RhciIsIkNvbnRleHQiLCJQcm9kdWN0RGV0YWlscyIsInByb2R1Y3QiLCJwcm9kdWN0cyIsImNhcnRDVFgiLCJjb25zb2xlIiwibG9nIiwiY2FydEl0ZW1zIiwiaW1hZ2UiLCJuYW1lIiwiZGV0YWlscyIsInByaWNlIiwicXVuIiwic2x1ZyIsImluZGV4Iiwic2V0SW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwib25Nb3VzZUVudGVyIiwiaDEiLCJwIiwiaDQiLCJoMyIsInNwYW4iLCJvbkNsaWNrIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiYnV0dG9uIiwidHlwZSIsIm9uQWRkSGFuZGxlciIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});