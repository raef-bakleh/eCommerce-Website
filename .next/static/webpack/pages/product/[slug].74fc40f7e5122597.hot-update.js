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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product */ \"./components/Product.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/CartContext */ \"./store/CartContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var cartCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_4__.Context);\n    var image = product.image, name = product.name, details = product.details, price = product.price, qun = product.qun;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index1 = ref[0], setIndex = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image[index1]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image.map(function(item, index) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(item),\n                                        className: index === index ? \"small-image selected-image\" : \"small-image\",\n                                        onMouseEnter: function() {\n                                            setIndex(index);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 42,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: 20\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"€\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantitiy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {\n                                                    onClick: cartCTX.decrement\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 54,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onClick: \"\",\n                                                children: cartCTX.qun\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {\n                                                    onClick: cartCTX.increment\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        onClick: function() {\n                                            cartCTX.onAddHandler(product, cartCTX.qun);\n                                        },\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"May Also Like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    product: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 86,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductDetails, \"CvY4eCaM0eq1rlRHf1mxIiHSx4Y=\");\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STlDZCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBUzs7Z0hBQ3JCYyxDQUFNO3dDQUNMQyxJQUFJLEVBQUMsQ0FBUTt3Q0FDYmYsU0FBUyxFQUFDLENBQWE7d0NBQ3ZCVyxPQUFPLEVBQUUsUUFDdkIsR0FENkIsQ0FBQzs0Q0FDZHBCLE9BQU8sQ0FBQ3lCLFlBQVksQ0FBQzNCLE9BQU8sRUFBRUUsT0FBTyxDQUFDSyxHQUFHO3dDQUMzQyxDQUFDO2tEQUNGLENBRUQ7Ozs7OztnSEFDQ2tCLENBQU07d0NBQUNDLElBQUksRUFBQyxDQUFRO3dDQUFDZixTQUFTLEVBQUMsQ0FBUztrREFBQyxDQUUxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUlMRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7O2dHQUN0Q2lCLENBQUU7a0NBQUMsQ0FBYTs7Ozs7O2dHQUNoQmxCLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFTOzhHQUNyQkQsQ0FBRzs0QkFBQ0MsU0FBUyxFQUFDLENBQWtDO3NDQUM5Q1YsUUFBUSxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJOzhDQUNqQixNQUFNLCtEQUFMdkIsMkRBQU87b0NBQUNRLE9BQU8sRUFBRWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEMsQ0FBQztHQWxGS2hCLGNBQWM7S0FBZEEsY0FBYzs7QUFtSHBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9bc2x1Z10uanM/ZGIxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RcIjtcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcbmltcG9ydCB7XG4gIEFpRmlsbFN0YXIsXG4gIEFpT3V0bGluZU1pbnVzLFxuICBBaU91dGxpbmVQbHVzLFxuICBBaU91dGxpbmVTdGFyLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvQ2FydENvbnRleHRcIjtcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCBjYXJ0Q1RYID0gdXNlQ29udGV4dChDb250ZXh0KTtcblxuICBjb25zdCB7IGltYWdlLCBuYW1lLCBkZXRhaWxzLCBwcmljZSwgcXVuIH0gPSBwcm9kdWN0O1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDApO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17dXJsRm9yKGltYWdlW2luZGV4XSl9IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWltYWdlXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWltYWdlcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtpbWFnZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpdGVtKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGluZGV4ID8gXCJzbWFsbC1pbWFnZSBzZWxlY3RlZC1pbWFnZVwiIDogXCJzbWFsbC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0SW5kZXgoaW5kZXgpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtZGVzY1wiPlxuICAgICAgICAgIDxoMT57bmFtZX08L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmV2aWV3c1wiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpRmlsbFN0YXIgLz5cbiAgICAgICAgICAgICAgPEFpT3V0bGluZVN0YXIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+ezIwfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDQ+RGV0YWlsczo8L2g0PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByaWNlXCI+4oKse3ByaWNlfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5XCI+XG4gICAgICAgICAgICA8aDM+UXVhbnRpdGl5PC9oMz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInF1YW50aXR5LWRlc2NcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWludXNcIiBvbkNsaWNrPVwiXCI+XG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZU1pbnVzIG9uQ2xpY2s9e2NhcnRDVFguZGVjcmVtZW50fSAvPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm51bVwiIG9uQ2xpY2s9XCJcIj5cbiAgICAgICAgICAgICAgICB7Y2FydENUWC5xdW59XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGx1c1wiIG9uQ2xpY2s9XCJcIj5cbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGx1cyBvbkNsaWNrPXtjYXJ0Q1RYLmluY3JlbWVudH0gLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2FydENUWC5vbkFkZEhhbmRsZXIocHJvZHVjdCwgY2FydENUWC5xdW4pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidXktbm93XCI+XG4gICAgICAgICAgICAgIEJ1eSBOb3dcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLXdyYXBwZXJcIj5cbiAgICAgICAgPGgyPk1heSBBbHNvIExpa2U8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcnF1ZWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heWxpa2UtcHJvZHVjdHMtY29udGFpbmVyIHRyYWNrXCI+XG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9kdWN0IHByb2R1Y3Q9e2l0ZW19IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUGF0aHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGU9PVwicHJvZHVjdFwiXXtcbiAgICBzbHVne1xuICAgICAgY3VycmVudFxuXG4gICAgfVxuICB9XG5gO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gIGNvbnN0IHBhdGhzID0gcHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogcHJvZHVjdC5zbHVnLmN1cnJlbnQsXG4gICAgfSxcbiAgfSkpO1xuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBcImJsb2NraW5nXCIsXG4gIH07XG59O1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IHNsdWcgfSB9KSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGU9PVwicHJvZHVjdFwiICYmIHNsdWcuY3VycmVudD09JyR7c2x1Z30nXVswXWA7XG4gIGNvbnN0IHByb2R1Y3RzUXVlcnkgPSAnKltfdHlwZT09XCJwcm9kdWN0XCJdJztcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSk7XG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgY2xpZW50LmZldGNoKHByb2R1Y3RzUXVlcnkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2R1Y3RzLFxuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiUHJvZHVjdCIsInVybEZvciIsIkFpRmlsbFN0YXIiLCJBaU91dGxpbmVNaW51cyIsIkFpT3V0bGluZVBsdXMiLCJBaU91dGxpbmVTdGFyIiwiQ29udGV4dCIsIlByb2R1Y3REZXRhaWxzIiwicHJvZHVjdCIsInByb2R1Y3RzIiwiY2FydENUWCIsImltYWdlIiwibmFtZSIsImRldGFpbHMiLCJwcmljZSIsInF1biIsImluZGV4Iiwic2V0SW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwib25Nb3VzZUVudGVyIiwiaDEiLCJwIiwiaDQiLCJoMyIsInNwYW4iLCJvbkNsaWNrIiwiZGVjcmVtZW50IiwiaW5jcmVtZW50IiwiYnV0dG9uIiwidHlwZSIsIm9uQWRkSGFuZGxlciIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});