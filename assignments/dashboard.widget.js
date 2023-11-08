System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.14/shared/charts", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/empty", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/components", "pragmate-ui@0.0.3/list", "@aimpact/ailearn-app@0.0.14/components/charts", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0014Config) {
      dependency_7 = _aimpactAilearnApp0014Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactChat101Wrapper) {
      dependency_9 = _aimpactChat101Wrapper;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0014SharedCharts) {
      dependency_11 = _aimpactAilearnApp0014SharedCharts;
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
    }, function (_aimpactAilearnApp0014ComponentsCharts) {
      dependency_17 = _aimpactAilearnApp0014ComponentsCharts;
    }, function (_pragmateUi003Icons) {
      dependency_18 = _pragmateUi003Icons;
    }, function (_pragmateUi003Tooltip) {
      dependency_19 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/shared/charts', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/empty', dependency_13], ['@beyond-js/react-18-widgets/hooks', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/list', dependency_16], ['@aimpact/ailearn-app/components/charts', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/tooltip', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/dashboard/${id}/classwork",
        "layout": "chat-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/dashboard.widget');
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
        hash: 472643066,
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
        hash: 4015250032,
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
                theme: {
                  palette: 'palette3' // upto palette10
                },

                series: [diff, store.model.totalMultiple],
                chart: {
                  width: 380,
                  type: 'donut'
                },
                dataLabels: {
                  formatter: (value, data) => {
                    const {
                      seriesIndex,
                      w: {
                        config: {
                          series
                        }
                      }
                    } = data;
                    return series[seriesIndex];
                  }
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
        hash: 693637473,
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
                theme: {
                  palette: 'palette3' // upto palette10
                },

                dataLabels: {
                  formatter: (value, data) => {
                    const {
                      seriesIndex,
                      w: {
                        config: {
                          series
                        }
                      }
                    } = data;
                    return series[seriesIndex];
                  }
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
        hash: 689640225,
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
              title: assignment.lesson?.name
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
        hash: 1394758110,
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
            console.log(22, data);
            const control = ({
              data
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: data
              }, _react.default.createElement("span", {
                className: "result__icon"
              }, _core.Faces[data]));
            };
            const hasSpoken = data.spoken && Object.keys(data.spoken)?.length;
            return _react.default.createElement("section", {
              className: "card__detail"
            }, _react.default.createElement("h4", null, texts.spoken), hasSpoken ? _react.default.createElement(_list.List, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2VsZWN0aW9uIiwidG90YWxTcG9rZW4iLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImxlbmd0aCIsImZvdW5kIiwicmVhZHkiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl9jb3JlIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsInNlc3Npb25JZCIsInNwbGl0IiwiU2Vzc2lvbiIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwicHJvcHMiLCJ0ZXh0cyIsInVzZURhc2hib2FyZENvbnRleHQiLCJkaWZmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwidG90YWwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImxlZ2VuZCIsInBvc2l0aW9uIiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJFbXB0eSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY29sbGFwc2VkIiwidGl0bGUiLCJsZXNzb24iLCJuYW1lIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9saXN0IiwiX2NvbXBvbmVudHMyIiwiX2l0ZW0iLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkl0ZW0iLCJfaWNvbnMiLCJxdWVzdGlvbnMiLCJpdGVtIiwiaW5kZXgiLCJjb3JyZWN0X2Fuc3dlciIsInBhcnNlSW50IiwiY29sb3JzIiwiY2xzIiwiTGluayIsImhyZWYiLCJJY29uIiwiU3Bva2VuRGF0YSIsIl90b29sdGlwIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBLEdBQUk7O1VBQ1JDLE9BQUEs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