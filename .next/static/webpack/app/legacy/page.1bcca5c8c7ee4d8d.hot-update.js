"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/legacy/page",{

/***/ "(app-pages-browser)/./src/components/Legacy/Main/Main.tsx":
/*!*********************************************!*\
  !*** ./src/components/Legacy/Main/Main.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ScrollVisibility */ \"(app-pages-browser)/./src/components/ScrollVisibility/index.ts\");\n/* harmony import */ var _components_Layout_Web3Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout/Web3Button */ \"(app-pages-browser)/./src/components/Layout/Web3Button/index.ts\");\n/* harmony import */ var _components_Legacy_Legacy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Legacy/Legacy */ \"(app-pages-browser)/./src/components/Legacy/Legacy/index.ts\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/connectors/injected */ \"(app-pages-browser)/./node_modules/@wagmi/connectors/dist/chunk-2UFLHRLT.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Main = (param)=>{\n    let { id } = param;\n    _s();\n    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const { address, isConnected = false, status } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)();\n    const { connect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useConnect)({\n        connector: new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector()\n    });\n    console.log(isConnected);\n    console.log(isReconnecting);\n    // Hooks\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setHasMounted(true);\n    }, []);\n    // Render\n    if (!hasMounted) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n        lineNumber: 27,\n        columnNumber: 29\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_1__.ScrollVisibility, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container h-100 w-100 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Legacy_Legacy__WEBPACK_IMPORTED_MODULE_3__.Legacy, {\n                    address: address\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 25\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n                lineNumber: 34,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n            lineNumber: 33,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Web3Button__WEBPACK_IMPORTED_MODULE_2__.Web3Button, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n            lineNumber: 39,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Legacy\\\\Main\\\\Main.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Main, \"b4shmD3UHHc/nT3wJLhpJ6ps9HU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useConnect\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xlZ2FjeS9NYWluL01haW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzhEO0FBQ0U7QUFDSjtBQUNSO0FBQ1U7QUFDWDtBQUVuRCxNQUFNUyxPQUFPO1FBQUMsRUFDVkMsRUFBRSxFQUNBOztJQUNGLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLEVBQUVNLE9BQU8sRUFBRUMsY0FBYyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHZixpREFBVUE7SUFDM0QsTUFBTSxFQUFFZ0IsT0FBTyxFQUFFLEdBQUdmLGlEQUFVQSxDQUFDO1FBQzNCZ0IsV0FBVyxJQUFJWix3RUFBaUJBO0lBQ3BDO0lBRUFhLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDWkksUUFBUUMsR0FBRyxDQUFDQztJQUVaLFFBQVE7SUFDUlosZ0RBQVNBLENBQUM7UUFDTkksY0FBYztJQUNsQixHQUFHLEVBQUU7SUFFTCxTQUFTO0lBQ1QsSUFBSSxDQUFDRCxZQUFZLHFCQUFPLDhEQUFDVTs7Ozs7SUFFekIscUJBQ0ksOERBQUNBO2tCQUNJUCw0QkFFRyw4REFBQ1osMEVBQWdCQTtzQkFDYiw0RUFBQ21CO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDbEIsNkRBQU1BO29CQUFDUyxTQUFTQTs7Ozs7Ozs7Ozs7Ozs7O3NDQUl6Qiw4REFBQ1YscUVBQVVBOzs7Ozs7Ozs7O0FBSTNCO0dBbENNTTs7UUFJK0NULDZDQUFVQTtRQUN2Q0MsNkNBQVVBOzs7S0FMNUJRO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xlZ2FjeS9NYWluL01haW4udHN4P2Q2YzIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZUFjY291bnQsIHVzZUNvbm5lY3QsIHVzZURpc2Nvbm5lY3QgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlzaWJpbGl0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9TY3JvbGxWaXNpYmlsaXR5J1xyXG5pbXBvcnQgeyBXZWIzQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9XZWIzQnV0dG9uJztcclxuaW1wb3J0IHsgTGVnYWN5IH0gZnJvbSAnQC9jb21wb25lbnRzL0xlZ2FjeS9MZWdhY3knO1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTWFpbiA9ICh7XHJcbiAgICBpZFxyXG59OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IFtoYXNNb3VudGVkLCBzZXRIYXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgPSBmYWxzZSwgc3RhdHVzIH0gPSB1c2VBY2NvdW50KCk7XHJcbiAgICBjb25zdCB7IGNvbm5lY3QgfSA9IHVzZUNvbm5lY3Qoe1xyXG4gICAgICAgIGNvbm5lY3RvcjogbmV3IEluamVjdGVkQ29ubmVjdG9yKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhpc0Nvbm5lY3RlZCk7XHJcbiAgICBjb25zb2xlLmxvZyhpc1JlY29ubmVjdGluZyk7XHJcblxyXG4gICAgLy8gSG9va3NcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SGFzTW91bnRlZCh0cnVlKTtcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIFJlbmRlclxyXG4gICAgaWYgKCFoYXNNb3VudGVkKSByZXR1cm4gPGRpdj48L2Rpdj47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7aXNDb25uZWN0ZWRcclxuICAgICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxTY3JvbGxWaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgaC0xMDAgdy0xMDAgbXgtYXV0byc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMZWdhY3kgYWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgIDxXZWIzQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluO1xyXG4iXSwibmFtZXMiOlsidXNlQWNjb3VudCIsInVzZUNvbm5lY3QiLCJTY3JvbGxWaXNpYmlsaXR5IiwiV2ViM0J1dHRvbiIsIkxlZ2FjeSIsIkluamVjdGVkQ29ubmVjdG9yIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk1haW4iLCJpZCIsImhhc01vdW50ZWQiLCJzZXRIYXNNb3VudGVkIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwic3RhdHVzIiwiY29ubmVjdCIsImNvbm5lY3RvciIsImNvbnNvbGUiLCJsb2ciLCJpc1JlY29ubmVjdGluZyIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Legacy/Main/Main.tsx\n"));

/***/ })

});