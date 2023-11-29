System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "react@18.2.0", "@beyond-js/reactive@1.1.6/model", "@aimpact/chat@1.0.1/api", "@aimpact/ailearn-app@0.0.14/config", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-app@0.0.14/shared/charts", "@aimpact/ailearn-app@0.0.14/components/ui", "pragmate-ui@0.0.3/icons", "@aimpact/ailearn-app@0.0.14/shared/icons", "pragmate-ui@0.0.3/empty", "pragmate-ui@0.0.3/list", "pragmate-ui@0.0.3/components", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.3/chips", "pragmate-ui@0.0.3/image", "pragmate-ui@0.0.3/tooltip"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsReactive116Model) {
      dependency_5 = _beyondJsReactive116Model;
    }, function (_aimpactChat101Api) {
      dependency_6 = _aimpactChat101Api;
    }, function (_aimpactAilearnApp0014Config) {
      dependency_7 = _aimpactAilearnApp0014Config;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_9 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnApp0014SharedCharts) {
      dependency_10 = _aimpactAilearnApp0014SharedCharts;
    }, function (_aimpactAilearnApp0014ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0014ComponentsUi;
    }, function (_pragmateUi003Icons) {
      dependency_12 = _pragmateUi003Icons;
    }, function (_aimpactAilearnApp0014SharedIcons) {
      dependency_13 = _aimpactAilearnApp0014SharedIcons;
    }, function (_pragmateUi003Empty) {
      dependency_14 = _pragmateUi003Empty;
    }, function (_pragmateUi003List) {
      dependency_15 = _pragmateUi003List;
    }, function (_pragmateUi003Components) {
      dependency_16 = _pragmateUi003Components;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_17 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi003Chips) {
      dependency_18 = _pragmateUi003Chips;
    }, function (_pragmateUi003Image) {
      dependency_19 = _pragmateUi003Image;
    }, function (_pragmateUi003Tooltip) {
      dependency_20 = _pragmateUi003Tooltip;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/chat-api", "0.1.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/ailearn-api", "0.2.0"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.6"], ["pragmate-ui", "0.0.3"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.14"], ["@aimpact/ailearn-app", "0.0.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat/api', dependency_6], ['@aimpact/ailearn-sdk/config', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-sdk/core', dependency_9], ['@aimpact/ailearn-app/shared/charts', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/icons', dependency_12], ['@aimpact/ailearn-app/shared/icons', dependency_13], ['pragmate-ui/empty', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/components', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['pragmate-ui/chips', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/tooltip', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-session-dashboard",
        "vspecifier": "@aimpact/ailearn-app@0.0.14/assignments/dashboard.widget",
        "is": "page",
        "route": "/assignments/${id}/dashboard/classroom",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.14/assignments/dashboard.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1966334698,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
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
              if (this.uri.vars.get('id')) {
                this.#store.load(this.uri.vars.get('id'));
              }
            }
            /**
             * this method is executed when the widget is hidden
             */
            hide() {}
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./model/index
      *****************************/

      ims.set('./model/index', {
        hash: 224813378,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = void 0;
          var _model = require("@beyond-js/reactive/model");
          var _api = require("@aimpact/chat/api");
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
        hash: 324260025,
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
        hash: 4128051002,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _model = require("./model");
          var _model2 = require("@beyond-js/reactive/model");
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
            async load(id) {
              try {
                this.fetching = true;
                this.#assignmentId = id;
                const model = new _model.Dashboard();
                this.#model = model;
                await model.load(id);
                this.ready = true;
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
                console.log('si');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
          }
          exports.StoreManager = StoreManager;
        }
      });

      /************************************
      INTERNAL MODULE: ./views/charts/index
      ************************************/

      ims.set('./views/charts/index', {
        hash: 2455789254,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Charts = Charts;
          var _react = require("react");
          var _context = require("../context");
          var _multiple = require("./multiple");
          var _spoken = require("./spoken");
          var _participation = require("./participation");
          function Charts({
            data
          }) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement("section", {
              className: "charts__container"
            }, _react.default.createElement(_participation.ParticipationChart, {
              data: data
            }), _react.default.createElement("div", null, _react.default.createElement(_multiple.MultipleChart, null), _react.default.createElement(_spoken.SpokenChart, null)));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/charts/multiple
      ***************************************/

      ims.set('./views/charts/multiple', {
        hash: 2404854306,
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
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.multiple), _react.default.createElement(_charts.Chart, {
              options: {
                theme: {
                  palette: 'palette3' // upto palette10
                },

                series: [diff, store.model.totalMultiple],
                chart: {
                  width: 300,
                  type: 'donut'
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
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
                    }
                  }
                }]
              }
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/charts/participation
      ********************************************/

      ims.set('./views/charts/participation', {
        hash: 2238908257,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ParticipationChart = ParticipationChart;
          var _react = require("react");
          var _charts = require("@aimpact/ailearn-app/shared/charts");
          var _context = require("../context");
          function ParticipationChart({
            data
          }) {
            const {
              store,
              texts
            } = (0, _context.useDashboardContext)();
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, "Participation"), _react.default.createElement(_charts.Chart, {
              options: {
                theme: {
                  palette: 'palette3' // upto palette10
                },

                series: [{
                  data: [{
                    x: 'A',
                    y: data.length
                  }, {
                    x: 'B',
                    y: 50
                  }]
                }],
                chart: {
                  width: 480,
                  type: 'bar'
                },
                labels: [texts.participation.pending, texts.participation.total],
                responsive: [{
                  breakpoint: 480,
                  options: {
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
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
        hash: 515038648,
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
            const diff = store.model.participants.length - store.model.totalMultiple;
            return _react.default.createElement("article", {
              className: "charts__item"
            }, _react.default.createElement("h3", null, texts.spoken), _react.default.createElement(_charts.Chart, {
              options: {
                series: [diff, store.model.totalSpoken],
                chart: {
                  width: 300,
                  type: 'donut'
                },
                theme: {
                  palette: 'palette3' // upto palette10
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
                    chart: {
                      width: 200
                    },
                    legend: {
                      position: 'bottom'
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
        hash: 3931600774,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/shared/icons");
          var _empty = require("pragmate-ui/empty");
          function Empty({
            store,
            texts
          }) {
            const {
              model: {
                id,
                module
              }
            } = store;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Assignments', `/assignments/${id}/coach`]]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })), _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_ui.HeaderCard, {
              className: "ribbon-card",
              title: module.title,
              image: module.picture
            }, _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons2.ICONS.classworks
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
        hash: 1274493513,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          function Header() {}
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3151196992,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _charts = require("./charts");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _empty = require("./empty");
          var _item = require("./item");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _beyond_context = require("beyond_context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _icons = require("pragmate-ui/icons");
          /*bundle*/
          function View({
            store
          }) {
            const [ready, setReady] = _react.default.useState(store.ready);
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [totalParticipants, setTotalParticipants] = _react.default.useState(store.model?.participants?.length ?? 0);
            const {
              model: {
                id,
                module
              }
            } = store;
            (0, _hooks.useBinder)([store], () => setReady(store.ready));
            (0, _hooks.useBinder)([store], () => {
              setTotalParticipants(store.model?.participants?.length);
            }, 'data.updated');
            if (!ready || !textsReady) return _react.default.createElement(_components.Spinner, {
              active: true
            });
            if (!store.model.found) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) {
              return _react.default.createElement(_empty.Empty, {
                store: store,
                texts: texts
              });
            }
            const {
              classroom
            } = store.model;
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: {
                texts,
                model: store.model,
                store
              }
            }, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], [classroom.name, `/assignments/${classroom.id}/coach/list`], ['Dashboard', `/assignments/${store.assignmentId}/dashboard/classroom`]]
            }, _react.default.createElement(_icons.IconButton, {
              icon: "refresh",
              onClick: store.refresh
            })), _react.default.createElement(_ui.PageContainer, {
              className: "dashboard-container"
            }, _react.default.createElement(_ui.HeaderCard, {
              className: "ribbon-card  my-15",
              title: module.title,
              image: module.picture
            }, _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-100"
            }, _react.default.createElement("p", null, module.description))), _react.default.createElement(_charts.Charts, {
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
        hash: 2081566096,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          function ModuleActivity({
            data
          }) {
            const {
              user,
              activity
            } = data;
            const hasParticipated = Object.keys(user.activities).includes(activity.id);
            let type = hasParticipated ? 'success' : 'warning';
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice') {
              output.push(_react.default.createElement("span", null, data.data.counters.correct, " /", data.data.counters.total));
            }
            let label = hasParticipated ? 'Done' : 'Pending';
            if (activity.type === 'spoken' && data.data) {
              const keys = Object.keys(data.data);
              label = keys.reduce((acc, key) => acc + data.data[key].icon, '');
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice') {
              const {
                correct,
                total
              } = data.data.counters;
              if (correct < total / 2) type = 'warning';
              label = `${correct} /${total}`;
            }
            return _react.default.createElement("li", {
              key: `${user.id}.${activity.id}`,
              className: "flex-container flex-space-between"
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
        hash: 2269239615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _activity = require("./activity");
          var _image = require("pragmate-ui/image");
          function Item({
            data
          }) {
            const {
              texts,
              model
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
            const percentil = participation.length / order.length * 100;
            return _react.default.createElement("li", {
              className: "card card__user"
            }, _react.default.createElement(_components.Link, {
              className: "unstyled",
              href: `/assignments/${model.id}/dashboard/participant/${userData.user.id}`
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, _react.default.createElement(_image.Image, {
              src: userData.user?.photoUrl ? userData.user.photoUrl : 'https://res.cloudinary.com/versus/image/upload/f_auto,q_auto/v1/AImpact/Avatar/default',
              alt: `${userData.user.name}-avatar`,
              className: "avatar__image"
            }), userData.user.name)), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement("div", {
              className: "percentil-section"
            }, texts.percentil, _react.default.createElement("span", null, percentil, "%")), _react.default.createElement(_list.List, {
              className: "list-unstyled",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImV4cG9ydHMiLCJfbW9kZWwiLCJfYXBpIiwiX2NvbmZpZyIsIl9zZXNzaW9uIiwiRGFzaGJvYXJkIiwiUmVhY3RpdmVNb2RlbCIsImFwaSIsInBhcnRpY2lwYW50cyIsIm1vZHVsZSIsImNsYXNzcm9vbSIsImFjdGl2aXRpZXMiLCJ0b3RhbFBhcnRpY2lwYW50cyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJ0b3RhbE11bHRpcGxlIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsInNlbGVjdGlvbiIsInRvdGFsU3Bva2VuIiwiY29uc3RydWN0b3IiLCJBcGkiLCJkZWZhdWx0IiwicGFyYW1zIiwiYXBpcyIsImFpbGVhcm4iLCJyZWFjdGl2ZVByb3BzIiwiZ2xvYmFsVGhpcyIsIm1vZGVsIiwiaWQiLCJiZWFyZXIiLCJzZXNzaW9uV3JhcHBlciIsInVzZXIiLCJ0b2tlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImZvdW5kIiwicmVhZHkiLCJkYXNoYm9hcmRJZCIsIm1hcCIsIml0ZW0iLCJlIiwiY29uc29sZSIsImxvZyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJfbW9kZWwyIiwic2Vzc2lvbiIsImFzc2lnbm1lbnRJZCIsImFzc2lnbm1lbnQiLCJmZXRjaGluZyIsImVycm9yIiwicmVmcmVzaCIsInRyaWdnZXIiLCJfcmVhY3QiLCJfY29udGV4dCIsIl9tdWx0aXBsZSIsIl9zcG9rZW4iLCJfcGFydGljaXBhdGlvbiIsIkNoYXJ0cyIsInRleHRzIiwidXNlRGFzaGJvYXJkQ29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJQYXJ0aWNpcGF0aW9uQ2hhcnQiLCJNdWx0aXBsZUNoYXJ0IiwiU3Bva2VuQ2hhcnQiLCJfY2hhcnRzIiwiZGlmZiIsIm11bHRpcGxlIiwiQ2hhcnQiLCJvcHRpb25zIiwidGhlbWUiLCJwYWxldHRlIiwic2VyaWVzIiwiY2hhcnQiLCJ3aWR0aCIsInR5cGUiLCJkYXRhTGFiZWxzIiwiZm9ybWF0dGVyIiwic2VyaWVzSW5kZXgiLCJ3IiwiY29uZmlnIiwibGFiZWxzIiwicGFydGljaXBhdGlvbiIsInBlbmRpbmciLCJ0b3RhbCIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwibGVnZW5kIiwicG9zaXRpb24iLCJ4IiwieSIsInNwb2tlbiIsIkRhc2hib2FyZENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9pY29ucyIsIl9pY29uczIiLCJfZW1wdHkiLCJFbXB0eSIsIkZyYWdtZW50IiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJJY29uQnV0dG9uIiwiaWNvbiIsIm9uQ2xpY2siLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyQ2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJwaWN0dXJlIiwiZGVzY3JpcHRpb24iLCJJQ09OUyIsImNsYXNzd29ya3MiLCJlbXB0eSIsIkhlYWRlciIsIl9pdGVtIiwiX2xpc3QiLCJfY29tcG9uZW50cyIsIl9iZXlvbmRfY29udGV4dCIsIl9ob29rcyIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRUb3RhbFBhcnRpY2lwYW50cyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJQcm92aWRlciIsIm5hbWUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiSXRlbSIsIl9jaGlwcyIsIk1vZHVsZUFjdGl2aXR5IiwiYWN0aXZpdHkiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJpbmNsdWRlcyIsIm91dHB1dCIsInN1YnR5cGUiLCJwdXNoIiwiY291bnRlcnMiLCJjb3JyZWN0IiwibGFiZWwiLCJrZXkiLCJDaGlwIiwidmFyaWFudCIsIl9hY3Rpdml0eSIsIl9pbWFnZSIsIm9yZGVyIiwidXNlckRhdGEiLCJhY3Rpdml0eUl0ZW1zIiwicGVyY2VudGlsIiwiTGluayIsImhyZWYiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiYWx0IiwiX2NvcmUiLCJfdG9vbHRpcCIsIlNwb2tlbkRhdGEiLCJmYWNlcyIsIkZhY2VzIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJoYXNTcG9rZW4iXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tb2RlbC9pbmRleC50cyIsIi9pbnRlcmZhY2VzLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NoYXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY2hhcnRzL211bHRpcGxlLnRzeCIsIi90cy92aWV3cy9jaGFydHMvcGFydGljaXBhdGlvbi50c3giLCIvdHMvdmlld3MvY2hhcnRzL3Nwb2tlbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2l0ZW0vc3Bva2VuLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FB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