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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJzZXRCcmVhZGNydW1iIiwiRXJyb3IiLCJsb2FkIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidmFsaWRhdGVWaWV3IiwiYXdlZmF3Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJiaW5kIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImxvZyIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFDQSxJQUFBZSxlQUFBLEdBQUFmLE9BQUE7VUFDQSxJQUFBZ0IsWUFBQSxHQUFBaEIsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLFFBQUEsR0FBQWxCLE9BQUE7VUFDTSxNQUFP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