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
        hash: 942114041,
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
        hash: 2355559764,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwidGl0bGUiLCJtYW5hZ2VtZW50IiwicHVzaCIsIkxheW91dEJyb2tlciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJtYW51YWwiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsImFzIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJmaW5kIiwiaXRlbSIsImJhc2VVcmkiLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsIl91aSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdBY3Rpdml0eSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwic2V0UmVhZHkiLCJ1cGRhdGVWaWV3IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIk1vZHVsZVZpZXciLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidGFyZ2V0IiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJ0cmltQnJlYWRjcnVtYiIsImFkZEJyZWFkY3J1bWIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIm93bmVyIiwiUHVibGlzaE1vZHVsZSIsIl9ob29rczIiLCJfbWFuYWdlbWVudCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJsb2ciLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsWUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFD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