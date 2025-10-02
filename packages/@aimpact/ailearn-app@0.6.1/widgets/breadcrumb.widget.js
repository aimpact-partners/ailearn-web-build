System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/base", "@beyond-js/reactive@2.1.1/model", "@beyond-js/widgets@1.1.2/controller", "react@18.3.1", "pragmate-ui@1.0.8/breadcrumb", "pragmate-ui@1.0.8/base", "@beyond-js/react-18-widgets@1.1.8/hooks", "@beyond-js/kernel@0.1.14/routing"], function (_export, _context) {
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
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Base) {
      dependency_3 = _beyondJsReact18Widgets118Base;
    }, function (_beyondJsReactive211Model) {
      dependency_4 = _beyondJsReactive211Model;
    }, function (_beyondJsWidgets112Controller) {
      dependency_5 = _beyondJsWidgets112Controller;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi108Breadcrumb) {
      dependency_7 = _pragmateUi108Breadcrumb;
    }, function (_pragmateUi108Base) {
      dependency_8 = _pragmateUi108Base;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_9 = _beyondJsReact18Widgets118Hooks;
    }, function (_beyondJsKernel0114Routing) {
      dependency_10 = _beyondJsKernel0114Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['react', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['pragmate-ui/base', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@beyond-js/kernel/routing', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/widgets/breadcrumb.widget');
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

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 320368247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@beyond-js/reactive/model");
          class Store extends _model.ReactiveModel {
            isStore;
            constructor() {
              super({
                properties: ['items']
              });
              super.ready = true;
            }
            triggerBreadcrumbChange = () => {
              this.trigger('breadcrumb.changed');
            };
          }
          exports.Store = Store;
          /*bundle*/
          const breadcrumbStore = exports.breadcrumbStore = new Store();
          globalThis.bc = breadcrumbStore;
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
        hash: 3005261894,
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
        hash: 2225757465,
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
            (0, _hooks.useBinder)([store], () => setUpdated({}), 'items.changed');
            if (!store.ready || !store.items) return null;
            return _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: cls,
              items: store.items,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlN0b3JlIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJyZWFkeSIsInRyaWdnZXJCcmVhZGNydW1iQ2hhbmdlIiwidHJpZ2dlciIsImJjIiwiUk9VVEVTIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9icmVhZGNydW1iIiwiX2hvb2tzIiwiY2xhc3NOYW1lIiwiY2xzIiwic2V0VXBkYXRlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiaXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiQnJlYWRDcnVtYiIsInNlcGFyYXRvciIsIl9yb3V0aW5nIiwiX2JleW9uZF9jb250ZXh0IiwiX3JlbmRlciIsIl9yb3V0ZXMiLCJwYWdlcyIsIndpZGdldHMiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaXMiLCJ1c2VCcmVhZGNydW1iIiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwidXNlRWZmZWN0IiwidmFsaWRhdGUiLCJwYXR0ZXJuIiwidXJsIiwicmVnZXhwIiwiZmluYWxQYXR0ZXJuIiwicmVwbGFjZSIsIm9iaiIsIlJlZ0V4cCIsInRlc3QiLCJmaW5kIiwicm91dGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJnZXRUZXh0cyIsIm1hcCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZXMiOlsiLy90cy9jb250cm9sbGVyLnRzIiwiLy90cy9zdG9yZS9pbmRleC50cyIsIi8vdHMvc3RvcmUvcm91dGVzLnRzIiwiLy90eXBlcy50cy8iLCIvL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvdXNlLWJyZWFkY3J1bWIudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQU9PO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFNLGVBQWU7Y0FDN0IsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLFlBQVk7WUFDcEI7WUFFQUMsWUFBWUEsQ0FBQTtjQUNWLElBQUksQ0FBQ0MsTUFBMkIsQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNPLE1BQU07Y0FDN0RDLFVBQVUsQ0FBQ0MsQ0FBQyxHQUFHLElBQUksQ0FBQ0gsTUFBTTtZQUMzQjtZQUVBQyxNQUFNQSxDQUFBLEdBQUk7O1VBQ1ZHLE9BQUEsQ0FBQVosVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFCRCxJQUFBYSxNQUFBLEdBQUFoQixPQUFBO1VBU00sTUFBT2lCLEtBQU0sU0FBUUQsTUFBQSxDQUFBRSxhQUErQjtZQUN6REMsT0FBTztZQUVQQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxPQUFPO2NBQUMs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