System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/base", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.1/empty", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/form", "framer-motion@10.18.0", "pragmate-ui@0.1.1/modal", "pragmate-ui@0.1.1/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/collapsible", "pragmate-ui@0.1.1/toast", "pragmate-ui@0.1.1/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "pragmate-ui@0.1.1/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, ActivityView, View, Header, ModuleView, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    ActivityView: void 0,
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
    }, function (_beyondJsReact18Widgets111Base) {
      dependency_3 = _beyondJsReact18Widgets111Base;
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
    }, function (_pragmateUi011Alert) {
      dependency_23 = _pragmateUi011Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_25 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/learning-modules', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/modal', dependency_14], ['pragmate-ui/icons', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/collapsible', dependency_17], ['pragmate-ui/toast', dependency_18], ['pragmate-ui/chips', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26]]);
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
        hash: 937055526,
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
        hash: 2447324560,
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
                store.deleteActivity(data.id);
              } catch (e) {
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
        hash: 1283030138,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivityList = ModalActivityList;
          var _react = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            }, texts.actions.manual), _react.default.createElement(_ui.AIButton, {
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
        hash: 3297649898,
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
        hash: 270105113,
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
            (0, _hooks2.useBinder)([store], () => {
              if (store.ready !== ready) setReady(store.ready);
              setView(store.view);
            });
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
        hash: 2337982114,
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
              }
            } = (0, _context.useModuleContext)();
            const title = store.model.title ?? moduleTexts.title;
            const onSave = event => store.save({
              title: event.target.value
            });
            const [picture, setPicture] = _react.default.useState(store.model.picture);
            (0, _hooks.useBinder)([store.model], () => setPicture(store.model.picture), 'image.generated');
            const onGenerate = notes => store.model.generatePicture(notes);
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
        hash: 618627290,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleView = ModuleView;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJ2aWV3IiwiY29uc3RydWN0b3IiLCJhdHRycyIsImlkIiwiZ2V0IiwiYWN0aXZpdHlJZCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwic2hvdyIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJfZnJhbWVyTW90aW9uIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0Iiwic2V0SXRlbXMiLCJsZW5ndGgiLCJvblJlb3JkZXIiLCJyZW9yZGVyIiwiRnJhZ21lbnQiLCJGb3JtIiwiUmVvcmRlciIsIkdyb3VwIiwiYXMiLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIl9yb3V0aW5nIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmluZCIsIml0ZW0iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiX3Byb3BlcnR5IiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwiZGF0YSIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIkl0ZW0iLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJBcnJheSIsImlzQXJyYXkiLCJDcmVhdGVBY3Rpdml0eUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwidXNlQ29udGV4dCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX3VpIiwiX2NvbnRleHQyIiwiTW9kYWxBY3Rpdml0eUxpc3QiLCJzZXRWaWV3IiwibmF2aWdhdGUiLCJvbkFJIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfdmFsaWRhdGlvbiIsIl9zdWdnZXN0aW9ucyIsInNldEFjdGl2aXR5IiwiaGFuZGxlT25DbG9zZSIsIlZJRVdTIiwibGlzdCIsImFpIiwiTW9kYWxBY3Rpdml0eVN1Z2dlc3Rpb25zIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJDb250cm9sIiwiUHJvdmlkZXIiLCJNb2RhbCIsIm5vdGVzIiwic2V0Tm90ZXMiLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJzZXRUaW1lb3V0IiwicmVmaW5lIiwiZGVzY3JpcHRpb24yIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwicmVmaW5pbmdBY3Rpdml0eSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfY29uZmlnIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX21vZHVsZTIiLCJfaG9va3MyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnbG9iYWxUaGlzIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwidGFyZ2V0IiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwib25HZW5lcmF0ZSIsImdlbmVyYXRlUGljdHVyZSIsIkNvdmVySW1hZ2UiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIlB1Ymxpc2hNb2R1bGUiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RELElBQUFTLGdCQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFNLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsSUFBSUUsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDSixLQUFLLENBQUNLLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQ0MsYUFBYTtZQUNwRTtZQUNBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPVCxRQUFBLENBQUFJLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDTyxPQUFPLEVBQUVDLEtBQUssSUFBSSxFQUFFO1lBQ2hEO1lBRUEsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPZCxnQkFBQSxDQUFBZSxhQUFhO1lBQ3JCO1lBRUEsQ0FBQUMsWUFBYTtZQUNiLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBQ0EsSUFBSUEsWUFBWUEsQ0FBQ0MsS0FBSztjQUNyQixJQUFJLENBQUMsQ0FBQUQsWUFBYSxHQUFHQyxLQUFLO2NBQzFCLElBQUksQ0FBQ0MsT0FBTyxDQUFDLG1CQUFtQixDQUFDO1lBQ2xDO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBSCxZQUFhLEdBQUcsVUFBVSxHQUFHLFFBQVE7WUFDcEQ7WUFFQUksWUFBWUMsS0FBSztjQUNoQixLQUFLLEVBQUU7Y0FDUCxNQUFNQyxFQUFFLEdBQUdELEtBQUssQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQztjQUMxQixNQUFNQyxVQUFVLEdBQUdILEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFlBQVksQ0FBQztjQUUxQyxJQUFJLENBQUNELEVBQUUsRUFBRTtnQkFDUixNQUFNLElBQUlHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQzs7Y0FFbEMsSUFBSSxDQUFDQyxJQUFJLENBQUNKLEVBQUUsRUFBRUUsVUFBVSxDQUFDO1lBQzFCO1lBQ0FHLEtBQUtBLENBQUE7Y0FDSixJQUFJLENBQUMsQ0FBQXZCLEtBQU0sQ0FBQ3dCLFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBdkIsS0FBTSxHQUFHeUIsU0FBUztjQUN2QixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUEsTUFBTUosSUFBSUEsQ0FBQ0osRUFBRSxFQUFFRSxVQUFVO2NBQ3hCLElBQUk7Z0JBQ0gsTUFBTU8sS0FBSyxHQUFHVCxFQUFFLEtBQUssS0FBSyxHQUFHO2tCQUFFVSxJQUFJLEVBQUU7Z0JBQU8sQ0FBRSxHQUFHO2tCQUFFVixFQUFFO2tCQUFFVSxJQUFJLEVBQUU7Z0JBQU8sQ0FBRTtnQkFFdEUsSUFBSVYsRUFBRSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQWxCLEtBQU0sRUFBRSxJQUFJLENBQUN1QixLQUFLLEVBQUU7Z0JBRTdDLElBQUksSUFBSSxDQUFDdkIsS0FBSyxJQUFJLElBQUksQ0FBQ0EsS0FBSyxDQUFDa0IsRUFBRSxLQUFLQSxFQUFFLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxDQUFBbEIsS0FBTSxHQUFHLE1BQU1KLGdCQUFBLENBQUFpQyxjQUFjLENBQUNWLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDO2dCQUU3QyxJQUFJUCxVQUFVLEVBQUU7a0JBQ2YsSUFBSSxDQUFDLENBQUFSLFlBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDd0IsVUFBVSxDQUFDTSxHQUFHLENBQUNYLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDOztnQkFFaEU7Z0JBQ0EsSUFBSSxDQUFDTSxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxjQUFjQSxDQUFDaEIsRUFBRTtjQUN0QixJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ3dCLFVBQVUsQ0FBQ1csTUFBTSxDQUFDakIsRUFBRSxDQUFDO2NBQ2pDLE1BQU0sSUFBSSxDQUFDLENBQUFsQixLQUFNLENBQUNvQyxTQUFTLEVBQUU7Y0FDN0IsSUFBSSxDQUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU11QixJQUFJQSxDQUFDVixLQUFNO2NBQ2hCLElBQUksQ0FBQ1csUUFBUSxHQUFHLElBQUk7Y0FDcEIsTUFBTSxJQUFJLENBQUN0QyxLQUFLLENBQUNvQyxTQUFTLENBQUNULEtBQUssQ0FBQztjQUNqQyxJQUFJLENBQUNXLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUF0QyxLQUFNO1lBQ25CO1lBRUEsTUFBTXVDLGNBQWNBLENBQUNDLFlBQVk7Y0FDaEMsSUFBSTtnQkFDSCxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN6QyxLQUFLLENBQUN3QixVQUFVLENBQUNrQixHQUFHLENBQUNGLFlBQVksQ0FBQ3RCLEVBQUUsQ0FBQztnQkFDakUsT0FBT3VCLFFBQVE7ZUFDZixDQUFDLE9BQU9WLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFDQSxNQUFNWSxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNMLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUM1QyxLQUFLLENBQUMyQyxPQUFPLEVBQUU7ZUFDM0MsQ0FBQyxPQUFPWixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0EzQyxPQUFBLENBQUFKLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6R0QsSUFBQXNELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsTUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxXQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUVNLFNBQVVrRSxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJILFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDekIsQ0FBQztZQUVELE9BQ0NSLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q2QsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUNTLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQ3FDLEtBQUssQ0FBTSxFQUN4Q2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGNBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNYLFdBQUEsQ0FBQWUsTUFBTTtjQUFDQyxPQUFPLEVBQUMsTUFBTTtjQUFDQyxJQUFJLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUVSO1lBQVcsR0FDcEROLEtBQUssQ0FBQ1MsTUFBTSxDQUFDTSxPQUFPLENBQUNDLFdBQVcsQ0FDekIsQ0FDSixDQUNFLEVBQ1R0QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDWixNQUFBLENBQUFzQixLQUFLLFFBQ0x2QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUNTLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQzZDLEtBQUssQ0FBQ1IsS0FBSyxDQUFNLEVBQzlDaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsZUFBT1AsS0FBSyxDQUFDUyxNQUFNLENBQUNwQyxVQUFVLENBQUM2QyxLQUFLLENBQUNDLElBQUksQ0FBUSxDQUMxQyxFQUNSekIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBdUIsY0FBYztjQUFDQyxJQUFJLEVBQUVuQixTQUFTO2NBQUVvQixPQUFPLEVBQUVoQjtZQUFXLEVBQUksQ0FDcEQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQVosTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUEyRixLQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE4RCxNQUFBLEdBQUE5RCxPQUFBO1VBQ0EsSUFBQTZGLGFBQUEsR0FBQTdGLE9BQUE7VUFDTSxTQUFVOEYsZ0JBQWdCQSxDQUFBO1lBQy9CLE1BQU07Y0FBRTNCLEtBQUs7Y0FBRTNCLFVBQVU7Y0FBRXVELFFBQVE7Y0FBRTFGO1lBQUssQ0FBRSxHQUFHLElBQUE0RCxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ2pFLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTSxDQUFDL0MsS0FBSyxFQUFFdUUsUUFBUSxDQUFDLEdBQUduQyxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDaEMsVUFBVSxDQUFDO1lBQ3BELE1BQU1pQyxXQUFXLEdBQUdBLENBQUEsS0FBTUgsWUFBWSxDQUFDa0IsSUFBSSxJQUFJLENBQUNBLElBQUksQ0FBQztZQUNyRCxJQUFJLENBQUNoRCxVQUFVLENBQUN5RCxNQUFNLEVBQUUsT0FBT3BDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNaLE1BQUEsQ0FBQUksaUJBQWlCLE9BQUc7WUFFcEQsTUFBTWdDLFNBQVMsR0FBR3pFLEtBQUssSUFBRztjQUN6QnVFLFFBQVEsQ0FBQ3ZFLEtBQUssQ0FBQztjQUNmcEIsS0FBSyxDQUFDVyxLQUFLLENBQUN3QixVQUFVLENBQUMyRCxPQUFPLENBQUMxRSxLQUFLLENBQUM7WUFDdEMsQ0FBQztZQUNELE9BQ0NvQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQTZCLFFBQUEsUUFDQ3ZDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRGQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDM0IsVUFBVSxDQUFDcUMsS0FBSyxDQUFNLEVBQ2pDaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBZSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxNQUFNO2NBQUNDLElBQUksRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBRVI7WUFBVyxHQUNwRE4sS0FBSyxDQUFDZSxPQUFPLENBQUN4QixHQUFHLENBQ1YsQ0FDRCxFQUVURyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDa0IsS0FBQSxDQUFBUyxJQUFJO2NBQUNOLFFBQVEsRUFBRUE7WUFBUSxHQUN2QmxDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNtQixhQUFBLENBQUFTLE9BQU8sQ0FBQ0MsS0FBSztjQUFDQyxFQUFFLEVBQUMsS0FBSztjQUFDckYsTUFBTSxFQUFFTSxLQUFLO2NBQUV5RSxTQUFTLEVBQUVBO1lBQVMsR0FDMURyQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ0IsS0FBQSxDQUFBZSxJQUFJO2NBQUM5QixTQUFTLEVBQUMsc0JBQXNCO2NBQUNoQyxLQUFLLEVBQUVxRCxRQUFRO2NBQUV2RSxLQUFLLEVBQUVBLEtBQUs7Y0FBRWlGLE9BQU8sRUFBRWYsS0FBQSxDQUFBZ0I7WUFBYyxFQUFJLENBQ2xGLENBQ1YsRUFDUDlDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNWLE1BQUEsQ0FBQXVCLGNBQWM7Y0FBQ0MsSUFBSSxFQUFFbkIsU0FBUztjQUFFb0IsT0FBTyxFQUFFaEI7WUFBVyxFQUFJLENBQ3ZEO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUFULE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBNkQsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBRU0sU0FBVTRHLFdBQVdBLENBQUM7WUFBRW5CLE9BQU87WUFBRW9CO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQ0wxQyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRWUsT0FBTyxFQUFFNEI7Y0FBVztZQUFFLENBQy9CLEdBQUcsSUFBQTdDLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTSxDQUFDZCxRQUFRLEVBQUV5RCxXQUFXLENBQUMsR0FBR2xELE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1TLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDMUIsSUFBSTtnQkFDSDhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1GLFNBQVMsRUFBRTtnQkFDakJFLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaEUsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QwQyxPQUFPLEVBQUU7O1lBRVgsQ0FBQztZQUNELE9BQ0M1QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDVixNQUFBLENBQUFnRCxZQUFZO2NBQ1pILFNBQVMsRUFBRTVCLE9BQU87Y0FDbEJnQyxRQUFRLEVBQUV4QixPQUFPO2NBQ2pCUCxPQUFPLEVBQUU7Z0JBQ1JnQyxPQUFPLEVBQUU7a0JBQ1JuQyxPQUFPLEVBQUUsU0FBUztrQkFDbEJvQyxLQUFLLEVBQUVMLFdBQVcsQ0FBQ0k7aUJBQ25CO2dCQUNERSxNQUFNLEVBQUU7a0JBQUVELEtBQUssRUFBRUwsV0FBVyxDQUFDTSxNQUFNO2tCQUFFckMsT0FBTyxFQUFFLFNBQVM7a0JBQUVzQyxRQUFRLEVBQUU7Z0JBQUk7ZUFDdkU7Y0FDRDdCLElBQUk7Y0FDSlgsS0FBSyxFQUFFVixLQUFLLENBQUMzQixVQUFVLENBQUM4RSxNQUFNLENBQUN6QyxLQUFLO2NBQ3BDUyxJQUFJLEVBQUVuQixLQUFLLENBQUMzQixVQUFVLENBQUM4RSxNQUFNLENBQUNDO1lBQVEsRUFDckM7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTFELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUF3SCxNQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXlILE9BQUEsR0FBQXpILE9BQUE7VUFDQSxJQUFBMEgsWUFBQSxHQUFBMUgsT0FBQTtVQUdBLElBQUEySCxRQUFBLEdBQUEzSCxPQUFBO1VBQ00sU0FBVTRILGtCQUFrQkEsQ0FBQztZQUFFQyxlQUFlO1lBQUVwRTtVQUFRLENBQUU7WUFDL0QsTUFBTTtjQUNMVSxLQUFLLEVBQUU7Z0JBQUVlLE9BQU87Z0JBQUUxQyxVQUFVLEVBQUUyQjtjQUFLLENBQUU7Y0FDckM5RDtZQUFLLENBQ0wsR0FBRyxJQUFBNEQsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNMEQsSUFBSSxHQUFHQyxLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0EzSCxLQUFLLENBQUN1QixZQUFZLEdBQUd2QixLQUFLLENBQUNXLEtBQUssQ0FBQ3dCLFVBQVUsQ0FBQ2YsS0FBSyxDQUFDd0csSUFBSSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ2hHLEVBQUUsS0FBS3VCLFFBQVEsQ0FBQ3ZCLEVBQUUsQ0FBQztjQUV2RnlGLFFBQUEsQ0FBQVEsT0FBTyxDQUFDQyxTQUFTLENBQUMsMEJBQTBCL0gsS0FBSyxDQUFDVyxLQUFLLENBQUNrQixFQUFFLGVBQWV1QixRQUFRLENBQUN2QixFQUFFLEVBQUUsQ0FBQztZQUN4RixDQUFDO1lBRUQsTUFBTW1HLE1BQU0sR0FBRywrQkFBK0I1RSxRQUFRLENBQUNiLElBQUksRUFBRTtZQUM3RCxNQUFNMEYsUUFBUSxHQUFHLDBCQUEwQjdFLFFBQVEsQ0FBQzhFLEtBQUssRUFBRTtZQUMzRCxNQUFNQyxRQUFRLEdBQUdULEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJILGVBQWUsRUFBRTtZQUNsQixDQUFDO1lBRUQsT0FDQ2hFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNnRCxZQUFBLENBQUFlLGlCQUFpQixRQUNqQjVFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUF3RCxHQUN6RWQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFDLEdBQ25EZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDOEMsTUFBQSxDQUFBa0IsSUFBSTtjQUFDMUQsSUFBSSxFQUFDLE1BQU07Y0FBQ0wsU0FBUyxFQUFDO1lBQW1CLEVBQUcsRUFDbERkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVNDLFNBQVMsRUFBRTBEO1lBQU0sR0FDekJ4RSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDOEMsTUFBQSxDQUFBa0IsSUFBSTtjQUFDMUQsSUFBSSxFQUFFeUMsT0FBQSxDQUFBa0IsS0FBSyxDQUFDbEYsUUFBUSxDQUFDYixJQUFJO1lBQUMsRUFBSSxDQUMzQixFQUNWaUIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQTRELEdBQzFFZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBZ0IsR0FDbENkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQU1DLFNBQVMsRUFBQztZQUFnQixHQUFFUixLQUFLLENBQUN5RSxLQUFLLENBQUNuRixRQUFRLENBQUNiLElBQUksQ0FBQyxDQUFRLEVBQ3BFaUIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS2pCLFFBQVEsQ0FBQ29CLEtBQUssQ0FBTSxDQUNoQixDQUNMLENBQ0QsRUFDTmhCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFzRCxHQUNwRWQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFFMkQ7WUFBUSxHQUFHbkUsS0FBSyxDQUFDMEUsTUFBTSxDQUFDcEYsUUFBUSxDQUFDOEUsS0FBSyxDQUFDLENBQU8sRUFDOUQxRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDOEMsTUFBQSxDQUFBc0IsVUFBVTtjQUFDakUsS0FBSyxFQUFFSyxPQUFPLENBQUM0QyxJQUFJO2NBQUU5QyxJQUFJLEVBQUMsTUFBTTtjQUFDTCxTQUFTLEVBQUMsUUFBUTtjQUFDTSxPQUFPLEVBQUU2QztZQUFJLEVBQUksRUFDakZqRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDOEMsTUFBQSxDQUFBc0IsVUFBVTtjQUFDakUsS0FBSyxFQUFFSyxPQUFPLENBQUNvQyxNQUFNO2NBQUV0QyxJQUFJLEVBQUMsUUFBUTtjQUFDTCxTQUFTLEVBQUMsUUFBUTtjQUFDTSxPQUFPLEVBQUV1RDtZQUFRLEVBQUksQ0FDcEYsQ0FDRSxDQUNVO1VBRXRCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25EQSxJQUFBM0UsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUErSSxNQUFBLEdBQUEvSSxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBMEgsWUFBQSxHQUFBMUgsT0FBQTtVQUNBLElBQUFnSixPQUFBLEdBQUFoSixPQUFBO1VBQ0EsSUFBQWlKLE1BQUEsR0FBQWpKLE9BQUE7VUFDQSxJQUFBa0osWUFBQSxHQUFBbEosT0FBQTtVQUNBLElBQUFtSixTQUFBLEdBQUFuSixPQUFBO1VBRUEsSUFBQTZGLGFBQUEsR0FBQTdGLE9BQUE7VUFDTSxTQUFVMkcsY0FBY0EsQ0FBQztZQUFFdUIsSUFBSTtZQUFFa0IsS0FBSztZQUFFekc7VUFBSyxDQUFFO1lBQ3BELE1BQU07Y0FDTHdCLEtBQUssRUFBRTtnQkFBRTNCLFVBQVUsRUFBRTJCO2NBQUssQ0FBRTtjQUM1QjlEO1lBQUssQ0FDTCxHQUFHLElBQUE0RCxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU1pRixHQUFHLEdBQUcsSUFBQXhGLE1BQUEsQ0FBQXlGLE1BQU0sRUFBQyxJQUFJLENBQUM7WUFDeEIsTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHM0YsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTWlGLFVBQVUsR0FBRzFCLEtBQUssSUFBRztjQUMxQixJQUFJO2dCQUNIc0IsR0FBRyxDQUFDSyxPQUFPLENBQUNDLFNBQVMsQ0FBQ2pHLEdBQUcsQ0FBQyxVQUFVLENBQUM7Z0JBQ3JDckQsS0FBSyxDQUFDNkMsY0FBYyxDQUFDMEcsSUFBSSxDQUFDMUgsRUFBRSxDQUFDO2VBQzdCLENBQUMsT0FBT2EsQ0FBQyxFQUFFO2dCQUNYa0csTUFBQSxDQUFBWSxLQUFLLENBQUM1RyxLQUFLLENBQUNGLENBQUMsQ0FBQytHLE9BQU8sQ0FBQzs7WUFFeEIsQ0FBQztZQUNELE1BQU1DLFlBQVksR0FBR0EsQ0FBQSxLQUFNUCxhQUFhLENBQUMsQ0FBQ0QsVUFBVSxDQUFDO1lBRXJELE9BQ0MxRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDbUIsYUFBQSxDQUFBUyxPQUFPLENBQUMwRCxJQUFJO2NBQUNuSSxLQUFLLEVBQUVxRyxJQUFJO2NBQUV2RCxTQUFTLEVBQUMsZ0JBQWdCO2NBQUM2QixFQUFFLEVBQUM7WUFBSyxHQUM3RDNDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNnRCxZQUFBLENBQUF1QyxvQkFBb0IsUUFDcEJwRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFTQyxTQUFTLEVBQUMsZUFBZTtjQUFDMEUsR0FBRyxFQUFFQTtZQUFHLEdBQzFDeEYsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3NFLE9BQUEsQ0FBQXBCLGtCQUFrQjtjQUFDQyxlQUFlLEVBQUVrQyxZQUFZO2NBQUV0RyxRQUFRLEVBQUV5RTtZQUFJLEVBQUksRUFDckVyRSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ0QsWUFBQSxDQUFBd0Msa0JBQWtCO2NBQUN2RixTQUFTLEVBQUM7WUFBd0IsR0FDckRkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUN5RSxTQUFBLENBQUFnQixRQUFRO2NBQUNDLElBQUksRUFBRWpHLEtBQUssQ0FBQ2tHLFNBQVM7Y0FBRXhJLEtBQUssRUFBRXFHLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQzBIO1lBQVMsRUFBSSxFQUNoRXhHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUN5RSxTQUFBLENBQUFnQixRQUFRO2NBQUNDLElBQUksRUFBRWpHLEtBQUssQ0FBQ21HLFdBQVc7Y0FBRXpJLEtBQUssRUFBRXFHLElBQUksQ0FBQ29DO1lBQVcsRUFBSSxFQUM5RHpHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNxRSxNQUFBLENBQUF3QixhQUFhO2NBQUMzSCxJQUFJLEVBQUVzRixJQUFJLENBQUN0RixJQUFJO2NBQUVELEtBQUssRUFBRXVGLElBQUksQ0FBQ3ZGO1lBQUssRUFBSSxDQUNqQyxDQUNaLEVBQ1Q0RyxVQUFVLElBQUkxRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDd0UsWUFBQSxDQUFBdEMsV0FBVztjQUFDQyxTQUFTLEVBQUU0QyxVQUFVO2NBQUVoRSxPQUFPLEVBQUVzRTtZQUFZLEVBQUksQ0FDdEQsQ0FDVDtVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0EsSUFBQWxHLE1BQUEsR0FBQTdELE9BQUE7VUFDTSxTQUFVbUssUUFBUUEsQ0FBQztZQUFFQyxJQUFJO1lBQUV2STtVQUFLLENBQUU7WUFDdkMsSUFBSSxDQUFDQSxLQUFLLEVBQUUsT0FBTyxJQUFJO1lBQ3ZCLE9BQ0NnQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxjQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLMEYsSUFBSSxDQUFNLEVBQ2Z2RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxlQUFPN0MsS0FBSyxDQUFRLENBQ2Y7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNUQSxJQUFBZ0MsTUFBQSxHQUFBN0QsT0FBQTtVQUVBLElBQUF3SyxNQUFBLEdBQUF4SyxPQUFBO1VBRUEsSUFBQTBGLEtBQUEsR0FBQTFGLE9BQUE7VUFDTSxTQUFVdUssYUFBYUEsQ0FBQztZQUFFNUgsS0FBSztZQUFFQztVQUFJLENBQUU7WUFDNUMsT0FDQ2lCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUFiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBNkIsUUFBQSxRQUNFekQsS0FBSyxDQUFDOEgsSUFBSSxJQUFJNUcsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQzhGLE1BQUEsQ0FBQUUsSUFBSTtjQUFDOUgsSUFBSSxFQUFDO1lBQVMsR0FBRUQsS0FBSyxDQUFDOEgsSUFBSSxDQUFRLEVBQ3ZENUcsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2dCLEtBQUEsQ0FBQWlGLFNBQVM7Y0FBQ2hJLEtBQUssRUFBRUEsS0FBSztjQUFFQyxJQUFJLEVBQUVBO1lBQUksRUFBSSxDQUNyQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1pBLElBQUFpQixNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQTBGLEtBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUVBLE1BQU1nSyxJQUFJLEdBQUdBLENBQUM7WUFBRUo7VUFBSSxDQUFFLEtBQUsvRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLa0YsSUFBSSxDQUFNO1VBQzFDLE1BQU1nQixZQUFZLEdBQUdBLENBQUM7WUFBRWhCLElBQUk7WUFBRVI7VUFBSyxDQUFFLEtBQUk7WUFDeEMsTUFBTTtjQUFFeUI7WUFBUSxDQUFFLEdBQUdqQixJQUFJO1lBQ3pCLE9BQU8vRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLbUcsUUFBUSxDQUFNO1VBQzNCLENBQUM7VUFFSyxTQUFVRixTQUFTQSxDQUFDO1lBQUUvSCxJQUFJO1lBQUVEO1VBQUssQ0FBRTtZQUN4QyxNQUFNO2NBQ0x3QixLQUFLLEVBQUU7Z0JBQUUzQixVQUFVLEVBQUUyQjtjQUFLO1lBQUUsQ0FDNUIsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXRCLE1BQU13RSxLQUFLLEdBQUc7Y0FDYixnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsRUFBRW9CLElBQUksQ0FBQztjQUNsQyxpQkFBaUIsRUFBRSxDQUFDLFdBQVcsRUFBRVksWUFBWSxDQUFDO2NBRTlDRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUVkLElBQUk7YUFDMUI7WUFFRCxJQUFJLENBQUNwQixLQUFLLENBQUNoRyxJQUFJLENBQUMsRUFBRSxPQUFPLElBQUk7WUFFN0IsTUFBTSxDQUFDbUksU0FBUyxFQUFFQyxXQUFXLENBQUMsR0FBR3BDLEtBQUssQ0FBQ2hHLElBQUksQ0FBQztZQUU1QyxNQUFNcUksU0FBUyxHQUNkckksSUFBSSxLQUFLLGdCQUFnQixHQUN0QkQsS0FBSyxDQUFDdUksY0FBYyxDQUFDLGFBQWEsQ0FBQyxHQUNsQ3ZJLEtBQUssQ0FBQ3dJLFdBQVcsR0FDakJ4SSxLQUFLLENBQUNvSSxTQUFTLENBQUMsR0FDakJwSSxLQUFLLENBQUNvSSxTQUFTLENBQUM7WUFDcEIsSUFBSSxDQUFDRSxTQUFTLElBQUtHLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixTQUFTLENBQUMsSUFBSSxDQUFDQSxTQUFTLENBQUNoRixNQUFPLEVBQUUsT0FBTyxJQUFJO1lBRTlFLE9BQ0NwQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQTZCLFFBQUEsUUFDQ3ZDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUtQLEtBQUssQ0FBQzRHLFNBQVMsQ0FBQyxDQUFNLEVBQzNCbEgsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2dCLEtBQUEsQ0FBQWUsSUFBSTtjQUFDOUIsU0FBUyxFQUFDLGdCQUFnQjtjQUFDbEQsS0FBSyxFQUFFd0osU0FBUztjQUFFdkUsT0FBTyxFQUFFc0U7WUFBVyxFQUFJLENBQ3pFO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUFuSCxNQUFBLEdBQUE3RCxPQUFBO1VBV08sTUFBTXNMLHFCQUFxQixHQUFBM0ssT0FBQSxDQUFBMksscUJBQUEsR0FBR3pILE1BQUEsQ0FBQVUsT0FBSyxDQUFDZ0gsYUFBYSxDQUFrQixFQUFxQixDQUFDO1VBQ3pGLE1BQU1DLHdCQUF3QixHQUFHQSxDQUFBLEtBQU0zSCxNQUFBLENBQUFVLE9BQUssQ0FBQ2tILFVBQVUsQ0FBQ0gscUJBQXFCLENBQUM7VUFBQzNLLE9BQUEsQ0FBQTZLLHdCQUFBLEdBQUFBLHdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1p0RixJQUFBM0gsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBRUEsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUgsT0FBQSxHQUFBekgsT0FBQTtVQUVPLE1BQU0wTCxxQkFBcUIsR0FBR0EsQ0FBQztZQUFFOUIsSUFBSTtZQUFFakgsS0FBSyxFQUFFO2NBQUVnSixRQUFRO2NBQUVDO1lBQVc7VUFBRSxDQUFFLEtBQUk7WUFDbkYsTUFBTTtjQUFFekg7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUVwQyxNQUFNYSxPQUFPLEdBQUc4QyxLQUFLLElBQUc7Y0FDdkI2RCxXQUFXLENBQUNoQyxJQUFJLENBQUM7WUFDbEIsQ0FBQztZQUNELE1BQU1pQyxHQUFHLEdBQUdqQyxJQUFJLENBQUMxSCxFQUFFLENBQUM0SixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNyQyxNQUFNQyxHQUFHLEdBQUcsc0NBQXNDRixHQUFHLEdBQUdqQyxJQUFJLENBQUMxSCxFQUFFLEtBQUt5SixRQUFRLEVBQUV6SixFQUFFLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNyRyxNQUFNOEMsSUFBSSxHQUFHd0MsTUFBQSxDQUFBbUIsS0FBSyxDQUFDa0QsR0FBRyxDQUFDO1lBRXZCLE1BQU1HLFFBQVEsR0FBRywrQkFBK0JwQyxJQUFJLENBQUMxSCxFQUFFLEVBQUU7WUFDekQsT0FDQzJCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUlDLFNBQVMsRUFBRW9ILEdBQUc7Y0FBRTlHLE9BQU8sRUFBRUE7WUFBTyxHQUNuQ3BCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBRXFIO1lBQVEsR0FDdkJuSSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDK0MsT0FBQSxDQUFBaUIsSUFBSTtjQUFDMUQsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixFQUNObkIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsY0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDM0IsVUFBVSxDQUFDb0csS0FBSyxDQUFDZ0IsSUFBSSxDQUFDMUgsRUFBRSxDQUFDLENBQU0sRUFDMUMyQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxlQUFPUCxLQUFLLENBQUMzQixVQUFVLENBQUN5SixnQkFBZ0IsQ0FBQ3JDLElBQUksQ0FBQzFILEVBQUUsQ0FBQyxDQUFRLENBQ3BELENBQ0Y7VUFFUCxDQUFDO1VBQUN2QixPQUFBLENBQUErSyxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkYsSUFBQTdILE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQWtNLEdBQUEsR0FBQWxNLE9BQUE7VUFDQSxJQUFBMkYsS0FBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUFtTSxTQUFBLEdBQUFuTSxPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFHTSxTQUFVb00saUJBQWlCQSxDQUFDO1lBQUUzRztVQUFPLENBQUU7WUFDNUMsTUFBTTtjQUFFcEYsS0FBSztjQUFFOEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNLENBQUN1SCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHL0gsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTTtjQUFFNkgsT0FBTztjQUFFQyxRQUFRO2NBQUUvSTtZQUFjLENBQUUsR0FBRyxJQUFBNEksU0FBQSxDQUFBWCx3QkFBd0IsR0FBRTtZQUV4RSxNQUFNekYsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixNQUFNdEMsUUFBUSxHQUFHLE1BQU1GLGNBQWMsQ0FBQ29JLFFBQVEsQ0FBQztjQUMvQ1csUUFBUSxDQUFDN0ksUUFBUSxDQUFDO1lBQ25CLENBQUM7WUFFRCxNQUFNOEksSUFBSSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN2QixNQUFNaEosY0FBYyxDQUFDb0ksUUFBUSxDQUFDO2NBRTlCVSxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztZQUNELE9BQ0N4SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxjQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUMzQixVQUFVLENBQUNnSyxXQUFXLENBQUMzSCxLQUFLLENBQU0sRUFDN0NoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ0IsS0FBQSxDQUFBZSxJQUFJO2NBQ0o5QixTQUFTLEVBQUMsc0JBQXNCO2NBQ2hDaEMsS0FBSyxFQUFFO2dCQUFFZ0osUUFBUTtnQkFBRUM7Y0FBVyxDQUFFO2NBQ2hDbkssS0FBSyxFQUFFcEIsS0FBSyxDQUFDVyxLQUFLLENBQUN3QixVQUFVLENBQUNvRyxLQUFLO2NBQ25DbEMsT0FBTyxFQUFFZixLQUFBLENBQUErRjtZQUFxQixFQUM3QixFQUNGN0gsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDWCxXQUFBLENBQUFlLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ3NDLFFBQVE7Y0FBQ3BDLE9BQU8sRUFBRWMsUUFBUTtjQUFFMEcsUUFBUSxFQUFFLENBQUNkO1lBQVEsR0FDdkV4SCxLQUFLLENBQUNlLE9BQU8sQ0FBQ3dILE1BQU0sQ0FDYixFQUNUN0ksTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3dILEdBQUEsQ0FBQVMsUUFBUTtjQUFDNUgsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFc0gsSUFBSTtjQUFFRSxRQUFRLEVBQUUsQ0FBQ2Q7WUFBUSxHQUM1RHhILEtBQUssQ0FBQ2UsT0FBTyxDQUFDMEgsUUFBUSxDQUNiLENBQ0gsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBNUksTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFQSxJQUFBNk0sV0FBQSxHQUFBN00sT0FBQTtVQUNBLElBQUEySCxRQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQTBGLEtBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBbU0sU0FBQSxHQUFBbk0sT0FBQTtVQUNBLElBQUE4TSxZQUFBLEdBQUE5TSxPQUFBO1VBRU0sU0FBVXVGLGNBQWNBLENBQUM7WUFBRUMsSUFBSTtZQUFFQztVQUFPLENBQUU7WUFDL0MsTUFBTTtjQUFFcEYsS0FBSztjQUFFOEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUUzQyxNQUFNLENBQUNYLFFBQVEsRUFBRXNKLFdBQVcsQ0FBQyxHQUFHbEosTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDcEQsTUFBTSxDQUFDekMsSUFBSSxFQUFFc0ssT0FBTyxDQUFDLEdBQUd4SSxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUU5QyxJQUFJLENBQUNnQixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU1qQyxjQUFjLEdBQUcsTUFBTVgsSUFBSSxJQUFHO2NBQ25DLE1BQU1hLFFBQVEsR0FBUSxNQUFNcEQsS0FBSyxDQUFDa0QsY0FBYyxDQUFDWCxJQUFJLENBQUM7Y0FDdERtSyxXQUFXLENBQUN0SixRQUFRLENBQUM7Y0FDckIsT0FBT0EsUUFBUTtZQUNoQixDQUFDO1lBQ0QsTUFBTTZJLFFBQVEsR0FBRzdJLFFBQVEsSUFBRztjQUMzQixJQUFJLENBQUNBLFFBQVEsRUFBRTtnQkFDZFQsT0FBTyxDQUFDQyxLQUFLLENBQUMsb0JBQW9CLENBQUM7O2NBRXBDNUMsS0FBSyxDQUFDdUIsWUFBWSxHQUFHNkIsUUFBUTtjQUM3QmtFLFFBQUEsQ0FBQVEsT0FBTyxDQUFDQyxTQUFTLENBQUMsMEJBQTBCL0gsS0FBSyxDQUFDVyxLQUFLLENBQUNrQixFQUFFLGVBQWV1QixRQUFRLENBQUN2QixFQUFFLEVBQUUsQ0FBQztjQUN2RnVELE9BQU8sRUFBRTtZQUNWLENBQUM7WUFFRCxNQUFNdUgsYUFBYSxHQUFHQSxDQUFBLEtBQUs7Y0FDMUJYLE9BQU8sQ0FBQyxNQUFNLENBQUM7Y0FDZjVHLE9BQU8sRUFBRTtZQUNWLENBQUM7WUFDRCxNQUFNd0gsS0FBSyxHQUFHO2NBQUVDLElBQUksRUFBRXhILEtBQUEsQ0FBQTBHLGlCQUFpQjtjQUFFZSxFQUFFLEVBQUVMLFlBQUEsQ0FBQU07WUFBd0IsQ0FBRTtZQUV2RSxJQUFJLENBQUMvTSxLQUFLLENBQUNXLEtBQUssQ0FBQ3FNLEtBQUssRUFBRSxPQUFPeEosTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ21JLFdBQUEsQ0FBQVMsZUFBZTtjQUFDN0gsT0FBTyxFQUFFdUg7WUFBYSxFQUFJO1lBQzFFLE1BQU1PLE9BQU8sR0FBR04sS0FBSyxDQUFDbEwsSUFBSSxDQUFDO1lBQzNCLE9BQ0M4QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDeUgsU0FBQSxDQUFBYixxQkFBcUIsQ0FBQ2tDLFFBQVE7Y0FBQzNMLEtBQUssRUFBRTtnQkFBRTRELE9BQU87Z0JBQUVoQyxRQUFRO2dCQUFFRixjQUFjO2dCQUFFd0osV0FBVztnQkFBRVQsUUFBUTtnQkFBRUQ7Y0FBTztZQUFFLEdBQzNHeEksTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBeUosS0FBSztjQUFDakksSUFBSTtjQUFDQyxPQUFPLEVBQUV1SDtZQUFhLEdBQ2pDbkosTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQzZJLE9BQU8sT0FBRyxDQUNKLENBQ3dCO1VBRW5DOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9DQSxJQUFBMUosTUFBQSxHQUFBN0QsT0FBQTtVQUVBLElBQUE0RixLQUFBLEdBQUE1RixPQUFBO1VBQ0EsSUFBQWtNLEdBQUEsR0FBQWxNLE9BQUE7VUFDQSxJQUFBK0QsV0FBQSxHQUFBL0QsT0FBQTtVQUVBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQW1NLFNBQUEsR0FBQW5NLE9BQUE7VUFFTSxTQUFVb04sd0JBQXdCQSxDQUFBO1lBQ3ZDLE1BQU07Y0FBRWpKO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFWCxRQUFRO2NBQUU2STtZQUFRLENBQUUsR0FBRyxJQUFBSCxTQUFBLENBQUFYLHdCQUF3QixHQUFFO1lBQ3pELE1BQU0sQ0FBQ2xJLFFBQVEsRUFBRXlELFdBQVcsQ0FBQyxHQUFHbEQsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDa0osS0FBSyxFQUFFQyxRQUFRLENBQUMsR0FBRzlKLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDLE1BQU1vSixNQUFNLEdBQUc7Y0FDZEMsUUFBUSxFQUFFOUYsS0FBSyxJQUFHO2dCQUNqQjRGLFFBQVEsQ0FBQzVGLEtBQUssQ0FBQytGLGFBQWEsQ0FBQ2pNLEtBQUssQ0FBQztjQUNwQyxDQUFDO2NBQ0RvRCxPQUFPLEVBQUUsTUFBTThDLEtBQUssSUFBRztnQkFDdEIsSUFBSTtrQkFDSGhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7a0JBRWpCLE1BQU10RCxRQUFRLENBQUNtSixRQUFRLENBQUNjLEtBQUssQ0FBQztrQkFDOUJwQixRQUFRLENBQUM3SSxRQUFRLENBQUM7aUJBQ2xCLENBQUMsT0FBT1YsQ0FBQyxFQUFFLEMsQ0FDWCxTQUFTO2tCQUNUZ0wsVUFBVSxDQUFDLE1BQUs7b0JBQ2ZoSCxXQUFXLENBQUMsS0FBSyxDQUFDO2tCQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDOztjQUVWO2FBQ0E7WUFFRCxPQUNDbEQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQWIsTUFBQSxDQUFBVSxPQUFBLENBQUE2QixRQUFBLFFBQ0N2QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDa0IsS0FBQSxDQUFBUyxJQUFJLFFBQ0p4QyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxpQkFDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDNkosTUFBTSxDQUFDbkosS0FBSyxDQUFNLEVBQzdCaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsWUFBSVAsS0FBSyxDQUFDNkosTUFBTSxDQUFDMUQsV0FBVyxDQUFLLEVBQ2pDekcsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsWUFBSVAsS0FBSyxDQUFDNkosTUFBTSxDQUFDQyxZQUFZLENBQUssQ0FDMUIsRUFDVHBLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNrQixLQUFBLENBQUFzSSxRQUFRO2NBQ1IvRyxLQUFLLEVBQUVoRCxLQUFLLENBQUM2SixNQUFNLENBQUNHLFFBQVEsQ0FBQ2hILEtBQUs7Y0FDbENpRCxJQUFJLEVBQUMsY0FBYztjQUNuQnZJLEtBQUssRUFBRTZMLEtBQUs7Y0FDWkcsUUFBUSxFQUFFRCxNQUFNLENBQUNDLFFBQVE7Y0FDekJPLFdBQVcsRUFBRWpLLEtBQUssQ0FBQzZKLE1BQU0sQ0FBQ0csUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFDUHZLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRGQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBZSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxTQUFTO2NBQUNFLE9BQU8sRUFBRTJJLE1BQU0sQ0FBQzNJO1lBQU8sR0FDL0NkLEtBQUssQ0FBQ2UsT0FBTyxDQUFDMEgsUUFBUSxDQUNmLENBQ0QsRUFDVC9JLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUN3SCxHQUFBLENBQUFtQyxnQkFBZ0I7Y0FBQy9LLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ08sTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3dILEdBQUEsQ0FBQW9DLGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ0MsT0FBTyxFQUFFckssS0FBSyxDQUFDc0s7WUFBZ0IsRUFBSSxDQUM5QyxDQUNqQjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVEQSxJQUFBekssTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFTSxTQUFVc04sZUFBZUEsQ0FBQztZQUFFN0g7VUFBTyxDQUFFO1lBQzFDLE1BQU07Y0FBRXBGLEtBQUs7Y0FBRThEO1lBQUssQ0FBRSxHQUFHLElBQUFGLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFM0MsT0FDQ1AsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBMEssVUFBVTtjQUFDbEosSUFBSTtjQUFDQyxPQUFPLEVBQUVBO1lBQU8sR0FDaEM1QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxjQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUMzQixVQUFVLENBQUNnSyxXQUFXLENBQUNtQyxlQUFlLENBQU0sRUFDdkQ5SyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxZQUFJUCxLQUFLLENBQUMzQixVQUFVLENBQUNnSyxXQUFXLENBQUNvQyxVQUFVLENBQUssQ0FDM0MsQ0FDTTtVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2ZBLElBQUFDLEtBQUEsR0FBQTdPLE9BQUE7VUFDQSxJQUFBOE8sT0FBQSxHQUFBOU8sT0FBQTtVQUNBLElBQUErTyxTQUFBLEdBQUEvTyxPQUFBO1VBRU87VUFBVSxTQUNSZ1AsWUFBWUEsQ0FBQztZQUFFN0ssS0FBSztZQUFFOUQ7VUFBSyxDQUFFO1lBQ3JDLE9BQ0N3TyxLQUFBLENBQUFuSyxhQUFBLENBQUNxSyxTQUFBLENBQUFFLGtCQUFrQjtjQUNsQkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ0osT0FBQSxDQUFBdkssT0FBTSxDQUFDNEssTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUNqTCxLQUFLLENBQUMrSyxVQUFVLENBQUNHLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQ2xMLEtBQUssQ0FBQytLLFVBQVUsQ0FBQ0ksVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUNqQztjQUNEalAsS0FBSyxFQUFFQSxLQUFLO2NBQ1pvRCxRQUFRLEVBQUVwRCxLQUFLLENBQUN1QjtZQUFZLEVBQzNCO1VBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakJBLElBQUFpQyxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQXVQLE1BQUEsR0FBQXZQLE9BQUE7VUFFTSxTQUFVd1AsYUFBYUEsQ0FBQztZQUFFckwsS0FBSztZQUFFbEI7VUFBSyxDQUFpRDtZQUM1RjtZQUVBLE9BQU9ZLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUM2SyxNQUFBLENBQUFFLEtBQUs7Y0FBQzFLLE9BQU8sRUFBQztZQUFPLEdBQUVaLEtBQUssQ0FBQ2xCLEtBQUssQ0FBQyxDQUFTO1VBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFZLE1BQUEsR0FBQTdELE9BQUE7VUFVTyxNQUFNMFAsYUFBYSxHQUFBL08sT0FBQSxDQUFBK08sYUFBQSxHQUFHN0wsTUFBQSxDQUFBVSxPQUFLLENBQUNnSCxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNbkgsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTVAsTUFBQSxDQUFBVSxPQUFLLENBQUNrSCxVQUFVLENBQUNpRSxhQUFhLENBQUM7VUFBQy9PLE9BQUEsQ0FBQXlELGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1h0RSxJQUFBeUssS0FBQSxHQUFBN08sT0FBQTtVQUNBLElBQUEyUCxNQUFBLEdBQUEzUCxPQUFBO1VBQ0EsSUFBQTRQLGVBQUEsR0FBQTVQLE9BQUE7VUFHQSxJQUFBNlAsUUFBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUErRCxXQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQThQLE9BQUEsR0FBQTlQLE9BQUE7VUFDQSxJQUFBK08sU0FBQSxHQUFBL08sT0FBQTtVQUVPO1VBQVUsU0FDUlUsSUFBSUEsQ0FBQ3FQLEtBQUs7WUFDbEIsTUFBTTtjQUFFMVA7WUFBSyxDQUFFLEdBQTRCMFAsS0FBSztZQUNoRCxNQUFNLENBQUNDLFVBQVUsRUFBRTdMLEtBQUssQ0FBQyxHQUFHLElBQUF3TCxNQUFBLENBQUFNLFFBQVEsRUFBQ0wsZUFBQSxDQUFBaEwsTUFBTSxDQUFDc0wsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3hOLEtBQUssRUFBRXlOLFFBQVEsQ0FBQyxHQUFHdEIsS0FBSyxDQUFDckssUUFBUSxDQUFDbkUsS0FBSyxDQUFDcUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ1gsSUFBSSxFQUFFc0ssT0FBTyxDQUFDLEdBQUd3QyxLQUFLLENBQUNySyxRQUFRLENBQUNuRSxLQUFLLENBQUMwQixJQUFJLENBQUM7WUFDbEQsSUFBQStOLE9BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUMvUCxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCLElBQUlBLEtBQUssQ0FBQ3FDLEtBQUssS0FBS0EsS0FBSyxFQUFFeU4sUUFBUSxDQUFDOVAsS0FBSyxDQUFDcUMsS0FBSyxDQUFDO2NBQ2hEMkosT0FBTyxDQUFDaE0sS0FBSyxDQUFDMEIsSUFBSSxDQUFDO1lBQ3BCLENBQUMsQ0FBQztZQUNGLElBQUErTixPQUFBLENBQUFNLFNBQVMsRUFBQyxDQUFDL1AsS0FBSyxDQUFDLEVBQUUsTUFBTWdNLE9BQU8sQ0FBQ2hNLEtBQUssQ0FBQzBCLElBQUksQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1lBQ2xFLElBQUksQ0FBQ2lPLFVBQVUsSUFBSSxDQUFDM1AsS0FBSyxDQUFDcUMsS0FBSyxFQUFFLE9BQU9tTSxLQUFBLENBQUFuSyxhQUFBLENBQUNYLFdBQUEsQ0FBQXNNLE9BQU87Y0FBQ0MsTUFBTTtZQUFBLEVBQUc7WUFFMUQsSUFBSXZPLElBQUksS0FBSyxVQUFVLEVBQUU7Y0FDeEIsT0FBTzhNLEtBQUEsQ0FBQW5LLGFBQUEsQ0FBQ3FLLFNBQUEsQ0FBQUMsWUFBWTtnQkFBQSxHQUFLZSxLQUFLO2dCQUFFNUwsS0FBSyxFQUFFQTtjQUFLLEVBQUk7O1lBR2pELE9BQU8wSyxLQUFBLENBQUFuSyxhQUFBLENBQUNtTCxRQUFBLENBQUFVLFVBQVU7Y0FBQSxHQUFLUjtZQUFLLEVBQUk7VUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFsTSxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQXdILE1BQUEsR0FBQXhILE9BQUE7VUFXTyxNQUFNd1EsZUFBZSxHQUFxQkEsQ0FBQztZQUNqREMsTUFBTTtZQUNOQyxRQUFRLEVBQUVuRCxPQUFPLEdBQUcsS0FBSztZQUN6QjVJLFNBQVM7WUFDVGdNLFFBQVE7WUFDUnZHLElBQUk7WUFDSndHO1VBQU0sQ0FDTixLQUFJO1lBQ0osTUFBTSxDQUFDQyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHLElBQUFqTixNQUFBLENBQUFXLFFBQVEsRUFBQyxLQUFLLENBQUM7WUFDbkQsTUFBTSxDQUFDZ0ssT0FBTyxFQUFFdUMsVUFBVSxDQUFDLEdBQUcsSUFBQWxOLE1BQUEsQ0FBQVcsUUFBUSxFQUFDLE9BQU9tTSxRQUFRLEtBQUssUUFBUSxHQUFHQSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BGLE1BQU1LLFVBQVUsR0FBR25OLE1BQUEsQ0FBQVUsT0FBSyxDQUFDK0UsTUFBTSxDQUFpQixJQUFJLENBQUM7WUFDckQ7WUFDQSxNQUFNMkgsVUFBVSxHQUFHQSxDQUFBLEtBQUs7Y0FDdkJILGFBQWEsQ0FBQyxDQUFDRCxVQUFVLENBQUM7Y0FFMUI5QyxVQUFVLENBQUMsTUFBSztnQkFDZixNQUFNbUQsRUFBRSxHQUFHRixVQUFVLENBQUN0SCxPQUFPO2dCQUM3QixJQUFJd0gsRUFBRSxFQUFFO2tCQUNQLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxXQUFXLEVBQUU7a0JBQ3BDLE1BQU1DLEdBQUcsR0FBR0MsVUFBVSxDQUFDQyxZQUFZLEVBQUU7a0JBQ3JDTCxLQUFLLENBQUNNLGtCQUFrQixDQUFDUCxFQUFFLENBQUM7a0JBQzVCQyxLQUFLLENBQUNPLFFBQVEsQ0FBQyxLQUFLLENBQUM7a0JBQ3JCSixHQUFHLEVBQUVLLGVBQWUsRUFBRTtrQkFDdEJMLEdBQUcsRUFBRU0sUUFBUSxDQUFDVCxLQUFLLENBQUM7a0JBQ3BCRCxFQUFFLENBQUNXLEtBQUssRUFBRTs7Y0FFWixDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQUVELE1BQU1DLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsTUFBTXJCLE1BQU0sQ0FBQztnQkFBRSxDQUFDckcsSUFBSSxHQUFHNEcsVUFBVSxDQUFDdEgsT0FBTyxFQUFFcUk7Y0FBVyxDQUFFLENBQUM7Y0FDekRkLFVBQVUsRUFBRTtZQUNiLENBQUM7WUFDRCxNQUFNbEYsR0FBRyxHQUFHLHVCQUF1QnBILFNBQVMsR0FBRyxJQUFJQSxTQUFTLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDckUsTUFBTUssSUFBSSxHQUFHNkwsVUFBVSxHQUFHLE1BQU0sR0FBRyxNQUFNO1lBQ3pDLE1BQU1tQixXQUFXLEdBQUduQixVQUFVLEdBQUcsdUJBQXVCLEdBQUcsRUFBRTtZQUU3RCxPQUNDaE4sTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFFb0g7WUFBRyxHQUNsQmxJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUM2SSxPQUFPO2NBQ1BsRSxHQUFHLEVBQUUySCxVQUFVO2NBQ2ZyTSxTQUFTLEVBQUVxTixXQUFXO2NBQ3RCQyxlQUFlLEVBQUVwQixVQUFVO2NBQzNCcUIsOEJBQThCLEVBQUU7WUFBSSxHQUVuQzFELE9BQU8sQ0FDQyxFQUNWM0ssTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQStCLEdBQzVDa00sVUFBVSxJQUFJaE4sTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQzhDLE1BQUEsQ0FBQXNCLFVBQVU7Y0FBQzlELElBQUksRUFBQyxXQUFXO2NBQUNDLE9BQU8sRUFBRWdNO1lBQVUsRUFBSSxFQUNuRXBOLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUM4QyxNQUFBLENBQUFzQixVQUFVO2NBQUM5RCxJQUFJLEVBQUVBLElBQUk7Y0FBRUMsT0FBTyxFQUFFNk07WUFBVSxFQUFJLENBQzFDLENBQ0Q7VUFFUixDQUFDO1VBQUNuUixPQUFBLENBQUE2UCxlQUFBLEdBQUFBLGVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEVGLElBQUEzTSxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBa00sR0FBQSxHQUFBbE0sT0FBQTtVQUVNLFNBQVVtUyxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0xoTyxLQUFLLEVBQUU7Z0JBQUVTLE1BQU0sRUFBRXdOO2NBQVcsQ0FBRTtjQUM5Qi9SO1lBQUssQ0FDTCxHQUFHLElBQUE0RCxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXRCLE1BQU1vSyxPQUFPLEdBQUduTyxLQUFLLENBQUNXLEtBQUssQ0FBQ3NKLFdBQVcsSUFBSThILFdBQVcsQ0FBQzlILFdBQVc7WUFDbEUsTUFBTXNHLE1BQU0sR0FBRyxNQUFBQSxDQUFPO2NBQUV5QjtZQUFNLENBQUUsS0FBSTtjQUNuQ2hTLEtBQUssQ0FBQ2dELElBQUksQ0FBQztnQkFBRSxDQUFDZ1AsTUFBTSxDQUFDakksSUFBSSxHQUFHaUksTUFBTSxDQUFDeFE7Y0FBSyxDQUFFLENBQUM7WUFDNUMsQ0FBQztZQUVELE9BQ0NnQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUswTixXQUFXLENBQUM5SCxXQUFXLENBQU0sRUFDbEN6RyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDd0gsR0FBQSxDQUFBc0UsZUFBZTtjQUFDcEcsSUFBSSxFQUFDLGFBQWE7Y0FBQ3FHLE1BQU0sRUFBRUcsTUFBTTtjQUFFRixRQUFRLEVBQUM7WUFBRyxHQUM5RGxDLE9BQU8sQ0FDUyxDQUNiO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEJBLElBQUF0QyxHQUFBLEdBQUFsTSxPQUFBO1VBRUEsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFzUyxRQUFBLEdBQUF0UyxPQUFBO1VBQ0EsSUFBQXVTLFdBQUEsR0FBQXZTLE9BQUE7VUFDQSxJQUFBMlAsTUFBQSxHQUFBM1AsT0FBQTtVQUVPO1VBQVUsU0FBVXdTLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUNMck8sS0FBSztjQUNMOUQsS0FBSztjQUNMOEQsS0FBSyxFQUFFO2dCQUFFUyxNQUFNLEVBQUV3TjtjQUFXO1lBQUUsQ0FDOUIsR0FBRyxJQUFBbk8sUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNUyxLQUFLLEdBQUd4RSxLQUFLLENBQUNXLEtBQUssQ0FBQzZELEtBQUssSUFBSXVOLFdBQVcsQ0FBQ3ZOLEtBQUs7WUFDcEQsTUFBTTRMLE1BQU0sR0FBRzFJLEtBQUssSUFBSTFILEtBQUssQ0FBQ2dELElBQUksQ0FBQztjQUFFd0IsS0FBSyxFQUFFa0QsS0FBSyxDQUFDc0ssTUFBTSxDQUFDeFE7WUFBSyxDQUFFLENBQUM7WUFDakUsTUFBTSxDQUFDNFEsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzdPLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUNuRSxLQUFLLENBQUNXLEtBQUssQ0FBQ3lSLE9BQU8sQ0FBQztZQUNqRSxJQUFBOUMsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQy9QLEtBQUssQ0FBQ1csS0FBSyxDQUFDLEVBQUUsTUFBTTBSLFVBQVUsQ0FBQ3JTLEtBQUssQ0FBQ1csS0FBSyxDQUFDeVIsT0FBTyxDQUFDLEVBQUUsaUJBQWlCLENBQUM7WUFDbEYsTUFBTUUsVUFBVSxHQUFHakYsS0FBSyxJQUFJck4sS0FBSyxDQUFDVyxLQUFLLENBQUM0UixlQUFlLENBQUNsRixLQUFLLENBQUM7WUFDOUQsT0FDQzdKLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGtCQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBNEQsR0FDN0VkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVNDLFNBQVMsRUFBQztZQUE2QyxHQUMvRGQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQzZOLFdBQUEsQ0FBQU0sVUFBVTtjQUNWaE8sS0FBSyxFQUFFVixLQUFLLENBQUNzTyxPQUFPLENBQUM1TixLQUFLO2NBQzFCeUYsV0FBVyxFQUFFbkcsS0FBSyxDQUFDc08sT0FBTyxDQUFDbkksV0FBVztjQUN0Q3dJLFdBQVcsRUFBRXpTLEtBQUssQ0FBQ1csS0FBSyxDQUFDK1Isa0JBQWtCO2NBQzNDTixPQUFPLEVBQUVBLE9BQU87Y0FDaEJFLFVBQVUsRUFBRUE7WUFBVSxFQUNyQixFQUNGOU8sTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3dILEdBQUEsQ0FBQXNFLGVBQWU7Y0FBQ3BHLElBQUksRUFBQyxPQUFPO2NBQUNzRyxRQUFRLEVBQUMsSUFBSTtjQUFDRCxNQUFNLEVBQUVBO1lBQU0sR0FDeEQ1TCxLQUFLLENBQ1csRUFFbEJoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDNE4sUUFBQSxDQUFBVSxhQUFhLE9BQUcsQ0FDUixDQUNGLENBQ0E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2Q0EsSUFBQW5FLEtBQUEsR0FBQTdPLE9BQUE7VUFDQSxJQUFBMlAsTUFBQSxHQUFBM1AsT0FBQTtVQUNBLElBQUFrTSxHQUFBLEdBQUFsTSxPQUFBO1VBRUEsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBOFAsT0FBQSxHQUFBOVAsT0FBQTtVQUNBLElBQUE0UCxlQUFBLEdBQUE1UCxPQUFBO1VBQ0EsSUFBQWdKLE9BQUEsR0FBQWhKLE9BQUE7VUFFQSxJQUFBaVQsV0FBQSxHQUFBalQsT0FBQTtVQUVPO1VBQVUsU0FDUnVRLFVBQVVBLENBQUNSLEtBQUs7WUFDeEIsTUFBTTtjQUFFMVA7WUFBSyxDQUFFLEdBQTRCMFAsS0FBSztZQUVoRCxNQUFNLENBQUNDLFVBQVUsRUFBRTdMLEtBQUssQ0FBQyxHQUFHLElBQUEyTCxPQUFBLENBQUFHLFFBQVEsRUFBQ0wsZUFBQSxDQUFBaEwsTUFBTSxDQUFDc0wsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzVNLFFBQVEsRUFBRXlELFdBQVcsQ0FBQyxHQUFHOEgsS0FBSyxDQUFDckssUUFBUSxDQUFDbkUsS0FBSyxDQUFDaUQsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQzRQLFdBQVcsQ0FBQyxHQUFHckUsS0FBSyxDQUFDckssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLENBQUNoQyxVQUFVLEVBQUUyUSxhQUFhLENBQUMsR0FBR3RFLEtBQUssQ0FBQ3JLLFFBQVEsQ0FBQ25FLEtBQUssQ0FBQ1csS0FBSyxFQUFFd0IsVUFBVSxFQUFFZixLQUFLLENBQUM7WUFDbEYsTUFBTSxHQUFHMlIsa0JBQWtCLENBQUMsR0FBR3ZFLEtBQUssQ0FBQ3JLLFFBQVEsRUFBRTtZQUMvQyxNQUFNNk8scUJBQXFCLEdBQUdBLENBQUEsS0FBSztjQUNsQ0YsYUFBYSxDQUFDOVMsS0FBSyxDQUFDVyxLQUFLLEVBQUV3QixVQUFVLEVBQUVmLEtBQUssQ0FBQztZQUM5QyxDQUFDO1lBR0QsSUFBQWtPLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUMvUCxLQUFLLENBQUNXLEtBQUssQ0FBQyxFQUFFLE1BQU0rRixXQUFXLENBQUMxRyxLQUFLLEVBQUVXLEtBQUssRUFBRXNDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLElBQUFxTSxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDL1AsS0FBSyxDQUFDLEVBQUUsTUFBTThTLGFBQWEsQ0FBQzlTLEtBQUssQ0FBQ1csS0FBSyxFQUFFd0IsVUFBVSxFQUFFZixLQUFLLENBQUMsQ0FBQztZQUN2RSxJQUFBa08sTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQy9QLEtBQUssQ0FBQ1csS0FBSyxDQUFDLEVBQUVxUyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztZQUN2RSxJQUFBMUQsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQy9QLEtBQUssQ0FBQyxFQUFFLE1BQU0rUyxrQkFBa0IsQ0FBQy9TLEtBQUssQ0FBQ3VCLFlBQVksQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1lBRXJGLElBQUksQ0FBQ29PLFVBQVUsSUFBSSxDQUFDM1AsS0FBSyxDQUFDcUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFFOUMsTUFBTXFELFFBQVEsR0FBRyxNQUFNZ0MsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUN1TCxjQUFjLEVBQUU7Y0FDdEJ2TSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU0xRyxLQUFLLENBQUNnRCxJQUFJLEVBQUU7Y0FDbEJrTyxVQUFVLENBQUN4RCxVQUFVLENBQUMsTUFBSztnQkFDMUJoSCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTWxGLEtBQUssR0FBRztjQUNieEIsS0FBSztjQUNMaUQsUUFBUTtjQUNSYSxLQUFLO2NBQ0wrTyxXQUFXO2NBQ1gxUSxVQUFVO2NBQ1Z1RCxRQUFRO2NBQ1J3TixlQUFlLEVBQUVsVCxLQUFLLENBQUNXLEtBQUssRUFBRXdCLFVBQVUsRUFBRXlEO2FBQzFDO1lBQ0QsTUFBTThGLEdBQUcsR0FBRyxJQUFJekksUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFFL0MsT0FDQ3VMLEtBQUEsQ0FBQW5LLGFBQUEsQ0FBQ1QsUUFBQSxDQUFBeUwsYUFBYSxDQUFDbEMsUUFBUTtjQUFDM0wsS0FBSyxFQUFFQTtZQUFLLEdBQ25DZ04sS0FBQSxDQUFBbkssYUFBQSxDQUFDc0UsT0FBQSxDQUFBd0osTUFBTSxPQUFHLEVBQ1YzRCxLQUFBLENBQUFuSyxhQUFBLENBQUN3SCxHQUFBLENBQUFzSCxhQUFhO2NBQUM3TyxTQUFTLEVBQUVvSCxHQUFHO2NBQUV6SSxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUNqRCxLQUFLLENBQUNXLEtBQUssRUFBRXdCLFVBQVUsQ0FBQ3lEO1lBQU0sR0FDcEY0SSxLQUFBLENBQUFuSyxhQUFBLENBQUN1TyxXQUFBLENBQUFRLGdCQUFnQixPQUFHLENBQ0wsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1REEsSUFBQTVQLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBMFQsV0FBQSxHQUFBMVQsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQTJQLE1BQUEsR0FBQTNQLE9BQUE7VUFHQSxJQUFBMlQsWUFBQSxHQUFBM1QsT0FBQTtVQUdNLFNBQVV5VCxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNMcFQsS0FBSztjQUNMOEQsS0FBSyxFQUFFO2dCQUFFUyxNQUFNLEVBQUV3TjtjQUFXO1lBQUUsQ0FDOUIsR0FBRyxJQUFBbk8sUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNUyxLQUFLLEdBQUd4RSxLQUFLLENBQUNXLEtBQUssQ0FBQzZELEtBQUssSUFBSXVOLFdBQVcsQ0FBQ3ZOLEtBQUs7WUFFcEQsSUFBQThLLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUMvUCxLQUFLLENBQUNXLEtBQUssQ0FBQyxFQUFFLE1BQUssQ0FBRSxDQUFDLEVBQUUsb0JBQW9CLENBQUM7WUFFeEQsT0FDQzZDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEwQixHQUN4Q2QsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsa0JBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQmQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBSzBOLFdBQVcsQ0FBQy9ILFNBQVMsRSxJQUFPLEVBQ2pDeEcsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsWSxLQUFLckUsS0FBSyxDQUFDVyxLQUFLLENBQUNxSixTQUFTLENBQUssQ0FDMUIsRUFDTnhHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNpUCxZQUFBLENBQUF4QixpQkFBaUIsT0FBRyxDQUNaLEVBQ1Z0TyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ1AsV0FBQSxDQUFBNU4sZ0JBQWdCLE9BQUcsQ0FDZjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBakMsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBaUosTUFBQSxHQUFBakosT0FBQTtVQUNBLElBQUEySCxRQUFBLEdBQUEzSCxPQUFBO1VBR00sU0FBVWdULGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFM1MsS0FBSztjQUFFOEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNbkMsS0FBSyxHQUFHO2NBQUV3SyxRQUFRLEVBQUVwTSxLQUFLLENBQUNXLEtBQUssQ0FBQzRCLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ1csS0FBSyxDQUFDNFM7WUFBUyxDQUFFO1lBRWxGLE1BQU03TixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTTFGLEtBQUssQ0FBQ3NELE9BQU8sRUFBRTtnQkFDckJzRixNQUFBLENBQUFZLEtBQUssQ0FBQ2dLLE9BQU8sQ0FBQzFQLEtBQUssQ0FBQzBGLEtBQUssQ0FBQ2lLLGVBQWUsQ0FBQztnQkFDMUNuTSxRQUFBLENBQUFRLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDJCQUEyQixDQUFDO2VBQzlDLENBQUMsT0FBT3JGLENBQUMsRUFBRTtnQkFDWGtHLE1BQUEsQ0FBQVksS0FBSyxDQUFDNUcsS0FBSyxDQUFDa0IsS0FBSyxDQUFDMEYsS0FBSyxDQUFDa0sscUJBQXFCLENBQUM7O1lBRWhELENBQUM7WUFDRCxPQUNDbFEsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsY0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBZSxNQUFNO2NBQUN4QixRQUFRLEVBQUVqRCxLQUFLLENBQUNpRCxRQUFRO2NBQUUyQixPQUFPLEVBQUVjLFFBQVE7Y0FBRWhCLE9BQU8sRUFBQyxTQUFTO2NBQUEsR0FBSzlDO1lBQUssR0FDOUVrQyxLQUFLLENBQUNlLE9BQU8sQ0FBQ3ZCLE9BQU8sQ0FDZCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUJBLElBQUFFLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFnVSxnQkFBQSxHQUFBaFUsT0FBQTtVQUdNLFNBQVVpVSxXQUFXQSxDQUFDLEVBQUU7WUFDN0IsTUFBTTtjQUNMOVAsS0FBSyxFQUFFO2dCQUFFUyxNQUFNLEVBQUV3TjtjQUFXLENBQUU7Y0FDOUIvUjtZQUFLLENBQ0wsR0FBRyxJQUFBNEQsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNb0ssT0FBTyxHQUFHbk8sS0FBSyxDQUFDVyxLQUFLLENBQUM2RCxLQUFLLElBQUl1TixXQUFXLENBQUN2TixLQUFLO1lBQ3RELE9BQ0NoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBaUIsR0FDL0JkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGlCQUFTME4sV0FBVyxDQUFDdk4sS0FBSyxDQUFVLEVBQ3BDaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3NQLGdCQUFBLENBQUF4RCxlQUFlO2NBQ2ZwRyxJQUFJLEVBQUMsT0FBTztjQUNacUcsTUFBTSxFQUFFLE1BQU03RyxJQUFJLElBQUc7Z0JBQ3BCLE1BQU12SixLQUFLLENBQUNnRCxJQUFJLENBQUN1RyxJQUFJLENBQUM7Y0FDdkIsQ0FBQztjQUNEOEcsUUFBUSxFQUFDO1lBQUcsR0FFWGxDLE9BQU8sQ0FDUyxDQUNiO1VBRVIiLCJpZ25vcmVMaXN0IjpbXX0=