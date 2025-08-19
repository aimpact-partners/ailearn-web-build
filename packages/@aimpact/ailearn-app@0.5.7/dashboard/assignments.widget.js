System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.12/bundle", "@beyond-js/kernel@0.1.12/styles", "@beyond-js/react-18-widgets@1.1.4/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.5.7/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.12/core", "@beyond-js/kernel@0.1.12/texts", "react@18.3.1", "@aimpact/ailearn-app@0.5.7/shared/hooks", "pragmate-ui@1.0.6/components", "@aimpact/ailearn-app@0.5.7/components/ui", "@aimpact/ailearn-app@0.5.7/config", "pragmate-ui@1.0.6/icons", "pragmate-ui@1.0.6/list", "pragmate-ui@1.0.6/empty", "@beyond-js/react-18-widgets@1.1.4/hooks", "pragmate-ui@1.0.6/image", "pragmate-ui@1.0.6/collapsible", "pragmate-ui@1.0.6/tooltip", "@aimpact/ailearn-app@0.5.7/components/icons", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.6/tabs", "@aimpact/ailearn-app@0.5.7/model/wrapper", "pragmate-ui@1.0.6/modal", "pragmate-ui@1.0.6/drawer", "pragmate-ui@1.0.6/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.12/routing", "@aimpact/ailearn-app@0.5.7/dashboard/wall/widget.code", "pragmate-ui@1.0.6/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp057DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp057DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive211Model) {
      dependency_7 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0112Core) {
      dependency_8 = _beyondJsKernel0112Core;
    }, function (_beyondJsKernel0112Texts) {
      dependency_9 = _beyondJsKernel0112Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_aimpactAilearnApp057SharedHooks) {
      dependency_11 = _aimpactAilearnApp057SharedHooks;
    }, function (_pragmateUi106Components) {
      dependency_12 = _pragmateUi106Components;
    }, function (_aimpactAilearnApp057ComponentsUi) {
      dependency_13 = _aimpactAilearnApp057ComponentsUi;
    }, function (_aimpactAilearnApp057Config) {
      dependency_14 = _aimpactAilearnApp057Config;
    }, function (_pragmateUi106Icons) {
      dependency_15 = _pragmateUi106Icons;
    }, function (_pragmateUi106List) {
      dependency_16 = _pragmateUi106List;
    }, function (_pragmateUi106Empty) {
      dependency_17 = _pragmateUi106Empty;
    }, function (_beyondJsReact18Widgets114Hooks) {
      dependency_18 = _beyondJsReact18Widgets114Hooks;
    }, function (_pragmateUi106Image) {
      dependency_19 = _pragmateUi106Image;
    }, function (_pragmateUi106Collapsible) {
      dependency_20 = _pragmateUi106Collapsible;
    }, function (_pragmateUi106Tooltip) {
      dependency_21 = _pragmateUi106Tooltip;
    }, function (_aimpactAilearnApp057ComponentsIcons) {
      dependency_22 = _aimpactAilearnApp057ComponentsIcons;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_23 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_24 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi106Tabs) {
      dependency_25 = _pragmateUi106Tabs;
    }, function (_aimpactAilearnApp057ModelWrapper) {
      dependency_26 = _aimpactAilearnApp057ModelWrapper;
    }, function (_pragmateUi106Modal) {
      dependency_27 = _pragmateUi106Modal;
    }, function (_pragmateUi106Drawer) {
      dependency_28 = _pragmateUi106Drawer;
    }, function (_pragmateUi106Toast) {
      dependency_29 = _pragmateUi106Toast;
    }, function (_lodash) {
      dependency_30 = _lodash;
    }, function (_beyondJsKernel0112Routing) {
      dependency_31 = _beyondJsKernel0112Routing;
    }, function (_aimpactAilearnApp057DashboardWallWidgetCode) {
      dependency_32 = _aimpactAilearnApp057DashboardWallWidgetCode;
    }, function (_pragmateUi106Form) {
      dependency_33 = _pragmateUi106Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.6"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.12"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.4"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.2.0"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.5.7"], ["@aimpact/rvd", "0.5.7"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.5.7/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@aimpact/ailearn-app/shared/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['pragmate-ui/image', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/tooltip', dependency_21], ['@aimpact/ailearn-app/components/icons', dependency_22], ['@aimpact/chat-sdk/chat-component.code', dependency_23], ['@aimpact/chat-sdk/widgets/markdown', dependency_24], ['pragmate-ui/tabs', dependency_25], ['@aimpact/ailearn-app/model/wrapper', dependency_26], ['pragmate-ui/modal', dependency_27], ['pragmate-ui/drawer', dependency_28], ['pragmate-ui/toast', dependency_29], ['lodash', dependency_30], ['@beyond-js/kernel/routing', dependency_31], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_32], ['pragmate-ui/form', dependency_33]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.5.7/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.5.7/dashboard/assignments.widget');
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
        hash: 2554444241,
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
            #alerts = [];
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
                this.#alerts = alerts || [];
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
        hash: 2618399013,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 2327039972,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = Dashboard;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _react = require("react");
          var _actions = require("./actions");
          var _view = require("./activities/view");
          var _general = require("./assignment/general");
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
        hash: 1595233421,
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
            }), React.createElement(Drawer.CloseButton, null)))), React.createElement("div", {
              className: "drawer-skeleton"
            }, React.createElement(_ui.PageLoader, {
              fetching: true
            })));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/drawer/index
      ************************************/

      ims.set('./views/drawer/index', {
        hash: 3099680987,
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
            const {
              texts
            } = store;
            const [open, setOpen] = _react.default.useState(false);
            const [fetching, setFetching] = _react.default.useState(false);
            const toggleOpen = () => setOpen(!open);
            const cls = `ds-drawer ${fetching ? ' is-fetching' : ''}`;
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
        hash: 2809622226,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalImage = ModalImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
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
        hash: 3250891238,
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
              texts,
              globalTexts
            } = store;
            const [fetching, setFetching] = React.useState(false);
            const [view, setView] = React.useState('wall');
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
            }, React.createElement("h2", null, texts.wall.header), React.createElement("div", {
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
        hash: 3968320363,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@aimpact/ailearn-app/shared/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _ = require("./404");
          var _context = require("./context");
          var _dashboard = require("./dashboard");
          var _drawer = require("./drawer");
          var _empty = require("./components/empty");
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
            if (store.model.totalParticipants === 0) return _react.default.createElement(_empty.Empty, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJsb2ciLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJhbGVydHMiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VTdG9yZSIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidXNlQmluZGVyIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJ3cml0dGVuIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwibXVsdGlwbGVDaG9pY2UiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciLCJjb3VudGVycyIsImNscyIsIlJlYWN0IiwiYW5hbHlzaXMiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsIkljb25TdGF0ZSIsIm9iamVjdGl2ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwicG9pbnRzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJhY3Rpdml0eUlkIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJpbnRlcmFjdGlvbnMiLCJjb3VudCIsInRhYiIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJzeW50aGVzaXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiX3dyYXBwZXIiLCJIYW5kV3JpdHRlbiIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwib3V0cHV0IiwiZmVlZGJhY2siLCJoYW5kV3JpdHRlbiIsInNob3dJbWFnZSIsInRyYW5zY3JpcHRpb24iLCJfaGFuZFdyaXR0ZW4iLCJfd3JpdHRlbiIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpbmRleCIsInNldFNob3dJbWFnZSIsImhhc1BhcnRpY2lwYXRlZCIsImhhcyIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkcmF3ZXJDb250ZW50IiwiY2xvc2VzdCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNGdWxseVZpc2libGUiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsIklDT05TIiwidHlwZXMiLCJleGVyY2lzZSIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJXcml0dGVuQWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiYXNzZXNzbWVudCIsInF1ZXN0aW9ucyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJxdWVzdGlvbiIsInVpZCIsImF1ZGlvVXJsIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbmltYXRlZENvbnRhaW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFkZENyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIl9oZWFkZXJTa2VsZXRvbiIsIl9jaGF0VGFiIiwiX2hlYWRlciIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic2hvd0RyYXdlciIsInNldFJlYWR5IiwiRHJhd2VyU2tlbGV0b24iLCJvbkJhY2siLCJvblJlZnJlc2giLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIlN0dWRlbnREcmF3ZXJIZWFkZXIiLCJzaG93QWN0aXZpdHkiLCJEcmF3ZXIiLCJfdG9hc3QiLCJzaG93Q3JlZGl0cyIsInByb2Nlc3NpbmciLCJzZXRQcm9jZXNzaW5nIiwic3R1ZGVudCIsImNyZWRpdHMiLCJzZXRDcmVkaXRzIiwiZ2V0UHJvcGVydGllcyIsInAiLCJlbmFibGVBSSIsInRvYXN0Iiwic3VjY2VzcyIsImNvbnN1bWVkIiwib2YiLCJub0VuYWJsZSIsIkNsb3NlQnV0dG9uIiwiX2FjdGl2aXR5IiwiU3R1ZGVudEFzc2lnbm1lbnRTdW1tYXJ5Iiwic2V0SXRlbXMiLCJfaXRlbSIsIkdlbmVyYWxWaWV3IiwiSXRlbSIsIl9hY3Rpdml0eUljb24iLCJfbGFiZWwiLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJpY29ucyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIl9tYXJrZG93biIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUF9OQU1FIiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJEYXNoYm9hcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyIiwiY2xhc3N3b3JrcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIkRhc2hib2FyZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiUGFnZUxvYWRlciIsIl9yb3V0aW5nIiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfbW9kYWxJbWFnZSIsIkFzaWRlRHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiTW9kYWxJbWFnZSIsIk1vZGFsIiwiX3dpZGdldCIsImhlYWRlciIsIldhbGxWaWV3IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJsaXN0Q2xzIiwicmVmcmVzaGluZyIsInNldFJlZnJlc2hpbmciLCJvbkZpbHRlciIsImN1cnJlbnRUYXJnZXQiLCJJbnB1dCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiXyIsIl9kYXNoYm9hcmQiLCJmb3VuZCJdLCJzb3VyY2VzIjpbIi8vdHMvY29udHJvbGxlci50cyIsIi8vdHMvc3RvcmUvaW5kZXgudHMiLCIvL3RzL3N0b3JlL3dhbGwudHMiLCIvL3RzL3ZpZXdzLzQwNC50c3giLCIvL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi8vdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaGFuZC13cml0dGVuLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3dyaXR0ZW4udHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi8vdHMvdmlld3MvY29udGV4dC50cyIsIi8vdHMvdmlld3MvZGFzaGJvYXJkLnRzeCIsIi8vdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiLy90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi8vdHMvdmlld3MvZHJhd2VyL2luZGV4LnRzeCIsIi8vdHMvdmlld3MvZHJhd2VyL21vZGFsLWltYWdlLnRzeCIsIi8vdHMvdmlld3MvZHJhd2VyL3dhbGwvaW5kZXgudHN4IiwiLy9nbG9iYWwudHN4LyIsIi8vdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiLy90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQs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