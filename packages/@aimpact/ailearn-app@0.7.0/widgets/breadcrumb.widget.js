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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJTdG9yZSIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwicmVhZHkiLCJ0cmlnZ2VyQnJlYWRjcnVtYkNoYW5nZSIsInRyaWdnZXIiLCJnbG9iYWxUaGlzIiwiYmMiLCJST1VURVMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX3JlYWN0IiwiX2JyZWFkY3J1bWIiLCJfaG9va3MiLCJjbGFzc05hbWUiLCJjbHMiLCJzZXRVcGRhdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJpdGVtcyIsImNyZWF0ZUVsZW1lbnQiLCJCcmVhZENydW1iIiwic2VwYXJhdG9yIiwiX3JvdXRpbmciLCJfYmV5b25kX2NvbnRleHQiLCJfcmVuZGVyIiwiX3JvdXRlcyIsInBhZ2VzIiwid2lkZ2V0cyIsInZhbHVlcyIsImZpbHRlciIsIml0ZW0iLCJpcyIsInVzZUJyZWFkY3J1bWIiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0SXRlbXMiLCJ1c2VFZmZlY3QiLCJ2YWxpZGF0ZSIsInBhdHRlcm4iLCJ1cmwiLCJyZWdleHAiLCJmaW5hbFBhdHRlcm4iLCJyZXBsYWNlIiwib2JqIiwiUmVnRXhwIiwidGVzdCIsImZpbmQiLCJyb3V0ZSIsInJvdXRpbmciLCJ1cmkiLCJwYXRobmFtZSIsImdldFRleHRzIiwibWFwIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS9yb3V0ZXMudHMiLCIvdHlwZXMudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3VzZS1icmVhZGNydW1iLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBTSxlQUFlO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUFDLFlBQVlBLENBQUE7Y0FDWDtjQUNDLElBQUksQ0FBQ0MsTUFBMkIsQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFBUCxLQUFNLENBQUNPLE1BQU07WUFDOUQ7WUFFQUEsTUFBTUEsQ0FBQSxHQUFJOztVQUNWQyxPQUFBLENBQUFWLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkQsSUFBQVcsTUFBQSxHQUFBZCxPQUFBO1VBU00sTUFBT2UsS0FBTSxTQUFRRCxNQUFBLENBQUFFLGFBQStCO1lBQ3pEQyxPQUFPO1lBRVBDLFlBQUE7Y0FDQyxLQUFLLENBQUM7Z0JBQUVDLFVBQVUsRUFBRSxDQUFDLE9BQU87Y0FBQyxDQUFFLENBQUM7Y0FDaEMsS0FBSyxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNuQjtZQUVB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