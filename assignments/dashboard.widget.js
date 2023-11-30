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
        hash: 3151196992,
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
        hash: 559467445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          function ModuleActivity({
            data
          }) {
            const {
              user,
              activity
            } = data;
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
              if (correct < total / 2) type = 'warning';
              label = `${correct} /${total}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidGV4dHMiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiZGlmZiIsIm11bHRpcGxlIiwiQ2hhcnQiLCJvcHRpb25zIiwidGhlbWUiLCJwYWxldHRlIiwic2VyaWVzIiwiY2hhcnQiLCJ3aWR0aCIsInR5cGUiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJ0b3RhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iLCJQYXJ0aWNpcGF0aW9uQ2hhcnQiLCJ4IiwieSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiZGVzY3JpcHRpb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIkhlYWRlciIsIl9pdGVtIiwiX2xpc3QiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIm5hbWUiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJjb3VudGVycyIsImNvcnJlY3QiLCJsYWJlbCIsImtleSIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsIiwiTGluayIsImhyZWYiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvcGFydGljaXBhdGlvbi50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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