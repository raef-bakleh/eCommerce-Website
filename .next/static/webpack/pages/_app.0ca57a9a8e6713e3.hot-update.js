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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Context\": function() { return /* binding */ Context; },\n/* harmony export */   \"CartContext\": function() { return /* binding */ CartContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    showCart: false,\n    setShowCart: function() {},\n    cartItems: [],\n    totalPrice: 0,\n    totalQun: 0,\n    qun: 0,\n    setQun: function() {},\n    increment: function() {},\n    decrement: function() {},\n    onAddHandler: function() {},\n    onDeleteHandler: function() {},\n    changeCartItemQuantity: function() {}\n});\nvar CartContext = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), showCart = ref[0], setShowCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), cartItems = ref1[0], setCartItems = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalPrice = ref2[0], setTotalPrice = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalQun = ref3[0], setTotalQun = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1), qun = ref4[0], setQun = ref4[1];\n    var increment = function() {\n        setQun(function(prevQty) {\n            return prevQty + 1;\n        });\n    };\n    var decrement = function() {\n        setQun(function(prevQun) {\n            if (prevQun - 1 < 1) return 1;\n            return prevQun - 1;\n        });\n    };\n    var onAddHandler = function(produkt) {\n        var ifProduktInCart = cartItems.any(function(item) {\n            return item._id === produkt._id;\n        });\n        setTotalPrice(function(prev) {\n            return prev + qun * produkt.price;\n        });\n        setTotalQun(function(prev) {\n            return prev + qun;\n        });\n        setQun(1);\n        if (ifProduktInCart) {\n            setCartItems(cartItems.map(function(item) {\n                if (item._id === produkt._id) {\n                    return _objectSpread({}, item, {\n                        qun: item.qun + qun\n                    });\n                }\n            }));\n        } else {\n            produkt.qun = qun;\n            setCartItems(_toConsumableArray(cartItems).concat([\n                _objectSpread({}, produkt)\n            ]));\n        }\n        localStorage.setItem(\"cartItems\", JSON.stringify([\n            cartItems\n        ]));\n    };\n    var onDeleteHandler = function(product) {\n        var restItemsInCart = cartItems.filter(function(item) {\n            return item._id !== product._id;\n        });\n        setCartItems(restItemsInCart);\n        setTotalPrice(function(prev) {\n            return prev - product.qun * product.price;\n        });\n        setTotalQun(function(prev) {\n            return prev - product.qun;\n        });\n        setQun(1);\n    };\n    var foundProdukt;\n    var changeCartItemQuantity = function(id, action) {\n        var allMeals = cartItems;\n        var cartItemsWithoutTheFoundProduct = cartItems.filter(function(item) {\n            return item._id !== id;\n        });\n        foundProdukt = cartItems.find(function(item) {\n            return item._id === id;\n        });\n        if (action === \"increment\") {\n            setCartItems(allMeals.map(function(meal) {\n                if (meal._id === id) {\n                    return _objectSpread({}, meal, {\n                        qun: meal.qun += 1\n                    });\n                }\n                return meal;\n            }));\n            setTotalPrice(function(prev) {\n                return prev + foundProdukt.price;\n            });\n            setTotalQun(function(prev) {\n                return prev + 1;\n            });\n        } else if (action === \"decrement\") {\n            if (foundProdukt.qun > 1) {\n                setCartItems(allMeals.map(function(meal) {\n                    if (meal._id === id) {\n                        return _objectSpread({}, meal, {\n                            qun: meal.qun -= 1\n                        });\n                    }\n                    return meal;\n                }));\n                setTotalPrice(function(prev) {\n                    return prev - foundProdukt.price;\n                });\n                setTotalQun(function(prev) {\n                    return prev - 1;\n                });\n            }\n        }\n    };\n    var fincalContext = {\n        showCart: showCart,\n        setShowCart: setShowCart,\n        cartItems: cartItems,\n        totalPrice: totalPrice,\n        totalQun: totalQun,\n        qun: qun,\n        setQun: setQun,\n        increment: increment,\n        decrement: decrement,\n        onAddHandler: onAddHandler,\n        onDeleteHandler: onDeleteHandler,\n        changeCartItemQuantity: changeCartItemQuantity\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Context.Provider, {\n        value: fincalContext,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/CartContext.js\",\n        lineNumber: 122,\n        columnNumber: 10\n    }, _this));\n};\n_s(CartContext, \"KihS6PmrKTQEzGuhoGAbmjGjdWo=\");\n_c = CartContext;\nvar _c;\n$RefreshReg$(_c, \"CartContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9DYXJ0Q29udGV4dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE2RTtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDTSxPQUFPLGlCQUFHTCxvREFBYSxDQUFDLENBQUM7SUFDcENNLFFBQVEsRUFBRSxLQUFLO0lBQ2ZDLFdBQVcsRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0lBQ3JCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2JDLFVBQVUsRUFBRSxDQUFDO0lBQ2JDLFFBQVEsRUFBRSxDQUFDO0lBQ1hDLEdBQUcsRUFBRSxDQUFDO0lBQ05DLE1BQU0sRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0lBQ2hCQyxTQUFTLEVBQUUsUUFBUSxHQUFGLENBQUMsQ0FBQztJQUNuQkMsU0FBUyxFQUFFLFFBQVEsR0FBRixDQUFDLENBQUM7SUFDbkJDLFlBQVksRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0lBQ3RCQyxlQUFlLEVBQUUsUUFBUSxHQUFGLENBQUMsQ0FBQztJQUN6QkMsc0JBQXNCLEVBQUUsUUFBUSxHQUFGLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRU0sR0FBSyxDQUFDQyxXQUFXLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDcEMsR0FBSyxDQUEyQmpCLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXZDSSxRQUFRLEdBQWlCSixHQUFlLEtBQTlCSyxXQUFXLEdBQUlMLEdBQWU7SUFDL0MsR0FBSyxDQUE2QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUF0Q00sU0FBUyxHQUFrQk4sSUFBWSxLQUE1QmtCLFlBQVksR0FBSWxCLElBQVk7SUFDOUMsR0FBSyxDQUErQkEsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBdkNPLFVBQVUsR0FBbUJQLElBQVcsS0FBNUJtQixhQUFhLEdBQUluQixJQUFXO0lBQy9DLEdBQUssQ0FBMkJBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQW5DUSxRQUFRLEdBQWlCUixJQUFXLEtBQTFCb0IsV0FBVyxHQUFJcEIsSUFBVztJQUMzQyxHQUFLLENBQWlCQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF6QlMsR0FBRyxHQUFZVCxJQUFXLEtBQXJCVSxNQUFNLEdBQUlWLElBQVc7SUFFakMsR0FBSyxDQUFDVyxTQUFTLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztRQUN2QkQsTUFBTSxDQUFDLFFBQVEsQ0FBUFcsT0FBTztZQUFLQSxNQUFNLENBQU5BLE9BQU8sR0FBRyxDQUFDOztJQUNqQyxDQUFDO0lBRUQsR0FBSyxDQUFDVCxTQUFTLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztRQUN2QkYsTUFBTSxDQUFDLFFBQVEsQ0FBUFksT0FBTyxFQUFLLENBQUM7WUFDbkIsRUFBRSxFQUFFQSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUU3QixNQUFNLENBQUNBLE9BQU8sR0FBRyxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBQ0QsR0FBSyxDQUFDVCxZQUFZLEdBQUcsUUFBUSxDQUFQVSxPQUFPLEVBQUssQ0FBQztRQUNqQyxHQUFLLENBQUNDLGVBQWUsR0FBR2xCLFNBQVMsQ0FBQ21CLEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ0EsSUFBSSxDQUFDQyxHQUFHLEtBQUtKLE9BQU8sQ0FBQ0ksR0FBRztRQUNqQyxDQUFDO1FBQ0RSLGFBQWEsQ0FBQyxRQUFRLENBQVBTLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLEdBQUduQixHQUFHLEdBQUdjLE9BQU8sQ0FBQ00sS0FBSzs7UUFDbERULFdBQVcsQ0FBQyxRQUFRLENBQVBRLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLEdBQUduQixHQUFHOztRQUNoQ0MsTUFBTSxDQUFDLENBQUM7UUFFUixFQUFFLEVBQUVjLGVBQWUsRUFBRSxDQUFDO1lBQ3BCTixZQUFZLENBQ1ZaLFNBQVMsQ0FBQ3dCLEdBQUcsQ0FBQyxRQUFRLENBQVBKLElBQUksRUFBSyxDQUFDO2dCQUN2QixFQUFFLEVBQUVBLElBQUksQ0FBQ0MsR0FBRyxLQUFLSixPQUFPLENBQUNJLEdBQUcsRUFBRSxDQUFDO29CQUM3QixNQUFNLG1CQUNERCxJQUFJO3dCQUNQakIsR0FBRyxFQUFFaUIsSUFBSSxDQUFDakIsR0FBRyxHQUFHQSxHQUFHOztnQkFFdkIsQ0FBQztZQUNILENBQUM7UUFFTCxDQUFDLE1BQU0sQ0FBQztZQUNOYyxPQUFPLENBQUNkLEdBQUcsR0FBR0EsR0FBRztZQUNqQlMsWUFBWSxvQkFBS1osU0FBUyxTQUFiLENBQUM7a0NBQW1CaUIsT0FBTztZQUFFLENBQUM7UUFDN0MsQ0FBQztRQUNEUSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFXLFlBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM1QjtZQUFBQSxTQUFTO1FBQUEsQ0FBQztJQUM5RCxDQUFDO0lBRUQsR0FBSyxDQUFDUSxlQUFlLEdBQUcsUUFBUSxDQUFQcUIsT0FBTyxFQUFLLENBQUM7UUFDcEMsR0FBSyxDQUFDQyxlQUFlLEdBQUc5QixTQUFTLENBQUMrQixNQUFNLENBQUMsUUFBUSxDQUFQWCxJQUFJLEVBQUssQ0FBQztZQUNsRCxNQUFNLENBQUNBLElBQUksQ0FBQ0MsR0FBRyxLQUFLUSxPQUFPLENBQUNSLEdBQUc7UUFDakMsQ0FBQztRQUVEVCxZQUFZLENBQUNrQixlQUFlO1FBQzVCakIsYUFBYSxDQUFDLFFBQVEsQ0FBUFMsSUFBSTtZQUFLQSxNQUFNLENBQU5BLElBQUksR0FBR08sT0FBTyxDQUFDMUIsR0FBRyxHQUFHMEIsT0FBTyxDQUFDTixLQUFLOztRQUMxRFQsV0FBVyxDQUFDLFFBQVEsQ0FBUFEsSUFBSTtZQUFLQSxNQUFNLENBQU5BLElBQUksR0FBR08sT0FBTyxDQUFDMUIsR0FBRzs7UUFDeENDLE1BQU0sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELEdBQUcsQ0FBQzRCLFlBQVk7SUFDaEIsR0FBSyxDQUFDdkIsc0JBQXNCLEdBQUcsUUFBUSxDQUFQd0IsRUFBRSxFQUFFQyxNQUFNLEVBQUssQ0FBQztRQUM5QyxHQUFLLENBQUNDLFFBQVEsR0FBR25DLFNBQVM7UUFDMUIsR0FBSyxDQUFDb0MsK0JBQStCLEdBQUdwQyxTQUFTLENBQUMrQixNQUFNLENBQ3RELFFBQVEsQ0FBUFgsSUFBSTtZQUFLQSxNQUFNLENBQU5BLElBQUksQ0FBQ0MsR0FBRyxLQUFLWSxFQUFFOztRQUUzQkQsWUFBWSxHQUFHaEMsU0FBUyxDQUFDcUMsSUFBSSxDQUFDLFFBQVEsQ0FBUGpCLElBQUk7WUFBS0EsTUFBTSxDQUFOQSxJQUFJLENBQUNDLEdBQUcsS0FBS1ksRUFBRTs7UUFDdkQsRUFBRSxFQUFFQyxNQUFNLEtBQUssQ0FBVyxZQUFFLENBQUM7WUFDM0J0QixZQUFZLENBQ1Z1QixRQUFRLENBQUNYLEdBQUcsQ0FBQyxRQUFRLENBQVBjLElBQUksRUFBSyxDQUFDO2dCQUN0QixFQUFFLEVBQUVBLElBQUksQ0FBQ2pCLEdBQUcsS0FBS1ksRUFBRSxFQUFFLENBQUM7b0JBQ3BCLE1BQU0sbUJBQU1LLElBQUk7d0JBQUVuQyxHQUFHLEVBQUdtQyxJQUFJLENBQUNuQyxHQUFHLElBQUksQ0FBQzs7Z0JBQ3ZDLENBQUM7Z0JBQ0QsTUFBTSxDQUFDbUMsSUFBSTtZQUNiLENBQUM7WUFHSHpCLGFBQWEsQ0FBQyxRQUFRLENBQVBTLElBQUk7Z0JBQUtBLE1BQU0sQ0FBTkEsSUFBSSxHQUFHVSxZQUFZLENBQUNULEtBQUs7O1lBQ2pEVCxXQUFXLENBQUMsUUFBUSxDQUFQUSxJQUFJO2dCQUFLQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztRQUNoQyxDQUFDLE1BQU0sRUFBRSxFQUFFWSxNQUFNLEtBQUssQ0FBVyxZQUFFLENBQUM7WUFDbEMsRUFBRSxFQUFFRixZQUFZLENBQUM3QixHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pCUyxZQUFZLENBQ1Z1QixRQUFRLENBQUNYLEdBQUcsQ0FBQyxRQUFRLENBQVBjLElBQUksRUFBSyxDQUFDO29CQUN0QixFQUFFLEVBQUVBLElBQUksQ0FBQ2pCLEdBQUcsS0FBS1ksRUFBRSxFQUFFLENBQUM7d0JBQ3BCLE1BQU0sbUJBQU1LLElBQUk7NEJBQUVuQyxHQUFHLEVBQUdtQyxJQUFJLENBQUNuQyxHQUFHLElBQUksQ0FBQzs7b0JBQ3ZDLENBQUM7b0JBQ0QsTUFBTSxDQUFDbUMsSUFBSTtnQkFDYixDQUFDO2dCQUVIekIsYUFBYSxDQUFDLFFBQVEsQ0FBUFMsSUFBSTtvQkFBS0EsTUFBTSxDQUFOQSxJQUFJLEdBQUdVLFlBQVksQ0FBQ1QsS0FBSzs7Z0JBQ2pEVCxXQUFXLENBQUMsUUFBUSxDQUFQUSxJQUFJO29CQUFLQSxNQUFNLENBQU5BLElBQUksR0FBRyxDQUFDOztZQUNoQyxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFDRCxHQUFLLENBQUNpQixhQUFhLEdBQUcsQ0FBQztRQUNyQnpDLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsV0FBVyxFQUFFQSxXQUFXO1FBQ3hCQyxTQUFTLEVBQUVBLFNBQVM7UUFDcEJDLFVBQVUsRUFBRUEsVUFBVTtRQUN0QkMsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxHQUFHLEVBQUVBLEdBQUc7UUFDUkMsTUFBTSxFQUFFQSxNQUFNO1FBQ2RDLFNBQVMsRUFBRUEsU0FBUztRQUNwQkMsU0FBUyxFQUFFQSxTQUFTO1FBQ3BCQyxZQUFZLEVBQUVBLFlBQVk7UUFDMUJDLGVBQWUsRUFBRUEsZUFBZTtRQUNoQ0Msc0JBQXNCLEVBQUVBLHNCQUFzQjtJQUNoRCxDQUFDO0lBRUQsTUFBTSw2RUFBRVosT0FBTyxDQUFDMkMsUUFBUTtRQUFDQyxLQUFLLEVBQUVGLGFBQWE7a0JBQUc1QixRQUFROzs7Ozs7QUFDMUQsQ0FBQztHQXhHWUQsV0FBVztLQUFYQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0NhcnRDb250ZXh0LmpzPzVlYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xuXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xuICBzaG93Q2FydDogZmFsc2UsXG4gIHNldFNob3dDYXJ0OiAoKSA9PiB7fSxcbiAgY2FydEl0ZW1zOiBbXSxcbiAgdG90YWxQcmljZTogMCxcbiAgdG90YWxRdW46IDAsXG4gIHF1bjogMCxcbiAgc2V0UXVuOiAoKSA9PiB7fSxcbiAgaW5jcmVtZW50OiAoKSA9PiB7fSxcbiAgZGVjcmVtZW50OiAoKSA9PiB7fSxcbiAgb25BZGRIYW5kbGVyOiAoKSA9PiB7fSxcbiAgb25EZWxldGVIYW5kbGVyOiAoKSA9PiB7fSxcbiAgY2hhbmdlQ2FydEl0ZW1RdWFudGl0eTogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2hvd0NhcnQsIHNldFNob3dDYXJ0XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RvdGFsUHJpY2UsIHNldFRvdGFsUHJpY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbFF1biwgc2V0VG90YWxRdW5dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdW4sIHNldFF1bl0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBpbmNyZW1lbnQgPSAoKSA9PiB7XG4gICAgc2V0UXVuKChwcmV2UXR5KSA9PiBwcmV2UXR5ICsgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVtZW50ID0gKCkgPT4ge1xuICAgIHNldFF1bigocHJldlF1bikgPT4ge1xuICAgICAgaWYgKHByZXZRdW4gLSAxIDwgMSkgcmV0dXJuIDE7XG5cbiAgICAgIHJldHVybiBwcmV2UXVuIC0gMTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3Qgb25BZGRIYW5kbGVyID0gKHByb2R1a3QpID0+IHtcbiAgICBjb25zdCBpZlByb2R1a3RJbkNhcnQgPSBjYXJ0SXRlbXMuYW55KChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5faWQgPT09IHByb2R1a3QuX2lkO1xuICAgIH0pO1xuICAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgKyBxdW4gKiBwcm9kdWt0LnByaWNlKTtcbiAgICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiArIHF1bik7XG4gICAgc2V0UXVuKDEpO1xuXG4gICAgaWYgKGlmUHJvZHVrdEluQ2FydCkge1xuICAgICAgc2V0Q2FydEl0ZW1zKFxuICAgICAgICBjYXJ0SXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uX2lkID09PSBwcm9kdWt0Ll9pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgcXVuOiBpdGVtLnF1biArIHF1bixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvZHVrdC5xdW4gPSBxdW47XG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgeyAuLi5wcm9kdWt0IH1dKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoW2NhcnRJdGVtc10pKTtcbiAgfTtcblxuICBjb25zdCBvbkRlbGV0ZUhhbmRsZXIgPSAocHJvZHVjdCkgPT4ge1xuICAgIGNvbnN0IHJlc3RJdGVtc0luQ2FydCA9IGNhcnRJdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIHJldHVybiBpdGVtLl9pZCAhPT0gcHJvZHVjdC5faWQ7XG4gICAgfSk7XG5cbiAgICBzZXRDYXJ0SXRlbXMocmVzdEl0ZW1zSW5DYXJ0KTtcbiAgICBzZXRUb3RhbFByaWNlKChwcmV2KSA9PiBwcmV2IC0gcHJvZHVjdC5xdW4gKiBwcm9kdWN0LnByaWNlKTtcbiAgICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiAtIHByb2R1Y3QucXVuKTtcbiAgICBzZXRRdW4oMSk7XG4gIH07XG4gIGxldCBmb3VuZFByb2R1a3Q7XG4gIGNvbnN0IGNoYW5nZUNhcnRJdGVtUXVhbnRpdHkgPSAoaWQsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IGFsbE1lYWxzID0gY2FydEl0ZW1zO1xuICAgIGNvbnN0IGNhcnRJdGVtc1dpdGhvdXRUaGVGb3VuZFByb2R1Y3QgPSBjYXJ0SXRlbXMuZmlsdGVyKFxuICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBpZFxuICAgICk7XG4gICAgZm91bmRQcm9kdWt0ID0gY2FydEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBpZCk7XG4gICAgaWYgKGFjdGlvbiA9PT0gXCJpbmNyZW1lbnRcIikge1xuICAgICAgc2V0Q2FydEl0ZW1zKFxuICAgICAgICBhbGxNZWFscy5tYXAoKG1lYWwpID0+IHtcbiAgICAgICAgICBpZiAobWVhbC5faWQgPT09IGlkKSB7XG4gICAgICAgICAgICByZXR1cm4geyAuLi5tZWFsLCBxdW46IChtZWFsLnF1biArPSAxKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVhbDtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgKyBmb3VuZFByb2R1a3QucHJpY2UpO1xuICAgICAgc2V0VG90YWxRdW4oKHByZXYpID0+IHByZXYgKyAxKTtcbiAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PT0gXCJkZWNyZW1lbnRcIikge1xuICAgICAgaWYgKGZvdW5kUHJvZHVrdC5xdW4gPiAxKSB7XG4gICAgICAgIHNldENhcnRJdGVtcyhcbiAgICAgICAgICBhbGxNZWFscy5tYXAoKG1lYWwpID0+IHtcbiAgICAgICAgICAgIGlmIChtZWFsLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ubWVhbCwgcXVuOiAobWVhbC5xdW4gLT0gMSkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZWFsO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICAgIHNldFRvdGFsUHJpY2UoKHByZXYpID0+IHByZXYgLSBmb3VuZFByb2R1a3QucHJpY2UpO1xuICAgICAgICBzZXRUb3RhbFF1bigocHJldikgPT4gcHJldiAtIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgY29uc3QgZmluY2FsQ29udGV4dCA9IHtcbiAgICBzaG93Q2FydDogc2hvd0NhcnQsXG4gICAgc2V0U2hvd0NhcnQ6IHNldFNob3dDYXJ0LFxuICAgIGNhcnRJdGVtczogY2FydEl0ZW1zLFxuICAgIHRvdGFsUHJpY2U6IHRvdGFsUHJpY2UsXG4gICAgdG90YWxRdW46IHRvdGFsUXVuLFxuICAgIHF1bjogcXVuLFxuICAgIHNldFF1bjogc2V0UXVuLFxuICAgIGluY3JlbWVudDogaW5jcmVtZW50LFxuICAgIGRlY3JlbWVudDogZGVjcmVtZW50LFxuICAgIG9uQWRkSGFuZGxlcjogb25BZGRIYW5kbGVyLFxuICAgIG9uRGVsZXRlSGFuZGxlcjogb25EZWxldGVIYW5kbGVyLFxuICAgIGNoYW5nZUNhcnRJdGVtUXVhbnRpdHk6IGNoYW5nZUNhcnRJdGVtUXVhbnRpdHksXG4gIH07XG5cbiAgcmV0dXJuIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtmaW5jYWxDb250ZXh0fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidG9hc3QiLCJDb250ZXh0Iiwic2hvd0NhcnQiLCJzZXRTaG93Q2FydCIsImNhcnRJdGVtcyIsInRvdGFsUHJpY2UiLCJ0b3RhbFF1biIsInF1biIsInNldFF1biIsImluY3JlbWVudCIsImRlY3JlbWVudCIsIm9uQWRkSGFuZGxlciIsIm9uRGVsZXRlSGFuZGxlciIsImNoYW5nZUNhcnRJdGVtUXVhbnRpdHkiLCJDYXJ0Q29udGV4dCIsImNoaWxkcmVuIiwic2V0Q2FydEl0ZW1zIiwic2V0VG90YWxQcmljZSIsInNldFRvdGFsUXVuIiwicHJldlF0eSIsInByZXZRdW4iLCJwcm9kdWt0IiwiaWZQcm9kdWt0SW5DYXJ0IiwiYW55IiwiaXRlbSIsIl9pZCIsInByZXYiLCJwcmljZSIsIm1hcCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdCIsInJlc3RJdGVtc0luQ2FydCIsImZpbHRlciIsImZvdW5kUHJvZHVrdCIsImlkIiwiYWN0aW9uIiwiYWxsTWVhbHMiLCJjYXJ0SXRlbXNXaXRob3V0VGhlRm91bmRQcm9kdWN0IiwiZmluZCIsIm1lYWwiLCJmaW5jYWxDb250ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/CartContext.js\n");

/***/ })

});