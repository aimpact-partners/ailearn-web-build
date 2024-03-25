System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/routing","@beyond-js/events@0.0.7/events"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","1.1.0"],["@beyond-js/events","0.0.7"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep)],
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
  value: mod,
  enumerable: true
}) : target, mod));
var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);

// .beyond/uimport/@beyond-js/widgets/routing.1.1.0.js
var routing_1_1_0_exports = {};
__export(routing_1_1_0_exports, {
  LayoutInstance: () => LayoutInstance,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_1_1_0_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.0/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var dependency_4 = __toESM(require("@beyond-js/events@0.0.7/events"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.0/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3], ["@beyond-js/events/events", dependency_4]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2720616762,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    class _default extends Map {
      register(layout) {
        this.set(layout.id, layout);
      }
    }
    exports.default = _default;
  }
});
ims.set("./layouts/layout", {
  hash: 2523911355,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LayoutInstance = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class LayoutInstance2 extends _core.Events {
      get is() {
        return "layout";
      }
      #layouts;
      #element;
      get element() {
        return this.#element;
      }
      get id() {
        return this.#element;
      }
      #active;
      get active() {
        return this.#active;
      }
      #parent;
      #children = /* @__PURE__ */new Map();
      get children() {
        return this.#children;
      }
      constructor(layouts, element, parent) {
        super();
        this.#layouts = layouts;
        this.#element = element ? element : "main";
        this.#parent = parent;
      }
      select(page, descending) {
        if (descending.length && descending[0].name === this.#element) {
          console.log(`Invalid layout configuration. Layout element "${this.#element}" is already created`);
          return;
        }
        const child = (() => {
          if (!descending.length) return page;
          const {
            name: element
          } = descending[0];
          const found = [...this.#children.values()].find(child2 => child2.element === element);
          if (found) return found;
          const layout = new LayoutInstance2(this.#layouts, element, this);
          this.#layouts.register(layout);
          return layout;
        })();
        this.#children.set(child.id, child);
        const changed = this.#active !== child;
        this.#active = child;
        descending.shift();
        child.is === "layout" && child.select(page, descending);
        changed && this.trigger("change");
      }
    }
    exports.LayoutInstance = LayoutInstance2;
  }
});
ims.set("./manager", {
  hash: 913723722,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.manager = void 0;
    var _core = require2("@beyond-js/kernel/core");
    var _routing = require2("@beyond-js/kernel/routing");
    var _layout = require2("./layouts/layout");
    var _pages = require2("./pages");
    var _layouts = require2("./layouts");
    var _route = require2("./pages/route");
    class Manager {
      #instances = {
        layouts: new _layouts.default(),
        pages: new _pages.default()
      };
      #initialised = false;
      get initialised() {
        return this.#initialised;
      }
      #resolve;
      #ready = new Promise(resolve => this.#resolve = resolve);
      get ready() {
        return this.#ready;
      }
      constructor() {
        const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
        const {
          specifier
        } = globalThis.__app_package;
        Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
          default: config
        }]) => {
          this.#main = new _layout.LayoutInstance(this.#instances.layouts, config.layout);
          _routing.routing.on("change", set);
          _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
        });
      }
      get layouts() {
        return this.#instances.layouts;
      }
      get pages() {
        return this.#instances.pages;
      }
      #main;
      get main() {
        return this.#main;
      }
      #ct = new _core.CancellationToken();
      async set(uri) {
        const cid = this.#ct.reset();
        const route = new _route.Route(uri.pathname);
        await route.process();
        if (!this.#ct.check(cid)) return;
        const done = () => {
          !this.#initialised && this.#resolve();
          this.#initialised = true;
        };
        const {
          page: element
        } = route;
        if (!element) {
          console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
          return done();
        }
        const page = this.#instances.pages.register(uri, route);
        const {
          error,
          value: descending
        } = page.parents;
        if (error) {
          console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
          return done();
        }
        this.#main.select(page, descending);
        return done();
      }
    }
    const manager2 = exports.manager = typeof process === "object" ? void 0 : new Manager();
  }
});
ims.set("./pages/index", {
  hash: 2934692868,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _instance = require2("./instance");
    class _default extends Map {
      instance(id) {
        return [...this.values()].find(instance => instance.id === id);
      }
      obtain({
        widget,
        id
      }) {
        if (id) return this.instance(id);
        const child = widget.getAttribute("data-child-id");
        return this.instance(child);
      }
      register(uri, route) {
        const {
          pathname
        } = uri;
        const instance = (() => {
          if (!this.has(pathname)) return new _instance.PageInstance(uri, route);
          const instance2 = this.get(pathname);
          instance2.uri.update(uri);
          return instance2;
        })();
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 3428775175,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _uri = require2("./uri");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      get route() {
        return this.#uri.route;
      }
      get element() {
        return this.#uri.route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
      }
      constructor(uri, route) {
        this.#uri = new _uri.PageURI({
          uri,
          route
        });
        this.#id = ++id;
      }
      get parents() {
        const value = [];
        let {
          layout
        } = _render.widgets.get(this.element);
        while (layout) {
          const found = [..._render.widgets.values()].find(({
            name
          }) => name === layout);
          if (!found) {
            const error = `Layout "${layout}" not found`;
            return {
              error
            };
          }
          value.unshift(found);
          layout = found.layout;
        }
        return {
          value
        };
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./pages/route", {
  hash: 228538911,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Route = void 0;
    var _render = require2("@beyond-js/widgets/render");
    var _routing = require2("@beyond-js/kernel/routing");
    class Route2 {
      #pathname;
      get pathname() {
        return this.#pathname;
      }
      #page;
      get page() {
        return this.#page;
      }
      #vars;
      get vars() {
        return this.#vars;
      }
      constructor(pathname) {
        this.#pathname = pathname;
      }
      async process() {
        const pathname = this.#pathname.split("/");
        const registered = /* @__PURE__ */new Map();
        _render.widgets.forEach(({
          is,
          name,
          route
        }) => is === "page" && registered.set(name, route.split("/")));
        const target = [...registered].filter(([, route]) => route.length === pathname.length);
        this.#vars = /* @__PURE__ */new Map();
        const found = target.find(([, route]) => {
          this.#vars.clear();
          for (let i = 0; i < pathname.length; i++) {
            const dir = route[i];
            if (dir.startsWith("${") && dir.endsWith("}")) {
              const vname = dir.slice(2, dir.length - 1);
              this.#vars.set(vname, pathname[i]);
              continue;
            }
            if (dir !== pathname[i]) return false;
          }
          return true;
        });
        this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
      }
    }
    exports.Route = Route2;
  }
});
ims.set("./pages/uri", {
  hash: 3243525408,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _events = require2("@beyond-js/events/events");
    class PageURI2 extends _events.Events {
      #route;
      get route() {
        return this.#route;
      }
      #uri;
      get uri() {
        return this.#uri;
      }
      get pathname() {
        return this.#uri.pathname;
      }
      get search() {
        return this.#uri.search;
      }
      get qs() {
        return this.#uri.qs;
      }
      get hash() {
        return this.#uri.hash;
      }
      get vars() {
        return this.#route.vars;
      }
      constructor({
        uri,
        route
      }) {
        super();
        this.#route = route;
        this.#uri = uri;
      }
      update(uri) {
        if (this.#uri === uri) return;
        this.#uri = uri;
        const {
          qs
        } = this;
        this.trigger("change", {
          qs
        });
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "LayoutInstance",
  "name": "LayoutInstance"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./pages/route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./pages/uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var LayoutInstance, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "LayoutInstance") && (LayoutInstance = require2 ? require2("./layouts/layout").LayoutInstance : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./pages/route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./pages/uri").PageURI : value);
};
var __beyond_pkg = __pkg;
var hmr = new function () {
  this.on = (event, listener) => void 0;
  this.off = (event, listener) => void 0;
}();
__pkg.initialise(ims);
};

code(module, require);
_exports(module.exports);
}}});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4xLjEuMC5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvdXJpLnRzIl0sIm5hbWVzIjpbInJvdXRpbmdfMV8xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiTGF5b3V0SW5zdGFuY2UiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIl9kZWZhdWx0IiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImRlZmF1bHQiLCJfY29yZSIsInJlcXVpcmUyIiwiTGF5b3V0SW5zdGFuY2UyIiwiRXZlbnRzIiwiaXMiLCJsYXlvdXRzIiwiZWxlbWVudCIsImFjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJzZWxlY3QiLCJwYWdlIiwiZGVzY2VuZGluZyIsImxlbmd0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGQiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGlsZDIiLCJjaGFuZ2VkIiwic2hpZnQiLCJ0cmlnZ2VyIiwiX3JvdXRpbmciLCJfbGF5b3V0IiwiX3BhZ2VzIiwiX2xheW91dHMiLCJfcm91dGUiLCJNYW5hZ2VyIiwiaW5zdGFuY2VzIiwicGFnZXMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCJtYWluIiwib24iLCJjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsInBhdGhuYW1lIiwicHJvY2VzcyIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwibWFuYWdlcjIiLCJfaW5zdGFuY2UiLCJpbnN0YW5jZSIsIm9idGFpbiIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsImhhcyIsImluc3RhbmNlMiIsImdldCIsInVwZGF0ZSIsIl9yZW5kZXIiLCJfdXJpIiwiUGFnZUluc3RhbmNlMiIsIndpZGdldHMiLCJ1bnNoaWZ0IiwiUm91dGUyIiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsIl9ldmVudHMiLCJQYWdlVVJJMiIsInNlYXJjaCIsInFzIiwiaGFzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7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