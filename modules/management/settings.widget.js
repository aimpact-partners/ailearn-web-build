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
        hash: 642851358,
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
            }, _react.default.createElement("div", null, data.description), _react.default.createElement("div", null, _react.default.createElement("strong", {
              className: "activity-field"
            }, texts.objective, ": "), _react.default.createElement("span", null, data.specs.objective)), _react.default.createElement(_specs.ActivitySpecs, {
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
        hash: 207973464,
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
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await store.model.generatePicture();
              setFetching(false);
            };
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_icons.IconButton, {
                onClick: () => setShowRefiningModal(true),
                icon: _icons2.ICONS.aiStars
              }), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_icons.IconButton, {
              onClick: generateImage,
              bordered: true,
              icon: _icons2.ICONS.aiStars
            }), _react.default.createElement(_icons.IconButton, {
              disabled: true,
              icon: "upload"
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
        hash: 2095358846,
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
              observations: store.model.pictureSuggestion,
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
                  await store.model.generatePicture(values.observations);
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

      /******************************************
      INTERNAL MODULE: ./views/module/description
      ******************************************/

      ims.set('./views/module/description', {
        hash: 3502644892,
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
            }, _react.default.createElement("strong", null, moduleTexts.description), _react.default.createElement(_contentEditable.ContentEditable, {
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
        hash: 1660050656,
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
            }, title), _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("strong", null, moduleTexts.objective, ":"), store.model.objective), _react.default.createElement(_description.ModuleDescription, null)), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement(_activities.ModuleActivities, {
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
        hash: 1058715782,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9tb2RhbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfZnJhbWVyTW90aW9uIiwiQWN0aXZpdHlUeXBlRm9ybSIsIm9uQ2xvc2UiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25TdWJtaXQiLCJJdGVtIiwiZGF0YSIsIm9uQ2xpY2siLCJldmVudCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJpY29uIiwiSUNPTlMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsIm5hbWUiLCJNb2RhbCIsIkxpc3QiLCJ0eXBlcyIsImNvbnRyb2wiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiY29udGludWUiLCJfaXRlbSIsIl9mb3JtIiwiX2VtcHR5IiwiX2Zvcm1BY3Rpdml0eVR5cGUiLCJNb2R1bGVBY3Rpdml0aWVzIiwiZGlzYWJsZWQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvcGVuIiwibGVuZ3RoIiwibW9kdWxlIiwidGl0bGUiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJGb3JtIiwiTW9kdWxlQWN0aXZpdHkiLCJfc3BlY3MiLCJfY29sbGFwc2libGUiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImltZ0NscyIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJkdXJhdGlvbiIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfdWkiLCJfZXJyb3IiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJjb25maXJtIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIl9hbGVydCIsIkFsZXJ0IiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJzaG93SGVhZGVyIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiZ2V0T3B0aW9ucyIsImF1ZGllbmNlIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib3V0cHV0IiwibWFwIiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfaG9va3MiLCJfYWN0aXZpdHkiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJNb2R1bGVNYW5hZ2VtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwib25TYXZlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsImNvbnRlbnRSZWYiLCJ0b2dnbGVFZGl0IiwiZWwiLCJyYW5nZSIsImRvY3VtZW50IiwiY3JlYXRlUmFuZ2UiLCJzZWwiLCJnZXRTZWxlY3Rpb24iLCJzZWxlY3ROb2RlQ29udGVudHMiLCJjb2xsYXBzZSIsInJlbW92ZUFsbFJhbmdlcyIsImFkZFJhbmdlIiwiZm9jdXMiLCJoYW5kbGVTYXZlIiwidGV4dENvbnRlbnQiLCJjb25zdHJvbENscyIsImNvbnRlbnRFZGl0YWJsZSIsInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZyIsIl9yZWZpbmVtZW50TW9kYWwiLCJDb3ZlckltYWdlQWN0aW9ucyIsImdlbmVyYXRlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJzZXRTaG93UmVmaW5pbmdNb2RhbCIsImNvdmVyIiwiZ2VuZXJhdGVJbWFnZSIsImdlbmVyYXRlUGljdHVyZSIsIlJlZmluZW1lbnRNb2RhbCIsIl9pbWFnZSIsIl9hY3Rpb25zIiwiQ292ZXJJbWFnZSIsInBpY3R1cmUiLCJJbWFnZSIsInNyYyIsInBpY3R1cmVTdWdnZXN0aW9uIiwiX2NvbnRlbnRFZGl0YWJsZSIsIk1vZHVsZURlc2NyaXB0aW9uIiwibW9kdWxlVGV4dHMiLCJfYWN0aXZpdGllcyIsIl9yZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJfY292ZXJJbWFnZSIsIl9kZXNjcmlwdGlvbiIsInNldFNob3ciLCJNb2R1bGVUaXRsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZm9ybS1hY3Rpdml0eS10eXBlLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vc3BlY3MtaXRlbXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3JlZmluZS1hY3Rpdml0aWVzLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvbnRlbnQtZWRpdGFibGUudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvZGVzY3JpcHRpb24udHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kdWxlL3RpdGxlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHFCQUFxQjtZQUM3QyxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDO2NBQy9DLE9BQU8sSUFBSSxDQUFDLENBQUFILEtBQU07WUFDbkI7WUFDQSxJQUFJSSxNQUFNQSxDQUFBO2NBQ1QsT0FBT1AsTUFBQSxDQUFBUSxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNIQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUM7Y0FDekIsSUFBSSxDQUFDLENBQUFSLEtBQU0sQ0FBQ1MsSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQztZQUVBQyxJQUFJQSxDQUFBO2NBQ0hOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztjQUNuQixJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDYSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWhCLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkQsSUFBQWlCLEtBQUEsR0FB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