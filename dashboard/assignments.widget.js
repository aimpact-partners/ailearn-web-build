System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.29/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.29/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.3.29/dashboard/wall/widget.widget", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    setters: [function (_beyondJsWidgets111Render) {
      dependency_0 = _beyondJsWidgets111Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_2 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_3 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0329DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0329DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_5 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_6 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_7 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_10 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_11 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329Config) {
      dependency_13 = _aimpactAilearnApp0329Config;
    }, function (_pragmateUi100Beta7Icons) {
      dependency_14 = _pragmateUi100Beta7Icons;
    }, function (_pragmateUi100Beta7List) {
      dependency_15 = _pragmateUi100Beta7List;
    }, function (_pragmateUi100Beta7Empty) {
      dependency_16 = _pragmateUi100Beta7Empty;
    }, function (_pragmateUi100Beta7Image) {
      dependency_17 = _pragmateUi100Beta7Image;
    }, function (_pragmateUi100Beta7Collapsible) {
      dependency_18 = _pragmateUi100Beta7Collapsible;
    }, function (_pragmateUi100Beta7Tooltip) {
      dependency_19 = _pragmateUi100Beta7Tooltip;
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp0329ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_21 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_22 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_23 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_24 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_25 = _pragmateUi100Beta7Drawer;
    }, function (_pragmateUi100Beta7Toast) {
      dependency_26 = _pragmateUi100Beta7Toast;
    }, function (_lodash) {
      dependency_27 = _lodash;
    }, function (_beyondJsKernel019Routing) {
      dependency_28 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0329DashboardWallWidgetWidget) {
      dependency_29 = _aimpactAilearnApp0329DashboardWallWidgetWidget;
    }, function (_pragmateUi100Beta7Form) {
      dependency_30 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["@beyond-js/kernel", "0.1.9"], ["pragmate-ui", "1.0.0-beta.7"], ["@beyond-js/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["clsx", "2.1.1"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.29"], ["@aimpact/ailearn-app", "0.3.29"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.29/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/tooltip', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20], ['@aimpact/chat-sdk/chat-component.code', dependency_21], ['@aimpact/chat-sdk/widgets/markdown', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/modal', dependency_24], ['pragmate-ui/drawer', dependency_25], ['pragmate-ui/toast', dependency_26], ['lodash', dependency_27], ['@beyond-js/kernel/routing', dependency_28], ['@aimpact/ailearn-app/dashboard/wall/widget.widget', dependency_29], ['pragmate-ui/form', dependency_30]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.29/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.29/dashboard/assignments.widget');
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
        hash: 2629913551,
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
              this.view = 'activity';
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
        hash: 2153615600,
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
        hash: 902094316,
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
            const onRefresh = event => {
              event.stopPropagation();
              setRefreshing(true);
              store.refresh();
              setTimeout(() => {
                setRefreshing(false);
              }, 1000);
            };
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
        hash: 3997464104,
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
              condition: !!store.activitySelected,
              ternary: true,
              options: {
                false: _react.default.createElement(_general.GeneralView, null),
                true: _react.default.createElement(_view.ActivityView, null)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIl93YWxsIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJzZXNzaW9uIiwiYXNzaWdubWVudElkIiwidHJhY2tpbmciLCJjdXJyZW50VHJhY2tpbmciLCJ0cmFja2luZ3MiLCJNYXAiLCJtb2RlbCIsImFjdGl2aXR5U2VsZWN0ZWQiLCJmaWx0ZXIiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsImdsb2JhbFRleHRzIiwidXNlcnMiLCJ3YWxsU3RvcmUiLCJhc3NpZ25tZW50IiwidmFsdWUiLCJwYXJ0aWNpcGFudHMiLCJpdGVtcyIsInJlc3BvbnNlIiwiaXRlbSIsInVzZXIiLCJuYW1lIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInJlYWR5Iiwid2FsbCIsInRyaWdnZXJFdmVudCIsInN0YXRlIiwidG90YWxQYXJ0aWNpcGFudHMiLCJsZW5ndGgiLCJmZXRjaGluZyIsInZpZXciLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJMYXlvdXRCcm9rZXIiLCJzZXRNb2RlbCIsIm92ZXJsYXkiLCJvbiIsImZldGNoIiwiZ2xvYmFsVGhpcyIsImlkIiwiRXJyb3IiLCJUcmFja2luZ0Rhc2hib2FyZCIsIldhbGxTdG9yZSIsIlByb21pc2UiLCJhbGwiLCJzZXR1cExheW91dCIsImVycm9yIiwiY29uc29sZSIsInJlZnJlc2giLCJzZXQiLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImxvYWRVc2VyVHJhY2tpbmciLCJ1c2VySWQiLCJwYXJ0aWNpcGFudCIsIm1hcCIsImUiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIkRhc2hib2FyZFdhbGwiLCJtZXNzYWdlcyIsImxvZyIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIkVtcHR5Q2hhdCIsInNsaWNlIiwiQWdlbnRzQ2hhdENvbnRhaW5lciIsIkFnZW50c0NoYXRQYW5lbCIsImRlc2NyaXB0aW9uIiwiX3RhYnMiLCJfZHJhd2VyQWxlcnRzIiwiX29iamVjdGl2ZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5Q2hhdEJvZHkiLCJwcm9wcyIsImFjdGl2aXR5SWQiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwidGFiIiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfY29uZmlnIiwidWlkIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIm9uUmVmcmVzaCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfcm91dGluZyIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJfd2lkZ2V0IiwiV2FsbFZpZXciLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0U3RhdGUiLCJQYWdlTG9hZGVyIiwiZm91bmQiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlL2luZGV4LnRzIiwiL3RzL3N0b3JlL3dhbGwudHMiLCIvdHMvdmlld3MvNDA0LnRzeCIsIi90cy92aWV3cy9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlcy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9hbnN3ZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL3F1ZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jaGF0LXRhYi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY29uZmlybS1hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2RyYXdlci1jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9lbXB0eS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9nZW5lcmFsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2RldGFpbHMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2xhYmVsLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvc3RhdHVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWN0aXZpdHktaWNvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaXRlbS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lbXB0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9pY29uLWJveC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vYmplY3RpdmUtaWNvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50cyIsIi90cy92aWV3cy9kcmF3ZXIvY29udGVudC50c3giLCIvdHMvdmlld3MvZHJhd2VyL2hlYWRlci1za2VsZXRvbi50c3giLCIvdHMvdmlld3MvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBQ087VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNILEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7O1lBRTNDO1lBRUE7OztZQUdBRSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csS0FBSyxFQUFFO1lBQ3BCOztVQUNBQyxPQUFBLENBQUFkLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWUsZ0JB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