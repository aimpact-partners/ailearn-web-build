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

// .beyond/uimport/temp/@beyond-js/widgets/routing.1.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9yb3V0aW5nL19fc291cmNlcy9yb3V0aW5nL2xheW91dHMvaW5kZXgudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbGF5b3V0cy9sYXlvdXQudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL3JvdXRpbmcvX19zb3VyY2VzL3JvdXRpbmcvbWFuYWdlci50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbmRleC50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9pbnN0YW5jZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy9yb3V0ZS50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvcm91dGluZy9fX3NvdXJjZXMvcm91dGluZy9wYWdlcy91cmkudHMiXSwibmFtZXMiOlsicm91dGluZ18xXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJMYXlvdXRJbnN0YW5jZSIsIlBhZ2VJbnN0YW5jZSIsIlBhZ2VVUkkiLCJSb3V0ZSIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1hbmFnZXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2RlZmF1bHQiLCJNYXAiLCJyZWdpc3RlciIsImxheW91dCIsInNldCIsImlkIiwiZGVmYXVsdCIsIl9jb3JlIiwicmVxdWlyZTIiLCJMYXlvdXRJbnN0YW5jZTIiLCJFdmVudHMiLCJpcyIsImxheW91dHMiLCJlbGVtZW50IiwiYWN0aXZlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJjb25zdHJ1Y3RvciIsInNlbGVjdCIsInBhZ2UiLCJkZXNjZW5kaW5nIiwibGVuZ3RoIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZCIsImZvdW5kIiwidmFsdWVzIiwiZmluZCIsImNoaWxkMiIsImNoYW5nZWQiLCJzaGlmdCIsInRyaWdnZXIiLCJfcm91dGluZyIsIl9sYXlvdXQiLCJfcGFnZXMiLCJfbGF5b3V0cyIsIl9yb3V0ZSIsIk1hbmFnZXIiLCJpbnN0YW5jZXMiLCJwYWdlcyIsImluaXRpYWxpc2VkIiwicmVzb2x2ZSIsInJlYWR5IiwiUHJvbWlzZSIsInJvdXRpbmciLCJ1cmkiLCJjYXRjaCIsImV4YyIsInN0YWNrIiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJhbGwiLCJiaW1wb3J0IiwidGhlbiIsImNvbmZpZyIsIm1haW4iLCJvbiIsImN0IiwiQ2FuY2VsbGF0aW9uVG9rZW4iLCJjaWQiLCJyZXNldCIsInJvdXRlIiwicGF0aG5hbWUiLCJwcm9jZXNzIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJtYW5hZ2VyMiIsIl9pbnN0YW5jZSIsImluc3RhbmNlIiwib2J0YWluIiwid2lkZ2V0IiwiZ2V0QXR0cmlidXRlIiwiaGFzIiwiaW5zdGFuY2UyIiwiZ2V0IiwidXBkYXRlIiwiX3JlbmRlciIsIl91cmkiLCJQYWdlSW5zdGFuY2UyIiwid2lkZ2V0cyIsInVuc2hpZnQiLCJSb3V0ZTIiLCJ2YXJzIiwic3BsaXQiLCJyZWdpc3RlcmVkIiwiZm9yRWFjaCIsInRhcmdldCIsImZpbHRlciIsImNsZWFyIiwiaSIsImRpciIsInN0YXJ0c1dpdGgiLCJlbmRzV2l0aCIsInZuYW1lIiwic2xpY2UiLCJtaXNzaW5nIiwiX2V2ZW50cyIsIlBhZ2VVUkkyIiwic2VhcmNoIiwicXMiLCJoYXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7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