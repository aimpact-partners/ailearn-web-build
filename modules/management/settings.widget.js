System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.24/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0024ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp0024ComponentsCoverImageCode;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/chips', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26]]);
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
        hash: 2239613926,
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
        hash: 2134579677,
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
          var _coverImage = require("@aimpact/ailearn-app/components/cover-image.code");
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
            const onGenerate = notes => store.model.generatePicture(notes);
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }), _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "header-container module-header-description "
            }, _react.default.createElement(_coverImage.CoverImage, {
              title: texts.picture.title,
              description: texts.picture.description,
              suggestions: store.model.pictureSuggestions,
              picture: store.model.picture,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl91aSIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nQWN0aXZpdHkiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiTmF2YmFySGVhZGVyIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIlB1Ymxpc2hNb2R1bGUiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZE1vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJ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