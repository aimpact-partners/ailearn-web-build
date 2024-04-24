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
        hash: 3222228106,
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
        hash: 1448673626,
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
        hash: 847468081,
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
            }), _react.default.createElement("div", null, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwiY2VudGVyZWQiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiaXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJBcHBJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiSXRlbSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50IiwiUHJvcGVydHkiLCJuYW1lIiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiX2NoaXBzIiwia2luZCIsIkNoaXAiLCJTcGVjc0xpc3QiLCJkYXRhIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX2FpQnV0dG9uIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsIl91aSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdBY3Rpdml0eSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfY29uZmlnIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfY29pbnNMYXlvdXQiLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJMYXlvdXRCcm9rZXIiLCJlbnN1cmVDcmVkaXRzIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbW9kdWxlMiIsIl9ob29rczIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVwZGF0ZVZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJ0YXJnZXQiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwib3duZXIiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsQWN0aXZpdGllcyIsIlBhZ2VDb250YWluZXIiLCJNb2R1bGVNYW5hZ2VtZW50IiwiX2FjdGl2aXRpZXMiLCJfZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJzdGF0dXMiLCJzaG93TWVzc2FnZSIsImVycm9ycyIsIkNPTlRBQ1RfQURNSU4iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwibG9nIiwiZXJyb3JQdWJsaXNoaW5nTW9kdWxlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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