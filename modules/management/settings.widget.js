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
        hash: 3929187050,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3IiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJ2YWx1ZXMiLCJzYXZlZCIsImdldFByb3BlcnRpZXMiLCJkZWZhdWx0VmFsdWVzIiwib3duZXJzaGlwcyIsInNjaG9vbHMiLCJpdGVtcyIsImFjdGl2aXR5VHlwZXMiLCJBY3Rpdml0eVR5cGVzIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidmlldyIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsImFjdGl2aXR5SWQiLCJFcnJvciIsImxvYWQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwibWFwIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsImxlbmd0aCIsIkZyYWdtZW50IiwiRm9ybSIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIl9yb3V0aW5nIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmluZCIsIml0ZW0iLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiZGF0YSIsImluZGV4IiwicmVmIiwidXNlUmVmIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsInRvZ2dsZURlbGV0ZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Iiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInF1ZXN0aW9uIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIl92YWxpZGF0aW9uIiwidmFsaWQiLCJNb2RhbFZhbGlkYXRpb24iLCJNb2RhbCIsImNyZWF0ZU1vZGFsIiwiZGlzYWJsZWQiLCJjb250aW51ZSIsIkFsZXJ0TW9kYWwiLCJ2YWxpZGF0aW9uVGl0bGUiLCJ2YWxpZGF0aW9uIiwiUmVhY3QiLCJfY29uZmlnIiwiX2FjdGl2aXR5IiwiQWN0aXZpdHlWaWV3IiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwiQWxlcnQiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfbW9kdWxlMiIsIl9ob29rczIiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsInNldFJlYWR5Iiwic2V0VmlldyIsInVzZUJpbmRlciIsIlNwaW5uZXIiLCJhY3RpdmUiLCJNb2R1bGVWaWV3IiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJDb250cm9sIiwiY2hpbGRyZW4iLCJuYW1lIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0Iiwic2V0VGltZW91dCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2xvYmFsVGhpcyIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJhaVN0YXJzIiwiUmVmaW5lbWVudE1vZGFsIiwiX3VpIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsImxvZyIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsImdlbmVyYXRpbmdJbWFnZSIsInNldEVycm9yIiwic2V0VmFsdWVzIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImdlbmVyYXRlUGljdHVyZSIsIm9uQ2xpY2tBY3Rpb24iLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwiX3B1Ymxpc2giLCJfY292ZXJJbWFnZSIsIkhlYWRlciIsInRhcmdldCIsIk5hdmJhckhlYWRlciIsIlB1Ymxpc2hNb2R1bGUiLCJfbWFuYWdlbWVudCIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwiZWRpdGluZ0FjdGl2aXR5Iiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwicHJldmVudERlZmF1bHQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJNb2R1bGVNYW5hZ2VtZW50IiwiX2FjdGl2aXRpZXMiLCJfZGVzY3JpcHRpb24iLCJzdWNjZXNzIiwibW9kdWxlUHVibGlzaGVkIiwiZXJyb3JQdWJsaXNoaW5kTW9kdWxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL3ZhbGlkYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXR5LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL21hbmFnZW1lbnQudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9Q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