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
        hash: 867907026,
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
                globalThis.model = this.#model;
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
        hash: 1300064294,
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
            });
            (0, _hooks2.useBinder)([store], () => {
              setView(view => store.view);
            }, 'activity.selected');
            if (!textsReady || !store.ready) return React.createElement(_components.Spinner, {
              active: true
            });
            if (store.view === 'activity') {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib3BlbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJ0aXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiaXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJkYXRhIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwicXVlc3Rpb24iLCJjb3JyZWN0QW5zd2VyIiwicXVlc3Rpb25UZXh0IiwiU3BlY3NMaXN0Iiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiX2NoaXBzIiwiX3NwZWNzSXRlbXMiLCJraW5kIiwiQ2hpcCIsIlNlbGVjdGlvbkFjdGl2aXR5SXRlbSIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJrZXkiLCJyZXBsYWNlIiwiY2xzIiwiY2xzSW1hZ2UiLCJkZXNjcmlwdGlvblR5cGVzIiwiX3ZhbGlkYXRpb24iLCJ2YWxpZCIsIk1vZGFsVmFsaWRhdGlvbiIsIk1vZGFsIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiQWxlcnRNb2RhbCIsInZhbGlkYXRpb25UaXRsZSIsInZhbGlkYXRpb24iLCJSZWFjdCIsIl9jb25maWciLCJfYWN0aXZpdHkiLCJBY3Rpdml0eVZpZXciLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwiX2hvb2tzMiIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwic2V0UmVhZHkiLCJzZXRWaWV3IiwidXNlQmluZGVyIiwiU3Bpbm5lciIsImFjdGl2ZSIsIk1vZHVsZVZpZXciLCJDb250ZW50RWRpdGFibGUiLCJvblNhdmUiLCJzZWxlY3RvciIsIkNvbnRyb2wiLCJjaGlsZHJlbiIsIm5hbWUiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJzZXRUaW1lb3V0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsIl91aSIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJsb2ciLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZXJyb3IiLCJyZWZpbmUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJnZW5lcmF0aW5nSW1hZ2UiLCJzZXRFcnJvciIsInNldFZhbHVlcyIsIm5vdGVzIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJvbkNsaWNrQWN0aW9uIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsIl9wdWJsaXNoIiwiX2NvdmVySW1hZ2UiLCJIZWFkZXIiLCJ0YXJnZXQiLCJOYXZiYXJIZWFkZXIiLCJQdWJsaXNoTW9kdWxlIiwiX21hbmFnZW1lbnQiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInByZXZlbnREZWZhdWx0IiwidG90YWxBY3Rpdml0aWVzIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiTW9kdWxlTWFuYWdlbWVudCIsIl9hY3Rpdml0aWVzIiwiX2Rlc2NyaXB0aW9uIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsImVycm9yUHVibGlzaGluZE1vZHVsZSIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9lbXB0eS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vZGVsZXRlLW1vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy1pdGVtcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vaXRlbS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi92YWxpZGF0aW9uLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0eS50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9tYW5hZ2VtZW50LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NB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