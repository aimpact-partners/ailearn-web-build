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
        hash: 780137303,
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
                if (!participant) {
                  console.log(`Participant ${userId} not found`);
                  return this.#currentTracking;
                }
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
        hash: 811803133,
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
          var _drawer = require("./drawer");
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
            }, _react.default.createElement(_drawer.AsideDrawer, null)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJsb2ciLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9ob29rcyIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiYWN0aW9ucyIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiYWN0aXZpdGllcyIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIl9pY29ucyIsIl9saXN0IiwiX3BhcnRpY2lwYW50IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInR5cGUiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJzcGVjcyIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImRhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsIm9uVG9nZ2xlIiwid2FybiIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsInRvZ2dsZWFibGUiLCJwcm9ncmVzcyIsIm9iamVjdGl2ZXMiLCJvcGVuIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJbWFnZSIsInNyYyIsInBob3RvVXJsIiwiTGluayIsImhyZWYiLCJzdW1tYXJ5Iiwibm9TdW1tYXJ5IiwiQWN0aXZpdHlPYmplY3RpdmVTdGF0dXNJY29uIiwiQ29sbGFwc2libGVDb250ZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZSIsIl9jaGF0IiwiX211bHRpcGxlQ2hvaWNlIiwiX3Nwb2tlbiIsImNoYXQiLCJzcG9rZW4iLCJTcG9rZW5BY3Rpdml0eVBhcnRpY2lwYW50Iiwid3JpdHRlbiIsIk11bHRpcGxlQ2hvaWNlQWN0aXZpdHlQYXJ0aWNpcGFudCIsIm11bHRpcGxlQ2hvaWNlIiwicGFydGljaXBhbnRBY3Rpdml0eSIsImNvcnJlY3QiLCJ0b3RhbCIsIndyb25nIiwiY291bnRlcnMiLCJjbHMiLCJSZWFjdCIsImFuYWx5c2lzIiwiaWNvbk5hbWVzIiwicGVuZGluZyIsImNvbXBsZXRlZCIsIm91dHN0YW5kaW5nIiwic3RhdHVzIiwib2JqZWN0aXZlc1N0YXR1cyIsIkFwcEljb24iLCJub0FuYWx5c2lzIiwiX3Rvb2x0aXAiLCJJY29uU3RhdGUiLCJvYmplY3RpdmUiLCJUb29sdGlwIiwiY29udGVudCIsInBvaW50cyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiZGVzY3JpcHRpb24iLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwiYWN0aXZpdHlJZCIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiaW50ZXJhY3Rpb25zIiwiY291bnQiLCJ0YWIiLCJhbGVydHMiLCJvcGVuQ2hhdCIsImxvYWRDaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwic3ludGhlc2lzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIl93cmFwcGVyIiwiSGFuZFdyaXR0ZW4iLCJzZXR0aW5ncyIsImFwaXMiLCJhaWxlYXJuIiwicGljdHVyZSIsIm91dHB1dCIsImZlZWRiYWNrIiwiaGFuZFdyaXR0ZW4iLCJzaG93SW1hZ2UiLCJ0cmFuc2NyaXB0aW9uIiwiX2hhbmRXcml0dGVuIiwiX3dyaXR0ZW4iLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJzZXRTaG93SW1hZ2UiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZHJhd2VyQ29udGVudCIsImNsb3Nlc3QiLCJlbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImlzRnVsbHlWaXNpYmxlIiwidG9wIiwiYm90dG9tIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiYmxvY2siLCJ0aW1lb3V0SWQiLCJjbGVhclRpbWVvdXQiLCJJQ09OUyIsInR5cGVzIiwiZXhlcmNpc2UiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiV3JpdHRlbkFjdGl2aXR5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJ1aWQiLCJhdWRpb1VybCIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiQW5pbWF0ZWRDb250YWluZXIiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJhZGRDcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaGVhZGVyU2tlbGV0b24iLCJfY2hhdFRhYiIsIl9oZWFkZXIiLCJTdHVkZW50RHJhd2VyQ2hhdCIsInNob3dEcmF3ZXIiLCJzZXRSZWFkeSIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwib25SZWZyZXNoIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwiX3RvYXN0Iiwic2hvd0NyZWRpdHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJwIiwiZW5hYmxlQUkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb25zdW1lZCIsIm9mIiwibm9FbmFibGUiLCJDbG9zZUJ1dHRvbiIsIl9hY3Rpdml0eSIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwiX2l0ZW0iLCJHZW5lcmFsVmlldyIsIkl0ZW0iLCJfYWN0aXZpdHlJY29uIiwiX2xhYmVsIiwiX3N0YXR1cyIsIk1vZHVsZUFjdGl2aXR5Q2hhdCIsInN1YnR5cGUiLCJBY3Rpdml0eUljb24iLCJNb2R1bGVBY3Rpdml0eU1lc3NhZ2VzIiwiTW9kdWxlQWN0aXZpdHlTdGF0dXMiLCJNb2R1bGVBY3Rpdml0eURldGFpbHMiLCJJY29uIiwiTW9kdWxlQWN0aXZpdHkiLCJNb2R1bGVBY3Rpdml0eVNwb2tlbiIsIk1vZHVsZUFjdGl2aXR5TXVsdGlwbGVDaG9pY2UiLCJsYWJlbCIsImRvbmUiLCJ0b3RhbE1lc3NhZ2VzIiwiaWNvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJqb2luIiwibWVzc2FnZUNvdW50ZXIiLCJoYXNBbGVydHMiLCJJY29uSXRlbSIsInBhcnRpY2lwYW50VXJpIiwib3BlbkRyYXdlciIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYWx0IiwiX2ljb25Cb3giLCJJY29uQm94IiwiYXMiLCJEcmF3ZXJBbGVydEl0ZW0iLCJfbWFya2Rvd24iLCJpdGVyYXRpb24iLCJhc3Npc3RhbnQiLCJBUFBfTkFNRSIsIk1hcmtkb3duIiwibm9NZXNzYWdlcyIsIl9hY3Rpb25zIiwiRGFzaGJvYXJkQ29udGV4dCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkhlYWRlciIsImNsYXNzd29ya3MiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYXdlckNvbnRleHQiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwiRGFzaGJvYXJkIiwidXNlU3RvcmUiLCJmb3VuZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl9tb2RhbEltYWdlIiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJNb2RhbEltYWdlIiwiTW9kYWwiLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwiY3JlYXRvciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfZGFzaGJvYXJkIiwiUGFnZUxvYWRlciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3dhbGwudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaGFuZC13cml0dGVuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3dyaXR0ZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2Rhc2hib2FyZC50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvZHJhd2VyL21vZGFsLWltYWdlLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcs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