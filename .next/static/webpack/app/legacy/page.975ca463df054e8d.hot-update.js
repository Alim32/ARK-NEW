"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/legacy/page",{

/***/ "(app-pages-browser)/./src/components/Layout/Modal/Modal.tsx":
/*!***********************************************!*\
  !*** ./src/components/Layout/Modal/Modal.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst Modal = (param)=>{\n    let { id, title, closeEvent, video, customcss } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-evenly lg:items-start items-center w-100 lg:px-[50px] px-[15px] pt-[35px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: closeEvent,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            autoPlay: true,\n                            muted: true,\n                            loop: true,\n                            playsInline: true,\n                            className: \"2xl:max-w-[240x] xl:max-w-[200px] lg:max-w-[160px] max-w-[45vw] mx-auto mt-10 mbb-l \" + customcss,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: video,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col rotate-90 h-[0px] mt-[200px] -mx-[50px]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center mb-[8.5px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"progress\", {\n                                            className: \"rotate-180 h-[5px] w-[150px]\",\n                                            value: 100,\n                                            max: \"100\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"rotate-180 text-white-30 text-sm ml-3\",\n                                            children: \"Boost\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-row items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"progress\", {\n                                            className: \"rotate-180 h-[5px] w-[150px]\",\n                                            value: 100,\n                                            max: \"100\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                            lineNumber: 27,\n                                            columnNumber: 29\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"rotate-180 text-white-30 text-sm ml-3\",\n                                            children: \"Shares\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                            lineNumber: 28,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Modal\\\\Modal.tsx\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, undefined);\n};\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9Nb2RhbC9Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBTUEsUUFBUTtRQUFDLEVBQ1hDLEVBQUUsRUFDRkMsS0FBSyxFQUNMQyxVQUFVLEVBQ1ZDLEtBQUssRUFDTEMsU0FBUyxFQUNQO0lBQ0YscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7UUFBZ0JOLElBQUlBLEtBQUc7a0JBQ2xDLDRFQUFDSztZQUFJQyxXQUFVO1lBQVFOLElBQUlBOzs4QkFDdkIsOERBQUNLO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQWNMOzs7Ozs7c0NBQzVCLDhEQUFDTzs0QkFBT0YsV0FBVTs0QkFBMENHLFNBQVNQO3NDQUFZOzs7Ozs7Ozs7Ozs7OEJBRXJGLDhEQUFDRztvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNIOzRCQUFNTyxVQUFVOzRCQUFNQyxPQUFPOzRCQUFNQyxNQUFNOzRCQUFNQyxhQUFhOzRCQUFNUCxXQUFXLHlGQUF5RkY7c0NBQ25LLDRFQUFDVTtnQ0FBT0MsS0FBS1o7Z0NBQU9hLE1BQUs7Ozs7Ozs7Ozs7O3NDQUU3Qiw4REFBQ1g7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNXOzRDQUFTWCxXQUFVOzRDQUErQlksT0FBTzs0Q0FBS0MsS0FBSTs7Ozs7O3NEQUNuRSw4REFBQ0M7NENBQUVkLFdBQVU7c0RBQXdDOzs7Ozs7Ozs7Ozs7OENBRXpELDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ1gsOERBQUNXOzRDQUFTWCxXQUFVOzRDQUErQlksT0FBTzs0Q0FBS0MsS0FBSTs7Ozs7O3NEQUNuRSw4REFBQ0M7NENBQUVkLFdBQVU7c0RBQXdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqRjtLQWpDTVA7QUFtQ04sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L01vZGFsL01vZGFsLnRzeD80YjdlIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmNvbnN0IE1vZGFsID0gKHtcclxuICAgIGlkLFxyXG4gICAgdGl0bGUsXHJcbiAgICBjbG9zZUV2ZW50LFxyXG4gICAgdmlkZW8sXHJcbiAgICBjdXN0b21jc3NcclxufTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gKCAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21vZGFsLW92ZXJsYXknIGlkPXtpZCtcIm92ZXJsYXlcIn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIiBpZD17aWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cganVzdGlmeS1ldmVubHkgbGc6aXRlbXMtc3RhcnQgaXRlbXMtY2VudGVyIHctMTAwIGxnOnB4LVs1MHB4XSBweC1bMTVweF0gcHQtWzM1cHhdJz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LXdoaXRlJz57dGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtMnhsIHgtYnRuJyBvbkNsaWNrPXtjbG9zZUV2ZW50fT5YPC9idXR0b24+ICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2aWRlbyBhdXRvUGxheT17dHJ1ZX0gbXV0ZWQ9e3RydWV9IGxvb3A9e3RydWV9IHBsYXlzSW5saW5lPXt0cnVlfSBjbGFzc05hbWU9e1wiMnhsOm1heC13LVsyNDB4XSB4bDptYXgtdy1bMjAwcHhdIGxnOm1heC13LVsxNjBweF0gbWF4LXctWzQ1dnddIG14LWF1dG8gbXQtMTAgbWJiLWwgXCIgKyBjdXN0b21jc3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17dmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgcm90YXRlLTkwIGgtWzBweF0gbXQtWzIwMHB4XSAtbXgtWzUwcHhdJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIG1iLVs4LjVweF0nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzTmFtZT0ncm90YXRlLTE4MCBoLVs1cHhdIHctWzE1MHB4XScgdmFsdWU9ezEwMH0gbWF4PVwiMTAwXCI+PC9wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncm90YXRlLTE4MCB0ZXh0LXdoaXRlLTMwIHRleHQtc20gbWwtMyc+Qm9vc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzIGNsYXNzTmFtZT0ncm90YXRlLTE4MCBoLVs1cHhdIHctWzE1MHB4XScgdmFsdWU9ezEwMH0gbWF4PVwiMTAwXCI+PC9wcm9ncmVzcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncm90YXRlLTE4MCB0ZXh0LXdoaXRlLTMwIHRleHQtc20gbWwtMyc+U2hhcmVzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7Il0sIm5hbWVzIjpbIk1vZGFsIiwiaWQiLCJ0aXRsZSIsImNsb3NlRXZlbnQiLCJ2aWRlbyIsImN1c3RvbWNzcyIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwiYnV0dG9uIiwib25DbGljayIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJzb3VyY2UiLCJzcmMiLCJ0eXBlIiwicHJvZ3Jlc3MiLCJ2YWx1ZSIsIm1heCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/Modal/Modal.tsx\n"));

/***/ })

});