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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* harmony import */ var _scripts_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/scripts/test */ \"(app-pages-browser)/./src/scripts/test.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst Hero = (param)=>{\n    let { address, openmodal } = param;\n    var shares = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getShares)(address);\n    var balance = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTBalance)(address);\n    var data = (0,_scripts_legacy__WEBPACK_IMPORTED_MODULE_2__.getNFTData)(address);\n    var width = window.innerWidth;\n    var filename = \"/images/arc_main.png\";\n    if (width < 1300) {\n        filename = \"/images/arc_mob.png\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-100 justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-white text-center md:tracking-[0.1em] my-5 mt-4 cp\",\n                onClick: openmodal,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white-30 mr-[1rem]\",\n                        children: \"$\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white\",\n                        children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatterNoDec.format(shares)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-white-30\",\n                        children: _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).substring(_scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).indexOf(\".\"), _scripts_test__WEBPACK_IMPORTED_MODULE_3__.formatter.format(shares).length)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-white ls-wide cp\",\n                onClick: openmodal,\n                children: [\n                    balance,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-[11px] text-white-30\",\n                        children: \"NFT(s)\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 81\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"w-100 h-100 object-fit-contain mt-10 pt-5\",\n                src: filename,\n                width: 1600,\n                height: 1000,\n                alt: \"ARC ARK\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row justify-evenly items-center xl:-mt-[5rem] lg:-mt-[3rem] -mt-[0rem]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 px-3 py-2 flex flex-row items-center sm:mt-0 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"2xl:mt-1\",\n                                children: \"Mint NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"w-100 h-100 object-fit-contain ml-2\",\n                                src: \"/images/mint.png\",\n                                width: 25,\n                                height: 25,\n                                alt: \"Mint NFT\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"xl:text-base text-sm btn-white mx-2 xl:px-4 px-3 py-2 flex flex-row items-center sm:mt-0 mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"2xl:mt-1\",\n                                children: \"Claim Rewards\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"w-100 h-100 object-fit-contain ml-2\",\n                                src: \"/images/claim.png\",\n                                width: 25,\n                                height: 25,\n                                alt: \"Claim Rewards\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Home\\\\Hero\\\\Hero.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytCO0FBQ3lDO0FBQ2I7QUFJM0QsTUFBTU0sT0FBTztRQUFDLEVBQ1ZDLE9BQU8sRUFDUEMsU0FBUyxFQUNQO0lBQ0YsSUFBSUMsU0FBU04sMERBQVNBLENBQUNJO0lBQ3ZCLElBQUlHLFVBQVVSLDhEQUFhQSxDQUFDSztJQUM1QixJQUFJSSxPQUFPViwyREFBVUEsQ0FBQ007SUFDdEIsSUFBSUssUUFBUUMsT0FBT0MsVUFBVTtJQUM3QixJQUFJQyxXQUFXO0lBQ2YsSUFBSUgsUUFBUSxNQUFNO1FBQ2RHLFdBQVc7SUFDZjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQUdELFdBQVU7Z0JBQTBERSxTQUFTWDs7a0NBQzdFLDhEQUFDWTt3QkFBS0gsV0FBVTtrQ0FBMEI7Ozs7OztrQ0FDMUMsOERBQUNHO3dCQUFLSCxXQUFVO2tDQUFjWix5REFBY0EsQ0FBQ2dCLE1BQU0sQ0FBQ1o7Ozs7OztrQ0FDcEQsOERBQUNXO3dCQUFLSCxXQUFVO2tDQUFpQmIsb0RBQVNBLENBQUNpQixNQUFNLENBQUNaLFFBQVFhLFNBQVMsQ0FBQ2xCLG9EQUFTQSxDQUFDaUIsTUFBTSxDQUFDWixRQUFRYyxPQUFPLENBQUMsTUFBTW5CLG9EQUFTQSxDQUFDaUIsTUFBTSxDQUFDWixRQUFRZSxNQUFNOzs7Ozs7Ozs7Ozs7MEJBRTlJLDhEQUFDQztnQkFBR1IsV0FBVTtnQkFBd0JFLFNBQVNYOztvQkFBWUU7b0JBQVE7a0NBQUMsOERBQUNVO3dCQUFLSCxXQUFVO2tDQUEwQjs7Ozs7Ozs7Ozs7OzBCQUM5Ryw4REFBQ2pCLG1EQUFLQTtnQkFDRmlCLFdBQVU7Z0JBQ1ZTLEtBQUtYO2dCQUNMSCxPQUFPO2dCQUNQZSxRQUFRO2dCQUNSQyxLQUFJOzs7Ozs7MEJBRVIsOERBQUNaO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ1k7d0JBQU9aLFdBQVU7OzBDQUNkLDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBVzs7Ozs7OzBDQUMzQiw4REFBQ2pCLG1EQUFLQTtnQ0FDRmlCLFdBQVU7Z0NBQ1ZTLEtBQUs7Z0NBQ0xkLE9BQU87Z0NBQ1BlLFFBQVE7Z0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7OztrQ0FHWiw4REFBQ0M7d0JBQU9aLFdBQVU7OzBDQUNkLDhEQUFDRztnQ0FBS0gsV0FBVTswQ0FBVzs7Ozs7OzBDQUMzQiw4REFBQ2pCLG1EQUFLQTtnQ0FDRmlCLFdBQVU7Z0NBQ1ZTLEtBQUs7Z0NBQ0xkLE9BQU87Z0NBQ1BlLFFBQVE7Z0NBQ1JDLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtLQXBETXRCO0FBc0ROLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0hvbWUvSGVyby9IZXJvLnRzeD9iNGE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgZ2V0TkZURGF0YSwgZ2V0TkZUQmFsYW5jZSwgZ2V0U2hhcmVzIH0gZnJvbSBcIkAvc2NyaXB0cy9sZWdhY3lcIjtcclxuaW1wb3J0IHsgZm9ybWF0dGVyLCBmb3JtYXR0ZXJOb0RlYyB9IGZyb20gJ0Avc2NyaXB0cy90ZXN0JztcclxuXHJcblxyXG5cclxuY29uc3QgSGVybyA9ICh7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgb3Blbm1vZGFsXHJcbn06IGFueSkgPT4ge1xyXG4gICAgdmFyIHNoYXJlcyA9IGdldFNoYXJlcyhhZGRyZXNzKTtcclxuICAgIHZhciBiYWxhbmNlID0gZ2V0TkZUQmFsYW5jZShhZGRyZXNzKTtcclxuICAgIHZhciBkYXRhID0gZ2V0TkZURGF0YShhZGRyZXNzKTtcclxuICAgIHZhciB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgdmFyIGZpbGVuYW1lID0gXCIvaW1hZ2VzL2FyY19tYWluLnBuZ1wiO1xyXG4gICAgaWYgKHdpZHRoIDwgMTMwMCkge1xyXG4gICAgICAgIGZpbGVuYW1lID0gXCIvaW1hZ2VzL2FyY19tb2IucG5nXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCB3LTEwMCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBtZDp0cmFja2luZy1bMC4xZW1dIG15LTUgbXQtNCBjcFwiIG9uQ2xpY2s9e29wZW5tb2RhbH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtd2hpdGUtMzAgbXItWzFyZW1dJz4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57Zm9ybWF0dGVyTm9EZWMuZm9ybWF0KHNoYXJlcyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlLTMwJz57Zm9ybWF0dGVyLmZvcm1hdChzaGFyZXMpLnN1YnN0cmluZyhmb3JtYXR0ZXIuZm9ybWF0KHNoYXJlcykuaW5kZXhPZihcIi5cIiksIGZvcm1hdHRlci5mb3JtYXQoc2hhcmVzKS5sZW5ndGgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBscy13aWRlIGNwJyBvbkNsaWNrPXtvcGVubW9kYWx9PntiYWxhbmNlfSA8c3BhbiBjbGFzc05hbWU9J21sLVsxMXB4XSB0ZXh0LXdoaXRlLTMwJz5ORlQocyk8L3NwYW4+PC9oMz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvbnRhaW4gbXQtMTAgcHQtNVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2ZpbGVuYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezE2MDB9XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwMDB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBUkMgQVJLXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyIHhsOi1tdC1bNXJlbV0gbGc6LW10LVszcmVtXSAtbXQtWzByZW1dJz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd4bDp0ZXh0LWJhc2UgdGV4dC1zbSBidG4td2hpdGUgbXgtMiB4bDpweC00IHB4LTMgcHktMiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzbTptdC0wIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nMnhsOm10LTEnPk1pbnQgTkZUPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMCBvYmplY3QtZml0LWNvbnRhaW4gbWwtMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XCIvaW1hZ2VzL21pbnQucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTWludCBORlRcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd4bDp0ZXh0LWJhc2UgdGV4dC1zbSBidG4td2hpdGUgbXgtMiB4bDpweC00IHB4LTMgcHktMiBmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBzbTptdC0wIG10LTQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nMnhsOm10LTEnPkNsYWltIFJld2FyZHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIGgtMTAwIG9iamVjdC1maXQtY29udGFpbiBtbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi9pbWFnZXMvY2xhaW0ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQ2xhaW0gUmV3YXJkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImdldE5GVERhdGEiLCJnZXRORlRCYWxhbmNlIiwiZ2V0U2hhcmVzIiwiZm9ybWF0dGVyIiwiZm9ybWF0dGVyTm9EZWMiLCJIZXJvIiwiYWRkcmVzcyIsIm9wZW5tb2RhbCIsInNoYXJlcyIsImJhbGFuY2UiLCJkYXRhIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZmlsZW5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm9uQ2xpY2siLCJzcGFuIiwiZm9ybWF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImxlbmd0aCIsImgzIiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/Hero/Hero.tsx\n"));

/***/ })

});