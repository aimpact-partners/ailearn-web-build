System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.4.2/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.0/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "@aimpact/ailearn-app@0.4.2/components/hooks", "pragmate-ui@1.0.2/components", "@aimpact/ailearn-app@0.4.2/components/ui", "@aimpact/ailearn-app@0.4.2/config", "pragmate-ui@1.0.2/icons", "pragmate-ui@1.0.2/list", "pragmate-ui@1.0.2/empty", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.2/image", "pragmate-ui@1.0.2/collapsible", "pragmate-ui@1.0.2/tooltip", "@aimpact/ailearn-app@0.4.2/components/icons", "@aimpact/chat-sdk@1.5.4/chat-component.code", "@aimpact/chat-sdk@1.5.4/widgets/markdown", "pragmate-ui@1.0.2/tabs", "@aimpact/ailearn-app@0.4.2/model/wrapper", "pragmate-ui@1.0.2/modal", "pragmate-ui@1.0.2/drawer", "pragmate-ui@1.0.2/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.4.2/dashboard/wall/widget.code", "pragmate-ui@1.0.2/form"], function (_export, _context2) {
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
    }, function (_beyondJsReactive210Model) {
      dependency_7 = _beyondJsReactive210Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp042ComponentsHooks) {
      dependency_11 = _aimpactAilearnApp042ComponentsHooks;
    }, function (_pragmateUi102Components) {
      dependency_12 = _pragmateUi102Components;
    }, function (_aimpactAilearnApp042ComponentsUi) {
      dependency_13 = _aimpactAilearnApp042ComponentsUi;
    }, function (_aimpactAilearnApp042Config) {
      dependency_14 = _aimpactAilearnApp042Config;
    }, function (_pragmateUi102Icons) {
      dependency_15 = _pragmateUi102Icons;
    }, function (_pragmateUi102List) {
      dependency_16 = _pragmateUi102List;
    }, function (_pragmateUi102Empty) {
      dependency_17 = _pragmateUi102Empty;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_18 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi102Image) {
      dependency_19 = _pragmateUi102Image;
    }, function (_pragmateUi102Collapsible) {
      dependency_20 = _pragmateUi102Collapsible;
    }, function (_pragmateUi102Tooltip) {
      dependency_21 = _pragmateUi102Tooltip;
    }, function (_aimpactAilearnApp042ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp042ComponentsIcons;
    }, function (_aimpactChatSdk154ChatComponentCode) {
      dependency_23 = _aimpactChatSdk154ChatComponentCode;
    }, function (_aimpactChatSdk154WidgetsMarkdown) {
      dependency_24 = _aimpactChatSdk154WidgetsMarkdown;
    }, function (_pragmateUi102Tabs) {
      dependency_25 = _pragmateUi102Tabs;
    }, function (_aimpactAilearnApp042ModelWrapper) {
      dependency_26 = _aimpactAilearnApp042ModelWrapper;
    }, function (_pragmateUi102Modal) {
      dependency_27 = _pragmateUi102Modal;
    }, function (_pragmateUi102Drawer) {
      dependency_28 = _pragmateUi102Drawer;
    }, function (_pragmateUi102Toast) {
      dependency_29 = _pragmateUi102Toast;
    }, function (_lodash) {
      dependency_30 = _lodash;
    }, function (_beyondJsKernel0112Routing) {
      dependency_31 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp042DashboardWallWidgetCode) {
      dependency_32 = _aimpactAilearnApp042DashboardWallWidgetCode;
    }, function (_pragmateUi102Form) {
      dependency_33 = _pragmateUi102Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", null], ["@aimpact/chat-sdk", "1.5.4"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.0"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.1"], ["@firebase/auth", "1.10.7"], ["@google-cloud/storage", "7.16.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.6"], ["driver.js", "1.3.6"], ["firebase", "11.9.1"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.22"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.2"], ["marked-mangle", "1.1.11"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.2.2"], ["simplebar-react", "3.3.1"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.9"], ["zod", "3.25.67"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.23"], ["@types/react-dom", "18.3.7"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.4.2"], ["@aimpact/rvd", "0.5.1"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/components/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/tooltip', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['@aimpact/chat-sdk/chat-component.code', dependency_23], ['@aimpact/chat-sdk/widgets/markdown', dependency_24], ['pragmate-ui/tabs', dependency_25], ['@aimpact/ailearn-app/model/wrapper', dependency_26], ['pragmate-ui/modal', dependency_27], ['pragmate-ui/drawer', dependency_28], ['pragmate-ui/toast', dependency_29], ['lodash', dependency_30], ['@beyond-js/kernel/routing', dependency_31], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_32], ['pragmate-ui/form', dependency_33]]);
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
        hash: 3018961707,
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
        hash: 2324607592,
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
            #alerts;
            get alerts() {
              return this.#alerts;
            }
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
                  messages,
                  alerts
                } = await this.#model.load({
                  id: this.#id
                });
                this.#items = messages;
                this.#alerts = alerts;
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
        hash: 2947672391,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _hooks = require("@aimpact/ailearn-app/components/hooks");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _context = require("./context");
          function DashboardActions({
            disabled
          }) {
            const {
              model,
              store,
              texts,
              setShowDrawer
            } = (0, _context.useDashboardContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              store.wall.load();
              setShowDrawer({
                show: true,
                view: 'wall'
              });
            };
            (0, _hooks.useStore)(model, ['archived.changed']);
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

      /*****************************************
      INTERNAL MODULE: ./views/drawer/wall/index
      *****************************************/

      ims.set('./views/drawer/wall/index', {
        hash: 1139804718,
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
          var _context = require("../../context");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDrawerContext)();
            const {
              texts
            } = store;
            const [fetching, setFetching] = React.useState(false);
            const [view, setView] = React.useState('wall');
            const onChange = event => {
              const view = event.currentTarget.dataset.view;
              setView(view);
            };
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
        hash: 551847511,
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
          var _context = require("./context");
          var _dashboard = require("./dashboard");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJsb2ciLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJhbGVydHMiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VTdG9yZSIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidXNlQmluZGVyIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJ3cml0dGVuIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwibXVsdGlwbGVDaG9pY2UiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciLCJjb3VudGVycyIsImNscyIsIlJlYWN0IiwiYW5hbHlzaXMiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsIkljb25TdGF0ZSIsIm9iamVjdGl2ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwicG9pbnRzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJhY3Rpdml0eUlkIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJpbnRlcmFjdGlvbnMiLCJjb3VudCIsInRhYiIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJzeW50aGVzaXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiX3dyYXBwZXIiLCJIYW5kV3JpdHRlbiIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwib3V0cHV0IiwiZmVlZGJhY2siLCJoYW5kV3JpdHRlbiIsInNob3dJbWFnZSIsInRyYW5zY3JpcHRpb24iLCJfaGFuZFdyaXR0ZW4iLCJfd3JpdHRlbiIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpbmRleCIsInNldFNob3dJbWFnZSIsImhhc1BhcnRpY2lwYXRlZCIsImhhcyIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkcmF3ZXJDb250ZW50IiwiY2xvc2VzdCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNGdWxseVZpc2libGUiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsIklDT05TIiwidHlwZXMiLCJleGVyY2lzZSIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJXcml0dGVuQWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiYXNzZXNzbWVudCIsInF1ZXN0aW9ucyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJxdWVzdGlvbiIsInVpZCIsImF1ZGlvVXJsIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbmltYXRlZENvbnRhaW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFkZENyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIl9oZWFkZXJTa2VsZXRvbiIsIl9jaGF0VGFiIiwiX2hlYWRlciIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic2hvd0RyYXdlciIsInNldFJlYWR5IiwiRHJhd2VyU2tlbGV0b24iLCJvbkJhY2siLCJvblJlZnJlc2giLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIlN0dWRlbnREcmF3ZXJIZWFkZXIiLCJzaG93QWN0aXZpdHkiLCJEcmF3ZXIiLCJfdG9hc3QiLCJzaG93Q3JlZGl0cyIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3R1ZGVudCIsImNyZWRpdHMiLCJzZXRDcmVkaXRzIiwiZ2V0UHJvcGVydGllcyIsInAiLCJlbmFibGVBSSIsInRvYXN0Iiwic3VjY2VzcyIsImNvbnN1bWVkIiwib2YiLCJub0VuYWJsZSIsIkNsb3NlQnV0dG9uIiwiX2FjdGl2aXR5IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5Iiwic2V0SXRlbXMiLCJfaXRlbSIsIkdlbmVyYWxWaWV3IiwiSXRlbSIsIl9hY3Rpdml0eUljb24iLCJfbGFiZWwiLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJpY29ucyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIl9tYXJrZG93biIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUF9OQU1FIiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJEYXNoYm9hcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyIiwiY2xhc3N3b3JrcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl8iLCJfdmlldyIsIl9nZW5lcmFsIiwiX3N0dWRlbnRIZWFkZXIiLCJEYXNoYm9hcmQiLCJmb3VuZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl9tb2RhbEltYWdlIiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJNb2RhbEltYWdlIiwiTW9kYWwiLCJfd2lkZ2V0Iiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIldhbGxWaWV3IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsIklucHV0IiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiX2Rhc2hib2FyZCIsIlBhZ2VMb2FkZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2hhbmQtd3JpdHRlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9hbnN3ZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS93cml0dGVuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kYXNoYm9hcmQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9tb2RhbC1pbWFnZS50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwvaW5kZXgudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxNQUNYRyxVQUFXLFNBQVFK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