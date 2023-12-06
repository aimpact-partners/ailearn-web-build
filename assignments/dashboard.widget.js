System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.19/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.19/shared/charts", "@aimpact/ailearn-app@0.0.19/components/ui", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.19/shared/icons", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/chips", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp0019Config) {
      dependency_7 = _aimpactAilearnApp0019Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0019SharedCharts) {
      dependency_10 = _aimpactAilearnApp0019SharedCharts;
    }, function (_aimpactAilearnApp0019ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0019ComponentsUi;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0019SharedIcons) {
      dependency_13 = _aimpactAilearnApp0019SharedIcons;
    }, function (_pragmateUi003Empty) {
      dependency_14 = _pragmateUi003Empty;
    }, function (_pragmateUi003List) {
      dependency_15 = _pragmateUi003List;
    }, function (_pragmateUi003Link) {
      dependency_16 = _pragmateUi003Link;
    }, function (_pragmateUi003Components) {
      dependency_17 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_18 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Modal) {
      dependency_19 = _pragmateUi003Modal;
    }, function (_pragmateUi003Chips) {
      dependency_20 = _pragmateUi003Chips;
    }, function (_pragmateUi003Image) {
      dependency_21 = _pragmateUi003Image;
    }, function (_pragmateUi003Tooltip) {
      dependency_22 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.19"], ["@aimpact/ailearn-app", "0.0.19"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.19/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@aimpact/ailearn-app/shared/charts', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/shared/icons', dependency_13], ['pragmate-ui/empty', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/link', dependency_16], ['pragmate-ui/components', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/chips', dependency_20], ['pragmate-ui/image', dependency_21], ['pragmate-ui/tooltip', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.19/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.19/assignments/dashboard.widget');
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
        hash: 3878412630,
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
                  const knowledge = activity.data?.knowledge;
                  const vocabulary = activity.data?.vocabulary;
                  return knowledge && vocabulary && knowledge.points !== undefined && vocabulary.points !== undefined;
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
        hash: 4248315522,
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
        hash: 1093211365,
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
          var _link = require("pragmate-ui/link");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _modal = require("pragmate-ui/modal");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [show, setShow] = (0, _react.useState)(false);
            const [currentParticipantId, setCurrentParticipantId] = (0, _react.useState)('');
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [totalParticipants, setTotalParticipants] = (0, _react.useState)(store.model?.participants?.length ?? 0);
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
            function handleModal(participantId, user) {
              if (participantId !== currentParticipantId) {
                localStorage.setItem('student.details', JSON.stringify(user));
                setCurrentParticipantId(participantId);
              }
              setShow(!show);
            }
            const {
              classroom
            } = store.model;
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: {
                texts,
                model: store.model,
                store,
                handleModal
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
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement("div", {
              className: "header-list__nav"
            }, _react.default.createElement(_link.Link, {
              className: "btn btn-primary",
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
            }), show && _react.default.createElement(_modal.Modal, {
              show: true,
              className: "participant-dashboard",
              size: "lg",
              onClose: handleModal
            }, _react.default.createElement("assignment-dashboard-participant", {
              id: store.assignmentId,
              "participant-id": currentParticipantId
            }))));
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
        hash: 1872168185,
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
          function Item({
            data
          }) {
            const {
              texts,
              model,
              handleModal
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
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement("div", {
              className: "unstyled",
              onClick: () => handleModal(userData.user.id, {
                ...userData.user,
                percentile
              })
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, _react.default.createElement(_image.Image, {
              src: userData.user?.photoUrl ? userData.user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${userData.user.name}-avatar`,
              className: "avatar__image"
            }), userData.user.name)), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("div", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, percentile, "%")), _react.default.createElement(_list.List, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidGV4dHMiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsIlBhcnRpY2lwYXRpb25DaGFydCIsIngiLCJ5IiwiY291bnRPYmplY3RzV2l0aG91dFVzZVNwb2tlbiIsImtub3dsZWRnZSIsInZvY2FidWxhcnkiLCJwb2ludHMiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2VtcHR5IiwiRW1wdHkiLCJGcmFnbWVudCIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImltYWdlIiwicGljdHVyZSIsImRlc2NyaXB0aW9uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJIZWFkZXIiLCJfaXRlbSIsIl9saXN0IiwiX2xpbmsiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9tb2RhbCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRTaG93IiwiY3VycmVudFBhcnRpY2lwYW50SWQiLCJzZXRDdXJyZW50UGFydGljaXBhbnRJZCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImhhbmRsZU1vZGFsIiwicGFydGljaXBhbnRJZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJuYW1lIiwiTGluayIsImhyZWYiLCJJY29uIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiTW9kYWwiLCJzaXplIiwib25DbG9zZSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsImxhYmVsIiwia2V5IiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJhbHQiLCJwZXJjZW50aWwiLCJfY29yZSIsIl90b29sdGlwIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJUb29sdGlwIiwiY29udGVudCIsImhhc1Nwb2tlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9wYXJ0aWNpcGF0aW9uLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FB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