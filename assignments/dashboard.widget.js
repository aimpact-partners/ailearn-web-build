System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@beyond-js/reactive@1.1.11/model", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.24/shared/charts", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/shared/icons", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/link", "pragmate-ui@0.0.6/components", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/image", "@aimpact/ailearn-app@0.0.24/utils", "pragmate-ui@0.0.6/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_bgroupHttpSuite103Api) {
      dependency_5 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_6 = _aimpactAilearnApp0024Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_8 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_aimpactAilearnApp0024SharedCharts) {
      dependency_10 = _aimpactAilearnApp0024SharedCharts;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Icons) {
      dependency_12 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024SharedIcons) {
      dependency_13 = _aimpactAilearnApp0024SharedIcons;
    }, function (_pragmateUi006Empty) {
      dependency_14 = _pragmateUi006Empty;
    }, function (_pragmateUi006List) {
      dependency_15 = _pragmateUi006List;
    }, function (_pragmateUi006Link) {
      dependency_16 = _pragmateUi006Link;
    }, function (_pragmateUi006Components) {
      dependency_17 = _pragmateUi006Components;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_18 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_pragmateUi006Image) {
      dependency_20 = _pragmateUi006Image;
    }, function (_aimpactAilearnApp0024Utils) {
      dependency_21 = _aimpactAilearnApp0024Utils;
    }, function (_pragmateUi006Tooltip) {
      dependency_22 = _pragmateUi006Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@bgroup/http-suite/api', dependency_5], ['@aimpact/ailearn-sdk/config', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-sdk/core', dependency_8], ['react', dependency_9], ['@aimpact/ailearn-app/shared/charts', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/shared/icons', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/empty', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/image', dependency_20], ['@aimpact/ailearn-app/utils', dependency_21], ['pragmate-ui/tooltip', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/assignments/dashboard.widget');
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
        hash: 883342673,
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
        hash: 1243337948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/shared/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _empty = require("pragmate-ui/empty");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Assignments', `/assignments/${id}/coach`]]
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
        hash: 1369929455,
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
            if (!store.model.found) return _react.default.createElement(_empty.Empty, {
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
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[APPNAME, '/'], [classroom.name, `/assignments/${classroom.id}/coach/list`], ['Dashboard', `/assignments/${store.assignmentId}/dashboard/classroom`]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidGV4dHMiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsIlBhcnRpY2lwYXRpb25DaGFydCIsIngiLCJ5IiwiY291bnRPYmplY3RzV2l0aG91dFVzZVNwb2tlbiIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJBUFBfTkFNRSIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXJDYXJkIiwidGl0bGUiLCJpbWFnZSIsInBpY3R1cmUiLCJkZXNjcmlwdGlvbiIsIklDT05TIiwiY2xhc3N3b3JrcyIsImVtcHR5IiwiX2l0ZW0iLCJfbGlzdCIsIl9saW5rIiwiX2NvbXBvbmVudHMiLCJfYmV5b25kX2NvbnRleHQiLCJfaG9va3MiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwibmFtZSIsIkxpbmsiLCJocmVmIiwiSWNvbiIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsImxhYmVsIiwia2V5IiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwiX3V0aWxzIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwicmVnaXN0ZXJVc2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3BhcnRpY2lwYXRpb24udHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7WUFHQUUsSUFBSUEsQ0FBQSxHQUFJOztVQUNSQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6QkQsSUFBQWMsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixJQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE9BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsUUFBQSxHQUFBcEIsT0FBQTtVQUdNLE1BQU9xQixTQUFVLFNBQVFKLE1BQUEsQ0FBQUssYUFBd0I7WUFDdEQsQ0FBQUMsR0FBSTtZQUlKLENBQUFDLFlBQWEsR0FBbUIsRUFBRTtZQUNsQyxJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLENBQUFDLE1BQU87WUFDUCxJQUFJQSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQUEsTUFBTztZQUNwQjtZQUNBLENBQUFDLFNBQVU7WUFDVixJQUFJQSxTQUFTQSxDQUFBO2NBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQUEsU0FBVTtZQUN2QjtZQUNBLENBQUFDLFVBQVc7WUFDWCxJQUFJQSxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsVUFBVztZQUN4QjtZQUVBLElBQUlDLGlCQUFpQkEsQ0FBQTtjQUNwQixPQUFPQyxNQUFNLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUNOLFlBQVksQ0FBQyxDQUFDTyxNQUFNO1lBQzdDO1lBRUEsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPLElBQUksQ0FBQ1IsWUFBWSxDQUFDUyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFQyxJQUFJLEtBQUk7Z0JBQzdDLElBQUlBLElBQUksQ0FBQ0MsU0FBUyxFQUFFLE9BQU9GLEdBQUcsR0FBRyxDQUFDO2dCQUNsQyxPQUFPQSxHQUFHO2dCQUNWLENBQUM7Y0FDRixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ047WUFDQSxJQUFJRyxXQUFXQSxDQUFBO2NBQ2QsT0FBTyxJQUFJLENBQUNiLFlBQVksQ0FBQ1MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUM3QyxJQUFJQSxJQUFJLENBQUNDLFNBQVMsRUFBRSxPQUFPRixHQUFHLEdBQUcsQ0FBQztnQkFDbEMsT0FBT0EsR0FBRztjQUNYLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTjtZQUNBSSxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDLENBQUFmLEdBQUksR0FBRyxJQUFJTCxJQUFBLENBQUFxQixHQUFHLENBQUNwQixPQUFBLENBQUFxQixPQUFNLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENBQUM7Y0FDL0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxZQUFZLENBQUMsQ0FBQztjQUNsRUMsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUVBLE1BQU1oQyxJQUFJQSxDQUFDaUMsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUF4QixHQUFJLENBQUN5QixNQUFNLENBQUM1QixRQUFBLENBQUE2QixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2dCQUUzQyxNQUFNQyxRQUFRLEdBQWMsTUFBTSxJQUFJLENBQUMsQ0FBQTdCLEdBQUksQ0FBQ1YsR0FBRyxDQUFDLGdCQUFnQmtDLEVBQUUsWUFBWSxDQUFDO2dCQUUvRSxJQUFJLENBQUNLLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO2tCQUNyQixNQUFNLElBQUlDLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxPQUFPLENBQUM7O2dCQUdsQyxJQUFJMUIsTUFBTSxDQUFDQyxJQUFJLENBQUNzQixRQUFRLENBQUNJLElBQUksQ0FBQyxDQUFDekIsTUFBTSxLQUFLLENBQUMsRUFBRTtrQkFDNUMsSUFBSSxDQUFDMEIsS0FBSyxHQUFHLEtBQUs7a0JBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7a0JBQ2pCOztnQkFHRCxNQUFNO2tCQUFFakMsTUFBTTtrQkFBRUQsWUFBWTtrQkFBRUcsVUFBVTtrQkFBRUQsU0FBUztrQkFBRXFCLEVBQUUsRUFBRVk7Z0JBQVcsQ0FBRSxHQUFHUCxRQUFRLENBQUNJLElBQUk7Z0JBRXRGLElBQUksQ0FBQyxDQUFBaEMsWUFBYSxHQUFHSyxNQUFNLENBQUNDLElBQUksQ0FBQ04sWUFBWSxDQUFDLENBQUNvQyxHQUFHLENBQUNDLElBQUksSUFBSXJDLFlBQVksQ0FBQ3FDLElBQUksQ0FBQyxDQUFDO2dCQUM5RWhCLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBckIsTUFBTyxHQUFHQSxNQUFNO2dCQUNyQixJQUFJLENBQUMsQ0FBQUMsU0FBVSxHQUFHQSxTQUFTO2dCQUMzQixJQUFJLENBQUMsQ0FBQUMsVUFBVyxHQUFHQSxVQUFVO2dCQUM3QixJQUFJLENBQUNvQixFQUFFLEdBQUdZLFdBQVc7Z0JBRXJCLElBQUksQ0FBQ0YsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7ZUFDakIsQ0FBQyxPQUFPSSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixDQUFDLENBQUM7O1lBRWhCOztVQUNBOUMsT0FBQSxDQUFBSyxTQUFBLEdBQUFBLFNBQUE7Ozs7Ozs7Ozs7O1VDbkZEOztVQUVBUSxNQUFBLENBQUFvQyxjQUFBLENBQUFqRCxPQUFBO1lBQ0FrRCxLQUFBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSEEsSUFBQWpELE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBbUUsT0FBQSxHQUFBbkUsT0FBQTtVQUlNLE1BQU9PLFlBQWEsU0FBUTRELE9BQUEsQ0FBQTdDLGFBQTJCO1lBQzVELENBQUF3QixLQUFNO1lBQ04sQ0FBQXNCLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBQ0EsSUFBSXRCLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsTUFBTWhDLElBQUlBLENBQUNpQyxFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUN3QixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsSUFBSSxDQUFDLENBQUFGLFlBQWEsR0FBR3RCLEVBQUU7Z0JBQ3ZCLE1BQU1ELEtBQUssR0FBRyxJQUFJN0IsTUFBQSxDQUFBSSxTQUFTLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxDQUFBeUIsS0FBTSxHQUFHQSxLQUFLO2dCQUNuQixNQUFNQSxLQUFLLENBQUNoQyxJQUFJLENBQUNpQyxFQUFFLENBQUM7Z0JBQ3BCRixVQUFVLENBQUMyQixDQUFDLEdBQUcxQixLQUFLO2dCQUNwQjtnQkFFQSxJQUFJLENBQUNZLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNVLEtBQUssQ0FBQ1gsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxDQUFBRyxPQUFRQyxDQUFBO2NBQ1AsSUFBSTtnQkFBRTVDO2NBQU0sQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFBZSxLQUFNLENBQUN0QixZQUFZO2NBQ3pDLElBQUlvRCxjQUFjLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2NBQzlCLElBQUlDLGdCQUFnQixHQUFHLElBQUlELEdBQUcsRUFBRTtjQUNoQyxNQUFNO2dCQUNMRSxTQUFTLEVBQUU7a0JBQUVDLEtBQUssRUFBRXJELFVBQVU7a0JBQUVzRDtnQkFBSztjQUFFLENBQ3ZDLEdBQUcsSUFBSSxDQUFDLENBQUFuQyxLQUFNO2NBRWZtQyxLQUFLLENBQUNDLE9BQU8sQ0FBQ3JCLElBQUksSUFBSWUsY0FBYyxDQUFDTyxHQUFHLENBQUN0QixJQUFJLENBQUNkLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztjQUN0RDs7Ozs7O2NBTUE7Y0FDQSxLQUFLLElBQUlxQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdyRCxNQUFNLEVBQUUsRUFBRXFELENBQUMsRUFBRTtnQkFDaEMsSUFBSTtrQkFBRXpELFVBQVUsRUFBRTBELGNBQWM7a0JBQUVuQztnQkFBSSxDQUFFLEdBQUcsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ3RCLFlBQVksQ0FBQzRELENBQUMsQ0FBQztnQkFDdEUsSUFBSTtrQkFBRXJEO2dCQUFNLENBQUUsR0FBR0osVUFBVTtnQkFFM0IsSUFBSTJELGVBQWUsR0FBR1IsZ0JBQWdCLENBQUNTLEdBQUcsQ0FBQ3JDLElBQUksQ0FBQ0gsRUFBRSxDQUFDLEdBQUcrQixnQkFBZ0IsQ0FBQ2pFLEdBQUcsQ0FBQ3FDLElBQUksQ0FBQ0gsRUFBRSxDQUFDLEdBQUcsRUFBRTtnQkFFeEYsSUFBSXlDLE1BQU0sR0FBRyxDQUFDO2dCQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHUixLQUFLLENBQUNsRCxNQUFNLEVBQUUsRUFBRTBELENBQUMsRUFBRTtrQkFDdEMsSUFBSUMsVUFBVSxHQUFHL0QsVUFBVSxDQUFDOEQsQ0FBQyxDQUFDO2tCQUM5QixNQUFNRSxRQUFRLEdBQUdoRSxVQUFVLENBQUMrRCxVQUFVLENBQUM7a0JBQ3ZDLElBQUksQ0FBQ0wsY0FBYyxDQUFDTyxjQUFjLENBQUNGLFVBQVUsQ0FBQyxFQUFFO2tCQUNoRCxFQUFFRixNQUFNO2tCQUVSLElBQUlLLFFBQVEsR0FBR2pCLGNBQWMsQ0FBQy9ELEdBQUcsQ0FBQzZFLFVBQVUsQ0FBQzs7O1lBR2hEO1lBRUFJLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUN2QixRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxJQUFJLENBQUN6QixLQUFLLENBQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF1RCxZQUFhLENBQUM7Z0JBQ3pDLElBQUksQ0FBQzBCLE9BQU8sQ0FBQyxjQUFjLENBQUM7ZUFDNUIsQ0FBQyxPQUFPakMsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNVLEtBQUssQ0FBQ1gsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDUyxRQUFRLEdBQUcsS0FBSzs7WUFFdkIsQ0FBQzs7VUFDRHZELE9BQUEsQ0FBQVQsWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hGRCxJQUFBeUYsTUFBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFpRyxTQUFBLEdBQUFqRyxPQUFBO1VBQ0EsSUFBQWtHLE9BQUEsR0FBQWxHLE9BQUE7VUFDQTtVQUVNLFNBQVVtRyxNQUFNQSxDQUFDO1lBQUUzQztVQUFJLENBQUU7WUFDOUIsT0FDQ3dDLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQW1CLEdBRXJDTCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNILFNBQUEsQ0FBQUssYUFBYSxPQUFHLEVBRWpCTixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNGLE9BQUEsQ0FBQUssV0FBVyxPQUFHLENBQ047VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBUCxNQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQXdHLE9BQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUcsUUFBQSxHQUFBekcsT0FBQTtVQUdNLFNBQVVzRyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRWpHLEtBQUs7Y0FBRXFHO1lBQUssQ0FBRSxHQUFHLElBQUFELFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFOUMsTUFBTUMsOEJBQThCLEdBQUlwRixZQUE0QixJQUFZO2NBQy9FLE9BQU9BLFlBQVksQ0FBQ1MsTUFBTSxDQUFDLENBQUM0RSxLQUFLLEVBQUVoRCxJQUFJLEtBQUk7Z0JBQzFDLE1BQU1pRCxlQUFlLEdBQUdqRixNQUFNLENBQUNrRixNQUFNLENBQUNsRCxJQUFJLENBQUNsQyxVQUFVLENBQUMsQ0FBQ3FGLElBQUksQ0FBQ3JCLFFBQVEsSUFBRztrQkFDdEUsTUFBTXNCLFFBQVEsR0FBR3RCLFFBQVEsQ0FBQ25DLElBQUksRUFBRXlELFFBQVE7a0JBQ3hDLE9BQ0NBLFFBQVEsSUFDUkEsUUFBUSxDQUFDQyxLQUFLLEtBQUtDLFNBQVMsSUFDNUJGLFFBQVEsQ0FBQ0csT0FBTyxLQUFLRCxTQUFTLElBQzlCRixRQUFRLENBQUNJLEtBQUssS0FBS0YsU0FBUztnQkFFOUIsQ0FBQyxDQUFDO2dCQUNGLE9BQU9OLEtBQUssSUFBSUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDekMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUM7WUFFRCxNQUFNUSxJQUFJLEdBQUdWLDhCQUE4QixDQUFDdkcsS0FBSyxDQUFDeUMsS0FBSyxDQUFDdEIsWUFBWSxDQUFDO1lBR3JFLE9BQ0N3RSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDTCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLGFBQUtNLEtBQUssQ0FBQ2EsUUFBUSxDQUFNLEVBQ3pCdkIsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDSSxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFO2tCQUNOQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUNwQjs7Z0JBQ0RDLE1BQU0sRUFBRSxDQUFDdkgsS0FBSyxDQUFDeUMsS0FBSyxDQUFDdEIsWUFBWSxDQUFDTyxNQUFNLEdBQUd1RixJQUFJLEVBQUVBLElBQUksQ0FBQztnQkFDdERPLEtBQUssRUFBRTtrQkFDTkMsS0FBSyxFQUFFLE1BQU07a0JBQ2JDLElBQUksRUFBRTtpQkFDTjtnQkFDREMsVUFBVSxFQUFFO2tCQUNYQyxTQUFTLEVBQUVBLENBQUMvRCxLQUFLLEVBQUVWLElBQUksS0FBSTtvQkFDMUIsTUFBTTtzQkFDTDBFLFdBQVc7c0JBQ1hDLENBQUMsRUFBRTt3QkFDRkMsTUFBTSxFQUFFOzBCQUFFUjt3QkFBTTtzQkFBRTtvQkFDbEIsQ0FDRCxHQUFHcEUsSUFBSTtvQkFFUixPQUFPb0UsTUFBTSxDQUFDTSxXQUFXLENBQUM7a0JBQzNCO2lCQUNBO2dCQUNERyxNQUFNLEVBQUUsQ0FBQzNCLEtBQUssQ0FBQzRCLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFN0IsS0FBSyxDQUFDNEIsYUFBYSxDQUFDcEIsS0FBSyxDQUFDO2dCQUNoRXNCLFVBQVUsRUFBRSxDQUNYO2tCQUNDQyxVQUFVLEVBQUUsR0FBRztrQkFDZmhCLE9BQU8sRUFBRTtvQkFDUkksS0FBSyxFQUFFO3NCQUNOQyxLQUFLLEVBQUU7cUJBQ1A7b0JBQ0RZLE1BQU0sRUFBRTtzQkFDUEMsUUFBUSxFQUFFOzs7aUJBR1o7O1lBRUYsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckVBLElBQUEzQyxNQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQXdHLE9BQUEsR0FBQXhHLE9BQUE7VUFDQSxJQUFBeUcsUUFBQSxHQUFBekcsT0FBQTtVQUVNLFNBQVU0SSxrQkFBa0JBLENBQUM7WUFBRXBGO1VBQUksQ0FBRTtZQUMxQyxNQUFNO2NBQUVuRCxLQUFLO2NBQUVxRztZQUFLLENBQUUsR0FBRyxJQUFBRCxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBQzlDLE1BQU1XLElBQUksR0FBR2pILEtBQUssQ0FBQ3lDLEtBQUssQ0FBQ3RCLFlBQVksQ0FBQ08sTUFBTSxHQUFHMUIsS0FBSyxDQUFDeUMsS0FBSyxDQUFDZCxhQUFhO1lBRXhFLE9BQ0NnRSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUFjLEdBQ2hDTCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLDZCQUFzQixFQUN0QkosTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDSSxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFO2tCQUNOQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUNwQjs7Z0JBQ0RDLE1BQU0sRUFBRSxDQUNQO2tCQUNDcEUsSUFBSSxFQUFFLENBQ0w7b0JBQUVxRixDQUFDLEVBQUUsR0FBRztvQkFBRUMsQ0FBQyxFQUFFdEYsSUFBSSxDQUFDekI7a0JBQU0sQ0FBRSxFQUMxQjtvQkFBRThHLENBQUMsRUFBRSxHQUFHO29CQUFFQyxDQUFDLEVBQUU7a0JBQUUsQ0FBRTtpQkFFbEIsQ0FDRDtnQkFDRGpCLEtBQUssRUFBRTtrQkFDTkMsS0FBSyxFQUFFLE1BQU07a0JBQ2JDLElBQUksRUFBRTtpQkFDTjtnQkFFRE0sTUFBTSxFQUFFLENBQUMzQixLQUFLLENBQUM0QixhQUFhLENBQUNDLE9BQU8sRUFBRTdCLEtBQUssQ0FBQzRCLGFBQWEsQ0FBQ3BCLEtBQUssQ0FBQztnQkFDaEVzQixVQUFVLEVBQUUsQ0FDWDtrQkFDQ0MsVUFBVSxFQUFFLEdBQUc7a0JBQ2ZoQixPQUFPLEVBQUU7b0JBQ1JJLEtBQUssRUFBRTtzQkFDTkMsS0FBSyxFQUFFO3FCQUNQO29CQUNEWSxNQUFNLEVBQUU7c0JBQ1BDLFFBQVEsRUFBRTs7O2lCQUdaOztZQUVGLEVBQ0EsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBM0MsTUFBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUF3RyxPQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQXlHLFFBQUEsR0FBQXpHLE9BQUE7VUFHTSxTQUFVdUcsV0FBV0EsQ0FBQTtZQUMxQixNQUFNO2NBQUVsRyxLQUFLO2NBQUVxRztZQUFLLENBQUUsR0FBRyxJQUFBRCxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBQzlDLE1BQU1vQyw0QkFBNEIsR0FBSXZILFlBQTRCLElBQVk7Y0FDN0UsT0FBT0EsWUFBWSxDQUFDUyxNQUFNLENBQUMsQ0FBQzRFLEtBQUssRUFBRWhELElBQUksS0FBSTtnQkFDMUMsTUFBTWlELGVBQWUsR0FBR2pGLE1BQU0sQ0FBQ2tGLE1BQU0sQ0FBQ2xELElBQUksQ0FBQ2xDLFVBQVUsQ0FBQyxDQUFDcUYsSUFBSSxDQUFDckIsUUFBUSxJQUFHO2tCQUN0RSxPQUFPOUQsTUFBTSxDQUFDa0YsTUFBTSxDQUFDcEIsUUFBUSxDQUFDbkMsSUFBSSxDQUFDLENBQUN6QixNQUFNLEdBQUcsQ0FBQztnQkFDL0MsQ0FBQyxDQUFDO2dCQUNGLE9BQU84RSxLQUFLLElBQUlDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTVEsSUFBSSxHQUFHeUIsNEJBQTRCLENBQUMxSSxLQUFLLENBQUN5QyxLQUFLLENBQUN0QixZQUFZLENBQUM7WUFFbkUsT0FDQ3dFLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENMLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsYUFBS00sS0FBSyxDQUFDc0MsTUFBTSxDQUFNLEVBQ3ZCaEQsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDSSxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkcsTUFBTSxFQUFFLENBQUN2SCxLQUFLLENBQUN5QyxLQUFLLENBQUN0QixZQUFZLENBQUNPLE1BQU0sR0FBR3VGLElBQUksRUFBRUEsSUFBSSxDQUFDO2dCQUN0RE8sS0FBSyxFQUFFO2tCQUNOQyxLQUFLLEVBQUUsTUFBTTtrQkFDYkMsSUFBSSxFQUFFO2lCQUNOO2dCQUNETCxLQUFLLEVBQUU7a0JBQ05DLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQ3BCOztnQkFDREssVUFBVSxFQUFFO2tCQUNYQyxTQUFTLEVBQUVBLENBQUMvRCxLQUFLLEVBQUVWLElBQUksS0FBSTtvQkFDMUIsTUFBTTtzQkFDTDBFLFdBQVc7c0JBQ1hDLENBQUMsRUFBRTt3QkFDRkMsTUFBTSxFQUFFOzBCQUFFUjt3QkFBTTtzQkFBRTtvQkFDbEIsQ0FDRCxHQUFHcEUsSUFBSTtvQkFFUixPQUFPb0UsTUFBTSxDQUFDTSxXQUFXLENBQUM7a0JBQzNCO2lCQUNBO2dCQUNERyxNQUFNLEVBQUUsQ0FBQzNCLEtBQUssQ0FBQzRCLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFN0IsS0FBSyxDQUFDNEIsYUFBYSxDQUFDcEIsS0FBSyxDQUFDO2dCQUNoRXNCLFVBQVUsRUFBRSxDQUNYO2tCQUNDQyxVQUFVLEVBQUUsR0FBRztrQkFDZmhCLE9BQU8sRUFBRTtvQkFDUkksS0FBSyxFQUFFO3NCQUNOQyxLQUFLLEVBQUU7cUJBQ1A7b0JBQ0RZLE1BQU0sRUFBRTtzQkFDUEMsUUFBUSxFQUFFOzs7aUJBR1o7O1lBRUYsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0RBLElBQUEzQyxNQUFBLEdBQUFoRyxPQUFBO1VBU08sTUFBTWlKLGdCQUFnQixHQUFBakksT0FBQSxDQUFBaUksZ0JBQUEsR0FBR2pELE1BQUEsQ0FBQXhELE9BQUssQ0FBQzBHLGFBQWEsQ0FBQyxFQUEyQixDQUFDO1VBQ3pFLE1BQU12QyxtQkFBbUIsR0FBR0EsQ0FBQSxLQUFNWCxNQUFBLENBQUF4RCxPQUFLLENBQUMyRyxVQUFVLENBQUNGLGdCQUFnQixDQUFDO1VBQUNqSSxPQUFBLENBQUEyRixtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWNUUsSUFBQVgsTUFBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUFvSixHQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQXFKLE1BQUEsR0FBQXJKLE9BQUE7VUFDQSxJQUFBc0osT0FBQSxHQUFBdEosT0FBQTtVQUNBLElBQUFtQixPQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXVKLE1BQUEsR0FBQXZKLE9BQUE7VUFDTSxTQUFVd0osS0FBS0EsQ0FBQztZQUFFbkosS0FBSztZQUFFcUc7VUFBSyxDQUFFO1lBQ3JDLE1BQU07Y0FDTDVELEtBQUssRUFBRTtnQkFBRUMsRUFBRTtnQkFBRXRCO2NBQU07WUFBRSxDQUNyQixHQUFHcEIsS0FBSztZQUVULE9BQ0MyRixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUFKLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQWlILFFBQUEsUUFDQ3pELE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2dELEdBQUEsQ0FBQU0sVUFBVTtjQUNWQyxVQUFVLEVBQUUsQ0FDWCxDQUFDeEksT0FBQSxDQUFBcUIsT0FBTSxDQUFDQyxNQUFNLENBQUNtSCxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUMsYUFBYSxFQUFFLGdCQUFnQjdHLEVBQUUsUUFBUSxDQUFDO1lBQzNDLEdBRURpRCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNpRCxNQUFBLENBQUFRLFVBQVU7Y0FBQ0MsSUFBSSxFQUFDLFNBQVM7Y0FBQ0MsT0FBTyxFQUFFMUosS0FBSyxDQUFDeUY7WUFBTyxFQUFJLENBQ3pDLEVBQ2JFLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2dELEdBQUEsQ0FBQVksYUFBYSxRQUNiaEUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDZ0QsR0FBQSxDQUFBYSxVQUFVO2NBQUM1RCxTQUFTLEVBQUMsYUFBYTtjQUFDNkQsS0FBSyxFQUFFekksTUFBTSxDQUFDeUksS0FBSztjQUFFQyxLQUFLLEVBQUUxSSxNQUFNLENBQUMySTtZQUFPLEdBQzdFcEUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMURMLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsWUFBSTNFLE1BQU0sQ0FBQzRJLFdBQVcsQ0FBSyxDQUN0QixDQUNNLEVBQ2JyRSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNtRCxNQUFBLENBQUFDLEtBQWM7Y0FBQ25ELFNBQVMsRUFBQywwQkFBMEI7Y0FBQ3lELElBQUksRUFBRVIsT0FBQSxDQUFBZ0IsS0FBSyxDQUFDQztZQUFVLEdBQzFFdkUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQTtjQUFJQyxTQUFTLEVBQUM7WUFBTyxHQUFFaEcsS0FBSyxDQUFDeUMsS0FBSyxDQUFDckIsTUFBTSxDQUFDeUksS0FBSyxDQUFNLEVBQ3JEbEUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxZQUFJTSxLQUFLLENBQUM4RCxLQUFLLENBQUssQ0FDSixDQUNGLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXJKLE9BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBd0csT0FBQSxHQUFBeEcsT0FBQTtVQUNBLElBQUFvSixHQUFBLEdBQUFwSixPQUFBO1VBQ0EsSUFBQXlHLFFBQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBdUosTUFBQSxHQUFBdkosT0FBQTtVQUNBLElBQUF5SyxLQUFBLEdBQUF6SyxPQUFBO1VBQ0EsSUFBQTBLLEtBQUEsR0FBQTFLLE9BQUE7VUFDQSxJQUFBMkssS0FBQSxHQUFBM0ssT0FBQTtVQUNBLElBQUFnRyxNQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQTRLLFdBQUEsR0FBQTVLLE9BQUE7VUFDQSxJQUFBNkssZUFBQSxHQUFBN0ssT0FBQTtVQUNBLElBQUE4SyxNQUFBLEdBQUE5SyxPQUFBO1VBQ0EsSUFBQXFKLE1BQUEsR0FBQXJKLE9BQUE7VUFHQSxNQUFNK0ssT0FBTyxHQUFHNUosT0FBQSxDQUFBcUIsT0FBTSxFQUFFQyxNQUFNLEVBQUVtSCxRQUFRLElBQUksUUFBUTtVQUM3QztVQUFVLFNBQ1JuSixJQUFJQSxDQUFDO1lBQUVKO1VBQUssQ0FBRTtZQUN0QixNQUFNLENBQUNxRCxLQUFLLEVBQUVzSCxRQUFRLENBQUMsR0FBRyxJQUFBaEYsTUFBQSxDQUFBaUYsUUFBUSxFQUFDNUssS0FBSyxDQUFDcUQsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3dILFVBQVUsRUFBRXhFLEtBQUssQ0FBQyxHQUFHLElBQUFvRSxNQUFBLENBQUFLLFFBQVEsRUFBQ04sZUFBQSxDQUFBcEosTUFBWSxDQUFDMkosU0FBUyxDQUFDO1lBQzVELE1BQU0sQ0FBQ3hKLGlCQUFpQixFQUFFeUosb0JBQW9CLENBQUMsR0FBRyxJQUFBckYsTUFBQSxDQUFBaUYsUUFBUSxFQUFDNUssS0FBSyxDQUFDeUMsS0FBSyxFQUFFdEIsWUFBWSxFQUFFTyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ2xHLE1BQU07Y0FDTGUsS0FBSyxFQUFFO2dCQUFFckI7Y0FBTTtZQUFFLENBQ2pCLEdBQUdwQixLQUFLO1lBRVQsSUFBQXlLLE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNqTCxLQUFLLENBQUMsRUFBRSxNQUFNMkssUUFBUSxDQUFDM0ssS0FBSyxDQUFDcUQsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBQW9ILE1BQUEsQ0FBQVEsU0FBUyxFQUFDLENBQUNqTCxLQUFLLENBQUMsRUFBRSxNQUFNZ0wsb0JBQW9CLENBQUNoTCxLQUFLLENBQUN5QyxLQUFLLEVBQUV0QixZQUFZLEVBQUVPLE1BQU0sQ0FBQyxFQUFFLGNBQWMsQ0FBQztZQUVqRyxJQUFJLENBQUMyQixLQUFLLElBQUksQ0FBQ3dILFVBQVUsRUFBRSxPQUFPbEYsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDd0UsV0FBQSxDQUFBVyxPQUFPO2NBQUNDLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFDM0QsSUFBSSxDQUFDbkwsS0FBSyxDQUFDeUMsS0FBSyxDQUFDVyxLQUFLLEVBQUUsT0FBT3VDLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ21ELE1BQUEsQ0FBQUMsS0FBSztjQUFDbkosS0FBSyxFQUFFQSxLQUFLO2NBQUVxRyxLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUNwRSxJQUFJckcsS0FBSyxDQUFDeUMsS0FBSyxDQUFDbEIsaUJBQWlCLEtBQUssQ0FBQyxFQUFFLE9BQU9vRSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNtRCxNQUFBLENBQUFDLEtBQUs7Y0FBQ25KLEtBQUssRUFBRUEsS0FBSztjQUFFcUcsS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFFckYsTUFBTTtjQUFFaEY7WUFBUyxDQUFFLEdBQUdyQixLQUFLLENBQUN5QyxLQUFLO1lBRWpDLE9BQ0NrRCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNLLFFBQUEsQ0FBQXdDLGdCQUFnQixDQUFDd0MsUUFBUTtjQUFDdkgsS0FBSyxFQUFFO2dCQUFFd0MsS0FBSztnQkFBRTVELEtBQUssRUFBRXpDLEtBQUssQ0FBQ3lDLEtBQUs7Z0JBQUV6QztjQUFLO1lBQUUsR0FDckUyRixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNnRCxHQUFBLENBQUFNLFVBQVU7Y0FDVkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ29CLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFDZCxDQUFDckosU0FBUyxDQUFDZ0ssSUFBSSxFQUFFLGdCQUFnQmhLLFNBQVMsQ0FBQ3FCLEVBQUUsYUFBYSxDQUFDLEVBQzNELENBQUMsV0FBVyxFQUFFLGdCQUFnQjFDLEtBQUssQ0FBQ2dFLFlBQVksc0JBQXNCLENBQUM7WUFDdkUsR0FFRDJCLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2lELE1BQUEsQ0FBQVEsVUFBVTtjQUFDQyxJQUFJLEVBQUMsU0FBUztjQUFDQyxPQUFPLEVBQUUxSixLQUFLLENBQUN5RjtZQUFPLEVBQUksQ0FDekMsRUFDYkUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDZ0QsR0FBQSxDQUFBWSxhQUFhO2NBQUMzRCxTQUFTLEVBQUM7WUFBcUIsR0FDN0NMLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2dELEdBQUEsQ0FBQWEsVUFBVTtjQUFDNUQsU0FBUyxFQUFDLG9CQUFvQjtjQUFDNkQsS0FBSyxFQUFFekksTUFBTSxDQUFDeUksS0FBSztjQUFFQyxLQUFLLEVBQUUxSSxNQUFNLENBQUMySTtZQUFPLEdBQ3BGcEUsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBNEMsR0FDMURMLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsWUFBSTNFLE1BQU0sQ0FBQzRJLFdBQVcsQ0FBSyxDQUN0QixDQUNNLEVBQ2JyRSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q0wsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDdUUsS0FBQSxDQUFBZ0IsSUFBSTtjQUNKdEYsU0FBUyxFQUFDLDZDQUE2QztjQUN2RHVGLElBQUksRUFBRSxnQkFBZ0J2TCxLQUFLLENBQUNnRSxZQUFZO1lBQU8sRyxZQUcvQzJCLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ2lELE1BQUEsQ0FBQXdDLElBQUk7Y0FBQ3hGLFNBQVMsRUFBQyxJQUFJO2NBQUN5RCxJQUFJLEVBQUM7WUFBZSxFQUFHLENBQ3RDLENBQ0YsRUFFTjlELE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ0ksT0FBQSxDQUFBTCxNQUFNO2NBQUMzQyxJQUFJLEVBQUVuRCxLQUFLLENBQUN5QyxLQUFLLENBQUN0QjtZQUFZLEVBQUksRUFDMUN3RSxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUNzRSxLQUFBLENBQUFvQixJQUFJO2NBQUN6RixTQUFTLEVBQUMsMkJBQTJCO2NBQUNyQixLQUFLLEVBQUUzRSxLQUFLLENBQUN5QyxLQUFLLENBQUN0QixZQUFZO2NBQUV1SyxPQUFPLEVBQUV0QixLQUFBLENBQUF1QjtZQUFJLEVBQUksQ0FDL0UsQ0FDVztVQUU5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsRUEsSUFBQWhHLE1BQUEsR0FBQWhHLE9BQUE7VUFDQSxJQUFBaU0sTUFBQSxHQUFBak0sT0FBQTtVQUNBLElBQUF5RyxRQUFBLEdBQUF6RyxPQUFBO1VBRU0sU0FBVWtNLGNBQWNBLENBQUM7WUFBRTFJO1VBQUksQ0FBRTtZQUN0QyxNQUFNO2NBQUVOLElBQUk7Y0FBRXlDO1lBQVEsQ0FBRSxHQUFHbkMsSUFBSTtZQUMvQixNQUFNO2NBQUVrRDtZQUFLLENBQUUsR0FBRyxJQUFBRCxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU13RixlQUFlLEdBQUd0SyxNQUFNLENBQUNDLElBQUksQ0FBQ29CLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQyxDQUFDeUssUUFBUSxDQUFDekcsUUFBUSxDQUFDNUMsRUFBRSxDQUFDO1lBQzFFLElBQUlnRixJQUFJLEdBQUdvRSxlQUFlLEdBQUcsU0FBUyxHQUFHLFNBQVM7WUFDbEQsTUFBTUUsTUFBTSxHQUFHLEVBQUU7WUFFakIsSUFBSTFHLFFBQVEsQ0FBQ29DLElBQUksS0FBSyxZQUFZLElBQUlwQyxRQUFRLENBQUMyRyxPQUFPLEtBQUssaUJBQWlCLElBQUk5SSxJQUFJLENBQUNBLElBQUksRUFBRTtjQUMxRjZJLE1BQU0sQ0FBQ0UsSUFBSSxDQUNWdkcsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxlQUNFNUMsSUFBSSxDQUFDQSxJQUFJLENBQUN5RCxRQUFRLENBQUNHLE9BQU8sRSxNQUFJNUQsSUFBSSxDQUFDQSxJQUFJLENBQUN5RCxRQUFRLENBQUNDLEtBQUssQ0FDakQsQ0FDUDs7WUFHRixJQUFJc0YsS0FBSyxHQUFHTCxlQUFlLEdBQUcsTUFBTSxHQUFHLFNBQVM7WUFFaEQsSUFBSXhHLFFBQVEsQ0FBQ29DLElBQUksS0FBSyxRQUFRLElBQUl2RSxJQUFJLENBQUNBLElBQUksRUFBRTtjQUM1QyxNQUFNMUIsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQzBCLElBQUksQ0FBQ0EsSUFBSSxDQUFDO2NBQ25DZ0osS0FBSyxHQUFHMUssSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFdUssR0FBRyxLQUFLdkssR0FBRyxHQUFHc0IsSUFBSSxDQUFDQSxJQUFJLENBQUNpSixHQUFHLENBQUMsQ0FBQzNDLElBQUksRUFBRSxFQUFFLENBQUM7Y0FDaEUvQixJQUFJLEdBQUcsU0FBUzs7WUFHakIsSUFBSXBDLFFBQVEsQ0FBQ29DLElBQUksS0FBSyxZQUFZLElBQUlwQyxRQUFRLENBQUMyRyxPQUFPLEtBQUssaUJBQWlCLElBQUk5SSxJQUFJLENBQUNBLElBQUksRUFBRTtjQUMxRixNQUFNO2dCQUFFNEQsT0FBTztnQkFBRUY7Y0FBSyxDQUFFLEdBQUcxRCxJQUFJLENBQUNBLElBQUksRUFBRXlELFFBQVE7Y0FDOUMsSUFBSUcsT0FBTyxHQUFHRixLQUFLLEdBQUcsQ0FBQyxFQUFFYSxJQUFJLEdBQUcsT0FBTztjQUN2Q3lFLEtBQUssR0FBRyxHQUFHcEYsT0FBTyxLQUFLRixLQUFLLEVBQUU7O1lBRy9CLElBQUlpRixlQUFlLElBQUlqSixJQUFJLENBQUN2QixVQUFVLENBQUNnRSxRQUFRLENBQUM1QyxFQUFFLENBQUMsQ0FBQ1MsSUFBSSxFQUFFa0osUUFBUSxFQUFFO2NBQ25FRixLQUFLLEdBQUc5RixLQUFLLENBQUNpRyxjQUFjLEdBQUd6SixJQUFJLENBQUN2QixVQUFVLENBQUNnRSxRQUFRLENBQUM1QyxFQUFFLENBQUMsQ0FBQ1MsSUFBSSxFQUFFa0osUUFBUSxDQUFDN0YsS0FBSzs7WUFHakYsT0FDQ2IsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQTtjQUFJcUcsR0FBRyxFQUFFLEdBQUd2SixJQUFJLENBQUNILEVBQUUsSUFBSTRDLFFBQVEsQ0FBQzVDLEVBQUUsRUFBRTtjQUFFc0QsU0FBUyxFQUFDO1lBQW1DLEdBQ2xGTCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLGVBQU9ULFFBQVEsQ0FBQ3VFLEtBQUssQ0FBUSxFQUM3QmxFLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQzZGLE1BQUEsQ0FBQVcsSUFBSTtjQUFDQyxPQUFPLEVBQUU5RSxJQUFJO2NBQUUxQixTQUFTLEVBQUUsR0FBRzBCLElBQUk7WUFBTyxHQUM1Q3lFLEtBQUssQ0FDQSxDQUNIO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUF4RyxNQUFBLEdBQUFoRyxPQUFBO1VBQ0EsSUFBQXlHLFFBQUEsR0FBQXpHLE9BQUE7VUFDQSxJQUFBMEssS0FBQSxHQUFBMUssT0FBQTtVQUNBLElBQUE4TSxTQUFBLEdBQUE5TSxPQUFBO1VBQ0EsSUFBQStNLE1BQUEsR0FBQS9NLE9BQUE7VUFDQSxJQUFBNEssV0FBQSxHQUFBNUssT0FBQTtVQUNBLElBQUFnTixNQUFBLEdBQUFoTixPQUFBO1VBRU0sU0FBVWdNLElBQUlBLENBQUM7WUFBRXhJO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVrRCxLQUFLO2NBQUU1RCxLQUFLO2NBQUV6QztZQUFLLENBQUUsR0FBRyxJQUFBb0csUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUUzQixLQUFLLEVBQUVyRCxVQUFVO2NBQUVzRDtZQUFLLENBQUUsR0FBR25DLEtBQUssQ0FBQ25CLFVBQVU7WUFDckQsTUFBTXNMLFFBQVEsR0FBRztjQUFFL0osSUFBSSxFQUFFO2dCQUFFd0ksSUFBSSxFQUFFLGlCQUFpQjtnQkFBRTNJLEVBQUUsRUFBRTtjQUE4QixDQUFFO2NBQUUsR0FBR1M7WUFBSSxDQUFFO1lBQ25HLE1BQU04RSxhQUFhLEdBQUd6RyxNQUFNLENBQUNDLElBQUksQ0FBQzBCLElBQUksQ0FBQzdCLFVBQVUsQ0FBQztZQUNsRCxNQUFNdUwsYUFBYSxHQUFHakksS0FBSyxDQUFDckIsR0FBRyxDQUFDNkksR0FBRyxJQUFHO2NBQ3JDLE9BQU87Z0JBQ045RyxRQUFRLEVBQUVoRSxVQUFVLENBQUM4SyxHQUFHLENBQUM7Z0JBQ3pCdkosSUFBSSxFQUFFK0osUUFBUTtnQkFDZFIsR0FBRztnQkFDSGpKLElBQUksRUFBRUEsSUFBSSxDQUFDN0IsVUFBVSxDQUFDOEssR0FBRyxDQUFDLEVBQUVqSjtlQUM1QjtZQUNGLENBQUMsQ0FBQztZQUVGLE1BQU0ySixVQUFVLEdBQVk3RSxhQUFhLENBQUN2RyxNQUFNLEdBQUdrRCxLQUFLLENBQUNsRCxNQUFNLEdBQUksR0FBRztZQUN0RSxNQUFNcUwsY0FBYyxHQUFHLGdCQUFnQi9NLEtBQUssQ0FBQ2dFLFlBQVksMEJBQTBCNEksUUFBUSxDQUFDL0osSUFBSSxDQUFDSCxFQUFFLEVBQUU7WUFDckcsTUFBTXNLLFlBQVksR0FBR0EsQ0FBQSxLQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNSLFFBQVEsQ0FBQy9KLElBQUksQ0FBQyxDQUFDO1lBRWpHLE9BQ0M4QyxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQUlDLFNBQVMsRUFBQztZQUFpQixHQUM5QkwsTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDd0UsV0FBQSxDQUFBZSxJQUFJO2NBQUNDLElBQUksRUFBRXdCLGNBQWM7Y0FBRXJELE9BQU8sRUFBRXNEO1lBQVksR0FDaERySCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLGlCQUNDSixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLGFBQ0NKLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQzJHLE1BQUEsQ0FBQVcsS0FBSztjQUNMQyxHQUFHLEVBQ0ZWLFFBQVEsQ0FBQy9KLElBQUksRUFBRTBLLFFBQVEsR0FDcEJYLFFBQVEsQ0FBQy9KLElBQUksQ0FBQzBLLFFBQVEsR0FDdEIsd0ZBQXdGO2NBRTVGQyxHQUFHLEVBQUUsR0FBR1osUUFBUSxDQUFDL0osSUFBSSxDQUFDd0ksSUFBSSxTQUFTO2NBQ25DckYsU0FBUyxFQUFDO1lBQWUsRUFDeEIsRUFDRDRHLFFBQVEsQ0FBQy9KLElBQUksQ0FBQ3dJLElBQUksQ0FDZixDQUNHLEVBQ1QxRixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFjLEdBQzVCTCxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFtQixHQUNoQ0ssS0FBSyxDQUFDb0gsU0FBUyxFQUNoQjlILE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsZUFBTyxJQUFBNEcsTUFBQSxDQUFBZSxhQUFhLEVBQUNaLFVBQVUsQ0FBQyxFLElBQVMsQ0FDcEMsRUFDTm5ILE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsQ0FBQ3NFLEtBQUEsQ0FBQW9CLElBQUk7Y0FBQ3pGLFNBQVMsRUFBQyxlQUFlO2NBQUNyQixLQUFLLEVBQUVrSSxhQUFhO2NBQUVuQixPQUFPLEVBQUVlLFNBQUEsQ0FBQVo7WUFBYyxFQUFJLENBQzVFLENBQ0EsQ0FDSDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBbEcsTUFBQSxHQUFBaEcsT0FBQTtVQUNBLElBQUF5RyxRQUFBLEdBQUF6RyxPQUFBO1VBQ0EsSUFBQWdPLEtBQUEsR0FBQWhPLE9BQUE7VUFDQSxJQUFBaU8sUUFBQSxHQUFBak8sT0FBQTtVQUNBLElBQUEwSyxLQUFBLEdBQUExSyxPQUFBO1VBRU0sU0FBVWtPLFVBQVVBLENBQUM7WUFBRTFLO1VBQUksQ0FBRTtZQUNsQyxNQUFNO2NBQUVrRDtZQUFLLENBQUUsR0FBRyxJQUFBRCxRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU13SCxLQUFLLEdBQUd0TSxNQUFNLENBQUNDLElBQUksQ0FBQ2tNLEtBQUEsQ0FBQUksS0FBSyxDQUFDO1lBRWhDLE1BQU1yQyxPQUFPLEdBQUdBLENBQUM7Y0FBRXZJO1lBQUksQ0FBRSxLQUFJO2NBQzVCLE9BQ0N3QyxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBLENBQUM2SCxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLE9BQU8sRUFBRTlLO2NBQUksR0FDckJ3QyxNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2dCQUFNQyxTQUFTLEVBQUM7Y0FBYyxHQUFFMkgsS0FBQSxDQUFBSSxLQUFLLENBQUM1SyxJQUFJLENBQUMsQ0FBUSxDQUMxQztZQUVaLENBQUM7WUFFRCxNQUFNK0ssU0FBUyxHQUFHL0ssSUFBSSxDQUFDd0YsTUFBTSxJQUFJbkgsTUFBTSxDQUFDQyxJQUFJLENBQUMwQixJQUFJLENBQUN3RixNQUFNLENBQUMsRUFBRWpILE1BQU07WUFDakUsT0FDQ2lFLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWMsR0FDaENMLE1BQUEsQ0FBQXhELE9BQUEsQ0FBQTRELGFBQUEsYUFBS00sS0FBSyxDQUFDc0MsTUFBTSxDQUFNLEVBQ3RCdUYsU0FBUyxHQUNUdkksTUFBQSxDQUFBeEQsT0FBQSxDQUFBNEQsYUFBQSxDQUFDc0UsS0FBQSxDQUFBb0IsSUFBSTtjQUFDekYsU0FBUyxFQUFDLG1CQUFtQjtjQUFDckIsS0FBSyxFQUFFbUosS0FBSztjQUFFcEMsT0FBTyxFQUFFQTtZQUFPLEVBQUksR0FFdEUvRixNQUFBLENBQUF4RCxPQUFBLENBQUE0RCxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFtQixtQkFDbkMsQ0FDUTtVQUVaIn0=