System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-07/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.46.dev-07/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.46.dev-07/components/ui", "@aimpact/ailearn-app@0.0.46.dev-07/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.46.dev-07/shared/charts", "@aimpact/ailearn-app@0.0.46.dev-07/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "pragmate-ui@0.1.1/image", "@aimpact/ailearn-app@0.0.46.dev-07/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0046Dev07DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev07DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0046Dev07Config) {
      dependency_7 = _aimpactAilearnApp0046Dev07Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0046Dev07ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev07ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev07ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0046Dev07ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0046Dev07SharedCharts) {
      dependency_16 = _aimpactAilearnApp0046Dev07SharedCharts;
    }, function (_aimpactAilearnApp0046Dev07ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0046Dev07ComponentsIcons;
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
    }, function (_aimpactAilearnApp0046Dev07Utils) {
      dependency_24 = _aimpactAilearnApp0046Dev07Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-07"], ["@aimpact/ailearn-app", "0.0.46.dev-07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-07/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/list', dependency_19], ['pragmate-ui/components', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/chips', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-07/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-07/assignments/dashboard.widget');
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