System.register(["@beyond-js/widgets@1.1.3/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.32/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.3.32/components/ui", "@aimpact/ailearn-app@0.3.32/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.32/components/icons", "@aimpact/chat-sdk@1.4.3/chat-component.code", "@aimpact/chat-sdk@1.4.3/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.3.32/dashboard/wall/widget.widget", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityView: void 0,
    ChatActivityParticipant: void 0,
    MultipleChoiceActivityParticipant: void 0,
    SpokenActivityParticipant: void 0,
    EmptyCard: void 0,
    GeneralView: void 0,
    ActivityIcon: void 0,
    DrawerAlert: void 0,
    DrawerAlertItem: void 0,
    IconBox: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets113Render) {
      dependency_0 = _beyondJsWidgets113Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_4 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0332DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0332DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_6 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_12 = _beyondJsReact18Widgets114Hooks;
    }, function (_aimpactAilearnApp0332ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0332ComponentsUi;
    }, function (_aimpactAilearnApp0332Config) {
      dependency_14 = _aimpactAilearnApp0332Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_15 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_16 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_17 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_18 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_19 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_20 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp0332ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0332ComponentsIcons;
    }, function (_aimpactChatSdk143ChatComponentCode) {
      dependency_22 = _aimpactChatSdk143ChatComponentCode;
    }, function (_aimpactChatSdk143WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk143WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_25 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_26 = _pragmateUi100Beta7Drawer;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_27 = _pragmateUi100Beta7Toast;
    }, function (_lodash) {
      dependency_28 = _lodash;
    }, function (_beyondJsKernel0112Routing) {
      dependency_29 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp0332DashboardWallWidgetWidget) {
      dependency_30 = _aimpactAilearnApp0332DashboardWallWidgetWidget;
    }, function (_pragmateUi100Beta7Form) {
      dependency_31 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.2"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.7.9"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.32"], ["@aimpact/ailearn-app", "0.3.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/drawer', dependency_26], ['pragmate-ui/toast', dependency_27], ['lodash', dependency_28], ['@beyond-js/kernel/routing', dependency_29], ['@aimpact/ailearn-app/dashboard/wall/widget.widget', dependency_30], ['pragmate-ui/form', dependency_31]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.32/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.32/dashboard/assignments.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 239082409,
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
            hide() {
              this.#store.clear();
            }
          }
          exports.Controller = Controller;
        }
      });

      /*****************************
      INTERNAL MODULE: ./store/index
      *****************************/

      ims.set('./store/index', {
        hash: 36707717,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@aimpact/reactive/model");
          var _core = require("@beyond-js/kernel/core");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _wall = require("./wall");
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
            isStore;
            #session;
            #assignmentId;
            #tracking;
            #currentTracking;
            #trackings = new Map();
            #model;
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
            #filter;
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            #globalTexts;
            #users = new Map();
            #wallStore;
            get session() {
              return this.#session;
            }
            get assignmentId() {
              return this.#assignmentId;
            }
            get assignment() {
              return this.#session;
            }
            get model() {
              return this.#model;
            }
            get texts() {
              return this.#texts?.value;
            }
            get participants() {
              if (!this.#filter) return this.#model.participants.items;
              const response = this.#model.participants.items.filter(item => item.user.name.toLowerCase().includes(this.#filter.toLowerCase()));
              return response;
            }
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            get users() {
              return this.#users;
            }
            get wall() {
              return this.#wallStore;
            }
            filter(filter) {
              this.#filter = filter;
              this.triggerEvent('change');
            }
            get state() {
              return {
                totalParticipants: this.model.participants?.items?.length ?? 0,
                fetching: this.fetching,
                view: this.view
              };
            }
            constructor() {
              super({
                properties: ['view']
              });
              this.view = 'general';
              _dashboardLayout.LayoutBroker.setModel(this);
              _dashboardLayout.LayoutBroker.overlay = true;
              this.#globalTexts = new _texts.CurrentTexts('@aimpact/ailearn-app/i18n');
              this.#globalTexts.on('change', this.triggerEvent);
              this.#texts.on('change', this.triggerEvent);
              this.#globalTexts.fetch();
              globalThis.store = this;
            }
            async load(id) {
              try {
                if (!id) throw new Error('Invalid assignment ID');
                if (this.#model && this.#model.id === id) return;
                this.fetching = true;
                this.#assignmentId = id;
                this.#model = new _tracking.TrackingDashboard({
                  id
                });
                // Initialize wall store
                this.#wallStore = new _wall.WallStore(id);
                await Promise.all([this.#texts.fetch(), this.#model.load(id)]);
                this.setupLayout();
              } catch (error) {
                console.error('Error loading dashboard:', error);
                throw error;
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
            setupLayout() {
              _dashboardLayout.LayoutBroker.refresh = this.refresh;
              _dashboardLayout.LayoutBroker.set({
                backLink: `/classrooms/view/${this.#model.classroom.id}`,
                breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`], [`Dashboard > ${this.#model.module.title}`]]
              });
            }
            async loadUserTracking(userId) {
              try {
                const participant = this.model.participants.map.get(userId);
                await participant.load();
                this.#currentTracking = participant;
                return this.#currentTracking;
              } catch (e) {
                console.error(e);
              }
            }
            refresh = async () => {
              try {
                this.fetching = true;
                await this.model.load();
                this.trigger('data.updated');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            };
            refreshDrawer = async ({
              userId,
              activity
            } = {}) => {
              try {
                const promise = new _core.PendingPromise();
                this.fetching = true;
                this.trigger('fetching.drawer');
                await this.model.load(this.#assignmentId);
                if (userId) {
                  const tracking = await this.loadUserTracking(userId);
                  await tracking.load({
                    id: this.#assignmentId,
                    userId
                  });
                }
                if (activity && activity.chatModel) {
                  activity.chatModel.loadAll({
                    id: activity.chatModel.id
                  });
                }
                globalThis.setTimeout(() => {
                  promise.resolve();
                }, 1000);
                return promise;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
                this.trigger('fetching.drawer');
              }
            };
            refreshTracking = async userId => {
              const tracking = this.#trackings.get(userId);
              tracking.load({
                id: this.#assignmentId,
                userId
              });
            };
            clear() {
              _dashboardLayout.LayoutBroker.clear();
              this.#users.clear();
              this.#trackings.clear();
              this.#currentTracking = null;
              this.#model = null;
              this.#activitySelected = null;
              this.#filter = '';
              if (this.#wallStore) {
                this.#wallStore.clear();
                this.#wallStore = null;
              }
              this.triggerEvent('cleared');
            }
            selectActivity(activity) {
              this.#activitySelected = activity;
              this.view = activity ? 'activity' : 'general';
              this.trigger('change');
            }
            async archive() {
              this.fetching = true;
              await this.model.archive();
              this.fetching = false;
            }
            async restore() {
              this.fetching = true;
              await this.model.restore();
              this.fetching = false;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************
      INTERNAL MODULE: ./store/wall
      ****************************/

      ims.set('./store/wall', {
        hash: 3337838497,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallStore = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@aimpact/reactive/model");
          class WallStore extends _model.ReactiveModel {
            #model;
            #items;
            #id;
            #assignment;
            get model() {
              return this.#model;
            }
            get items() {
              return this.#items;
            }
            get id() {
              return this.#id;
            }
            get assignment() {
              return this.#assignment;
            }
            constructor(id) {
              super();
              this.#id = id;
              this.#model = new _core.DashboardWall();
            }
            refresh = async () => {
              try {
                this.fetching = true;
                const {
                  messages
                } = await this.model.load({
                  id: this.#id
                });
                this.#items = messages;
                this.triggerEvent('items.updated');
              } catch (error) {
                console.error('Error refreshing wall:', error);
              } finally {
                this.fetching = false;
              }
            };
            async load() {
              try {
                console.log(20, 'aja');
                const {
                  messages
                } = await this.#model.load({
                  id: this.#id
                });
                this.#items = messages;
                super.ready = true;
                this.triggerEvent();
              } catch (error) {
                console.error('Error loading wall:', error);
                throw error;
              }
            }
            clear() {
              this.#model = null;
              this.#items = [];
              this.#id = null;
              this.#assignment = null;
              this.triggerEvent('cleared');
            }
          }
          exports.WallStore = WallStore;
        }
      });

      /***************************
      INTERNAL MODULE: ./views/404
      ***************************/

      ims.set('./views/404', {
        hash: 1040410774,
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("app-missing-control", null));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/actions
      *******************************/

      ims.set('./views/actions', {
        hash: 114197555,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          function DashboardActions() {
            const {
              model,
              store,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const [update, setUpdate] = _react.default.useState({});
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              store.wall.load();
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            (0, _hooks.useBinder)([model], () => {
              setUpdate({});
            }, 'archived.changed');
            const archive = async () => {
              setFetching(true);
              await store.archive();
              setFetching(false);
            };
            const restore = async () => {
              setFetching(true);
              await store.restore();
              setFetching(false);
            };
            const actionText = model.archived ? 'restore' : 'archive';
            const action = model.archived ? restore : archive;
            return _react.default.createElement("div", {
              className: "dashboard-actions flex-container flex-vertical-center gap-05"
            }, model.isUserCreator ? _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: action,
              disabled: fetching,
              fetching: fetching
            }, actionText) : null, _react.default.createElement(_components.Button, {
              bordered: true,
              icon: "shared-folder",
              className: "btn btn-primary outline pui-button has-icon ",
              onClick: onClick
            }, texts.actions.wall));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/empty
      *********************************************/

      ims.set('./views/activities/view/empty', {
        hash: 1827167088,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyMaterial = EmptyMaterial;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../../context");
          function EmptyMaterial({
            message
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            message = message ?? texts.activities.empty;
            return _react.default.createElement(_ui.EmptyCard, {
              icon: "info",
              text: message,
              className: "empty-section__container"
            });
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/activities/view/index
      *********************************************/

      ims.set('./views/activities/view/index', {
        hash: 1562463379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var _react = require("react");
          var _context = require("../../context");
          var _icons = require("pragmate-ui/icons");
          var _list = require("pragmate-ui/list");
          var _participant = require("./participant");
          var _empty = require("pragmate-ui/empty");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function ActivityView({}) {
            const {
              store,
              setView
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const [updated, setUpdated] = _react.default.useState({});
            const onClose = () => store.selectActivity(undefined);
            (0, _hooks.useBinder)([store], () => setUpdated(store.activitySelected), 'data.updated');
            if (!activity) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
              className: `activity-header bottom-rounded bg-activity--${activity.type}`
            }, _react.default.createElement("div", null, _react.default.createElement("h4", null, activity.title, " ")), _react.default.createElement("div", {
              className: "close-icon"
            }, _react.default.createElement(_icons.IconButton, {
              icon: "close",
              title: "Close",
              onClick: onClose,
              className: "circle"
            }))), _react.default.createElement(_components.ConditionalContainer, {
              condition: activity.participants.length > 0,
              ternary: true,
              options: {
                true: _react.default.createElement(_list.List, {
                  className: "activity-users__list",
                  items: activity.participants,
                  control: _participant.ActivityParticipant,
                  specs: {
                    activity
                  }
                }),
                false: _react.default.createElement(_empty.Empty, {
                  text: 'No participants found'
                })
              }
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/chat
      ********************************************************/

      ims.set('./views/activities/view/participant/chat', {
        hash: 2694921453,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ChatActivityParticipant = ChatActivityParticipant;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _objectiveIcon = require("../../../components/objective-icon");
          var _objective = require("./objective");
          /*bundle*/
          function ChatActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  activity,
                  participant: item
                }
              });
              return false;
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              toggleable: !!data?.progress?.objectives,
              onToggle: onToggle,
              open: isDragging
            }, _react.default.createElement(_collapsible.CollapsibleHeader, {
              className: "activity-participant__header header--collapsible"
            }, _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement(_components.Link, {
              className: "hidden-md",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              className: "hidden-xs",
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("h6", null, item.user.name)), _react.default.createElement("span", {
              className: "activity-participant__synthesis"
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: !!data?.progress?.summary,
              ternary: true,
              options: {
                true: _react.default.createElement(_react.default.Fragment, null, data?.progress?.summary),
                false: _react.default.createElement(_react.default.Fragment, null, texts.activities.noSummary)
              }
            })))), _react.default.createElement(_list.List, {
              className: "unstyled-list objectives-header__states",
              items: data?.progress?.objectives,
              control: _objectiveIcon.ActivityObjectiveStatusIcon
            })), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity-participant__collapsible-content"
            }, _react.default.createElement(_list.List, {
              items: data?.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            }))));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/index
      *********************************************************/

      ims.set('./views/activities/view/participant/index', {
        hash: 3716156993,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityParticipant = ActivityParticipant;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          function ActivityParticipant({
            item,
            activity,
            ...specs
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ChatActivityParticipant, {
                  item: item
                }),
                spoken: _react.default.createElement(_spoken.SpokenActivityParticipant, {
                  item: item
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.MultipleChoiceActivityParticipant, {
                  item: item
                })
              }
            });
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/multiple-choice
      *******************************************************************/

      ims.set('./views/activities/view/participant/multiple-choice', {
        hash: 106740533,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.MultipleChoiceActivityParticipant = MultipleChoiceActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function MultipleChoiceActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer,
              texts: {
                activities: {
                  multipleChoice: texts
                }
              }
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  activitySelected: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const {
              correct,
              total,
              wrong
            } = participantActivity.counters;
            const cls = `dashboard-chip ${correct > total / 2 ? ' success-label' : ' error-label'} `;
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", {
              className: "activity-participant__header-content"
            }, _react.default.createElement("span", {
              className: cls
            }, participantActivity.counters.correct, " / ", participantActivity.counters.total))));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/view/participant/objective
      *************************************************************/

      ims.set('./views/activities/view/participant/objective', {
        hash: 1100387958,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function StudentAssignmentActivityObjective({
            item
          }) {
            if (!item) {
              return null;
            }
            const {
              name,
              analysis
            } = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name)), React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            }))), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis));
          }
        }
      });

      /**********************************************************
      INTERNAL MODULE: ./views/activities/view/participant/spoken
      **********************************************************/

      ims.set('./views/activities/view/participant/spoken', {
        hash: 1188672967,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpokenActivityParticipant = SpokenActivityParticipant;
          var _react = require("react");
          var _context = require("../../../context");
          var _image = require("pragmate-ui/image");
          var _components = require("pragmate-ui/components");
          var _tooltip = require("pragmate-ui/tooltip");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          /*bundle*/
          function SpokenActivityParticipant({
            item
          }) {
            const {
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              activitySelected: activity
            } = store;
            const data = item.activities.get(activity.id);
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const onToggle = () => {
              setIsDragging(!isDragging);
            };
            if (!data) {
              console.warn(`the user ${item.user.name} has not participate on activity`, item);
              return null;
            }
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(item.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  tracking,
                  activitySelected: activity.id,
                  participant: item
                }
              });
              return false;
            };
            const participantActivity = item.activities.get(activity.id);
            const IconState = ({
              item: objective
            }) => {
              return _react.default.createElement(_tooltip.Tooltip, {
                content: objective.objective
              }, _react.default.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }));
            };
            return _react.default.createElement("div", {
              className: "activity-participant"
            }, _react.default.createElement("div", {
              className: "activity-participant__header flex-container flex-vertical-center"
            }, _react.default.createElement(_components.Link, {
              href: `/dashboard/${store.assignmentId}?studentId=${item.user.id}`,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: "user-data__section"
            }, _react.default.createElement(_image.Image, {
              className: "user-data__img",
              src: item.user.photoUrl
            }), _react.default.createElement("h6", null, item.user.name))), _react.default.createElement("div", null, _react.default.createElement(_list.List, {
              className: "unstyled-list",
              items: participantActivity.objectives,
              control: IconState
            }))));
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/chat-tab
      ****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/chat-tab', {
        hash: 2122987888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _context = require("../../../../context");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const ref = React.useRef();
            const tActivity = tracking.activities.map.get(item.activity.id);
            const chatId = tActivity?.chatModel?.id;
            if (!tActivity.chatModel.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, tActivity.chatModel.messages.items.slice(-2).map(item => {
              React.createElement("div", null, item.text);
            }));
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              chat: tActivity?.chatModel?.id,
              id: chatId,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/empty
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/empty', {
        hash: 2871249374,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyChat = EmptyChat;
          var _empty = require("pragmate-ui/empty");
          var _react = require("react");
          var _context = require("../../../../context");
          function EmptyChat() {
            const {
              texts: {
                chat: {
                  empty: texts
                }
              },
              store
            } = (0, _context.useDrawerContext)();
            if (!store?.model) return null;
            const {
              title,
              description
            } = texts;
            return _react.default.createElement("div", {
              className: "empty-chat"
            }, _react.default.createElement(_empty.Empty, {
              icon: "info"
            }, _react.default.createElement("h3", null, title), _react.default.createElement("span", null, description)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/index
      *************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/index', {
        hash: 3246259798,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatBody = StudentAssignmentActivityChatBody;
          var _tabs = require("pragmate-ui/tabs");
          var React = require("react");
          var _drawerAlerts = require("../../../../components/drawer-alerts");
          var _context = require("../../../../context");
          var _components = require("pragmate-ui/components");
          var _objectives = require("./objectives");
          //@ts-ignore

          /**
           *
           * @param paramm item: ParticipantActivity
           * @returns
           */
          function StudentAssignmentActivityChatBody(props) {
            const {
              item,
              user,
              tracking,
              activityId,
              participant
            } = props;
            const {
              texts,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const tActivity = participant.activities.get(activityId);
            const chatId = tActivity?.chatModel?.id;
            const [messages, setMessages] = React.useState(tActivity?.chatModel?.messages.items ?? []);
            React.useEffect(() => {
              if (!chatId) return;
              const triggerChange = () => {
                setMessages([...tActivity.chatModel.messages.items]);
              };
              tActivity.chatModel.on('change', triggerChange);
              return () => {
                tActivity.chatModel.off('change', triggerChange);
              };
            }, [chatId]);
            const tabs = [];
            if (item.progress?.objectives) tabs.push(React.createElement(_tabs.Tab, {
              key: "objectives"
            }, texts.activities.objectives));
            const interactions = item.interactions ? item.interactions : item.messages?.count;
            tabs.push(React.createElement(_tabs.Tab, {
              key: "summary"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.activities.chat.tab, item.messages?.count ? React.createElement("i", {
              className: "drawer__badge"
            }, interactions) : null)));
            if (item?.alerts?.length) tabs.push(React.createElement(_tabs.Tab, {
              key: "alerts",
              className: "alerts-tab"
            }, React.createElement("div", {
              className: "tab__label"
            }, texts.alerts, React.createElement("span", {
              className: "drawer__badge drawer__badge--danger"
            }, item.alerts.length))));
            const openChat = event => {
              item.loadChat();
              setShowDrawer({
                show: true,
                view: 'student-chat',
                data: {
                  tracking,
                  participant,
                  participantActivity: item,
                  chat: tActivity.chatModel
                }
              });
            };
            return React.createElement(_tabs.TabsContainer, {
              active: 0
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, item.progress?.objectives && React.createElement(_objectives.StudentAssignmentActivityObjectives, {
              item: item,
              tracking: tracking
            }), React.createElement("div", null, React.createElement("section", {
              className: "activity-data-section"
            }, React.createElement("h6", null, texts.activities.summary), React.createElement("p", null, item.synthesis), React.createElement(_components.ConditionalContainer, {
              condition: !!interactions,
              ternary: true,
              options: {
                true: React.createElement("footer", {
                  className: "mt-15 flex-container flex-end"
                }, React.createElement(_components.Button, {
                  onClick: openChat,
                  className: "chat__btn",
                  variant: "primary",
                  bordered: true
                }, texts.activities.chat.action)),
                false: null
              }
            }))), React.createElement(_drawerAlerts.DrawerAlert, {
              alerts: item?.alerts,
              user: user
            })));
          }
        }
      });

      /*****************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objective
      *****************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objective', {
        hash: 239820204,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjective = StudentAssignmentActivityObjective;
          var React = require("react");
          var _context = require("../../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          function StudentAssignmentActivityObjective({
            item
          }) {
            const {
              name,
              analysis
            } = item;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return React.createElement("div", {
              className: "assigment-activity-objective__container"
            }, React.createElement("div", {
              className: "objective-title__container"
            }, React.createElement("div", null, React.createElement("h6", null, name), React.createElement("p", null, analysis ? analysis : texts.activities.noAnalysis)), React.createElement("div", null, React.createElement("div", {
              className: `status__container status__container--${status}`
            }, React.createElement("span", null, texts.activities.objectivesStatus[status]), React.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            })))));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/chat/objectives
      ******************************************************************/

      ims.set('./views/assignment/drawer/activity/chat/objectives', {
        hash: 693015359,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityObjectives = StudentAssignmentActivityObjectives;
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../../../context");
          var _objective = require("./objective");
          //@ts-ignore
          function StudentAssignmentActivityObjectives({
            item,
            tracking
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            return React.createElement("div", null, React.createElement("div", {
              className: "objectives__summary"
            }, React.createElement("p", null, item.progress?.summary)), item.progress?.objectives && React.createElement("div", null, React.createElement("h4", {
              className: "mt-15"
            }, texts.activities.progres), React.createElement(_list.List, {
              className: "unstyled-list",
              items: item.progress?.objectives,
              control: _objective.StudentAssignmentActivityObjective
            })));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 3082233428,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivity = StudentAssignmentActivity;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var React = require("react");
          var _context = require("../../../context");
          var _chat = require("./chat");
          var _multipleChoice = require("./multiple-choice");
          var _spoken = require("./spoken");
          /**
           *
           * @param param0 activityId is passed when the user clicks on an activity
           * @returns
           */
          function StudentAssignmentActivity({
            item: activity,
            user,
            index,
            tracking,
            activityId,
            activitySelected,
            participant
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const item = participant.activities.get(activity.id);
            const open = !activitySelected && index === 0 || activitySelected === activity.id;
            const [isDragging, setIsDragging] = React.useState(open);
            const ref = React.useRef(null);
            const onToggle = () => setIsDragging(!isDragging);
            const clsDrawer = `ds-drawer__activity-item ${isDragging ? 'is-open' : ''} ${open ? 'is-open' : ''}`;
            if (!activityId) activityId = activity.id;
            React.useEffect(() => {
              if (!open) return;
              ref.current?.classList.toggle('activity-item--opened');
              ref.current.closest('.ds-drawer__content').scrollIntoView({
                behavior: 'smooth',
                block: 'end'
              });
              setTimeout(() => {
                ref.current?.classList.toggle('activity-item--opened');
              }, 1000);
            }, [open]);
            if (!hasParticipated) {
              return React.createElement("article", {
                className: "ds-drawer__activity-item is-disabled",
                ref: ref
              }, React.createElement(_collapsible.CollapsibleContainer, null, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
                className: "activity__header"
              }, React.createElement("section", {
                className: "activity-header__container"
              }, React.createElement("picture", {
                className: `activity-type__icon activity--${activity?.type}`
              }, React.createElement(_icons.AppIcon, {
                icon: _icons.ICONS[activity.type]
              })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("div", null, React.createElement("span", null, texts.activities.types[activity.type]), React.createElement("div", {
                className: "activity-status"
              }, texts.activities.status.pending))))))));
            }
            return React.createElement("article", {
              className: clsDrawer,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              data: item,
              onToggle: onToggle,
              open: isDragging
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("header", {
              className: "activity__header"
            }, React.createElement("section", {
              className: "activity-header__container"
            }, React.createElement("picture", {
              className: `activity-type__icon activity--${activity?.type}`
            }, React.createElement(_icons.AppIcon, {
              icon: _icons.ICONS[activity.type]
            })), React.createElement("div", null, React.createElement("h5", null, activity.title), React.createElement("span", null, texts.activities.types[activity.type]))))), React.createElement(_collapsible.CollapsibleContent, {
              className: "ds-drawer__activity-item__collapsible-content"
            }, React.createElement(_components.ConditionalContainer, {
              condition: activity.type,
              options: {
                'content-theory': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'character-talk': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                debate: React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                'multiple-choice': React.createElement(_multipleChoice.StudentAssignmentActivityMultipleChoiceBody, {
                  item: item,
                  user: user,
                  activityId: activityId
                }),
                spoken: React.createElement(_spoken.StudentAssignmentActivitySpokenBody, {
                  item: item,
                  participant: participant,
                  tracking: tracking,
                  activityId: activityId
                })
              }
            }))));
          }
        }
      });

      /*************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/answer
      *************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/answer', {
        hash: 1375693988,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestionOptions = StudentAssignmentActivityMultipleChoiceQuestionOptions;
          var React = require("react");
          var _context = require("../../../../context");
          function StudentAssignmentActivityMultipleChoiceQuestionOptions({
            item,
            answer,
            correctAnswer,
            index
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const selected = index === answer;
            let cls = `option-item `;
            if (index === correctAnswer) cls += `option--correct`;
            if (selected) {
              cls += `${selected && index === correctAnswer ? ` option--corrected` : `option--wrong `}`;
            }
            if (index === answer) cls += ` option--selected`;
            // if (index === correctAnswer) cls += ` option--correct`;
            return React.createElement("div", {
              className: cls
            }, item);
          }
        }
      });

      /************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/index
      ************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/index', {
        hash: 2208732284,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceBody = StudentAssignmentActivityMultipleChoiceBody;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _questions = require("./questions");
          function StudentAssignmentActivityMultipleChoiceBody({
            item
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const activity = store.model.activities.get(item.id);
            return React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("p", null, activity.description), React.createElement("h6", null, texts.activities.multipleChoice.participation.title), React.createElement("div", {
              className: "multiple-choice__container"
            }, React.createElement("h6", null, texts.activities.multipleChoice.participation.detail, ": ", item.counters.correct, "/", item.counters.total), React.createElement(_list.List, {
              className: "multiple-choice__list questions-list",
              items: item.assessment.questions,
              control: _questions.StudentAssignmentActivityMultipleChoiceQuestions
            })));
          }
        }
      });

      /****************************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/multiple-choice/questions
      ****************************************************************************/

      ims.set('./views/assignment/drawer/activity/multiple-choice/questions', {
        hash: 2792998688,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityMultipleChoiceQuestions = StudentAssignmentActivityMultipleChoiceQuestions;
          var React = require("react");
          var _context = require("../../../../context");
          var _list = require("pragmate-ui/list");
          var _answer = require("./answer");
          function StudentAssignmentActivityMultipleChoiceQuestions({
            item,
            user,
            activityId
          }) {
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const specs = {
              answer: item.answer,
              correctAnswer: item.correctAnswer
            };
            return React.createElement("li", {
              className: "multiple-choice__item"
            }, React.createElement("h6", null, item.question), React.createElement(_list.List, {
              className: "multiple-choice__list options-list",
              items: item.options,
              specs: specs,
              control: _answer.StudentAssignmentActivityMultipleChoiceQuestionOptions
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/spoken
      *********************************************************/

      ims.set('./views/assignment/drawer/activity/spoken', {
        hash: 2508063769,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivitySpokenBody = StudentAssignmentActivitySpokenBody;
          var React = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tabs = require("pragmate-ui/tabs");
          /**
           *
           * @param param0  item: ParticipantActivity
           * @returns
           */
          function StudentAssignmentActivitySpokenBody({
            item,
            participant
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const userId = participant.user.id ?? participant.user?.uid;
            const audioUrl = `${_config.default.params.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/tracking/${userId}/audio`;
            const output = item?.objectives?.map(objective => {
              return React.createElement("div", {
                className: "tab-feedback-section",
                key: `${item.id}-${objective.objective}`
              }, React.createElement("div", null, React.createElement("h6", {
                className: "flex-container flex-vertical-center gap-05"
              }, React.createElement(_icons.AppIcon, {
                icon: `points${objective.points}`
              }), objective.name)), React.createElement("div", null, React.createElement("span", null, objective.feedback)));
            });
            const tabs = [React.createElement(_tabs.Tab, {
              key: "feedback"
            }, texts.activities.spoken.feedback)];
            if (item.transcription) tabs.push(React.createElement(_tabs.Tab, {
              key: "transcription"
            }, texts.activities.spoken.transcription));
            return React.createElement("div", null, React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("h5", null, texts.activities.spoken.audio), React.createElement(_ui.AudioPlayer, {
              url: audioUrl
            })), React.createElement(_tabs.TabsContainer, {
              active: 0,
              className: "drawer-activity__tabs-container"
            }, React.createElement(_tabs.Tabs, {
              className: "drawer__tabs"
            }, tabs), React.createElement(_tabs.Panes, null, React.createElement("div", {
              className: "activity-data-section-list"
            }, output), React.createElement("div", {
              className: "activity-data__content"
            }, React.createElement("p", null, item.transcription)))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/assignment/drawer/chat-tab
      **************************************************/

      ims.set('./views/assignment/drawer/chat-tab', {
        hash: 3094267707,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./activity/chat/empty");
          //@ts-ignore

          function StudentAssignmentActivityChatTab({
            item: {
              chat,
              participantActivity
            },
            tracking
          }) {
            const ref = React.useRef(null);
            React.useEffect(() => {
              if (!ref.current) return;
              ref.current.addEventListener('scroll', event => {
                event.stopPropagation();
                event.preventDefault();
              });
            }, [ref.current]);
            if (!chat?.messages.items.length) {
              return React.createElement("div", {
                className: "chat-tab",
                ref: ref
              }, React.createElement(_empty.EmptyChat, null));
            }
            return React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              model: chat,
              id: chat?.id,
              empty: _empty.EmptyChat,
              icon: "/assets/rvd/profile-blue.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null)));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/confirm-action
      ********************************************************/

      ims.set('./views/assignment/drawer/confirm-action', {
        hash: 2473476240,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmAction = ConfirmAction;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          function ConfirmAction({
            callback
          }) {
            const [open, setOpen] = _react.default.useState(false);
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const toggleOpen = () => setOpen(!open);
            const onClickButton = event => {
              event.stopPropagation();
              toggleOpen();
            };
            const onConfirm = async () => {
              await callback();
              toggleOpen();
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              className: "btn-credits",
              variant: "primary",
              onClick: onClickButton
            }, texts.addCredits.action), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/drawer/drawer-chat
      *****************************************************/

      ims.set('./views/assignment/drawer/drawer-chat', {
        hash: 1053962794,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerChat = StudentDrawerChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          var _chatTab = require("./chat-tab");
          var _header = require("./header");
          var _context = require("../../context");
          function StudentDrawerChat({
            item
          }) {
            const {
              tracking,
              participantActivity,
              chat
            } = item;
            const {
              showDrawer,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [ready, setReady] = React.useState(participantActivity.chatModel.ready);
            const [fetching, setFetching] = React.useState(false);
            const ref = React.useRef(null);
            (0, _hooks.useBinder)([participantActivity.chatModel], () => {
              setReady(participantActivity.chatModel.ready);
            });
            if (!participantActivity.chatModel.ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            const onBack = () => {
              setShowDrawer({
                show: true,
                view: 'student',
                data: showDrawer.data
              });
            };
            const onRefresh = async () => {
              try {
                setFetching(true);
                await chat.load();
                const list = ref.current.querySelector('.messages__list');
                if (list) list.scrollIntoView({
                  behavior: 'smooth',
                  block: 'end'
                });
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls,
              ref: ref
            }, React.createElement(_header.StudentDrawerHeader, {
              onRefresh: onRefresh,
              item: item,
              showActivity: true,
              onBack: onBack
            }), React.createElement(_chatTab.StudentAssignmentActivityChatTab, {
              item: item,
              tracking: tracking
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/empty
      ***********************************************/

      ims.set('./views/assignment/drawer/empty', {
        hash: 3745556353,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyCard = EmptyCard;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          /*bundle */
          function EmptyCard({
            text,
            className
          }) {
            const cls = `empty-section__container${className ? ` ${className}` : ''}`;
            return _react.default.createElement(_empty.Empty, {
              className: cls
            }, _react.default.createElement("p", null, text));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/assignment/drawer/header
      ************************************************/

      ims.set('./views/assignment/drawer/header', {
        hash: 3754759207,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerHeader = StudentDrawerHeader;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../../context");
          var _toast = require("pragmate-ui/toast");
          var _components = require("pragmate-ui/components");
          function StudentDrawerHeader(props) {
            const {
              onRefresh,
              item,
              showCredits = false,
              showActivity = false,
              onBack
            } = props;
            const {
              participant,
              participantActivity
            } = item;
            const [processing, setProcessing] = React.useState(false);
            const activity = participantActivity?.activity;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            globalThis.p = participant;
            (0, _hooks.useBinder)([participant], () => {
              setCredits(participant.credits.getProperties());
            });
            const onClick = async () => {
              try {
                setProcessing(true);
                await participant.enableAI();
                _toast.toast.success(texts.enableAI.success);
                setProcessing(false);
              } catch (e) {
                console.error(e);
              }
            };
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), showCredits ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, credits.total ? React.createElement(React.Fragment, null, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : React.createElement(React.Fragment, null, texts.enableAI.noEnable)) : null, showActivity && activity ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, activity.title) : null), React.createElement("div", {
              className: "drawer__header-actions"
            }, showCredits && credits.total && credits.total === credits.consumed ? React.createElement(_components.Button, {
              fetching: processing,
              disabled: processing,
              variant: "primary",
              onClick: onClick
            }, texts.enableAI.action) : null, !!onBack && React.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: onBack
            }), React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/assignment/drawer/index
      ***********************************************/

      ims.set('./views/assignment/drawer/index', {
        hash: 1121075861,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          var _empty = require("./empty");
          var _header = require("./header");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          function StudentAssignmentSummary(props) {
            const {
              item
            } = props;
            const {
              participant,
              tracking,
              activity,
              activitySelected
            } = item;
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [items, setItems] = React.useState(participant.activities.items);
            const [fetching, setFetching] = React.useState(false);
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            const [ready, setReady] = React.useState(participant.ready);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const activityId = activity?.id;
            const onRefresh = async () => {
              setFetching(true);
              await item.participant.load();
              setTimeout(() => {
                setItems([...participant.activities.items]);
                setFetching(false);
              }, 1000);
            };
            (0, _hooks.useBinder)([participant], () => {
              setReady(participant.ready);
              setItems([...participant.activities.items]);
              setCredits(participant.credits.getProperties());
            });
            if (!ready) return React.createElement(_headerSkeleton.DrawerSkeleton, {
              item: item
            });
            return React.createElement(React.Fragment, null, React.createElement("div", {
              className: cls
            }, React.createElement(_header.StudentDrawerHeader, {
              item: item,
              showCredits: true,
              onRefresh: onRefresh
            }), React.createElement("section", {
              className: "ds-drawer__content"
            }, items.length ? React.createElement(_list.List, {
              className: "assignment-activity-list",
              items: store.model.activities.items,
              specs: {
                user: student,
                tracking,
                activityId,
                participant,
                activitySelected
              },
              control: _activity.StudentAssignmentActivity
            }) : React.createElement(_empty.EmptyCard, {
              text: texts.assignment.empty.title
            }))));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/assignment/general
      ******************************************/

      ims.set('./views/assignment/general', {
        hash: 30264229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GeneralView = GeneralView;
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../context");
          var _item = require("./item");
          /*bundle*/
          function GeneralView() {
            const {
              store
            } = (0, _context.useDashboardContext)();
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "dashboard__list"
            }, _react.default.createElement(_list.List, {
              className: "list-unstyled users__list",
              items: store.participants,
              control: _item.Item
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/chat
      *****************************************************/

      ims.set('./views/assignment/item/activity/chat', {
        hash: 1342881986,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityChat = ModuleActivityChat;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _status = require("./status");
          function ModuleActivityChat({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const data = participant.activities[activity.id]?.data;
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, activity.data.counters.correct, " /", activity.data.counters.total));
            }
            const onClick = async event => {
              event.stopPropagation();
              event.preventDefault();
              await store.loadUserTracking(participant.user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement(_status.ModuleActivityStatus, {
              item: activity,
              participant: participant
            }))));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/details
      ********************************************************/

      ims.set('./views/assignment/item/activity/details', {
        hash: 3912473552,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityDetails = ModuleActivityDetails;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _status = require("./status");
          function ModuleActivityDetails({
            item
          }) {
            const {
              activity,
              participant
            } = item;
            const participantActivity = participant.activities.get(activity.id);
            const output = [];
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && data.data) {
              output.push(_react.default.createElement("span", null, item.data.counters.correct, " /", item.data.counters.total));
            }
            return _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", {
              className: "flex-container flex-vertical-center gap-05"
            }, participantActivity?.alerts?.length ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null), _react.default.createElement(_status.ModuleActivityStatus, {
              item: item,
              participant: participant
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/index
      ******************************************************/

      ims.set('./views/assignment/item/activity/index', {
        hash: 3795714024,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _chat = require("./chat");
          var _spoken = require("./spoken");
          var _multipleChoice = require("./multiple-choice");
          function ModuleActivity({
            item: activity,
            participant
          }) {
            const type = ['content-theory', 'debate', 'character-talk'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ModuleActivityChat, {
                  activity: activity,
                  participant: participant
                }),
                spoken: _react.default.createElement(_spoken.ModuleActivitySpoken, {
                  activity: activity,
                  participant: participant
                }),
                'multiple-choice': _react.default.createElement(_multipleChoice.ModuleActivityMultipleChoice, {
                  activity: activity,
                  participant: participant
                })
              }
            });
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/label
      ******************************************************/

      ims.set('./views/assignment/item/activity/label', {
        hash: 529886888,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMessages = ModuleActivityMessages;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          function ModuleActivityMessages({
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const hasParticipated = participant.activities.has(activity.id);
            const participantActivity = participant.activities.get(activity.id);
            let type = 'warning';
            let label = texts.activities.status.pending;
            if (hasParticipated) {
              type = 'success';
              label = texts.activities.status.done;
            }
            if (['content-theory', 'debate', 'character-talk'].includes(activity.type)) {
              if (participantActivity?.interactions) {
                label = `${participantActivity?.interactions.count} ${texts.activities.interactions}`;
              } else {
                const totalMessages = participantActivity?.messages?.count ?? 0;
                label = `${totalMessages} ${texts.activities.interactions}`;
              }
            }
            if (activity.type === 'spoken' && item.data) {
              const icons = Object.values(item.data).map(data => data.icon).join('');
              label = icons;
              type = 'default';
            }
            if (activity.type === 'assessment' && activity.subtype === 'multiple-choice' && item.data) {
              const {
                correct,
                total
              } = item.data.counters;
              if (correct < total / 2) type = 'error';
              label = `${correct} / ${total}`;
            }
            if (hasParticipated && participantActivity?.messages) {
              label = `${texts.messageCounter} ${participantActivity?.messages.count}`;
            }
            const hasAlerts = participantActivity?.alerts?.length;
            const cls = `activity-status${hasAlerts ? ' has-alerts' : ''}`;
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement("span", null, label), hasAlerts ? _react.default.createElement(_icons.Icon, {
              icon: "error",
              className: "error-icon"
            }) : null);
          }
        }
      });

      /****************************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/multiple-choice
      ****************************************************************/

      ims.set('./views/assignment/item/activity/multiple-choice', {
        hash: 4236369841,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityMultipleChoice = ModuleActivityMultipleChoice;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          function ModuleActivityMultipleChoice({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  participant,
                  activity
                }
              });
            };
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement("div", null, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            })), _react.default.createElement("div", null, participantActivity?.counters ? _react.default.createElement("div", {
              className: "user-activity__information user-activity__information-multiple-choice"
            }, _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.correct), _react.default.createElement("span", {
              className: "activity-item-divider"
            }, "/"), _react.default.createElement("span", {
              className: "activity-item-counter"
            }, participantActivity.counters.total)) : null))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/spoken
      *******************************************************/

      ims.set('./views/assignment/item/activity/spoken', {
        hash: 604392148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivitySpoken = ModuleActivitySpoken;
          var _react = require("react");
          var _context = require("../../../context");
          var _label = require("./label");
          var _activityIcon = require("../../../components/activity-icon");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _list = require("pragmate-ui/list");
          function ModuleActivitySpoken({
            activity,
            participant
          }) {
            const {
              user
            } = participant;
            const {
              setShowDrawer,
              store
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            const onClick = event => {
              event.stopPropagation();
              event.preventDefault();
              const tracking = store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  activitySelected: activity.id,
                  tracking,
                  participant,
                  activity
                }
              });
            };
            const IconItem = ({
              item: icon
            }) => _react.default.createElement(_icons.AppIcon, {
              icon: `points${icon.points}`
            });
            return _react.default.createElement("li", {
              onClick: onClick,
              key: `${user.id}.${activity.id}`,
              className: "card-student-item"
            }, _react.default.createElement("div", null, _react.default.createElement(_activityIcon.ActivityIcon, {
              type: activity.type
            })), _react.default.createElement("div", {
              className: "activity-title__container-content"
            }, _react.default.createElement("span", {
              className: "activity-title"
            }, activity.title), _react.default.createElement("div", {
              className: "user-activity__information"
            }, _react.default.createElement(_label.ModuleActivityMessages, {
              item: activity,
              participant: participant
            }), _react.default.createElement("div", {
              className: "spoken-icons"
            }, _react.default.createElement(_list.List, {
              items: participantActivity?.objectives,
              control: IconItem
            })))));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/assignment/item/activity/status
      *******************************************************/

      ims.set('./views/assignment/item/activity/status', {
        hash: 2552220279,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityStatus = ModuleActivityStatus;
          var _react = require("react");
          var _objectiveIcon = require("../../../components/objective-icon");
          var _context = require("../../../context");
          function ModuleActivityStatus({
            item,
            participant
          }) {
            const activity = item;
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const participantActivity = participant.activities.get(activity.id);
            if (!participantActivity?.progress?.objectives) return null;
            const icons = participantActivity?.progress?.objectives?.map((item, index) => _react.default.createElement(_objectiveIcon.ActivityObjectiveStatusIcon, {
              key: `${item?.text}-${index}-icon`,
              item: item
            }));
            return _react.default.createElement("div", {
              className: "activity-status__container"
            }, icons);
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/assignment/item/index
      *********************************************/

      ims.set('./views/assignment/item/index', {
        hash: 469158960,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Item = Item;
          var _components = require("pragmate-ui/components");
          var _image = require("pragmate-ui/image");
          var _list = require("pragmate-ui/list");
          var _react = require("react");
          var _context = require("../../context");
          var _activity = require("./activity");
          function Item({
            item
          }) {
            const {
              model,
              store,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const {
              user
            } = item;
            const participantUri = `/assignments/${store.assignmentId}/dashboard/participant/${item.user.id}`;
            const openDrawer = event => {
              event.preventDefault();
              event.stopPropagation();
              store.loadUserTracking(user.id);
              setShowDrawer({
                show: true,
                view: 'student',
                data: {
                  participant: item
                }
              });
              localStorage.setItem('student.details', JSON.stringify(item.user));
              return false;
            };
            return _react.default.createElement("li", {
              className: "dashboard-card card__user"
            }, _react.default.createElement("header", null, _react.default.createElement(_image.Image, {
              src: user?.photoUrl,
              alt: `${user.name}-avatar`,
              className: "avatar__image"
            }), _react.default.createElement(_components.Link, {
              href: participantUri,
              onClick: openDrawer
            }, _react.default.createElement("h5", null, user.name))), _react.default.createElement("div", {
              className: "detail__info"
            }, _react.default.createElement(_list.List, {
              className: "user-activity__data",
              specs: {
                participant: item
              },
              items: model.activities.items,
              control: _activity.ModuleActivity
            })));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/components/activity-icon
      ************************************************/

      ims.set('./views/components/activity-icon', {
        hash: 1185574957,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityIcon = ActivityIcon;
          var React = require("react");
          var _iconBox = require("./icon-box");
          /*bundle*/
          function ActivityIcon({
            type,
            className
          }) {
            const cls = `icon-box-container activity--${type} pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement(_iconBox.IconBox, {
              name: type
            }));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/index
      ******************************************************/

      ims.set('./views/components/drawer-alerts/index', {
        hash: 3059207640,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlert = DrawerAlert;
          var React = require("react");
          var _list = require("pragmate-ui/list");
          var _item = require("./item");
          var _context = require("../../context");
          /*bundle*/
          function DrawerAlert({
            alerts,
            user
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            if (!alerts?.length) return null;
            return React.createElement(React.Fragment, null, React.createElement(_list.List, {
              as: "div",
              className: "mt-15 ds-drawer__list",
              items: alerts,
              control: _item.DrawerAlertItem,
              specs: {
                user
              }
            }));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/components/drawer-alerts/item
      *****************************************************/

      ims.set('./views/components/drawer-alerts/item', {
        hash: 2489938494,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerAlertItem = DrawerAlertItem;
          var React = require("react");
          var _markdown = require("@aimpact/chat-sdk/widgets/markdown");
          var _collapsible = require("pragmate-ui/collapsible");
          var _context = require("../../context");
          /*bundle*/
          function DrawerAlertItem({
            item,
            user
          }) {
            const ref = React.useRef(null);
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const [open, setOpen] = React.useState(false);
            const cls = `ds-drawer__activity-item ${open ? 'is-open' : ''}`;
            const onToggle = () => {
              setOpen(!open);
              return true;
            };
            return React.createElement("article", {
              className: cls,
              ref: ref
            }, React.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, React.createElement(_collapsible.CollapsibleHeader, null, React.createElement("span", null, item.text)), React.createElement(_collapsible.CollapsibleContent, null, React.createElement("div", {
              className: "alert-item"
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, "RVD AI"), React.createElement(_markdown.Markdown, {
              content: item.iteration.assistant
            })) : React.createElement(React.Fragment, null, texts?.noMessages), React.createElement("h6", null, user.name), React.createElement(_markdown.Markdown, {
              content: item.iteration.student
            })))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/empty
      ****************************************/

      ims.set('./views/components/empty', {
        hash: 7042573,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _config = require("@aimpact/ailearn-app/config");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          var _actions = require("../actions");
          var _header = require("../header");
          const APP = _config.default?.params?.APP_NAME ?? 'RVD AI';
          function Empty({
            store,
            texts
          }) {
            const value = {
              texts,
              model: store.model,
              store
            };
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_empty.Empty, {
              className: "empty-section__container",
              icon: _icons.ICONS.classworks
            }, _react.default.createElement("h3", {
              className: "title"
            }, store.model.module.title), _react.default.createElement("p", null, texts.empty))));
          }
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/components/icon-box
      *******************************************/

      ims.set('./views/components/icon-box', {
        hash: 2839980169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.IconBox = IconBox;
          var React = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function IconBox({
            name,
            className
          }) {
            const cls = `pui-box-icon${className ? ` ${className}` : ''}`;
            return React.createElement(_icons.AppIcon, {
              icon: name,
              className: cls
            });
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/components/objective-icon
      *************************************************/

      ims.set('./views/components/objective-icon', {
        hash: 3125430000,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityObjectiveStatusIcon = ActivityObjectiveStatusIcon;
          var _react = require("react");
          var _tooltip = require("pragmate-ui/tooltip");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          function ActivityObjectiveStatusIcon({
            item
          }) {
            const {
              texts
            } = (0, _context.useDashboardContext)();
            const iconNames = {
              'in-progress': 'activityInProgress',
              pending: 'activityPending',
              completed: 'activityCompleted',
              outstanding: 'activityOutstanding'
            };
            const status = ['undefined', 'string'].includes(typeof item.status) ? item.status : item.status.text;
            return _react.default.createElement(_tooltip.Tooltip, {
              content: `${item.name}: ${texts.activities.objectivesStatus[status]}`,
              key: `${item.name}.${status}`
            }, _react.default.createElement(_icons.AppIcon, {
              icon: iconNames[status],
              className: `activity-status__icon icon-${status}`
            }));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 613289894,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useDrawerContext = exports.useDashboardContext = exports.DrawerContext = exports.DashboardContext = void 0;
          var _react = require("react");
          const DashboardContext = exports.DashboardContext = _react.default.createContext({});
          const useDashboardContext = () => _react.default.useContext(DashboardContext);
          exports.useDashboardContext = useDashboardContext;
          const DrawerContext = exports.DrawerContext = _react.default.createContext({});
          const useDrawerContext = () => _react.default.useContext(DrawerContext);
          exports.useDrawerContext = useDrawerContext;
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/drawer/content
      **************************************/

      ims.set('./views/drawer/content', {
        hash: 4248281599,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          function Wall({
            item
          }) {
            const {
              user: student
            } = item;
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, student.name), React.createElement("div", null, React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/drawer/header-skeleton
      **********************************************/

      ims.set('./views/drawer/header-skeleton', {
        hash: 3380651438,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DrawerSkeleton = DrawerSkeleton;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          function DrawerSkeleton({
            item
          }) {
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, item?.participant?.user?.name ? React.createElement(React.Fragment, null, item.participant.user.name) : React.createElement(_ui.SkeletonText, {
              height: "8px",
              width: "100px"
            })), React.createElement("div", {
              className: "drawer__header__subtext"
            }, React.createElement(_ui.SkeletonText, {
              height: "11px",
              width: "100px",
              color: "#fff"
            }))), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              disabled: true
            }), React.createElement(Drawer.CloseButton, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/drawer/index
      ************************************/

      ims.set('./views/drawer/index', {
        hash: 3992566147,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AsideDrawer = AsideDrawer;
          var _react = require("react");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _drawer = require("pragmate-ui/drawer");
          var _modal = require("pragmate-ui/modal");
          var _drawer2 = require("../assignment/drawer");
          var _drawerChat = require("../assignment/drawer/drawer-chat");
          var _context = require("../context");
          var _wall = require("./wall");
          function AsideDrawer() {
            const {
              texts,
              showDrawer,
              store,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [open, setOpen] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            _react.default.useEffect(() => {
              if (!showDrawer?.view) {
                _routing.routing.replaceState({}, null, `?`);
                return;
              }
              _routing.routing.pushState(`?drawer=${showDrawer.view}`);
            }, [showDrawer.view]);
            _react.default.useEffect(() => {
              if (showDrawer?.show) globalThis.document.querySelector('html').style.overflow = 'hidden';else globalThis.document.querySelector('html').style.overflow = 'auto';
            }, [showDrawer?.show]);
            if (showDrawer.show === false) return;
            const toggleOpen = () => setOpen(!open);
            const addCredits = async () => {
              try {
                // setFetching(true);
                await store.model.addCredits(showDrawer.data.tracking);
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                // setFetching(false);
              }
            };
            const onConfirm = async () => {
              await addCredits();
              toggleOpen();
            };
            const cls = `ds-drawer ${fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_drawer.Drawer, {
              className: cls,
              position: "right",
              open: showDrawer.show,
              onClose: () => setShowDrawer({
                show: false
              })
            }, _react.default.createElement(_components.ConditionalContainer, {
              condition: showDrawer.view,
              options: {
                wall: _react.default.createElement(_wall.Wall, {
                  item: showDrawer.data
                }),
                'student-activity': _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data
                }),
                'student-chat': _react.default.createElement(_drawerChat.StudentDrawerChat, {
                  item: showDrawer.data
                }),
                student: _react.default.createElement(_drawer2.StudentAssignmentSummary, {
                  item: showDrawer.data
                })
              }
            })), open && _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              onConfirm: onConfirm,
              onCancel: toggleOpen
            }, _react.default.createElement("div", {
              className: "modal-overlay",
              onClick: toggleOpen
            }), _react.default.createElement("div", {
              className: "modal-content"
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/drawer/wall
      ***********************************/

      ims.set('./views/drawer/wall', {
        hash: 2870889056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var _context = require("../context");
          var _widget = require("@aimpact/ailearn-app/dashboard/wall/widget.widget");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDrawerContext)();
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            const onRefresh = async event => {
              try {
                setFetching(true);
                event.stopPropagation();
                await store.wall.load();
                setFetching(false);
              } catch (e) {
                console.error(e);
              }
            };
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, "Wall"), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(_icons.IconButton, {
              icon: "refresh",
              className: "circle refresh-icon",
              onClick: onRefresh
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement(_widget.WallView, {
              store: store.wall,
              texts: store.texts.wall
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/global
      ******************************/

      ims.set('./views/global', {
        hash: 185675526,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/header/activity-filter
      **********************************************/

      ims.set('./views/header/activity-filter', {
        hash: 4263261696,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityFilter = ActivityFilter;
          var _react = require("react");
          var _context = require("../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _tooltip = require("pragmate-ui/tooltip");
          function ActivityFilter({
            item
          }) {
            const {
              store
            } = (0, _context.useDashboardContext)();
            const icon = _icons2.ICONS[item.type];
            let cls = `activity-type__icon activity--${item.type}`;
            if (store.activitySelected?.type === item.type) cls += ' active';
            const title = item.title;
            const handleClick = event => store.selectActivity(item);
            return _react.default.createElement(_tooltip.Tooltip, {
              content: title
            }, _react.default.createElement("section", {
              className: cls,
              onClick: handleClick
            }, _react.default.createElement(_icons.Icon, {
              icon: icon
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 645467053,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _routing = require("@beyond-js/kernel/routing");
          var _collapsible = require("pragmate-ui/collapsible");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("../context");
          var _userData = require("./user-data");
          function Header() {
            const {
              model,
              texts
            } = (0, _context.useDashboardContext)();
            const {
              title,
              description,
              picture,
              creator,
              owner
            } = model.module;
            const onClassroomClick = event => {
              event.stopPropagation();
              event.preventDefault();
              _routing.routing.pushState(`/classrooms/view/${model.classroom.id}`);
            };
            return _react.default.createElement(_collapsible.CollapsibleContainer, {
              className: "page__header-container"
            }, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "dashboard-header"
            }, _react.default.createElement(_ui.EntityImage, {
              entity: "module",
              src: picture,
              alt: title
            }), _react.default.createElement("div", null, _react.default.createElement(_components.Link, {
              href: `/assignments/${model.id}`
            }, _react.default.createElement("h1", null, title)), _react.default.createElement("div", {
              className: "dashboard-header__data"
            }, _react.default.createElement("div", null, _react.default.createElement("div", {
              className: "dashboard-header__classroom",
              onClick: onClassroomClick
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "classroom"
            }), _react.default.createElement("span", {
              className: "assignment-classroom"
            }, model.classroom.name)), _react.default.createElement("div", {
              className: "users-data__container"
            }, creator && _react.default.createElement(_userData.UserData, {
              data: creator,
              label: texts.creator
            }), owner && _react.default.createElement(_userData.UserData, {
              data: owner,
              label: texts.owner
            }))))))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", {
              className: "dashboard-content"
            }, _react.default.createElement("section", {
              className: "main-content"
            }, _react.default.createElement("p", {
              className: "p1 hidden-xs"
            }, description)), _react.default.createElement("div", {
              className: "actions"
            }))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/header/student-header
      *********************************************/

      ims.set('./views/header/student-header', {
        hash: 2433802419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentsHeader = StudentsHeader;
          var _react = require("react");
          var _context = require("../context");
          var _form = require("pragmate-ui/form");
          var _list = require("pragmate-ui/list");
          var _activityFilter = require("./activity-filter");
          function StudentsHeader() {
            const {
              model,
              texts,
              store
            } = (0, _context.useDashboardContext)();
            const listCls = `activity-types__list${store.activitySelected ? ' activity-selected' : ''}`;
            const [refreshing, setRefreshing] = _react.default.useState(false);
            const onFilter = event => {
              store.filter(event.currentTarget.value);
            };
            return _react.default.createElement("header", {
              className: "dashboard-students__header"
            }, _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("section", null, _react.default.createElement(_form.Input, {
              onChange: onFilter,
              type: "text",
              className: "header__search",
              placeholder: texts.list.search,
              icon: "search"
            }))), _react.default.createElement("div", {
              className: "ds-students-header__col"
            }, _react.default.createElement("h6", null, texts.studentHeader.filter), _react.default.createElement(_list.List, {
              className: listCls,
              items: model.activities.items,
              control: _activityFilter.ActivityFilter
            })));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/header/user-data
      ****************************************/

      ims.set('./views/header/user-data', {
        hash: 2332352996,
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
              src: `${photoUrl}`
            }), React.createElement("span", {
              className: "user-data__name"
            }, name)));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3588107571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _react = require("react");
          var _ = require("./404");
          var _empty = require("./components/empty");
          var _context = require("./context");
          var _drawer = require("./drawer");
          var _header = require("./header");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _actions = require("./actions");
          var _view = require("./activities/view");
          var _general = require("./assignment/general");
          var _studentHeader = require("./header/student-header");
          /*bundle*/
          function View({
            store
          }) {
            const [showDrawer, setShowDrawer] = (0, _react.useState)({
              show: false,
              data: null
            });
            const [state, setState] = (0, _react.useState)(store.getProperties());
            const {
              texts
            } = store;
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => {
              setState(store.state);
            }, ['change', 'data.updated', 'fetching.changed']);
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
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
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer,
              view: store.view,
              setView: view => store.view = view
            };
            const drawerValue = {
              texts,
              model: store.model,
              showDrawer,
              store,
              setShowDrawer
            };
            const cls = `dashboard-container${state.fetching ? ' is-fetching' : ''}`;
            return _react.default.createElement("div", {
              ref: ref
            }, store.model.archived ? _react.default.createElement("div", {
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_icons.AppIcon, {
              icon: "info"
            }), texts.archived) : null, _react.default.createElement(_ui.PageContainer, {
              className: cls
            }, _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_actions.DashboardActions, null), _react.default.createElement(_header.Header, null), _react.default.createElement(_studentHeader.StudentsHeader, null), _react.default.createElement(_components.ConditionalContainer, {
              condition: store.view,
              options: {
                general: _react.default.createElement(_general.GeneralView, null),
                activity: _react.default.createElement(_view.ActivityView, null)
              }
            })), _react.default.createElement(_context.DrawerContext.Provider, {
              value: drawerValue
            }, _react.default.createElement(_drawer.AsideDrawer, null))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/activities/view/index",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/activities/view/participant/chat",
        "from": "ChatActivityParticipant",
        "name": "ChatActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/multiple-choice",
        "from": "MultipleChoiceActivityParticipant",
        "name": "MultipleChoiceActivityParticipant"
      }, {
        "im": "./views/activities/view/participant/spoken",
        "from": "SpokenActivityParticipant",
        "name": "SpokenActivityParticipant"
      }, {
        "im": "./views/assignment/drawer/empty",
        "from": "EmptyCard",
        "name": "EmptyCard"
      }, {
        "im": "./views/assignment/general",
        "from": "GeneralView",
        "name": "GeneralView"
      }, {
        "im": "./views/components/activity-icon",
        "from": "ActivityIcon",
        "name": "ActivityIcon"
      }, {
        "im": "./views/components/drawer-alerts/index",
        "from": "DrawerAlert",
        "name": "DrawerAlert"
      }, {
        "im": "./views/components/drawer-alerts/item",
        "from": "DrawerAlertItem",
        "name": "DrawerAlertItem"
      }, {
        "im": "./views/components/icon-box",
        "from": "IconBox",
        "name": "IconBox"
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
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/activities/view/index').ActivityView : value);
        (require || prop === 'ChatActivityParticipant') && _export("ChatActivityParticipant", ChatActivityParticipant = require ? require('./views/activities/view/participant/chat').ChatActivityParticipant : value);
        (require || prop === 'MultipleChoiceActivityParticipant') && _export("MultipleChoiceActivityParticipant", MultipleChoiceActivityParticipant = require ? require('./views/activities/view/participant/multiple-choice').MultipleChoiceActivityParticipant : value);
        (require || prop === 'SpokenActivityParticipant') && _export("SpokenActivityParticipant", SpokenActivityParticipant = require ? require('./views/activities/view/participant/spoken').SpokenActivityParticipant : value);
        (require || prop === 'EmptyCard') && _export("EmptyCard", EmptyCard = require ? require('./views/assignment/drawer/empty').EmptyCard : value);
        (require || prop === 'GeneralView') && _export("GeneralView", GeneralView = require ? require('./views/assignment/general').GeneralView : value);
        (require || prop === 'ActivityIcon') && _export("ActivityIcon", ActivityIcon = require ? require('./views/components/activity-icon').ActivityIcon : value);
        (require || prop === 'DrawerAlert') && _export("DrawerAlert", DrawerAlert = require ? require('./views/components/drawer-alerts/index').DrawerAlert : value);
        (require || prop === 'DrawerAlertItem') && _export("DrawerAlertItem", DrawerAlertItem = require ? require('./views/components/drawer-alerts/item').DrawerAlertItem : value);
        (require || prop === 'IconBox') && _export("IconBox", IconBox = require ? require('./views/components/icon-box').IconBox : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImlkIiwiRXJyb3IiLCJUcmFja2luZ0Rhc2hib2FyZCIsIldhbGxTdG9yZSIsIlByb21pc2UiLCJhbGwiLCJzZXR1cExheW91dCIsImVycm9yIiwiY29uc29sZSIsInJlZnJlc2giLCJzZXQiLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJwYXJ0aWNpcGFudCIsIm1hcCIsImUiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIkRhc2hib2FyZFdhbGwiLCJtZXNzYWdlcyIsImxvZyIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsImRlc2NyaXB0aW9uIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9wcyIsImFjdGl2aXR5SWQiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwidGFiIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfY29uZmlnIiwidWlkIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIm9uUmVmcmVzaCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfcm91dGluZyIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0U3RhdGUiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJkcmF3ZXJWYWx1ZSIsImdlbmVyYWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2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LEdBQUcsc0JBQXNCdkosS0FBSyxDQUFDRyxRQUFRLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUV4RSxPQUNDZ0QsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUE7Y0FBS29ILEdBQUcsRUFBRUE7WUFBRyxHQUNYOU4sS0FBSyxDQUFDNEIsS0FBSyxDQUFDNkYsUUFBUSxHQUNwQm5CLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBO2NBQUtpQixTQUFTLEVBQUM7WUFBb0QsR0FDbEVyQixNQUFBLENBQUFHLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK0IsTUFBQSxDQUFBMEUsT0FBTztjQUFDcEYsSUFBSSxFQUFDO1lBQU0sRUFBRyxFQUN0QmhHLEtBQUssQ0FBQzBGLFFBQVEsQ0FDVixHQUNILElBQUksRUFDUm5CLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN3QixHQUFBLENBQUFzUSxhQUFhO2NBQUM3USxTQUFTLEVBQUUrRTtZQUFHLEdBQzVCcEcsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csUUFBQSxDQUFBeVIsZ0JBQWdCLENBQUNDLFFBQVE7Y0FBQ2hXLEtBQUssRUFBRUE7WUFBSyxHQUN0QytELE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUN5UixRQUFBLENBQUFwUixnQkFBZ0IsT0FBRyxFQUNwQlQsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dOLE9BQUEsQ0FBQStFLE1BQU0sT0FBRyxFQUNWblMsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21WLGNBQUEsQ0FBQWQsY0FBYyxPQUFHLEVBQ2xCelUsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0UsV0FBQSxDQUFBeUMsb0JBQW9CO2NBQ3BCQyxTQUFTLEVBQUV0SixLQUFLLENBQUN1RCxJQUFJO2NBQ3JCaUcsT0FBTyxFQUFFO2dCQUNSMFMsT0FBTyxFQUFFNVYsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tWLFFBQUEsQ0FBQWxHLFdBQVcsT0FBRztnQkFDeEJsUSxRQUFRLEVBQUVjLE1BQUEsQ0FBQUcsT0FBQSxDQUFBQyxhQUFBLENBQUNpVixLQUFBLENBQUE5UyxZQUFZOztZQUN2QixFQUNBLENBQ3lCLEVBQzVCdkMsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csUUFBQSxDQUFBZ1MsYUFBYSxDQUFDTixRQUFRO2NBQUNoVyxLQUFLLEVBQUUwWjtZQUFXLEdBQ3pDM1YsTUFBQSxDQUFBRyxPQUFBLENBQUFDLGFBQUEsQ0FBQzBTLE9BQUEsQ0FBQUcsV0FBVyxPQUFHLENBQ1MsQ0FDVixDQUNYO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=