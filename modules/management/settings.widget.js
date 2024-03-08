System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/routing", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "@aimpact/ailearn-app@0.0.24/config", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/alert", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.4/hooks", "pragmate-ui@0.0.6/image", "@aimpact/ailearn-app@0.0.24/components/ui"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0024Config) {
      dependency_20 = _aimpactAilearnApp0024Config;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_21 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi006Alert) {
      dependency_22 = _pragmateUi006Alert;
    }, function (_aimpactChat101SharedHooks) {
      dependency_23 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_24 = _beyondJsReact18Widgets104Hooks;
    }, function (_pragmateUi006Image) {
      dependency_25 = _pragmateUi006Image;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_26 = _aimpactAilearnApp0024ComponentsUi;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['@beyond-js/kernel/routing', dependency_7], ['react', dependency_8], ['pragmate-ui/empty', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/list', dependency_11], ['pragmate-ui/form', dependency_12], ['pragmate-ui/modal', dependency_13], ['pragmate-ui/icons', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/collapsible', dependency_16], ['pragmate-ui/toast', dependency_17], ['pragmate-ui/chips', dependency_18], ['framer-motion', dependency_19], ['@aimpact/ailearn-app/config', dependency_20], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_21], ['pragmate-ui/alert', dependency_22], ['@aimpact/chat/shared/hooks', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['pragmate-ui/image', dependency_25], ['@aimpact/ailearn-app/components/ui', dependency_26]]);
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
        hash: 2965749603,
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
              text,
              correctAnswer,
              questionText
            } = data;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("li", null, text));
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
        hash: 3953874330,
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
            (0, _hooks2.useBinder)([store], () => setReady(store.ready));
            (0, _hooks2.useBinder)([store], () => {
              setView(store.view);
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
            const View = store.view === 'module' ? _module2.ModuleView : _activity.ActivityView;
            return React.createElement(View, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJtYXAiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJyZW1vdmUiLCJzYXZlRHJhZnQiLCJzYXZlIiwiZmV0Y2hpbmciLCJjcmVhdGVBY3Rpdml0eSIsImFjdGl2aXR5VHlwZSIsImFjdGl2aXR5IiwiYWRkIiwicHVibGlzaCIsInJlc3BvbnNlIiwiX3JlYWN0IiwiX2VtcHR5IiwiX2NvbXBvbmVudHMiLCJfbW9kYWwiLCJfY29udGV4dCIsIkVtcHR5QWN0aXZpdHlMaXN0IiwidGV4dHMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib3BlbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJ0aXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJpY29uIiwib25DbGljayIsImFjdGlvbnMiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiTW9kYWxTZWxlY3Rpb24iLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIkRlbGV0ZU1vZGFsIiwib25Db25maXJtIiwidGV4dEFjdGlvbnMiLCJzZXRGZXRjaGluZyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiY29uZmlybSIsImxhYmVsIiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJzaG93IiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiX3JvdXRpbmciLCJBY3Rpdml0eUxpc3RIZWFkZXIiLCJvcGVuRGVsZXRlTW9kYWwiLCJlZGl0IiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJmaW5kIiwiaXRlbSIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJkYXRhIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwidG9nZ2xlRGVsZXRlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl92YWxpZGF0aW9uIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJNb2RhbCIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfY29uZmlnIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbW9kdWxlMiIsIl9ob29rczIiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0VmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJuYW1lIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJfcmVmaW5lbWVudE1vZGFsIiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJpbWFnZSIsInNldEltYWdlIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJjb3ZlciIsImFpU3RhcnMiLCJSZWZpbmVtZW50TW9kYWwiLCJfdWkiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsIkNvdmVySW1hZ2UiLCJwaWN0dXJlIiwibG9nIiwiSW1hZ2UiLCJzcmMiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Vycm9yIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwiZ2VuZXJhdGluZ0ltYWdlIiwic2V0RXJyb3IiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInBpY3R1cmVTdWdnZXN0aW9ucyIsImdlbmVyYXRpb24iLCJvcGVuQ29uZmlybSIsInNldE9wZW5Db25maXJtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJjdXJyZW50VGFyZ2V0IiwiZ2VuZXJhdGVQaWN0dXJlIiwib25DbGlja0FjdGlvbiIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiX2NvbnRlbnRFZGl0YWJsZSIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwidGFyZ2V0IiwiTmF2YmFySGVhZGVyIiwiUHVibGlzaE1vZHVsZSIsIl9tYW5hZ2VtZW50IiwiYWN0aXZlUGFuZWwiLCJzZXRBY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJlZGl0aW5nQWN0aXZpdHkiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJwcmV2ZW50RGVmYXVsdCIsInRvdGFsQWN0aXZpdGllcyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIk1vZHVsZU1hbmFnZW1lbnQiLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MtaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdHkudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2hlYWRlci50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvbWFuYWdlbWVudC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1As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