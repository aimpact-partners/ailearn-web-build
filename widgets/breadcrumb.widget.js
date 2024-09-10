System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.6/breadcrumb", "pragmate-ui@1.0.0-beta.6/base", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, breadcrumbStore, BreacrumbStore, ROUTES, BredcrumbApp, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    breadcrumbStore: void 0,
    BreacrumbStore: void 0,
    ROUTES: void 0,
    BredcrumbApp: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_beyondJsWidgets110Controller) {
      dependency_3 = _beyondJsWidgets110Controller;
    }, function (_beyondJsReactive120Model) {
      dependency_4 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Routing) {
      dependency_5 = _beyondJsKernel019Routing;
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi100Beta6Breadcrumb) {
      dependency_8 = _pragmateUi100Beta6Breadcrumb;
    }, function (_pragmateUi100Beta6Base) {
      dependency_9 = _pragmateUi100Beta6Base;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.6"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.5"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.8"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["firebase", "10.13.1"], ["firebase-admin", "12.4.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.1.6-dev.21"], ["@aimpact/ailearn-app", "0.1.6-dev.21"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/breadcrumb', dependency_8], ['pragmate-ui/base', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.21/widgets/breadcrumb.widget"
      }]);
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
        hash: 1605844757,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Breadcrumb = void 0;
          var _model = require("@beyond-js/reactive/model");
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
            getItem() {}
            get items() {
              return [...this.#elements.values()].map(item => [item.label, item.link]);
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
                  // console.log(0.2, exists);
                  // if (previousPosition) {
                  // 	item[1] = previousPosition.uri;
                  // }
                }
                const instance = new _item.BreadcrumbItem(this, [path, uri], index);
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
          }
          exports.Breadcrumb = Breadcrumb;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 2050127562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _render = require("@beyond-js/widgets/render");
          var _routes = require("./routes");
          var _breadcrumb = require("./breadcrumb");
          globalThis.widgets = _render.widgets;
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
              const page = this.pages.find(item => this.validate(item.route, _routing.routing.uri.pathname));
              if (!page) {
                console.warn('No page found for breadcrumb', _routing.routing.uri.pathname);
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
            validate(pattern, url) {
              // const regexp = /\/:[\wáéíóúÁÉÍÓÚñÑ]+/g;
              const regexp = /\$\{[\wáéíóúÁÉÍÓÚñÑ]+\}/g;
              const finalPattern = pattern.replace(regexp, '[\\w-]+');
              const obj = new RegExp(`^${finalPattern}$`, 'g');
              // Testea la URL contra el patrón generado
              return obj.test(url);
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
        hash: 1907036877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BreadcrumbItem = void 0;
          var _model = require("@beyond-js/reactive/model");
          class BreadcrumbItem extends _model.ReactiveModel {
            #name;
            get name() {
              return this.#name;
            }
            set name(value) {
              this.#name = value;
              this.trigger('change');
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
              const [name, link] = item;
              this.#index = index;
              this.#name = name;
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
        hash: 3830857724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ROUTES = void 0;
          /*bundle*/
          const ROUTES = exports.ROUTES = {
            '/community': [['community']],
            '/modules/management': [['modules', '/modules/list'], ['management']],
            '/assignments/${id}': [['assignments']],
            '/modules/${id}': [['assignments']],
            '/modules/list': [['modules']],
            '/classrooms/list': [['classrooms']],
            '/classrooms/join': [['classrooms', '/classrooms/list'], ['joinClassroom']],
            '/classrooms/create': [['classrooms', '/classrooms/list'], ['createClassroom']],
            '/classrooms/view/${id}': [['classrooms', '/classrooms/list'], ['view']],
            '/organizations/list': [['organizations']],
            '/organizations/join': [['organizations', '/organizations/list'], ['joinOrganization']],
            '/organizations/view/${id}': [['organizations', '/organizations/list'], ['view']],
            '/organizations/create': [['organizations', '/organizations/list'], ['createOrganization']]
          };
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/types
      *****************************/

      ims.set('./store/types', {
        hash: 3228949201,
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
        hash: 4175808204,
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
              _routing.routing.on('change', () => {
                const widget = pages.find(item => validate(item.route, _routing.routing.uri.pathname));
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9pdGVtIiwiX3JvdXRpbmciLCJCcmVhZGNydW1iIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJjdXJyZW50V2lkZ2V0IiwiaXRlbXMiLCJlbGVtZW50cyIsIk1hcCIsImdldEl0ZW0iLCJ2YWx1ZXMiLCJtYXAiLCJpdGVtIiwibGFiZWwiLCJsaW5rIiwidGV4dHMiLCJyb3V0ZSIsImxhc3RJdGVtIiwibGVuZ3RoIiwiY29uc3RydWN0b3IiLCJzdHJ1Y3R1cmUiLCJyZWFkeSIsImluaXRpYWxpemUiLCJzaXplIiwiaGlzdG9yeUxlbmd0aCIsInJvdXRpbmciLCJoaXN0b3J5IiwicmVjb3JkcyIsImVudHJpZXMiLCJmb3JFYWNoIiwicGF0aCIsInVyaSIsImluZGV4IiwiZGlmZmVyZW5jZSIsImluc3RhbmNlIiwiQnJlYWRjcnVtYkl0ZW0iLCJvbiIsImxpc3Rlbkl0ZW0iLCJzZXQiLCJuYW1lIiwicHVzaCIsInRyaWdnZXIiLCJzZXRJdGVtIiwiaGFzIiwiY29uc29sZSIsIndhcm4iLCJnZXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfcmVuZGVyIiwiX3JvdXRlcyIsIl9icmVhZGNydW1iIiwid2lkZ2V0cyIsIlN0b3JlIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwicGFnZXMiLCJmaWx0ZXIiLCJpcyIsInZhbHVlIiwiYnJlYWRjcnVtYiIsInRyaWdnZXJFdmVudCIsImFuYWx5emUiLCJiaW5kIiwidHJpZ2dlckJyZWFkY3J1bWJDaGFuZ2UiLCJwYWdlIiwiZmluZCIsInZhbGlkYXRlIiwicGF0aG5hbWUiLCJST1VURVMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9mZiIsInVuZGVmaW5lZCIsImtleSIsInBhdHRlcm4iLCJ1cmwiLCJyZWdleHAiLCJmaW5hbFBhdHRlcm4iLCJyZXBsYWNlIiwib2JqIiwiUmVnRXhwIiwidGVzdCIsImJjIiwicGFyZW50IiwiYWN0aXZlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfcmVhY3QiLCJfaG9va3MiLCJjbGFzc05hbWUiLCJjbHMiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiQnJlYWRDcnVtYiIsInNlcGFyYXRvciIsInVzZUJyZWFkY3J1bWIiLCJ1c2VUZXh0cyIsInNldEl0ZW1zIiwidXNlRWZmZWN0IiwiZ2V0VGV4dHMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9icmVhZGNydW1iLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL2l0ZW0udHMiLCIvdHMvc3RvcmUvcm91dGVzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy91c2UtYnJlYWRjcnVtYi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxD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