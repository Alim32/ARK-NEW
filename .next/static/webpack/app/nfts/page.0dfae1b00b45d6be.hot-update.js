"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/nfts/page",{

/***/ "(app-pages-browser)/./src/components/NFTS/SelectConsolidationModal/SelectConsolidationModal.tsx":
/*!***********************************************************************************!*\
  !*** ./src/components/NFTS/SelectConsolidationModal/SelectConsolidationModal.tsx ***!
  \***********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nconst SelectConsolidationModal = (param)=>{\n    let { address, id, closeEvent, selector } = param;\n    const NFTBlock = (param)=>{\n        let { name, level } = param;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-row mt-4 items-center justify-between cp mx-2 console-bar px-5\",\n            onClick: ()=>selector(level),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: \"/images/\".concat(name.toLowerCase(), \".png\"),\n                    alt: \"nft level\",\n                    width: 35,\n                    height: 35,\n                    className: \"mr-5 py-2 md:max-h-[35px] max-h-[25px] md:max-w-[35px] max-w-[25px]\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-white font-semibold ls-wider\",\n                    children: name.toUpperCase()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, undefined);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"modal-overlay\",\n        id: id + \"overlay\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"modal\",\n            id: id,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between lg:items-start items-center w-100 h-[`9.5%] lg:px-[50px] px-[35px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-white\",\n                            children: \"Select a NFT level\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-white font-semibold text-2xl x-btn\",\n                            onClick: ()=>closeEvent(),\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col justify-start items-start content-center h-[90.5%] w-[100%] lg:px-[50px] px-[25px] lg:pt-[35px] pt-[20px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 2,\n                            name: \"Tin\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 3,\n                            name: \"Bronze\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 4,\n                            name: \"Silver\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 5,\n                            name: \"Gold\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 6,\n                            name: \"Platinum\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 7,\n                            name: \"Iridium\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NFTBlock, {\n                            level: 8,\n                            name: \"Diamond\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\NFTS\\\\SelectConsolidationModal\\\\SelectConsolidationModal.tsx\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, undefined);\n};\n_c = SelectConsolidationModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SelectConsolidationModal);\nvar _c;\n$RefreshReg$(_c, \"SelectConsolidationModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL05GVFMvU2VsZWN0Q29uc29saWRhdGlvbk1vZGFsL1NlbGVjdENvbnNvbGlkYXRpb25Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDK0I7QUFLL0IsTUFBTUMsMkJBQTJCO1FBQUMsRUFDOUJDLE9BQU8sRUFDUEMsRUFBRSxFQUNGQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDTjtJQUVGLE1BQU1DLFdBQVc7WUFBQyxFQUNkQyxJQUFJLEVBQ0pDLEtBQUssRUFDSDtRQUNGLHFCQUNJLDhEQUFDQztZQUFJQyxXQUFVO1lBQTJFQyxTQUFTLElBQU1OLFNBQVNHOzs4QkFDOUcsOERBQUNSLG1EQUFLQTtvQkFDRlksS0FBSyxXQUE4QixPQUFuQkwsS0FBS00sV0FBVyxJQUFHO29CQUNuQ0MsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTtvQkFDUk4sV0FBVTs7Ozs7OzhCQUVkLDhEQUFDTztvQkFBR1AsV0FBVTs4QkFBcUNILEtBQUtXLFdBQVc7Ozs7Ozs4QkFDbkUsOERBQUNDOzs7Ozs7Ozs7OztJQUdiO0lBR0EscUJBQ0ksOERBQUNWO1FBQUlDLFdBQVU7UUFBZ0JQLElBQUlBLEtBQUs7a0JBQ3BDLDRFQUFDTTtZQUFJQyxXQUFVO1lBQVFQLElBQUlBOzs4QkFDdkIsOERBQUNNO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ087NEJBQUdQLFdBQVU7c0NBQWE7Ozs7OztzQ0FDM0IsOERBQUNVOzRCQUFPVixXQUFVOzRCQUEwQ0MsU0FBUyxJQUFNUDtzQ0FBYzs7Ozs7Ozs7Ozs7OzhCQUU3Riw4REFBQ0s7b0JBQUlDLFdBQVU7O3NDQUNYLDhEQUFDSjs0QkFBU0UsT0FBTzs0QkFBR0QsTUFBTTs7Ozs7O3NDQUMxQiw4REFBQ0Q7NEJBQVNFLE9BQU87NEJBQUdELE1BQU07Ozs7OztzQ0FDMUIsOERBQUNEOzRCQUFTRSxPQUFPOzRCQUFHRCxNQUFNOzs7Ozs7c0NBQzFCLDhEQUFDRDs0QkFBU0UsT0FBTzs0QkFBR0QsTUFBTTs7Ozs7O3NDQUMxQiw4REFBQ0Q7NEJBQVNFLE9BQU87NEJBQUdELE1BQU07Ozs7OztzQ0FDMUIsOERBQUNEOzRCQUFTRSxPQUFPOzRCQUFHRCxNQUFNOzs7Ozs7c0NBQzFCLDhEQUFDRDs0QkFBU0UsT0FBTzs0QkFBR0QsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPOUM7S0FoRE1OO0FBa0ROLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTkZUUy9TZWxlY3RDb25zb2xpZGF0aW9uTW9kYWwvU2VsZWN0Q29uc29saWRhdGlvbk1vZGFsLnRzeD9hNjQxIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IGZvcm1hdHRlck5vRGVjLCBmb3JtYXR0ZXIsIG9wZW5Ecm9wRG93biB9IGZyb20gXCJAL3NjcmlwdHMvaG9tZVwiO1xyXG5pbXBvcnQgeyBHZXRORlROYW1lQnlMZXZlbCB9IGZyb20gXCIuLi8uLi8uLi9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgU2VsZWN0Q29uc29saWRhdGlvbk1vZGFsID0gKHtcclxuICAgIGFkZHJlc3MsXHJcbiAgICBpZCxcclxuICAgIGNsb3NlRXZlbnQsXHJcbiAgICBzZWxlY3RvclxyXG59OiBhbnkpID0+IHtcclxuXHJcbiAgICBjb25zdCBORlRCbG9jayA9ICh7XHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICBsZXZlbFxyXG4gICAgfTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgbXQtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGNwIG14LTIgY29uc29sZS1iYXIgcHgtNScgb25DbGljaz17KCkgPT4gc2VsZWN0b3IobGV2ZWwpfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwibmZ0IGxldmVsXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J21yLTUgcHktMiBtZDptYXgtaC1bMzVweF0gbWF4LWgtWzI1cHhdIG1kOm1heC13LVszNXB4XSBtYXgtdy1bMjVweF0nXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGxzLXdpZGVyJz57bmFtZS50b1VwcGVyQ2FzZSgpfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbW9kYWwtb3ZlcmxheScgaWQ9e2lkICsgXCJvdmVybGF5XCJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCIgaWQ9e2lkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBsZzppdGVtcy1zdGFydCBpdGVtcy1jZW50ZXIgdy0xMDAgaC1bYDkuNSVdIGxnOnB4LVs1MHB4XSBweC1bMzVweF0gbGc6cHQtWzM1cHhdIHB0LVsyMHB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSc+U2VsZWN0IGEgTkZUIGxldmVsPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmb250LXNlbWlib2xkIHRleHQtMnhsIHgtYnRuJyBvbkNsaWNrPXsoKSA9PiBjbG9zZUV2ZW50KCl9Plg8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1zdGFydCBjb250ZW50LWNlbnRlciBoLVs5MC41JV0gdy1bMTAwJV0gbGc6cHgtWzUwcHhdIHB4LVsyNXB4XSBsZzpwdC1bMzVweF0gcHQtWzIwcHhdJz5cclxuICAgICAgICAgICAgICAgICAgICA8TkZUQmxvY2sgbGV2ZWw9ezJ9IG5hbWU9e1wiVGluXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5GVEJsb2NrIGxldmVsPXszfSBuYW1lPXtcIkJyb256ZVwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxORlRCbG9jayBsZXZlbD17NH0gbmFtZT17XCJTaWx2ZXJcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8TkZUQmxvY2sgbGV2ZWw9ezV9IG5hbWU9e1wiR29sZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxORlRCbG9jayBsZXZlbD17Nn0gbmFtZT17XCJQbGF0aW51bVwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxORlRCbG9jayBsZXZlbD17N30gbmFtZT17XCJJcmlkaXVtXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5GVEJsb2NrIGxldmVsPXs4fSBuYW1lPXtcIkRpYW1vbmRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RDb25zb2xpZGF0aW9uTW9kYWw7Il0sIm5hbWVzIjpbIkltYWdlIiwiU2VsZWN0Q29uc29saWRhdGlvbk1vZGFsIiwiYWRkcmVzcyIsImlkIiwiY2xvc2VFdmVudCIsInNlbGVjdG9yIiwiTkZUQmxvY2siLCJuYW1lIiwibGV2ZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic3JjIiwidG9Mb3dlckNhc2UiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg0IiwidG9VcHBlckNhc2UiLCJzcGFuIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/NFTS/SelectConsolidationModal/SelectConsolidationModal.tsx\n"));

/***/ })

});