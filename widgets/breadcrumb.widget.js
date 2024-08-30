System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/widgets@1.1.0/controller", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/breadcrumb", "pragmate-ui@1.0.0-beta.2/base", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
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
    }, function (_pragmateUi100Beta2Breadcrumb) {
      dependency_8 = _pragmateUi100Beta2Breadcrumb;
    }, function (_pragmateUi100Beta2Base) {
      dependency_9 = _pragmateUi100Beta2Base;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_10 = _beyondJsReact18Widgets112Hooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/kernel/routing', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['react', dependency_7], ['pragmate-ui/breadcrumb', dependency_8], ['pragmate-ui/base', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/widgets/breadcrumb.widget"
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