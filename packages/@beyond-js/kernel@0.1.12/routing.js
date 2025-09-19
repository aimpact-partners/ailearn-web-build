System.register(["@beyond-js/kernel@0.1.12/bundle","@beyond-js/kernel@0.1.12/core"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.12"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.12/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.12/core', dep)],
execute: function() {
// Prevent esbuild from considering the context to be amd
const define = void 0;
const module = {};

const code = (module, require) => {
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
// If the importer is in node compatibility mode or this is not an ESM
// file that has been converted to a CommonJS file using a Babel-
// compatible transform (i.e. "__esModule" has not been set), then set
// "default" to the CommonJS "module.exports" for node compatibility.
isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/kernel/routing.0.1.12.js
var routing_0_1_12_exports = {};
__export(routing_0_1_12_exports, {
  URI: () => URI,
  routing: () => routing
});
module.exports = __toCommonJS(routing_0_1_12_exports);

// node_modules/@beyond-js/kernel/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.12/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.12/core"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/kernel@0.1.11/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./history/history", {
  hash: 1835933971,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BeyondHistory = void 0;
    var _position = require2("./position");
    var _records = require2("./records");
    class BeyondHistory {
      #position;
      get position() {
        return this.#position;
      }
      #records;
      get records() {
        return this.#records;
      }
      get valid() {
        return this.#records.valid;
      }
      get current() {
        return this.valid ? this.#records.current.uri : void 0;
      }
      #initial = history.length;
      get initial() {
        return this.#initial;
      }
      /**
       * Process the browser URI that takes into consideration the routing mode
       *
       * @param {string} uri The internal URI (always starts with '/')
       * @return {string} The URI to be pushed or replaced in the browser considering the routing mode
       * @private
       */
      #processBrowserURI(uri) {
        void this;
        if (uri === void 0) return;
        const {
          routing: routing2
        } = require2("../routing");
        const RoutingModeEnum = require2("../routing").RoutingMode;
        return routing2.mode === RoutingModeEnum.Hash ? `#${uri.substr(1)}` : uri;
      }
      #push(uri) {
        this.#records.reset();
        this.#records.push(uri);
        this.#position.save(this.#records.length);
      }
      replaceState(state, title, uri) {
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        this.#records.updateCurrentURI(uri);
        const position = this.#position.value;
        history.replaceState(state, title, this.#processBrowserURI(uri));
        this.#position.save(position);
      }
      pushState(uri, state) {
        if (uri === `${location.pathname}${location.search}${location.hash}`) return;
        state = state ? state : {};
        if (typeof state !== "object") throw new Error("Invalid state parameter");
        history.pushState(state, null, this.#processBrowserURI(uri));
        this.#push(uri);
      }
      back() {
        const previous = this.#records.previous?.position;
        const current = this.#records.current?.position;
        if (!previous) return;
        history.go(previous - current);
      }
      forward() {
        const following = this.#records.following?.position;
        const current = this.#records.current?.position;
        if (!following) return;
        history.go(following - current);
      }
      constructor(routing2, Mode) {
        this.#position = new _position.HistoryPosition();
        this.#records = new _records.HistoryRecords(this.#position);
        if (this.#position.value === void 0) {
          let uri = routing2.mode === Mode.Hash ? location.hash.slice(1) : `${location.pathname}${location.search}${location.hash}`;
          this.#push(uri);
        }
      }
    }
    exports.BeyondHistory = BeyondHistory;
  }
});
ims.set("./history/position", {
  hash: 3613484025,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryPosition = void 0;
    class HistoryPosition {
      check() {
        if (this.value) return true;
        console.error("History state is not defined. This happen when state is changed outside the beyond defined navigation flows.");
        return false;
      }
      /**
       * Returns the position from the history.state
       * @returns {number | undefined}
       */
      get value() {
        return history.state?.__beyond_navigation_position;
      }
      save(position) {
        const state = history.state ? history.state : {};
        state.__beyond_navigation_position = position;
        history.replaceState(state, null);
      }
    }
    exports.HistoryPosition = HistoryPosition;
  }
});
ims.set("./history/records", {
  hash: 3466552890,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HistoryRecords = void 0;
    class HistoryRecords {
      #position;
      #valid = true;
      get valid() {
        return this.#valid;
      }
      #entries = [];
      get entries() {
        return this.#entries.slice();
      }
      get length() {
        return this.#entries.length;
      }
      get current() {
        return this.#entries[this.#position.value - 1];
      }
      get previous() {
        const previous = this.#position.value - 2;
        if (previous < 0) return;
        return this.#entries[previous];
      }
      get following() {
        const following = this.#position.value;
        if (following >= this.#entries.length) return;
        return this.#entries[following];
      }
      constructor(position) {
        this.#position = position;
        let parsed;
        try {
          const stored = sessionStorage.getItem("__beyond_navigation_records");
          if (!stored && position.value !== void 0) {
            this.#valid = false;
            return;
          }
          parsed = stored ? JSON.parse(stored) : [];
        } catch (exc) {
          this.#valid = false;
          console.error("Error loading beyond navigation state", exc instanceof Error ? exc.stack : exc);
          this.#entries = [];
        }
        if (!(parsed instanceof Array)) {
          const warning = "The beyond navigation data, stored in session store is invalid.";
          console.warn(warning, parsed);
        }
        this.#entries = parsed;
      }
      /**
       * Set the URI always starting with '/' no matter the routing mode (hash or pathname)
       *
       * @param {string} uri
       * @return {string}
       */
      #sanitizeURI(uri) {
        void this;
        if (uri === void 0) return;
        return uri.startsWith("/") ? uri : `/${uri}`;
      }
      get(index) {
        return this.#entries[index];
      }
      /**
       * Push a uri to the records stored in the sessionStorage
       * @param {string} uri
       */
      push(uri) {
        uri = this.#sanitizeURI(uri);
        this.#entries.push({
          uri,
          position: history.length
        });
        this.save();
      }
      /**
       * Reset the list of records from the current position
       * This is required when:
       *      1. The list of browsed pages is greater than one (ex: page1 and page2)
       *      2. The user goes back in the history (ex: to position 1: page1)
       *      3. The user navigates another page (ex: page3)
       *
       * This method is required in step 3, to clean the records from position 1, and after this
       * execution, the navigation flow can push page3
       */
      reset() {
        const position = this.#position.value;
        if (position) return;
        this.#entries = this.#entries.filter(entry => entry.position < history.length);
      }
      updateCurrentURI(uri) {
        if (!this.#valid) return;
        const position = this.#position.value;
        uri = this.#sanitizeURI(uri);
        this.#entries[position - 1] = {
          uri,
          position: history.length
        };
        this.save();
      }
      save() {
        if (!this.#valid) return;
        sessionStorage.setItem("__beyond_navigation_records", JSON.stringify(this.#entries));
      }
    }
    exports.HistoryRecords = HistoryRecords;
  }
});
ims.set("./routing", {
  hash: 1121896291,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.routing = exports.RoutingMode = exports.Routing = void 0;
    var _uri2 = require2("./uri/uri");
    var _core = require2("@beyond-js/kernel/core");
    var _history = require2("./history/history");
    var RoutingMode;
    (function (RoutingMode2) {
      RoutingMode2[RoutingMode2["Hash"] = 0] = "Hash";
      RoutingMode2[RoutingMode2["Pathname"] = 1] = "Pathname";
    })(RoutingMode || (exports.RoutingMode = RoutingMode = {}));
    const serverside = typeof process === "object";
    class Routing extends _core.Events {
      #mode;
      get mode() {
        return this.#mode;
      }
      #history;
      get history() {
        return this.#history;
      }
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      missing;
      redirect;
      #resolveConfigured;
      #configured = new Promise(resolve => this.#resolveConfigured = resolve);
      constructor() {
        super();
        const {
          specifier
        } = globalThis.__app_package;
        !serverside && bimport(`${specifier}/config`).then(({
          default: config
        }) => {
          let configured = config.routing?.mode;
          let routingMode = configured === "hash" ? RoutingMode.Hash : RoutingMode.Pathname;
          location.protocol === "file:" && (routingMode = RoutingMode.Hash);
          ![0, 1].includes(routingMode) && (routingMode = location.protocol === "file:" ? RoutingMode.Hash : RoutingMode.Pathname);
          this.#mode = routingMode;
          this.#history = new _history.BeyondHistory(this, RoutingMode);
          this.#resolveConfigured();
        });
      }
      #redirect = async uri => {
        if (typeof this.redirect !== "function") return;
        const redirected = await this.redirect(uri);
        if (!redirected) return;
        if (typeof redirected !== "string") {
          console.error(`Invalid route value set by custom routing function`, redirected);
          return;
        }
        if (uri.uri === redirected) return;
        this.pushState(redirected);
        return true;
      };
      pushState(uri, state) {
        this.#configured.then(() => {
          this.#history.pushState(uri, state);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      replaceState(state, title, uri) {
        this.#configured.then(() => {
          this.#history.replaceState(state, title, uri);
          this.update().catch(exc => console.error(exc.stack));
        });
      }
      // Avoid to continue the execution on asynchronous calls, when a newest call's been made
      #cancellationToken = new _core.CancellationToken();
      update = async () => {
        const {
          hash,
          pathname,
          search
        } = location;
        const _uri = this.#mode === RoutingMode.Hash ? `/${hash.slice(1)}` : pathname + search + hash;
        if (this.#uri?.uri === _uri) return;
        const cancellationTokenId = this.#cancellationToken.reset();
        const uri = this.#uri = new _uri2.URI(_uri);
        const redirected = await this.#redirect(uri);
        if (!this.#cancellationToken.check(cancellationTokenId)) return;
        if (redirected) return;
        this.#history && uri.uri !== this.#history.current && console.error(`History current "${this.#history.current}" is not equal to actual uri "${uri.uri}"`);
        this.#initialised ? this.trigger("change") : this.#resolve();
        this.#initialised = true;
      };
      // Wait for start.js be completed, as routing.redirect must be set before initialising routing
      #started = false;
      setup() {
        this.#started = true;
        !serverside && this.update().catch(exc => console.error(exc.stack));
      }
      back() {
        this.#history.back();
      }
      forward() {
        this.#history.forward();
      }
    }
    exports.Routing = Routing;
    const routing2 = exports.routing = new Routing();
    globalThis.routing = routing2;
    !serverside && (beyond.navigate = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.pushState = (uri, state) => routing2.pushState(uri, state));
    !serverside && (beyond.back = () => routing2.back());
    !serverside && (beyond.forward = () => routing2.forward());
    !serverside && window.addEventListener("popstate", () => routing2.update().catch(exc => console.error(exc.stack)));
  }
});
ims.set("./uri/querystring", {
  hash: 187911159,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QueryString = void 0;
    class QueryString extends Map {
      constructor(search) {
        super();
        if (search.trim() === "") return;
        search = search.slice(0, 1) === "?" ? search.slice(1) : search;
        const split = search.split("&");
        for (let i = 0; i < split.length; ++i) {
          const param = split[i].split("=", 2);
          const value = param[1] ? decodeURIComponent(param[1].replace(/\+/g, " ")) : void 0;
          this.set(param[0], value);
        }
      }
    }
    exports.QueryString = QueryString;
  }
});
ims.set("./uri/uri", {
  hash: 748332499,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.URI = void 0;
    var _querystring = require2("./querystring");
    class URI2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #search;
      get search() {
        return this.#search;
      }
      #qs;
      get qs() {
        return this.#qs;
      }
      #hash;
      get hash() {
        return this.#hash;
      }
      constructor(uri) {
        this.#uri = uri;
        const [u, hash] = uri.split("#");
        const [pathname, search] = u.split("?");
        this.#pathname = pathname.startsWith("/") ? pathname : `/${pathname}`;
        this.#search = search ? search : "";
        this.#qs = new _querystring.QueryString(this.#search);
        this.#hash = hash;
      }
    }
    exports.URI = URI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./routing",
  "from": "routing",
  "name": "routing"
}, {
  "im": "./uri/uri",
  "from": "URI",
  "name": "URI"
}];
var routing, URI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "routing") && (routing = require2 ? require2("./routing").routing : value);
  (require2 || prop === "URI") && (URI = require2 ? require2("./uri/uri").URI : value);
};
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL2tlcm5lbC9yb3V0aW5nLjAuMS4xMi5qcyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvaGlzdG9yeS9oaXN0b3J5LnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3Bvc2l0aW9uLnRzIiwiZmlsZTovLy9fX3NvdXJjZXMvcm91dGluZy9oaXN0b3J5L3JlY29yZHMudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3JvdXRpbmcudHMiLCJmaWxlOi8vL19fc291cmNlcy9yb3V0aW5nL3VyaS9xdWVyeXN0cmluZy50cyIsImZpbGU6Ly8vX19zb3VyY2VzL3JvdXRpbmcvdXJpL3VyaS50cyJdLCJuYW1lcyI6WyJyb3V0aW5nXzBfMV8xMl9leHBvcnRzIiwiX19leHBvcnQiLCJVUkkiLCJyb3V0aW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9wb3NpdGlvbiIsInJlcXVpcmUyIiwiX3JlY29yZHMiLCJCZXlvbmRIaXN0b3J5IiwicG9zaXRpb24iLCJyZWNvcmRzIiwidmFsaWQiLCJjdXJyZW50IiwidXJpIiwiaW5pdGlhbCIsImhpc3RvcnkiLCJsZW5ndGgiLCJwcm9jZXNzQnJvd3NlclVSSSIsIiNwcm9jZXNzQnJvd3NlclVSSSIsInJvdXRpbmcyIiwiUm91dGluZ01vZGVFbnVtIiwiUm91dGluZ01vZGUiLCJtb2RlIiwiSGFzaCIsInN1YnN0ciIsInB1c2giLCIjcHVzaCIsInJlc2V0Iiwic2F2ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlIiwidGl0bGUiLCJFcnJvciIsInVwZGF0ZUN1cnJlbnRVUkkiLCJ2YWx1ZSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJoYXNoIiwiYmFjayIsInByZXZpb3VzIiwiZ28iLCJmb3J3YXJkIiwiZm9sbG93aW5nIiwiY29uc3RydWN0b3IiLCJNb2RlIiwiSGlzdG9yeVBvc2l0aW9uIiwiSGlzdG9yeVJlY29yZHMiLCJzbGljZSIsImNoZWNrIiwiY29uc29sZSIsImVycm9yIiwiX19iZXlvbmRfbmF2aWdhdGlvbl9wb3NpdGlvbiIsImVudHJpZXMiLCJwYXJzZWQiLCJzdG9yZWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJleGMiLCJzdGFjayIsIkFycmF5Iiwid2FybmluZyIsIndhcm4iLCJzYW5pdGl6ZVVSSSIsIiNzYW5pdGl6ZVVSSSIsInN0YXJ0c1dpdGgiLCJnZXQiLCJpbmRleCIsImZpbHRlciIsImVudHJ5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIl91cmkyIiwiX2NvcmUiLCJfaGlzdG9yeSIsIlJvdXRpbmdNb2RlMiIsInNlcnZlcnNpZGUiLCJwcm9jZXNzIiwiUm91dGluZyIsIkV2ZW50cyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsIm1pc3NpbmciLCJyZWRpcmVjdCIsInJlc29sdmVDb25maWd1cmVkIiwiY29uZmlndXJlZCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYmltcG9ydCIsInRoZW4iLCJkZWZhdWx0IiwiY29uZmlnIiwicm91dGluZ01vZGUiLCJQYXRobmFtZSIsInByb3RvY29sIiwiaW5jbHVkZXMiLCJyZWRpcmVjdGVkIiwidXBkYXRlIiwiY2F0Y2giLCJjYW5jZWxsYXRpb25Ub2tlbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiX3VyaSIsImNhbmNlbGxhdGlvblRva2VuSWQiLCJ0cmlnZ2VyIiwic3RhcnRlZCIsInNldHVwIiwiYmV5b25kIiwibmF2aWdhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiUXVlcnlTdHJpbmciLCJNYXAiLCJ0cmltIiwic3BsaXQiLCJpIiwicGFyYW0iLCJkZWNvZGVVUklDb21wb25lbnQiLCJyZXBsYWNlIiwic2V0IiwiX3F1ZXJ5c3RyaW5nIiwiVVJJMiIsInFzIiwidSJdLCJtYXBwaW5ncyI6Ijs7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LE9BQU8sS0FBSyxDQUFBQSxFQUFBO01BQ2hCO01BRVMsQ0FBQXhGLElBQUE7TUFDVCxJQUFJQSxLQUFBLEVBQUk7UUFDSixPQUFPLEtBQUssQ0FBQUEsSUFBQTtNQUNoQjtNQUVBTSxZQUFZaEMsR0FBQSxFQUFXO1FBQ25CLEtBQUssQ0FBQUEsR0FBQSxHQUFPQSxHQUFBO1FBRVosTUFBTSxDQUFDbUgsQ0FBQSxFQUFHekYsSUFBSSxJQUFJMUIsR0FBQSxDQUFJMEcsS0FBQSxDQUFNLEdBQUc7UUFDL0IsTUFBTSxDQUFDbEYsUUFBQSxFQUFVQyxNQUFNLElBQUkwRixDQUFBLENBQUVULEtBQUEsQ0FBTSxHQUFHO1FBRXRDLEtBQUssQ0FBQWxGLFFBQUEsR0FBWUEsUUFBQSxDQUFTK0IsVUFBQSxDQUFXLEdBQUcsSUFBSS9CLFFBQUEsR0FBVyxJQUFJQSxRQUFRO1FBQ25FLEtBQUssQ0FBQUMsTUFBQSxHQUFVQSxNQUFBLEdBQVNBLE1BQUEsR0FBUztRQUNqQyxLQUFLLENBQUF5RixFQUFBLEdBQU0sSUFBSUYsWUFBQSxDQUFBVCxXQUFBLENBQVksS0FBSyxDQUFBOUUsTUFBTztRQUN2QyxLQUFLLENBQUFDLElBQUEsR0FBUUEsSUFBQTtNQUNqQjs7SUFDSHBDLE9BQUEsQ0FBQUgsR0FBQSxHQUFBOEgsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpL2FpbGVhcm4vY2xpZW50L2FwcHMvcnZkL291dCJ9