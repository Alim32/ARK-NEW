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

/***/ "(app-pages-browser)/./src/components/Home/Statistics/Statistics.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Home/Statistics/Statistics.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/test */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ScrollVisibility */ \"(app-pages-browser)/./src/components/ScrollVisibility/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst DropItem = (param)=>{\n    let { image, text, clickEvent } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"dropdown-item\",\n        onClick: clickEvent,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: image,\n                width: 30,\n                height: 50,\n                alt: \"nft logo\",\n                className: \"mr-5\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: \"text-white text-center mx-5 ls-wider\",\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = DropItem;\nconst Statistics = (param)=>{\n    let {} = param;\n    _s();\n    const [sliderVal, setSliderVal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100000);\n    const [inputVal, setInputVal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(100000);\n    const [shares, setShares] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(10000);\n    function changeShares() {\n        let amount = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, id = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;\n        setShares(amount);\n        setSliderVal(sliderVal);\n        setInputVal(sliderVal);\n        (0,_scripts_test__WEBPACK_IMPORTED_MODULE_2__.calculateNoSetter)(sliderVal, shares);\n        (0,_scripts_test__WEBPACK_IMPORTED_MODULE_2__.setNewNFT)(id);\n    }\n    var values = (0,_scripts_test__WEBPACK_IMPORTED_MODULE_2__.getInitValues)(sliderVal, shares);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__.ScrollVisibility, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"mt-[15vh] mb-[15vh] 2xl:p-10 xl:p-5 sm:p-4 stats-box\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex lg:flex-row flex-col w-100 justify-evenly items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-start items-start w-[100%]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-white mb-10\",\n                                children: \"Ecosystem Statistics\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-products\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Privacy Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-products\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    children: \"Banking Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"btn-products\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        children: \"Arklite\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-white-30\",\n                                        children: \"Lorem ipsum dolar connet.\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"divider lg:block hidden\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center w-[100%] px-5 lg:mt-0 mt-[75px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                className: \"text-white-60\",\n                                children: \"You Earn\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-evenly w-[100%] mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                id: \"daily\",\n                                                className: \"text-white\",\n                                                children: [\n                                                    \"$\",\n                                                    _scripts_test__WEBPACK_IMPORTED_MODULE_2__.formatterNoDec.format(values.daily)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white-30\",\n                                                children: \"per day\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 68,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                id: \"weekly\",\n                                                className: \"text-white\",\n                                                children: [\n                                                    \"$\",\n                                                    _scripts_test__WEBPACK_IMPORTED_MODULE_2__.formatterNoDec.format(values.weekly)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 71,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white-30\",\n                                                children: \"per week\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex flex-row justify-evenly w-[100%] mt-10\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                id: \"monthly\",\n                                                className: \"text-white\",\n                                                children: [\n                                                    \"$\",\n                                                    _scripts_test__WEBPACK_IMPORTED_MODULE_2__.formatterNoDec.format(values.monthly)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white-30\",\n                                                children: \"per month\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col justify-center items-center text-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                id: \"yearly\",\n                                                className: \"text-white\",\n                                                children: [\n                                                    \"$\",\n                                                    _scripts_test__WEBPACK_IMPORTED_MODULE_2__.formatter.format(values.yearly)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-white-30\",\n                                                children: \"per year\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                                lineNumber: 82,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n            lineNumber: 47,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Statistics\\\\Statistics.tsx\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Statistics, \"H+7ZGGSgVPIdRlQttcZ7mGKskWw=\");\n_c1 = Statistics;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistics);\nvar _c, _c1;\n$RefreshReg$(_c, \"DropItem\");\n$RefreshReg$(_c1, \"Statistics\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvU3RhdGlzdGljcy9TdGF0aXN0aWNzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytCO0FBRTJHO0FBQ3pHO0FBRStCO0FBRWhFLE1BQU1RLFdBQVc7UUFBQyxFQUNkQyxLQUFLLEVBQ0xDLElBQUksRUFDSkMsVUFBVSxFQUNSO0lBQ0YscUJBQ0ksOERBQUNDO1FBQU9DLFdBQVU7UUFBZ0JDLFNBQVNIOzswQkFDdkMsOERBQUNYLG1EQUFLQTtnQkFDRmUsS0FBS047Z0JBQ0xPLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLEtBQUk7Z0JBQ0pMLFdBQVU7Ozs7OzswQkFFZCw4REFBQ007Z0JBQUdOLFdBQVU7MEJBQXdDSDs7Ozs7OzBCQUN0RCw4REFBQ1U7Ozs7Ozs7Ozs7O0FBR2I7S0FsQk1aO0FBb0JOLE1BQU1hLGFBQWE7UUFBQyxFQUNkOztJQUNGLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHakIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDa0IsVUFBVUMsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDb0IsUUFBUUMsVUFBVSxHQUFHckIsK0NBQVFBLENBQUM7SUFFckMsU0FBU3NCO1lBQWFDLFNBQUFBLGlFQUFTLEdBQUdDLEtBQUFBLGlFQUFLO1FBQ25DSCxVQUFVRTtRQUNWTixhQUFhRDtRQUNiRyxZQUFZSDtRQUNabkIsZ0VBQWlCQSxDQUFDbUIsV0FBV0k7UUFDN0JyQix3REFBU0EsQ0FBQ3lCO0lBQ2Q7SUFFQSxJQUFJQyxTQUFTM0IsNERBQWFBLENBQUNrQixXQUFXSTtJQUV0QyxxQkFDSSw4REFBQ25CLDBFQUFnQkE7a0JBQ2IsNEVBQUN5QjtZQUFJbkIsV0FBVTtzQkFDWCw0RUFBQ21CO2dCQUFJbkIsV0FBVTs7a0NBQ1gsOERBQUNtQjt3QkFBSW5CLFdBQVU7OzBDQUNYLDhEQUFDb0I7Z0NBQUdwQixXQUFVOzBDQUFtQjs7Ozs7OzBDQUNqQyw4REFBQ0Q7Z0NBQU9DLFdBQVU7MENBQ2QsNEVBQUNxQjs4Q0FBRzs7Ozs7Ozs7Ozs7MENBRVIsOERBQUN0QjtnQ0FBT0MsV0FBVTswQ0FDZCw0RUFBQ3FCOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFUiw4REFBQ3RCO2dDQUFPQyxXQUFVOztrREFDZCw4REFBQ3FCO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO3dDQUFFdEIsV0FBVTtrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHckMsOERBQUNtQjt3QkFBSW5CLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ21CO3dCQUFJbkIsV0FBVTs7MENBQ1gsOERBQUNNO2dDQUFHTixXQUFVOzBDQUFnQjs7Ozs7OzBDQUM5Qiw4REFBQ21CO2dDQUFJbkIsV0FBVTs7a0RBQ1gsOERBQUNtQjt3Q0FBSW5CLFdBQVU7OzBEQUNYLDhEQUFDb0I7Z0RBQUdILElBQUc7Z0RBQVFqQixXQUFVOztvREFBYTtvREFBRVgseURBQWNBLENBQUNrQyxNQUFNLENBQUNMLE9BQU9NLEtBQUs7Ozs7Ozs7MERBQzFFLDhEQUFDRjtnREFBRXRCLFdBQVU7MERBQWdCOzs7Ozs7Ozs7Ozs7a0RBRWpDLDhEQUFDbUI7d0NBQUluQixXQUFVOzswREFDWCw4REFBQ29CO2dEQUFHSCxJQUFHO2dEQUFTakIsV0FBVTs7b0RBQWE7b0RBQUVYLHlEQUFjQSxDQUFDa0MsTUFBTSxDQUFDTCxPQUFPTyxNQUFNOzs7Ozs7OzBEQUM1RSw4REFBQ0g7Z0RBQUV0QixXQUFVOzBEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdyQyw4REFBQ21CO2dDQUFJbkIsV0FBVTs7a0RBQ1gsOERBQUNtQjt3Q0FBSW5CLFdBQVU7OzBEQUNYLDhEQUFDb0I7Z0RBQUdILElBQUc7Z0RBQVVqQixXQUFVOztvREFBYTtvREFBRVgseURBQWNBLENBQUNrQyxNQUFNLENBQUNMLE9BQU9RLE9BQU87Ozs7Ozs7MERBQzlFLDhEQUFDSjtnREFBRXRCLFdBQVU7MERBQWdCOzs7Ozs7Ozs7Ozs7a0RBRWpDLDhEQUFDbUI7d0NBQUluQixXQUFVOzswREFDWCw4REFBQ29CO2dEQUFHSCxJQUFHO2dEQUFTakIsV0FBVTs7b0RBQWE7b0RBQUVaLG9EQUFTQSxDQUFDbUMsTUFBTSxDQUFDTCxPQUFPUyxNQUFNOzs7Ozs7OzBEQUN2RSw4REFBQ0w7Z0RBQUV0QixXQUFVOzBEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE3RDtHQTdETVE7TUFBQUE7QUErRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9TdGF0aXN0aWNzL1N0YXRpc3RpY3MudHN4P2NkMmIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRORlREYXRhLCBnZXRORlRCYWxhbmNlLCBnZXRTaGFyZXMgfSBmcm9tIFwiQC9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5pbXBvcnQgeyBmb3JtYXR0ZXIsIGZvcm1hdHRlck5vRGVjLCBjYWxjdWxhdGUsIGNhbGN1bGF0ZU5vU2V0dGVyLCBvbklucHV0LCBnZXRJbml0VmFsdWVzLCBzZXROZXdORlQsIG9wZW5Ecm9wRG93biB9IGZyb20gJ0Avc2NyaXB0cy90ZXN0JztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIi4uLy4uL01JU0MvRHJvcGRvd25cIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlzaWJpbGl0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9TY3JvbGxWaXNpYmlsaXR5J1xyXG5cclxuY29uc3QgRHJvcEl0ZW0gPSAoe1xyXG4gICAgaW1hZ2UsXHJcbiAgICB0ZXh0LFxyXG4gICAgY2xpY2tFdmVudFxyXG59OiBhbnkpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Ryb3Bkb3duLWl0ZW0nIG9uQ2xpY2s9e2NsaWNrRXZlbnR9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxvZ29cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdtci01J1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBteC01IGxzLXdpZGVyXCI+e3RleHR9PC9oND5cclxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5jb25zdCBTdGF0aXN0aWNzID0gKHtcclxufTogYW55KSA9PiB7XHJcbiAgICBjb25zdCBbc2xpZGVyVmFsLCBzZXRTbGlkZXJWYWxdID0gdXNlU3RhdGUoMTAwMDAwKTtcclxuICAgIGNvbnN0IFtpbnB1dFZhbCwgc2V0SW5wdXRWYWxdID0gdXNlU3RhdGUoMTAwMDAwKTtcclxuICAgIGNvbnN0IFtzaGFyZXMsIHNldFNoYXJlc10gPSB1c2VTdGF0ZSgxMDAwMCk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlU2hhcmVzKGFtb3VudCA9IDAsIGlkID0gMSkge1xyXG4gICAgICAgIHNldFNoYXJlcyhhbW91bnQpO1xyXG4gICAgICAgIHNldFNsaWRlclZhbChzbGlkZXJWYWwpO1xyXG4gICAgICAgIHNldElucHV0VmFsKHNsaWRlclZhbCk7XHJcbiAgICAgICAgY2FsY3VsYXRlTm9TZXR0ZXIoc2xpZGVyVmFsLCBzaGFyZXMpO1xyXG4gICAgICAgIHNldE5ld05GVChpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHZhbHVlcyA9IGdldEluaXRWYWx1ZXMoc2xpZGVyVmFsLCBzaGFyZXMpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNjcm9sbFZpc2liaWxpdHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC1bMTV2aF0gbWItWzE1dmhdIDJ4bDpwLTEwIHhsOnAtNSBzbTpwLTQgc3RhdHMtYm94Jz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbGc6ZmxleC1yb3cgZmxleC1jb2wgdy0xMDAganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCB3LVsxMDAlXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIG1iLTEwJz5FY29zeXN0ZW0gU3RhdGlzdGljczwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tcHJvZHVjdHMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlByaXZhY3kgUHJvZHVjdHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1wcm9kdWN0cyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+QmFua2luZyBQcm9kdWN0czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXByb2R1Y3RzJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5BcmtsaXRlPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC13aGl0ZS0zMCc+TG9yZW0gaXBzdW0gZG9sYXIgY29ubmV0LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyIGxnOmJsb2NrIGhpZGRlblwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1bMTAwJV0gcHgtNSBsZzptdC0wIG10LVs3NXB4XVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC13aGl0ZS02MFwiPllvdSBFYXJuPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHkgdy1bMTAwJV0gbXQtMTAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9J2RhaWx5JyBjbGFzc05hbWU9J3RleHQtd2hpdGUnPiR7Zm9ybWF0dGVyTm9EZWMuZm9ybWF0KHZhbHVlcy5kYWlseSl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAnPnBlciBkYXk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LWNlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGlkPSd3ZWVrbHknIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+JHtmb3JtYXR0ZXJOb0RlYy5mb3JtYXQodmFsdWVzLndlZWtseSl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAnPnBlciB3ZWVrPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWV2ZW5seSB3LVsxMDAlXSBtdC0xMCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBpZD0nbW9udGhseScgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz4ke2Zvcm1hdHRlck5vRGVjLmZvcm1hdCh2YWx1ZXMubW9udGhseSl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAnPnBlciBtb250aDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgaWQ9J3llYXJseScgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz4ke2Zvcm1hdHRlci5mb3JtYXQodmFsdWVzLnllYXJseSl9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAnPnBlciB5ZWFyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvU2Nyb2xsVmlzaWJpbGl0eT5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdGF0aXN0aWNzO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJmb3JtYXR0ZXIiLCJmb3JtYXR0ZXJOb0RlYyIsImNhbGN1bGF0ZU5vU2V0dGVyIiwiZ2V0SW5pdFZhbHVlcyIsInNldE5ld05GVCIsInVzZVN0YXRlIiwiU2Nyb2xsVmlzaWJpbGl0eSIsIkRyb3BJdGVtIiwiaW1hZ2UiLCJ0ZXh0IiwiY2xpY2tFdmVudCIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImg0Iiwic3BhbiIsIlN0YXRpc3RpY3MiLCJzbGlkZXJWYWwiLCJzZXRTbGlkZXJWYWwiLCJpbnB1dFZhbCIsInNldElucHV0VmFsIiwic2hhcmVzIiwic2V0U2hhcmVzIiwiY2hhbmdlU2hhcmVzIiwiYW1vdW50IiwiaWQiLCJ2YWx1ZXMiLCJkaXYiLCJoMyIsImg1IiwicCIsImZvcm1hdCIsImRhaWx5Iiwid2Vla2x5IiwibW9udGhseSIsInllYXJseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/Statistics/Statistics.tsx\n"));

/***/ })

});