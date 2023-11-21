System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.1/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/chat@1.0.1/wrapper", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.14/shared/charts", "@aimpact/chat@1.0.1/shared/components", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.1/hooks", "pragmate-ui@0.0.3/icons", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi003List) {
      dependency_14 = _pragmateUi003List;
    }, function (_pragmateUi003Components) {
      dependency_15 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets101Hooks) {
      dependency_16 = _beyondJsReact18Widgets101Hooks;
    }, function (_pragmateUi003Icons) {
      dependency_17 = _pragmateUi003Icons;
    }, function (_pragmateUi003Tooltip) {
      dependency_18 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.8"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.1"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.5"], ["firebase", "10.0.0"], ["firebase-admin", "11.10.1"], ["highlight.js", "11.8.0"], ["marked", "5.1.1"], ["marked-highlight", "2.0.1"], ["marked-mangle", "1.1.0"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.1"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.15"], ["@types/react-dom", "18.2.7"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/chat/wrapper', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['@aimpact/ailearn-app/shared/charts', dependency_11], ['@aimpact/chat/shared/components', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/components', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/tooltip', dependency_18]]);
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
        hash: 1742640384,
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
        hash: 2668802847,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _charts = require("./charts");
          var _components = require("@aimpact/chat/shared/components");
          var _context = require("./context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _components2 = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            if (!ready || !textsReady) return _react.default.createElement(_components2.Spinner, {
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
            }, _react.default.createElement(_components.CollapsibleHeader, {
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
        hash: 924288822,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2VsZWN0aW9uIiwidG90YWxTcG9rZW4iLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJPYmplY3QiLCJrZXlzIiwiZGF0YSIsImxlbmd0aCIsImZvdW5kIiwicmVhZHkiLCJhc3Nlc3NtZW50IiwiSlNPTiIsInBhcnNlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl9jb3JlIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsInNlc3Npb25JZCIsInNwbGl0IiwiU2Vzc2lvbiIsImVycm9yIiwiX3JlYWN0IiwiX2NvbnRleHQiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwicHJvcHMiLCJ0ZXh0cyIsInVzZURhc2hib2FyZENvbnRleHQiLCJkaWZmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwidG90YWwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImxlZ2VuZCIsInBvc2l0aW9uIiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfZW1wdHkiLCJFbXB0eSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiY29sbGFwc2VkIiwidGl0bGUiLCJsZXNzb24iLCJuYW1lIiwidGV4dCIsImVtcHR5IiwiaWNvbiIsIl9pdGVtIiwiX2xpc3QiLCJfY29tcG9uZW50czIiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsIkl0ZW0iLCJfaWNvbnMiLCJxdWVzdGlvbnMiLCJpdGVtIiwiaW5kZXgiLCJjb3JyZWN0X2Fuc3dlciIsInBhcnNlSW50IiwiY29sb3JzIiwiY2xzIiwiTGluayIsImhyZWYiLCJJY29uIiwiU3Bva2VuRGF0YSIsIl90b29sdGlwIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENB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