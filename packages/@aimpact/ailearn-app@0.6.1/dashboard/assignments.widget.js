System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.6.1/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.1/model", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.6.1/components/ui", "@aimpact/ailearn-app@0.6.1/config", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/tooltip", "@aimpact/ailearn-app@0.6.1/components/icons", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/tabs", "@aimpact/ailearn-app@0.6.1/model/wrapper", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/drawer", "pragmate-ui@1.0.8/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.14/routing", "@aimpact/ailearn-app@0.6.1/dashboard/wall/widget.code", "pragmate-ui@1.0.8/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, dependency_32, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel0114Bundle) {
      dependency_1 = _beyondJsKernel0114Bundle;
    }, function (_beyondJsKernel0114Styles) {
      dependency_2 = _beyondJsKernel0114Styles;
    }, function (_beyondJsReact18Widgets118Page) {
      dependency_3 = _beyondJsReact18Widgets118Page;
    }, function (_aimpactAilearnSdk120Core) {
      dependency_4 = _aimpactAilearnSdk120Core;
    }, function (_aimpactAilearnApp061DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp061DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive211Model) {
      dependency_7 = _beyondJsReactive211Model;
    }, function (_beyondJsKernel0114Core) {
      dependency_8 = _beyondJsKernel0114Core;
    }, function (_beyondJsKernel0114Texts) {
      dependency_9 = _beyondJsKernel0114Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_beyondJsReact18Widgets118Hooks) {
      dependency_11 = _beyondJsReact18Widgets118Hooks;
    }, function (_pragmateUi108Components) {
      dependency_12 = _pragmateUi108Components;
    }, function (_aimpactAilearnApp061ComponentsUi) {
      dependency_13 = _aimpactAilearnApp061ComponentsUi;
    }, function (_aimpactAilearnApp061Config) {
      dependency_14 = _aimpactAilearnApp061Config;
    }, function (_pragmateUi108Icons) {
      dependency_15 = _pragmateUi108Icons;
    }, function (_pragmateUi108List) {
      dependency_16 = _pragmateUi108List;
    }, function (_pragmateUi108Empty) {
      dependency_17 = _pragmateUi108Empty;
    }, function (_pragmateUi108Image) {
      dependency_18 = _pragmateUi108Image;
    }, function (_pragmateUi108Collapsible) {
      dependency_19 = _pragmateUi108Collapsible;
    }, function (_pragmateUi108Tooltip) {
      dependency_20 = _pragmateUi108Tooltip;
    }, function (_aimpactAilearnApp061ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp061ComponentsIcons;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_22 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Tabs) {
      dependency_24 = _pragmateUi108Tabs;
    }, function (_aimpactAilearnApp061ModelWrapper) {
      dependency_25 = _aimpactAilearnApp061ModelWrapper;
    }, function (_pragmateUi108Modal) {
      dependency_26 = _pragmateUi108Modal;
    }, function (_pragmateUi108Drawer) {
      dependency_27 = _pragmateUi108Drawer;
    }, function (_pragmateUi108Toast) {
      dependency_28 = _pragmateUi108Toast;
    }, function (_lodash) {
      dependency_29 = _lodash;
    }, function (_beyondJsKernel0114Routing) {
      dependency_30 = _beyondJsKernel0114Routing;
    }, function (_aimpactAilearnApp061DashboardWallWidgetCode) {
      dependency_31 = _aimpactAilearnApp061DashboardWallWidgetCode;
    }, function (_pragmateUi108Form) {
      dependency_32 = _pragmateUi108Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.1"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.6.1"], ["@aimpact/rvd", "0.6.3"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.6.1/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@aimpact/ailearn-app/model/wrapper', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/drawer', dependency_27], ['pragmate-ui/toast', dependency_28], ['lodash', dependency_29], ['@beyond-js/kernel/routing', dependency_30], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_31], ['pragmate-ui/form', dependency_32]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.6.1/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.6.1/dashboard/assignments.widget');
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
        hash: 4120917285,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DashboardActions = DashboardActions;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 2440208875,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentDrawerChat = StudentDrawerChat;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var React = require("react");
          var _context = require("../../context");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          var _chatTab = require("./chat-tab");
          var _header = require("./header");
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
            const [fetching, setFetching] = React.useState(false);
            const ref = React.useRef(null);
            (0, _hooks.useStore)(participantActivity.chatModel);
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
        hash: 2874427298,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Dashboard = Dashboard;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 3381990541,
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
        hash: 2340454395,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalImage = ModalImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _modal = require("pragmate-ui/modal");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
        hash: 658623992,
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
              alt: title,
              size: "xs"
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
        hash: 2851290531,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJsb2ciLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJhbGVydHMiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VTdG9yZSIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidXNlQmluZGVyIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJ3cml0dGVuIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwibXVsdGlwbGVDaG9pY2UiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciLCJjb3VudGVycyIsImNscyIsIlJlYWN0IiwiYW5hbHlzaXMiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsIkljb25TdGF0ZSIsIm9iamVjdGl2ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwicG9pbnRzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJhY3Rpdml0eUlkIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJpbnRlcmFjdGlvbnMiLCJjb3VudCIsInRhYiIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJzeW50aGVzaXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiX3dyYXBwZXIiLCJIYW5kV3JpdHRlbiIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwib3V0cHV0IiwiZmVlZGJhY2siLCJoYW5kV3JpdHRlbiIsInNob3dJbWFnZSIsInRyYW5zY3JpcHRpb24iLCJfaGFuZFdyaXR0ZW4iLCJfd3JpdHRlbiIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpbmRleCIsInNldFNob3dJbWFnZSIsImhhc1BhcnRpY2lwYXRlZCIsImhhcyIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkcmF3ZXJDb250ZW50IiwiY2xvc2VzdCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNGdWxseVZpc2libGUiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsIklDT05TIiwidHlwZXMiLCJleGVyY2lzZSIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJXcml0dGVuQWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiYXNzZXNzbWVudCIsInF1ZXN0aW9ucyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJxdWVzdGlvbiIsInVpZCIsImF1ZGlvVXJsIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbmltYXRlZENvbnRhaW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFkZENyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIl9oZWFkZXJTa2VsZXRvbiIsIl9jaGF0VGFiIiwiX2hlYWRlciIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic2hvd0RyYXdlciIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwib25SZWZyZXNoIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwiX3RvYXN0Iiwic2hvd0NyZWRpdHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJwIiwiZW5hYmxlQUkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb25zdW1lZCIsIm9mIiwibm9FbmFibGUiLCJDbG9zZUJ1dHRvbiIsIl9hY3Rpdml0eSIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwic2V0UmVhZHkiLCJfaXRlbSIsIkdlbmVyYWxWaWV3IiwiSXRlbSIsIl9hY3Rpdml0eUljb24iLCJfbGFiZWwiLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJpY29ucyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIl9tYXJrZG93biIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUF9OQU1FIiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJEYXNoYm9hcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyIiwiY2xhc3N3b3JrcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIkRhc2hib2FyZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiUGFnZUxvYWRlciIsIl9yb3V0aW5nIiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfbW9kYWxJbWFnZSIsIkFzaWRlRHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiTW9kYWxJbWFnZSIsIk1vZGFsIiwiX3dpZGdldCIsImhlYWRlciIsIldhbGxWaWV3IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNpemUiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsIl8iLCJfZGFzaGJvYXJkIiwiZm91bmQiXSwic291cmNlcyI6WyIvL3RzL2NvbnRyb2xsZXIudHMiLCIvL3RzL3N0b3JlL2luZGV4LnRzIiwiLy90cy9zdG9yZS93YWxsLnRzIiwiLy90cy92aWV3cy80MDQudHN4IiwiLy90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi8vdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi8vdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi8vdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2hhbmQtd3JpdHRlbi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS93cml0dGVuLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi8vdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiLy90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiLy90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi8vdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvL3RzL3ZpZXdzL2Rhc2hib2FyZC50c3giLCIvL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi8vdHMvdmlld3MvZHJhd2VyL2hlYWRlci1za2VsZXRvbi50c3giLCIvL3RzL3ZpZXdzL2RyYXdlci9pbmRleC50c3giLCIvL3RzL3ZpZXdzL2RyYXdlci9tb2RhbC1pbWFnZS50c3giLCIvL3RzL3ZpZXdzL2RyYXdlci93YWxsL2luZGV4LnRzeCIsIi8vZ2xvYmFsLnRzeC8iLCIvL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiLy90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiLy90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiLy90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi8vdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxH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