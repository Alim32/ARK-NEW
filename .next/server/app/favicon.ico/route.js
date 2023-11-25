"use strict";
(() => {
var exports = {};
exports.id = 155;
exports.ids = [155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 94999:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=C%3A%5CUsers%5Calexd%5Csource%5Crepos%5CARK%5CARK%20NEW%20HOME%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "export"
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon",
        bundlePath: "app/favicon.ico/route"
    },
    resolvedPagePath: "next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!C:\\Users\\alexd\\source\\repos\\ARK\\ARK NEW HOME\\src\\app\\favicon.ico?__next_metadata_route__",
    nextConfigOutput,
    userland: favicon_next_metadata_route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/favicon.ico/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,218], () => (__webpack_exec__(94999)));
module.exports = __webpack_exports__;

})();