System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/empty", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/toast", "pragmate-ui@1.0.0-beta.2/chips", "@aimpact/ailearn-app@0.1.6-dev.04/config", "@aimpact/ailearn-app@0.1.6-dev.04/modules/management/activity.code", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/cover-image.code", "pragmate-ui@1.0.0-beta.2/image"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_9 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_11 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_12 = _pragmateUi100Beta2Empty;
    }, function (_pragmateUi100Beta2Components) {
      dependency_13 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_pragmateUi100Beta2List) {
      dependency_15 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Form) {
      dependency_16 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_17 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_18 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_19 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_20 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_21 = _pragmateUi100Beta2Toast;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_22 = _pragmateUi100Beta2Chips;
    }, function (_aimpactAilearnApp016Dev04Config) {
      dependency_23 = _aimpactAilearnApp016Dev04Config;
    }, function (_aimpactAilearnApp016Dev04ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp016Dev04ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_25 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp016Dev04ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta2Image) {
      dependency_28 = _pragmateUi100Beta2Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@aimpact/ailearn-app/main-layout.widget', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@beyond-js/kernel/routing', dependency_11], ['pragmate-ui/empty', dependency_12], ['pragmate-ui/components', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['pragmate-ui/list', dependency_15], ['pragmate-ui/form', dependency_16], ['pragmate-ui/modal', dependency_17], ['pragmate-ui/icons', dependency_18], ['@aimpact/ailearn-app/components/icons', dependency_19], ['pragmate-ui/collapsible', dependency_20], ['pragmate-ui/toast', dependency_21], ['pragmate-ui/chips', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['pragmate-ui/alert', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27], ['pragmate-ui/image', dependency_28]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/modules/management/settings.widget');
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
        hash: 1175297414,
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
              const title = this.#editActivity?.title ?? this.texts.breadcrumb.management;
              if (this.#editActivity) {
                _mainLayout.LayoutBroker.overlay = true;
                return;
              }
              _mainLayout.LayoutBroker.overlay = false;
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
        hash: 3859133935,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
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
        hash: 1658927461,
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
            const [content, setContent] = _react.default.useState(store.model.description);
            const onEdit = async event => {
              const {
                target
              } = event;
              setContent(target.value);
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
        hash: 2514217106,
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
            const [title, setTitle] = _react.default.useState(store.model.title ?? '');
            const onGenerate = notes => ensureCredits(notes => store.model.generatePicture(notes), notes);
            const onSave = event => {
              setTitle(event.target.value);
              store.save({
                title: event.target.value
              });
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("section", {
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
        hash: 3969363145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJ0aXRsZSIsImJyZWFkY3J1bWIiLCJtYW5hZ2VtZW50IiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJtYW51YWwiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJUb3VyU3RlcCIsIm1vZHVsZVRvdXIiLCJuYW1lIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJjZW50ZXJlZCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJjb250cm9scyIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJiYXNlVXJpIiwicHVzaFN0YXRlIiwiaVJlZiIsInVzZVJlZiIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIm9uRHJhZyIsInN0YXJ0IiwidXNlRWZmZWN0IiwidG91Y2hIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJpVGFnIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJvblBvaW50ZXJEb3duIiwicmVmIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInVzZURyYWdDb250cm9scyIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsImRyYWdMaXN0ZW5lciIsImRyYWdDb250cm9scyIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwiX3ByZWxvYWQiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJQcmVsb2FkIiwiTW9kdWxlVmlldyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0b3VyIiwiY29udGVudCIsInNldENvbnRlbnQiLCJvbkVkaXQiLCJ0YXJnZXQiLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvd25lciIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJvYmplY3RpdmVUb3VyIiwiYnV0dG9ucyIsImdsb2JhbFRoaXMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJlcGxhY2VTdGF0ZSIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIk1vZHVsZVRpdGxlIiwiU2tlbGV0b25UZXh0IiwiaGVpZ2h0Il0sInNvdXJjZXMiOlsiL3RzL2FuaW1hdGlvbi1jb250YWluZXIudHN4IiwiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCIsIi90cy92aWV3cy9wcmVsb2FkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFj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