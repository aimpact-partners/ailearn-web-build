System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/base", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "pragmate-ui@0.0.6/modal", "react@18.2.0", "pragmate-ui@0.0.6/list", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/icons", "pragmate-ui@0.0.6/components", "framer-motion@10.17.8", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/empty", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/image"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_23 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_24 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Image) {
      dependency_25 = _pragmateUi006Image;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@bgroup/wise-form", "0.0.4"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/base', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['pragmate-ui/modal', dependency_7], ['react', dependency_8], ['pragmate-ui/list', dependency_9], ['@aimpact/ailearn-app/components/icons', dependency_10], ['pragmate-ui/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/form', dependency_14], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/empty', dependency_17], ['pragmate-ui/collapsible', dependency_18], ['pragmate-ui/chips', dependency_19], ['pragmate-ui/alert', dependency_20], ['pragmate-ui/toast', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@beyond-js/react-18-widgets/hooks', dependency_23], ['@aimpact/chat/shared/hooks', dependency_24], ['pragmate-ui/image', dependency_25]]);
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
        hash: 2571013258,
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
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
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
        hash: 3669833286,
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
                processMessages
              },
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            const [values, setValues] = _react.default.useState({
              notes: store.model.pictureSuggestion,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9tb2RhbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfZnJhbWVyTW90aW9uIiwiQWN0aXZpdHlUeXBlRm9ybSIsIm9uQ2xvc2UiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25TdWJtaXQiLCJJdGVtIiwiZGF0YSIsIm9uQ2xpY2siLCJldmVudCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJpY29uIiwiSUNPTlMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsIm5hbWUiLCJNb2RhbCIsIkxpc3QiLCJ0eXBlcyIsImNvbnRyb2wiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiY29udGludWUiLCJfaXRlbSIsIl9mb3JtIiwiX2VtcHR5IiwiX2Zvcm1BY3Rpdml0eVR5cGUiLCJNb2R1bGVBY3Rpdml0aWVzIiwiZGlzYWJsZWQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvcGVuIiwibGVuZ3RoIiwibW9kdWxlIiwidGl0bGUiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJGb3JtIiwiTW9kdWxlQWN0aXZpdHkiLCJfc3BlY3MiLCJfY29sbGFwc2libGUiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImltZ0NscyIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJkdXJhdGlvbiIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfdWkiLCJfZXJyb3IiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJjb25maXJtIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIl9hbGVydCIsIkFsZXJ0IiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJzaG93SGVhZGVyIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiZ2V0T3B0aW9ucyIsImF1ZGllbmNlIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib3V0cHV0IiwibWFwIiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfaG9va3MiLCJfYWN0aXZpdHkiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJNb2R1bGVNYW5hZ2VtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiUmVmaW5lbWVudE1vZGFsIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwibm90ZXMiLCJwaWN0dXJlU3VnZ2VzdGlvbiIsImdlbmVyYXRlUGljdHVyZSIsIl9jb250ZW50RWRpdGFibGUiLCJNb2R1bGVEZXNjcmlwdGlvbiIsIm1vZHVsZVRleHRzIiwiX2FjdGl2aXRpZXMiLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiX2NvdmVySW1hZ2UiLCJfZGVzY3JpcHRpb24iLCJzZXRTaG93IiwiTW9kdWxlVGl0bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0tYWN0aXZpdHktdHlwZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2Rlc2NyaXB0aW9uLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS90aXRsZS50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyxxQkFBcUI7WUFDN0MsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQztjQUMvQyxPQUFPLElBQUksQ0FBQyxDQUFBSCxLQUFNO1lBQ25CO1lBQ0EsSUFBSUksTUFBTUEsQ0FBQTtjQUNULE9BQU9QLE1BQUEsQ0FBQVEsSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDO2NBQ3pCLElBQUksQ0FBQyxDQUFBUixLQUFNLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUM7WUFFQUMsSUFBSUEsQ0FBQTtjQUNITixPQUFPLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7Y0FDbkIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ2EsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFoQixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJELElBQUFpQixLQUFBLEdBQUFwQixPQUFB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