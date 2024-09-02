System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.14/dashboard-layout.widget", "@beyond-js/reactive@1.2.0/model", "@aimpact/http-suite@0.0.1/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.1.6-dev.14/components/ui", "@aimpact/ailearn-app@0.1.6-dev.14/components/navbar-header.code", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.14/config", "pragmate-ui@1.0.0-beta.2/empty", "@aimpact/ailearn-app@0.1.6-dev.14/shared/charts", "@aimpact/ailearn-app@0.1.6-dev.14/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/list", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@1.0.0-beta.2/chips", "pragmate-ui@1.0.0-beta.2/image", "@aimpact/ailearn-app@0.1.6-dev.14/utils", "pragmate-ui@1.0.0-beta.2/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp016Dev14DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev14DashboardLayoutWidget;
    }, function (_beyondJsReactive120Model) {
      dependency_5 = _beyondJsReactive120Model;
    }, function (_aimpactHttpSuite001Api) {
      dependency_6 = _aimpactHttpSuite001Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_7 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk110Session) {
      dependency_8 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp016Dev14ComponentsUi) {
      dependency_12 = _aimpactAilearnApp016Dev14ComponentsUi;
    }, function (_aimpactAilearnApp016Dev14ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp016Dev14ComponentsNavbarHeaderCode;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_14 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev14Config) {
      dependency_15 = _aimpactAilearnApp016Dev14Config;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_16 = _pragmateUi100Beta2Empty;
    }, function (_aimpactAilearnApp016Dev14SharedCharts) {
      dependency_17 = _aimpactAilearnApp016Dev14SharedCharts;
    }, function (_aimpactAilearnApp016Dev14ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp016Dev14ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_19 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2List) {
      dependency_20 = _pragmateUi100Beta2List;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_21 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_22 = _pragmateUi100Beta2Chips;
    }, function (_pragmateUi100Beta2Image) {
      dependency_23 = _pragmateUi100Beta2Image;
    }, function (_aimpactAilearnApp016Dev14Utils) {
      dependency_24 = _aimpactAilearnApp016Dev14Utils;
    }, function (_pragmateUi100Beta2Tooltip) {
      dependency_25 = _pragmateUi100Beta2Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.14"], ["@aimpact/ailearn-app", "0.1.6-dev.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/shared/charts', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/components', dependency_19], ['pragmate-ui/list', dependency_20], ['@beyond-js/react-18-widgets/hooks', dependency_21], ['pragmate-ui/chips', dependency_22], ['pragmate-ui/image', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.14/assignments/dashboard.widget');
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
        hash: 3639984389,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
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
            }, _react.default.createElement(_components.Link, {
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
        hash: 1377385980,
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
            if (!ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwiZXJyb3IiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJ0ZXh0IiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZSIsInJlZnJlc2giLCJ0cmlnZ2VyIiwiY29uc29sZSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJDaGFydHMiLCJjbGFzc05hbWUiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiX2NvbnRleHQiLCJfc2V0dGluZ3MiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwiYWN0aXZpdHkiLCJpdGVtcyIsImZvckVhY2giLCJpbmRleCIsImN1cnJlbnQiLCJ0eXBlIiwiY291bnRPYmplY3RzV2l0aG91dFVzZU11bHRpcGxlIiwiY291bnQiLCJoYXNOb25aZXJvQ291bnQiLCJ2YWx1ZXMiLCJzb21lIiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJ0aXRsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInNlcmllcyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwiQ0hBUlRfQkFTRV9TUEVDUyIsInJlc3BvbnNpdmUiLCJSRVNQT05TSVZFX0JBU0VfU1BFQ1MiLCJ0aGVtZSIsInBhbGV0dGUiLCJsZWdlbmQiLCJwb3NpdGlvbiIsImhvcml6b250YWxBbGlnbiIsImNoYXJ0IiwiaGVpZ2h0IiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIm9yZGVyIiwic3Bva2VuSWQiLCJmaW5kIiwia2V5Iiwic3Bva2VuIiwiRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2ljb25zIiwiX2VtcHR5IiwiQVBQIiwiQVBQX05BTUUiLCJFbXB0eSIsIlBhZ2VDb250YWluZXIiLCJpY29uIiwiSUNPTlMiLCJjbGFzc3dvcmtzIiwiZW1wdHkiLCJfY29tcG9uZW50cyIsIl91c2VyRGF0YSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIm93bmVyIiwiY3JlYXRvciIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiVXNlckRhdGEiLCJsYWJlbCIsIkxpbmsiLCJocmVmIiwiYWN0aW9ucyIsIndhbGwiLCJJY29uIiwiX2l0ZW0iLCJfbGlzdCIsIl9ob29rcyIsIl8iLCJfaGVhZGVyIiwiQVBQTkFNRSIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInVzZUJpbmRlciIsIlBhZ2VMb2FkZXIiLCJQcm92aWRlciIsIkxpc3QiLCJjb250cm9sIiwiSXRlbSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl9pbWFnZSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2xpY2siLCJJbWFnZSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIiwiUmVhY3QiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvY2hhcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jaGFydHMvbXVsdGlwbGUudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zZXR0aW5ncy50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL3VzZXItZGF0YS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFH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QUFJLEdBQ3JCMEIsTUFBQSxDQUFBMUMsT0FBQSxDQUFBNkMsYUFBQTtnQkFBTUssU0FBUyxFQUFDO2NBQWMsR0FBRWlJLEtBQUEsQ0FBQUksS0FBSyxDQUFDdkssSUFBSSxDQUFDLENBQVEsQ0FDMUM7WUFFWixDQUFDO1lBRUQsTUFBTTBLLFNBQVMsR0FBRzFLLElBQUksQ0FBQ3NGLE1BQU0sSUFBSWpILE1BQU0sQ0FBQ0MsSUFBSSxDQUFDMEIsSUFBSSxDQUFDc0YsTUFBTSxDQUFDLEVBQUUvRyxNQUFNO1lBQ2pFLE9BQ0NtRCxNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFjLEdBQ2hDUixNQUFBLENBQUExQyxPQUFBLENBQUE2QyxhQUFBLGFBQUtmLEtBQUssQ0FBQ3dFLE1BQU0sQ0FBTSxFQUN0Qm9GLFNBQVMsR0FDVGhKLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUEsQ0FBQzJGLEtBQUEsQ0FBQVcsSUFBSTtjQUFDakcsU0FBUyxFQUFDLG1CQUFtQjtjQUFDUSxLQUFLLEVBQUU0SCxLQUFLO2NBQUVsQyxPQUFPLEVBQUVBO1lBQU8sRUFBSSxHQUV0RTFHLE1BQUEsQ0FBQTFDLE9BQUEsQ0FBQTZDLGFBQUE7Y0FBTUssU0FBUyxFQUFDO1lBQW1CLG1CQUNuQyxDQUNRO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUF5SSxLQUFBLEdBQUF4TyxPQUFBO1VBQ0EsSUFBQStNLE1BQUEsR0FBQS9NLE9BQUE7VUFFTSxTQUFVNkssUUFBUUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVqSCxJQUFJLEVBQUU7Y0FBRWdLLFFBQVE7Y0FBRVg7WUFBSTtVQUFFLENBQTBCO1lBQ25GLE9BQ0NzQixLQUFBLENBQUE5SSxhQUFBO2NBQUtLLFNBQVMsRUFBQztZQUFvQixHQUNsQ3lJLEtBQUEsQ0FBQTlJLGFBQUE7Y0FBSUssU0FBUyxFQUFDO1lBQWtCLEdBQUUrRSxLQUFLLENBQU0sRUFDN0MwRCxLQUFBLENBQUE5SSxhQUFBO2NBQVNLLFNBQVMsRUFBQztZQUFtQixHQUNyQ3lJLEtBQUEsQ0FBQTlJLGFBQUEsQ0FBQ3FILE1BQUEsQ0FBQWEsS0FBSztjQUFDN0gsU0FBUyxFQUFDLGdCQUFnQjtjQUFDNEUsR0FBRyxFQUFFa0Q7WUFBUSxFQUFJLEVBQ25EVyxLQUFBLENBQUE5SSxhQUFBO2NBQU1LLFNBQVMsRUFBQztZQUFpQixHQUFFbUgsSUFBSSxDQUFRLENBQ3RDLENBQ0w7VUFFUiIsImlnbm9yZUxpc3QiOltdfQ==