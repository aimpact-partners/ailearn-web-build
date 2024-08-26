System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/empty", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/toast", "pragmate-ui@1.0.0-beta.2/chips", "@aimpact/ailearn-app@0.1.6-dev.04/config", "@aimpact/ailearn-app@0.1.6-dev.04/modules/management/activity.code", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.04/components/cover-image.code", "pragmate-ui@1.0.0-beta.2/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, bimport, __Bundle, __pkg, ims, Controller, ActivityView, AIButton, AIIconButton, View, Header, ModuleView, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_6 = _aimpactAilearnSdk100Core;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_7 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_8 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Session) {
      dependency_9 = _aimpactChatSdk101Session;
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_10 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_12 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_13 = _pragmateUi100Beta2Empty;
    }, function (_pragmateUi100Beta2Components) {
      dependency_14 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_15 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_pragmateUi100Beta2List) {
      dependency_16 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Form) {
      dependency_17 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_18 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_19 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_20 = _aimpactAilearnApp016Dev04ComponentsIcons;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_21 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_22 = _pragmateUi100Beta2Toast;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_23 = _pragmateUi100Beta2Chips;
    }, function (_aimpactAilearnApp016Dev04Config) {
      dependency_24 = _aimpactAilearnApp016Dev04Config;
    }, function (_aimpactAilearnApp016Dev04ModulesManagementActivityCode) {
      dependency_25 = _aimpactAilearnApp016Dev04ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_26 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_27 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev04ComponentsCoverImageCode) {
      dependency_28 = _aimpactAilearnApp016Dev04ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta2Image) {
      dependency_29 = _pragmateUi100Beta2Image;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/main-layout.widget', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@beyond-js/kernel/routing', dependency_12], ['pragmate-ui/empty', dependency_13], ['pragmate-ui/components', dependency_14], ['@aimpact/ailearn-app/components/ui', dependency_15], ['pragmate-ui/list', dependency_16], ['pragmate-ui/form', dependency_17], ['pragmate-ui/modal', dependency_18], ['pragmate-ui/icons', dependency_19], ['@aimpact/ailearn-app/components/icons', dependency_20], ['pragmate-ui/collapsible', dependency_21], ['pragmate-ui/toast', dependency_22], ['pragmate-ui/chips', dependency_23], ['@aimpact/ailearn-app/config', dependency_24], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_25], ['pragmate-ui/alert', dependency_26], ['@beyond-js/react-18-widgets/hooks', dependency_27], ['@aimpact/ailearn-app/components/cover-image.code', dependency_28], ['pragmate-ui/image', dependency_29]]);
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
        hash: 2212045755,
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
              _mainLayout.LayoutBroker.overlay = this.#editActivity;
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
            clean() {
              this.#model.activities.clean();
              this.#model = undefined;
              super.ready = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX3JvdXRpbmciLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJ2YWx1ZSIsInJlYWR5IiwiZWRpdEFjdGl2aXR5IiwidW5kZWZpbmVkIiwiTGF5b3V0QnJva2VyIiwib3ZlcmxheSIsImJhY2tMaW5rIiwiaWQiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJnZXQiLCJhY3Rpdml0eUlkIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJyb3V0aW5nIiwidXJpIiwicGF0aG5hbWUiLCJxcyIsInNldEJyZWFkY3J1bWIiLCJFcnJvciIsImxvYWQiLCJ2YWxpZGF0ZVZpZXciLCJzcGVjcyIsInR5cGUiLCJjbGVhbiIsIkxlYXJuaW5nTW9kdWxlIiwiYWN0aXZpdGllcyIsImZpbmQiLCJpdGVtIiwiYmluZCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGVBY3Rpdml0eSIsInJlbW92ZSIsInNhdmVEcmFmdCIsInNhdmUiLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsImZldGNoaW5nIiwicmVzcG9uc2UiLCJfZW1wdHkiLCJfY29tcG9uZW50cyIsIl9tb2RhbCIsIl9jb250ZXh0IiwiX3VpIiwiRW1wdHlBY3Rpdml0eUxpc3QiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsInRpdGxlIiwiVG91clN0ZXAiLCJtb2R1bGVUb3VyIiwibmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsInNldEl0ZW1zIiwiZHJhZ2dpbmciLCJzZXREcmFnZ2luZyIsImxlbmd0aCIsIm9uUmVvcmRlciIsInJlb3JkZXIiLCJGcmFnbWVudCIsIkZvcm0iLCJSZW9yZGVyIiwiR3JvdXAiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiY29udHJvbHMiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50IiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImlSZWYiLCJ1c2VSZWYiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJvbkRyYWciLCJzdGFydCIsInVzZUVmZmVjdCIsInRvdWNoSGFuZGxlciIsInByZXZlbnREZWZhdWx0IiwiaVRhZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwib25Qb2ludGVyRG93biIsInJlZiIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJ1c2VEcmFnQ29udHJvbHMiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJkcmFnTGlzdGVuZXIiLCJkcmFnQ29udHJvbHMiLCJvbkRyYWdFbmQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5Iiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJhdmFpbGFibGVUeXBlcyIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX21vZHVsZSIsIl9ob29rcyIsIl9wcmVsb2FkIiwic2V0UmVhZHkiLCJ1cGRhdGVWaWV3IiwidXNlQmluZGVyIiwiUHJlbG9hZCIsIk1vZHVsZVZpZXciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidG91ciIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwib25FZGl0IiwidGFyZ2V0IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwic2V0VGl0bGUiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJQdWJsaXNoTW9kdWxlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwib2JqZWN0aXZlVG91ciIsImJ1dHRvbnMiLCJnbG9iYWxUaGlzIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giLCIvdHMvdmlld3MvcHJlbG9hZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsTUFBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsYUFBQSxHQUFBRCxPQUFBO1VBTU0sU0FBVUUsaUJBQWlCQSxDQUFDO1lBQUVDLFNBQVM7WUFBRUMsUUFBUTtZQUFFQyxFQUFFLEdBQUc7VUFBTSxDQUEwQjtZQUM3RixNQUFNQyxTQUFTLEdBQUcsSUFBQUwsYUFBQSxDQUFBTSxNQUFNLEVBQUNGLEVBQUUsQ0FBQztZQUM1QixPQUNDTixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQSxDQUFDSCxTQUFTO2NBQ1RJLE1BQU07Y0FDTlAsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCUSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWEMsUUFBUSxFQUFFOztlQUVYO2NBQ0RDLElBQUksRUFBRTtnQkFDTEYsVUFBVSxFQUFFO2tCQUNYQyxRQUFRLEVBQUUsR0FBRztrQkFDYkUsS0FBSyxFQUFFO2lCQUNQO2dCQUNETCxPQUFPLEVBQUU7O1lBQ1QsR0FFQVIsUUFBUSxDQUNFO1VBRWQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakNBLElBQUFjLEtBQUEsR0FBQWxCLE9BQUE7VUFDQSxJ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