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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ScrollToNft: function() { return /* binding */ ScrollToNft; }\n/* harmony export */ });\nvar activeTab = 1;\nfunction ScrollToNft(id) {\n    var scrollVal = id < 7 ? id + 1 : id;\n    if (window.innerWidth >= 1250) {}\n    document.getElementById(\"nft\" + scrollVal).scrollIntoView({\n        behavior: \"smooth\",\n        block: \"end\"\n    });\n    if (id == activeTab) {\n        return;\n    }\n    document.getElementById(\"nfttab\" + activeTab).classList.remove(\"active\");\n    document.getElementById(\"nfttab\" + id).classList.add(\"active\");\n    activeTab = id;\n}\n_c = ScrollToNft;\nvar _c;\n$RefreshReg$(_c, \"ScrollToNft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zY3JpcHRzL3Rlc3QuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLFlBQVk7QUFFVCxTQUFTQyxZQUFZQyxFQUFFO0lBQzFCLElBQUlDLFlBQVlELEtBQUssSUFBSUEsS0FBSyxJQUFJQTtJQUVsQyxJQUFJRSxPQUFPQyxVQUFVLElBQUksTUFBTSxDQUUvQjtJQUVBQyxTQUFTQyxjQUFjLENBQUMsUUFBUUosV0FBV0ssY0FBYyxDQUFDO1FBQUVDLFVBQVU7UUFBVUMsT0FBTztJQUFNO0lBRTdGLElBQUlSLE1BQU1GLFdBQVc7UUFBRTtJQUFRO0lBQy9CTSxTQUFTQyxjQUFjLENBQUMsV0FBV1AsV0FBV1csU0FBUyxDQUFDQyxNQUFNLENBQUM7SUFDL0ROLFNBQVNDLGNBQWMsQ0FBQyxXQUFXTCxJQUFJUyxTQUFTLENBQUNFLEdBQUcsQ0FBQztJQUNyRGIsWUFBWUU7QUFDaEI7S0FiZ0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JpcHRzL3Rlc3QuanM/MjhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYWN0aXZlVGFiID0gMTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTY3JvbGxUb05mdChpZCkgeyAgICBcclxuICAgIHZhciBzY3JvbGxWYWwgPSBpZCA8IDcgPyBpZCArIDEgOiBpZDtcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPj0gMTI1MCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5mdFwiICsgc2Nyb2xsVmFsKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJlbmRcIiB9KTtcclxuXHJcbiAgICBpZiAoaWQgPT0gYWN0aXZlVGFiKSB7IHJldHVybjsgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZnR0YWJcIiArIGFjdGl2ZVRhYikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmZ0dGFiXCIgKyBpZCkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgIGFjdGl2ZVRhYiA9IGlkO1xyXG59Il0sIm5hbWVzIjpbImFjdGl2ZVRhYiIsIlNjcm9sbFRvTmZ0IiwiaWQiLCJzY3JvbGxWYWwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/scripts/test.js\n"));

/***/ })

});