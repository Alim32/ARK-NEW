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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address, level = 1 } = param;\n    var _data;\n    _s();\n    const { data, write } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        onMutate () {\n            var item = document.getElementById(\"mint-btn\");\n            item.style.display = \"none\";\n        },\n        onError () {\n            var item = document.getElementById(\"mint-btn\");\n            item.style.display = \"block\";\n        },\n        args: [\n            address,\n            level\n        ]\n    });\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_data = data) === null || _data === void 0 ? void 0 : _data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-[100%]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"mint-btn\",\n                className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n                onClick: ()=>write(),\n                children: \"PURCHASE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-100% none\",\n                id: \"mint-loader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        alt: \"ARK connect\",\n                        loading: \"lazy\",\n                        width: \"35\",\n                        height: \"35\",\n                        decoding: \"async\",\n                        \"data-nimg\": \"1\",\n                        className: \"object-fit-contain mb-5 bg-transparent mx-auto\",\n                        src: \"/video/loader.gif\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-white-60 ls-wide mb-5\",\n                        children: \"LOADING\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"FOI+Me0DnWJ2oeJXx7ImU6UPGY8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSSxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDUEMsUUFBUSxDQUFDLEVBQ1A7UUFpQlFDOztJQWhCVixNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdSLHVEQUFnQkEsQ0FBQztRQUNyQ0ssU0FBU0gsK0NBQUVBO1FBQ1hDLEtBQUtBLGdEQUFHQTtRQUNSTSxjQUFjO1FBQ2RDO1lBQ0ksSUFBSUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDO1lBQ25DRixLQUFLRyxLQUFLLENBQUNDLE9BQU8sR0FBRztRQUN6QjtRQUNBQztZQUNJLElBQUlMLE9BQU9DLFNBQVNDLGNBQWMsQ0FBQztZQUNuQ0YsS0FBS0csS0FBSyxDQUFDQyxPQUFPLEdBQUc7UUFDekI7UUFDQUUsTUFBTTtZQUFDWjtZQUFTQztTQUFNO0lBQzFCO0lBRUEsTUFBTVksT0FBT2pCLDREQUFxQkEsQ0FBQztRQUMvQmtCLElBQUksR0FBRVosUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNWSxJQUFJO0lBQ3BCO0lBRUEscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQztnQkFBT0MsSUFBRztnQkFBV0YsV0FBVTtnQkFBOEZHLFNBQVMsSUFBTWhCOzBCQUFTOzs7Ozs7MEJBQ3RKLDhEQUFDWTtnQkFBSUMsV0FBVTtnQkFBeUNFLElBQUc7O2tDQUN2RCw4REFBQ0U7d0JBQUlDLEtBQUk7d0JBQWNDLFNBQVE7d0JBQU9DLE9BQU07d0JBQUtDLFFBQU87d0JBQUtDLFVBQVM7d0JBQVFDLGFBQVU7d0JBQUlWLFdBQVU7d0JBQWlEVyxLQUFJOzs7Ozs7a0NBQzNKLDhEQUFDQzt3QkFBRVosV0FBVTtrQ0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRTtHQWpDTWpCOztRQUlzQkosbURBQWdCQTtRQWUzQkMsd0RBQXFCQTs7O0tBbkJoQ0c7QUFtQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L01pbnRCdXR0b24vTWludEJ1dHRvbi50c3g/ZmU1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVByZXBhcmVDb250cmFjdFdyaXRlLCB1c2VDb250cmFjdFdyaXRlLCB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24gfSBmcm9tICd3YWdtaSdcclxuaW1wb3J0IHsgY2EsIGFiaSB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcblxyXG5jb25zdCBNaW50QnV0dG9uID0gKHtcclxuICAgIGFkZHJlc3MsXHJcbiAgICBsZXZlbCA9IDFcclxufTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEsIHdyaXRlIH0gPSB1c2VDb250cmFjdFdyaXRlKHtcclxuICAgICAgICBhZGRyZXNzOiBjYSxcclxuICAgICAgICBhYmk6IGFiaSxcclxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdtaW50VG9XYWxsZXQnLFxyXG4gICAgICAgIG9uTXV0YXRlKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWludC1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25FcnJvcigpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnQtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmdzOiBbYWRkcmVzcywgbGV2ZWxdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB3YWl0ID0gdXNlV2FpdEZvclRyYW5zYWN0aW9uKHtcclxuICAgICAgICBoYXNoOiBkYXRhPy5oYXNoXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1bMTAwJV0nPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdtaW50LWJ0bicgY2xhc3NOYW1lPSdidG4tcHVycGxlLW9nIHB4LTMgcHktMSBtYi01IHctWzEwMCVdIGgtZml0IGxzLXdpZGUgZm9udC1zZW1pYm9sZCBsZzp0ZXh0LWJhc2UgdGV4dC1zbSBtdC01JyBvbkNsaWNrPXsoKSA9PiB3cml0ZSgpfT5QVVJDSEFTRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy0xMDAlIG5vbmUnIGlkPSdtaW50LWxvYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIkFSSyBjb25uZWN0XCIgbG9hZGluZz1cImxhenlcIiB3aWR0aD1cIjM1XCIgaGVpZ2h0PVwiMzVcIiBkZWNvZGluZz1cImFzeW5jXCIgZGF0YS1uaW1nPVwiMVwiIGNsYXNzTmFtZT1cIm9iamVjdC1maXQtY29udGFpbiBtYi01IGJnLXRyYW5zcGFyZW50IG14LWF1dG9cIiBzcmM9XCIvdmlkZW8vbG9hZGVyLmdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtc20gdGV4dC13aGl0ZS02MCBscy13aWRlIG1iLTUnPkxPQURJTkc8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RXcml0ZSIsInVzZVdhaXRGb3JUcmFuc2FjdGlvbiIsImNhIiwiYWJpIiwiTWludEJ1dHRvbiIsImFkZHJlc3MiLCJsZXZlbCIsImRhdGEiLCJ3cml0ZSIsImZ1bmN0aW9uTmFtZSIsIm9uTXV0YXRlIiwiaXRlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImRpc3BsYXkiLCJvbkVycm9yIiwiYXJncyIsIndhaXQiLCJoYXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaWQiLCJvbkNsaWNrIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiZGVjb2RpbmciLCJkYXRhLW5pbWciLCJzcmMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});