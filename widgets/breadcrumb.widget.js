System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/widgets@1.1.1/controller", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/breadcrumb", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, bimport, __Bundle, __pkg, ims, Controller, breadcrumbStore, BreacrumbStore, ROUTES, BredcrumbApp, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    breadcrumbStore: void 0,
    BreacrumbStore: void 0,
    ROUTES: void 0,
    BredcrumbApp: void 0
  });
  return {
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsWidgets111Controller) {
      dependency_4 = _beyondJsWidgets111Controller;
    }, function (_aimpactReactive001Model) {
      dependency_5 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi100Beta7Breadcrumb) {
      dependency_9 = _pragmateUi100Beta7Breadcrumb;
    }, function (_pragmateUi100Beta7Base) {
      dependency_10 = _pragmateUi100Beta7Base;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_11 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.23.8"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.2.17"], ["@aimpact/ailearn-app", "0.2.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.2.17/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['react', dependency_8], ['pragmate-ui/breadcrumb', dependency_9], ['pragmate-ui/base', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.2.17/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.2.17/widgets/breadcrumb.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1279797166,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = _store.breadcrumbStore;
              return this.#store;
            }
            get Widget() {
              return _views.BredcrumbApp;
            }
            manageWidget() {
              this.widget.update = this.#store.update;
              globalThis.a = this.widget;
            }
            update() {}
          }
          exports.Controller = Controller;
        }
      });

      /**********************************
      INTERNAL MODULE: ./store/breadcrumb
      **********************************/

      ims.set('./store/breadcrumb', {
        hash: 161425314,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Breadcrumb = void 0;
          var _model = require("@aimpact/reactive/model");
          var _item = require("./item");
          var _routing = require("@beyond-js/kernel/routing");
          class Breadcrumb extends _model.ReactiveModel {
            isStore;
            #widget;
            get currentWidget() {
              return this.#widget;
            }
            #items = [];
            #elements = new Map();
            get elements() {
              return this.#elements;
            }
            getItem(name) {
              return this.#elements.get(name);
            }
            get items() {
              return [...this.#elements.values()].map(item => [item.label, item.link, item.onClick]);
            }
            #texts;
            get texts() {
              return this.#texts;
            }
            #route;
            get route() {
              return this.#route;
            }
            get lastItem() {
              return this.#items[this.#items.length - 1];
            }
            constructor(texts, structure, route) {
              super();
              this.#route = route;
              this.#texts = texts;
              this.structure = structure;
              super.ready = true;
              this.initialize();
              // this.analyze();
            }
            initialize() {
              const size = this.structure.length;
              const historyLength = _routing.routing.history.records.entries.length - 1;
              this.structure.forEach(([path, uri], index) => {
                const difference = size - 1 - index;
                // console.log(4, item);
                if (difference > 0) {
                  // const previousPosition = routing.history.records.entries[historyLength - difference];
                  // const exists = routing.history.records.entries.find(item => item.uri.includes(uri));
                  // if (previousPosition) {
                  // 	item[1] = previousPosition.uri;
                  // }
                }
                const instance = new _item.BreadcrumbItem(this, {
                  link: uri,
                  name: path
                }, index);
                instance.on('change', this.listenItem);
                this.#elements.set(instance.name, instance);
                this.#items.push(instance);
              });
            }
            listenItem = () => {
              this.trigger('item.changed');
            };
            setItem(name) {
              if (!this.#elements.has(name)) return console.warn(`Breadcrumb item ${name} not found`);
              return this.#elements.get(name);
            }
            addItem(id, specs) {
              const instance = new _item.BreadcrumbItem(this, specs, -1);
              this.#elements.set(id, instance);
              this.trigger('breadcrumb.changed');
            }
            removeItem(id) {
              this.#elements.delete(id);
              this.trigger('breadcrumb.changed');
            }
          }
          exports.Breadcrumb = Breadcrumb;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 1095196,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@aimpact/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _render = require("@beyond-js/widgets/render");
          var _routes = require("./routes");
          var _breadcrumb = require("./breadcrumb");
          class Store extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            isStore;
            get pages() {
              return [..._render.widgets.values()].filter(item => item.is === 'page');
            }
            get ready() {
              return this.#texts.ready && super.ready;
            }
            get texts() {
              return this.#texts?.value;
            }
            #widget;
            get currentWidget() {
              return this.#widget;
            }
            #entries = new Map();
            #breadcrumb;
            get breadcrumb() {
              return this.#breadcrumb;
            }
            getItem() {}
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
              this.#texts.on('change', () => {
                if (!this.#texts.ready) return;
                this.analyze();
              });
              super.ready = true;
              if (this.#texts.ready) this.analyze();
              _routing.routing.on('change', this.analyze.bind(this));
              // this.analyze();
            }
            triggerBreadcrumbChange = () => {
              this.trigger('breadcrumb.changed');
            };
            analyze() {
              if (!this.#texts.ready) return;
              const page = this.pages.find(item => this.validateStructure(item.route, _routing.routing.uri.pathname));
              if (!page) {
                console.warn('No page found for breadcrumb', _routing.routing.uri.pathname);
                return;
              }
              if (!_routes.ROUTES.hasOwnProperty(page.route)) {
                console.warn('No route found for breadcrumb', page.route);
                return;
              }
              if (this.#breadcrumb?.route === page.route) return this.#breadcrumb;
              if (this.#breadcrumb) {
                this.#breadcrumb.off('item.changed', this.triggerBreadcrumbChange);
                this.#breadcrumb = undefined;
              }
              const breadcrumb = new _breadcrumb.Breadcrumb(this.texts, [..._routes.ROUTES[page.route]], page.route);
              this.#entries.set(page.route, breadcrumb);
              this.#breadcrumb = breadcrumb;
              this.#breadcrumb.on('item.changed', this.triggerBreadcrumbChange);
              this.#breadcrumb.trigger('item.changed');
              return this.#breadcrumb;
            }
            update(key, value) {
              if (!this.currentWidget) return;
            }
            validateStructure(pattern, url) {
              // const regexp = /\/:[\wáéíóúÁÉÍÓÚñÑ]+/g;
              const regexp = /\$\{[\wáéíóúÁÉÍÓÚñÑ]+\}/g;
              const finalPattern = pattern.replace(regexp, '[\\w-]+');
              const obj = new RegExp(`^${finalPattern}$`, 'g');
              // Testea la URL contra el patrón generado
              return obj.test(url);
            }
            updateText() {
              // this.#breadcrumb?.setItemText();
            }
          }
          exports.Store = Store;
          /*bundle*/
          const breadcrumbStore = exports.breadcrumbStore = new Store();
          globalThis.bc = breadcrumbStore;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/item
      ****************************/

      ims.set('./store/item', {
        hash: 1628798713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadcrumbItem = void 0;
          var _model = require("@aimpact/reactive/model");
          class BreadcrumbItem extends _model.ReactiveModel {
            #name;
            get name() {
              return this.#name;
            }
            set name(value) {
              this.#name = value;
              this.trigger('change');
            }
            #onClick;
            get onClick() {
              return this.#onClick;
            }
            #label;
            get label() {
              return this.#label ?? this.#parent.texts[this.#name];
            }
            set label(value) {
              if (this.#label === value) return;
              this.#label = value;
              this.trigger('change');
            }
            #link;
            get link() {
              return this.#link;
            }
            set link(value) {
              this.#link = value;
              this.trigger('change');
            }
            #active;
            get active() {
              return this.#active;
            }
            #index;
            #parent;
            constructor(parent, item, index) {
              super();
              this.#parent = parent;
              const {
                name,
                link,
                onClick,
                label
              } = item;
              this.#index = index;
              this.#onClick = onClick;
              this.#name = name;
              this.#label = label;
              this.#link = link;
            }
          }
          exports.BreadcrumbItem = BreadcrumbItem;
        }
      });

      /******************************
      INTERNAL MODULE: ./store/routes
      ******************************/

      ims.set('./store/routes', {
        hash: 1891376527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ROUTES = void 0;
          /*bundle*/
          const ROUTES = exports.ROUTES = {
            '/': [['home']],
            '/users/me': [['profile']],
            '/community': [['community']],
            '/modules/management': [['modules', '/modules/list'], ['management']],
            '/assignments/${id}': [['assignments']],
            '/modules/${id}': [['assignments']],
            '/modules/list': [['modules']],
            '/classrooms/list': [['classrooms']],
            '/classrooms/join': [['classrooms', '/classrooms/list'], ['joinClassroom']],
            '/classrooms/management': [['classrooms', '/classrooms/list'], ['createClassroom']],
            '/classrooms/view/${id}': [['classrooms', '/classrooms/list'], ['view']],
            '/organizations/list': [['organizations']],
            '/organizations/join': [['organizations', '/organizations/list'], ['joinOrganization']],
            '/organizations/view/${id}': [['organizations', '/organizations/list'], ['view']],
            '/organizations/management': [['organizations', '/organizations/list'], ['createOrganization']],
            '/dashboard/${id}': [['classrooms', '/classrooms/list'], ['dashboard']]
          };
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 4090300097,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 210280123,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BredcrumbApp = BredcrumbApp;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function BredcrumbApp({
            store,
            className
          }) {
            const cls = `desktop-breadcrumb${className ? ` ${className}` : ''}`;
            const [, setUpdated] = _react.default.useState({});
            const [, setReady] = _react.default.useState(store.ready);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setUpdated({}), 'breadcrumb.changed');
            if (!store.ready || !store.breadcrumb) return null;
            return _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: cls,
              items: store.breadcrumb.items,
              separator: ":"
            });
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/use-breadcrumb
      **************************************/

      ims.set('./views/use-breadcrumb', {
        hash: 3197939643,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useBreadcrumb = useBreadcrumb;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _beyond_context = require("beyond_context");
          var _render = require("@beyond-js/widgets/render");
          var _routes = require("../store/routes");
          const pages = [..._render.widgets.values()].filter(item => item.is === 'page');
          function useBreadcrumb() {
            const [ready, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [items, setItems] = _react.default.useState([['Home', '/']]);
            (0, _react.useEffect)(() => {
              function validate(pattern, url) {
                // const regexp = /\/:[\wáéíóúÁÉÍÓÚñÑ]+/g;
                const regexp = /\$\{[\wáéíóúÁÉÍÓÚñÑ]+\}/g;
                const finalPattern = pattern.replace(regexp, '/\\w+');
                const obj = new RegExp(`^${finalPattern}$`, 'g');
                // Tes0ea la URL contra el patrón generado
                return obj.test(url);
              }
              if (!ready) return;
              const widget = pages.find(item => validate(item.route, _routing.routing.uri.pathname));
              const getTexts = items => {
                return items.map(item => {
                  return [texts[item[0]], item[1]];
                });
              };
              if (_routes.ROUTES.hasOwnProperty(widget.route)) {
                setItems(getTexts(_routes.ROUTES[widget.route]));
              }
            }, [ready]);
            return {
              ready,
              texts,
              items
            };
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./store/index",
        "from": "breadcrumbStore",
        "name": "breadcrumbStore"
      }, {
        "im": "./store/index",
        "from": "BreacrumbStore",
        "name": "BreacrumbStore"
      }, {
        "im": "./store/routes",
        "from": "ROUTES",
        "name": "ROUTES"
      }, {
        "im": "./views/index",
        "from": "BredcrumbApp",
        "name": "BredcrumbApp"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'breadcrumbStore') && _export("breadcrumbStore", breadcrumbStore = require ? require('./store/index').breadcrumbStore : value);
        (require || prop === 'BreacrumbStore') && _export("BreacrumbStore", BreacrumbStore = require ? require('./store/index').BreacrumbStore : value);
        (require || prop === 'ROUTES') && _export("ROUTES", ROUTES = require ? require('./store/routes').ROUTES : value);
        (require || prop === 'BredcrumbApp') && _export("BredcrumbApp", BredcrumbApp = require ? require('./views/index').BredcrumbApp : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9pdGVtIiwiX3JvdXRpbmciLCJCcmVhZGNydW1iIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJjdXJyZW50V2lkZ2V0IiwiaXRlbXMiLCJlbGVtZW50cyIsIk1hcCIsImdldEl0ZW0iLCJuYW1lIiwiZ2V0IiwidmFsdWVzIiwibWFwIiwiaXRlbSIsImxhYmVsIiwibGluayIsIm9uQ2xpY2siLCJ0ZXh0cyIsInJvdXRlIiwibGFzdEl0ZW0iLCJsZW5ndGgiLCJjb25zdHJ1Y3RvciIsInN0cnVjdHVyZSIsInJlYWR5IiwiaW5pdGlhbGl6ZSIsInNpemUiLCJoaXN0b3J5TGVuZ3RoIiwicm91dGluZyIsImhpc3RvcnkiLCJyZWNvcmRzIiwiZW50cmllcyIsImZvckVhY2giLCJwYXRoIiwidXJpIiwiaW5kZXgiLCJkaWZmZXJlbmNlIiwiaW5zdGFuY2UiLCJCcmVhZGNydW1iSXRlbSIsIm9uIiwibGlzdGVuSXRlbSIsInNldCIsInB1c2giLCJ0cmlnZ2VyIiwic2V0SXRlbSIsImhhcyIsImNvbnNvbGUiLCJ3YXJuIiwiYWRkSXRlbSIsImlkIiwic3BlY3MiLCJyZW1vdmVJdGVtIiwiZGVsZXRlIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3JlbmRlciIsIl9yb3V0ZXMiLCJfYnJlYWRjcnVtYiIsIlN0b3JlIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicGFnZXMiLCJ3aWRnZXRzIiwiZmlsdGVyIiwiaXMiLCJ2YWx1ZSIsImJyZWFkY3J1bWIiLCJ0cmlnZ2VyRXZlbnQiLCJhbmFseXplIiwiYmluZCIsInRyaWdnZXJCcmVhZGNydW1iQ2hhbmdlIiwicGFnZSIsImZpbmQiLCJ2YWxpZGF0ZVN0cnVjdHVyZSIsInBhdGhuYW1lIiwiUk9VVEVTIiwiaGFzT3duUHJvcGVydHkiLCJvZmYiLCJ1bmRlZmluZWQiLCJrZXkiLCJwYXR0ZXJuIiwidXJsIiwicmVnZXhwIiwiZmluYWxQYXR0ZXJuIiwicmVwbGFjZSIsIm9iaiIsIlJlZ0V4cCIsInRlc3QiLCJ1cGRhdGVUZXh0IiwiYmMiLCJwYXJlbnQiLCJhY3RpdmUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWFjdCIsIl9ob29rcyIsImNsYXNzTmFtZSIsImNscyIsInNldFVwZGF0ZWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwidXNlQnJlYWRjcnVtYiIsInVzZVRleHRzIiwic2V0SXRlbXMiLCJ1c2VFZmZlY3QiLCJ2YWxpZGF0ZSIsImdldFRleHRzIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUvYnJlYWRjcnVtYi50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9pdGVtLnRzIiwiL3RzL3N0b3JlL3JvdXRlcy50cyIsIi90eXBlcy50cyIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvdXNlLWJyZWFkY3J1bWIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9P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