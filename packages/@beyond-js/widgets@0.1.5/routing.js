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

// .beyond/uimport/temp/@beyond-js/widgets/routing.0.1.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9yb3V0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy91cmkudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJMYXlvdXQiLCJQYWdlSW5zdGFuY2UiLCJQYWdlVVJJIiwiUm91dGUiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtYW5hZ2VyIiwibW9kdWxlIiwiTWFwIiwicmVnaXN0ZXIiLCJsYXlvdXQiLCJzZXQiLCJpZCIsImV4cG9ydHMiLCJFdmVudHMiLCJpcyIsImVsZW1lbnQiLCJhY3RpdmUiLCJjaGlsZHJlbiIsImNvbnN0cnVjdG9yIiwibGF5b3V0cyIsInBhcmVudCIsInNlbGVjdCIsInBhZ2UiLCJkZXNjZW5kaW5nIiwibGVuZ3RoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoYW5nZWQiLCJzaGlmdCIsInRyaWdnZXIiLCJwcm9jZXNzIiwiTWFuYWdlciIsIkxheW91dHMiLCJwYWdlcyIsIlBhZ2VzIiwiaW5pdGlhbGlzZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlYWR5Iiwicm91dGluZyIsInVyaSIsImNhdGNoIiwiZXhjIiwic3RhY2siLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsImFsbCIsImJpbXBvcnQiLCJ0aGVuIiwiZGVmYXVsdCIsImNvbmZpZyIsIm9uIiwibWFpbiIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsInBhdGhuYW1lIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJpbnN0YW5jZSIsImhhcyIsImdldCIsInVuZGVmaW5lZCIsIndpZGdldHMiLCJ1bnNoaWZ0IiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsInNlYXJjaCIsInFzIiwiaGFzaCIsIndpZGdldCIsImdldEF0dHJpYnV0ZSIsIkVycm9yIiwibG9jYWxOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0tjLHVCQUFlQyxJQUFtQjtNQUM1Q0MsU0FBU0MsUUFBYztRQUNuQixLQUFLQyxJQUFJRCxPQUFPRSxJQUFJRixNQUFNO01BQzlCOztJQUNIRzs7Ozs7Ozs7Ozs7O0lDUEQ7SUFLaUIsTUFDWGIsZ0JBQWVj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