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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address, level = 1 } = param;\n    var _data;\n    _s();\n    const { data, write } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        onMutate () {\n            var item = document.getElementById(\"mint-btn\");\n            var item2 = document.getElementById(\"mint-loader\");\n            item.style.display = \"none\";\n            item2.style.display = \"block\";\n        },\n        onError () {\n            var item = document.getElementById(\"mint-btn\");\n            var item2 = document.getElementById(\"mint-loader\");\n            item.style.display = \"block\";\n            item2.style.display = \"none\";\n        },\n        args: [\n            address,\n            level\n        ]\n    });\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_data = data) === null || _data === void 0 ? void 0 : _data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-[100%]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"mint-btn\",\n                className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n                onClick: ()=>write(),\n                children: \"PURCHASE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-100% hidden\",\n                id: \"mint-loader\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"loader\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"loaderBar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"FOI+Me0DnWJ2oeJXx7ImU6UPGY8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSSxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDUEMsUUFBUSxDQUFDLEVBQ1A7UUFxQlFDOztJQXBCVixNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdSLHVEQUFnQkEsQ0FBQztRQUNyQ0ssU0FBU0gsK0NBQUVBO1FBQ1hDLEtBQUtBLGdEQUFHQTtRQUNSTSxjQUFjO1FBQ2RDO1lBQ0ksSUFBSUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDO1lBQ25DLElBQUlDLFFBQVFGLFNBQVNDLGNBQWMsQ0FBQztZQUNwQ0YsS0FBS0ksS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDckJGLE1BQU1DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQzFCO1FBQ0FDO1lBQ0ksSUFBSU4sT0FBT0MsU0FBU0MsY0FBYyxDQUFDO1lBQ25DLElBQUlDLFFBQVFGLFNBQVNDLGNBQWMsQ0FBQztZQUNwQ0YsS0FBS0ksS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDckJGLE1BQU1DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQzFCO1FBQ0FFLE1BQU07WUFBQ2I7WUFBU0M7U0FBTTtJQUMxQjtJQUVBLE1BQU1hLE9BQU9sQiw0REFBcUJBLENBQUM7UUFDL0JtQixJQUFJLEdBQUViLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTWEsSUFBSTtJQUNwQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU9DLElBQUc7Z0JBQVdGLFdBQVU7Z0JBQThGRyxTQUFTLElBQU1qQjswQkFBUzs7Ozs7OzBCQUN0Siw4REFBQ2E7Z0JBQUlDLFdBQVU7Z0JBQTJDRSxJQUFHOzBCQUN6RCw0RUFBQ0g7b0JBQUlLLE9BQU07OEJBQ1AsNEVBQUNMO3dCQUFJSyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9CO0dBdENNdEI7O1FBSXNCSixtREFBZ0JBO1FBbUIzQkMsd0RBQXFCQTs7O0tBdkJoQ0c7QUF3Q04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L01pbnRCdXR0b24vTWludEJ1dHRvbi50c3g/ZmU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVByZXBhcmVDb250cmFjdFdyaXRlLCB1c2VDb250cmFjdFdyaXRlLCB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24gfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgY2EsIGFiaSB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcblxyXG5jb25zdCBNaW50QnV0dG9uID0gKHtcclxuICAgIGFkZHJlc3MsXHJcbiAgICBsZXZlbCA9IDFcclxufTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdyaXRlIH0gPSB1c2VDb250cmFjdFdyaXRlKHtcclxuICAgICAgICBhZGRyZXNzOiBjYSxcclxuICAgICAgICBhYmk6IGFiaSxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdtaW50VG9XYWxsZXQnLFxyXG4gICAgICAgIG9uTXV0YXRlKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludC1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIHZhciBpdGVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludC1sb2FkZXJcIikgYXMgSFRNTEVsZW1lbnQ7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICBpdGVtMi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcigpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnQtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgaXRlbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnQtbG9hZGVyXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIGl0ZW0yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFyZ3M6IFthZGRyZXNzLCBsZXZlbF1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHdhaXQgPSB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24oe1xyXG4gICAgICAgIGhhc2g6IGRhdGE/Lmhhc2hcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LVsxMDAlXSc+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9J21pbnQtYnRuJyBjbGFzc05hbWU9J2J0bi1wdXJwbGUtb2cgcHgtMyBweS0xIG1iLTUgdy1bMTAwJV0gaC1maXQgbHMtd2lkZSBmb250LXNlbWlib2xkIGxnOnRleHQtYmFzZSB0ZXh0LXNtIG10LTUnIG9uQ2xpY2s9eygpID0+IHdyaXRlKCl9PlBVUkNIQVNFPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciB3LTEwMCUgaGlkZGVuJyBpZD0nbWludC1sb2FkZXInPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXJCYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWludEJ1dHRvbjtcclxuIl0sIm5hbWVzIjpbInVzZUNvbnRyYWN0V3JpdGUiLCJ1c2VXYWl0Rm9yVHJhbnNhY3Rpb24iLCJjYSIsImFiaSIsIk1pbnRCdXR0b24iLCJhZGRyZXNzIiwibGV2ZWwiLCJkYXRhIiwid3JpdGUiLCJmdW5jdGlvbk5hbWUiLCJvbk11dGF0ZSIsIml0ZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXRlbTIiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkVycm9yIiwiYXJncyIsIndhaXQiLCJoYXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaWQiLCJvbkNsaWNrIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});