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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var next_dist_shared_lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/shared/lib/utils */ \"./node_modules/next/dist/shared/lib/utils.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createContext({\n    userName: \"\",\n    token: \"\",\n    isLoggedIn: false,\n    logIn: function() {},\n    logOut: function() {}\n});\nvar UserContext = function(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), userName = ref[0], setUserName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), token1 = ref1[0], setToken = ref1[1];\n    var useIslogged;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        if (true) {\n            setToken(localStorage.getItem(\"token\"));\n            setUserName(localStorage.getItem(\"username\"));\n            console.log(token1);\n        } else {}\n    }, []);\n    var userIsLoggedIn = !!token1;\n    var logInHandler = function(token, username) {\n        setToken(token);\n        setUserName(username);\n    };\n    var logOutHnalder = function() {\n        setToken(null);\n    };\n    var contextValue = {\n        userName: userName,\n        token: token1,\n        isLoggedIn: userIsLoggedIn,\n        logIn: logInHandler,\n        logOut: logOutHnalder\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: contextValue,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/admin/Desktop/eCommerce-Website/store/AuthCTX.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this));\n};\n_s(UserContext, \"WR9StnyPddWsJ96nj7KGK/y93pI=\");\n_c = UserContext;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\nvar _c;\n$RefreshReg$(_c, \"UserContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9BdXRoQ1RYLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1M7QUFDbkI7QUFDUjs7O0FBQ2hDLEdBQUssQ0FBQ0ssV0FBVyxpQkFBR0gsMERBQW1CLENBQUMsQ0FBQztJQUN2Q0ssUUFBUSxFQUFFLENBQUU7SUFDWkMsS0FBSyxFQUFFLENBQUU7SUFDVEMsVUFBVSxFQUFFLEtBQUs7SUFDakJDLEtBQUssRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0lBQ2ZDLE1BQU0sRUFBRSxRQUFRLEdBQUYsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFFTSxHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDOztJQUNyQyxHQUFLLENBQTJCVCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q0csUUFBUSxHQUFpQkgsR0FBYyxLQUE3QlUsV0FBVyxHQUFJVixHQUFjO0lBQzlDLEdBQUssQ0FBcUJBLElBQVUsR0FBVkEsK0NBQVEsSUFBM0JJLE1BQUssR0FBY0osSUFBVSxLQUF0QlcsUUFBUSxHQUFJWCxJQUFVO0lBQ3BDLEdBQUssQ0FBQ1ksV0FBVztJQUNqQmIsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUUsSUFBNkIsRUFBRSxDQUFDO1lBQ2xDWSxRQUFRLENBQUNFLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQU87WUFDckNKLFdBQVcsQ0FBQ0csWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBVTtZQUMzQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNaLE1BQUs7UUFDbkIsQ0FBQyxNQUFNLEVBR047SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsR0FBSyxDQUFDYSxjQUFjLEtBQUtiLE1BQUs7SUFFOUIsR0FBSyxDQUFDYyxZQUFZLEdBQUcsUUFBUUMsQ0FBUGYsS0FBSyxFQUFFZSxRQUFRLEVBQUssQ0FBQztRQUN6Q1IsUUFBUSxDQUFDUCxLQUFLO1FBQ2RNLFdBQVcsQ0FBQ1MsUUFBUTtJQUN0QixDQUFDO0lBRUQsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQlQsUUFBUSxDQUFDLElBQUk7SUFDZixDQUFDO0lBQ0QsR0FBSyxDQUFDVSxZQUFZLEdBQUcsQ0FBQztRQUNwQmxCLFFBQVEsRUFBRUEsUUFBUTtRQUNsQkMsS0FBSyxFQUFFQSxNQUFLO1FBQ1pDLFVBQVUsRUFBRVksY0FBYztRQUMxQlgsS0FBSyxFQUFFWSxZQUFZO1FBQ25CWCxNQUFNLEVBQUVhLGFBQWE7SUFDdkIsQ0FBQztJQUVELE1BQU0sNkVBQ0huQixXQUFXLENBQUNxQixRQUFRO1FBQUNDLEtBQUssRUFBRUYsWUFBWTtrQkFDdENaLEtBQUssQ0FBQ2UsUUFBUTs7Ozs7O0FBR3JCLENBQUM7R0FyQ1loQixXQUFXO0tBQVhBLFdBQVc7QUF1Q3hCLCtEQUFlUCxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvQXV0aENUWC5qcz8wOWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXREaXNwbGF5TmFtZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlsc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IEF1dGhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIHVzZXJOYW1lOiBcIlwiLFxuICB0b2tlbjogXCJcIixcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGxvZ0luOiAoKSA9PiB7fSxcbiAgbG9nT3V0OiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3VzZXJOYW1lLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCB1c2VJc2xvZ2dlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICAgIHNldFVzZXJOYW1lKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIikpO1xuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUb2tlbihudWxsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgY29uc3QgdXNlcklzTG9nZ2VkSW4gPSAhIXRva2VuO1xuXG4gIGNvbnN0IGxvZ0luSGFuZGxlciA9ICh0b2tlbiwgdXNlcm5hbWUpID0+IHtcbiAgICBzZXRUb2tlbih0b2tlbik7XG4gICAgc2V0VXNlck5hbWUodXNlcm5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ091dEhuYWxkZXIgPSAoKSA9PiB7XG4gICAgc2V0VG9rZW4obnVsbCk7XG4gIH07XG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcbiAgICB1c2VyTmFtZTogdXNlck5hbWUsXG4gICAgdG9rZW46IHRva2VuLFxuICAgIGlzTG9nZ2VkSW46IHVzZXJJc0xvZ2dlZEluLFxuICAgIGxvZ0luOiBsb2dJbkhhbmRsZXIsXG4gICAgbG9nT3V0OiBsb2dPdXRIbmFsZGVyLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjb250ZXh0VmFsdWV9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJnZXREaXNwbGF5TmFtZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VyTmFtZSIsInRva2VuIiwiaXNMb2dnZWRJbiIsImxvZ0luIiwibG9nT3V0IiwiVXNlckNvbnRleHQiLCJwcm9wcyIsInNldFVzZXJOYW1lIiwic2V0VG9rZW4iLCJ1c2VJc2xvZ2dlZCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjb25zb2xlIiwibG9nIiwidXNlcklzTG9nZ2VkSW4iLCJsb2dJbkhhbmRsZXIiLCJ1c2VybmFtZSIsImxvZ091dEhuYWxkZXIiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/AuthCTX.js\n");

/***/ })

});