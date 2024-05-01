System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/cover-image.code", "@aimpact/chat@1.0.1/shared/hooks"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, ActivityView, AIButton, AIIconButton, View, Header, ModuleView, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Base) {
      dependency_2 = _beyondJsReact18Widgets112Base;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_3 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_4 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_6 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsKernel019Texts) {
      dependency_7 = _beyondJsKernel019Texts;
    }, function (_beyondJsKernel019Routing) {
      dependency_8 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_9 = _react2;
    }, function (_pragmateUi011Empty) {
      dependency_10 = _pragmateUi011Empty;
    }, function (_pragmateUi011Components) {
      dependency_11 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_12 = _pragmateUi011List;
    }, function (_pragmateUi011Form) {
      dependency_13 = _pragmateUi011Form;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_pragmateUi011Modal) {
      dependency_15 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_16 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_18 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_19 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_20 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_21 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_22 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesManagementActivityCode) {
      dependency_23 = _aimpactAilearnApp0032ModulesManagementActivityCode;
    }, function (_pragmateUi011Alert) {
      dependency_24 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_25 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_27 = _aimpactChat101SharedHooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@aimpact/ailearn-sdk/learning-modules', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@aimpact/ailearn-app/coins-layout.widget', dependency_6], ['@beyond-js/kernel/texts', dependency_7], ['@beyond-js/kernel/routing', dependency_8], ['react', dependency_9], ['pragmate-ui/empty', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/form', dependency_13], ['framer-motion', dependency_14], ['pragmate-ui/modal', dependency_15], ['pragmate-ui/icons', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/toast', dependency_19], ['pragmate-ui/chips', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@aimpact/ailearn-app/config', dependency_22], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_23], ['pragmate-ui/alert', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26], ['@aimpact/chat/shared/hooks', dependency_27]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsWUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFDTSxNQUFPTyxZQUFhLFNB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