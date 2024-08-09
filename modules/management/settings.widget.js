System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.3-test.07/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.1/empty", "pragmate-ui@1.0.0-beta.1/components", "@aimpact/ailearn-app@0.1.3-test.07/components/ui", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/form", "pragmate-ui@1.0.0-beta.1/modal", "pragmate-ui@1.0.0-beta.1/icons", "@aimpact/ailearn-app@0.1.3-test.07/components/icons", "pragmate-ui@1.0.0-beta.1/collapsible", "pragmate-ui@1.0.0-beta.1/toast", "pragmate-ui@1.0.0-beta.1/chips", "@aimpact/ailearn-app@0.1.3-test.07/config", "@aimpact/ailearn-app@0.1.3-test.07/modules/management/activity.code", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.3-test.07/components/cover-image.code", "pragmate-ui@1.0.0-beta.1/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp013Test07MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp013Test07MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta1Empty) {
      dependency_12 = _pragmateUi100Beta1Empty;
    }, function (_pragmateUi100Beta1Components) {
      dependency_13 = _pragmateUi100Beta1Components;
    }, function (_aimpactAilearnApp013Test07ComponentsUi) {
      dependency_14 = _aimpactAilearnApp013Test07ComponentsUi;
    }, function (_pragmateUi100Beta1List) {
      dependency_15 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Form) {
      dependency_16 = _pragmateUi100Beta1Form;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_17 = _pragmateUi100Beta1Modal;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_18 = _pragmateUi100Beta1Icons;
    }, function (_aimpactAilearnApp013Test07ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp013Test07ComponentsIcons;
    }, function (_pragmateUi100Beta1Collapsible) {
      dependency_20 = _pragmateUi100Beta1Collapsible;
    }, function (_pragmateUi100Beta1Toast) {
      dependency_21 = _pragmateUi100Beta1Toast;
    }, function (_pragmateUi100Beta1Chips) {
      dependency_22 = _pragmateUi100Beta1Chips;
    }, function (_aimpactAilearnApp013Test07Config) {
      dependency_23 = _aimpactAilearnApp013Test07Config;
    }, function (_aimpactAilearnApp013Test07ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp013Test07ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_25 = _pragmateUi100Beta1Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp013Test07ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp013Test07ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta1Image) {
      dependency_28 = _pragmateUi100Beta1Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.3-test.07"], ["@aimpact/ailearn-app", "0.1.3-test.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/toast', dependency_21], ['pragmate-ui/chips', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.3-test.07/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.3-test.07/modules/management/settings.widget');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInRpdGxlIiwibWFuYWdlbWVudCIsInB1c2giLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImNyZWF0ZUFjdGl2aXR5IiwiYWN0aXZpdHlUeXBlIiwibWFudWFsIiwiYWN0aXZpdHkiLCJhZGQiLCJwdWJsaXNoIiwiZmV0Y2hpbmciLCJyZXNwb25zZSIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJfdWkiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiVG91clN0ZXAiLCJtb2R1bGVUb3VyIiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInNldEl0ZW1zIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsInJlb3JkZXIiLCJGcmFnbWVudCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwiX3ByZWxvYWQiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiTW9kdWxlVmlldyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsIm9uRWRpdCIsInRhcmdldCIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJ0cmltQnJlYWRjcnVtYiIsImFkZEJyZWFkY3J1bWIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvd25lciIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJvYmplY3RpdmVUb3VyIiwiYnV0dG9ucyIsInRvdGFsQWN0aXZpdGllcyIsIlBhZ2VDb250YWluZXIiLCJNb2R1bGVNYW5hZ2VtZW50IiwiX2FjdGl2aXRpZXMiLCJfZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwicmVwbGFjZVN0YXRlIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIiwiTW9kdWxlVGl0bGUiLCJTa2VsZXRvblRleHQiLCJoZWlnaHQiXSwic291cmNlcyI6WyIvdHMvYW5pbWF0aW9uLWNvbnRhaW5lci50c3giLCIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxNQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxhQUFBLEdBQUFELE9BQUE7VUFNTSxTQUFVRSxpQkFBaUJBLENBQUM7WUFBRUMsU0FBUztZQUFFQyxRQUFRO1lBQUVDLEVBQUUsR0FBRztVQUFNLENBQTBCO1lBQzdGLE1BQU1DLFNBQVMsR0FBRyxJQUFBTCxhQUFBLENBQUFNLE1BQU0sRUFBQ0YsRUFBRSxDQUFDO1lBQzVCLE9BQ0NOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNILFNBQVM7Y0FDVEksTUFBTTtjQUNOUCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJRLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUU7O2VBRVg7Y0FDREMsSUFBSSxFQUFFO2dCQUNMRixVQUFVLEVBQUU7a0JBQ1hDLFFBQVEsRUFBRSxHQUFHO2tCQUNiRSxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RMLE9BQU8sRUFBRTs7WUFD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