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
        const dependencies = new Map([["react", "18.2.0"], ["react-dom", "18.2.0"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/kernel", "0.1.9"], ["@types/react", "18.0.26"], ["@types/react-dom", "18.0.10"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 2748202980,
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
              this.#root.unmount();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWFjdCIsInJlcXVpcmUiLCJfY2xpZW50IiwiX2NvbnRyb2xsZXIiLCJfd2lkZ2V0IiwiX3dyYXBwZXIiLCJSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXRDbGllbnRDb250cm9sbGVyIiwid3JhcHBlciIsInJvb3QiLCJtb3VudGVkIiwiV2lkZ2V0IiwibW91bnQiLCJwcm9wcyIsImVycm9ycyIsImVsZW1lbnQiLCJPYmplY3QiLCJhc3NpZ24iLCJ3aWRnZXQiLCJhdHRyaWJ1dGVzIiwiY29tcG9uZW50Iiwic3RvcmUiLCJob2xkZXIiLCJoeWRyYXRlIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJXcmFwcGVyIiwic3R5bGVzIiwicCIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0IiwiaHlkcmF0ZVJvb3QiLCJjcmVhdGVSb290IiwicmVuZGVyIiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwidW5tb3VudCIsInJlZnJlc2giLCJjaGFuZ2VkIiwiZXhwb3J0cyIsIl9kZWZhdWx0IiwicnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInByZXYiLCJvbiIsIm9mZiIsImhlYWQiLCJyZXNvdXJjZXMiLCJtYXAiLCJ1cmwiLCJsb2FkZWQiLCJvbmxvYWRlZCIsImtleSIsImhyZWYiLCJyZWwiLCJvbkxvYWQiLCJvbkVycm9yIiwiRnJhZ21lbnQiLCJfc3R5bGVzIiwiZWxlbWVudHMiLCJwdXNoIiwicmVhZHkiLCJ0aGVuIiwic3R5bGUiLCJkaXNwbGF5IiwiY29uc3RydWN0b3IiXSwic291cmNlcyI6WyIvY29udHJvbGxlci50cyIsIi9zdHlsZXMudHN4IiwiL3dpZGdldC50c3giLCIvd3JhcHBlci50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFQSxJQUFBQSxLQUFBLEdBQUFDLE9B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