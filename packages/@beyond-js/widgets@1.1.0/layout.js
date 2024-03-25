System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","1.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/render', dep)],
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

// .beyond/uimport/@beyond-js/widgets/layout.1.1.0.js
var layout_1_1_0_exports = {};
__export(layout_1_1_0_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_1_1_0_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@1.1.0/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.0/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 2642691338,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #instance;
      #active;
      connectedCallback() {
        this.attachShadow({
          mode: "open"
        });
        const managed = () => {
          const start = () => this.#start().catch(exc => console.error(exc.stack));
          manager.initialised ? start() : manager.ready.then(start);
        };
        if (manager) return managed();
        _ssr.ssr.page ? this.#onssr() : _ssr.ssr.addEventListener("received", this.#onssr);
        const promises = [];
        promises.push(bimport("@beyond-js/widgets/routing"));
        promises.push(bimport("@beyond-js/kernel/core"));
        const {
          specifier
        } = globalThis.__app_package;
        promises.push(bimport(`${specifier}/start`));
        Promise.all(promises).then(([routing]) => {
          ({
            manager
          } = routing);
          managed();
        }).catch(exc => console.log(exc.stack));
      }
      #container;
      get container() {
        if (this.#container !== void 0) return this.#container;
        const container = (() => {
          let parent = this;
          while (true) {
            const root = parent.getRootNode();
            if (root === document) return root;
            parent = root.host;
            if (_render.widgets.instances.has(parent)) return parent;
          }
        })();
        if (!container) {
          console.error(`Widget container of beyond-layout-children not found`);
          return this.#container = null;
        }
        return this.#container = container;
      }
      #onssr = () => {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        const {
          container
        } = this;
        if (container === null) return;
        const {
          element,
          error
        } = (() => {
          const {
            hierarchy
          } = _ssr.ssr;
          if (container === document) return {
            element: hierarchy[0]
          };
          const {
            localName
          } = container;
          const index = hierarchy.indexOf(localName);
          if (index === -1) return {
            error: `Container widget of beyond-layout-children "${localName}" not found in ssr hierarchy`
          };
          if (index === hierarchy.length - 1) return {
            error: `Container widget of beyond-layout-children "${localName}" is the page, not a layout`
          };
          return {
            element: hierarchy[index + 1]
          };
        })();
        if (error) {
          console.error(error, this);
          return;
        }
        this.shadowRoot.appendChild(document.createElement(element));
      };
      #render = () => {
        this.#instance.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#instance.active === child;
          const controller = element.controller;
          if (active && element !== this.#active) {
            this.#active = element;
            const show = () => {
              element.removeEventListener("controller.initialised", show);
              if (element !== this.#active) return;
              const controller2 = element.controller;
              if (!controller2) {
                throw new Error(`Controller of element widget "${child.element}" is undefined`);
              }
              this.#active === element && controller2.show?.();
            };
            controller ? controller.show?.() : element.addEventListener("controller.initialised", show);
          } else if (!element.hidden && !active) {
            controller?.hide?.();
          }
          element.hidden = !active;
        });
      };
      #hydrate() {
        const {
          children
        } = this.shadowRoot;
        const layout = this.#instance;
        if (!children.length) return;
        if (children.length > 1) {
          console.error("Only one child was expected on beyond-layout-children start", this);
          return;
        }
        children[0].setAttribute("data-child-id", [...layout.children.keys()][0]);
      }
      async #start() {
        _ssr.ssr.removeEventListener("received", this.#onssr);
        if (this.container === null) return;
        const done = layout => {
          this.#instance = layout;
          this.#hydrate();
          this.#instance.on("change", this.#render);
          this.#render();
        };
        if (this.container === document) return done(manager.main);
        const {
          localName
        } = this.container;
        if (localName === manager.main.element) return done(manager.main);
        if (!manager.layouts.has(localName)) {
          console.error(`Layout "${localName}" not found`, [...manager.layouts], manager);
          return;
        }
        done(manager.layouts.get(localName));
      }
    });
  }
});
ims.set("./ssr", {
  hash: 3616680628,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = exports.ssr = new class extends EventTarget {
      #main;
      get main() {
        return this.#main;
      }
      #page;
      get page() {
        return this.#page;
      }
      #layouts;
      get layouts() {
        return this.#layouts;
      }
      #hierarchy = [];
      get hierarchy() {
        return this.#hierarchy;
      }
      data(main, page) {
        this.#main = main;
        this.#page = page.element;
        this.#layouts = page.parents;
        main && this.#hierarchy.push(main);
        page.parents && (this.#hierarchy = this.#hierarchy.concat(page.parents));
        this.#hierarchy.push(page.element);
        const event = new Event("received");
        this.dispatchEvent(event);
      }
    }();
  }
});
__pkg.exports.descriptor = [{
  "im": "./ssr",
  "from": "ssr",
  "name": "ssr"
}];
var ssr;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "ssr") && (ssr = require2 ? require2("./ssr").ssr : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbImxheW91dF8xXzFfMF9leHBvcnRzIiwiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX3JlbmRlciIsInJlcXVpcmUyIiwiX3NzciIsIm1hbmFnZXIiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsIkhUTUxFbGVtZW50IiwiaW5zdGFuY2UiLCJhY3RpdmUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJwYWdlIiwib25zc3IiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvbWlzZXMiLCJwdXNoIiwiYmltcG9ydCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiUHJvbWlzZSIsImFsbCIsInJvdXRpbmciLCJsb2ciLCJjb250YWluZXIiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiaGFzIiwiI29uc3NyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJoaWVyYXJjaHkiLCJsb2NhbE5hbWUiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwicmVuZGVyIiwiI3JlbmRlciIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImVsZW1lbnQyIiwiZ2V0QXR0cmlidXRlIiwiaWQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJjb250cm9sbGVyIiwic2hvdyIsImNvbnRyb2xsZXIyIiwiRXJyb3IiLCJoaWRkZW4iLCJoaWRlIiwiaHlkcmF0ZSIsIiNoeWRyYXRlIiwibGF5b3V0Iiwia2V5cyIsIiNzdGFydCIsImRvbmUiLCJvbiIsIm1haW4iLCJsYXlvdXRzIiwiZ2V0Iiwic3NyMiIsIkV2ZW50VGFyZ2V0IiwiZGF0YSIsInBhcmVudHMiLCJjb25jYXQiLCJldmVudCIsIkV2ZW50IiwiZGlzcGF0Y2hFdmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsb0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxvQkFBQTtFQUFBRSxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUEsR0FBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBUCxvQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDQSxJQUFBUSxPQUFBLEdBQUFDLFFBQUE7SUFDQSxJQUFBQyxJQUFBLEdBQUFELFFBQUE7SUFJQSxJQUFJRSxPQUFBO0lBRUpDLGNBQUEsQ0FBZUMsTUFBQSxDQUNkLDBCQUNBLGNBQWNDLFdBQUEsQ0FBVztNQUN4QixDQUFBQyxRQUFBO01BQ0EsQ0FBQUMsTUFBQTtNQUVBQyxrQkFBQSxFQUFpQjtRQUNoQixLQUFLQyxZQUFBLENBQWE7VUFBRUMsSUFBQSxFQUFNO1FBQU0sQ0FBRTtRQUVsQyxNQUFNQyxPQUFBLEdBQVVBLENBQUEsS0FBSztVQUNwQixNQUFNQyxLQUFBLEdBQVFBLENBQUEsS0FBTSxLQUFLLENBQUFB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