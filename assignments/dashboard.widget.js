System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.45/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-app@0.0.45/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.45/shared/charts", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.45/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0045DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0045DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_7 = _aimpactAilearnApp0045Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Empty) {
      dependency_15 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0045SharedCharts) {
      dependency_16 = _aimpactAilearnApp0045SharedCharts;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0045ComponentsIcons;
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
    }, function (_aimpactAilearnApp0045Utils) {
      dependency_24 = _aimpactAilearnApp0045Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_25 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_15], ['@aimpact/ailearn-app/shared/charts', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/link', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/list', dependency_20], ['pragmate-ui/components', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['pragmate-ui/chips', dependency_23], ['@aimpact/ailearn-app/utils', dependency_24], ['pragmate-ui/tooltip', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/assignments/dashboard.widget');
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
        hash: 815651074,
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
        hash: 2376024531,
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
        hash: 3062876907,
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
            const total = store.model.participants.reduce((acc, item) => item.activities[spokenId] ? acc + 1 : acc, 0);
            const diff = store.model.participants.length - total;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
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
        hash: 2195910379,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzZWxlY3Rpb24iLCJ0b3RhbFNwb2tlbiIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZXJyb3IiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX211bHRpcGxlIiwiX3Nwb2tlbiIsIkNoYXJ0cyIsImNsYXNzTmFtZSIsIk11bHRpcGxlQ2hhcnQiLCJTcG9rZW5DaGFydCIsIl9jaGFydHMiLCJfY29udGV4dCIsIl9zZXR0aW5ncyIsInVzZURhc2hib2FyZENvbnRleHQiLCJjb3VudE9iamVjdHNXaXRob3V0VXNlTXVsdGlwbGUiLCJjb3VudCIsImhhc05vblplcm9Db3VudCIsInZhbHVlcyIsInNvbWUiLCJhY3Rpdml0eSIsImNvdW50ZXJzIiwidG90YWwiLCJ1bmRlZmluZWQiLCJjb3JyZWN0Iiwid3JvbmciLCJkaWZmIiwibXVsdGlwbGUiLCJDaGFydCIsIm9wdGlvbnMiLCJzZXJpZXMiLCJsYWJlbHMiLCJwYXJ0aWNpcGF0aW9uIiwicGVuZGluZyIsIkNIQVJUX0JBU0VfU1BFQ1MiLCJyZXNwb25zaXZlIiwiUkVTUE9OU0lWRV9CQVNFX1NQRUNTIiwidGhlbWUiLCJwYWxldHRlIiwibGVnZW5kIiwicG9zaXRpb24iLCJob3Jpem9udGFsQWxpZ24iLCJjaGFydCIsInR5cGUiLCJoZWlnaHQiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwiYnJlYWtwb2ludCIsIndpZHRoIiwiaXRlbXMiLCJvcmRlciIsInNwb2tlbklkIiwiZmluZCIsImtleSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIl9lbXB0eSIsIkFQUCIsIkFQUF9OQU1FIiwiRW1wdHkiLCJQYWdlQ29udGFpbmVyIiwiaWNvbiIsIklDT05TIiwiY2xhc3N3b3JrcyIsInRpdGxlIiwiZW1wdHkiLCJfbGluayIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIkVudGl0eUltYWdlIiwiZW50aXR5Iiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJfaXRlbSIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfIiwiX2hlYWRlciIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJsYWJlbCIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl9pbWFnZSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uQ2xpY2siLCJJbWFnZSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc2V0dGluZ3MudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcs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