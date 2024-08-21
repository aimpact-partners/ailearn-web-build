System.register(["@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "pragmate-ui@1.0.0-beta.2/breadcrumb", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/base", "@beyond-js/reactive@1.2.0/model", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/widgets@1.1.0/render"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, BredcrumbApp, ROUTES, __beyond_pkg, hmr;
  _export({
    BredcrumbApp: void 0,
    ROUTES: void 0
  });
  return {
    setters: [function (_beyondJsKernel019Bundle) {
      dependency_0 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_1 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_2 = _react2;
    }, function (_pragmateUi100Beta2Breadcrumb) {
      dependency_3 = _pragmateUi100Beta2Breadcrumb;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_4 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Base) {
      dependency_5 = _pragmateUi100Beta2Base;
    }, function (_beyondJsReactive120Model) {
      dependency_6 = _beyondJsReactive120Model;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_beyondJsWidgets110Render) {
      dependency_9 = _beyondJsWidgets110Render;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.01"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_0);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.01/components/breadcrumb",
          "multibundle": true
        },
        "type": "code"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/kernel/styles', dependency_1], ['react', dependency_2], ['pragmate-ui/breadcrumb', dependency_3], ['@beyond-js/react-18-widgets/hooks', dependency_4], ['pragmate-ui/base', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['@beyond-js/widgets/render', dependency_9]]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.01/components/breadcrumb.code');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./breadcrumb
      ****************************/
      ims.set('./breadcrumb', {
        hash: 1134600110,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.BredcrumbApp = BredcrumbApp;
          var _react = require("react");
          var _breadcrumb = require("pragmate-ui/breadcrumb");
          var _useBreadcrumb = require("./use-breadcrumb");
          /*bundle*/
          function BredcrumbApp({
            className
          }) {
            const cls = `desktop-breadcrumb${className ? ` ${className}` : ''}`;
            const {
              items,
              ready,
              texts
            } = (0, _useBreadcrumb.useBreadcrumb)();
            if (!ready) return null;
            return _react.default.createElement(_breadcrumb.BreadCrumb, {
              className: cls,
              items: items,
              separator: ":"
            });
          }
        }
      });

      /**********************
      INTERNAL MODULE: ./item
      **********************/

      ims.set('./item', {
        hash: 75660524,
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
            #parent;
            constructor(parent) {
              super();
              this.#parent = parent;
            }
          }
          exports.BreadcrumbItem = BreadcrumbItem;
        }
      });

      /***********************
      INTERNAL MODULE: ./model
      ***********************/

      ims.set('./model', {
        hash: 481690056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Breadcrumb = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _routing = require("@beyond-js/kernel/routing");
          var _render = require("@beyond-js/widgets/render");
          var _routes = require("./routes");
          class Breadcrumb extends _model.ReactiveModel {
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #widget;
            get currentWidget() {
              return this.#widget;
            }
            get pages() {
              return [..._render.widgets.values()].filter(item => item.is === 'page');
            }
            get ready() {
              return this.#texts.ready && super.ready;
            }
            #items;
            get items() {
              return this.#items;
            }
            getItem() {}
            constructor() {
              super();
              this.#texts.on('change', this.listenTexts);
              _routing.routing.on('change', this.validate);
              super.ready = true;
              _routing.routing.on('change', this.listener.bind(this));
            }
            getTexts = items => {
              return items.map(item => {
                return [this.texts[item[0]], item[1]];
              });
            };
            listener() {
              const page = this.pages.find(item => this.validate(item.route, _routing.routing.uri.pathname));
              if (!_routes.ROUTES.hasOwnProperty(page.route)) return;
              this.#items = this.getTexts(_routes.ROUTES[page.route]);
              this.trigger('items.changed');
            }
            update(key, value) {
              if (!this.currentWidget) return;
            }
            validate(pattern, url) {
              // const regexp = /\/:[\wáéíóúÁÉÍÓÚñÑ]+/g;
              const regexp = /\$\{[\wáéíóúÁÉÍÓÚñÑ]+\}/g;
              const finalPattern = pattern.replace(regexp, '/\\w+');
              const obj = new RegExp(`^${finalPattern}$`, 'g');
              // Tes0ea la URL contra el patrón generado
              return obj.test(url);
            }
            listenTexts = () => {};
          }
          exports.Breadcrumb = Breadcrumb;
        }
      });

      /************************
      INTERNAL MODULE: ./routes
      ************************/

      ims.set('./routes', {
        hash: 2378105478,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ROUTES = void 0;
          /*bundle*/
          const ROUTES = exports.ROUTES = {
            home: '/',
            '/modules/management': [['modules', '/modules/list'], ['management']]
          };
        }
      });

      /********************************
      INTERNAL MODULE: ./use-breadcrumb
      ********************************/

      ims.set('./use-breadcrumb', {
        hash: 2129060684,
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
          var _routes = require("./routes");
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
        "im": "./breadcrumb",
        "from": "BredcrumbApp",
        "name": "BredcrumbApp"
      }, {
        "im": "./routes",
        "from": "ROUTES",
        "name": "ROUTES"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'BredcrumbApp') && _export("BredcrumbApp", BredcrumbApp = require ? require('./breadcrumb').BredcrumbApp : value);
        (require || prop === 'ROUTES') && _export("ROUTES", ROUTES = require ? require('./routes').ROUTES : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2JyZWFkY3J1bWIiLCJfdXNlQnJlYWRjcnVtYiIsIkJyZWRjcnVtYkFwcCIsImNsYXNzTmFtZSIsImNscyIsIml0ZW1zIiwicmVhZHkiLCJ0ZXh0cyIsInVzZUJyZWFkY3J1bWIiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkJyZWFkQ3J1bWIiLCJzZXBhcmF0b3IiLCJfbW9kZWwiLCJCcmVhZGNydW1iSXRlbSIsIlJlYWN0aXZlTW9kZWwiLCJuYW1lIiwidmFsdWUiLCJ0cmlnZ2VyIiwibGFiZWwiLCJwYXJlbnQiLCJsaW5rIiwiYWN0aXZlIiwiY29uc3RydWN0b3IiLCJleHBvcnRzIiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiX3JvdXRpbmciLCJfcmVuZGVyIiwiX3JvdXRlcyIsIkJyZWFkY3J1bWIiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ3aWRnZXQiLCJjdXJyZW50V2lkZ2V0IiwicGFnZXMiLCJ3aWRnZXRzIiwidmFsdWVzIiwiZmlsdGVyIiwiaXRlbSIsImlzIiwiZ2V0SXRlbSIsIm9uIiwibGlzdGVuVGV4dHMiLCJyb3V0aW5nIiwidmFsaWRhdGUiLCJsaXN0ZW5lciIsImJpbmQiLCJnZXRUZXh0cyIsIm1hcCIsInBhZ2UiLCJmaW5kIiwicm91dGUiLCJ1cmkiLCJwYXRobmFtZSIsIlJPVVRFUyIsImhhc093blByb3BlcnR5IiwidXBkYXRlIiwia2V5IiwicGF0dGVybiIsInVybCIsInJlZ2V4cCIsImZpbmFsUGF0dGVybiIsInJlcGxhY2UiLCJvYmoiLCJSZWdFeHAiLCJ0ZXN0IiwiaG9tZSIsIl9ob29rcyIsInVzZVRleHRzIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCJdLCJzb3VyY2VzIjpbIi90cy9icmVhZGNydW1iLnRzeCIsIi90cy9pdGVtLnRzIiwiL3RzL21vZGVsLnRzIiwiL3RzL3JvdXRlcy50cyIsIi90cy91c2UtYnJlYWRjcnVtYi50c3gi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