System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.11/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.11/shared/charts", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.37/empty", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.37/components", "pragmate-ui@0.0.37/list", "@aimpact/ailearn-app@0.0.11/components/charts", "pragmate-ui@0.0.37/icons", "pragmate-ui@0.0.37/tooltip"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets101Page) {
      dependency_3 = _beyondJsReact18Widgets101Page;
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
    }, function (_pragmateUi0037Empty) {
      dependency_13 = _pragmateUi0037Empty;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_14 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi0037Components) {
      dependency_15 = _pragmateUi0037Components;
    }, function (_pragmateUi0037List) {
      dependency_16 = _pragmateUi0037List;
    }, function (_aimpactAilearnApp0011ComponentsCharts) {
      dependency_17 = _aimpactAilearnApp0011ComponentsCharts;
    }, function (_pragmateUi0037Icons) {
      dependency_18 = _pragmateUi0037Icons;
    }, function (_pragmateUi0037Tooltip) {
      dependency_19 = _pragmateUi0037Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.1.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.37"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["chart.js", "4.4.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.11"], ["@aimpact/ailearn-app", "0.0.11"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.11/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/shared/charts', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/charts', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/tooltip', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.11/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/dashboard/${id}/classwork",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.11/assignments/dashboard.widget');
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
          const DashboardContext = _react.default.createContext({});
          exports.DashboardContext = DashboardContext;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7VUFDQTtVQUVPO1VBQVUsTUFDWEEsVUFBVyxTQUFRQywrQkFBeUI7WUFDakQsTUFBTTtZQUNOQyxXQUFXO2NBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJQyxtQkFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFDQSxJQUFJQyxNQUFNO2NBQ1QsT0FBT0MsV0FBSTtZQUNaO1lBRUFDLElBQUk7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUksSUFBSTs7VUFDUkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJEO1VBQ0E7VUFDQTtVQUNBO1VBR00sTUFBT0MsU0FBVSxTQUFRQyxvQkFBd0I7WUFDdEQsSUFBSTtZQUlKLGFBQWE7WUFFYixJQUFJQyxhQUFhO2NBQ2hCLE9BQU8sSUFBSSxDQUFDQyxZQUFZLENBQUNDLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDN0MsSUFBSUEsSUFBSSxDQUFDQyxTQUFTLEVBQUUsT0FBT0YsR0FBRyxHQUFHLENBQUM7Z0JBQ2xDLE9BQU9BLEdBQUc7Y0FDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ047WUFDQSxJQUFJRyxXQUFXO2NBQ2QsT0FBTyxJQUFJLENBQUNMLFlBQVksQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUM3QyxJQUFJQSxJQUFJLENBQUNDLFNBQVMsRUFBRSxPQUFPRixHQUFHLEdBQUcsQ0FBQztnQkFDbEMsT0FBT0EsR0FBRztjQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBSTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSUMsUUFBRyxDQUFDQyxlQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztjQUNsRUMsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU1wQixJQUFJLENBQUNxQixFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUMsSUFBSSxDQUFDQyxNQUFNLENBQUNDLHVCQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUUzQyxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDM0IsR0FBRyxDQUFDLHlCQUF5QnNCLEVBQUUsRUFBRSxDQUFDO2dCQUM5RSxJQUFJLENBQUNLLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLENBQUM7O2dCQUdsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsRUFBRSxFQUFFTCxRQUFRLENBQUM7Z0JBQ3pCLElBQUlNLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDUCxRQUFRLENBQUNRLElBQUksQ0FBQyxDQUFDQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2tCQUM1QyxJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO2tCQUNsQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2tCQUNqQjs7Z0JBR0QsSUFBSSxDQUFDQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDZCxRQUFRLENBQUNRLElBQUksQ0FBQ0ksVUFBVSxDQUFDO2dCQUN0RCxJQUFJLENBQUNoQyxZQUFZLEdBQUdvQixRQUFRLENBQUNRLElBQUksQ0FBQzVCLFlBQVk7Z0JBRTlDLElBQUksQ0FBQzhCLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsQ0FBQyxDQUFDOztZQUVoQjs7VUFDQXZDOzs7Ozs7Ozs7OztVQzFERDs7VUFFQThCO1lBQ0FVO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEE7VUFFQTtVQUVBO1VBRU0sTUFBT2pELFlBQWEsU0FBUVcscUJBQTJCO1lBQzVELE1BQU07WUFDTixRQUFRO1lBQ1IsSUFBSXVDLE9BQU87Y0FDVixPQUFPLElBQUksQ0FBQyxRQUFRO1lBQ3JCO1lBRUEsYUFBYTtZQUNiLElBQUlDLFlBQVk7Y0FDZixPQUFPLElBQUksQ0FBQyxhQUFhO1lBQzFCO1lBRUEsSUFBSUMsVUFBVTtjQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVE7WUFDckI7WUFDQSxJQUFJekIsS0FBSztjQUNSLE9BQU8sSUFBSSxDQUFDLE1BQU07WUFDbkI7WUFFQSxNQUFNcEIsSUFBSSxDQUFDcUIsRUFBRTtjQUNaO2NBQ0EsSUFBSTtnQkFDSCxJQUFJLENBQUN5QixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTTFCLEtBQUssR0FBRyxJQUFJakIsZ0JBQVMsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBR2lCLEtBQUs7Z0JBQ25CLE1BQU1BLEtBQUssQ0FBQ3BCLElBQUksQ0FBQ3FCLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTBCLFNBQVMsR0FBRzFCLEVBQUUsQ0FBQzJCLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWxDLElBQUksQ0FBQyxhQUFhLEdBQUczQixFQUFFO2dCQUN2QixNQUFNc0IsT0FBTyxHQUFHLElBQUlNLGFBQU8sQ0FBQztrQkFBRTVCLEVBQUUsRUFBRTBCO2dCQUFTLENBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBR0osT0FBTztnQkFFdkIsTUFBTVQsSUFBSSxHQUFHLE1BQU1TLE9BQU8sQ0FBQzNDLElBQUksRUFBRTtnQkFDakM4QixPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDYyxVQUFVLEVBQUVYLElBQUksQ0FBQztnQkFDdkMsSUFBSSxDQUFDRyxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWFgsT0FBTyxDQUFDb0IsS0FBSyxDQUFDVCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUNLLFFBQVEsR0FBRyxLQUFLOztZQUV2Qjs7VUFDQTVDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hERDtVQUVBO1VBQ0E7VUFDQTtVQUVNLFNBQVVpRCxNQUFNLENBQUNDLEtBQUs7WUFDM0IsTUFBTTtjQUFFQyxLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHLGdDQUFtQixHQUFFO1lBQzlDLE1BQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDakMsS0FBSyxDQUFDZCxZQUFZLENBQUM2QixNQUFNLEdBQUdrQixLQUFLLENBQUNqQyxLQUFLLENBQUNmLGFBQWE7WUFDeEUsT0FDQ21EO2NBQVNDLFNBQVMsRUFBQztZQUFtQixHQUNyQ0QsNkJBQUNFLHVCQUFhLE9BQUcsRUFDakJGLDZCQUFDRyxtQkFBVyxPQUFHLENBQ047VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNmQTtVQUNBO1VBQ0E7VUFFTSxTQUFVRCxhQUFhO1lBQzVCLE1BQU07Y0FBRUwsS0FBSztjQUFFQztZQUFLLENBQUUsR0FBRyxnQ0FBbUIsR0FBRTtZQUM5QyxNQUFNQyxJQUFJLEdBQUdGLEtBQUssQ0FBQ2pDLEtBQUssQ0FBQ2QsWUFBWSxDQUFDNkIsTUFBTSxHQUFHa0IsS0FBSyxDQUFDakMsS0FBSyxDQUFDZixhQUFhO1lBQ3hFLE9BQ0NtRDtjQUFTQyxTQUFTLEVBQUM7WUFBYyxHQUNoQ0QseUNBQUtGLEtBQUssQ0FBQ00sUUFBUSxDQUFNLEVBQ3pCSiw2QkFBQ0ssYUFBSztjQUNMQyxPQUFPLEVBQUU7Z0JBQ1JDLE1BQU0sRUFBRSxDQUFDUixJQUFJLEVBQUVGLEtBQUssQ0FBQ2pDLEtBQUssQ0FBQ2YsYUFBYSxDQUFDO2dCQUN6QzJELEtBQUssRUFBRTtrQkFDTkMsS0FBSyxFQUFFLEdBQUc7a0JBQ1ZDLElBQUksRUFBRTtpQkFDTjtnQkFDREMsTUFBTSxFQUFFLENBQUNiLEtBQUssQ0FBQ2MsYUFBYSxDQUFDQyxPQUFPLEVBQUVmLEtBQUssQ0FBQ2MsYUFBYSxDQUFDRSxLQUFLLENBQUM7Z0JBQ2hFQyxVQUFVLEVBQUUsQ0FDWDtrQkFDQ0MsVUFBVSxFQUFFLEdBQUc7a0JBQ2ZWLE9BQU8sRUFBRTtvQkFDUkUsS0FBSyxFQUFFO3NCQUNOQyxLQUFLLEVBQUU7cUJBQ1A7b0JBQ0RRLE1BQU0sRUFBRTtzQkFDUEMsUUFBUSxFQUFFOzs7aUJBR1o7O1lBRUYsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBO1VBQ0E7VUFDQTtVQUVNLFNBQVVmLFdBQVc7WUFDMUIsTUFBTTtjQUFFTixLQUFLO2NBQUVDO1lBQUssQ0FBRSxHQUFHLGdDQUFtQixHQUFFO1lBQzlDLE1BQU1DLElBQUksR0FBR0YsS0FBSyxDQUFDakMsS0FBSyxDQUFDZCxZQUFZLENBQUM2QixNQUFNLEdBQUdrQixLQUFLLENBQUNqQyxLQUFLLENBQUNmLGFBQWE7WUFDeEUsT0FDQ21EO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDRCx5Q0FBS0YsS0FBSyxDQUFDcUIsTUFBTSxDQUFNLEVBQ3ZCbkIsNkJBQUNLLGFBQUs7Y0FDTEMsT0FBTyxFQUFFO2dCQUNSQyxNQUFNLEVBQUUsQ0FBQ1IsSUFBSSxFQUFFRixLQUFLLENBQUNqQyxLQUFLLENBQUNULFdBQVcsQ0FBQztnQkFDdkNxRCxLQUFLLEVBQUU7a0JBQ05DLEtBQUssRUFBRSxHQUFHO2tCQUNWQyxJQUFJLEVBQUU7aUJBQ047Z0JBQ0RDLE1BQU0sRUFBRSxDQUFDYixLQUFLLENBQUNjLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFZixLQUFLLENBQUNjLGFBQWEsQ0FBQ0UsS0FBSyxDQUFDO2dCQUNoRUMsVUFBVSxFQUFFLENBQ1g7a0JBQ0NDLFVBQVUsRUFBRSxHQUFHO2tCQUNmVixPQUFPLEVBQUU7b0JBQ1JFLEtBQUssRUFBRTtzQkFDTkMsS0FBSyxFQUFFO3FCQUNQO29CQUNEUSxNQUFNLEVBQUU7c0JBQ1BDLFFBQVEsRUFBRTs7O2lCQUdaOztZQUVGLEVBQ0EsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQTtVQVNPLE1BQU1FLGdCQUFnQixHQUFHcEIsY0FBSyxDQUFDcUIsYUFBYSxDQUFDLEVBQTJCLENBQUM7VUFBQzNFO1VBQzFFLE1BQU00RSxtQkFBbUIsR0FBRyxNQUFNdEIsY0FBSyxDQUFDdUIsVUFBVSxDQUFDSCxnQkFBZ0IsQ0FBQztVQUFDMUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVjVFO1VBQ0E7VUFDQTtVQUNNLFNBQVU4RSxLQUFLLENBQUM7WUFBRTNCLEtBQUs7WUFBRUM7VUFBSyxDQUFFO1lBQ3JDLE1BQU07Y0FBRVQ7WUFBVSxDQUFFLEdBQUdRLEtBQUs7WUFFNUIsT0FDQ0c7Y0FBS0MsU0FBUyxFQUFDO1lBQWlCLEdBQy9CRCw2QkFBQ3lCLDZCQUFpQjtjQUFDQyxTQUFTLEVBQUUsSUFBSTtjQUFFQyxLQUFLLEVBQUV0QyxVQUFVLENBQUN1QyxNQUFNLENBQUNDO1lBQUksRUFBSSxFQUNyRTdCLDZCQUFDOEIsWUFBYztjQUFDQyxJQUFJLEVBQUVqQyxLQUFLLENBQUNrQyxLQUFLO2NBQUVDLElBQUksRUFBQztZQUFNLEVBQUcsQ0FDNUM7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFFQTtVQUNBO1VBRUE7VUFDQTtVQUNPO1VBQVUsU0FDUjlGLElBQUksQ0FBQztZQUFFMEQ7VUFBSyxDQUFFO1lBQ3RCLE1BQU0sQ0FBQ2hCLEtBQUssRUFBRXFELFFBQVEsQ0FBQyxHQUFHbEMsY0FBSyxDQUFDbUMsUUFBUSxDQUFDdEMsS0FBSyxDQUFDaEIsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ3VELFVBQVUsRUFBRXRDLEtBQUssQ0FBQyxHQUFHLG1CQUFRLEVBQUN1QyxzQkFBTSxDQUFDQyxTQUFTLENBQUM7WUFFdEQsb0JBQVMsRUFBQyxDQUFDekMsS0FBSyxDQUFDLEVBQUUsTUFBTXFDLFFBQVEsQ0FBQ3JDLEtBQUssQ0FBQ2hCLEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQ0EsS0FBSyxJQUFJLENBQUN1RCxVQUFVLEVBQUUsT0FBT3BDLDZCQUFDdUMsbUJBQU87Y0FBQ0MsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUUzRCxJQUFJLENBQUMzQyxLQUFLLENBQUNqQyxLQUFLLENBQUNnQixLQUFLLEVBQUUsT0FBT29CLDZCQUFDd0IsWUFBSztjQUFDM0IsS0FBSyxFQUFFQSxLQUFLO2NBQUVDLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBRXBFLE9BQ0NFLDZCQUFDb0IseUJBQWdCLENBQUNxQixRQUFRO2NBQ3pCdkQsS0FBSyxFQUFFO2dCQUFFWSxLQUFLO2dCQUFFcUIsTUFBTSxFQUFFdEIsS0FBSyxDQUFDakMsS0FBSyxDQUFDdUQsTUFBTTtnQkFBRXJDLFVBQVUsRUFBRWUsS0FBSyxDQUFDakMsS0FBSyxDQUFDa0IsVUFBVTtnQkFBRWUsS0FBSyxFQUFFQTtjQUFLO1lBQUUsR0FFOUZHO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQkQsNkJBQUN5Qiw4QkFBaUI7Y0FBQ0MsU0FBUyxFQUFFLElBQUk7Y0FBRUMsS0FBSyxFQUFFOUIsS0FBSyxDQUFDakMsS0FBSyxDQUFDa0IsVUFBVSxDQUFDNkM7WUFBSyxFQUFJLEVBQzNFM0IsNkJBQUNMLGNBQU0sT0FBRyxFQUNWSyw2QkFBQzBDLFVBQUk7Y0FBQ3pDLFNBQVMsRUFBQywyQkFBMkI7Y0FBQzBDLEtBQUssRUFBRTlDLEtBQUssQ0FBQ2pDLEtBQUssQ0FBQ2QsWUFBWTtjQUFFOEYsT0FBTyxFQUFFQztZQUFJLEVBQUksQ0FDekYsQ0FDcUI7VUFFOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7VUFFQTtVQUNBO1VBQ0E7VUFDTSxTQUFVQSxJQUFJLENBQUM7WUFBRW5FO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVvQixLQUFLO2NBQUVoQixVQUFVO2NBQUVlO1lBQUssQ0FBRSxHQUFHLGdDQUFtQixHQUFFO1lBRTFELE1BQU1pRCxTQUFTLEdBQUdoRSxVQUFVLENBQUNnRSxTQUFTLENBQUNuRSxNQUFNO1lBQzdDLE1BQU16QixTQUFTLEdBQUd3QixJQUFJLENBQUN4QixTQUFTLEVBQUV5QixNQUFNLEdBQUdELElBQUksQ0FBQ3hCLFNBQVMsR0FBRyxFQUFFO1lBQzlELE1BQU00RCxLQUFLLEdBQUc1RCxTQUFTLENBQUNILE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUUrRixJQUFJLEVBQUVDLEtBQUssS0FBSTtjQUNuRCxJQUFJbEUsVUFBVSxDQUFDZ0UsU0FBUyxDQUFDRSxLQUFLLENBQUMsQ0FBQ0MsY0FBYyxLQUFLQyxRQUFRLENBQUNILElBQUksQ0FBQyxFQUFFO2dCQUNsRSxPQUFPL0YsR0FBRyxHQUFHLENBQUM7O2NBRWYsT0FBT0EsR0FBRztZQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTCxNQUFNbUcsTUFBTSxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztZQUVwRSxNQUFNQyxHQUFHLEdBQUcsMEJBQTBCRCxNQUFNLENBQUNyQyxLQUFLLENBQUMsRUFBRTtZQUNyRCxPQUNDZDtjQUFJQyxTQUFTLEVBQUM7WUFBaUIsR0FDOUJELDZCQUFDcUQsZ0JBQUk7Y0FDSnBELFNBQVMsRUFBQyxVQUFVO2NBQ3BCcUQsSUFBSSxFQUFFLHNDQUFzQzVFLElBQUksQ0FBQ1YsSUFBSSxDQUFDSCxFQUFFLGlCQUFpQmdDLEtBQUssQ0FBQ1QsWUFBWTtZQUFFLEdBRTdGWSw2Q0FDQ0EseUNBQ0NBLDZCQUFDdUQsV0FBSTtjQUFDdEIsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUNuQnZELElBQUksQ0FBQ1YsSUFBSSxDQUFDNkQsSUFBSSxDQUNYLENBQ0csRUFFVDdCO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDRCwyQ0FBT0YsS0FBSyxDQUFDTSxRQUFRLENBQVEsRUFDN0JKO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCRDtjQUFNQyxTQUFTLEVBQUVtRDtZQUFHLEVBQUksRUFDeEJwRDtjQUFNQyxTQUFTLEVBQUM7WUFBVSxHQUN4QmEsS0FBSyxPQUFHZ0MsU0FBUyxDQUNaLENBQ0YsQ0FDRyxFQUNWOUMsNkJBQUN3RCxrQkFBVTtjQUFDOUUsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDcEIsQ0FDSDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBR00sU0FBVThFLFVBQVUsQ0FBQztZQUFFOUU7VUFBSSxDQUFFO1lBQ2xDLE1BQU07Y0FBRW9CO1lBQUssQ0FBRSxHQUFHLGdDQUFtQixHQUFFO1lBRXZDLE1BQU0yRCxLQUFLLEdBQUdqRixNQUFNLENBQUNDLElBQUksQ0FBQ2lGLFdBQUssQ0FBQztZQUVoQyxNQUFNZCxPQUFPLEdBQUcsQ0FBQztjQUFFbEU7WUFBSSxDQUFFLEtBQUk7Y0FDNUIsT0FDQ3NCLDZCQUFDMkQsZ0JBQU87Z0JBQUNDLE9BQU8sRUFBRWxGO2NBQUksR0FDckJzQjtnQkFBTUMsU0FBUyxFQUFDO2NBQWMsR0FBRXlELFdBQUssQ0FBQ2hGLElBQUksQ0FBQyxDQUFRLENBQzFDO1lBRVosQ0FBQztZQUVELE9BQ0NzQjtjQUFTQyxTQUFTLEVBQUM7WUFBYyxHQUNoQ0QseUNBQUtGLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBTSxFQUN0QnpDLElBQUksQ0FBQ3lDLE1BQU0sRUFBRXhDLE1BQU0sR0FDbkJxQiw2QkFBQzBDLFVBQUk7Y0FBQ3pDLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQzBDLEtBQUssRUFBRWMsS0FBSztjQUFFYixPQUFPLEVBQUVBO1lBQU8sRUFBSSxHQUV0RTVDO2NBQU1DLFNBQVMsRUFBQztZQUFtQixtQkFDbkMsQ0FDUTtVQUVaIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsIldpZGdldCIsIlZpZXciLCJzaG93IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJ0b3RhbE11bHRpcGxlIiwicGFydGljaXBhbnRzIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJjb25maWciLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImRhdGEiLCJsZW5ndGgiLCJmb3VuZCIsInJlYWR5IiwiYXNzZXNzbWVudCIsIkpTT04iLCJwYXJzZSIsImUiLCJ2YWx1ZSIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwiZmV0Y2hpbmciLCJzZXNzaW9uSWQiLCJzcGxpdCIsIlNlc3Npb24iLCJlcnJvciIsIkNoYXJ0cyIsInByb3BzIiwic3RvcmUiLCJ0ZXh0cyIsImRpZmYiLCJSZWFjdCIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIm11bHRpcGxlIiwiQ2hhcnQiLCJvcHRpb25zIiwic2VyaWVzIiwiY2hhcnQiLCJ3aWR0aCIsInR5cGUiLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsInRvdGFsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsInVzZUNvbnRleHQiLCJFbXB0eSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY29sbGFwc2VkIiwidGl0bGUiLCJsZXNzb24iLCJuYW1lIiwiRW1wdHlDb21wb25lbnQiLCJ0ZXh0IiwiZW1wdHkiLCJpY29uIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsInF1ZXN0aW9ucyIsIml0ZW0iLCJpbmRleCIsImNvcnJlY3RfYW5zd2VyIiwicGFyc2VJbnQiLCJjb2xvcnMiLCJjbHMiLCJMaW5rIiwiaHJlZiIsIkljb24iLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJ0cy9jb250cm9sbGVyLnRzIiwidHMvbW9kZWwvaW5kZXgudHMiLCJ0cy9tb2RlbC9pbnRlcmZhY2VzLnRzIiwidHMvc3RvcmUudHMiLCJ0cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwidHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsInRzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwidHMvdmlld3MvY29udGV4dC50c3giLCJ0cy92aWV3cy9lbXB0eS50c3giLCJ0cy92aWV3cy9pbmRleC50c3giLCJ0cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsInRzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXX0=