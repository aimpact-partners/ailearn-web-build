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
        hash: 3402642654,
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
                if (!_routing.routing.uri.qs.get('activityId')) this.editActivity = undefined;
                this.setBreadcrumb();
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
            validateView(id) {
              console.log('si paa', id);
            }
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
        hash: 3520755397,
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
            const onSave = event => {
              _coinsLayout.LayoutBroker.trimBreadcrumb(1);
              _coinsLayout.LayoutBroker.addBreadcrumb([event.target.value, '']);
              store.save({
                title: event.target.value
              });
            };
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            const onGenerate = notes => ensureCredits(notes => store.model.generatePicture(notes), notes);
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
        hash: 4094486042,
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
            return _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInFzIiwidW5kZWZpbmVkIiwic2V0QnJlYWRjcnVtYiIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInZhbGlkYXRlVmlldyIsImNvbnNvbGUiLCJsb2ciLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsImJpbmQiLCJlIiwiZXJyb3IiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsInB1c2giLCJ0aXRsZSIsIkxheW91dEJyb2tlciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJtYW51YWwiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsImFzIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnQiLCJmaW5kIiwiaXRlbSIsImJhc2VVcmkiLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJpc0RyYWdnaW5nIiwic2V0SXNEcmFnZ2luZyIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImRlbGV0ZUl0ZW0iLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJvblRvZ2dsZSIsIkl0ZW0iLCJvbkRyYWdTdGFydCIsIm9uRHJhZ0VuZCIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiYWRkTXVsdGlwbGVCcmVhZGNydW1iIiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsIl91aSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdBY3Rpdml0eSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfbW9kdWxlIiwiX2hvb2tzIiwic2V0UmVhZHkiLCJ1cGRhdGVWaWV3IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIk1vZHVsZVZpZXciLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidGFyZ2V0IiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIm93bmVyIiwiUHVibGlzaE1vZHVsZSIsIl9ob29rczIiLCJfbWFuYWdlbWVudCIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsWUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFDTSxNQUFPTyxZQUFhLFNBQVFNLE1BQUEs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