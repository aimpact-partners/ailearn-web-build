System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@beyond-js/reactive@1.1.6/model", "react@18.2.0", "@aimpact/ailearn-app@0.0.19/components/ui", "@aimpact/chat@1.0.1/shared/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_beyondJsReactive116Model) {
      dependency_4 = _beyondJsReactive116Model;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnApp0019ComponentsUi) {
      dependency_6 = _aimpactAilearnApp0019ComponentsUi;
    }, function (_aimpactChat101SharedComponents) {
      dependency_7 = _aimpactChat101SharedComponents;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_8 = _beyondJsReact18Widgets103Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_9 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.19"], ["@aimpact/ailearn-app", "0.0.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.19/assignments/all-in-one",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-app/components/ui', dependency_6], ['@aimpact/chat/shared/components', dependency_7], ['@beyond-js/react-18-widgets/hooks', dependency_8], ['@aimpact/chat/shared/hooks', dependency_9]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-assignments-all-in-one",
        "vspecifier": "@aimpact/ailearn-app@0.0.19/assignments/all-in-one.widget",
        "is": "page",
        "route": "/assignments/${assignmentId}/all-in-one/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.19/assignments/all-in-one.widget');
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
        hash: 2199922479,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          /*bundle*/
          function Header() {
            const {
              texts,
              store
            } = (0, _context.useAllInOneContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignment', `/assignments/${store.paramsUri.assignmentId}`], ['Class', `/assignments/${store.paramsUri.assignmentId}`], ['All']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJpdGVtcyIsInBhcmFtc1VyaSIsImFzc2lnbm1lbnRJZCIsImFjdGl2aXR5SWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJfcmVhY3QiLCJBbGxJbk9uZUNvbnRleHQiLCJkZWZhdWx0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFsbEluT25lQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfY29udGV4dCIsIkhlYWRlciIsInRleHRzIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIl9oZWFkZXIiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9ob29rczIiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0SXRlbXMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJQcmVsb2FkU2NyZWVuIiwiY29udGV4dFZhbHVlIiwiZmV0Y2hpbmciLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBp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