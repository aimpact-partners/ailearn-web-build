System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.21/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.21/shared/charts", "@aimpact/ailearn-app@0.0.21/components/ui", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.21/shared/icons", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/link", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/modal", "pragmate-ui@0.0.3/chips", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0021Config) {
      dependency_7 = _aimpactAilearnApp0021Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0021SharedCharts) {
      dependency_10 = _aimpactAilearnApp0021SharedCharts;
    }, function (_aimpactAilearnApp0021ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0021ComponentsUi;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0021SharedIcons) {
      dependency_13 = _aimpactAilearnApp0021SharedIcons;
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
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.21"], ["@aimpact/ailearn-app", "0.0.21"]]);
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
        hash: 2026093669,
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
          function Item({
            data
          }) {
            const {
              texts,
              model,
              handleModal,
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
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement(_components.Link, {
              href: participantUri
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidGV4dHMiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsInNlcmllcyIsImNoYXJ0Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJsZWdlbmQiLCJwb3NpdGlvbiIsIlBhcnRpY2lwYXRpb25DaGFydCIsIngiLCJ5IiwiY291bnRPYmplY3RzV2l0aG91dFVzZVNwb2tlbiIsImtub3dsZWRnZSIsInZvY2FidWxhcnkiLCJwb2ludHMiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfdWkiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2VtcHR5IiwiRW1wdHkiLCJGcmFnbWVudCIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiSWNvbkJ1dHRvbiIsImljb24iLCJvbkNsaWNrIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImltYWdlIiwicGljdHVyZSIsImRlc2NyaXB0aW9uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJIZWFkZXIiLCJfaXRlbSIsIl9saXN0IiwiX2xpbmsiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsIl9tb2RhbCIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRTaG93IiwiY3VycmVudFBhcnRpY2lwYW50SWQiLCJzZXRDdXJyZW50UGFydGljaXBhbnRJZCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsImhhbmRsZU1vZGFsIiwicGFydGljaXBhbnRJZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiUHJvdmlkZXIiLCJuYW1lIiwiTGluayIsImhyZWYiLCJJY29uIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiTW9kYWwiLCJzaXplIiwib25DbG9zZSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsImxhYmVsIiwia2V5IiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwiSW1hZ2UiLCJzcmMiLCJwaG90b1VybCIsImFsdCIsInBlcmNlbnRpbCIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3BhcnRpY2lwYXRpb24udHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFB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