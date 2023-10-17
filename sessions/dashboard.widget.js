System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.2/components/charts", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp002Config) {
      dependency_7 = _aimpactAilearnApp002Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_pragmateUi0037Components) {
      dependency_10 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_11 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_12 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp002ComponentsCharts) {
      dependency_13 = _aimpactAilearnApp002ComponentsCharts;
    }, function (_pragmateUi0037Icons) {
      dependency_14 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/charts', dependency_13], ['pragmate-ui/icons', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/dashboard.widget",
        "is": "page",
        "route": "/sessions/dashboard/${id}/lesson",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/sessions/dashboard.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2918291776,
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
            show() {
              console.log(10);
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/index
      *****************************/

      ims.set('./model/index', {
        hash: 620198295,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Dashboard extends _model.ReactiveModel {
            #api;
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.reactiveProps(['selection', 'spoken']);
              globalThis.model = this;
            }
            async load(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/dashboard/assessment/${id}`);
                if (!response.status) {
                  throw new Error(response.message);
                }
                this.selection = response.data.selection;
                this.ready = true;
              } catch (e) {
                console.log(e);
              }
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 2376697114,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("./model");
          var _model2 = require("@beyond-js/reactive/model");
          var _core = require("@aimpact/ailearn-sdk/core");
          class StoreManager extends _model2.ReactiveModel {
            #model;
            #session;
            get model() {
              return this.#model;
            }
            async load(id) {
              //22ca1c6d-6235-44fc-92ff-74f41d7c8658
              try {
                this.fetching = true;
                const model = new _model.Dashboard();
                const session = new _core.Session({
                  id
                });
                await session.load();
                console.log(0.1, session);
                // id = '22ca1c6d-6235-44fc-92ff-74f41d7c8658';
                // this.#model = model;
                // await model.load(id);
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2510090571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _list = require("./list");
          var _item = require("./item");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement("h2", null, texts.selection.title), store.model?.selection && _react.default.createElement(_list.List, {
              data: store.model.selection.questions,
              Item: _item.Item
            })));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/item
      ****************************/

      ims.set('./views/item', {
        hash: 1890134858,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          function Item({
            item,
            index
          }) {
            return _react.default.createElement("article", {
              key: `${item.question}.${index}`,
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("span", null, item.question), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement("ul", {
              className: "list-unstyled"
            }, _react.default.createElement("li", null, _react.default.createElement(_icons.Icon, {
              icon: "user"
            }), _react.default.createElement("span", null, item.total)), _react.default.createElement("li", null, _react.default.createElement(_icons.Icon, {
              icon: "user",
              className: "icon--success"
            }), _react.default.createElement("span", null, item.correct.total)), _react.default.createElement("li", null, _react.default.createElement(_icons.Icon, {
              icon: "user",
              className: "icon--danger"
            }), _react.default.createElement("span", null, item.wrong.total)))));
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./views/list
      ****************************/

      ims.set('./views/list', {
        hash: 2586752143,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.List = List;
          var _react = require("react");
          function List({
            data,
            Item,
            container
          }) {
            const Container = container ?? _react.default.Fragment;
            const output = data.map((item, index) => {
              return _react.default.createElement(Item, {
                key: `${index}`,
                item: item
              });
            });
            return _react.default.createElement(Container, null, output);
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQVEsRUFDNUJoQjtjQUFLUSxTQUFTLEVBQUM7WUFBUyxHQUN2QlI7Y0FBSVEsU0FBUyxFQUFDO1lBQWUsR0FDNUJSLHlDQUNDQSw2QkFBQ2lCLFdBQUk7Y0FBQ0MsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNwQmxCLDJDQUFPYSxJQUFJLENBQUNNLEtBQUssQ0FBUSxDQUNyQixFQUNMbkIseUNBQ0NBLDZCQUFDaUIsV0FBSTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDVixTQUFTLEVBQUM7WUFBZSxFQUFHLEVBQzlDUiwyQ0FBT2EsSUFBSSxDQUFDTyxPQUFPLENBQUNELEtBQUssQ0FBUSxDQUM3QixFQUNMbkIseUNBQ0NBLDZCQUFDaUIsV0FBSTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDVixTQUFTLEVBQUM7WUFBYyxFQUFHLEVBQzdDUiwyQ0FBT2EsSUFBSSxDQUFDUSxLQUFLLENBQUNGLEtBQUssQ0FBUSxDQUMzQixDQUNELENBQ0EsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQTtVQU1NLFNBQVVULElBQUksQ0FBQztZQUFFbkIsSUFBSTtZQUFFcUIsSUFBSTtZQUFFVTtVQUFTLENBQVM7WUFDcEQsTUFBTUMsU0FBUyxHQUFHRCxTQUFTLElBQUl0QixjQUFLLENBQUN3QixRQUFRO1lBQzdDLE1BQU1DLE1BQU0sR0FBR2xDLElBQUksQ0FBQ21DLEdBQUcsQ0FBQyxDQUFDYixJQUFJLEVBQUVDLEtBQUssS0FBSTtjQUN2QyxPQUFPZCw2QkFBQ1ksSUFBSTtnQkFBQ0csR0FBRyxFQUFFLEdBQUdELEtBQUssRUFBRTtnQkFBRUQsSUFBSSxFQUFFQTtjQUFJLEVBQUk7WUFDN0MsQ0FBQyxDQUFDO1lBQ0YsT0FBT2IsNkJBQUN1QixTQUFTLFFBQUVFLE1BQU0sQ0FBYTtVQUN2QyIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImNvbnN0cnVjdG9yIiwiQXBpIiwiY29uZmlnIiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwic2VsZWN0aW9uIiwiZGF0YSIsInJlYWR5IiwiZSIsImZldGNoaW5nIiwic2Vzc2lvbiIsIlNlc3Npb24iLCJlcnJvciIsInN0b3JlIiwic2V0UmVhZHkiLCJSZWFjdCIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiTGlzdCIsInF1ZXN0aW9ucyIsIkl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJxdWVzdGlvbiIsIkljb24iLCJpY29uIiwidG90YWwiLCJjb3JyZWN0Iiwid3JvbmciLCJjb250YWluZXIiLCJDb250YWluZXIiLCJGcmFnbWVudCIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL21vZGVsL2luZGV4LnRzeCIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbS50c3giLCJ0cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=