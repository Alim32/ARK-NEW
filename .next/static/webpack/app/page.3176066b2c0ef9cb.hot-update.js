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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address } = param;\n    var _contractWrite_data;\n    _s();\n    const { config } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        args: [\n            address,\n            5\n        ]\n    });\n    const contractWrite = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)(config);\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_contractWrite_data = contractWrite.data) === null || _contractWrite_data === void 0 ? void 0 : _contractWrite_data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n        onClick: contractWrite.write,\n        children: \"PURCHASE\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"K6Knnn7gZhDlIRS7tvXFsMRwpZg=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.usePrepareContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSyxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDTDtRQVVRQzs7SUFUVixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHUiw4REFBdUJBLENBQUM7UUFDdkNNLFNBQVNILCtDQUFFQTtRQUNYQyxLQUFLQSxnREFBR0E7UUFDUkssY0FBYztRQUNkQyxNQUFNO1lBQUNKO1lBQVM7U0FBRTtJQUN0QjtJQUVBLE1BQU1DLGdCQUFnQk4sdURBQWdCQSxDQUFDTztJQUN2QyxNQUFNRyxPQUFPVCw0REFBcUJBLENBQUM7UUFDL0JVLElBQUksR0FBRUwsc0JBQUFBLGNBQWNNLElBQUksY0FBbEJOLDBDQUFBQSxvQkFBb0JLLElBQUk7SUFDbEM7SUFFQSxxQkFDSSw4REFBQ0U7UUFBT0MsV0FBVTtRQUE4RkMsU0FBU1QsY0FBY1UsS0FBSztrQkFBRTs7Ozs7O0FBRXRKO0dBbEJNWjs7UUFHaUJMLDBEQUF1QkE7UUFPcEJDLG1EQUFnQkE7UUFDekJDLHdEQUFxQkE7OztLQVhoQ0c7QUFvQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L01pbnRCdXR0b24vTWludEJ1dHRvbi50c3g/ZmU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVByZXBhcmVDb250cmFjdFdyaXRlLCB1c2VDb250cmFjdFdyaXRlLCB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24gfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgY2EsIGFiaSB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcblxyXG5jb25zdCBNaW50QnV0dG9uID0gKHtcclxuICAgIGFkZHJlc3NcclxufTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGNvbmZpZyB9ID0gdXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUoe1xyXG4gICAgICAgIGFkZHJlc3M6IGNhLFxyXG4gICAgICAgIGFiaTogYWJpLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogJ21pbnRUb1dhbGxldCcsXHJcbiAgICAgICAgYXJnczogW2FkZHJlc3MsIDVdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb250cmFjdFdyaXRlID0gdXNlQ29udHJhY3RXcml0ZShjb25maWcpO1xyXG4gICAgY29uc3Qgd2FpdCA9IHVzZVdhaXRGb3JUcmFuc2FjdGlvbih7XHJcbiAgICAgICAgaGFzaDogY29udHJhY3RXcml0ZS5kYXRhPy5oYXNoICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXB1cnBsZS1vZyBweC0zIHB5LTEgbWItNSB3LVsxMDAlXSBoLWZpdCBscy13aWRlIGZvbnQtc2VtaWJvbGQgbGc6dGV4dC1iYXNlIHRleHQtc20gbXQtNScgb25DbGljaz17Y29udHJhY3RXcml0ZS53cml0ZX0+UFVSQ0hBU0U8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUiLCJ1c2VDb250cmFjdFdyaXRlIiwidXNlV2FpdEZvclRyYW5zYWN0aW9uIiwiY2EiLCJhYmkiLCJNaW50QnV0dG9uIiwiYWRkcmVzcyIsImNvbnRyYWN0V3JpdGUiLCJjb25maWciLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwid2FpdCIsImhhc2giLCJkYXRhIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwib25DbGljayIsIndyaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});