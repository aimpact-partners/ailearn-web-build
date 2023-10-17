System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.10/config", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.37/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "@aimpact/ailearn-app@0.0.10/components/charts", "pragmate-ui@0.0.37/icons"], function (_export, _context) {
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
    }, function (_aimpactAilearnApp0010Config) {
      dependency_7 = _aimpactAilearnApp0010Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_pragmateUi0037Components) {
      dependency_9 = _pragmateUi0037Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_10 = _beyondJsReact18Widgets101Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_11 = _aimpactChat101SharedHooks;
    }, function (_aimpactAilearnApp0010ComponentsCharts) {
      dependency_12 = _aimpactAilearnApp0010ComponentsCharts;
    }, function (_pragmateUi0037Icons) {
      dependency_13 = _pragmateUi0037Icons;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["chart.js", "4.4.0"], ["dayjs", "1.11.9"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.10"], ["@aimpact/ailearn-app", "0.0.10"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/sessions/dashboard/students",
          "multibundle": true
        },
        "type": "widget"
      }, _context.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['pragmate-ui/components', dependency_9], ['@beyond-js/react-18-widgets/hooks', dependency_10], ['@aimpact/chat/shared/hooks', dependency_11], ['@aimpact/ailearn-app/components/charts', dependency_12], ['pragmate-ui/icons', dependency_13]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/sessions/dashboard/students.widget",
        "is": "page",
        "route": "/sessions/dashboard/students/${id}",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/sessions/dashboard/students.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QmhCO2NBQUtRLFNBQVMsRUFBQztZQUFTLEdBQ3ZCUjtjQUFJUSxTQUFTLEVBQUM7WUFBZSxHQUM1QlIseUNBQ0NBLDZCQUFDaUIsV0FBSTtjQUFDQyxJQUFJLEVBQUM7WUFBTSxFQUFHLEVBQ3BCbEIsMkNBQU9hLElBQUksQ0FBQ00sS0FBSyxDQUFRLENBQ3JCLEVBQ0xuQix5Q0FDQ0EsNkJBQUNpQixXQUFJO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNWLFNBQVMsRUFBQztZQUFlLEVBQUcsRUFDOUNSLDJDQUFPYSxJQUFJLENBQUNPLE9BQU8sQ0FBQ0QsS0FBSyxDQUFRLENBQzdCLEVBQ0xuQix5Q0FDQ0EsNkJBQUNpQixXQUFJO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNWLFNBQVMsRUFBQztZQUFjLEVBQUcsRUFDN0NSLDJDQUFPYSxJQUFJLENBQUNRLEtBQUssQ0FBQ0YsS0FBSyxDQUFRLENBQzNCLENBQ0QsQ0FDQSxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBO1VBTU0sU0FBVVQsSUFBSSxDQUFDO1lBQUVqQixJQUFJO1lBQUVtQixJQUFJO1lBQUVVO1VBQVMsQ0FBUztZQUNwRCxNQUFNQyxTQUFTLEdBQUdELFNBQVMsSUFBSXRCLGNBQUssQ0FBQ3dCLFFBQVE7WUFDN0MsTUFBTUMsTUFBTSxHQUFHaEMsSUFBSSxDQUFDaUMsR0FBRyxDQUFDLENBQUNiLElBQUksRUFBRUMsS0FBSyxLQUFJO2NBQ3ZDLE9BQU9kLDZCQUFDWSxJQUFJO2dCQUFDRyxHQUFHLEVBQUUsR0FBR0QsS0FBSyxFQUFFO2dCQUFFRCxJQUFJLEVBQUVBO2NBQUksRUFBSTtZQUM3QyxDQUFDLENBQUM7WUFDRixPQUFPYiw2QkFBQ3VCLFNBQVMsUUFBRUUsTUFBTSxDQUFhO1VBQ3ZDIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJjb25zdHJ1Y3RvciIsIkFwaSIsImNvbmZpZyIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJzZWxlY3Rpb24iLCJkYXRhIiwicmVhZHkiLCJlIiwiZmV0Y2hpbmciLCJlcnJvciIsInN0b3JlIiwic2V0UmVhZHkiLCJSZWFjdCIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImNsYXNzTmFtZSIsInRpdGxlIiwiTGlzdCIsInF1ZXN0aW9ucyIsIkl0ZW0iLCJpdGVtIiwiaW5kZXgiLCJrZXkiLCJxdWVzdGlvbiIsIkljb24iLCJpY29uIiwidG90YWwiLCJjb3JyZWN0Iiwid3JvbmciLCJjb250YWluZXIiLCJDb250YWluZXIiLCJGcmFnbWVudCIsIm91dHB1dCIsIm1hcCJdLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXMiOlsidHMvY29udHJvbGxlci50cyIsInRzL21vZGVsL2luZGV4LnRzeCIsInRzL3N0b3JlLnRzIiwidHMvdmlld3MvaW5kZXgudHN4IiwidHMvdmlld3MvaXRlbS50c3giLCJ0cy92aWV3cy9saXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=