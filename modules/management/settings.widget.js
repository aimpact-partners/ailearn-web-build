System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.1/components/ui", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/collapsible", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/chips", "@aimpact/ailearn-app@0.1.1/config", "@aimpact/ailearn-app@0.1.1/modules/management/activity.code", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.1/components/cover-image.code", "pragmate-ui@1.0.0-beta.1/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, bimport, __Bundle, __pkg, ims, Controller, ActivityView, AIButton, AIIconButton, View, Header, ModuleView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityView: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    View: void 0,
    Header: void 0,
    ModuleView: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_react2) {
      dependency_3 = _react2;
    }, function (_framerMotion2) {
      dependency_4 = _framerMotion2;
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_5 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_7 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp011MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_12 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_14 = _aimpactAilearnApp011ComponentsUi;
    }, function (_pragmateUi100Beta1List) {
      dependency_15 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Form) {
      dependency_16 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_17 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_18 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp011ComponentsIcons;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_20 = _pragmateUi100Beta1Collapsible;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_21 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_22 = _pragmateUi100Beta1Chips;
    }, function (_aimpactAilearnApp011Config) {
      dependency_23 = _aimpactAilearnApp011Config;
    }, function (_aimpactAilearnApp011ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp011ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_25 = _pragmateUi100Beta1Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp011ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp011ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta1Image) {
      dependency_28 = _pragmateUi100Beta1Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/toast', dependency_21], ['pragmate-ui/chips', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/modules/management/settings.widget');
      ims = new Map();
      /*************************************
      INTERNAL MODULE: ./animation-container
      *************************************/
      ims.set('./animation-container', {
        hash: 1836558385,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedContainer = AnimatedContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedContainer({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /****************************
      INTERNAL MODULE: ./controller
      ****************************/

      ims.set('./controller', {
        hash: 1180616141,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _base = require("@beyond-js/react-18-widgets/base");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _base.ReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager(this.attributes);
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
          }
          exports.Controller = Controller;
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3243366045,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _beyond_context = require("beyond_context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _routing = require("@beyond-js/kernel/routing");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            get values() {
              return this.saved ? this.model.getProperties() : this.defaultValues;
            }
            get ownerships() {
              return _session.sessionWrapper.user.schools?.items ?? [];
            }
            get activityTypes() {
              return _learningModules.ActivityTypes;
            }
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #editActivity;
            get editActivity() {
              return this.#editActivity;
            }
            set editActivity(value) {
              this.#editActivity = value;
              if (value === undefined) {
                _mainLayout.LayoutBroker.overlay = false;
                _mainLayout.LayoutBroker.backLink = undefined;
              } else {
                _mainLayout.LayoutBroker.overlay = true;
                _mainLayout.LayoutBroker.backLink = `/modules/management?id=${this.model.id}`;
              }
              this.trigger('activity.selected');
            }
            get view() {
              return !!this.#editActivity ? 'activity' : 'module';
            }
            constructor(attrs) {
              super();
              const id = attrs.get('id');
              const activityId = attrs.get('activityId');
              this.#texts.on('change', this.triggerEvent);
              _routing.routing.on('change', () => {
                if (_routing.routing.uri.pathname !== '/modules/management') return;
                if (!_routing.routing.uri.qs.get('activityId')) this.editActivity = undefined;
                if (_routing.routing.uri.qs.get('id')) {
                  this.setBreadcrumb();
                }
              });
              if (!id) {
                throw new Error('No id provided');
              }
              this.load(id, activityId);
            }
            clean() {
              this.#model.activities.clean();
              this.#model = undefined;
              super.ready = false;
            }
            validateView(id) {}
            async load(id, activityId) {
              try {
                const specs = id === 'new' ? {
                  type: 'draft'
                } : {
                  id,
                  type: 'draft'
                };
                if (id === 'new' && this.#model) this.clean();
                if (this.model && this.model.id === id) return;
                this.#model = await _learningModules.LearningModule.get(specs);
                super.ready = true;
                if (activityId) {
                  this.editActivity = this.#model.activities.items.find(item => item.id === activityId);
                  _mainLayout.LayoutBroker.backLink = `/modules/management?id=${this.model.id}`;
                }
                if (activityId) this.setBreadcrumb();
                this.#texts.on('change', this.setBreadcrumb.bind(this));
              } catch (e) {
                console.error(e);
              }
            }
            setBreadcrumb() {
              if (!this.#texts.ready) return;
              const breadcrumb = [[this.texts.breadcrumb.modules, '/modules/list']];
              const title = this.#editActivity?.title ?? this.texts.breadcrumb.management;
              if (this.#editActivity) {
                breadcrumb.push([this.model.title, `/modules/management?id=${this.model.id}`]);
                _mainLayout.LayoutBroker.overlay = true;
                return;
              }
              breadcrumb.push([title]);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = breadcrumb;
              }, 100);
            }
            async deleteActivity(id) {
              this.#model.activities.remove(id);
              await this.#model.saveDraft();
              this.trigger('change');
            }
            async save(specs) {
              await this.model.saveDraft(specs);
              return this.#model;
            }
            async createActivity(activityType, manual) {
              try {
                const activity = await this.model.activities.add(activityType.id, manual);
                return activity;
              } catch (e) {
                console.error(e);
              }
            }
            async publish() {
              this.fetching = true;
              const response = await this.model.publish();
              this.fetching = false;
              return response;
            }
          }
          exports.StoreManager = StoreManager;
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/empty
      ****************************************/

      ims.set('./views/activities/empty', {
        hash: 2067853617,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivityList = EmptyActivityList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _modal = require("./list/selection/modal");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function EmptyActivityList() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => {
              setShowModal(!showModal);
            };
            return _react.default.createElement("div", {
              className: "module-activities__list"
            }, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.module.actions.addActivity))), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))), _react.default.createElement(_modal.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 3025962496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _item = require("./list/item");
          var _form = require("pragmate-ui/form");
          var _modal = require("./list/selection/modal");
          var _empty = require("./empty");
          var _framerMotion = require("framer-motion");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit,
              store
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const [items, setItems] = _react.default.useState(activities);
            const [dragging, setDragging] = _react.default.useState(null);
            const toggleModal = () => setShowModal(show => !show);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
              setDragging(true);
              setItems(items);
              store.model.activities.reorder(items);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.activities.title), _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.actions.add)), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "activities",
              as: "div"
            }, _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_framerMotion.Reorder.Group, {
              as: "div",
              values: items,
              onReorder: onReorder
            }, _react.default.createElement(_list.List, {
              className: "module-activity-list",
              specs: setItems,
              items: items,
              control: _item.ModuleActivity
            })))), _react.default.createElement(_modal.ModalSelection, {
              show: showModal,
              onClose: toggleModal
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/list/item/delete-modal
      *********************************************************/

      ims.set('./views/activities/list/item/delete-modal', {
        hash: 3159365712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DeleteModal = DeleteModal;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function DeleteModal({
            onClose,
            onConfirm
          }) {
            const {
              texts,
              texts: {
                actions: textActions
              }
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = async () => {
              try {
                setFetching(true);
                await onConfirm();
                setFetching(false);
              } catch (e) {
                console.error(e);
              } finally {
                onClose();
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onClick,
              centered: true,
              onCancel: onClose,
              actions: {
                confirm: {
                  variant: 'primary',
                  label: textActions.confirm
                },
                cancel: {
                  label: textActions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              show: true,
              title: texts.activities.delete.title,
              text: texts.activities.delete.subtitle
            });
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/activities/list/item/header
      ***************************************************/

      ims.set('./views/activities/list/item/header', {
        hash: 3906961169,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityListHeader = ActivityListHeader;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          var _routing = require("@beyond-js/kernel/routing");
          function ActivityListHeader({
            openDeleteModal,
            activity,
            controls
          }) {
            const {
              texts: {
                actions,
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const edit = event => {
              event.stopPropagation();
              // store.editActivity(data.id);
              const current = store.model.activities.items.find(item => item.id === activity.id);
              store.editActivity = current;
              const baseUri = `/modules/management?id=${store.model.id}`;
              store.setBreadcrumb();
              _routing.routing.pushState(`/modules/management?id=${store.model.id}&activityId=${activity.id}`);
            };
            const iRef = _react.default.useRef(null);
            const imgCls = `activity-type__image image--${activity.type}`;
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              openDeleteModal();
            };
            const onDrag = event => controls.start(event);
            _react.default.useEffect(() => {
              const touchHandler = e => e.preventDefault();
              const iTag = iRef.current;
              if (iTag) {
                //@ts-ignore
                iTag.addEventListener('touchstart', touchHandler, {
                  passive: false
                });
                return () => {
                  //@ts-ignore
                  iTag.removeEventListener('touchstart', touchHandler, {
                    passive: false
                  });
                };
              }
            }, [iRef]);
            return _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("div", {
              className: "header__main-content"
            }, _react.default.createElement("div", {
              onPointerDown: onDrag,
              ref: iRef,
              className: "drag-icon__container"
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            })), _react.default.createElement("section", {
              className: imgCls
            }, _react.default.createElement(_icons2.AppIcon, {
              icon: _icons2.ICONS[activity.type]
            })), _react.default.createElement("div", {
              className: "activity__data-container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "activity__name"
            }, _react.default.createElement("span", {
              className: "activity__type"
            }, texts.types[activity.type]), _react.default.createElement("h6", null, activity.title)))), _react.default.createElement("div", {
              className: "activity__details "
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement("div", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            })))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/index
      **************************************************/

      ims.set('./views/activities/list/item/index', {
        hash: 60330569,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _specs = require("./specs");
          var _context = require("../../../context");
          var _collapsible = require("pragmate-ui/collapsible");
          var _header = require("./header");
          var _toast = require("pragmate-ui/toast");
          var _deleteModal = require("./delete-modal");
          var _property = require("./property");
          var _framerMotion = require("framer-motion");
          function ModuleActivity({
            item,
            index,
            specs
          }) {
            const {
              texts: {
                activities: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const ref = (0, _react.useRef)(null);
            const controls = (0, _framerMotion.useDragControls)();
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const handleDragStart = () => {
              setIsDragging(true);
            };
            const handleDragEnd = () => {
              setIsDragging(false);
            };
            const deleteItem = event => {
              try {
                ref.current.classList.add('fade-out');
                store.deleteActivity(item.id);
              } catch (e) {
                console.error(e);
                _toast.toast.error(e.message);
              }
            };
            const toggleDelete = () => setShowDelete(!showDelete);
            const onToggle = () => !isDragging;
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "activity__item",
              dragListener: false,
              dragControls: controls,
              onDragEnd: handleDragEnd,
              as: "div"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement(_header.ActivityListHeader, {
              openDeleteModal: toggleDelete,
              activity: item,
              controls: controls
            }), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity__pane-content"
            }, _react.default.createElement(_property.Property, {
              name: texts.objective,
              value: item.specs.objective
            }), _react.default.createElement(_property.Property, {
              name: texts.description,
              value: item.description
            }), _react.default.createElement(_specs.ActivitySpecs, {
              type: item.type,
              specs: item.specs
            }))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            })));
          }
        }
      });

      /*****************************************************
      INTERNAL MODULE: ./views/activities/list/item/property
      *****************************************************/

      ims.set('./views/activities/list/item/property', {
        hash: 2437299253,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Property = Property;
          var _react = require("react");
          function Property({
            name,
            value
          }) {
            if (!value) return null;
            return _react.default.createElement("div", null, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, value));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs/index
      ********************************************************/

      ims.set('./views/activities/list/item/specs/index', {
        hash: 1502866493,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _list = require("./list");
          function ActivitySpecs({
            specs,
            type
          }) {
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              type: "primary"
            }, specs.kind), _react.default.createElement(_list.SpecsList, {
              specs: specs,
              type: type
            }));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs/list
      *******************************************************/

      ims.set('./views/activities/list/item/specs/list', {
        hash: 3707831496,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsList = SpecsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../../context");
          const Item = ({
            data
          }) => _react.default.createElement("li", null, data);
          const QuestionItem = ({
            data,
            index
          }) => {
            const {
              question
            } = data;
            return _react.default.createElement("li", null, question);
          };
          function SpecsList({
            type,
            specs
          }) {
            const {
              texts: {
                activities: texts
              }
            } = (0, _context.useModuleContext)();
            const types = {
              'content-theory': ['topics', Item],
              'multiple-choice': ['questions', QuestionItem],
              spoken: ['criterias', Item]
            };
            if (!types[type]) return null;
            const [itemsType, ItemControl] = types[type];
            const itemsList = type === 'content-theory' ? specs.hasOwnProperty('keyConcepts') ? specs.keyConcepts : specs[itemsType] : specs[itemsType];
            if (!itemsList || Array.isArray(itemsList) && !itemsList.length) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h6", null, texts[itemsType]), _react.default.createElement(_list.List, {
              className: "questions-list",
              items: itemsList,
              control: ItemControl
            }));
          }
        }
      });

      /*********************************************************
      INTERNAL MODULE: ./views/activities/list/selection/context
      *********************************************************/

      ims.set('./views/activities/list/selection/context', {
        hash: 357112821,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useCreateActivityContext = exports.CreateActivityContext = void 0;
          var _react = require("react");
          const CreateActivityContext = exports.CreateActivityContext = _react.default.createContext({});
          const useCreateActivityContext = () => _react.default.useContext(CreateActivityContext);
          exports.useCreateActivityContext = useCreateActivityContext;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/activities/list/selection/item
      ******************************************************/

      ims.set('./views/activities/list/selection/item', {
        hash: 2049796178,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SelectionActivityItem = void 0;
          var _react = require("react");
          var _context = require("../../../context");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
          const SelectionActivityItem = ({
            item,
            specs: {
              selected,
              setSelected
            }
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onClick = event => {
              setSelected(item);
            };
            const key = item.id.replace('/', '-');
            const cls = `activity__selection-item activity--${key}${item.id === selected?.id ? ' selected' : ''}`;
            const icon = _icons.ICONS[key];
            const clsImage = `activity-type__image image--${item.id}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsImage
            }, _react.default.createElement(_icons2.Icon, {
              icon: icon
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[item.id]), _react.default.createElement("span", null, texts.activities.descriptionTypes[item.id])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/activities/list/selection/list
      ******************************************************/

      ims.set('./views/activities/list/selection/list', {
        hash: 3441130200,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivityList = ModalActivityList;
          var _react = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _aiButton = require("../../../components/ai-button");
          var _item = require("./item");
          var _context2 = require("./context");
          var _components = require("pragmate-ui/components");
          function ModalActivityList({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const {
              setView,
              navigate,
              createActivity
            } = (0, _context2.useCreateActivityContext)();
            const onSubmit = async () => {
              const activity = await createActivity(selected, true);
              navigate(activity);
            };
            const onAI = async () => {
              await createActivity(selected);
              setView('ai');
            };
            return _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "module-activity-list",
              specs: {
                selected,
                setSelected
              },
              items: store.model.activities.types,
              control: _item.SelectionActivityItem
            }), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onSubmit,
              disabled: !selected
            }, texts.actions.manual), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onAI,
              disabled: !selected
            }, texts.actions.generate)));
          }
        }
      });

      /*******************************************************
      INTERNAL MODULE: ./views/activities/list/selection/modal
      *******************************************************/

      ims.set('./views/activities/list/selection/modal', {
        hash: 1089213316,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _validation = require("./validation");
          var _routing = require("@beyond-js/kernel/routing");
          var _list = require("./list");
          var _context2 = require("./context");
          var _suggestions = require("./suggestions");
          function ModalSelection({
            show,
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [activity, setActivity] = _react.default.useState(null);
            const [view, setView] = _react.default.useState('list');
            if (!show) return null;
            const createActivity = async (type, manual = false) => {
              const activity = await store.createActivity(type, manual);
              setActivity(activity);
              return activity;
            };
            const navigate = activity => {
              if (!activity) {
                console.error('Activity not found');
              }
              store.editActivity = activity;
              const baseUri = `/modules/management?id=${store.model.id}`;
              const activityType = texts.activities.types[activity.type];
              _mainLayout.LayoutBroker.addMultipleBreadcrumb([[activityType, activity.id]]);
              _routing.routing.pushState(`${baseUri}&activityId=${activity.id}`);
              onClose();
            };
            const handleOnClose = () => {
              setView('list');
              onClose();
            };
            const VIEWS = {
              list: _list.ModalActivityList,
              ai: _suggestions.ModalActivitySuggestions
            };
            if (!store.model.valid) return _react.default.createElement(_validation.ModalValidation, {
              onClose: handleOnClose
            });
            const Control = VIEWS[view];
            return _react.default.createElement(_context2.CreateActivityContext.Provider, {
              value: {
                onClose,
                activity,
                createActivity,
                setActivity,
                navigate,
                setView
              }
            }, _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: handleOnClose
            }, _react.default.createElement(Control, null)));
          }
        }
      });

      /*************************************************************
      INTERNAL MODULE: ./views/activities/list/selection/suggestions
      *************************************************************/

      ims.set('./views/activities/list/selection/suggestions', {
        hash: 2138648183,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitySuggestions = ModalActivitySuggestions;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../../context");
          var _context2 = require("./context");
          function ModalActivitySuggestions() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              activity,
              navigate
            } = (0, _context2.useCreateActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  await activity.generate(notes);
                  navigate(activity);
                } catch (e) {} finally {
                  setTimeout(() => {
                    setFetching(false);
                  }, 2000);
                }
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.title), _react.default.createElement("p", null, texts.refine.description), _react.default.createElement("p", null, texts.refine.description2)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/activities/list/selection/validation
      ************************************************************/

      ims.set('./views/activities/list/selection/validation', {
        hash: 4222962394,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalValidation = ModalValidation;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          function ModalValidation({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.validationTitle), _react.default.createElement("p", null, texts.activities.createModal.validation)));
          }
        }
      });

      /********************************
      INTERNAL MODULE: ./views/activity
      ********************************/

      ims.set('./views/activity', {
        hash: 3256072358,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var React = require("react");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          /*bundle*/
          function ActivityView({
            texts,
            store
          }) {
            return React.createElement(_activity.ModuleActivityForm, {
              store: store,
              activity: store.editActivity
            });
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/components/ai-button
      ********************************************/

      ims.set('./views/components/ai-button', {
        hash: 2168291771,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/error
      ****************************************/

      ims.set('./views/components/error', {
        hash: 3301282445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/context
      *******************************/

      ims.set('./views/context', {
        hash: 1926894984,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3696014292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _module = require("./module");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("./activity");
          var _preload = require("./preload");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            const {
              texts
            } = store;
            const [ready, setReady] = React.useState(store.ready);
            const [view, setView] = React.useState(store.view);
            const updateView = () => {
              if (store.ready !== ready) setReady(store.ready);
              setView(store.view);
            };
            (0, _hooks.useBinder)([store], updateView);
            (0, _hooks.useBinder)([store], () => setView(store.view), 'activity.selected');
            if (!store.ready) return React.createElement(_preload.Preload, null);
            if (view === 'activity') {
              return React.createElement(_activity.ActivityView, {
                ...props,
                texts: texts
              });
            }
            return React.createElement(_module.ModuleView, {
              ...props
            });
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/module/description
      ******************************************/

      ims.set('./views/module/description', {
        hash: 422157379,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDescription = ModuleDescription;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleDescription({}) {
            const {
              texts: {
                module: moduleTexts,
                moduleTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const content = store.model.description;
            const onEdit = async event => {
              const {
                target
              } = event;
              store.save({
                [target.name]: target.value
              });
            };
            return _react.default.createElement(_ui.TourStep, {
              name: "description",
              texts: tour,
              className: "module-property"
            }, _react.default.createElement("h6", null, moduleTexts.description.label), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              placeholder: moduleTexts.description.placeholder,
              onSave: onEdit,
              selector: "p",
              content: content
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/module/header
      *************************************/

      ims.set('./views/module/header', {
        hash: 4021694862,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _publish = require("./publish");
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function Header() {
            const {
              texts,
              store,
              texts: {
                module: moduleTexts
              },
              ensureCredits
            } = (0, _context.useModuleContext)();
            const title = store.model.title;
            const onGenerate = notes => ensureCredits(notes => store.model.generatePicture(notes), notes);
            const onSave = event => {
              _mainLayout.LayoutBroker.trimBreadcrumb(1);
              _mainLayout.LayoutBroker.addBreadcrumb([event.target.value, '']);
              store.save({
                title: event.target.value
              });
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("section", {
              className: "section-actions__container actions-end pt-0 m-0"
            }, _react.default.createElement(_publish.PublishModule, null)), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: store.model.pictureSuggestions,
              picture: picture,
              onGenerate: onGenerate
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              as: "h3",
              onSave: onSave,
              content: title,
              placeholder: texts.module.title
            }), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 4049608738,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleView = ModuleView;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _context = require("../context");
          var _header = require("./header");
          var _management = require("./management");
          /*bundle*/
          function ModuleView(props) {
            const {
              store
            } = props;
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel] = React.useState(0);
            const [activities, setActivities] = React.useState(store.model?.activities?.items);
            const [, setEditingActivity] = React.useState();
            const onActivitiesGenerated = () => setActivities(store.model?.activities?.items);
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks.useBinder)([store], () => setEditingActivity(store.editActivity), 'activity.selected');
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const onSubmit = async event => {
              event.preventDefault();
              setFetching(true);
              await store.save();
              globalThis.setTimeout(() => {
                setFetching(false);
              }, 1000);
            };
            const value = {
              store,
              fetching,
              texts,
              activePanel,
              activities,
              onSubmit,
              ensureCredits: _mainLayout.LayoutBroker.ensureCredits,
              totalActivities: store.model?.activities?.length
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
              ref: mainRef
            }, React.createElement(_header.Header, null), React.createElement(_management.ModuleManagement, null))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/module/management
      *****************************************/

      ims.set('./views/module/management', {
        hash: 3566650205,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleManagement = ModuleManagement;
          var _react = require("react");
          var _activities = require("../activities");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _description = require("./description");
          function ModuleManagement() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            const title = store.model.title ?? moduleTexts.title;
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            return _react.default.createElement("div", {
              className: "app-module-creation-page"
            }, _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h6", null, moduleTexts.objective, ":"), _react.default.createElement("p", null, " ", store.model.objective)), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_activities.ModuleActivities, null));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/module/publish
      **************************************/

      ims.set('./views/module/publish', {
        hash: 622963838,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PublishModule = PublishModule;
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function PublishModule() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const attrs = {
              disabled: store.model.type !== 'draft' || !store.model.completed
            };
            const onSubmit = async () => {
              try {
                const response = await store.publish();
                if (!response.status) {
                  _mainLayout.LayoutBroker.showMessage('error', texts.errors.CONTACT_ADMIN);
                  return;
                }
                _toast.toast.success(texts.toast.modulePublished);
                _routing.routing.replaceState({}, null, `/modules/list?tab=published`);
              } catch (e) {
                _toast.toast.error(texts.toast.errorPublishingModule);
              }
            };
            return _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "publish"
            }, _react.default.createElement("div", {
              className: "publish-action__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              ...attrs
            }, texts.actions.publish)));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/title
      ************************************/

      ims.set('./views/module/title', {
        hash: 833606887,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleTitle = ModuleTitle;
          var _react = require("react");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ModuleTitle({}) {
            const {
              texts: {
                module: moduleTexts
              },
              store
            } = (0, _context.useModuleContext)();
            const content = store.model.title ?? moduleTexts.title;
            return _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h6", null, moduleTexts.title), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              onSave: async data => {
                await store.save(data);
              },
              selector: "p"
            }, content));
          }
        }
      });

      /*******************************
      INTERNAL MODULE: ./views/preload
      *******************************/

      ims.set('./views/preload', {
        hash: 42263331,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Preload = Preload;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function Preload() {
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement(_ui.PageContainer, null, _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "section-actions__container actions-end border-top"
            }, _react.default.createElement(_components.Button, {
              variant: "primary"
            })), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement("div", {
              className: "image-preload"
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              as: "h3"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "10px",
              width: "100px"
            })), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement(_ui.SkeletonText, {
              height: "5px",
              width: "60px"
            }))))))));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/activity",
        "from": "ActivityView",
        "name": "ActivityView"
      }, {
        "im": "./views/components/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./views/components/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }, {
        "im": "./views/module/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/module/index",
        "from": "ModuleView",
        "name": "ModuleView"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'ActivityView') && _export("ActivityView", ActivityView = require ? require('./views/activity').ActivityView : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./views/components/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./views/components/ai-button').AIIconButton : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/module/header').Header : value);
        (require || prop === 'ModuleView') && _export("ModuleView", ModuleView = require ? require('./views/module/index').ModuleView : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInRpdGxlIiwibWFuYWdlbWVudCIsInB1c2giLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImNyZWF0ZUFjdGl2aXR5IiwiYWN0aXZpdHlUeXBlIiwibWFudWFsIiwiYWN0aXZpdHkiLCJhZGQiLCJwdWJsaXNoIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiVG91clN0ZXAiLCJtb2R1bGVUb3VyIiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInNldEl0ZW1zIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsInJlb3JkZXIiLCJGcmFnbWVudCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX21vZHVsZSIsIl9ob29rcyIsIl9wcmVsb2FkIiwic2V0UmVhZHkiLCJ1cGRhdGVWaWV3IiwidXNlQmluZGVyIiwiUHJlbG9hZCIsIk1vZHVsZVZpZXciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidG91ciIsImNvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwidHJpbUJyZWFkY3J1bWIiLCJhZGRCcmVhZGNydW1iIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwib2JqZWN0aXZlVG91ciIsImJ1dHRvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIk1vZHVsZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNF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