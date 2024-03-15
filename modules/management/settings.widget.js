System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.27/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "@aimpact/ailearn-app@0.0.27/modules/management/activity.code", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.27/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0027ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0027ComponentsIcons;
    }, function (_pragmateUi006Collapsible) {
      dependency_16 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Toast) {
      dependency_17 = _pragmateUi006Toast;
    }, function (_pragmateUi006Chips) {
      dependency_18 = _pragmateUi006Chips;
    }, function (_framerMotion) {
      dependency_19 = _framerMotion;
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_21 = _aimpactAilearnApp0027Config;
    }, function (_aimpactAilearnApp0027ModulesManagementActivityCode) {
      dependency_22 = _aimpactAilearnApp0027ModulesManagementActivityCode;
    }, function (_pragmateUi006Alert) {
      dependency_23 = _pragmateUi006Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_25 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactAilearnApp0027ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp0027ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/management/settings",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/chips', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_22], ['pragmate-ui/alert', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['@beyond-js/react-18-widgets/hooks', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id", "activityId"],
        "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/management/settings.widget');
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
        hash: 1561690141,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl91aSIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nQWN0aXZpdHkiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJwaWN0dXJlIiwic2V0UGljdHVyZSIsIm9uR2VuZXJhdGUiLCJnZW5lcmF0ZVBpY3R1cmUiLCJOYXZiYXJIZWFkZXIiLCJDb3ZlckltYWdlIiwic3VnZ2VzdGlvbnMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsImNvbXBsZXRlZCIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3Byb3BlcnR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbGlzdC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7O1VBQ0FDLE9BQUEsQ0FBQVIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2JELElBQUFTLEtBQUEsR0FBQVosT0FBQTtVQUNBLElBQUFhLE1BQUEsR0FBQWIsT0FBQTtVQUNBLElBQUFjLFFBQUEsR0FBQWQsT0FBQTtVQUdNLE1BQU9PLFlBQWEsU0FBUU0sTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ04sSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxJQUFJQyxJQUFJQSxDQUFBO2NBQ1AsT0FBT0gsUUFBQSxDQUFBSSxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxJQUFJRSxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDQyxhQUFhO1lBQ3BFO1lBQ0EsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU9ULFFBQUEsQ0FBQUksY0FBYyxDQUFDRCxJQUFJLENBQUNPLE9BQU8sRUFBRUMsS0FBSyxJQUFJLEVBQUU7WUFDaEQ7WUFFQSxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU9kLEtBQUEsQ0FBQWUsYUFBYTtZQUNyQjtZQUVBLENBQUFDLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUNBLElBQUlBLFlBQVlBLENBQUNDLEtBQUs7Y0FDckIsSUFBSSxDQUFDLENBQUFELFlBQWEsR0FBR0MsS0FBSztjQUMxQixJQUFJLENBQUNDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQztZQUNsQztZQUVBLElBQUlDLElBQUlBLENBQUE7Y0FDUCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQUgsWUFBYSxHQUFHLFVBQVUsR0FBRyxRQUFRO1lBQ3BEO1lBRUFJLFlBQVlDLEtBQUs7Y0FDaEIsS0FBSyxFQUFFO2NBQ1AsTUFBTUMsRUFBRSxHQUFHRCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUM7Y0FDMUIsTUFBTUMsVUFBVSxHQUFHSCxLQUFLLENBQUNFLEdBQUcsQ0FBQyxZQUFZLENBQUM7Y0FFMUMsSUFBSSxDQUFDRCxFQUFFLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJRyxLQUFLLENBQUMsZ0JBQWdCLENBQUM7O2NBRWxDLElBQUksQ0FBQ0MsSUFBSSxDQUFDSixFQUFFLEVBQUVFLFVBQVUsQ0FBQztZQUMxQjtZQUNBRyxLQUFLQSxDQUFBO2NBQ0osSUFBSSxDQUFDLENBQUF2QixLQUFNLENBQUN3QixVQUFVLENBQUNELEtBQUssRUFBRTtjQUM5QixJQUFJLENBQUMsQ0FBQXZCLEtBQU0sR0FBR3lCLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBLE1BQU1KLElBQUlBLENBQUNKLEVBQUUsRUFBRUUsVUFBVTtjQUN4QixJQUFJO2dCQUNILE1BQU1PLEtBQUssR0FBR1QsRUFBRSxLQUFLLEtBQUssR0FBRztrQkFBRVUsSUFBSSxFQUFFO2dCQUFPLENBQUUsR0FBRztrQkFBRVYsRUFBRTtrQkFBRVUsSUFBSSxFQUFFO2dCQUFPLENBQUU7Z0JBRXRFLElBQUlWLEVBQUUsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLENBQUFsQixLQUFNLEVBQUUsSUFBSSxDQUFDdUIsS0FBSyxFQUFFO2dCQUU3QyxJQUFJLElBQUksQ0FBQ3ZCLEtBQUssSUFBSSxJQUFJLENBQUNBLEtBQUssQ0FBQ2tCLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsQ0FBQWxCLEtBQU0sR0FBRyxNQUFNSixLQUFBLENBQUFpQyxjQUFjLENBQUNWLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDO2dCQUU3QyxJQUFJUCxVQUFVLEVBQUU7a0JBQ2YsSUFBSSxDQUFDLENBQUFSLFlBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQVosS0FBTSxDQUFDd0IsVUFBVSxDQUFDTSxHQUFHLENBQUNYLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDOztnQkFFaEU7Z0JBQ0EsSUFBSSxDQUFDTSxLQUFLLEdBQUcsSUFBSTtlQUNqQixDQUFDLE9BQU9LLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQSxNQUFNRyxjQUFjQSxDQUFDaEIsRUFBRTtjQUN0QixJQUFJLENBQUMsQ0FBQWxCLEtBQU0sQ0FBQ3dCLFVBQVUsQ0FBQ1csTUFBTSxDQUFDakIsRUFBRSxDQUFDO2NBQ2pDLE1BQU0sSUFBSSxDQUFDLENBQUFsQixLQUFNLENBQUNvQyxTQUFTLEVBQUU7Y0FDN0IsSUFBSSxDQUFDdEIsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU11QixJQUFJQSxDQUFDVixLQUFNO2NBQ2hCLElBQUksQ0FBQ1csUUFBUSxHQUFHLElBQUk7Y0FDcEIsTUFBTSxJQUFJLENBQUN0QyxLQUFLLENBQUNvQyxTQUFTLENBQUNULEtBQUssQ0FBQztjQUNqQyxJQUFJLENBQUNXLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUF0QyxLQUFNO1lBQ25CO1lBRUEsTUFBTXVDLGNBQWNBLENBQUNDLFlBQVk7Y0FDaEMsSUFBSTtnQkFDSCxNQUFNQyxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUN6QyxLQUFLLENBQUN3QixVQUFVLENBQUNrQixHQUFHLENBQUNGLFlBQVksQ0FBQ3RCLEVBQUUsQ0FBQztnQkFDakUsT0FBT3VCLFFBQVE7ZUFDZixDQUFDLE9BQU9WLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFDQSxNQUFNWSxPQUFPQSxDQUFBO2NBQ1osSUFBSTtnQkFDSCxJQUFJLENBQUNMLFFBQVEsR0FBRyxJQUFJO2dCQUNwQixNQUFNTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUM1QyxLQUFLLENBQUMyQyxPQUFPLEVBQUU7ZUFDM0MsQ0FBQyxPQUFPWixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsRUFBRUYsQ0FBQyxDQUFDO2VBQ25CLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDTyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7O1VBQ0EzQyxPQUFBLENBQUFKLFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxR0QsSUFBQXNELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBOEQsTUFBQSxHQUFBOUQsT0FBQTtVQUNBLElBQUErRCxXQUFBLEdBQUEvRCxPQUFBO1VBQ0EsSUFBQWdFLE1BQUEsR0FBQWhFLE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUVNLFNBQVVrRSxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUFFQztZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3BDLE1BQU0sQ0FBQ0MsU0FBUyxFQUFFQyxZQUFZLENBQUMsR0FBR1QsTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDdkQsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJILFlBQVksQ0FBQyxDQUFDRCxTQUFTLENBQUM7WUFDekIsQ0FBQztZQUVELE9BQ0NSLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUF5QixHQUN2Q2QsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUNTLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQ3FDLEtBQUssQ0FBTSxFQUN4Q2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGNBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNYLFdBQUEsQ0FBQWUsTUFBTTtjQUFDQyxPQUFPLEVBQUMsTUFBTTtjQUFDQyxJQUFJLEVBQUMsS0FBSztjQUFDQyxPQUFPLEVBQUVSO1lBQVcsR0FDcEROLEtBQUssQ0FBQ1MsTUFBTSxDQUFDTSxPQUFPLENBQUNDLFdBQVcsQ0FDekIsQ0FDSixDQUNFLEVBQ1R0QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDWixNQUFBLENBQUFzQixLQUFLLFFBQ0x2QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUNTLE1BQU0sQ0FBQ3BDLFVBQVUsQ0FBQzZDLEtBQUssQ0FBQ1IsS0FBSyxDQUFNLEVBQzlDaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsZUFBT1AsS0FBSyxDQUFDUyxNQUFNLENBQUNwQyxVQUFVLENBQUM2QyxLQUFLLENBQUNDLElBQUksQ0FBUSxDQUMxQyxFQUNSekIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBdUIsY0FBYztjQUFDQyxJQUFJLEVBQUVuQixTQUFTO2NBQUVvQixPQUFPLEVBQUVoQjtZQUFXLEVBQUksQ0FDcEQ7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQVosTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUEyRixLQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBZ0UsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE4RCxNQUFBLEdBQUE5RCxPQUFBO1VBRU0sU0FBVTZGLGdCQUFnQkEsQ0FBQTtZQUMvQixNQUFNO2NBQUUxQixLQUFLO2NBQUUzQixVQUFVO2NBQUVzRDtZQUFRLENBQUUsR0FBRyxJQUFBN0IsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMxRCxNQUFNLENBQUNDLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUdULE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZELE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNSCxZQUFZLENBQUNrQixJQUFJLElBQUksQ0FBQ0EsSUFBSSxDQUFDO1lBQ3JELElBQUksQ0FBQ2hELFVBQVUsQ0FBQ3VELE1BQU0sRUFBRSxPQUFPbEMsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1osTUFBQSxDQUFBSSxpQkFBaUIsT0FBRztZQUVwRCxPQUNDTCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQXlCLFFBQUEsUUFDQ25DLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUErQixHQUNoRGQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDM0IsVUFBVSxDQUFDcUMsS0FBSyxDQUFNLEVBQ2pDaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBZSxNQUFNO2NBQUNDLE9BQU8sRUFBQyxNQUFNO2NBQUNDLElBQUksRUFBQyxLQUFLO2NBQUNDLE9BQU8sRUFBRVI7WUFBVyxHQUNwRE4sS0FBSyxDQUFDZSxPQUFPLENBQUN4QixHQUFHLENBQ1YsQ0FDRCxFQUVURyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDa0IsS0FBQSxDQUFBSyxJQUFJO2NBQUNILFFBQVEsRUFBRUE7WUFBUSxHQUN2QmpDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNnQixLQUFBLENBQUFRLElBQUk7Y0FBQ3ZCLFNBQVMsRUFBQyxzQkFBc0I7Y0FBQ2xELEtBQUssRUFBRWUsVUFBVTtjQUFFMkQsT0FBTyxFQUFFUixLQUFBLENBQUFTO1lBQWMsRUFBSSxDQUMvRSxFQUNQdkMsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1YsTUFBQSxDQUFBdUIsY0FBYztjQUFDQyxJQUFJLEVBQUVuQixTQUFTO2NBQUVvQixPQUFPLEVBQUVoQjtZQUFXLEVBQUksQ0FDdkQ7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQkEsSUFBQVQsTUFBQSxHQUFBaEUsT0FBQTtVQUNBLElBQUE2RCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFTSxTQUFVcUcsV0FBV0EsQ0FBQztZQUFFWixPQUFPO1lBQUVhO1VBQVMsQ0FBRTtZQUNqRCxNQUFNO2NBQ0xuQyxLQUFLO2NBQ0xBLEtBQUssRUFBRTtnQkFBRWUsT0FBTyxFQUFFcUI7Y0FBVztZQUFFLENBQy9CLEdBQUcsSUFBQXRDLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTSxDQUFDZCxRQUFRLEVBQUVrRCxXQUFXLENBQUMsR0FBRzNDLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1TLE9BQU8sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDMUIsSUFBSTtnQkFDSHVCLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1GLFNBQVMsRUFBRTtnQkFDakJFLFdBQVcsQ0FBQyxLQUFLLENBQUM7ZUFDbEIsQ0FBQyxPQUFPekQsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QwQyxPQUFPLEVBQUU7O1lBRVgsQ0FBQztZQUNELE9BQ0M1QixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDVixNQUFBLENBQUF5QyxZQUFZO2NBQ1pILFNBQVMsRUFBRXJCLE9BQU87Y0FDbEJ5QixRQUFRLEVBQUVqQixPQUFPO2NBQ2pCUCxPQUFPLEVBQUU7Z0JBQ1J5QixPQUFPLEVBQUU7a0JBQ1I1QixPQUFPLEVBQUUsU0FBUztrQkFDbEI2QixLQUFLLEVBQUVMLFdBQVcsQ0FBQ0k7aUJBQ25CO2dCQUNERSxNQUFNLEVBQUU7a0JBQUVELEtBQUssRUFBRUwsV0FBVyxDQUFDTSxNQUFNO2tCQUFFOUIsT0FBTyxFQUFFLFNBQVM7a0JBQUUrQixRQUFRLEVBQUU7Z0JBQUk7ZUFDdkU7Y0FDRHRCLElBQUk7Y0FDSlgsS0FBSyxFQUFFVixLQUFLLENBQUMzQixVQUFVLENBQUN1RSxNQUFNLENBQUNsQyxLQUFLO2NBQ3BDUyxJQUFJLEVBQUVuQixLQUFLLENBQUMzQixVQUFVLENBQUN1RSxNQUFNLENBQUNDO1lBQVEsRUFDckM7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQW5ELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUFpSCxNQUFBLEdBQUFqSCxPQUFBO1VBQ0EsSUFBQWtILE9BQUEsR0FBQWxILE9BQUE7VUFDQSxJQUFBbUgsWUFBQSxHQUFBbkgsT0FBQTtVQUdBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBQ00sU0FBVXFILGtCQUFrQkEsQ0FBQztZQUFFQyxlQUFlO1lBQUU3RDtVQUFRLENBQUU7WUFDL0QsTUFBTTtjQUNMVSxLQUFLLEVBQUU7Z0JBQUVlLE9BQU87Z0JBQUUxQyxVQUFVLEVBQUUyQjtjQUFLLENBQUU7Y0FDckM5RDtZQUFLLENBQ0wsR0FBRyxJQUFBNEQsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNbUQsSUFBSSxHQUFHQyxLQUFLLElBQUc7Y0FDcEJBLEtBQUssQ0FBQ0MsZUFBZSxFQUFFO2NBQ3ZCO2NBQ0FwSCxLQUFLLENBQUN1QixZQUFZLEdBQUd2QixLQUFLLENBQUNXLEtBQUssQ0FBQ3dCLFVBQVUsQ0FBQ2YsS0FBSyxDQUFDaUcsSUFBSSxDQUFDQyxJQUFJLElBQUlBLElBQUksQ0FBQ3pGLEVBQUUsS0FBS3VCLFFBQVEsQ0FBQ3ZCLEVBQUUsQ0FBQztjQUV2RmtGLFFBQUEsQ0FBQVEsT0FBTyxDQUFDQyxTQUFTLENBQUMsMEJBQTBCeEgsS0FBSyxDQUFDVyxLQUFLLENBQUNrQixFQUFFLGVBQWV1QixRQUFRLENBQUN2QixFQUFFLEVBQUUsQ0FBQztZQUN4RixDQUFDO1lBRUQsTUFBTTRGLE1BQU0sR0FBRywrQkFBK0JyRSxRQUFRLENBQUNiLElBQUksRUFBRTtZQUM3RCxNQUFNbUYsUUFBUSxHQUFHLDBCQUEwQnRFLFFBQVEsQ0FBQ3VFLEtBQUssRUFBRTtZQUMzRCxNQUFNQyxRQUFRLEdBQUdULEtBQUssSUFBRztjQUN4QkEsS0FBSyxDQUFDQyxlQUFlLEVBQUU7Y0FDdkJILGVBQWUsRUFBRTtZQUNsQixDQUFDO1lBRUQsT0FDQ3pELE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUN5QyxZQUFBLENBQUFlLGlCQUFpQixRQUNqQnJFLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVFDLFNBQVMsRUFBQztZQUF3RCxHQUN6RWQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBS0MsU0FBUyxFQUFDO1lBQXFDLEdBQ25EZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFTQyxTQUFTLEVBQUVtRDtZQUFNLEdBQ3pCakUsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3VDLE1BQUEsQ0FBQWtCLElBQUk7Y0FBQ25ELElBQUksRUFBRWtDLE9BQUEsQ0FBQWtCLEtBQUssQ0FBQzNFLFFBQVEsQ0FBQ2IsSUFBSTtZQUFDLEVBQUksQ0FDM0IsRUFDVmlCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUE0RCxHQUMxRWQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBU0MsU0FBUyxFQUFDO1lBQWdCLEdBQ2xDZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFNQyxTQUFTLEVBQUM7WUFBZ0IsR0FBRVIsS0FBSyxDQUFDa0UsS0FBSyxDQUFDNUUsUUFBUSxDQUFDYixJQUFJLENBQUMsQ0FBUSxFQUNwRWlCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUtqQixRQUFRLENBQUNvQixLQUFLLENBQU0sQ0FDaEIsQ0FDTCxDQUNELEVBQ05oQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBc0QsR0FDcEVkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBRW9EO1lBQVEsR0FBRzVELEtBQUssQ0FBQ21FLE1BQU0sQ0FBQzdFLFFBQVEsQ0FBQ3VFLEtBQUssQ0FBQyxDQUFPLEVBQzlEbkUsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3VDLE1BQUEsQ0FBQXNCLFVBQVU7Y0FBQzFELEtBQUssRUFBRUssT0FBTyxDQUFDcUMsSUFBSTtjQUFFdkMsSUFBSSxFQUFDLE1BQU07Y0FBQ0wsU0FBUyxFQUFDLFFBQVE7Y0FBQ00sT0FBTyxFQUFFc0M7WUFBSSxFQUFJLEVBQ2pGMUQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3VDLE1BQUEsQ0FBQXNCLFVBQVU7Y0FBQzFELEtBQUssRUFBRUssT0FBTyxDQUFDNkIsTUFBTTtjQUFFL0IsSUFBSSxFQUFDLFFBQVE7Y0FBQ0wsU0FBUyxFQUFDLFFBQVE7Y0FBQ00sT0FBTyxFQUFFZ0Q7WUFBUSxFQUFJLENBQ3BGLENBQ0UsQ0FDVTtVQUV0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREEsSUFBQXBFLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBd0ksTUFBQSxHQUFBeEksT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQW1ILFlBQUEsR0FBQW5ILE9BQUE7VUFDQSxJQUFBeUksT0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUEwSSxNQUFBLEdBQUExSSxPQUFBO1VBQ0EsSUFBQTJJLFlBQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBNEksU0FBQSxHQUFBNUksT0FBQTtVQUVNLFNBQVVvRyxjQUFjQSxDQUFDO1lBQUV5QyxJQUFJO1lBQUVDO1VBQUssQ0FBRTtZQUM3QyxNQUFNO2NBQ0wzRSxLQUFLLEVBQUU7Z0JBQUUzQixVQUFVLEVBQUUyQjtjQUFLLENBQUU7Y0FDNUI5RDtZQUFLLENBQ0wsR0FBRyxJQUFBNEQsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNMkUsR0FBRyxHQUFHLElBQUFsRixNQUFBLENBQUFtRixNQUFNLEVBQUMsSUFBSSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR3JGLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU0yRSxVQUFVLEdBQUczQixLQUFLLElBQUc7Y0FDMUIsSUFBSTtnQkFDSHVCLEdBQUcsQ0FBQ0ssT0FBTyxDQUFDQyxTQUFTLENBQUMzRixHQUFHLENBQUMsVUFBVSxDQUFDO2dCQUNyQ3JELEtBQUssQ0FBQzZDLGNBQWMsQ0FBQzJGLElBQUksQ0FBQzNHLEVBQUUsQ0FBQztlQUM3QixDQUFDLE9BQU9hLENBQUMsRUFBRTtnQkFDWDJGLE1BQUEsQ0FBQVksS0FBSyxDQUFDckcsS0FBSyxDQUFDRixDQUFDLENBQUN3RyxPQUFPLENBQUM7O1lBRXhCLENBQUM7WUFDRCxNQUFNQyxZQUFZLEdBQUdBLENBQUEsS0FBTU4sYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztZQUVyRCxPQUNDcEYsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3lDLFlBQUEsQ0FBQXNDLG9CQUFvQixRQUNwQjVGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQVNDLFNBQVMsRUFBQyxlQUFlO2NBQUNvRSxHQUFHLEVBQUVBO1lBQUcsR0FDMUNsRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDK0QsT0FBQSxDQUFBcEIsa0JBQWtCO2NBQUNDLGVBQWUsRUFBRWtDLFlBQVk7Y0FBRS9GLFFBQVEsRUFBRW9GO1lBQUksRUFBSSxFQUNyRWhGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUN5QyxZQUFBLENBQUF1QyxrQkFBa0I7Y0FBQy9FLFNBQVMsRUFBQztZQUF3QixHQUNyRGQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2tFLFNBQUEsQ0FBQWUsUUFBUTtjQUFDQyxJQUFJLEVBQUV6RixLQUFLLENBQUMwRixTQUFTO2NBQUVoSSxLQUFLLEVBQUVnSCxJQUFJLENBQUNsRyxLQUFLLENBQUNrSDtZQUFTLEVBQUksRUFDaEVoRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDa0UsU0FBQSxDQUFBZSxRQUFRO2NBQUNDLElBQUksRUFBRXpGLEtBQUssQ0FBQzJGLFdBQVc7Y0FBRWpJLEtBQUssRUFBRWdILElBQUksQ0FBQ2lCO1lBQVcsRUFBSSxFQUM5RGpHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUM4RCxNQUFBLENBQUF1QixhQUFhO2NBQUNuSCxJQUFJLEVBQUVpRyxJQUFJLENBQUNqRyxJQUFJO2NBQUVELEtBQUssRUFBRWtHLElBQUksQ0FBQ2xHO1lBQUssRUFBSSxDQUNqQyxDQUNaLEVBQ1RzRyxVQUFVLElBQUlwRixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaUUsWUFBQSxDQUFBdEMsV0FBVztjQUFDQyxTQUFTLEVBQUU2QyxVQUFVO2NBQUUxRCxPQUFPLEVBQUUrRDtZQUFZLEVBQUksQ0FDdEQ7VUFFekI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkNBLElBQUEzRixNQUFBLEdBQUE3RCxPQUFBO1VBQ00sU0FBVTJKLFFBQVFBLENBQUM7WUFBRUMsSUFBSTtZQUFFL0g7VUFBSyxDQUFFO1lBQ3ZDLElBQUksQ0FBQ0EsS0FBSyxFQUFFLE9BQU8sSUFBSTtZQUN2QixPQUNDZ0MsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsY0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS2tGLElBQUksQ0FBTSxFQUNmL0YsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsZUFBTzdDLEtBQUssQ0FBUSxDQUNmO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVEEsSUFBQWdDLE1BQUEsR0FBQTdELE9BQUE7VUFFQSxJQUFBZ0ssTUFBQSxHQUFBaEssT0FBQTtVQUVBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ00sU0FBVStKLGFBQWFBLENBQUM7WUFBRXBILEtBQUs7WUFBRUM7VUFBSSxDQUFFO1lBQzVDLE9BQ0NpQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQXlCLFFBQUEsUUFDRXJELEtBQUssQ0FBQ3NILElBQUksSUFBSXBHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNzRixNQUFBLENBQUFFLElBQUk7Y0FBQ3RILElBQUksRUFBQztZQUFTLEdBQUVELEtBQUssQ0FBQ3NILElBQUksQ0FBUSxFQUN2RHBHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNnQixLQUFBLENBQUF5RSxTQUFTO2NBQUN4SCxLQUFLLEVBQUVBLEtBQUs7Y0FBRUMsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDckM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNaQSxJQUFBaUIsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUEwRixLQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFQSxNQUFNb0ssSUFBSSxHQUFHQSxDQUFDO1lBQUV2QjtVQUFJLENBQUUsS0FBS2hGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUttRSxJQUFJLENBQU07VUFDMUMsTUFBTXdCLFlBQVksR0FBR0EsQ0FBQztZQUFFeEIsSUFBSTtZQUFFQztVQUFLLENBQUUsS0FBSTtZQUN4QyxNQUFNO2NBQUV3QjtZQUFRLENBQUUsR0FBR3pCLElBQUk7WUFDekIsT0FBT2hGLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUs0RixRQUFRLENBQU07VUFDM0IsQ0FBQztVQUVLLFNBQVVILFNBQVNBLENBQUM7WUFBRXZILElBQUk7WUFBRUQ7VUFBSyxDQUFFO1lBQ3hDLE1BQU07Y0FDTHdCLEtBQUssRUFBRTtnQkFBRTNCLFVBQVUsRUFBRTJCO2NBQUs7WUFBRSxDQUM1QixHQUFHLElBQUFGLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTWlFLEtBQUssR0FBRztjQUNiLGdCQUFnQixFQUFFLENBQUMsUUFBUSxFQUFFK0IsSUFBSSxDQUFDO2NBQ2xDLGlCQUFpQixFQUFFLENBQUMsV0FBVyxFQUFFQyxZQUFZLENBQUM7Y0FFOUNFLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRUgsSUFBSTthQUMxQjtZQUVELElBQUksQ0FBQy9CLEtBQUssQ0FBQ3pGLElBQUksQ0FBQyxFQUFFLE9BQU8sSUFBSTtZQUU3QixNQUFNLENBQUM0SCxTQUFTLEVBQUVDLFdBQVcsQ0FBQyxHQUFHcEMsS0FBSyxDQUFDekYsSUFBSSxDQUFDO1lBRTVDLE1BQU04SCxTQUFTLEdBQ2Q5SCxJQUFJLEtBQUssZ0JBQWdCLEdBQ3RCRCxLQUFLLENBQUNnSSxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQ2xDaEksS0FBSyxDQUFDaUksV0FBVyxHQUNqQmpJLEtBQUssQ0FBQzZILFNBQVMsQ0FBQyxHQUNqQjdILEtBQUssQ0FBQzZILFNBQVMsQ0FBQztZQUNwQixJQUFJLENBQUNFLFNBQVMsSUFBS0csS0FBSyxDQUFDQyxPQUFPLENBQUNKLFNBQVMsQ0FBQyxJQUFJLENBQUNBLFNBQVMsQ0FBQzNFLE1BQU8sRUFBRSxPQUFPLElBQUk7WUFFOUUsT0FDQ2xDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUFiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBeUIsUUFBQSxRQUNDbkMsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDcUcsU0FBUyxDQUFDLENBQU0sRUFDM0IzRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDZ0IsS0FBQSxDQUFBUSxJQUFJO2NBQUN2QixTQUFTLEVBQUMsZ0JBQWdCO2NBQUNsRCxLQUFLLEVBQUVpSixTQUFTO2NBQUV2RSxPQUFPLEVBQUVzRTtZQUFXLEVBQUksQ0FDekU7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4Q0EsSUFBQTVHLE1BQUEsR0FBQTdELE9BQUE7VUFXTyxNQUFNK0sscUJBQXFCLEdBQUFwSyxPQUFBLENBQUFvSyxxQkFBQSxHQUFHbEgsTUFBQSxDQUFBVSxPQUFLLENBQUN5RyxhQUFhLENBQWtCLEVBQXFCLENBQUM7VUFDekYsTUFBTUMsd0JBQXdCLEdBQUdBLENBQUEsS0FBTXBILE1BQUEsQ0FBQVUsT0FBSyxDQUFDMkcsVUFBVSxDQUFDSCxxQkFBcUIsQ0FBQztVQUFDcEssT0FBQSxDQUFBc0ssd0JBQUEsR0FBQUEsd0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWHRGLElBQUFwSCxNQUFBLEdBQUE3RCxPQUFBO1VBQ0EsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFFQSxJQUFBaUgsTUFBQSxHQUFBakgsT0FBQTtVQUNBLElBQUFrSCxPQUFBLEdBQUFsSCxPQUFBO1VBR08sTUFBTW1MLHFCQUFxQixHQUFHQSxDQUFDO1lBQUV0QyxJQUFJO1lBQUVsRyxLQUFLLEVBQUU7Y0FBRXlJLFFBQVE7Y0FBRUM7WUFBVztVQUFFLENBQUUsS0FBSTtZQUNuRixNQUFNO2NBQUVsSCxLQUFLO2NBQUUzQixVQUFVO2NBQUVzRDtZQUFRLENBQUUsR0FBRyxJQUFBN0IsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUUxRCxNQUFNYSxPQUFPLEdBQUd1QyxLQUFLLElBQUc7Y0FDdkI2RCxXQUFXLENBQUN4QyxJQUFJLENBQUM7WUFDbEIsQ0FBQztZQUNELE1BQU15QyxHQUFHLEdBQUd6QyxJQUFJLENBQUMzRyxFQUFFLENBQUNxSixPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNyQyxNQUFNQyxHQUFHLEdBQUcsc0NBQXNDRixHQUFHLEdBQUd6QyxJQUFJLENBQUMzRyxFQUFFLEtBQUtrSixRQUFRLEVBQUVsSixFQUFFLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUNyRyxNQUFNOEMsSUFBSSxHQUFHaUMsTUFBQSxDQUFBbUIsS0FBSyxDQUFDa0QsR0FBRyxDQUFDO1lBRXZCLE1BQU1HLFFBQVEsR0FBRywrQkFBK0I1QyxJQUFJLENBQUMzRyxFQUFFLEVBQUU7WUFDekQsT0FDQzJCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUlDLFNBQVMsRUFBRTZHLEdBQUc7Y0FBRXZHLE9BQU8sRUFBRUE7WUFBTyxHQUNuQ3BCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBRThHO1lBQVEsR0FDdkI1SCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDd0MsT0FBQSxDQUFBaUIsSUFBSTtjQUFDbkQsSUFBSSxFQUFFQTtZQUFJLEVBQUksQ0FDZixFQUNObkIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsY0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS1AsS0FBSyxDQUFDM0IsVUFBVSxDQUFDNkYsS0FBSyxDQUFDUSxJQUFJLENBQUMzRyxFQUFFLENBQUMsQ0FBTSxFQUMxQzJCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGVBQU9QLEtBQUssQ0FBQzNCLFVBQVUsQ0FBQ2tKLGdCQUFnQixDQUFDN0MsSUFBSSxDQUFDM0csRUFBRSxDQUFDLENBQVEsQ0FDcEQsQ0FDRjtVQUVQLENBQUM7VUFBQ3ZCLE9BQUEsQ0FBQXdLLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCRixJQUFBdEgsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQTBGLEtBQUEsR0FBQTFGLE9BQUE7VUFDQSxJQUFBMkwsR0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUEyRixLQUFBLEdBQUEzRixPQUFBO1VBQ0EsSUFBQTRMLFNBQUEsR0FBQTVMLE9BQUE7VUFDQSxJQUFBK0QsV0FBQSxHQUFBL0QsT0FBQTtVQUdNLFNBQVU2TCxpQkFBaUJBLENBQUM7WUFBRXBHO1VBQU8sQ0FBRTtZQUM1QyxNQUFNO2NBQUVwRixLQUFLO2NBQUU4RDtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU0sQ0FBQ2dILFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd4SCxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNwRCxNQUFNO2NBQUVzSCxPQUFPO2NBQUVDLFFBQVE7Y0FBRXhJO1lBQWMsQ0FBRSxHQUFHLElBQUFxSSxTQUFBLENBQUFYLHdCQUF3QixHQUFFO1lBRXhFLE1BQU1uRixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLE1BQU1yQyxRQUFRLEdBQUcsTUFBTUYsY0FBYyxDQUFDNkgsUUFBUSxDQUFDO2NBQy9DVyxRQUFRLENBQUN0SSxRQUFRLENBQUM7WUFDbkIsQ0FBQztZQUVELE1BQU11SSxJQUFJLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZCLE1BQU16SSxjQUFjLENBQUM2SCxRQUFRLENBQUM7Y0FFOUJVLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDZCxDQUFDO1lBQ0QsT0FDQ2pJLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGNBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUtQLEtBQUssQ0FBQzNCLFVBQVUsQ0FBQ3lKLFdBQVcsQ0FBQ3BILEtBQUssQ0FBTSxFQUM3Q2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNnQixLQUFBLENBQUFRLElBQUk7Y0FDSnZCLFNBQVMsRUFBQyxzQkFBc0I7Y0FDaENoQyxLQUFLLEVBQUU7Z0JBQUV5SSxRQUFRO2dCQUFFQztjQUFXLENBQUU7Y0FDaEM1SixLQUFLLEVBQUVwQixLQUFLLENBQUNXLEtBQUssQ0FBQ3dCLFVBQVUsQ0FBQzZGLEtBQUs7Y0FDbkNsQyxPQUFPLEVBQUVSLEtBQUEsQ0FBQXdGO1lBQXFCLEVBQzdCLEVBQ0Z0SCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFRQyxTQUFTLEVBQUM7WUFBK0IsR0FDaERkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNYLFdBQUEsQ0FBQWUsTUFBTTtjQUFDQyxPQUFPLEVBQUMsU0FBUztjQUFDK0IsUUFBUTtjQUFDN0IsT0FBTyxFQUFFYSxRQUFRO2NBQUVvRyxRQUFRLEVBQUUsQ0FBQ2Q7WUFBUSxHQUN2RWpILEtBQUssQ0FBQ2UsT0FBTyxDQUFDaUgsTUFBTSxDQUNiLEVBQ1R0SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaUgsR0FBQSxDQUFBUyxRQUFRO2NBQUNySCxPQUFPLEVBQUMsU0FBUztjQUFDRSxPQUFPLEVBQUUrRyxJQUFJO2NBQUVFLFFBQVEsRUFBRSxDQUFDZDtZQUFRLEdBQzVEakgsS0FBSyxDQUFDZSxPQUFPLENBQUNtSCxRQUFRLENBQ2IsQ0FDSCxDQUNKO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0NBLElBQUFySSxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUVBLElBQUFzTSxXQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQW9ILFFBQUEsR0FBQXBILE9BQUE7VUFDQSxJQUFBMEYsS0FBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUE0TCxTQUFBLEdBQUE1TCxPQUFBO1VBQ0EsSUFBQXVNLFlBQUEsR0FBQXZNLE9BQUE7VUFFTSxTQUFVdUYsY0FBY0EsQ0FBQztZQUFFQyxJQUFJO1lBQUVDO1VBQU8sQ0FBRTtZQUMvQyxNQUFNO2NBQUVwRixLQUFLO2NBQUU4RDtZQUFLLENBQUUsR0FBRyxJQUFBRixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRTNDLE1BQU0sQ0FBQ1gsUUFBUSxFQUFFK0ksV0FBVyxDQUFDLEdBQUczSSxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNwRCxNQUFNLENBQUN6QyxJQUFJLEVBQUUrSixPQUFPLENBQUMsR0FBR2pJLE1BQUEsQ0FBQVUsT0FBSyxDQUFDQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRTlDLElBQUksQ0FBQ2dCLElBQUksRUFBRSxPQUFPLElBQUk7WUFFdEIsTUFBTWpDLGNBQWMsR0FBRyxNQUFNWCxJQUFJLElBQUc7Y0FDbkMsTUFBTWEsUUFBUSxHQUFRLE1BQU1wRCxLQUFLLENBQUNrRCxjQUFjLENBQUNYLElBQUksQ0FBQztjQUN0RDRKLFdBQVcsQ0FBQy9JLFFBQVEsQ0FBQztjQUNyQixPQUFPQSxRQUFRO1lBQ2hCLENBQUM7WUFDRCxNQUFNc0ksUUFBUSxHQUFHdEksUUFBUSxJQUFHO2NBQzNCLElBQUksQ0FBQ0EsUUFBUSxFQUFFO2dCQUNkVCxPQUFPLENBQUNDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzs7Y0FFcEM1QyxLQUFLLENBQUN1QixZQUFZLEdBQUc2QixRQUFRO2NBQzdCMkQsUUFBQSxDQUFBUSxPQUFPLENBQUNDLFNBQVMsQ0FBQywwQkFBMEJ4SCxLQUFLLENBQUNXLEtBQUssQ0FBQ2tCLEVBQUUsZUFBZXVCLFFBQVEsQ0FBQ3ZCLEVBQUUsRUFBRSxDQUFDO2NBQ3ZGdUQsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUVELE1BQU1nSCxhQUFhLEdBQUdBLENBQUEsS0FBSztjQUMxQlgsT0FBTyxDQUFDLE1BQU0sQ0FBQztjQUNmckcsT0FBTyxFQUFFO1lBQ1YsQ0FBQztZQUNELE1BQU1pSCxLQUFLLEdBQUc7Y0FBRUMsSUFBSSxFQUFFakgsS0FBQSxDQUFBbUcsaUJBQWlCO2NBQUVlLEVBQUUsRUFBRUwsWUFBQSxDQUFBTTtZQUF3QixDQUFFO1lBRXZFLElBQUksQ0FBQ3hNLEtBQUssQ0FBQ1csS0FBSyxDQUFDOEwsS0FBSyxFQUFFLE9BQU9qSixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDNEgsV0FBQSxDQUFBUyxlQUFlO2NBQUN0SCxPQUFPLEVBQUVnSDtZQUFhLEVBQUk7WUFDMUUsTUFBTU8sT0FBTyxHQUFHTixLQUFLLENBQUMzSyxJQUFJLENBQUM7WUFDM0IsT0FDQzhCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNrSCxTQUFBLENBQUFiLHFCQUFxQixDQUFDa0MsUUFBUTtjQUFDcEwsS0FBSyxFQUFFO2dCQUFFNEQsT0FBTztnQkFBRWhDLFFBQVE7Z0JBQUVGLGNBQWM7Z0JBQUVpSixXQUFXO2dCQUFFVCxRQUFRO2dCQUFFRDtjQUFPO1lBQUUsR0FDM0dqSSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDVixNQUFBLENBQUFrSixLQUFLO2NBQUMxSCxJQUFJO2NBQUNDLE9BQU8sRUFBRWdIO1lBQWEsR0FDakM1SSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDc0ksT0FBTyxPQUFHLENBQ0osQ0FDd0I7VUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0NBLElBQUFuSixNQUFBLEdBQUE3RCxPQUFBO1VBRUEsSUFBQTRGLEtBQUEsR0FBQTVGLE9BQUE7VUFDQSxJQUFBMkwsR0FBQSxHQUFBM0wsT0FBQTtVQUNBLElBQUErRCxXQUFBLEdBQUEvRCxPQUFBO1VBRUEsSUFBQWlFLFFBQUEsR0FBQWpFLE9BQUE7VUFDQSxJQUFBNEwsU0FBQSxHQUFBNUwsT0FBQTtVQUVNLFNBQVU2TSx3QkFBd0JBLENBQUE7WUFDdkMsTUFBTTtjQUFFMUk7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUNwQyxNQUFNO2NBQUVYLFFBQVE7Y0FBRWdDLE9BQU87Y0FBRXNHO1lBQVEsQ0FBRSxHQUFHLElBQUFILFNBQUEsQ0FBQVgsd0JBQXdCLEdBQUU7WUFDbEUsTUFBTSxDQUFDM0gsUUFBUSxFQUFFa0QsV0FBVyxDQUFDLEdBQUczQyxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMySSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHdkosTUFBQSxDQUFBVSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFNUMsTUFBTTZJLE1BQU0sR0FBRztjQUNkQyxRQUFRLEVBQUU5RixLQUFLLElBQUc7Z0JBQ2pCNEYsUUFBUSxDQUFDNUYsS0FBSyxDQUFDK0YsYUFBYSxDQUFDMUwsS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRG9ELE9BQU8sRUFBRSxNQUFNdUMsS0FBSyxJQUFHO2dCQUN0QixJQUFJO2tCQUNIaEIsV0FBVyxDQUFDLElBQUksQ0FBQztrQkFFakIsTUFBTS9DLFFBQVEsQ0FBQzRJLFFBQVEsQ0FBQ2MsS0FBSyxDQUFDO2tCQUM5QnBCLFFBQVEsQ0FBQ3RJLFFBQVEsQ0FBQztpQkFDbEIsQ0FBQyxPQUFPVixDQUFDLEVBQUUsQyxDQUNYLFNBQVM7a0JBQ1R5SyxVQUFVLENBQUMsTUFBSztvQkFDZmhILFdBQVcsQ0FBQyxLQUFLLENBQUM7a0JBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7O2NBRVY7YUFDQTtZQUVELE9BQ0MzQyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFBYixNQUFBLENBQUFVLE9BQUEsQ0FBQXlCLFFBQUEsUUFDQ25DLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNrQixLQUFBLENBQUFLLElBQUksUUFDSnBDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGlCQUNDYixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxhQUFLUCxLQUFLLENBQUNzSixNQUFNLENBQUM1SSxLQUFLLENBQU0sRUFDN0JoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxZQUFJUCxLQUFLLENBQUNzSixNQUFNLENBQUMzRCxXQUFXLENBQUssRUFDakNqRyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxZQUFJUCxLQUFLLENBQUNzSixNQUFNLENBQUNDLFlBQVksQ0FBSyxDQUMxQixFQUNUN0osTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2tCLEtBQUEsQ0FBQStILFFBQVE7Y0FDUi9HLEtBQUssRUFBRXpDLEtBQUssQ0FBQ3NKLE1BQU0sQ0FBQ0csUUFBUSxDQUFDaEgsS0FBSztjQUNsQ2dELElBQUksRUFBQyxjQUFjO2NBQ25CL0gsS0FBSyxFQUFFc0wsS0FBSztjQUNaRyxRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6Qk8sV0FBVyxFQUFFMUosS0FBSyxDQUFDc0osTUFBTSxDQUFDRyxRQUFRLENBQUNDO1lBQVcsRUFDN0MsQ0FDSSxFQUNQaEssTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQStCLEdBQ2hEZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDWCxXQUFBLENBQUFlLE1BQU07Y0FBQ0MsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsT0FBTyxFQUFFb0ksTUFBTSxDQUFDcEk7WUFBTyxHQUMvQ2QsS0FBSyxDQUFDZSxPQUFPLENBQUNtSCxRQUFRLENBQ2YsQ0FDRCxFQUNUeEksTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2lILEdBQUEsQ0FBQW1DLGdCQUFnQjtjQUFDeEssUUFBUSxFQUFFQTtZQUFRLEdBQ25DTyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaUgsR0FBQSxDQUFBb0MsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUU5SixLQUFLLENBQUMrSjtZQUFnQixFQUFJLENBQzlDLENBQ2pCO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNURBLElBQUFsSyxNQUFBLEdBQUFoRSxPQUFBO1VBQ0EsSUFBQTZELE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUVNLFNBQVUrTSxlQUFlQSxDQUFDO1lBQUV0SDtVQUFPLENBQUU7WUFDMUMsTUFBTTtjQUFFcEYsS0FBSztjQUFFOEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUUzQyxPQUNDUCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDVixNQUFBLENBQUFtSyxVQUFVO2NBQUMzSSxJQUFJO2NBQUNDLE9BQU8sRUFBRUE7WUFBTyxHQUNoQzVCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGNBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLGFBQUtQLEtBQUssQ0FBQzNCLFVBQVUsQ0FBQ3lKLFdBQVcsQ0FBQ21DLGVBQWUsQ0FBTSxFQUN2RHZLLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLFlBQUlQLEtBQUssQ0FBQzNCLFVBQVUsQ0FBQ3lKLFdBQVcsQ0FBQ29DLFVBQVUsQ0FBSyxDQUMzQyxDQUNNO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZkEsSUFBQUMsS0FBQSxHQUFBdE8sT0FBQTtVQUNBLElBQUF1TyxPQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXdPLFNBQUEsR0FBQXhPLE9BQUE7VUFFTztVQUFVLFNBQ1J5TyxZQUFZQSxDQUFDO1lBQUV0SyxLQUFLO1lBQUU5RDtVQUFLLENBQUU7WUFDckMsT0FDQ2lPLEtBQUEsQ0FBQTVKLGFBQUEsQ0FBQzhKLFNBQUEsQ0FBQUUsa0JBQWtCO2NBQ2xCQyxVQUFVLEVBQUUsQ0FDWCxDQUFDSixPQUFBLENBQUFoSyxPQUFNLENBQUNxSyxNQUFNLENBQUNDLFFBQVEsRUFBRSxHQUFHLENBQUMsRUFDN0IsQ0FBQzFLLEtBQUssQ0FBQ3dLLFVBQVUsQ0FBQ0csT0FBTyxFQUFFLGVBQWUsQ0FBQyxFQUMzQyxDQUFDM0ssS0FBSyxDQUFDd0ssVUFBVSxDQUFDSSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQ2pDO2NBQ0QxTyxLQUFLLEVBQUVBLEtBQUs7Y0FDWm9ELFFBQVEsRUFBRXBELEtBQUssQ0FBQ3VCO1lBQVksRUFDM0I7VUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQkEsSUFBQWlDLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBZ1AsTUFBQSxHQUFBaFAsT0FBQTtVQUVNLFNBQVVpUCxhQUFhQSxDQUFDO1lBQUU5SyxLQUFLO1lBQUVsQjtVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBT1ksTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3NLLE1BQUEsQ0FBQUUsS0FBSztjQUFDbkssT0FBTyxFQUFDO1lBQU8sR0FBRVosS0FBSyxDQUFDbEIsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQVksTUFBQSxHQUFBN0QsT0FBQTtVQVVPLE1BQU1tUCxhQUFhLEdBQUF4TyxPQUFBLENBQUF3TyxhQUFBLEdBQUd0TCxNQUFBLENBQUFVLE9BQUssQ0FBQ3lHLGFBQWEsQ0FBQyxFQUFtQixDQUFDO1VBQzlELE1BQU01RyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNUCxNQUFBLENBQUFVLE9BQUssQ0FBQzJHLFVBQVUsQ0FBQ2lFLGFBQWEsQ0FBQztVQUFDeE8sT0FBQSxDQUFBeUQsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDWHRFLElBQUFrSyxLQUFBLEdBQUF0TyxPQUFBO1VBQ0EsSUFBQW9QLE1BQUEsR0FBQXBQLE9BQUE7VUFDQSxJQUFBcVAsZUFBQSxHQUFBclAsT0FBQTtVQUdBLElBQUFzUCxRQUFBLEdBQUF0UCxPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBdVAsT0FBQSxHQUFBdlAsT0FBQTtVQUNBLElBQUF3TyxTQUFBLEdBQUF4TyxPQUFBO1VBRU87VUFBVSxTQUNSVSxJQUFJQSxDQUFDOE8sS0FBSztZQUNsQixNQUFNO2NBQUVuUDtZQUFLLENBQUUsR0FBNEJtUCxLQUFLO1lBQ2hELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFdEwsS0FBSyxDQUFDLEdBQUcsSUFBQWlMLE1BQUEsQ0FBQU0sUUFBUSxFQUFDTCxlQUFBLENBQUF6SyxNQUFNLENBQUMrSyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDak4sS0FBSyxFQUFFa04sUUFBUSxDQUFDLEdBQUd0QixLQUFLLENBQUM5SixRQUFRLENBQUNuRSxLQUFLLENBQUNxQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDWCxJQUFJLEVBQUUrSixPQUFPLENBQUMsR0FBR3dDLEtBQUssQ0FBQzlKLFFBQVEsQ0FBQ25FLEtBQUssQ0FBQzBCLElBQUksQ0FBQztZQUNsRCxJQUFBd04sT0FBQSxDQUFBTSxTQUFTLEVBQUMsQ0FBQ3hQLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkIsSUFBSUEsS0FBSyxDQUFDcUMsS0FBSyxLQUFLQSxLQUFLLEVBQUVrTixRQUFRLENBQUN2UCxLQUFLLENBQUNxQyxLQUFLLENBQUM7Y0FDaERvSixPQUFPLENBQUN6TCxLQUFLLENBQUMwQixJQUFJLENBQUM7WUFDcEIsQ0FBQyxDQUFDO1lBQ0YsSUFBQXdOLE9BQUEsQ0FBQU0sU0FBUyxFQUFDLENBQUN4UCxLQUFLLENBQUMsRUFBRSxNQUFNeUwsT0FBTyxDQUFDekwsS0FBSyxDQUFDMEIsSUFBSSxDQUFDLEVBQUUsbUJBQW1CLENBQUM7WUFDbEUsSUFBSSxDQUFDME4sVUFBVSxJQUFJLENBQUNwUCxLQUFLLENBQUNxQyxLQUFLLEVBQUUsT0FBTzRMLEtBQUEsQ0FBQTVKLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBK0wsT0FBTztjQUFDQyxNQUFNO1lBQUEsRUFBRztZQUUxRCxJQUFJaE8sSUFBSSxLQUFLLFVBQVUsRUFBRTtjQUN4QixPQUFPdU0sS0FBQSxDQUFBNUosYUFBQSxDQUFDOEosU0FBQSxDQUFBQyxZQUFZO2dCQUFBLEdBQUtlLEtBQUs7Z0JBQUVyTCxLQUFLLEVBQUVBO2NBQUssRUFBSTs7WUFHakQsT0FBT21LLEtBQUEsQ0FBQTVKLGFBQUEsQ0FBQzRLLFFBQUEsQ0FBQVUsVUFBVTtjQUFBLEdBQUtSO1lBQUssRUFBSTtVQUNqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQTNMLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUgsTUFBQSxHQUFBakgsT0FBQTtVQVdPLE1BQU1pUSxlQUFlLEdBQXFCQSxDQUFDO1lBQ2pEQyxNQUFNO1lBQ05DLFFBQVEsRUFBRW5ELE9BQU8sR0FBRyxLQUFLO1lBQ3pCckksU0FBUztZQUNUeUwsUUFBUTtZQUNSeEcsSUFBSTtZQUNKeUc7VUFBTSxDQUNOLEtBQUk7WUFDSixNQUFNLENBQUNDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcsSUFBQTFNLE1BQUEsQ0FBQVcsUUFBUSxFQUFDLEtBQUssQ0FBQztZQUNuRCxNQUFNLENBQUN5SixPQUFPLEVBQUV1QyxVQUFVLENBQUMsR0FBRyxJQUFBM00sTUFBQSxDQUFBVyxRQUFRLEVBQUMsT0FBTzRMLFFBQVEsS0FBSyxRQUFRLEdBQUdBLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEYsTUFBTUssVUFBVSxHQUFHNU0sTUFBQSxDQUFBVSxPQUFLLENBQUN5RSxNQUFNLENBQWlCLElBQUksQ0FBQztZQUNyRDtZQUNBLE1BQU0wSCxVQUFVLEdBQUdBLENBQUEsS0FBSztjQUN2QkgsYUFBYSxDQUFDLENBQUNELFVBQVUsQ0FBQztjQUUxQjlDLFVBQVUsQ0FBQyxNQUFLO2dCQUNmLE1BQU1tRCxFQUFFLEdBQUdGLFVBQVUsQ0FBQ3JILE9BQU87Z0JBQzdCLElBQUl1SCxFQUFFLEVBQUU7a0JBQ1AsTUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLFdBQVcsRUFBRTtrQkFDcEMsTUFBTUMsR0FBRyxHQUFHQyxVQUFVLENBQUNDLFlBQVksRUFBRTtrQkFDckNMLEtBQUssQ0FBQ00sa0JBQWtCLENBQUNQLEVBQUUsQ0FBQztrQkFDNUJDLEtBQUssQ0FBQ08sUUFBUSxDQUFDLEtBQUssQ0FBQztrQkFDckJKLEdBQUcsRUFBRUssZUFBZSxFQUFFO2tCQUN0QkwsR0FBRyxFQUFFTSxRQUFRLENBQUNULEtBQUssQ0FBQztrQkFDcEJELEVBQUUsQ0FBQ1csS0FBSyxFQUFFOztjQUVaLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDTixDQUFDO1lBRUQsTUFBTUMsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixNQUFNckIsTUFBTSxDQUFDO2dCQUFFLENBQUN0RyxJQUFJLEdBQUc2RyxVQUFVLENBQUNySCxPQUFPLEVBQUVvSTtjQUFXLENBQUUsQ0FBQztjQUN6RGQsVUFBVSxFQUFFO1lBQ2IsQ0FBQztZQUNELE1BQU1sRixHQUFHLEdBQUcsdUJBQXVCN0csU0FBUyxHQUFHLElBQUlBLFNBQVMsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNyRSxNQUFNSyxJQUFJLEdBQUdzTCxVQUFVLEdBQUcsTUFBTSxHQUFHLE1BQU07WUFDekMsTUFBTW1CLFdBQVcsR0FBR25CLFVBQVUsR0FBRyx1QkFBdUIsR0FBRyxFQUFFO1lBRTdELE9BQ0N6TSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUU2RztZQUFHLEdBQ2xCM0gsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3NJLE9BQU87Y0FDUGpFLEdBQUcsRUFBRTBILFVBQVU7Y0FDZjlMLFNBQVMsRUFBRThNLFdBQVc7Y0FDdEJDLGVBQWUsRUFBRXBCLFVBQVU7Y0FDM0JxQiw4QkFBOEIsRUFBRTtZQUFJLEdBRW5DMUQsT0FBTyxDQUNDLEVBQ1ZwSyxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFLQyxTQUFTLEVBQUM7WUFBK0IsR0FDNUMyTCxVQUFVLElBQUl6TSxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDdUMsTUFBQSxDQUFBc0IsVUFBVTtjQUFDdkQsSUFBSSxFQUFDLFdBQVc7Y0FBQ0MsT0FBTyxFQUFFeUw7WUFBVSxFQUFJLEVBQ25FN00sTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3VDLE1BQUEsQ0FBQXNCLFVBQVU7Y0FBQ3ZELElBQUksRUFBRUEsSUFBSTtjQUFFQyxPQUFPLEVBQUVzTTtZQUFVLEVBQUksQ0FDMUMsQ0FDRDtVQUVSLENBQUM7VUFBQzVRLE9BQUEsQ0FBQXNQLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRUYsSUFBQXBNLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBaUUsUUFBQSxHQUFBakUsT0FBQTtVQUNBLElBQUEyTCxHQUFBLEdBQUEzTCxPQUFBO1VBRU0sU0FBVTRSLGlCQUFpQkEsQ0FBQyxFQUFFO1lBQ25DLE1BQU07Y0FDTHpOLEtBQUssRUFBRTtnQkFBRVMsTUFBTSxFQUFFaU47Y0FBVyxDQUFFO2NBQzlCeFI7WUFBSyxDQUNMLEdBQUcsSUFBQTRELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTTZKLE9BQU8sR0FBRzVOLEtBQUssQ0FBQ1csS0FBSyxDQUFDOEksV0FBVyxJQUFJK0gsV0FBVyxDQUFDL0gsV0FBVztZQUNsRSxNQUFNdUcsTUFBTSxHQUFHLE1BQUFBLENBQU87Y0FBRXlCO1lBQU0sQ0FBRSxLQUFJO2NBQ25DelIsS0FBSyxDQUFDZ0QsSUFBSSxDQUFDO2dCQUFFLENBQUN5TyxNQUFNLENBQUNsSSxJQUFJLEdBQUdrSSxNQUFNLENBQUNqUTtjQUFLLENBQUUsQ0FBQztZQUM1QyxDQUFDO1lBRUQsT0FDQ2dDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQmQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS21OLFdBQVcsQ0FBQy9ILFdBQVcsQ0FBTSxFQUNsQ2pHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNpSCxHQUFBLENBQUFzRSxlQUFlO2NBQUNyRyxJQUFJLEVBQUMsYUFBYTtjQUFDc0csTUFBTSxFQUFFRyxNQUFNO2NBQUVGLFFBQVEsRUFBQztZQUFHLEdBQzlEbEMsT0FBTyxDQUNTLENBQ2I7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4QkEsSUFBQXRDLEdBQUEsR0FBQTNMLE9BQUE7VUFDQSxJQUFBNkQsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQXVPLE9BQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBK1IsUUFBQSxHQUFBL1IsT0FBQTtVQUNBLElBQUFnUyxXQUFBLEdBQUFoUyxPQUFBO1VBQ0EsSUFBQW9QLE1BQUEsR0FBQXBQLE9BQUE7VUFFTztVQUFVLFNBQVVpUyxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FDTDlOLEtBQUs7Y0FDTDlELEtBQUs7Y0FDTDhELEtBQUssRUFBRTtnQkFBRVMsTUFBTSxFQUFFaU47Y0FBVztZQUFFLENBQzlCLEdBQUcsSUFBQTVOLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTVMsS0FBSyxHQUFHeEUsS0FBSyxDQUFDVyxLQUFLLENBQUM2RCxLQUFLLElBQUlnTixXQUFXLENBQUNoTixLQUFLO1lBQ3BELE1BQU1xTCxNQUFNLEdBQUcxSSxLQUFLLElBQUluSCxLQUFLLENBQUNnRCxJQUFJLENBQUM7Y0FBRXdCLEtBQUssRUFBRTJDLEtBQUssQ0FBQ3NLLE1BQU0sQ0FBQ2pRO1lBQUssQ0FBRSxDQUFDO1lBQ2pFLE1BQU0sQ0FBQ3FRLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUd0TyxNQUFBLENBQUFVLE9BQUssQ0FBQ0MsUUFBUSxDQUFDbkUsS0FBSyxDQUFDVyxLQUFLLENBQUNrUixPQUFPLENBQUM7WUFDakUsSUFBQTlDLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN4UCxLQUFLLENBQUNXLEtBQUssQ0FBQyxFQUFFLE1BQU1tUixVQUFVLENBQUM5UixLQUFLLENBQUNXLEtBQUssQ0FBQ2tSLE9BQU8sQ0FBQyxFQUFFLGlCQUFpQixDQUFDO1lBQ2xGLE1BQU1FLFVBQVUsR0FBR2pGLEtBQUssSUFBSTlNLEtBQUssQ0FBQ1csS0FBSyxDQUFDcVIsZUFBZSxDQUFDbEYsS0FBSyxDQUFDO1lBQzlELE9BQ0N0SixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxrQkFDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ2lILEdBQUEsQ0FBQTJHLFlBQVk7Y0FDWjNELFVBQVUsRUFBRSxDQUNYLENBQUNKLE9BQUEsQ0FBQWhLLE9BQU0sQ0FBQ3FLLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFLEdBQUcsQ0FBQyxFQUM3QixDQUFDMUssS0FBSyxDQUFDd0ssVUFBVSxDQUFDRyxPQUFPLEVBQUUsZUFBZSxDQUFDLEVBQzNDLENBQUMzSyxLQUFLLENBQUN3SyxVQUFVLENBQUNJLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDakMsRUFDQSxFQUNGbEwsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUE7Y0FBUUMsU0FBUyxFQUFDO1lBQTRELEdBQzdFZCxNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQTtjQUFTQyxTQUFTLEVBQUM7WUFBNkMsR0FDL0RkLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNzTixXQUFBLENBQUFPLFVBQVU7Y0FDVjFOLEtBQUssRUFBRVYsS0FBSyxDQUFDK04sT0FBTyxDQUFDck4sS0FBSztjQUMxQmlGLFdBQVcsRUFBRTNGLEtBQUssQ0FBQytOLE9BQU8sQ0FBQ3BJLFdBQVc7Y0FDdEMwSSxXQUFXLEVBQUVuUyxLQUFLLENBQUNXLEtBQUssQ0FBQ3lSLGtCQUFrQjtjQUMzQ1AsT0FBTyxFQUFFQSxPQUFPO2NBQ2hCRSxVQUFVLEVBQUVBO1lBQVUsRUFDckIsRUFDRnZPLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUNpSCxHQUFBLENBQUFzRSxlQUFlO2NBQUNyRyxJQUFJLEVBQUMsT0FBTztjQUFDdUcsUUFBUSxFQUFDLElBQUk7Y0FBQ0QsTUFBTSxFQUFFQTtZQUFNLEdBQ3hEckwsS0FBSyxDQUNXLEVBRWxCaEIsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ3FOLFFBQUEsQ0FBQVcsYUFBYSxPQUFHLENBQ1IsQ0FDRixDQUNBO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUNBLElBQUFwRSxLQUFBLEdBQUF0TyxPQUFBO1VBQ0EsSUFBQW9QLE1BQUEsR0FBQXBQLE9BQUE7VUFDQSxJQUFBMkwsR0FBQSxHQUFBM0wsT0FBQTtVQUVBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQXVQLE9BQUEsR0FBQXZQLE9BQUE7VUFDQSxJQUFBcVAsZUFBQSxHQUFBclAsT0FBQTtVQUNBLElBQUF5SSxPQUFBLEdBQUF6SSxPQUFBO1VBRUEsSUFBQTJTLFdBQUEsR0FBQTNTLE9BQUE7VUFFTztVQUFVLFNBQ1JnUSxVQUFVQSxDQUFDUixLQUFLO1lBQ3hCLE1BQU07Y0FBRW5QO1lBQUssQ0FBRSxHQUE0Qm1QLEtBQUs7WUFFaEQsTUFBTSxDQUFDQyxVQUFVLEVBQUV0TCxLQUFLLENBQUMsR0FBRyxJQUFBb0wsT0FBQSxDQUFBRyxRQUFRLEVBQUNMLGVBQUEsQ0FBQXpLLE1BQU0sQ0FBQytLLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNyTSxRQUFRLEVBQUVrRCxXQUFXLENBQUMsR0FBRzhILEtBQUssQ0FBQzlKLFFBQVEsQ0FBQ25FLEtBQUssQ0FBQ2lELFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNzUCxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHdkUsS0FBSyxDQUFDOUosUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUNoQyxVQUFVLEVBQUVzUSxhQUFhLENBQUMsR0FBR3hFLEtBQUssQ0FBQzlKLFFBQVEsQ0FBQ25FLEtBQUssQ0FBQ1csS0FBSyxFQUFFd0IsVUFBVSxFQUFFZixLQUFLLENBQUM7WUFDbEYsTUFBTSxHQUFHc1Isa0JBQWtCLENBQUMsR0FBR3pFLEtBQUssQ0FBQzlKLFFBQVEsRUFBRTtZQUMvQyxNQUFNd08scUJBQXFCLEdBQUdBLENBQUEsS0FBSztjQUNsQ0YsYUFBYSxDQUFDelMsS0FBSyxDQUFDVyxLQUFLLEVBQUV3QixVQUFVLEVBQUVmLEtBQUssQ0FBQztZQUM5QyxDQUFDO1lBRUQsSUFBQTJOLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN4UCxLQUFLLENBQUNXLEtBQUssQ0FBQyxFQUFFLE1BQU13RixXQUFXLENBQUNuRyxLQUFLLEVBQUVXLEtBQUssRUFBRXNDLFFBQVEsQ0FBQyxDQUFDO1lBQ25FLElBQUE4TCxNQUFBLENBQUFTLFNBQVMsRUFBQyxDQUFDeFAsS0FBSyxDQUFDLEVBQUUsTUFBTXlTLGFBQWEsQ0FBQ3pTLEtBQUssQ0FBQ1csS0FBSyxFQUFFd0IsVUFBVSxFQUFFZixLQUFLLENBQUMsQ0FBQztZQUN2RSxJQUFBMk4sTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3hQLEtBQUssQ0FBQ1csS0FBSyxDQUFDLEVBQUVnUyxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztZQUN2RSxJQUFBNUQsTUFBQSxDQUFBUyxTQUFTLEVBQUMsQ0FBQ3hQLEtBQUssQ0FBQyxFQUFFLE1BQU0wUyxrQkFBa0IsQ0FBQzFTLEtBQUssQ0FBQ3VCLFlBQVksQ0FBQyxFQUFFLG1CQUFtQixDQUFDO1lBRXJGLElBQUksQ0FBQzZOLFVBQVUsSUFBSSxDQUFDcFAsS0FBSyxDQUFDcUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFFOUMsTUFBTW9ELFFBQVEsR0FBRyxNQUFNMEIsS0FBSyxJQUFHO2NBQzlCQSxLQUFLLENBQUN5TCxjQUFjLEVBQUU7Y0FDdEJ6TSxXQUFXLENBQUMsSUFBSSxDQUFDO2NBQ2pCLE1BQU1uRyxLQUFLLENBQUNnRCxJQUFJLEVBQUU7Y0FDbEIyTixVQUFVLENBQUN4RCxVQUFVLENBQUMsTUFBSztnQkFDMUJoSCxXQUFXLENBQUMsS0FBSyxDQUFDO2NBQ25CLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDO1lBRUQsTUFBTTNFLEtBQUssR0FBRztjQUNieEIsS0FBSztjQUNMaUQsUUFBUTtjQUNSYSxLQUFLO2NBQ0x5TyxXQUFXO2NBQ1hwUSxVQUFVO2NBQ1ZzRCxRQUFRO2NBQ1JvTixlQUFlLEVBQUU3UyxLQUFLLENBQUNXLEtBQUssRUFBRXdCLFVBQVUsRUFBRXVEO2FBQzFDO1lBQ0QsTUFBTXlGLEdBQUcsR0FBRyxJQUFJbEksUUFBUSxHQUFHLGFBQWEsR0FBRyxFQUFFLEVBQUU7WUFFL0MsT0FDQ2dMLEtBQUEsQ0FBQTVKLGFBQUEsQ0FBQ1QsUUFBQSxDQUFBa0wsYUFBYSxDQUFDbEMsUUFBUTtjQUFDcEwsS0FBSyxFQUFFQTtZQUFLLEdBQ25DeU0sS0FBQSxDQUFBNUosYUFBQSxDQUFDK0QsT0FBQSxDQUFBd0osTUFBTSxPQUFHLEVBQ1YzRCxLQUFBLENBQUE1SixhQUFBLENBQUNpSCxHQUFBLENBQUF3SCxhQUFhO2NBQUN4TyxTQUFTLEVBQUU2RyxHQUFHO2NBQUVsSSxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUNqRCxLQUFLLENBQUNXLEtBQUssRUFBRXdCLFVBQVUsQ0FBQ3VEO1lBQU0sR0FDcEZ1SSxLQUFBLENBQUE1SixhQUFBLENBQUNpTyxXQUFBLENBQUFTLGdCQUFnQixPQUFHLENBQ0wsQ0FDUTtVQUUzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzREEsSUFBQXZQLE1BQUEsR0FBQTdELE9BQUE7VUFDQSxJQUFBcVQsV0FBQSxHQUFBclQsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQW9QLE1BQUEsR0FBQXBQLE9BQUE7VUFHQSxJQUFBc1QsWUFBQSxHQUFBdFQsT0FBQTtVQUdNLFNBQVVvVCxnQkFBZ0JBLENBQUE7WUFDL0IsTUFBTTtjQUNML1MsS0FBSztjQUNMOEQsS0FBSyxFQUFFO2dCQUFFUyxNQUFNLEVBQUVpTjtjQUFXO1lBQUUsQ0FDOUIsR0FBRyxJQUFBNU4sUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNUyxLQUFLLEdBQUd4RSxLQUFLLENBQUNXLEtBQUssQ0FBQzZELEtBQUssSUFBSWdOLFdBQVcsQ0FBQ2hOLEtBQUs7WUFFcEQsSUFBQXVLLE1BQUEsQ0FBQVMsU0FBUyxFQUFDLENBQUN4UCxLQUFLLENBQUNXLEtBQUssQ0FBQyxFQUFFLE1BQUssQ0FBRSxDQUFDLEVBQUUsb0JBQW9CLENBQUM7WUFFeEQsT0FDQzZDLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUEwQixHQUN4Q2QsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsa0JBQ0NiLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQmQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsYUFBS21OLFdBQVcsQ0FBQ2hJLFNBQVMsRSxJQUFPLEVBQ2pDaEcsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsWSxLQUFLckUsS0FBSyxDQUFDVyxLQUFLLENBQUM2SSxTQUFTLENBQUssQ0FDMUIsRUFDTmhHLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBLENBQUM0TyxZQUFBLENBQUExQixpQkFBaUIsT0FBRyxDQUNaLEVBQ1YvTixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDMk8sV0FBQSxDQUFBeE4sZ0JBQWdCLE9BQUcsQ0FDZjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBaEMsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQStELFdBQUEsR0FBQS9ELE9BQUE7VUFDQSxJQUFBMEksTUFBQSxHQUFBMUksT0FBQTtVQUNBLElBQUFvSCxRQUFBLEdBQUFwSCxPQUFBO1VBR00sU0FBVTBTLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUFFclMsS0FBSztjQUFFOEQ7WUFBSyxDQUFFLEdBQUcsSUFBQUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNbkMsS0FBSyxHQUFHO2NBQUVpSyxRQUFRLEVBQUU3TCxLQUFLLENBQUNXLEtBQUssQ0FBQzRCLElBQUksS0FBSyxPQUFPLElBQUksQ0FBQ3ZDLEtBQUssQ0FBQ1csS0FBSyxDQUFDdVM7WUFBUyxDQUFFO1lBRWxGLE1BQU16TixRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsTUFBTXpGLEtBQUssQ0FBQ3NELE9BQU8sRUFBRTtnQkFDckIrRSxNQUFBLENBQUFZLEtBQUssQ0FBQ2tLLE9BQU8sQ0FBQ3JQLEtBQUssQ0FBQ21GLEtBQUssQ0FBQ21LLGVBQWUsQ0FBQztnQkFDMUNyTSxRQUFBLENBQUFRLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLDJCQUEyQixDQUFDO2VBQzlDLENBQUMsT0FBTzlFLENBQUMsRUFBRTtnQkFDWDJGLE1BQUEsQ0FBQVksS0FBSyxDQUFDckcsS0FBSyxDQUFDa0IsS0FBSyxDQUFDbUYsS0FBSyxDQUFDb0sscUJBQXFCLENBQUM7O1lBRWhELENBQUM7WUFDRCxPQUNDN1AsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsY0FDQ2IsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsQ0FBQ1gsV0FBQSxDQUFBZSxNQUFNO2NBQUN4QixRQUFRLEVBQUVqRCxLQUFLLENBQUNpRCxRQUFRO2NBQUUyQixPQUFPLEVBQUVhLFFBQVE7Y0FBRWYsT0FBTyxFQUFDLFNBQVM7Y0FBQSxHQUFLOUM7WUFBSyxHQUM5RWtDLEtBQUssQ0FBQ2UsT0FBTyxDQUFDdkIsT0FBTyxDQUNkLENBQ0o7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQkEsSUFBQUUsTUFBQSxHQUFBN0QsT0FBQTtVQUNBLElBQUFpRSxRQUFBLEdBQUFqRSxPQUFBO1VBQ0EsSUFBQTJULGdCQUFBLEdBQUEzVCxPQUFBO1VBR00sU0FBVTRULFdBQVdBLENBQUMsRUFBRTtZQUM3QixNQUFNO2NBQ0x6UCxLQUFLLEVBQUU7Z0JBQUVTLE1BQU0sRUFBRWlOO2NBQVcsQ0FBRTtjQUM5QnhSO1lBQUssQ0FDTCxHQUFHLElBQUE0RCxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXRCLE1BQU02SixPQUFPLEdBQUc1TixLQUFLLENBQUNXLEtBQUssQ0FBQzZELEtBQUssSUFBSWdOLFdBQVcsQ0FBQ2hOLEtBQUs7WUFDdEQsT0FDQ2hCLE1BQUEsQ0FBQVUsT0FBQSxDQUFBRyxhQUFBO2NBQUtDLFNBQVMsRUFBQztZQUFpQixHQUMvQmQsTUFBQSxDQUFBVSxPQUFBLENBQUFHLGFBQUEsaUJBQVNtTixXQUFXLENBQUNoTixLQUFLLENBQVUsRUFDcENoQixNQUFBLENBQUFVLE9BQUEsQ0FBQUcsYUFBQSxDQUFDaVAsZ0JBQUEsQ0FBQTFELGVBQWU7Y0FDZnJHLElBQUksRUFBQyxPQUFPO2NBQ1pzRyxNQUFNLEVBQUUsTUFBTXJILElBQUksSUFBRztnQkFDcEIsTUFBTXhJLEtBQUssQ0FBQ2dELElBQUksQ0FBQ3dGLElBQUksQ0FBQztjQUN2QixDQUFDO2NBQ0RzSCxRQUFRLEVBQUM7WUFBRyxHQUVYbEMsT0FBTyxDQUNTLENBQ2I7VUFFUiJ9