System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@0.1.5/render","@beyond-js/kernel@0.1.9/styles"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","0.1.5"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@0.1.5/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep)],
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

// .beyond/uimport/temp/@beyond-js/widgets/controller.0.1.5.js
var controller_0_1_5_exports = {};
__export(controller_0_1_5_exports, {
  IWidgetRendered: () => IWidgetRendered,
  IWidgetStore: () => IWidgetStore,
  WidgetAttributes: () => WidgetAttributes,
  WidgetClientController: () => WidgetClientController,
  WidgetControllerBase: () => WidgetControllerBase,
  WidgetServerController: () => WidgetServerController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(controller_0_1_5_exports);

// node_modules/@beyond-js/widgets/controller/controller.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/kernel@0.1.9/core"), 0);
var dependency_2 = __toESM(require("@beyond-js/widgets@0.1.5/render"), 0);
var dependency_3 = __toESM(require("@beyond-js/kernel@0.1.9/styles"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/widgets@0.1.5/controller"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/kernel/core", dependency_1], ["@beyond-js/widgets/render", dependency_2], ["@beyond-js/kernel/styles", dependency_3]]);
var ims = /* @__PURE__ */new Map();
ims.set("./attributes", {
  hash: 3176328789,
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
  hash: 2102509577,
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
  hash: 3835813087,
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
  hash: 1515978368,
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
var WidgetAttributes, WidgetClientController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "WidgetAttributes") && (WidgetAttributes = require2 ? require2("./attributes").WidgetAttributes : value);
  (require2 || prop === "WidgetClientController") && (WidgetClientController = require2 ? require2("./client").WidgetClientController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyLjAuMS41LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2F0dHJpYnV0ZXMudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvY2xpZW50LnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvd2lkZ2V0cy9jb250cm9sbGVyL19fc291cmNlcy9jb250cm9sbGVyL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy93aWRnZXRzL2NvbnRyb2xsZXIvX19zb3VyY2VzL2NvbnRyb2xsZXIvc3NyLnRzIl0sIm5hbWVzIjpbIl9fZXhwb3J0IiwiSVdpZGdldFJlbmRlcmVkIiwiSVdpZGdldFN0b3JlIiwiV2lkZ2V0QXR0cmlidXRlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsIldpZGdldFNlcnZlckNvbnRyb2xsZXIiLCJfX2JleW9uZF9wa2ciLCJobXIiLCJtb2R1bGUiLCJNYXAiLCJFdmVudHMiLCJvbiIsImV2ZW50IiwibGlzdGVuZXIiLCJvZmYiLCJjb25zdHJ1Y3RvciIsIndpZGdldCIsImF0dHJzIiwic3BlY3MiLCJmb3JFYWNoIiwiYXR0ciIsInNldCIsImdldEF0dHJpYnV0ZSIsImNoYW5nZSIsIm5hbWUiLCJvbGQiLCJ2YWx1ZSIsInRyaWdnZXIiLCJleHBvcnRzIiwic3RvcmUiLCJhdHRyaWJ1dGVzIiwiYXR0cmlidXRlQ2hhbmdlZCIsInN0eWxlcyIsIkRlcGVuZGVuY2llc1N0eWxlcyIsInZzcGVjaWZpZXIiLCJsaW5rcyIsImVsZW1lbnRzIiwibWFwIiwic3R5bGUiLCJocmVmIiwiaW5pdGlhbGlzZWQiLCJpbml0aWFsaXNlIiwidXBkYXRlIiwicmVuZGVyIiwibW91bnQiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJyZWZyZXNoIiwidW5tb3VudCIsIiNyZWZyZXNoIiwiZGlzY29ubmVjdCIsIldpZGdldCIsIkVycm9yIiwiY3JlYXRlU3RvcmUiLCJwcmVyZW5kZXIiLCJzc3IiLCJjYWNoZWQiLCJoeWRyYXRlIiwiZmV0Y2giLCJidW5kbGVzIiwiaGFzIiwicGtnIiwiZ2V0IiwicGFja2FnZSIsImVsZW1lbnQiLCJpcyIsInJvdXRlIiwibGF5b3V0IiwibGFuZ3VhZ2UiLCJ3aWRnZXRzIiwic3BsaXQiLCJzY29wZSIsInN0YXJ0c1dpdGgiLCJzaGlmdCIsInBhcmFtcyIsInB1c2giLCJ1bnNoaWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBQTtFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztFQUFBQztBQUFBO0FBQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBRWlCLE1BQ1hOLDBCQUF5Qk8sSUFBRztNQUU5QjtNQUVBLFVBQVUsSUFBSUMsY0FBTTtNQUNwQkMsS0FBS0EsQ0FBQ0MsT0FBZUMsYUFBa0IsS0FBSyxRQUFRRixHQUFHQyxPQUFPQyxRQUFRO01BQ3RFQyxNQUFNQSxDQUFDRixPQUFlQyxhQUFrQixLQUFLLFFBQVFDLElBQUlGLE9BQU9DLFFBQVE7TUFFeEVFLFlBQVlDLFFBQW1CO1FBQzNCLE9BQUs7UUFDTCxLQUFLLFVBQVVBO1FBRWYsSUFBSUMsUUFBd0JELE9BQVFFLE1BQU1EO1FBQzFDQSxPQUFPRSxRQUFRQyxRQUFRLEtBQUtDLElBQUlELE1BQU1KLE9BQU9NLGFBQWFGLElBQUksQ0FBQyxDQUFDO01BQ3BFO01BRUFHLE9BQU9DLE1BQWNDLEtBQWFDLE9BQWE7UUFDM0MsS0FBS0wsSUFBSUcsTUFBTUUsS0FBSztRQUNwQixL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