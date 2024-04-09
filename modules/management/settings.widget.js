System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.1.0/empty", "pragmate-ui@0.1.0/components", "pragmate-ui@0.1.0/list", "pragmate-ui@0.1.0/form", "pragmate-ui@0.1.0/modal", "pragmate-ui@0.1.0/icons", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.0/collapsible", "pragmate-ui@0.1.0/toast", "pragmate-ui@0.1.0/chips", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/config", "@aimpact/ailearn-app@0.0.32/modules/management/activity.code", "pragmate-ui@0.1.0/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/components/cover-image.code"], function (_export, _context3) {
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
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_7 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi010Empty) {
      dependency_9 = _pragmateUi010Empty;
    }, function (_pragmateUi010Components) {
      dependency_10 = _pragmateUi010Components;
    }, function (_pragmateUi010List) {
      dependency_11 = _pragmateUi010List;
    }, function (_pragmateUi010Form) {
      dependency_12 = _pragmateUi010Form;
    }, function (_pragmateUi010Modal) {
      dependency_13 = _pragmateUi010Modal;
    }, function (_pragmateUi010Icons) {
      dependency_14 = _pragmateUi010Icons;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi010Collapsible) {
      dependency_16 = _pragmateUi010Collapsible;
    }, function (_pragmateUi010Toast) {
      dependency_17 = _pragmateUi010Toast;
    }, function (_pragmateUi010Chips) {
      dependency_18 = _pragmateUi010Chips;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_19 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_20 = _aimpactAilearnApp0032Config;
    }, function (_aimpactAilearnApp0032ModulesManagementActivityCode) {
      dependency_21 = _aimpactAilearnApp0032ModulesManagementActivityCode;
    }, function (_pragmateUi010Alert) {
      dependency_22 = _pragmateUi010Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_24 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_25 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032ComponentsCoverImageCode) {
      dependency_26 = _aimpactAilearnApp0032ComponentsCoverImageCode;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/chips', dependency_18], ['@aimpact/ailearn-app/components/ui', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_21], ['pragmate-ui/alert', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_25], ['@aimpact/ailearn-app/components/cover-image.code', dependency_26]]);
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
        hash: 639399247,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
            }), _react.default.createElement(ContentEditable, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsInNob3ciLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsIl9wcm9wZXJ0eSIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIlByb3BlcnR5IiwibmFtZSIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIl9jaGlwcyIsImtpbmQiLCJDaGlwIiwiU3BlY3NMaXN0IiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiQXJyYXkiLCJpc0FycmF5IiwiQ3JlYXRlQWN0aXZpdHlDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNyZWF0ZUFjdGl2aXR5Q29udGV4dCIsInVzZUNvbnRleHQiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl91aSIsIl9jb250ZXh0MiIsIk1vZGFsQWN0aXZpdHlMaXN0Iiwic2V0VmlldyIsIm5hdmlnYXRlIiwib25BSSIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX3ZhbGlkYXRpb24iLCJfc3VnZ2VzdGlvbnMiLCJzZXRBY3Rpdml0eSIsImhhbmRsZU9uQ2xvc2UiLCJWSUVXUyIsImxpc3QiLCJhaSIsIk1vZGFsQWN0aXZpdHlTdWdnZXN0aW9ucyIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiQ29udHJvbCIsIlByb3ZpZGVyIiwiTW9kYWwiLCJub3RlcyIsInNldE5vdGVzIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCIsInJlZmluZSIsImRlc2NyaXB0aW9uMiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsInJlZmluaW5nQWN0aXZpdHkiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsInRhcmdldCIsIl9uYXZiYXJIZWFkZXIiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwicGljdHVyZSIsInNldFBpY3R1cmUiLCJvbkdlbmVyYXRlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiTmF2YmFySGVhZGVyIiwiQ292ZXJJbWFnZSIsInN1Z2dlc3Rpb25zIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiUHVibGlzaE1vZHVsZSIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsQWN0aXZpdGllcyIsIlBhZ2VDb250YWluZXIiLCJNb2R1bGVNYW5hZ2VtZW50IiwiX2FjdGl2aXRpZXMiLCJfZGVzY3JpcHRpb24iLCJjb21wbGV0ZWQiLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwiZXJyb3JQdWJsaXNoaW5kTW9kdWxlIiwiX2NvbnRlbnRFZGl0YWJsZSIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9wcm9wZXJ0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2xpc3QudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJ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