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
        hash: 3577518651,
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
            awefaw;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3IiwiYXdlZmF3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVMsZ0JBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixZQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNNLE1B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