System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.29/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.29/components/ui", "@aimpact/ailearn-app@0.3.29/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.29/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "pragmate-ui@1.0.0-beta.7/toast", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets113Page) {
      dependency_3 = _beyondJsReact18Widgets113Page;
    }, function (_aimpactAilearnSdk110Core) {
      dependency_4 = _aimpactAilearnSdk110Core;
    }, function (_aimpactAilearnApp0329DashboardLayoutWidget) {
      dependency_5 = _aimpactAilearnApp0329DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp0329ComponentsUi) {
      dependency_13 = _aimpactAilearnApp0329ComponentsUi;
    }, function (_aimpactAilearnApp0329Config) {
      dependency_14 = _aimpactAilearnApp0329Config;
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
    }, function (_aimpactAilearnApp0329ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp0329ComponentsIcons;
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
    }, function (_pragmateUi100Beta7Toast) {
      dependency_27 = _pragmateUi100Beta7Toast;
    }, function (_lodash) {
      dependency_28 = _lodash;
    }, function (_beyondJsKernel019Routing) {
      dependency_29 = _beyondJsKernel019Routing;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_5], ['@aimpact/ailearn-sdk/tracking', dependency_6], ['@aimpact/reactive/model', dependency_7], ['@beyond-js/kernel/core', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['react', dependency_10], ['pragmate-ui/components', dependency_11], ['@beyond-js/react-18-widgets/hooks', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/config', dependency_14], ['pragmate-ui/icons', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/image', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/tooltip', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['@aimpact/chat-sdk/chat-component.code', dependency_22], ['@aimpact/chat-sdk/widgets/markdown', dependency_23], ['pragmate-ui/tabs', dependency_24], ['pragmate-ui/modal', dependency_25], ['pragmate-ui/drawer', dependency_26], ['pragmate-ui/toast', dependency_27], ['lodash', dependency_28], ['@beyond-js/kernel/routing', dependency_29], ['pragmate-ui/form', dependency_30]]);
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
        hash: 255524680,
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
              console.log(10, this.uri.vars.get('id'));
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
        hash: 2047344966,
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
        hash: 2199690876,
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
        hash: 703240049,
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
        hash: 3577258426,
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
              store,
              onRefresh
            } = (0, _context.useDrawerContext)();
            const [fetching, setFetching] = React.useState(false);
            const cls = `ds-drawer-container${fetching ? ' is-fetching' : ''}`;
            return React.createElement("div", {
              className: cls
            }, React.createElement("header", {
              className: "dashboard-drawer__header"
            }, React.createElement("section", {
              className: "user__title flex-container flex-space-between"
            }, React.createElement("h2", null, "Wall"), React.createElement("div", {
              className: "drawer__header-actions"
            }, React.createElement(Drawer.CloseButton, null)))), React.createElement("section", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwibG9hZCIsImhpZGUiLCJjbGVhciIsImV4cG9ydHMiLCJfZGFzaGJvYXJkTGF5b3V0IiwiX3RyYWNraW5nIiwiX21vZGVsIiwiX2NvcmUiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwiaXNTdG9yZSIsInRyYWNraW5nIiwiYWN0aXZpdHlTZWxlY3RlZCIsImN1cnJlbnRUcmFja2luZyIsInNlc3Npb24iLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZmlsdGVyIiwicGFydGljaXBhbnRzIiwiaXRlbXMiLCJyZXNwb25zZSIsIml0ZW0iLCJ1c2VyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwidXNlcnMiLCJNYXAiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJzdGF0ZSIsInRvdGFsUGFydGljaXBhbnRzIiwibGVuZ3RoIiwiZmV0Y2hpbmciLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiTGF5b3V0QnJva2VyIiwic2V0TW9kZWwiLCJvdmVybGF5Iiwib24iLCJmZXRjaCIsImdsb2JhbFRoaXMiLCJpZCIsIlRyYWNraW5nRGFzaGJvYXJkIiwibSIsInJlZnJlc2giLCJzZXQiLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImUiLCJsb2FkVXNlclRyYWNraW5nIiwidXNlcklkIiwicGFydGljaXBhbnQiLCJtYXAiLCJlcnJvciIsInRyaWdnZXIiLCJyZWZyZXNoRHJhd2VyIiwiYWN0aXZpdHkiLCJwcm9taXNlIiwiUGVuZGluZ1Byb21pc2UiLCJjaGF0TW9kZWwiLCJsb2FkQWxsIiwic2V0VGltZW91dCIsInJlc29sdmUiLCJyZWZyZXNoVHJhY2tpbmciLCJzZWxlY3RBY3Rpdml0eSIsImFyY2hpdmUiLCJyZXN0b3JlIiwiX3JlYWN0IiwiTm90Rm91bmQiLCJjb2RlIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJfaG9va3MiLCJEYXNoYm9hcmRBY3Rpb25zIiwic2V0U2hvd0RyYXdlciIsInVzZURhc2hib2FyZENvbnRleHQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJ1c2VTdGF0ZSIsInNldEZldGNoaW5nIiwib25DbGljayIsInVzZUJpbmRlciIsImFjdGlvblRleHQiLCJhcmNoaXZlZCIsImFjdGlvbiIsImNsYXNzTmFtZSIsImlzVXNlckNyZWF0b3IiLCJCdXR0b24iLCJib3JkZXJlZCIsImljb24iLCJkaXNhYmxlZCIsImFjdGlvbnMiLCJ3YWxsIiwiX3VpIiwiRW1wdHlNYXRlcmlhbCIsIm1lc3NhZ2UiLCJhY3Rpdml0aWVzIiwiZW1wdHkiLCJFbXB0eUNhcmQiLCJ0ZXh0IiwiX2ljb25zIiwiX2xpc3QiLCJfcGFydGljaXBhbnQiLCJfZW1wdHkiLCJBY3Rpdml0eVZpZXciLCJzZXRWaWV3IiwidXBkYXRlZCIsInNldFVwZGF0ZWQiLCJvbkNsb3NlIiwidW5kZWZpbmVkIiwidHlwZSIsIkljb25CdXR0b24iLCJDb25kaXRpb25hbENvbnRhaW5lciIsImNvbmRpdGlvbiIsInRlcm5hcnkiLCJvcHRpb25zIiwidHJ1ZSIsIkxpc3QiLCJjb250cm9sIiwiQWN0aXZpdHlQYXJ0aWNpcGFudCIsInNwZWNzIiwiZmFsc2UiLCJFbXB0eSIsIl9pbWFnZSIsIl9jb2xsYXBzaWJsZSIsIl9vYmplY3RpdmVJY29uIiwiX29iamVjdGl2ZSIsIkNoYXRBY3Rpdml0eVBhcnRpY2lwYW50IiwiZGF0YSIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJhbmFseXNpcyIsImljb25OYW1lcyIsInBlbmRpbmciLCJjb21wbGV0ZWQiLCJvdXRzdGFuZGluZyIsInN0YXR1cyIsIm9iamVjdGl2ZXNTdGF0dXMiLCJBcHBJY29uIiwibm9BbmFseXNpcyIsIl90b29sdGlwIiwiSWNvblN0YXRlIiwib2JqZWN0aXZlIiwiVG9vbHRpcCIsImNvbnRlbnQiLCJwb2ludHMiLCJfY2hhdENvbXBvbmVudCIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0VGFiIiwidXNlRHJhd2VyQ29udGV4dCIsInJlZiIsInVzZVJlZiIsInRBY3Rpdml0eSIsImNoYXRJZCIsIm1lc3NhZ2VzIiwiRW1wdHlDaGF0Iiwic2xpY2UiLCJBZ2VudHNDaGF0Q29udGFpbmVyIiwiQWdlbnRzQ2hhdFBhbmVsIiwiZGVzY3JpcHRpb24iLCJfdGFicyIsIl9kcmF3ZXJBbGVydHMiLCJfb2JqZWN0aXZlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlDaGF0Qm9keSIsInByb3BzIiwiYWN0aXZpdHlJZCIsInNldE1lc3NhZ2VzIiwidXNlRWZmZWN0IiwidHJpZ2dlckNoYW5nZSIsIm9mZiIsInRhYnMiLCJwdXNoIiwiVGFiIiwia2V5IiwiaW50ZXJhY3Rpb25zIiwiY291bnQiLCJ0YWIiLCJhbGVydHMiLCJvcGVuQ2hhdCIsImxvYWRDaGF0IiwiVGFic0NvbnRhaW5lciIsImFjdGl2ZSIsIlRhYnMiLCJQYW5lcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlPYmplY3RpdmVzIiwic3ludGhlc2lzIiwidmFyaWFudCIsIkRyYXdlckFsZXJ0IiwicHJvZ3JlcyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHkiLCJpbmRleCIsImhhc1BhcnRpY2lwYXRlZCIsImhhcyIsImNsc0RyYXdlciIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjbG9zZXN0Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwiSUNPTlMiLCJ0eXBlcyIsImRlYmF0ZSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZUJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5U3Bva2VuQm9keSIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9uT3B0aW9ucyIsImFuc3dlciIsImNvcnJlY3RBbnN3ZXIiLCJzZWxlY3RlZCIsIl9xdWVzdGlvbnMiLCJwYXJ0aWNpcGF0aW9uIiwiZGV0YWlsIiwiYXNzZXNzbWVudCIsInF1ZXN0aW9ucyIsIlN0dWRlbnRBc3NpZ25tZW50QWN0aXZpdHlNdWx0aXBsZUNob2ljZVF1ZXN0aW9ucyIsIl9hbnN3ZXIiLCJxdWVzdGlvbiIsIl9jb25maWciLCJ1aWQiLCJhdWRpb1VybCIsInBhcmFtcyIsImFwaXMiLCJhaWxlYXJuIiwib3V0cHV0IiwiZmVlZGJhY2siLCJ0cmFuc2NyaXB0aW9uIiwiYXVkaW8iLCJBdWRpb1BsYXllciIsInVybCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfbW9kYWwiLCJDb25maXJtQWN0aW9uIiwiY2FsbGJhY2siLCJzZXRPcGVuIiwidG9nZ2xlT3BlbiIsIm9uQ2xpY2tCdXR0b24iLCJvbkNvbmZpcm0iLCJhZGRDcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaGVhZGVyU2tlbGV0b24iLCJfY2hhdFRhYiIsIl9oZWFkZXIiLCJTdHVkZW50RHJhd2VyQ2hhdCIsInNob3dEcmF3ZXIiLCJzZXRSZWFkeSIsIkRyYXdlclNrZWxldG9uIiwib25CYWNrIiwiU3R1ZGVudERyYXdlckhlYWRlciIsInNob3dBY3Rpdml0eSIsIkRyYXdlciIsIl90b2FzdCIsInNob3dDcmVkaXRzIiwib25SZWZyZXNoIiwicHJvY2Vzc2luZyIsInNldFByb2Nlc3NpbmciLCJzdHVkZW50IiwiY3JlZGl0cyIsInNldENyZWRpdHMiLCJnZXRQcm9wZXJ0aWVzIiwicCIsImVuYWJsZUFJIiwidG9hc3QiLCJzdWNjZXNzIiwiY29uc3VtZWQiLCJvZiIsIm5vRW5hYmxlIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJfcm91dGluZyIsIl9kcmF3ZXIiLCJfZHJhd2VyMiIsIl9kcmF3ZXJDaGF0IiwiX3dhbGwiLCJBc2lkZURyYXdlciIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJwdXNoU3RhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImxpc3QiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiXyIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsInNldFN0YXRlIiwiUGFnZUxvYWRlciIsImZvdW5kIiwiZHJhd2VyVmFsdWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci93YWxsLnRzeCIsIi9nbG9iYWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hY3Rpdml0eS1maWx0ZXIudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaGVhZGVyL3N0dWRlbnQtaGVhZGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvdXNlci1kYXRhLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxd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