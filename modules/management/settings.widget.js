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
        hash: 757304062,
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
              this.ready = false;
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
              if (this.#editActivity) {
                breadcrumb.push([this.model.title, `/modules/management?id=${this.model.id}`]);
                breadcrumb.push([this.#editActivity.title]);
              } else {
                breadcrumb.push([this.model.title]);
              }
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
        hash: 3125955121,
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
            activity
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
            const imgCls = `activity-type__image image--${activity.type}`;
            const clsState = `activity__state state--${activity.state}`;
            const onDelete = event => {
              event.stopPropagation();
              openDeleteModal();
            };
            return _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("div", {
              className: "flex-container flex-05 flex-center "
            }, _react.default.createElement(_icons.Icon, {
              icon: "drag",
              className: "drag-bullet-point"
            }), _react.default.createElement("section", {
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
              className: "activity-details flex-container flex-vertical-center"
            }, _react.default.createElement("div", {
              className: clsState
            }, texts.states[activity.state]), _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: onDelete
            }))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/index
      **************************************************/

      ims.set('./views/activities/list/item/index', {
        hash: 408966738,
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
            const [isDragging, setIsDragging] = _react.default.useState(false);
            const [showDelete, setShowDelete] = _react.default.useState(false);
            const handleDragStart = () => {
              setIsDragging(true);
              console.log(10, 'si');
            };
            const handleDragEnd = () => {
              console.log(30, 'no');
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
              onDragStart: handleDragStart,
              onDragEnd: handleDragEnd,
              as: "div"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, {
              onToggle: onToggle
            }, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement(_header.ActivityListHeader, {
              openDeleteModal: toggleDelete,
              activity: item
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
        hash: 3220690026,
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
              className: "flex-container flex-end mt-30"
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
        hash: 688686659,
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
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.refiningActivity
            })));
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
        hash: 621359350,
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
        hash: 2567698367,
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
                _routing.routing.pushState(`/modules/list?tab=publish`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJsb2ciLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVMsZ0JBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixZQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNNLE1BQU9PLFlBQWEs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