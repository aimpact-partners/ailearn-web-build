System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.4.2/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.2/dashboard/wall/widget.code", "pragmate-ui@1.0.0-beta.7/form", "@aimpact/ailearn-app@0.4.2/components/hooks"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, dependency_33, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsWidgets112Render) {
      dependency_0 = _beyondJsWidgets112Render;
    }, function (_beyondJsKernel0112Bundle) {
      dependency_1 = _beyondJsKernel0112Bundle;
    }, function (_beyondJsKernel0112Styles) {
      dependency_2 = _beyondJsKernel0112Styles;
    }, function (_beyondJsReact18Widgets114Page) {
      dependency_3 = _beyondJsReact18Widgets114Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnApp042DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp042DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive205Model) {
      dependency_7 = _beyondJsReactive205Model;
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
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_13 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042Config) {
      dependency_14 = _aimpactAilearnApp042Config;
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
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_22 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_25 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_26 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_27 = _pragmateUi100Beta7Drawer;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_28 = _pragmateUi100Beta7Toast;
    }, function (_lodash) {
      dependency_29 = _lodash;
    }, function (_beyondJsKernel0112Routing) {
      dependency_30 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp042DashboardWallWidgetCode) {
      dependency_31 = _aimpactAilearnApp042DashboardWallWidgetCode;
    }, function (_pragmateUi100Beta7Form) {
      dependency_32 = _pragmateUi100Beta7Form;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_33 = _aimpactAilearnApp042ComponentsHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.4.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.4.2/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@aimpact/ailearn-app/model/wrapper', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/drawer', dependency_27], ['pragmate-ui/toast', dependency_28], ['lodash', dependency_29], ['@beyond-js/kernel/routing', dependency_30], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_31], ['pragmate-ui/form', dependency_32], ['@aimpact/ailearn-app/components/hooks', dependency_33]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.4.2/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.4.2/dashboard/assignments.widget');
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
        hash: 550217179,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _dashboardLayout = require("@aimpact/ailearn-app/dashboard-layout.widget");
          var _tracking = require("@aimpact/ailearn-sdk/tracking");
          var _model = require("@beyond-js/reactive/model");
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
                totalParticipants: this.model?.participants?.items?.length ?? 0,
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
              _dashboardLayout.LayoutBroker.set({
                refresh: this.refresh,
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
              super.ready = false;
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
        hash: 4037091516,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WallStore = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
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
        hash: 235465944,
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
          function DashboardActions({
            disabled
          }) {
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
              disabled: disabled,
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
        hash: 760192626,
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
              icon: "/assets/images/chat/profile.png"
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
        hash: 2895009446,
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
              if (!open || !ref.current) return;
              ref.current?.classList.toggle('activity-item--opened');
              const drawerContent = ref.current.closest('.ds-drawer__content');
              if (!drawerContent) return;
              // Get the bounding rectangle of the target element
              const elementRect = ref.current.getBoundingClientRect();
              // Check if the element is fully visible in the viewport
              const isFullyVisible = elementRect.top >= 0 && elementRect.bottom <= window.innerHeight;
              if (!isFullyVisible) {
                // Scroll the element into view with smooth behavior and align to the top
                ref.current.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
              // Toggle the 'activity-item--opened' class after a brief delay
              const timeoutId = setTimeout(() => {
                ref.current?.classList.toggle('activity-item--opened');
              }, 1000);
              // Clean up the timeout if the component unmounts before the delay
              return () => clearTimeout(timeoutId);
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
        hash: 3886492136,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivitySpokenBody = StudentAssignmentActivitySpokenBody;
          var React = require("react");
          var _context = require("../../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            const audioUrl = `${_wrapper.settings.apis.ailearn}/assignments/${store.model.id}/activities/${item.id}/progress/${userId}/audio`;
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
        hash: 684170327,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentActivityChatTab = StudentAssignmentActivityChatTab;
          var React = require("react");
          var _chatComponent = require("@aimpact/chat-sdk/chat-component.code");
          var _empty = require("./activity/chat/empty");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return React.createElement(_ui.AnimatedContainer, null, React.createElement("div", {
              className: "chat-tab",
              ref: ref
            }, React.createElement(_chatComponent.AgentsChatContainer, {
              model: chat,
              id: chat?.id,
              empty: _empty.EmptyChat,
              icon: "/assets/images/chat/profile.png"
            }, React.createElement(_chatComponent.AgentsChatPanel, null))));
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
        hash: 4257482350,
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
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return React.createElement(_ui.AnimatedContainer, null, React.createElement("div", {
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
        hash: 3481427938,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivityChat = ModuleActivityChat;
          var _react = require("react");
          var _activityIcon = require("../../../components/activity-icon");
          var _context = require("../../../context");
          var _label = require("./label");
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
        hash: 2163827722,
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
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
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
            }, item.iteration.assistant ? React.createElement(React.Fragment, null, React.createElement("h6", null, _wrapper.settings.APP_NAME), React.createElement(_markdown.Markdown, {
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
        hash: 3283084933,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Empty = Empty;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _empty = require("pragmate-ui/empty");
          var _actions = require("../actions");
          var _header = require("../header");
          function Empty({
            store,
            setShowDrawer,
            texts
          }) {
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer
            };
            return _react.default.createElement(_context.DashboardContext.Provider, {
              value: value
            }, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement(_actions.DashboardActions, {
              disabled: true
            }), _react.default.createElement(_header.Header, null), _react.default.createElement(_empty.Empty, {
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
        hash: 114703880,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var _widget = require("@aimpact/ailearn-app/dashboard/wall/widget.code");
          var Drawer = require("pragmate-ui/drawer");
          var _icons = require("pragmate-ui/icons");
          var React = require("react");
          var _context = require("../context");
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
        hash: 1727906844,
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
            if (store.activitySelected?.id === item.id) cls += ' active';
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
        hash: 486075067,
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
        hash: 3094861245,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _studentHeader = require("./header/student-header");
          /*bundle*/
          function View({
            store
          }) {
            const [showDrawer, setShowDrawer] = (0, _react.useState)({
              show: false,
              data: null
            });
            (0, _hooks.useStore)(store, ['change', 'data.updated', 'fetching.changed']);
            const {
              state
            } = store;
            const {
              texts
            } = store;
            const ref = _react.default.useRef(null);
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer,
              view: store.view,
              setView: view => store.view = view
            };
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts,
              setShowDrawer: setShowDrawer
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImlkIiwiRXJyb3IiLCJUcmFja2luZ0Rhc2hib2FyZCIsIldhbGxTdG9yZSIsIlByb21pc2UiLCJhbGwiLCJzZXR1cExheW91dCIsImVycm9yIiwiY29uc29sZSIsInNldCIsInJlZnJlc2giLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJwYXJ0aWNpcGFudCIsIm1hcCIsImUiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIkRhc2hib2FyZFdhbGwiLCJtZXNzYWdlcyIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsImRpc2FibGVkIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwib25DbGljayIsInVzZUJpbmRlciIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsImRlc2NyaXB0aW9uIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9wcyIsImFjdGl2aXR5SWQiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwidGFiIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZHJhd2VyQ29udGVudCIsImNsb3Nlc3QiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzRnVsbHlWaXNpYmxlIiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJJQ09OUyIsInR5cGVzIiwiZGViYXRlIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlTcG9rZW5Cb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25PcHRpb25zIiwiYW5zd2VyIiwiY29ycmVjdEFuc3dlciIsInNlbGVjdGVkIiwiX3F1ZXN0aW9ucyIsInBhcnRpY2lwYXRpb24iLCJkZXRhaWwiLCJhc3Nlc3NtZW50IiwicXVlc3Rpb25zIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU11bHRpcGxlQ2hvaWNlUXVlc3Rpb25zIiwiX2Fuc3dlciIsInF1ZXN0aW9uIiwiX3dyYXBwZXIiLCJ1aWQiLCJhdWRpb1VybCIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJvdXRwdXQiLCJmZWVkYmFjayIsInRyYW5zY3JpcHRpb24iLCJhdWRpbyIsIkF1ZGlvUGxheWVyIiwidXJsIiwiYWRkRXZlbnRMaXN0ZW5lciIsIkFuaW1hdGVkQ29udGFpbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIm9uUmVmcmVzaCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2FjdGl2aXR5SWNvbiIsIl9sYWJlbCIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiQVBQX05BTUUiLCJNYXJrZG93biIsIm5vTWVzc2FnZXMiLCJfYWN0aW9ucyIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfcm91dGluZyIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwidXNlU3RvcmUiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJkcmF3ZXJWYWx1ZSIsImdlbmVyYWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUNPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxD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