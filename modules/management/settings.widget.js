System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/modal", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/toast", "pragmate-ui@0.0.6/chips", "framer-motion@10.18.0", "pragmate-ui@0.0.6/alert", "@aimpact/ailearn-app@0.0.24/components/ui", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/image"], function (_export, _context2) {
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 3470196715,
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
        hash: 4071348446,
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
            }, texts.module.actions.addActivity)))), _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text)), showModal && _react.default.createElement(_modal.ActivityTypeForm, {
              onClose: () => setShowModal(false)
            }));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 3538850169,
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
        hash: 2206681247,
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
            const ref = (0, _react.useRef)(null);
            const edit = event => {
              event.stopPropagation();
              // store.editActivity(data.id);
              store.editActivity = activity;
            };
            const imgCls = `activity-type__image image--${activity.type}`;
            const clsState = `activity__state state--${activity.state}`;
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
              onClick: openDeleteModal
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
        hash: 99015347,
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
              setActivePanel(1);
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
            let Control = undefined;
            let showHeader = false;
            Control = editingActivity ? _activity.ModuleActivityForm : _module2.ModuleManagement;
            return React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              texts: texts,
              showHeader: showHeader
            }), React.createElement(_ui.PageContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9yZWFjdCIsIl9lbXB0eSIsIl9jb21wb25lbnRzIiwiX21vZGFsIiwiX2NvbnRleHQiLCJFbXB0eUFjdGl2aXR5TGlzdCIsInRleHRzIiwidXNlTW9kdWxlQ29udGV4dCIsInNob3dNb2RhbCIsInNldFNob3dNb2RhbCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwibW9kdWxlIiwidGl0bGUiLCJCdXR0b24iLCJ2YXJpYW50IiwiaWNvbiIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiYWRkQWN0aXZpdHkiLCJFbXB0eSIsImVtcHR5IiwidGV4dCIsIkFjdGl2aXR5VHlwZUZvcm0iLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsIl9mb3JtIiwiTW9kdWxlQWN0aXZpdGllcyIsIm9uU3VibWl0IiwibGVuZ3RoIiwiRnJhZ21lbnQiLCJGb3JtIiwiTGlzdCIsImNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eSIsIk1vZGFsU2VsZWN0aW9uIiwiRGVsZXRlTW9kYWwiLCJvbkNvbmZpcm0iLCJ0ZXh0QWN0aW9ucyIsInNldEZldGNoaW5nIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJjb25maXJtIiwibGFiZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsImRlbGV0ZSIsInN1YnRpdGxlIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsIkFjdGl2aXR5TGlzdEhlYWRlciIsIm9wZW5EZWxldGVNb2RhbCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImltZ0NscyIsImNsc1N0YXRlIiwic3RhdGUiLCJDb2xsYXBzaWJsZUhlYWRlciIsIkljb24iLCJJQ09OUyIsInR5cGVzIiwic3RhdGVzIiwiSWNvbkJ1dHRvbiIsIl9zcGVjcyIsIl9oZWFkZXIiLCJfdG9hc3QiLCJfZGVsZXRlTW9kYWwiLCJkYXRhIiwiaW5kZXgiLCJzaG93RGVsZXRlIiwic2V0U2hvd0RlbGV0ZSIsImRlbGV0ZUl0ZW0iLCJjdXJyZW50IiwiY2xhc3NMaXN0IiwidG9hc3QiLCJtZXNzYWdlIiwiQ29sbGFwc2libGVDb250YWluZXIiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJvYmplY3RpdmUiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJTZWxlY3Rpb25BY3Rpdml0eUl0ZW0iLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwia2V5IiwicmVwbGFjZSIsImNscyIsImNsc0ltYWdlIiwiZGVzY3JpcHRpb25UeXBlcyIsIk1vZGFsIiwiY3JlYXRlTW9kYWwiLCJkaXNhYmxlZCIsImNvbnRpbnVlIiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsIkFsZXJ0IiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIlJlYWN0IiwiX2hvb2tzIiwiX2FjdGl2aXR5IiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJzaG93SGVhZGVyIiwiTW9kdWxlQWN0aXZpdHlGb3JtIiwiTW9kdWxlTWFuYWdlbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsIkNvbnRlbnRFZGl0YWJsZSIsIm9uU2F2ZSIsInNlbGVjdG9yIiwiY2hpbGRyZW4iLCJuYW1lIiwib25FZGl0IiwiaXNFZGl0YWJsZSIsInNldElzRWRpdGFibGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiYWlTdGFycyIsIlJlZmluZW1lbnRNb2RhbCIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJJbWFnZSIsInNyYyIsIlByb2Nlc3NDb250YWluZXIiLCJfZXJyb3IiLCJyZWZpbmUiLCJ0ZXh0YXJlYSIsInRleHRBcmVhVGV4dHMiLCJnZW5lcmF0aW5nSW1hZ2UiLCJzZXRFcnJvciIsInNldFZhbHVlcyIsIm5vdGVzIiwicGljdHVyZVN1Z2dlc3Rpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJnZW5lcmF0ZVBpY3R1cmUiLCJvbkNsaWNrQWN0aW9uIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsIl9hY3Rpdml0aWVzIiwiX2NvdmVySW1hZ2UiLCJfZGVzY3JpcHRpb24iLCJfcHVibGlzaCIsIlB1Ymxpc2hNb2R1bGUiLCJfcm91dGluZyIsInN1Y2Nlc3MiLCJtb2R1bGVQdWJsaXNoZWQiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiZXJyb3JQdWJsaXNoaW5kTW9kdWxlIiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2VtcHR5LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9kZWxldGUtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2hlYWRlci50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L3NlbGVjdGlvbi9pdGVtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3Qvc2VsZWN0aW9uL21vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvcHVibGlzaC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Y0FDekIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUNuQixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDYSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7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