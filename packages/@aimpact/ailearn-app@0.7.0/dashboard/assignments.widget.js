System.register(["@beyond-js/widgets@1.1.2/render", "@beyond-js/kernel@0.1.14/bundle", "@beyond-js/kernel@0.1.14/styles", "@beyond-js/react-18-widgets@1.1.8/page", "@aimpact/ailearn-sdk@1.2.0/core", "@aimpact/ailearn-app@0.7.0/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.2.0/tracking", "@beyond-js/reactive@2.1.2/model", "@beyond-js/kernel@0.1.14/core", "@beyond-js/kernel@0.1.14/texts", "react@18.3.1", "@beyond-js/react-18-widgets@1.1.8/hooks", "pragmate-ui@1.0.8/components", "@aimpact/ailearn-app@0.7.0/components/ui", "@aimpact/ailearn-app@0.7.0/config", "pragmate-ui@1.0.8/icons", "pragmate-ui@1.0.8/list", "pragmate-ui@1.0.8/empty", "pragmate-ui@1.0.8/image", "pragmate-ui@1.0.8/collapsible", "pragmate-ui@1.0.8/tooltip", "@aimpact/ailearn-app@0.7.0/components/icons", "@aimpact/chat-sdk@1.5.5/chat-component.code", "@aimpact/chat-sdk@1.5.5/widgets/markdown", "pragmate-ui@1.0.8/tabs", "@aimpact/ailearn-app@0.7.0/model/wrapper", "pragmate-ui@1.0.8/modal", "pragmate-ui@1.0.8/drawer", "pragmate-ui@1.0.8/toast", "@beyond-js/kernel@0.1.14/routing", "@aimpact/ailearn-app@0.7.0/dashboard/wall/widget.code", "pragmate-ui@1.0.8/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp070DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp070DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk120Tracking) {
      dependency_6 = _aimpactAilearnSdk120Tracking;
    }, function (_beyondJsReactive212Model) {
      dependency_7 = _beyondJsReactive212Model;
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
    }, function (_aimpactAilearnApp070ComponentsUi) {
      dependency_13 = _aimpactAilearnApp070ComponentsUi;
    }, function (_aimpactAilearnApp070Config) {
      dependency_14 = _aimpactAilearnApp070Config;
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
    }, function (_aimpactAilearnApp070ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp070ComponentsIcons;
    }, function (_aimpactChatSdk155ChatComponentCode) {
      dependency_22 = _aimpactChatSdk155ChatComponentCode;
    }, function (_aimpactChatSdk155WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk155WidgetsMarkdown;
    }, function (_pragmateUi108Tabs) {
      dependency_24 = _pragmateUi108Tabs;
    }, function (_aimpactAilearnApp070ModelWrapper) {
      dependency_25 = _aimpactAilearnApp070ModelWrapper;
    }, function (_pragmateUi108Modal) {
      dependency_26 = _pragmateUi108Modal;
    }, function (_pragmateUi108Drawer) {
      dependency_27 = _pragmateUi108Drawer;
    }, function (_pragmateUi108Toast) {
      dependency_28 = _pragmateUi108Toast;
    }, function (_beyondJsKernel0114Routing) {
      dependency_29 = _beyondJsKernel0114Routing;
    }, function (_aimpactAilearnApp070DashboardWallWidgetCode) {
      dependency_30 = _aimpactAilearnApp070DashboardWallWidgetCode;
    }, function (_pragmateUi108Form) {
      dependency_31 = _pragmateUi108Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.2.0"], ["@aimpact/ailearn-api", "0.9.0"], ["@aimpact/chat-sdk", "1.5.5"], ["@aimpact/media-manager", "1.0.0"], ["pragmate-ui", "1.0.9"], ["@beyond-js/reactive", "2.1.2"], ["@beyond-js/http-suite", "0.1.1"], ["@beyond-js/backend", "0.1.10"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/kernel", "0.1.14"], ["@beyond-js/pending-promise", "0.0.5"], ["@beyond-js/react-18-widgets", "1.1.8"], ["@beyond-js/widgets", "1.1.2"], ["@emotion/css", "11.13.5"], ["@emotion/react", "11.14.0"], ["@emotion/styled", "11.14.0"], ["@firebase/auth", "1.10.0"], ["@google-cloud/storage", "7.15.2"], ["@radix-ui/react-accordion", "1.2.12"], ["@radix-ui/react-collapsible", "1.1.12"], ["@radix-ui/react-icons", "1.3.2"], ["@radix-ui/react-select", "2.2.6"], ["@radix-ui/react-separator", "1.1.7"], ["@tiptap/extension-blockquote", "3.2.0"], ["@tiptap/extension-code-block", "3.2.0"], ["@tiptap/extension-horizontal-rule", "3.2.0"], ["@tiptap/extension-image", "3.6.2"], ["@tiptap/extension-task-item", "3.2.0"], ["@tiptap/extension-task-list", "3.2.0"], ["@tiptap/extension-underline", "3.2.0"], ["@tiptap/pm", "3.6.2"], ["@tiptap/react", "3.2.0"], ["@tiptap/starter-kit", "3.2.0"], ["apexcharts", "3.54.1"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.2.4"], ["driver.js", "1.3.5"], ["firebase", "11.6.0"], ["framer-motion", "10.18.0"], ["gsap", "3.13.0"], ["highlight.js", "11.11.1"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.21"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.2.1"], ["marked-mangle", "1.1.10"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.6"], ["react", "18.3.1"], ["react-dom", "18.3.1"], ["react-icons", "5.5.0"], ["react-responsive-masonry", "2.7.1"], ["react-select", "5.10.1"], ["react-simple-wysiwyg", "3.4.0"], ["react-virtuoso", "4.14.0"], ["simplebar-react", "3.3.0"], ["slate", "0.103.0"], ["slate-react", "0.110.3"], ["socket.io-client", "4.8.1"], ["swiper", "12.0.2"], ["tippy.js", "6.3.7"], ["turndown", "7.2.0"], ["uuid", "11.1.0"], ["wavesurfer.js", "7.9.4"], ["yet-another-react-lightbox", "3.25.0"], ["zod", "3.24.2"], ["@beyond-js/local", "0.1.3"], ["@types/node", "20.11.0"], ["@types/react", "18.3.20"], ["@types/react-dom", "18.3.5"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.7.0"], ["@aimpact/rvd", "0.7.0"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.7.0/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['pragmate-ui/components', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['@aimpact/ailearn-app/model/wrapper', dependency_25], ['pragmate-ui/modal', dependency_26], ['pragmate-ui/drawer', dependency_27], ['pragmate-ui/toast', dependency_28], ['@beyond-js/kernel/routing', dependency_29], ['@aimpact/ailearn-app/dashboard/wall/widget.code', dependency_30], ['pragmate-ui/form', dependency_31]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.7.0/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.7.0/dashboard/assignments.widget');
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
        hash: 3591945920,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StudentAssignmentSummary = StudentAssignmentSummary;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _list = require("pragmate-ui/list");
          var React = require("react");
          var _context = require("../../context");
          var _headerSkeleton = require("../../drawer/header-skeleton");
          var _activity = require("./activity");
          var _empty = require("./empty");
          var _header = require("./header");
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
        hash: 2991432068,
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
        hash: 387952368,
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
          var _modalImage = require("./modal-image");
          var _wall = require("./wall");
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
        hash: 59667845,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsInJlYWN0aXZlUHJvcHMiLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIkVycm9yIiwiVHJhY2tpbmdEYXNoYm9hcmQiLCJXYWxsU3RvcmUiLCJQcm9taXNlIiwiYWxsIiwic2V0dXBMYXlvdXQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXQiLCJyZWZyZXNoIiwiYmFja0xpbmsiLCJjbGFzc3Jvb20iLCJicmVhZGNydW1iIiwiZW50aXRpZXMiLCJjbGFzc3Jvb21zIiwidGl0bGUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJsb2ciLCJlIiwidHJpZ2dlciIsInJlZnJlc2hEcmF3ZXIiLCJhY3Rpdml0eSIsInByb21pc2UiLCJQZW5kaW5nUHJvbWlzZSIsImNoYXRNb2RlbCIsImxvYWRBbGwiLCJzZXRUaW1lb3V0IiwicmVzb2x2ZSIsInJlZnJlc2hUcmFja2luZyIsInNlbGVjdEFjdGl2aXR5IiwiYXJjaGl2ZSIsInJlc3RvcmUiLCJhbGVydHMiLCJEYXNoYm9hcmRXYWxsIiwibWVzc2FnZXMiLCJfcmVhY3QiLCJOb3RGb3VuZCIsImNvZGUiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiX2hvb2tzIiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIkRhc2hib2FyZEFjdGlvbnMiLCJkaXNhYmxlZCIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0Iiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsIm9uQ2xpY2siLCJ1c2VTdG9yZSIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidXNlQmluZGVyIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJ3cml0dGVuIiwiTXVsdGlwbGVDaG9pY2VBY3Rpdml0eVBhcnRpY2lwYW50IiwibXVsdGlwbGVDaG9pY2UiLCJwYXJ0aWNpcGFudEFjdGl2aXR5IiwiY29ycmVjdCIsInRvdGFsIiwid3JvbmciLCJjb3VudGVycyIsImNscyIsIlJlYWN0IiwiYW5hbHlzaXMiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsIkljb25TdGF0ZSIsIm9iamVjdGl2ZSIsIlRvb2x0aXAiLCJjb250ZW50IiwicG9pbnRzIiwiX2NoYXRDb21wb25lbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdFRhYiIsInVzZURyYXdlckNvbnRleHQiLCJyZWYiLCJ1c2VSZWYiLCJ0QWN0aXZpdHkiLCJjaGF0SWQiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJhY3Rpdml0eUlkIiwic2V0TWVzc2FnZXMiLCJ1c2VFZmZlY3QiLCJ0cmlnZ2VyQ2hhbmdlIiwib2ZmIiwidGFicyIsInB1c2giLCJUYWIiLCJrZXkiLCJpbnRlcmFjdGlvbnMiLCJjb3VudCIsInRhYiIsIm9wZW5DaGF0IiwibG9hZENoYXQiLCJUYWJzQ29udGFpbmVyIiwiYWN0aXZlIiwiVGFicyIsIlBhbmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eU9iamVjdGl2ZXMiLCJzeW50aGVzaXMiLCJ2YXJpYW50IiwiRHJhd2VyQWxlcnQiLCJwcm9ncmVzIiwiX3dyYXBwZXIiLCJIYW5kV3JpdHRlbiIsInNldHRpbmdzIiwiYXBpcyIsImFpbGVhcm4iLCJwaWN0dXJlIiwib3V0cHV0IiwiZmVlZGJhY2siLCJoYW5kV3JpdHRlbiIsInNob3dJbWFnZSIsInRyYW5zY3JpcHRpb24iLCJfaGFuZFdyaXR0ZW4iLCJfd3JpdHRlbiIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpbmRleCIsInNldFNob3dJbWFnZSIsImhhc1BhcnRpY2lwYXRlZCIsImhhcyIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJkcmF3ZXJDb250ZW50IiwiY2xvc2VzdCIsImVsZW1lbnRSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNGdWxseVZpc2libGUiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsInRpbWVvdXRJZCIsImNsZWFyVGltZW91dCIsIklDT05TIiwidHlwZXMiLCJleGVyY2lzZSIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJXcml0dGVuQWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiYXNzZXNzbWVudCIsInF1ZXN0aW9ucyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJxdWVzdGlvbiIsInVpZCIsImF1ZGlvVXJsIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBbmltYXRlZENvbnRhaW5lciIsIl9tb2RhbCIsIkNvbmZpcm1BY3Rpb24iLCJjYWxsYmFjayIsInNldE9wZW4iLCJ0b2dnbGVPcGVuIiwib25DbGlja0J1dHRvbiIsIm9uQ29uZmlybSIsImFkZENyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsIl9oZWFkZXJTa2VsZXRvbiIsIl9jaGF0VGFiIiwiX2hlYWRlciIsIlN0dWRlbnREcmF3ZXJDaGF0Iiwic2hvd0RyYXdlciIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwib25SZWZyZXNoIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJTdHVkZW50RHJhd2VySGVhZGVyIiwic2hvd0FjdGl2aXR5IiwiRHJhd2VyIiwiX3RvYXN0Iiwic2hvd0NyZWRpdHMiLCJwcm9jZXNzaW5nIiwic2V0UHJvY2Vzc2luZyIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJwIiwiZW5hYmxlQUkiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJjb25zdW1lZCIsIm9mIiwibm9FbmFibGUiLCJDbG9zZUJ1dHRvbiIsIl9hY3Rpdml0eSIsIlN0dWRlbnRBc3NpZ25tZW50U3VtbWFyeSIsInNldEl0ZW1zIiwic2V0UmVhZHkiLCJfaXRlbSIsIkdlbmVyYWxWaWV3IiwiSXRlbSIsIl9hY3Rpdml0eUljb24iLCJfbGFiZWwiLCJfc3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlDaGF0Iiwic3VidHlwZSIsIkFjdGl2aXR5SWNvbiIsIk1vZHVsZUFjdGl2aXR5TWVzc2FnZXMiLCJNb2R1bGVBY3Rpdml0eVN0YXR1cyIsIk1vZHVsZUFjdGl2aXR5RGV0YWlscyIsIkljb24iLCJNb2R1bGVBY3Rpdml0eSIsIk1vZHVsZUFjdGl2aXR5U3Bva2VuIiwiTW9kdWxlQWN0aXZpdHlNdWx0aXBsZUNob2ljZSIsImxhYmVsIiwiZG9uZSIsInRvdGFsTWVzc2FnZXMiLCJpY29ucyIsIk9iamVjdCIsInZhbHVlcyIsImpvaW4iLCJtZXNzYWdlQ291bnRlciIsImhhc0FsZXJ0cyIsIkljb25JdGVtIiwicGFydGljaXBhbnRVcmkiLCJvcGVuRHJhd2VyIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhbHQiLCJfaWNvbkJveCIsIkljb25Cb3giLCJhcyIsIkRyYXdlckFsZXJ0SXRlbSIsIl9tYXJrZG93biIsIml0ZXJhdGlvbiIsImFzc2lzdGFudCIsIkFQUF9OQU1FIiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJEYXNoYm9hcmRDb250ZXh0IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiSGVhZGVyIiwiY2xhc3N3b3JrcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhd2VyQ29udGV4dCIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsIkRhc2hib2FyZCIsIlN0dWRlbnRzSGVhZGVyIiwiZ2VuZXJhbCIsIldhbGwiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiUGFnZUxvYWRlciIsIl9yb3V0aW5nIiwiX2RyYXdlciIsIl9kcmF3ZXIyIiwiX2RyYXdlckNoYXQiLCJfbW9kYWxJbWFnZSIsIkFzaWRlRHJhd2VyIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsInB1c2hTdGF0ZSIsImRvY3VtZW50Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiTW9kYWxJbWFnZSIsIk1vZGFsIiwiX3dpZGdldCIsImhlYWRlciIsIldhbGxWaWV3IiwiZGVmaW5lUHJvcGVydHkiLCJfaWNvbnMyIiwiQWN0aXZpdHlGaWx0ZXIiLCJoYW5kbGVDbGljayIsIl91c2VyRGF0YSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsInNpemUiLCJVc2VyRGF0YSIsIl9mb3JtIiwiX2FjdGl2aXR5RmlsdGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic2VhcmNoIiwic3R1ZGVudEhlYWRlciIsIl8iLCJfZGFzaGJvYXJkIiwiZm91bmQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS9pbmRleC50cyIsIi90cy9zdG9yZS93YWxsLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2hhbmQtd3JpdHRlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9hbnN3ZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS93cml0dGVuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kYXNoYm9hcmQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9tb2RhbC1pbWFnZS50c3giLCIvdHMvdmlld3MvZHJhd2VyL3dhbGwvaW5kZXgudHN4IiwiL2dsb2JhbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FjdGl2aXR5LWZpbHRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9oZWFkZXIvc3R1ZGVudC1oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci91c2VyLWRhdGEudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFDTztVQUFVLE1BQ1hHLFVBQVcsU0FB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