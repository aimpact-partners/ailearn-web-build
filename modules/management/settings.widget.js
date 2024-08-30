System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "react@18.2.0", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/core", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@aimpact/ailearn-app@0.1.6-dev.09/main-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.09/i18n.ts", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/empty", "pragmate-ui@1.0.0-beta.2/components", "@aimpact/ailearn-app@0.1.6-dev.09/components/ui", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/modal", "pragmate-ui@1.0.0-beta.2/icons", "@aimpact/ailearn-app@0.1.6-dev.09/components/icons", "pragmate-ui@1.0.0-beta.2/collapsible", "pragmate-ui@1.0.0-beta.2/toast", "pragmate-ui@1.0.0-beta.2/chips", "@aimpact/ailearn-app@0.1.6-dev.09/config", "@aimpact/ailearn-app@0.1.6-dev.09/modules/management/activity.code", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.1.6-dev.09/components/cover-image.code", "pragmate-ui@1.0.0-beta.2/image"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, dependency_28, dependency_29, dependency_30, dependency_31, bimport, __Bundle, __pkg, ims, Controller, ActivityView, AIButton, AIIconButton, View, Header, ModuleView, __beyond_pkg, hmr;
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
    }, function (_aimpactChatSdk110Session) {
      dependency_9 = _aimpactChatSdk110Session;
    }, function (_aimpactAilearnApp016Dev09MainLayoutWidget) {
      dependency_10 = _aimpactAilearnApp016Dev09MainLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_11 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev09I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev09I18nTs;
    }, function (_beyondJsKernel019Routing) {
      dependency_13 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Empty) {
      dependency_14 = _pragmateUi100Beta2Empty;
    }, function (_pragmateUi100Beta2Components) {
      dependency_15 = _pragmateUi100Beta2Components;
    }, function (_aimpactAilearnApp016Dev09ComponentsUi) {
      dependency_16 = _aimpactAilearnApp016Dev09ComponentsUi;
    }, function (_pragmateUi100Beta2List) {
      dependency_17 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Form) {
      dependency_18 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_19 = _pragmateUi100Beta2Modal;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_20 = _pragmateUi100Beta2Icons;
    }, function (_aimpactAilearnApp016Dev09ComponentsIcons) {
      dependency_21 = _aimpactAilearnApp016Dev09ComponentsIcons;
    }, function (_pragmateUi100Beta2Collapsible) {
      dependency_22 = _pragmateUi100Beta2Collapsible;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_23 = _pragmateUi100Beta2Toast;
    }, function (_pragmateUi100Beta2Chips) {
      dependency_24 = _pragmateUi100Beta2Chips;
    }, function (_aimpactAilearnApp016Dev09Config) {
      dependency_25 = _aimpactAilearnApp016Dev09Config;
    }, function (_aimpactAilearnApp016Dev09ModulesManagementActivityCode) {
      dependency_26 = _aimpactAilearnApp016Dev09ModulesManagementActivityCode;
    }, function (_pragmateUi100Beta2Base) {
      dependency_27 = _pragmateUi100Beta2Base;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_28 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_29 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp016Dev09ComponentsCoverImageCode) {
      dependency_30 = _aimpactAilearnApp016Dev09ComponentsCoverImageCode;
    }, function (_pragmateUi100Beta2Image) {
      dependency_31 = _pragmateUi100Beta2Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.09"], ["@aimpact/ailearn-app", "0.1.6-dev.09"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['react', dependency_3], ['framer-motion', dependency_4], ['@beyond-js/react-18-widgets/base', dependency_5], ['@aimpact/ailearn-sdk/core', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@aimpact/ailearn-app/main-layout.widget', dependency_10], ['@beyond-js/kernel/texts', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['@beyond-js/kernel/routing', dependency_13], ['pragmate-ui/empty', dependency_14], ['pragmate-ui/components', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/list', dependency_17], ['pragmate-ui/form', dependency_18], ['pragmate-ui/modal', dependency_19], ['pragmate-ui/icons', dependency_20], ['@aimpact/ailearn-app/components/icons', dependency_21], ['pragmate-ui/collapsible', dependency_22], ['pragmate-ui/toast', dependency_23], ['pragmate-ui/chips', dependency_24], ['@aimpact/ailearn-app/config', dependency_25], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_26], ['pragmate-ui/base', dependency_27], ['pragmate-ui/alert', dependency_28], ['@beyond-js/react-18-widgets/hooks', dependency_29], ['@aimpact/ailearn-app/components/cover-image.code', dependency_30], ['pragmate-ui/image', dependency_31]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.09/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.09/modules/management/settings.widget');
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
        hash: 2539252405,
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
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
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
            get globalTexts() {
              return _i18n.globalTexts.texts;
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
        hash: 3918254615,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.EmptyActivityList = EmptyActivityList;
          var _react = require("react");
          var _empty = require("pragmate-ui/empty");
          var _components = require("pragmate-ui/components");
          var _modalSelection = require("./list/modal-selection");
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
            }, _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text))), _react.default.createElement(_modalSelection.ModalSelection, {
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
        hash: 2238730782,
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
          var _modalSelection = require("./list/modal-selection");
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
            })))), _react.default.createElement(_modalSelection.ModalSelection, {
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

      /***************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/context
      ***************************************************************/

      ims.set('./views/activities/list/modal-selection/context', {
        hash: 3888096406,
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

      /*************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/index
      *************************************************************/

      ims.set('./views/activities/list/modal-selection/index', {
        hash: 1503471850,
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
          var _requestCredits = require("./request-credits");
          function ModalSelection({
            show,
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [activity, setActivity] = _react.default.useState(null);
            const [selected, setSelected] = _react.default.useState(null);
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
              _routing.routing.pushState(`${baseUri}&activityId=${activity.id}`);
              onClose();
            };
            const handleOnClose = () => {
              setView('list');
              onClose();
            };
            const VIEWS = {
              list: _list.ModalActivityList,
              ai: _suggestions.ModalActivitySuggestions,
              requestCredits: _requestCredits.RequestCreditsContainer
            };
            if (!store.model.valid) return _react.default.createElement(_validation.ModalValidation, {
              onClose: handleOnClose
            });
            const Control = VIEWS[view];
            const contextValue = {
              onClose,
              activity,
              createActivity,
              setActivity,
              navigate,
              setView,
              selected,
              setSelected
            };
            return _react.default.createElement(_context2.CreateActivityContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_modal.Modal, {
              closeBackdrop: false,
              show: true,
              onClose: handleOnClose
            }, _react.default.createElement(Control, null)));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/item
      ************************************************************/

      ims.set('./views/activities/list/modal-selection/item', {
        hash: 854135559,
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
            selected,
            setSelected
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

      /************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/list
      ************************************************************/

      ims.set('./views/activities/list/modal-selection/list', {
        hash: 976716274,
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
            const {
              setView,
              navigate,
              createActivity,
              selected,
              setSelected
            } = (0, _context2.useCreateActivityContext)();
            const onSubmit = async event => {
              event;
              const activity = await createActivity(selected, true);
              navigate(activity);
            };
            const onAI = async event => {
              event.preventDefault();
              event.stopPropagation();
              if (!store.model.credits.total) {
                setView('requestCredits');
                return;
              }
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
              disabled: !selected,
              ensure: false
            }, texts.actions.generate)));
          }
        }
      });

      /***********************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/request-credits
      ***********************************************************************/

      ims.set('./views/activities/list/modal-selection/request-credits', {
        hash: 2337899099,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _context2 = require("../../../context");
          function RequestCreditsContainer() {
            const {
              onClose,
              setView,
              createActivity,
              selected
            } = (0, _context.useCreateActivityContext)();
            const {
              store
            } = (0, _context2.useModuleContext)();
            const texts = {
              ...store.globalTexts
            };
            texts.actions.cancel = store.globalTexts.actions.back;
            const onCancel = () => setView('list');
            const onSuccess = async () => {
              await createActivity(selected);
              setView('ai');
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            }));
          }
        }
      });

      /*******************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/suggestions
      *******************************************************************/

      ims.set('./views/activities/list/modal-selection/suggestions', {
        hash: 3605372254,
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
              navigate,
              setView
            } = (0, _context2.useCreateActivityContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const onBack = () => setView('list');
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: async event => {
                try {
                  setFetching(true);
                  await activity.generate(notes);
                  navigate(activity);
                } catch (e) {
                  console.error(e);
                } finally {
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
              bordered: true,
              onClick: onBack
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /******************************************************************
      INTERNAL MODULE: ./views/activities/list/modal-selection/validation
      ******************************************************************/

      ims.set('./views/activities/list/modal-selection/validation', {
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
        hash: 2003207470,
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
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
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
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = onClick;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVhY3QiLCJyZXF1aXJlIiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkQ29udGFpbmVyIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJhcyIsIkNvbXBvbmVudCIsIm1vdGlvbiIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwibGF5b3V0IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZXhpdCIsIndpZHRoIiwiX2Jhc2UiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2kxOG4iLCJfcm91dGluZyIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJnbG9iYWxUZXh0cyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInVuZGVmaW5lZCIsIkxheW91dEJyb2tlciIsIm92ZXJsYXkiLCJiYWNrTGluayIsImlkIiwidHJpZ2dlciIsInZpZXciLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiY2xlYW4iLCJMZWFybmluZ01vZHVsZSIsImFjdGl2aXRpZXMiLCJmaW5kIiwiaXRlbSIsImJpbmQiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJtYW51YWwiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJmZXRjaGluZyIsInJlc3BvbnNlIiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWxTZWxlY3Rpb24iLCJfY29udGV4dCIsIl91aSIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJ0aXRsZSIsIlRvdXJTdGVwIiwibW9kdWxlVG91ciIsIm5hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIl9tb2RhbCIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImNvbnRyb2xzIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImJhc2VVcmkiLCJwdXNoU3RhdGUiLCJpUmVmIiwidXNlUmVmIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwib25EcmFnIiwic3RhcnQiLCJ1c2VFZmZlY3QiLCJ0b3VjaEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImlUYWciLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJDb2xsYXBzaWJsZUhlYWRlciIsIm9uUG9pbnRlckRvd24iLCJyZWYiLCJJY29uIiwiQXBwSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImluZGV4IiwidXNlRHJhZ0NvbnRyb2xzIiwiaXNEcmFnZ2luZyIsInNldElzRHJhZ2dpbmciLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJkZWxldGVJdGVtIiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwib25Ub2dnbGUiLCJJdGVtIiwiZHJhZ0xpc3RlbmVyIiwiZHJhZ0NvbnRyb2xzIiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiZGF0YSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJfdmFsaWRhdGlvbiIsIl9jb250ZXh0MiIsIl9zdWdnZXN0aW9ucyIsIl9yZXF1ZXN0Q3JlZGl0cyIsInNldEFjdGl2aXR5Iiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJNb2RhbEFjdGl2aXR5TGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwicmVxdWVzdENyZWRpdHMiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl9haUJ1dHRvbiIsIm9uQUkiLCJjcmVkaXRzIiwidG90YWwiLCJjcmVhdGVNb2RhbCIsImF2YWlsYWJsZVR5cGVzIiwiZGlzYWJsZWQiLCJBSUJ1dHRvbiIsImVuc3VyZSIsImdlbmVyYXRlIiwiYmFjayIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyIsIm93bmVyIiwibm90ZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJfcHJlbG9hZCIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlByZWxvYWQiLCJNb2R1bGVWaWV3IiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRvdXIiLCJjb250ZW50Iiwic2V0Q29udGVudCIsIm9uRWRpdCIsInRhcmdldCIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsImVuc3VyZUNyZWRpdHMiLCJzZXRUaXRsZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIlB1Ymxpc2hNb2R1bGUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwib2JqZWN0aXZlVG91ciIsImJ1dHRvbnMiLCJnbG9iYWxUaGlzIiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyZXBsYWNlU3RhdGUiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJNb2R1bGVUaXRsZSIsIlNrZWxldG9uVGV4dCIsImhlaWdodCJdLCJzb3VyY2VzIjpbIi90cy9hbmltYXRpb24tY29udGFpbmVyLnRzeCIsIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9tb2RhbC1zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvbW9kYWwtc2VsZWN0aW9uL3JlcXVlc3QtY3JlZGl0cy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L21vZGFsLXNlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4IiwiL3RzL3ZpZXdzL3ByZWxvYWQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLGFBQUEsR0FBQUQsT0FBQTtVQU1NLFNBQVVFLGlCQUFpQkEsQ0FBQztZQUFFQyxTQUFTO1lBQUVDLFFBQVE7WUFBRUMsRUFBRSxHQUFHO1VBQU0sQ0FBMEI7WUFDN0YsTUFBTUMsU0FBUyxHQUFHLElBQUFMLGFBQUEsQ0FBQU0sTUFBTSxFQUFDRixFQUFFLENBQUM7WUFDNUIsT0FDQ04sTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ0gs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QUNTLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQTVVLE1BQUEsR0FBQUMsT0FBQTtVQUVBLElBQUF3RyxXQUFBLEdBQUF4RyxPQUFBO1VBQ0EsSUFBQTJHLEdBQUEsR0FBQTNHLE9BQUE7VUFHTSxTQUFVc1UsT0FBT0EsQ0FBQTtZQUN0QixPQUNDdlUsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLEdBQUEsQ0FBQXpHLGlCQUFpQixRQUNqQkgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLEdBQUEsQ0FBQStQLGFBQWEsUUFDYjNXLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGtCQUNDVixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFLTixTQUFTLEVBQUM7WUFBbUQsR0FDakVKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUMrRixXQUFBLENBQUFjLE1BQU07Y0FBQ0MsT0FBTyxFQUFDO1lBQVMsRUFBVSxDQUM5QixFQUNOeEgsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBUU4sU0FBUyxFQUFDO1lBQTRELEdBQzdFSixNQUFBLENBQUFTLE9BQUEsQ0FBQUMsYUFBQTtjQUFTTixTQUFTLEVBQUM7WUFBNkMsR0FDL0RKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBO2NBQUtOLFNBQVMsRUFBQztZQUFlLEVBQU8sRUFDckNKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLGNBQ0NWLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxHQUFBLENBQUFvTyxlQUFlO2NBQUMxTixJQUFJLEVBQUMsT0FBTztjQUFDaEgsRUFBRSxFQUFDO1lBQUksR0FDcENOLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxHQUFBLENBQUE2USxZQUFZO2NBQUNDLE1BQU0sRUFBQyxNQUFNO2NBQUN4VyxLQUFLLEVBQUM7WUFBTyxFQUFHLENBQzNCLEVBRWxCbEIsTUFBQSxDQUFBUyxPQUFBLENBQUFDLGFBQUE7Y0FBS04sU0FBUyxFQUFDO1lBQWUsR0FDN0JKLE1BQUEsQ0FBQVMsT0FBQSxDQUFBQyxhQUFBLENBQUNrRyxHQUFBLENBQUE2USxZQUFZO2NBQUNDLE1BQU0sRUFBQyxLQUFLO2NBQUN4VyxLQUFLLEVBQUM7WUFBTSxFQUFHLENBQ3JDLENBQ0QsQ0FDRyxDQUNGLENBQ0EsQ0FDSyxDQUNHO1VBRXRCIiwiaWdub3JlTGlzdCI6W119