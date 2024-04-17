System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","1.1.0"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/controller.1.1.0.js
var controller_1_1_0_exports = {};
__export(controller_1_1_0_exports, {
  IPageWidgetController: () => IPageWidgetController,
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_1_1_0_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@1.1.0/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@1.1.0/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 424385520,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetAttributes = void 0;
    var _core = require2("@beyond-js/kernel/core");
    class WidgetAttributes2 extends Map {
      #widget;
      #events = new _core.Events();
      on = (event, listener) => this.#events.on(event, listener);
      off = (event, listener) => this.#events.off(event, listener);
      constructor(widget) {
        super();
        this.#widget = widget;
        let attrs = widget.specs.attrs;
        attrs?.forEach(attr => this.set(attr, widget.getAttribute(attr)));
      }
      change(name, old, value) {
        this.set(name, value);
        this.#events.trigger("change");
        this.#events.trigger(`${name}:change`, value);
      }
    }
    exports.WidgetAttributes = WidgetAttributes2;
  }
});
ims.set("./client", {
  hash: 672542094,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetClientController = void 0;
    var _controller = require2("./controller");
    var _attributes = require2("./attributes");
    var _bundle = require2("@beyond-js/kernel/bundle");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetClientController2 extends _controller.WidgetControllerBase {
      #widget;
      get widget() {
        return this.#widget;
      }
      #store;
      get store() {
        return this.#store;
      }
      #attributes;
      get attributes() {
        return this.#attributes;
      }
      attributeChanged(name, old, value) {
        this.#attributes.change(name, old, value);
      }
      get styles() {
        const styles = this.#widget.styles;
        return styles;
      }
      constructor(widget) {
        super({
          widget
        });
        this.#widget = widget;
        this.#attributes = new _attributes.WidgetAttributes(widget);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        const links = () => [...styles.elements].map(style => style.href);
        !this.styles.initialised && this.styles.initialise(links());
        styles.on("change", () => this.styles.update(links()));
      }
      render() {
        try {
          this.mount();
        } catch (exc) {
          console.log(`Error mounting widget controller "${this.#widget.localName}":`);
          console.log(exc.stack);
        }
      }
      refresh() {
        this.unmount();
        this.render();
      }
      #refresh = () => this.refresh();
      disconnect() {
        this.unmount();
      }
      async initialise() {
        if (!this.Widget) {
          throw new Error(`The return value of the Widget property is undefined. "${this.#widget.localName}" widget`);
        }
        this.#store = this.createStore?.();
        const prerender = this.#widget.ssr.prerender;
        if (prerender) {
          const cached = prerender?.store;
          await this.#store?.hydrate(cached);
        }
        this.#store?.fetch?.();
        this.render();
        if (!_bundle.instances.has(this.specs.vspecifier)) {
          console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.
If the problem still persist, delete the BeyondJS cache and try again.`);
          return;
        }
        const pkg = _bundle.instances.get(this.specs.vspecifier).package();
        pkg.hmr.on("change", this.#refresh);
      }
    }
    exports.WidgetClientController = WidgetClientController2;
  }
});
ims.set("./controller", {
  hash: 1553543307,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetControllerBase = void 0;
    var _render = require2("@beyond-js/widgets/render");
    class WidgetControllerBase2 {
      #specs;
      get specs() {
        return this.#specs;
      }
      get element() {
        return this.#specs.name;
      }
      get is() {
        return this.#specs.is;
      }
      get route() {
        return this.#specs.route;
      }
      get layout() {
        return this.#specs.layout;
      }
      #pkg;
      get pkg() {
        return this.#pkg;
      }
      get Widget() {
        return;
      }
      createStore(language) {
        return void 0;
      }
      constructor({
        specs,
        widget
      }) {
        if (!specs) {
          const {
            localName
          } = widget;
          if (!_render.widgets.has(localName)) throw new Error(`Widget name "${localName}" is not registered`);
          specs = _render.widgets.get(localName);
        }
        this.#pkg = (() => {
          const split = specs.vspecifier.split("/");
          const scope = split[0].startsWith("@") ? split.shift() : void 0;
          const [name] = split.shift().split("@");
          return scope ? `${scope}/${name}` : name;
        })();
        this.#specs = specs;
      }
    }
    exports.WidgetControllerBase = WidgetControllerBase2;
  }
});
ims.set("./ssr", {
  hash: 2493457565,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.WidgetServerController = void 0;
    var _controller = require2("./controller");
    var _styles = require2("@beyond-js/kernel/styles");
    class WidgetServerController2 extends _controller.WidgetControllerBase {
      #styles = [];
      get styles() {
        return this.#styles;
      }
      constructor(params) {
        super(params);
        const styles = new _styles.DependenciesStyles(this.specs.vspecifier);
        styles.elements.forEach(({
          href
        }) => this.#styles.push(href));
        this.#styles.unshift(`##_!${this.pkg}!_##global.css`);
      }
    }
    exports.WidgetServerController = WidgetServerController2;
  }
});
__pkg.exports.descriptor = [{
  "im": "./attributes",
  "from": "WidgetAttributes",
  "name": "WidgetAttributes"
}, {
  "im": "./client",
  "from": "WidgetClientController",
  "name": "WidgetClientController"
}, {
  "im": "./controller",
  "from": "IPageWidgetController",
  "name": "IPageWidgetController"
}, {
  "im": "./controller",
  "from": "IWidgetStore",
  "name": "IWidgetStore"
}, {
  "im": "./controller",
  "from": "WidgetControllerBase",
  "name": "WidgetControllerBase"
}, {
  "im": "./ssr",
  "from": "IWidgetRendered",
  "name": "IWidgetRendered"
}, {
  "im": "./ssr",
  "from": "WidgetServerController",
  "name": "WidgetServerController"
}];
var WidgetAttributes, WidgetClientController, IPageWidgetController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
  (require2 || prop === "IPageWidgetController") && (IPageWidgetController = require2 ? require2("./controller").IPageWidgetController : value);
  (require2 || prop === "IWidgetStore") && (IWidgetStore = require2 ? require2("./controller").IWidgetStore : value);
  (require2 || prop === "WidgetControllerBase") && (WidgetControllerBase = require2 ? require2("./controller").WidgetControllerBase : value);
  (require2 || prop === "IWidgetRendered") && (IWidgetRendered = require2 ? require2("./ssr").IWidgetRendered : value);
  (require2 || prop === "WidgetServerController") && (WidgetServerController = require2 ? require2("./ssr").WidgetServerController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjEuMS4wLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvc3NyLnRzIl0sIm5hbWVzIjpbImNvbnRyb2xsZXJfMV8xXzBfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVBhZ2VXaWRnZXRDb250cm9sbGVyIiwiSVdpZGdldFJlbmRlcmVkIiwiSVdpZGdldFN0b3JlIiwiV2lkZ2V0QXR0cmlidXRlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJleHBvcnRzIiwiX190b0NvbW1vbkpTIiwiX2NvcmUiLCJyZXF1aXJlMiIsIldpZGdldEF0dHJpYnV0ZXMyIiwiTWFwIiwid2lkZ2V0IiwiZXZlbnRzIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiX2NvbnRyb2xsZXIiLCJfYXR0cmlidXRlcyIsIl9idW5kbGUiLCJfc3R5bGVzIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlcjIiLCJzdG9yZSIsImF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVDaGFuZ2VkIiwic3R5bGVzIiwiRGVwZW5kZW5jaWVzU3R5bGVzIiwidnNwZWNpZmllciIsImxpbmtzIiwiZWxlbWVudHMiLCJtYXAiLCJzdHlsZSIsImhyZWYiLCJpbml0aWFsaXNlZCIsImluaXRpYWxpc2UiLCJ1cGRhdGUiLCJyZW5kZXIiLCJtb3VudCIsImV4YyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbE5hbWUiLCJzdGFjayIsInJlZnJlc2giLCJ1bm1vdW50IiwiI3JlZnJlc2giLCJkaXNjb25uZWN0IiwiV2lkZ2V0IiwiRXJyb3IiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImluc3RhbmNlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJfcmVuZGVyIiwiV2lkZ2V0Q29udHJvbGxlckJhc2UyIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJzcGxpdCIsInNjb3BlIiwic3RhcnRzV2l0aCIsInNoaWZ0IiwiV2lkZ2V0U2VydmVyQ29udHJvbGxlcjIiLCJwYXJhbXMiLCJwdXNoIiwidW5zaGlmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsd0JBQUE7QUFBQUMsUUFBQSxDQUFBRCx3QkFBQTtFQUFBRSxxQkFBQSxFQUFBQSxDQUFBLEtBQUFBLHFCQUFBO0VBQUFDLGVBQUEsRUFBQUEsQ0FBQSxLQUFBQSxlQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsc0JBQUEsRUFBQUEsQ0FBQSxLQUFBQSxzQkFBQTtFQUFBQyxvQkFBQSxFQUFBQSxDQUFBLEtBQUFB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T0FBTyxLQUFLLENBQUFBLEdBQUE7TUFDYjtNQUlBLElBQUlWLE9BQUEsRUFBTTtRQUNUO01BQ0Q7TUFFQUUsWUFBWWlCLFFBQUEsRUFBaUI7UUFDNUIsT0FBTztNQUNSO01BVUE3RCxZQUFzQjtRQUFFRSxLQUFBO1FBQU9UO01BQU0sR0FBa0Q7UUFDdEYsSUFBSSxDQUFDUyxLQUFBLEVBQU87VUFDWCxNQUFNO1lBQUVrQztVQUFTLElBQUszQyxNQUFBO1VBQ3RCLElBQUksQ0FBQzhELE9BQUEsQ0FBQU8sT0FBQSxDQUFRWCxHQUFBLENBQUlmLFNBQVMsR0FBRyxNQUFNLElBQUlPLEtBQUEsQ0FBTSxnQkFBZ0JQLFNBQUEscUJBQThCO1VBQzNGbEMsS0FBQSxHQUFRcUQsT0FBQSxDQUFBTyxPQUFBLENBQVFULEdBQUEsQ0FBSWpCLFNBQVM7O1FBRzlCLEtBQUssQ0FBQWdCLEdBQUEsSUFBUSxNQUFLO1VBQ2pCLE1BQU1XLEtBQUEsR0FBUTdELEtBQUEsQ0FBTW9CLFVBQUEsQ0FBV3lDLEtBQUEsQ0FBTSxHQUFHO1VBQ3hDLE1BQU1DLEtBQUEsR0FBUUQsS0FBQSxDQUFNLEdBQUdFLFVBQUEsQ0FBVyxHQUFHLElBQUlGLEtBQUEsQ0FBTUcsS0FBQSxDQUFLLElBQUs7VUFDekQsTUFBTSxDQUFDMUQsSUFBSSxJQUFJdUQsS0FBQSxDQUFNRyxLQUFBLENBQUssRUFBR0gsS0FBQSxDQUFNLEdBQUc7VUFDdEMsT0FBT0MsS0FBQSxHQUFRLEdBQUdBLEtBQUEsSUFBU3hELElBQUEsS0FBU0EsSUFBQTtRQUNyQyxHQUFFO1FBRUYsS0FBSyxDQUFBTixLQUFBLEdBQVNBLEtBQUE7TUFDZjs7SUFDQWYsT0FBQSxDQUFBTCxvQkFBQSxHQUFBMEUscUJBQUE7Ozs7Ozs7Ozs7OztJQ3RGRCxJQUFBNUMsV0FBQSxHQUFBdEIsUUFBQTtJQUNBLElBQUF5QixPQUFBLEdBQUF6QixRQUFBO0lBZ0JpQixNQUNGNkUsdUJBQUEsU0FBK0J2RCxXQUFBLENBQUE5QixvQkFBQSxDQUFvQjtNQUN4RCxDQUFBc0MsTUFBQSxHQUFvQjtNQUM3QixJQUFJQSxPQUFBLEVBQU07UUFDVCxPQUFPLEtBQUssQ0FBQUEsTUFBQTtNQUNiO01BRUFwQixZQUFzQm9FLE1BQUEsRUFBc0Q7UUFDM0UsTUFBTUEsTUFBTTtRQUNaLE1BQU1oRCxNQUFBLEdBQVMsSUFBSUwsT0FBQSxDQUFBTSxrQkFBQSxDQUFtQixLQUFLbkIsS0FBQSxDQUFNb0IsVUFBVTtRQUMzREYsTUFBQSxDQUFPSSxRQUFBLENBQVNyQixPQUFBLENBQVEsQ0FBQztVQUFFd0I7UUFBSSxNQUF5QixLQUFLLENBQUFQLE1BQUEsQ0FBUWlELElBQUEsQ0FBSzFDLElBQUksQ0FBQztRQUUvRSxLQUFLLENBQUFQLE1BQUEsQ0FBUWtELE9BQUEsQ0FBUSxPQUFPLEtBQUtsQixHQUFBLGdCQUFtQjtNQUNyRDs7SUFHQWpFLE9BQUEsQ0FBQUosc0JBQUEsR0FBQW9GLHVCQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvYXBwL291dCJ9