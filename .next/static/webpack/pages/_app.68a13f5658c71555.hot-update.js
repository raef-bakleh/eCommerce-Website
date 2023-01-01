"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Navbar.jsx":
/*!*******************************!*\
  !*** ./components/Navbar.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _store_CartContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/CartContext */ \"./store/CartContext.js\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.jsx\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-burger-menu */ \"./node_modules/react-burger-menu/lib/BurgerMenu.js\");\n/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_AuthCTX__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/AuthCTX */ \"./store/AuthCTX.js\");\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Navbar = function() {\n    var useWindowSize = function useWindowSize() {\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            function handleResize() {\n                setWinSize({\n                    width: window.innerWidth,\n                    height: window.innerHeight\n                });\n            }\n            window.addEventListener(\"resize\", handleResize);\n            handleResize();\n            return function() {\n                return window.removeEventListener(\"resize\", handleResize);\n            };\n        }, []);\n        return winSize;\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        height: undefined,\n        width: undefined\n    }), winSize = ref[0], setWinSize = ref[1];\n    var size = useWindowSize();\n    console.log(size);\n    var cartCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_CartContext__WEBPACK_IMPORTED_MODULE_3__.Context);\n    var authCTX = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_store_AuthCTX__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n    var signab = function() {\n        authCTX.logOut();\n        localStorage.setItem(\"token\", \"\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"navbar-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_burger_menu__WEBPACK_IMPORTED_MODULE_5__.slide, {\n                width: \"100%\",\n                noTransition: true,\n                noOverlay: true,\n                customBurgerIcon: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"home\",\n                        className: \"menu-item\",\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"about\",\n                        className: \"menu-item\",\n                        href: \"/about\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        id: \"contact\",\n                        className: \"menu-item\",\n                        href: \"/contact\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"logo\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: \"Homepage\"\n                }, void 0, false, {\n                    fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            winSize.width > 800 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pagesLinks\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/headphones\",\n                            children: \"Headphones\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/earphones\",\n                            children: \"Earphones\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/smartwatches\",\n                            children: \"Smartwatches\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/others\",\n                            children: \"Others\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                lineNumber: 56,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cart-nav\",\n                children: [\n                    !authCTX.isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"logo\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/login\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, _this),\n                    authCTX.isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Hello \",\n                                authCTX.userName,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this),\n                    authCTX.isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        type: \"button\",\n                        className: \"cart-icon\",\n                        onClick: signab,\n                        children: \"signOut\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"cart-icon\",\n                        onClick: function() {\n                            return cartCTX.setShowCart(!cartCTX.showCart);\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiOutlineShopping, {\n                                size: 30\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"cart-item-qty\",\n                                children: cartCTX.totalQun\n                            }, void 0, false, {\n                                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    cartCTX.showCart && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 30\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/components/Navbar.jsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"ExgTPCekL/LLaKHEFVs609BrUxg=\", true);\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO0FBNEZaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanN4PzNhYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEFpT3V0bGluZVNob3BwaW5nIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBDYXJ0Q29udGV4dCwgQ29udGV4dCB9IGZyb20gXCIuLi9zdG9yZS9DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IENhcnQgZnJvbSBcIi4vQ2FydFwiO1xuaW1wb3J0IHsgc2xpZGUgYXMgTWVudSB9IGZyb20gXCJyZWFjdC1idXJnZXItbWVudVwiO1xuXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL3N0b3JlL0F1dGhDVFhcIjtcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgW3dpblNpemUsIHNldFdpblNpemVdID0gdXNlU3RhdGUoe1xuICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gIH0pO1xuICBmdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XG4gICAgICAgIHNldFdpblNpemUoe1xuICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgICAgaGFuZGxlUmVzaXplKCk7XG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIHdpblNpemU7XG4gIH1cblxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zb2xlLmxvZyhzaXplKTtcbiAgY29uc3QgY2FydENUWCA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGNvbnN0IGF1dGhDVFggPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcbiAgY29uc3Qgc2lnbmFiID0gKCkgPT4ge1xuICAgIGF1dGhDVFgubG9nT3V0KCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBcIlwiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2YmFyLWNvbnRhaW5lclwiPlxuICAgICAgPE1lbnUgd2lkdGg9e1wiMTAwJVwifSBub1RyYW5zaXRpb24gbm9PdmVybGF5IGN1c3RvbUJ1cmdlckljb249e3RydWV9PlxuICAgICAgICA8YSBpZD1cImhvbWVcIiBjbGFzc05hbWU9XCJtZW51LWl0ZW1cIiBocmVmPVwiL1wiPlxuICAgICAgICAgIEhvbWVcbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBpZD1cImFib3V0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIEFib3V0XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaWQ9XCJjb250YWN0XCIgY2xhc3NOYW1lPVwibWVudS1pdGVtXCIgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L2E+XG4gICAgICA8L01lbnU+XG4gICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wifT5Ib21lcGFnZTwvTGluaz5cbiAgICAgIDwvcD5cblxuICAgICAge3dpblNpemUud2lkdGggPiA4MDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VzTGlua3NcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9oZWFkcGhvbmVzXCJ9PkhlYWRwaG9uZXM8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2VhcnBob25lc1wifT5FYXJwaG9uZXM8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3NtYXJ0d2F0Y2hlc1wifT5TbWFydHdhdGNoZXM8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL290aGVyc1wifT5PdGhlcnM8L0xpbms+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtbmF2XCI+XG4gICAgICAgIHshYXV0aENUWC5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPXtcIi9sb2dpblwifT5Mb2dpbjwvTGluaz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICAgIHthdXRoQ1RYLmlzTG9nZ2VkSW4gJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5IZWxsbyB7YXV0aENUWC51c2VyTmFtZX0gPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7YXV0aENUWC5pc0xvZ2dlZEluICYmIChcbiAgICAgICAgICA8cCB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2FydC1pY29uXCIgb25DbGljaz17c2lnbmFifT5cbiAgICAgICAgICAgIHNpZ25PdXRcbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJ0LWljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhcnRDVFguc2V0U2hvd0NhcnQoIWNhcnRDVFguc2hvd0NhcnQpfVxuICAgICAgICA+XG4gICAgICAgICAgPEFpT3V0bGluZVNob3BwaW5nIHNpemU9ezMwfSAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNhcnQtaXRlbS1xdHlcIj57Y2FydENUWC50b3RhbFF1bn08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICB7Y2FydENUWC5zaG93Q2FydCAmJiA8Q2FydCAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTGluayIsIkFpT3V0bGluZVNob3BwaW5nIiwiQ2FydENvbnRleHQiLCJDb250ZXh0IiwiQ2FydCIsInNsaWRlIiwiTWVudSIsIkF1dGhDb250ZXh0IiwiTmF2YmFyIiwidXNlV2luZG93U2l6ZSIsImhhbmRsZVJlc2l6ZSIsInNldFdpblNpemUiLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwid2luU2l6ZSIsInVuZGVmaW5lZCIsInNpemUiLCJjb25zb2xlIiwibG9nIiwiY2FydENUWCIsImF1dGhDVFgiLCJzaWduYWIiLCJsb2dPdXQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwibm9UcmFuc2l0aW9uIiwibm9PdmVybGF5IiwiY3VzdG9tQnVyZ2VySWNvbiIsImEiLCJpZCIsImhyZWYiLCJwIiwiaXNMb2dnZWRJbiIsInVzZXJOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJidXR0b24iLCJzZXRTaG93Q2FydCIsInNob3dDYXJ0Iiwic3BhbiIsInRvdGFsUXVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Navbar.jsx\n");

/***/ })

});