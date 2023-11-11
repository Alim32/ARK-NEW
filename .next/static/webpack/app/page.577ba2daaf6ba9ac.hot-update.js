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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/scripts/test.js */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* harmony import */ var _components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ScrollVisibility */ \"(app-pages-browser)/./src/components/ScrollVisibility/index.ts\");\n/* harmony import */ var _components_Home_HomeStatsModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Home/HomeStatsModal */ \"(app-pages-browser)/./src/components/Home/HomeStatsModal/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nconst Hero = (param)=>{\n    let { address } = param;\n    var shares = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getShares)(address);\n    var balance = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTBalance)(address);\n    var width = window.innerWidth;\n    var name = localStorage.getItem(\"profileName\");\n    var filename = \"/images/arc_main.png\";\n    if (width < 1300) {\n        filename = \"/images/arc_mob.png\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_4__.ScrollVisibility, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-100 justify-center items-center lg:pt-[2.5vh] 2xl:pb-[20vh] lg:pb-[5vh]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-white text-center md:tracking-[0.1em] my-5 mt-4 cp\",\n                        onClick: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.OpenModal)(\"modal-myacc\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white-30 mr-[1rem]\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(shares)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white-30 sm:inline hidden\",\n                                children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).substring(_scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).indexOf(\".\"), _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).length)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-white ls-wide cp\",\n                        onClick: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.OpenModal)(\"modal-myacc\"),\n                        children: [\n                            balance,\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"ml-[11px] text-white-30\",\n                                children: \"NFT(s)\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 106\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: \"w-100 h-100 object-fit-contain mt-10 pt-5\",\n                        src: filename,\n                        width: 1600,\n                        height: 1000,\n                        alt: \"ARC ARK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1 flex flex-row items-center sm:mt-0 mt-[50px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"2xl:mt-1\",\n                                        children: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"w-100 h-100 object-fit-contain ml-2\",\n                                        src: \"/images/mint.png\",\n                                        width: 25,\n                                        height: 25,\n                                        alt: \"Mint NFT\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 sm:px-3 px-2 sm:py-2 py-1  flex flex-row items-center sm:mt-0 mt-[50px]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"2xl:mt-1\",\n                                        children: \"Claim Rewards\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        className: \"w-100 h-100 object-fit-contain ml-2\",\n                                        src: \"/images/claim.png\",\n                                        width: 25,\n                                        height: 25,\n                                        alt: \"Claim Rewards\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_HomeStatsModal__WEBPACK_IMPORTED_MODULE_5__.HomeStatsModal, {\n                id: \"modal-myacc\",\n                closeEvent: ()=>(0,_scripts_test__WEBPACK_IMPORTED_MODULE_3__.CloseModal)(\"modal-myacc\"),\n                balance: balance,\n                address: address\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDK0I7QUFDeUM7QUFDYjtBQUNLO0FBQ0U7QUFDUjtBQUUxRCxNQUFNUyxPQUFPO1FBQUMsRUFDVkMsT0FBTyxFQUNMO0lBQ0YsSUFBSUMsU0FBU1QsMERBQVNBLENBQUNRO0lBQ3ZCLElBQUlFLFVBQVVYLDhEQUFhQSxDQUFDUztJQUM1QixJQUFJRyxRQUFRQyxPQUFPQyxVQUFVO0lBQzdCLElBQUlDLE9BQU9DLGFBQWFDLE9BQU8sQ0FBQztJQUNoQyxJQUFJQyxXQUFXO0lBQ2YsSUFBSU4sUUFBUSxNQUFNO1FBQ2RNLFdBQVc7SUFDZjtJQUVBLHFCQUNJLDhEQUFDZCwwRUFBZ0JBOzswQkFDYiw4REFBQ2U7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTt3QkFBMERFLFNBQVMsSUFBTWhCLHdEQUFTQSxDQUFDOzswQ0FDN0YsOERBQUNpQjtnQ0FBS0gsV0FBVTswQ0FBMEI7Ozs7OzswQ0FDMUMsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUFjakIseURBQWNBLENBQUNxQixNQUFNLENBQUNkOzs7Ozs7MENBQ3BELDhEQUFDYTtnQ0FBS0gsV0FBVTswQ0FBa0NsQixvREFBU0EsQ0FBQ3NCLE1BQU0sQ0FBQ2QsUUFBUWUsU0FBUyxDQUFDdkIsb0RBQVNBLENBQUNzQixNQUFNLENBQUNkLFFBQVFnQixPQUFPLENBQUMsTUFBTXhCLG9EQUFTQSxDQUFDc0IsTUFBTSxDQUFDZCxRQUFRaUIsTUFBTTs7Ozs7Ozs7Ozs7O2tDQUUvSiw4REFBQ0M7d0JBQUdSLFdBQVU7d0JBQXdCRSxTQUFTLElBQU1oQix3REFBU0EsQ0FBQzs7NEJBQWlCSzs0QkFBUTswQ0FBQyw4REFBQ1k7Z0NBQUtILFdBQVU7MENBQTBCOzs7Ozs7Ozs7Ozs7a0NBQ25JLDhEQUFDckIsbURBQUtBO3dCQUNGcUIsV0FBVTt3QkFDVlMsS0FBS1g7d0JBQ0xOLE9BQU87d0JBQ1BrQixRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7a0NBRVIsOERBQUNaO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ1k7Z0NBQU9aLFdBQVU7O2tEQUNkLDhEQUFDRzt3Q0FBS0gsV0FBVTtrREFBVzs7Ozs7O2tEQUMzQiw4REFBQ3JCLG1EQUFLQTt3Q0FDRnFCLFdBQVU7d0NBQ1ZTLEtBQUs7d0NBQ0xqQixPQUFPO3dDQUNQa0IsUUFBUTt3Q0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7OzBDQUdaLDhEQUFDQztnQ0FBT1osV0FBVTs7a0RBQ2QsOERBQUNHO3dDQUFLSCxXQUFVO2tEQUFXOzs7Ozs7a0RBQzNCLDhEQUFDckIsbURBQUtBO3dDQUNGcUIsV0FBVTt3Q0FDVlMsS0FBSzt3Q0FDTGpCLE9BQU87d0NBQ1BrQixRQUFRO3dDQUNSQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3BCLDhEQUFDMUIsMkVBQWNBO2dCQUFDNEIsSUFBSTtnQkFBZUMsWUFBWSxJQUFNM0IseURBQVVBLENBQUM7Z0JBQWdCSSxTQUFTQTtnQkFBU0YsU0FBU0E7Ozs7Ozs7Ozs7OztBQUd2SDtLQXRETUQ7QUF3RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZS9IZXJvL0hlcm8udHN4P2I0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBnZXRORlREYXRhLCBnZXRORlRCYWxhbmNlLCBnZXRTaGFyZXMgfSBmcm9tIFwiQC9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5pbXBvcnQgeyBmb3JtYXR0ZXIsIGZvcm1hdHRlck5vRGVjIH0gZnJvbSAnQC9zY3JpcHRzL3Rlc3QnO1xyXG5pbXBvcnQgeyBTY3JvbGxWaXNpYmlsaXR5IH0gZnJvbSAnQC9jb21wb25lbnRzL1Njcm9sbFZpc2liaWxpdHknXHJcbmltcG9ydCB7IEhvbWVTdGF0c01vZGFsIH0gZnJvbSAnQC9jb21wb25lbnRzL0hvbWUvSG9tZVN0YXRzTW9kYWwnO1xyXG5pbXBvcnQgeyBPcGVuTW9kYWwsIENsb3NlTW9kYWwgfSBmcm9tICdAL3NjcmlwdHMvdGVzdC5qcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHtcclxuICAgIGFkZHJlc3MgICAgXHJcbn06IGFueSkgPT4ge1xyXG4gICAgdmFyIHNoYXJlcyA9IGdldFNoYXJlcyhhZGRyZXNzKTtcclxuICAgIHZhciBiYWxhbmNlID0gZ2V0TkZUQmFsYW5jZShhZGRyZXNzKTtcclxuICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdmFyIG5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2ZpbGVOYW1lXCIpO1xyXG4gICAgdmFyIGZpbGVuYW1lID0gXCIvaW1hZ2VzL2FyY19tYWluLnBuZ1wiO1xyXG4gICAgaWYgKHdpZHRoIDwgMTMwMCkge1xyXG4gICAgICAgIGZpbGVuYW1lID0gXCIvaW1hZ2VzL2FyY19tb2IucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2Nyb2xsVmlzaWJpbGl0eT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy0xMDAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOnB0LVsyLjV2aF0gMnhsOnBiLVsyMHZoXSBsZzpwYi1bNXZoXSc+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtZDp0cmFja2luZy1bMC4xZW1dIG15LTUgbXQtNCBjcFwiIG9uQ2xpY2s9eygpID0+IE9wZW5Nb2RhbChcIm1vZGFsLW15YWNjXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAgbXItWzFyZW1dJz4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+e2Zvcm1hdHRlck5vRGVjLmZvcm1hdChzaGFyZXMpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAgc206aW5saW5lIGhpZGRlbic+e2Zvcm1hdHRlci5mb3JtYXQoc2hhcmVzKS5zdWJzdHJpbmcoZm9ybWF0dGVyLmZvcm1hdChzaGFyZXMpLmluZGV4T2YoXCIuXCIpLCBmb3JtYXR0ZXIuZm9ybWF0KHNoYXJlcykubGVuZ3RoKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBscy13aWRlIGNwJyBvbkNsaWNrPXsoKSA9PiBPcGVuTW9kYWwoXCJtb2RhbC1teWFjY1wiKX0+e2JhbGFuY2V9IDxzcGFuIGNsYXNzTmFtZT0nbWwtWzExcHhdIHRleHQtd2hpdGUtMzAnPk5GVChzKTwvc3Bhbj48L2gzPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb250YWluIG10LTEwIHB0LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17ZmlsZW5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDAwfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkFSQyBBUktcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciB4bDotbXQtWzVyZW1dIGxnOi1tdC1bM3JlbV0gLW10LVswcmVtXSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3hsOnRleHQtYmFzZSB0ZXh0LXNtIGJ0bi13aGl0ZSBteC0yIHhsOnB4LTQgc206cHgtMyBweC0yIHNtOnB5LTIgcHktMSBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzbTptdC0wIG10LVs1MHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nMnhsOm10LTEnPk1pbnQgTkZUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIGgtMTAwIG9iamVjdC1maXQtY29udGFpbiBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL21pbnQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTWludCBORlRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd4bDp0ZXh0LWJhc2UgdGV4dC1zbSBidG4td2hpdGUgbXgtMiB4bDpweC00IHNtOnB4LTMgcHgtMiBzbTpweS0yIHB5LTEgIGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIHNtOm10LTAgbXQtWzUwcHhdJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPScyeGw6bXQtMSc+Q2xhaW0gUmV3YXJkczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvbnRhaW4gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9jbGFpbS5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDbGFpbSBSZXdhcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEhvbWVTdGF0c01vZGFsIGlkPXtcIm1vZGFsLW15YWNjXCJ9IGNsb3NlRXZlbnQ9eygpID0+IENsb3NlTW9kYWwoXCJtb2RhbC1teWFjY1wiKX0gYmFsYW5jZT17YmFsYW5jZX0gYWRkcmVzcz17YWRkcmVzc30gLz5cclxuICAgICAgICA8L1Njcm9sbFZpc2liaWxpdHk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0TkZUQmFsYW5jZSIsImdldFNoYXJlcyIsImZvcm1hdHRlciIsImZvcm1hdHRlck5vRGVjIiwiU2Nyb2xsVmlzaWJpbGl0eSIsIkhvbWVTdGF0c01vZGFsIiwiT3Blbk1vZGFsIiwiQ2xvc2VNb2RhbCIsIkhlcm8iLCJhZGRyZXNzIiwic2hhcmVzIiwiYmFsYW5jZSIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmlsZW5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJzcGFuIiwiZm9ybWF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImxlbmd0aCIsImgzIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwiYnV0dG9uIiwiaWQiLCJjbG9zZUV2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/Hero/Hero.tsx\n"));

/***/ })

});