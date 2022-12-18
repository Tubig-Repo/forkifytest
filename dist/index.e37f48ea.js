// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fA0o9":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d113fd8ce37f48ea";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _wowJs = require("wow.js");
var _modelJs = require("./model.js");
var _recipeViewsJs = require("./views/recipeViews.js");
var _recipeViewsJsDefault = parcelHelpers.interopDefault(_recipeViewsJs);
var _resultsViewJs = require("./views/resultsView.js");
var _resultsViewJsDefault = parcelHelpers.interopDefault(_resultsViewJs);
var _searchViewJs = require("./views/searchView.js");
var _searchViewJsDefault = parcelHelpers.interopDefault(_searchViewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _bookmarkViewJs = require("./views/bookmarkView.js");
var _bookmarkViewJsDefault = parcelHelpers.interopDefault(_bookmarkViewJs);
var _customRecipeViewJs = require("./views/customRecipeView.js");
var _customRecipeViewJsDefault = parcelHelpers.interopDefault(_customRecipeViewJs);
var _configJs = require("./config.js");
//allows us to maintain the state of the app when it reloads
// if (module.hot) {
//   module.hot.accept();
// }
const controlRecipe = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        // Rendering Spinner
        (0, _recipeViewsJsDefault.default).renderSpinner();
        //Load Bookmars
        //0. Update results view UI to highligh selected search result
        (0, _resultsViewJsDefault.default).update(_modelJs.getSearchResultPage());
        //0.1 Update the bookmarks View
        (0, _bookmarkViewJsDefault.default).update(_modelJs.state.bookmarks);
        //1. Loading the API
        await _modelJs.loadRecipe(id);
        //2. Rendering the markup
        (0, _recipeViewsJsDefault.default).render(_modelJs.state.recipe);
    } catch (err) {
        (0, _recipeViewsJsDefault.default).renderError();
    }
};
const controlSearchResult = async function() {
    try {
        //rendering spinner
        (0, _resultsViewJsDefault.default).renderSpinner();
        //1. Getting the search query
        const query = (0, _searchViewJsDefault.default).getQuery();
        if (!query) return;
        //2 . Loading the search result
        await _modelJs.loadSearchResult(query);
        //3. Rendering the search result in the UI
        (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage());
        //4. Rendering Buttons
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (err) {
        console.log(err);
    }
};
const controlPagination = function(goToPage) {
    //3. Rendering the NEW search result in the UI
    (0, _resultsViewJsDefault.default).render(_modelJs.getSearchResultPage(goToPage));
    //4. Rendering the New Buttons
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
const controlServings = function(servings) {
    //1. Update the recipe servings
    _modelJs.updateServings(servings);
    //2. Re-render the recipe view
    (0, _recipeViewsJsDefault.default).update(_modelJs.state.recipe);
};
//Adding Bookmark
const controlAddBookmark = function() {
    //1. Add Bookmarks
    if (!_modelJs.state.recipe.bookmarked) _modelJs.addBookmark(_modelJs.state.recipe);
    else _modelJs.deleteBookmark(_modelJs.state.recipe.id);
    //2 Update Recipeview changes
    (0, _recipeViewsJsDefault.default).update(_modelJs.state.recipe);
    //3. Render Bookmark from the bookmark tab
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
// Loading the bookmarks from the storage as soon as the page loadsz
const loadBookmarks = function() {
    (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
};
// Adding Custom Recipes
const controlAddRecipe = async function(newRecipe) {
    try {
        //1. Upload Recipe to the API
        await _modelJs.uploadCustomRecipe(newRecipe);
        //2. Render Custom Recipe to the recipeView
        (0, _recipeViewsJsDefault.default).render(_modelJs.state.recipe);
        //3, Render success message
        (0, _customRecipeViewJsDefault.default).renderMessage();
        //4. Re-render bookmarks
        (0, _bookmarkViewJsDefault.default).render(_modelJs.state.bookmarks);
        //5. Change ID  in url
        window.history.pushState(null, "", `#${_modelJs.state.recipe.id}`);
        //4. Close form window
        setTimeout(function() {
            (0, _customRecipeViewJsDefault.default)._toggleWindow();
        }, (0, _configJs.CLOSE_WINDOW) * 1000);
    } catch (err) {
        console.error(err);
        (0, _customRecipeViewJsDefault.default).renderError(err.message);
    }
};
const init = function() {
    (0, _bookmarkViewJsDefault.default).loadBookmarkHandler(loadBookmarks);
    (0, _recipeViewsJsDefault.default).addHandlerRender(controlRecipe);
    (0, _searchViewJsDefault.default).addSearchHandler(controlSearchResult);
    (0, _paginationViewJsDefault.default).addButtonHandler(controlPagination);
    (0, _recipeViewsJsDefault.default).updateServingsHandler(controlServings);
    (0, _recipeViewsJsDefault.default).addBookmarkHandler(controlAddBookmark);
    (0, _customRecipeViewJsDefault.default).addHandlerUpload(controlAddRecipe);
};
init(); // ['hashchange', 'load'].forEach(event =>
 //   window.addEventListener(event, controllerRecipes)
 // );
 // window.addEventListener('hashchange', controllerRecipes);
 // window.addEventListener('load', showRecipe);

},{"wow.js":"9VEK8","./model.js":"Y4A21","./views/recipeViews.js":"fR5Tr","./views/resultsView.js":"cSbZE","./views/searchView.js":"9OQAM","./views/paginationView.js":"6z7bi","./views/bookmarkView.js":"7YaI3","./views/customRecipeView.js":"hZCdH","./config.js":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9VEK8":[function(require,module,exports) {
(function(global, factory) {
    if (typeof define === "function" && define.amd) define([
        "module",
        "exports"
    ], factory);
    else {
        var mod;
        factory(module, exports);
    }
})(this, function(module1, exports1) {
    "use strict";
    Object.defineProperty(exports1, "__esModule", {
        value: true
    });
    var _class, _temp;
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    var _createClass = function() {
        function defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
    function isIn(needle, haystack) {
        return haystack.indexOf(needle) >= 0;
    }
    function extend(custom, defaults) {
        for(var key in defaults)if (custom[key] == null) {
            var value = defaults[key];
            custom[key] = value;
        }
        return custom;
    }
    function isMobile(agent) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    }
    function createEvent(event) {
        var bubble = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
        var cancel = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
        var detail = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
        var customEvent = void 0;
        if (document.createEvent != null) {
            // W3C DOM
            customEvent = document.createEvent("CustomEvent");
            customEvent.initCustomEvent(event, bubble, cancel, detail);
        } else if (document.createEventObject != null) {
            // IE DOM < 9
            customEvent = document.createEventObject();
            customEvent.eventType = event;
        } else customEvent.eventName = event;
        return customEvent;
    }
    function emitEvent(elem, event) {
        if (elem.dispatchEvent != null) // W3C DOM
        elem.dispatchEvent(event);
        else if (event in (elem != null)) elem[event]();
        else if ("on" + event in (elem != null)) elem["on" + event]();
    }
    function addEvent(elem, event, fn) {
        if (elem.addEventListener != null) // W3C DOM
        elem.addEventListener(event, fn, false);
        else if (elem.attachEvent != null) // IE DOM
        elem.attachEvent("on" + event, fn);
        else // fallback
        elem[event] = fn;
    }
    function removeEvent(elem, event, fn) {
        if (elem.removeEventListener != null) // W3C DOM
        elem.removeEventListener(event, fn, false);
        else if (elem.detachEvent != null) // IE DOM
        elem.detachEvent("on" + event, fn);
        else // fallback
        delete elem[event];
    }
    function getInnerHeight() {
        if ("innerHeight" in window) return window.innerHeight;
        return document.documentElement.clientHeight;
    }
    // Minimalistic WeakMap shim, just in case.
    var WeakMap = window.WeakMap || window.MozWeakMap || function() {
        function WeakMap() {
            _classCallCheck(this, WeakMap);
            this.keys = [];
            this.values = [];
        }
        _createClass(WeakMap, [
            {
                key: "get",
                value: function get(key) {
                    for(var i = 0; i < this.keys.length; i++){
                        var item = this.keys[i];
                        if (item === key) return this.values[i];
                    }
                    return undefined;
                }
            },
            {
                key: "set",
                value: function set(key, value) {
                    for(var i = 0; i < this.keys.length; i++){
                        var item = this.keys[i];
                        if (item === key) {
                            this.values[i] = value;
                            return this;
                        }
                    }
                    this.keys.push(key);
                    this.values.push(value);
                    return this;
                }
            }
        ]);
        return WeakMap;
    }();
    // Dummy MutationObserver, to avoid raising exceptions.
    var MutationObserver = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (_temp = _class = function() {
        function MutationObserver() {
            _classCallCheck(this, MutationObserver);
            if (typeof console !== "undefined" && console !== null) {
                console.warn("MutationObserver is not supported by your browser.");
                console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
            }
        }
        _createClass(MutationObserver, [
            {
                key: "observe",
                value: function observe() {}
            }
        ]);
        return MutationObserver;
    }(), _class.notSupported = true, _temp);
    // getComputedStyle shim, from http://stackoverflow.com/a/21797294
    var getComputedStyle = window.getComputedStyle || function getComputedStyle(el) {
        var getComputedStyleRX = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function getPropertyValue(prop) {
                if (prop === "float") prop = "styleFloat";
                if (getComputedStyleRX.test(prop)) prop.replace(getComputedStyleRX, function(_, _char) {
                    return _char.toUpperCase();
                });
                var currentStyle = el.currentStyle;
                return (currentStyle != null ? currentStyle[prop] : void 0) || null;
            }
        };
    };
    var WOW = function() {
        function WOW() {
            var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
            _classCallCheck(this, WOW);
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: true,
                live: true,
                callback: null,
                scrollContainer: null
            };
            this.animate = function animateFactory() {
                if ("requestAnimationFrame" in window) return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
                return function(callback) {
                    return callback();
                };
            }();
            this.vendors = [
                "moz",
                "webkit"
            ];
            this.start = this.start.bind(this);
            this.resetAnimation = this.resetAnimation.bind(this);
            this.scrollHandler = this.scrollHandler.bind(this);
            this.scrollCallback = this.scrollCallback.bind(this);
            this.scrolled = true;
            this.config = extend(options, this.defaults);
            if (options.scrollContainer != null) this.config.scrollContainer = document.querySelector(options.scrollContainer);
            // Map of elements to animation names:
            this.animationNameCache = new WeakMap();
            this.wowEvent = createEvent(this.config.boxClass);
        }
        _createClass(WOW, [
            {
                key: "init",
                value: function init() {
                    this.element = window.document.documentElement;
                    if (isIn(document.readyState, [
                        "interactive",
                        "complete"
                    ])) this.start();
                    else addEvent(document, "DOMContentLoaded", this.start);
                    this.finished = [];
                }
            },
            {
                key: "start",
                value: function start() {
                    var _this = this;
                    this.stopped = false;
                    this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass));
                    this.all = this.boxes.slice(0);
                    if (this.boxes.length) {
                        if (this.disabled()) this.resetStyle();
                        else for(var i = 0; i < this.boxes.length; i++){
                            var box = this.boxes[i];
                            this.applyStyle(box, true);
                        }
                    }
                    if (!this.disabled()) {
                        addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                        addEvent(window, "resize", this.scrollHandler);
                        this.interval = setInterval(this.scrollCallback, 50);
                    }
                    if (this.config.live) {
                        var mut = new MutationObserver(function(records) {
                            for(var j = 0; j < records.length; j++){
                                var record = records[j];
                                for(var k = 0; k < record.addedNodes.length; k++){
                                    var node = record.addedNodes[k];
                                    _this.doSync(node);
                                }
                            }
                            return undefined;
                        });
                        mut.observe(document.body, {
                            childList: true,
                            subtree: true
                        });
                    }
                }
            },
            {
                key: "stop",
                value: function stop() {
                    this.stopped = true;
                    removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                    removeEvent(window, "resize", this.scrollHandler);
                    if (this.interval != null) clearInterval(this.interval);
                }
            },
            {
                key: "sync",
                value: function sync() {
                    if (MutationObserver.notSupported) this.doSync(this.element);
                }
            },
            {
                key: "doSync",
                value: function doSync(element) {
                    if (typeof element === "undefined" || element === null) element = this.element;
                    if (element.nodeType !== 1) return;
                    element = element.parentNode || element;
                    var iterable = element.querySelectorAll("." + this.config.boxClass);
                    for(var i = 0; i < iterable.length; i++){
                        var box = iterable[i];
                        if (!isIn(box, this.all)) {
                            this.boxes.push(box);
                            this.all.push(box);
                            if (this.stopped || this.disabled()) this.resetStyle();
                            else this.applyStyle(box, true);
                            this.scrolled = true;
                        }
                    }
                }
            },
            {
                key: "show",
                value: function show(box) {
                    this.applyStyle(box);
                    box.className = box.className + " " + this.config.animateClass;
                    if (this.config.callback != null) this.config.callback(box);
                    emitEvent(box, this.wowEvent);
                    addEvent(box, "animationend", this.resetAnimation);
                    addEvent(box, "oanimationend", this.resetAnimation);
                    addEvent(box, "webkitAnimationEnd", this.resetAnimation);
                    addEvent(box, "MSAnimationEnd", this.resetAnimation);
                    return box;
                }
            },
            {
                key: "applyStyle",
                value: function applyStyle(box, hidden) {
                    var _this2 = this;
                    var duration = box.getAttribute("data-wow-duration");
                    var delay = box.getAttribute("data-wow-delay");
                    var iteration = box.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return _this2.customStyle(box, hidden, duration, delay, iteration);
                    });
                }
            },
            {
                key: "resetStyle",
                value: function resetStyle() {
                    for(var i = 0; i < this.boxes.length; i++){
                        var box = this.boxes[i];
                        box.style.visibility = "visible";
                    }
                    return undefined;
                }
            },
            {
                key: "resetAnimation",
                value: function resetAnimation(event) {
                    if (event.type.toLowerCase().indexOf("animationend") >= 0) {
                        var target = event.target || event.srcElement;
                        target.className = target.className.replace(this.config.animateClass, "").trim();
                    }
                }
            },
            {
                key: "customStyle",
                value: function customStyle(box, hidden, duration, delay, iteration) {
                    if (hidden) this.cacheAnimationName(box);
                    box.style.visibility = hidden ? "hidden" : "visible";
                    if (duration) this.vendorSet(box.style, {
                        animationDuration: duration
                    });
                    if (delay) this.vendorSet(box.style, {
                        animationDelay: delay
                    });
                    if (iteration) this.vendorSet(box.style, {
                        animationIterationCount: iteration
                    });
                    this.vendorSet(box.style, {
                        animationName: hidden ? "none" : this.cachedAnimationName(box)
                    });
                    return box;
                }
            },
            {
                key: "vendorSet",
                value: function vendorSet(elem, properties) {
                    for(var name in properties)if (properties.hasOwnProperty(name)) {
                        var value = properties[name];
                        elem["" + name] = value;
                        for(var i = 0; i < this.vendors.length; i++){
                            var vendor = this.vendors[i];
                            elem["" + vendor + name.charAt(0).toUpperCase() + name.substr(1)] = value;
                        }
                    }
                }
            },
            {
                key: "vendorCSS",
                value: function vendorCSS(elem, property) {
                    var style = getComputedStyle(elem);
                    var result = style.getPropertyCSSValue(property);
                    for(var i = 0; i < this.vendors.length; i++){
                        var vendor = this.vendors[i];
                        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
                    }
                    return result;
                }
            },
            {
                key: "animationName",
                value: function animationName(box) {
                    var aName = void 0;
                    try {
                        aName = this.vendorCSS(box, "animation-name").cssText;
                    } catch (error) {
                        // Opera, fall back to plain property value
                        aName = getComputedStyle(box).getPropertyValue("animation-name");
                    }
                    if (aName === "none") return ""; // SVG/Firefox, unable to get animation name?
                    return aName;
                }
            },
            {
                key: "cacheAnimationName",
                value: function cacheAnimationName(box) {
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=921834
                    // box.dataset is not supported for SVG elements in Firefox
                    return this.animationNameCache.set(box, this.animationName(box));
                }
            },
            {
                key: "cachedAnimationName",
                value: function cachedAnimationName(box) {
                    return this.animationNameCache.get(box);
                }
            },
            {
                key: "scrollHandler",
                value: function scrollHandler() {
                    this.scrolled = true;
                }
            },
            {
                key: "scrollCallback",
                value: function scrollCallback() {
                    if (this.scrolled) {
                        this.scrolled = false;
                        var results = [];
                        for(var i = 0; i < this.boxes.length; i++){
                            var box = this.boxes[i];
                            if (box) {
                                if (this.isVisible(box)) {
                                    this.show(box);
                                    continue;
                                }
                                results.push(box);
                            }
                        }
                        this.boxes = results;
                        if (!this.boxes.length && !this.config.live) this.stop();
                    }
                }
            },
            {
                key: "offsetTop",
                value: function offsetTop(element) {
                    // SVG elements don't have an offsetTop in Firefox.
                    // This will use their nearest parent that has an offsetTop.
                    // Also, using ('offsetTop' of element) causes an exception in Firefox.
                    while(element.offsetTop === undefined)element = element.parentNode;
                    var top = element.offsetTop;
                    while(element.offsetParent){
                        element = element.offsetParent;
                        top += element.offsetTop;
                    }
                    return top;
                }
            },
            {
                key: "isVisible",
                value: function isVisible(box) {
                    var offset = box.getAttribute("data-wow-offset") || this.config.offset;
                    var viewTop = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset;
                    var viewBottom = viewTop + Math.min(this.element.clientHeight, getInnerHeight()) - offset;
                    var top = this.offsetTop(box);
                    var bottom = top + box.clientHeight;
                    return top <= viewBottom && bottom >= viewTop;
                }
            },
            {
                key: "disabled",
                value: function disabled() {
                    return !this.config.mobile && isMobile(navigator.userAgent);
                }
            }
        ]);
        return WOW;
    }();
    exports1.default = WOW;
    module1.exports = exports1["default"];
});

},{}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "loadRecipe", ()=>loadRecipe);
parcelHelpers.export(exports, "loadSearchResult", ()=>loadSearchResult);
parcelHelpers.export(exports, "getSearchResultPage", ()=>getSearchResultPage);
parcelHelpers.export(exports, "updateServings", ()=>updateServings);
parcelHelpers.export(exports, "addBookmark", ()=>addBookmark);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
parcelHelpers.export(exports, "updateBookmarkStorage", ()=>updateBookmarkStorage);
parcelHelpers.export(exports, "uploadCustomRecipe", ()=>uploadCustomRecipe);
var _config = require("./config");
var _helper = require("./helper");
const state = {
    recipe: {},
    search: {
        query: "",
        results: [],
        page: 1,
        resultsPerPage: (0, _config.RESULTS_PER_PAGE)
    },
    bookmarks: [],
    getBookmarkList: JSON.parse(window.localStorage.getItem("bookmarkList"))
};
const createRecipeObject = function(data) {
    const { recipe  } = data.data;
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceURL: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        //Using short circuiting to set a key in the recipe if it exists in the data
        ...recipe.key && {
            key: recipe.key
        }
    };
};
const loadRecipe = async function(id) {
    try {
        //1.Getting the recipe
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}${id}?key=${(0, _config.KEY)}`);
        //2. Creating the recipe state
        state.recipe = createRecipeObject(data);
        if (state.bookmarks.some((bookmark)=>bookmark.id === id)) state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const loadSearchResult = async function(query) {
    try {
        //1. Setting the query to the state
        state.search.query = query;
        //2, fetching search results from the API
        const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}?search=${query}&key=${(0, _config.KEY)}`);
        state.search.results = data.data.recipes.map((recipe)=>{
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
                ...recipe.key && {
                    key: recipe.key
                }
            };
        });
        //Resetting the page value when a new search is queried
        state.search.page = 1;
    } catch (err) {
        console.log(err);
        throw err;
    }
};
const getSearchResultPage = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage; // page 1 = ( page - 1 ) * 10 = 0
    const end = page * state.search.resultsPerPage; // end of page =  1 * 10 = 10 = 10
    return state.search.results.slice(start, end); //[ ] = array with the length of 10 items
};
const updateServings = function(newServings) {
    state.recipe.ingredients.forEach((ing)=>{
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
    // ing.quantity = oldQuantity * newServings  / oldServings
    });
    state.recipe.servings = newServings;
};
const updateBookmarkLocalStorage = function() {
    window.localStorage.setItem("bookmarkList", JSON.stringify(state.bookmarks));
};
const addBookmark = function(recipe) {
    //Adding bookmark
    state.bookmarks.push(recipe);
    //Marking current as bookmarked
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    updateBookmarkLocalStorage();
};
const deleteBookmark = function(id) {
    //Delete Bookmark
    const index = state.bookmarks.findIndex((el)=>el.id == id);
    state.bookmarks.splice(index, 1);
    //Changing the bookmark value of the current recipe to false
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    updateBookmarkLocalStorage();
};
const updateBookmarkStorage = function() {
    //Update the bookmark Storage
    window.localStorage.setItem("bookmarkList", JSON.stringify(state.bookmarks));
};
const uploadCustomRecipe = async function(newRecipe) {
    /*
    1. Setting the ingredients data
     -- Converting the object into array to be able to loop with them 
     -- using filter to select the array element with the first array element of an 'ingredient' string and the second array element with value and not an empty string
     -- mapping the filtered array , removing spaces and splitting the string if theres a comma so we can get three values
     -- adding a guard clause if the user enters the wrong format and throwing an error . 
     -- destructring the ingArr and using that to create and return an object similar to the API format of ingredients
     -- 
  */ const ingredients = Object.entries(newRecipe).filter((entry)=>entry[0].startsWith("ingredient") && entry[1] !== "").map((ing)=>{
        // with this method were just removing space from string and splitting the string wtih the commas
        const ingArr = ing[1].split(",").map((el)=>el.trim());
        // if the arr lenght is not equalts to 3 means theres missing inputs and we want to display error
        if (ingArr.length !== 3) throw new Error("Wrong ingredient Format . Please use the correct format :)");
        const [quantity, unit, description] = ingArr;
        return {
            quantity: quantity ? +quantity : null,
            unit,
            description
        };
    });
    //2 . Creating the recipe object
    const recipe = {
        id: newRecipe.id,
        title: newRecipe.title,
        publisher: newRecipe.publisher,
        source_url: newRecipe.sourceUrl,
        image_url: newRecipe.image,
        servings: +newRecipe.servings,
        cooking_time: +newRecipe.cookingTime,
        ingredients
    };
    //3. Uploading the object to the API
    const data = await (0, _helper.AJAX)(`${(0, _config.API_URL)}?key=${(0, _config.KEY)}`, recipe);
    //4. Storing the uploaded recipe to the state and bookmarks
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
};
const init = function() {
    const storage = localStorage.getItem("bookmarkList");
    if (storage) state.bookmarks = JSON.parse(storage);
};
init(); //Updating the Bookmark List - My Version
 // export const updateBookmarkList = async function (recipeID) {
 //   try {
 //     //1. get the recipe using recipeID
 //     const data = await getJSON(
 //       `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeID}`
 //     );
 //     const { recipe } = data.data;
 //     let recipeBookmark = {
 //       id: recipe.id,
 //       title: recipe.title,
 //       publisher: recipe.publisher,
 //       sourceURL: recipe.source_url,
 //       image: recipe.image_url,
 //       servings: recipe.servings,
 //       cookingTime: recipe.cooking_time,
 //       ingredients: recipe.ingredients,
 //     };
 //     //2. Store the recipe to the localstorage
 //     const storage = JSON.parse(window.localStorage.getItem('bookmarkList'));
 //     if (storage && storage.find(el => el.id == recipeBookmark.id)) return;
 //     window.localStorage.setItem(
 //       'bookmarkList',
 //       !storage
 //         ? JSON.stringify([recipeBookmark])
 //         : JSON.stringify([recipeBookmark, ...storage])
 //     );
 //     //3. return the data of the bookmarklist in
 //   } catch (err) {
 //     console.log(err);
 //     throw err;
 //   }
 // };

},{"./config":"k5Hzs","./helper":"lVRAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_URL", ()=>API_URL);
parcelHelpers.export(exports, "TIMEOUT_SEC", ()=>TIMEOUT_SEC);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "KEY", ()=>KEY);
parcelHelpers.export(exports, "CLOSE_WINDOW", ()=>CLOSE_WINDOW);
const API_URL = `https://forkify-api.herokuapp.com/api/v2/recipes/`;
const TIMEOUT_SEC = 5;
const RESULTS_PER_PAGE = 10;
const KEY = "084f5765-8bc3-40d0-a966-09e9f627c541";
const CLOSE_WINDOW = 1.5;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lVRAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AJAX", ()=>AJAX);
parcelHelpers.export(exports, "getJSON", ()=>getJSON);
parcelHelpers.export(exports, "sendJSON", ()=>sendJSON);
var _config = require("./config");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
const AJAX = async function(url, uploadData) {
    try {
        const fetchPro = uploadData ? fetch(url, {
            //POST for sending data
            method: "POST",
            //Headers are information about the request
            headers: {
                //here were indicating to the API that were sending a JSON format
                "Content-type": "application/json"
            },
            // The data that will be posted in the API
            body: JSON.stringify(uploadData)
        }) : fetch(url);
        const res = await Promise.race([
            fetchPro,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const getJSON = async function(url) {
    try {
        const res = await Promise.race([
            fetch(url),
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};
const sendJSON = async function(url, uploadData) {
    try {
        /*
    sending a data using fetch function
    -- 1st parameter is the url 
    -- 2nd parameter is the options for the POST method
    */ const fetchPOST = fetch(url, {
            //POST for sending data
            method: "POST",
            //Headers are information about the request
            headers: {
                //here were indicating to the API that were sending a JSON format
                "Content-type": "application/json"
            },
            // The data that will be posted in the API
            body: JSON.stringify(uploadData)
        });
        //retrieving the custom recipe from the API
        const res = await Promise.race([
            fetchPOST,
            timeout((0, _config.TIMEOUT_SEC))
        ]);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        return data;
    } catch (err) {
        throw err;
    }
};

},{"./config":"k5Hzs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fR5Tr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _fractionJs = require("fraction.js"); //Fractional Package
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../../img/icons.svg"); //Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class RecipeView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".recipe");
    _errorMessage = "We couldnt find the recipe. Please Try another one";
    _message = "";
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    updateServingsHandler(handler) {
        this._parentEl.addEventListener("click", function(e) {
            e.preventDefault();
            const btnServings = e.target.closest(".btn--update-servings");
            if (!btnServings) return;
            const updateTo = +btnServings.dataset.updateto;
            if (updateTo > 0) handler(updateTo);
        });
    }
    addBookmarkHandler(handler) {
        this._parentEl.addEventListener("click", function(e) {
            e.preventDefault();
            const bookmarkBtn = e.target.closest(".btn--bookmark");
            if (!bookmarkBtn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `<figure class="recipe__fig">
    <img src="${this._data.image}" alt="Tomato" class="recipe__img" />
    <h1 class="recipe__title">
      <span>${this._data.title}</span>
    </h1>
  </figure>

  <div class="recipe__details">
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, _iconsSvgDefault.default}#icon-clock"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
      <span class="recipe__info-text">minutes</span>
    </div>
    <div class="recipe__info">
      <svg class="recipe__info-icon">
        <use href="${0, _iconsSvgDefault.default}#icon-users"></use>
      </svg>
      <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
      <span class="recipe__info-text">servings</span>

      <div class="recipe__info-buttons">
        <button class="btn--tiny btn--update-servings" data-updateTo="${this._data.servings - 1}">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-minus-circle"></use>
          </svg>
        </button>
        <button class="btn--tiny btn--update-servings" data-updateTo="${this._data.servings + 1}">
          <svg>
            <use href="${0, _iconsSvgDefault.default}#icon-plus-circle"></use>
          </svg>
        </button>
      </div>
    </div>

    <div class="recipe__user-generated ${this._data.key ? "" : "hidden"}" >
      <svg>
        <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
      </svg> 
    </div> 
    <button class="btn--round btn--bookmark" data-recipeID="${this._data.id}">
      <svg class="">
        <use href="${0, _iconsSvgDefault.default}#icon-bookmark${this._data.bookmarked ? "-fill" : ""}"></use>
      </svg>
    </button>
  </div>

  <div class="recipe__ingredients">
    <h2 class="heading--2">Recipe ingredients</h2>
    <ul class="recipe__ingredient-list">
    ${this._data.ingredients.map((ingredient)=>this._generateMarkupIngredients(ingredient)).join("")}

    </ul>
  </div>

  <div class="recipe__directions">
    <h2 class="heading--2">How to cook it</h2>
    <p class="recipe__directions-text">
      This recipe was carefully designed and tested by
      <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
      directions at their website.
    </p>
    <a
      class="btn--small recipe__btn"
      href="http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/"
      target="_blank"
    >
      <span>Directions</span>
      <svg class="search__icon">
        <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
      </svg>
    </a>
  </div>`;
    }
    _generateMarkupIngredients(ingredient) {
        return `<li class="recipe__ingredient">
    <svg class="recipe__icon">
      <use href="${0, _iconsSvgDefault.default}#icon-check"></use> 
    </svg>
    <div class="recipe__quantity">${ingredient.quantity ? new (0, _fractionJs.Fraction)(ingredient.quantity).toFraction(true).toString() : ""}</div>
    <div class="recipe__description">
      <span class="recipe__unit">${ingredient.unit}</span>
      ${ingredient.description}
    </div>
  </li>`;
    }
}
exports.default = new RecipeView();

},{"./View.js":"5cUXS","../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","fraction.js":"iDLoJ"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _iconsSvg = require("../../img/icons.svg"); //Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class View {
    _data;
    /**
   * Render the received object to the DOM
   * @param {Object || Object[]}  data The data to be rendered (e.g recipe)
   * @param {boolean} [render=true] If False , create markup string instead of rendering to the DOM
   * @returns {undefined | string } A markup is returned when render=false
   * @this {Object } View instance
   * @author Robert Carlo Tubig
   * @todo Finish Implementations
   * @link https://jsdoc.app/ - for more info about Block tags
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) // if array is empty and the data is not array we render the error
        return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    _clear() {
        this._parentEl.innerHTML = "";
    }
    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        // Creates a big object which is usually called a virtual DOM
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentEl.querySelectorAll("*"));
        // Updates on Text Element in the DOM element
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            //Updates on Changed Attributes from the NODE element
            // if value is not true meaning false
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attr)=>{
                curEl.setAttribute(attr.name, attr.value);
            });
        });
    }
    renderSpinner() {
        const markup = `
        <div class="spinner">
         <svg>
           <use href="${(0, _iconsSvgDefault.default)}#icon-loader"></use>
         </svg>
       </div>`;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
          <div class="error">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
    renderMessage(message = this._message) {
        const markup = `
          <div class="message">
            <div>
              <svg>
                <use href="${(0, _iconsSvgDefault.default)}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
        this._clear();
        this._parentEl.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cMpiy":[function(require,module,exports) {
module.exports = require("1d286f422a08ddb9").getBundleURL("hWUTQ") + "icons.21bad73c.svg" + "?" + Date.now();

},{"1d286f422a08ddb9":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"iDLoJ":[function(require,module,exports) {
/**
 * @license Fraction.js v4.2.0 05/03/2022
 * https://www.xarg.org/2014/03/rational-numbers-in-javascript/
 *
 * Copyright (c) 2021, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/ /**
 *
 * This class offers the possibility to calculate fractions.
 * You can pass a fraction in different formats. Either as array, as double, as string or as an integer.
 *
 * Array/Object form
 * [ 0 => <nominator>, 1 => <denominator> ]
 * [ n => <nominator>, d => <denominator> ]
 *
 * Integer form
 * - Single integer value
 *
 * Double form
 * - Single double value
 *
 * String form
 * 123.456 - a simple double
 * 123/456 - a string fraction
 * 123.'456' - a double with repeating decimal places
 * 123.(456) - synonym
 * 123.45'6' - a double with repeating last place
 * 123.45(6) - synonym
 *
 * Example:
 *
 * var f = new Fraction("9.4'31'");
 * f.mul([-4, 3]).div(4.9);
 *
 */ (function(root) {
    "use strict";
    // Maximum search depth for cyclic rational numbers. 2000 should be more than enough.
    // Example: 1/7 = 0.(142857) has 6 repeating decimal places.
    // If MAX_CYCLE_LEN gets reduced, long cycles will not be detected and toString() only gets the first 10 digits
    var MAX_CYCLE_LEN = 2000;
    // Parsed data to avoid calling "new" all the time
    var P = {
        "s": 1,
        "n": 0,
        "d": 1
    };
    function assign(n, s) {
        if (isNaN(n = parseInt(n, 10))) throw Fraction["InvalidParameter"];
        return n * s;
    }
    // Creates a new Fraction internally without the need of the bulky constructor
    function newFraction(n, d) {
        if (d === 0) throw Fraction["DivisionByZero"];
        var f = Object.create(Fraction.prototype);
        f["s"] = n < 0 ? -1 : 1;
        n = n < 0 ? -n : n;
        var a = gcd(n, d);
        f["n"] = n / a;
        f["d"] = d / a;
        return f;
    }
    function factorize(num) {
        var factors = {};
        var n = num;
        var i = 2;
        var s = 4;
        while(s <= n){
            while(n % i === 0){
                n /= i;
                factors[i] = (factors[i] || 0) + 1;
            }
            s += 1 + 2 * i++;
        }
        if (n !== num) {
            if (n > 1) factors[n] = (factors[n] || 0) + 1;
        } else factors[num] = (factors[num] || 0) + 1;
        return factors;
    }
    var parse = function(p1, p2) {
        var n = 0, d = 1, s = 1;
        var v = 0, w = 0, x = 0, y = 1, z = 1;
        var A = 0, B = 1;
        var C = 1, D = 1;
        var N = 10000000;
        var M;
        if (p1 === undefined || p1 === null) ;
        else if (p2 !== undefined) {
            n = p1;
            d = p2;
            s = n * d;
            if (n % 1 !== 0 || d % 1 !== 0) throw Fraction["NonIntegerParameter"];
        } else switch(typeof p1){
            case "object":
                if ("d" in p1 && "n" in p1) {
                    n = p1["n"];
                    d = p1["d"];
                    if ("s" in p1) n *= p1["s"];
                } else if (0 in p1) {
                    n = p1[0];
                    if (1 in p1) d = p1[1];
                } else throw Fraction["InvalidParameter"];
                s = n * d;
                break;
            case "number":
                if (p1 < 0) {
                    s = p1;
                    p1 = -p1;
                }
                if (p1 % 1 === 0) n = p1;
                else if (p1 > 0) {
                    if (p1 >= 1) {
                        z = Math.pow(10, Math.floor(1 + Math.log(p1) / Math.LN10));
                        p1 /= z;
                    }
                    // Using Farey Sequences
                    // http://www.johndcook.com/blog/2010/10/20/best-rational-approximation/
                    while(B <= N && D <= N){
                        M = (A + C) / (B + D);
                        if (p1 === M) {
                            if (B + D <= N) {
                                n = A + C;
                                d = B + D;
                            } else if (D > B) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                            break;
                        } else {
                            if (p1 > M) {
                                A += C;
                                B += D;
                            } else {
                                C += A;
                                D += B;
                            }
                            if (B > N) {
                                n = C;
                                d = D;
                            } else {
                                n = A;
                                d = B;
                            }
                        }
                    }
                    n *= z;
                } else if (isNaN(p1) || isNaN(p2)) d = n = NaN;
                break;
            case "string":
                B = p1.match(/\d+|./g);
                if (B === null) throw Fraction["InvalidParameter"];
                if (B[A] === "-") {
                    s = -1;
                    A++;
                } else if (B[A] === "+") A++;
                if (B.length === A + 1) w = assign(B[A++], s);
                else if (B[A + 1] === "." || B[A] === ".") {
                    if (B[A] !== ".") v = assign(B[A++], s);
                    A++;
                    // Check for decimal places
                    if (A + 1 === B.length || B[A + 1] === "(" && B[A + 3] === ")" || B[A + 1] === "'" && B[A + 3] === "'") {
                        w = assign(B[A], s);
                        y = Math.pow(10, B[A].length);
                        A++;
                    }
                    // Check for repeating places
                    if (B[A] === "(" && B[A + 2] === ")" || B[A] === "'" && B[A + 2] === "'") {
                        x = assign(B[A + 1], s);
                        z = Math.pow(10, B[A + 1].length) - 1;
                        A += 3;
                    }
                } else if (B[A + 1] === "/" || B[A + 1] === ":") {
                    w = assign(B[A], s);
                    y = assign(B[A + 2], 1);
                    A += 3;
                } else if (B[A + 3] === "/" && B[A + 1] === " ") {
                    v = assign(B[A], s);
                    w = assign(B[A + 2], s);
                    y = assign(B[A + 4], 1);
                    A += 5;
                }
                if (B.length <= A) {
                    d = y * z;
                    s = /* void */ n = x + d * v + z * w;
                    break;
                }
            default:
                throw Fraction["InvalidParameter"];
        }
        if (d === 0) throw Fraction["DivisionByZero"];
        P["s"] = s < 0 ? -1 : 1;
        P["n"] = Math.abs(n);
        P["d"] = Math.abs(d);
    };
    function modpow(b, e, m) {
        var r = 1;
        for(; e > 0; b = b * b % m, e >>= 1)if (e & 1) r = r * b % m;
        return r;
    }
    function cycleLen(n, d) {
        for(; d % 2 === 0; d /= 2);
        for(; d % 5 === 0; d /= 5);
        if (d === 1) return 0;
        // If we would like to compute really large numbers quicker, we could make use of Fermat's little theorem:
        // 10^(d-1) % d == 1
        // However, we don't need such large numbers and MAX_CYCLE_LEN should be the capstone,
        // as we want to translate the numbers to strings.
        var rem = 10 % d;
        var t = 1;
        for(; rem !== 1; t++){
            rem = rem * 10 % d;
            if (t > MAX_CYCLE_LEN) return 0; // Returning 0 here means that we don't print it as a cyclic number. It's likely that the answer is `d-1`
        }
        return t;
    }
    function cycleStart(n, d, len) {
        var rem1 = 1;
        var rem2 = modpow(10, len, d);
        for(var t = 0; t < 300; t++){
            // Solve 10^s == 10^(s+t) (mod d)
            if (rem1 === rem2) return t;
            rem1 = rem1 * 10 % d;
            rem2 = rem2 * 10 % d;
        }
        return 0;
    }
    function gcd(a, b) {
        if (!a) return b;
        if (!b) return a;
        while(true){
            a %= b;
            if (!a) return b;
            b %= a;
            if (!b) return a;
        }
    }
    /**
   * Module constructor
   *
   * @constructor
   * @param {number|Fraction=} a
   * @param {number=} b
   */ function Fraction(a, b) {
        parse(a, b);
        if (this instanceof Fraction) {
            a = gcd(P["d"], P["n"]); // Abuse variable a
            this["s"] = P["s"];
            this["n"] = P["n"] / a;
            this["d"] = P["d"] / a;
        } else return newFraction(P["s"] * P["n"], P["d"]);
    }
    Fraction["DivisionByZero"] = new Error("Division by Zero");
    Fraction["InvalidParameter"] = new Error("Invalid argument");
    Fraction["NonIntegerParameter"] = new Error("Parameters must be integer");
    Fraction.prototype = {
        "s": 1,
        "n": 0,
        "d": 1,
        /**
     * Calculates the absolute value
     *
     * Ex: new Fraction(-4).abs() => 4
     **/ "abs": function() {
            return newFraction(this["n"], this["d"]);
        },
        /**
     * Inverts the sign of the current fraction
     *
     * Ex: new Fraction(-4).neg() => 4
     **/ "neg": function() {
            return newFraction(-this["s"] * this["n"], this["d"]);
        },
        /**
     * Adds two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => 467 / 30
     **/ "add": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] + P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Subtracts two rational numbers
     *
     * Ex: new Fraction({n: 2, d: 3}).add("14.9") => -427 / 30
     **/ "sub": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * this["n"] * P["d"] - P["s"] * this["d"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Multiplies two rational numbers
     *
     * Ex: new Fraction("-17.(345)").mul(3) => 5776 / 111
     **/ "mul": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["n"], this["d"] * P["d"]);
        },
        /**
     * Divides two rational numbers
     *
     * Ex: new Fraction("-17.(345)").inverse().div(3)
     **/ "div": function(a, b) {
            parse(a, b);
            return newFraction(this["s"] * P["s"] * this["n"] * P["d"], this["d"] * P["n"]);
        },
        /**
     * Clones the actual object
     *
     * Ex: new Fraction("-17.(345)").clone()
     **/ "clone": function() {
            return newFraction(this["s"] * this["n"], this["d"]);
        },
        /**
     * Calculates the modulo of two rational numbers - a more precise fmod
     *
     * Ex: new Fraction('4.(3)').mod([7, 8]) => (13/3) % (7/8) = (5/6)
     **/ "mod": function(a, b) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            if (a === undefined) return newFraction(this["s"] * this["n"] % this["d"], 1);
            parse(a, b);
            if (0 === P["n"] && 0 === this["d"]) throw Fraction["DivisionByZero"];
            /*
       * First silly attempt, kinda slow
       *
       return that["sub"]({
       "n": num["n"] * Math.floor((this.n / this.d) / (num.n / num.d)),
       "d": num["d"],
       "s": this["s"]
       });*/ /*
       * New attempt: a1 / b1 = a2 / b2 * q + r
       * => b2 * a1 = a2 * b1 * q + b1 * b2 * r
       * => (b2 * a1 % a2 * b1) / (b1 * b2)
       */ return newFraction(this["s"] * (P["d"] * this["n"]) % (P["n"] * this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional gcd of two rational numbers
     *
     * Ex: new Fraction(5,8).gcd(3,7) => 1/56
     */ "gcd": function(a, b) {
            parse(a, b);
            // gcd(a / b, c / d) = gcd(a, c) / lcm(b, d)
            return newFraction(gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]), P["d"] * this["d"]);
        },
        /**
     * Calculates the fractional lcm of two rational numbers
     *
     * Ex: new Fraction(5,8).lcm(3,7) => 15
     */ "lcm": function(a, b) {
            parse(a, b);
            // lcm(a / b, c / d) = lcm(a, c) / gcd(b, d)
            if (P["n"] === 0 && this["n"] === 0) return newFraction(0, 1);
            return newFraction(P["n"] * this["n"], gcd(P["n"], this["n"]) * gcd(P["d"], this["d"]));
        },
        /**
     * Calculates the ceil of a rational number
     *
     * Ex: new Fraction('4.(3)').ceil() => (5 / 1)
     **/ "ceil": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.ceil(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Calculates the floor of a rational number
     *
     * Ex: new Fraction('4.(3)').floor() => (4 / 1)
     **/ "floor": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.floor(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Rounds a rational numbers
     *
     * Ex: new Fraction('4.(3)').round() => (4 / 1)
     **/ "round": function(places) {
            places = Math.pow(10, places || 0);
            if (isNaN(this["n"]) || isNaN(this["d"])) return new Fraction(NaN);
            return newFraction(Math.round(places * this["s"] * this["n"] / this["d"]), places);
        },
        /**
     * Gets the inverse of the fraction, means numerator and denominator are exchanged
     *
     * Ex: new Fraction([-3, 4]).inverse() => -4 / 3
     **/ "inverse": function() {
            return newFraction(this["s"] * this["d"], this["n"]);
        },
        /**
     * Calculates the fraction to some rational exponent, if possible
     *
     * Ex: new Fraction(-1,2).pow(-3) => -8
     */ "pow": function(a, b) {
            parse(a, b);
            // Trivial case when exp is an integer
            if (P["d"] === 1) {
                if (P["s"] < 0) return newFraction(Math.pow(this["s"] * this["d"], P["n"]), Math.pow(this["n"], P["n"]));
                else return newFraction(Math.pow(this["s"] * this["n"], P["n"]), Math.pow(this["d"], P["n"]));
            }
            // Negative roots become complex
            //     (-a/b)^(c/d) = x
            // <=> (-1)^(c/d) * (a/b)^(c/d) = x
            // <=> (cos(pi) + i*sin(pi))^(c/d) * (a/b)^(c/d) = x         # rotate 1 by 180°
            // <=> (cos(c*pi/d) + i*sin(c*pi/d)) * (a/b)^(c/d) = x       # DeMoivre's formula in Q ( https://proofwiki.org/wiki/De_Moivre%27s_Formula/Rational_Index )
            // From which follows that only for c=0 the root is non-complex. c/d is a reduced fraction, so that sin(c/dpi)=0 occurs for d=1, which is handled by our trivial case.
            if (this["s"] < 0) return null;
            // Now prime factor n and d
            var N = factorize(this["n"]);
            var D = factorize(this["d"]);
            // Exponentiate and take root for n and d individually
            var n = 1;
            var d = 1;
            for(var k in N){
                if (k === "1") continue;
                if (k === "0") {
                    n = 0;
                    break;
                }
                N[k] *= P["n"];
                if (N[k] % P["d"] === 0) N[k] /= P["d"];
                else return null;
                n *= Math.pow(k, N[k]);
            }
            for(var k in D){
                if (k === "1") continue;
                D[k] *= P["n"];
                if (D[k] % P["d"] === 0) D[k] /= P["d"];
                else return null;
                d *= Math.pow(k, D[k]);
            }
            if (P["s"] < 0) return newFraction(d, n);
            return newFraction(n, d);
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "equals": function(a, b) {
            parse(a, b);
            return this["s"] * this["n"] * P["d"] === P["s"] * P["n"] * this["d"]; // Same as compare() === 0
        },
        /**
     * Check if two rational numbers are the same
     *
     * Ex: new Fraction(19.6).equals([98, 5]);
     **/ "compare": function(a, b) {
            parse(a, b);
            var t = this["s"] * this["n"] * P["d"] - P["s"] * P["n"] * this["d"];
            return (0 < t) - (t < 0);
        },
        "simplify": function(eps) {
            if (isNaN(this["n"]) || isNaN(this["d"])) return this;
            eps = eps || 0.001;
            var thisABS = this["abs"]();
            var cont = thisABS["toContinued"]();
            for(var i = 1; i < cont.length; i++){
                var s = newFraction(cont[i - 1], 1);
                for(var k = i - 2; k >= 0; k--)s = s["inverse"]()["add"](cont[k]);
                if (s["sub"](thisABS)["abs"]().valueOf() < eps) return s["mul"](this["s"]);
            }
            return this;
        },
        /**
     * Check if two rational numbers are divisible
     *
     * Ex: new Fraction(19.6).divisible(1.5);
     */ "divisible": function(a, b) {
            parse(a, b);
            return !(!(P["n"] * this["d"]) || this["n"] * P["d"] % (P["n"] * this["d"]));
        },
        /**
     * Returns a decimal representation of the fraction
     *
     * Ex: new Fraction("100.'91823'").valueOf() => 100.91823918239183
     **/ "valueOf": function() {
            return this["s"] * this["n"] / this["d"];
        },
        /**
     * Returns a string-fraction representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toFraction(true) => "4 1/3"
     **/ "toFraction": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    str += " ";
                    n %= d;
                }
                str += n;
                str += "/";
                str += d;
            }
            return str;
        },
        /**
     * Returns a latex representation of a Fraction object
     *
     * Ex: new Fraction("1.'3'").toLatex() => "\frac{4}{3}"
     **/ "toLatex": function(excludeWhole) {
            var whole, str = "";
            var n = this["n"];
            var d = this["d"];
            if (this["s"] < 0) str += "-";
            if (d === 1) str += n;
            else {
                if (excludeWhole && (whole = Math.floor(n / d)) > 0) {
                    str += whole;
                    n %= d;
                }
                str += "\\frac{";
                str += n;
                str += "}{";
                str += d;
                str += "}";
            }
            return str;
        },
        /**
     * Returns an array of continued fraction elements
     *
     * Ex: new Fraction("7/8").toContinued() => [0,1,7]
     */ "toContinued": function() {
            var t;
            var a = this["n"];
            var b = this["d"];
            var res = [];
            if (isNaN(a) || isNaN(b)) return res;
            do {
                res.push(Math.floor(a / b));
                t = a % b;
                a = b;
                b = t;
            }while (a !== 1);
            return res;
        },
        /**
     * Creates a string representation of a fraction with all digits
     *
     * Ex: new Fraction("100.'91823'").toString() => "100.(91823)"
     **/ "toString": function(dec) {
            var N = this["n"];
            var D = this["d"];
            if (isNaN(N) || isNaN(D)) return "NaN";
            dec = dec || 15; // 15 = decimal places when no repetation
            var cycLen = cycleLen(N, D); // Cycle length
            var cycOff = cycleStart(N, D, cycLen); // Cycle start
            var str = this["s"] < 0 ? "-" : "";
            str += N / D | 0;
            N %= D;
            N *= 10;
            if (N) str += ".";
            if (cycLen) {
                for(var i = cycOff; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += "(";
                for(var i = cycLen; i--;){
                    str += N / D | 0;
                    N %= D;
                    N *= 10;
                }
                str += ")";
            } else for(var i = dec; N && i--;){
                str += N / D | 0;
                N %= D;
                N *= 10;
            }
            return str;
        }
    };
    if (typeof define === "function" && define["amd"]) define([], function() {
        return Fraction;
    });
    else {
        Object.defineProperty(Fraction, "__esModule", {
            "value": true
        });
        Fraction["default"] = Fraction;
        Fraction["Fraction"] = Fraction;
        module["exports"] = Fraction;
    }
})(this);

},{}],"cSbZE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _previewViewJs = require("./previewView.js");
var _previewViewJsDefault = parcelHelpers.interopDefault(_previewViewJs);
class ResultsView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".results");
    _errorMessage = "No Recipes found for your query, Please ty again ";
    _message = "";
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new ResultsView();

},{"./View":"5cUXS","./previewView.js":"1FDQ6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1FDQ6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
var _iconsSvg = require("../../img/icons.svg"); //Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class previewView extends (0, _viewDefault.default) {
    _parentEl = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `<li class="preview">
        <a class="preview__link ${this._data.id === id ? "preview__link--active" : ""}" href="#${this._data.id}">
          <figure class="preview__fig">
            <img src="${this._data.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${this._data.title}...</h4>
            <p class="preview__publisher">${this._data.publisher}</p>
            <div class="preview__user-generated ${this._data.key ? "" : "hidden"}">
              <svg>
                <use href="${0, _iconsSvgDefault.default}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
    }
}
exports.default = new previewView();

},{"./View":"5cUXS","../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OQAM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SearchView extends (0, _viewDefault.default) {
    _parentElement = document.querySelector(".search");
    getQuery() {
        return this._parentElement.querySelector(".search__field").value;
    }
    clearInput() {
        this._parentElement.querySelector(".search__field").value = "";
    }
    addSearchHandler(handler) {
        this._parentElement.addEventListener("submit", function(e) {
            e.preventDefault();
            handler();
        });
    }
}
exports.default = new SearchView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _iconsSvg = require("../../img/icons.svg"); //Parcel 2
var _iconsSvgDefault = parcelHelpers.interopDefault(_iconsSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentEl = document.querySelector(".pagination");
    addButtonHandler(handler) {
        this._parentEl.addEventListener("click", function(e) {
            e.preventDefault();
            const btn = e.target.closest(".btn--inline");
            if (!btn) return;
            const goToPage = +btn.dataset.goto;
            console.log(goToPage);
            handler(goToPage);
        });
    }
    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage // [] = 59 Elements  / 10 = resultsPerPage = 6
        ); // numPages = 6
        const curPage = this._data.page;
        // Page 1 , there are other pages
        // if page is 1 we only want the next button to be shown
        if (curPage === 1 && numPages > 1) return `<button data-goTo="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>`;
        // Other Page
        // if the page value is between first page and last page both next and prev button should be shown
        if (curPage < numPages) return `<button data-goTo="${curPage + 1}" class="btn--inline pagination__btn--next">
                <span>Page ${curPage + 1}</span>
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-right"></use>
                </svg>
              </button>
              <button data-goTo="${curPage - 1}"class="btn--inline pagination__btn--prev">
                <svg class="search__icon">
                  <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
                </svg>
                <span>Page ${curPage - 1}</span>
              </button>
              `;
        //Last Page
        //if the page is the last page only prev button is shown
        if (curPage === numPages && numPages > 1) return `<button data-goTo="${curPage - 1}"class="btn--inline pagination__btn--prev">
              <svg class="search__icon">
                <use href="${0, _iconsSvgDefault.default}#icon-arrow-left"></use>
              </svg>
              <span>Page ${curPage - 1}</span>
            </button>`;
        // Page 1 , and there are no other pages
        // If numpages value is only 1 we dont want any buttons to be shown
        return "";
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","../../img/icons.svg":"cMpiy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7YaI3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _previewView = require("./previewView");
var _previewViewDefault = parcelHelpers.interopDefault(_previewView);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class BookmarkView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".bookmarks__list");
    _errorMessage = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    _message = "No bookmarks yet. Find a nice recipe and bookmark it :)";
    loadBookmarkHandler(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewViewDefault.default).render(result, false)).join("");
    }
}
exports.default = new BookmarkView();

},{"./previewView":"1FDQ6","./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZCdH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class customRecipeView extends (0, _viewDefault.default) {
    _parentEl = document.querySelector(".upload");
    _message = "Recipe was succecsfully uploaded";
    _closeWindowBtn = document.querySelector(".btn--close-modal");
    _addRecipeBtn = document.querySelector(".nav__btn--add-recipe");
    _overlay = document.querySelector(".overlay");
    _form = document.querySelector(".add-recipe-window");
    constructor(){
        super();
        this._addRecipeHandler();
        this._closeWindow();
    }
    _toggleWindow() {
        this._overlay.classList.toggle("hidden");
        this._form.classList.toggle("hidden");
    }
    _addRecipeHandler() {
        this._addRecipeBtn.addEventListener("click", this._toggleWindow.bind(this));
    }
    _closeWindow() {
        this._closeWindowBtn.addEventListener("click", this._toggleWindow.bind(this));
        this._overlay.addEventListener("click", this._toggleWindow.bind(this));
    }
    addHandlerUpload(handler) {
        this._parentEl.addEventListener("submit", function(e) {
            e.preventDefault();
            const data = [
                ...new FormData(this)
            ];
            //Turns Array into object like with the use of a key-value pair structure
            const dataObj = Object.fromEntries(data);
            console.log(dataObj);
            handler(dataObj);
        });
    }
}
exports.default = new customRecipeView();

},{"./View":"5cUXS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["fA0o9","aenu9"], "aenu9", "parcelRequire3a11")

//# sourceMappingURL=index.e37f48ea.js.map
