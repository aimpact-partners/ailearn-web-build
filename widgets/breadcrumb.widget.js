System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@beyond-js/widgets@1.1.1/controller", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/breadcrumb", "pragmate-ui@1.0.0-beta.7/base", "@beyond-js/react-18-widgets@1.1.2/hooks"], function (_export, _context) {
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
    }, function (_beyondJsKernel019Texts) {
      dependency_6 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.1"], ["@aimpact/ailearn-app", "0.3.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@beyond-js/widgets/controller', dependency_4], ['@aimpact/reactive/model', dependency_5], ['@beyond-js/kernel/texts', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/breadcrumb', dependency_9], ['pragmate-ui/base', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-breadcrumb",
        "vspecifier": "@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.1/widgets/breadcrumb.widget');
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
        hash: 3436727464,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.breadcrumbStore = exports.Store = void 0;
          var _model = require("@aimpact/reactive/model");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImJyZWFkY3J1bWJTdG9yZSIsIldpZGdldCIsIkJyZWRjcnVtYkFwcCIsIm1hbmFnZVdpZGdldCIsIndpZGdldCIsInVwZGF0ZSIsImdsb2JhbFRoaXMiLCJhIiwiZXhwb3J0cyIsIl9tb2RlbCIsIlN0b3JlIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJyZWFkeSIsInRyaWdnZXJCcmVhZGNydW1iQ2hhbmdlIiwidHJpZ2dlciIsImJjIiwiUk9VVEVTIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9yZWFjdCIsIl9icmVhZGNydW1iIiwiX2hvb2tzIiwiY2xhc3NOYW1lIiwiY2xzIiwic2V0VXBkYXRlZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInNldFJlYWR5IiwidXNlQmluZGVyIiwiaXRlbXMiLCJjcmVhdGVFbGVtZW50IiwiQnJlYWRDcnVtYiIsInNlcGFyYXRvciIsIl9yb3V0aW5nIiwiX2JleW9uZF9jb250ZXh0IiwiX3JlbmRlciIsIl9yb3V0ZXMiLCJwYWdlcyIsIndpZGdldHMiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaXMiLCJ1c2VCcmVhZGNydW1iIiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEl0ZW1zIiwidXNlRWZmZWN0IiwidmFsaWRhdGUiLCJwYXR0ZXJuIiwidXJsIiwicmVnZXhwIiwiZmluYWxQYXR0ZXJuIiwicmVwbGFjZSIsIm9iaiIsIlJlZ0V4cCIsInRlc3QiLCJmaW5kIiwicm91dGUiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJnZXRUZXh0cyIsIm1hcCIsImhhc093blByb3BlcnR5Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUvaW5kZXgudHMiLCIvdHMvc3RvcmUvcm91dGVzLnRzIiwiL3R5cGVzLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy91c2UtYnJlYWRjcnVtYi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFPTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBR0osTUFBQSxDQUFBTSxlQUFlO2NBQzdCLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxZQUFZO1lBQ3BCO1lBRUFDLFlBQVlBLENBQUE7Y0FDVixJQUFJLENBQUNDLE1BQTJCLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDTyxNQUFNO2NBQzdEQyxVQUFVLENBQUNDLENBQUMsR0FBRyxJQUFJLENBQUNILE1BQU07WUFDM0I7WUFFQUMsTUFBTUEsQ0FBQSxHQUFJOztVQUNWRyxPQUFBLENBQUFaLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkQsSUFBQWEsTUFBQSxHQUFBaEIsT0FBQTtVQWFNLE1BQU9pQixLQUFNLFNBQVFELE1BQUEsQ0FBQUUsYUFBK0I7WUFDekRDLE9BQU87WUFFUEMsWUFBQTtjQUNDLEtBQUssQ0FBQztnQkFBRUMsVUFBVSxFQUFFLENBQUMsT0FBTztjQUFDLENBQUUs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