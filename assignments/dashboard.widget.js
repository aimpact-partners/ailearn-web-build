System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32-dev.44/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.32-dev.44/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.32-dev.44/components/ui", "@aimpact/ailearn-app@0.0.32-dev.44/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.32-dev.44/shared/charts", "@aimpact/ailearn-app@0.0.32-dev.44/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32-dev.44/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032Dev44DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032Dev44DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0032Dev44Config) {
      dependency_7 = _aimpactAilearnApp0032Dev44Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0032Dev44ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Dev44ComponentsUi;
    }, function (_aimpactAilearnApp0032Dev44ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0032Dev44ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0032Dev44SharedCharts) {
      dependency_16 = _aimpactAilearnApp0032Dev44SharedCharts;
    }, function (_aimpactAilearnApp0032Dev44ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0032Dev44ComponentsIcons;
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
    }, function (_aimpactAilearnApp0032Dev44Utils) {
      dependency_24 = _aimpactAilearnApp0032Dev44Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.44"], ["@aimpact/ailearn-app", "0.0.32-dev.44"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/components', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/chips', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.44/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.44/assignments/dashboard.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3329750896,
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
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/index
      *****************************/

      ims.set('./model/index', {
        hash: 514127104,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/http-suite/api");
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
        hash: 1297565793,
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
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
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
              _dashboardLayout.LayoutBroker.setModel(this);
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
            clear() {
              _dashboardLayout.LayoutBroker.clear();
            }
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
        hash: 3558280661,
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
                      width: '180px',
                      height: '180px'
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
        hash: 551468863,
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
              texts,
              model
            } = (0, _context.useDashboardContext)();
            const {
              items: activities,
              order
            } = model.activities;
            const spokenId = Object.keys(activities).find(key => activities[key].type === 'spoken');
            const total = store.model.participants.reduce((acc, item) => item.activities[spokenId] ? acc + 1 : acc, 0);
            const diff = store.model.participants.length - total;
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
                      width: '180px',
                      height: '180px'
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
        hash: 3097482679,
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
            const [, setTotalParticipants] = (0, _react.useState)(store.model?.participants?.length ?? 0);
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
        hash: 3057335224,
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
              key: `${user.id}.${activity.id}`
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
        hash: 4169793757,
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
            console.log(10, data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzZWxlY3Rpb24iLCJ0b3RhbFNwb2tlbiIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZXJyb3IiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImNvdW50IiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImFjdGl2aXR5IiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0Iiwic2VyaWVzIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIml0ZW1zIiwib3JkZXIiLCJzcG9rZW5JZCIsImZpbmQiLCJrZXkiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZW1wdHkiLCJFbXB0eSIsIklDT05TIiwiY2xhc3N3b3JrcyIsInRpdGxlIiwiZW1wdHkiLCJfbGluayIsIl9pbWFnZSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJfaXRlbSIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfIiwiX2hlYWRlciIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJsYWJlbCIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIUixnQkFBQSxDQUFBUyxZQUFZLENBQUNDLGFBQWEsRUFBRTtjQUM1QixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQWlCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsSUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixPQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLFFBQUEsR0FBQXhCLE9BQUE7VUFHTSxNQUFPeUIsU0FBVSxTQUFRSixNQUFBLENBQUFLLGFBQXdCO1lBQ3RELENBQUFDLEdBQUk7WUFJSixDQUFBQyxZQUFhLEdBQW1CLEVBQUU7WUFDbEMsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxJQUFJQyxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDTixZQUFZLENBQUMsQ0FBQ08sTUFBTTtZQUM3QztZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUNSLFlBQVksQ0FBQ1MsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUM3QyxJQUFJQSxJQUFJLENBQUNDLFNBQVMsRUFBRSxPQUFPRixHQUFHLEdBQUcsQ0FBQztnQkFDbEMsT0FBT0EsR0FBRztnQkFDVixDQUFDO2NBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOO1lBQ0EsSUFBSUcsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDYixZQUFZLENBQUNTLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDN0MsSUFBSUEsSUFBSSxDQUFDQyxTQUFTLEVBQUUsT0FBT0YsR0FBRyxHQUFHLENBQUM7Z0JBQ2xDLE9BQU9BLEdBQUc7Y0FDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ047WUFDQUksWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBZixHQUFJLEdBQUcsSUFBSUwsSUFBQSxDQUFBcUIsR0FBRyxDQUFDcEIsT0FBQSxDQUFBcUIsT0FBTSxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTyxDQUFDO2NBQy9DLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7Y0FDbEVDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFFQSxNQUFNakMsSUFBSUEsQ0FBQ2tDLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBeEIsR0FBSSxDQUFDeUIsTUFBTSxDQUFDNUIsUUFBQSxDQUFBNkIsY0FBYyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQztnQkFFM0MsTUFBTUMsUUFBUSxHQUFjLE1BQU0sSUFBSSxDQUFDLENBQUE3QixHQUFJLENBQUNYLEdBQUcsQ0FBQyxnQkFBZ0JtQyxFQUFFLFlBQVksQ0FBQztnQkFFL0UsSUFBSSxDQUFDSyxRQUFRLENBQUNDLE1BQU0sRUFBRTtrQkFDckIsTUFBTSxJQUFJQyxLQUFLLENBQUNGLFFBQVEsQ0FBQ0csT0FBTyxDQUFDOztnQkFHbEMsSUFBSTFCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDc0IsUUFBUSxDQUFDSSxJQUFJLENBQUMsQ0FBQ3pCLE1BQU0sS0FBSyxDQUFDLEVBQUU7a0JBQzVDLElBQUksQ0FBQzBCLEtBQUssR0FBRyxLQUFLO2tCQUNsQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2tCQUNqQjs7Z0JBR0QsTUFBTTtrQkFBRWpDLE1BQU07a0JBQUVELFlBQVk7a0JBQUVHLFVBQVU7a0JBQUVELFNBQVM7a0JBQUVxQixFQUFFLEVBQUVZO2dCQUFXLENBQUUsR0FBR1AsUUFBUSxDQUFDSSxJQUFJO2dCQUV0RixJQUFJLENBQUMsQ0FBQWhDLFlBQWEsR0FBR0ssTUFBTSxDQUFDQyxJQUFJLENBQUNOLFlBQVksQ0FBQyxDQUFDb0MsR0FBRyxDQUFDQyxJQUFJLElBQUlyQyxZQUFZLENBQUNxQyxJQUFJLENBQUMsQ0FBQztnQkFDOUVoQixVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO2dCQUN2QixJQUFJLENBQUMsQ0FBQXJCLE1BQU8sR0FBR0EsTUFBTTtnQkFDckIsSUFBSSxDQUFDLENBQUFDLFNBQVUsR0FBR0EsU0FBUztnQkFDM0IsSUFBSSxDQUFDLENBQUFDLFVBQVcsR0FBR0EsVUFBVTtnQkFDN0IsSUFBSSxDQUFDb0IsRUFBRSxHQUFHWSxXQUFXO2dCQUVyQixJQUFJLENBQUNGLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJO2VBQ2pCLENBQUMsT0FBT0ksQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDOztZQUVoQjs7VUFDQTlDLE9BQUEsQ0FBQUssU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7OztVQ25GRDs7VUFFQVEsTUFBQSxDQUFBb0MsY0FBQSxDQUFBakQsT0FBQTtZQUNBa0QsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFqRCxNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXVFLE9BQUEsR0FBQXZFLE9BQUE7VUFDQSxJQUFBd0UsTUFBQSxHQUFBeEUsT0FBQTtVQUNBLElBQUF5RSxlQUFBLEdBQUF6RSxPQUFBO1VBRUEsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNNLE1BQU9RLFlBQWEsU0FBUStELE9BQUEsQ0FBQTdDLGFBQTJCO1lBQzVELENBQUF3QixLQUFNO1lBQ04sQ0FBQXdCLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBQ0EsSUFBSXhCLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQTJCLEtBQU0sR0FBK0IsSUFBSUwsTUFBQSxDQUFBTSxZQUFZLENBQUNMLGVBQUEsQ0FBQTVDLE1BQU0sQ0FBQ2tELFNBQVMsQ0FBQztZQUN2RSxJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFUCxLQUFLO1lBQzFCO1lBQ0EsSUFBSVIsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFlLEtBQU0sQ0FBQ2YsS0FBSztZQUN4QztZQUVBcEIsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBbUMsS0FBTSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDOUUsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDc0UsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM1QjtZQUNBLE1BQU1qRSxJQUFJQSxDQUFDa0MsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDZ0MsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBUixZQUFhLEdBQUd4QixFQUFFO2dCQUN2QixNQUFNRCxLQUFLLEdBQUcsSUFBSTdCLE1BQUEsQ0FBQUksU0FBUyxFQUFFO2dCQUM3QixJQUFJLENBQUMsQ0FBQXlCLEtBQU0sR0FBR0EsS0FBSztnQkFDbkIsTUFBTUEsS0FBSyxDQUFDakMsSUFBSSxDQUFDa0MsRUFBRSxDQUFDO2dCQUVwQkYsVUFBVSxDQUFDbUMsQ0FBQyxHQUFHbEMsS0FBSztnQkFFcEIsS0FBSyxDQUFDWSxLQUFLLEdBQUcsSUFBSTtlQUNsQixDQUFDLE9BQU9JLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDa0IsS0FBSyxDQUFDbkIsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDaUIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUFHLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDcEIsSUFBSTtnQkFDSCxJQUFJLENBQUNILFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNLElBQUksQ0FBQ2pDLEtBQUssQ0FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTBELFlBQWEsQ0FBQztnQkFDekMsSUFBSSxDQUFDWSxPQUFPLENBQUMsY0FBYyxDQUFDO2VBQzVCLENBQUMsT0FBT3JCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDa0IsS0FBSyxDQUFDbkIsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDaUIsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRGhFLEtBQUtBLENBQUE7Y0FDSmhCLGdCQUFBLENBQUFTLFlBQVksQ0FBQ08sS0FBSyxFQUFFO1lBQ3JCOztVQUNBQyxPQUFBLENBQUFaLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RUQsSUFBQWdGLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsR0FBQSxHQUFBekYsT0FBQTtVQUNBLElBQUEwRixhQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTJGLE1BQUEsR0FBQTNGLE9BQUE7VUFFQSxJQUFBdUIsT0FBQSxHQUFBdkIsT0FBQTtVQUlBLE1BQU00RixHQUFHLEdBQUdyRSxPQUFBLENBQUFxQixPQUFNLEVBQUVDLE1BQU0sRUFBRWdELFFBQVEsSUFBSSxRQUFRO1VBQzFDLFNBQVVDLFFBQVFBLENBQUM7WUFBRXhGLEtBQUs7WUFBRXVFO1VBQUssQ0FBRTtZQUN4QyxPQUNDVyxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUFQLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW9ELFFBQUEsUUFDQ1IsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDTCxhQUFBLENBQUFPLFlBQVk7Y0FBQ0MsVUFBVSxFQUFFO1lBQUUsR0FDM0JWLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ0osTUFBQSxDQUFBUSxVQUFVO2NBQUNDLElBQUksRUFBQyxTQUFTO2NBQUNDLE9BQU8sRUFBRS9GLEtBQUssQ0FBQ2dGO1lBQU8sRUFBSSxDQUN2QyxFQUNmRSxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNOLEdBQUEsQ0FBQWEsYUFBYSxRQUNiZCxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLG1CQUFZLENBQ0csQ0FDZDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCQSxJQUFBUCxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXVHLFNBQUEsR0FBQXZHLE9BQUE7VUFDQSxJQUFBd0csT0FBQSxHQUFBeEcsT0FBQTtVQUNBO1VBRU0sU0FBVXlHLE1BQU1BLENBQUM7WUFBRTdDO1VBQUksQ0FBRTtZQUM5QixPQUNDNEIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFTVyxTQUFTLEVBQUM7WUFBbUIsR0FFckNsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNRLFNBQUEsQ0FBQUksYUFBYSxPQUFHLEVBQ2pCbkIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDUyxPQUFBLENBQUFJLFdBQVcsT0FBRyxDQUNOO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQXBCLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBNkcsT0FBQSxHQUFBN0csT0FBQTtVQUNBLElBQUE4RyxRQUFBLEdBQUE5RyxPQUFBO1VBR00sU0FBVTJHLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFckcsS0FBSztjQUFFdUU7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUMsbUJBQW1CLEdBQUU7WUFFOUMsTUFBTUMsOEJBQThCLEdBQUlwRixZQUE0QixJQUFZO2NBQy9FLE9BQU9BLFlBQVksQ0FBQ1MsTUFBTSxDQUFDLENBQUM0RSxLQUFLLEVBQUVoRCxJQUFJLEtBQUk7Z0JBQzFDLE1BQU1pRCxlQUFlLEdBQUdqRixNQUFNLENBQUNrRixNQUFNLENBQUNsRCxJQUFJLENBQUNsQyxVQUFVLENBQUMsQ0FBQ3FGLElBQUksQ0FBQ0MsUUFBUSxJQUFHO2tCQUN0RSxNQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ3pELElBQUksRUFBRTBELFFBQVE7a0JBQ3hDLE9BQ0NBLFFBQVEsSUFDUkEsUUFBUSxDQUFDQyxLQUFLLEtBQUtDLFNBQVMsSUFDNUJGLFFBQVEsQ0FBQ0csT0FBTyxLQUFLRCxTQUFTLElBQzlCRixRQUFRLENBQUNJLEtBQUssS0FBS0YsU0FBUztnQkFFOUIsQ0FBQyxDQUFDO2dCQUNGLE9BQU9QLEtBQUssSUFBSUMsZUFBZSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Y0FDekMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOLENBQUM7WUFFRCxNQUFNUyxJQUFJLEdBQUdYLDhCQUE4QixDQUFDMUcsS0FBSyxDQUFDNEMsS0FBSyxDQUFDdEIsWUFBWSxDQUFDO1lBRXJFLE9BQ0M0RCxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2NBQVNXLFNBQVMsRUFBQztZQUFjLEdBQ2hDbEIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxhQUFLbEIsS0FBSyxDQUFDK0MsUUFBUSxDQUFNLEVBQ3pCcEMsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDYyxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsS0FBSyxFQUFFO2tCQUNOQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2lCQUNwQjtnQkFDREMsTUFBTSxFQUFFO2tCQUNQQyxRQUFRLEVBQUUsUUFBUTtrQkFDbEJDLGVBQWUsRUFBRTtpQkFDakI7Z0JBQ0RDLEtBQUssRUFBRTtrQkFDTkMsSUFBSSxFQUFFLE9BQU87a0JBQ2JDLE1BQU0sRUFBRTtpQkFDUjtnQkFDREMsTUFBTSxFQUFFLENBQUNqSSxLQUFLLENBQUM0QyxLQUFLLENBQUN0QixZQUFZLENBQUNPLE1BQU0sR0FBR3dGLElBQUksRUFBRUEsSUFBSSxDQUFDO2dCQUV0RGEsVUFBVSxFQUFFO2tCQUNYQyxTQUFTLEVBQUVBLENBQUNuRSxLQUFLLEVBQUVWLElBQUksS0FBSTtvQkFDMUIsTUFBTTtzQkFDTDhFLFdBQVc7c0JBQ1hDLENBQUMsRUFBRTt3QkFDRkMsTUFBTSxFQUFFOzBCQUFFTDt3QkFBTTtzQkFBRTtvQkFDbEIsQ0FDRCxHQUFHM0UsSUFBSTtvQkFFUixPQUFPMkUsTUFBTSxDQUFDRyxXQUFXLENBQUM7a0JBQzNCO2lCQUNBO2dCQUNERyxNQUFNLEVBQUUsQ0FBQ2hFLEtBQUssQ0FBQ2lFLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFbEUsS0FBSyxDQUFDaUUsYUFBYSxDQUFDdkIsS0FBSyxDQUFDO2dCQUNoRXlCLFVBQVUsRUFBRSxDQUNYO2tCQUNDQyxVQUFVLEVBQUUsR0FBRztrQkFDZm5CLE9BQU8sRUFBRTtvQkFDUkcsTUFBTSxFQUFFO3NCQUNQQyxRQUFRLEVBQUU7cUJBQ1Y7b0JBQ0RFLEtBQUssRUFBRTtzQkFDTmMsS0FBSyxFQUFFLE9BQU87c0JBQ2RaLE1BQU0sRUFBRTs7O2lCQUdWLEVBQ0Q7a0JBQ0NXLFVBQVUsRUFBRSxHQUFHO2tCQUNmbkIsT0FBTyxFQUFFO29CQUNSRyxNQUFNLEVBQUU7c0JBQ1BDLFFBQVEsRUFBRSxRQUFRO3NCQUNsQkMsZUFBZSxFQUFFO3FCQUNqQjtvQkFDREMsS0FBSyxFQUFFO3NCQUNOYyxLQUFLLEVBQUU7OztpQkFHVDs7WUFFRixFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0RkEsSUFBQTFELE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBNkcsT0FBQSxHQUFBN0csT0FBQTtVQUNBLElBQUE4RyxRQUFBLEdBQUE5RyxPQUFBO1VBR00sU0FBVTRHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFdEcsS0FBSztjQUFFdUUsS0FBSztjQUFFM0I7WUFBSyxDQUFFLEdBQUcsSUFBQTRELFFBQUEsQ0FBQUMsbUJBQW1CLEdBQUU7WUFDckQsTUFBTTtjQUFFb0MsS0FBSyxFQUFFcEgsVUFBVTtjQUFFcUg7WUFBSyxDQUFFLEdBQUdsRyxLQUFLLENBQUNuQixVQUFVO1lBRXJELE1BQU1zSCxRQUFRLEdBQUdwSCxNQUFNLENBQUNDLElBQUksQ0FBQ0gsVUFBVSxDQUFDLENBQUN1SCxJQUFJLENBQUNDLEdBQUcsSUFBSXhILFVBQVUsQ0FBQ3dILEdBQUcsQ0FBQyxDQUFDbEIsSUFBSSxLQUFLLFFBQVEsQ0FBQztZQUN2RixNQUFNZCxLQUFLLEdBQUdqSCxLQUFLLENBQUM0QyxLQUFLLENBQUN0QixZQUFZLENBQUNTLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUUyQixJQUFJLEtBQU1BLElBQUksQ0FBQ2xDLFVBQVUsQ0FBQ3NILFFBQVEsQ0FBQyxHQUFHL0csR0FBRyxHQUFHLENBQUMsR0FBR0EsR0FBSSxFQUFFLENBQUMsQ0FBQztZQUM1RyxNQUFNcUYsSUFBSSxHQUFHckgsS0FBSyxDQUFDNEMsS0FBSyxDQUFDdEIsWUFBWSxDQUFDTyxNQUFNLEdBQUdvRixLQUFLO1lBRXBELE9BQ0MvQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2NBQVNXLFNBQVMsRUFBQztZQUFjLEdBQ2hDbEIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxhQUFLbEIsS0FBSyxDQUFDMkUsTUFBTSxDQUFNLEVBQ3ZCaEUsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDYyxPQUFBLENBQUFnQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUlMsTUFBTSxFQUFFLENBQUNqSSxLQUFLLENBQUM0QyxLQUFLLENBQUN0QixZQUFZLENBQUNPLE1BQU0sR0FBR3dGLElBQUksRUFBRUEsSUFBSSxDQUFDO2dCQUN0RFMsS0FBSyxFQUFFO2tCQUNOQyxJQUFJLEVBQUUsT0FBTztrQkFDYkMsTUFBTSxFQUFFO2lCQUNSO2dCQUNEUCxLQUFLLEVBQUU7a0JBQ05DLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQ3BCO2dCQUNEQyxNQUFNLEVBQUU7a0JBQ1BDLFFBQVEsRUFBRSxRQUFRO2tCQUNsQkMsZUFBZSxFQUFFO2lCQUNqQjtnQkFDREssVUFBVSxFQUFFO2tCQUNYQyxTQUFTLEVBQUVBLENBQUNuRSxLQUFLLEVBQUVWLElBQUksS0FBSTtvQkFDMUIsTUFBTTtzQkFDTDhFLFdBQVc7c0JBQ1hDLENBQUMsRUFBRTt3QkFDRkMsTUFBTSxFQUFFOzBCQUFFTDt3QkFBTTtzQkFBRTtvQkFDbEIsQ0FDRCxHQUFHM0UsSUFBSTtvQkFFUixPQUFPMkUsTUFBTSxDQUFDRyxXQUFXLENBQUM7a0JBQzNCO2lCQUNBO2dCQUNERyxNQUFNLEVBQUUsQ0FBQ2hFLEtBQUssQ0FBQ2lFLGFBQWEsQ0FBQ0MsT0FBTyxFQUFFbEUsS0FBSyxDQUFDaUUsYUFBYSxDQUFDdkIsS0FBSyxDQUFDO2dCQUNoRXlCLFVBQVUsRUFBRSxDQUNYO2tCQUNDQyxVQUFVLEVBQUUsR0FBRztrQkFDZm5CLE9BQU8sRUFBRTtvQkFDUkcsTUFBTSxFQUFFO3NCQUNQQyxRQUFRLEVBQUU7cUJBQ1Y7b0JBQ0RFLEtBQUssRUFBRTtzQkFDTmMsS0FBSyxFQUFFLE9BQU87c0JBQ2RaLE1BQU0sRUFBRTs7O2lCQUdWLEVBQ0Q7a0JBQ0NXLFVBQVUsRUFBRSxHQUFHO2tCQUNmbkIsT0FBTyxFQUFFO29CQUNSRyxNQUFNLEVBQUU7c0JBQ1BDLFFBQVEsRUFBRSxRQUFRO3NCQUNsQkMsZUFBZSxFQUFFO3FCQUNqQjtvQkFDREMsS0FBSyxFQUFFO3NCQUNOYyxLQUFLLEVBQUU7OztpQkFHVDs7WUFFRixFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RUEsSUFBQTFELE1BQUEsR0FBQXhGLE9BQUE7VUFTTyxNQUFNeUosZ0JBQWdCLEdBQUFySSxPQUFBLENBQUFxSSxnQkFBQSxHQUFHakUsTUFBQSxDQUFBNUMsT0FBSyxDQUFDOEcsYUFBYSxDQUFDLEVBQTJCLENBQUM7VUFDekUsTUFBTTNDLG1CQUFtQixHQUFHQSxDQUFBLEtBQU12QixNQUFBLENBQUE1QyxPQUFLLENBQUMrRyxVQUFVLENBQUNGLGdCQUFnQixDQUFDO1VBQUNySSxPQUFBLENBQUEyRixtQkFBQSxHQUFBQSxtQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWNUUsSUFBQXZCLE1BQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsR0FBQSxHQUFBekYsT0FBQTtVQUdBLElBQUEyRixNQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQXVCLE9BQUEsR0FBQXZCLE9BQUE7VUFFQSxJQUFBNEosTUFBQSxHQUFBNUosT0FBQTtVQUVBLE1BQU00RixHQUFHLEdBQUdyRSxPQUFBLENBQUFxQixPQUFNLEVBQUVDLE1BQU0sRUFBRWdELFFBQVEsSUFBSSxRQUFRO1VBQzFDLFNBQVVnRSxLQUFLQSxDQUFDO1lBQUV2SixLQUFLO1lBQUV1RTtVQUFLLENBQUU7WUFDckMsT0FDQ1csTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFBUCxNQUFBLENBQUE1QyxPQUFBLENBQUFvRCxRQUFBLFFBQ0NSLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ04sR0FBQSxDQUFBYSxhQUFhLFFBQ2JkLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQzZELE1BQUEsQ0FBQUMsS0FBYztjQUFDbkQsU0FBUyxFQUFDLDBCQUEwQjtjQUFDTixJQUFJLEVBQUVULE1BQUEsQ0FBQW1FLEtBQUssQ0FBQ0M7WUFBVSxHQUMxRXZFLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBSVcsU0FBUyxFQUFDO1lBQU8sR0FBRXBHLEtBQUssQ0FBQzRDLEtBQUssQ0FBQ3JCLE1BQU0sQ0FBQ21JLEtBQUssQ0FBTSxFQUNyRHhFLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsWUFBSWxCLEtBQUssQ0FBQ29GLEtBQUssQ0FBSyxDQUNKLENBQ0YsQ0FDZDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25CQSxJQUFBekUsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUFrSyxLQUFBLEdBQUFsSyxPQUFBO1VBQ0EsSUFBQW1LLE1BQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBOEcsUUFBQSxHQUFBOUcsT0FBQTtVQUNBLElBQUEyRixNQUFBLEdBQUEzRixPQUFBO1VBQ00sU0FBVW9LLE1BQU1BLENBQUE7WUFDckIsTUFBTTtjQUFFbEgsS0FBSztjQUFFMkIsS0FBSztjQUFFdkU7WUFBSyxDQUFFLEdBQUcsSUFBQXdHLFFBQUEsQ0FBQUMsbUJBQW1CLEdBQUU7WUFFckQsTUFBTTtjQUFFaUQsS0FBSztjQUFFSyxXQUFXO2NBQUVDO1lBQU8sQ0FBRSxHQUFHcEgsS0FBSyxDQUFDckIsTUFBTTtZQUVwRCxPQUNDMkQsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFTVyxTQUFTLEVBQUM7WUFBd0IsR0FDMUNsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2NBQVFXLFNBQVMsRUFBQztZQUFrQixHQUNuQ2xCLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBU1csU0FBUyxFQUFDO1lBQWMsR0FDaENsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNvRSxNQUFBLENBQUFJLEtBQUs7Y0FBQ0MsR0FBRyxFQUFFRixPQUFPO2NBQUVHLEdBQUcsRUFBRVQ7WUFBSyxFQUFJLEVBQ25DeEUsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxhQUFLaUUsS0FBSyxDQUFNLEVBQ2hCeEUsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFHVyxTQUFTLEVBQUM7WUFBYyxHQUFFMkQsV0FBVyxDQUFLLENBQ3BDLEVBQ1Y3RSxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFTLEdBQ3ZCbEIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDbUUsS0FBQSxDQUFBUSxJQUFJO2NBQ0poRSxTQUFTLEVBQUMsOENBQThDO2NBQ3hEaUUsSUFBSSxFQUFFLGdCQUFnQnJLLEtBQUssQ0FBQ3FFLFlBQVk7WUFBTyxHQUU5Q0UsS0FBSyxDQUFDK0YsT0FBTyxDQUFDQyxJQUFJLEVBQ25CckYsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDSixNQUFBLENBQUFtRixJQUFJO2NBQUNwRSxTQUFTLEVBQUMsSUFBSTtjQUFDTixJQUFJLEVBQUM7WUFBZSxFQUFHLENBQ3RDLENBQ0YsQ0FDRSxFQUNUWixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2NBQUtXLFNBQVMsRUFBQztZQUFTLEVBQU8sQ0FDdEI7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0EsSUFBQW5GLE9BQUEsR0FBQXZCLE9BQUE7VUFDQSxJQUFBNkcsT0FBQSxHQUFBN0csT0FBQTtVQUNBLElBQUF5RixHQUFBLEdBQUF6RixPQUFBO1VBRUEsSUFBQThHLFFBQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBNEosTUFBQSxHQUFBNUosT0FBQTtVQUNBLElBQUErSyxLQUFBLEdBQUEvSyxPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFFQSxJQUFBd0YsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUFpTCxXQUFBLEdBQUFqTCxPQUFBO1VBRUEsSUFBQWtMLE1BQUEsR0FBQWxMLE9BQUE7VUFHQSxJQUFBbUwsQ0FBQSxHQUFBbkwsT0FBQTtVQUNBLElBQUFvTCxPQUFBLEdBQUFwTCxPQUFBO1VBRUEsTUFBTXFMLE9BQU8sR0FBRzlKLE9BQUEsQ0FBQXFCLE9BQU0sRUFBRUMsTUFBTSxFQUFFZ0QsUUFBUSxJQUFJLFFBQVE7VUFDN0M7VUFBVSxTQUNSbkYsSUFBSUEsQ0FBQztZQUFFSjtVQUFLLENBQUU7WUFDdEIsTUFBTSxDQUFDd0QsS0FBSyxFQUFFd0gsUUFBUSxDQUFDLEdBQUcsSUFBQTlGLE1BQUEsQ0FBQStGLFFBQVEsRUFBQ2pMLEtBQUssQ0FBQ3dELEtBQUssQ0FBQztZQUUvQyxNQUFNLEdBQUcwSCxvQkFBb0IsQ0FBQyxHQUFHLElBQUFoRyxNQUFBLENBQUErRixRQUFRLEVBQUNqTCxLQUFLLENBQUM0QyxLQUFLLEVBQUV0QixZQUFZLEVBQUVPLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDakYsTUFBTTtjQUFFMEM7WUFBSyxDQUFFLEdBQUd2RSxLQUFLO1lBQ3ZCLE1BQU07Y0FDTDRDLEtBQUssRUFBRTtnQkFBRXJCO2NBQU07WUFBRSxDQUNqQixHQUFHdkIsS0FBSztZQUVULElBQUE0SyxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDbkwsS0FBSyxDQUFDLEVBQUUsTUFBTWdMLFFBQVEsQ0FBQ2hMLEtBQUssQ0FBQ3dELEtBQUssQ0FBQyxDQUFDO1lBQy9DLElBQUFvSCxNQUFBLENBQUFPLFNBQVMsRUFBQyxDQUFDbkwsS0FBSyxDQUFDLEVBQUUsTUFBTWtMLG9CQUFvQixDQUFDbEwsS0FBSyxDQUFDNEMsS0FBSyxFQUFFdEIsWUFBWSxFQUFFTyxNQUFNLENBQUMsRUFBRSxjQUFjLENBQUM7WUFFakcsSUFBSSxDQUFDMkIsS0FBSyxFQUFFLE9BQU8wQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNrRixXQUFBLENBQUFTLE9BQU87Y0FBQ0MsTUFBTSxFQUFFO1lBQUksRUFBSTtZQUM1QyxJQUFJLENBQUNyTCxLQUFLLENBQUM0QyxLQUFLLENBQUNXLEtBQUssRUFBRSxPQUFPMkIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDb0YsQ0FBQSxDQUFBckYsUUFBUTtjQUFDeEYsS0FBSyxFQUFFQSxLQUFLO2NBQUV1RSxLQUFLLEVBQUVBO1lBQUssRUFBSTtZQUN2RSxJQUFJdkUsS0FBSyxDQUFDNEMsS0FBSyxDQUFDbEIsaUJBQWlCLEtBQUssQ0FBQyxFQUFFLE9BQU93RCxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUM2RCxNQUFBLENBQUFDLEtBQUs7Y0FBQ3ZKLEtBQUssRUFBRUEsS0FBSztjQUFFdUUsS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFFckYsT0FDQ1csTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQSxDQUFDZSxRQUFBLENBQUEyQyxnQkFBZ0IsQ0FBQ21DLFFBQVE7Y0FBQ3RILEtBQUssRUFBRTtnQkFBRU8sS0FBSztnQkFBRTNCLEtBQUssRUFBRTVDLEtBQUssQ0FBQzRDLEtBQUs7Z0JBQUU1QztjQUFLO1lBQUUsR0FDckVrRixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNOLEdBQUEsQ0FBQWEsYUFBYTtjQUFDSSxTQUFTLEVBQUM7WUFBcUIsR0FDN0NsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNxRixPQUFBLENBQUFoQixNQUFNLE9BQUcsRUFFVjVFLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ2MsT0FBQSxDQUFBSixNQUFNO2NBQUM3QyxJQUFJLEVBQUV0RCxLQUFLLENBQUM0QyxLQUFLLENBQUN0QjtZQUFZLEVBQUksRUFDMUM0RCxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNpRixLQUFBLENBQUFhLElBQUk7Y0FBQ25GLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ3lDLEtBQUssRUFBRTdJLEtBQUssQ0FBQzRDLEtBQUssQ0FBQ3RCLFlBQVk7Y0FBRWtLLE9BQU8sRUFBRWYsS0FBQSxDQUFBZ0I7WUFBSSxFQUFJLENBQy9FLENBQ1c7VUFFOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUF2RyxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQWdNLE1BQUEsR0FBQWhNLE9BQUE7VUFDQSxJQUFBOEcsUUFBQSxHQUFBOUcsT0FBQTtVQUVNLFNBQVVpTSxjQUFjQSxDQUFDO1lBQUVySTtVQUFJLENBQUU7WUFDdEMsTUFBTTtjQUFFTixJQUFJO2NBQUUrRDtZQUFRLENBQUUsR0FBR3pELElBQUk7WUFDL0IsTUFBTTtjQUFFaUI7WUFBSyxDQUFFLEdBQUcsSUFBQWlDLFFBQUEsQ0FBQUMsbUJBQW1CLEdBQUU7WUFFdkMsTUFBTW1GLGVBQWUsR0FBR2pLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDb0IsSUFBSSxDQUFDdkIsVUFBVSxDQUFDLENBQUNvSyxRQUFRLENBQUM5RSxRQUFRLENBQUNsRSxFQUFFLENBQUM7WUFDMUUsSUFBSWtGLElBQUksR0FBRzZELGVBQWUsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUNsRCxNQUFNRSxNQUFNLEdBQUcsRUFBRTtZQUVqQixJQUFJL0UsUUFBUSxDQUFDZ0IsSUFBSSxLQUFLLFlBQVksSUFBSWhCLFFBQVEsQ0FBQ2dGLE9BQU8sS0FBSyxpQkFBaUIsSUFBSXpJLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzFGd0ksTUFBTSxDQUFDRSxJQUFJLENBQ1Y5RyxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLGVBQ0VuQyxJQUFJLENBQUNBLElBQUksQ0FBQzBELFFBQVEsQ0FBQ0csT0FBTyxFLE1BQUk3RCxJQUFJLENBQUNBLElBQUksQ0FBQzBELFFBQVEsQ0FBQ0MsS0FBSyxDQUNqRCxDQUNQOztZQUdGLElBQUlnRixLQUFLLEdBQUdMLGVBQWUsR0FBRyxNQUFNLEdBQUcsU0FBUztZQUVoRCxJQUFJN0UsUUFBUSxDQUFDZ0IsSUFBSSxLQUFLLFFBQVEsSUFBSXpFLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzVDLE1BQU0xQixJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMEIsSUFBSSxDQUFDQSxJQUFJLENBQUM7Y0FDbkMySSxLQUFLLEdBQUdySyxJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVpSCxHQUFHLEtBQUtqSCxHQUFHLEdBQUdzQixJQUFJLENBQUNBLElBQUksQ0FBQzJGLEdBQUcsQ0FBQyxDQUFDbkQsSUFBSSxFQUFFLEVBQUUsQ0FBQztjQUNoRWlDLElBQUksR0FBRyxTQUFTOztZQUdqQixJQUFJaEIsUUFBUSxDQUFDZ0IsSUFBSSxLQUFLLFlBQVksSUFBSWhCLFFBQVEsQ0FBQ2dGLE9BQU8sS0FBSyxpQkFBaUIsSUFBSXpJLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzFGLE1BQU07Z0JBQUU2RCxPQUFPO2dCQUFFRjtjQUFLLENBQUUsR0FBRzNELElBQUksQ0FBQ0EsSUFBSSxFQUFFMEQsUUFBUTtjQUM5QyxJQUFJRyxPQUFPLEdBQUdGLEtBQUssR0FBRyxDQUFDLEVBQUVjLElBQUksR0FBRyxPQUFPO2NBQ3ZDa0UsS0FBSyxHQUFHLEdBQUc5RSxPQUFPLEtBQUtGLEtBQUssRUFBRTs7WUFHL0IsSUFBSTJFLGVBQWUsSUFBSTVJLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ2xFLEVBQUUsQ0FBQyxDQUFDUyxJQUFJLEVBQUU0SSxRQUFRLEVBQUU7Y0FDbkVELEtBQUssR0FBRzFILEtBQUssQ0FBQzRILGNBQWMsR0FBR25KLElBQUksQ0FBQ3ZCLFVBQVUsQ0FBQ3NGLFFBQVEsQ0FBQ2xFLEVBQUUsQ0FBQyxDQUFDUyxJQUFJLEVBQUU0SSxRQUFRLENBQUN2RixLQUFLOztZQUdqRixPQUNDekIsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFJd0QsR0FBRyxFQUFFLEdBQUdqRyxJQUFJLENBQUNILEVBQUUsSUFBSWtFLFFBQVEsQ0FBQ2xFLEVBQUU7WUFBRSxHQUNuQ3FDLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsZUFBT3NCLFFBQVEsQ0FBQzJDLEtBQUssQ0FBUSxFQUM3QnhFLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ2lHLE1BQUEsQ0FBQVUsSUFBSTtjQUFDQyxPQUFPLEVBQUV0RSxJQUFJO2NBQUUzQixTQUFTLEVBQUUsR0FBRzJCLElBQUk7WUFBTyxHQUM1Q2tFLEtBQUssQ0FDQSxDQUNIO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUEvRyxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQThHLFFBQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBZ0wsS0FBQSxHQUFBaEwsT0FBQTtVQUNBLElBQUE0TSxTQUFBLEdBQUE1TSxPQUFBO1VBQ0EsSUFBQW1LLE1BQUEsR0FBQW5LLE9BQUE7VUFDQSxJQUFBaUwsV0FBQSxHQUFBakwsT0FBQTtVQUNBLElBQUE2TSxNQUFBLEdBQUE3TSxPQUFBO1VBRU0sU0FBVStMLElBQUlBLENBQUM7WUFBRW5JO1VBQUksQ0FBRTtZQUM1QixNQUFNO2NBQUVpQixLQUFLO2NBQUUzQixLQUFLO2NBQUU1QztZQUFLLENBQUUsR0FBRyxJQUFBd0csUUFBQSxDQUFBQyxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUVvQyxLQUFLLEVBQUVwSCxVQUFVO2NBQUVxSDtZQUFLLENBQUUsR0FBR2xHLEtBQUssQ0FBQ25CLFVBQVU7WUFDckQsTUFBTStLLFFBQVEsR0FBRztjQUFFeEosSUFBSSxFQUFFO2dCQUFFeUosSUFBSSxFQUFFLGlCQUFpQjtnQkFBRTVKLEVBQUUsRUFBRTtjQUE4QixDQUFFO2NBQUUsR0FBR1M7WUFBSSxDQUFFO1lBQ25HLE1BQU1rRixhQUFhLEdBQUc3RyxNQUFNLENBQUNDLElBQUksQ0FBQzBCLElBQUksQ0FBQzdCLFVBQVUsQ0FBQztZQUNsRCxNQUFNaUwsYUFBYSxHQUFHNUQsS0FBSyxDQUFDcEYsR0FBRyxDQUFDdUYsR0FBRyxJQUFHO2NBQ3JDLE9BQU87Z0JBQ05sQyxRQUFRLEVBQUV0RixVQUFVLENBQUN3SCxHQUFHLENBQUM7Z0JBQ3pCakcsSUFBSSxFQUFFd0osUUFBUTtnQkFDZHZELEdBQUc7Z0JBQ0gzRixJQUFJLEVBQUVBLElBQUksQ0FBQzdCLFVBQVUsQ0FBQ3dILEdBQUcsQ0FBQyxFQUFFM0Y7ZUFDNUI7WUFDRixDQUFDLENBQUM7WUFFRixNQUFNcUosVUFBVSxHQUFZbkUsYUFBYSxDQUFDM0csTUFBTSxHQUFHaUgsS0FBSyxDQUFDakgsTUFBTSxHQUFJLEdBQUc7WUFDdEUsTUFBTStLLGNBQWMsR0FBRyxnQkFBZ0I1TSxLQUFLLENBQUNxRSxZQUFZLDBCQUEwQm1JLFFBQVEsQ0FBQ3hKLElBQUksQ0FBQ0gsRUFBRSxFQUFFO1lBQ3JHLE1BQU1nSyxZQUFZLEdBQUdBLENBQUEsS0FBTUMsWUFBWSxDQUFDQyxPQUFPLENBQUMsaUJBQWlCLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxRQUFRLENBQUN4SixJQUFJLENBQUMsQ0FBQztZQUVqRyxPQUNDa0MsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFJVyxTQUFTLEVBQUM7WUFBMkIsR0FDeENsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNrRixXQUFBLENBQUFQLElBQUk7Y0FBQ0MsSUFBSSxFQUFFdUMsY0FBYztjQUFFN0csT0FBTyxFQUFFOEc7WUFBWSxHQUNoRDNILE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsaUJBQ0NQLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ29FLE1BQUEsQ0FBQUksS0FBSztjQUNMQyxHQUFHLEVBQ0ZzQyxRQUFRLENBQUN4SixJQUFJLEVBQUVrSyxRQUFRLEdBQ3BCVixRQUFRLENBQUN4SixJQUFJLENBQUNrSyxRQUFRLEdBQ3RCLHdGQUF3RjtjQUU1Ri9DLEdBQUcsRUFBRSxHQUFHcUMsUUFBUSxDQUFDeEosSUFBSSxDQUFDeUosSUFBSSxTQUFTO2NBQ25DckcsU0FBUyxFQUFDO1lBQWUsRUFDeEIsRUFDRmxCLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsYUFBSytHLFFBQVEsQ0FBQ3hKLElBQUksQ0FBQ3lKLElBQUksQ0FBTSxDQUNyQixFQUNUdkgsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFLVyxTQUFTLEVBQUM7WUFBYyxHQUM1QmxCLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBSVcsU0FBUyxFQUFDO1lBQW1CLEdBQy9CN0IsS0FBSyxDQUFDNEksU0FBUyxFQUNoQmpJLE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsZUFBTyxJQUFBOEcsTUFBQSxDQUFBYSxhQUFhLEVBQUNULFVBQVUsQ0FBQyxFLElBQVMsQ0FDckMsRUFDTHpILE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUEsQ0FBQ2lGLEtBQUEsQ0FBQWEsSUFBSTtjQUNKbkYsU0FBUyxFQUFDLG1DQUFtQztjQUM3Q3lDLEtBQUssRUFBRTZELGFBQWE7Y0FDcEJsQixPQUFPLEVBQUVjLFNBQUEsQ0FBQVg7WUFBYyxFQUN0QixDQUNHLENBQ0EsQ0FDSDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBekcsTUFBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUE4RyxRQUFBLEdBQUE5RyxPQUFBO1VBQ0EsSUFBQTJOLEtBQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBNE4sUUFBQSxHQUFBNU4sT0FBQTtVQUNBLElBQUFnTCxLQUFBLEdBQUFoTCxPQUFBO1VBRU0sU0FBVTZOLFVBQVVBLENBQUM7WUFBRWpLO1VBQUksQ0FBRTtZQUNsQyxNQUFNO2NBQUVpQjtZQUFLLENBQUUsR0FBRyxJQUFBaUMsUUFBQSxDQUFBQyxtQkFBbUIsR0FBRTtZQUN2QzVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEVBQUUsRUFBRVIsSUFBSSxDQUFDO1lBQ3JCLE1BQU1rSyxLQUFLLEdBQUc3TCxNQUFNLENBQUNDLElBQUksQ0FBQ3lMLEtBQUEsQ0FBQUksS0FBSyxDQUFDO1lBRWhDLE1BQU1qQyxPQUFPLEdBQUdBLENBQUM7Y0FBRWxJO1lBQUksQ0FBRSxLQUFJO2NBQzVCLE9BQ0M0QixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUM2SCxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLE9BQU8sRUFBRXJLO2NBQUksR0FDckI0QixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2dCQUFNVyxTQUFTLEVBQUM7Y0FBYyxHQUFFaUgsS0FBQSxDQUFBSSxLQUFLLENBQUNuSyxJQUFJLENBQUMsQ0FBUSxDQUMxQztZQUVaLENBQUM7WUFFRCxNQUFNc0ssU0FBUyxHQUFHdEssSUFBSSxDQUFDNEYsTUFBTSxJQUFJdkgsTUFBTSxDQUFDQyxJQUFJLENBQUMwQixJQUFJLENBQUM0RixNQUFNLENBQUMsRUFBRXJILE1BQU07WUFDakUsT0FDQ3FELE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBU1csU0FBUyxFQUFDO1lBQWMsR0FDaENsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLGFBQUtsQixLQUFLLENBQUMyRSxNQUFNLENBQU0sRUFDdEIwRSxTQUFTLEdBQ1QxSSxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNpRixLQUFBLENBQUFhLElBQUk7Y0FBQ25GLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ3lDLEtBQUssRUFBRTJFLEtBQUs7Y0FBRWhDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEdBRXRFdEcsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFNVyxTQUFTLEVBQUM7WUFBbUIsbUJBQ25DLENBQ1E7VUFFWiIsImlnbm9yZUxpc3QiOltdfQ==