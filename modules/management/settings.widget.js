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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwibG9nIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl91aSIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nQWN0aXZpdHkiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiTmF2YmFySGVhZGVyIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJzdWdnZXN0aW9ucyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsIlB1Ymxpc2hNb2R1bGUiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwiY29tcGxldGVkIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZE1vZHVsZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vcHJvcGVydHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9saXN0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0Ms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