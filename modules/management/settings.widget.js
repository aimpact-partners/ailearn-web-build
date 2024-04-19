System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi011Empty) {
      dependency_9 = _pragmateUi011Empty;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011List) {
      dependency_11 = _pragmateUi011List;
    }, function (_pragmateUi011Form) {
      dependency_12 = _pragmateUi011Form;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_pragmateUi011Icons) {
      dependency_15 = _pragmateUi011Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Collapsible) {
      dependency_17 = _pragmateUi011Collapsible;
    }, function (_pragmateUi011Toast) {
      dependency_18 = _pragmateUi011Toast;
    }, function (_pragmateUi011Chips) {
      dependency_19 = _pragmateUi011Chips;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_21 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesManagementActivityCode) {
      dependency_22 = _aimpactAilearnApp0032ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_23 = _aimpactAilearnApp0032CoinsLayoutWidget;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/toast', dependency_18], ['pragmate-ui/chips', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['@aimpact/ailearn-app/coins-layout.widget', dependency_23], ['pragmate-ui/alert', dependency_24], ['@aimpact/chat/shared/hooks', dependency_25], ['@beyond-js/react-18-widgets/hooks', dependency_26], ['@aimpact/ailearn-app/components/cover-image.code', dependency_27]]);
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
        hash: 3792056459,
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
            async createActivity(activityType) {
              try {
                const activity = await this.model.activities.add(activityType.id);
                return activity;
              } catch (e) {
                console.error(e);
              }
            }
            async publish() {
              try {
                this.fetching = true;
                const response = await this.model.publish();
              } catch (e) {
                console.error(1, e);
              } finally {
                this.fetching = false;
              }
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
        hash: 300455169,
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
            const toggleModal = () => setShowModal(show => !show);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            const onReorder = items => {
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
        hash: 151563149,
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
              store.editActivity = store.model.activities.items.find(item => item.id === activity.id);
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
            }, _react.default.createElement(_icons.Icon, {
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
        hash: 3280823715,
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
            const [showDelete, setShowDelete] = _react.default.useState(false);
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
            return _react.default.createElement(_framerMotion.Reorder.Item, {
              value: item,
              className: "activity__item",
              as: "div"
            }, _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
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
        hash: 3484275151,
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
            data,
            specs: {
              selected,
              setSelected
            }
          }) => {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const onClick = event => {
              setSelected(data);
            };
            const key = data.id.replace('/', '-');
            const cls = `activity__selection-item activity--${key}${data.id === selected?.id ? ' selected' : ''}`;
            const icon = _icons.ICONS[key];
            const clsImage = `activity-type__image image--${data.id}`;
            return _react.default.createElement("li", {
              className: cls,
              onClick: onClick
            }, _react.default.createElement("div", {
              className: clsImage
            }, _react.default.createElement(_icons2.Icon, {
              icon: icon
            })), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.activities.types[data.id]), _react.default.createElement("span", null, texts.activities.descriptionTypes[data.id])));
          };
          exports.SelectionActivityItem = SelectionActivityItem;
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/activities/list/selection/list
      ******************************************************/

      ims.set('./views/activities/list/selection/list', {
        hash: 4275420293,
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
              const activity = await createActivity(selected);
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
        hash: 3927268457,
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
            const createActivity = async type => {
              const activity = await store.createActivity(type);
              setActivity(activity);
              return activity;
            };
            const navigate = activity => {
              if (!activity) {
                console.error('Activity not found');
              }
              store.editActivity = activity;
              _routing.routing.pushState(`/modules/management?id=${store.model.id}&activityId=${activity.id}`);
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
        hash: 3264966213,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityView = ActivityView;
          var React = require("react");
          var _config = require("@aimpact/ailearn-app/config");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          /*bundle*/
          function ActivityView({
            texts,
            store
          }) {
            return React.createElement(_activity.ModuleActivityForm, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']],
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
        hash: 1038687210,
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
        hash: 2971756374,
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
            const title = store.model.title ?? moduleTexts.title;
            const onSave = event => store.save({
              title: event.target.value
            });
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
            }), _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
              onSave: onSave
            }, title), _react.default.createElement(_publish.PublishModule, null))));
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
        hash: 3417700196,
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
                await store.publish();
                _toast.toast.success(texts.toast.modulePublished);
                _routing.routing.pushState(`/modules/list?tab=publish`);
              } catch (e) {
                _toast.toast.error(texts.toast.errorPublishindModule);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiaXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJfcHJvcGVydHkiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJJdGVtIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJQcm9wZXJ0eSIsIm5hbWUiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJfY2hpcHMiLCJraW5kIiwiQ2hpcCIsIlNwZWNzTGlzdCIsImRhdGEiLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIkFycmF5IiwiaXNBcnJheSIsIkNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfYWlCdXR0b24iLCJfY29udGV4dDIiLCJNb2RhbEFjdGl2aXR5TGlzdCIsInNldFZpZXciLCJuYXZpZ2F0ZSIsIm9uQUkiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwibWFudWFsIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl92YWxpZGF0aW9uIiwiX3N1Z2dlc3Rpb25zIiwic2V0QWN0aXZpdHkiLCJoYW5kbGVPbkNsb3NlIiwiVklFV1MiLCJsaXN0IiwiYWkiLCJNb2RhbEFjdGl2aXR5U3VnZ2VzdGlvbnMiLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIkNvbnRyb2wiLCJQcm92aWRlciIsIk1vZGFsIiwiX3VpIiwibm90ZXMiLCJzZXROb3RlcyIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiLCJyZWZpbmUiLCJkZXNjcmlwdGlvbjIiLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJyZWZpbmluZ0FjdGl2aXR5IiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9jb25maWciLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9jb2luc0xheW91dCIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsIkxheW91dEJyb2tlciIsImVuc3VyZUNyZWRpdHMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFJlYWR5IiwidXBkYXRlVmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsQWN0aXZpdGllcyIsIlBhZ2VDb250YWluZXIiLCJNb2R1bGVNYW5hZ2VtZW50IiwiX2FjdGl2aXRpZXMiLCJfZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwiZXJyb3JQdWJsaXNoaW5kTW9kdWxlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFB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