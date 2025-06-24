System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.4.2/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.0.5/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.4/hooks", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.2/components/hooks", "@aimpact/ailearn-app@0.4.2/dashboard/wall/widget.code", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_31 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_aimpactAilearnApp042DashboardWallWidgetCode) {
      dependency_32 = _aimpactAilearnApp042DashboardWallWidgetCode;
    }, function (_pragmateUi100Beta7Form) {
      dependency_33 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.0.4"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@aimpact/ailearn-app/model/wrapper', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/drawer', dependency_27], ['pragmate-ui/toast', dependency_28], ['lodash', dependency_29], ['@beyond-js/kernel/routing', dependency_30], ['@aimpact/ailearn-app/components/hooks', dependency_31], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_32], ['pragmate-ui/form', dependency_33]]);
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
        hash: 159758196,
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
              this.reactiveProps(['showImage']);
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
        hash: 2156556477,
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
            const type = ['content-theory', 'debate', 'character-talk', 'exercise', 'free-conversation'].includes(activity.type) ? 'chat' : activity.type;
            return _react.default.createElement(_components.ConditionalContainer, {
              condition: type,
              options: {
                chat: _react.default.createElement(_chat.ChatActivityParticipant, {
                  item: item
                }),
                spoken: _react.default.createElement(_spoken.SpokenActivityParticipant, {
                  item: item
                }),
                written: _react.default.createElement(_spoken.SpokenActivityParticipant, {
                  item: item
                }),
                'hand-written': _react.default.createElement(_spoken.SpokenActivityParticipant, {
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

      /***************************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/hand-written
      ***************************************************************/

      ims.set('./views/assignment/drawer/activity/hand-written', {
        hash: 90751237,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HandWritten = HandWritten;
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          var _image = require("pragmate-ui/image");
          var _tabs = require("pragmate-ui/tabs");
          var React = require("react");
          var _context = require("../../../context");
          /**
           *
           * @param param0  item: ParticipantActivity
           * @returns
           */
          function HandWritten({
            item,
            participant
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const src = `${_wrapper.settings.apis.ailearn}/${item.picture}`;
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
            return React.createElement("div", null, React.createElement("div", {
              className: "activity-data-section"
            }, React.createElement("h5", null, texts.activities.handWritten.picture), React.createElement(_image.Image, {
              src: src,
              onClick: () => store.showImage = src
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

      /********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/index
      ********************************************************/

      ims.set('./views/assignment/drawer/activity/index', {
        hash: 1414588928,
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
          var _handWritten = require("./hand-written");
          var _written = require("./written");
          /**
           *
           * @param param0 activityId is passed when the user clicks on an activity
           * @returns
           */
          function StudentAssignmentActivity({
            item: activity,
            user,
            index,
            setShowImage,
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
                'free-conversation': React.createElement(_chat.StudentAssignmentActivityChatBody, {
                  tracking: tracking,
                  item: item,
                  user: user,
                  participant: participant,
                  activityId: activityId
                }),
                exercise: React.createElement(_chat.StudentAssignmentActivityChatBody, {
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
                  item: item
                }),
                written: React.createElement(_written.WrittenActivity, {
                  item: item,
                  participant: participant
                }),
                'hand-written': React.createElement(_handWritten.HandWritten, {
                  item: item,
                  participant: participant
                }),
                spoken: React.createElement(_spoken.StudentAssignmentActivitySpokenBody, {
                  item: item,
                  participant: participant
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

      /**********************************************************
      INTERNAL MODULE: ./views/assignment/drawer/activity/written
      **********************************************************/

      ims.set('./views/assignment/drawer/activity/written', {
        hash: 928958192,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.WrittenActivity = WrittenActivity;
          var React = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _tabs = require("pragmate-ui/tabs");
          var _wrapper = require("@aimpact/ailearn-app/model/wrapper");
          /**
           *
           * @param param0  item: ParticipantActivity
           * @returns
           */
          function WrittenActivity({
            item,
            participant
          }) {
            const {
              texts,
              store
            } = (0, _context.useDrawerContext)();
            const src = `${_wrapper.settings.apis.ailearn}/${item.picture}`;
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
            }, texts.activities.written.transcription));
            return React.createElement("div", null, React.createElement(_tabs.TabsContainer, {
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
        hash: 3058076765,
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
            const type = ['content-theory', 'debate', 'character-talk', 'free-conversation', 'exercise'].includes(activity.type) ? 'chat' : activity.type;
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
                written: _react.default.createElement(_spoken.ModuleActivitySpoken, {
                  activity: activity,
                  participant: participant
                }),
                'hand-written': _react.default.createElement(_spoken.ModuleActivitySpoken, {
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
        hash: 3727240231,
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
          var _modalImage = require("./modal-image");
          function AsideDrawer() {
            const {
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
            }, _react.default.createElement("h3", null, texts.addCredits.title), _react.default.createElement("p", null, texts.addCredits.description))), _react.default.createElement(_modalImage.ModalImage, null));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/drawer/modal-image
      ******************************************/

      ims.set('./views/drawer/modal-image', {
        hash: 403875406,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalImage = ModalImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _context = require("../context");
          function ModalImage() {
            const {
              store
            } = (0, _context.useDrawerContext)();
            (0, _hooks.useStore)(store, ['showImage.changed']);
            return _react.default.createElement(_react.default.Fragment, null, store.showImage && _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: () => store.showImage = ''
            }, _react.default.createElement(_image.Image, {
              src: store.showImage
            })));
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
        hash: 3222781442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _ = require("./404");
          var _actions = require("./actions");
          var _view = require("./activities/view");
          var _general = require("./assignment/general");
          var _empty = require("./components/empty");
          var _context = require("./context");
          var _drawer = require("./drawer");
          var _header = require("./header");
          var _studentHeader = require("./header/student-header");
          /*bundle*/
          function View({
            store
          }) {
            const [showDrawer, setShowDrawer] = (0, _react.useState)({
              show: false,
              data: null
            });
            (0, _hooks.useStore)(store, ['data.updated', 'fetching.changed']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiYWN0aXZpdGllcyIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIl9pY29ucyIsIl9saXN0IiwiX3BhcnRpY2lwYW50IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInR5cGUiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJzcGVjcyIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImRhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwid2FybiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJwcm9ncmVzcyIsIm9iamVjdGl2ZXMiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiTGluayIsImhyZWYiLCJzdW1tYXJ5Iiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsImNoYXQiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50Iiwid3JpdHRlbiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwicGFydGljaXBhbnRBY3Rpdml0eSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImFuYWx5c2lzIiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwic3RhdHVzIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX3Rvb2x0aXAiLCJJY29uU3RhdGUiLCJvYmplY3RpdmUiLCJUb29sdGlwIiwiY29udGVudCIsInBvaW50cyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiZGVzY3JpcHRpb24iLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwiYWN0aXZpdHlJZCIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiaW50ZXJhY3Rpb25zIiwiY291bnQiLCJ0YWIiLCJhbGVydHMiLCJvcGVuQ2hhdCIsImxvYWRDaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwic3ludGhlc2lzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIl93cmFwcGVyIiwiSGFuZFdyaXR0ZW4iLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwicGljdHVyZSIsIm91dHB1dCIsImZlZWRiYWNrIiwiaGFuZFdyaXR0ZW4iLCJzaG93SW1hZ2UiLCJ0cmFuc2NyaXB0aW9uIiwiX2hhbmRXcml0dGVuIiwiX3dyaXR0ZW4iLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJzZXRTaG93SW1hZ2UiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZHJhd2VyQ29udGVudCIsImNsb3Nlc3QiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzRnVsbHlWaXNpYmxlIiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJJQ09OUyIsInR5cGVzIiwiZXhlcmNpc2UiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiV3JpdHRlbkFjdGl2aXR5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJ1aWQiLCJhdWRpb1VybCIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJhZGRDcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaGVhZGVyU2tlbGV0b24iLCJfY2hhdFRhYiIsIl9oZWFkZXIiLCJTdHVkZW50RHJhd2VyQ2hhdCIsInNob3dEcmF3ZXIiLCJzZXRSZWFkeSIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwib25SZWZyZXNoIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwiX3RvYXN0Iiwic2hvd0NyZWRpdHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJwIiwiZW5hYmxlQUkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb25zdW1lZCIsIm9mIiwibm9FbmFibGUiLCJDbG9zZUJ1dHRvbiIsIl9hY3Rpdml0eSIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwiX2l0ZW0iLCJHZW5lcmFsVmlldyIsIkl0ZW0iLCJfYWN0aXZpdHlJY29uIiwiX2xhYmVsIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiaWNvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJfbWFya2Rvd24iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFBfTkFNRSIsIk1hcmtkb3duIiwibm9NZXNzYWdlcyIsIl9hY3Rpb25zIiwiRGFzaGJvYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlciIsImNsYXNzd29ya3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJXYWxsIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsIl9yb3V0aW5nIiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfbW9kYWxJbWFnZSIsIkFzaWRlRHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiTW9kYWxJbWFnZSIsInVzZVN0b3JlIiwiTW9kYWwiLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiY3JlYXRvciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsIl8iLCJfdmlldyIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJkcmF3ZXJWYWx1ZSIsImdlbmVyYWwiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2hhbmQtd3JpdHRlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9hbnN3ZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS93cml0dGVuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL2hlYWRlci1za2VsZXRvbi50c3giLCIvdHMvdmlld3MvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvbW9kYWwtaW1hZ2UudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxX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