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

/***/ "./store/CartContext.js":
/*!******************************!*\
  !*** ./store/CartContext.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    showCart: false,\n    setShowCart: function() {},\n    cartItems: [],\n    totalPrice: 0,\n    totalQun: 0,\n    qun: 0,\n    setQun: function() {},\n    increment: function() {},\n    decrement: function() {},\n    onAddHandler: function() {},\n    onDeleteHandler: function() {},\n    changeCartItemQuantity: function() {}\n});\nvar CartContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQun = ref3[0], setTotalQun = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qun1 = ref4[0], setQun = ref4[1];\n    var increment = function() {\n        setQun(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decrement = function() {\n        setQun(function(prevQun) {\n            if (prevQun - 1 < 1) return 1;\n            return prevQun - 1;\n        });\n    };\n    var onAddHandler = function(product, qun) {\n        var checkProductInCart = cartItems.find(function(item) {\n            return item._id === product._id;\n        });\n        setTotalPrice(function(prevTotalPrice) {\n            return prevTotalPrice + product.price * qun;\n        });\n        setTotalQuantities(function(prevTotalQuantities) {\n            return prevTotalQuantities + quantity;\n        });\n        if (checkProductInCart) {\n            var updatedCartItems = cartItems.map(function(cartProduct) {\n                if (cartProduct._id === product._id) return _objectSpread({}, cartProduct, {\n                    qun: cartProduct.qun + qun\n                });\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            product.qun = qun;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, product)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qty, \" \").concat(product.name, \" added to the cart.\"));\n    };\n    // const onAddHandler = (produkt, qun) => {\n    //   const ifProduktInCart = cartItems.find((item) => item._id === produkt._id);\n    //   setTotalPrice((prev) => prev + qun * produkt.price);\n    //   setTotalQun((prev) => prev + qun);\n    //   setQun(1);\n    //   if (ifProduktInCart) {\n    //     setCartItems(\n    //       cartItems.map((item) => {\n    //         if (item._id === produkt._id) {\n    //           return {\n    //             ...item,\n    //             qun: item.qun + qun,\n    //           };\n    //         }\n    //       })\n    //     );\n    //   } else {\n    //     produkt.qun = qun;\n    //     setCartItems([...cartItems, { ...produkt }]);\n    //   }\n    //   localStorage.setItem(\"cartItems\", JSON.stringify([cartItems]));\n    //   console.log(cartItems);\n    // };\n    var onDeleteHandler = function(product) {\n        var restItemsInCart = cartItems.filter(function(item) {\n            return item._id !== product._id;\n        });\n        setCartItems(restItemsInCart);\n        setTotalPrice(function(prev) {\n            return prev - product.qun * product.price;\n        });\n        setTotalQun(function(prev) {\n            return prev - product.qun;\n        });\n        setQun(1);\n    };\n    var foundProdukt;\n    var changeCartItemQuantity = function(id, action) {\n        var allMeals = cartItems;\n        var cartItemsWithoutTheFoundProduct = cartItems.filter(function(item) {\n            return item._id !== id;\n        });\n        foundProdukt = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        if (action === \"increment\") {\n            setCartItems(allMeals.map(function(meal) {\n                if (meal._id === id) {\n                    return _objectSpread({}, meal, {\n                        qun: meal.qun += 1\n                    });\n                }\n                return meal;\n            }));\n            setTotalPrice(function(prev) {\n                return prev + foundProdukt.price;\n            });\n            setTotalQun(function(prev) {\n                return prev + 1;\n            });\n        } else if (action === \"decrement\") {\n            if (foundProdukt.qun > 1) {\n                setCartItems(allMeals.map(function(meal) {\n                    if (meal._id === id) {\n                        return _objectSpread({}, meal, {\n                            qun: meal.qun -= 1\n                        });\n                    }\n                    return meal;\n                }));\n                setTotalPrice(function(prev) {\n                    return prev - foundProdukt.price;\n                });\n                setTotalQun(function(prev) {\n                    return prev - 1;\n                });\n            }\n        }\n    };\n    var fincalContext = {\n        showCart: showCart,\n        setShowCart: setShowCart,\n        cartItems: cartItems,\n        totalPrice: totalPrice,\n        totalQun: totalQun,\n        qun: qun1,\n        setQun: setQun,\n        increment: increment,\n        decrement: decrement,\n        onAddHandler: onAddHandler,\n        onDeleteHandler: onDeleteHandler,\n        changeCartItemQuantity: changeCartItemQuantity\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: fincalContext,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/CartContext.js\",\n        lineNumber: 150,\n        columnNumber: 10\n    }, _this));\n};\n_s(CartContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = CartContext;\nvar _c;\n$RefreshReg$(_c, \"CartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkMsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxZQUFZLEVBQUVBLFlBQVk7UUFDMUJDLGVBQWUsRUFBRUEsZUFBZTtRQUNoQ0Msc0JBQXNCLEVBQUVBLHNCQUFzQjtJQUNoRCxDQUFDO0lBRUQsTUFBTSw2RUFBRVosT0FBTyxDQUFDOEMsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLGFBQWE7a0JBQUcvQixRQUFROzs7Ozs7QUFDMUQsQ0FBQztHQXBJWUQsV0FBVztLQUFYQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0NhcnRDb250ZXh0LmpzPzVlYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBzaG93Q2FydDogZmFsc2UsXG4gIHNldFNob3dDYXJ0OiAoKSA9PiB7fSxcbiAgY2FydEl0ZW1zOiBbXSxcbiAgdG90YWxQcmljZTogMCxcbiAgdG90YWxRdW46IDAsXG4gIHF1bjogMCxcbiAgc2V0UXVuOiAoKSA9PiB7fSxcbiAgaW5jcmVtZW50OiAoKSA9PiB7fSxcbiAgZGVjcmVtZW50OiAoKSA9PiB7fSxcbiAgb25BZGRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgb25EZWxldGVIYW5kbGVyOiAoKSA9PiB7fSxcbiAgY2hhbmdlQ2FydEl0ZW1RdWFudGl0eTogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbFF1biwgc2V0VG90YWxRdW5dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdW4sIHNldFF1bl0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0UXVuKChwcmV2UXR5KSA9PiBwcmV2UXR5ICsgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVtZW50ID0gKCkgPT4ge1xuICAgIHNldFF1bigocHJldlF1bikgPT4ge1xuICAgICAgaWYgKHByZXZRdW4gLSAxIDwgMSkgcmV0dXJuIDE7XG5cbiAgICAgIHJldHVybiBwcmV2UXVuIC0gMTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkFkZEhhbmRsZXIgPSAocHJvZHVjdCwgcXVuKSA9PiB7XG4gICAgY29uc3QgY2hlY2tQcm9kdWN0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5faWQgPT09IHByb2R1Y3QuX2lkXG4gICAgKTtcblxuICAgIHNldFRvdGFsUHJpY2UoKHByZXZUb3RhbFByaWNlKSA9PiBwcmV2VG90YWxQcmljZSArIHByb2R1Y3QucHJpY2UgKiBxdW4pO1xuICAgIHNldFRvdGFsUXVhbnRpdGllcygocHJldlRvdGFsUXVhbnRpdGllcykgPT4gcHJldlRvdGFsUXVhbnRpdGllcyArIHF1YW50aXR5KTtcblxuICAgIGlmIChjaGVja1Byb2R1Y3RJbkNhcnQpIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKChjYXJ0UHJvZHVjdCkgPT4ge1xuICAgICAgICBpZiAoY2FydFByb2R1Y3QuX2lkID09PSBwcm9kdWN0Ll9pZClcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FydFByb2R1Y3QsXG4gICAgICAgICAgICBxdW46IGNhcnRQcm9kdWN0LnF1biArIHF1bixcbiAgICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZHVjdC5xdW4gPSBxdW47XG5cbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1Y3QgfV0pO1xuICAgIH1cblxuICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cXR5fSAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gdGhlIGNhcnQuYCk7XG4gIH07XG5cbiAgLy8gY29uc3Qgb25BZGRIYW5kbGVyID0gKHByb2R1a3QsIHF1bikgPT4ge1xuICAvLyAgIGNvbnN0IGlmUHJvZHVrdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVrdC5faWQpO1xuICAvLyAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgKyBxdW4gKiBwcm9kdWt0LnByaWNlKTtcbiAgLy8gICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiArIHF1bik7XG4gIC8vICAgc2V0UXVuKDEpO1xuXG4gIC8vICAgaWYgKGlmUHJvZHVrdEluQ2FydCkge1xuICAvLyAgICAgc2V0Q2FydEl0ZW1zKFxuICAvLyAgICAgICBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gIC8vICAgICAgICAgaWYgKGl0ZW0uX2lkID09PSBwcm9kdWt0Ll9pZCkge1xuICAvLyAgICAgICAgICAgcmV0dXJuIHtcbiAgLy8gICAgICAgICAgICAgLi4uaXRlbSxcbiAgLy8gICAgICAgICAgICAgcXVuOiBpdGVtLnF1biArIHF1bixcbiAgLy8gICAgICAgICAgIH07XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICB9KVxuICAvLyAgICAgKTtcbiAgLy8gICB9IGVsc2Uge1xuICAvLyAgICAgcHJvZHVrdC5xdW4gPSBxdW47XG4gIC8vICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgeyAuLi5wcm9kdWt0IH1dKTtcbiAgLy8gICB9XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoW2NhcnRJdGVtc10pKTtcblxuICAvLyAgIGNvbnNvbGUubG9nKGNhcnRJdGVtcyk7XG4gIC8vIH07XG5cbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCByZXN0SXRlbXNJbkNhcnQgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkO1xuICAgIH0pO1xuXG4gICAgc2V0Q2FydEl0ZW1zKHJlc3RJdGVtc0luQ2FydCk7XG4gICAgc2V0VG90YWxQcmljZSgocHJldikgPT4gcHJldiAtIHByb2R1Y3QucXVuICogcHJvZHVjdC5wcmljZSk7XG4gICAgc2V0VG90YWxRdW4oKHByZXYpID0+IHByZXYgLSBwcm9kdWN0LnF1bik7XG4gICAgc2V0UXVuKDEpO1xuICB9O1xuICBsZXQgZm91bmRQcm9kdWt0O1xuICBjb25zdCBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5ID0gKGlkLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBhbGxNZWFscyA9IGNhcnRJdGVtcztcbiAgICBjb25zdCBjYXJ0SXRlbXNXaXRob3V0VGhlRm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gaWRcbiAgICApO1xuICAgIGZvdW5kUHJvZHVrdCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gaWQpO1xuICAgIGlmIChhY3Rpb24gPT09IFwiaW5jcmVtZW50XCIpIHtcbiAgICAgIHNldENhcnRJdGVtcyhcbiAgICAgICAgYWxsTWVhbHMubWFwKChtZWFsKSA9PiB7XG4gICAgICAgICAgaWYgKG1lYWwuX2lkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVhbCwgcXVuOiAobWVhbC5xdW4gKz0gMSkgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lYWw7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBzZXRUb3RhbFByaWNlKChwcmV2KSA9PiBwcmV2ICsgZm91bmRQcm9kdWt0LnByaWNlKTtcbiAgICAgIHNldFRvdGFsUXVuKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZGVjcmVtZW50XCIpIHtcbiAgICAgIGlmIChmb3VuZFByb2R1a3QucXVuID4gMSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgICAgYWxsTWVhbHMubWFwKChtZWFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVhbC5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLm1lYWwsIHF1bjogKG1lYWwucXVuIC09IDEpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVhbDtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2KSA9PiBwcmV2IC0gZm91bmRQcm9kdWt0LnByaWNlKTtcbiAgICAgICAgc2V0VG90YWxRdW4oKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IGZpbmNhbENvbnRleHQgPSB7XG4gICAgc2hvd0NhcnQ6IHNob3dDYXJ0LFxuICAgIHNldFNob3dDYXJ0OiBzZXRTaG93Q2FydCxcbiAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtcyxcbiAgICB0b3RhbFByaWNlOiB0b3RhbFByaWNlLFxuICAgIHRvdGFsUXVuOiB0b3RhbFF1bixcbiAgICBxdW46IHF1bixcbiAgICBzZXRRdW46IHNldFF1bixcbiAgICBpbmNyZW1lbnQ6IGluY3JlbWVudCxcbiAgICBkZWNyZW1lbnQ6IGRlY3JlbWVudCxcbiAgICBvbkFkZEhhbmRsZXI6IG9uQWRkSGFuZGxlcixcbiAgICBvbkRlbGV0ZUhhbmRsZXI6IG9uRGVsZXRlSGFuZGxlcixcbiAgICBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5OiBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5LFxuICB9O1xuXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZmluY2FsQ29udGV4dH0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwidG90YWxRdW4iLCJxdW4iLCJzZXRRdW4iLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJvbkFkZEhhbmRsZXIiLCJvbkRlbGV0ZUhhbmRsZXIiLCJjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5IiwiQ2FydENvbnRleHQiLCJjaGlsZHJlbiIsInNldENhcnRJdGVtcyIsInNldFRvdGFsUHJpY2UiLCJzZXRUb3RhbFF1biIsInByZXZRdHkiLCJwcmV2UXVuIiwicHJvZHVjdCIsImNoZWNrUHJvZHVjdEluQ2FydCIsImZpbmQiLCJpdGVtIiwiX2lkIiwicHJldlRvdGFsUHJpY2UiLCJwcmljZSIsInNldFRvdGFsUXVhbnRpdGllcyIsInByZXZUb3RhbFF1YW50aXRpZXMiLCJxdWFudGl0eSIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJjYXJ0UHJvZHVjdCIsInN1Y2Nlc3MiLCJxdHkiLCJuYW1lIiwicmVzdEl0ZW1zSW5DYXJ0IiwiZmlsdGVyIiwicHJldiIsImZvdW5kUHJvZHVrdCIsImlkIiwiYWN0aW9uIiwiYWxsTWVhbHMiLCJjYXJ0SXRlbXNXaXRob3V0VGhlRm91bmRQcm9kdWN0IiwibWVhbCIsImZpbmNhbENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/CartContext.js\n");

/***/ })

});