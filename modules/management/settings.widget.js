System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.34.dev-01/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.34.dev-01/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.34.dev-01/components/ui", "@aimpact/ailearn-app@0.0.34.dev-01/config", "@aimpact/ailearn-app@0.0.34.dev-01/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.34.dev-01/components/cover-image.code", "pragmate-ui@0.1.1/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0034Dev01CoinsLayoutWidget) {
      dependency_9 = _aimpactAilearnApp0034Dev01CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0034Dev01ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0034Dev01ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_19 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_20 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_21 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0034Dev01ComponentsUi) {
      dependency_22 = _aimpactAilearnApp0034Dev01ComponentsUi;
    }, function (_aimpactAilearnApp0034Dev01Config) {
      dependency_23 = _aimpactAilearnApp0034Dev01Config;
    }, function (_aimpactAilearnApp0034Dev01ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0034Dev01ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_25 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0034Dev01ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0034Dev01ComponentsCoverImageCode;
    }, function (_pragmateUi011Image) {
      dependency_28 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.34.dev-01"], ["@aimpact/ailearn-app", "0.0.34.dev-01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/coins-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.34.dev-01/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.34.dev-01/modules/management/settings.widget');
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
        hash: 3248588681,
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
            return _react.default.createElement(_ui.AnimatedContainer, null, _react.default.createElement("section", {
              className: "section-actions__container actions-end border-top"
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
              onSave: onSave
            }, title), _react.default.createElement("div", {
              className: "module__owner"
            }, _react.default.createElement("strong", null, texts.module.owner, ": "), store.model.owner?.name)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 1973626280,
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
              ensureCredits: _coinsLayout.LayoutBroker.ensureCredits,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImlkIiwidHJpZ2dlciIsInZpZXciLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJmaW5kIiwiaXRlbSIsImJpbmQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJ0aXRsZSIsIm1hbmFnZW1lbnQiLCJwdXNoIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImNvbnRyb2xzIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImJhc2VVcmkiLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm9uUG9pbnRlckRvd24iLCJyZWYiLCJJY29uIiwiQXBwSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImluZGV4IiwidXNlRHJhZ0NvbnRyb2xzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwib25Ub2dnbGUiLCJJdGVtIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwiX3ByZWxvYWQiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiTW9kdWxlVmlldyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJjb250ZW50Iiwib25FZGl0IiwidGFyZ2V0IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiUHVibGlzaE1vZHVsZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIm93bmVyIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJnbG9iYWxUaGlzIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1NLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBMEI7WUFDN0YsTUFBTUMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsT0FDQ04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsU0FBUztjQUNUSSxNQUFNO2NBQ05QLFNBQVMsRUFBRUEsU0FBUztjQUNwQlEsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFOztZQUNULEdBRUFSLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBYyxLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FB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