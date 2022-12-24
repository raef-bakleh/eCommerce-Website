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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    showCart: false,\n    setShowCart: function() {},\n    cartItems: [],\n    totalPrice: 0,\n    totalQun: 0,\n    qun: 1,\n    setQun: function() {},\n    increment: function() {},\n    decrement: function() {},\n    onAddHandler: function() {},\n    onDeleteHandler: function() {}\n});\nvar CartContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQun = ref3[0], setTotalQun = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qun1 = ref4[0], setQun = ref4[1];\n    var increment = function() {\n        setQun(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decrement = function() {\n        setQun(function(prevQun) {\n            if (prevQun - 1 < 1) return 1;\n            return prevQun - 1;\n        });\n    };\n    var onAddHandler = function(produkt, qun) {\n        setTotalPrice(function() {\n            10;\n        });\n        setTotalQun(function(prev) {\n            return prev + qun;\n        });\n        var ifProduktInCart = cartItems.find(function(item) {\n            return item._id === produkt._id;\n        });\n        if (ifProduktInCart) {\n            setCartItems(cartItems.map(function(item) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(qun, \" \").concat(item.name, \" have been added to your cart\"));\n                if (item._id === produkt._id) {\n                    return _objectSpread({}, item, {\n                        qun: item.qun + qun\n                    });\n                }\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.toast.success(\"\".concat(item.qun, \" \").concat(item, \" have been added to your cart\"));\n            }));\n        } else {\n            produkt.qun = qun;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, produkt)\n            ]));\n        }\n    };\n    var onDeleteHandler = function(product) {\n        var restItemsInCart = cartItems.filter(function(item) {\n            return item._id !== product._id;\n        });\n        setCartItems(restItemsInCart);\n    };\n    var fincalContext = {\n        showCart: showCart,\n        setShowCart: setShowCart,\n        cartItems: cartItems,\n        totalPrice: totalPrice,\n        totalQun: totalQun,\n        qun: qun1,\n        setQun: setQun,\n        increment: increment,\n        decrement: decrement,\n        onAddHandler: onAddHandler,\n        onDeleteHandler: onDeleteHandler\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: fincalContext,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/CartContext.js\",\n        lineNumber: 82,\n        columnNumber: 10\n    }, _this));\n};\n_s(CartContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = CartContext;\nvar _c;\n$RefreshReg$(_c, \"CartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNO1FBQ2RDLFNBQVMsRUFBRUEsU0FBUztRQUNwQkMsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxZQUFZLEVBQUVBLFlBQVk7UUFDMUJDLGVBQWUsRUFBRUEsZUFBZTtJQUNsQyxDQUFDO0lBRUQsTUFBTSw2RUFBRVgsT0FBTyxDQUFDZ0MsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLGFBQWE7a0JBQUdsQixRQUFROzs7Ozs7QUFDMUQsQ0FBQztHQWpFWUQsV0FBVztLQUFYQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0NhcnRDb250ZXh0LmpzPzVlYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBzaG93Q2FydDogZmFsc2UsXG4gIHNldFNob3dDYXJ0OiAoKSA9PiB7fSxcbiAgY2FydEl0ZW1zOiBbXSxcbiAgdG90YWxQcmljZTogMCxcbiAgdG90YWxRdW46IDAsXG4gIHF1bjogMSxcbiAgc2V0UXVuOiAoKSA9PiB7fSxcbiAgaW5jcmVtZW50OiAoKSA9PiB7fSxcbiAgZGVjcmVtZW50OiAoKSA9PiB7fSxcbiAgb25BZGRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgb25EZWxldGVIYW5kbGVyOiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFtzaG93Q2FydCwgc2V0U2hvd0NhcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdG90YWxQcmljZSwgc2V0VG90YWxQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3RvdGFsUXVuLCBzZXRUb3RhbFF1bl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F1biwgc2V0UXVuXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IGluY3JlbWVudCA9ICgpID0+IHtcbiAgICBzZXRRdW4oKHByZXZRdHkpID0+IHByZXZRdHkgKyAxKTtcbiAgfTtcblxuICBjb25zdCBkZWNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0UXVuKChwcmV2UXVuKSA9PiB7XG4gICAgICBpZiAocHJldlF1biAtIDEgPCAxKSByZXR1cm4gMTtcblxuICAgICAgcmV0dXJuIHByZXZRdW4gLSAxO1xuICAgIH0pO1xuICB9O1xuICBjb25zdCBvbkFkZEhhbmRsZXIgPSAocHJvZHVrdCwgcXVuKSA9PiB7XG4gICAgc2V0VG90YWxQcmljZSgoKSA9PiB7XG4gICAgICAxMDtcbiAgICB9KTtcbiAgICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiArIHF1bik7XG4gICAgY29uc3QgaWZQcm9kdWt0SW5DYXJ0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBwcm9kdWt0Ll9pZCk7XG4gICAgaWYgKGlmUHJvZHVrdEluQ2FydCkge1xuICAgICAgc2V0Q2FydEl0ZW1zKFxuICAgICAgICBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtxdW59ICR7aXRlbS5uYW1lfSBoYXZlIGJlZW4gYWRkZWQgdG8geW91ciBjYXJ0YCk7XG5cbiAgICAgICAgICBpZiAoaXRlbS5faWQgPT09IHByb2R1a3QuX2lkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAuLi5pdGVtLFxuICAgICAgICAgICAgICBxdW46IGl0ZW0ucXVuICsgcXVuLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdG9hc3Quc3VjY2VzcyhgJHtpdGVtLnF1bn0gJHtpdGVtfSBoYXZlIGJlZW4gYWRkZWQgdG8geW91ciBjYXJ0YCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9kdWt0LnF1biA9IHF1bjtcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCB7IC4uLnByb2R1a3QgfV0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgb25EZWxldGVIYW5kbGVyID0gKHByb2R1Y3QpID0+IHtcbiAgICBjb25zdCByZXN0SXRlbXNJbkNhcnQgPSBjYXJ0SXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5faWQgIT09IHByb2R1Y3QuX2lkO1xuICAgIH0pO1xuXG4gICAgc2V0Q2FydEl0ZW1zKHJlc3RJdGVtc0luQ2FydCk7XG4gIH07XG4gIGNvbnN0IGZpbmNhbENvbnRleHQgPSB7XG4gICAgc2hvd0NhcnQ6IHNob3dDYXJ0LFxuICAgIHNldFNob3dDYXJ0OiBzZXRTaG93Q2FydCxcbiAgICBjYXJ0SXRlbXM6IGNhcnRJdGVtcyxcbiAgICB0b3RhbFByaWNlOiB0b3RhbFByaWNlLFxuICAgIHRvdGFsUXVuOiB0b3RhbFF1bixcbiAgICBxdW46IHF1bixcbiAgICBzZXRRdW46IHNldFF1bixcbiAgICBpbmNyZW1lbnQ6IGluY3JlbWVudCxcbiAgICBkZWNyZW1lbnQ6IGRlY3JlbWVudCxcbiAgICBvbkFkZEhhbmRsZXI6IG9uQWRkSGFuZGxlcixcbiAgICBvbkRlbGV0ZUhhbmRsZXI6IG9uRGVsZXRlSGFuZGxlcixcbiAgfTtcblxuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2ZpbmNhbENvbnRleHR9PntjaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsIkNvbnRleHQiLCJzaG93Q2FydCIsInNldFNob3dDYXJ0IiwiY2FydEl0ZW1zIiwidG90YWxQcmljZSIsInRvdGFsUXVuIiwicXVuIiwic2V0UXVuIiwiaW5jcmVtZW50IiwiZGVjcmVtZW50Iiwib25BZGRIYW5kbGVyIiwib25EZWxldGVIYW5kbGVyIiwiQ2FydENvbnRleHQiLCJjaGlsZHJlbiIsInNldENhcnRJdGVtcyIsInNldFRvdGFsUHJpY2UiLCJzZXRUb3RhbFF1biIsInByZXZRdHkiLCJwcmV2UXVuIiwicHJvZHVrdCIsInByZXYiLCJpZlByb2R1a3RJbkNhcnQiLCJmaW5kIiwiaXRlbSIsIl9pZCIsIm1hcCIsInN1Y2Nlc3MiLCJuYW1lIiwicHJvZHVjdCIsInJlc3RJdGVtc0luQ2FydCIsImZpbHRlciIsImZpbmNhbENvbnRleHQiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/CartContext.js\n");

/***/ })

});