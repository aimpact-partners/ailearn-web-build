System.register(["@beyond-js/kernel@0.1.9/bundle","@beyond-js/kernel@0.1.9/core","@beyond-js/widgets@1.1.0/render","@beyond-js/kernel@0.1.9/styles","@beyond-js/widgets@1.1.0/controller","react@18.2.0","scheduler@0.23.0","react-dom@18.2.0","react-dom@18.2.0/client","@beyond-js/kernel@0.1.9/routing","@beyond-js/events@0.0.7/events","@beyond-js/widgets@1.1.0/routing"], (_exports, _context) => {

const bimport = specifier => {
	const dependencies = new Map([["@beyond-js/kernel","0.1.9"],["@beyond-js/widgets","1.1.0"],["react","18.2.0"],["scheduler","0.23.0"],["react-dom","18.2.0"],["@beyond-js/events","0.0.7"],["@beyond-js/react-18-widgets","1.1.1"]]);
	return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
};


var dependencies = new Map();
var require = dependency => dependencies.get(dependency);
return {
setters: [dep => dependencies.set('@beyond-js/kernel@0.1.9/bundle', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/core', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/render', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/styles', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/controller', dep), dep => dependencies.set('react@18.2.0', dep), dep => dependencies.set('scheduler@0.23.0', dep), dep => dependencies.set('react-dom@18.2.0', dep), dep => dependencies.set('react-dom@18.2.0/client', dep), dep => dependencies.set('@beyond-js/kernel@0.1.9/routing', dep), dep => dependencies.set('@beyond-js/events@0.0.7/events', dep), dep => dependencies.set('@beyond-js/widgets@1.1.0/routing', dep)],
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

// .beyond/uimport/@beyond-js/react-18-widgets/base.1.1.1.js
var base_1_1_1_exports = {};
__export(base_1_1_1_exports, {
  IPageWidgetProps: () => IPageWidgetProps,
  IWidgetProps: () => IWidgetProps,
  ReactWidgetController: () => ReactWidgetController,
  __beyond_pkg: () => __beyond_pkg,
  hmr: () => hmr
});
module.exports = __toCommonJS(base_1_1_1_exports);

// node_modules/@beyond-js/react-18-widgets/base/base.browser.mjs
var dependency_0 = __toESM(require("@beyond-js/kernel@0.1.9/bundle"), 0);
var dependency_1 = __toESM(require("@beyond-js/widgets@1.1.0/controller"), 0);
var dependency_2 = __toESM(require("react@18.2.0"), 0);
var dependency_3 = __toESM(require("react-dom@18.2.0/client"), 0);
var dependency_4 = __toESM(require("@beyond-js/widgets@1.1.0/routing"), 0);
var import_meta = {};
var {
  Bundle: __Bundle
} = dependency_0;
var __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-js/react-18-widgets@1.1.1/base"
  },
  "type": "ts"
}, _context.meta.url).package();
;
__pkg.dependencies.update([["@beyond-js/widgets/controller", dependency_1], ["react", dependency_2], ["react-dom/client", dependency_3], ["@beyond-js/widgets/routing", dependency_4]]);
var ims = /* @__PURE__ */new Map();
ims.set("./controller", {
  hash: 2748202980,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ReactWidgetController = void 0;
    var React = require2("react");
    var _client = require2("react-dom/client");
    var _controller = require2("@beyond-js/widgets/controller");
    var _widget = require2("./widget");
    var _wrapper = require2("./wrapper");
    class ReactWidgetController2 extends _controller.WidgetClientController {
      #wrapper;
      #root;
      #mounted = false;
      get mounted() {
        return this.#mounted;
      }
      get Widget() {
        return null;
      }
      mount(props) {
        if (this.#mounted) return;
        this.#mounted = true;
        if (!this.Widget) {
          return {
            errors: [`Widget "${this.element}" does not export a Widget class`]
          };
        }
        props = Object.assign({
          widget: this.widget,
          attributes: this.attributes,
          component: this.widget,
          store: this.store
        }, props ? props : {});
        const holder = this.widget.holder;
        const hydrate = !!holder.children.length;
        try {
          const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
          const {
            styles,
            widget
          } = this;
          const {
            holder: holder2
          } = widget;
          const p = {
            wrapper,
            props,
            styles,
            holder: holder2,
            hydrate
          };
          const element = React.createElement(_widget.default, p);
          if (hydrate) {
            this.#root = (0, _client.hydrateRoot)(holder2, element);
          } else {
            const root = this.#root = (0, _client.createRoot)(holder2);
            root.render(element);
          }
        } catch (exc) {
          console.log(`Error rendering widget "${this.widget.localName}":`);
          console.log(exc.stack);
        }
      }
      unmount() {
        if (!this.#mounted) return;
        this.#mounted = false;
        this.#root.unmount();
      }
      refresh() {
        this.#wrapper.changed();
      }
    }
    exports.ReactWidgetController = ReactWidgetController2;
  }
});
ims.set("./styles", {
  hash: 3367909987,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    function _default({
      styles
    }) {
      const rs = React.useState(0);
      React.useEffect(() => {
        const refresh = () => rs[1](prev => prev + 1);
        styles.on("change", refresh);
        return () => styles.off("change", refresh) && void 0;
      }, []);
      const head = [...styles.resources].map(url => {
        const loaded = () => styles.onloaded(url);
        return React.createElement("link", {
          key: url,
          href: url,
          rel: "stylesheet",
          onLoad: loaded,
          onError: loaded
        });
      });
      return React.createElement(React.Fragment, null, head);
    }
  }
});
ims.set("./widget", {
  hash: 2641106731,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _default;
    var React = require2("react");
    var _styles = require2("./styles");
    function _default({
      wrapper,
      props,
      styles,
      holder,
      hydrate
    }) {
      const elements = [];
      elements.push(React.createElement(_styles.default, {
        key: "styles",
        styles,
        widget: props.widget
      }));
      const rs = React.useState(0);
      const refresh = () => rs[1](rs[0] + 1);
      wrapper.changed = refresh;
      const loaded = (() => {
        !styles.loaded && styles.ready.then(refresh);
        holder.style.display = "";
        return styles.loaded;
      })();
      const {
        Widget
      } = wrapper;
      const widget = React.createElement(Widget, {
        key: "widget",
        ...props
      });
      (hydrate || loaded) && elements.push(widget);
      return React.createElement(React.Fragment, null, elements);
    }
  }
});
ims.set("./wrapper", {
  hash: 4085792261,
  creator: function (require2, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Wrapper = void 0;
    class Wrapper {
      #Widget;
      get Widget() {
        return this.#Widget.Widget;
      }
      changed = () => void 0;
      constructor(Widget) {
        this.#Widget = Widget;
      }
    }
    exports.Wrapper = Wrapper;
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "IWidgetProps",
  "name": "IWidgetProps"
}, {
  "im": "./controller",
  "from": "IPageWidgetProps",
  "name": "IPageWidgetProps"
}, {
  "im": "./controller",
  "from": "ReactWidgetController",
  "name": "ReactWidgetController"
}];
var IWidgetProps, IPageWidgetProps, ReactWidgetController;
__pkg.exports.process = function ({
  require: require2,
  prop,
  value
}) {
  (require2 || prop === "IWidgetProps") && (IWidgetProps = require2 ? require2("./controller").IWidgetProps : value);
  (require2 || prop === "IPageWidgetProps") && (IPageWidgetProps = require2 ? require2("./controller").IPageWidgetProps : value);
  (require2 || prop === "ReactWidgetController") && (ReactWidgetController = require2 ? require2("./controller").ReactWidgetController : value);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS4xLjEuMS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS9jb250cm9sbGVyLnRzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3N0eWxlcy50c3giLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvd2lkZ2V0LnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93cmFwcGVyLnRzIl0sIm5hbWVzIjpbImJhc2VfMV8xXzFfZXhwb3J0cyIsIl9fZXhwb3J0IiwiSVBhZ2VXaWRnZXRQcm9wcyIsIklXaWRnZXRQcm9wcyIsIlJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIl9fYmV5b25kX3BrZyIsImhtciIsIm1vZHVsZSIsImV4cG9ydHMiLCJfX3RvQ29tbW9uSlMiLCJSZWFjdCIsInJlcXVpcmUyIiwiX2NsaWVudCIsIl9jb250cm9sbGVyIiwiX3dpZGdldCIsIl93cmFwcGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyMiIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJ3cmFwcGVyIiwicm9vdCIsIm1vdW50ZWQiLCJXaWRnZXQiLCJtb3VudCIsInByb3BzIiwiZXJyb3JzIiwiZWxlbWVudCIsIk9iamVjdCIsImFzc2lnbiIsIndpZGdldCIsImF0dHJpYnV0ZXMiLCJjb21wb25lbnQiLCJzdG9yZSIsImhvbGRlciIsImh5ZHJhdGUiLCJjaGlsZHJlbiIsImxlbmd0aCIsIldyYXBwZXIiLCJzdHlsZXMiLCJob2xkZXIyIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0IiwiaHlkcmF0ZVJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsInJlZnJlc2giLCJjaGFuZ2VkIiwiX2RlZmF1bHQiLCJycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJldiIsIm9uIiwib2ZmIiwiaGVhZCIsInJlc291cmNlcyIsIm1hcCIsInVybCIsImxvYWRlZCIsIm9ubG9hZGVkIiwia2V5IiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9zdHlsZXMiLCJlbGVtZW50cyIsInB1c2giLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsa0JBQUE7QUFBQUMsUUFBQSxDQUFBRCxrQkFBQTtFQUFBRSxnQkFBQSxFQUFBQSxDQUFBLEtBQUFBLGdCQUFBO0VBQUFDLFlBQUEsRUFBQUEsQ0FBQSxLQUFBQSxZQUFBO0VBQUFDLHFCQUFBLEVBQUFBLENBQUEsS0FBQUEscUJBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMsR0FBQSxFQUFBQSxDQUFBLEtBQUFBO0FBQUE7QUFBQUMsTUFBQSxDQUFBQyxPQUFBLEdBQUFDLFlBQUEsQ0FBQVQsa0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0VBLElBQUFVLEtBQUEsR0FBQUMsUUFBQTtJQUNBLElBQUFDLE9BQUEsR0FBQUQsUUFBQTtJQUNBLElBQUFFLFdBQUEsR0FBQUYsUUFBQTtJQUNBLElBQUFHLE9BQUEsR0FBQUgsUUFBQTtJQUNBLElBQUFJLFFBQUEsR0FBQUosUUFBQTtJQWNpQixNQUNGSyxzQkFBQSxTQUE4QkgsV0FBQSxDQUFBSSxzQkFBQSxDQUFzQjtNQUNsRSxDQUFBQyxPQUFBO01BQ0EsQ0FBQUMsSUFBQTtNQUVB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