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
        hash: 785771374,
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
                  console.log('ahora si');
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
            validateView(id) {
              console.log('si paa', id);
            }
            async load(id, activityId) {
              try {
                console.log(90, id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9iZXlvbmRfY29udGV4dCIsIl9jb2luc0xheW91dCIsIl90ZXh0cyIsIl9yb3V0aW5nIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsInRleHRzIiwiQ3VycmVudFRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwidmFsdWUiLCJyZWFkeSIsImVkaXRBY3Rpdml0eSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIm9uIiwidHJpZ2dlckV2ZW50Iiwicm91dGluZyIsInVyaSIsInBhdGhuYW1lIiwicXMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwic2V0QnJlYWRjcnVtYiIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInZhbGlkYXRlVmlldyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYmluZCIsImUiLCJlcnJvciIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwicHVzaCIsInRpdGxlIiwiTGF5b3V0QnJva2VyIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJzaG93Iiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJzZXRJdGVtcyIsImRyYWdnaW5nIiwic2V0RHJhZ2dpbmciLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9tb2R1bGUiLCJfaG9va3MiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsInRyaW1CcmVhZGNydW1iIiwiYWRkQnJlYWRjcnVtYiIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX2hvb2tzMiIsIl9tYW5hZ2VtZW50IiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3RhdHVzIiwic2hvd01lc3NhZ2UiLCJlcnJvcnMiLCJDT05UQUNUX0FETUlOIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZ01vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBUixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVMsZ0JBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQUNBLElBQUFlLGVBQUEsR0FBQWYsT0FBQTtVQUNBLElBQUFnQixZQUFBLEdBQUFoQixPQUFBO1VBQ0EsSUFBQWlCLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBa0IsUUFBQSxHQUFBbEIsT0FBQTtVQUNNLE1BQU9PLFlBQWEs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