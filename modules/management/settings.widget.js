System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "@aimpact/ailearn-app@0.0.24/components/ui"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, ActivityView, View, Header, ModuleView, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Base) {
      dependency_2 = _beyondJsReact18Widgets104Base;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_3 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_4 = _beyondJsReactive1111Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_5 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Routing) {
      dependency_6 = _beyondJsKernel019Routing;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi006Empty) {
      dependency_8 = _pragmateUi006Empty;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_pragmateUi006List) {
      dependency_10 = _pragmateUi006List;
    }, function (_pragmateUi006Form) {
      dependency_11 = _pragmateUi006Form;
    }, function (_pragmateUi006Modal) {
      dependency_12 = _pragmateUi006Modal;
    }, function (_pragmateUi006Icons) {
      dependency_13 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Collapsible) {
      dependency_15 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Toast) {
      dependency_16 = _pragmateUi006Toast;
    }, function (_pragmateUi006Chips) {
      dependency_17 = _pragmateUi006Chips;
    }, function (_framerMotion) {
      dependency_18 = _framerMotion;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_19 = _aimpactAilearnApp0024Config;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_20 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi006Alert) {
      dependency_21 = _pragmateUi006Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_22 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_23 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_24 = _pragmateUi006Image;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_25 = _aimpactAilearnApp0024ComponentsUi;
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/base', dependency_2], ['@aimpact/ailearn-sdk/core', dependency_3], ['@beyond-js/reactive/model', dependency_4], ['@aimpact/chat-sdk/session', dependency_5], ['@beyond-js/kernel/routing', dependency_6], ['react', dependency_7], ['pragmate-ui/empty', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/chips', dependency_17], ['framer-motion', dependency_18], ['@aimpact/ailearn-app/config', dependency_19], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_20], ['pragmate-ui/alert', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['pragmate-ui/image', dependency_24], ['@aimpact/ailearn-app/components/ui', dependency_25]]);
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
        hash: 3454060929,
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
                this.#model = new _core.LearningModule(specs);
                await this.#model.isReady;
                if (id !== 'new') await this.#model.load({
                  id,
                  type: 'draft'
                });
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
                this.fetching = true;
                const activity = await this.model.activities.add(activityType.id);
                this.editActivity = activity;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
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
        hash: 450023624,
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
            const open = () => setShowModal(true);
            return _react.default.createElement("div", {
              className: "module-activities__list"
            }, _react.default.createElement("div", {
              className: ""
            }, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: open
            }, texts.module.actions.addActivity)))), _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text)), showModal && _react.default.createElement(_modal.ModalSelection, {
              onClose: () => setShowModal(false)
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 463572807,
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
            const open = () => setShowModal(true);
            if (!activities.length) return _react.default.createElement(_empty.EmptyActivityList, null);
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.activities.title), _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: open
            }, texts.actions.add)), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_list.List, {
              className: "module-activity-list",
              items: activities,
              control: _item.ModuleActivity
            })), showModal && _react.default.createElement(_modal.ModalSelection, {
              onClose: () => setShowModal(false)
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
        hash: 1250759197,
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
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.objective), _react.default.createElement("span", null, data.specs.objective)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.description), _react.default.createElement("span", null, data.description)), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            }))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: toggleDelete
            }));
          }
        }
      });

      /********************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs-items
      ********************************************************/

      ims.set('./views/activities/list/item/specs-items', {
        hash: 3686742808,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SpecsList = SpecsList;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          const Item = ({
            data
          }) => _react.default.createElement("li", null, data);
          const QuestionItem = ({
            data,
            index
          }) => {
            const {
              question,
              correctAnswer,
              questionText
            } = data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", null, question));
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
            if (!itemsList) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h5", null, texts[itemsType]), _react.default.createElement(_list.List, {
              items: itemsList,
              control: ItemControl
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/specs
      **************************************************/

      ims.set('./views/activities/list/item/specs', {
        hash: 431299345,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitySpecs = ActivitySpecs;
          var _react = require("react");
          var _chips = require("pragmate-ui/chips");
          var _specsItems = require("./specs-items");
          function ActivitySpecs({
            specs,
            type
          }) {
            return _react.default.createElement(_react.default.Fragment, null, specs.kind && _react.default.createElement(_chips.Chip, {
              type: "primary"
            }, specs.kind), _react.default.createElement(_specsItems.SpecsList, {
              specs: specs,
              type: type
            }));
          }
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

      /*******************************************************
      INTERNAL MODULE: ./views/activities/list/selection/modal
      *******************************************************/

      ims.set('./views/activities/list/selection/modal', {
        hash: 1489926863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalSelection = ModalSelection;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../../../context");
          var _list = require("pragmate-ui/list");
          var _components = require("pragmate-ui/components");
          var _item = require("./item");
          var _validation = require("./validation");
          function ModalSelection({
            onClose
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const onSubmit = async () => {
              store.createActivity(selected);
              onClose();
            };
            if (!store.model.valid) return _react.default.createElement(_validation.ModalValidation, {
              onClose: onClose
            });
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, texts.activities.createModal.title), _react.default.createElement(_list.List, {
              className: "module-activity-list",
              specs: {
                selected,
                setSelected
              },
              items: store.model.activities.types,
              control: _item.SelectionActivityItem
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSubmit,
              disabled: !selected
            }, texts.actions.continue))));
          }
        }
      });

      /************************************************************
      INTERNAL MODULE: ./views/activities/list/selection/validation
      ************************************************************/

      ims.set('./views/activities/list/selection/validation', {
        hash: 854512804,
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
        hash: 549391829,
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
        hash: 554190846,
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
            const [image, setImage] = _react.default.useState();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            (0, _hooks.useBinder)([store.model], () => setImage(store.model.cover), 'image.generated');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: () => setShowRefiningModal(true),
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
            })), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
              confirm: true,
              onClose: () => setShowRefiningModal(false)
            }));
          }
        }
      });

      /************************************************
      INTERNAL MODULE: ./views/module/cover-image/index
      ************************************************/

      ims.set('./views/module/cover-image/index', {
        hash: 3695944509,
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
            (0, _hooks.useBinder)([store.model], () => {
              console.log(0.1, store.model.picture);
              setImage(store.model.picture);
            }, 'image.generated');
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
        hash: 801585108,
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
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("../../components/error");
          function RefinementModal({
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
            const [values, setValues] = _react.default.useState({
              notes: store.model.pictureSuggestions,
              generation: 'answers'
            });
            const [openConfirm, setOpenConfirm] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onClick: async event => {
                try {
                  setOpenConfirm(false);
                  setFetching(true);
                  await store.model.generatePicture(values.notes);
                  onClose();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setFetching(false);
                }
              }
            };
            const onClickAction = confirm ? () => setOpenConfirm(true) : events.onClick;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "refine-modal",
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement(_form.Form, null, _react.default.createElement(_error.ErrorRenderer, {
              texts: texts,
              error: error
            }), _react.default.createElement(_form.Textarea, {
              name: "notes",
              value: values.notes,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
              disabled: !values.notes,
              icon: _icons.ICONS.aiStars
            }, textActions.refine)), openConfirm && _react.default.createElement(_modal.ConfirmModal, {
              onConfirm: events.onClick,
              onCancel: () => setOpenConfirm(false),
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
              title: texts.confirm.title,
              text: texts.confirm.subtitle
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
        hash: 952997750,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleDescription = ModuleDescription;
          var _react = require("react");
          var _context = require("../context");
          var _contentEditable = require("./content-editable");
          function ModuleDescription({}) {
            const {
              texts: {
                module: moduleTexts
              },
              store
            } = (0, _context.useModuleContext)();
            const content = store.model.description ?? moduleTexts.description;
            return _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h5", null, moduleTexts.description), _react.default.createElement(_contentEditable.ContentEditable, {
              name: "description",
              onSave: async data => {
                await store.save(data);
              },
              selector: "p"
            }, content));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/module/header
      *************************************/

      ims.set('./views/module/header', {
        hash: 731179139,
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
            }, title), _react.default.createElement(_coverImage.CoverImage, null), _react.default.createElement("section", null, _react.default.createElement(_publish.PublishModule, null)))));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 2424124737,
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
            const [editingActivity, setEditingActivity] = React.useState();
            const onActivitiesGenerated = () => {
              setActivities(store.model?.activities?.items);
            };
            (0, _hooks.useBinder)([store.model], () => setFetching(store?.model?.fetching));
            (0, _hooks.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks.useBinder)([store], () => {
              setEditingActivity(store.editActivity);
            }, 'activity.selected');
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
            }, React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(_management.ModuleManagement, null))));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/module/management
      *****************************************/

      ims.set('./views/module/management', {
        hash: 1120313430,
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
            return _react.default.createElement("div", null, _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h5", null, moduleTexts.objective, ":"), _react.default.createElement("p", null, " ", store.model.objective)), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_activities.ModuleActivities, null));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/module/publish
      **************************************/

      ims.set('./views/module/publish', {
        hash: 1150323213,
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
              disabled: store.model.type !== 'draft' || !store.model.valid || !store.model?.activities.valid
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
            return _react.default.createElement("div", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiaXNSZWFkeSIsIm1hcCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGVBY3Rpdml0eSIsInJlbW92ZSIsInNhdmVEcmFmdCIsInNhdmUiLCJmZXRjaGluZyIsImNyZWF0ZUFjdGl2aXR5IiwiYWN0aXZpdHlUeXBlIiwiYWN0aXZpdHkiLCJhZGQiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJfcmVhY3QiLCJfZW1wdHkiLCJfY29tcG9uZW50cyIsIl9tb2RhbCIsIl9jb250ZXh0IiwiRW1wdHlBY3Rpdml0eUxpc3QiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJvcGVuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsIm1vZHVsZSIsInRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsImljb24iLCJvbkNsaWNrIiwiYWN0aW9ucyIsImFkZEFjdGl2aXR5IiwiRW1wdHkiLCJlbXB0eSIsInRleHQiLCJNb2RhbFNlbGVjdGlvbiIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwib25TdWJtaXQiLCJsZW5ndGgiLCJGcmFnbWVudCIsIkZvcm0iLCJMaXN0IiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsInNob3ciLCJkZWxldGUiLCJzdWJ0aXRsZSIsIl9pY29ucyIsIl9pY29uczIiLCJfY29sbGFwc2libGUiLCJfcm91dGluZyIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwicm91dGluZyIsInB1c2hTdGF0ZSIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJvbkRlbGV0ZSIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsIklDT05TIiwidHlwZXMiLCJzdGF0ZXMiLCJJY29uQnV0dG9uIiwiX3NwZWNzIiwiX2hlYWRlciIsIl90b2FzdCIsIl9kZWxldGVNb2RhbCIsImRhdGEiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsInNob3dEZWxldGUiLCJzZXRTaG93RGVsZXRlIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2FzdCIsIm1lc3NhZ2UiLCJ0b2dnbGVEZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlQ29udGVudCIsIm9iamVjdGl2ZSIsImRlc2NyaXB0aW9uIiwiQWN0aXZpdHlTcGVjcyIsIkl0ZW0iLCJRdWVzdGlvbkl0ZW0iLCJxdWVzdGlvbiIsImNvcnJlY3RBbnN3ZXIiLCJxdWVzdGlvblRleHQiLCJTcGVjc0xpc3QiLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJfY2hpcHMiLCJfc3BlY3NJdGVtcyIsImtpbmQiLCJDaGlwIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfdmFsaWRhdGlvbiIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiTW9kYWwiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIlJlYWN0IiwiX2NvbmZpZyIsIl9hY3Rpdml0eSIsIkFjdGl2aXR5VmlldyIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2hvb2tzIiwiX2JleW9uZF9jb250ZXh0IiwiX21vZHVsZTIiLCJfaG9va3MyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJzZXRSZWFkeSIsInNldFZpZXciLCJ1c2VCaW5kZXIiLCJTcGlubmVyIiwiYWN0aXZlIiwiTW9kdWxlVmlldyIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiQ29udHJvbCIsImNoaWxkcmVuIiwibmFtZSIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsInNldFRpbWVvdXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdsb2JhbFRoaXMiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsIl91aSIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJsb2ciLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZXJyb3IiLCJyZWZpbmUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJnZW5lcmF0aW5nSW1hZ2UiLCJzZXRFcnJvciIsInNldFZhbHVlcyIsIm5vdGVzIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJvbkNsaWNrQWN0aW9uIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJ0YXJnZXQiLCJOYXZiYXJIZWFkZXIiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZE1vZHVsZSIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy1pdGVtcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NB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