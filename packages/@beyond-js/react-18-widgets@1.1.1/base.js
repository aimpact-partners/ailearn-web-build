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

// .beyond/uimport/temp/@beyond-js/react-18-widgets/base.1.1.1.js
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5iZXlvbmQvdWltcG9ydC90ZW1wL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlLjEuMS4xLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL2NvbnRyb2xsZXIudHMiLCIuLi9ub2RlX21vZHVsZXMvQGJleW9uZC1qcy9yZWFjdC0xOC13aWRnZXRzL2Jhc2UvX19zb3VyY2VzL2Jhc2Uvc3R5bGVzLnRzeCIsIi4uL25vZGVfbW9kdWxlcy9AYmV5b25kLWpzL3JlYWN0LTE4LXdpZGdldHMvYmFzZS9fX3NvdXJjZXMvYmFzZS93aWRnZXQudHN4IiwiLi4vbm9kZV9tb2R1bGVzL0BiZXlvbmQtanMvcmVhY3QtMTgtd2lkZ2V0cy9iYXNlL19fc291cmNlcy9iYXNlL3dyYXBwZXIudHMiXSwibmFtZXMiOlsiYmFzZV8xXzFfMV9leHBvcnRzIiwiX19leHBvcnQiLCJJUGFnZVdpZGdldFByb3BzIiwiSVdpZGdldFByb3BzIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiX19iZXlvbmRfcGtnIiwiaG1yIiwibW9kdWxlIiwiZXhwb3J0cyIsIl9fdG9Db21tb25KUyIsIlJlYWN0IiwicmVxdWlyZTIiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIyIiwiV2lkZ2V0Q2xpZW50Q29udHJvbGxlciIsIndyYXBwZXIiLCJyb290IiwibW91bnRlZCIsIldpZGdldCIsIm1vdW50IiwicHJvcHMiLCJlcnJvcnMiLCJlbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImNvbXBvbmVudCIsInN0b3JlIiwiaG9sZGVyIiwiaHlkcmF0ZSIsImNoaWxkcmVuIiwibGVuZ3RoIiwiV3JhcHBlciIsInN0eWxlcyIsImhvbGRlcjIiLCJwIiwiY3JlYXRlRWxlbWVudCIsImRlZmF1bHQiLCJoeWRyYXRlUm9vdCIsImNyZWF0ZVJvb3QiLCJyZW5kZXIiLCJleGMiLCJjb25zb2xlIiwibG9nIiwibG9jYWxOYW1lIiwic3RhY2siLCJ1bm1vdW50IiwicmVmcmVzaCIsImNoYW5nZWQiLCJfZGVmYXVsdCIsInJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJwcmV2Iiwib24iLCJvZmYiLCJoZWFkIiwicmVzb3VyY2VzIiwibWFwIiwidXJsIiwibG9hZGVkIiwib25sb2FkZWQiLCJrZXkiLCJocmVmIiwicmVsIiwib25Mb2FkIiwib25FcnJvciIsIkZyYWdtZW50IiwiX3N0eWxlcyIsImVsZW1lbnRzIiwicHVzaCIsInJlYWR5IiwidGhlbiIsInN0eWxlIiwiZGlzcGxheSIsImNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxrQkFBQTtBQUFBQyxRQUFBLENBQUFELGtCQUFBO0VBQUFFLGdCQUFBLEVBQUFBLENBQUEsS0FBQUEsZ0JBQUE7RUFBQUMsWUFBQSxFQUFBQSxDQUFBLEtBQUFBLFlBQUE7RUFBQUMscUJBQUEsRUFBQUEsQ0FBQSxLQUFBQSxxQkFBQTtFQUFBQyxZQUFBLEVBQUFBLENBQUEsS0FBQUEsWUFBQTtFQUFBQyxHQUFBLEVBQUFBLENBQUEsS0FBQUE7QUFBQTtBQUFBQyxNQUFBLENBQUFDLE9BQUEsR0FBQUMsWUFBQSxDQUFBVCxrQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDRUEsSUFBQVUsS0FBQSxHQUFBQyxRQUFBO0lBQ0EsSUFBQUMsT0FBQSxHQUFBRCxRQUFBO0lBQ0EsSUFBQUUsV0FBQSxHQUFBRixRQUFBO0lBQ0EsSUFBQUcsT0FBQSxHQUFBSCxRQUFBO0lBQ0EsSUFBQUksUUFBQSxHQUFBSixRQUFBO0lBY2lCLE1BQ0ZLLHNCQUFBLFNBQThCSCxXQUFBLENBQUFJLHNCQUFBLENBQXNCO01BQ2xFLENBQUFDLE9BQUE7TUFDQSxDQUFBQyxJQUFB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