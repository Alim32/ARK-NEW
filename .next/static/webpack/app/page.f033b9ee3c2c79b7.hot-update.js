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

/***/ "(app-pages-browser)/./src/components/Home/HomeStatsModal/HomeStatsModal.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Home/HomeStatsModal/HomeStatsModal.tsx ***!
  \***************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst HomeStatsModal = (param)=>{\n    let { id, closeEvent, address, balance } = param;\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address, balance);\n    const listNFTs = data.map((nfts)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/icons/nft.png\",\n                    width: 30,\n                    height: 50,\n                    alt: \"nft logo\",\n                    className: \"mr-5 lg:block hidden\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                    children: \"5 DIAMONDS\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"md:text-lg text-base text-white-60\",\n                    children: \"$250,000\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, nfts.id, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 16,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: \"My Account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: closeEvent,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-[100%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        listNFTs,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/spark_lottery.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"PENDING REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$78,625\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/tab_vault.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"CLAIMED REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$50,388\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/ark_a.svg\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"TOTAL WORTH\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$459,013\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HomeStatsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeStatsModal);\nvar _c;\n$RefreshReg$(_c, \"HomeStatsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUUrQjtBQUN5QztBQUV4RSxNQUFNRSxpQkFBaUI7UUFBQyxFQUNwQkMsRUFBRSxFQUNGQyxVQUFVLEVBQ1ZDLE9BQU8sRUFDUEMsT0FBTyxFQUNMO0lBRUYsSUFBSUMsT0FBT04sMkRBQVVBLENBQUNJLFNBQVNDO0lBRS9CLE1BQU1FLFdBQVdELEtBQUtFLEdBQUcsQ0FBQyxDQUFDQyxxQkFDdkIsOERBQUNDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDWixtREFBS0E7b0JBQ0ZhLEtBQUs7b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JDLEtBQUk7b0JBQ0pKLFdBQVU7Ozs7Ozs4QkFFZCw4REFBQ0s7b0JBQUVMLFdBQVU7OEJBQXVEOzs7Ozs7OEJBQ3BFLDhEQUFDSztvQkFBRUwsV0FBVTs4QkFBcUM7Ozs7Ozs4QkFDbEQsOERBQUNNOzs7Ozs7V0FWbUZSLEtBQUtQLEVBQUU7Ozs7O0lBY25HLHFCQUNJLDhEQUFDUTtRQUFJQyxXQUFVO1FBQWdCVCxJQUFJQSxLQUFLO2tCQUNwQyw0RUFBQ1E7WUFBSUMsV0FBVTtZQUFRVCxJQUFJQTs7OEJBQ3ZCLDhEQUFDUTtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNPOzRCQUFHUCxXQUFVO3NDQUFhOzs7Ozs7c0NBQzNCLDhEQUFDUTs0QkFBT1IsV0FBVTs0QkFBMENTLFNBQVNqQjtzQ0FBWTs7Ozs7Ozs7Ozs7OzhCQUVyRiw4REFBQ087b0JBQUlDLFdBQVU7O3dCQUNWSjtzQ0FDRCw4REFBQ1U7Ozs7O3NDQUNELDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNaLG1EQUFLQTtvQ0FDRmEsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzhDQUFxQzs7Ozs7Ozs7Ozs7O3NDQUV0RCw4REFBQ007Ozs7O3NDQUNELDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNaLG1EQUFLQTtvQ0FDRmEsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzhDQUFxQzs7Ozs7Ozs7Ozs7O3NDQUV0RCw4REFBQ007Ozs7O3NDQUNELDhEQUFDUDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNaLG1EQUFLQTtvQ0FDRmEsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzhDQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRMUU7S0EzRU1WO0FBNkVOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4PzBiMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IGdldE5GVERhdGEsIGdldE5GVEJhbGFuY2UsIGdldFNoYXJlcyB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcblxyXG5jb25zdCBIb21lU3RhdHNNb2RhbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIGNsb3NlRXZlbnQsXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgYmFsYW5jZVxyXG59OiBhbnkpID0+IHtcclxuXHJcbiAgICB2YXIgZGF0YSA9IGdldE5GVERhdGEoYWRkcmVzcywgYmFsYW5jZSk7ICAgICAgICBcclxuXHJcbiAgICBjb25zdCBsaXN0TkZUcyA9IGRhdGEubWFwKChuZnRzKSA9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCcga2V5PXtuZnRzLmlkfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL25mdC5wbmdcIn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPjUgRElBTU9ORFM8L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JDI1MCwwMDA8L3A+XHJcbiAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLW92ZXJsYXknIGlkPXtpZCArIFwib3ZlcmxheVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbGc6aXRlbXMtc3RhcnQgaXRlbXMtY2VudGVyIHctMTAwIGxnOnB4LVs1MHB4XSBweC1bMzVweF0gbGc6cHQtWzM1cHhdIHB0LVsyMHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+TXkgQWNjb3VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB4LWJ0bicgb25DbGljaz17Y2xvc2VFdmVudH0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLVsxMDAlXSB3LVsxMDAlXSBsZzpweC1bNTBweF0gcHgtWzM1cHhdIGxnOnB0LVszNXB4XSBwdC1bMjBweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0TkZUc31cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvc3BhcmtfbG90dGVyeS5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPlBFTkRJTkcgUkVXQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4kNzgsNjI1PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pY29ucy90YWJfdmF1bHQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOmxzLXdpZGVzdCBscy13aWRlJz5DTEFJTUVEIFJFV0FSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JDUwLDM4ODwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvYXJrX2Euc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOmxzLXdpZGVzdCBscy13aWRlJz5UT1RBTCBXT1JUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4kNDU5LDAxMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVTdGF0c01vZGFsOyJdLCJuYW1lcyI6WyJJbWFnZSIsImdldE5GVERhdGEiLCJIb21lU3RhdHNNb2RhbCIsImlkIiwiY2xvc2VFdmVudCIsImFkZHJlc3MiLCJiYWxhbmNlIiwiZGF0YSIsImxpc3RORlRzIiwibWFwIiwibmZ0cyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImhyIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/HomeStatsModal/HomeStatsModal.tsx\n"));

/***/ })

});