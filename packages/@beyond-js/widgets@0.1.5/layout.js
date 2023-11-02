System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/layout.0.1.5.js
var layout_0_1_5_exports = {};
__export(layout_0_1_5_exports, {
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr,
  ssr: () => ssr
});
module.exports = __toCommonJS(layout_0_1_5_exports);

// node_modules/@beyond-js/widgets/layout/layout.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@0.1.5/render"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/layout"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/render", dependency_1]]);
var ims = /* @__PURE__ */new Map();
ims.set("./children", {
  hash: 1491145116,
  creator: function (require2, exports) {
    "use strict";

    var _render = require2("@beyond-js/widgets/render");
    var _ssr = require2("./ssr");
    let manager;
    customElements.define("beyond-layout-children", class extends HTMLElement {
      #layout;
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
        this.#layout.children.forEach(child => {
          const {
            children
          } = this.shadowRoot;
          let element = [...children].find(element2 => element2.getAttribute("data-child-id") === child.id);
          if (!element) {
            element = document.createElement(child.element);
            element.setAttribute("data-child-id", child.id);
            this.shadowRoot.append(element);
          }
          const active = this.#layout.active === child;
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
        const layout = this.#layout;
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
          this.#layout = layout;
          this.#hydrate();
          this.#layout.on("change", this.#render);
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
  hash: 2390596202,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ssr = void 0;
    const ssr2 = new class extends EventTarget {
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
    exports.ssr = ssr2;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQuMC4xLjUuanMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2xheW91dC9fX3NvdXJjZXMvbGF5b3V0L2NoaWxkcmVuLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9zc3IudHMiXSwibmFtZXMiOlsiX19leHBvcnQiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJzc3IiLCJtb2R1bGUiLCJtYW5hZ2VyIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJIVE1MRWxlbWVudCIsImNvbm5lY3RlZENhbGxiYWNrIiwiYXR0YWNoU2hhZG93IiwibW9kZSIsIm1hbmFnZWQiLCJzdGFydCIsImNhdGNoIiwiZXhjIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJpbml0aWFsaXNlZCIsInJlYWR5IiwidGhlbiIsInBhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvbWlzZXMiLCJwdXNoIiwiYmltcG9ydCIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiUHJvbWlzZSIsImFsbCIsInJvdXRpbmciLCJsb2ciLCJjb250YWluZXIiLCJwYXJlbnQiLCJyb290IiwiZ2V0Um9vdE5vZGUiLCJkb2N1bWVudCIsImhvc3QiLCJ3aWRnZXRzIiwiaW5zdGFuY2VzIiwiaGFzIiwiI29uc3NyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImVsZW1lbnQiLCJoaWVyYXJjaHkiLCJsb2NhbE5hbWUiLCJpbmRleCIsImluZGV4T2YiLCJsZW5ndGgiLCJzaGFkb3dSb290IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiI3JlbmRlciIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiZmluZCIsImdldEF0dHJpYnV0ZSIsImlkIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiYWN0aXZlIiwiY29udHJvbGxlciIsInNob3ciLCJFcnJvciIsImhpZGRlbiIsImhpZGUiLCJsYXlvdXQiLCJrZXlzIiwiZG9uZSIsIm9uIiwibWFpbiIsImxheW91dHMiLCJnZXQiLCJFdmVudFRhcmdldCIsImRhdGEiLCJwYXJlbnRzIiwiY29uY2F0IiwiZXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0NBO0lBQ0E7SUFJQSxJQUFJQztJQUVKQyxlQUFlQyxPQUFPLDBCQUEwQixjQUFjQyxZQUFXO01BQ3JFO01BQ0E7TUFFQUMsb0JBQWlCO1FBQ2IsS0FBS0MsYUFBYTtVQUFDQyxNQUFNO1FBQU0sQ0FBQztRQUVoQyxNQUFNQyxVQUFVQSxNQUFLO1VBQ2pCLE1BQU1DLFFBQVFBLE1BQU0sS0FBSyxRQUFNLENBQUdDLE1BQU1DLE9BQU9DLFFBQVFDLE1BQU1GLElBQUlHLEtBQUssQ0FBQztVQUN2RWIsUUFBUWMsY0FBY04sT0FBSyxHQUFLUixRQUFRZSxNQUFNQyxLQUFLUixLQUFLO1FBQzVEO1FBR0EsSUFBSVIsU0FBUyxPQUFPTyxTQUFPO1FBRzNCVCxTQUFJbUIsT0FBTyxLQUFLLFFBQU0sR0FBS25CLFNBQUlvQixpQkFBaUIsWUFBWSxLQUFLLE1BQU07UUFFdkUsTUFBTUMsV0FBMkI7UUFDakNBLFNBQVNDLEtBQUtDLFFBQVEsNEJBQTRCLENBQUM7UUFDbkRGLFNBQVNDLEtBQUtDLFFBQVEsd0JBQXdCLENBQUM7UUFFL0MsTUFBTTtVQUFDQztRQUFTLElBQVVDLFdBQVlDO1FBQ3RDTCxTQUFTQyxLQUFLQyxRQUFRLEdBQUdDLGlCQUFpQixDQUFDO1FBRTNDRyxRQUFRQyxJQUFJUCxRQUFRLEVBQUVILEtBQUssQ0FBQyxDQUFDVyxPQUFPLE1B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V0FBUTtRQUNKLE1BQU07VUFBQ1I7UUFBUSxJQUFJLEtBQUtKO1FBQ3hCLE1BQU1rQixTQUFTLEtBQUs7UUFFcEIsSUFBSSxDQUFDZCxTQUFTTCxRQUFRO1FBQ3RCLElBQUlLLFNBQVNMLFNBQVMsR0FBRztVQUNyQmxDLFFBQVFDLE1BQU0sK0RBQStELElBQUk7VUFDakY7O1FBRUpzQyxTQUFTLEdBQUdNLGFBQWEsaUJBQWlCLENBQUMsR0FBR1EsT0FBT2QsU0FBU2UsTUFBTSxFQUFFLEVBQUU7TUFDNUU7TUFFQSxNQUFNLFNBQU07UUFDUm5FLFNBQUl5QyxvQkFBb0IsWUFBWSxLQUFLLE1BQU07UUFDL0MsSUFBSSxLQUFLVixjQUFjLE1BQU07UUFFN0IsTUFBTXFDLE9BQVFGLFVBQWtCO1VBQzVCLEtBQUssVUFBVUE7VUFDZixLQUFLLFVBQVE7VUFDYixLQUFLLFFBQVFHLEdBQUcsVUFBVSxLQUFLLE9BQU87VUFDdEMsS0FBSyxTQUFPO1FBQ2hCO1FBR0EsSUFBSSxLQUFLdEMsY0FBY0ksVUFBVSxPQUFPaUMsS0FBS2xFLFFBQVFvRSxJQUFJO1FBR3pELE1BQU07VUFBQzFCO1FBQVMsSUFBa0IsS0FBS2I7UUFDdkMsSUFBSWEsY0FBYzFDLFFBQVFvRSxLQUFLNUIsU0FBUyxPQUFPMEIsS0FBS2xFLFFBQVFvRSxJQUFJO1FBR2hFLElBQUksQ0FBQ3BFLFFBQVFxRSxRQUFRaEMsSUFBSUssU0FBUyxHQUFHO1VBQ2pDL0IsUUFBUUMsTUFBTSxXQUFXOEIsd0JBQXdCLENBQUMsR0FBRzFDLFFBQVFxRSxPQUFPLEdBQUdyRSxPQUFPO1VBQzlFOztRQUVKa0UsS0FBS2xFLFFBQVFxRSxRQUFRQyxJQUFJNUIsU0FBUyxDQUFDO01BQ3ZDO0tBQ0g7Ozs7Ozs7Ozs7OztJQzdLaUIsTUFBTTVDLE9BQU0sSUFBSSxjQUFjeUUsWUFBVztNQUV2RDtNQUNBLElBQUlILE9BQUk7UUFDSixPQUFPLEtBQUs7TUFDaEI7TUFHQTtNQUNBLElBQUluRCxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BR0E7TUFDQSxJQUFJb0QsVUFBTztRQUNQLE9BQU8sS0FBSztNQUNoQjtNQUlBLGFBQXVCO01BQ3ZCLElBQUk1QixZQUFTO1FBQ1QsT0FBTyxLQUFLO01BQ2hCO01BRUErQixLQUFLSixNQUFjbkQsTUFBYTtRQUM1QixLQUFLLFFBQVFtRDtRQUNiLEtBQUssUUFBUW5ELEtBQUt1QjtRQUNsQixLQUFLLFdBQVd2QixLQUFLd0Q7UUFFckJMLFFBQVEsS0FBSyxXQUFXaEQsS0FBS2dELElBQUk7UUFDakNuRCxLQUFLd0QsWUFBWSxLQUFLLGFBQWEsS0FBSyxXQUFXQyxPQUFPekQsS0FBS3dELE9BQU87UUFDdEUsS0FBSyxXQUFXckQsS0FBS0gsS0FBS3VCLE9BQU87UUFFakMsTUFBTW1DLFFBQVEsSUFBSUMsTUFBTSxVQUFVO1FBQ2xDLEtBQUtDLGNBQWNGLEtBQUs7TUFDNUI7T0FDSDtJQUFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiL2FpbGVhcm4vYXBwL291dCJ9