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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scripts/test */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst HomeStatsModal = (param)=>{\n    let { id, closeEvent, address, balance } = param;\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address, balance);\n    const listNFTs = data.map((nfts)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            src: \"/icons/nft.png\",\n                            width: 30,\n                            height: 50,\n                            alt: \"nft logo\",\n                            className: \"mr-5 lg:block hidden\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                            children: [\n                                \"5 \",\n                                (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.GetNFTNameByLevel)(nfts.level),\n                                nfts.amount > 1 ? \"s\" : \"\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"md:text-lg text-base text-white-60\",\n                            children: [\n                                \"$\",\n                                _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(nfts.value)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, nfts.id, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 17,\n            columnNumber: 9\n        }, undefined));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between lg:items-start items-center w-100 lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: \"My Account\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: closeEvent,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-[100%] w-[100%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 21\n                        }, undefined),\n                        listNFTs,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/spark_lottery.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"PENDING REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$78,625\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 54,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/tab_vault.png\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"CLAIMED REWARDS\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$50,388\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-row justify-between items-center 2xl:my-5  sm:my-3 my-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/icons/ark_a.svg\",\n                                    width: 30,\n                                    height: 50,\n                                    alt: \"nft logo\",\n                                    className: \"mr-5 lg:block hidden\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white lg:ls-widest ls-wide\",\n                                    children: \"TOTAL WORTH\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"md:text-lg text-base text-white-60\",\n                                    children: \"$459,013\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\HomeStatsModal\\\\HomeStatsModal.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_c = HomeStatsModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeStatsModal);\nvar _c;\n$RefreshReg$(_c, \"HomeStatsModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwvSG9tZVN0YXRzTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFK0I7QUFDNEQ7QUFDekI7QUFFbEUsTUFBTUksaUJBQWlCO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsVUFBVSxFQUNWQyxPQUFPLEVBQ1BDLE9BQU8sRUFDTDtJQUVGLElBQUlDLE9BQU9SLDJEQUFVQSxDQUFDTSxTQUFTQztJQUUvQixNQUFNRSxXQUFXRCxLQUFLRSxHQUFHLENBQUMsQ0FBQ0MscUJBQ3ZCLDhEQUFDQzs7OEJBQ0csOERBQUNBO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ2QsbURBQUtBOzRCQUNGZSxLQUFLOzRCQUNMQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFJOzRCQUNKSixXQUFVOzs7Ozs7c0NBRWQsOERBQUNLOzRCQUFFTCxXQUFVOztnQ0FBdUQ7Z0NBQUdaLGtFQUFpQkEsQ0FBQ1UsS0FBS1EsS0FBSztnQ0FBR1IsS0FBS1MsTUFBTSxHQUFHLElBQUksTUFBSzs7Ozs7OztzQ0FDN0gsOERBQUNGOzRCQUFFTCxXQUFVOztnQ0FBcUM7Z0NBQUVYLHlEQUFjQSxDQUFDbUIsTUFBTSxDQUFDVixLQUFLVyxLQUFLOzs7Ozs7OzttQkFUQVgsS0FBS1AsRUFBRTs7Ozs7OEJBVy9GLDhEQUFDbUI7Ozs7Ozs7Ozs7O0lBSVQscUJBQ0ksOERBQUNYO1FBQUlDLFdBQVU7UUFBZ0JULElBQUlBLEtBQUs7a0JBQ3BDLDRFQUFDUTtZQUFJQyxXQUFVO1lBQVFULElBQUlBOzs4QkFDdkIsOERBQUNRO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ1c7NEJBQUdYLFdBQVU7c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNZOzRCQUFPWixXQUFVOzRCQUEwQ2EsU0FBU3JCO3NDQUFZOzs7Ozs7Ozs7Ozs7OEJBRXJGLDhEQUFDTztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNVOzs7Ozt3QkFDQWQ7c0NBQ0QsOERBQUNHOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2QsbURBQUtBO29DQUNGZSxLQUFLO29DQUNMQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJO29DQUNKSixXQUFVOzs7Ozs7OENBRWQsOERBQUNLO29DQUFFTCxXQUFVOzhDQUF1RDs7Ozs7OzhDQUNwRSw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXFDOzs7Ozs7Ozs7Ozs7c0NBRXRELDhEQUFDVTs7Ozs7c0NBQ0QsOERBQUNYOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2QsbURBQUtBO29DQUNGZSxLQUFLO29DQUNMQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJO29DQUNKSixXQUFVOzs7Ozs7OENBRWQsOERBQUNLO29DQUFFTCxXQUFVOzhDQUF1RDs7Ozs7OzhDQUNwRSw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXFDOzs7Ozs7Ozs7Ozs7c0NBRXRELDhEQUFDVTs7Ozs7c0NBQ0QsOERBQUNYOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2QsbURBQUtBO29DQUNGZSxLQUFLO29DQUNMQyxPQUFPO29DQUNQQyxRQUFRO29DQUNSQyxLQUFJO29DQUNKSixXQUFVOzs7Ozs7OENBRWQsOERBQUNLO29DQUFFTCxXQUFVOzhDQUF1RDs7Ozs7OzhDQUNwRSw4REFBQ0s7b0NBQUVMLFdBQVU7OENBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVExRTtLQTdFTVY7QUErRU4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9Ib21lU3RhdHNNb2RhbC9Ib21lU3RhdHNNb2RhbC50c3g/MGIwZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgZ2V0TkZURGF0YSwgZ2V0TkZUQmFsYW5jZSwgZ2V0U2hhcmVzLCBHZXRORlROYW1lQnlMZXZlbCB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcbmltcG9ydCB7IGZvcm1hdHRlciwgZm9ybWF0dGVyTm9EZWMgfSBmcm9tIFwiLi4vLi4vLi4vc2NyaXB0cy90ZXN0XCI7XHJcblxyXG5jb25zdCBIb21lU3RhdHNNb2RhbCA9ICh7XHJcbiAgICBpZCxcclxuICAgIGNsb3NlRXZlbnQsXHJcbiAgICBhZGRyZXNzLFxyXG4gICAgYmFsYW5jZVxyXG59OiBhbnkpID0+IHtcclxuXHJcbiAgICB2YXIgZGF0YSA9IGdldE5GVERhdGEoYWRkcmVzcywgYmFsYW5jZSk7XHJcblxyXG4gICAgY29uc3QgbGlzdE5GVHMgPSBkYXRhLm1hcCgobmZ0cykgPT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnIGtleT17bmZ0cy5pZH0+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ljb25zL25mdC5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPjUge0dldE5GVE5hbWVCeUxldmVsKG5mdHMubGV2ZWwpfXtuZnRzLmFtb3VudCA+IDEgPyBcInNcIiA6XCJcIn08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUtNjAnPiR7Zm9ybWF0dGVyTm9EZWMuZm9ybWF0KG5mdHMudmFsdWUpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtb3ZlcmxheScgaWQ9e2lkICsgXCJvdmVybGF5XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBsZzppdGVtcy1zdGFydCBpdGVtcy1jZW50ZXIgdy0xMDAgbGc6cHgtWzUwcHhdIHB4LVszNXB4XSBsZzpwdC1bMzVweF0gcHQtWzIwcHhdJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz5NeSBBY2NvdW50PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtMnhsIHgtYnRuJyBvbkNsaWNrPXtjbG9zZUV2ZW50fT5YPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtWzEwMCVdIHctWzEwMCVdIGxnOnB4LVs1MHB4XSBweC1bMzVweF0gbGc6cHQtWzM1cHhdIHB0LVsyMHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyLz5cclxuICAgICAgICAgICAgICAgICAgICB7bGlzdE5GVHN9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvc3BhcmtfbG90dGVyeS5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJuZnQgbG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgbGc6YmxvY2sgaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J21kOnRleHQtbGcgdGV4dC1iYXNlIHRleHQtd2hpdGUgbGc6bHMtd2lkZXN0IGxzLXdpZGUnPlBFTkRJTkcgUkVXQVJEUzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4kNzgsNjI1PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgMnhsOm15LTUgIHNtOm15LTMgbXktNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pY29ucy90YWJfdmF1bHQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOmxzLXdpZGVzdCBscy13aWRlJz5DTEFJTUVEIFJFV0FSRFM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbWQ6dGV4dC1sZyB0ZXh0LWJhc2UgdGV4dC13aGl0ZS02MCc+JDUwLDM4ODwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIDJ4bDpteS01ICBzbTpteS0zIG15LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaWNvbnMvYXJrX2Euc3ZnXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01IGxnOmJsb2NrIGhpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlIGxnOmxzLXdpZGVzdCBscy13aWRlJz5UT1RBTCBXT1JUSDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdtZDp0ZXh0LWxnIHRleHQtYmFzZSB0ZXh0LXdoaXRlLTYwJz4kNDU5LDAxMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVTdGF0c01vZGFsOyJdLCJuYW1lcyI6WyJJbWFnZSIsImdldE5GVERhdGEiLCJHZXRORlROYW1lQnlMZXZlbCIsImZvcm1hdHRlck5vRGVjIiwiSG9tZVN0YXRzTW9kYWwiLCJpZCIsImNsb3NlRXZlbnQiLCJhZGRyZXNzIiwiYmFsYW5jZSIsImRhdGEiLCJsaXN0TkZUcyIsIm1hcCIsIm5mdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInAiLCJsZXZlbCIsImFtb3VudCIsImZvcm1hdCIsInZhbHVlIiwiaHIiLCJoNCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/HomeStatsModal/HomeStatsModal.tsx\n"));

/***/ })

});