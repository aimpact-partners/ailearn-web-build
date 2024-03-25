System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@beyond-js/reactive@1.1.11/model", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.30/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.30/components/ui", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.30/components/icons", "pragmate-ui@0.0.6/empty", "@aimpact/ailearn-app@0.0.30/shared/charts", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.1.1/hooks", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/image", "@aimpact/ailearn-app@0.0.30/utils", "pragmate-ui@0.0.6/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_bgroupHttpSuite103Api) {
      dependency_5 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0030Config) {
      dependency_6 = _aimpactAilearnApp0030Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_8 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0030ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0030ComponentsUi;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0030ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0030ComponentsIcons;
    }, function (_pragmateUi006Empty) {
      dependency_13 = _pragmateUi006Empty;
    }, function (_aimpactAilearnApp0030SharedCharts) {
      dependency_14 = _aimpactAilearnApp0030SharedCharts;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_pragmateUi006Link) {
      dependency_16 = _pragmateUi006Link;
    }, function (_pragmateUi006Components) {
      dependency_17 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_18 = _beyondJsReact18Widgets111Hooks;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_pragmateUi006Image) {
      dependency_20 = _pragmateUi006Image;
    }, function (_aimpactAilearnApp0030Utils) {
      dependency_21 = _aimpactAilearnApp0030Utils;
    }, function (_pragmateUi006Tooltip) {
      dependency_22 = _pragmateUi006Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.30"], ["@aimpact/ailearn-app", "0.0.30"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.30/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@bgroup/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/shared/charts', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/ailearn-app/utils', dependency_21], ['pragmate-ui/tooltip', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.30/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.30/assignments/dashboard.widget');
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
        hash: 2773008040,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@bgroup/http-suite/api");
          var _config = require("@aimpact/ailearn-sdk/config");
          var _session = require("@aimpact/chat-sdk/session");
          class Dashboard extends _model.ReactiveModel {
            #api;
            #participants = [];
            get participants() {
              return this.#participants;
            }
            #module;
            get module() {
              return this.#module;
            }
            #classroom;
            get classroom() {
              return this.#classroom;
            }
            #activities;
            get activities() {
              return this.#activities;
            }
            get totalParticipants() {
              return Object.keys(this.participants).length;
            }
            get totalMultiple() {
              return this.participants.reduce((acc, curr) => {
                if (curr.selection) return acc + 1;
                return acc;
                1;
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
                const response = await this.#api.get(`/assignments/${id}/dashboard`);
                if (!response.status) {
                  throw new Error(response.message);
                }
                if (Object.keys(response.data).length === 0) {
                  this.found = false;
                  this.ready = true;
                  return;
                }
                const {
                  module,
                  participants,
                  activities,
                  classroom,
                  id: dashboardId
                } = response.data;
                this.#participants = Object.keys(participants).map(item => participants[item]);
                globalThis.model = this;
                this.#module = module;
                this.#classroom = classroom;
                this.#activities = activities;
                this.id = dashboardId;
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
        hash: 4203681527,
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
        hash: 3184585598,
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
              try {
                this.fetching = true;
                this.#assignmentId = id;
                const model = new _model.Dashboard();
                this.#model = model;
                await model.load(id);
                globalThis.m = model;
                // this.#process();
                this.ready = true;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            #process() {
              let {
                length
              } = this.#model.participants;
              let activitiesData = new Map();
              let participantsData = new Map();
              const {
                activites: {
                  items: activities,
                  order
                }
              } = this.#model;
              order.forEach(item => activitiesData.set(item.id, {}));
              /**
               *
               *  id Sacar promedio de actividades por alumnos.
               *  Grafico de barras de actividades hechas por alumnos.
               *  Torta de aprobacion de de assessment.5
               */
              // let
              for (let i = 0; i < length; ++i) {
                let {
                  activities: userActivities,
                  user
                } = this.#model.participants[i];
                let {
                  length
                } = activities;
                let participantData = participantsData.has(user.id) ? participantsData.get(user.id) : {};
                let shares = 0;
                for (let j = 0; j < order.length; ++j) {
                  let activityId = activities[j];
                  const activity = activities[activityId];
                  if (!userActivities.hasOwnProperty(activityId)) continue;
                  ++shares;
                  let instance = activitiesData.get(activityId);
                }
              }
            }
            refresh = async () => {
              try {
                this.fetching = true;
                await this.model.load(this.#assignmentId);
                this.trigger('data.updated');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /***************************
      INTERNAL MODULE: ./views/404
      ***************************/

      ims.set('./views/404', {
        hash: 355421796,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function NotFound({
            store,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[APP, '/']]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("h1", null, "404")));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/charts/index
      ************************************/

      ims.set('./views/charts/index', {
        hash: 4015805318,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Charts = Charts;
          var _react = require("react");
          var _multiple = require("./multiple");
          var _spoken = require("./spoken");
          // import { ParticipationChart } from './participation';
          function Charts({
            data
          }) {
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
        hash: 1438581076,
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
            const countObjectsWithoutUseMultiple = participants => {
              return participants.reduce((count, item) => {
                const hasNonZeroCount = Object.values(item.activities).some(activity => {
                  const counters = activity.data?.counters;
                  return counters && counters.total !== undefined && counters.correct !== undefined && counters.wrong !== undefined;
                });
                return count + (hasNonZeroCount ? 1 : 0);
              }, 0);
            };
            const diff = countObjectsWithoutUseMultiple(store.model.participants);
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.multiple), _react.default.createElement(_charts.Chart, {
              options: {
                theme: {
                  palette: 'palette7' // upto palette10
                },
                series: [store.model.participants.length - diff, diff],
                chart: {
                  width: '100%',
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

      /********************************************
      INTERNAL MODULE: ./views/charts/participation
      ********************************************/

      ims.set('./views/charts/participation', {
        hash: 1588631689,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipationChart = ParticipationChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          function ParticipationChart({
            data
          }) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, "Participation"), _react.default.createElement(_charts.Chart, {
              options: {
                theme: {
                  palette: 'palette1' // upto palette10
                },
                series: [{
                  data: [{
                    x: 'A',
                    y: data.length
                  }, {
                    x: 'B',
                    y: 50
                  }]
                }],
                chart: {
                  width: '100%',
                  type: 'bar'
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
        hash: 2082413609,
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
            const countObjectsWithoutUseSpoken = participants => {
              return participants.reduce((count, item) => {
                const hasNonZeroCount = Object.values(item.activities).some(activity => {
                  return Object.values(activity.data).length > 0;
                });
                return count + (hasNonZeroCount ? 1 : 0);
              }, 0);
            };
            const diff = countObjectsWithoutUseSpoken(store.model.participants);
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
              options: {
                series: [store.model.participants.length - diff, diff],
                chart: {
                  width: '100%',
                  type: 'donut'
                },
                theme: {
                  palette: 'palette7' // upto palette10
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
        hash: 2781856426,
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
        hash: 2125890665,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _empty = require("pragmate-ui/empty");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function Empty({
            store,
            texts
          }) {
            const {
              model: {
                id,
                module
              }
            } = store;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[APP, '/'], ['Assignments', `/assignments/${id}/coach`]]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              className: "ribbon-card",
              title: module.title,
              image: module.picture
            }, _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons2.ICONS.classworks
            }, _react.default.createElement("h3", {
              className: "title"
            }, store.model.module.title), _react.default.createElement("p", null, texts.empty))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2145564715,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _config = require("@aimpact/ailearn-app/config");
          var _charts = require("./charts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _link = require("pragmate-ui/link");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _ = require("./404");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [totalParticipants, setTotalParticipants] = (0, _react.useState)(store.model?.participants?.length ?? 0);
            const {
              model: {
                module
              }
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setTotalParticipants(store.model?.participants?.length), 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts
            });
            const {
              classroom
            } = store.model;
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: {
                texts,
                model: store.model,
                store
              }
            }, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[APPNAME, '/'], [classroom.name, `/assignments/${classroom.id}/coach/list`], [texts.breadcrumb.dashboard, `/assignments/${store.assignmentId}/dashboard/classroom`]]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })), _react.default.createElement(_ui.PageContainer, {
              className: "dashboard-container"
            }, _react.default.createElement(_ui.HeaderCard, {
              className: "ribbon-card  my-15",
              title: module.title,
              image: module.picture
            }, _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_link.Link, {
              className: "btn btn-primary outline pui-buttonhas-icon ",
              href: `/assignments/${store.assignmentId}/wall`
            }, "Timeline", _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "shared-folder"
            }))), _react.default.createElement(_charts.Charts, {
              data: store.model.participants
            }), _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.model.participants,
              control: _item.Item
            })));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/item/activity
      *************************************/

      ims.set('./views/item/activity', {
        hash: 728029446,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _context = require("../context");
          function ModuleActivity({
            data
          }) {
            const {
              user,
              activity
            } = data;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const hasParticipated = Object.keys(user.activities).includes(activity.id);
            let type = hasParticipated ? 'success' : 'warning';
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, data.data.counters.correct, " /", data.data.counters.total));
            }
            let label = hasParticipated ? 'Done' : 'Pending';
            if (activity.type === 'spoken' && data.data) {
              const keys = Object.keys(data.data);
              label = keys.reduce((acc, key) => acc + data.data[key].icon, '');
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              const {
                correct,
                total
              } = data.data?.counters;
              if (correct < total / 2) type = 'error';
              label = `${correct} /${total}`;
            }
            if (hasParticipated && user.activities[activity.id].data?.messages) {
              label = texts.messageCounter + user.activities[activity.id].data?.messages.count;
            }
            return _react.default.createElement("li", {
              key: `${user.id}.${activity.id}`,
              className: "flex-container flex-space-between"
            }, _react.default.createElement("span", null, activity.title), _react.default.createElement(_chips.Chip, {
              variant: type,
              className: `${type}-chip`
            }, label));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/item/index
      **********************************/

      ims.set('./views/item/index', {
        hash: 2507672447,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _activity = require("./activity");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _utils = require("@aimpact/ailearn-app/utils");
          function Item({
            data
          }) {
            const {
              texts,
              model,
              store
            } = (0, _context.useDashboardContext)();
            const {
              items: activities,
              order
            } = model.activities;
            const userData = {
              user: {
                name: 'Julio Rodríguez',
                id: 'tHXKJj7aQsVW9oSvCKRg24dKfds1'
              },
              ...data
            };
            const participation = Object.keys(data.activities);
            const activityItems = order.map(key => {
              return {
                activity: activities[key],
                user: userData,
                key,
                data: data.activities[key]?.data
              };
            });
            const percentile = participation.length / order.length * 100;
            const participantUri = `/assignments/${store.assignmentId}/dashboard/participant/${userData.user.id}`;
            const registerUser = () => localStorage.setItem('student.details', JSON.stringify(userData.user));
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: registerUser
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, _react.default.createElement(_image.Image, {
              src: userData.user?.photoUrl ? userData.user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${userData.user.name}-avatar`,
              className: "avatar__image"
            }), userData.user.name)), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("div", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, (0, _utils.limitDecimals)(percentile), "%")), _react.default.createElement(_list.List, {
              className: "list-unstyled",
              items: activityItems,
              control: _activity.ModuleActivity
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9pY29ucyIsIkFQUCIsIkFQUF9OQU1FIiwiTm90Rm91bmQiLCJ0ZXh0cyIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiX211bHRpcGxlIiwiX3Nwb2tlbiIsIkNoYXJ0cyIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfY29udGV4dCIsInVzZURhc2hib2FyZENvbnRleHQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJjb3VudCIsImhhc05vblplcm9Db3VudCIsInZhbHVlcyIsInNvbWUiLCJjb3VudGVycyIsInRvdGFsIiwidW5kZWZpbmVkIiwiY29ycmVjdCIsIndyb25nIiwiZGlmZiIsIm11bHRpcGxlIiwiQ2hhcnQiLCJvcHRpb25zIiwidGhlbWUiLCJwYWxldHRlIiwic2VyaWVzIiwiY2hhcnQiLCJ3aWR0aCIsInR5cGUiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiUGFydGljaXBhdGlvbkNoYXJ0IiwieCIsInkiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlU3Bva2VuIiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ljb25zMiIsIl9lbXB0eSIsIkVtcHR5IiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiZGVzY3JpcHRpb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIl9pdGVtIiwiX2xpc3QiLCJfbGluayIsIl9jb21wb25lbnRzIiwiX2JleW9uZF9jb250ZXh0IiwiX2hvb2tzIiwiXyIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJuYW1lIiwiZGFzaGJvYXJkIiwiTGluayIsImhyZWYiLCJJY29uIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2NoaXBzIiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwibGFiZWwiLCJrZXkiLCJtZXNzYWdlcyIsIm1lc3NhZ2VDb3VudGVyIiwiQ2hpcCIsInZhcmlhbnQiLCJfYWN0aXZpdHkiLCJfaW1hZ2UiLCJfdXRpbHMiLCJ1c2VyRGF0YSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJhbHQiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9wYXJ0aWNpcGF0aW9uLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zcG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUks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