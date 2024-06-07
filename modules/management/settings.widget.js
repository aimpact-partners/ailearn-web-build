System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.46.dev-13/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.46.dev-13/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.46.dev-13/components/ui", "@aimpact/ailearn-app@0.0.46.dev-13/config", "@aimpact/ailearn-app@0.0.46.dev-13/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.46.dev-13/components/cover-image.code", "pragmate-ui@0.1.1/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0046Dev13MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp0046Dev13MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev13ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp0046Dev13ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_19 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_20 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_21 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0046Dev13ComponentsUi) {
      dependency_22 = _aimpactAilearnApp0046Dev13ComponentsUi;
    }, function (_aimpactAilearnApp0046Dev13Config) {
      dependency_23 = _aimpactAilearnApp0046Dev13Config;
    }, function (_aimpactAilearnApp0046Dev13ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0046Dev13ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_25 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0046Dev13ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0046Dev13ComponentsCoverImageCode;
    }, function (_pragmateUi011Image) {
      dependency_28 = _pragmateUi011Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-13"], ["@aimpact/ailearn-app", "0.0.46.dev-13"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-13/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-13/modules/management/settings.widget');
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
        hash: 3685248804,
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
              console.log(9, response);
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
        hash: 1562269950,
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
            const content = store.model.description;
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
        hash: 4052315777,
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
        hash: 2125922520,
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
        hash: 1192540449,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInRpdGxlIiwibWFuYWdlbWVudCIsInB1c2giLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImNyZWF0ZUFjdGl2aXR5IiwiYWN0aXZpdHlUeXBlIiwibWFudWFsIiwiYWN0aXZpdHkiLCJhZGQiLCJwdWJsaXNoIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsImxvZyIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJjb250cm9scyIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJiYXNlVXJpIiwicHVzaFN0YXRlIiwiaVJlZiIsInVzZVJlZiIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsImRyYWdMaXN0ZW5lciIsImRyYWdDb250cm9scyIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJfdWkiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX21vZHVsZSIsIl9ob29rcyIsIl9wcmVsb2FkIiwic2V0UmVhZHkiLCJ1cGRhdGVWaWV3IiwidXNlQmluZGVyIiwiUHJlbG9hZCIsIk1vZHVsZVZpZXciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwiY29udGVudCIsIm9uRWRpdCIsInRhcmdldCIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJ0cmltQnJlYWRjcnVtYiIsImFkZEJyZWFkY3J1bWIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvd25lciIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1NLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBMEI7WUFDN0YsTUFBTUMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsT0FDQ04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gsU0FBUztjQUNUSSxNQUFNO2NBQ05QLFNBQVMsRUFBRUEsU0FBUztjQUNwQlEsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRTs7ZUFFWDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xGLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFLEdBQUc7a0JBQ2JFLEtBQUssRUFBRTtpQkFDUDtnQkFDREwsT0FBTyxFQUFFOztZQUNULEdBRUFSLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pDQSxJQUFBYyxLQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBb0Is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