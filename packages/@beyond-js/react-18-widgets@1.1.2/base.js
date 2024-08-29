System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/widgets@1.1.0/controller", "react@18.2.0", "react-dom@18.2.0/client", "@beyond-js/widgets@1.1.0/routing"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, IWidgetProps, IPageWidgetProps, ReactWidgetController, __beyond_pkg, hmr;
  _export({
    IWidgetProps: void 0,
    IPageWidgetProps: void 0,
    ReactWidgetController: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsWidgets110Controller) {
      dependency_1 = _beyondJsWidgets110Controller;
    }, function (_react) {
      dependency_2 = _react;
    }, function (_reactDom1820Client) {
      dependency_3 = _reactDom1820Client;
    }, function (_beyondJsWidgets110Routing) {
      dependency_4 = _beyondJsWidgets110Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.1.6-dev.08"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/react-18-widgets@1.1.2/base"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/controller', dependency_1], ['react', dependency_2], ['react-dom/client', dependency_3], ['@beyond-js/widgets/routing', dependency_4]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2404965063,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ReactWidgetController = void 0;
          var React = require("react");
          var _client = require("react-dom/client");
          var _controller = require("@beyond-js/widgets/controller");
          var _widget = require("./widget");
          var _wrapper = require("./wrapper");
          /*bundle*/
          class ReactWidgetController extends _controller.WidgetClientController {
            #wrapper;
            #root;
            #mounted = false;
            get mounted() {
              return this.#mounted;
            }
            // This property must be overwritten
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
              // Render the widget
              try {
                const wrapper = this.#wrapper = new _wrapper.Wrapper(this);
                const {
                  styles,
                  widget
                } = this;
                const {
                  holder
                } = widget;
                const p = {
                  wrapper,
                  props,
                  styles,
                  holder,
                  hydrate
                };
                const element = React.createElement(_widget.default, p);
                if (hydrate) {
                  this.#root = (0, _client.hydrateRoot)(holder, element);
                } else {
                  const root = this.#root = (0, _client.createRoot)(holder);
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
              globalThis.setTimeout(() => this.#root.unmount(), 0);
            }
            refresh() {
              this.#wrapper.changed();
            }
          }
          exports.ReactWidgetController = ReactWidgetController;
        }
      });

      /************************
      INTERNAL MODULE: ./styles
      ************************/

      ims.set('./styles', {
        hash: 3367909987,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = _default;
          var React = require("react");
          function _default({
            styles
          }) {
            const rs = React.useState(0);
            // Listen for .css bundle changes
            React.useEffect(() => {
              const refresh = () => rs[1](prev => prev + 1);
              styles.on('change', refresh);
              return () => styles.off('change', refresh) && void 0;
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

      /************************
      INTERNAL MODULE: ./widget
      ************************/

      ims.set('./widget', {
        hash: 2641106731,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = _default;
          var React = require("react");
          var _styles = require("./styles");
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
              styles: styles,
              widget: props.widget
            }));
            const rs = React.useState(0);
            const refresh = () => rs[1](rs[0] + 1);
            // Listen for .js bundle changes
            wrapper.changed = refresh;
            // Check for styles to be loaded
            const loaded = (() => {
              !styles.loaded && styles.ready.then(refresh);
              holder.style.display = '';
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

      /*************************
      INTERNAL MODULE: ./wrapper
      *************************/

      ims.set('./wrapper', {
        hash: 4085792261,
        creator: function (require, exports) {
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
            // Property changed should be overwritten to get notified about HMR changes
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'IWidgetProps') && _export("IWidgetProps", IWidgetProps = require ? require('./controller').IWidgetProps : value);
        (require || prop === 'IPageWidgetProps') && _export("IPageWidgetProps", IPageWidgetProps = require ? require('./controller').IPageWidgetProps : value);
        (require || prop === 'ReactWidgetController') && _export("ReactWidgetController", ReactWidgetController = require ? require('./controller').ReactWidgetController : value);
      };
      _export("__beyond_pkg", __beyond_pkg = __pkg);
      _export("hmr", hmr = new function () {
        this.on = (event, listener) => __pkg.hmr.on(event, listener);
        this.off = (event, listener) => __pkg.hmr.off(event, listener);
      }());
      __pkg.initialise(ims);
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwid3JhcHBlciIsInJvb3QiLCJtb3VudGVkIiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJXcmFwcGVyIiwic3R5bGVzIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0IiwiaHlkcmF0ZVJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwicmVmcmVzaCIsImNoYW5nZWQiLCJleHBvcnRzIiwiX2RlZmF1bHQiLCJycyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwicHJldiIsIm9uIiwib2ZmIiwiaGVhZCIsInJlc291cmNlcyIsIm1hcCIsInVybCIsImxvYWRlZCIsIm9ubG9hZGVkIiwia2V5IiwiaHJlZiIsInJlbCIsIm9uTG9hZCIsIm9uRXJyb3IiLCJGcmFnbWVudCIsIl9zdHlsZXMiLCJlbGVtZW50cyIsInB1c2giLCJyZWFkeSIsInRoZW4iLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VzIjpbIi9jb250cm9sbGVyLnRzIiwiL3N0eWxlcy50c3giLCIvd2lkZ2V0LnRzeCIsIi93cmFwcGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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