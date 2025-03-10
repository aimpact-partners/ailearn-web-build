System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.20/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.20/components/ui", "@aimpact/ailearn-app@0.3.20/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.20/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_4 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0320DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0320DashboardLayoutWidget;
    }, function (_aimpactAilearnSdk110Tracking) {
      dependency_6 = _aimpactAilearnSdk110Tracking;
    }, function (_aimpactReactive001Model) {
      dependency_7 = _aimpactReactive001Model;
    }, function (_beyondJsKernel019Core) {
      dependency_8 = _beyondJsKernel019Core;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi100Beta7Components) {
      dependency_11 = _pragmateUi100Beta7Components;
    }, function (_beyondJsReact18Widgets113Hooks) {
      dependency_12 = _beyondJsReact18Widgets113Hooks;
    }, function (_aimpactAilearnApp0320ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0320ComponentsUi;
    }, function (_aimpactAilearnApp0320Config) {
      dependency_14 = _aimpactAilearnApp0320Config;
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
    }, function (_aimpactAilearnApp0320ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0320ComponentsIcons;
    }, function (_aimpactChatSdk141ChatComponentCode) {
      dependency_22 = _aimpactChatSdk141ChatComponentCode;
    }, function (_aimpactChatSdk141WidgetsMarkdown) {
      dependency_23 = _aimpactChatSdk141WidgetsMarkdown;
    }, function (_pragmateUi100Beta7Tabs) {
      dependency_24 = _pragmateUi100Beta7Tabs;
    }, function (_pragmateUi100Beta7Modal) {
      dependency_25 = _pragmateUi100Beta7Modal;
    }, function (_pragmateUi100Beta7Drawer) {
      dependency_26 = _pragmateUi100Beta7Drawer;
    }, function (_lodash) {
      dependency_27 = _lodash;
    }, function (_beyondJsKernel019Routing) {
      dependency_28 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_29 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.20"], ["@aimpact/ailearn-app", "0.3.20"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.20/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/drawer', dependency_26], ['lodash', dependency_27], ['@beyond-js/kernel/routing', dependency_28], ['pragmate-ui/form', dependency_29]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.20/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.20/dashboard/assignments.widget');
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

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 1501079645,
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
          //@ts-ignore

          class StoreManager extends _model.ReactiveModel {
            isStore;
            #tracking;
            #activitySelected;
            get activitySelected() {
              return this.#activitySelected;
            }
            get currentTracking() {
              return this.#tracking;
            }
            #session;
            get session() {
              return this.#session;
            }
            #view;
            get view() {
              return this.#view;
            }
            set view(view) {
              this.#view = view;
            }
            #assignmentId;
            get assignmentId() {
              return this.#assignmentId;
            }
            get assignment() {
              return this.#session;
            }
            #model;
            /**
             * Dashboard model
             */
            get model() {
              return this.#model;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            #filter;
            get participants() {
              if (!this.#filter) return this.#model.participants.items;
              const response = this.#model.participants.items.filter(item => item.user.name.toLowerCase().includes(this.#filter.toLowerCase()));
              return response;
            }
            #globalTexts;
            get globalTexts() {
              return this.#globalTexts.value;
            }
            get ready() {
              return super.ready && this.#texts.ready && this.#globalTexts.ready;
            }
            #users = new Map();
            #currentTracking;
            #trackings = new Map();
            get users() {
              return this.#users;
            }
            filter(filter) {
              this.#filter = filter;
              this.triggerEvent('change');
            }
            constructor() {
              super();
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
                if (this.#model && this.#model.id === id) return;
                this.#model = new _tracking.TrackingDashboard({
                  id
                });
                this.fetching = true;
                this.#assignmentId = id;
                await this.#texts.fetch();
                await this.#model.load(id);
                globalThis.m = this.#model;
                _dashboardLayout.LayoutBroker.refresh = this.refresh;
                _dashboardLayout.LayoutBroker.set({
                  backLink: `/classrooms/view/${this.#model.classroom.id}`,
                  breadcrumb: [[this.globalTexts.entities.classrooms, '/classrooms/list'], [this.#model.classroom.name, `/classrooms/view/${this.#model.classroom.id}`], [`Dashboard > ${this.#model.module.title}`]]
                });
              } catch (e) {
                console.log(e);
              } finally {
                super.ready = true;
                this.fetching = false;
              }
            }
            async loadUserTracking(userId) {
              try {
                const participant = this.model.participants.map.get(userId);
                await participant.load();
                this.#currentTracking = participant;
                // if (this.#trackings.has(userId)) return this.#trackings.get(userId);
                // this.#currentTracking = Tracking.get({ assignmentId: this.#assignmentId, userId, chat: true });
                // this.#trackings.set(userId, this.#currentTracking);
                // this.#currentTracking.load({ id: this.#assignmentId, userId });
                // this.triggerEvent();
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
            }
            /**
             *
             * @param activity DashboardActivity entity
             */
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
        hash: 3579053472,
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
            const onClick = () => {
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
        hash: 3479951444,
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
            const {
              analysis
            } = item;
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
        hash: 2704072229,
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
        hash: 2563312999,
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
                  activityId: activity.id,
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
        hash: 1522615955,
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
            }, texts.activities.chat, item.messages?.count ? React.createElement("i", {
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
                }, texts.activities.chat)),
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
        hash: 1924745786,
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
            const clsDrawer = `ds-drawer__activity-item ${isDragging ? 'is-open' : ''} ${open ? 'is-open' : ''}}`;
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
        hash: 178179848,
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
              participantActivity
            } = item;
            const {
              showDrawer,
              setShowDrawer
            } = (0, _context.useDrawerContext)();
            const [ready, setReady] = React.useState(participantActivity.chatModel.ready);
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
            return React.createElement("div", {
              className: "ds-drawer-container"
            }, React.createElement(_header.StudentDrawerHeader, {
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
        hash: 2375181401,
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
          function StudentDrawerHeader(props) {
            const {
              item,
              showCredits = false,
              showActivity = false,
              onRefresh,
              onBack
            } = props;
            const {
              participant,
              participantActivity
            } = item;
            const activity = participantActivity?.activity;
            const {
              texts
            } = (0, _context.useDrawerContext)();
            const {
              user: student
            } = participant;
            const [credits, setCredits] = React.useState(participant.credits.getProperties());
            (0, _hooks.useBinder)([participant], () => {
              setCredits(participant.credits.getProperties());
            });
            return React.createElement(React.Fragment, null, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("div", null, React.createElement("h2", null, student.name), showCredits && credits.total ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, texts.interactions, ": ", credits.consumed, " ", texts.of, " ", credits.total) : null, showActivity && activity ? React.createElement("div", {
              className: "drawer__header__subtext"
            }, activity.title) : null), React.createElement("div", {
              className: "drawer__header-actions"
            }, !!onBack && React.createElement(_icons.IconButton, {
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
        hash: 2813076718,
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
        hash: 1505527314,
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
        hash: 4061542701,
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

      /*******************************************
      INTERNAL MODULE: ./views/drawer/aside-drawer
      *******************************************/

      ims.set('./views/drawer/aside-drawer', {
        hash: 664644281,
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

      /***********************************
      INTERNAL MODULE: ./views/drawer/wall
      ***********************************/

      ims.set('./views/drawer/wall', {
        hash: 3833546780,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wall = Wall;
          var React = require("react");
          var Drawer = require("pragmate-ui/drawer");
          var _context = require("../context");
          function Wall({
            item
          }) {
            const {
              store
            } = (0, _context.useDrawerContext)();
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, "Wall"), React.createElement("div", null, React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
              className: "ds-drawer__content"
            }, React.createElement("app-dashboard-wall", {
              id: store.assignmentId
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
        hash: 4178821885,
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
          var _asideDrawer = require("./drawer/aside-drawer");
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
            const [view, setView] = (0, _react.useState)('general');
            const [, setTotalParticipants] = (0, _react.useState)(store.model?.participants?.items?.length ?? 0);
            const [state, setState] = (0, _react.useState)(store.getProperties());
            const [fetching, setFetching] = (0, _react.useState)(store.fetching);
            const {
              texts
            } = store;
            const ref = _react.default.useRef(null);
            (0, _hooks.useBinder)([store], () => setTotalParticipants(store.participants.length ?? 0), 'data.updated');
            (0, _hooks.useBinder)([store], () => {
              setState(store.getProperties());
            });
            (0, _hooks.useBinder)([store], () => setFetching(store.fetching), 'fetching.changed');
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
              view,
              setView
            };
            const drawerValue = {
              texts,
              model: store.model,
              showDrawer,
              store,
              setShowDrawer
            };
            const cls = `dashboard-container${fetching ? ' is-fetching' : ''}`;
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
            }, _react.default.createElement(_asideDrawer.AsideDrawer, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidHJhY2tpbmciLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZmlsdGVyIiwicGFydGljaXBhbnRzIiwiaXRlbXMiLCJyZXNwb25zZSIsIml0ZW0iLCJ1c2VyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwidXNlcnMiLCJNYXAiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaWQiLCJUcmFja2luZ0Rhc2hib2FyZCIsImZldGNoaW5nIiwibSIsInJlZnJlc2giLCJzZXQiLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImUiLCJjb25zb2xlIiwibG9nIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsInBhcnRpY2lwYW50IiwibWFwIiwiZXJyb3IiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwid2FsbCIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiYWN0aXZpdGllcyIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIl9pY29ucyIsIl9saXN0IiwiX3BhcnRpY2lwYW50IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInR5cGUiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJsZW5ndGgiLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJzcGVjcyIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImRhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsImFjdGl2aXR5SWQiLCJJY29uU3RhdGUiLCJvYmplY3RpdmUiLCJUb29sdGlwIiwiY29udGVudCIsInBvaW50cyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwibWVzc2FnZXMiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfY29uZmlnIiwidWlkIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIlN0dWRlbnREcmF3ZXJIZWFkZXIiLCJzaG93QWN0aXZpdHkiLCJEcmF3ZXIiLCJzaG93Q3JlZGl0cyIsIm9uUmVmcmVzaCIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9mIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwicG9zaXRpb24iLCJXYWxsIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsImRlZmluZVByb3BlcnR5IiwiX2ljb25zMiIsIkFjdGl2aXR5RmlsdGVyIiwiaGFuZGxlQ2xpY2siLCJfdXNlckRhdGEiLCJwaWN0dXJlIiwiY3JlYXRvciIsIm93bmVyIiwib25DbGFzc3Jvb21DbGljayIsIkVudGl0eUltYWdlIiwiZW50aXR5IiwiVXNlckRhdGEiLCJfZm9ybSIsIl9hY3Rpdml0eUZpbHRlciIsIlN0dWRlbnRzSGVhZGVyIiwibGlzdENscyIsInJlZnJlc2hpbmciLCJzZXRSZWZyZXNoaW5nIiwib25GaWx0ZXIiLCJjdXJyZW50VGFyZ2V0IiwiSW5wdXQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwibGlzdCIsInNlYXJjaCIsInN0dWRlbnRIZWFkZXIiLCJfIiwiX2FzaWRlRHJhd2VyIiwiX3ZpZXciLCJfZ2VuZXJhbCIsIl9zdHVkZW50SGVhZGVyIiwic2V0VG90YWxQYXJ0aWNpcGFudHMiLCJzdGF0ZSIsInNldFN0YXRlIiwiUGFnZUxvYWRlciIsImZvdW5kIiwidG90YWxQYXJ0aWNpcGFudHMiLCJkcmF3ZXJWYWx1ZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzLzQwNC50c3giLCIvdHMvdmlld3MvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9jaGF0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9wYXJ0aWNpcGFudC9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2NoYXQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvYW5zd2VyLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS9xdWVzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvY2hhdC10YWIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NvbmZpcm0tYWN0aW9uLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9kcmF3ZXItY2hhdC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2hlYWRlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZ2VuZXJhbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2NoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9kZXRhaWxzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9sYWJlbC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L211bHRpcGxlLWNob2ljZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3Nwb2tlbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L3N0YXR1cy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FjdGl2aXR5LWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9kcmF3ZXItYWxlcnRzL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaWNvbi1ib3gudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb2JqZWN0aXZlLWljb24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHMiLCIvdHMvdmlld3MvZHJhd2VyL2FzaWRlLWRyYXdlci50c3giLCIvdHMvdmlld3MvZHJhd2VyL2NvbnRlbnQudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9oZWFkZXItc2tlbGV0b24udHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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