System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/events@0.0.7/events"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, bimport, __Bundle, __pkg, ims, LayoutInstance, manager, PageInstance, Route, PageURI, __beyond_pkg, hmr;
  _export({
    LayoutInstance: void 0,
    manager: void 0,
    PageInstance: void 0,
    Route: void 0,
    PageURI: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Core) {
      dependency_1 = _beyondJsKernel019Core;
    }, function (_beyondJsWidgets110Render) {
      dependency_2 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Routing) {
      dependency_3 = _beyondJsKernel019Routing;
    }, function (_beyondJsEvents007Events) {
      dependency_4 = _beyondJsEvents007Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@beyond-js/widgets@1.1.0/routing"
        },
        "type": "ts"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/kernel/routing', dependency_3], ['@beyond-js/events/events', dependency_4]]);
      ims = new Map();
      /*******************************
      INTERNAL MODULE: ./layouts/index
      *******************************/
      ims.set('./layouts/index', {
        hash: 2720616762,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          /**
           * The registry of all layouts instances registered in the session, except the main layout
           */
          class _default extends Map {
            register(layout) {
              this.set(layout.id, layout);
            }
          }
          exports.default = _default;
        }
      });

      /********************************
      INTERNAL MODULE: ./layouts/layout
      ********************************/

      ims.set('./layouts/layout', {
        hash: 3657772330,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LayoutInstance = void 0;
          var _core = require("@beyond-js/kernel/core");
          /*bundle*/
          class LayoutInstance extends _core.Events {
            get is() {
              return 'layout';
            }
            #layouts;
            #element;
            get element() {
              return this.#element;
            }
            get id() {
              return this.#element;
            }
            // The active child in the layout
            #active;
            get active() {
              return this.#active;
            }
            // Property #parent is undefined only if it is the main layout
            #parent;
            // The layouts and pages that are contained in the current layout
            #children = new Map();
            get children() {
              return this.#children;
            }
            /**
             * Layout constructor
             *
             * @param {Layouts} layouts The layouts registry
             * @param {string} element The element name of the widget. Undefined if the project does not set a layout
             * and the index.html has a <beyond-layout-children/> as its main layout container
             * @param {Layout} parent The parent layout. Undefined if it is the main layout
             */
            constructor(layouts, element, parent) {
              super();
              this.#layouts = layouts;
              this.#element = element ? element : 'main';
              this.#parent = parent;
            }
            /**
             * Activates the current page being navigated
             * Create the layout instance if not previously created
             *
             * @param {PageInstance} page The page being navigated
             */
            activate(page, layouts) {
              // Get the child instance (page or layout)
              // Create the layout instance if not previously created
              const child = (() => {
                if (!layouts.length) return page;
                const {
                  name: element
                } = layouts[0];
                const found = [...this.#children.values()].find(child => child.element === element);
                if (found) return found;
                const layout = new LayoutInstance(this.#layouts, element, this);
                this.#layouts.register(layout);
                return layout;
              })();
              this.#children.set(child.id, child);
              // Check if current active child has changed
              const changed = this.#active !== child;
              // Deactivate layout if last active layout is not the current one
              changed && this.#active?.is === 'layout' && this.#active.deactivate();
              // Set the active child
              this.#active = child;
              // Continue iterating the following layouts in the list
              layouts.shift();
              child.is === 'layout' && child.activate(page, layouts);
              changed && this.trigger('change');
            }
            deactivate() {
              const active = this.#active;
              if (!active) {
                console.warn(`Layout "${this.#element}" doesn't have any active child`);
                return;
              }
              this.#active = void 0;
              active.is === 'layout' && active.deactivate();
              this.trigger('change');
            }
          }
          exports.LayoutInstance = LayoutInstance;
        }
      });

      /*************************
      INTERNAL MODULE: ./manager
      *************************/

      ims.set('./manager', {
        hash: 772391908,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.manager = void 0;
          var _core = require("@beyond-js/kernel/core");
          var _routing = require("@beyond-js/kernel/routing");
          var _layout = require("./layouts/layout");
          var _pages = require("./pages");
          var _layouts = require("./layouts");
          var _route = require("./pages/route");
          class Manager {
            // The registry of all layouts (except the main layout) and pages instances registered in the session
            #instances = {
              layouts: new _layouts.default(),
              pages: new _pages.default()
            };
            #initialised = false;
            get initialised() {
              return this.#initialised;
            }
            #resolve;
            #ready = new Promise(resolve => this.#resolve = resolve);
            get ready() {
              return this.#ready;
            }
            constructor() {
              const set = () => this.set(_routing.routing.uri).catch(exc => console.log(exc.stack));
              // @TODO: move to the setup method
              const {
                specifier
              } = globalThis.__app_package;
              Promise.all([bimport(`${specifier}/config`), bimport(`${specifier}/start`)]).then(([{
                default: config
              }]) => {
                // The main layout can be specified in the package.json,
                // if it is not specified, then a beyond-layout-children will be
                // set as default
                this.#main = new _layout.LayoutInstance(this.#instances.layouts, config.layout);
                _routing.routing.on('change', set);
                _routing.routing.initialised ? set() : _routing.routing.ready.then(set);
              });
            }
            get layouts() {
              return this.#instances.layouts;
            }
            get pages() {
              return this.#instances.pages;
            }
            // The main layout can be a custom element specified in the package.json
            // Otherwise, if it is not specified, the beyond-layout-children
            // will be set as default
            #main;
            get main() {
              return this.#main;
            }
            #ct = new _core.CancellationToken();
            async set(uri) {
              const cid = this.#ct.reset();
              const route = new _route.Route(uri.pathname);
              await route.process();
              if (!this.#ct.check(cid)) return;
              const done = () => {
                !this.#initialised && this.#resolve();
                this.#initialised = true;
              };
              const {
                page: element
              } = route;
              if (!element) {
                console.error(`Pathname "${uri.pathname}" does not have a page widget associated to it`);
                return done();
              }
              const page = this.#instances.pages.register(uri, route);
              // Property page.parents.value is an array that contains the list of layouts where the page is contained
              const {
                error,
                value: layouts
              } = page.parents;
              if (error) {
                console.error(`Page on "${uri.uri}" cannot be shown: ${error}`);
                return done();
              }
              // If the root layout specified in the page widget is the same as the application layout,
              // then remove from the list
              layouts.length && layouts[0].name === this.main.element && layouts.shift();
              this.#main.activate(page, layouts);
              return done();
            }
          }
          /*bundle*/
          const manager = exports.manager = typeof process === 'object' ? void 0 : new Manager();
        }
      });

      /*****************************
      INTERNAL MODULE: ./pages/index
      *****************************/

      ims.set('./pages/index', {
        hash: 2934692868,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.default = void 0;
          var _instance = require("./instance");
          class _default extends Map {
            // @deprecated: Use .obtain instead of this method
            instance(id) {
              return [...this.values()].find(instance => instance.id === id);
            }
            obtain({
              widget,
              id
            }) {
              if (id) return this.instance(id);
              const child = widget.getAttribute('data-child-id');
              return this.instance(child);
            }
            register(uri, route) {
              const {
                pathname
              } = uri;
              const instance = (() => {
                if (!this.has(pathname)) return new _instance.PageInstance(uri, route);
                const instance = this.get(pathname);
                instance.uri.update(uri);
                return instance;
              })();
              this.set(pathname, instance);
              return instance;
            }
          }
          exports.default = _default;
        }
      });

      /********************************
      INTERNAL MODULE: ./pages/instance
      ********************************/

      ims.set('./pages/instance', {
        hash: 901253096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageInstance = void 0;
          var _render = require("@beyond-js/widgets/render");
          var _uri = require("./uri");
          let id = 0;
          /*bundle*/
          class PageInstance {
            #uri;
            get uri() {
              return this.#uri;
            }
            get route() {
              return this.#uri.route;
            }
            get element() {
              return this.#uri.route.page;
            }
            get is() {
              return 'page';
            }
            #id;
            get id() {
              return `${this.element}:${this.#id}`;
            }
            constructor(uri, route) {
              this.#uri = new _uri.PageURI({
                uri,
                route
              });
              this.#id = ++id;
            }
            /**
             * Returns the ascending layouts for the current page
             *
             * @return {{error?: string, parents?: IWidgetSpecs[]}}
             */
            get parents() {
              // List of container layouts of the current page
              const output = [];
              // Look for the page's layout in the widgets specifications registry
              let {
                layout
              } = _render.widgets.get(this.element);
              while (layout) {
                // Look for the layout specification in the widgets specification
                // (as the layout is also another widget)
                const found = [..._render.widgets.values()].find(({
                  name
                }) => name === layout);
                if (!found) {
                  const error = `Layout "${layout}" not found`;
                  return {
                    error
                  };
                }
                output.unshift(found);
                layout = found.layout;
              }
              return {
                value: output
              };
            }
          }
          exports.PageInstance = PageInstance;
        }
      });

      /*****************************
      INTERNAL MODULE: ./pages/route
      *****************************/

      ims.set('./pages/route', {
        hash: 228538911,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Route = void 0;
          var _render = require("@beyond-js/widgets/render");
          var _routing = require("@beyond-js/kernel/routing");
          /*bundle*/
          class Route {
            #pathname;
            get pathname() {
              return this.#pathname;
            }
            #page;
            get page() {
              return this.#page;
            }
            #vars;
            get vars() {
              return this.#vars;
            }
            constructor(pathname) {
              this.#pathname = pathname;
            }
            async process() {
              const pathname = this.#pathname.split('/');
              // Split the routes of each page to make it easier to find the route that applies to the pathname
              // being requested
              const registered = new Map();
              _render.widgets.forEach(({
                is,
                name,
                route
              }) => is === 'page' && registered.set(name, route.split('/')));
              // The pages whose routes apply by the length of their urls
              const target = [...registered].filter(([, route]) => route.length === pathname.length);
              this.#vars = new Map();
              const found = target.find(([, route]) => {
                this.#vars.clear();
                for (let i = 0; i < pathname.length; i++) {
                  const dir = route[i];
                  // Check if it is a route var (ex: /article/${id})
                  if (dir.startsWith('${') && dir.endsWith('}')) {
                    const vname = dir.slice(2, dir.length - 1);
                    this.#vars.set(vname, pathname[i]);
                    continue;
                  }
                  if (dir !== pathname[i]) return false;
                }
                return true;
              });
              this.#page = found ? found[0] : await _routing.routing.missing?.(this.#pathname);
            }
          }
          exports.Route = Route;
        }
      });

      /***************************
      INTERNAL MODULE: ./pages/uri
      ***************************/

      ims.set('./pages/uri', {
        hash: 3243525408,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PageURI = void 0;
          var _events = require("@beyond-js/events/events");
          /*bundle*/ /**
                      * The PageURI class is designed to extend the URI structure provided by the BeyondJS kernel routing,
                      * incorporating variables extracted from the pathname as defined by a Route object.
                      *
                      * Additionally, it is expected for the URI to change in response to modifications in the query string.
                      * This class facilitates the tracking of these changes, ensuring that the page can respond dynamically
                      * to query string updates.
                      */
          class PageURI extends _events.Events {
            #route;
            get route() {
              return this.#route;
            }
            #uri;
            get uri() {
              return this.#uri;
            }
            get pathname() {
              return this.#uri.pathname;
            }
            get search() {
              return this.#uri.search;
            }
            get qs() {
              return this.#uri.qs;
            }
            get hash() {
              return this.#uri.hash;
            }
            get vars() {
              return this.#route.vars;
            }
            constructor({
              uri,
              route
            }) {
              super(); // Call the super constructor
              this.#route = route;
              this.#uri = uri;
            }
            update(uri) {
              if (this.#uri === uri) return;
              this.#uri = uri;
              // Dispatch the "change" event when the URI is updated
              const {
                qs
              } = this;
              this.trigger('change', {
                qs
              });
            }
          }
          exports.PageURI = PageURI;
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./layouts/layout",
        "from": "LayoutInstance",
        "name": "LayoutInstance"
      }, {
        "im": "./manager",
        "from": "manager",
        "name": "manager"
      }, {
        "im": "./pages/instance",
        "from": "PageInstance",
        "name": "PageInstance"
      }, {
        "im": "./pages/route",
        "from": "Route",
        "name": "Route"
      }, {
        "im": "./pages/uri",
        "from": "PageURI",
        "name": "PageURI"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'LayoutInstance') && _export("LayoutInstance", LayoutInstance = require ? require('./layouts/layout').LayoutInstance : value);
        (require || prop === 'manager') && _export("manager", manager = require ? require('./manager').manager : value);
        (require || prop === 'PageInstance') && _export("PageInstance", PageInstance = require ? require('./pages/instance').PageInstance : value);
        (require || prop === 'Route') && _export("Route", Route = require ? require('./pages/route').Route : value);
        (require || prop === 'PageURI') && _export("PageURI", PageURI = require ? require('./pages/uri').PageURI : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9jb3JlIiwicmVxdWlyZSIsIkxheW91dEluc3RhbmNlIiwiRXZlbnRzIiwiaXMiLCJsYXlvdXRzIiwiZWxlbWVudCIsImFjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJhY3RpdmF0ZSIsInBhZ2UiLCJjaGlsZCIsImxlbmd0aCIsIm5hbWUiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGFuZ2VkIiwiZGVhY3RpdmF0ZSIsInNoaWZ0IiwidHJpZ2dlciIsImNvbnNvbGUiLCJ3YXJuIiwiX3JvdXRpbmciLCJfbGF5b3V0IiwiX3BhZ2VzIiwiX2xheW91dHMiLCJfcm91dGUiLCJNYW5hZ2VyIiwiaW5zdGFuY2VzIiwicGFnZXMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJsb2ciLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCJtYWluIiwib24iLCJjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJwcm9jZXNzIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJtYW5hZ2VyIiwiX2luc3RhbmNlIiwiaW5zdGFuY2UiLCJvYnRhaW4iLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJoYXMiLCJQYWdlSW5zdGFuY2UiLCJnZXQiLCJ1cGRhdGUiLCJfcmVuZGVyIiwiX3VyaSIsIlBhZ2VVUkkiLCJvdXRwdXQiLCJ3aWRnZXRzIiwidW5zaGlmdCIsInZhcnMiLCJzcGxpdCIsInJlZ2lzdGVyZWQiLCJmb3JFYWNoIiwidGFyZ2V0IiwiZmlsdGVyIiwiY2xlYXIiLCJpIiwiZGlyIiwic3RhcnRzV2l0aCIsImVuZHNXaXRoIiwidm5hbWUiLCJzbGljZSIsIm1pc3NpbmciLCJfZXZlbnRzIiwic2VhcmNoIiwicXMiLCJoYXNoIl0sInNvdXJjZXMiOlsiL2xheW91dHMvaW5kZXgudHMiLCIvbGF5b3V0cy9sYXlvdXQudHMiLCIvbWFuYWdlci50cyIsIi9wYWdlcy9pbmRleC50cyIsIi9wYWdlcy9pbnN0YW5jZS50cyIsIi9wYWdlcy9yb3V0ZS50cyIsIi9wYWdlcy91cmkudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFFQTs7O1VBR2MsTUFBQUEsUUFBQSxTQUFlQyxHQUEyQjtZQUN2REMsUUFBUUEsQ0FBQ0MsTUFBc0I7Y0FDOUIsSUFBSSxDQUFDQyxHQUFHLENBQUNELE1BQU0sQ0FBQ0UsRUFBRSxFQUFFRixNQUFNLENBQUM7WUFDNUI7O1VBQ0FHLE9BQUEsQ0FBQUMsT0FBQSxHQUFBUCxRQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BELElBQUFRLEtBQUEsR0FBQUMsT0FBQTtVQUtPO1VBQVUsTUFDWEMsY0FBZSxTQUFRRixLQUFBLENBQUFHLE1BQU07WUFDbEMsSUFBSUMsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sUUFBUTtZQUNoQjtZQUVTLENBQUFDLE9BQVE7WUFFUixDQUFBQyxPQUFRO1lBQ2pCLElBQUlBLE9BQU9BLENBQUE7Y0FDVixPQUFPLElBQUksQ0FBQyxDQUFBQSxPQUFRO1lBQ3JCO1lBRUEsSUFBSVQsRUFBRUEsQ0FBQTtjQUNMLE9BQU8sSUFBSSxDQUFDLENBQUFTLE9BQVE7WUFDckI7WUFFQTtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUVBO1lBQ0EsQ0FB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