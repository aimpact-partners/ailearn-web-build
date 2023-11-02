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

// .beyond/uimport/@beyond-js/widgets/layout.0.1.5.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0LjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9sYXlvdXQvX19zb3VyY2VzL2xheW91dC9jaGlsZHJlbi50cyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3dpZGdldHMvbGF5b3V0L19fc291cmNlcy9sYXlvdXQvc3NyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiX19iZXlvbmRfcGtnIiwiaG1yIiwic3NyIiwibW9kdWxlIiwibWFuYWdlciIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsImF0dGFjaFNoYWRvdyIsIm1vZGUiLCJtYW5hZ2VkIiwic3RhcnQiLCJjYXRjaCIsImV4YyIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiaW5pdGlhbGlzZWQiLCJyZWFkeSIsInRoZW4iLCJwYWdlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByb21pc2VzIiwicHVzaCIsImJpbXBvcnQiLCJzcGVjaWZpZXIiLCJnbG9iYWxUaGlzIiwiX19hcHBfcGFja2FnZSIsIlByb21pc2UiLCJhbGwiLCJyb3V0aW5nIiwibG9nIiwiY29udGFpbmVyIiwicGFyZW50Iiwicm9vdCIsImdldFJvb3ROb2RlIiwiZG9jdW1lbnQiLCJob3N0Iiwid2lkZ2V0cyIsImluc3RhbmNlcyIsImhhcyIsIiNvbnNzciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJlbGVtZW50IiwiaGllcmFyY2h5IiwibG9jYWxOYW1lIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwic2hhZG93Um9vdCIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsIiNyZW5kZXIiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsImZpbmQiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNldEF0dHJpYnV0ZSIsImFwcGVuZCIsImFjdGl2ZSIsImNvbnRyb2xsZXIiLCJzaG93IiwiRXJyb3IiLCJoaWRkZW4iLCJoaWRlIiwibGF5b3V0Iiwia2V5cyIsImRvbmUiLCJvbiIsIm1haW4iLCJsYXlvdXRzIiwiZ2V0IiwiRXZlbnRUYXJnZXQiLCJkYXRhIiwicGFyZW50cyIsImNvbmNhdCIsImV2ZW50IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQUE7RUFBQUM7RUFBQUM7RUFBQUM7QUFBQTtBQUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNDQTtJQUNBO0lBSUEsSUFBSUM7SUFFSkMsZUFBZUMsT0FBTywwQkFBMEIsY0FBY0MsWUFBVztNQUNyRTtNQUNBO01BRUFDLG9CQUFpQjtRQUNiLEtBQUtDLGFBQWE7VUFBQ0MsTUFBTTtRQUFNLENBQUM7UUFFaEMsTUFBTUMsVUFBVUEsTUFBSztVQUNqQixNQUFNQyxRQUFRQSxNQUFNLEtBQUssUUFBTSxDQUFHQyxNQUFNQyxPQUFPQyxRQUFRQyxNQUFNRixJQUFJRyxLQUFLLENBQUM7VUFDdkViLFFBQVFjLGNBQWNOLE9BQUssR0FBS1IsUUFBUWUsTUFBTUMsS0FBS1IsS0FBSztRQUM1RDtRQUdBLElBQUlSLFNBQVMsT0FBT08sU0FBTztRQUczQlQsU0FBSW1CLE9BQU8sS0FBSyxRQUFNLEdBQUtuQixTQUFJb0IsaUJBQWlCLFlBQVksS0FBSyxNQUFNO1FBRXZFLE1BQU1DLFdBQTJCO1FBQ2pDQSxTQUFTQyxLQUFLQyxRQUFRLDRCQUE0QixDQUFDO1FBQ25ERixTQUFTQyxLQUFLQyxRQUFRLHdCQUF3QixDQUFDO1FBRS9DLE1BQU07VUFBQ0M7UUFBUyxJQUFVQyxXQUFZQztRQUN0Q0wsU0FBU0MsS0FBS0MsUUFBUSxHQUFHQyxpQkFBaUIsQ0FBQztRQUUzQ0csUUFBUUMsSUFBSVAsUUFBUSxFQUFFSCxLQUFLLENBQUMsQ0FBQ1csT0FBTyxNQUFLO1VB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UUFDSixNQUFNO1VBQUNSO1FBQVEsSUFBSSxLQUFLSjtRQUN4QixNQUFNa0IsU0FBUyxLQUFLO1FBRXBCLElBQUksQ0FBQ2QsU0FBU0wsUUFBUTtRQUN0QixJQUFJSyxTQUFTTCxTQUFTLEdBQUc7VUFDckJsQyxRQUFRQyxNQUFNLCtEQUErRCxJQUFJO1VBQ2pGOztRQUVKc0MsU0FBUyxHQUFHTSxhQUFhLGlCQUFpQixDQUFDLEdBQUdRLE9BQU9kLFNBQVNlLE1BQU0sRUFBRSxFQUFFO01BQzVFO01BRUEsTUFBTSxTQUFNO1FBQ1JuRSxTQUFJeUMsb0JBQW9CLFlBQVksS0FBSyxNQUFNO1FBQy9DLElBQUksS0FBS1YsY0FBYyxNQUFNO1FBRTdCLE1BQU1xQyxPQUFRRixVQUFrQjtVQUM1QixLQUFLLFVBQVVBO1VBQ2YsS0FBSyxVQUFRO1VBQ2IsS0FBSyxRQUFRRyxHQUFHLFVBQVUsS0FBSyxPQUFPO1VBQ3RDLEtBQUssU0FBTztRQUNoQjtRQUdBLElBQUksS0FBS3RDLGNBQWNJLFVBQVUsT0FBT2lDLEtBQUtsRSxRQUFRb0UsSUFBSTtRQUd6RCxNQUFNO1VBQUMxQjtRQUFTLElBQWtCLEtBQUtiO1FBQ3ZDLElBQUlhLGNBQWMxQyxRQUFRb0UsS0FBSzVCLFNBQVMsT0FBTzBCLEtBQUtsRSxRQUFRb0UsSUFBSTtRQUdoRSxJQUFJLENBQUNwRSxRQUFRcUUsUUFBUWhDLElBQUlLLFNBQVMsR0FBRztVQUNqQy9CLFFBQVFDLE1BQU0sV0FBVzhCLHdCQUF3QixDQUFDLEdBQUcxQyxRQUFRcUUsT0FBTyxHQUFHckUsT0FBTztVQUM5RTs7UUFFSmtFLEtBQUtsRSxRQUFRcUUsUUFBUUMsSUFBSTVCLFNBQVMsQ0FBQztNQUN2QztLQUNIOzs7Ozs7Ozs7Ozs7SUM3S2lCLE1BQU01QyxPQUFNLElBQUksY0FBY3lFLFlBQVc7TUFFdkQ7TUFDQSxJQUFJSCxPQUFJO1FBQ0osT0FBTyxLQUFLO01BQ2hCO01BR0E7TUFDQSxJQUFJbkQsT0FBSTtRQUNKLE9BQU8sS0FBSztNQUNoQjtNQUdBO01BQ0EsSUFBSW9ELFVBQU87UUFDUCxPQUFPLEtBQUs7TUFDaEI7TUFJQSxhQUF1QjtNQUN2QixJQUFJNUIsWUFBUztRQUNULE9BQU8sS0FBSztNQUNoQjtNQUVBK0IsS0FBS0osTUFBY25ELE1BQWE7UUFDNUIsS0FBSyxRQUFRbUQ7UUFDYixLQUFLLFFBQVFuRCxLQUFLdUI7UUFDbEIsS0FBSyxXQUFXdkIsS0FBS3dEO1FBRXJCTCxRQUFRLEtBQUssV0FBV2hELEtBQUtnRCxJQUFJO1FBQ2pDbkQsS0FBS3dELFlBQVksS0FBSyxhQUFhLEtBQUssV0FBV0MsT0FBT3pELEtBQUt3RCxPQUFPO1FBQ3RFLEtBQUssV0FBV3JELEtBQUtILEtBQUt1QixPQUFPO1FBRWpDLE1BQU1tQyxRQUFRLElBQUlDLE1BQU0sVUFBVTtRQUNsQyxLQUFLQyxjQUFjRixLQUFLO01BQzVCO09BQ0g7SUFBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii9haWxlYXJuL2FwcC9vdXQifQ==