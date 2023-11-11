"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Home/Main/Main.tsx":
/*!*******************************************!*\
  !*** ./src/components/Home/Main/Main.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _components_Layout_Web3Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout/Web3Button */ \"(app-pages-browser)/./src/components/Layout/Web3Button/index.ts\");\n/* harmony import */ var _components_Home_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Home/Hero */ \"(app-pages-browser)/./src/components/Home/Hero/index.ts\");\n/* harmony import */ var _components_Home_Bank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Home/Bank */ \"(app-pages-browser)/./src/components/Home/Bank/index.ts\");\n/* harmony import */ var _components_Home_Calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Home/Calculator */ \"(app-pages-browser)/./src/components/Home/Calculator/index.ts\");\n/* harmony import */ var _components_Home_Statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Home/Statistics */ \"(app-pages-browser)/./src/components/Home/Statistics/index.ts\");\n/* harmony import */ var wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi/connectors/injected */ \"(app-pages-browser)/./node_modules/@wagmi/connectors/dist/chunk-2UFLHRLT.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _scripts_test_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/scripts/test.js */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Main = (param)=>{\n    let { id } = param;\n    _s();\n    const [hasMounted, setHasMounted] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const { address, isConnected = false, status } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount)();\n    const { connect } = (0,wagmi__WEBPACK_IMPORTED_MODULE_8__.useConnect)({\n        connector: new wagmi_connectors_injected__WEBPACK_IMPORTED_MODULE_9__.InjectedConnector()\n    });\n    var IsConnected = isConnected;\n    if (status == \"reconnecting\") {\n        IsConnected = false;\n    }\n    // Hooks\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        setHasMounted(true);\n    }, []);\n    // Render\n    if (!hasMounted) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n        lineNumber: 35,\n        columnNumber: 29\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: IsConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container h-100 w-100 mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Hero__WEBPACK_IMPORTED_MODULE_2__.Hero, {\n                    address: address,\n                    openmodal: ()=>(0,_scripts_test_js__WEBPACK_IMPORTED_MODULE_7__.OpenModal)(\"modal-myacc\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Calculator__WEBPACK_IMPORTED_MODULE_4__.Calculator, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Statistics__WEBPACK_IMPORTED_MODULE_5__.Statistics, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_Bank__WEBPACK_IMPORTED_MODULE_3__.Bank, {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 21\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n            lineNumber: 41,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout_Web3Button__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n            lineNumber: 48,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Main\\\\Main.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Main, \"b4shmD3UHHc/nT3wJLhpJ6ps9HU=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useAccount,\n        wagmi__WEBPACK_IMPORTED_MODULE_8__.useConnect\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvTWFpbi9NYWluLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUU4RDtBQUNGO0FBQ2Q7QUFDQTtBQUNZO0FBQ0E7QUFDSTtBQUNYO0FBQ087QUFHMUQsTUFBTVksT0FBTztRQUFDLEVBQ1ZDLEVBQUUsRUFDQTs7SUFDRixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR04sK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxFQUFFTyxPQUFPLEVBQUVDLGNBQWMsS0FBSyxFQUFFQyxNQUFNLEVBQUUsR0FBR2xCLGlEQUFVQTtJQUMzRCxNQUFNLEVBQUVtQixPQUFPLEVBQUUsR0FBR2xCLGlEQUFVQSxDQUFDO1FBQzNCbUIsV0FBVyxJQUFJYix3RUFBaUJBO0lBQ3BDO0lBRUEsSUFBSWMsY0FBY0o7SUFFbEIsSUFBSUMsVUFBVSxnQkFBZ0I7UUFDMUJHLGNBQWM7SUFDbEI7SUFFQSxRQUFRO0lBQ1JYLGdEQUFTQSxDQUFDO1FBQ05LLGNBQWM7SUFDbEIsR0FBRyxFQUFFO0lBRUwsU0FBUztJQUNULElBQUksQ0FBQ0QsWUFBWSxxQkFBTyw4REFBQ1E7Ozs7O0lBRXpCLHFCQUNJLDhEQUFDQTtrQkFDSUQsNEJBRUcsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDcEIsdURBQUlBO29CQUFDYSxTQUFTQTtvQkFBU1EsV0FBVyxJQUFNYiwyREFBU0EsQ0FBQzs7Ozs7OzhCQUNuRCw4REFBQ04sbUVBQVVBOzs7Ozs4QkFDWCw4REFBQ0MsbUVBQVVBOzs7Ozs4QkFDWCw4REFBQ0YsdURBQUlBOzs7Ozs7Ozs7O3NDQUdULDhEQUFDRixxRUFBVUE7Ozs7Ozs7Ozs7QUFJM0I7R0F0Q01VOztRQUkrQ1osNkNBQVVBO1FBQ3ZDQyw2Q0FBVUE7OztLQUw1Qlc7QUF3Q04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9NYWluL01haW4udHN4P2QxZWUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgdXNlQWNjb3VudCwgdXNlQ29ubmVjdCwgdXNlRGlzY29ubmVjdCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBXZWIzQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL0xheW91dC9XZWIzQnV0dG9uJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJ0AvY29tcG9uZW50cy9Ib21lL0hlcm8nO1xyXG5pbXBvcnQgeyBCYW5rIH0gZnJvbSAnQC9jb21wb25lbnRzL0hvbWUvQmFuayc7XHJcbmltcG9ydCB7IENhbGN1bGF0b3IgfSBmcm9tICdAL2NvbXBvbmVudHMvSG9tZS9DYWxjdWxhdG9yJztcclxuaW1wb3J0IHsgU3RhdGlzdGljcyB9IGZyb20gJ0AvY29tcG9uZW50cy9Ib21lL1N0YXRpc3RpY3MnO1xyXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJ3YWdtaS9jb25uZWN0b3JzL2luamVjdGVkXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBPcGVuTW9kYWwsIENsb3NlTW9kYWwgfSBmcm9tICdAL3NjcmlwdHMvdGVzdC5qcyc7XHJcbmltcG9ydCB7IEhvbWVTdGF0c01vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwnO1xyXG5cclxuY29uc3QgTWFpbiA9ICh7XHJcbiAgICBpZFxyXG59OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IFtoYXNNb3VudGVkLCBzZXRIYXNNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHsgYWRkcmVzcywgaXNDb25uZWN0ZWQgPSBmYWxzZSwgc3RhdHVzIH0gPSB1c2VBY2NvdW50KCk7XHJcbiAgICBjb25zdCB7IGNvbm5lY3QgfSA9IHVzZUNvbm5lY3Qoe1xyXG4gICAgICAgIGNvbm5lY3RvcjogbmV3IEluamVjdGVkQ29ubmVjdG9yKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgSXNDb25uZWN0ZWQgPSBpc0Nvbm5lY3RlZDtcclxuXHJcbiAgICBpZiAoc3RhdHVzID09IFwicmVjb25uZWN0aW5nXCIpIHtcclxuICAgICAgICBJc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEhvb2tzXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldEhhc01vdW50ZWQodHJ1ZSk7XHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICAvLyBSZW5kZXJcclxuICAgIGlmICghaGFzTW91bnRlZCkgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge0lzQ29ubmVjdGVkXHJcbiAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGgtMTAwIHctMTAwIG14LWF1dG8nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIZXJvIGFkZHJlc3M9e2FkZHJlc3N9IG9wZW5tb2RhbD17KCkgPT4gT3Blbk1vZGFsKFwibW9kYWwtbXlhY2NcIil9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhbGN1bGF0b3IgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RhdGlzdGljcyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYW5rLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8V2ViM0J1dHRvbiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJ1c2VDb25uZWN0IiwiV2ViM0J1dHRvbiIsIkhlcm8iLCJCYW5rIiwiQ2FsY3VsYXRvciIsIlN0YXRpc3RpY3MiLCJJbmplY3RlZENvbm5lY3RvciIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJPcGVuTW9kYWwiLCJNYWluIiwiaWQiLCJoYXNNb3VudGVkIiwic2V0SGFzTW91bnRlZCIsImFkZHJlc3MiLCJpc0Nvbm5lY3RlZCIsInN0YXR1cyIsImNvbm5lY3QiLCJjb25uZWN0b3IiLCJJc0Nvbm5lY3RlZCIsImRpdiIsImNsYXNzTmFtZSIsIm9wZW5tb2RhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/Main/Main.tsx\n"));

/***/ })

});