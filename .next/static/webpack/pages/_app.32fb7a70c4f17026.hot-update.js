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

/***/ "./store/AuthCTX.js":
/*!**************************!*\
  !*** ./store/AuthCTX.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createContext({\n    userName: \"\",\n    token: \"\",\n    isLoggedIn: false,\n    logIn: function() {},\n    logOut: function() {}\n});\nvar UserContext = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), userName = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), token1 = ref1[0], setToken = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (true) {\n            setToken(localStorage.getItem(\"token\"));\n            setUserName(localStorage.getItem(\"username\"));\n            console.log(token1);\n        } else {}\n    }, []);\n    var userIsLoggedIn = !!token1;\n    var logInHandler = function(token, username) {\n        setToken(token);\n        setUserName(username);\n    };\n    var logOutHnalder = function() {\n        setToken(null);\n    };\n    var contextValue = {\n        userName: userName,\n        token: token1,\n        isLoggedIn: userIsLoggedIn,\n        logIn: logInHandler,\n        logOut: logOutHnalder\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/AuthCTX.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserContext, \"WR9StnyPddWsJ96nj7KGK/y93pI=\");\n_c = UserContext;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\nvar _c;\n$RefreshReg$(_c, \"UserContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9BdXRoQ1RYLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1M7QUFDbkI7QUFDUjs7O0FBQ2hDLEdBQUssQ0FBQ0ssV0FBVyxpQkFBR0gsMERBQW1CLENBQUMsQ0FBQztJQUN2Q0ssUUFBUSxFQUFFLENBQUU7SUFDWkMsS0FBSyxFQUFFLENBQUU7SUFDVEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLEtBQUssRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0lBQ2ZDLE1BQU0sRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFTSxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUNyQyxHQUFLLENBQTJCVCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q0csUUFBUSxHQUFpQkgsR0FBYyxLQUE3QlUsV0FBVyxHQUFJVixHQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBM0JJLE1BQUssR0FBY0osSUFBVSxLQUF0QlcsUUFBUSxHQUFJWCxJQUFVO0lBQ3BDRCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQUUsRUFBRSxJQUE2QixFQUFFLENBQUM7WUFDbENZLFFBQVEsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBTztZQUNyQ0gsV0FBVyxDQUFDRSxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFVO1lBQzNDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1gsTUFBSztRQUNuQixDQUFDLE1BQU0sRUFHTjtJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNZLGNBQWMsS0FBS1osTUFBSztJQUU5QixHQUFLLENBQUNhLFlBQVksR0FBRyxRQUFRQyxDQUFQZCxLQUFLLEVBQUVjLFFBQVEsRUFBSyxDQUFDO1FBQ3pDUCxRQUFRLENBQUNQLEtBQUs7UUFDZE0sV0FBVyxDQUFDUSxRQUFRO0lBQ3RCLENBQUM7SUFFRCxHQUFLLENBQUNDLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO1FBQzNCUixRQUFRLENBQUMsSUFBSTtJQUNmLENBQUM7SUFDRCxHQUFLLENBQUNTLFlBQVksR0FBRyxDQUFDO1FBQ3BCakIsUUFBUSxFQUFFQSxRQUFRO1FBQ2xCQyxLQUFLLEVBQUVBLE1BQUs7UUFDWkMsVUFBVSxFQUFFVyxjQUFjO1FBQzFCVixLQUFLLEVBQUVXLFlBQVk7UUFDbkJWLE1BQU0sRUFBRVksYUFBYTtJQUN2QixDQUFDO0lBRUQsTUFBTSw2RUFDSGxCLFdBQVcsQ0FBQ29CLFFBQVE7UUFBQ0MsS0FBSyxFQUFFRixZQUFZO2tCQUN0Q1gsS0FBSyxDQUFDYyxRQUFROzs7Ozs7QUFHckIsQ0FBQztHQXJDWWYsV0FBVztLQUFYQSxXQUFXO0FBdUN4QiwrREFBZVAsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL0F1dGhDVFguanM/MDlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RGlzcGxheU5hbWUgfSBmcm9tIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBdXRoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICB1c2VyTmFtZTogXCJcIixcbiAgdG9rZW46IFwiXCIsXG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBsb2dJbjogKCkgPT4ge30sXG4gIGxvZ091dDogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFt1c2VyTmFtZSwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgICBzZXRVc2VyTmFtZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJuYW1lXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9rZW4obnVsbCk7XG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xuXG4gIGNvbnN0IGxvZ0luSGFuZGxlciA9ICh0b2tlbiwgdXNlcm5hbWUpID0+IHtcbiAgICBzZXRUb2tlbih0b2tlbik7XG4gICAgc2V0VXNlck5hbWUodXNlcm5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ091dEhuYWxkZXIgPSAoKSA9PiB7XG4gICAgc2V0VG9rZW4obnVsbCk7XG4gIH07XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcbiAgICB1c2VyTmFtZTogdXNlck5hbWUsXG4gICAgdG9rZW46IHRva2VuLFxuICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxuICAgIGxvZ0luOiBsb2dJbkhhbmRsZXIsXG4gICAgbG9nT3V0OiBsb2dPdXRIbmFsZGVyLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJnZXREaXNwbGF5TmFtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VyTmFtZSIsInRva2VuIiwiaXNMb2dnZWRJbiIsImxvZ0luIiwibG9nT3V0IiwiVXNlckNvbnRleHQiLCJwcm9wcyIsInNldFVzZXJOYW1lIiwic2V0VG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsInVzZXJJc0xvZ2dlZEluIiwibG9nSW5IYW5kbGVyIiwidXNlcm5hbWUiLCJsb2dPdXRIbmFsZGVyIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/AuthCTX.js\n");

/***/ })

});