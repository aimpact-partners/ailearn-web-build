System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image"], function (_export, _context3) {
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
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_3 = _beyondJsReact18Widgets104Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi006Empty) {
      dependency_9 = _pragmateUi006Empty;
    }, function (_pragmateUi006Components) {
      dependency_10 = _pragmateUi006Components;
    }, function (_pragmateUi006List) {
      dependency_11 = _pragmateUi006List;
    }, function (_pragmateUi006Form) {
      dependency_12 = _pragmateUi006Form;
    }, function (_pragmateUi006Modal) {
      dependency_13 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Collapsible) {
      dependency_16 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Toast) {
      dependency_17 = _pragmateUi006Toast;
    }, function (_pragmateUi006Chips) {
      dependency_18 = _pragmateUi006Chips;
    }, function (_framerMotion) {
      dependency_19 = _framerMotion;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_21 = _aimpactAilearnApp0024Config;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_22 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi006Alert) {
      dependency_23 = _pragmateUi006Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_25 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_26 = _pragmateUi006Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/chips', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['pragmate-ui/image', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/settings.widget');
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
        hash: 774296589,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
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
              return _core.ActivityTypes;
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
                this.#model = await _core.LearningModule.get(specs);
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
        hash: 859738606,
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
              console.log('aja');
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
        hash: 2863971506,
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
          function ModuleActivities() {
            const {
              texts,
              activities,
              onSubmit
            } = (0, _context.useModuleContext)();
            const [showModal, setShowModal] = _react.default.useState(false);
            const toggleModal = () => setShowModal(show => !show);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.activities.title), _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: toggleModal
            }, texts.actions.add)), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_list.List, {
              className: "module-activity-list",
              items: activities,
              control: _item.ModuleActivity
            })), _react.default.createElement(_modal.ModalSelection, {
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
        hash: 3289727282,
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
            }, _react.default.createElement("section", {
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
        hash: 784908534,
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
          function ModuleActivity({
            data,
            index
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
            return _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement(_header.ActivityListHeader, {
              openDeleteModal: toggleDelete,
              activity: data
            }), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity__pane-content"
            }, _react.default.createElement(_property.Property, {
              name: texts.objective,
              value: data.specs.objective
            }), _react.default.createElement(_property.Property, {
              name: texts.description,
              value: data.description
            }), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            }))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
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
        hash: 141781566,
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
              texts,
              activities,
              onSubmit
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
        hash: 3827089970,
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
        hash: 2146566896,
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
              onClose,
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

      /**************************************************
      INTERNAL MODULE: ./views/module/cover-image/actions
      **************************************************/

      ims.set('./views/module/cover-image/actions', {
        hash: 2366060258,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _refinementModal = require("./refinement-modal");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [, setImage] = _react.default.useState();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            const toggleModal = () => setShowRefiningModal(!showModal);
            (0, _hooks.useBinder)([store.model], () => setImage(store.model.cover), 'image.generated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: toggleModal,
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            })), _react.default.createElement(_refinementModal.RefinementModal, {
              show: showModal,
              confirm: !!store.model.picture,
              onClose: toggleModal
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/module/cover-image/confirm
      **************************************************/

      ims.set('./views/module/cover-image/confirm', {
        hash: 735351596,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmRefinementModal = ConfirmRefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../../context");
          function ConfirmRefinementModal({
            show,
            onConfirm,
            onClose
          }) {
            const {
              texts: {
                picture: texts,
                refine: {
                  textarea: textAreaTexts
                },
                actions: textActions,
                generatingImage
              }
            } = (0, _context.useModuleContext)();
            const [, setOpenConfirm] = _react.default.useState(false);
            if (!show) return null;
            const onCancel = () => setOpenConfirm(false);
            const actions = {
              confirm: {
                variant: 'primary',
                label: textActions.confirm
              },
              cancel: {
                label: textActions.cancel,
                variant: 'primary',
                bordered: true
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: onConfirm,
              onCancel: onCancel,
              actions: actions,
              show: true,
              title: texts.confirm.title,
              text: texts.confirm.subtitle
            });
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/module/cover-image/index
      ************************************************/

      ims.set('./views/module/cover-image/index', {
        hash: 180632105,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImage = CoverImage;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _image = require("pragmate-ui/image");
          var _actions = require("./actions");
          function CoverImage() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [image, setImage] = _react.default.useState(store.model?.picture);
            const [fetching, setFetching] = _react.default.useState(false);
            (0, _hooks.useBinder)([store.model], () => setImage(store.model.picture), 'image.generated');
            return _react.default.createElement("div", {
              className: "cover-image__container"
            }, store.model.picture && _react.default.createElement(_image.Image, {
              src: image
            }), _react.default.createElement(_actions.CoverImageActions, {
              setFetching: setFetching,
              generated: !!store.model.picture
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***********************************************************
      INTERNAL MODULE: ./views/module/cover-image/refinement-modal
      ***********************************************************/

      ims.set('./views/module/cover-image/refinement-modal', {
        hash: 10856356,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefinementModal = RefinementModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("../../components/error");
          var _confirm = require("./confirm");
          function RefinementModal({
            show,
            confirm,
            onClose
          }) {
            const {
              texts: {
                picture: texts,
                refine: {
                  textarea: textAreaTexts
                },
                actions: textActions,
                generatingImage
              },
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [notes, setNotes] = _react.default.useState(store.model.pictureSuggestions ?? '');
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            if (!show) return null;
            const events = {
              onChange: event => setNotes(event.currentTarget.value),
              onClick: async event => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await store.model.generatePicture(notes);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const toggleConfirm = () => setOpenConfirm(!openConfirm);
            const onClickAction = confirm ? toggleConfirm : events.onClick;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_error.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: notes,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: onClickAction,
              disabled: !notes
            }, textActions.refine)), _react.default.createElement(_confirm.ConfirmRefinementModal, {
              show: openConfirm,
              onClose: toggleConfirm,
              onConfirm: events.onClick
            }), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: generatingImage
            })));
          }
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
        hash: 2871993477,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _config = require("@aimpact/ailearn-app/config");
          var _publish = require("./publish");
          var _coverImage = require("./cover-image");
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
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement(_ui.ContentEditable, {
              name: "title",
              selector: "h3",
              onSave: onSave
            }, title), _react.default.createElement(_coverImage.CoverImage, null), _react.default.createElement(_publish.PublishModule, null))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 2946985419,
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
            const [activePanel, setActivePanel] = React.useState(0);
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
        hash: 448019176,
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
        hash: 900425411,
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
              bordered: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl91aSIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nQWN0aXZpdHkiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsInBpY3R1cmUiLCJDb25maXJtUmVmaW5lbWVudE1vZGFsIiwidGV4dEFyZWFUZXh0cyIsImdlbmVyYXRpbmdJbWFnZSIsInNldE9wZW5Db25maXJtIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIl9lcnJvciIsIl9jb25maXJtIiwic2V0RXJyb3IiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJvcGVuQ29uZmlybSIsImdlbmVyYXRlUGljdHVyZSIsInRvZ2dsZUNvbmZpcm0iLCJvbkNsaWNrQWN0aW9uIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJOYXZiYXJIZWFkZXIiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2NvbmZpcm0udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaOztVQUNBQyxPQUFBLENBQUFSLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiRCxJQUFBUyxLQUFBLEdBQUFaLE9BQUE7VUFDQSxJQUFBYSxNQUFBLEdBQUFiLE9BQUE7VUFDQSxJQUFBYyxRQUFBLEdBQUFkLE9BQUE7VUFHTSxNQUFPTyxZQUFhLFNBQVFNLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBRUEsSUFBSUMsSUFBSUEsQ0FBQTtjQUNQLE9BQU9ILFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsSUFBSUUsTUFB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