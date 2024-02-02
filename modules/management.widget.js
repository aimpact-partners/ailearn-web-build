System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.3/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.9/model", "react@18.2.0", "pragmate-ui@0.0.6/list", "pragmate-ui@0.0.6/components", "pragmate-ui@0.0.6/form", "@aimpact/ailearn-app@0.0.24/modules/management/activity.code", "pragmate-ui@0.0.6/icons", "@aimpact/ailearn-app@0.0.24/components/icons", "pragmate-ui@0.0.6/collapsible", "pragmate-ui@0.0.6/chips", "pragmate-ui@0.0.6/modal", "@aimpact/ailearn-app@0.0.24/components/ui", "pragmate-ui@0.0.6/toast", "@beyond-js/kernel@0.1.9/routing", "@aimpact/chat@1.0.1/shared/hooks", "@beyond-js/react-18-widgets@1.0.3/hooks", "pragmate-ui@0.0.6/image", "framer-motion@10.17.8", "pragmate-ui@0.0.6/alert"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets103Page) {
      dependency_3 = _beyondJsReact18Widgets103Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive119Model) {
      dependency_5 = _beyondJsReactive119Model;
    }, function (_react2) {
      dependency_6 = _react2;
    }, function (_pragmateUi006List) {
      dependency_7 = _pragmateUi006List;
    }, function (_pragmateUi006Components) {
      dependency_8 = _pragmateUi006Components;
    }, function (_pragmateUi006Form) {
      dependency_9 = _pragmateUi006Form;
    }, function (_aimpactAilearnApp0024ModulesManagementActivityCode) {
      dependency_10 = _aimpactAilearnApp0024ModulesManagementActivityCode;
    }, function (_pragmateUi006Icons) {
      dependency_11 = _pragmateUi006Icons;
    }, function (_aimpactAilearnApp0024ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0024ComponentsIcons;
    }, function (_pragmateUi006Collapsible) {
      dependency_13 = _pragmateUi006Collapsible;
    }, function (_pragmateUi006Chips) {
      dependency_14 = _pragmateUi006Chips;
    }, function (_pragmateUi006Modal) {
      dependency_15 = _pragmateUi006Modal;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_16 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_pragmateUi006Toast) {
      dependency_17 = _pragmateUi006Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_18 = _beyondJsKernel019Routing;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_beyondJsReact18Widgets103Hooks) {
      dependency_20 = _beyondJsReact18Widgets103Hooks;
    }, function (_pragmateUi006Image) {
      dependency_21 = _pragmateUi006Image;
    }, function (_framerMotion2) {
      dependency_22 = _framerMotion2;
    }, function (_pragmateUi006Alert) {
      dependency_23 = _pragmateUi006Alert;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.9"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.3"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['react', dependency_6], ['pragmate-ui/list', dependency_7], ['pragmate-ui/components', dependency_8], ['pragmate-ui/form', dependency_9], ['@aimpact/ailearn-app/modules/management/activity.code', dependency_10], ['pragmate-ui/icons', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/collapsible', dependency_13], ['pragmate-ui/chips', dependency_14], ['pragmate-ui/modal', dependency_15], ['@aimpact/ailearn-app/components/ui', dependency_16], ['pragmate-ui/toast', dependency_17], ['@beyond-js/kernel/routing', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['pragmate-ui/image', dependency_21], ['framer-motion', dependency_22], ['pragmate-ui/alert', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/management.widget",
        "is": "page",
        "route": "/modules/management/${id}",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/management.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 3399872820,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Controller = void 0;
          var _page = require("@beyond-js/react-18-widgets/page");
          var _store = require("./store");
          var _views = require("./views");
          /*bundle*/
          class Controller extends _page.PageReactWidgetController {
            #store;
            createStore() {
              this.#store = new _store.StoreManager();
              return this.#store;
            }
            get Widget() {
              return _views.View;
            }
            show() {
              this.#store.load(this.uri.vars.get('id'));
            }
            hide() {
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
        hash: 4000009170,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _core = require("@aimpact/ailearn-sdk/core");
          var _model = require("@beyond-js/reactive/model");
          class StoreManager extends _model.ReactiveModel {
            #model;
            get model() {
              return this.#model;
            }
            #improvements = [];
            get improvements() {
              return this.#improvements;
            }
            #selected;
            get defaultValues() {
              return {
                audience: 'school',
                duration: 45,
                target: 13,
                proposal: '',
                content: '',
                objective: '',
                observations: '',
                totalActivities: 3
              };
            }
            #objectivesGenerated = new Map();
            #editActivity;
            get editActivity() {
              return this.#editActivity;
            }
            set editActivity(value) {
              this.#editActivity = value;
              this.trigger('activity.selected');
            }
            get selected() {
              return this.#selected;
            }
            hide() {
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
                if (id === 'new' && this.#model) this.hide();
                this.#model = new _core.LearningModule(specs);
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
            async save() {
              this.fetching = true;
              await this.model.saveDraft();
              this.fetching = false;
            }
            async clean() {
              this.#model.activities.clean();
              this.trigger('change');
            }
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.fetching = false;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = false;
                if (this.#objectivesGenerated.has(improvements)) return this.#objectivesGenerated.get(improvements);
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#objectivesGenerated.set(objective, data.objective);
                this.#model.objective = data.objective;
                this.triggerEvent('change');
                return this.#model.objective;
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
                console.log(30, response);
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
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 1053747505,
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
            return _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_list.List, {
              className: "module-activities__list",
              items: activities,
              control: _item.ModuleActivity
            }), _react.default.createElement("footer", {
              className: "flex-container flex-end mt-15"
            }, _react.default.createElement(_components.Button, {
              ...attrs,
              onClick: onSubmit,
              variant: "primary"
            }, texts.actions.save)));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/list/item/index
      **************************************************/

      ims.set('./views/activities/list/item/index', {
        hash: 3006158981,
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
              store.deleteActivity(index);
            };
            return _react.default.createElement(_collapsible.CollapsibleContainer, null, _react.default.createElement("article", {
              className: "activity-item",
              ref: ref
            }, _react.default.createElement("section", null, _react.default.createElement(_collapsible.CollapsibleHeader, null, _react.default.createElement("header", {
              className: "flex-container flex-space-between flex-vertical-center"
            }, _react.default.createElement("h3", {
              className: "flex-container flex-05 flex-center "
            }, _react.default.createElement(_icons.Icon, {
              icon: _icons2.ICONS[data.type]
            }), data.title), _react.default.createElement("div", {
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
            })))), _react.default.createElement(_collapsible.CollapsibleContent, null, _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.objective, ": "), _react.default.createElement("span", null, data.objective)), _react.default.createElement("div", null, _react.default.createElement("span", {
              className: "activity-field"
            }, texts.description, ": "), data.description), _react.default.createElement(_specs.ActivitySpecs, {
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
        hash: 2973180359,
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
          var _error = require("../steps/error");
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

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 3592361060,
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
            texts
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: false
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
            }, "Publish")), _react.default.createElement(_ui.PageTitle, {
              title: texts.title
            }, _react.default.createElement(_ui.PageSubtitle, null, texts.postTitle)));
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
        hash: 2878793690,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _activity = require("@aimpact/ailearn-app/modules/management/activity.code");
          var _context = require("./context");
          var _hooks = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _hooks2 = require("@beyond-js/react-18-widgets/hooks");
          var _container = require("./steps/container");
          var _module2 = require("./module");
          /*bundle*/
          function View({
            store
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel, setActivePanel] = React.useState(0);
            const [activities, setActivities] = React.useState(store.model?.activities?.items);
            const [editingActivity, setEditingActivity] = React.useState();
            const onActivitiesGenerated = () => {
              setActivePanel(1);
              setActivities(store.model?.activities?.items);
            };
            (0, _hooks2.useBinder)([store.model], () => setFetching(store.model.fetching));
            (0, _hooks2.useBinder)([store], () => setActivities(store.model?.activities?.items));
            (0, _hooks2.useBinder)([store.model], onActivitiesGenerated, 'activities.generated');
            (0, _hooks2.useBinder)([store], () => {
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
              onSubmit
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            const Control = store.model?.activities?.items.length > 0 ? editingActivity ? _activity.ModuleActivityForm : _module2.ModuleManagement : _container.StepsContainer;
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              texts: texts
            }), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement("div", {
              className: "app-module-creation-page"
            }, React.createElement(Control, {
              store: store,
              activity: store.editActivity
            })))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/module/cover-image/actions
      **************************************************/

      ims.set('./views/module/cover-image/actions', {
        hash: 3737179292,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoverImageActions = CoverImageActions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _refinementModal = require("./refinement-modal");
          function CoverImageActions({
            generated,
            setFetching
          }) {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [image, setImage] = _react.default.useState();
            const [showModal, setShowRefiningModal] = _react.default.useState(false);
            (0, _hooks.useBinder)([store.model], () => {
              console.log('disparada imagen', store.model.cover);
              setImage(store.model.cover);
            }, 'image.generated');
            const generateImage = async event => {
              event.preventDefault();
              setFetching(true);
              await store.model.generatePicture();
              setFetching(false);
            };
            if (generated) {
              return _react.default.createElement("footer", {
                className: "actions"
              }, _react.default.createElement(_components.Button, {
                variant: "primary",
                onClick: () => setShowRefiningModal(true),
                icon: _icons.ICONS.aiStars
              }, texts.actions.refine), showModal && _react.default.createElement(_refinementModal.RefinementModal, {
                confirm: true,
                onClose: () => setShowRefiningModal(false)
              }));
            }
            return _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: generateImage,
              bordered: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.cover), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: true,
              icon: _icons.ICONS.aiStars
            }, texts.actions.upload));
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
        hash: 2594354998,
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
          var _error = require("../../steps/error");
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
        hash: 3735187649,
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
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _context = require("../context");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _coverImage = require("./cover-image");
          function ModuleManagement() {
            const {
              texts,
              store,
              activities
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const onClose = () => setShow(false);
            const onShow = () => setShow(true);
            (0, _hooks.useBinder)([store.model], () => {}, 'activities.updated');
            if (!activities.length) return null;
            return _react.default.createElement("div", null, _react.default.createElement("header", {
              className: "header-module__container flex-container flex-space-between"
            }, _react.default.createElement("section", {
              className: "relative-container module-header-description"
            }, _react.default.createElement("h2", null, store.model.title), _react.default.createElement("span", null, store.model.description), _react.default.createElement("section", {
              className: "actions__section buttons__container mt-15"
            }, _react.default.createElement(_components.Button, {
              onClick: onShow,
              variant: "primary",
              icon: _icons.ICONS.aiStars
            }, texts.actions.refine))), _react.default.createElement(_coverImage.CoverImage, null)), _react.default.createElement(_activities.ModuleActivities, {
              store: store,
              activity: store.editActivity
            }), show && _react.default.createElement(_refineActivitiesModal.RefineActivitiesModal, {
              confirm: true,
              onClose: onClose
            }));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/steps/container
      ***************************************/

      ims.set('./views/steps/container', {
        hash: 3158144117,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsContainer = StepsContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          var _form = require("pragmate-ui/form");
          var _context = require("../context");
          var _step = require("./step0");
          var _step2 = require("./step1");
          var _step3 = require("./step2");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _error = require("./error");
          var _context2 = require("./context");
          function StepsContainer() {
            const {
              store,
              fetching,
              texts
            } = (0, _context.useModuleContext)();
            const [current, setCurrent] = _react.default.useState(0);
            const [values, setValues] = _react.default.useState(store.defaultValues);
            const [error, setError] = _react.default.useState();
            const [isFetching, setIsFetching] = _react.default.useState(false);
            const Controls = [_step.Step0, _step2.Step1, _step3.Step2];
            const stepValues = ['objective', 'proposal', ['audience', 'duration']];
            const Control = Controls[current];
            const stepReady = (() => {
              const index = stepValues[current];
              if (typeof index === 'string' && !!values[index]) return true;
              const data = stepValues[current];
              let valid = true;
              if (Array.isArray(data)) {
                data.forEach(key => {
                  if (!values[key]) valid = false;
                });
              }
              return valid;
            })();
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            return _react.default.createElement(_context2.ModuleStepsFormContext.Provider, {
              value: {
                values,
                setValues,
                error,
                setError,
                store,
                texts,
                onChange,
                current,
                setCurrent,
                fetching: fetching || isFetching,
                setIsFetching
              }
            }, _react.default.createElement(_form.Form, {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement("div", {
              className: "wizard__container"
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, null))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching || isFetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            }))));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/steps/context
      *************************************/

      ims.set('./views/steps/context', {
        hash: 3063528704,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModuleStepsFormContext = exports.ModuleStepsFormContext = void 0;
          var _react = require("react");
          const ModuleStepsFormContext = exports.ModuleStepsFormContext = _react.default.createContext({});
          const useModuleStepsFormContext = () => _react.default.useContext(ModuleStepsFormContext);
          exports.useModuleStepsFormContext = useModuleStepsFormContext;
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/error
      ***********************************/

      ims.set('./views/steps/error', {
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

      /************************************
      INTERNAL MODULE: ./views/steps/footer
      ************************************/

      ims.set('./views/steps/footer', {
        hash: 2165885056,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsFooter = StepsFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("./context");
          function StepsFooter({
            onSubmit,
            disabled = false,
            previous = true
          }) {
            const {
              texts,
              setCurrent,
              current
            } = (0, _context.useModuleStepsFormContext)();
            // const stepReady = (() => {
            // 	const index = stepValues[show];
            // 	if (typeof index === 'string' && !!values[index]) return true;
            // 	const data = stepValues[show];
            // 	let valid = true;
            // 	if (Array.isArray(data)) {
            // 		data.forEach(key => {
            // 			if (!values[key]) valid = false;
            // 		});
            // 	}
            // 	return valid;
            // })();
            return _react.default.createElement("footer", null, previous && _react.default.createElement(_components.Button, {
              className: "wizard-input",
              variant: "primary",
              bordered: true,
              onClick: () => setCurrent(current - 1)
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              variant: "primary",
              onClick: onSubmit,
              disabled: disabled,
              sizing: "xl"
            }, texts.actions.next));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/steps/step-container
      ********************************************/

      ims.set('./views/steps/step-container', {
        hash: 3386266850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepContainer = StepContainer;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function StepContainer({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3,
                  delay: 0.3
                },
                y: 0
              },
              exit: {
                transition: {
                  duration: 0.3
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/steps/step0/index
      *****************************************/

      ims.set('./views/steps/step0/index', {
        hash: 2786685514,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step0 = Step0;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("../step-container");
          var _form = require("pragmate-ui/form");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _context = require("../context");
          var _footer = require("../footer");
          function Step0() {
            const {
              values,
              setValues,
              store,
              texts: {
                suggestions: texts,
                actions
              },
              setCurrent,
              current,
              onChange
            } = (0, _context.useModuleStepsFormContext)();
            const [improvement, setImprovement] = _react.default.useState();
            const analize = async () => {
              await store.getObjectiveImprovements({
                objective: values.proposal
              });
            };
            const onSubmit = async () => {
              if (typeof improvement === 'number' && improvement !== -1) {
                const selected = store.improvements[improvement];
                const objective = await store.generateObjective({
                  objective: values.proposal,
                  improvements: [selected]
                });
                setValues({
                  ...values,
                  objective
                });
              } else {
                setValues({
                  ...values,
                  objective: values.proposal
                });
              }
              setCurrent(current + 1);
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("label", null, texts.step0.title), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.description), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.proposal,
              name: "proposal",
              placeholder: texts.step0.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement("div", {
              className: "mt-30 flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              onClick: analize,
              variant: "primary",
              bordered: true,
              sizing: "xs"
            }, actions.analyse)), store.improvements.length > 0 && _react.default.createElement(_suggestions.ObjectiveSuggestions, {
              improvement: improvement,
              setImprovement: setImprovement
            }), _react.default.createElement(_footer.StepsFooter, {
              previous: false,
              disabled: !values.proposal,
              onSubmit: onSubmit
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/steps/step0/suggestions
      ***********************************************/

      ims.set('./views/steps/step0/suggestions', {
        hash: 2190795046,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("../step-container");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          function ObjectiveSuggestions({
            improvement,
            setImprovement
          }) {
            const {
              texts: {
                suggestions: texts,
                actions
              },
              store,
              values
            } = (0, _context.useModuleStepsFormContext)();
            const onSelect = event => {
              event.stopPropagation();
              const {
                index
              } = event.currentTarget.dataset;
              if (index === 'original') {
                setImprovement(-1);
                return;
              }
              setImprovement(parseInt(index));
            };
            const Item = ({
              data,
              index
            }) => {
              const cls = `objectives__item${index === improvement ? ' selected' : ''}`;
              return _react.default.createElement("div", {
                className: cls,
                "data-index": index,
                onClick: onSelect
              }, _react.default.createElement("div", {
                className: "item__content"
              }, data));
            };
            const clsOriginal = `objectives__item${improvement === -1 ? ' selected' : ''}`;
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("div", {
              className: "help-info mt-15 mb-10"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.suggestions), _react.default.createElement(_list.List, {
              className: "objectives__list",
              control: Item,
              items: store.improvements
            }, _react.default.createElement("div", {
              "data-index": "original",
              className: clsOriginal,
              onClick: onSelect
            }, "Keep original: ", values.proposal)));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step1
      ***********************************/

      ims.set('./views/steps/step1', {
        hash: 4135525060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step1 = Step1;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _stepContainer = require("./step-container");
          var _form = require("pragmate-ui/form");
          var _context = require("./context");
          var _footer = require("./footer");
          function Step1() {
            const {
              values,
              setValues,
              texts: {
                suggestions: texts,
                actions
              },
              setCurrent,
              current
            } = (0, _context.useModuleStepsFormContext)();
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const onSubmit = () => {
              setCurrent(current + 1);
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("label", null, texts.step0.title), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.step0.description), _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: texts.step0.textArea,
              counter: true,
              maxLength: 400
            }), _react.default.createElement(_footer.StepsFooter, {
              disabled: !values.objective,
              onSubmit: onSubmit
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/steps/step2
      ***********************************/

      ims.set('./views/steps/step2', {
        hash: 1913231914,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Step2 = Step2;
          var _react = require("react");
          var _icons = require("pragmate-ui/icons");
          var _radioButton = require("../components/radio-button");
          var _routing = require("@beyond-js/kernel/routing");
          var _stepContainer = require("./step-container");
          var _context = require("./context");
          var _footer = require("./footer");
          function Step2() {
            const {
              texts,
              store,
              values,
              setValues,
              setError,
              setIsFetching
            } = (0, _context.useModuleStepsFormContext)();
            const events = {
              onChange: event => {
                setValues({
                  ...values,
                  audienceIndex: event.currentTarget.dataset?.index,
                  [event.currentTarget.name]: event.currentTarget.value
                });
              },
              onChangeDuration: event => {
                const activitiesNumber = {
                  '15': 3,
                  '45': 5,
                  '60': 7
                };
                setValues({
                  ...values,
                  totalActivities: activitiesNumber[event.currentTarget.value],
                  [event.currentTarget.name]: event.currentTarget.value
                });
              }
            };
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.audienceIndex);
            if (values?.audience?.index) selected = parseInt(values.audience.index);
            const onSubmit = async event => {
              try {
                await store.model.draft({
                  ...values,
                  type: 'module',
                  totalActivities: 5
                });
                _routing.routing.replaceState({}, undefined, `/modules/management/${store.model.id}`);
                return;
              } catch (e) {
                setError(e.message);
              } finally {
                setIsFetching(false);
              }
            };
            return _react.default.createElement(_stepContainer.StepContainer, null, _react.default.createElement("div", {
              className: "second-flex-container"
            }, _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.audience,
              onChange: events.onChange,
              selected: firstSelected,
              name: "audience"
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.suggestions.step2.forWhom)), _react.default.createElement("div", {
              className: "second-flex-container mt-20 mb-20"
            }, _react.default.createElement(_radioButton.RadioButton, {
              label: texts.form.duration,
              name: "duration",
              selected: selected,
              onChange: events.onChangeDuration
            }), _react.default.createElement("div", {
              className: "help-info"
            }, _react.default.createElement(_icons.Icon, {
              icon: "info"
            }), texts.suggestions.step2.howLong)), _react.default.createElement(_footer.StepsFooter, {
              onSubmit: onSubmit
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImltcHJvdmVtZW50cyIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJwcm9wb3NhbCIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiaXNSZWFkeSIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJkZWxldGVBY3Rpdml0eSIsImFjdGl2aXRpZXMiLCJyZW1vdmUiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJ0cmlnZ2VyRXZlbnQiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsInB1Ymxpc2giLCJyZXNwb25zZSIsImxvZyIsIl9yZWFjdCIsIl9saXN0IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9pdGVtIiwiX2Zvcm0iLCJNb2R1bGVBY3Rpdml0aWVzIiwidGV4dHMiLCJvblN1Ym1pdCIsInVzZU1vZHVsZUNvbnRleHQiLCJhdHRycyIsImRpc2FibGVkIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJGb3JtIiwiTGlzdCIsImNsYXNzTmFtZSIsIml0ZW1zIiwiY29udHJvbCIsIk1vZHVsZUFjdGl2aXR5IiwiQnV0dG9uIiwib25DbGljayIsInZhcmlhbnQiLCJhY3Rpb25zIiwiX3NwZWNzIiwiX2ljb25zIiwiX2ljb25zMiIsIl9jb2xsYXBzaWJsZSIsImluZGV4IiwicmVmIiwidXNlUmVmIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsImljb24iLCJJQ09OUyIsInRpdGxlIiwibWludXRlcyIsIkljb25CdXR0b24iLCJkZWxldGUiLCJDb2xsYXBzaWJsZUNvbnRlbnQiLCJkZXNjcmlwdGlvbiIsIkFjdGl2aXR5U3BlY3MiLCJJdGVtIiwiUXVlc3Rpb25JdGVtIiwidGV4dCIsImNvcnJlY3RBbnN3ZXIiLCJxdWVzdGlvblRleHQiLCJGcmFnbWVudCIsIlNwZWNzTGlzdCIsInR5cGVzIiwic3Bva2VuIiwiaXRlbXNUeXBlIiwiSXRlbUNvbnRyb2wiLCJpdGVtc0xpc3QiLCJoYXNPd25Qcm9wZXJ0eSIsImtleUNvbmNlcHRzIiwiX2NoaXBzIiwiX3NwZWNzSXRlbXMiLCJraW5kIiwiQ2hpcCIsIl9tb2RhbCIsIl91aSIsIl9lcnJvciIsIlJlZmluZUFjdGl2aXRpZXNNb2RhbCIsImNvbmZpcm0iLCJvbkNsb3NlIiwicmVmaW5lIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsImFpU3RhcnMiLCJDb25maXJtTW9kYWwiLCJvbkNvbmZpcm0iLCJvbkNhbmNlbCIsImNhbmNlbCIsImJvcmRlcmVkIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJfdG9hc3QiLCJfcm91dGluZyIsIkhlYWRlciIsInRvYXN0Iiwic3VjY2VzcyIsInJvdXRpbmciLCJwdXNoU3RhdGUiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIlBhZ2VUaXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJsZW5ndGgiLCJvdXRwdXQiLCJtYXAiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJSZWFjdCIsIl9hY3Rpdml0eSIsIl9ob29rcyIsIl9iZXlvbmRfY29udGV4dCIsIl9oZWFkZXIiLCJfaG9va3MyIiwiX2NvbnRhaW5lciIsIl9tb2R1bGUyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwic3BlY2lmaWVyIiwiYWN0aXZlUGFuZWwiLCJzZXRBY3RpdmVQYW5lbCIsInNldEFjdGl2aXRpZXMiLCJlZGl0aW5nQWN0aXZpdHkiLCJzZXRFZGl0aW5nQWN0aXZpdHkiLCJvbkFjdGl2aXRpZXNHZW5lcmF0ZWQiLCJ1c2VCaW5kZXIiLCJwcmV2ZW50RGVmYXVsdCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiY2xzIiwiQ29udHJvbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIk1vZHVsZU1hbmFnZW1lbnQiLCJTdGVwc0NvbnRhaW5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImFjdGl2aXR5IiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiUmVmaW5lbWVudE1vZGFsIiwidXBsb2FkIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiX2FjdGl2aXRpZXMiLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiX2NvdmVySW1hZ2UiLCJzZXRTaG93Iiwib25TaG93IiwiX2ZyYW1lck1vdGlvbiIsIl9zdGVwIiwiX3N0ZXAyIiwiX3N0ZXAzIiwiX2NvbnRleHQyIiwic2V0Q3VycmVudCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiTW9kdWxlU3RlcHNGb3JtQ29udGV4dCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZU1vZHVsZVN0ZXBzRm9ybUNvbnRleHQiLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwicHJldmlvdXMiLCJiYWNrIiwic2l6aW5nIiwibmV4dCIsIlN0ZXBDb250YWluZXIiLCJjaGlsZHJlbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3N0ZXBDb250YWluZXIiLCJfc3VnZ2VzdGlvbnMiLCJfZm9vdGVyIiwic3VnZ2VzdGlvbnMiLCJpbXByb3ZlbWVudCIsInNldEltcHJvdmVtZW50IiwiYW5hbGl6ZSIsInN0ZXAwIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiYW5hbHlzZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJkYXRhc2V0IiwicGFyc2VJbnQiLCJjbHNPcmlnaW5hbCIsIl9yYWRpb0J1dHRvbiIsImF1ZGllbmNlSW5kZXgiLCJvbkNoYW5nZUR1cmF0aW9uIiwiYWN0aXZpdGllc051bWJlciIsImZpcnN0U2VsZWN0ZWQiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsImZvcm0iLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3RlcHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Zvb3Rlci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMC9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDEudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FB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