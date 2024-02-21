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
        hash: 1322952885,
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
        hash: 3158733876,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ContentEditable = void 0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          const ContentEditable = ({
            selector: Control = 'div',
            className,
            children,
            onEdit
          }) => {
            const [isEditable, setIsEditable] = (0, _react.useState)(false);
            const [content, setContent] = (0, _react.useState)(typeof children === 'string' ? children : '');
            const ref = _react.default.useRef(null);
            // Toggle the editable state
            const toggleEdit = () => {
              setIsEditable(!isEditable);
              // If toggling off, call onEdit to ensure the last change is captured
              if (isEditable && onEdit) {
                onEdit(content);
              }
            };
            // Update content state when the span's content is edited
            const handleContentChange = event => {
              const newContent = event.currentTarget.textContent || '';
              setContent(newContent);
              if (onEdit) {
                onEdit(newContent);
              }
              if (isEditable && ref.current) {
                // ref.current.focus();
              }
            };
            const cls = `pui-content-editable${className ? ` ${className}` : ''}`;
            const icon = isEditable ? 'save' : 'edit';
            const constrolCls = isEditable ? `pui-editable-selector` : '';
            return _react.default.createElement("div", {
              className: cls
            }, _react.default.createElement(Control, {
              ref: ref,
              className: constrolCls,
              contentEditable: isEditable,
              onInput: handleContentChange,
              suppressContentEditableWarning: true
            }, content), _react.default.createElement(_icons.IconButton, {
              icon: icon,
              onClick: toggleEdit
            }));
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

      /************************************
      INTERNAL MODULE: ./views/module/index
      ************************************/

      ims.set('./views/module/index', {
        hash: 746354442,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleManagement = ModuleManagement;
          var _react = require("react");
          var _activities = require("../activities");
          var _components = require("pragmate-ui/components");
          var _refineActivitiesModal = require("../activities/refine-activities-modal");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _coverImage = require("./cover-image");
          var _contentEditable = require("./content-editable");
          function ModuleManagement() {
            const {
              texts: {
                module: moduleTexts
              },
              store
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const onClose = () => setShow(false);
            const onShow = () => setShow(true);
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            const title = store.model.title ?? moduleTexts.title;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "relative-container module-header-description"
            }, _react.default.createElement(_contentEditable.ContentEditable, {
              selector: "h1"
            }, title), _react.default.createElement("div", {
              className: "module-property"
            }, _react.default.createElement("strong", null, moduleTexts.objective, ":"), store.model.objective), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
              icon: "add",
              variant: "link"
            }, moduleTexts.actions.description))), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement(_activities.ModuleActivities, {
              store: store,
              activity: store.editActivity
            }), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
              confirm: true,
              onClose: onClose
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYmFzZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUmVhY3RXaWRnZXRDb250cm9sbGVyIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsIlN0b3JlTWFuYWdlciIsImF0dHJpYnV0ZXMiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2FkIiwidXJpIiwidmFycyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsInZhbHVlcyIsInNhdmVkIiwiZ2V0UHJvcGVydGllcyIsImRlZmF1bHRWYWx1ZXMiLCJvd25lcnNoaXBzIiwic2Nob29scyIsIml0ZW1zIiwiYWN0aXZpdHlUeXBlcyIsIkFjdGl2aXR5VHlwZXMiLCJlZGl0QWN0aXZpdHkiLCJ2YWx1ZSIsInRyaWdnZXIiLCJjb25zdHJ1Y3RvciIsImF0dHJzIiwiaWQiLCJFcnJvciIsImNsZWFuIiwiYWN0aXZpdGllcyIsInVuZGVmaW5lZCIsInJlYWR5Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsImUiLCJlcnJvciIsImRlbGV0ZUFjdGl2aXR5IiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY3JlYXRlQWN0aXZpdHkiLCJhY3Rpdml0eVR5cGUiLCJhY3Rpdml0eSIsImFkZCIsInB1Ymxpc2giLCJyZXNwb25zZSIsIl9tb2RhbCIsIl9yZWFjdCIsIl9jb250ZXh0IiwiX2xpc3QiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbXBvbmVudHMiLCJfZnJhbWVyTW90aW9uIiwiQWN0aXZpdHlUeXBlRm9ybSIsIm9uQ2xvc2UiLCJ0ZXh0cyIsInVzZU1vZHVsZUNvbnRleHQiLCJzZWxlY3RlZCIsInNldFNlbGVjdGVkIiwiZGVmYXVsdCIsInVzZVN0YXRlIiwib25TdWJtaXQiLCJJdGVtIiwiZGF0YSIsIm9uQ2xpY2siLCJldmVudCIsImtleSIsInJlcGxhY2UiLCJjbHMiLCJpY29uIiwiSUNPTlMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiSWNvbiIsIm5hbWUiLCJNb2RhbCIsIkxpc3QiLCJ0eXBlcyIsImNvbnRyb2wiLCJtb3Rpb24iLCJkaXYiLCJhbmltYXRlIiwib3BhY2l0eSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhY3Rpb25zIiwiY29udGludWUiLCJfaXRlbSIsIl9mb3JtIiwiX2VtcHR5IiwiX2Zvcm1BY3Rpdml0eVR5cGUiLCJNb2R1bGVBY3Rpdml0aWVzIiwiZGlzYWJsZWQiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJvcGVuIiwibGVuZ3RoIiwibW9kdWxlIiwidGl0bGUiLCJhZGRBY3Rpdml0eSIsIkVtcHR5IiwiZW1wdHkiLCJ0ZXh0IiwiRnJhZ21lbnQiLCJGb3JtIiwiTW9kdWxlQWN0aXZpdHkiLCJfc3BlY3MiLCJfY29sbGFwc2libGUiLCJpbmRleCIsInJlZiIsInVzZVJlZiIsImVkaXQiLCJzdG9wUHJvcGFnYXRpb24iLCJkZWxldGVJdGVtIiwiY3VycmVudCIsImNsYXNzTGlzdCIsImltZ0NscyIsIkNvbGxhcHNpYmxlQ29udGFpbmVyIiwiQ29sbGFwc2libGVIZWFkZXIiLCJkdXJhdGlvbiIsIm1pbnV0ZXMiLCJJY29uQnV0dG9uIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJvYmplY3RpdmUiLCJBY3Rpdml0eVNwZWNzIiwiUXVlc3Rpb25JdGVtIiwiY29ycmVjdEFuc3dlciIsInF1ZXN0aW9uVGV4dCIsIlNwZWNzTGlzdCIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfdWkiLCJfZXJyb3IiLCJSZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJjb25maXJtIiwicmVmaW5lIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwic2V0VmFsdWVzIiwib2JzZXJ2YXRpb25zIiwiZ2VuZXJhdGlvbiIsIm9wZW5Db25maXJtIiwic2V0T3BlbkNvbmZpcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImN1cnJlbnRUYXJnZXQiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJzdWJ0aXRsZSIsIkVycm9yUmVuZGVyZXIiLCJUZXh0YXJlYSIsImxhYmVsIiwicGxhY2Vob2xkZXIiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIl9hbGVydCIsIkFsZXJ0IiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJzaG93SGVhZGVyIiwidG9hc3QiLCJzdWNjZXNzIiwicm91dGluZyIsInB1c2hTdGF0ZSIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiZ2V0T3B0aW9ucyIsImF1ZGllbmNlIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib3V0cHV0IiwibWFwIiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfaG9va3MiLCJfYWN0aXZpdHkiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX2hlYWRlciIsIl9tb2R1bGUyIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldEFjdGl2ZVBhbmVsIiwic2V0QWN0aXZpdGllcyIsImVkaXRpbmdBY3Rpdml0eSIsInNldEVkaXRpbmdBY3Rpdml0eSIsIm9uQWN0aXZpdGllc0dlbmVyYXRlZCIsInVzZUJpbmRlciIsInByZXZlbnREZWZhdWx0Iiwic2V0VGltZW91dCIsInRvdGFsQWN0aXZpdGllcyIsIkNvbnRyb2wiLCJNb2R1bGVBY3Rpdml0eUZvcm0iLCJNb2R1bGVNYW5hZ2VtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiQ29udGVudEVkaXRhYmxlIiwic2VsZWN0b3IiLCJjaGlsZHJlbiIsIm9uRWRpdCIsImlzRWRpdGFibGUiLCJzZXRJc0VkaXRhYmxlIiwic2V0Q29udGVudCIsInRvZ2dsZUVkaXQiLCJoYW5kbGVDb250ZW50Q2hhbmdlIiwibmV3Q29udGVudCIsInRleHRDb250ZW50IiwiY29uc3Ryb2xDbHMiLCJjb250ZW50RWRpdGFibGUiLCJvbklucHV0Iiwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nIiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiUmVmaW5lbWVudE1vZGFsIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwicGljdHVyZVN1Z2dlc3Rpb24iLCJfYWN0aXZpdGllcyIsIl9yZWZpbmVBY3Rpdml0aWVzTW9kYWwiLCJfY292ZXJJbWFnZSIsIl9jb250ZW50RWRpdGFibGUiLCJtb2R1bGVUZXh0cyIsInNldFNob3ciLCJvblNob3ciXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2Zvcm0tYWN0aXZpdHktdHlwZS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb250ZW50LWVkaXRhYmxlLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvYWN0aW9ucy50c3giLCIvdHMvdmlld3MvbW9kdWxlL2NvdmVyLWltYWdlL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvcmVmaW5lbWVudC1tb2RhbC50c3giLCIvdHMvdmlld3MvbW9kdWxlL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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