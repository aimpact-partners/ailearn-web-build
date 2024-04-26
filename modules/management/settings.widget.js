System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/collapsible", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi011Empty) {
      dependency_8 = _pragmateUi011Empty;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_10 = _pragmateUi011List;
    }, function (_pragmateUi011Form) {
      dependency_11 = _pragmateUi011Form;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_pragmateUi011Modal) {
      dependency_13 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_16 = _pragmateUi011Collapsible;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_17 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
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
    }, function (_aimpactChat101SharedHooks) {
      dependency_25 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_26 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_27 = _aimpactAilearnApp0032ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/empty', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/form', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['@aimpact/ailearn-app/coins-layout.widget', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['pragmate-ui/toast', dependency_19], ['pragmate-ui/chips', dependency_20], ['@aimpact/ailearn-app/components/ui', dependency_21], ['@aimpact/ailearn-app/config', dependency_22], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_23], ['pragmate-ui/alert', dependency_24], ['@aimpact/chat/shared/hooks', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27]]);
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
        hash: 1008445188,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
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
                if (activityId) {
                  this.#editActivity = this.#model.activities.map.get(activityId);
                }
                // await this.#model.generateActivities(this.defaultValues);
                this.ready = true;
              } catch (e) {
                console.error(e);
              }
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
        hash: 165508863,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
              const bread = [store.model.title, baseUri];
              const activityType = texts.types[current.type];
              _coinsLayout.LayoutBroker.addMultipleBreadcrumb([bread, [activityType, activity.id]]);
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
        hash: 3183521344,
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
              breadcrumb: [[texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']],
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
        hash: 1334677833,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _module2 = require("./module");
          var _components = require("pragmate-ui/components");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _activity = require("./activity");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [ready, setReady] = React.useState(store.ready);
            const [view, setView] = React.useState(store.view);
            const updateView = () => {
              if (store.ready !== ready) setReady(store.ready);
              setView(store.view);
            };
            (0, _hooks2.useBinder)([store], updateView);
            (0, _hooks2.useBinder)([store], () => setView(store.view), 'activity.selected');
            if (!textsReady || !store.ready) return React.createElement(_components.Spinner, {
              active: true
            });
            if (view === 'activity') {
              return React.createElement(_activity.ActivityView, {
                ...props,
                texts: texts
              });
            }
            return React.createElement(_module2.ModuleView, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsIm1hbnVhbCIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJkcmFnZ2luZyIsInNldERyYWdnaW5nIiwibGVuZ3RoIiwib25SZW9yZGVyIiwicmVvcmRlciIsIkZyYWdtZW50IiwiRm9ybSIsIlJlb3JkZXIiLCJHcm91cCIsImFzIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsImNlbnRlcmVkIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIl9jb2luc0xheW91dCIsIl9yb3V0aW5nIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudCIsImZpbmQiLCJpdGVtIiwiYmFzZVVyaSIsImJyZWFkIiwidHlwZXMiLCJMYXlvdXRCcm9rZXIiLCJhZGRNdWx0aXBsZUJyZWFkY3J1bWIiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJY29uIiwiQXBwSWNvbiIsIklDT05TIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImlzRHJhZ2dpbmciLCJzZXRJc0RyYWdnaW5nIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJoYW5kbGVEcmFnU3RhcnQiLCJsb2ciLCJoYW5kbGVEcmFnRW5kIiwiZGVsZXRlSXRlbSIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIm9uVG9nZ2xlIiwiSXRlbSIsIm9uRHJhZ1N0YXJ0Iiwib25EcmFnRW5kIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJ0cmltQnJlYWRjcnVtYiIsImFkZEJyZWFkY3J1bWIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvd25lciIsIlB1Ymxpc2hNb2R1bGUiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN0YXR1cyIsInNob3dNZXNzYWdlIiwiZXJyb3JzIiwiQ09OVEFDVF9BRE1JTiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmdNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkRCxJQUFBUyxnQkFBQSxHQUFBWixPQUFBO1VBQ0EsSUFBQWEsTUFBQSxHQUFBYixPQUFBO1VBQ0EsSUFBQWMsUUFBQSxHQUFBZCxPQUFBO1VBRU0sTUFBT08sWUFBYSxTQUFRTSxNQUFBLENBQUFFLGFBQTJCO1lBQzVELENBQUFDLEtBQU07WUFDTixJQUFJQSxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPSCxRQUFBLENBQUFJLGNBQWMsQ0FBQ0QsSUFBSTtZQUMzQjtZQUVBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElB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