System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@bgroup/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32/shared/charts", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
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
    }, function (_pragmateUi011Link) {
      dependency_18 = _pragmateUi011Link;
    }, function (_pragmateUi011Image) {
      dependency_19 = _pragmateUi011Image;
    }, function (_pragmateUi011List) {
      dependency_20 = _pragmateUi011List;
    }, function (_pragmateUi011Components) {
      dependency_21 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_22 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Chips) {
      dependency_23 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032Utils) {
      dependency_24 = _aimpactAilearnApp0032Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@bgroup/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/components', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/chips', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
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
        hash: 1635645438,
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

                legend: {
                  position: 'bottom',
                  horizontalAlign: 'left'
                },
                chart: {
                  type: 'donut',
                  height: '200px'
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
                    },
                    chart: {
                      width: '160px'
                    }
                  }
                }, {
                  breakpoint: 880,
                  options: {
                    legend: {
                      position: 'bottom',
                      horizontalAlign: 'left'
                    },
                    chart: {
                      width: '160px'
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
        hash: 3094365904,
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
                  type: 'donut',
                  height: '200px'
                },
                theme: {
                  palette: 'palette7' // upto palette10
                },

                legend: {
                  position: 'bottom',
                  horizontalAlign: 'left'
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
                    },
                    chart: {
                      width: '160px',
                      height: '160px'
                    }
                  }
                }, {
                  breakpoint: 880,
                  options: {
                    legend: {
                      position: 'bottom',
                      horizontalAlign: 'left'
                    },
                    chart: {
                      width: '160px'
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
        hash: 255829608,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _config = require("@aimpact/ailearn-app/config");
          var _empty = require("pragmate-ui/empty");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function Empty({
            store,
            texts
          }) {
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons.ICONS.classworks
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
        hash: 2091860871,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _react = require("react");
          var _link = require("pragmate-ui/link");
          var _image = require("pragmate-ui/image");
          var _context = require("./context");
          var _icons = require("pragmate-ui/icons");
          function Header() {
            const {
              model,
              texts,
              store
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
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement(_image.Image, {
              src: picture,
              alt: title
            }), _react.default.createElement("h1", null, title), _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description)), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_link.Link, {
              className: "btn btn-primary outline pui-button has-icon ",
              href: `/assignments/${store.assignmentId}/wall`
            }, texts.actions.wall, _react.default.createElement(_icons.Icon, {
              className: "md",
              icon: "shared-folder"
            })))), _react.default.createElement("div", {
              className: "actions"
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3560031388,
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
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
            }, _react.default.createElement(_header.Header, null), _react.default.createElement(_charts.Charts, {
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
        hash: 2627011468,
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
              className: "dashboard-card card__user"
            }, _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: registerUser
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: userData.user?.photoUrl ? userData.user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${userData.user.name}-avatar`,
              className: "avatar__image"
            }), _react.default.createElement("h5", null, userData.user.name)), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("h6", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, (0, _utils.limitDecimals)(percentile), "%")), _react.default.createElement(_list.List, {
              className: "list-unstyled user-activity__data",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9tb2RlbCIsIl9hcGkiLCJfY29uZmlnIiwiX3Nlc3Npb24iLCJEYXNoYm9hcmQiLCJSZWFjdGl2ZU1vZGVsIiwiYXBpIiwicGFydGljaXBhbnRzIiwibW9kdWxlIiwiY2xhc3Nyb29tIiwiYWN0aXZpdGllcyIsInRvdGFsUGFydGljaXBhbnRzIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRvdGFsTXVsdGlwbGUiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwic2VsZWN0aW9uIiwidG90YWxTcG9rZW4iLCJjb25zdHJ1Y3RvciIsIkFwaSIsImRlZmF1bHQiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwibW9kZWwiLCJpZCIsImJlYXJlciIsInNlc3Npb25XcmFwcGVyIiwidXNlciIsInRva2VuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsIm1lc3NhZ2UiLCJkYXRhIiwiZm91bmQiLCJyZWFkeSIsImRhc2hib2FyZElkIiwibWFwIiwiaXRlbSIsImUiLCJjb25zb2xlIiwibG9nIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJmZXRjaGluZyIsIm0iLCJlcnJvciIsInByb2Nlc3MiLCIjcHJvY2VzcyIsImFjdGl2aXRpZXNEYXRhIiwiTWFwIiwicGFydGljaXBhbnRzRGF0YSIsImFjdGl2aXRlcyIsIml0ZW1zIiwib3JkZXIiLCJmb3JFYWNoIiwic2V0IiwiaSIsInVzZXJBY3Rpdml0aWVzIiwicGFydGljaXBhbnREYXRhIiwiaGFzIiwic2hhcmVzIiwiaiIsImFjdGl2aXR5SWQiLCJhY3Rpdml0eSIsImhhc093blByb3BlcnR5IiwiaW5zdGFuY2UiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImNvdW50IiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImNvdW50ZXJzIiwidG90YWwiLCJ1bmRlZmluZWQiLCJjb3JyZWN0Iiwid3JvbmciLCJkaWZmIiwibXVsdGlwbGUiLCJDaGFydCIsIm9wdGlvbnMiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwidHlwZSIsImhlaWdodCIsInNlcmllcyIsImRhdGFMYWJlbHMiLCJmb3JtYXR0ZXIiLCJzZXJpZXNJbmRleCIsInciLCJjb25maWciLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwid2lkdGgiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlU3Bva2VuIiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2VtcHR5IiwiRW1wdHkiLCJJQ09OUyIsImNsYXNzd29ya3MiLCJ0aXRsZSIsImVtcHR5IiwiX2xpbmsiLCJfaW1hZ2UiLCJIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInBpY3R1cmUiLCJJbWFnZSIsInNyYyIsImFsdCIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsIndhbGwiLCJJY29uIiwiX2l0ZW0iLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiXyIsIl9oZWFkZXIiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2NoaXBzIiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwibGFiZWwiLCJrZXkiLCJtZXNzYWdlcyIsIm1lc3NhZ2VDb3VudGVyIiwiQ2hpcCIsInZhcmlhbnQiLCJfYWN0aXZpdHkiLCJfdXRpbHMiLCJ1c2VyRGF0YSIsIm5hbWUiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwicmVnaXN0ZXJVc2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90b1VybCIsInBlcmNlbnRpbCIsImxpbWl0RGVjaW1hbHMiLCJfY29yZSIsIl90b29sdGlwIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJUb29sdGlwIiwiY29udGVudCIsImhhc1Nwb2tlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zcG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FD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