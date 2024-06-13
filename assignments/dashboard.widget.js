System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-20/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-20/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-20/components/ui", "@aimpact/ailearn-app@0.0.46.dev-20/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.46.dev-20/shared/charts", "@aimpact/ailearn-app@0.0.46.dev-20/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.46.dev-20/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev20DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev20DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0046Dev20Config) {
      dependency_7 = _aimpactAilearnApp0046Dev20Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0046Dev20ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev20ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev20ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0046Dev20ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0046Dev20SharedCharts) {
      dependency_16 = _aimpactAilearnApp0046Dev20SharedCharts;
    }, function (_aimpactAilearnApp0046Dev20ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0046Dev20ComponentsIcons;
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
    }, function (_aimpactAilearnApp0046Dev20Utils) {
      dependency_24 = _aimpactAilearnApp0046Dev20Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-20"], ["@aimpact/ailearn-app", "0.0.46.dev-20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/components', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/chips', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-20/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-20/assignments/dashboard.widget');
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
        hash: 362977923,
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
        hash: 2807798400,
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
            data: {
              photoUrl,
              name
            }
          }) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiZXJyb3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsInN0YXR1cyIsIkVycm9yIiwidGV4dCIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsIl9tb2RlbDIiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwiYXNzaWdubWVudCIsInRleHRzIiwiQ3VycmVudFRleHRzIiwic3BlY2lmaWVyIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJzZXRNb2RlbCIsImZldGNoaW5nIiwibSIsImUiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWN0aXZpdHkiLCJpdGVtcyIsImZvckVhY2giLCJpbmRleCIsImN1cnJlbnQiLCJ0eXBlIiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJ0aXRsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIm9yZGVyIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ljb25zIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJpY29uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfbGluayIsIl91c2VyRGF0YSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIm93bmVyIiwiY3JlYXRvciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsIndhbGwiLCJJY29uIiwiX2l0ZW0iLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiXyIsIl9oZWFkZXIiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2NoaXBzIiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwiX3V0aWxzIiwidXNlckRhdGEiLCJuYW1lIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInJlZ2lzdGVyVXNlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsIkltYWdlIiwicGhvdG9VcmwiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iLCJSZWFjdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ0EsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNPO1VBQVUsTUFDWEksVUFBVyxTQUFRTCxLQUFBLENBQUFNLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlMLE1BQUEsQ0FBQU8sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIUixnQkFBQSxDQUFBUyxZQUFZLENBQUNDLGFBQWEsRUFBRTtjQUM1QixJQUFJLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFFM0M7WUFFQTs7O1lBR0FFLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDYSxLQUFLLEVBQUU7WUFDcEI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkQsSUFBQWlCLE1BQUEsR0FBQXJCLE9BQUE7VUFDQSxJQUFBc0IsSUFBQSxHQUFBdEIsT0FBQTtVQUNBLElBQUF1QixPQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQXdCLFFBQUEsR0FBQXhCLE9BQUE7VUFHTSxNQUFPeUIsU0FBVSxTQUFRSixNQUFBLENBQUFLLGFBQXdCO1lBQ3RELENBQUFDLEdBQUk7WUFJSixDQUFBQyxZQUFhLEdBQW1CLEVBQUU7WUFDbEMsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFDQSxDQUFBQyxNQUFPO1lBQ1AsSUFBSUEsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUFBLE1BQU87WUFDcEI7WUFDQSxDQUFBQyxTQUFVO1lBQ1YsSUFBSUEsU0FBU0EsQ0FBQTtjQUNaLE9BQU8sSUFBSSxDQUFDLENBQUFBLFNBQVU7WUFDdkI7WUFDQSxDQUFBQyxVQUFXO1lBQ1gsSUFBSUEsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sSUFBSSxDQUFDLENBQUFBLFVBQVc7WUFDeEI7WUFFQSxDQUFBQyxLQUFNLEdBQTBDLElBQUk7WUFDcEQsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxpQkFBaUJBLENBQUE7Y0FDcEIsT0FBT0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDUCxZQUFZLENBQUMsQ0FBQ1EsTUFBTTtZQUM3QztZQUVBLElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTyxJQUFJLENBQUNULFlBQVksQ0FBQ1UsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRUMsSUFBSSxLQUFJO2dCQUM3QyxJQUFJQSxJQUFJLENBQUNDLFNBQVMsRUFBRSxPQUFPRixHQUFHLEdBQUcsQ0FBQztnQkFDbEMsT0FBT0EsR0FBRztnQkFDVixDQUFDO2NBQ0YsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNOO1lBQ0EsSUFBSUcsV0FBV0EsQ0FBQTtjQUNkLE9BQU8sSUFBSSxDQUFDZCxZQUFZLENBQUNVLE1BQU0sQ0FBQyxDQUFDQyxHQUFHLEVBQUVDLElBQUksS0FBSTtnQkFDN0MsSUFBSUEsSUFBSSxDQUFDQyxTQUFTLEVBQUUsT0FBT0YsR0FBRyxHQUFHLENBQUM7Z0JBQ2xDLE9BQU9BLEdBQUc7Y0FDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ047WUFDQUksWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBaEIsR0FBSSxHQUFHLElBQUlMLElBQUEsQ0FBQXNCLEdBQUcsQ0FBQ3JCLE9BQUEsQ0FBQXNCLE9BQU0sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU8sQ0FBQztjQUMvQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2NBQ2xFQyxVQUFVLENBQUNDLEtBQUssR0FBRyxJQUFJO1lBQ3hCO1lBRUEsTUFBTWxDLElBQUlBLENBQUNtQyxFQUFFO2NBQ1osSUFBSSxDQUFDLENBQUF6QixHQUFJLENBQUMwQixNQUFNLENBQUM3QixRQUFBLENBQUE4QixjQUFjLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDO2NBRTNDLE1BQU1DLFFBQVEsR0FBYyxNQUFNLElBQUksQ0FBQyxDQUFBOUIsR0FBSSxDQUFDWCxHQUFHLENBQUMsZ0JBQWdCb0MsRUFBRSxZQUFZLENBQUM7Y0FDL0VNLE9BQU8sQ0FBQzFCLEtBQUssQ0FBQyxDQUFDLEVBQUV5QixRQUFRLENBQUM7Y0FDMUIsSUFBSSxDQUFDQSxRQUFRLENBQUNFLE1BQU0sRUFBRTtnQkFDckIsSUFBSSxPQUFPRixRQUFRLENBQUN6QixLQUFLLEtBQUssUUFBUSxFQUFFO2tCQUN2QyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxHQUFHeUIsUUFBUSxDQUFDekIsS0FBSzs7Z0JBRTdCLE1BQU0sSUFBSTRCLEtBQUssQ0FBQ0gsUUFBUSxDQUFDekIsS0FBSyxFQUFFNkIsSUFBSSxDQUFDOztjQUd0QyxJQUFJM0IsTUFBTSxDQUFDQyxJQUFJLENBQUNzQixRQUFRLENBQUNLLElBQUksQ0FBQyxDQUFDMUIsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDMkIsS0FBSyxHQUFHLEtBQUs7Z0JBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCOztjQUdELE1BQU07Z0JBQUVuQyxNQUFNO2dCQUFFRCxZQUFZO2dCQUFFRyxVQUFVO2dCQUFFRCxTQUFTO2dCQUFFc0IsRUFBRSxFQUFFYTtjQUFXLENBQUUsR0FBR1IsUUFBUSxDQUFDSyxJQUFJO2NBRXRGLElBQUksQ0FBQyxDQUFBbEMsWUFBYSxHQUFHTSxNQUFNLENBQUNDLElBQUksQ0FBQ1AsWUFBWSxDQUFDLENBQUNzQyxHQUFHLENBQUNDLElBQUksSUFBSXZDLFlBQVksQ0FBQ3VDLElBQUksQ0FBQyxDQUFDO2NBQzlFakIsVUFBVSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtjQUN2QixJQUFJLENBQUMsQ0FBQXRCLE1BQU8sR0FBR0EsTUFBTTtjQUNyQixJQUFJLENBQUMsQ0FBQUMsU0FBVSxHQUFHQSxTQUFTO2NBQzNCLElBQUksQ0FBQyxDQUFBQyxVQUFXLEdBQUdBLFVBQVU7Y0FDN0IsSUFBSSxDQUFDcUIsRUFBRSxHQUFHYSxXQUFXO2NBRXJCLElBQUksQ0FBQ0YsS0FBSyxHQUFHLElBQUk7Y0FDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSTtZQUNsQjs7VUFDQTVDLE9BQUEsQ0FBQUssU0FBQSxHQUFBQSxTQUFBOzs7Ozs7Ozs7OztVQ3ZGRDs7VUFFQVMsTUFBQSxDQUFBa0MsY0FBQSxDQUFBaEQsT0FBQTtZQUNBaUQsS0FBQTtVQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ0hBLElBQUFoRCxNQUFBLEdBQUFyQixPQUFBO1VBQ0EsSUFBQXNFLE9BQUEsR0FBQXRFLE9BQUE7VUFDQSxJQUFBdUUsTUFBQSxHQUFBdkUsT0FBQTtVQUNBLElBQUF3RSxlQUFBLEdBQUF4RSxPQUFBO1VBRUEsSUFBQUcsZ0JBQUEsR0FBQUgsT0FBQTtVQUNNLE1BQU9RLFlBQWEsU0FBUThELE9BQUEsQ0FBQTVDLGFBQTJCO1lBQzVELENBQUF5QixLQUFNO1lBQ04sQ0FBQXNCLE9BQVE7WUFDUixJQUFJQSxPQUFPQSxDQUFBO2NBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsT0FBUTtZQUNyQjtZQUVBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBRixPQUFRO1lBQ3JCO1lBQ0EsSUFBSXRCLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsQ0FBQXlCLEtBQU0sR0FBK0IsSUFBSUwsTUFBQSxDQUFBTSxZQUFZLENBQUNMLGVBQUEsQ0FBQTNDLE1BQU0sQ0FBQ2lELFNBQVMsQ0FBQztZQUN2RSxJQUFJRixLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFUCxLQUFLO1lBQzFCO1lBQ0EsSUFBSUwsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sS0FBSyxDQUFDQSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFZLEtBQU0sQ0FBQ1osS0FBSztZQUN4QztZQUVBckIsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQyxDQUFBaUMsS0FBTSxDQUFDRyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsWUFBWSxDQUFDO2NBQzNDN0UsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDcUUsUUFBUSxDQUFDLElBQUksQ0FBQztZQUM1QjtZQUNBLE1BQU1oRSxJQUFJQSxDQUFDbUMsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSSxDQUFDOEIsUUFBUSxHQUFHLElBQUk7Z0JBQ3BCLElBQUksQ0FBQyxDQUFBUixZQUFhLEdBQUd0QixFQUFFO2dCQUN2QixNQUFNRCxLQUFLLEdBQUcsSUFBSTlCLE1BQUEsQ0FBQUksU0FBUyxFQUFFO2dCQUM3QixJQUFJLENBQUMsQ0FBQTBCLEtBQU0sR0FBR0EsS0FBSztnQkFDbkIsTUFBTUEsS0FBSyxDQUFDbEMsSUFBSSxDQUFDbUMsRUFBRSxDQUFDO2dCQUVwQkYsVUFBVSxDQUFDaUMsQ0FBQyxHQUFHaEMsS0FBSztlQUNwQixDQUFDLE9BQU9pQyxDQUFDLEVBQUUsQyxDQUNYLFNBQVM7Z0JBQ1QsS0FBSyxDQUFDcEIsS0FBSyxHQUFHLElBQUk7Z0JBQ2xCLElBQUksQ0FBQ2tCLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBRyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3BCLElBQUk7Z0JBQ0gsSUFBSSxDQUFDSCxRQUFRLEdBQUcsSUFBSTtnQkFDcEIsTUFBTSxJQUFJLENBQUMvQixLQUFLLENBQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF5RCxZQUFhLENBQUM7Z0JBQ3pDLElBQUksQ0FBQ1ksT0FBTyxDQUFDLGNBQWMsQ0FBQztlQUM1QixDQUFDLE9BQU9GLENBQUMsRUFBRTtnQkFDWDFCLE9BQU8sQ0FBQzFCLEtBQUssQ0FBQ29ELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQ0YsUUFBUSxHQUFHLEtBQUs7O1lBRXZCLENBQUM7WUFFRC9ELEtBQUtBLENBQUE7Y0FDSmhCLGdCQUFBLENBQUFTLFlBQVksQ0FBQ08sS0FBSyxFQUFFO1lBQ3JCOztVQUNBQyxPQUFBLENBQUFaLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRUQsSUFBQStFLE1BQUEsR0FBQXZGLE9BQUE7VUFPTSxTQUFVd0YsUUFBUUEsQ0FBQztZQUFFbEYsS0FBSztZQUFFc0U7VUFBSyxDQUFFO1lBQ3hDLElBQUl0RSxLQUFLLENBQUM2QyxLQUFLLENBQUNuQixLQUFLLEVBQUV5RCxJQUFJLEtBQUssR0FBRyxFQUFFO2NBQ3BDLE9BQU9GLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEseUJBQW1COztZQUUzQixPQUNDSCxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUFILE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQThDLFFBQUEsUUFDQ0osTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxxQkFBZSxDQUNiO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFILE1BQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBNEYsU0FBQSxHQUFBNUYsT0FBQTtVQUNBLElBQUE2RixPQUFBLEdBQUE3RixPQUFBO1VBQ0E7VUFFTSxTQUFVOEYsTUFBTUEsQ0FBQztZQUFFaEM7VUFBSSxDQUFFO1lBQzlCLE9BQ0N5QixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFtQixHQUVyQ1IsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDRSxTQUFBLENBQUFJLGFBQWEsT0FBRyxFQUNqQlQsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDRyxPQUFBLENBQUFJLFdBQVcsT0FBRyxDQUNOO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDYkEsSUFBQVYsTUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFrRyxPQUFBLEdBQUFsRyxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFFQSxJQUFBb0csU0FBQSxHQUFBcEcsT0FBQTtVQUVNLFNBQVVnRyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRTFGLEtBQUs7Y0FBRXNFO1lBQUssQ0FBRSxHQUFHLElBQUF1QixRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBQzlDbkQsVUFBVSxDQUFDNUMsS0FBSyxHQUFHQSxLQUFLO1lBQ3hCLElBQUlnRyxRQUFRO1lBQ1pwRSxNQUFNLENBQUNDLElBQUksQ0FBQzdCLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3BCLFVBQVUsQ0FBQ3dFLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUNDLEtBQUssSUFBRztjQUN6RCxJQUFJSCxRQUFRLEVBQUU7Y0FDZCxNQUFNSSxPQUFPLEdBQUdwRyxLQUFLLENBQUM2QyxLQUFLLENBQUNwQixVQUFVLENBQUN3RSxLQUFLLEdBQUdFLEtBQUssQ0FBQztjQUNyRCxJQUFJQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLLGlCQUFpQixFQUFFTCxRQUFRLEdBQUdJLE9BQU87WUFDdEUsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDSixRQUFRLEVBQUUsT0FBTyxJQUFJO1lBRTFCLE1BQU1NLDhCQUE4QixHQUFJaEYsWUFBNEIsSUFBWTtjQUMvRSxPQUFPQSxZQUFZLENBQUNVLE1BQU0sQ0FBQyxDQUFDdUUsS0FBSyxFQUFFMUMsSUFBSSxLQUFJO2dCQUMxQyxNQUFNMkMsZUFBZSxHQUFHNUUsTUFBTSxDQUFDNkUsTUFBTSxDQUFDNUMsSUFBSSxDQUFDcEMsVUFBVSxDQUFDLENBQUNpRixJQUFJLENBQUNWLFFBQVEsSUFBRztrQkFDdEUsTUFBTVcsUUFBUSxHQUFHWCxRQUFRLENBQUN4QyxJQUFJLEVBQUVtRCxRQUFRO2tCQUN4QyxPQUNDQSxRQUFRLElBQ1JBLFFBQVEsQ0FBQ0MsS0FBSyxLQUFLQyxTQUFTLElBQzVCRixRQUFRLENBQUNHLE9BQU8sS0FBS0QsU0FBUyxJQUM5QkYsUUFBUSxDQUFDSSxLQUFLLEtBQUtGLFNBQVM7Z0JBRTlCLENBQUMsQ0FBQztnQkFDRixPQUFPTixLQUFLLElBQUlDLGVBQWUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2NBQ3pDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTVEsSUFBSSxHQUFHViw4QkFBOEIsQ0FBQ3RHLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQztZQUVyRSxPQUNDMkQsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1IsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxhQUFLWSxRQUFRLENBQUNpQixLQUFLLENBQU0sRUFDekJoQyxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUNRLE9BQUEsQ0FBQXNCLEtBQUs7Y0FDTEMsT0FBTyxFQUFFO2dCQUNSQyxNQUFNLEVBQUUsQ0FBQ3BILEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQ1EsTUFBTSxHQUFHa0YsSUFBSSxFQUFFQSxJQUFJLENBQUM7Z0JBQ3RESyxNQUFNLEVBQUUsQ0FBQy9DLEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ0MsT0FBTyxFQUFFakQsS0FBSyxDQUFDZ0QsYUFBYSxDQUFDVixLQUFLLENBQUM7Z0JBQ2hFLEdBQUdkLFNBQUEsQ0FBQTBCLGdCQUFnQjtnQkFDbkJDLFVBQVUsRUFBRTNCLFNBQUEsQ0FBQTRCOztZQUNaLEVBQ0EsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hETyxNQUFNRixnQkFBZ0IsR0FBQTFHLE9BQUEsQ0FBQTBHLGdCQUFBLEdBQUc7WUFDL0JHLEtBQUssRUFBRTtjQUNOQyxPQUFPLEVBQUUsVUFBVSxDQUFDO2FBQ3BCOztZQUNEQyxNQUFNLEVBQUU7Y0FDUEMsUUFBUSxFQUFFLFFBQVE7Y0FDbEJDLGVBQWUsRUFBRTthQUNqQjtZQUNEQyxLQUFLLEVBQUU7Y0FDTjNCLElBQUksRUFBRSxPQUFPO2NBQ2I0QixNQUFNLEVBQUU7YUFDUjtZQUNEQyxVQUFVLEVBQUU7Y0FDWEMsU0FBUyxFQUFFQSxDQUFDcEUsS0FBSyxFQUFFUCxJQUFJLEtBQUk7Z0JBQzFCLE1BQU07a0JBQ0w0RSxXQUFXO2tCQUNYQyxDQUFDLEVBQUU7b0JBQ0ZDLE1BQU0sRUFBRTtzQkFBRWxCO29CQUFNO2tCQUFFO2dCQUNsQixDQUNELEdBQUc1RCxJQUFJO2dCQUVSLE9BQU80RCxNQUFNLENBQUNnQixXQUFXLENBQUM7Y0FDM0I7O1dBRUQ7VUFFTSxNQUFNVixxQkFBcUIsR0FBQTVHLE9BQUEsQ0FBQTRHLHFCQUFBLEdBQUcsQ0FDcEM7WUFDQ2EsVUFBVSxFQUFFLEdBQUc7WUFDZnBCLE9BQU8sRUFBRTtjQUNSVSxNQUFNLEVBQUU7Z0JBQ1BDLFFBQVEsRUFBRTtlQUNWO2NBQ0RFLEtBQUssRUFBRTtnQkFDTlEsS0FBSyxFQUFFLE9BQU87Z0JBQ2RQLE1BQU0sRUFBRTs7O1dBR1YsRUFDRDtZQUNDTSxVQUFVLEVBQUUsR0FBRztZQUNmcEIsT0FBTyxFQUFFO2NBQ1JVLE1BQU0sRUFBRTtnQkFDUEMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCQyxlQUFlLEVBQUU7ZUFDakI7Y0FDREMsS0FBSyxFQUFFO2dCQUNOUSxLQUFLLEVBQUU7OztXQUdULENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRELElBQUF2RCxNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQWtHLE9BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUVBLElBQUFvRyxTQUFBLEdBQUFwRyxPQUFBO1VBRU0sU0FBVWlHLFdBQVdBLENBQUE7WUFDMUIsTUFBTTtjQUFFM0YsS0FBSztjQUFFc0UsS0FBSztjQUFFekI7WUFBSyxDQUFFLEdBQUcsSUFBQWdELFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFDckQsTUFBTTtjQUFFRSxLQUFLLEVBQUV4RSxVQUFVO2NBQUVnSDtZQUFLLENBQUUsR0FBRzVGLEtBQUssQ0FBQ3BCLFVBQVU7WUFFckQsTUFBTWlILFFBQVEsR0FBRzlHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSixVQUFVLENBQUMsQ0FBQ2tILElBQUksQ0FBQ0MsR0FBRyxJQUFJbkgsVUFBVSxDQUFDbUgsR0FBRyxDQUFDLENBQUN2QyxJQUFJLEtBQUssUUFBUSxDQUFDO1lBQ3ZGLElBQUksQ0FBQ3FDLFFBQVEsRUFBRSxPQUFPLElBQUk7WUFDMUIsTUFBTTlCLEtBQUssR0FBRzVHLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQ1UsTUFBTSxDQUFDLENBQUNDLEdBQUcsRUFBRTRCLElBQUksS0FBTUEsSUFBSSxDQUFDcEMsVUFBVSxDQUFDaUgsUUFBUSxDQUFDLEdBQUd6RyxHQUFHLEdBQUcsQ0FBQyxHQUFHQSxHQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzVHLE1BQU0rRSxJQUFJLEdBQUdoSCxLQUFLLENBQUM2QyxLQUFLLENBQUN2QixZQUFZLENBQUNRLE1BQU0sR0FBRzhFLEtBQUs7WUFFcEQsT0FDQzNCLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWMsR0FDaENSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsYUFBS2QsS0FBSyxDQUFDdUUsTUFBTSxDQUFNLEVBQ3ZCNUQsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDUSxPQUFBLENBQUFzQixLQUFLO2NBQ0xDLE9BQU8sRUFBRTtnQkFDUkMsTUFBTSxFQUFFLENBQUNKLElBQUksRUFBRWhILEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3ZCLFlBQVksQ0FBQ1EsTUFBTSxHQUFHa0YsSUFBSSxDQUFDO2dCQUN0REssTUFBTSxFQUFFLENBQUMvQyxLQUFLLENBQUNnRCxhQUFhLENBQUNDLE9BQU8sRUFBRWpELEtBQUssQ0FBQ2dELGFBQWEsQ0FBQ1YsS0FBSyxDQUFDO2dCQUNoRSxHQUFHZCxTQUFBLENBQUEwQixnQkFBZ0I7Z0JBQ25CQyxVQUFVLEVBQUUzQixTQUFBLENBQUE0Qjs7WUFDWixFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQXpDLE1BQUEsR0FBQXZGLE9BQUE7VUFTTyxNQUFNb0osZ0JBQWdCLEdBQUFoSSxPQUFBLENBQUFnSSxnQkFBQSxHQUFHN0QsTUFBQSxDQUFBMUMsT0FBSyxDQUFDd0csYUFBYSxDQUFDLEVBQTJCLENBQUM7VUFDekUsTUFBTWhELG1CQUFtQixHQUFHQSxDQUFBLEtBQU1kLE1BQUEsQ0FBQTFDLE9BQUssQ0FBQ3lHLFVBQVUsQ0FBQ0YsZ0JBQWdCLENBQUM7VUFBQ2hJLE9BQUEsQ0FBQWlGLG1CQUFBLEdBQUFBLG1CQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1Y1RSxJQUFBZCxNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQXVKLEdBQUEsR0FBQXZKLE9BQUE7VUFHQSxJQUFBd0osTUFBQSxHQUFBeEosT0FBQTtVQUNBLElBQUF1QixPQUFBLEdBQUF2QixPQUFBO1VBRUEsSUFBQXlKLE1BQUEsR0FBQXpKLE9BQUE7VUFFQSxNQUFNMEosR0FBRyxHQUFHbkksT0FBQSxDQUFBc0IsT0FBTSxFQUFFQyxNQUFNLEVBQUU2RyxRQUFRLElBQUksUUFBUTtVQUMxQyxTQUFVQyxLQUFLQSxDQUFDO1lBQUV0SixLQUFLO1lBQUVzRTtVQUFLLENBQUU7WUFDckMsT0FDQ1csTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFBSCxNQUFBLENBQUExQyxPQUFBLENBQUE4QyxRQUFBLFFBQ0NKLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQzZELEdBQUEsQ0FBQU0sYUFBYSxRQUNidEUsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDK0QsTUFBQSxDQUFBRyxLQUFjO2NBQUM3RCxTQUFTLEVBQUMsMEJBQTBCO2NBQUMrRCxJQUFJLEVBQUVOLE1BQUEsQ0FBQU8sS0FBSyxDQUFDQztZQUFVLEdBQzFFekUsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBTyxHQUFFekYsS0FBSyxDQUFDNkMsS0FBSyxDQUFDdEIsTUFBTSxDQUFDMEYsS0FBSyxDQUFNLEVBQ3JEaEMsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxZQUFJZCxLQUFLLENBQUNxRixLQUFLLENBQUssQ0FDSixDQUNGLENBQ2Q7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkEsSUFBQVYsR0FBQSxHQUFBdkosT0FBQTtVQUVBLElBQUF1RixNQUFBLEdBQUF2RixPQUFBO1VBQ0EsSUFBQWtLLEtBQUEsR0FBQWxLLE9BQUE7VUFDQSxJQUFBbUcsUUFBQSxHQUFBbkcsT0FBQTtVQUNBLElBQUF3SixNQUFBLEdBQUF4SixPQUFBO1VBQ0EsSUFBQW1LLFNBQUEsR0FBQW5LLE9BQUE7VUFFTSxTQUFVb0ssTUFBTUEsQ0FBQTtZQUNyQixNQUFNO2NBQUVqSCxLQUFLO2NBQUV5QixLQUFLO2NBQUV0RTtZQUFLLENBQUUsR0FBRyxJQUFBNkYsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUVrQixLQUFLO2NBQUU4QyxXQUFXO2NBQUVDLE9BQU87Y0FBRUMsS0FBSztjQUFFQztZQUFPLENBQUUsR0FBR3JILEtBQUssQ0FBQ3RCLE1BQU07WUFFcEUsT0FDQzBELE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQXdCLEdBQzFDUixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQVFLLFNBQVMsRUFBQztZQUFrQixHQUNuQ1IsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFTSyxTQUFTLEVBQUM7WUFBYyxHQUNoQ1IsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDNkQsR0FBQSxDQUFBa0IsV0FBVztjQUFDQyxNQUFNLEVBQUMsUUFBUTtjQUFDQyxHQUFHLEVBQUVMLE9BQU87Y0FBRU0sR0FBRyxFQUFFckQ7WUFBSyxFQUFJLEVBQ3pEaEMsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxhQUFLNkIsS0FBSyxDQUFNLEVBQ2hCaEMsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFHSyxTQUFTLEVBQUM7WUFBYyxHQUFFc0UsV0FBVyxDQUFLLEVBQzdDOUUsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBMEIsR0FDeENSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQTBCLEdBQ3hDUixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUN5RSxTQUFBLENBQUFVLFFBQVE7Y0FBQ0MsS0FBSyxFQUFFbEcsS0FBSyxDQUFDMkYsS0FBSztjQUFFekcsSUFBSSxFQUFFeUc7WUFBSyxFQUFJLEVBQzdDaEYsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDeUUsU0FBQSxDQUFBVSxRQUFRO2NBQUNDLEtBQUssRUFBRWxHLEtBQUssQ0FBQzRGLE9BQU87Y0FBRTFHLElBQUksRUFBRTBHO1lBQU8sRUFBSSxDQUM1QyxDQUNELENBQ0csRUFDVmpGLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQVMsR0FDdkJSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQ3dFLEtBQUEsQ0FBQWEsSUFBSTtjQUNKaEYsU0FBUyxFQUFDLDhDQUE4QztjQUN4RGlGLElBQUksRUFBRSxnQkFBZ0IxSyxLQUFLLENBQUNvRSxZQUFZO1lBQU8sR0FFOUNFLEtBQUssQ0FBQ3FHLE9BQU8sQ0FBQ0MsSUFBSSxFQUNuQjNGLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQzhELE1BQUEsQ0FBQTJCLElBQUk7Y0FBQ3BGLFNBQVMsRUFBQyxJQUFJO2NBQUMrRCxJQUFJLEVBQUM7WUFBZSxFQUFHLENBQ3RDLENBQ0YsQ0FDRSxFQUNUdkUsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFLSyxTQUFTLEVBQUM7WUFBUyxFQUFPLENBQ3RCO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUF4RSxPQUFBLEdBQUF2QixPQUFBO1VBQ0EsSUFBQWtHLE9BQUEsR0FBQWxHLE9BQUE7VUFDQSxJQUFBdUosR0FBQSxHQUFBdkosT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQXlKLE1BQUEsR0FBQXpKLE9BQUE7VUFDQSxJQUFBb0wsS0FBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUFxTCxLQUFBLEdBQUFyTCxPQUFBO1VBQ0EsSUFBQXVGLE1BQUEsR0FBQXZGLE9BQUE7VUFDQSxJQUFBc0wsV0FBQSxHQUFBdEwsT0FBQTtVQUNBLElBQUF1TCxNQUFBLEdBQUF2TCxPQUFBO1VBQ0EsSUFBQXdMLENBQUEsR0FBQXhMLE9BQUE7VUFDQSxJQUFBeUwsT0FBQSxHQUFBekwsT0FBQTtVQUVBLE1BQU0wTCxPQUFPLEdBQUduSyxPQUFBLENBQUFzQixPQUFNLEVBQUVDLE1BQU0sRUFBRTZHLFFBQVEsSUFBSSxRQUFRO1VBQzdDO1VBQVUsU0FDUmpKLElBQUlBLENBQUM7WUFBRUo7VUFBSyxDQUFFO1lBQ3RCLE1BQU0sQ0FBQzBELEtBQUssRUFBRTJILFFBQVEsQ0FBQyxHQUFHLElBQUFwRyxNQUFBLENBQUFxRyxRQUFRLEVBQUN0TCxLQUFLLENBQUMwRCxLQUFLLENBQUM7WUFFL0MsTUFBTSxHQUFHNkgsb0JBQW9CLENBQUMsR0FBRyxJQUFBdEcsTUFBQSxDQUFBcUcsUUFBUSxFQUFDdEwsS0FBSyxDQUFDNkMsS0FBSyxFQUFFdkIsWUFBWSxFQUFFUSxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ2pGLE1BQU07Y0FBRXdDO1lBQUssQ0FBRSxHQUFHdEUsS0FBSztZQUN2QixNQUFNO2NBQ0w2QyxLQUFLLEVBQUU7Z0JBQUV0QjtjQUFNO1lBQUUsQ0FDakIsR0FBR3ZCLEtBQUs7WUFFVCxJQUFBaUwsTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ3hMLEtBQUssQ0FBQyxFQUFFLE1BQU1xTCxRQUFRLENBQUNyTCxLQUFLLENBQUMwRCxLQUFLLENBQUMsQ0FBQztZQUMvQyxJQUFBdUgsTUFBQSxDQUFBTyxTQUFTLEVBQUMsQ0FBQ3hMLEtBQUssQ0FBQyxFQUFFLE1BQU11TCxvQkFBb0IsQ0FBQ3ZMLEtBQUssQ0FBQzZDLEtBQUssRUFBRXZCLFlBQVksRUFBRVEsTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDO1lBRWpHLElBQUksQ0FBQzRCLEtBQUssRUFBRSxPQUFPdUIsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDNEYsV0FBQSxDQUFBUyxPQUFPO2NBQUNDLE1BQU0sRUFBRTtZQUFJLEVBQUk7WUFDNUMsSUFBSSxDQUFDMUwsS0FBSyxDQUFDNkMsS0FBSyxDQUFDWSxLQUFLLEVBQUUsT0FBT3dCLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQzhGLENBQUEsQ0FBQWhHLFFBQVE7Y0FBQ2xGLEtBQUssRUFBRUEsS0FBSztjQUFFc0UsS0FBSyxFQUFFQTtZQUFLLEVBQUk7WUFDdkUsSUFBSXRFLEtBQUssQ0FBQzZDLEtBQUssQ0FBQ2xCLGlCQUFpQixLQUFLLENBQUMsRUFBRSxPQUFPc0QsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDK0QsTUFBQSxDQUFBRyxLQUFLO2NBQUN0SixLQUFLLEVBQUVBLEtBQUs7Y0FBRXNFLEtBQUssRUFBRUE7WUFBSyxFQUFJO1lBRXJGLE9BQ0NXLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQ1MsUUFBQSxDQUFBaUQsZ0JBQWdCLENBQUM2QyxRQUFRO2NBQUM1SCxLQUFLLEVBQUU7Z0JBQUVPLEtBQUs7Z0JBQUV6QixLQUFLLEVBQUU3QyxLQUFLLENBQUM2QyxLQUFLO2dCQUFFN0M7Y0FBSztZQUFFLEdBQ3JFaUYsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDNkQsR0FBQSxDQUFBTSxhQUFhO2NBQUM5RCxTQUFTLEVBQUM7WUFBcUIsR0FDN0NSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQytGLE9BQUEsQ0FBQXJCLE1BQU0sT0FBRyxFQUVWN0UsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDUSxPQUFBLENBQUFKLE1BQU07Y0FBQ2hDLElBQUksRUFBRXhELEtBQUssQ0FBQzZDLEtBQUssQ0FBQ3ZCO1lBQVksRUFBSSxFQUMxQzJELE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQWlCLEdBQy9CUixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUMyRixLQUFBLENBQUFhLElBQUk7Y0FBQ25HLFNBQVMsRUFBQywyQkFBMkI7Y0FBQ1EsS0FBSyxFQUFFakcsS0FBSyxDQUFDNkMsS0FBSyxDQUFDdkIsWUFBWTtjQUFFdUssT0FBTyxFQUFFZixLQUFBLENBQUFnQjtZQUFJLEVBQUksQ0FDekYsQ0FDUyxDQUNXO1VBRTlCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBN0csTUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFxTSxNQUFBLEdBQUFyTSxPQUFBO1VBQ0EsSUFBQW1HLFFBQUEsR0FBQW5HLE9BQUE7VUFFTSxTQUFVc00sY0FBY0EsQ0FBQztZQUFFeEk7VUFBSSxDQUFFO1lBQ3RDLE1BQU07Y0FBRVAsSUFBSTtjQUFFK0M7WUFBUSxDQUFFLEdBQUd4QyxJQUFJO1lBQy9CLE1BQU07Y0FBRWM7WUFBSyxDQUFFLEdBQUcsSUFBQXVCLFFBQUEsQ0FBQUUsbUJBQW1CLEdBQUU7WUFFdkMsTUFBTWtHLGVBQWUsR0FBR3JLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDb0IsSUFBSSxDQUFDeEIsVUFBVSxDQUFDLENBQUN5SyxRQUFRLENBQUNsRyxRQUFRLENBQUNsRCxFQUFFLENBQUM7WUFDMUUsSUFBSXVELElBQUksR0FBRzRGLGVBQWUsR0FBRyxTQUFTLEdBQUcsU0FBUztZQUNsRCxNQUFNRSxNQUFNLEdBQUcsRUFBRTtZQUVqQixJQUFJbkcsUUFBUSxDQUFDSyxJQUFJLEtBQUssWUFBWSxJQUFJTCxRQUFRLENBQUNvRyxPQUFPLEtBQUssaUJBQWlCLElBQUk1SSxJQUFJLENBQUNBLElBQUksRUFBRTtjQUMxRjJJLE1BQU0sQ0FBQ0UsSUFBSSxDQUNWcEgsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxlQUNFNUIsSUFBSSxDQUFDQSxJQUFJLENBQUNtRCxRQUFRLENBQUNHLE9BQU8sRSxNQUFJdEQsSUFBSSxDQUFDQSxJQUFJLENBQUNtRCxRQUFRLENBQUNDLEtBQUssQ0FDakQsQ0FDUDs7WUFHRixJQUFJNEQsS0FBSyxHQUFHeUIsZUFBZSxHQUFHLE1BQU0sR0FBRyxTQUFTO1lBRWhELElBQUlqRyxRQUFRLENBQUNLLElBQUksS0FBSyxRQUFRLElBQUk3QyxJQUFJLENBQUNBLElBQUksRUFBRTtjQUM1QyxNQUFNM0IsSUFBSSxHQUFHRCxNQUFNLENBQUNDLElBQUksQ0FBQzJCLElBQUksQ0FBQ0EsSUFBSSxDQUFDO2NBQ25DZ0gsS0FBSyxHQUFHM0ksSUFBSSxDQUFDRyxNQUFNLENBQUMsQ0FBQ0MsR0FBRyxFQUFFMkcsR0FBRyxLQUFLM0csR0FBRyxHQUFHdUIsSUFBSSxDQUFDQSxJQUFJLENBQUNvRixHQUFHLENBQUMsQ0FBQ1ksSUFBSSxFQUFFLEVBQUUsQ0FBQztjQUNoRW5ELElBQUksR0FBRyxTQUFTOztZQUdqQixJQUFJTCxRQUFRLENBQUNLLElBQUksS0FBSyxZQUFZLElBQUlMLFFBQVEsQ0FBQ29HLE9BQU8sS0FBSyxpQkFBaUIsSUFBSTVJLElBQUksQ0FBQ0EsSUFBSSxFQUFFO2NBQzFGLE1BQU07Z0JBQUVzRCxPQUFPO2dCQUFFRjtjQUFLLENBQUUsR0FBR3BELElBQUksQ0FBQ0EsSUFBSSxFQUFFbUQsUUFBUTtjQUM5QyxJQUFJRyxPQUFPLEdBQUdGLEtBQUssR0FBRyxDQUFDLEVBQUVQLElBQUksR0FBRyxPQUFPO2NBQ3ZDbUUsS0FBSyxHQUFHLEdBQUcxRCxPQUFPLEtBQUtGLEtBQUssRUFBRTs7WUFHL0IsSUFBSXFGLGVBQWUsSUFBSWhKLElBQUksQ0FBQ3hCLFVBQVUsQ0FBQ3VFLFFBQVEsQ0FBQ2xELEVBQUUsQ0FBQyxDQUFDVSxJQUFJLEVBQUU4SSxRQUFRLEVBQUU7Y0FDbkU5QixLQUFLLEdBQUdsRyxLQUFLLENBQUNpSSxjQUFjLEdBQUd0SixJQUFJLENBQUN4QixVQUFVLENBQUN1RSxRQUFRLENBQUNsRCxFQUFFLENBQUMsQ0FBQ1UsSUFBSSxFQUFFOEksUUFBUSxDQUFDL0YsS0FBSzs7WUFHakYsT0FDQ3RCLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBSXdELEdBQUcsRUFBRSxHQUFHM0YsSUFBSSxDQUFDSCxFQUFFLElBQUlrRCxRQUFRLENBQUNsRCxFQUFFO1lBQUUsR0FDbkNtQyxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLGVBQU9ZLFFBQVEsQ0FBQ2lCLEtBQUssQ0FBUSxFQUM3QmhDLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQzJHLE1BQUEsQ0FBQVMsSUFBSTtjQUFDQyxPQUFPLEVBQUVwRyxJQUFJO2NBQUVaLFNBQVMsRUFBRSxHQUFHWSxJQUFJO1lBQU8sR0FDNUNtRSxLQUFLLENBQ0EsQ0FDSDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBdkYsTUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQXFMLEtBQUEsR0FBQXJMLE9BQUE7VUFDQSxJQUFBZ04sU0FBQSxHQUFBaE4sT0FBQTtVQUNBLElBQUFpTixNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQXNMLFdBQUEsR0FBQXRMLE9BQUE7VUFDQSxJQUFBa04sTUFBQSxHQUFBbE4sT0FBQTtVQUVNLFNBQVVvTSxJQUFJQSxDQUFDO1lBQUV0STtVQUFJLENBQUU7WUFDNUIsTUFBTTtjQUFFYyxLQUFLO2NBQUV6QixLQUFLO2NBQUU3QztZQUFLLENBQUUsR0FBRyxJQUFBNkYsUUFBQSxDQUFBRSxtQkFBbUIsR0FBRTtZQUNyRCxNQUFNO2NBQUVFLEtBQUssRUFBRXhFLFVBQVU7Y0FBRWdIO1lBQUssQ0FBRSxHQUFHNUYsS0FBSyxDQUFDcEIsVUFBVTtZQUNyRCxNQUFNb0wsUUFBUSxHQUFHO2NBQUU1SixJQUFJLEVBQUU7Z0JBQUU2SixJQUFJLEVBQUUsaUJBQWlCO2dCQUFFaEssRUFBRSxFQUFFO2NBQThCLENBQUU7Y0FBRSxHQUFHVTtZQUFJLENBQUU7WUFDbkcsTUFBTThELGFBQWEsR0FBRzFGLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMkIsSUFBSSxDQUFDL0IsVUFBVSxDQUFDO1lBQ2xELE1BQU1zTCxhQUFhLEdBQUd0RSxLQUFLLENBQUM3RSxHQUFHLENBQUNnRixHQUFHLElBQUc7Y0FDckMsT0FBTztnQkFDTjVDLFFBQVEsRUFBRXZFLFVBQVUsQ0FBQ21ILEdBQUcsQ0FBQztnQkFDekIzRixJQUFJLEVBQUU0SixRQUFRO2dCQUNkakUsR0FBRztnQkFDSHBGLElBQUksRUFBRUEsSUFBSSxDQUFDL0IsVUFBVSxDQUFDbUgsR0FBRyxDQUFDLEVBQUVwRjtlQUM1QjtZQUNGLENBQUMsQ0FBQztZQUVGLE1BQU13SixVQUFVLEdBQVkxRixhQUFhLENBQUN4RixNQUFNLEdBQUcyRyxLQUFLLENBQUMzRyxNQUFNLEdBQUksR0FBRztZQUN0RSxNQUFNbUwsY0FBYyxHQUFHLGdCQUFnQmpOLEtBQUssQ0FBQ29FLFlBQVksMEJBQTBCeUksUUFBUSxDQUFDNUosSUFBSSxDQUFDSCxFQUFFLEVBQUU7WUFDckcsTUFBTW9LLFlBQVksR0FBR0EsQ0FBQSxLQUFNQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNULFFBQVEsQ0FBQzVKLElBQUksQ0FBQyxDQUFDO1lBRWpHLE9BQ0NnQyxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQUlLLFNBQVMsRUFBQztZQUEyQixHQUN4Q1IsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDNEYsV0FBQSxDQUFBUCxJQUFJO2NBQUNDLElBQUksRUFBRXVDLGNBQWM7Y0FBRU0sT0FBTyxFQUFFTDtZQUFZLEdBQ2hEakksTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDdUgsTUFBQSxDQUFBYSxLQUFLO2NBQ0xuRCxHQUFHLEVBQ0Z3QyxRQUFRLENBQUM1SixJQUFJLEVBQUV3SyxRQUFRLEdBQ3BCWixRQUFRLENBQUM1SixJQUFJLENBQUN3SyxRQUFRLEdBQ3RCLHdGQUF3RjtjQUU1Rm5ELEdBQUcsRUFBRSxHQUFHdUMsUUFBUSxDQUFDNUosSUFBSSxDQUFDNkosSUFBSSxTQUFTO2NBQ25DckgsU0FBUyxFQUFDO1lBQWUsRUFDeEIsRUFDRlIsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxhQUFLeUgsUUFBUSxDQUFDNUosSUFBSSxDQUFDNkosSUFBSSxDQUFNLENBQ3JCLEVBQ1Q3SCxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFjLEdBQzVCUixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQUlLLFNBQVMsRUFBQztZQUFtQixHQUMvQm5CLEtBQUssQ0FBQ29KLFNBQVMsRUFDaEJ6SSxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLGVBQU8sSUFBQXdILE1BQUEsQ0FBQWUsYUFBYSxFQUFDWCxVQUFVLENBQUMsRSxJQUFTLENBQ3JDLEVBQ0wvSCxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUMyRixLQUFBLENBQUFhLElBQUk7Y0FDSm5HLFNBQVMsRUFBQyxtQ0FBbUM7Y0FDN0NRLEtBQUssRUFBRThHLGFBQWE7Y0FDcEJsQixPQUFPLEVBQUVhLFNBQUEsQ0FBQVY7WUFBYyxFQUN0QixDQUNHLENBQ0EsQ0FDSDtVQUVQOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZEQSxJQUFBL0csTUFBQSxHQUFBdkYsT0FBQTtVQUNBLElBQUFtRyxRQUFBLEdBQUFuRyxPQUFBO1VBQ0EsSUFBQWtPLEtBQUEsR0FBQWxPLE9BQUE7VUFDQSxJQUFBbU8sUUFBQSxHQUFBbk8sT0FBQTtVQUNBLElBQUFxTCxLQUFBLEdBQUFyTCxPQUFBO1VBRU0sU0FBVW9PLFVBQVVBLENBQUM7WUFBRXRLO1VBQUksQ0FBRTtZQUNsQyxNQUFNO2NBQUVjO1lBQUssQ0FBRSxHQUFHLElBQUF1QixRQUFBLENBQUFFLG1CQUFtQixHQUFFO1lBRXZDLE1BQU1nSSxLQUFLLEdBQUduTSxNQUFNLENBQUNDLElBQUksQ0FBQytMLEtBQUEsQ0FBQUksS0FBSyxDQUFDO1lBRWhDLE1BQU1uQyxPQUFPLEdBQUdBLENBQUM7Y0FBRXJJO1lBQUksQ0FBRSxLQUFJO2NBQzVCLE9BQ0N5QixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLENBQUN5SSxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLE9BQU8sRUFBRTFLO2NBQUksR0FDckJ5QixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2dCQUFNSyxTQUFTLEVBQUM7Y0FBYyxHQUFFbUksS0FBQSxDQUFBSSxLQUFLLENBQUN4SyxJQUFJLENBQUMsQ0FBUSxDQUMxQztZQUVaLENBQUM7WUFFRCxNQUFNMkssU0FBUyxHQUFHM0ssSUFBSSxDQUFDcUYsTUFBTSxJQUFJakgsTUFBTSxDQUFDQyxJQUFJLENBQUMyQixJQUFJLENBQUNxRixNQUFNLENBQUMsRUFBRS9HLE1BQU07WUFDakUsT0FDQ21ELE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWMsR0FDaENSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsYUFBS2QsS0FBSyxDQUFDdUUsTUFBTSxDQUFNLEVBQ3RCc0YsU0FBUyxHQUNUbEosTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDMkYsS0FBQSxDQUFBYSxJQUFJO2NBQUNuRyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNRLEtBQUssRUFBRThILEtBQUs7Y0FBRWxDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEdBRXRFNUcsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBbUIsbUJBQ25DLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQTJJLEtBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBaU4sTUFBQSxHQUFBak4sT0FBQTtVQUVNLFNBQVU2SyxRQUFRQSxDQUFDO1lBQUVDLEtBQUs7WUFBRWhILElBQUksRUFBRTtjQUFFaUssUUFBUTtjQUFFWDtZQUFJO1VBQUUsQ0FBbUI7WUFDNUUsT0FDQ3NCLEtBQUEsQ0FBQWhKLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQW9CLEdBQ2xDMkksS0FBQSxDQUFBaEosYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBa0IsR0FBRStFLEtBQUssQ0FBTSxFQUM3QzRELEtBQUEsQ0FBQWhKLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQW1CLEdBQ3JDMkksS0FBQSxDQUFBaEosYUFBQSxDQUFDdUgsTUFBQSxDQUFBYSxLQUFLO2NBQUMvSCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUM0RSxHQUFHLEVBQUVvRDtZQUFRLEVBQUksRUFDbkRXLEtBQUEsQ0FBQWhKLGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQWlCLEdBQUVxSCxJQUFJLENBQVEsQ0FDdEMsQ0FDTDtVQUVSIn0=