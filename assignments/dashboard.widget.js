System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.42/dashboard-layout.widget", "@beyond-js/reactive@1.1.12/model", "@aimpact/http-suite@1.0.3/api", "@aimpact/ailearn-sdk@1.0.0/config", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-sdk@1.0.0/core", "react@18.2.0", "@aimpact/ailearn-app@0.0.42/components/ui", "@aimpact/ailearn-app@0.0.42/components/navbar-header.code", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.42/config", "pragmate-ui@0.1.1/empty", "@aimpact/ailearn-app@0.0.42/shared/charts", "@aimpact/ailearn-app@0.0.42/components/icons", "pragmate-ui@0.1.1/link", "pragmate-ui@0.1.1/image", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/components", "@beyond-js/react-18-widgets@1.1.2/hooks", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.42/utils", "pragmate-ui@0.1.1/tooltip"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0042DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0042DashboardLayoutWidget;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactHttpSuite103Api) {
      dependency_6 = _aimpactHttpSuite103Api;
    }, function (_aimpactAilearnSdk100Config) {
      dependency_7 = _aimpactAilearnSdk100Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_10 = _aimpactAilearnSdk100Core;
    }, function (_react2) {
      dependency_11 = _react2;
    }, function (_aimpactAilearnApp0042ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0042ComponentsUi;
    }, function (_aimpactAilearnApp0042ComponentsNavbarHeaderCode) {
      dependency_13 = _aimpactAilearnApp0042ComponentsNavbarHeaderCode;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0042Config) {
      dependency_15 = _aimpactAilearnApp0042Config;
    }, function (_pragmateUi011Empty) {
      dependency_16 = _pragmateUi011Empty;
    }, function (_aimpactAilearnApp0042SharedCharts) {
      dependency_17 = _aimpactAilearnApp0042SharedCharts;
    }, function (_aimpactAilearnApp0042ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0042ComponentsIcons;
    }, function (_pragmateUi011Link) {
      dependency_19 = _pragmateUi011Link;
    }, function (_pragmateUi011Image) {
      dependency_20 = _pragmateUi011Image;
    }, function (_pragmateUi011List) {
      dependency_21 = _pragmateUi011List;
    }, function (_pragmateUi011Components) {
      dependency_22 = _pragmateUi011Components;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_23 = _beyondJsReact18Widgets112Hooks;
    }, function (_pragmateUi011Chips) {
      dependency_24 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0042Utils) {
      dependency_25 = _aimpactAilearnApp0042Utils;
    }, function (_pragmateUi011Tooltip) {
      dependency_26 = _pragmateUi011Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.42"], ["@aimpact/ailearn-app", "0.0.42"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.42/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/http-suite/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-sdk/core', dependency_10], ['react', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/config', dependency_15], ['pragmate-ui/empty', dependency_16], ['@aimpact/ailearn-app/shared/charts', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/link', dependency_19], ['pragmate-ui/image', dependency_20], ['pragmate-ui/list', dependency_21], ['pragmate-ui/components', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/chips', dependency_24], ['@aimpact/ailearn-app/utils', dependency_25], ['pragmate-ui/tooltip', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.42/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.42/assignments/dashboard.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzZWxlY3Rpb24iLCJ0b3RhbFNwb2tlbiIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZXJyb3IiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImNvdW50IiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImFjdGl2aXR5IiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0Iiwic2VyaWVzIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsIml0ZW1zIiwib3JkZXIiLCJzcG9rZW5JZCIsImZpbmQiLCJrZXkiLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZW1wdHkiLCJFbXB0eSIsIklDT05TIiwiY2xhc3N3b3JrcyIsInRpdGxlIiwiZW1wdHkiLCJfbGluayIsIl9pbWFnZSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJfaXRlbSIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfIiwiX2hlYWRlciIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiY29udHJvbCIsIkl0ZW0iLCJfY2hpcHMiLCJNb2R1bGVBY3Rpdml0eSIsImhhc1BhcnRpY2lwYXRlZCIsImluY2x1ZGVzIiwib3V0cHV0Iiwic3VidHlwZSIsInB1c2giLCJsYWJlbCIsIm1lc3NhZ2VzIiwibWVzc2FnZUNvdW50ZXIiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl91dGlscyIsInVzZXJEYXRhIiwibmFtZSIsImFjdGl2aXR5SXRlbXMiLCJwZXJjZW50aWxlIiwicGFydGljaXBhbnRVcmkiLCJyZWdpc3RlclVzZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInBob3RvVXJsIiwicGVyY2VudGlsIiwibGltaXREZWNpbWFscyIsIl9jb3JlIiwiX3Rvb2x0aXAiLCJTcG9rZW5EYXRhIiwiZmFjZXMiLCJGYWNlcyIsIlRvb2x0aXAiLCJjb250ZW50IiwiaGFzU3Bva2VuIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbW9kZWwvaW5kZXgudHMiLCIvaW50ZXJmYWNlcy50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9pdGVtL3Nwb2tlbi50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDQSxJQUFBRyxnQkFBQSxHQUFBSCxPQUFBO1VBQ087VUFBVSxNQUNYSSxVQUFXLFNBQVFMLEtBQUEsQ0FBQU0seUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUwsTUFBQSxDQUFBTyxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hSLGdCQUFBLENBQUFTLFlBQVksQ0FBQ0MsYUFBYSxFQUFFO2NBQzVCLElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUUzQztZQUVBOzs7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LEVBQUMsbUNBQW1DO2NBQzdDeUMsS0FBSyxFQUFFNkQsYUFBYTtjQUNwQmxCLE9BQU8sRUFBRWMsU0FBQSxDQUFBWDtZQUFjLEVBQ3RCLENBQ0csQ0FDQSxDQUNIO1VBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkRBLElBQUF6RyxNQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQThHLFFBQUEsR0FBQTlHLE9BQUE7VUFDQSxJQUFBMk4sS0FBQSxHQUFBM04sT0FBQTtVQUNBLElBQUE0TixRQUFBLEdBQUE1TixPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFFTSxTQUFVNk4sVUFBVUEsQ0FBQztZQUFFaks7VUFBSSxDQUFFO1lBQ2xDLE1BQU07Y0FBRWlCO1lBQUssQ0FBRSxHQUFHLElBQUFpQyxRQUFBLENBQUFDLG1CQUFtQixHQUFFO1lBRXZDLE1BQU0rRyxLQUFLLEdBQUc3TCxNQUFNLENBQUNDLElBQUksQ0FBQ3lMLEtBQUEsQ0FBQUksS0FBSyxDQUFDO1lBRWhDLE1BQU1qQyxPQUFPLEdBQUdBLENBQUM7Y0FBRWxJO1lBQUksQ0FBRSxLQUFJO2NBQzVCLE9BQ0M0QixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUM2SCxRQUFBLENBQUFJLE9BQU87Z0JBQUNDLE9BQU8sRUFBRXJLO2NBQUksR0FDckI0QixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBO2dCQUFNVyxTQUFTLEVBQUM7Y0FBYyxHQUFFaUgsS0FBQSxDQUFBSSxLQUFLLENBQUNuSyxJQUFJLENBQUMsQ0FBUSxDQUMxQztZQUVaLENBQUM7WUFFRCxNQUFNc0ssU0FBUyxHQUFHdEssSUFBSSxDQUFDNEYsTUFBTSxJQUFJdkgsTUFBTSxDQUFDQyxJQUFJLENBQUMwQixJQUFJLENBQUM0RixNQUFNLENBQUMsRUFBRXJILE1BQU07WUFDakUsT0FDQ3FELE1BQUEsQ0FBQTVDLE9BQUEsQ0FBQW1ELGFBQUE7Y0FBU1csU0FBUyxFQUFDO1lBQWMsR0FDaENsQixNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLGFBQUtsQixLQUFLLENBQUMyRSxNQUFNLENBQU0sRUFDdEIwRSxTQUFTLEdBQ1QxSSxNQUFBLENBQUE1QyxPQUFBLENBQUFtRCxhQUFBLENBQUNpRixLQUFBLENBQUFhLElBQUk7Y0FBQ25GLFNBQVMsRUFBQyxtQkFBbUI7Y0FBQ3lDLEtBQUssRUFBRTJFLEtBQUs7Y0FBRWhDLE9BQU8sRUFBRUE7WUFBTyxFQUFJLEdBRXRFdEcsTUFBQSxDQUFBNUMsT0FBQSxDQUFBbUQsYUFBQTtjQUFNVyxTQUFTLEVBQUM7WUFBbUIsbUJBQ25DLENBQ1E7VUFFWiIsImlnbm9yZUxpc3QiOltdfQ==