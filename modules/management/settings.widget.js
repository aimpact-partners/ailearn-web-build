System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.45/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/ailearn-app@0.0.45/config", "@aimpact/ailearn-app@0.0.45/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.45/components/cover-image.code", "pragmate-ui@0.1.1/image"], function (_export, _context3) {
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
    }, function (_beyondJsReactive1112Model) {
      dependency_7 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0045MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp0045MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011Empty) {
      dependency_12 = _pragmateUi011Empty;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_14 = _pragmateUi011List;
    }, function (_pragmateUi011Form) {
      dependency_15 = _pragmateUi011Form;
    }, function (_pragmateUi011Modal) {
      dependency_16 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0045ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_19 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_20 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_21 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_22 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_23 = _aimpactAilearnApp0045Config;
    }, function (_aimpactAilearnApp0045ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0045ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_25 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0045ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0045ComponentsCoverImageCode;
    }, function (_pragmateUi011Image) {
      dependency_28 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/modules/management/settings.widget');
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
        hash: 623412203,
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
              }
              breadcrumb.push([title]);
              _mainLayout.LayoutBroker.breadcrumb = breadcrumb;
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
        hash: 4094756849,
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
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.module.actions.addActivity))), _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text)), _react.default.createElement(_modal.ModalSelection, {
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
        hash: 2010269373,
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
            }, texts.actions.add)), _react.default.createElement(_form.Form, {
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
            }))), _react.default.createElement(_modal.ModalSelection, {
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
        hash: 4155992683,
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
        hash: 2041066874,
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
                module: moduleTexts
              },
              store
            } = (0, _context.useModuleContext)();
            const content = store.model.description ?? moduleTexts.description;
            const onEdit = async event => {
              const {
                target
              } = event;
              store.save({
                [target.name]: target.value
              });
            };
            return _react.default.createElement("div", {
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
        hash: 468653842,
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
            const title = store.model.title ?? moduleTexts.title;
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
        hash: 2774411164,
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
            (0, _hooks.useBinder)([store.model], () => setFetching(store?.model?.fetching));
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks.useBinder)([store], () => setEditingActivity(store.editActivity), 'activity.selected');
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
            }, React.createElement(_header.Header, null), React.createElement(_management.ModuleManagement, null)));
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
        hash: 3709199828,
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
                _routing.routing.pushState(`/modules/list?tab=published`);
              } catch (e) {
                console.log('error', e);
                _toast.toast.error(texts.toast.errorPublishingModule);
              }
            };
            return _react.default.createElement("div", {
              className: "publish-action__container"
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              ...attrs
            }, texts.actions.publish));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInRpdGxlIiwibWFuYWdlbWVudCIsInB1c2giLCJkZWxldGVBY3Rpdml0eSIsInJlbW92ZSIsInNhdmVEcmFmdCIsInNhdmUiLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJfZW1wdHkiLCJfY29tcG9uZW50cyIsIl9tb2RhbCIsIl9jb250ZXh0IiwiRW1wdHlBY3Rpdml0eUxpc3QiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInNldEl0ZW1zIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsInJlb3JkZXIiLCJGcmFnbWVudCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9haUJ1dHRvbiIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJfdWkiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJfcHJlbG9hZCIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJNb2R1bGVWaWV3IiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsImNvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwidHJpbUJyZWFkY3J1bWIiLCJhZGRCcmVhZGNydW1iIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsImdsb2JhbFRoaXMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIk1vZHVsZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFjLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUFvQixNQUFBLEdBQUFwQixPQUFB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