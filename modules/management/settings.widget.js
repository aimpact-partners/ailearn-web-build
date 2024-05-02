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
        hash: 2445005110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVMsZ0JBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixZQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNNLE1BQU9PLFlBQWEs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