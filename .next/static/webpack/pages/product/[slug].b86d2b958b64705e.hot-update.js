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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Product */ \"./components/Product.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/CartContext */ \"./store/CartContext.js\");\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ProductDetails = function(param) {\n    var product = param.product, products = param.products;\n    var _this1 = _this;\n    _s();\n    var image = product.image, name = product.name, details = product.details, price = product.price;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), index1 = ref[0], setIndex = ref[1];\n    var cartCtx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartContext);\n    console.log(cartCtx.qun);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-detail-container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"image-container\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(image[index1]),\n                                    className: \"product-detail-image\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 21,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"small-images-container\",\n                                children: image.map(function(item, index) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: (0,_lib_client__WEBPACK_IMPORTED_MODULE_3__.urlFor)(item),\n                                        className: index === index ? \"small-image selected-image\" : \"small-image\",\n                                        onMouseEnter: function() {\n                                            setIndex(index);\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 25,\n                                        columnNumber: 15\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"product-detail-desc\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"reviews\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 41,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 42,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 43,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineStar, {}, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 45,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: 20\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 47,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Details:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"price\",\n                                children: [\n                                    \"€\",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"quantity\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Quantitiy\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"quantity-desc\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"minus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlineMinus, {}, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 55,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 54,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"num\",\n                                                onClick: \"\",\n                                                children: \"0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 57,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"plus\",\n                                                onClick: \"\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiOutlinePlus, {}, void 0, false, {\n                                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                    lineNumber: 61,\n                                                    columnNumber: 17\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 15\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"add-to-cart\",\n                                        children: \"Add to Cart\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"buy-now\",\n                                        children: \"Buy Now\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                        lineNumber: 73,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"maylike-products-wrapper\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"May Also Like\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"marquee\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"maylike-products-container track\",\n                            children: products.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    product: item\n                                }, void 0, false, {\n                                    fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/pages/product/[slug].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this));\n};\n_s(ProductDetails, \"hr201s7FjIrUDjZX9oL85vwxcUw=\");\n_c = ProductDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\nvar _c;\n$RefreshReg$(_c, \"ProductDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsRUFBQyxDQUFhO2tEQUV4QixDQUVEOzs7Ozs7Z0hBQ0NZLENBQU07d0NBQ0xDLElBQUksRUFBQyxDQUFRO3dDQUNiYixTQUFTLEVBQUMsQ0FBUztrREFFcEIsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUlMRCxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7O2dHQUN0Q2MsQ0FBRTtrQ0FBQyxDQUFhOzs7Ozs7Z0dBQ2hCZixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUzs4R0FDckJELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrQztzQ0FDOUNaLFFBQVEsQ0FBQ2UsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTs4Q0FDakIsTUFBTSwrREFBTHpCLDJEQUFPO29DQUFDUSxPQUFPLEVBQUVpQixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wQyxDQUFDO0dBcEZLbEIsY0FBYztLQUFkQSxjQUFjOztBQXFIcEIsK0RBQWVBLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0L1tzbHVnXS5qcz9kYjE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdFwiO1xuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgQWlGaWxsU3RhcixcbiAgQWlPdXRsaW5lTWludXMsXG4gIEFpT3V0bGluZVBsdXMsXG4gIEFpT3V0bGluZVN0YXIsXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgQ2FydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vc3RvcmUvQ2FydENvbnRleHRcIjtcbmNvbnN0IFByb2R1Y3REZXRhaWxzID0gKHsgcHJvZHVjdCwgcHJvZHVjdHMgfSkgPT4ge1xuICBjb25zdCB7IGltYWdlLCBuYW1lLCBkZXRhaWxzLCBwcmljZSB9ID0gcHJvZHVjdDtcbiAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY2FydEN0eCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICBjb25zb2xlLmxvZyhjYXJ0Q3R4LnF1bik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoaW1hZ2VbaW5kZXhdKX0gY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtaW1hZ2VcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwtaW1hZ2VzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2ltYWdlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGl0ZW0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICBpbmRleCA9PT0gaW5kZXggPyBcInNtYWxsLWltYWdlIHNlbGVjdGVkLWltYWdlXCIgOiBcInNtYWxsLWltYWdlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1kZXNjXCI+XG4gICAgICAgICAgPGgxPntuYW1lfTwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXdzXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICA8QWlGaWxsU3RhciAvPlxuICAgICAgICAgICAgICA8QWlPdXRsaW5lU3RhciAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57MjB9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoND5EZXRhaWxzOjwvaDQ+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJpY2VcIj7igqx7cHJpY2V9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXVhbnRpdHlcIj5cbiAgICAgICAgICAgIDxoMz5RdWFudGl0aXk8L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicXVhbnRpdHktZGVzY1wiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtaW51c1wiIG9uQ2xpY2s9XCJcIj5cbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lTWludXMgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJudW1cIiBvbkNsaWNrPVwiXCI+XG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsdXNcIiBvbkNsaWNrPVwiXCI+XG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZVBsdXMgLz5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnRcIlxuICAgICAgICAgICAgICAvLyBvbkNsaWNrPXtjYXJ0Q3R4LmluY3JlbWVudH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV5LW5vd1wiXG4gICAgICAgICAgICAgIC8vIG9uQ2xpY2s9e2NhcnRDdHguZGVjcmVtZW50fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCdXkgTm93XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF5bGlrZS1wcm9kdWN0cy13cmFwcGVyXCI+XG4gICAgICAgIDxoMj5NYXkgQWxzbyBMaWtlPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXJxdWVlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXlsaWtlLXByb2R1Y3RzLWNvbnRhaW5lciB0cmFja1wiPlxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgICA8UHJvZHVjdCBwcm9kdWN0PXtpdGVtfSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlPT1cInByb2R1Y3RcIl17XG4gICAgc2x1Z3tcbiAgICAgIGN1cnJlbnRcblxuICAgIH1cbiAgfVxuYDtcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICBjb25zdCBwYXRocyA9IHByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKHtcbiAgICBwYXJhbXM6IHtcbiAgICAgIHNsdWc6IHByb2R1Y3Quc2x1Zy5jdXJyZW50LFxuICAgIH0sXG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogXCJibG9ja2luZ1wiLFxuICB9O1xufTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh7IHBhcmFtczogeyBzbHVnIH0gfSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGAqW190eXBlPT1cInByb2R1Y3RcIiAmJiBzbHVnLmN1cnJlbnQ9PScke3NsdWd9J11bMF1gO1xuICBjb25zdCBwcm9kdWN0c1F1ZXJ5ID0gJypbX3R5cGU9PVwicHJvZHVjdFwiXSc7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjbGllbnQuZmV0Y2gocXVlcnkpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGNsaWVudC5mZXRjaChwcm9kdWN0c1F1ZXJ5KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0cyxcbiAgICAgIHByb2R1Y3QsXG4gICAgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlByb2R1Y3QiLCJ1cmxGb3IiLCJBaUZpbGxTdGFyIiwiQWlPdXRsaW5lTWludXMiLCJBaU91dGxpbmVQbHVzIiwiQWlPdXRsaW5lU3RhciIsIkNhcnRDb250ZXh0IiwiUHJvZHVjdERldGFpbHMiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJpbWFnZSIsIm5hbWUiLCJkZXRhaWxzIiwicHJpY2UiLCJpbmRleCIsInNldEluZGV4IiwiY2FydEN0eCIsImNvbnNvbGUiLCJsb2ciLCJxdW4iLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJtYXAiLCJpdGVtIiwib25Nb3VzZUVudGVyIiwiaDEiLCJwIiwiaDQiLCJoMyIsInNwYW4iLCJvbkNsaWNrIiwiYnV0dG9uIiwidHlwZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/product/[slug].js\n");

/***/ })

});