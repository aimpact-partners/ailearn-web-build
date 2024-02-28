System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_7 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChat101SharedComponents) {
      dependency_8 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_9 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_10 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/all-in-one",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/ailearn-app/config', dependency_7], ['@aimpact/chat/shared/components', dependency_8], ['@beyond-js/react-18-widgets/hooks', dependency_9], ['@aimpact/chat/shared/hooks', dependency_10]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-all-in-one",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/all-in-one.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/all-in-one/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/all-in-one.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3286864425,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            /**
             * this method is executed when the widget is showd
             */
            show() {
              this.#store.load(this.uri.vars.get('assignmentId'), this.uri.vars.get('id'));
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2012117495,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #items;
            get items() {
              return this.#items;
            }
            #paramsUri;
            get paramsUri() {
              return this.#paramsUri;
            }
            async load(assignmentId, activityId) {
              try {
                this.#paramsUri = {
                  assignmentId,
                  activityId
                };
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2629778794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useAllInOneContext = exports.AllInOneContext = void 0;
          var _react = require("react");
          const AllInOneContext = exports.AllInOneContext = _react.default.createContext({});
          const useAllInOneContext = () => _react.default.useContext(AllInOneContext);
          exports.useAllInOneContext = useAllInOneContext;
        }
      });

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 2019865366,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAllInOneContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Class', `/assignments/${store.paramsUri.assignmentId}`], ['All']]
            }), _react.default.createElement("h4", {
              className: "h2 all-in-one__title"
            }, texts.title));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2162259060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _react = require("react");
          var _context = require("./context");
          var _header = require("./header");
          var _components = require("@aimpact/chat/shared/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(true);
            const [items, setItems] = (0, _react.useState)(store.items);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => {
              setReady(store.ready);
            });
            if (!ready || !textsReady) return _react.default.createElement(_components.PreloadScreen, null);
            const contextValue = {
              texts,
              fetching: store.fetching,
              store,
              items
            };
            return _react.default.createElement(_context.AllInOneContext.Provider, {
              value: contextValue
            }, _react.default.createElement("div", null, _react.default.createElement(_header.Header, null), _react.default.createElement("h1", null, "All In One")));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJBbGxJbk9uZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFsbEluT25lQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29udGV4dCIsIl9jb25maWciLCJIZWFkZXIiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIl9oZWFkZXIiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251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