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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scripts/test */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst HomeStatsModal = (param)=>{\n    let { id, closeEvent, address, balance } = param;\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address, balance);\n    const listNFTs = data.map((nfts)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/icons/nft.png\",\n                            width: 30,\n                            height: 50,\n                            alt: \"nft logo\",\n                            className: \"mr-5 lg:block hidden\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                            children: [\n                                \"5 \",\n                                (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.GetNFTNameByLevel)(nfts.level).toUpperCase(),\n                                nfts.amount > 1 ? \"s\" : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white-60\",\n                            children: [\n                                \"$\",\n                                _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(nfts.value)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, nfts.id, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: \"My Account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: closeEvent,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-[100%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        listNFTs,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/spark_lottery.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"PENDING REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$78,625\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/tab_vault.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"CLAIMED REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$50,388\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/ark_a.svg\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"TOTAL WORTH\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$459,013\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HomeStatsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeStatsModal);\nvar _c;\n$RefreshReg$(_c, \"HomeStatsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0I7QUFDNEQ7QUFDekI7QUFFbEUsTUFBTUksaUJBQWlCO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLE9BQU8sRUFDTDtJQUVGLElBQUlDLE9BQU9SLDJEQUFVQSxDQUFDTSxTQUFTQztJQUUvQixNQUFNRSxXQUFXRCxLQUFLRSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3ZCLDhEQUFDQzs7OEJBQ0csOERBQUNBO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ2QsbURBQUtBOzRCQUNGZSxLQUFLOzRCQUNMQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzRCQUNKSixXQUFVOzs7Ozs7c0NBRWQsOERBQUNLOzRCQUFFTCxXQUFVOztnQ0FBdUQ7Z0NBQUdaLGtFQUFpQkEsQ0FBQ1UsS0FBS1EsS0FBSyxFQUFFQyxXQUFXO2dDQUFJVCxLQUFLVSxNQUFNLEdBQUcsSUFBSSxNQUFNOzs7Ozs7O3NDQUM1SSw4REFBQ0g7NEJBQUVMLFdBQVU7O2dDQUFxQztnQ0FBRVgseURBQWNBLENBQUNvQixNQUFNLENBQUNYLEtBQUtZLEtBQUs7Ozs7Ozs7O21CQVRBWixLQUFLUCxFQUFFOzs7Ozs4QkFXL0YsOERBQUNvQjs7Ozs7Ozs7Ozs7SUFJVCxxQkFDSSw4REFBQ1o7UUFBSUMsV0FBVTtRQUFnQlQsSUFBSUEsS0FBSztrQkFDcEMsNEVBQUNRO1lBQUlDLFdBQVU7WUFBUVQsSUFBSUE7OzhCQUN2Qiw4REFBQ1E7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDWTs0QkFBR1osV0FBVTtzQ0FBYTs7Ozs7O3NDQUMzQiw4REFBQ2E7NEJBQU9iLFdBQVU7NEJBQTBDYyxTQUFTdEI7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFckYsOERBQUNPO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1c7Ozs7O3dCQUNBZjtzQ0FDRCw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDZCxtREFBS0E7b0NBQ0ZlLEtBQUs7b0NBQ0xDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7b0NBQ0pKLFdBQVU7Ozs7Ozs4Q0FFZCw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXVEOzs7Ozs7OENBQ3BFLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBcUM7Ozs7Ozs7Ozs7OztzQ0FFdEQsOERBQUNXOzs7OztzQ0FDRCw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDZCxtREFBS0E7b0NBQ0ZlLEtBQUs7b0NBQ0xDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7b0NBQ0pKLFdBQVU7Ozs7Ozs4Q0FFZCw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXVEOzs7Ozs7OENBQ3BFLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBcUM7Ozs7Ozs7Ozs7OztzQ0FFdEQsOERBQUNXOzs7OztzQ0FDRCw4REFBQ1o7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDZCxtREFBS0E7b0NBQ0ZlLEtBQUs7b0NBQ0xDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JDLEtBQUk7b0NBQ0pKLFdBQVU7Ozs7Ozs4Q0FFZCw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXVEOzs7Ozs7OENBQ3BFLDhEQUFDSztvQ0FBRUwsV0FBVTs4Q0FBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUTFFO0tBN0VNVjtBQStFTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hvbWVTdGF0c01vZGFsL0hvbWVTdGF0c01vZGFsLnRzeD8wYjBlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRORlREYXRhLCBnZXRORlRCYWxhbmNlLCBnZXRTaGFyZXMsIEdldE5GVE5hbWVCeUxldmVsIH0gZnJvbSBcIkAvc2NyaXB0cy9sZWdhY3lcIjtcclxuaW1wb3J0IHsgZm9ybWF0dGVyLCBmb3JtYXR0ZXJOb0RlYyB9IGZyb20gXCIuLi8uLi8uLi9zY3JpcHRzL3Rlc3RcIjtcclxuXHJcbmNvbnN0IEhvbWVTdGF0c01vZGFsID0gKHtcclxuICAgIGlkLFxyXG4gICAgY2xvc2VFdmVudCxcclxuICAgIGFkZHJlc3MsXHJcbiAgICBiYWxhbmNlXHJcbn06IGFueSkgPT4ge1xyXG5cclxuICAgIHZhciBkYXRhID0gZ2V0TkZURGF0YShhZGRyZXNzLCBiYWxhbmNlKTtcclxuXHJcbiAgICBjb25zdCBsaXN0TkZUcyA9IGRhdGEubWFwKChuZnRzKSA9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCcga2V5PXtuZnRzLmlkfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvbmZ0LnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIm5mdCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzpscy13aWRlc3QgbHMtd2lkZSc+NSB7R2V0TkZUTmFtZUJ5TGV2ZWwobmZ0cy5sZXZlbCkudG9VcHBlckNhc2UoKX17bmZ0cy5hbW91bnQgPiAxID8gXCJzXCIgOiBcIlwifTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JHtmb3JtYXR0ZXJOb0RlYy5mb3JtYXQobmZ0cy52YWx1ZSl9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtb2RhbC1vdmVybGF5JyBpZD17aWQgKyBcIm92ZXJsYXlcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGxnOml0ZW1zLXN0YXJ0IGl0ZW1zLWNlbnRlciB3LTEwMCBsZzpweC1bNTBweF0gcHgtWzM1cHhdIGxnOnB0LVszNXB4XSBwdC1bMjBweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtd2hpdGUnPk15IEFjY291bnQ8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC0yeGwgeC1idG4nIG9uQ2xpY2s9e2Nsb3NlRXZlbnR9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1bMTAwJV0gdy1bMTAwJV0gbGc6cHgtWzUwcHhdIHB4LVszNXB4XSBsZzpwdC1bMzVweF0gcHQtWzIwcHhdJz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtsaXN0TkZUc30gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pY29ucy9zcGFya19sb3R0ZXJ5LnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIm5mdCBsb2dvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbXItNSBsZzpibG9jayBoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZSBsZzpscy13aWRlc3QgbHMtd2lkZSc+UEVORElORyBSRVdBUkRTPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUtNjAnPiQ3OCw2MjU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciAyeGw6bXktNSAgc206bXktMyBteS00Jz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL3RhYl92YXVsdC5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPkNMQUlNRUQgUkVXQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4kNTAsMzg4PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pY29ucy9hcmtfYS5zdmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPlRPVEFMIFdPUlRIPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUtNjAnPiQ0NTksMDEzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVN0YXRzTW9kYWw7Il0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0TkZURGF0YSIsIkdldE5GVE5hbWVCeUxldmVsIiwiZm9ybWF0dGVyTm9EZWMiLCJIb21lU3RhdHNNb2RhbCIsImlkIiwiY2xvc2VFdmVudCIsImFkZHJlc3MiLCJiYWxhbmNlIiwiZGF0YSIsImxpc3RORlRzIiwibWFwIiwibmZ0cyIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCIsImxldmVsIiwidG9VcHBlckNhc2UiLCJhbW91bnQiLCJmb3JtYXQiLCJ2YWx1ZSIsImhyIiwiaDQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/HomeStatsModal/HomeStatsModal.tsx\n"));

/***/ })

});