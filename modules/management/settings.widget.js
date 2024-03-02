System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.17.8", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/image"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_22 = _aimpactAilearnApp0024Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_23 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_24 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_aimpactChat101SharedHooks) {
      dependency_25 = _aimpactChat101SharedHooks;
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/empty', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/list', dependency_10], ['pragmate-ui/form', dependency_11], ['pragmate-ui/modal', dependency_12], ['pragmate-ui/icons', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/collapsible', dependency_15], ['pragmate-ui/toast', dependency_16], ['pragmate-ui/chips', dependency_17], ['framer-motion', dependency_18], ['pragmate-ui/alert', dependency_19], ['@aimpact/ailearn-app/components/ui', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/config', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_24], ['@aimpact/chat/shared/hooks', dependency_25], ['pragmate-ui/image', dependency_26]]);
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
        hash: 2526643318,
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
            show() {
              console.log('se ejecuta');
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
              console.log('hide');
              this.#store.hide();
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
        hash: 240675345,
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
        hash: 3436080844,
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
          /*bundle*/
          function Header() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }));
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
        hash: 1337983908,
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
          var _coverImage = require("./cover-image");
          var _contentEditable = require("./content-editable");
          var _description = require("./description");
          var _publish = require("./publish");
          function ModuleManagement() {
            const {
              store,
              texts: {
                module: moduleTexts
              }
            } = (0, _context.useModuleContext)();
            const title = store.model.title ?? moduleTexts.title;
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "relative-container module-header-description"
            }, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "title",
              selector: "h1",
              onSave: data => store.save(data)
            }, title), _react.default.createElement(_publish.PublishModule, null)), _react.default.createElement("section", null, _react.default.createElement(_coverImage.CoverImage, null))), _react.default.createElement("section", null, _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h5", null, moduleTexts.objective, ":"), _react.default.createElement("p", null, " ", store.model.objective)), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_activities.ModuleActivities, null));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/module/publish
      **************************************/

      ims.set('./views/module/publish', {
        hash: 2588545955,
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
            const disabled = {
              disabled: store.model.type !== 'draft'
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
              ...disabled
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZURyYWZ0Iiwic2F2ZSIsImZldGNoaW5nIiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIk1vZGFsU2VsZWN0aW9uIiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJvblN1Ym1pdCIsImxlbmd0aCIsIkZyYWdtZW50IiwiRm9ybSIsIkxpc3QiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJEZWxldGVNb2RhbCIsIm9uQ29uZmlybSIsInRleHRBY3Rpb25zIiwic2V0RmV0Y2hpbmciLCJDb25maXJtTW9kYWwiLCJvbkNhbmNlbCIsImNvbmZpcm0iLCJsYWJlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiZGVsZXRlIiwic3VidGl0bGUiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiQWN0aXZpdHlMaXN0SGVhZGVyIiwib3BlbkRlbGV0ZU1vZGFsIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZmluZCIsIml0ZW0iLCJpbWdDbHMiLCJjbHNTdGF0ZSIsInN0YXRlIiwib25EZWxldGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJkYXRhIiwiaW5kZXgiLCJyZWYiLCJ1c2VSZWYiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIk1vZGFsIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIlJlYWN0IiwiX2hvb2tzIiwiX2FjdGl2aXR5IiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJNb2R1bGVNYW5hZ2VtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm5hbWUiLCJvbkVkaXQiLCJpc0VkaXRhYmxlIiwic2V0SXNFZGl0YWJsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50IiwiY29udGVudFJlZiIsInRvZ2dsZUVkaXQiLCJlbCIsInJhbmdlIiwiZG9jdW1lbnQiLCJjcmVhdGVSYW5nZSIsInNlbCIsImdldFNlbGVjdGlvbiIsInNlbGVjdE5vZGVDb250ZW50cyIsImNvbGxhcHNlIiwicmVtb3ZlQWxsUmFuZ2VzIiwiYWRkUmFuZ2UiLCJmb2N1cyIsImhhbmRsZVNhdmUiLCJ0ZXh0Q29udGVudCIsImNvbnN0cm9sQ2xzIiwiY29udGVudEVkaXRhYmxlIiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJhaVN0YXJzIiwiUmVmaW5lbWVudE1vZGFsIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9lcnJvciIsInJlZmluZSIsInRleHRhcmVhIiwidGV4dEFyZWFUZXh0cyIsImdlbmVyYXRpbmdJbWFnZSIsInNldEVycm9yIiwic2V0VmFsdWVzIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsImdlbmVyYXRlUGljdHVyZSIsIm9uQ2xpY2tBY3Rpb24iLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwiX2FjdGl2aXRpZXMiLCJfY292ZXJJbWFnZSIsIl9kZXNjcmlwdGlvbiIsIl9wdWJsaXNoIiwiUHVibGlzaE1vZHVsZSIsIl9yb3V0aW5nIiwic3VjY2VzcyIsIm1vZHVsZVB1Ymxpc2hlZCIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJlcnJvclB1Ymxpc2hpbmRNb2R1bGUiLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZW1wdHkudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2RlbGV0ZS1tb2RhbC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaGVhZGVyLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MtaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9zZWxlY3Rpb24vbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9wdWJsaXNoLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsscUJBQXFCO1lBQzdDLENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLENBQUMsSUFBSSxDQUFDQyxVQUFVLENBQUM7Y0FDL0MsT0FBTyxJQUFJLENBQUMsQ0FBQUgsS0FBTTtZQUNuQjtZQUNBLElBQUlJLE1BQU1BLENBQUE7Y0FDVCxPQUFPUCxNQUFBLENBQUFRLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztjQUN6QixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDO1lBRUFDLElBQUlBLENBQUE7Y0FDSE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO2NBQ25CLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNhLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBaEIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7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