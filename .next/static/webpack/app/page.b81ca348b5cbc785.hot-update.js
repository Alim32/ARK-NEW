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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scripts/test */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst HomeStatsModal = (param)=>{\n    let { id, closeEvent, address, balance } = param;\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address, balance);\n    var totalWorth = 0;\n    var pendingRewards = 0;\n    var claimedRewards = 0;\n    for(let i in data){\n        totalWorth += data[i].value;\n    }\n    const listNFTs = data.map((nfts)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/icons/nft.png\",\n                            width: 30,\n                            height: 50,\n                            alt: \"nft logo\",\n                            className: \"mr-5 lg:block hidden\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white ls-wide\",\n                            children: [\n                                \"5 \",\n                                (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.GetNFTNameByLevel)(nfts.level).toUpperCase(),\n                                nfts.amount > 1 ? \"S\" : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white-60\",\n                            children: [\n                                \"$\",\n                                _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(nfts.value)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, nfts.id, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: \"My Account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: closeEvent,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-[100%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        listNFTs,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/spark_lottery.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"PENDING REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: [\n                                        \"$\",\n                                        _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(pendingRewards)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/tab_vault.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"CLAIMED REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: [\n                                        \"$\",\n                                        _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(claimedRewards)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/ark_a.svg\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"TOTAL WORTH\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: [\n                                        \"$\",\n                                        _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(totalWorth)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 41,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n        lineNumber: 40,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HomeStatsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeStatsModal);\nvar _c;\n$RefreshReg$(_c, \"HomeStatsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0I7QUFDNEQ7QUFDekI7QUFFbEUsTUFBTUksaUJBQWlCO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLE9BQU8sRUFDTDtJQUNGLElBQUlDLE9BQU9SLDJEQUFVQSxDQUFDTSxTQUFTQztJQUMvQixJQUFJRSxhQUFhO0lBQ2pCLElBQUlDLGlCQUFpQjtJQUNyQixJQUFJQyxpQkFBaUI7SUFFckIsSUFBSyxJQUFJQyxLQUFLSixLQUFNO1FBQ2hCQyxjQUFjRCxJQUFJLENBQUNJLEVBQUUsQ0FBQ0MsS0FBSztJQUMvQjtJQUVBLE1BQU1DLFdBQVdOLEtBQUtPLEdBQUcsQ0FBQyxDQUFDQyxxQkFDdkIsOERBQUNDOzs4QkFDRyw4REFBQ0E7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDbkIsbURBQUtBOzRCQUNGb0IsS0FBSzs0QkFDTEMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs0QkFDSkosV0FBVTs7Ozs7O3NDQUVkLDhEQUFDSzs0QkFBRUwsV0FBVTs7Z0NBQTBDO2dDQUFHakIsa0VBQWlCQSxDQUFDZSxLQUFLUSxLQUFLLEVBQUVDLFdBQVc7Z0NBQUlULEtBQUtVLE1BQU0sR0FBRyxJQUFJLE1BQU07Ozs7Ozs7c0NBQy9ILDhEQUFDSDs0QkFBRUwsV0FBVTs7Z0NBQXFDO2dDQUFFaEIseURBQWNBLENBQUN5QixNQUFNLENBQUNYLEtBQUtILEtBQUs7Ozs7Ozs7O21CQVRBRyxLQUFLWixFQUFFOzs7Ozs4QkFXL0YsOERBQUN3Qjs7Ozs7Ozs7Ozs7SUFJVCxxQkFDSSw4REFBQ1g7UUFBSUMsV0FBVTtRQUFnQmQsSUFBSUEsS0FBSztrQkFDcEMsNEVBQUNhO1lBQUlDLFdBQVU7WUFBUWQsSUFBSUE7OzhCQUN2Qiw4REFBQ2E7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDVzs0QkFBR1gsV0FBVTtzQ0FBYTs7Ozs7O3NDQUMzQiw4REFBQ1k7NEJBQU9aLFdBQVU7NEJBQTBDYSxTQUFTMUI7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFckYsOERBQUNZO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1U7Ozs7O3dCQUNBZDtzQ0FDRCw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDbkIsbURBQUtBO29DQUNGb0IsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzt3Q0FBcUM7d0NBQUVoQix5REFBY0EsQ0FBQ3lCLE1BQU0sQ0FBQ2pCOzs7Ozs7Ozs7Ozs7O3NDQUU5RSw4REFBQ2tCOzs7OztzQ0FDRCw4REFBQ1g7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDbkIsbURBQUtBO29DQUNGb0IsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzt3Q0FBcUM7d0NBQUVoQix5REFBY0EsQ0FBQ3lCLE1BQU0sQ0FBQ2hCOzs7Ozs7Ozs7Ozs7O3NDQUU5RSw4REFBQ2lCOzs7OztzQ0FDRCw4REFBQ1g7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDbkIsbURBQUtBO29DQUNGb0IsS0FBSztvQ0FDTEMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUkMsS0FBSTtvQ0FDSkosV0FBVTs7Ozs7OzhDQUVkLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBdUQ7Ozs7Ozs4Q0FDcEUsOERBQUNLO29DQUFFTCxXQUFVOzt3Q0FBcUM7d0NBQUVoQix5REFBY0EsQ0FBQ3lCLE1BQU0sQ0FBQ2xCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRbEc7S0FuRk1OO0FBcUZOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4PzBiMGUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IGdldE5GVERhdGEsIGdldE5GVEJhbGFuY2UsIGdldFNoYXJlcywgR2V0TkZUTmFtZUJ5TGV2ZWwgfSBmcm9tIFwiQC9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5pbXBvcnQgeyBmb3JtYXR0ZXIsIGZvcm1hdHRlck5vRGVjIH0gZnJvbSBcIi4uLy4uLy4uL3NjcmlwdHMvdGVzdFwiO1xyXG5cclxuY29uc3QgSG9tZVN0YXRzTW9kYWwgPSAoe1xyXG4gICAgaWQsXHJcbiAgICBjbG9zZUV2ZW50LFxyXG4gICAgYWRkcmVzcyxcclxuICAgIGJhbGFuY2VcclxufTogYW55KSA9PiB7XHJcbiAgICB2YXIgZGF0YSA9IGdldE5GVERhdGEoYWRkcmVzcywgYmFsYW5jZSk7XHJcbiAgICB2YXIgdG90YWxXb3J0aCA9IDA7XHJcbiAgICB2YXIgcGVuZGluZ1Jld2FyZHMgPSAwXHJcbiAgICB2YXIgY2xhaW1lZFJld2FyZHMgPSAwO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xyXG4gICAgICAgIHRvdGFsV29ydGggKz0gZGF0YVtpXS52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsaXN0TkZUcyA9IGRhdGEubWFwKChuZnRzKSA9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCcga2V5PXtuZnRzLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvbmZ0LnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm5mdCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBscy13aWRlJz41IHtHZXRORlROYW1lQnlMZXZlbChuZnRzLmxldmVsKS50b1VwcGVyQ2FzZSgpfXtuZnRzLmFtb3VudCA+IDEgPyBcIlNcIiA6IFwiXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4ke2Zvcm1hdHRlck5vRGVjLmZvcm1hdChuZnRzLnZhbHVlKX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLW92ZXJsYXknIGlkPXtpZCArIFwib3ZlcmxheVwifT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiIGlkPXtpZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gbGc6aXRlbXMtc3RhcnQgaXRlbXMtY2VudGVyIHctMTAwIGxnOnB4LVs1MHB4XSBweC1bMzVweF0gbGc6cHQtWzM1cHhdIHB0LVsyMHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+TXkgQWNjb3VudDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQtd2hpdGUgZm9udC1zZW1pYm9sZCB0ZXh0LTJ4bCB4LWJ0bicgb25DbGljaz17Y2xvc2VFdmVudH0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLVsxMDAlXSB3LVsxMDAlXSBsZzpweC1bNTBweF0gcHgtWzM1cHhdIGxnOnB0LVszNXB4XSBwdC1bMjBweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAge2xpc3RORlRzfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAyeGw6bXktNSAgc206bXktMyBteS00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL3NwYXJrX2xvdHRlcnkucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOmxzLXdpZGVzdCBscy13aWRlJz5QRU5ESU5HIFJFV0FSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JHtmb3JtYXR0ZXJOb0RlYy5mb3JtYXQocGVuZGluZ1Jld2FyZHMpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvdGFiX3ZhdWx0LnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm5mdCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItNSBsZzpibG9jayBoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzpscy13aWRlc3QgbHMtd2lkZSc+Q0xBSU1FRCBSRVdBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUtNjAnPiR7Zm9ybWF0dGVyTm9EZWMuZm9ybWF0KGNsYWltZWRSZXdhcmRzKX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAyeGw6bXktNSAgc206bXktMyBteS00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL2Fya19hLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm5mdCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItNSBsZzpibG9jayBoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzpscy13aWRlc3QgbHMtd2lkZSc+VE9UQUwgV09SVEg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JHtmb3JtYXR0ZXJOb0RlYy5mb3JtYXQodG90YWxXb3J0aCl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVN0YXRzTW9kYWw7Il0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0TkZURGF0YSIsIkdldE5GVE5hbWVCeUxldmVsIiwiZm9ybWF0dGVyTm9EZWMiLCJIb21lU3RhdHNNb2RhbCIsImlkIiwiY2xvc2VFdmVudCIsImFkZHJlc3MiLCJiYWxhbmNlIiwiZGF0YSIsInRvdGFsV29ydGgiLCJwZW5kaW5nUmV3YXJkcyIsImNsYWltZWRSZXdhcmRzIiwiaSIsInZhbHVlIiwibGlzdE5GVHMiLCJtYXAiLCJuZnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwibGV2ZWwiLCJ0b1VwcGVyQ2FzZSIsImFtb3VudCIsImZvcm1hdCIsImhyIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/HomeStatsModal/HomeStatsModal.tsx\n"));

/***/ })

});