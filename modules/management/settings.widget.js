System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/image", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0
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
    }, function (_pragmateUi006Alert) {
      dependency_19 = _pragmateUi006Alert;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_20 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_21 = _aimpactAilearnApp0024Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_22 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_23 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Image) {
      dependency_25 = _pragmateUi006Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_26 = _beyondJsKernel019Routing;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/empty', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/chips', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/alert', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@aimpact/ailearn-app/config', dependency_21], ['@beyond-js/react-18-widgets/hooks', dependency_22], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/image', dependency_25], ['@beyond-js/kernel/routing', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "attrs": ["id"],
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management/settings.widget"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management/settings.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3867376905,
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
              console.log(0.1);
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
        hash: 2660427683,
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
            constructor(attrs) {
              super();
              const id = attrs.get('id');
              if (!id) {
                throw new Error('No id provided');
              }
              this.load(id);
            }
            clean() {
              this.#model.activities.clean();
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
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
        hash: 3796135320,
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
        hash: 171129418,
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
            return _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement(_header.ActivityListHeader, {
              openDeleteModal: () => setShowDelete(true),
              activity: data
            }), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity__pane-content"
            }, _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.objective), _react.default.createElement("span", null, data.specs.objective)), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.description), _react.default.createElement("span", null, data.description)), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            }))), showDelete && _react.default.createElement(_deleteModal.DeleteModal, {
              onConfirm: deleteItem,
              onClose: () => setShowDelete(false)
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

      /******************************
      INTERNAL MODULE: ./views/header
      ******************************/

      ims.set('./views/header', {
        hash: 906194060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("./context");
          var _config = require("@aimpact/ailearn-app/config");
          var _publish = require("./module/publish");
          var _coverImage = require("./module/cover-image");
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

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3745165982,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _context = require("./context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./header");
          var _module2 = require("./module");
          /*bundle*/
          function View(props) {
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
            let Control = editingActivity ? _activity.ModuleActivityForm : _module2.ModuleManagement;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(Control, {
              store: store,
              activity: store.editActivity
            }))));
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

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
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
        "im": "./views/header",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbnNvbGUiLCJsb2ciLCJTdG9yZU1hbmFnZXIiLCJhdHRyaWJ1dGVzIiwiV2lkZ2V0IiwiVmlldyIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiUmVhY3RpdmVNb2RlbCIsIm1vZGVsIiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwidmFsdWVzIiwic2F2ZWQiLCJnZXRQcm9wZXJ0aWVzIiwiZGVmYXVsdFZhbHVlcyIsIm93bmVyc2hpcHMiLCJzY2hvb2xzIiwiaXRlbXMiLCJhY3Rpdml0eVR5cGVzIiwiQWN0aXZpdHlUeXBlcyIsImVkaXRBY3Rpdml0eSIsInZhbHVlIiwidHJpZ2dlciIsImNvbnN0cnVjdG9yIiwiYXR0cnMiLCJpZCIsImdldCIsIkVycm9yIiwibG9hZCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsImxlbmd0aCIsIkZyYWdtZW50IiwiRm9ybSIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwic2hvdyIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImZpbmQiLCJpdGVtIiwiaW1nQ2xzIiwiY2xzU3RhdGUiLCJzdGF0ZSIsIm9uRGVsZXRlIiwiQ29sbGFwc2libGVIZWFkZXIiLCJJY29uIiwiSUNPTlMiLCJ0eXBlcyIsInN0YXRlcyIsIkljb25CdXR0b24iLCJfc3BlY3MiLCJfaGVhZGVyIiwiX3RvYXN0IiwiX2RlbGV0ZU1vZGFsIiwiZGF0YSIsImluZGV4IiwicmVmIiwidXNlUmVmIiwic2hvd0RlbGV0ZSIsInNldFNob3dEZWxldGUiLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsInRvYXN0IiwibWVzc2FnZSIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVDb250ZW50Iiwib2JqZWN0aXZlIiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsImNvcnJlY3RBbnN3ZXIiLCJxdWVzdGlvblRleHQiLCJTcGVjc0xpc3QiLCJzcG9rZW4iLCJpdGVtc1R5cGUiLCJJdGVtQ29udHJvbCIsIml0ZW1zTGlzdCIsImhhc093blByb3BlcnR5Iiwia2V5Q29uY2VwdHMiLCJfY2hpcHMiLCJfc3BlY3NJdGVtcyIsImtpbmQiLCJDaGlwIiwiU2VsZWN0aW9uQWN0aXZpdHlJdGVtIiwic2VsZWN0ZWQiLCJzZXRTZWxlY3RlZCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJjbHNJbWFnZSIsImRlc2NyaXB0aW9uVHlwZXMiLCJfdmFsaWRhdGlvbiIsInZhbGlkIiwiTW9kYWxWYWxpZGF0aW9uIiwiTW9kYWwiLCJjcmVhdGVNb2RhbCIsImRpc2FibGVkIiwiY29udGludWUiLCJBbGVydE1vZGFsIiwidmFsaWRhdGlvblRpdGxlIiwidmFsaWRhdGlvbiIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJBbGVydCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl91aSIsIl9jb25maWciLCJfcHVibGlzaCIsIl9jb3ZlckltYWdlIiwiSGVhZGVyIiwibW9kdWxlVGV4dHMiLCJvblNhdmUiLCJ0YXJnZXQiLCJOYXZiYXJIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIkNvbnRlbnRFZGl0YWJsZSIsIm5hbWUiLCJzZWxlY3RvciIsIkNvdmVySW1hZ2UiLCJQdWJsaXNoTW9kdWxlIiwiUmVhY3QiLCJfaG9va3MiLCJfYWN0aXZpdHkiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX21vZHVsZTIiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwiZWRpdGluZ0FjdGl2aXR5Iiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwidXNlQmluZGVyIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwidG90YWxBY3Rpdml0aWVzIiwiQ29udHJvbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIk1vZHVsZU1hbmFnZW1lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJjb250ZW50UmVmIiwidG9nZ2xlRWRpdCIsImVsIiwicmFuZ2UiLCJkb2N1bWVudCIsImNyZWF0ZVJhbmdlIiwic2VsIiwiZ2V0U2VsZWN0aW9uIiwic2VsZWN0Tm9kZUNvbnRlbnRzIiwiY29sbGFwc2UiLCJyZW1vdmVBbGxSYW5nZXMiLCJhZGRSYW5nZSIsImZvY3VzIiwiaGFuZGxlU2F2ZSIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmciLCJfcmVmaW5lbWVudE1vZGFsIiwiQ292ZXJJbWFnZUFjdGlvbnMiLCJnZW5lcmF0ZWQiLCJpbWFnZSIsInNldEltYWdlIiwic2V0U2hvd1JlZmluaW5nTW9kYWwiLCJjb3ZlciIsImFpU3RhcnMiLCJSZWZpbmVtZW50TW9kYWwiLCJfaW1hZ2UiLCJfYWN0aW9ucyIsInBpY3R1cmUiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZXJyb3IiLCJyZWZpbmUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJnZW5lcmF0aW5nSW1hZ2UiLCJzZXRFcnJvciIsInNldFZhbHVlcyIsIm5vdGVzIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJvbkNsaWNrQWN0aW9uIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJfYWN0aXZpdGllcyIsIl9kZXNjcmlwdGlvbiIsIl9yb3V0aW5nIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MtaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vdmFsaWRhdGlvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3B1Ymxpc2gudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsR0FBRyxDQUFDO2NBQ2hCLElBQUksQ0FBQyxDQUFBSCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUwsS0FBTTtZQUNuQjtZQUNBLElBQUlNLE1BQU1BLENBQUE7Y0FDVCxPQUFPVCxNQUFBLENBQUFVLElBQUk7WUFDWjs7VUFDQUMsT0FBQSxDQUFBVixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDZEQsSUFBQVcsS0FBQSxHQUFBZCxPQUFBO1VBQ0EsSUFBQWUsTUFBQSxHQUFBZixPQUFBO1VBQ0EsSUFBQWdCLFFBQUEsR0FBQWhCLE9BQUE7VUFFTSxNQUFP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