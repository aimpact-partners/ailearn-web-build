System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/shared/charts", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/alert", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/link", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0032DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_bgroupHttpSuite103Api) {
      dependency_6 = _bgroupHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_7 = _aimpactAilearnApp0032Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032SharedCharts) {
      dependency_16 = _aimpactAilearnApp0032SharedCharts;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Alert) {
      dependency_18 = _pragmateUi011Alert;
    }, function (_pragmateUi011Components) {
      dependency_19 = _pragmateUi011Components;
    }, function (_pragmateUi011Image) {
      dependency_20 = _pragmateUi011Image;
    }, function (_pragmateUi011List) {
      dependency_21 = _pragmateUi011List;
    }, function (_pragmateUi011Link) {
      dependency_22 = _pragmateUi011Link;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_23 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Chips) {
      dependency_24 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032Utils) {
      dependency_25 = _aimpactAilearnApp0032Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_26 = _pragmateUi011Tooltip;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@bgroup/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/link', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/chips', dependency_24], ['@aimpact/ailearn-app/utils', dependency_25], ['pragmate-ui/tooltip', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/assignments/dashboard.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3785622078,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
              _dashboardLayout.LayoutBroker.removeOverlay();
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
        hash: 3939025996,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("./model");
          var _model2 = require("@beyond-js/reactive/model");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            constructor() {
              super();
              this.#texts.on('change', this.triggerEvent);
            }
            async load(id) {
              try {
                this.fetching = true;
                this.#assignmentId = id;
                const model = new _model.Dashboard();
                this.#model = model;
                await model.load(id);
                globalThis.m = model;
                super.ready = true;
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
        hash: 3961476778,
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
              breadcrumb: []
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
        hash: 2122160673,
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
        hash: 4187177979,
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

                chart: {
                  type: 'donut'
                },
                series: [store.model.participants.length - diff, diff],
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
                    legend: {
                      position: 'bottom'
                    }
                  }
                }, {
                  breakpoint: 880,
                  options: {
                    legend: {
                      position: 'bottom',
                      horizontalAlign: 'left'
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
        hash: 3575007655,
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
                    legend: {
                      position: 'bottom'
                    }
                  }
                }, {
                  breakpoint: 880,
                  options: {
                    legend: {
                      position: 'bottom',
                      horizontalAlign: 'left'
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 1175824092,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          function Header() {
            const {
              model,
              texts
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture
            } = model.module;
            return _react.default.createElement("section", {
              className: "page__header-container"
            }, _react.default.createElement("header", {
              className: "assigment-header"
            }, _react.default.createElement(_image.Image, {
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1"
            }, description)), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 2642645745,
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
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          var _ = require("./404");
          var _header = require("./header");
          const APPNAME = _config.default?.params?.APP_NAME ?? 'RVD.AI';
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = (0, _react.useState)(store.ready);
            const [setTotalParticipants] = (0, _react.useState)(store.model?.participants?.length ?? 0);
            const {
              texts
            } = store;
            const {
              model: {
                module
              }
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => setTotalParticipants(store.model?.participants?.length), 'data.updated');
            if (!ready) return _react.default.createElement(_components.Spinner, {
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
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: {
                texts,
                model: store.model,
                store
              }
            }, _react.default.createElement(_ui.PageContainer, {
              className: "dashboard-container"
            }, _react.default.createElement(_header.Header, null), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_link.Link, {
              className: "btn btn-primary outline pui-buttonhas-icon ",
              href: `/assignments/${store.assignmentId}/wall`
            }, texts.actions.wall, _react.default.createElement(_icons.Icon, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJEYXNoYm9hcmQiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwicGFydGljaXBhbnRzIiwibW9kdWxlIiwiY2xhc3Nyb29tIiwiYWN0aXZpdGllcyIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2VsZWN0aW9uIiwidG90YWxTcG9rZW4iLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiZm91bmQiLCJyZWFkeSIsImRhc2hib2FyZElkIiwibWFwIiwiaXRlbSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImNvdW50IiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImNvdW50ZXJzIiwidG90YWwiLCJ1bmRlZmluZWQiLCJjb3JyZWN0Iiwid3JvbmciLCJkaWZmIiwibXVsdGlwbGUiLCJDaGFydCIsIm9wdGlvbnMiLCJ0aGVtZSIsInBhbGV0dGUiLCJjaGFydCIsInR5cGUiLCJzZXJpZXMiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY291bnRPYmplY3RzV2l0aG91dFVzZVNwb2tlbiIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkhlYWRlckNhcmQiLCJ0aXRsZSIsImltYWdlIiwicGljdHVyZSIsImRlc2NyaXB0aW9uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfaW1hZ2UiLCJIZWFkZXIiLCJJbWFnZSIsInNyYyIsImFsdCIsIlBhZ2VUaXRsZSIsIl9pdGVtIiwiX2xpc3QiLCJfbGluayIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiXyIsIl9oZWFkZXIiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJsYWJlbCIsImtleSIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENB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