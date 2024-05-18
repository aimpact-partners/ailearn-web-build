System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32-dev.46/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32-dev.46/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32-dev.46/components/ui", "@aimpact/ailearn-app@0.0.32-dev.46/config", "@aimpact/ailearn-app@0.0.32-dev.46/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32-dev.46/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_3 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_4 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032Dev46CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032Dev46CoinsLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_9 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_10 = _react2;
    }, function (_pragmateUi011Empty) {
      dependency_11 = _pragmateUi011Empty;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Form) {
      dependency_14 = _pragmateUi011Form;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_pragmateUi011Modal) {
      dependency_16 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032Dev46ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0032Dev46ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_19 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_20 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_21 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032Dev46ComponentsUi) {
      dependency_22 = _aimpactAilearnApp0032Dev46ComponentsUi;
    }, function (_aimpactAilearnApp0032Dev46Config) {
      dependency_23 = _aimpactAilearnApp0032Dev46Config;
    }, function (_aimpactAilearnApp0032Dev46ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0032Dev46ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_25 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032Dev46ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0032Dev46ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_28 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-dev.46"], ["@aimpact/ailearn-app", "0.0.32-dev.46"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.46/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['react', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/form', dependency_14], ['framer-motion', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['@aimpact/chat/shared/hooks', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.46/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.46/modules/management/settings.widget');
      ims = new Map();
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
        hash: 4088209348,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                _coinsLayout.LayoutBroker.overlay = false;
                _coinsLayout.LayoutBroker.backLink = undefined;
              } else {
                _coinsLayout.LayoutBroker.overlay = true;
                _coinsLayout.LayoutBroker.backLink = `/modules/management?id=${this.model.id}`;
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
                  _coinsLayout.LayoutBroker.backLink = `/modules/management?id=${this.model.id}`;
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
              _coinsLayout.LayoutBroker.breadcrumb = breadcrumb;
            }
            async deleteActivity(id) {
              this.#model.activities.remove(id);
              await this.#model.saveDraft();
              this.trigger('change');
            }
            async save(specs) {
              this.fetching = true;
              await this.model.saveDraft(specs);
              this.fetching = false;
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
        hash: 3151625802,
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
        hash: 253379527,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              _coinsLayout.LayoutBroker.addMultipleBreadcrumb([[activityType, activity.id]]);
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
        hash: 3669703153,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
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
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
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
        hash: 2355559764,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _module = require("./module");
          var _components = require("pragmate-ui/components");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("./activity");
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
            if (!store.ready) return React.createElement(_components.Spinner, {
              active: true
            });
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
        hash: 273308871,
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
            const onEdit = async ({
              target
            }) => {
              store.save({
                [target.name]: target.value
              });
            };
            return _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h5", null, moduleTexts.description), _react.default.createElement(_ui.ContentEditable, {
              name: "description",
              onSave: onEdit,
              selector: "p"
            }, content));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/module/header
      *************************************/

      ims.set('./views/module/header', {
        hash: 2642704310,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              _coinsLayout.LayoutBroker.trimBreadcrumb(1);
              _coinsLayout.LayoutBroker.addBreadcrumb([event.target.value, '']);
              store.save({
                title: event.target.value
              });
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            return _react.default.createElement("section", null, _react.default.createElement("header", {
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
              onSave: onSave
            }, title), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name)), _react.default.createElement(_publish.PublishModule, null))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 4210474825,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleView = ModuleView;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _context = require("../context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./header");
          var _management = require("./management");
          /*bundle*/
          function ModuleView(props) {
            const {
              store
            } = props;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel] = React.useState(0);
            const [activities, setActivities] = React.useState(store.model?.activities?.items);
            const [, setEditingActivity] = React.useState();
            const onActivitiesGenerated = () => {
              setActivities(store.model?.activities?.items);
            };
            (0, _hooks.useBinder)([store.model], () => setFetching(store?.model?.fetching));
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks.useBinder)([store], () => setEditingActivity(store.editActivity), 'activity.selected');
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
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
              ensureCredits: _coinsLayout.LayoutBroker.ensureCredits,
              totalActivities: store.model?.activities?.length
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement(_management.ModuleManagement, null)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/module/management
      *****************************************/

      ims.set('./views/module/management', {
        hash: 1940321866,
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
            }, _react.default.createElement("h5", null, moduleTexts.objective, ":"), _react.default.createElement("p", null, " ", store.model.objective)), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_activities.ModuleActivities, null));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/module/publish
      **************************************/

      ims.set('./views/module/publish', {
        hash: 457822517,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
                  _coinsLayout.LayoutBroker.showMessage('error', texts.errors.CONTACT_ADMIN);
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
        hash: 1817947241,
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
            }, _react.default.createElement("strong", null, moduleTexts.title), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              onSave: async data => {
                await store.save(data);
              },
              selector: "p"
            }, content));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImlkIiwidHJpZ2dlciIsInZpZXciLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJmaW5kIiwiaXRlbSIsImJpbmQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJ0aXRsZSIsIm1hbmFnZW1lbnQiLCJwdXNoIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9haUJ1dHRvbiIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJfdWkiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX21vZHVsZSIsIl9ob29rcyIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsImNvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwidHJpbUJyZWFkY3J1bWIiLCJhZGRCcmVhZGNydW1iIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvd25lciIsIlB1Ymxpc2hNb2R1bGUiLCJfaG9va3MyIiwiX21hbmFnZW1lbnQiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJnbG9iYWxUaGlzIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBp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