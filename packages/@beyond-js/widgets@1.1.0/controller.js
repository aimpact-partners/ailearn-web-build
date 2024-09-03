System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/styles"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, bimport, __Bundle, __pkg, ims, WidgetAttributes, WidgetClientController, IPageWidgetController, IWidgetStore, WidgetControllerBase, IWidgetRendered, WidgetServerController, __beyond_pkg, hmr;
  _export({
    WidgetAttributes: void 0,
    WidgetClientController: void 0,
    IPageWidgetController: void 0,
    IWidgetStore: void 0,
    WidgetControllerBase: void 0,
    IWidgetRendered: void 0,
    WidgetServerController: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsWidgets110Render) {
      dependency_2 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Styles) {
      dependency_3 = _beyondJsKernel019Styles;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/widgets@1.1.0/controller"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/styles', dependency_3]]);
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./attributes
      ****************************/
      ims.set('./attributes', {
        hash: 424385520,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetAttributes = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class WidgetAttributes extends Map {
            // The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
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
              this.#events.trigger('change');
              this.#events.trigger(`${name}:change`, value);
            }
          }
          exports.WidgetAttributes = WidgetAttributes;
        }
      });

      /************************
      INTERNAL MODULE: ./client
      ************************/

      ims.set('./client', {
        hash: 2266435544,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetClientController = void 0;
          var _controller = require("./controller");
          var _attributes = require("./attributes");
          var _bundle = require("@beyond-js/kernel/bundle");
          var _styles = require("@beyond-js/kernel/styles");
          /*bundle*/ /**
                      * The client implementation of the widget controller
                      */
          class WidgetClientController extends _controller.WidgetControllerBase {
            /**
             * The beyond widget.
             * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
             *
             * @type {HTMLElement} The beyond widget
             * @private
             */
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
              styles.on('change', () => this.styles.update(links()));
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
            /**
             * Comes from the web component disconnectedCallback method call
             */
            disconnect() {
              this.unmount();
            }
            async initialise() {
              this.#store = this.createStore?.();
              // Type check in widget is disabled due to the cyclical reference between controller and widget
              const prerender = this.#widget.ssr.prerender;
              if (prerender) {
                const cached = prerender?.store;
                await this.#store?.hydrate(cached);
              }
              this.#store?.fetch?.();
              this.render();
              // Attach to hmr changes of bundle of the widget controller
              if (!_bundle.instances.has(this.specs.vspecifier)) {
                console.log(`Bundle id "${this.specs.vspecifier}" not found. Try refreshing the page.\n` + `If the problem still persist, delete the BeyondJS cache and try again.`);
                return;
              }
              const pkg = _bundle.instances.get(this.specs.vspecifier).package();
              pkg.hmr.on('change', this.#refresh);
            }
          }
          exports.WidgetClientController = WidgetClientController;
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 1553543307,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetControllerBase = void 0;
          var _render = require("@beyond-js/widgets/render");
          /*bundle*/
          class WidgetControllerBase {
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
            // The widget component to be mounted should be specified by the module
            // (can be a React, Svelte, Vue, ... component)
            get Widget() {
              return;
            }
            createStore(language) {
              return void language;
            }
            /**
             * Controller base constructor
             *
             * @param {} specs
             * @param {HTMLElement} widget
             * The reason why it is declared as HTMLElement is to avoid circular reference between controller and widget.
             * @protected
             */
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
                const split = specs.vspecifier.split('/');
                const scope = split[0].startsWith('@') ? split.shift() : void 0;
                const [name] = split.shift().split('@');
                return scope ? `${scope}/${name}` : name;
              })();
              this.#specs = specs;
            }
          }
          exports.WidgetControllerBase = WidgetControllerBase;
        }
      });

      /*********************
      INTERNAL MODULE: ./ssr
      *********************/

      ims.set('./ssr', {
        hash: 2493457565,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WidgetServerController = void 0;
          var _controller = require("./controller");
          var _styles = require("@beyond-js/kernel/styles");
          /*bundle*/ /**
                      * The server side implementation of the widget controller
                      */
          class WidgetServerController extends _controller.WidgetControllerBase {
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
          exports.WidgetServerController = WidgetServerController;
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
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'WidgetAttributes') && _export("WidgetAttributes", WidgetAttributes = require ? require('./attributes').WidgetAttributes : value);
        (require || prop === 'WidgetClientController') && _export("WidgetClientController", WidgetClientController = require ? require('./client').WidgetClientController : value);
        (require || prop === 'IPageWidgetController') && _export("IPageWidgetController", IPageWidgetController = require ? require('./controller').IPageWidgetController : value);
        (require || prop === 'IWidgetStore') && _export("IWidgetStore", IWidgetStore = require ? require('./controller').IWidgetStore : value);
        (require || prop === 'WidgetControllerBase') && _export("WidgetControllerBase", WidgetControllerBase = require ? require('./controller').WidgetControllerBase : value);
        (require || prop === 'IWidgetRendered') && _export("IWidgetRendered", IWidgetRendered = require ? require('./ssr').IWidgetRendered : value);
        (require || prop === 'WidgetServerController') && _export("WidgetServerController", WidgetServerController = require ? require('./ssr').WidgetServerController : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY29yZSIsInJlcXVpcmUiLCJXaWRnZXRBdHRyaWJ1dGVzIiwiTWFwIiwid2lkZ2V0IiwiZXZlbnRzIiwiRXZlbnRzIiwib24iLCJldmVudCIsImxpc3RlbmVyIiwib2ZmIiwiY29uc3RydWN0b3IiLCJhdHRycyIsInNwZWNzIiwiZm9yRWFjaCIsImF0dHIiLCJzZXQiLCJnZXRBdHRyaWJ1dGUiLCJjaGFuZ2UiLCJuYW1lIiwib2xkIiwidmFsdWUiLCJ0cmlnZ2VyIiwiZXhwb3J0cyIsIl9jb250cm9sbGVyIiwiX2F0dHJpYnV0ZXMiLCJfYnVuZGxlIiwiX3N0eWxlcyIsIldpZGdldENsaWVudENvbnRyb2xsZXIiLCJXaWRnZXRDb250cm9sbGVyQmFzZSIsInN0b3JlIiwiYXR0cmlidXRlcyIsImF0dHJpYnV0ZUNoYW5nZWQiLCJzdHlsZXMiLCJEZXBlbmRlbmNpZXNTdHlsZXMiLCJ2c3BlY2lmaWVyIiwibGlua3MiLCJlbGVtZW50cyIsIm1hcCIsInN0eWxlIiwiaHJlZiIsImluaXRpYWxpc2VkIiwiaW5pdGlhbGlzZSIsInVwZGF0ZSIsInJlbmRlciIsIm1vdW50IiwiZXhjIiwiY29uc29sZSIsImxvZyIsImxvY2FsTmFtZSIsInN0YWNrIiwicmVmcmVzaCIsInVubW91bnQiLCIjcmVmcmVzaCIsImRpc2Nvbm5lY3QiLCJjcmVhdGVTdG9yZSIsInByZXJlbmRlciIsInNzciIsImNhY2hlZCIsImh5ZHJhdGUiLCJmZXRjaCIsImluc3RhbmNlcyIsImhhcyIsInBrZyIsImdldCIsInBhY2thZ2UiLCJobXIiLCJfcmVuZGVyIiwiZWxlbWVudCIsImlzIiwicm91dGUiLCJsYXlvdXQiLCJXaWRnZXQiLCJsYW5ndWFnZSIsIndpZGdldHMiLCJFcnJvciIsInNwbGl0Iiwic2NvcGUiLCJzdGFydHNXaXRoIiwic2hpZnQiLCJXaWRnZXRTZXJ2ZXJDb250cm9sbGVyIiwicGFyYW1zIiwicHVzaCIsInVuc2hpZnQiXSwic291cmNlcyI6WyIvYXR0cmlidXRlcy50cyIsIi9jbGllbnQudHMiLCIvY29udHJvbGxlci50cyIsIi9zc3IudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFFTztVQUFVLE1BQ1hDLGdCQUFpQixTQUFRQyxHQUFHO1lBQ2pDO1lBQ0EsQ0FBQUMsTUFBTztZQUVQLENBQUFDLE1BQU8sR0FBRyxJQUFJTCxLQUFBLENBQUFNLE1BQU0sRUFBRTtZQUN0QkMsRUFBRSxHQUFHQSxDQUFDQyxLQUFhLEVBQUVDLFFBQWEsS0FBSyxJQUFJLENBQUMsQ0FBQUosTUFBTyxDQUFDRSxFQUFFLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDO1lBQ3ZFQyxHQUFHLEdBQUdBLENBQUNGLEtBQWEsRUFBRUMsUUFBYSxLQUFLLElBQUksQ0FBQyxDQUFBSixNQUFPLENBQUNLLEdBQUcsQ0FBQ0YsS0FBSyxFQUFFQyxRQUFRLENBQUM7WUFFekVFLFlBQVlQLE1BQW1CO2NBQzlCLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBQSxNQUFPLEdBQUdBLE1BQU07Y0FFckIsSUFBSVEsS0FBSyxHQUFtQlIsTUFBTyxDQUFDUyxLQUFLLENBQUNELEtBQUs7Y0FDL0NBLEtBQUssRUFBRUUsT0FBTyxDQUFDQyxJQUFJLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNELElBQUksRUFBRVgsTUFBTSxDQUFDYSxZQUFZLENBQUNGLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbEU7WUFFQUcsTUFBTUEsQ0FBQ0MsSUFBWSxFQUFFQyxHQUFXLEVBQUVDLEtBQWE7Y0FDOUMsSUFBSSxDQUFDTCxHQUFHLENBQUNHLElBQUksRUFBRUUsS0FBSyxDQUFDO2NBQ3JCLElBQUksQ0FBQyxDQUFBaEIsTUFBTyxDQUFDaUIsT0FBTyxDQUFDLFFBQVEsQ0FBQztjQUM5QixJQUFJLENBQUMsQ0FBQWpCLE1B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