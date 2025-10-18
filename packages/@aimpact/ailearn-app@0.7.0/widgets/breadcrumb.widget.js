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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['react', dependency_6], ['pragmate-ui/breadcrumb', dependency_7], ['pragmate-ui/base', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@beyond-js/kernel/routing', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/widgets/breadcrumb.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1138077767,
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
              //@ts-ignore
              this.widget.update = this.#store.update;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJTdG9yZSIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwicmVhZHkiLCJ0cmlnZ2VyQnJlYWRjcnVtYkNoYW5nZSIsInRyaWdnZXIiLCJnbG9iYWxUaGlzIiwiYmMiLCJST1VURVMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JlYWN0IiwiX2JyZWFkY3J1bWIiLCJfaG9va3MiLCJjbGFzc05hbWUiLCJjbHMiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImNyZWF0ZUVsZW1lbnQiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiX3JvdXRpbmciLCJfYmV5b25kX2NvbnRleHQiLCJfcmVuZGVyIiwiX3JvdXRlcyIsInBhZ2VzIiwid2lkZ2V0cyIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJpcyIsInVzZUJyZWFkY3J1bWIiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VFZmZlY3QiLCJ2YWxpZGF0ZSIsInBhdHRlcm4iLCJ1cmwiLCJyZWdleHAiLCJmaW5hbFBhdHRlcm4iLCJyZXBsYWNlIiwib2JqIiwiUmVnRXhwIiwidGVzdCIsImZpbmQiLCJyb3V0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImdldFRleHRzIiwibWFwIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy9zdG9yZS9yb3V0ZXMudHMiLCIvL3R5cGVzLnRzLyIsIi8vdHMvdmlld3MvaW5kZXgudHN4IiwiLy90cy92aWV3cy91c2UtYnJlYWRjcnVtYi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBT087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUdKLE1BQUEsQ0FBQU0sZUFBZTtjQUM3QixPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sWUFBWTtZQUNwQjtZQUVBQyxZQUFZQSxDQUFBO2NBQ1g7Y0FDQyxJQUFJLENBQUNDLE1BQTJCLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDTyxNQUFNO1lBQzlEO1lBRUFBLE1BQU1BLENBQUEsR0FBSTs7VUFDVkMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJELElBQUFXLE1BQUEsR0FBQWQsT0FBQTtVQVNNLE1BQU9lLEtBQU0sU0FBUUQsTUFBQSxDQUFBRSxhQUErQjtZQUN6REMsT0FBTztZQUVQQyxZQUFBO2NBQ0MsS0FBSyxDQUFDO2dCQUFFQyxVQUFVLEVBQUUsQ0FBQyxPQUFPO2NBQUMsQ0FBRSxDQUFDO2NBQ2hDLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFD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