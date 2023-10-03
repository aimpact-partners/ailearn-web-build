System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@1.0.0/components/charts", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp100Config) {
      dependency_7 = _aimpactAilearnApp100Config;
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
    }, function (_aimpactAilearnApp100ComponentsCharts) {
      dependency_13 = _aimpactAilearnApp100ComponentsCharts;
    }, function (_pragmateUi0037Icons) {
      dependency_14 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "1.0.0"], ["@aimpact/ailearn-app", "1.0.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/chat/shared/hooks', dependency_12], ['@aimpact/ailearn-app/components/charts', dependency_13], ['pragmate-ui/icons', dependency_14]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@1.0.0/sessions/dashboard.widget",
        "is": "page",
        "route": "/sessions/dashboard/${id}/lesson",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@1.0.0/sessions/dashboard.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJzZWxlY3Rpb24iLCJkYXRhIiwicmVhZHkiLCJlIiwiX21vZGVsMiIsIl9jb3JlIiwic2Vzc2lvbiIsImZldGNoaW5nIiwiU2Vzc2lvbiIsImVycm9yIiwiX2JleW9uZF9jb250ZXh0IiwiX3JlYWN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfaG9va3MyIiwiX2xpc3QiLCJfaXRlbSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidGV4dHMiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInVzZUJpbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJTcGlubmVyIiwiYWN0aXZlIiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIkxpc3QiLCJxdWVzdGlvbnMiLCJJdGVtIiwiX2ljb25zIiwiaXRlbSIsImluZGV4Iiwia2V5IiwicXVlc3Rpb24iLCJJY29uIiwiaWNvbiIsInRvdGFsIiwiY29ycmVjdCIsIndyb25nIiwiY29udGFpbmVyIiwiQ29udGFpbmVyIiwib3V0cHV0IiwibWFwIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtLnRzeCIsIi90cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Y0FDZixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBZixVQUFBLEdBQUFB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