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
        hash: 919312157,
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
            }, _react.default.createElement("h2", null, texts.activities.title), _react.default.createElement(_ui.TourStep, {
              texts: texts.moduleTour,
              name: "addActivity",
              as: "div"
            }, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.actions.add))), _react.default.createElement(_ui.TourStep, {
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
        hash: 651384846,
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