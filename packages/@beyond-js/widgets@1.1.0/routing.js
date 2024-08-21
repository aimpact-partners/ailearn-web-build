System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/core", "@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/events@0.0.4/events"], function (_export, _context) {
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
    }, function (_beyondJsEvents004Events) {
      dependency_4 = _beyondJsEvents004Events;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@beyond-js/kernel", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/widgets", "1.1.0"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
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
        hash: 3034563768,
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
              const widget = _render.widgets.get(this.element);
              if (!widget) throw new Error(`Widget "${this.element}" not found`);
              let {
                layout
              } = widget;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVmYXVsdCIsIk1hcCIsInJlZ2lzdGVyIiwibGF5b3V0Iiwic2V0IiwiaWQiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9jb3JlIiwicmVxdWlyZSIsIkxheW91dEluc3RhbmNlIiwiRXZlbnRzIiwiaXMiLCJsYXlvdXRzIiwiZWxlbWVudCIsImFjdGl2ZSIsInBhcmVudCIsImNoaWxkcmVuIiwiY29uc3RydWN0b3IiLCJhY3RpdmF0ZSIsInBhZ2UiLCJjaGlsZCIsImxlbmd0aCIsIm5hbWUiLCJmb3VuZCIsInZhbHVlcyIsImZpbmQiLCJjaGFuZ2VkIiwiZGVhY3RpdmF0ZSIsInNoaWZ0IiwidHJpZ2dlciIsImNvbnNvbGUiLCJ3YXJuIiwiX3JvdXRpbmciLCJfbGF5b3V0IiwiX3BhZ2VzIiwiX2xheW91dHMiLCJfcm91dGUiLCJNYW5hZ2VyIiwiaW5zdGFuY2VzIiwicGFnZXMiLCJpbml0aWFsaXNlZCIsInJlc29sdmUiLCJyZWFkeSIsIlByb21pc2UiLCJyb3V0aW5nIiwidXJpIiwiY2F0Y2giLCJleGMiLCJsb2ciLCJzdGFjayIsInNwZWNpZmllciIsImdsb2JhbFRoaXMiLCJfX2FwcF9wYWNrYWdlIiwiYWxsIiwiYmltcG9ydCIsInRoZW4iLCJjb25maWciLCJtYWluIiwib24iLCJjdCIsIkNhbmNlbGxhdGlvblRva2VuIiwiY2lkIiwicmVzZXQiLCJyb3V0ZSIsIlJvdXRlIiwicGF0aG5hbWUiLCJwcm9jZXNzIiwiY2hlY2siLCJkb25lIiwiZXJyb3IiLCJ2YWx1ZSIsInBhcmVudHMiLCJtYW5hZ2VyIiwiX2luc3RhbmNlIiwiaW5zdGFuY2UiLCJvYnRhaW4iLCJ3aWRnZXQiLCJnZXRBdHRyaWJ1dGUiLCJoYXMiLCJQYWdlSW5zdGFuY2UiLCJnZXQiLCJ1cGRhdGUiLCJfcmVuZGVyIiwiX3VyaSIsIlBhZ2VVUkkiLCJvdXRwdXQiLCJ3aWRnZXRzIiwiRXJyb3IiLCJ1bnNoaWZ0IiwidmFycyIsInNwbGl0IiwicmVnaXN0ZXJlZCIsImZvckVhY2giLCJ0YXJnZXQiLCJmaWx0ZXIiLCJjbGVhciIsImkiLCJkaXIiLCJzdGFydHNXaXRoIiwiZW5kc1dpdGgiLCJ2bmFtZSIsInNsaWNlIiwibWlzc2luZyIsIl9ldmVudHMiLCJzZWFyY2giLCJxcyIsImhhc2giXSwic291cmNlcyI6WyIvbGF5b3V0cy9pbmRleC50cyIsIi9sYXlvdXRzL2xheW91dC50cyIsIi9tYW5hZ2VyLnRzIiwiL3BhZ2VzL2luZGV4LnRzIiwiL3BhZ2VzL2luc3RhbmNlLnRzIiwiL3BhZ2VzL3JvdXRlLnRzIiwiL3BhZ2VzL3VyaS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUVBOzs7VUFHYyxNQUFBQSxRQUFBLFNBQWVDLEdBQTJCO1lBQ3ZEQyxRQUFRQSxDQUFDQyxNQUFzQjtjQUM5QixJQUFJLENBQUNDLEdBQUcsQ0FBQ0QsTUFBTSxDQUFDRSxFQUFFLEVBQUVGLE1BQU0sQ0FBQztZQUM1Qjs7VUFDQUcsT0FBQSxDQUFBQyxPQUFBLEdBQUFQLFFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEQsSUFBQVEsS0FBQSxHQUFBQyxPQUFBO1VBS087VUFBVSxNQUNYQyxjQUFlLFNBQVFGLEtBQUEsQ0FBQUcsTUFBTTtZQUNsQyxJQUFJQyxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxRQUFRO1lBQ2hCO1lBRVMsQ0FBQUMsT0FBUTtZQUVSLENBQUFDLE9BQVE7WUFDakIsSUFBSUEsT0FBT0EsQ0FBQTtjQUNWLE9BQU8sSUFBSSxDQUFDLENBQUFBLE9BQVE7WUFDckI7WUFFQSxJQUFJVCxFQUFFQSxDQUFBO2NBQ0wsT0FBTyxJQUFJLENBQUMsQ0FBQVMsT0FBUTtZQUNyQjtZQUVBO1lBQ0EsQ0FBQUMsTUFBTztZQUNQLElBQUlBLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBQSxNQUFPO1lBQ3BCO1lBRUE7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