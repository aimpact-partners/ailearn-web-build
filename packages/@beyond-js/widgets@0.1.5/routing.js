System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render","@beyond-js/kernel@0.1.9/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep)],
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

// .beyond/uimport/@beyond-js/widgets/routing.0.1.5.js
var routing_0_1_5_exports = {};
__export(routing_0_1_5_exports, {
  Layout: () => Layout,
  PageInstance: () => PageInstance,
  PageURI: () => PageURI,
  Route: () => Route,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  manager: () => manager
});
module.exports = __toCommonJS(routing_0_1_5_exports);

// node_modules/@beyond-js/widgets/routing/routing.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.5/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/routing"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/routing", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./layouts/index", {
  hash: 2940970575,
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
  hash: 2602064878,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Layout = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class Layout2 extends _core.Events {
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
          const layout = new Layout2(this.#layouts, element, this);
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
    exports.Layout = Layout2;
  }
});
ims.set("./manager", {
  hash: 1504779151,
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
    var _route = require2("./route");
    const manager2 = typeof process === "object" ? void 0 : new class Manager {
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
          this.#main = new _layout.Layout(this.#instances.layouts, config.layout);
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
    }();
    exports.manager = manager2;
  }
});
ims.set("./pages/index", {
  hash: 635174642,
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
      register(uri, route) {
        const {
          pathname
        } = uri;
        let instance = this.has(pathname) ? this.get(pathname) : void 0;
        instance = instance ? instance : new _instance.PageInstance(uri, route);
        this.set(pathname, instance);
        return instance;
      }
    }
    exports.default = _default;
  }
});
ims.set("./pages/instance", {
  hash: 2192565275,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageInstance = void 0;
    var _render = require2("@beyond-js/widgets/render");
    let id = 0;
    class PageInstance2 {
      #uri;
      get uri() {
        return this.#uri;
      }
      #route;
      get route() {
        return this.#route;
      }
      get element() {
        return this.#route.page;
      }
      get is() {
        return "page";
      }
      #id;
      get id() {
        return `${this.element}:${this.#id}`;
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
      constructor(uri, route) {
        this.#uri = uri;
        this.#route = route;
        this.#id = ++id;
      }
    }
    exports.PageInstance = PageInstance2;
  }
});
ims.set("./route", {
  hash: 408835594,
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
ims.set("./uri", {
  hash: 615392904,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.PageURI = void 0;
    var _manager = require2("./manager");
    class PageURI2 {
      #uri;
      #route;
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
        widget,
        uri,
        route
      }) {
        if (widget) {
          const child = widget.getAttribute("data-child-id");
          const page = _manager.manager.pages.instance(child);
          if (!page) {
            throw new Error(`Element "${widget.localName}" is not a page, or page not found`);
          }
          ({
            uri,
            route
          } = page);
        }
        this.#uri = uri;
        this.#route = route;
      }
    }
    exports.PageURI = PageURI2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./layouts/layout",
  "from": "Layout",
  "name": "Layout"
}, {
  "im": "./manager",
  "from": "manager",
  "name": "manager"
}, {
  "im": "./pages/instance",
  "from": "PageInstance",
  "name": "PageInstance"
}, {
  "im": "./route",
  "from": "Route",
  "name": "Route"
}, {
  "im": "./uri",
  "from": "PageURI",
  "name": "PageURI"
}];
var Layout, manager, PageInstance, Route, PageURI;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "Layout") && (Layout = require2 ? require2("./layouts/layout").Layout : value);
  (require2 || prop === "manager") && (manager = require2 ? require2("./manager").manager : value);
  (require2 || prop === "PageInstance") && (PageInstance = require2 ? require2("./pages/instance").PageInstance : value);
  (require2 || prop === "Route") && (Route = require2 ? require2("./route").Route : value);
  (require2 || prop === "PageURI") && (PageURI = require2 ? require2("./uri").PageURI : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy4wLjEuNS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9sYXlvdXRzL2luZGV4LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvbGF5b3V0LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL21hbmFnZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcGFnZXMvaW5zdGFuY2UudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvcm91dGUudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvdXJpLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiTGF5b3V0IiwiUGFnZUluc3RhbmNlIiwiUGFnZVVSSSIsIlJvdXRlIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibWFuYWdlciIsIm1vZHVsZSIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJleHBvcnRzIiwiRXZlbnRzIiwiaXMiLCJlbGVtZW50IiwiYWN0aXZlIiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsImxheW91dHMiLCJwYXJlbnQiLCJzZWxlY3QiLCJwYWdlIiwiZGVzY2VuZGluZyIsImxlbmd0aCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY2hpbGQiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGFuZ2VkIiwic2hpZnQiLCJ0cmlnZ2VyIiwicHJvY2VzcyIsIk1hbmFnZXIiLCJMYXlvdXRzIiwicGFnZXMiLCJQYWdlcyIsImluaXRpYWxpc2VkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkeSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImRlZmF1bHQiLCJjb25maWciLCJvbiIsIm1haW4iLCJDYW5jZWxsYXRpb25Ub2tlbiIsImNpZCIsInJlc2V0Iiwicm91dGUiLCJwYXRobmFtZSIsImNoZWNrIiwiZG9uZSIsImVycm9yIiwidmFsdWUiLCJwYXJlbnRzIiwiaW5zdGFuY2UiLCJoYXMiLCJnZXQiLCJ1bmRlZmluZWQiLCJ3aWRnZXRzIiwidW5zaGlmdCIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJzZWFyY2giLCJxcyIsImhhc2giLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJFcnJvciIsImxvY2FsTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNLYyx1QkFBZUMsSUFBbUI7TUFDNUNDLFNBQVNDLFFBQWM7UUFDbkIsS0FBS0MsSUFBSUQsT0FBT0UsSUFBSUYsTUFBTTtNQUM5Qjs7SUFDSEc7Ozs7Ozs7Ozs7OztJQ1BEO0lBS2lCLE1BQ1hiLGdCQUFlYyxhQUFN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