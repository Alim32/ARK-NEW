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

/***/ "(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/MintButton/MintButton.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address, level = 1 } = param;\n    var _contractWrite_data;\n    _s();\n    const { config } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        args: [\n            address,\n            5\n        ]\n    });\n    const contractWrite = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        onMutate (args) {\n            console.log(args);\n        },\n        args: [\n            address,\n            level\n        ]\n    });\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_contractWrite_data = contractWrite.data) === null || _contractWrite_data === void 0 ? void 0 : _contractWrite_data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n        onClick: contractWrite.write,\n        children: \"PURCHASE\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"K6Knnn7gZhDlIRS7tvXFsMRwpZg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSyxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDUEMsUUFBUSxDQUFDLEVBQ1A7UUFtQlFDOztJQWxCVixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHVCw4REFBdUJBLENBQUM7UUFDdkNNLFNBQVNILCtDQUFFQTtRQUNYQyxLQUFLQSxnREFBR0E7UUFDUk0sY0FBYztRQUNkQyxNQUFNO1lBQUNMO1lBQVM7U0FBRTtJQUN0QjtJQUVBLE1BQU1FLGdCQUFnQlAsdURBQWdCQSxDQUFDO1FBQ25DSyxTQUFTSCwrQ0FBRUE7UUFDWEMsS0FBS0EsZ0RBQUdBO1FBQ1JNLGNBQWM7UUFDZEUsVUFBU0QsSUFBSTtZQUNURSxRQUFRQyxHQUFHLENBQUNIO1FBQ2hCO1FBQ0FBLE1BQU07WUFBQ0w7WUFBU0M7U0FBTTtJQUMxQjtJQUVBLE1BQU1RLE9BQU9iLDREQUFxQkEsQ0FBQztRQUMvQmMsSUFBSSxHQUFFUixzQkFBQUEsY0FBY1MsSUFBSSxjQUFsQlQsMENBQUFBLG9CQUFvQlEsSUFBSTtJQUNsQztJQUVBLHFCQUNJLDhEQUFDRTtRQUFPQyxXQUFVO1FBQThGQyxTQUFTWixjQUFjYSxLQUFLO2tCQUFFOzs7Ozs7QUFFdEo7R0E1Qk1oQjs7UUFJaUJMLDBEQUF1QkE7UUFPcEJDLG1EQUFnQkE7UUFVekJDLHdEQUFxQkE7OztLQXJCaENHO0FBOEJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4P2ZlNTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3RXcml0ZSwgdXNlV2FpdEZvclRyYW5zYWN0aW9uIH0gZnJvbSAnd2FnbWknXHJcbmltcG9ydCB7IGNhLCBhYmkgfSBmcm9tIFwiQC9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5cclxuY29uc3QgTWludEJ1dHRvbiA9ICh7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgbGV2ZWwgPSAxXHJcbn06IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHVzZVByZXBhcmVDb250cmFjdFdyaXRlKHtcclxuICAgICAgICBhZGRyZXNzOiBjYSxcclxuICAgICAgICBhYmk6IGFiaSxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdtaW50VG9XYWxsZXQnLFxyXG4gICAgICAgIGFyZ3M6IFthZGRyZXNzLCA1XVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29udHJhY3RXcml0ZSA9IHVzZUNvbnRyYWN0V3JpdGUoe1xyXG4gICAgICAgIGFkZHJlc3M6IGNhLFxyXG4gICAgICAgIGFiaTogYWJpLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogJ21pbnRUb1dhbGxldCcsXHJcbiAgICAgICAgb25NdXRhdGUoYXJncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFyZ3M6IFthZGRyZXNzLCBsZXZlbF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHdhaXQgPSB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24oe1xyXG4gICAgICAgIGhhc2g6IGNvbnRyYWN0V3JpdGUuZGF0YT8uaGFzaCAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1wdXJwbGUtb2cgcHgtMyBweS0xIG1iLTUgdy1bMTAwJV0gaC1maXQgbHMtd2lkZSBmb250LXNlbWlib2xkIGxnOnRleHQtYmFzZSB0ZXh0LXNtIG10LTUnIG9uQ2xpY2s9e2NvbnRyYWN0V3JpdGUud3JpdGV9PlBVUkNIQVNFPC9idXR0b24+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbInVzZVByZXBhcmVDb250cmFjdFdyaXRlIiwidXNlQ29udHJhY3RXcml0ZSIsInVzZVdhaXRGb3JUcmFuc2FjdGlvbiIsImNhIiwiYWJpIiwiTWludEJ1dHRvbiIsImFkZHJlc3MiLCJsZXZlbCIsImNvbnRyYWN0V3JpdGUiLCJjb25maWciLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwib25NdXRhdGUiLCJjb25zb2xlIiwibG9nIiwid2FpdCIsImhhc2giLCJkYXRhIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIndyaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});