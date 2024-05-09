System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_7 = _aimpactAilearnApp0032CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_19 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_20 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_21 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_22 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_23 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0032ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_25 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_28 = _aimpactChat101SharedHooks;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@aimpact/ailearn-app/coins-layout.widget', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['@beyond-js/kernel/routing', dependency_9], ['react', dependency_10], ['pragmate-ui/empty', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/form', dependency_14], ['framer-motion', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['@aimpact/chat/shared/hooks', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/management/settings.widget');
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
        hash: 942114041,
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
        hash: 1601436878,
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
              ref: iRef
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

      /***********************************************
      INTERNAL MODULE: ./views/module/content-editable
      ***********************************************/

      ims.set('./views/module/content-editable', {
        hash: 3809760213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const ContentEditable = ({
            onSave,
            selector: Control = 'div',
            className,
            children,
            name,
            onEdit
          }) => {
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [content, setContent] = (0, _react.useState)(typeof children === 'string' ? children : '');
            const contentRef = _react.default.useRef(null);
            // Toggle the editable state
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              setTimeout(() => {
                const el = contentRef.current;
                if (el) {
                  const range = document.createRange();
                  const sel = globalThis.getSelection();
                  range.selectNodeContents(el);
                  range.collapse(false);
                  sel?.removeAllRanges();
                  sel?.addRange(range);
                  el.focus();
                }
              }, 0);
            };
            const handleSave = async () => {
              await onSave({
                [name]: contentRef.current?.textContent
              });
              toggleEdit();
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const constrolCls = isEditable ? `pui-editable-selector` : '';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(Control, {
              ref: contentRef,
              className: constrolCls,
              contentEditable: isEditable,
              suppressContentEditableWarning: true
            }, content), _react.default.createElement("div", {
              className: "pui-content-editable__actions"
            }, isEditable && _react.default.createElement(_icons.IconButton, {
              icon: "backArrow",
              onClick: toggleEdit
            }), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: handleSave
            })));
          };
          exports.ContentEditable = ContentEditable;
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
        hash: 476078848,
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
        hash: 879033848,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleTitle = ModuleTitle;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("./content-editable");
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
            }, _react.default.createElement("strong", null, moduleTexts.title), _react.default.createElement(_contentEditable.ContentEditable, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwidGl0bGUiLCJtYW5hZ2VtZW50IiwicHVzaCIsIkxheW91dEJyb2tlciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJtYW51YWwiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsImFzIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImNvbnRyb2xzIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9haUJ1dHRvbiIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImFkZE11bHRpcGxlQnJlYWRjcnVtYiIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJfdWkiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX21vZHVsZSIsIl9ob29rcyIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdB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