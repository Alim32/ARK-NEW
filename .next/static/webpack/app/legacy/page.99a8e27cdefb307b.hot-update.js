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

/***/ "(app-pages-browser)/./src/scripts/test.js":
/*!*****************************!*\
  !*** ./src/scripts/test.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollToNft: function() { return /* binding */ ScrollToNft; }\n/* harmony export */ });\nvar activeTab = 1;\nfunction ScrollToNft(id) {\n    var scrollVal = id < 7 ? id + 1 : id;\n    if (window.innerWidth < 1250) {\n        scrollVal = id;\n    }\n    document.getElementById(\"nft\" + scrollVal).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"end\"\n    });\n    if (id == activeTab) {\n        return;\n    }\n    document.getElementById(\"nfttab\" + activeTab).classList.remove(\"active\");\n    document.getElementById(\"nfttab\" + id).classList.add(\"active\");\n    activeTab = id;\n}\n_c = ScrollToNft;\nvar _c;\n$RefreshReg$(_c, \"ScrollToNft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zY3JpcHRzL3Rlc3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLFlBQVk7QUFFVCxTQUFTQyxZQUFZQyxFQUFFO0lBQzFCLElBQUlDLFlBQVlELEtBQUssSUFBSUEsS0FBSyxJQUFJQTtJQUVsQyxJQUFJRSxPQUFPQyxVQUFVLEdBQUcsTUFBTTtRQUMxQkYsWUFBWUQ7SUFDaEI7SUFFQUksU0FBU0MsY0FBYyxDQUFDLFFBQVFKLFdBQVdLLGNBQWMsQ0FBQztRQUFFQyxVQUFVO1FBQVVDLE9BQU87SUFBTTtJQUU3RixJQUFJUixNQUFNRixXQUFXO1FBQUU7SUFBUTtJQUMvQk0sU0FBU0MsY0FBYyxDQUFDLFdBQVdQLFdBQVdXLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDO0lBQy9ETixTQUFTQyxjQUFjLENBQUMsV0FBV0wsSUFBSVMsU0FBUyxDQUFDRSxHQUFHLENBQUM7SUFDckRiLFlBQVlFO0FBQ2hCO0tBYmdCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2NyaXB0cy90ZXN0LmpzPzI4YjAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGFjdGl2ZVRhYiA9IDE7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU2Nyb2xsVG9OZnQoaWQpIHsgICAgXHJcbiAgICB2YXIgc2Nyb2xsVmFsID0gaWQgPCA3ID8gaWQgKyAxIDogaWQ7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgMTI1MCkge1xyXG4gICAgICAgIHNjcm9sbFZhbCA9IGlkO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmZ0XCIgKyBzY3JvbGxWYWwpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcImVuZFwiIH0pO1xyXG5cclxuICAgIGlmIChpZCA9PSBhY3RpdmVUYWIpIHsgcmV0dXJuOyB9XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5mdHRhYlwiICsgYWN0aXZlVGFiKS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZnR0YWJcIiArIGlkKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgYWN0aXZlVGFiID0gaWQ7XHJcbn0iXSwibmFtZXMiOlsiYWN0aXZlVGFiIiwiU2Nyb2xsVG9OZnQiLCJpZCIsInNjcm9sbFZhbCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/scripts/test.js\n"));

/***/ })

});