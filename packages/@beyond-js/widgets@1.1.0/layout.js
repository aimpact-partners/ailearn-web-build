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

// .beyond/uimport/temp/@beyond-js/widgets/layout.1.1.0.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQuMS4xLjAuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2xheW91dC9fX3NvdXJjZXMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9zc3IudHMiXSwibmFtZXMiOlsibGF5b3V0XzFfMV8wX2V4cG9ydHMiLCJfX2V4cG9ydCIsIl9fYmV5b25kX3BrZyIsImhtciIsInNzciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJfcmVuZGVyIiwicmVxdWlyZTIiLCJfc3NyIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJpbnN0YW5jZSIsImFjdGl2ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsIm1hbmFnZWQiLCJzdGFydCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJpbml0aWFsaXNlZCIsInJlYWR5IiwidGhlbiIsInBhZ2UiLCJvbnNzciIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9taXNlcyIsInB1c2giLCJiaW1wb3J0Iiwic3BlY2lmaWVyIiwiZ2xvYmFsVGhpcyIsIl9fYXBwX3BhY2thZ2UiLCJQcm9taXNlIiwiYWxsIiwicm91dGluZyIsImxvZyIsImNvbnRhaW5lciIsInBhcmVudCIsInJvb3QiLCJnZXRSb290Tm9kZSIsImRvY3VtZW50IiwiaG9zdCIsIndpZGdldHMiLCJpbnN0YW5jZXMiLCJoYXMiLCIjb25zc3IiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZWxlbWVudCIsImhpZXJhcmNoeSIsImxvY2FsTmFtZSIsImluZGV4IiwiaW5kZXhPZiIsImxlbmd0aCIsInNoYWRvd1Jvb3QiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJyZW5kZXIiLCIjcmVuZGVyIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJmaW5kIiwiZWxlbWVudDIiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImNvbnRyb2xsZXIiLCJzaG93IiwiY29udHJvbGxlcjIiLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJoeWRyYXRlIiwiI2h5ZHJhdGUiLCJsYXlvdXQiLCJrZXlzIiwiI3N0YXJ0IiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJzc3IyIiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxvQkFBQTtBQUFBQyxRQUFBLENBQUFELG9CQUFBO0VBQUFFLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQSxHQUFBO0VBQUFDLEdBQUEsRUFBQUEsQ0FBQSxLQUFBQTtBQUFBO0FBQUFDLE1BQUEsQ0FBQUMsT0FBQSxHQUFBQyxZQUFBLENBQUFQLG9CQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBLElBQUFRLE9BQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLElBQUEsR0FBQUQsUUFBQTtJQUlBLElBQUlFLE9BQUE7SUFFSkMsY0FBQSxDQUFlQyxNQUFBLENBQ2QsMEJBQ0EsY0FBY0MsV0FBQSxDQUFXO01BQ3hCLENBQUFDLFFBQUE7TUFDQSxDQUFBQyxNQUFBO01BRUFDLGtCQUFBLEVBQWlCO1FBQ2hCLEtBQUtDLFlBQUEsQ0FBYTtVQUFFQyxJQUFBLEVBQU07UUFBTSxDQUFFO1FBRWxDLE1BQU1DLE9BQUEsR0FBVUEsQ0FBQSxLQUFLO1VBQ3BCLE1BQU1DLEtBQUEsR0FBUUEsQ0FBQSxLQUFNLEtBQUss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