System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "framer-motion@10.18.0", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.24/config", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/image"], function (_export, _context2) {
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
    }, function (_pragmateUi006Modal) {
      dependency_7 = _pragmateUi006Modal;
    }, function (_react2) {
      dependency_8 = _react2;
    }, function (_pragmateUi006List) {
      dependency_9 = _pragmateUi006List;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_10 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_pragmateUi006Components) {
      dependency_12 = _pragmateUi006Components;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi006Form) {
      dependency_14 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_15 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Empty) {
      dependency_17 = _pragmateUi006Empty;
    }, function (_pragmateUi006Collapsible) {
      dependency_18 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Chips) {
      dependency_19 = _pragmateUi006Chips;
    }, function (_pragmateUi006Alert) {
      dependency_20 = _pragmateUi006Alert;
    }, function (_pragmateUi006Toast) {
      dependency_21 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_22 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0024Config) {
      dependency_23 = _aimpactAilearnApp0024Config;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_24 = _beyondJsReact18Widgets104Hooks;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/modal', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/form', dependency_14], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/alert', dependency_20], ['pragmate-ui/toast', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/config', dependency_23], ['@beyond-js/react-18-widgets/hooks', dependency_24], ['@aimpact/chat/shared/hooks', dependency_25], ['pragmate-ui/image', dependency_26]]);
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

      /*****************************************************
      INTERNAL MODULE: ./views/activities/form-activity-type
      *****************************************************/

      ims.set('./views/activities/form-activity-type', {
        hash: 36388627,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivityTypeForm = ActivityTypeForm;
          var _modal = require("pragmate-ui/modal");
          var _react = require("react");
          var _context = require("../context");
          var _list = require("pragmate-ui/list");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _icons2 = require("pragmate-ui/icons");
          var _components = require("pragmate-ui/components");
          var _framerMotion = require("framer-motion");
          function ActivityTypeForm({
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
            const Item = ({
              data
            }) => {
              const onClick = event => {
                setSelected(data);
              };
              const key = data.id.replace('/', '-');
              const cls = `activity--${key}${data.id === selected?.id ? ' selected' : ''}`;
              const icon = _icons.ICONS[key];
              return _react.default.createElement("li", {
                className: cls,
                onClick: onClick
              }, _react.default.createElement("h4", null, _react.default.createElement("div", {
                className: "activity-type__image"
              }, _react.default.createElement(_icons2.Icon, {
                icon: icon
              })), data.name));
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("h3", null, "Select the activity type"), _react.default.createElement(_list.List, {
              className: "activities-list__selection-list",
              specs: {},
              items: store.model.activities.types,
              control: Item
            }), selected && _react.default.createElement(_framerMotion.motion.div, {
              className: "flex-container flex-end mt-15",
              animate: {
                opacity: 1
              }
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSubmit
            }, texts.actions.continue))));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 3046170462,
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
          var _empty = require("pragmate-ui/empty");
          var _formActivityType = require("./form-activity-type");
          function ModuleActivities() {
            const {
              texts,
              store,
              activities,
              onSubmit
            } = (0, _context.useModuleContext)();
            const attrs = {
              disabled: store.model.fetching || store.fetching
            };
            const [showModal, setShowModal] = _react.default.useState(false);
            const open = () => {
              setShowModal(true);
            };
            if (!activities.length) {
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
              }, texts.module.actions.addActivity)))), _react.default.createElement(_empty.Empty, null, _react.default.createElement("h4", null, texts.module.activities.empty.title), _react.default.createElement("span", null, texts.module.activities.empty.text)), showModal && _react.default.createElement(_formActivityType.ActivityTypeForm, {
                onClose: () => setShowModal(false)
              }));
            }
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: ""
            }, _react.default.createElement("header", {
              className: "module__activity-list__header"
            }, _react.default.createElement("h2", null, texts.module.activities.title), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              variant: "link",
              icon: "add",
              onClick: open
            }, texts.module.actions.addActivity)))), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_list.List, {
              className: "module-activities__list",
              items: activities,
              control: _item.ModuleActivity
            })), showModal && _react.default.createElement(_formActivityType.ActivityTypeForm, {
              onClose: () => setShowModal(false)
            }));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/index
      **************************************************/

      ims.set('./views/activities/list/item/index', {
        hash: 2806778419,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivity = ModuleActivity;
          var _react = require("react");
          var _specs = require("./specs");
          var _context = require("../../../context");
          var _icons = require("pragmate-ui/icons");
          var _icons2 = require("@aimpact/ailearn-app/components/icons");
          var _collapsible = require("pragmate-ui/collapsible");
          function ModuleActivity({
            data,
            index
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
              store.editActivity = data;
            };
            const deleteItem = event => {
              event.stopPropagation();
              ref.current.classList.add('fade-out');
              store.deleteActivity(data.id);
            };
            const imgCls = `activity-type__image image--${data.type}`;
            return _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement("section", null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h3", {
              className: "flex-container flex-05 flex-center "
            }, _react.default.createElement("section", {
              className: imgCls
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[data.type]
            })), data.title), _react.default.createElement("div", {
              className: "activity-details flex-container flex-vertical-center"
            }, _react.default.createElement("span", {
              className: "flex-container  flex-05"
            }, _react.default.createElement(_icons.Icon, {
              icon: "time"
            }), _react.default.createElement("span", null, data.duration, " ", texts.minutes)), _react.default.createElement(_icons.IconButton, {
              title: actions.edit,
              icon: "edit",
              className: "circle",
              onClick: edit
            }), _react.default.createElement(_icons.IconButton, {
              title: actions.delete,
              icon: "delete",
              className: "circle",
              onClick: deleteItem
            })))), _react.default.createElement(_collapsible.CollapsibleContent, {
              className: "activity__pane-content"
            }, _react.default.createElement("h6", null, texts.description), _react.default.createElement("div", null, data.description), _react.default.createElement("div", null, _react.default.createElement("h6", null, texts.objective), _react.default.createElement("span", null, data.specs.objective)), _react.default.createElement(_specs.ActivitySpecs, {
              type: data.type,
              specs: data.specs
            })))));
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

      /**********************************************************
      INTERNAL MODULE: ./views/activities/refine-activities-modal
      **********************************************************/

      ims.set('./views/activities/refine-activities-modal', {
        hash: 1892737123,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RefineActivitiesModal = RefineActivitiesModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("../components/error");
          function RefineActivitiesModal({
            confirm,
            onClose
          }) {
            const {
              texts: {
                refine: {
                  module: texts,
                  textarea: textAreaTexts
                },
                actions: textActions,
                processMessages
              },
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              observations: '',
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
                  await store.model.refineActivities({
                    observations: values.observations
                  });
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
              name: "observations",
              value: values.observations,
              onChange: events.onChange,
              label: textAreaTexts.label,
              placeholder: textAreaTexts.placeholder
            })), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onClickAction,
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
              content: processMessages
            })));
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

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 2666945948,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _components = require("pragmate-ui/components");
          var _toast = require("pragmate-ui/toast");
          var _routing = require("@beyond-js/kernel/routing");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header({
            texts,
            showHeader = false
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.model.type !== 'draft'
            };
            const onSubmit = async () => {
              try {
                const response = await store.publish();
                _toast.toast.success('Module published successfully');
                _routing.routing.pushState(`/modules/list?tab=publish`);
              } catch (e) {
                _toast.toast.error('Error while publishing module');
              }
            };
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Modules', '/modules/list'], ['Management', '']]
            }, _react.default.createElement(_components.Button, {
              fetching: store.fetching,
              onClick: onSubmit,
              variant: "primary",
              bordered: true,
              ...disabled
            }, texts.actions.publish)));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/options
      ******************************************/

      ims.set('./views/components/options', {
        hash: 400669663,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              audience: [[texts.audience.school, texts.audience.school], [texts.audience.university, texts.audience.university], [texts.audience.company, texts.audience.company]],
              duration: [['15', texts.moduleLength.brief], ['45', texts.moduleLength.standard], ['60', texts.moduleLength.extended]],
              language: [['en', texts.languages.en], ['es', texts.languages.es], ['pt', texts.languages.pt], ['fr', texts.languages.fr], ['de', texts.languages.de]]
            };
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/components/radio-button
      ***********************************************/

      ims.set('./views/components/radio-button', {
        hash: 3019030998,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RadioButton = RadioButton;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _options = require("./options");
          function RadioButton({
            name,
            onChange,
            label,
            selected = 0
          }) {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching || !!activities.length
            };
            const data = (0, _options.getOptions)(texts);
            const output = data[name].map(([value, label], index) => _react.default.createElement(_components.Button, {
              name: name,
              ...disabled,
              "data-index": index,
              onClick: onChange,
              key: index,
              value: value
            }, label));
            return _react.default.createElement("div", {
              className: "radio-button__container"
            }, _react.default.createElement("label", {
              htmlFor: name
            }, label), _react.default.createElement(_components.ButtonGroup, {
              selected: selected,
              ...disabled
            }, output));
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
        hash: 947732670,
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
          var _header = require("./components/header");
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
        hash: 1717716688,
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
              className: "module-property mt-15"
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
        hash: 3768700322,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleManagement = ModuleManagement;
          var _react = require("react");
          var _activities = require("../activities");
          var _refineActivitiesModal = require("../activities/refine-activities-modal");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _coverImage = require("./cover-image");
          var _contentEditable = require("./content-editable");
          var _description = require("./description");
          function ModuleManagement() {
            const {
              texts: {
                module: moduleTexts
              },
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const onClose = () => setShow(false);
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            const title = store.model.title ?? moduleTexts.title;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "relative-container module-header-description"
            }, _react.default.createElement(_contentEditable.ContentEditable, {
              name: "title",
              selector: "h1",
              onSave: data => store.save(data)
            }, title)), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement("section", {
              className: "mt-15"
            }, _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("h5", null, moduleTexts.objective, ":"), " ", store.model.objective), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_activities.ModuleActivities, {
              store: store,
              activity: store.editActivity
            }), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
              confirm: true,
              onClose: onClose
            }));
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/module/title
      ************************************/

      ims.set('./views/module/title', {
        hash: 1827332379,
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
        "im": "./views/components/header",
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
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/components/header').Header : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9tb2RhbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfZnJhbWVyTW90aW9uIiwiQWN0aXZpdHlUeXBlRm9ybSIsIm9uQ2xvc2UiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25TdWJtaXQiLCJJdGVtIiwiZGF0YSIsIm9uQ2xpY2siLCJldmVudCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJpY29uIiwiSUNPTlMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsIm5hbWUiLCJNb2RhbCIsIkxpc3QiLCJ0eXBlcyIsImNvbnRyb2wiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiY29udGludWUiLCJfaXRlbSIsIl9mb3JtIiwiX2VtcHR5IiwiX2Zvcm1BY3Rpdml0eVR5cGUiLCJNb2R1bGVBY3Rpdml0aWVzIiwiZGlzYWJsZWQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvcGVuIiwibGVuZ3RoIiwibW9kdWxlIiwidGl0bGUiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJGb3JtIiwiTW9kdWxlQWN0aXZpdHkiLCJfc3BlY3MiLCJfY29sbGFwc2libGUiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImltZ0NscyIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJkdXJhdGlvbiIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfdWkiLCJfZXJyb3IiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJjb25maXJtIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIl9hbGVydCIsIkFsZXJ0IiwiX3RvYXN0IiwiX3JvdXRpbmciLCJfY29uZmlnIiwiSGVhZGVyIiwic2hvd0hlYWRlciIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiZ2V0T3B0aW9ucyIsImF1ZGllbmNlIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib3V0cHV0IiwibWFwIiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfaG9va3MiLCJfYWN0aXZpdHkiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJNb2R1bGVNYW5hZ2VtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiUmVmaW5lbWVudE1vZGFsIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiZ2VuZXJhdGluZ0ltYWdlIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbnMiLCJnZW5lcmF0ZVBpY3R1cmUiLCJfY29udGVudEVkaXRhYmxlIiwiTW9kdWxlRGVzY3JpcHRpb24iLCJtb2R1bGVUZXh0cyIsIl9hY3Rpdml0aWVzIiwiX3JlZmluZUFjdGl2aXRpZXNNb2RhbCIsIl9jb3ZlckltYWdlIiwiX2Rlc2NyaXB0aW9uIiwic2V0U2hvdyIsIk1vZHVsZVRpdGxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9mb3JtLWFjdGl2aXR5LXR5cGUudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy1pdGVtcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvcmVmaW5lLWFjdGl2aXRpZXMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY29udGVudC1lZGl0YWJsZS50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2FjdGlvbnMudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL3JlZmluZW1lbnQtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9kZXNjcmlwdGlvbi50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvdGl0bGUudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBQ3pCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNITixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDbkIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ2EsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFB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