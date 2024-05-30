System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.45/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.45/components/ui", "@aimpact/ailearn-app@0.0.45/config", "@aimpact/ailearn-app@0.0.45/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.45/components/cover-image.code", "pragmate-ui@0.1.1/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0045CoinsLayoutWidget) {
      dependency_9 = _aimpactAilearnApp0045CoinsLayoutWidget;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/coins-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
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
        hash: 2106860683,
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
        hash: 4265732705,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImlkIiwidHJpZ2dlciIsInZpZXciLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJmaW5kIiwiaXRlbSIsImJpbmQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJ0aXRsZSIsIm1hbmFnZW1lbnQiLCJwdXNoIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImNvbnRyb2xzIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImJhc2VVcmkiLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm9uUG9pbnRlckRvd24iLCJyZWYiLCJJY29uIiwiQXBwSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImluZGV4IiwidXNlRHJhZ0NvbnRyb2xzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwib25Ub2dnbGUiLCJJdGVtIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwiX3ByZWxvYWQiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiTW9kdWxlVmlldyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJjb250ZW50Iiwib25FZGl0IiwidGFyZ2V0IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiUHVibGlzaE1vZHVsZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIm93bmVyIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJnbG9iYWxUaGlzIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1NLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBMEI7WUFDN0YsTUFBTUMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsT0FDQ04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsU0FBUztjQUNUSSxNQUFNO2NBQ05QLFNBQVMsRUFBRUEsU0FBUztjQUNwQlEsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFOztZQUNULEdBRUFSLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBYyxLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0IsTUFBQSxHQUFBcEIsT0FBQTtVQUVPO1VBQVUsTUFDWHFCLFVBQVcsU0FBUUgsS0FBQSxDQUFBSSxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUyxnQkFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixNQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWdDLFFBQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsZUFBQSxHQUFBakMsT0FBQTtVQUNBLElBQUFrQyxZQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQW1DLE1BQUEsR0FBQW5DLE9BQUE7VUFDQSxJQUFBb0MsUUFBQSxHQUFBcEMsT0FBQTtVQUNNLE1BQU95QixZQUFhLFNBQVFNLE1BQUEsQ0FBQU0sYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9QLFFBQUEsQ0FBQVEsY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNLLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQ0MsYUFBYTtZQUNwRTtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPYixRQUFBLENBQUFRLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDTyxPQUFPLEVBQUVDLEtBQUssSUFBSSxFQUFFO1lBQ2hEO1lBRUEsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPbEIsZ0JBQUEsQ0FBQW1CLGFBQWE7WUFDckI7WUFDQSxDQUFBQyxLQUFNLEdBQStCLElBQUlmLE1BQUEsQ0FBQWdCLFlBQVksQ0FBQ2xCLGVBQUEsQ0FBQW1CLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3ZFLElBQUlILEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNLEVBQUVJLEtBQUs7WUFDMUI7WUFFQSxJQUFJQyxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxLQUFLLENBQUNBLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDSyxLQUFLO1lBQ3hDO1lBRUEsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsSUFBSUEsWUFBWUEsQ0FBQ0YsS0FBSztjQUNyQixJQUFJLENBQUMsQ0FBQUUsWUFBYSxHQUFHRixLQUFLO2NBRTFCLElBQUlBLEtBQUssS0FBS0csU0FBUyxFQUFFO2dCQUN4QnZCLFlBQUEsQ0FBQXdCLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLEtBQUs7Z0JBQzVCekIsWUFBQSxDQUFBd0IsWUFBWSxDQUFDRSxRQUFRLEdBQUdILFNBQVM7ZUFDakMsTUFBTTtnQkFDTnZCLFlBQUEsQ0FBQXdCLFlBQVksQ0FBQ0MsT0FBTyxHQUFHLElBQUk7Z0JBQzNCekIsWUFBQSxDQUFBd0IsWUFBWSxDQUFDRSxRQUFRLEdBQUcsMEJBQTBCLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLEVBQUUsRUFBRTs7Y0FHbEUsSUFBSSxDQUFDQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDbEM7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUFQLFlBQWEsR0FBRyxVQUFVLEdBQUcsUUFBUTtZQUNwRDtZQUVBUSxZQUFZQyxLQUFLO2NBQ2hCLEtBQUssRUFBRTtjQUNQLE1BQU1KLEVBQUUsR0FBR0ksS0FBSyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDO2NBQzFCLE1BQU1DLFVBQVUsR0FBR0YsS0FBSyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBQzFDLElBQUksQ0FBQyxDQUFBaEIsS0FBTSxDQUFDa0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztjQUUzQ2pDLFFBQUEsQ0FBQWtDLE9BQU8sQ0FBQ0YsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFLO2dCQUN6QixJQUFJaEMsUUFBQSxDQUFBa0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFFBQVEsS0FBSyxxQkFBcUIsRUFBRTtnQkFDcEQsSUFBSSxDQUFDcEMsUUFBQSxDQUFBa0MsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEVBQUUsQ0FBQ1AsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksQ0FBQ1YsWUFBWSxHQUFHQyxTQUFTO2dCQUVwRSxJQUFJckIsUUFBQSxDQUFBa0MsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEVBQUUsQ0FBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO2tCQUM3QixJQUFJLENBQUNRLGFBQWEsRUFBRTs7Y0FFdEIsQ0FBQyxDQUFDO2NBQ0YsSUFBSSxDQUFDYixFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJYyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O2NBR2xDLElBQUksQ0FBQ0MsSUFBSSxDQUFDZixFQUFFLEVBQUVNLFVBQVUsQ0FBQztZQUMxQjtZQUNBVSxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF2QyxLQUFNLENBQUN3QyxVQUFVLENBQUNELEtBQUssRUFBRTtjQUM5QixJQUFJLENBQUMsQ0FBQXZDLEtBQU0sR0FBR21CLFNBQVM7Y0FDdkIsS0FBSyxDQUFDRixLQUFLLEdBQUcsS0FBSztZQUNwQjtZQUVBd0IsWUFBWUEsQ0FBQ2xCLEVBQUUsR0FBRztZQUVsQixNQUFNZSxJQUFJQSxDQUFDZixFQUFFLEVBQUVNLFVBQVU7Y0FDeEIsSUFBSTtnQkFDSCxNQUFNYSxLQUFLLEdBQUduQixFQUFFLEtBQUssS0FBSyxHQUFHO2tCQUFFb0IsSUFBSSxFQUFFO2dCQUFPLENBQUUsR0FBRztrQkFBRXBCLEVBQUU7a0JBQUVvQixJQUFJLEVBQUU7Z0JBQU8sQ0FBRTtnQkFFdEUsSUFBSXBCLEVBQUUsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUF2QixLQUFNLEVBQUUsSUFBSSxDQUFDdUMsS0FBSyxFQUFFO2dCQUU3QyxJQUFJLElBQUksQ0FBQ3ZDLEtBQUssSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ3VCLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsQ0FBQXZCLEtBQU0sR0FBRyxNQUFNUixnQkFBQSxDQUFBb0QsY0FBYyxDQUFDaEIsR0FBRyxDQUFDYyxLQUFLLENBQUM7Z0JBRTdDLEtBQUssQ0FBQ3pCLEtBQUssR0FBRyxJQUFJO2dCQUNsQixJQUFJWSxVQUFVLEVBQUU7a0JBQ2YsSUFBSSxDQUFDWCxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUFsQixLQUFNLENBQUN3QyxVQUFVLENBQUMvQixLQUFLLENBQUNvQyxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDdkIsRUFBRSxLQUFLTSxVQUFVLENBQUM7a0JBQ3JGakMsWUFBQSxDQUFBd0IsWUFBWSxDQUFDRSxRQUFRLEdBQUcsMEJBQTBCLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3VCLEVBQUUsRUFBRTs7Z0JBRWxFLElBQUlNLFVBQVUsRUFBRSxJQUFJLENBQUNPLGFBQWEsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLENBQUF4QixLQUFNLENBQUNrQixFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ00sYUFBYSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7ZUFDdkQsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUFaLGFBQWFBLENBQUE7Y0FDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUF4QixLQUFNLENBQUNLLEtBQUssRUFBRTtjQUV4QixNQUFNa0MsVUFBVSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUN2QyxLQUFLLENBQUN1QyxVQUFVLENBQUNDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztjQUNyRSxNQUFNQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFuQyxZQUFhLEVBQUVtQyxLQUFLLElBQUksSUFBSSxDQUFDekMsS0FBSyxDQUFDdUMsVUFBVSxDQUFDRyxVQUFVO2NBRTNFLElBQUksSUFBSSxDQUFDLENBQUFwQyxZQUFhLEVBQUU7Z0JBQ3ZCaUMsVUFBVSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUN2RCxLQUFLLENBQUNxRCxLQUFLLEVBQUUsMEJBQTBCLElBQUksQ0FBQ3JELEtBQUssQ0FBQ3VCLEVBQUUsRUFBRSxDQUFDLENBQUM7O2NBRS9FNEIsVUFBVSxDQUFDSSxJQUFJLENBQUMsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7Y0FFeEJ6RCxZQUFBLENBQUF3QixZQUFZLENBQUMrQixVQUFVLEdBQUdBLFVBQVU7WUFDckM7WUFFQSxNQUFNSyxjQUFjQSxDQUFDakMsRUFBRTtjQUN0QixJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ3dDLFVBQVUsQ0FBQ2lCLE1BQU0sQ0FBQ2xDLEVBQUUsQ0FBQztjQUNqQyxNQUFNLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxDQUFDMEQsU0FBUyxFQUFFO2NBQzdCLElBQUksQ0FBQ2xDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFRCxNQUFNbUMsSUFBSUEsQ0FBQ2pCLEtBQU07Y0FDZixJQUFJLENBQUNrQixRQUFRLEdBQUcsSUFBSTtjQUNwQixNQUFNLElBQUksQ0FBQzVELEtBQUssQ0FBQzBELFNBQVMsQ0FBQ2hCLEtBQUssQ0FBQztjQUNqQyxJQUFJLENBQUNrQixRQUFRLEdBQUcsS0FBSztjQUNyQixPQUFPLElBQUksQ0FBQyxDQUFBNUQsS0FBTTtZQUNuQjtZQUVBLE1BQU02RCxjQUFjQSxDQUFDQyxZQUFZLEVBQUVDLE1BQU07Y0FDeEMsSUFBSTtnQkFDSCxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUNoRSxLQUFLLENBQUN3QyxVQUFVLENBQUN5QixHQUFHLENBQUNILFlBQVksQ0FBQ3ZDLEVBQUUsRUFBRXdDLE1BQU0sQ0FBQztnQkFDekUsT0FBT0MsUUFBUTtlQUNmLENBQUMsT0FBT2hCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFDQSxNQUFNa0IsT0FBT0EsQ0FBQTtjQUNaLElBQUksQ0FBQ04sUUFBUSxHQUFHLElBQUk7Y0FDcEIsTUFBTU8sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDbkUsS0FBSyxDQUFDa0UsT0FBTyxFQUFFO2NBQzNDLElBQUksQ0FBQ04sUUFBUSxHQUFHLEtBQUs7Y0FDckIsT0FBT08sUUFBUTtZQUNoQjs7VUFDQTVFLE9BQUEsQ0FBQUosWUFBQSxHQUFBQSxZQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BKRCxJQUFBMUIsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBMkcsV0FBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFFTSxTQUFVOEcsaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRTVEO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2xILE1BQUEsQ0FBQVMsT0FBSyxDQUFDMEcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBSztjQUN4QkYsWUFBWSxDQUFDLENBQUNELFNBQVMsQ0FBQztZQUN6QixDQUFDO1lBRUQsT0FDQ2pILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUF5QixHQUN2Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFDO1lBQStCLEdBQ2hESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUMsS0FBSyxDQUFDRSxNQUFNLENBQUMwQixVQUFVLENBQUNhLEtBQUssQ0FBTSxFQUN4QzVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxXQUFBLENBQUFTLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLE1BQU07Y0FBQ0MsSUFBSSxFQUFDLEtBQUs7Y0FBQ0MsT0FBTyxFQUFFSjtZQUFXLEdBQ3BEakUsS0FBSyxDQUFDRSxNQUFNLENBQUNvRSxPQUFPLENBQUNDLFdBQVcsQ0FDekIsQ0FDSixDQUNFLEVBQ1QxSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUcsTUFBQSxDQUFBZ0IsS0FBSyxRQUNMM0gsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3lDLEtBQUssQ0FBQ0UsTUFBTSxDQUFDMEIsVUFBVSxDQUFDNkMsS0FBSyxDQUFDaEMsS0FBSyxDQUFNLEVBQzlDNUYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZUFBT3lDLEtBQUssQ0FBQ0UsTUFBTSxDQUFDMEIsVUFBVSxDQUFDNkMsS0FBSyxDQUFDQyxJQUFJLENBQVEsQ0FDMUMsRUFDUjdILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRyxNQUFBLENBQUFpQixjQUFjO2NBQUNDLElBQUksRUFBRWQsU0FBUztjQUFFZSxPQUFPLEVBQUVaO1lBQVcsRUFBSSxDQUNwRDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCQSxJQUFBcEgsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdJLEtBQUEsR0FBQWhJLE9BQUE7VUFDQSxJQUFBMkcsV0FBQSxHQUFBM0csT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWlJLEtBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBa0ksS0FBQSxHQUFBbEksT0FBQTtVQUNBLElBQUE0RyxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVbUksZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRWpGLEtBQUs7Y0FBRTRCLFVBQVU7Y0FBRXNELFFBQVE7Y0FBRTdHO1lBQUssQ0FBRSxHQUFHLElBQUFzRixRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ2pFLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR2xILE1BQUEsQ0FBQVMsT0FBSyxDQUFDMEcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNLENBQUNuRSxLQUFLLEVBQUVzRixRQUFRLENBQUMsR0FBR3RJLE1BQUEsQ0FBQVMsT0FBSyxDQUFDMEcsUUFBUSxDQUFDcEMsVUFBVSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ3dELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd4SSxNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1GLFlBQVksQ0FBQ2EsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQztZQUNyRCxJQUFJLENBQUNoRCxVQUFVLENBQUMwRCxNQUFNLEVBQUUsT0FBT3pJLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxNQUFBLENBQUFJLGlCQUFpQixPQUFHO1lBRXBELE1BQU0yQixTQUFTLEdBQUcxRixLQUFLLElBQUc7Y0FDekJ3RixXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCRixRQUFRLENBQUN0RixLQUFLLENBQUM7Y0FDZnhCLEtBQUssQ0FBQ2UsS0FBSyxDQUFDd0MsVUFBVSxDQUFDNEQsT0FBTyxDQUFDM0YsS0FBSyxDQUFDO1lBQ3RDLENBQUM7WUFDRCxPQUNDaEQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUFtSSxRQUFBLFFBQ0M1SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUM7WUFBK0IsR0FDaERKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUt5QyxLQUFLLENBQUM0QixVQUFVLENBQUNhLEtBQUssQ0FBTSxFQUNqQzVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxXQUFBLENBQUFTLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLE1BQU07Y0FBQ0MsSUFBSSxFQUFDLEtBQUs7Y0FBQ0MsT0FBTyxFQUFFSjtZQUFXLEdBQ3BEakUsS0FBSyxDQUFDc0UsT0FBTyxDQUFDakIsR0FBRyxDQUNWLENBQ0QsRUFFVHhHLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5SCxLQUFBLENBQUFVLElBQUk7Y0FBQ1IsUUFBUSxFQUFFQTtZQUFRLEdBQ3ZCckksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBNEksT0FBTyxDQUFDQyxLQUFLO2NBQUN6SSxFQUFFLEVBQUMsS0FBSztjQUFDb0MsTUFBTSxFQUFFTSxLQUFLO2NBQUUwRixTQUFTLEVBQUVBO1lBQVMsR0FDMUQxSSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUgsS0FBQSxDQUFBZSxJQUFJO2NBQUM1SSxTQUFTLEVBQUMsc0JBQXNCO2NBQUM2RSxLQUFLLEVBQUVxRCxRQUFRO2NBQUV0RixLQUFLLEVBQUVBLEtBQUs7Y0FBRWlHLE9BQU8sRUFBRWYsS0FBQSxDQUFBZ0I7WUFBYyxFQUFJLENBQ2xGLENBQ1YsRUFDUGxKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRyxNQUFBLENBQUFpQixjQUFjO2NBQUNDLElBQUksRUFBRWQsU0FBUztjQUFFZSxPQUFPLEVBQUVaO1lBQVcsRUFBSSxDQUN2RDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZDQSxJQUFBUCxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFFTSxTQUFVa0osV0FBV0EsQ0FBQztZQUFFbkIsT0FBTztZQUFFb0I7VUFBUyxDQUFFO1lBQ2pELE1BQU07Y0FDTGpHLEtBQUs7Y0FDTEEsS0FBSyxFQUFFO2dCQUFFc0UsT0FBTyxFQUFFNEI7Y0FBVztZQUFFLENBQy9CLEdBQUcsSUFBQXZDLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTSxDQUFDYixRQUFRLEVBQUVtRCxXQUFXLENBQUMsR0FBR3RKLE1BQUEsQ0FBQVMsT0FBSyxDQUFDMEcsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNSyxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCLElBQUk7Z0JBQ0g4QixXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNRixTQUFTLEVBQUU7Z0JBQ2pCRSxXQUFXLENBQUMsS0FBSyxDQUFDO2VBQ2xCLENBQUMsT0FBTy9ELENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUeUMsT0FBTyxFQUFFOztZQUVYLENBQUM7WUFDRCxPQUNDaEksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21HLE1BQUEsQ0FBQTBDLFlBQVk7Y0FDWkgsU0FBUyxFQUFFNUIsT0FBTztjQUNsQmdDLFFBQVE7Y0FDUkMsUUFBUSxFQUFFekIsT0FBTztjQUNqQlAsT0FBTyxFQUFFO2dCQUNSaUMsT0FBTyxFQUFFO2tCQUNScEMsT0FBTyxFQUFFLFNBQVM7a0JBQ2xCcUMsS0FBSyxFQUFFTixXQUFXLENBQUNLO2lCQUNuQjtnQkFDREUsTUFBTSxFQUFFO2tCQUFFRCxLQUFLLEVBQUVOLFdBQVcsQ0FBQ08sTUFBTTtrQkFBRXRDLE9BQU8sRUFBRSxTQUFTO2tCQUFFdUMsUUFBUSxFQUFFO2dCQUFJO2VBQ3ZFO2NBQ0Q5QixJQUFJO2NBQ0puQyxLQUFLLEVBQUV6QyxLQUFLLENBQUM0QixVQUFVLENBQUMrRSxNQUFNLENBQUNsRSxLQUFLO2NBQ3BDaUMsSUFBSSxFQUFFMUUsS0FBSyxDQUFDNEIsVUFBVSxDQUFDK0UsTUFBTSxDQUFDQztZQUFRLEVBQ3JDO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUEvSixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUErSixNQUFBLEdBQUEvSixPQUFBO1VBQ0EsSUFBQWdLLE9BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBaUssWUFBQSxHQUFBakssT0FBQTtVQUVBLElBQUFvQyxRQUFBLEdBQUFwQyxPQUFBO1VBQ00sU0FBVWtLLGtCQUFrQkEsQ0FBQztZQUFFQyxlQUFlO1lBQUU3RCxRQUFRO1lBQUU4RDtVQUFRLENBQUU7WUFDekUsTUFBTTtjQUNMbEgsS0FBSyxFQUFFO2dCQUFFc0UsT0FBTztnQkFBRTFDLFVBQVUsRUFBRTVCO2NBQUssQ0FBRTtjQUNyQzNCO1lBQUssQ0FDTCxHQUFHLElBQUFzRixRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU1zRCxJQUFJLEdBQUdDLEtBQUssSUFBRztjQUNwQkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkI7Y0FDQSxNQUFNQyxPQUFPLEdBQUdqSixLQUFLLENBQUNlLEtBQUssQ0FBQ3dDLFVBQVUsQ0FBQy9CLEtBQUssQ0FBQ29DLElBQUksQ0FBQ0MsSUFBSSxJQUFJQSxJQUFJLENBQUN2QixFQUFFLEtBQUt5QyxRQUFRLENBQUN6QyxFQUFFLENBQUM7Y0FDbEZ0QyxLQUFLLENBQUNpQyxZQUFZLEdBQUdnSCxPQUFPO2NBQzVCLE1BQU1DLE9BQU8sR0FBRywwQkFBMEJsSixLQUFLLENBQUNlLEtBQUssQ0FBQ3VCLEVBQUUsRUFBRTtjQUMxRHRDLEtBQUssQ0FBQ21ELGFBQWEsRUFBRTtjQUNyQnRDLFFBQUEsQ0FBQWtDLE9BQU8sQ0FBQ29HLFNBQVMsQ0FBQywwQkFBMEJuSixLQUFLLENBQUNlLEtBQUssQ0FBQ3VCLEVBQUUsZUFBZXlDLFFBQVEsQ0FBQ3pDLEVBQUUsRUFBRSxDQUFDO1lBQ3hGLENBQUM7WUFDRCxNQUFNOEcsSUFBSSxHQUFHNUssTUFBQSxDQUFBUyxPQUFLLENBQUNvSyxNQUFNLENBQXdCLElBQUksQ0FBQztZQUN0RCxNQUFNQyxNQUFNLEdBQUcsK0JBQStCdkUsUUFBUSxDQUFDckIsSUFBSSxFQUFFO1lBQzdELE1BQU02RixRQUFRLEdBQUcsMEJBQTBCeEUsUUFBUSxDQUFDeUUsS0FBSyxFQUFFO1lBQzNELE1BQU1DLFFBQVEsR0FBR1YsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUNDLGVBQWUsRUFBRTtjQUN2QkosZUFBZSxFQUFFO1lBQ2xCLENBQUM7WUFFRCxNQUFNYyxNQUFNLEdBQUdYLEtBQUssSUFBSUYsUUFBUSxDQUFDYyxLQUFLLENBQUNaLEtBQUssQ0FBQztZQUM3Q3ZLLE1BQUEsQ0FBQVMsT0FBSyxDQUFDMkssU0FBUyxDQUFDLE1BQUs7Y0FDcEIsTUFBTUMsWUFBWSxHQUE0QzlGLENBQUMsSUFBSUEsQ0FBQyxDQUFDK0YsY0FBYyxFQUFFO2NBRXJGLE1BQU1DLElBQUksR0FBR1gsSUFBSSxDQUFDSCxPQUFPO2NBRXpCLElBQUljLElBQUksRUFBRTtnQkFDVDtnQkFDQUEsSUFBSSxDQUFDQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUVILFlBQVksRUFBRTtrQkFBRUksT0FBTyxFQUFFO2dCQUFLLENBQUUsQ0FBQztnQkFFckUsT0FBTyxNQUFLO2tCQUNYO2tCQUNBRixJQUFJLENBQUNHLG1CQUFtQixDQUFDLFlBQVksRUFBRUwsWUFBWSxFQUFFO29CQUNwREksT0FBTyxFQUFFO21CQUNULENBQUM7Z0JBQ0gsQ0FBQzs7WUFFSCxDQUFDLEVBQUUsQ0FBQ2IsSUFBSSxDQUFDLENBQUM7WUFDVixPQUNDNUssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dKLFlBQUEsQ0FBQXlCLGlCQUFpQixRQUNqQjNMLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFOLFNBQVMsRUFBQztZQUF3RCxHQUN6RUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQXNCLEdBQ3BDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLa0wsYUFBYSxFQUFFVixNQUFNO2NBQUVXLEdBQUcsRUFBRWpCLElBQUk7Y0FBRXhLLFNBQVMsRUFBQztZQUFzQixHQUN0RUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NKLE1BQUEsQ0FBQThCLElBQUk7Y0FBQ3ZFLElBQUksRUFBQyxNQUFNO2NBQUNuSCxTQUFTLEVBQUM7WUFBbUIsRUFBRyxDQUM3QyxFQUNOSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUUwSztZQUFNLEdBRXpCOUssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VKLE9BQUEsQ0FBQThCLE9BQU87Y0FBQ3hFLElBQUksRUFBRTBDLE9BQUEsQ0FBQStCLEtBQUssQ0FBQ3pGLFFBQVEsQ0FBQ3JCLElBQUk7WUFBQyxFQUFJLENBQzlCLEVBQ1ZsRixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBNEQsR0FDMUVKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUFnQixHQUNsQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBTU4sU0FBUyxFQUFDO1lBQWdCLEdBQUUrQyxLQUFLLENBQUM4SSxLQUFLLENBQUMxRixRQUFRLENBQUNyQixJQUFJLENBQUMsQ0FBUSxFQUNwRWxGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUs2RixRQUFRLENBQUNYLEtBQUssQ0FBTSxDQUNoQixDQUNMLENBQ0QsRUFDTjVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFvQixHQUNsQ0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFFMks7WUFBUSxHQUFHNUgsS0FBSyxDQUFDK0ksTUFBTSxDQUFDM0YsUUFBUSxDQUFDeUUsS0FBSyxDQUFDLENBQU8sRUFDOURoTCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBUyxHQUN2QkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NKLE1BQUEsQ0FBQW1DLFVBQVU7Y0FBQ3ZHLEtBQUssRUFBRTZCLE9BQU8sQ0FBQzZDLElBQUk7Y0FBRS9DLElBQUksRUFBQyxNQUFNO2NBQUNuSCxTQUFTLEVBQUMsUUFBUTtjQUFDb0gsT0FBTyxFQUFFOEM7WUFBSSxFQUFJLEVBQ2pGdEssTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NKLE1BQUEsQ0FBQW1DLFVBQVU7Y0FBQ3ZHLEtBQUssRUFBRTZCLE9BQU8sQ0FBQ3FDLE1BQU07Y0FBRXZDLElBQUksRUFBQyxRQUFRO2NBQUNuSCxTQUFTLEVBQUMsUUFBUTtjQUFDb0gsT0FBTyxFQUFFeUQ7WUFBUSxFQUFJLENBQ3BGLENBQ0QsQ0FDRSxDQUNVO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNFQSxJQUFBakwsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQW1NLE1BQUEsR0FBQW5NLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFpSyxZQUFBLEdBQUFqSyxPQUFBO1VBQ0EsSUFBQW9NLE9BQUEsR0FBQXBNLE9BQUE7VUFDQSxJQUFBcU0sTUFBQSxHQUFBck0sT0FBQTtVQUNBLElBQUFzTSxZQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXVNLFNBQUEsR0FBQXZNLE9BQUE7VUFFQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFDTSxTQUFVaUosY0FBY0EsQ0FBQztZQUFFN0QsSUFBSTtZQUFFb0gsS0FBSztZQUFFeEg7VUFBSyxDQUFFO1lBQ3BELE1BQU07Y0FDTDlCLEtBQUssRUFBRTtnQkFBRTRCLFVBQVUsRUFBRTVCO2NBQUssQ0FBRTtjQUM1QjNCO1lBQUssQ0FDTCxHQUFHLElBQUFzRixRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU02RSxHQUFHLEdBQUcsSUFBQTdMLE1BQUEsQ0FBQTZLLE1BQU0sRUFBQyxJQUFJLENBQUM7WUFDeEIsTUFBTVIsUUFBUSxHQUFHLElBQUFuSyxhQUFBLENBQUF3TSxlQUFlLEdBQUU7WUFDbEMsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHNU0sTUFBQSxDQUFBUyxPQUFLLENBQUMwRyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU0sQ0FBQzBGLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc5TSxNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFFekQsTUFBTTRGLGVBQWUsR0FBR0EsQ0FBQSxLQUFLO2NBQzVCSCxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3BCLENBQUM7WUFFRCxNQUFNSSxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQkosYUFBYSxDQUFDLEtBQUssQ0FBQztZQUNyQixDQUFDO1lBQ0QsTUFBTUssVUFBVSxHQUFHMUMsS0FBSyxJQUFHO2NBQzFCLElBQUk7Z0JBQ0hzQixHQUFHLENBQUNwQixPQUFPLENBQUN5QyxTQUFTLENBQUMxRyxHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNyQ2hGLEtBQUssQ0FBQ3VFLGNBQWMsQ0FBQ1YsSUFBSSxDQUFDdkIsRUFBRSxDQUFDO2VBQzdCLENBQUMsT0FBT3lCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztnQkFDaEIrRyxNQUFBLENBQUFhLEtBQUssQ0FBQzFILEtBQUssQ0FBQ0YsQ0FBQyxDQUFDNkgsT0FBTyxDQUFDOztZQUV4QixDQUFDO1lBQ0QsTUFBTUMsWUFBWSxHQUFHQSxDQUFBLEtBQU1QLGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7WUFDckQsTUFBTVMsUUFBUSxHQUFHQSxDQUFBLEtBQU0sQ0FBQ1gsVUFBVTtZQUVsQyxPQUNDM00sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ1IsYUFBQSxDQUFBNEksT0FBTyxDQUFDeUUsSUFBSTtjQUNaaEssS0FBSyxFQUFFOEIsSUFBSTtjQUNYakYsU0FBUyxFQUFDLGdCQUFnQjtjQUMxQm9OLFlBQVksRUFBRSxLQUFLO2NBQ25CQyxZQUFZLEVBQUVwRCxRQUFRO2NBQ3RCcUQsU0FBUyxFQUFFVixhQUFhO2NBQ3hCMU0sRUFBRSxFQUFDO1lBQUssR0FFUk4sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dKLFlBQUEsQ0FBQXlELG9CQUFvQjtjQUFDTCxRQUFRLEVBQUVBO1lBQVEsR0FDdkN0TixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUMsZUFBZTtjQUFDeUwsR0FBRyxFQUFFQTtZQUFHLEdBQzFDN0wsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJMLE9BQUEsQ0FBQWxDLGtCQUFrQjtjQUFDQyxlQUFlLEVBQUVpRCxZQUFZO2NBQUU5RyxRQUFRLEVBQUVsQixJQUFJO2NBQUVnRixRQUFRLEVBQUVBO1lBQVEsRUFBSSxFQUN6RnJLLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3SixZQUFBLENBQUEwRCxrQkFBa0I7Y0FBQ3hOLFNBQVMsRUFBQztZQUF3QixHQUNyREosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzhMLFNBQUEsQ0FBQXFCLFFBQVE7Y0FBQ0MsSUFBSSxFQUFFM0ssS0FBSyxDQUFDNEssU0FBUztjQUFFeEssS0FBSyxFQUFFOEIsSUFBSSxDQUFDSixLQUFLLENBQUM4STtZQUFTLEVBQUksRUFDaEUvTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEwsU0FBQSxDQUFBcUIsUUFBUTtjQUFDQyxJQUFJLEVBQUUzSyxLQUFLLENBQUM2SyxXQUFXO2NBQUV6SyxLQUFLLEVBQUU4QixJQUFJLENBQUMySTtZQUFXLEVBQUksRUFDOURoTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMEwsTUFBQSxDQUFBNkIsYUFBYTtjQUFDL0ksSUFBSSxFQUFFRyxJQUFJLENBQUNILElBQUk7Y0FBRUQsS0FBSyxFQUFFSSxJQUFJLENBQUNKO1lBQUssRUFBSSxDQUNqQyxDQUNaLEVBQ1Q0SCxVQUFVLElBQUk3TSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkwsWUFBQSxDQUFBcEQsV0FBVztjQUFDQyxTQUFTLEVBQUU2RCxVQUFVO2NBQUVqRixPQUFPLEVBQUVxRjtZQUFZLEVBQUksQ0FDdEQsQ0FDVDtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3REEsSUFBQXJOLE1BQUEsR0FBQUMsT0FBQTtVQUNNLFNBQVU0TixRQUFRQSxDQUFDO1lBQUVDLElBQUk7WUFBRXZLO1VBQUssQ0FBRTtZQUN2QyxJQUFJLENBQUNBLEtBQUssRUFBRSxPQUFPLElBQUk7WUFDdkIsT0FDQ3ZELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUtvTixJQUFJLENBQU0sRUFDZjlOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGVBQU82QyxLQUFLLENBQVEsQ0FDZjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RBLElBQUF2RCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBaU8sTUFBQSxHQUFBak8sT0FBQTtVQUVBLElBQUFnSSxLQUFBLEdBQUFoSSxPQUFBO1VBQ00sU0FBVWdPLGFBQWFBLENBQUM7WUFBRWhKLEtBQUs7WUFBRUM7VUFBSSxDQUFFO1lBQzVDLE9BQ0NsRixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFBVixNQUFBLENBQUFTLE9BQUEsQ0FBQW1JLFFBQUEsUUFDRTNELEtBQUssQ0FBQ2tKLElBQUksSUFBSW5PLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN3TixNQUFBLENBQUFFLElBQUk7Y0FBQ2xKLElBQUksRUFBQztZQUFTLEdBQUVELEtBQUssQ0FBQ2tKLElBQUksQ0FBUSxFQUN2RG5PLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxLQUFBLENBQUFvRyxTQUFTO2NBQUNwSixLQUFLLEVBQUVBLEtBQUs7Y0FBRUMsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDckM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBbEYsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQWdJLEtBQUEsR0FBQWhJLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUVBLE1BQU1zTixJQUFJLEdBQUdBLENBQUM7WUFBRWU7VUFBSSxDQUFFLEtBQUt0TyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLNE4sSUFBSSxDQUFNO1VBQzFDLE1BQU1DLFlBQVksR0FBR0EsQ0FBQztZQUFFRCxJQUFJO1lBQUU3QjtVQUFLLENBQUUsS0FBSTtZQUN4QyxNQUFNO2NBQUUrQjtZQUFRLENBQUUsR0FBR0YsSUFBSTtZQUN6QixPQUFPdE8sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBSzhOLFFBQVEsQ0FBTTtVQUMzQixDQUFDO1VBRUssU0FBVUgsU0FBU0EsQ0FBQztZQUFFbkosSUFBSTtZQUFFRDtVQUFLLENBQUU7WUFDeEMsTUFBTTtjQUNMOUIsS0FBSyxFQUFFO2dCQUFFNEIsVUFBVSxFQUFFNUI7Y0FBSztZQUFFLENBQzVCLEdBQUcsSUFBQTJELFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTWlGLEtBQUssR0FBRztjQUNiLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFc0IsSUFBSSxDQUFDO2NBQ2xDLGlCQUFpQixFQUFFLENBQUMsV0FBVyxFQUFFZ0IsWUFBWSxDQUFDO2NBRTlDRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUVsQixJQUFJO2FBQzFCO1lBRUQsSUFBSSxDQUFDdEIsS0FBSyxDQUFDL0csSUFBSSxDQUFDLEVBQUUsT0FBTyxJQUFJO1lBRTdCLE1BQU0sQ0FBQ3dKLFNBQVMsRUFBRUMsV0FBVyxDQUFDLEdBQUcxQyxLQUFLLENBQUMvRyxJQUFJLENBQUM7WUFFNUMsTUFBTTBKLFNBQVMsR0FDZDFKLElBQUksS0FBSyxnQkFBZ0IsR0FDdEJELEtBQUssQ0FBQzRKLGNBQWMsQ0FBQyxhQUFhLENBQUMsR0FDbEM1SixLQUFLLENBQUM2SixXQUFXLEdBQ2pCN0osS0FBSyxDQUFDeUosU0FBUyxDQUFDLEdBQ2pCekosS0FBSyxDQUFDeUosU0FBUyxDQUFDO1lBQ3BCLElBQUksQ0FBQ0UsU0FBUyxJQUFLRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ0osU0FBUyxDQUFDLElBQUksQ0FBQ0EsU0FBUyxDQUFDbkcsTUFBTyxFQUFFLE9BQU8sSUFBSTtZQUU5RSxPQUNDekksTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUFtSSxRQUFBLFFBQ0M1SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUMsS0FBSyxDQUFDdUwsU0FBUyxDQUFDLENBQU0sRUFDM0IxTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUgsS0FBQSxDQUFBZSxJQUFJO2NBQUM1SSxTQUFTLEVBQUMsZ0JBQWdCO2NBQUM0QyxLQUFLLEVBQUU0TCxTQUFTO2NBQUUzRixPQUFPLEVBQUUwRjtZQUFXLEVBQUksQ0FDekU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQTNPLE1BQUEsR0FBQUMsT0FBQTtVQVdPLE1BQU1nUCxxQkFBcUIsR0FBQW5OLE9BQUEsQ0FBQW1OLHFCQUFBLEdBQUdqUCxNQUFBLENBQUFTLE9BQUssQ0FBQ3lPLGFBQWEsQ0FBa0IsRUFBcUIsQ0FBQztVQUN6RixNQUFNQyx3QkFBd0IsR0FBR0EsQ0FBQSxLQUFNblAsTUFBQSxDQUFBUyxPQUFLLENBQUMyTyxVQUFVLENBQUNILHFCQUFxQixDQUFDO1VBQUNuTixPQUFBLENBQUFxTix3QkFBQSxHQUFBQSx3QkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNadEYsSUFBQW5QLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBRUEsSUFBQStKLE1BQUEsR0FBQS9KLE9BQUE7VUFDQSxJQUFBZ0ssT0FBQSxHQUFBaEssT0FBQTtVQUVPLE1BQU1vUCxxQkFBcUIsR0FBR0EsQ0FBQztZQUFFaEssSUFBSTtZQUFFSixLQUFLLEVBQUU7Y0FBRXFLLFFBQVE7Y0FBRUM7WUFBVztVQUFFLENBQUUsS0FBSTtZQUNuRixNQUFNO2NBQUVwTTtZQUFLLENBQUUsR0FBRyxJQUFBMkQsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUVwQyxNQUFNUSxPQUFPLEdBQUcrQyxLQUFLLElBQUc7Y0FDdkJnRixXQUFXLENBQUNsSyxJQUFJLENBQUM7WUFDbEIsQ0FBQztZQUNELE1BQU1tSyxHQUFHLEdBQUduSyxJQUFJLENBQUN2QixFQUFFLENBQUMyTCxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNyQyxNQUFNQyxHQUFHLEdBQUcsc0NBQXNDRixHQUFHLEdBQUduSyxJQUFJLENBQUN2QixFQUFFLEtBQUt3TCxRQUFRLEVBQUV4TCxFQUFFLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNyRyxNQUFNeUQsSUFBSSxHQUFHeUMsTUFBQSxDQUFBZ0MsS0FBSyxDQUFDd0QsR0FBRyxDQUFDO1lBRXZCLE1BQU1HLFFBQVEsR0FBRywrQkFBK0J0SyxJQUFJLENBQUN2QixFQUFFLEVBQUU7WUFDekQsT0FDQzlELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUlOLFNBQVMsRUFBRXNQLEdBQUc7Y0FBRWxJLE9BQU8sRUFBRUE7WUFBTyxHQUNuQ3hILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBRXVQO1lBQVEsR0FDdkIzUCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUosT0FBQSxDQUFBNkIsSUFBSTtjQUFDdkUsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixFQUNOdkgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3lDLEtBQUssQ0FBQzRCLFVBQVUsQ0FBQ2tILEtBQUssQ0FBQzVHLElBQUksQ0FBQ3ZCLEVBQUUsQ0FBQyxDQUFNLEVBQzFDOUQsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsZUFBT3lDLEtBQUssQ0FBQzRCLFVBQVUsQ0FBQzZLLGdCQUFnQixDQUFDdkssSUFBSSxDQUFDdkIsRUFBRSxDQUFDLENBQVEsQ0FDcEQsQ0FDRjtVQUVQLENBQUM7VUFBQ2hDLE9BQUEsQ0FBQXVOLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCRixJQUFBclAsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBZ0ksS0FBQSxHQUFBaEksT0FBQTtVQUNBLElBQUE0UCxTQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQWlJLEtBQUEsR0FBQWpJLE9BQUE7VUFDQSxJQUFBNlAsU0FBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUEyRyxXQUFBLEdBQUEzRyxPQUFBO1VBR00sU0FBVThQLGlCQUFpQkEsQ0FBQztZQUFFL0g7VUFBTyxDQUFFO1lBQzVDLE1BQU07Y0FBRXhHLEtBQUs7Y0FBRTJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ3NJLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd2UCxNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTTtjQUFFNkksT0FBTztjQUFFQyxRQUFRO2NBQUU3SjtZQUFjLENBQUUsR0FBRyxJQUFBMEosU0FBQSxDQUFBWCx3QkFBd0IsR0FBRTtZQUV4RSxNQUFNOUcsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixNQUFNOUIsUUFBUSxHQUFHLE1BQU1ILGNBQWMsQ0FBQ2tKLFFBQVEsRUFBRSxJQUFJLENBQUM7Y0FDckRXLFFBQVEsQ0FBQzFKLFFBQVEsQ0FBQztZQUNuQixDQUFDO1lBRUQsTUFBTTJKLElBQUksR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDdkIsTUFBTTlKLGNBQWMsQ0FBQ2tKLFFBQVEsQ0FBQztjQUU5QlUsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxPQUNDaFEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3lDLEtBQUssQ0FBQzRCLFVBQVUsQ0FBQ29MLFdBQVcsQ0FBQ3ZLLEtBQUssQ0FBTSxFQUM3QzVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxLQUFBLENBQUFlLElBQUk7Y0FDSjVJLFNBQVMsRUFBQyxzQkFBc0I7Y0FDaEM2RSxLQUFLLEVBQUU7Z0JBQUVxSyxRQUFRO2dCQUFFQztjQUFXLENBQUU7Y0FDaEN2TSxLQUFLLEVBQUV4QixLQUFLLENBQUNlLEtBQUssQ0FBQ3dDLFVBQVUsQ0FBQ2tILEtBQUs7Y0FDbkNoRCxPQUFPLEVBQUVmLEtBQUEsQ0FBQW1IO1lBQXFCLEVBQzdCLEVBQ0ZyUCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFRTixTQUFTLEVBQUM7WUFBUyxHQUMxQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLFdBQUEsQ0FBQVMsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDdUMsUUFBUTtjQUFDckMsT0FBTyxFQUFFYSxRQUFRO2NBQUUrSCxRQUFRLEVBQUUsQ0FBQ2Q7WUFBUSxHQUN2RW5NLEtBQUssQ0FBQ3NFLE9BQU8sQ0FBQ25CLE1BQU0sQ0FDYixFQUNUdEcsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLFNBQUEsQ0FBQVEsUUFBUTtjQUFDL0ksT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFMEksSUFBSTtjQUFFRSxRQUFRLEVBQUUsQ0FBQ2Q7WUFBUSxHQUM1RG5NLEtBQUssQ0FBQ3NFLE9BQU8sQ0FBQzZJLFFBQVEsQ0FDYixDQUNILENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQXpKLE1BQUEsR0FBQTVHLE9BQUE7VUFDQSxJQUFBRCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFrQyxZQUFBLEdBQUFsQyxPQUFBO1VBQ0EsSUFBQXNRLFdBQUEsR0FBQXRRLE9BQUE7VUFDQSxJQUFBb0MsUUFBQSxHQUFBcEMsT0FBQTtVQUNBLElBQUFnSSxLQUFBLEdBQUFoSSxPQUFBO1VBQ0EsSUFBQTZQLFNBQUEsR0FBQTdQLE9BQUE7VUFDQSxJQUFBdVEsWUFBQSxHQUFBdlEsT0FBQTtVQUVNLFNBQVU2SCxjQUFjQSxDQUFDO1lBQUVDLElBQUk7WUFBRUM7VUFBTyxDQUFFO1lBQy9DLE1BQU07Y0FBRXhHLEtBQUs7Y0FBRTJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBRTNDLE1BQU0sQ0FBQ1QsUUFBUSxFQUFFa0ssV0FBVyxDQUFDLEdBQUd6USxNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTSxDQUFDbkQsSUFBSSxFQUFFZ00sT0FBTyxDQUFDLEdBQUdoUSxNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFOUMsSUFBSSxDQUFDWSxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU0zQixjQUFjLEdBQUcsTUFBQUEsQ0FBT2xCLElBQUksRUFBRW9CLE1BQU0sR0FBRyxLQUFLLEtBQUk7Y0FDckQsTUFBTUMsUUFBUSxHQUFRLE1BQU0vRSxLQUFLLENBQUM0RSxjQUFjLENBQUNsQixJQUFJLEVBQUVvQixNQUFNLENBQUM7Y0FDOURtSyxXQUFXLENBQUNsSyxRQUFRLENBQUM7Y0FDckIsT0FBT0EsUUFBUTtZQUNoQixDQUFDO1lBQ0QsTUFBTTBKLFFBQVEsR0FBRzFKLFFBQVEsSUFBRztjQUMzQixJQUFJLENBQUNBLFFBQVEsRUFBRTtnQkFDZGYsT0FBTyxDQUFDQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBRXBDakUsS0FBSyxDQUFDaUMsWUFBWSxHQUFHOEMsUUFBUTtjQUM3QixNQUFNbUUsT0FBTyxHQUFHLDBCQUEwQmxKLEtBQUssQ0FBQ2UsS0FBSyxDQUFDdUIsRUFBRSxFQUFFO2NBQzFELE1BQU11QyxZQUFZLEdBQUdsRCxLQUFLLENBQUM0QixVQUFVLENBQUNrSCxLQUFLLENBQUMxRixRQUFRLENBQUNyQixJQUFJLENBQUM7Y0FDMUQvQyxZQUFBLENBQUF3QixZQUFZLENBQUMrTSxxQkFBcUIsQ0FBQyxDQUFDLENBQUNySyxZQUFZLEVBQUVFLFFBQVEsQ0FBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Y0FDakV6QixRQUFBLENBQUFrQyxPQUFPLENBQUNvRyxTQUFTLENBQUMsR0FBR0QsT0FBTyxlQUFlbkUsUUFBUSxDQUFDekMsRUFBRSxFQUFFLENBQUM7Y0FDekRrRSxPQUFPLEVBQUU7WUFDVixDQUFDO1lBRUQsTUFBTTJJLGFBQWEsR0FBR0EsQ0FBQSxLQUFLO2NBQzFCWCxPQUFPLENBQUMsTUFBTSxDQUFDO2NBQ2ZoSSxPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsTUFBTTRJLEtBQUssR0FBRztjQUFFQyxJQUFJLEVBQUU1SSxLQUFBLENBQUE4SCxpQkFBaUI7Y0FBRWUsRUFBRSxFQUFFTixZQUFBLENBQUFPO1lBQXdCLENBQUU7WUFFdkUsSUFBSSxDQUFDdlAsS0FBSyxDQUFDZSxLQUFLLENBQUN5TyxLQUFLLEVBQUUsT0FBT2hSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUM2UCxXQUFBLENBQUFVLGVBQWU7Y0FBQ2pKLE9BQU8sRUFBRTJJO1lBQWEsRUFBSTtZQUMxRSxNQUFNTyxPQUFPLEdBQUdOLEtBQUssQ0FBQzVNLElBQUksQ0FBQztZQUMzQixPQUNDaEUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29QLFNBQUEsQ0FBQWIscUJBQXFCLENBQUNrQyxRQUFRO2NBQUM1TixLQUFLLEVBQUU7Z0JBQUV5RSxPQUFPO2dCQUFFekIsUUFBUTtnQkFBRUgsY0FBYztnQkFBRXFLLFdBQVc7Z0JBQUVSLFFBQVE7Z0JBQUVEO2NBQU87WUFBRSxHQUMzR2hRLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNtRyxNQUFBLENBQUF1SyxLQUFLO2NBQUNySixJQUFJO2NBQUNDLE9BQU8sRUFBRTJJO1lBQWEsR0FDakMzUSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDd1EsT0FBTyxPQUFHLENBQ0osQ0FDd0I7VUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbERBLElBQUFsUixNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBa0ksS0FBQSxHQUFBbEksT0FBQTtVQUNBLElBQUFvUixHQUFBLEdBQUFwUixPQUFBO1VBQ0EsSUFBQTJHLFdBQUEsR0FBQTNHLE9BQUE7VUFFQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUE2UCxTQUFBLEdBQUE3UCxPQUFBO1VBRU0sU0FBVThRLHdCQUF3QkEsQ0FBQTtZQUN2QyxNQUFNO2NBQUU1TjtZQUFLLENBQUUsR0FBRyxJQUFBMkQsUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUVULFFBQVE7Y0FBRTBKO1lBQVEsQ0FBRSxHQUFHLElBQUFILFNBQUEsQ0FBQVgsd0JBQXdCLEdBQUU7WUFDekQsTUFBTSxDQUFDaEosUUFBUSxFQUFFbUQsV0FBVyxDQUFDLEdBQUd0SixNQUFBLENBQUFTLE9BQUssQ0FBQzBHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDbUssS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBR3ZSLE1BQUEsQ0FBQVMsT0FBSyxDQUFDMEcsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1QyxNQUFNcUssTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRWxILEtBQUssSUFBRztnQkFDakJnSCxRQUFRLENBQUNoSCxLQUFLLENBQUNtSCxhQUFhLENBQUNuTyxLQUFLLENBQUM7Y0FDcEMsQ0FBQztjQUNEaUUsT0FBTyxFQUFFLE1BQU0rQyxLQUFLLElBQUc7Z0JBQ3RCLElBQUk7a0JBQ0hqQixXQUFXLENBQUMsSUFBSSxDQUFDO2tCQUVqQixNQUFNL0MsUUFBUSxDQUFDK0osUUFBUSxDQUFDZ0IsS0FBSyxDQUFDO2tCQUM5QnJCLFFBQVEsQ0FBQzFKLFFBQVEsQ0FBQztpQkFDbEIsQ0FBQyxPQUFPaEIsQ0FBQyxFQUFFLEMsQ0FDWCxTQUFTO2tCQUNUb00sVUFBVSxDQUFDLE1BQUs7b0JBQ2ZySSxXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDOztjQUVWO2FBQ0E7WUFFRCxPQUNDdEosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQVYsTUFBQSxDQUFBUyxPQUFBLENBQUFtSSxRQUFBLFFBQ0M1SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUgsS0FBQSxDQUFBVSxJQUFJLFFBQ0o3SSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS3lDLEtBQUssQ0FBQ3lPLE1BQU0sQ0FBQ2hNLEtBQUssQ0FBTSxFQUM3QjVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLFlBQUl5QyxLQUFLLENBQUN5TyxNQUFNLENBQUM1RCxXQUFXLENBQUssRUFDakNoTyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxZQUFJeUMsS0FBSyxDQUFDeU8sTUFBTSxDQUFDQyxZQUFZLENBQUssQ0FDMUIsRUFDVDdSLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUN5SCxLQUFBLENBQUEySixRQUFRO2NBQ1JuSSxLQUFLLEVBQUV4RyxLQUFLLENBQUN5TyxNQUFNLENBQUNHLFFBQVEsQ0FBQ3BJLEtBQUs7Y0FDbENtRSxJQUFJLEVBQUMsY0FBYztjQUNuQnZLLEtBQUssRUFBRStOLEtBQUs7Y0FDWkcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJPLFdBQVcsRUFBRTdPLEtBQUssQ0FBQ3lPLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFDUGhTLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFOLFNBQVMsRUFBQztZQUFTLEdBQzFCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0csV0FBQSxDQUFBUyxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRWdLLE1BQU0sQ0FBQ2hLO1lBQU8sR0FDL0NyRSxLQUFLLENBQUNzRSxPQUFPLENBQUM2SSxRQUFRLENBQ2YsQ0FDRCxFQUNUdFEsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJRLEdBQUEsQ0FBQVksZ0JBQWdCO2NBQUM5TCxRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUN0QztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBVSxNQUFBLEdBQUE1RyxPQUFBO1VBQ0EsSUFBQUQsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFFTSxTQUFVZ1IsZUFBZUEsQ0FBQztZQUFFako7VUFBTyxDQUFFO1lBQzFDLE1BQU07Y0FBRXhHLEtBQUs7Y0FBRTJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBRTNDLE9BQ0NoSCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUcsTUFBQSxDQUFBcUwsVUFBVTtjQUFDbkssSUFBSTtjQUFDQyxPQUFPLEVBQUVBO1lBQU8sR0FDaENoSSxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxhQUFLeUMsS0FBSyxDQUFDNEIsVUFBVSxDQUFDb0wsV0FBVyxDQUFDZ0MsZUFBZSxDQUFNLEVBQ3ZEblMsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsWUFBSXlDLEtBQUssQ0FBQzRCLFVBQVUsQ0FBQ29MLFdBQVcsQ0FBQ2lDLFVBQVUsQ0FBSyxDQUMzQyxDQUNNO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQUMsS0FBQSxHQUFBcFMsT0FBQTtVQUVBLElBQUFxUyxTQUFBLEdBQUFyUyxPQUFBO1VBRU87VUFBVSxTQUNSc1MsWUFBWUEsQ0FBQztZQUFFcFAsS0FBSztZQUFFM0I7VUFBSyxDQUFFO1lBQ3JDLE9BQU82USxLQUFBLENBQUEzUixhQUFBLENBQUM0UixTQUFBLENBQUFFLGtCQUFrQjtjQUFDaFIsS0FBSyxFQUFFQSxLQUFLO2NBQUUrRSxRQUFRLEVBQUUvRSxLQUFLLENBQUNpQztZQUFZLEVBQUk7VUFDMUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF6RCxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBK0osTUFBQSxHQUFBL0osT0FBQTtVQUNBLElBQUEyRyxXQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQWdLLE9BQUEsR0FBQWhLLE9BQUE7VUFDQSxJQUFBa0MsWUFBQSxHQUFBbEMsT0FBQTtVQUNPO1VBQVUsU0FBVW9RLFFBQVFBLENBQUM7WUFBRWhRLFFBQVE7WUFBRW1ILE9BQU87WUFBRSxHQUFHaUw7VUFBSyxDQUFFO1lBQ2xFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNdlEsWUFBQSxDQUFBd0IsWUFBWSxDQUFDZ1AsYUFBYSxDQUFDbkwsT0FBTyxDQUFDO1lBQzdELE9BQ0N4SCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0csV0FBQSxDQUFBUyxNQUFNO2NBQUEsR0FBS29MLEtBQUs7Y0FBRWxMLElBQUksRUFBRXlDLE1BQUEsQ0FBQWdDLEtBQUssQ0FBQzRHLE9BQU87Y0FBRXBMLE9BQU8sRUFBRWtMO1lBQVcsR0FDMURyUyxRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVXdTLFlBQVlBLENBQUM7WUFBRXhTLFFBQVE7WUFBRW1ILE9BQU87WUFBRSxHQUFHaUw7VUFBSyxDQUFFO1lBQ3RFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNdlEsWUFBQSxDQUFBd0IsWUFBWSxDQUFDZ1AsYUFBYSxDQUFDbkwsT0FBTyxDQUFDO1lBQzdELE9BQ0N4SCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUosT0FBQSxDQUFBa0MsVUFBVTtjQUFBLEdBQUtzRyxLQUFLO2NBQUVsTCxJQUFJLEVBQUV5QyxNQUFBLENBQUFnQyxLQUFLLENBQUM0RyxPQUFPO2NBQUVwTCxPQUFPLEVBQUVrTDtZQUFXLEdBQzlEclMsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckJBLElBQUFMLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2UyxNQUFBLEdBQUE3UyxPQUFBO1VBRU0sU0FBVThTLGFBQWFBLENBQUM7WUFBRTVQLEtBQUs7WUFBRXNDO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPekYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ29TLE1BQUEsQ0FBQUUsS0FBSztjQUFDMUwsT0FBTyxFQUFDO1lBQU8sR0FBRW5FLEtBQUssQ0FBQ3NDLEtBQUssQ0FBQyxDQUFTO1VBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUF6RixNQUFBLEdBQUFDLE9BQUE7VUFXTyxNQUFNZ1QsYUFBYSxHQUFBblIsT0FBQSxDQUFBbVIsYUFBQSxHQUFHalQsTUFBQSxDQUFBUyxPQUFLLENBQUN5TyxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNbEksZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWhILE1BQUEsQ0FBQVMsT0FBSyxDQUFDMk8sVUFBVSxDQUFDNkQsYUFBYSxDQUFDO1VBQUNuUixPQUFBLENBQUFrRixnQkFBQSxHQUFBQSxnQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNadEUsSUFBQXFMLEtBQUEsR0FBQXBTLE9BQUE7VUFFQSxJQUFBaVQsT0FBQSxHQUFBalQsT0FBQTtVQUVBLElBQUFrVCxNQUFBLEdBQUFsVCxPQUFBO1VBQ0EsSUFBQXFTLFNBQUEsR0FBQXJTLE9BQUE7VUFDQSxJQUFBbVQsUUFBQSxHQUFBblQsT0FBQTtVQUVPO1VBQVUsU0FDUjRCLElBQUlBLENBQUM0USxLQUFLO1lBQ2xCLE1BQU07Y0FBRWpSO1lBQUssQ0FBRSxHQUE0QmlSLEtBQUs7WUFDaEQsTUFBTTtjQUFFdFA7WUFBSyxDQUFFLEdBQUczQixLQUFLO1lBQ3ZCLE1BQU0sQ0FBQ2dDLEtBQUssRUFBRTZQLFFBQVEsQ0FBQyxHQUFHaEIsS0FBSyxDQUFDbEwsUUFBUSxDQUFDM0YsS0FBSyxDQUFDZ0MsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ1EsSUFBSSxFQUFFZ00sT0FBTyxDQUFDLEdBQUdxQyxLQUFLLENBQUNsTCxRQUFRLENBQUMzRixLQUFLLENBQUN3QyxJQUFJLENBQUM7WUFDbEQsTUFBTXNQLFVBQVUsR0FBR0EsQ0FBQSxLQUFLO2NBQ3ZCLElBQUk5UixLQUFLLENBQUNnQyxLQUFLLEtBQUtBLEtBQUssRUFBRTZQLFFBQVEsQ0FBQzdSLEtBQUssQ0FBQ2dDLEtBQUssQ0FBQztjQUNoRHdNLE9BQU8sQ0FBQ3hPLEtBQUssQ0FBQ3dDLElBQUksQ0FBQztZQUNwQixDQUFDO1lBRUQsSUFBQW1QLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUMvUixLQUFLLENBQUMsRUFBRThSLFVBQVUsQ0FBQztZQUM5QixJQUFBSCxNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDL1IsS0FBSyxDQUFDLEVBQUUsTUFBTXdPLE9BQU8sQ0FBQ3hPLEtBQUssQ0FBQ3dDLElBQUksQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1lBRWxFLElBQUksQ0FBQ3hDLEtBQUssQ0FBQ2dDLEtBQUssRUFBRSxPQUFPNk8sS0FBQSxDQUFBM1IsYUFBQSxDQUFDMFMsUUFBQSxDQUFBSSxPQUFPLE9BQUc7WUFFcEMsSUFBSXhQLElBQUksS0FBSyxVQUFVLEVBQUU7Y0FDeEIsT0FBT3FPLEtBQUEsQ0FBQTNSLGFBQUEsQ0FBQzRSLFNBQUEsQ0FBQUMsWUFBWTtnQkFBQSxHQUFLRSxLQUFLO2dCQUFFdFAsS0FBSyxFQUFFQTtjQUFLLEVBQUk7O1lBR2pELE9BQU9rUCxLQUFBLENBQUEzUixhQUFBLENBQUN3UyxPQUFBLENBQUFPLFVBQVU7Y0FBQSxHQUFLaEI7WUFBSyxFQUFJO1VBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBelMsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBb1IsR0FBQSxHQUFBcFIsT0FBQTtVQUVNLFNBQVV5VCxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0x2USxLQUFLLEVBQUU7Z0JBQUVFLE1BQU0sRUFBRXNRO2NBQVcsQ0FBRTtjQUM5Qm5TO1lBQUssQ0FDTCxHQUFHLElBQUFzRixRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBRXRCLE1BQU00TSxPQUFPLEdBQUdwUyxLQUFLLENBQUNlLEtBQUssQ0FBQ3lMLFdBQVcsSUFBSTJGLFdBQVcsQ0FBQzNGLFdBQVc7WUFDbEUsTUFBTTZGLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUVDO1lBQU0sQ0FBRSxLQUFJO2NBQ25DdFMsS0FBSyxDQUFDMEUsSUFBSSxDQUFDO2dCQUFFLENBQUM0TixNQUFNLENBQUNoRyxJQUFJLEdBQUdnRyxNQUFNLENBQUN2UTtjQUFLLENBQUUsQ0FBQztZQUM1QyxDQUFDO1lBRUQsT0FDQ3ZELE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsYUFBS2lULFdBQVcsQ0FBQzNGLFdBQVcsQ0FBTSxFQUNsQ2hPLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxHQUFBLENBQUEwQyxlQUFlO2NBQUNqRyxJQUFJLEVBQUMsYUFBYTtjQUFDa0csTUFBTSxFQUFFSCxNQUFNO2NBQUVJLFFBQVEsRUFBQztZQUFHLEdBQzlETCxPQUFPLENBQ1MsQ0FDYjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCQSxJQUFBdkMsR0FBQSxHQUFBcFIsT0FBQTtVQUNBLElBQUFELE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWlVLFFBQUEsR0FBQWpVLE9BQUE7VUFDQSxJQUFBa1UsV0FBQSxHQUFBbFUsT0FBQTtVQUNBLElBQUFrVCxNQUFBLEdBQUFsVCxPQUFBO1VBQ0EsSUFBQWtDLFlBQUEsR0FBQWxDLE9BQUE7VUFFTztVQUFVLFNBQVVtVSxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FDTGpSLEtBQUs7Y0FDTDNCLEtBQUs7Y0FDTDJCLEtBQUssRUFBRTtnQkFBRUUsTUFBTSxFQUFFc1E7Y0FBVyxDQUFFO2NBQzlCaEI7WUFBYSxDQUNiLEdBQUcsSUFBQTdMLFFBQUEsQ0FBQUUsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTXBCLEtBQUssR0FBR3BFLEtBQUssQ0FBQ2UsS0FBSyxDQUFDcUQsS0FBSyxJQUFJK04sV0FBVyxDQUFDL04sS0FBSztZQUNwRCxNQUFNeU8sVUFBVSxHQUFHL0MsS0FBSyxJQUFJcUIsYUFBYSxDQUFDckIsS0FBSyxJQUFJOVAsS0FBSyxDQUFDZSxLQUFLLENBQUMrUixlQUFlLENBQUNoRCxLQUFLLENBQUMsRUFBRUEsS0FBSyxDQUFDO1lBQzdGLE1BQU0wQyxNQUFNLEdBQUd6SixLQUFLLElBQUc7Y0FDdEJwSSxZQUFBLENBQUF3QixZQUFZLENBQUM0USxjQUFjLENBQUMsQ0FBQyxDQUFDO2NBQzlCcFMsWUFBQSxDQUFBd0IsWUFBWSxDQUFDNlEsYUFBYSxDQUFDLENBQUNqSyxLQUFLLENBQUN1SixNQUFNLENBQUN2USxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Y0FDcEQvQixLQUFLLENBQUMwRSxJQUFJLENBQUM7Z0JBQUVOLEtBQUssRUFBRTJFLEtBQUssQ0FBQ3VKLE1BQU0sQ0FBQ3ZRO2NBQUssQ0FBRSxDQUFDO1lBQzFDLENBQUM7WUFDRCxNQUFNLENBQUNrUixPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHMVUsTUFBQSxDQUFBUyxPQUFLLENBQUMwRyxRQUFRLENBQUMzRixLQUFLLENBQUNlLEtBQUssQ0FBQ2tTLE9BQU8sQ0FBQztZQUNqRSxJQUFBdEIsTUFBQSxDQUFBSSxTQUFTLEVBQUMsQ0FBQy9SLEtBQUssQ0FBQ2UsS0FBSyxDQUFDLEVBQUUsTUFBTW1TLFVBQVUsQ0FBQ2xULEtBQUssQ0FBQ2UsS0FBSyxDQUFDa1MsT0FBTyxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFFbEYsT0FDQ3pVLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxHQUFBLENBQUFsUixpQkFBaUIsUUFDakJILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVNOLFNBQVMsRUFBQztZQUFpRCxHQUNuRUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dULFFBQUEsQ0FBQVMsYUFBYSxPQUFHLENBQ1IsRUFDVjNVLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFOLFNBQVMsRUFBQztZQUE0RCxHQUM3RUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQTZDLEdBQy9ESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeVQsV0FBQSxDQUFBUyxVQUFVO2NBQ1ZoUCxLQUFLLEVBQUV6QyxLQUFLLENBQUNzUixPQUFPLENBQUM3TyxLQUFLO2NBQzFCb0ksV0FBVyxFQUFFN0ssS0FBSyxDQUFDc1IsT0FBTyxDQUFDekcsV0FBVztjQUN0QzZHLFdBQVcsRUFBRXJULEtBQUssQ0FBQ2UsS0FBSyxDQUFDdVMsa0JBQWtCO2NBQzNDTCxPQUFPLEVBQUVBLE9BQU87Y0FDaEJKLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUVGclUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsY0FDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQzJRLEdBQUEsQ0FBQTBDLGVBQWU7Y0FBQ2pHLElBQUksRUFBQyxPQUFPO2NBQUN4TixFQUFFLEVBQUMsSUFBSTtjQUFDMFQsTUFBTSxFQUFFQTtZQUFNLEdBQ2xEcE8sS0FBSyxDQUNXLEVBQ2xCNUYsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWUsR0FDN0JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGlCQUFTeUMsS0FBSyxDQUFDRSxNQUFNLENBQUMwUixLQUFLLEUsS0FBWSxFQUN0Q3ZULEtBQUssQ0FBQ2UsS0FBSyxDQUFDd1MsS0FBSyxFQUFFakgsSUFBSSxDQUNuQixDQUNELENBQ0csQ0FDRixDQUNVO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JEQSxJQUFBdUUsS0FBQSxHQUFBcFMsT0FBQTtVQUNBLElBQUFrVCxNQUFBLEdBQUFsVCxPQUFBO1VBQ0EsSUFBQW9SLEdBQUEsR0FBQXBSLE9BQUE7VUFDQSxJQUFBa0MsWUFBQSxHQUFBbEMsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQW9NLE9BQUEsR0FBQXBNLE9BQUE7VUFFQSxJQUFBK1UsV0FBQSxHQUFBL1UsT0FBQTtVQUVPO1VBQVUsU0FDUndULFVBQVVBLENBQUNoQixLQUFLO1lBQ3hCLE1BQU07Y0FBRWpSO1lBQUssQ0FBRSxHQUE0QmlSLEtBQUs7WUFFaEQsTUFBTSxDQUFDdE0sUUFBUSxFQUFFbUQsV0FBVyxDQUFDLEdBQUcrSSxLQUFLLENBQUNsTCxRQUFRLENBQUMzRixLQUFLLENBQUMyRSxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDOE8sV0FBVyxDQUFDLEdBQUc1QyxLQUFLLENBQUNsTCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQ3BDLFVBQVUsRUFBRW1RLGFBQWEsQ0FBQyxHQUFHN0MsS0FBSyxDQUFDbEwsUUFBUSxDQUFDM0YsS0FBSyxDQUFDZSxLQUFLLEVBQUV3QyxVQUFVLEVBQUUvQixLQUFLLENBQUM7WUFDbEYsTUFBTSxHQUFHbVMsa0JBQWtCLENBQUMsR0FBRzlDLEtBQUssQ0FBQ2xMLFFBQVEsRUFBRTtZQUMvQyxNQUFNaU8scUJBQXFCLEdBQUdBLENBQUEsS0FBTUYsYUFBYSxDQUFDMVQsS0FBSyxDQUFDZSxLQUFLLEVBQUV3QyxVQUFVLEVBQUUvQixLQUFLLENBQUM7WUFDakYsTUFBTTtjQUFFRztZQUFLLENBQUUsR0FBRzNCLEtBQUs7WUFFdkIsSUFBQTJSLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUMvUixLQUFLLENBQUNlLEtBQUssQ0FBQyxFQUFFLE1BQU0rRyxXQUFXLENBQUM5SCxLQUFLLEVBQUVlLEtBQUssRUFBRTRELFFBQVEsQ0FBQyxDQUFDO1lBQ25FLElBQUFnTixNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDL1IsS0FBSyxDQUFDLEVBQUUsTUFBTTBULGFBQWEsQ0FBQzFULEtBQUssQ0FBQ2UsS0FBSyxFQUFFd0MsVUFBVSxFQUFFL0IsS0FBSyxDQUFDLENBQUM7WUFDdkUsSUFBQW1RLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUMvUixLQUFLLENBQUNlLEtBQUssQ0FBQyxFQUFFNlMscUJBQXFCLEVBQUUsc0JBQXNCLENBQUM7WUFDdkUsSUFBQWpDLE1BQUEsQ0FBQUksU0FBUyxFQUFDLENBQUMvUixLQUFLLENBQUMsRUFBRSxNQUFNMlQsa0JBQWtCLENBQUMzVCxLQUFLLENBQUNpQyxZQUFZLENBQUMsRUFBRSxtQkFBbUIsQ0FBQztZQUVyRixNQUFNNEUsUUFBUSxHQUFHLE1BQU1rQyxLQUFLLElBQUc7Y0FDOUJBLEtBQUssQ0FBQ2UsY0FBYyxFQUFFO2NBQ3RCaEMsV0FBVyxDQUFDLElBQUksQ0FBQztjQUNqQixNQUFNOUgsS0FBSyxDQUFDMEUsSUFBSSxFQUFFO2NBQ2xCbVAsVUFBVSxDQUFDMUQsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCckksV0FBVyxDQUFDLEtBQUssQ0FBQztjQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQztZQUVELE1BQU0vRixLQUFLLEdBQUc7Y0FDYi9CLEtBQUs7Y0FDTDJFLFFBQVE7Y0FDUmhELEtBQUs7Y0FDTDhSLFdBQVc7Y0FDWGxRLFVBQVU7Y0FDVnNELFFBQVE7Y0FDUnNLLGFBQWEsRUFBRXhRLFlBQUEsQ0FBQXdCLFlBQVksQ0FBQ2dQLGFBQWE7Y0FDekMyQyxlQUFlLEVBQUU5VCxLQUFLLENBQUNlLEtBQUssRUFBRXdDLFVBQVUsRUFBRTBEO2FBQzFDO1lBQ0QsTUFBTWlILEdBQUcsR0FBRyxJQUFJdkosUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFFL0MsT0FDQ2tNLEtBQUEsQ0FBQTNSLGFBQUEsQ0FBQ29HLFFBQUEsQ0FBQW1NLGFBQWEsQ0FBQzlCLFFBQVE7Y0FBQzVOLEtBQUssRUFBRUE7WUFBSyxHQUNuQzhPLEtBQUEsQ0FBQTNSLGFBQUEsQ0FBQzJRLEdBQUEsQ0FBQWtFLGFBQWE7Y0FBQ25WLFNBQVMsRUFBRXNQLEdBQUc7Y0FBRXZKLFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUMsQ0FBQzNFLEtBQUssQ0FBQ2UsS0FBSyxFQUFFd0MsVUFBVSxDQUFDMEQ7WUFBTSxHQUNwRjRKLEtBQUEsQ0FBQTNSLGFBQUEsQ0FBQzJMLE9BQUEsQ0FBQStILE1BQU0sT0FBRyxFQUNWL0IsS0FBQSxDQUFBM1IsYUFBQSxDQUFDc1UsV0FBQSxDQUFBUSxnQkFBZ0IsT0FBRyxDQUNMLENBQ1E7VUFFM0I7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdERBLElBQUF4VixNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBd1YsV0FBQSxHQUFBeFYsT0FBQTtVQUNBLElBQUE2RyxRQUFBLEdBQUE3RyxPQUFBO1VBQ0EsSUFBQWtULE1BQUEsR0FBQWxULE9BQUE7VUFDQSxJQUFBeVYsWUFBQSxHQUFBelYsT0FBQTtVQUVNLFNBQVV1VixnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMaFUsS0FBSztjQUNMMkIsS0FBSyxFQUFFO2dCQUFFRSxNQUFNLEVBQUVzUTtjQUFXO1lBQUUsQ0FDOUIsR0FBRyxJQUFBN00sUUFBQSxDQUFBRSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNcEIsS0FBSyxHQUFHcEUsS0FBSyxDQUFDZSxLQUFLLENBQUNxRCxLQUFLLElBQUkrTixXQUFXLENBQUMvTixLQUFLO1lBRXBELElBQUF1TixNQUFBLENBQUFJLFNBQVMsRUFBQyxDQUFDL1IsS0FBSyxDQUFDZSxLQUFLLENBQUMsRUFBRSxNQUFLLENBQUUsQ0FBQyxFQUFFLG9CQUFvQixDQUFDO1lBRXhELE9BQ0N2QyxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBMEIsR0FDeENKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGtCQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBaUIsR0FDL0JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGFBQUtpVCxXQUFXLENBQUM1RixTQUFTLEUsSUFBTyxFQUNqQy9OLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLFksS0FBS2MsS0FBSyxDQUFDZSxLQUFLLENBQUN3TCxTQUFTLENBQUssQ0FDMUIsRUFDTi9OLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNnVixZQUFBLENBQUFoQyxpQkFBaUIsT0FBRyxDQUNaLEVBQ1YxVCxNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK1UsV0FBQSxDQUFBck4sZ0JBQWdCLE9BQUcsQ0FDZjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBcEksTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQTZHLFFBQUEsR0FBQTdHLE9BQUE7VUFDQSxJQUFBMkcsV0FBQSxHQUFBM0csT0FBQTtVQUNBLElBQUFxTSxNQUFBLEdBQUFyTSxPQUFBO1VBQ0EsSUFBQW9DLFFBQUEsR0FBQXBDLE9BQUE7VUFFQSxJQUFBa0MsWUFBQSxHQUFBbEMsT0FBQTtVQUVNLFNBQVUwVSxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FBRW5ULEtBQUs7Y0FBRTJCO1lBQUssQ0FBRSxHQUFHLElBQUEyRCxRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBQzNDLE1BQU05QyxLQUFLLEdBQUc7Y0FBRWtNLFFBQVEsRUFBRTVPLEtBQUssQ0FBQ2UsS0FBSyxDQUFDMkMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDMUQsS0FBSyxDQUFDZSxLQUFLLENBQUNvVDtZQUFTLENBQUU7WUFFbEYsTUFBTXROLFFBQVEsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDM0IsSUFBSTtnQkFDSCxNQUFNM0IsUUFBUSxHQUFHLE1BQU1sRixLQUFLLENBQUNpRixPQUFPLEVBQUU7Z0JBRXRDLElBQUksQ0FBQ0MsUUFBUSxDQUFDa1AsTUFBTSxFQUFFO2tCQUNyQnpULFlBQUEsQ0FBQXdCLFlBQVksQ0FBQ2tTLFdBQVcsQ0FBQyxPQUFPLEVBQUUxUyxLQUFLLENBQUMyUyxNQUFNLENBQUNDLGFBQWEsQ0FBQztrQkFDN0Q7O2dCQUVEekosTUFBQSxDQUFBYSxLQUFLLENBQUM2SSxPQUFPLENBQUM3UyxLQUFLLENBQUNnSyxLQUFLLENBQUM4SSxlQUFlLENBQUM7Z0JBQzFDNVQsUUFBQSxDQUFBa0MsT0FBTyxDQUFDb0csU0FBUyxDQUFDLDZCQUE2QixDQUFDO2VBQ2hELENBQUMsT0FBT3BGLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDMFEsR0FBRyxDQUFDLE9BQU8sRUFBRTNRLENBQUMsQ0FBQztnQkFDdkIrRyxNQUFBLENBQUFhLEtBQUssQ0FBQzFILEtBQUssQ0FBQ3RDLEtBQUssQ0FBQ2dLLEtBQUssQ0FBQ2dKLHFCQUFxQixDQUFDOztZQUVoRCxDQUFDO1lBQ0QsT0FDQ25XLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUEyQixHQUN6Q0osTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLFdBQUEsQ0FBQVMsTUFBTTtjQUFDbEIsUUFBUSxFQUFFM0UsS0FBSyxDQUFDMkUsUUFBUTtjQUFFcUIsT0FBTyxFQUFFYSxRQUFRO2NBQUVmLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBS3BEO1lBQUssR0FDOUVmLEtBQUssQ0FBQ3NFLE9BQU8sQ0FBQ2hCLE9BQU8sQ0FDZCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUF6RyxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBNkcsUUFBQSxHQUFBN0csT0FBQTtVQUNBLElBQUFvUixHQUFBLEdBQUFwUixPQUFBO1VBRU0sU0FBVW1XLFdBQVdBLENBQUMsRUFBRTtZQUM3QixNQUFNO2NBQ0xqVCxLQUFLLEVBQUU7Z0JBQUVFLE1BQU0sRUFBRXNRO2NBQVcsQ0FBRTtjQUM5Qm5TO1lBQUssQ0FDTCxHQUFHLElBQUFzRixRQUFBLENBQUFFLGdCQUFnQixHQUFFO1lBRXRCLE1BQU00TSxPQUFPLEdBQUdwUyxLQUFLLENBQUNlLEtBQUssQ0FBQ3FELEtBQUssSUFBSStOLFdBQVcsQ0FBQy9OLEtBQUs7WUFDdEQsT0FDQzVGLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFpQixHQUMvQkosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsaUJBQVNpVCxXQUFXLENBQUMvTixLQUFLLENBQVUsRUFDcEM1RixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsR0FBQSxDQUFBMEMsZUFBZTtjQUNmakcsSUFBSSxFQUFDLE9BQU87Y0FDWmtHLE1BQU0sRUFBRSxNQUFNMUYsSUFBSSxJQUFHO2dCQUNwQixNQUFNOU0sS0FBSyxDQUFDMEUsSUFBSSxDQUFDb0ksSUFBSSxDQUFDO2NBQ3ZCLENBQUM7Y0FDRDJGLFFBQVEsRUFBQztZQUFHLEdBRVhMLE9BQU8sQ0FDUyxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUE1VCxNQUFBLEdBQUFDLE9BQUE7VUFFQSxJQUFBMkcsV0FBQSxHQUFBM0csT0FBQTtVQUNBLElBQUFvUixHQUFBLEdBQUFwUixPQUFBO1VBR00sU0FBVXVULE9BQU9BLENBQUE7WUFDdEIsT0FDQ3hULE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxHQUFBLENBQUFsUixpQkFBaUIsUUFDakJILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMyUSxHQUFBLENBQUFrRSxhQUFhLFFBQ2J2VixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxrQkFDQ1YsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQW1ELEdBQ2pFSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDa0csV0FBQSxDQUFBUyxNQUFNO2NBQUNDLE9BQU8sRUFBQztZQUFTLEVBQVUsQ0FDOUIsRUFDTnRILE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQVFOLFNBQVMsRUFBQztZQUE0RCxHQUM3RUosTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBU04sU0FBUyxFQUFDO1lBQTZDLEdBQy9ESixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBZSxFQUFPLEVBQ3JDSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxjQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsR0FBQSxDQUFBMEMsZUFBZTtjQUFDakcsSUFBSSxFQUFDLE9BQU87Y0FBQ3hOLEVBQUUsRUFBQztZQUFJLEdBQ3BDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsR0FBQSxDQUFBZ0YsWUFBWTtjQUFDQyxNQUFNLEVBQUMsTUFBTTtjQUFDcFYsS0FBSyxFQUFDO1lBQU8sRUFBRyxDQUMzQixFQUVsQmxCLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFlLEdBQzdCSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMlEsR0FBQSxDQUFBZ0YsWUFBWTtjQUFDQyxNQUFNLEVBQUMsS0FBSztjQUFDcFYsS0FBSyxFQUFDO1lBQU0sRUFBRyxDQUNyQyxDQUNELENBQ0csQ0FDRixDQUNBLENBQ0ssQ0FDRztVQUV0QiIsImlnbm9yZUxpc3QiOltdfQ==