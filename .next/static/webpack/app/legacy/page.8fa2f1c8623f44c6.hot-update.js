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

/***/ "(app-pages-browser)/./src/components/Layout/Web3Button/Web3Button.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/Web3Button/Web3Button.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"(app-pages-browser)/./node_modules/@web3modal/wagmi/dist/esm/exports/react.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ScrollVisibility */ \"(app-pages-browser)/./src/components/ScrollVisibility/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Web3Button = (param)=>{\n    let {} = param;\n    _s();\n    const { open } = (0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__.useWeb3Modal)();\n    function UseButton() {\n        open();\n    }\n    var name = localStorage.getItem(\"profileName\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollVisibility__WEBPACK_IMPORTED_MODULE_3__.ScrollVisibility, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container h-100 w-100 mx-auto pb-10\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white\",\n                        children: [\n                            \"Welcome \",\n                            name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white my-3 text-lg text-center max-w-[400px]\",\n                        children: \"In order to use the ArkFi app, you need to connect your wallet\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"w-100 h-100 object-fit-contain mt-10 pt-5 cp\",\n                        src: \"/images/pulse.gif\",\n                        width: 105,\n                        height: 105,\n                        alt: \"ARK connect\",\n                        onClick: ()=>UseButton()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: \"w-100 h-100 object-fit-contain mt-10 pt-5\",\n                        src: \"/images/arc_main.png\",\n                        width: 1600,\n                        height: 1000,\n                        alt: \"ARC ARK\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn-white px-5 md:text-xl text-base pt-1 pb-2 2xl:-mt-[150px] md:-mt-[100px] -mt-[10px] mb-[75px]\",\n                        onClick: ()=>UseButton(),\n                        children: \"Connect\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\Web3Button\\\\Web3Button.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Web3Button, \"i2CgNognY5XBSfPvAIaXlFW3Teo=\", false, function() {\n    return [\n        _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__.useWeb3Modal\n    ];\n});\n_c = Web3Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Web3Button);\nvar _c;\n$RefreshReg$(_c, \"Web3Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9XZWIzQnV0dG9uL1dlYjNCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3FEO0FBQ3RCO0FBQ2lDO0FBRWhFLE1BQU1HLGFBQWE7UUFBQyxFQUNkOztJQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdKLG9FQUFZQTtJQUU3QixTQUFTSztRQUNMRDtJQUNKO0lBRUEsSUFBSUUsT0FBT0MsYUFBYUMsT0FBTyxDQUFDO0lBRWhDLHFCQUNJLDhEQUFDTiwwRUFBZ0JBO2tCQUNiLDRFQUFDTztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVOzs0QkFBYTs0QkFBU0o7Ozs7Ozs7a0NBQ3BDLDhEQUFDTTt3QkFBRUYsV0FBVTtrQ0FBb0Q7Ozs7OztrQ0FDakUsOERBQUNULG1EQUFLQTt3QkFDRlMsV0FBVTt3QkFDVkcsS0FBSzt3QkFDTEMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTt3QkFDSkMsU0FBUyxJQUFNWjs7Ozs7O2tDQUVuQiw4REFBQ0osbURBQUtBO3dCQUNGUyxXQUFVO3dCQUNWRyxLQUFLO3dCQUNMQyxPQUFPO3dCQUNQQyxRQUFRO3dCQUNSQyxLQUFJOzs7Ozs7a0NBRVIsOERBQUNFO3dCQUFPUixXQUFVO3dCQUFvR08sU0FBUyxJQUFNWjtrQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0SztHQXBDTUY7O1FBRWVILGdFQUFZQTs7O0tBRjNCRztBQXNDTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvV2ViM0J1dHRvbi9XZWIzQnV0dG9uLnRzeD85ZTk1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VXZWIzTW9kYWwgfSBmcm9tICdAd2ViM21vZGFsL3dhZ21pL3JlYWN0J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgU2Nyb2xsVmlzaWJpbGl0eSB9IGZyb20gJ0AvY29tcG9uZW50cy9TY3JvbGxWaXNpYmlsaXR5J1xyXG5cclxuY29uc3QgV2ViM0J1dHRvbiA9ICh7XHJcbn06IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBvcGVuIH0gPSB1c2VXZWIzTW9kYWwoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBVc2VCdXR0b24oKSB7XHJcbiAgICAgICAgb3BlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9maWxlTmFtZVwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTY3JvbGxWaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGgtMTAwIHctMTAwIG14LWF1dG8gcGItMTAnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+V2VsY29tZSB7bmFtZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbXktMyB0ZXh0LWxnIHRleHQtY2VudGVyIG1heC13LVs0MDBweF1cIj5JbiBvcmRlciB0byB1c2UgdGhlIEFya0ZpIGFwcCwgeW91IG5lZWQgdG8gY29ubmVjdCB5b3VyIHdhbGxldDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb250YWluIG10LTEwIHB0LTUgY3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9wdWxzZS5naWZcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxMDV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkFSSyBjb25uZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gVXNlQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDAgb2JqZWN0LWZpdC1jb250YWluIG10LTEwIHB0LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL2ltYWdlcy9hcmNfbWFpbi5wbmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezE2MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MTAwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiQVJDIEFSS1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXdoaXRlIHB4LTUgbWQ6dGV4dC14bCB0ZXh0LWJhc2UgcHQtMSBwYi0yIDJ4bDotbXQtWzE1MHB4XSBtZDotbXQtWzEwMHB4XSAtbXQtWzEwcHhdIG1iLVs3NXB4XScgb25DbGljaz17KCkgPT4gVXNlQnV0dG9uKCl9PkNvbm5lY3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1Njcm9sbFZpc2liaWxpdHk+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2ViM0J1dHRvbjtcclxuIl0sIm5hbWVzIjpbInVzZVdlYjNNb2RhbCIsIkltYWdlIiwiU2Nyb2xsVmlzaWJpbGl0eSIsIldlYjNCdXR0b24iLCJvcGVuIiwiVXNlQnV0dG9uIiwibmFtZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsIm9uQ2xpY2siLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/Web3Button/Web3Button.tsx\n"));

/***/ })

});