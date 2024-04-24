System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@beyond-js/reactive@1.1.12/model", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/shared/charts", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.32/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_bgroupHttpSuite103Api) {
      dependency_5 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_6 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_8 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_12 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_13 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032SharedCharts) {
      dependency_14 = _aimpactAilearnApp0032SharedCharts;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011List) {
      dependency_16 = _pragmateUi011List;
    }, function (_pragmateUi011Link) {
      dependency_17 = _pragmateUi011Link;
    }, function (_pragmateUi011Components) {
      dependency_18 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Chips) {
      dependency_20 = _pragmateUi011Chips;
    }, function (_pragmateUi011Image) {
      dependency_21 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0032Utils) {
      dependency_22 = _aimpactAilearnApp0032Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_23 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@bgroup/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/empty', dependency_13], ['@aimpact/ailearn-app/shared/charts', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/link', dependency_17], ['pragmate-ui/components', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['pragmate-ui/chips', dependency_20], ['pragmate-ui/image', dependency_21], ['@aimpact/ailearn-app/utils', dependency_22], ['pragmate-ui/tooltip', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/dashboard.widget');
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
        hash: 1073458893,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _icons = require("pragmate-ui/icons");
          var _config = require("@aimpact/ailearn-app/config");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function NotFound({
            store,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
        hash: 2403171910,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
        hash: 2028512105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _config = require("@aimpact/ailearn-app/config");
          var _charts = require("./charts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            }, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwidGV4dHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsIlBhcnRpY2lwYXRpb25DaGFydCIsIngiLCJ5IiwiY291bnRPYmplY3RzV2l0aG91dFVzZVNwb2tlbiIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImltYWdlIiwicGljdHVyZSIsImRlc2NyaXB0aW9uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfaXRlbSIsIl9saXN0IiwiX2xpbmsiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl8iLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwibmFtZSIsImRhc2hib2FyZCIsIkxpbmsiLCJocmVmIiwiSWNvbiIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsImxhYmVsIiwia2V5IiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwiX3V0aWxzIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwicmVnaXN0ZXJVc2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvcGFydGljaXBhdGlvbi50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFD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