System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.16/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.16/components/ui", "@aimpact/ailearn-app@0.3.16/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.16/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, ActivityView, ChatActivityParticipant, MultipleChoiceActivityParticipant, SpokenActivityParticipant, EmptyCard, GeneralView, ActivityIcon, DrawerAlert, DrawerAlertItem, IconBox, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0316DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0316DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp0316ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0316ComponentsUi;
    }, function (_aimpactAilearnApp0316Config) {
      dependency_13 = _aimpactAilearnApp0316Config;
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
    }, function (_aimpactAilearnApp0316ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp0316ComponentsIcons;
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
    }, function (_lodash) {
      dependency_26 = _lodash;
    }, function (_beyondJsKernel019Routing) {
      dependency_27 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta7Form) {
      dependency_28 = _pragmateUi100Beta7Form;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.16"], ["@aimpact/ailearn-app", "0.3.16"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/tooltip', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20], ['@aimpact/chat-sdk/chat-component.code', dependency_21], ['@aimpact/chat-sdk/widgets/markdown', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/modal', dependency_24], ['pragmate-ui/drawer', dependency_25], ['lodash', dependency_26], ['@beyond-js/kernel/routing', dependency_27], ['pragmate-ui/form', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.16/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.16/dashboard/assignments.widget');
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