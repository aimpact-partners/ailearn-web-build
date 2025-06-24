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
        hash: 2551683239,
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

      /*********************************
      INTERNAL MODULE: ./views/dashboard
      *********************************/

      ims.set('./views/dashboard', {
        hash: 2987921229,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = Dashboard;
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
          var _header = require("./header");
          var _studentHeader = require("./header/student-header");
          function Dashboard({
            store,
            setShowDrawer
          }) {
            const {
              state
            } = store;
            const {
              texts
            } = store;
            const ref = _react.default.useRef(null);
            (0, _hooks.useStore)(store, ['data.updated', 'fetching.changed']);
            const value = {
              texts,
              model: store.model,
              store,
              setShowDrawer,
              view: store.view,
              setView: view => store.view = view
            };
            if (!store.ready) return _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("div", null, "Loading...")); // fallback, PageLoader debe estar afuera
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
              store: store,
              texts: texts,
              setShowDrawer: setShowDrawer
            });
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
            }))));
          }
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
        hash: 315841806,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _ = require("./404");
          var _dashboard = require("./dashboard");
          var _context = require("./context");
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
            if (!store.ready) return _react.default.createElement(_ui.PageLoader, {
              fetching: true
            });
            if (!store.model.found) return _react.default.createElement(_.NotFound, {
              store: store,
              texts: texts
            });
            if (store.model.totalParticipants === 0) return _react.default.createElement(Empty, {
              store: store,
              texts: texts,
              setShowDrawer: setShowDrawer
            });
            const value = {
              texts,
              model: store.model,
              showDrawer,
              store,
              setShowDrawer
            };
            return _react.default.createElement("div", {
              ref: ref
            }, _react.default.createElement(_dashboard.Dashboard, {
              store: store,
              setShowDrawer: setShowDrawer
            }), _react.default.createElement(_context.DrawerContext.Provider, {
              value: value
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiYWN0aXZpdGllcyIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIl9pY29ucyIsIl9saXN0IiwiX3BhcnRpY2lwYW50IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInR5cGUiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJzcGVjcyIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImRhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwid2FybiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJwcm9ncmVzcyIsIm9iamVjdGl2ZXMiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiTGluayIsImhyZWYiLCJzdW1tYXJ5Iiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsImNoYXQiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50Iiwid3JpdHRlbiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwicGFydGljaXBhbnRBY3Rpdml0eSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImFuYWx5c2lzIiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwic3RhdHVzIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX3Rvb2x0aXAiLCJJY29uU3RhdGUiLCJvYmplY3RpdmUiLCJUb29sdGlwIiwiY29udGVudCIsInBvaW50cyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiZGVzY3JpcHRpb24iLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwiYWN0aXZpdHlJZCIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiaW50ZXJhY3Rpb25zIiwiY291bnQiLCJ0YWIiLCJhbGVydHMiLCJvcGVuQ2hhdCIsImxvYWRDaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwic3ludGhlc2lzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIl93cmFwcGVyIiwiSGFuZFdyaXR0ZW4iLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwicGljdHVyZSIsIm91dHB1dCIsImZlZWRiYWNrIiwiaGFuZFdyaXR0ZW4iLCJzaG93SW1hZ2UiLCJ0cmFuc2NyaXB0aW9uIiwiX2hhbmRXcml0dGVuIiwiX3dyaXR0ZW4iLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJzZXRTaG93SW1hZ2UiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZHJhd2VyQ29udGVudCIsImNsb3Nlc3QiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzRnVsbHlWaXNpYmxlIiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJJQ09OUyIsInR5cGVzIiwiZXhlcmNpc2UiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiV3JpdHRlbkFjdGl2aXR5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJ1aWQiLCJhdWRpb1VybCIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJhZGRDcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaGVhZGVyU2tlbGV0b24iLCJfY2hhdFRhYiIsIl9oZWFkZXIiLCJTdHVkZW50RHJhd2VyQ2hhdCIsInNob3dEcmF3ZXIiLCJzZXRSZWFkeSIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwib25SZWZyZXNoIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwiX3RvYXN0Iiwic2hvd0NyZWRpdHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJwIiwiZW5hYmxlQUkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb25zdW1lZCIsIm9mIiwibm9FbmFibGUiLCJDbG9zZUJ1dHRvbiIsIl9hY3Rpdml0eSIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwiX2l0ZW0iLCJHZW5lcmFsVmlldyIsIkl0ZW0iLCJfYWN0aXZpdHlJY29uIiwiX2xhYmVsIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiaWNvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJfbWFya2Rvd24iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFBfTkFNRSIsIk1hcmtkb3duIiwibm9NZXNzYWdlcyIsIl9hY3Rpb25zIiwiRGFzaGJvYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlciIsImNsYXNzd29ya3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiRGFzaGJvYXJkIiwidXNlU3RvcmUiLCJmb3VuZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl9tb2RhbEltYWdlIiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJNb2RhbEltYWdlIiwiTW9kYWwiLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiY3JlYXRvciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfZGFzaGJvYXJkIiwiUGFnZUxvYWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3dhbGwudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaGFuZC13cml0dGVuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3dyaXR0ZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rhc2hib2FyZC50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvZHJhd2VyL21vZGFsLWltYWdlLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUos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