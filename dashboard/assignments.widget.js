System.register(["@beyond-js/widgets@1.1.1/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.3/page", "@aimpact/ailearn-sdk@1.1.0/core", "@aimpact/ailearn-app@0.3.24/dashboard-layout.widget", "@aimpact/ailearn-sdk@1.1.0/tracking", "@aimpact/reactive@0.0.1/model", "@beyond-js/kernel@0.1.9/core", "@beyond-js/kernel@0.1.9/texts", "react@18.2.0", "pragmate-ui@1.0.0-beta.7/components", "@beyond-js/react-18-widgets@1.1.3/hooks", "@aimpact/ailearn-app@0.3.24/components/ui", "@aimpact/ailearn-app@0.3.24/config", "pragmate-ui@1.0.0-beta.7/icons", "pragmate-ui@1.0.0-beta.7/list", "pragmate-ui@1.0.0-beta.7/empty", "pragmate-ui@1.0.0-beta.7/image", "pragmate-ui@1.0.0-beta.7/collapsible", "pragmate-ui@1.0.0-beta.7/tooltip", "@aimpact/ailearn-app@0.3.24/components/icons", "@aimpact/chat-sdk@1.4.1/chat-component.code", "@aimpact/chat-sdk@1.4.1/widgets/markdown", "pragmate-ui@1.0.0-beta.7/tabs", "pragmate-ui@1.0.0-beta.7/modal", "pragmate-ui@1.0.0-beta.7/drawer", "lodash@4.17.21", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.7/form"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0324DashboardLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0324DashboardLayoutWidget;
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
    }, function (_aimpactAilearnApp0324ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0324ComponentsUi;
    }, function (_aimpactAilearnApp0324Config) {
      dependency_13 = _aimpactAilearnApp0324Config;
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
    }, function (_aimpactAilearnApp0324ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp0324ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/agents-api", "0.4.1"], ["@aimpact/ailearn-sdk", "1.1.0"], ["@aimpact/ailearn-api", null], ["@aimpact/auth", null], ["@aimpact/chat-sdk", "1.4.1"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.7"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.1"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.3"], ["@aimpact/reactive", "0.0.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@emotion/css", "11.13.0"], ["@emotion/react", "11.13.3"], ["@emotion/styled", "11.13.0"], ["@google-cloud/storage", "7.15.0"], ["apexcharts", "3.53.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.13"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["firebase", "10.14.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["lodash", "4.17.21"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.2.0"], ["marked-highlight", "2.1.4"], ["marked-mangle", "1.1.9"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["react", "18.2.0"], ["react-dom", "18.2.0"], ["react-select", "5.8.0"], ["simplebar-react", "3.2.6"], ["slate", "0.103.0"], ["slate-react", "0.110.1"], ["socket.io-client", "4.7.5"], ["swiper", "10.3.1"], ["tippy.js", "6.3.7"], ["uuid", "10.0.0"], ["wavesurfer.js", "7.8.5"], ["zod", "3.24.1"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.3.5"], ["@types/react-dom", "18.3.0"], ["react-is", "16.13.1"], ["@aimpact/ailearn-app", "0.3.24"], ["@aimpact/ailearn-app", "0.3.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.3.24/dashboard/assignments",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@aimpact/ailearn-app/dashboard-layout.widget', dependency_4], ['@aimpact/ailearn-sdk/tracking', dependency_5], ['@aimpact/reactive/model', dependency_6], ['@beyond-js/kernel/core', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['react', dependency_9], ['pragmate-ui/components', dependency_10], ['@beyond-js/react-18-widgets/hooks', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['@aimpact/ailearn-app/config', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/empty', dependency_16], ['pragmate-ui/image', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/tooltip', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20], ['@aimpact/chat-sdk/chat-component.code', dependency_21], ['@aimpact/chat-sdk/widgets/markdown', dependency_22], ['pragmate-ui/tabs', dependency_23], ['pragmate-ui/modal', dependency_24], ['pragmate-ui/drawer', dependency_25], ['lodash', dependency_26], ['@beyond-js/kernel/routing', dependency_27], ['pragmate-ui/form', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "ailearn-dashboard-assignments",
        "vspecifier": "@aimpact/ailearn-app@0.3.24/dashboard/assignments.widget",
        "is": "page",
        "route": "/dashboard/${id}",
        "layout": "dashboard-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.3.24/dashboard/assignments.widget');
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

      /*******************************************
      INTERNAL MODULE: ./views/drawer/aside-drawer
      *******************************************/

      ims.set('./views/drawer/aside-drawer', {
        hash: 2627707799,
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
              if (showDrawer?.show) globalThis.document.querySelector('html').style.overflow = 'hidden';else globalThis.document.querySelector('html').style.overflow = 'hidden';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInVyaSIsInZhcnMiLCJnZXQiLCJsb2FkIiwiaGlkZSIsImNsZWFyIiwiZXhwb3J0cyIsIl9kYXNoYm9hcmRMYXlvdXQiLCJfdHJhY2tpbmciLCJfbW9kZWwiLCJfY29yZSIsIl90ZXh0cyIsIl9iZXlvbmRfY29udGV4dCIsIlJlYWN0aXZlTW9kZWwiLCJpc1N0b3JlIiwidHJhY2tpbmciLCJhY3Rpdml0eVNlbGVjdGVkIiwiY3VycmVudFRyYWNraW5nIiwic2Vzc2lvbiIsInZpZXciLCJhc3NpZ25tZW50SWQiLCJhc3NpZ25tZW50IiwibW9kZWwiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInZhbHVlIiwiZmlsdGVyIiwicGFydGljaXBhbnRzIiwiaXRlbXMiLCJyZXNwb25zZSIsIml0ZW0iLCJ1c2VyIiwibmFtZSIsInRvTG93ZXJDYXNlIiwiaW5jbHVkZXMiLCJnbG9iYWxUZXh0cyIsInJlYWR5IiwidXNlcnMiLCJNYXAiLCJ0cmFja2luZ3MiLCJ0cmlnZ2VyRXZlbnQiLCJjb25zdHJ1Y3RvciIsIkxheW91dEJyb2tlciIsInNldE1vZGVsIiwib3ZlcmxheSIsIm9uIiwiZmV0Y2giLCJnbG9iYWxUaGlzIiwiaWQiLCJUcmFja2luZ0Rhc2hib2FyZCIsImZldGNoaW5nIiwibSIsInJlZnJlc2giLCJzZXQiLCJiYWNrTGluayIsImNsYXNzcm9vbSIsImJyZWFkY3J1bWIiLCJlbnRpdGllcyIsImNsYXNzcm9vbXMiLCJ0aXRsZSIsImUiLCJjb25zb2xlIiwibG9nIiwibG9hZFVzZXJUcmFja2luZyIsInVzZXJJZCIsInBhcnRpY2lwYW50IiwibWFwIiwiZXJyb3IiLCJ0cmlnZ2VyIiwicmVmcmVzaERyYXdlciIsImFjdGl2aXR5IiwicHJvbWlzZSIsIlBlbmRpbmdQcm9taXNlIiwiY2hhdE1vZGVsIiwibG9hZEFsbCIsInNldFRpbWVvdXQiLCJyZXNvbHZlIiwicmVmcmVzaFRyYWNraW5nIiwic2VsZWN0QWN0aXZpdHkiLCJhcmNoaXZlIiwicmVzdG9yZSIsIl9yZWFjdCIsIk5vdEZvdW5kIiwiY29kZSIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiX2hvb2tzIiwiRGFzaGJvYXJkQWN0aW9ucyIsInNldFNob3dEcmF3ZXIiLCJ1c2VEYXNoYm9hcmRDb250ZXh0IiwidXBkYXRlIiwic2V0VXBkYXRlIiwidXNlU3RhdGUiLCJzZXRGZXRjaGluZyIsIm9uQ2xpY2siLCJ1c2VCaW5kZXIiLCJhY3Rpb25UZXh0IiwiYXJjaGl2ZWQiLCJhY3Rpb24iLCJjbGFzc05hbWUiLCJpc1VzZXJDcmVhdG9yIiwiQnV0dG9uIiwiYm9yZGVyZWQiLCJpY29uIiwiZGlzYWJsZWQiLCJhY3Rpb25zIiwid2FsbCIsIl91aSIsIkVtcHR5TWF0ZXJpYWwiLCJtZXNzYWdlIiwiYWN0aXZpdGllcyIsImVtcHR5IiwiRW1wdHlDYXJkIiwidGV4dCIsIl9pY29ucyIsIl9saXN0IiwiX3BhcnRpY2lwYW50IiwiX2VtcHR5IiwiQWN0aXZpdHlWaWV3Iiwic2V0VmlldyIsInVwZGF0ZWQiLCJzZXRVcGRhdGVkIiwib25DbG9zZSIsInVuZGVmaW5lZCIsInR5cGUiLCJJY29uQnV0dG9uIiwiQ29uZGl0aW9uYWxDb250YWluZXIiLCJjb25kaXRpb24iLCJsZW5ndGgiLCJ0ZXJuYXJ5Iiwib3B0aW9ucyIsInRydWUiLCJMaXN0IiwiY29udHJvbCIsIkFjdGl2aXR5UGFydGljaXBhbnQiLCJzcGVjcyIsImZhbHNlIiwiRW1wdHkiLCJfaW1hZ2UiLCJfY29sbGFwc2libGUiLCJfb2JqZWN0aXZlSWNvbiIsIl9vYmplY3RpdmUiLCJDaGF0QWN0aXZpdHlQYXJ0aWNpcGFudCIsImRhdGEiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsImFuYWx5c2lzIiwib25Ub2dnbGUiLCJ3YXJuIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwidG9nZ2xlYWJsZSIsInByb2dyZXNzIiwib2JqZWN0aXZlcyIsIm9wZW4iLCJDb2xsYXBzaWJsZUhlYWRlciIsIkltYWdlIiwic3JjIiwicGhvdG9VcmwiLCJMaW5rIiwiaHJlZiIsInN1bW1hcnkiLCJub1N1bW1hcnkiLCJBY3Rpdml0eU9iamVjdGl2ZVN0YXR1c0ljb24iLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlIiwiX2NoYXQiLCJfbXVsdGlwbGVDaG9pY2UiLCJfc3Bva2VuIiwiY2hhdCIsInNwb2tlbiIsIlNwb2tlbkFjdGl2aXR5UGFydGljaXBhbnQiLCJNdWx0aXBsZUNob2ljZUFjdGl2aXR5UGFydGljaXBhbnQiLCJtdWx0aXBsZUNob2ljZSIsInBhcnRpY2lwYW50QWN0aXZpdHkiLCJjb3JyZWN0IiwidG90YWwiLCJ3cm9uZyIsImNvdW50ZXJzIiwiY2xzIiwiUmVhY3QiLCJpY29uTmFtZXMiLCJwZW5kaW5nIiwiY29tcGxldGVkIiwib3V0c3RhbmRpbmciLCJzdGF0dXMiLCJvYmplY3RpdmVzU3RhdHVzIiwiQXBwSWNvbiIsIm5vQW5hbHlzaXMiLCJfdG9vbHRpcCIsImFjdGl2aXR5SWQiLCJJY29uU3RhdGUiLCJvYmplY3RpdmUiLCJUb29sdGlwIiwiY29udGVudCIsInBvaW50cyIsIl9jaGF0Q29tcG9uZW50IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRUYWIiLCJ1c2VEcmF3ZXJDb250ZXh0IiwicmVmIiwidXNlUmVmIiwidEFjdGl2aXR5IiwiY2hhdElkIiwibWVzc2FnZXMiLCJFbXB0eUNoYXQiLCJzbGljZSIsIkFnZW50c0NoYXRDb250YWluZXIiLCJBZ2VudHNDaGF0UGFuZWwiLCJkZXNjcmlwdGlvbiIsIl90YWJzIiwiX2RyYXdlckFsZXJ0cyIsIl9vYmplY3RpdmVzIiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eUNoYXRCb2R5IiwicHJvcHMiLCJzZXRNZXNzYWdlcyIsInVzZUVmZmVjdCIsInRyaWdnZXJDaGFuZ2UiLCJvZmYiLCJ0YWJzIiwicHVzaCIsIlRhYiIsImtleSIsImludGVyYWN0aW9ucyIsImNvdW50IiwiYWxlcnRzIiwib3BlbkNoYXQiLCJsb2FkQ2hhdCIsIlRhYnNDb250YWluZXIiLCJhY3RpdmUiLCJUYWJzIiwiUGFuZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5T2JqZWN0aXZlcyIsInN5bnRoZXNpcyIsInZhcmlhbnQiLCJEcmF3ZXJBbGVydCIsInByb2dyZXMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5IiwiaW5kZXgiLCJoYXNQYXJ0aWNpcGF0ZWQiLCJoYXMiLCJjbHNEcmF3ZXIiLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY2xvc2VzdCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJibG9jayIsIklDT05TIiwidHlwZXMiLCJkZWJhdGUiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VCb2R5IiwiU3R1ZGVudEFzc2lnbm1lbnRBY3Rpdml0eVNwb2tlbkJvZHkiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbk9wdGlvbnMiLCJhbnN3ZXIiLCJjb3JyZWN0QW5zd2VyIiwic2VsZWN0ZWQiLCJfcXVlc3Rpb25zIiwicGFydGljaXBhdGlvbiIsImRldGFpbCIsImFzc2Vzc21lbnQiLCJxdWVzdGlvbnMiLCJTdHVkZW50QXNzaWdubWVudEFjdGl2aXR5TXVsdGlwbGVDaG9pY2VRdWVzdGlvbnMiLCJfYW5zd2VyIiwicXVlc3Rpb24iLCJfY29uZmlnIiwidWlkIiwiYXVkaW9VcmwiLCJwYXJhbXMiLCJhcGlzIiwiYWlsZWFybiIsIm91dHB1dCIsImZlZWRiYWNrIiwidHJhbnNjcmlwdGlvbiIsImF1ZGlvIiwiQXVkaW9QbGF5ZXIiLCJ1cmwiLCJhZGRFdmVudExpc3RlbmVyIiwiX21vZGFsIiwiQ29uZmlybUFjdGlvbiIsImNhbGxiYWNrIiwic2V0T3BlbiIsInRvZ2dsZU9wZW4iLCJvbkNsaWNrQnV0dG9uIiwib25Db25maXJtIiwiYWRkQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2hlYWRlclNrZWxldG9uIiwiX2NoYXRUYWIiLCJfaGVhZGVyIiwiU3R1ZGVudERyYXdlckNoYXQiLCJzaG93RHJhd2VyIiwic2V0UmVhZHkiLCJEcmF3ZXJTa2VsZXRvbiIsIm9uQmFjayIsIlN0dWRlbnREcmF3ZXJIZWFkZXIiLCJzaG93QWN0aXZpdHkiLCJEcmF3ZXIiLCJzaG93Q3JlZGl0cyIsIm9uUmVmcmVzaCIsInN0dWRlbnQiLCJjcmVkaXRzIiwic2V0Q3JlZGl0cyIsImdldFByb3BlcnRpZXMiLCJjb25zdW1lZCIsIm9mIiwiQ2xvc2VCdXR0b24iLCJfYWN0aXZpdHkiLCJTdHVkZW50QXNzaWdubWVudFN1bW1hcnkiLCJzZXRJdGVtcyIsIl9pdGVtIiwiR2VuZXJhbFZpZXciLCJJdGVtIiwiX2xhYmVsIiwiX2FjdGl2aXR5SWNvbiIsIl9zdGF0dXMiLCJNb2R1bGVBY3Rpdml0eUNoYXQiLCJzdWJ0eXBlIiwiQWN0aXZpdHlJY29uIiwiTW9kdWxlQWN0aXZpdHlNZXNzYWdlcyIsIk1vZHVsZUFjdGl2aXR5U3RhdHVzIiwiTW9kdWxlQWN0aXZpdHlEZXRhaWxzIiwiSWNvbiIsIk1vZHVsZUFjdGl2aXR5IiwiTW9kdWxlQWN0aXZpdHlTcG9rZW4iLCJNb2R1bGVBY3Rpdml0eU11bHRpcGxlQ2hvaWNlIiwibGFiZWwiLCJkb25lIiwidG90YWxNZXNzYWdlcyIsImljb25zIiwiT2JqZWN0IiwidmFsdWVzIiwiam9pbiIsIm1lc3NhZ2VDb3VudGVyIiwiaGFzQWxlcnRzIiwiSWNvbkl0ZW0iLCJwYXJ0aWNpcGFudFVyaSIsIm9wZW5EcmF3ZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImFsdCIsIl9pY29uQm94IiwiSWNvbkJveCIsImFzIiwiRHJhd2VyQWxlcnRJdGVtIiwiX21hcmtkb3duIiwiaXRlcmF0aW9uIiwiYXNzaXN0YW50IiwiTWFya2Rvd24iLCJub01lc3NhZ2VzIiwiX2FjdGlvbnMiLCJBUFAiLCJBUFBfTkFNRSIsIkRhc2hib2FyZENvbnRleHQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJIZWFkZXIiLCJjbGFzc3dvcmtzIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmF3ZXJDb250ZXh0IiwiX3JvdXRpbmciLCJfZHJhd2VyIiwiX2RyYXdlcjIiLCJfZHJhd2VyQ2hhdCIsIl93YWxsIiwiQXNpZGVEcmF3ZXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwicHVzaFN0YXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiV2FsbCIsIlNrZWxldG9uVGV4dCIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJkZWZpbmVQcm9wZXJ0eSIsIl9pY29uczIiLCJBY3Rpdml0eUZpbHRlciIsImhhbmRsZUNsaWNrIiwiX3VzZXJEYXRhIiwicGljdHVyZSIsImNyZWF0b3IiLCJvd25lciIsIm9uQ2xhc3Nyb29tQ2xpY2siLCJFbnRpdHlJbWFnZSIsImVudGl0eSIsIlVzZXJEYXRhIiwiX2Zvcm0iLCJfYWN0aXZpdHlGaWx0ZXIiLCJTdHVkZW50c0hlYWRlciIsImxpc3RDbHMiLCJyZWZyZXNoaW5nIiwic2V0UmVmcmVzaGluZyIsIm9uRmlsdGVyIiwiY3VycmVudFRhcmdldCIsIklucHV0Iiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImxpc3QiLCJzZWFyY2giLCJzdHVkZW50SGVhZGVyIiwiXyIsIl9hc2lkZURyYXdlciIsIl92aWV3IiwiX2dlbmVyYWwiLCJfc3R1ZGVudEhlYWRlciIsInNldFRvdGFsUGFydGljaXBhbnRzIiwic3RhdGUiLCJzZXRTdGF0ZSIsIlBhZ2VMb2FkZXIiLCJmb3VuZCIsInRvdGFsUGFydGljaXBhbnRzIiwiZHJhd2VyVmFsdWUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy80MDQudHN4IiwiL3RzL3ZpZXdzL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvdmlldy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvY2hhdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy92aWV3L3BhcnRpY2lwYW50L2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvbXVsdGlwbGUtY2hvaWNlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3ZpZXcvcGFydGljaXBhbnQvc3Bva2VuLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9jaGF0L29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvY2hhdC9vYmplY3RpdmVzLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9pbmRleC50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2Fuc3dlci50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvYWN0aXZpdHkvbXVsdGlwbGUtY2hvaWNlL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UvcXVlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2NoYXQtdGFiLnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9jb25maXJtLWFjdGlvbi50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9kcmF3ZXIvZHJhd2VyLWNoYXQudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2RyYXdlci9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvZHJhd2VyL2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2dlbmVyYWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9jaGF0LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvZGV0YWlscy50c3giLCIvdHMvdmlld3MvYXNzaWdubWVudC9pdGVtL2FjdGl2aXR5L2luZGV4LnRzeCIsIi90cy92aWV3cy9hc3NpZ25tZW50L2l0ZW0vYWN0aXZpdHkvbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9tdWx0aXBsZS1jaG9pY2UudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zcG9rZW4udHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9hY3Rpdml0eS9zdGF0dXMudHN4IiwiL3RzL3ZpZXdzL2Fzc2lnbm1lbnQvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9hY3Rpdml0eS1pY29uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2RyYXdlci1hbGVydHMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZHJhd2VyLWFsZXJ0cy9pdGVtLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2ljb24tYm94LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29iamVjdGl2ZS1pY29uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzIiwiL3RzL3ZpZXdzL2RyYXdlci9hc2lkZS1kcmF3ZXIudHN4IiwiL3RzL3ZpZXdzL2RyYXdlci9jb250ZW50LnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvaGVhZGVyLXNrZWxldG9uLnRzeCIsIi90cy92aWV3cy9kcmF3ZXIvd2FsbC50c3giLCIvZ2xvYmFsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYWN0aXZpdHktZmlsdGVyLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9zdHVkZW50LWhlYWRlci50c3giLCIvdHMvdmlld3MvaGVhZGVyL3VzZXItZGF0YS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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