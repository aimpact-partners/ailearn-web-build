System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.11/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.11/shared/charts", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/empty", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/list", "@aimpact/ailearn-app@0.0.11/components/charts", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp0011Config) {
      dependency_7 = _aimpactAilearnApp0011Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0011SharedCharts) {
      dependency_11 = _aimpactAilearnApp0011SharedCharts;
    }, function (_aimpactChat101SharedComponents) {
      dependency_12 = _aimpactChat101SharedComponents;
    }, function (_pragmateUi003Empty) {
      dependency_13 = _pragmateUi003Empty;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_14 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Components) {
      dependency_15 = _pragmateUi003Components;
    }, function (_pragmateUi003List) {
      dependency_16 = _pragmateUi003List;
    }, function (_aimpactAilearnApp0011ComponentsCharts) {
      dependency_17 = _aimpactAilearnApp0011ComponentsCharts;
    }, function (_pragmateUi003Icons) {
      dependency_18 = _pragmateUi003Icons;
    }, function (_pragmateUi003Tooltip) {
      dependency_19 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.10/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/shared/charts', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/charts', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/tooltip', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.10/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/dashboard/${id}/classwork",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.10/assignments/dashboard.widget');
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
        hash: 3810340331,
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
            #participants;
            get totalMultiple() {
              return this.participants.reduce((acc, curr) => {
                if (curr.selection) return acc + 1;
                return acc;
              }, 0);
            }
            get totalSpoken() {
              return this.participants.reduce((acc, curr) => {
                if (curr.selection) return acc + 1;
                return acc;
              }, 0);
            }
            constructor() {
              super();
              this.#api = new _api.Api(_config.default.params.apis.ailearn);
              this.reactiveProps(['selection', 'spoken', 'found', 'assessment']);
              globalThis.model = this;
            }
            async load(id) {
              try {
                this.#api.bearer(_session.sessionWrapper.user.token);
                const response = await this.#api.get(`/dashboard/assessment/${id}`);
                if (!response.status) {
                  throw new Error(response.message);
                }
                console.log(44, response);
                if (Object.keys(response.data).length === 0) {
                  this.found = false;
                  this.ready = true;
                  return;
                }
                this.assessment = JSON.parse(response.data.assessment);
                this.participants = response.data.participants;
                this.found = true;
                this.ready = true;
              } catch (e) {
                console.log(e);
              }
            }
          }
          exports.Dashboard = Dashboard;
        }
      });

      /**********************************
      INTERNAL MODULE: ./model/interfaces
      **********************************/

      ims.set('./model/interfaces', {
        hash: 2076148629,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1636371327,
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
            get session() {
              return this.#session;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            get assignment() {
              return this.#session;
            }
            get model() {
              return this.#model;
            }
            async load(id) {
              //22ca1c6d-6235-44fc-92ff-74f41d7c8658
              try {
                this.fetching = true;
                const model = new _model.Dashboard();
                this.#model = model;
                await model.load(id);
                const sessionId = id.split('.')[0];
                this.#assignmentId = id;
                const session = new _core.Session({
                  id: sessionId
                });
                this.#session = session;
                const data = await session.load();
                console.log(0.1, this.assignment, data);
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

      /************************************
      INTERNAL MODULE: ./views/charts/index
      ************************************/

      ims.set('./views/charts/index', {
        hash: 1168901782,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Charts = Charts;
          var _react = require("react");
          var _context = require("../context");
          var _multiple = require("./multiple");
          var _spoken = require("./spoken");
          function Charts(props) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("section", {
              className: "charts__container"
            }, _react.default.createElement(_multiple.MultipleChart, null), _react.default.createElement(_spoken.SpokenChart, null));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/charts/multiple
      ***************************************/

      ims.set('./views/charts/multiple', {
        hash: 3254963533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChart = MultipleChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          function MultipleChart() {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.multiple), _react.default.createElement(_charts.Chart, {
              options: {
                series: [diff, store.model.totalMultiple],
                chart: {
                  width: 380,
                  type: 'donut'
                },
                labels: [texts.participation.pending, texts.participation.total],
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }]
              }
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/charts/spoken
      *************************************/

      ims.set('./views/charts/spoken', {
        hash: 539753187,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenChart = SpokenChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          function SpokenChart() {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
              options: {
                series: [diff, store.model.totalSpoken],
                chart: {
                  width: 380,
                  type: 'donut'
                },
                labels: [texts.participation.pending, texts.participation.total],
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }]
              }
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 2055015549,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDashboardContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/empty
      *****************************/

      ims.set('./views/empty', {
        hash: 587615303,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _components = require("@aimpact/chat/shared/components");
          var _empty = require("pragmate-ui/empty");
          function Empty({
            store,
            texts
          }) {
            const {
              assignment
            } = store;
            return _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement(_components.CollapsibleHeader, {
              collapsed: true,
              title: assignment.lesson.name
            }), _react.default.createElement(_empty.Empty, {
              text: texts.empty,
              icon: "info"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 705524854,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _beyond_context = require("beyond_context");
          var _react = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _components2 = require("@aimpact/chat/shared/components");
          var _item = require("./item");
          var _context = require("./context");
          var _charts = require("./charts");
          var _empty = require("./empty");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (!store.model.found) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts
            });
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: {
                texts,
                spoken: store.model.spoken,
                assessment: store.model.assessment,
                store: store
              }
            }, _react.default.createElement("div", {
              className: "page__container"
            }, _react.default.createElement(_components2.CollapsibleHeader, {
              collapsed: true,
              title: store.model.assessment.title
            }), _react.default.createElement(_charts.Charts, null), _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.model.participants,
              control: _item.Item
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 3981301580,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _spoken = require("./spoken");
          var _icons = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          function Item({
            data
          }) {
            const {
              texts,
              assessment,
              store
            } = (0, _context.useDashboardContext)();
            const questions = assessment.questions.length;
            const selection = data.selection?.length ? data.selection : [];
            const total = selection.reduce((acc, item, index) => {
              if (assessment.questions[index].correct_answer === parseInt(item)) {
                return acc + 1;
              }
              return acc;
            }, 0);
            const colors = ['danger', 'danger', 'warning', 'success', 'success'];
            const cls = `bar-result bar-result--${colors[total]}`;
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: `/assignments/dashboard/user-detail/${data.user.id}?assignmentId=${store.assignmentId}`
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, _react.default.createElement(_icons.Icon, {
              icon: "user"
            }), data.user.name)), _react.default.createElement("section", {
              className: "card__detail"
            }, _react.default.createElement("span", null, texts.multiple), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("span", {
              className: cls
            }), _react.default.createElement("span", {
              className: "quantity"
            }, total, "/", questions))), _react.default.createElement(_spoken.SpokenData, {
              data: data
            })));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/item/spoken
      ***********************************/

      ims.set('./views/item/spoken', {
        hash: 1728636548,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenData = SpokenData;
          var _react = require("react");
          var _context = require("../context");
          var _core = require("@aimpact/ailearn-sdk/core");
          var _tooltip = require("pragmate-ui/tooltip");
          var _list = require("pragmate-ui/list");
          function SpokenData({
            data
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const faces = Object.keys(_core.Faces);
            const control = ({
              data
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: data
              }, _react.default.createElement("span", {
                className: "result__icon"
              }, _core.Faces[data]));
            };
            return _react.default.createElement("section", {
              className: "card__detail"
            }, _react.default.createElement("h4", null, texts.spoken), data.spoken?.length ? _react.default.createElement(_list.List, {
              className: "spoken-evaluation",
              items: faces,
              control: control
            }) : _react.default.createElement("span", {
              className: "spoken-evaluation"
            }, "No evaluation"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2VsZWN0aW9uIiwidG90YWxTcG9rZW4iLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJsZW5ndGgiLCJmb3VuZCIsInJlYWR5IiwiYXNzZXNzbWVudCIsIkpTT04iLCJwYXJzZSIsImUiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl9jb3JlIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsInNlc3Npb25JZCIsInNwbGl0IiwiU2Vzc2lvbiIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwicHJvcHMiLCJ0ZXh0cyIsInVzZURhc2hib2FyZENvbnRleHQiLCJkaWZmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJ0b3RhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9lbXB0eSIsIkVtcHR5IiwiQ29sbGFwc2libGVIZWFkZXIiLCJjb2xsYXBzZWQiLCJ0aXRsZSIsImxlc3NvbiIsIm5hbWUiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiX2xpc3QiLCJfY29tcG9uZW50czIiLCJfaXRlbSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9pY29ucyIsInF1ZXN0aW9ucyIsIml0ZW0iLCJpbmRleCIsImNvcnJlY3RfYW5zd2VyIiwicGFyc2VJbnQiLCJjb2xvcnMiLCJjbHMiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJTcG9rZW5EYXRhIiwiX3Rvb2x0aXAiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUEsR0FBSTs7VUFDUkMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJELElBQUFjLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsSUFB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