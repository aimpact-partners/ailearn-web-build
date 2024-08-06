System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.3/dashboard-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.3/components/ui", "@aimpact/ailearn-app@0.1.3/components/navbar-header.code", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.3/config", "pragmate-ui@1.0.0-beta.1/empty", "@aimpact/ailearn-app@0.1.3/shared/charts", "@aimpact/ailearn-app@0.1.3/components/icons", "pragmate-ui@1.0.0-beta.1/link", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.1/chips", "pragmate-ui@1.0.0-beta.1/image", "@aimpact/ailearn-app@0.1.3/utils", "pragmate-ui@1.0.0-beta.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp013DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp013DashboardLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_7 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp013ComponentsUi) {
      dependency_12 = _aimpactAilearnApp013ComponentsUi;
    }, function (_aimpactAilearnApp013ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp013ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_14 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp013Config) {
      dependency_15 = _aimpactAilearnApp013Config;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_16 = _pragmateUi100Beta1Empty;
    }, function (_aimpactAilearnApp013SharedCharts) {
      dependency_17 = _aimpactAilearnApp013SharedCharts;
    }, function (_aimpactAilearnApp013ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp013ComponentsIcons;
    }, function (_pragmateUi100Beta1Link) {
      dependency_19 = _pragmateUi100Beta1Link;
    }, function (_pragmateUi100Beta1List) {
      dependency_20 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Components) {
      dependency_21 = _pragmateUi100Beta1Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_22 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_23 = _pragmateUi100Beta1Chips;
    }, function (_pragmateUi100Beta1Image) {
      dependency_24 = _pragmateUi100Beta1Image;
    }, function (_aimpactAilearnApp013Utils) {
      dependency_25 = _aimpactAilearnApp013Utils;
    }, function (_pragmateUi100Beta1Tooltip) {
      dependency_26 = _pragmateUi100Beta1Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3"], ["@aimpact/ailearn-app", "0.1.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/shared/charts', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/link', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/components', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/chips', dependency_23], ['pragmate-ui/image', dependency_24], ['@aimpact/ailearn-app/utils', dependency_25], ['pragmate-ui/tooltip', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.1.3/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3/assignments/dashboard.widget');
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
        hash: 1076452296,
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
        hash: 876901058,
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
        hash: 3869208283,
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
            }, owner && _react.default.createElement(_userData.UserData, {
              label: texts.owner,
              data: owner
            }), creator && _react.default.createElement(_userData.UserData, {
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
        hash: 49731699,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiZXJyb3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJ0ZXh0IiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiY29uc29sZSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWN0aXZpdHkiLCJpdGVtcyIsImZvckVhY2giLCJpbmRleCIsImN1cnJlbnQiLCJ0eXBlIiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJ0aXRsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIm9yZGVyIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ljb25zIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJpY29uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfbGluayIsIl91c2VyRGF0YSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIm93bmVyIiwiY3JlYXRvciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsIndhbGwiLCJJY29uIiwiX2l0ZW0iLCJfbGlzdCIsIl9jb21wb25lbnRzIiwiX2hvb2tzIiwiXyIsIl9oZWFkZXIiLCJBUFBOQU1FIiwic2V0UmVhZHkiLCJ1c2VTdGF0ZSIsInNldFRvdGFsUGFydGljaXBhbnRzIiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIlByb3ZpZGVyIiwiTGlzdCIsImNvbnRyb2wiLCJJdGVtIiwiX2NoaXBzIiwiTW9kdWxlQWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX2ltYWdlIiwiX3V0aWxzIiwidXNlckRhdGEiLCJuYW1lIiwiYWN0aXZpdHlJdGVtcyIsInBlcmNlbnRpbGUiLCJwYXJ0aWNpcGFudFVyaSIsInJlZ2lzdGVyVXNlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5Iiwib25DbGljayIsIkltYWdlIiwicGhvdG9VcmwiLCJwZXJjZW50aWwiLCJsaW1pdERlY2ltYWxzIiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iLCJSZWFjdCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3NldHRpbmdzLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvdXNlci1kYXRhLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENBQUFTLFlBQVksQ0FBQ0MsYUFBYSxFQUFFO2NBQzVCLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUND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LENBQUN5SSxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLE9BQU8sRUFBRTNLO2NBQUksR0FDckIwQixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2dCQUFNSyxTQUFTLEVBQUM7Y0FBYyxHQUFFbUksS0FBQSxDQUFBSSxLQUFLLENBQUN6SyxJQUFJLENBQUMsQ0FBUSxDQUMxQztZQUVaLENBQUM7WUFFRCxNQUFNNEssU0FBUyxHQUFHNUssSUFBSSxDQUFDc0YsTUFBTSxJQUFJakgsTUFBTSxDQUFDQyxJQUFJLENBQUMwQixJQUFJLENBQUNzRixNQUFNLENBQUMsRUFBRS9HLE1BQU07WUFDakUsT0FDQ21ELE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQWMsR0FDaENSLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsYUFBS2YsS0FBSyxDQUFDd0UsTUFBTSxDQUFNLEVBQ3RCc0YsU0FBUyxHQUNUbEosTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQSxDQUFDMkYsS0FBQSxDQUFBYSxJQUFJO2NBQUNuRyxTQUFTLEVBQUMsbUJBQW1CO2NBQUNRLEtBQUssRUFBRThILEtBQUs7Y0FBRWxDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEdBRXRFNUcsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtjQUFNSyxTQUFTLEVBQUM7WUFBbUIsbUJBQ25DLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQTJJLEtBQUEsR0FBQTFPLE9BQUE7VUFDQSxJQUFBaU4sTUFBQSxHQUFBak4sT0FBQTtVQUVNLFNBQVU2SyxRQUFRQSxDQUFDO1lBQUVDLEtBQUs7WUFBRWpILElBQUksRUFBRTtjQUFFa0ssUUFBUTtjQUFFWDtZQUFJO1VBQUUsQ0FBMEI7WUFDbkYsT0FDQ3NCLEtBQUEsQ0FBQWhKLGFBQUE7Y0FBS0ssU0FBUyxFQUFDO1lBQW9CLEdBQ2xDMkksS0FBQSxDQUFBaEosYUFBQTtjQUFJSyxTQUFTLEVBQUM7WUFBa0IsR0FBRStFLEtBQUssQ0FBTSxFQUM3QzRELEtBQUEsQ0FBQWhKLGFBQUE7Y0FBU0ssU0FBUyxFQUFDO1lBQW1CLEdBQ3JDMkksS0FBQSxDQUFBaEosYUFBQSxDQUFDdUgsTUFBQSxDQUFBYSxLQUFLO2NBQUMvSCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUM0RSxHQUFHLEVBQUVvRDtZQUFRLEVBQUksRUFDbkRXLEtBQUEsQ0FBQWhKLGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQWlCLEdBQUVxSCxJQUFJLENBQVEsQ0FDdEMsQ0FDTDtVQUVSIiwiaWdub3JlTGlzdCI6W119