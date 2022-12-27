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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    showCart: false,\n    setShowCart: function() {},\n    cartItems: [],\n    totalPrice: 0,\n    totalQun: 0,\n    qun: 0,\n    setQun: function() {},\n    increment: function() {},\n    decrement: function() {},\n    onAddHandler: function() {},\n    onDeleteHandler: function() {},\n    changeCartItemQuantity: function() {}\n});\nvar CartContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQun = ref3[0], setTotalQun = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qun1 = ref4[0], setQun = ref4[1];\n    console.log(cartItems);\n    (function() {\n        if (false) {}\n    });\n    var increment = function() {\n        setQun(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decrement = function() {\n        setQun(function(prevQun) {\n            if (prevQun - 1 < 1) return 1;\n            return prevQun - 1;\n        });\n    };\n    var onAddHandler = function(produkt, qun) {\n        var ifProduktInCart = cartItems.find(function(item) {\n            return item._id === produkt._id;\n        });\n        setTotalPrice(function(prev) {\n            return prev + qun * produkt.price;\n        });\n        setTotalQun(function(prev) {\n            return prev + qun;\n        });\n        setQun(1);\n        if (ifProduktInCart) {\n            setCartItems(cartItems.map(function(item) {\n                if (item._id === produkt._id) {\n                    return _objectSpread({}, item, {\n                        qun: item.qun + qun\n                    });\n                }\n                return item;\n            }));\n        } else {\n            produkt.qun = qun;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, produkt)\n            ]));\n        }\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qun, \" \").concat(produkt.name, \" added to the cart.\"));\n    };\n    var onDeleteHandler = function(product) {\n        var restItemsInCart = cartItems.filter(function(item) {\n            return item._id !== product._id;\n        });\n        setCartItems(restItemsInCart);\n        setTotalPrice(function(prev) {\n            return prev - product.qun * product.price;\n        });\n        setTotalQun(function(prev) {\n            return prev - product.qun;\n        });\n        setQun(1);\n    };\n    var foundProdukt;\n    var changeCartItemQuantity = function(id, action) {\n        var allMeals = cartItems;\n        var cartItemsWithoutTheFoundProduct = cartItems.filter(function(item) {\n            return item._id !== id;\n        });\n        foundProdukt = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        if (action === \"increment\") {\n            setCartItems(allMeals.map(function(meal) {\n                if (meal._id === id) {\n                    return _objectSpread({}, meal, {\n                        qun: meal.qun += 1\n                    });\n                }\n                return meal;\n            }));\n            setTotalPrice(function(prev) {\n                return prev + foundProdukt.price;\n            });\n            setTotalQun(function(prev) {\n                return prev + 1;\n            });\n        } else if (action === \"decrement\") {\n            if (foundProdukt.qun > 1) {\n                setCartItems(allMeals.map(function(meal) {\n                    if (meal._id === id) {\n                        return _objectSpread({}, meal, {\n                            qun: meal.qun -= 1\n                        });\n                    }\n                    return meal;\n                }));\n                setTotalPrice(function(prev) {\n                    return prev - foundProdukt.price;\n                });\n                setTotalQun(function(prev) {\n                    return prev - 1;\n                });\n            }\n        }\n    };\n    // if (typeof window !== \"undefined\") {\n    //   localStorage.setItem(\"items\", JSON.stringify(cartItems));\n    // }\n    var fincalContext = {\n        showCart: showCart,\n        setShowCart: setShowCart,\n        cartItems: cartItems,\n        totalPrice: totalPrice,\n        totalQun: totalQun,\n        qun: qun1,\n        setQun: setQun,\n        increment: increment,\n        decrement: decrement,\n        onAddHandler: onAddHandler,\n        onDeleteHandler: onDeleteHandler,\n        changeCartItemQuantity: changeCartItemQuantity\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: fincalContext,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/CartContext.js\",\n        lineNumber: 132,\n        columnNumber: 10\n    }, _this));\n};\n_s(CartContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = CartContext;\nvar _c;\n$RefreshReg$(_c, \"CartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNLDZFQUFFWixPQUFPLENBQUM2QyxRQUFRO1FBQUNDLEtBQUssRUFBRUYsYUFBYTtrQkFBRzlCLFFBQVE7Ozs7OztBQUMxRCxDQUFDO0dBbEhZRCxXQUFXO0tBQVhBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQ2FydENvbnRleHQuanM/NWVhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5cbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHNob3dDYXJ0OiBmYWxzZSxcbiAgc2V0U2hvd0NhcnQ6ICgpID0+IHt9LFxuICBjYXJ0SXRlbXM6IFtdLFxuICB0b3RhbFByaWNlOiAwLFxuICB0b3RhbFF1bjogMCxcbiAgcXVuOiAwLFxuICBzZXRRdW46ICgpID0+IHt9LFxuICBpbmNyZW1lbnQ6ICgpID0+IHt9LFxuICBkZWNyZW1lbnQ6ICgpID0+IHt9LFxuICBvbkFkZEhhbmRsZXI6ICgpID0+IHt9LFxuICBvbkRlbGV0ZUhhbmRsZXI6ICgpID0+IHt9LFxuICBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5OiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsUXVuLCBzZXRUb3RhbFF1bl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F1biwgc2V0UXVuXSA9IHVzZVN0YXRlKDEpO1xuICBjb25zb2xlLmxvZyhjYXJ0SXRlbXMpO1xuICAoKSA9PiB7XG4gICAgaWYodHlwZW9mIHdpbmRvdyA9PT0gdW5kZWZpbmVkKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaXRlbXNcIiwgY2FydEl0ZW1zKTtcbiAgfTtcbiAgY29uc3QgaW5jcmVtZW50ID0gKCkgPT4ge1xuICAgIHNldFF1bigocHJldlF0eSkgPT4gcHJldlF0eSArIDEpO1xuICB9O1xuXG4gIGNvbnN0IGRlY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRRdW4oKHByZXZRdW4pID0+IHtcbiAgICAgIGlmIChwcmV2UXVuIC0gMSA8IDEpIHJldHVybiAxO1xuXG4gICAgICByZXR1cm4gcHJldlF1biAtIDE7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3Qgb25BZGRIYW5kbGVyID0gKHByb2R1a3QsIHF1bikgPT4ge1xuICAgIGNvbnN0IGlmUHJvZHVrdEluQ2FydCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gcHJvZHVrdC5faWQpO1xuICAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgKyBxdW4gKiBwcm9kdWt0LnByaWNlKTtcbiAgICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiArIHF1bik7XG5cbiAgICBzZXRRdW4oMSk7XG5cbiAgICBpZiAoaWZQcm9kdWt0SW5DYXJ0KSB7XG4gICAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgIGNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5faWQgPT09IHByb2R1a3QuX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBxdW46IGl0ZW0ucXVuICsgcXVuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2R1a3QucXVuID0gcXVuO1xuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIHsgLi4ucHJvZHVrdCB9XSk7XG4gICAgfVxuICAgIHRvYXN0LnN1Y2Nlc3MoYCR7cXVufSAke3Byb2R1a3QubmFtZX0gYWRkZWQgdG8gdGhlIGNhcnQuYCk7XG4gIH07XG5cbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCByZXN0SXRlbXNJbkNhcnQgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkO1xuICAgIH0pO1xuXG4gICAgc2V0Q2FydEl0ZW1zKHJlc3RJdGVtc0luQ2FydCk7XG4gICAgc2V0VG90YWxQcmljZSgocHJldikgPT4gcHJldiAtIHByb2R1Y3QucXVuICogcHJvZHVjdC5wcmljZSk7XG4gICAgc2V0VG90YWxRdW4oKHByZXYpID0+IHByZXYgLSBwcm9kdWN0LnF1bik7XG4gICAgc2V0UXVuKDEpO1xuICB9O1xuICBsZXQgZm91bmRQcm9kdWt0O1xuICBjb25zdCBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5ID0gKGlkLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBhbGxNZWFscyA9IGNhcnRJdGVtcztcbiAgICBjb25zdCBjYXJ0SXRlbXNXaXRob3V0VGhlRm91bmRQcm9kdWN0ID0gY2FydEl0ZW1zLmZpbHRlcihcbiAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gaWRcbiAgICApO1xuICAgIGZvdW5kUHJvZHVrdCA9IGNhcnRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gaWQpO1xuICAgIGlmIChhY3Rpb24gPT09IFwiaW5jcmVtZW50XCIpIHtcbiAgICAgIHNldENhcnRJdGVtcyhcbiAgICAgICAgYWxsTWVhbHMubWFwKChtZWFsKSA9PiB7XG4gICAgICAgICAgaWYgKG1lYWwuX2lkID09PSBpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVhbCwgcXVuOiAobWVhbC5xdW4gKz0gMSkgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG1lYWw7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgICBzZXRUb3RhbFByaWNlKChwcmV2KSA9PiBwcmV2ICsgZm91bmRQcm9kdWt0LnByaWNlKTtcbiAgICAgIHNldFRvdGFsUXVuKChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gICAgfSBlbHNlIGlmIChhY3Rpb24gPT09IFwiZGVjcmVtZW50XCIpIHtcbiAgICAgIGlmIChmb3VuZFByb2R1a3QucXVuID4gMSkge1xuICAgICAgICBzZXRDYXJ0SXRlbXMoXG4gICAgICAgICAgYWxsTWVhbHMubWFwKChtZWFsKSA9PiB7XG4gICAgICAgICAgICBpZiAobWVhbC5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7IC4uLm1lYWwsIHF1bjogKG1lYWwucXVuIC09IDEpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWVhbDtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgICBzZXRUb3RhbFByaWNlKChwcmV2KSA9PiBwcmV2IC0gZm91bmRQcm9kdWt0LnByaWNlKTtcbiAgICAgICAgc2V0VG90YWxRdW4oKHByZXYpID0+IHByZXYgLSAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIC8vIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIC8vICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGZpbmNhbENvbnRleHQgPSB7XG4gICAgc2hvd0NhcnQ6IHNob3dDYXJ0LFxuICAgIHNldFNob3dDYXJ0OiBzZXRTaG93Q2FydCxcbiAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtcyxcbiAgICB0b3RhbFByaWNlOiB0b3RhbFByaWNlLFxuICAgIHRvdGFsUXVuOiB0b3RhbFF1bixcbiAgICBxdW46IHF1bixcbiAgICBzZXRRdW46IHNldFF1bixcbiAgICBpbmNyZW1lbnQ6IGluY3JlbWVudCxcbiAgICBkZWNyZW1lbnQ6IGRlY3JlbWVudCxcbiAgICBvbkFkZEhhbmRsZXI6IG9uQWRkSGFuZGxlcixcbiAgICBvbkRlbGV0ZUhhbmRsZXI6IG9uRGVsZXRlSGFuZGxlcixcbiAgICBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5OiBjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5LFxuICB9O1xuXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZmluY2FsQ29udGV4dH0+e2NoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRvYXN0IiwiQ29udGV4dCIsInNob3dDYXJ0Iiwic2V0U2hvd0NhcnQiLCJjYXJ0SXRlbXMiLCJ0b3RhbFByaWNlIiwidG90YWxRdW4iLCJxdW4iLCJzZXRRdW4iLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJvbkFkZEhhbmRsZXIiLCJvbkRlbGV0ZUhhbmRsZXIiLCJjaGFuZ2VDYXJ0SXRlbVF1YW50aXR5IiwiQ2FydENvbnRleHQiLCJjaGlsZHJlbiIsInNldENhcnRJdGVtcyIsInNldFRvdGFsUHJpY2UiLCJzZXRUb3RhbFF1biIsImNvbnNvbGUiLCJsb2ciLCJ1bmRlZmluZWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwicHJldlF0eSIsInByZXZRdW4iLCJwcm9kdWt0IiwiaWZQcm9kdWt0SW5DYXJ0IiwiZmluZCIsIml0ZW0iLCJfaWQiLCJwcmV2IiwicHJpY2UiLCJtYXAiLCJzdWNjZXNzIiwibmFtZSIsInByb2R1Y3QiLCJyZXN0SXRlbXNJbkNhcnQiLCJmaWx0ZXIiLCJmb3VuZFByb2R1a3QiLCJpZCIsImFjdGlvbiIsImFsbE1lYWxzIiwiY2FydEl0ZW1zV2l0aG91dFRoZUZvdW5kUHJvZHVjdCIsIm1lYWwiLCJmaW5jYWxDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/CartContext.js\n");

/***/ })

});