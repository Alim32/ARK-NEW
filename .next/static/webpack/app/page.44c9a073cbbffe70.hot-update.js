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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/scripts/legacy */ \"(app-pages-browser)/./src/scripts/legacy.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst MintButton = (param)=>{\n    let { address, level = 1 } = param;\n    var _data;\n    _s();\n    const { data, write } = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite)({\n        address: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.ca,\n        abi: _scripts_legacy__WEBPACK_IMPORTED_MODULE_1__.abi,\n        functionName: \"mintToWallet\",\n        onMutate (args) {\n            console.log(args);\n            console.log(\"kaasstengel\");\n            document.getElementById(\"mint-btn\").disabled = true;\n        },\n        args: [\n            address,\n            level\n        ]\n    });\n    const wait = (0,wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction)({\n        hash: (_data = data) === null || _data === void 0 ? void 0 : _data.hash\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        id: \"mint-btn\",\n        className: \"btn-purple-og px-3 py-1 mb-5 w-[100%] h-fit ls-wide font-semibold lg:text-base text-sm mt-5\",\n        onClick: write,\n        children: \"PURCHASE\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\alexd\\\\source\\\\repos\\\\ARK\\\\ARK NEW HOME\\\\src\\\\components\\\\Layout\\\\MintButton\\\\MintButton.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, undefined);\n};\n_s(MintButton, \"FOI+Me0DnWJ2oeJXx7ImU6UPGY8=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useContractWrite,\n        wagmi__WEBPACK_IMPORTED_MODULE_2__.useWaitForTransaction\n    ];\n});\n_c = MintButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MintButton);\nvar _c;\n$RefreshReg$(_c, \"MintButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0xheW91dC9NaW50QnV0dG9uL01pbnRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUV3RjtBQUM3QztBQUUzQyxNQUFNSSxhQUFhO1FBQUMsRUFDaEJDLE9BQU8sRUFDUEMsUUFBUSxDQUFDLEVBQ1A7UUFjUUM7O0lBYlYsTUFBTSxFQUFFQSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHUix1REFBZ0JBLENBQUM7UUFDckNLLFNBQVNILCtDQUFFQTtRQUNYQyxLQUFLQSxnREFBR0E7UUFDUk0sY0FBYztRQUNkQyxVQUFTQyxJQUFJO1lBQ1RDLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWkMsUUFBUUMsR0FBRyxDQUFDO1lBQ1pDLFNBQVNDLGNBQWMsQ0FBQyxZQUFZQyxRQUFRLEdBQUc7UUFDbkQ7UUFDQUwsTUFBTTtZQUFDTjtZQUFTQztTQUFNO0lBQzFCO0lBRUEsTUFBTVcsT0FBT2hCLDREQUFxQkEsQ0FBQztRQUMvQmlCLElBQUksR0FBRVgsUUFBQUEsa0JBQUFBLDRCQUFBQSxNQUFNVyxJQUFJO0lBQ3BCO0lBRUEscUJBQ0ksOERBQUNDO1FBQU9DLElBQUc7UUFBV0MsV0FBVTtRQUE4RkMsU0FBU2Q7a0JBQU87Ozs7OztBQUV0SjtHQXZCTUo7O1FBSXNCSixtREFBZ0JBO1FBWTNCQyx3REFBcUJBOzs7S0FoQmhDRztBQXlCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvTWludEJ1dHRvbi9NaW50QnV0dG9uLnRzeD9mZTU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUsIHVzZUNvbnRyYWN0V3JpdGUsIHVzZVdhaXRGb3JUcmFuc2FjdGlvbiB9IGZyb20gJ3dhZ21pJ1xyXG5pbXBvcnQgeyBjYSwgYWJpIH0gZnJvbSBcIkAvc2NyaXB0cy9sZWdhY3lcIjtcclxuXHJcbmNvbnN0IE1pbnRCdXR0b24gPSAoe1xyXG4gICAgYWRkcmVzcyxcclxuICAgIGxldmVsID0gMVxyXG59OiBhbnkpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSwgd3JpdGUgfSA9IHVzZUNvbnRyYWN0V3JpdGUoe1xyXG4gICAgICAgIGFkZHJlc3M6IGNhLFxyXG4gICAgICAgIGFiaTogYWJpLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogJ21pbnRUb1dhbGxldCcsXHJcbiAgICAgICAgb25NdXRhdGUoYXJncykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrYWFzc3RlbmdlbFwiKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaW50LWJ0blwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBhcmdzOiBbYWRkcmVzcywgbGV2ZWxdXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB3YWl0ID0gdXNlV2FpdEZvclRyYW5zYWN0aW9uKHtcclxuICAgICAgICBoYXNoOiBkYXRhPy5oYXNoICAgICAgICBcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uIGlkPSdtaW50LWJ0bicgY2xhc3NOYW1lPSdidG4tcHVycGxlLW9nIHB4LTMgcHktMSBtYi01IHctWzEwMCVdIGgtZml0IGxzLXdpZGUgZm9udC1zZW1pYm9sZCBsZzp0ZXh0LWJhc2UgdGV4dC1zbSBtdC01JyBvbkNsaWNrPXt3cml0ZX0+UFVSQ0hBU0U8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaW50QnV0dG9uO1xyXG4iXSwibmFtZXMiOlsidXNlQ29udHJhY3RXcml0ZSIsInVzZVdhaXRGb3JUcmFuc2FjdGlvbiIsImNhIiwiYWJpIiwiTWludEJ1dHRvbiIsImFkZHJlc3MiLCJsZXZlbCIsImRhdGEiLCJ3cml0ZSIsImZ1bmN0aW9uTmFtZSIsIm9uTXV0YXRlIiwiYXJncyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJ3YWl0IiwiaGFzaCIsImJ1dHRvbiIsImlkIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Layout/MintButton/MintButton.tsx\n"));

/***/ })

});