System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.50/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.50/config", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.50/components/ui", "@aimpact/ailearn-app@0.0.50/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.50/shared/charts", "@aimpact/ailearn-app@0.0.50/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.50/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0050DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0050DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0050Config) {
      dependency_7 = _aimpactAilearnApp0050Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0050ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0050ComponentsUi;
    }, function (_aimpactAilearnApp0050ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0050ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0050SharedCharts) {
      dependency_16 = _aimpactAilearnApp0050SharedCharts;
    }, function (_aimpactAilearnApp0050ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0050ComponentsIcons;
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
    }, function (_aimpactAilearnApp0050Utils) {
      dependency_24 = _aimpactAilearnApp0050Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.50"], ["@aimpact/ailearn-app", "0.0.50"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.50/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/components', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/chips', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.50/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.50/assignments/dashboard.widget');
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
        hash: 220749295,
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
        hash: 2985101767,
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
        hash: 2398831463,
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
        hash: 3126676244,
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
        hash: 1512892376,
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
          var _userData = require("./user-data");
          function Header() {
            const {
              model,
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture,
              owner,
              creator
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
            }, description), _react.default.createElement("div", {
              className: "module__managers-section"
            }, _react.default.createElement("div", {
              className: "module__managers-section"
            }, _react.default.createElement(_userData.UserData, {
              label: texts.owner,
              data: owner
            }), _react.default.createElement(_userData.UserData, {
              label: texts.creator,
              data: creator
            })))), _react.default.createElement("div", {
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

      /*********************************
      INTERNAL MODULE: ./views/user-data
      *********************************/

      ims.set('./views/user-data', {
        hash: 490211880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.UserData = UserData;
          var React = require("react");
          var _image = require("pragmate-ui/image");
          function UserData({
            label,
            data
          }) {
            if (!data) return null;
            const {
              photoUrl,
              name
            } = data;
            return React.createElement("div", {
              className: "user-data__section"
            }, React.createElement("h6", {
              className: "user-data__label"
            }, label), React.createElement("section", {
              className: "user-data__detail"
            }, React.createElement(_image.Image, {
              className: "user-data__img",
              src: photoUrl
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiZXJyb3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJ0ZXh0IiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiY29uc29sZSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWN0aXZpdHkiLCJpdGVtcyIsImZvckVhY2giLCJpbmRleCIsImN1cnJlbnQiLCJ0eXBlIiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJ0aXRsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIm9yZGVyIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ljb25zIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJpY29uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfbGluayIsIl91c2VyRGF0YSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIm93bmVyIiwiY3JlYXRvciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsIndhbGwiLCJJY29uIiwiX2l0ZW0iLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiXyIsIl9oZWFkZXIiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2NoaXBzIiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwiX3V0aWxzIiwidXNlckRhdGEiLCJuYW1lIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInJlZ2lzdGVyVXNlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsIkltYWdlIiwicGhvdG9VcmwiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iLCJSZWFjdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIUixnQkFBQSxDQUFBUyxZQUFZLENBQUNDLGFBQWEsRUFBRTtjQUM1QixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJ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