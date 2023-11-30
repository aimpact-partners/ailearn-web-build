System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.18/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.18/shared/charts", "@aimpact/ailearn-app@0.0.18/components/ui", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.18/shared/icons", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/chips", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0018Config) {
      dependency_7 = _aimpactAilearnApp0018Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0018SharedCharts) {
      dependency_10 = _aimpactAilearnApp0018SharedCharts;
    }, function (_aimpactAilearnApp0018ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0018ComponentsUi;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0018SharedIcons) {
      dependency_13 = _aimpactAilearnApp0018SharedIcons;
    }, function (_pragmateUi003Empty) {
      dependency_14 = _pragmateUi003Empty;
    }, function (_pragmateUi003List) {
      dependency_15 = _pragmateUi003List;
    }, function (_pragmateUi003Components) {
      dependency_16 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_17 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Chips) {
      dependency_18 = _pragmateUi003Chips;
    }, function (_pragmateUi003Image) {
      dependency_19 = _pragmateUi003Image;
    }, function (_pragmateUi003Tooltip) {
      dependency_20 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.18"], ["@aimpact/ailearn-app", "0.0.18"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@aimpact/ailearn-app/shared/charts', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/shared/icons', dependency_13], ['pragmate-ui/empty', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/chips', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/tooltip', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.18/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.18/assignments/dashboard.widget');
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
        hash: 224813378,
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
        hash: 1056736327,
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
            console.log(store.model.participants);
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.multiple), _react.default.createElement(_charts.Chart, {
              options: {
                theme: {
                  palette: 'palette7' // upto palette10
                },

                series: [diff, store.model.totalMultiple],
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
        hash: 3079654592,
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
                  width: '100%',
                  type: 'donut'
                },
                theme: {
                  palette: 'palette5' // upto palette10
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
        hash: 3931600774,
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
              breadcrumb: [['AI-Learn', '/'], ['Assignments', `/assignments/${id}/coach`]]
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1274493513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          function Header() {}
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3511400860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _charts = require("./charts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [totalParticipants, setTotalParticipants] = _react.default.useState(store.model?.participants?.length ?? 0);
            const {
              model: {
                id,
                module
              }
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setTotalParticipants(store.model?.participants?.length);
            }, 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (!store.model.found) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) {
              return _react.default.createElement(_empty.Empty, {
                store: store,
                texts: texts
              });
            }
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
              breadcrumb: [['AI-Learn', '/'], [classroom.name, `/assignments/${classroom.id}/coach/list`], ['Dashboard', `/assignments/${store.assignmentId}/dashboard/classroom`]]
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
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement(_charts.Charts, {
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
        hash: 2269239615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _activity = require("./activity");
          var _image = require("pragmate-ui/image");
          function Item({
            data
          }) {
            const {
              texts,
              model
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
            const percentil = participation.length / order.length * 100;
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: `/assignments/${model.id}/dashboard/participant/${userData.user.id}`
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, _react.default.createElement(_image.Image, {
              src: userData.user?.photoUrl ? userData.user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${userData.user.name}-avatar`,
              className: "avatar__image"
            }), userData.user.name)), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("div", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, percentil, "%")), _react.default.createElement(_list.List, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidGV4dHMiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiZGlmZiIsIm11bHRpcGxlIiwiQ2hhcnQiLCJvcHRpb25zIiwidGhlbWUiLCJwYWxldHRlIiwic2VyaWVzIiwiY2hhcnQiLCJ3aWR0aCIsInR5cGUiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJ0b3RhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iLCJQYXJ0aWNpcGF0aW9uQ2hhcnQiLCJ4IiwieSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiZGVzY3JpcHRpb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIkhlYWRlciIsIl9pdGVtIiwiX2xpc3QiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIm5hbWUiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJjb3VudGVycyIsImNvcnJlY3QiLCJsYWJlbCIsImtleSIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJjb3VudCIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsIiwiTGluayIsImhyZWYiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvcGFydGljaXBhdGlvbi50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zcG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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