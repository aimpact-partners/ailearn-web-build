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
        hash: 3006498373,
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
                console.log(1, 'ready');
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
              console.log(2, 'cleaned');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJfZGFzaGJvYXJkTGF5b3V0IiwiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJzdG9yZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmVNYW5hZ2VyIiwiV2lkZ2V0IiwiVmlldyIsInNob3ciLCJMYXlvdXRCcm9rZXIiLCJyZW1vdmVPdmVybGF5IiwidXJpIiwidmFycyIsImdldCIsImxvYWQiLCJoaWRlIiwiY2xlYXIiLCJleHBvcnRzIiwiX21vZGVsIiwiX2FwaSIsIl9jb25maWciLCJfc2Vzc2lvbiIsIkRhc2hib2FyZCIsIlJlYWN0aXZlTW9kZWwiLCJhcGkiLCJwYXJ0aWNpcGFudHMiLCJtb2R1bGUiLCJjbGFzc3Jvb20iLCJhY3Rpdml0aWVzIiwidG90YWxQYXJ0aWNpcGFudHMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwidG90YWxNdWx0aXBsZSIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJzZWxlY3Rpb24iLCJ0b3RhbFNwb2tlbiIsImNvbnN0cnVjdG9yIiwiQXBpIiwiZGVmYXVsdCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJtb2RlbCIsImlkIiwiYmVhcmVyIiwic2Vzc2lvbldyYXBwZXIiLCJ1c2VyIiwidG9rZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwibWVzc2FnZSIsImRhdGEiLCJmb3VuZCIsInJlYWR5IiwiZGFzaGJvYXJkSWQiLCJtYXAiLCJpdGVtIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX21vZGVsMiIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJzcGVjaWZpZXIiLCJvbiIsInRyaWdnZXJFdmVudCIsInNldE1vZGVsIiwiZmV0Y2hpbmciLCJtIiwiZXJyb3IiLCJyZWZyZXNoIiwidHJpZ2dlciIsIl9yZWFjdCIsIl91aSIsIl9uYXZiYXJIZWFkZXIiLCJfaWNvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIk5vdEZvdW5kIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsIkljb25CdXR0b24iLCJpY29uIiwib25DbGljayIsIlBhZ2VDb250YWluZXIiLCJfbXVsdGlwbGUiLCJfc3Bva2VuIiwiQ2hhcnRzIiwiY2xhc3NOYW1lIiwiTXVsdGlwbGVDaGFydCIsIlNwb2tlbkNoYXJ0IiwiX2NoYXJ0cyIsIl9jb250ZXh0IiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VNdWx0aXBsZSIsImNvdW50IiwiaGFzTm9uWmVyb0NvdW50IiwidmFsdWVzIiwic29tZSIsImFjdGl2aXR5IiwiY291bnRlcnMiLCJ0b3RhbCIsInVuZGVmaW5lZCIsImNvcnJlY3QiLCJ3cm9uZyIsImRpZmYiLCJtdWx0aXBsZSIsIkNoYXJ0Iiwib3B0aW9ucyIsInRoZW1lIiwicGFsZXR0ZSIsImxlZ2VuZCIsInBvc2l0aW9uIiwiaG9yaXpvbnRhbEFsaWduIiwiY2hhcnQiLCJ0eXBlIiwiaGVpZ2h0Iiwic2VyaWVzIiwiZGF0YUxhYmVscyIsImZvcm1hdHRlciIsInNlcmllc0luZGV4IiwidyIsImNvbmZpZyIsImxhYmVscyIsInBhcnRpY2lwYXRpb24iLCJwZW5kaW5nIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJ3aWR0aCIsImNvdW50T2JqZWN0c1dpdGhvdXRVc2VTcG9rZW4iLCJzcG9rZW4iLCJEYXNoYm9hcmRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZW1wdHkiLCJFbXB0eSIsIklDT05TIiwiY2xhc3N3b3JrcyIsInRpdGxlIiwiZW1wdHkiLCJfbGluayIsIl9pbWFnZSIsIkhlYWRlciIsImRlc2NyaXB0aW9uIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiYWx0IiwiTGluayIsImhyZWYiLCJhY3Rpb25zIiwid2FsbCIsIkljb24iLCJfaXRlbSIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfaG9va3MiLCJfIiwiX2hlYWRlciIsIkFQUE5BTUUiLCJzZXRSZWFkeSIsInVzZVN0YXRlIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiUHJvdmlkZXIiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiaGFzUGFydGljaXBhdGVkIiwiaW5jbHVkZXMiLCJvdXRwdXQiLCJzdWJ0eXBlIiwicHVzaCIsImxhYmVsIiwia2V5IiwibWVzc2FnZXMiLCJtZXNzYWdlQ291bnRlciIsIkNoaXAiLCJ2YXJpYW50IiwiX2FjdGl2aXR5IiwiX3V0aWxzIiwib3JkZXIiLCJ1c2VyRGF0YSIsIm5hbWUiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsZSIsInBhcnRpY2lwYW50VXJpIiwicmVnaXN0ZXJVc2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90b1VybCIsInBlcmNlbnRpbCIsImxpbWl0RGVjaW1hbHMiLCJfY29yZSIsIl90b29sdGlwIiwiU3Bva2VuRGF0YSIsImZhY2VzIiwiRmFjZXMiLCJUb29sdGlwIiwiY29udGVudCIsImhhc1Nwb2tlbiJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21vZGVsL2luZGV4LnRzIiwiL2ludGVyZmFjZXMudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9jaGFydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NoYXJ0cy9tdWx0aXBsZS50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9lbXB0eS50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvaXRlbS9zcG9rZW4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNBLElBQUFHLGdCQUFBLEdBQUFILE9BQUE7VUFDTztVQUFVLE1BQ1hJLFVBQVcsU0FBUUwsS0FBQSxDQUFBTSx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJTCxNQUFBLENBQUFPLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSFIsZ0JBQUEsQ0FBQVMsWUFBWSxDQUFDQyxhQUFhLEVBQUU7Y0FDNUIsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNXLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lB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