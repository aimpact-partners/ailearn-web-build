System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.2/config", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.2/components/charts", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp002ComponentsCharts) {
      dependency_12 = _aimpactAilearnApp002ComponentsCharts;
    }, function (_pragmateUi0037Icons) {
      dependency_13 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "1.0.1"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "1.0.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.1.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.18"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.2"], ["@aimpact/ailearn-app", "0.0.2"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/dashboard/students",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/ailearn-app/components/charts', dependency_12], ['pragmate-ui/icons', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.2/sessions/dashboard/students.widget",
        "is": "page",
        "route": "/sessions/dashboard/students/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.2/sessions/dashboard/students.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1966334698,
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
        hash: 1950994537,
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
                console.log(8);
                const response = await this.#api.get(`/dashboard/assessment/${id}`);
                console.log(9, response);
                if (!response.status) {
                  throw new Error(response.message);
                }
                this.selection = response.data.selection;
                console.log(11, this.selection);
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
        hash: 920934707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("./model");
          var _model2 = require("@beyond-js/reactive/model");
          class StoreManager extends _model2.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            async load(id) {
              //22ca1c6d-6235-44fc-92ff-74f41d7c8658
              try {
                this.fetching = true;
                const model = new _model.Dashboard();
                id = '22ca1c6d-6235-44fc-92ff-74f41d7c8658';
                this.#model = model;
                await model.load(id);
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
        hash: 343304305,
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
            }, _react.default.createElement("h2", null, texts.selection.title), _react.default.createElement(_list.List, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJzZWxlY3Rpb24iLCJkYXRhIiwicmVhZHkiLCJlIiwiX21vZGVsMiIsImZldGNoaW5nIiwiZXJyb3IiLCJfYmV5b25kX2NvbnRleHQiLCJfcmVhY3QiLCJfY29tcG9uZW50cyIsIl9ob29rcyIsIl9ob29rczIiLCJfbGlzdCIsIl9pdGVtIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ0ZXh0cyIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiY3JlYXRlRWxlbWVudCIsIlNwaW5uZXIiLCJhY3RpdmUiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInRpdGxlIiwiTGlzdCIsInF1ZXN0aW9ucyIsIkl0ZW0iLCJfaWNvbnMiLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJxdWVzdGlvbiIsIkljb24iLCJpY29uIiwidG90YWwiLCJjb3JyZWN0Iiwid3JvbmciLCJjb250YWluZXIiLCJDb250YWluZXIiLCJvdXRwdXQiLCJtYXAiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2xpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkQsSUFBQWMsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixJQUFB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