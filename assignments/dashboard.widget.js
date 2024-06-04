System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-04/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-04/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "@aimpact/ailearn-app@0.0.46.dev-04/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.46.dev-04/shared/charts", "@aimpact/ailearn-app@0.0.46.dev-04/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.46.dev-04/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev04DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev04DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0046Dev04Config) {
      dependency_7 = _aimpactAilearnApp0046Dev04Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev04ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0046Dev04SharedCharts) {
      dependency_16 = _aimpactAilearnApp0046Dev04SharedCharts;
    }, function (_aimpactAilearnApp0046Dev04ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0046Dev04ComponentsIcons;
    }, function (_pragmateUi011Link) {
      dependency_18 = _pragmateUi011Link;
    }, function (_pragmateUi011List) {
      dependency_19 = _pragmateUi011List;
    }, function (_pragmateUi011Components) {
      dependency_20 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Chips) {
      dependency_22 = _pragmateUi011Chips;
    }, function (_pragmateUi011Image) {
      dependency_23 = _pragmateUi011Image;
    }, function (_aimpactAilearnApp0046Dev04Utils) {
      dependency_24 = _aimpactAilearnApp0046Dev04Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/components', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/chips', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/assignments/dashboard.widget');
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
        hash: 3531455430,
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
            #error = null;
            get error() {
              return this.#error;
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
              this.#api.bearer(_session.sessionWrapper.user.token);
              const response = await this.#api.get(`/assignments/${id}/dashboard`);
              console.error(2, response);
              if (!response.status) {
                if (typeof response.error === 'object') {
                  this.#error = response.error;
                }
                throw new Error(response.error?.text);
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
        hash: 2739484460,
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
              } catch (e) {} finally {
                super.ready = true;
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
        hash: 2979683662,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.NotFound = NotFound;
          var _react = require("react");
          function NotFound({
            store,
            texts
          }) {
            console.log(9, store.model.error?.code, store.model.error?.code === 403);
            if (store.model.error?.code === 403) {
              return _react.default.createElement("app-not-allowed", null);
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("app-missing", null));
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
        hash: 1772859168,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChart = MultipleChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          var _settings = require("./settings");
          function MultipleChart() {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            globalThis.store = store;
            let activity;
            Object.keys(store.model.activities.items).forEach(index => {
              if (activity) return;
              const current = store.model.activities.items?.[index];
              if (current && current.type === 'multiple-choice') activity = current;
            });
            if (!activity) return null;
            console.log(9, activity);
            const countObjectsWithoutUseMultiple = participants => {
              return participants.reduce((count, item) => {
                console.log(10, item.activities);
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
            }, _react.default.createElement("h3", null, activity.title), _react.default.createElement(_charts.Chart, {
              options: {
                series: [store.model.participants.length - diff, diff],
                labels: [texts.participation.pending, texts.participation.total],
                ..._settings.CHART_BASE_SPECS,
                responsive: _settings.RESPONSIVE_BASE_SPECS
              }
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/charts/settings
      ***************************************/

      ims.set('./views/charts/settings', {
        hash: 1370120933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RESPONSIVE_BASE_SPECS = exports.CHART_BASE_SPECS = void 0;
          const CHART_BASE_SPECS = exports.CHART_BASE_SPECS = {
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
            }
          };
          const RESPONSIVE_BASE_SPECS = exports.RESPONSIVE_BASE_SPECS = [{
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
          }];
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/charts/spoken
      *************************************/

      ims.set('./views/charts/spoken', {
        hash: 2354747298,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenChart = SpokenChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          var _settings = require("./settings");
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
            if (!spokenId) return null;
            const total = store.model.participants.reduce((acc, item) => item.activities[spokenId] ? acc + 1 : acc, 0);
            const diff = store.model.participants.length - total;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
              options: {
                series: [diff, store.model.participants.length - diff],
                labels: [texts.participation.pending, texts.participation.total],
                ..._settings.CHART_BASE_SPECS,
                responsive: _settings.RESPONSIVE_BASE_SPECS
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
        hash: 594141356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _link = require("pragmate-ui/link");
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
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
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
        hash: 893801648,
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
            }), _react.default.createElement("div", {
              className: "dashboard__list"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.model.participants,
              control: _item.Item
            }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiZXJyb3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsInN0YXR1cyIsIkVycm9yIiwidGV4dCIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIk5vdEZvdW5kIiwibG9nIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWN0aXZpdHkiLCJpdGVtcyIsImZvckVhY2giLCJpbmRleCIsImN1cnJlbnQiLCJ0eXBlIiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJ0aXRsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIm9yZGVyIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ljb25zIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJpY29uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfbGluayIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJfaXRlbSIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfIiwiX2hlYWRlciIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJsYWJlbCIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl9pbWFnZSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2xpY2siLCJJbWFnZSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc2V0dGluZ3MudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUks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