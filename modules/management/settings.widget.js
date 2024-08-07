System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.3-test.02/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.3-test.02/components/icons", "pragmate-ui@1.0.0-beta.1/collapsible", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/chips", "@aimpact/ailearn-app@0.1.3-test.02/components/ui", "@aimpact/ailearn-app@0.1.3-test.02/config", "@aimpact/ailearn-app@0.1.3-test.02/modules/management/activity.code", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.3-test.02/components/cover-image.code", "pragmate-ui@1.0.0-beta.1/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp013Test02MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp013Test02MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_12 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1List) {
      dependency_14 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Form) {
      dependency_15 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_16 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_17 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp013Test02ComponentsIcons) {
      dependency_18 = _aimpactAilearnApp013Test02ComponentsIcons;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_19 = _pragmateUi100Beta1Collapsible;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_20 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_21 = _pragmateUi100Beta1Chips;
    }, function (_aimpactAilearnApp013Test02ComponentsUi) {
      dependency_22 = _aimpactAilearnApp013Test02ComponentsUi;
    }, function (_aimpactAilearnApp013Test02Config) {
      dependency_23 = _aimpactAilearnApp013Test02Config;
    }, function (_aimpactAilearnApp013Test02ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp013Test02ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_25 = _pragmateUi100Beta1Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp013Test02ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp013Test02ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta1Image) {
      dependency_28 = _pragmateUi100Beta1Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.02"], ["@aimpact/ailearn-app", "0.1.3-test.02"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.02/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/modal', dependency_16], ['pragmate-ui/icons', dependency_17], ['@aimpact/ailearn-app/components/icons', dependency_18], ['pragmate-ui/collapsible', dependency_19], ['pragmate-ui/toast', dependency_20], ['pragmate-ui/chips', dependency_21], ['@aimpact/ailearn-app/components/ui', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.02/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.02/modules/management/settings.widget');
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
        hash: 2258849669,
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
              items: store.model.activities.availableTypes,
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
        hash: 800701692,
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
                _routing.routing.replaceState({}, null, `/modules/list?tab=published`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInRpdGxlIiwibWFuYWdlbWVudCIsInB1c2giLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImNyZWF0ZUFjdGl2aXR5IiwiYWN0aXZpdHlUeXBlIiwibWFudWFsIiwiYWN0aXZpdHkiLCJhZGQiLCJwdWJsaXNoIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJjb250cm9scyIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJiYXNlVXJpIiwicHVzaFN0YXRlIiwiaVJlZiIsInVzZVJlZiIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsImRyYWdMaXN0ZW5lciIsImRyYWdDb250cm9scyIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIl91aSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwiX3ByZWxvYWQiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiTW9kdWxlVmlldyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJjb250ZW50Iiwib25FZGl0IiwidGFyZ2V0IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiUHVibGlzaE1vZHVsZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIm93bmVyIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIk1vZHVsZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFjLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsTUFB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