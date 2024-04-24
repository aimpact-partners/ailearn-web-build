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
        hash: 1754479567,
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
            console.log(0.1, _icons2.ICONS, activity.type);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiaXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJsb2ciLCJJQ09OUyIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIkFwcEljb24iLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiSXRlbSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsIl91aSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdBY3Rpdml0eSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfY29uZmlnIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfY29pbnNMYXlvdXQiLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbW9kdWxlMiIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiUHVibGlzaE1vZHVsZSIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZE1vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFB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