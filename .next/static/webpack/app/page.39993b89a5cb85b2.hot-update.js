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

/***/ "(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Layout/MintButton/MintButton.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address, level = 1 } = param;\n    var _data;\n    _s();\n    const { data, write } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        onMutate () {\n            var item = document.getElementById(\"mint-btn\");\n            var item2 = document.getElementById(\"mint-loader\");\n            item.style.display = \"none\";\n            item2.style.display = \"block\";\n        },\n        onError () {\n            var item = document.getElementById(\"mint-btn\");\n            var item2 = document.getElementById(\"mint-loader\");\n            item.style.display = \"block\";\n            item2.style.display = \"none\";\n        },\n        args: [\n            address,\n            level\n        ]\n    });\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_data = data) === null || _data === void 0 ? void 0 : _data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col w-[100%] h-[100%] items-end\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"mint-btn\",\n                className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n                onClick: ()=>write(),\n                children: \"PURCHASE\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center w-100% hidden mb-10\",\n                id: \"mint-loader\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loader\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loaderBar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-white-60 ls-wide text-center mt-4\",\n                        children: \"Awaiting Transaction...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"FOI+Me0DnWJ2oeJXx7ImU6UPGY8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSSxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDUEMsUUFBUSxDQUFDLEVBQ1A7UUFxQlFDOztJQXBCVixNQUFNLEVBQUVBLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdSLHVEQUFnQkEsQ0FBQztRQUNyQ0ssU0FBU0gsK0NBQUVBO1FBQ1hDLEtBQUtBLGdEQUFHQTtRQUNSTSxjQUFjO1FBQ2RDO1lBQ0ksSUFBSUMsT0FBT0MsU0FBU0MsY0FBYyxDQUFDO1lBQ25DLElBQUlDLFFBQVFGLFNBQVNDLGNBQWMsQ0FBQztZQUNwQ0YsS0FBS0ksS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDckJGLE1BQU1DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQzFCO1FBQ0FDO1lBQ0ksSUFBSU4sT0FBT0MsU0FBU0MsY0FBYyxDQUFDO1lBQ25DLElBQUlDLFFBQVFGLFNBQVNDLGNBQWMsQ0FBQztZQUNwQ0YsS0FBS0ksS0FBSyxDQUFDQyxPQUFPLEdBQUc7WUFDckJGLE1BQU1DLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO1FBQzFCO1FBQ0FFLE1BQU07WUFBQ2I7WUFBU0M7U0FBTTtJQUMxQjtJQUVBLE1BQU1hLE9BQU9sQiw0REFBcUJBLENBQUM7UUFDL0JtQixJQUFJLEdBQUViLFFBQUFBLGtCQUFBQSw0QkFBQUEsTUFBTWEsSUFBSTtJQUNwQjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7Z0JBQU9DLElBQUc7Z0JBQVdGLFdBQVU7Z0JBQThGRyxTQUFTLElBQU1qQjswQkFBUzs7Ozs7OzBCQUN0Siw4REFBQ2E7Z0JBQUlDLFdBQVU7Z0JBQWlERSxJQUFHOztrQ0FDL0QsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7a0NBRW5CLDhEQUFDSTt3QkFBRUosV0FBVTtrQ0FBaUQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RTtHQXZDTWxCOztRQUlzQkosbURBQWdCQTtRQW1CM0JDLHdEQUFxQkE7OztLQXZCaENHO0FBeUNOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4P2ZlNTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3RXcml0ZSwgdXNlV2FpdEZvclRyYW5zYWN0aW9uIH0gZnJvbSAnd2FnbWknXHJcbmltcG9ydCB7IGNhLCBhYmkgfSBmcm9tIFwiQC9zY3JpcHRzL2xlZ2FjeVwiO1xyXG5cclxuY29uc3QgTWludEJ1dHRvbiA9ICh7XHJcbiAgICBhZGRyZXNzLFxyXG4gICAgbGV2ZWwgPSAxXHJcbn06IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhLCB3cml0ZSB9ID0gdXNlQ29udHJhY3RXcml0ZSh7XHJcbiAgICAgICAgYWRkcmVzczogY2EsXHJcbiAgICAgICAgYWJpOiBhYmksXHJcbiAgICAgICAgZnVuY3Rpb25OYW1lOiAnbWludFRvV2FsbGV0JyxcclxuICAgICAgICBvbk11dGF0ZSgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnQtYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgICAgICAgICB2YXIgaXRlbTIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbnQtbG9hZGVyXCIpIGFzIEhUTUxFbGVtZW50OyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgaXRlbTIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRXJyb3IoKSB7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW50LWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgICAgICAgICAgdmFyIGl0ZW0yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW50LWxvYWRlclwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaXRlbS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBpdGVtMi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmdzOiBbYWRkcmVzcywgbGV2ZWxdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB3YWl0ID0gdXNlV2FpdEZvclRyYW5zYWN0aW9uKHtcclxuICAgICAgICBoYXNoOiBkYXRhPy5oYXNoXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgdy1bMTAwJV0gaC1bMTAwJV0gaXRlbXMtZW5kJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nbWludC1idG4nIGNsYXNzTmFtZT0nYnRuLXB1cnBsZS1vZyBweC0zIHB5LTEgbWItNSB3LVsxMDAlXSBoLWZpdCBscy13aWRlIGZvbnQtc2VtaWJvbGQgbGc6dGV4dC1iYXNlIHRleHQtc20gbXQtNScgb25DbGljaz17KCkgPT4gd3JpdGUoKX0+UFVSQ0hBU0U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctMTAwJSBoaWRkZW4gbWItMTAnIGlkPSdtaW50LWxvYWRlcic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyQmFyXCI+PC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHRleHQtd2hpdGUtNjAgbHMtd2lkZSB0ZXh0LWNlbnRlciBtdC00Jz5Bd2FpdGluZyBUcmFuc2FjdGlvbi4uLjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1pbnRCdXR0b247XHJcbiJdLCJuYW1lcyI6WyJ1c2VDb250cmFjdFdyaXRlIiwidXNlV2FpdEZvclRyYW5zYWN0aW9uIiwiY2EiLCJhYmkiLCJNaW50QnV0dG9uIiwiYWRkcmVzcyIsImxldmVsIiwiZGF0YSIsIndyaXRlIiwiZnVuY3Rpb25OYW1lIiwib25NdXRhdGUiLCJpdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW0yIiwic3R5bGUiLCJkaXNwbGF5Iiwib25FcnJvciIsImFyZ3MiLCJ3YWl0IiwiaGFzaCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImlkIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});