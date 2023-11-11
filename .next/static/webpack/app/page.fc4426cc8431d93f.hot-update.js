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

/***/ "(app-pages-browser)/./src/components/Home/Hero/Hero.tsx":
/*!*******************************************!*\
  !*** ./src/components/Home/Hero/Hero.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/scripts/test.js */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* harmony import */ var _components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ScrollVisibility */ \"(app-pages-browser)/./src/components/ScrollVisibility/index.ts\");\n/* harmony import */ var _components_Home_HomeStatsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Home/HomeStatsModal */ \"(app-pages-browser)/./src/components/Home/HomeStatsModal/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nconst Hero = (param)=>{\n    let { address } = param;\n    var shares = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getShares)(address);\n    var balance = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTBalance)(address);\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address, balance);\n    console.log(data);\n    var width = window.innerWidth;\n    var filename = \"/images/arc_main.png\";\n    if (width < 1300) {\n        filename = \"/images/arc_mob.png\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__.ScrollVisibility, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-100 justify-center items-center lg:pt-[2.5vh] 2xl:pb-[20vh] lg:pb-[5vh]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-center md:tracking-[0.1em] my-5 mt-4 cp\",\n                        onClick: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.OpenModal)(\"modal-myacc\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white-30 mr-[1rem]\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(shares)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white-30 sm:inline hidden\",\n                                children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).substring(_scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).indexOf(\".\"), _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).length)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-white ls-wide cp\",\n                        onClick: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.OpenModal)(\"modal-myacc\"),\n                        children: [\n                            balance,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-[11px] text-white-30\",\n                                children: \"NFT(s)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 106\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"w-100 h-100 object-fit-contain mt-10 pt-5\",\n                        src: filename,\n                        width: 1600,\n                        height: 1000,\n                        alt: \"ARC ARK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1 flex flex-row items-center sm:mt-0 mt-[50px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"2xl:mt-1\",\n                                        children: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"w-100 h-100 object-fit-contain ml-2\",\n                                        src: \"/images/mint.png\",\n                                        width: 25,\n                                        height: 25,\n                                        alt: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"2xl:mt-1\",\n                                        children: \"Claim Rewards\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"w-100 h-100 object-fit-contain ml-2\",\n                                        src: \"/images/claim.png\",\n                                        width: 25,\n                                        height: 25,\n                                        alt: \"Claim Rewards\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_HomeStatsModal__WEBPACK_IMPORTED_MODULE_5__.HomeStatsModal, {\n                id: \"modal-myacc\",\n                closeEvent: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.CloseModal)(\"modal-myacc\"),\n                data: data\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDeUM7QUFDYjtBQUNLO0FBQ0U7QUFDUjtBQUUxRCxNQUFNVSxPQUFPO1FBQUMsRUFDVkMsT0FBTyxFQUNMO0lBQ0YsSUFBSUMsU0FBU1QsMERBQVNBLENBQUNRO0lBQ3ZCLElBQUlFLFVBQVVYLDhEQUFhQSxDQUFDUztJQUM1QixJQUFJRyxPQUFPYiwyREFBVUEsQ0FBQ1UsU0FBU0U7SUFDL0JFLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixJQUFJRyxRQUFRQyxPQUFPQyxVQUFVO0lBQzdCLElBQUlDLFdBQVc7SUFDZixJQUFJSCxRQUFRLE1BQU07UUFDZEcsV0FBVztJQUNmO0lBRUEscUJBQ0ksOERBQUNkLDBFQUFnQkE7OzBCQUNiLDhEQUFDZTtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO3dCQUEwREUsU0FBUyxJQUFNaEIsd0RBQVNBLENBQUM7OzBDQUM3Riw4REFBQ2lCO2dDQUFLSCxXQUFVOzBDQUEwQjs7Ozs7OzBDQUMxQyw4REFBQ0c7Z0NBQUtILFdBQVU7MENBQWNqQix5REFBY0EsQ0FBQ3FCLE1BQU0sQ0FBQ2Q7Ozs7OzswQ0FDcEQsOERBQUNhO2dDQUFLSCxXQUFVOzBDQUFrQ2xCLG9EQUFTQSxDQUFDc0IsTUFBTSxDQUFDZCxRQUFRZSxTQUFTLENBQUN2QixvREFBU0EsQ0FBQ3NCLE1BQU0sQ0FBQ2QsUUFBUWdCLE9BQU8sQ0FBQyxNQUFNeEIsb0RBQVNBLENBQUNzQixNQUFNLENBQUNkLFFBQVFpQixNQUFNOzs7Ozs7Ozs7Ozs7a0NBRS9KLDhEQUFDQzt3QkFBR1IsV0FBVTt3QkFBd0JFLFNBQVMsSUFBTWhCLHdEQUFTQSxDQUFDOzs0QkFBaUJLOzRCQUFROzBDQUFDLDhEQUFDWTtnQ0FBS0gsV0FBVTswQ0FBMEI7Ozs7Ozs7Ozs7OztrQ0FDbkksOERBQUN0QixtREFBS0E7d0JBQ0ZzQixXQUFVO3dCQUNWUyxLQUFLWDt3QkFDTEgsT0FBTzt3QkFDUGUsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7O2tDQUVSLDhEQUFDWjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNZO2dDQUFPWixXQUFVOztrREFDZCw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQVc7Ozs7OztrREFDM0IsOERBQUN0QixtREFBS0E7d0NBQ0ZzQixXQUFVO3dDQUNWUyxLQUFLO3dDQUNMZCxPQUFPO3dDQUNQZSxRQUFRO3dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7MENBR1osOERBQUNDO2dDQUFPWixXQUFVOztrREFDZCw4REFBQ0c7d0NBQUtILFdBQVU7a0RBQVc7Ozs7OztrREFDM0IsOERBQUN0QixtREFBS0E7d0NBQ0ZzQixXQUFVO3dDQUNWUyxLQUFLO3dDQUNMZCxPQUFPO3dDQUNQZSxRQUFRO3dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3BCLDhEQUFDMUIsMkVBQWNBO2dCQUFDNEIsSUFBSTtnQkFBZUMsWUFBWSxJQUFNM0IseURBQVVBLENBQUM7Z0JBQWdCSyxNQUFNQTs7Ozs7Ozs7Ozs7O0FBR2xHO0tBdkRNSjtBQXlETiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL0hlcm8vSGVyby50c3g/YjRhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IGdldE5GVERhdGEsIGdldE5GVEJhbGFuY2UsIGdldFNoYXJlcyB9IGZyb20gXCJAL3NjcmlwdHMvbGVnYWN5XCI7XHJcbmltcG9ydCB7IGZvcm1hdHRlciwgZm9ybWF0dGVyTm9EZWMgfSBmcm9tICdAL3NjcmlwdHMvdGVzdCc7XHJcbmltcG9ydCB7IFNjcm9sbFZpc2liaWxpdHkgfSBmcm9tICdAL2NvbXBvbmVudHMvU2Nyb2xsVmlzaWJpbGl0eSdcclxuaW1wb3J0IHsgSG9tZVN0YXRzTW9kYWwgfSBmcm9tICdAL2NvbXBvbmVudHMvSG9tZS9Ib21lU3RhdHNNb2RhbCc7XHJcbmltcG9ydCB7IE9wZW5Nb2RhbCwgQ2xvc2VNb2RhbCB9IGZyb20gJ0Avc2NyaXB0cy90ZXN0LmpzJztcclxuXHJcbmNvbnN0IEhlcm8gPSAoe1xyXG4gICAgYWRkcmVzcyAgICBcclxufTogYW55KSA9PiB7XHJcbiAgICB2YXIgc2hhcmVzID0gZ2V0U2hhcmVzKGFkZHJlc3MpO1xyXG4gICAgdmFyIGJhbGFuY2UgPSBnZXRORlRCYWxhbmNlKGFkZHJlc3MpO1xyXG4gICAgdmFyIGRhdGEgPSBnZXRORlREYXRhKGFkZHJlc3MsIGJhbGFuY2UpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICB2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIHZhciBmaWxlbmFtZSA9IFwiL2ltYWdlcy9hcmNfbWFpbi5wbmdcIjtcclxuICAgIGlmICh3aWR0aCA8IDEzMDApIHtcclxuICAgICAgICBmaWxlbmFtZSA9IFwiL2ltYWdlcy9hcmNfbW9iLnBuZ1wiO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNjcm9sbFZpc2liaWxpdHk+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHctMTAwIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpwdC1bMi41dmhdIDJ4bDpwYi1bMjB2aF0gbGc6cGItWzV2aF0nPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbWQ6dHJhY2tpbmctWzAuMWVtXSBteS01IG10LTQgY3BcIiBvbkNsaWNrPXsoKSA9PiBPcGVuTW9kYWwoXCJtb2RhbC1teWFjY1wiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlLTMwIG1yLVsxcmVtXSc+JDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUnPntmb3JtYXR0ZXJOb0RlYy5mb3JtYXQoc2hhcmVzKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlLTMwIHNtOmlubGluZSBoaWRkZW4nPntmb3JtYXR0ZXIuZm9ybWF0KHNoYXJlcykuc3Vic3RyaW5nKGZvcm1hdHRlci5mb3JtYXQoc2hhcmVzKS5pbmRleE9mKFwiLlwiKSwgZm9ybWF0dGVyLmZvcm1hdChzaGFyZXMpLmxlbmd0aCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J3RleHQtd2hpdGUgbHMtd2lkZSBjcCcgb25DbGljaz17KCkgPT4gT3Blbk1vZGFsKFwibW9kYWwtbXlhY2NcIil9PntiYWxhbmNlfSA8c3BhbiBjbGFzc05hbWU9J21sLVsxMXB4XSB0ZXh0LXdoaXRlLTMwJz5ORlQocyk8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIGgtMTAwIG9iamVjdC1maXQtY29udGFpbiBtdC0xMCBwdC01XCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2ZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNjAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJBUkMgQVJLXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgeGw6LW10LVs1cmVtXSBsZzotbXQtWzNyZW1dIC1tdC1bMHJlbV0nPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd4bDp0ZXh0LWJhc2UgdGV4dC1zbSBidG4td2hpdGUgbXgtMiB4bDpweC00IHNtOnB4LTMgcHgtMiBzbTpweS0yIHB5LTEgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc206bXQtMCBtdC1bNTBweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9JzJ4bDptdC0xJz5NaW50IE5GVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvbnRhaW4gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9taW50LnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk1pbnQgTkZUXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0neGw6dGV4dC1iYXNlIHRleHQtc20gYnRuLXdoaXRlIG14LTIgeGw6cHgtNCBzbTpweC0zIHB4LTIgc206cHktMiBweS0xICBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzbTptdC0wIG10LVs1MHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nMnhsOm10LTEnPkNsYWltIFJld2FyZHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb250YWluIG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvY2xhaW0ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2xhaW0gUmV3YXJkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxIb21lU3RhdHNNb2RhbCBpZD17XCJtb2RhbC1teWFjY1wifSBjbG9zZUV2ZW50PXsoKSA9PiBDbG9zZU1vZGFsKFwibW9kYWwtbXlhY2NcIil9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgICAgPC9TY3JvbGxWaXNpYmlsaXR5PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImdldE5GVERhdGEiLCJnZXRORlRCYWxhbmNlIiwiZ2V0U2hhcmVzIiwiZm9ybWF0dGVyIiwiZm9ybWF0dGVyTm9EZWMiLCJTY3JvbGxWaXNpYmlsaXR5IiwiSG9tZVN0YXRzTW9kYWwiLCJPcGVuTW9kYWwiLCJDbG9zZU1vZGFsIiwiSGVybyIsImFkZHJlc3MiLCJzaGFyZXMiLCJiYWxhbmNlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJmaWxlbmFtZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwib25DbGljayIsInNwYW4iLCJmb3JtYXQiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwiaDMiLCJzcmMiLCJoZWlnaHQiLCJhbHQiLCJidXR0b24iLCJpZCIsImNsb3NlRXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/Hero/Hero.tsx\n"));

/***/ })

});