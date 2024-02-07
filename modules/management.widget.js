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
        hash: 2209246945,
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
        hash: 2269356818,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleActivities = ModuleActivities;
          var _react = require("react");
          var _list = require("pragmate-ui/list");
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
            }));
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
        hash: 2155803135,
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
            }, texts.actions.publish)), _react.default.createElement(_ui.PageTitle, {
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
        hash: 3611900498,
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
            (0, _hooks2.useBinder)([store.model], () => setFetching(store?.model?.fetching));
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
        hash: 2148291319,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJ2YXJzIiwiZ2V0IiwiaGlkZSIsImV4cG9ydHMiLCJfY29yZSIsIl9tb2RlbCIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsImltcHJvdmVtZW50cyIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJ0YXJnZXQiLCJwcm9wb3NhbCIsImNvbnRlbnQiLCJvYmplY3RpdmUiLCJvYnNlcnZhdGlvbnMiLCJ0b3RhbEFjdGl2aXRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiZWRpdEFjdGl2aXR5IiwidmFsdWUiLCJ0cmlnZ2VyIiwidW5kZWZpbmVkIiwicmVhZHkiLCJpZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGVsZXRlQWN0aXZpdHkiLCJhY3Rpdml0aWVzIiwicmVtb3ZlIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwidHJpZ2dlckV2ZW50IiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJwdWJsaXNoIiwicmVzcG9uc2UiLCJfcmVhY3QiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2l0ZW0iLCJfZm9ybSIsIk1vZHVsZUFjdGl2aXRpZXMiLCJ0ZXh0cyIsIm9uU3VibWl0IiwidXNlTW9kdWxlQ29udGV4dCIsImF0dHJzIiwiZGlzYWJsZWQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkZvcm0iLCJMaXN0IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJjb250cm9sIiwiTW9kdWxlQWN0aXZpdHkiLCJfc3BlY3MiLCJfaWNvbnMiLCJfaWNvbnMyIiwiX2NvbGxhcHNpYmxlIiwiaW5kZXgiLCJhY3Rpb25zIiwicmVmIiwidXNlUmVmIiwiZWRpdCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGVsZXRlSXRlbSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJDb2xsYXBzaWJsZUNvbnRhaW5lciIsIkNvbGxhcHNpYmxlSGVhZGVyIiwiSWNvbiIsImljb24iLCJJQ09OUyIsInRpdGxlIiwibWludXRlcyIsIkljb25CdXR0b24iLCJvbkNsaWNrIiwiZGVsZXRlIiwiQ29sbGFwc2libGVDb250ZW50IiwiZGVzY3JpcHRpb24iLCJBY3Rpdml0eVNwZWNzIiwiSXRlbSIsIlF1ZXN0aW9uSXRlbSIsInRleHQiLCJjb3JyZWN0QW5zd2VyIiwicXVlc3Rpb25UZXh0IiwiRnJhZ21lbnQiLCJTcGVjc0xpc3QiLCJ0eXBlcyIsInNwb2tlbiIsIml0ZW1zVHlwZSIsIkl0ZW1Db250cm9sIiwiaXRlbXNMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJrZXlDb25jZXB0cyIsIl9jaGlwcyIsIl9zcGVjc0l0ZW1zIiwia2luZCIsIkNoaXAiLCJfbW9kYWwiLCJfY29tcG9uZW50cyIsIl91aSIsIl9lcnJvciIsIlJlZmluZUFjdGl2aXRpZXNNb2RhbCIsImNvbmZpcm0iLCJvbkNsb3NlIiwicmVmaW5lIiwibW9kdWxlIiwidGV4dGFyZWEiLCJ0ZXh0QXJlYVRleHRzIiwidGV4dEFjdGlvbnMiLCJwcm9jZXNzTWVzc2FnZXMiLCJzZXRGZXRjaGluZyIsInVzZVN0YXRlIiwic2V0RXJyb3IiLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJnZW5lcmF0aW9uIiwib3BlbkNvbmZpcm0iLCJzZXRPcGVuQ29uZmlybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiY3VycmVudFRhcmdldCIsIm5hbWUiLCJyZWZpbmVBY3Rpdml0aWVzIiwibWVzc2FnZSIsIm9uQ2xpY2tBY3Rpb24iLCJNb2RhbCIsInN1YnRpdGxlIiwiRXJyb3JSZW5kZXJlciIsIlRleHRhcmVhIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsIkJ1dHRvbiIsInZhcmlhbnQiLCJhaVN0YXJzIiwiQ29uZmlybU1vZGFsIiwib25Db25maXJtIiwib25DYW5jZWwiLCJjYW5jZWwiLCJib3JkZXJlZCIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiX3RvYXN0IiwiX3JvdXRpbmciLCJIZWFkZXIiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJyb3V0aW5nIiwicHVzaFN0YXRlIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJQYWdlVGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwibGVuZ3RoIiwib3V0cHV0IiwibWFwIiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiUmVhY3QiLCJfYWN0aXZpdHkiLCJfaG9va3MiLCJfYmV5b25kX2NvbnRleHQiLCJfaGVhZGVyIiwiX2hvb2tzMiIsIl9jb250YWluZXIiLCJfbW9kdWxlMiIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsInNwZWNpZmllciIsImFjdGl2ZVBhbmVsIiwic2V0QWN0aXZlUGFuZWwiLCJzZXRBY3Rpdml0aWVzIiwiZWRpdGluZ0FjdGl2aXR5Iiwic2V0RWRpdGluZ0FjdGl2aXR5Iiwib25BY3Rpdml0aWVzR2VuZXJhdGVkIiwidXNlQmluZGVyIiwicHJldmVudERlZmF1bHQiLCJzZXRUaW1lb3V0IiwiY2xzIiwiQ29udHJvbCIsIk1vZHVsZUFjdGl2aXR5Rm9ybSIsIk1vZHVsZU1hbmFnZW1lbnQiLCJTdGVwc0NvbnRhaW5lciIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImFjdGl2aXR5IiwiX3JlZmluZW1lbnRNb2RhbCIsIkNvdmVySW1hZ2VBY3Rpb25zIiwiZ2VuZXJhdGVkIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInNob3dNb2RhbCIsInNldFNob3dSZWZpbmluZ01vZGFsIiwiY292ZXIiLCJnZW5lcmF0ZUltYWdlIiwiZ2VuZXJhdGVQaWN0dXJlIiwiUmVmaW5lbWVudE1vZGFsIiwidXBsb2FkIiwiX2ltYWdlIiwiX2FjdGlvbnMiLCJDb3ZlckltYWdlIiwicGljdHVyZSIsIkltYWdlIiwic3JjIiwiX2FjdGl2aXRpZXMiLCJfcmVmaW5lQWN0aXZpdGllc01vZGFsIiwiX2NvdmVySW1hZ2UiLCJzZXRTaG93Iiwib25TaG93IiwiX2ZyYW1lck1vdGlvbiIsIl9zdGVwIiwiX3N0ZXAyIiwiX3N0ZXAzIiwiX2NvbnRleHQyIiwic2V0Q3VycmVudCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiQ29udHJvbHMiLCJTdGVwMCIsIlN0ZXAxIiwiU3RlcDIiLCJzdGVwVmFsdWVzIiwic3RlcFJlYWR5IiwidmFsaWQiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiTW9kdWxlU3RlcHNGb3JtQ29udGV4dCIsIkFuaW1hdGVQcmVzZW5jZSIsInVzZU1vZHVsZVN0ZXBzRm9ybUNvbnRleHQiLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwicHJldmlvdXMiLCJiYWNrIiwic2l6aW5nIiwibmV4dCIsIlN0ZXBDb250YWluZXIiLCJjaGlsZHJlbiIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3N0ZXBDb250YWluZXIiLCJfc3VnZ2VzdGlvbnMiLCJfZm9vdGVyIiwic3VnZ2VzdGlvbnMiLCJpbXByb3ZlbWVudCIsInNldEltcHJvdmVtZW50IiwiYW5hbGl6ZSIsInN0ZXAwIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiYW5hbHlzZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJkYXRhc2V0IiwicGFyc2VJbnQiLCJjbHNPcmlnaW5hbCIsIl9yYWRpb0J1dHRvbiIsImF1ZGllbmNlSW5kZXgiLCJvbkNoYW5nZUR1cmF0aW9uIiwiYWN0aXZpdGllc051bWJlciIsImZpcnN0U2VsZWN0ZWQiLCJkcmFmdCIsInJlcGxhY2VTdGF0ZSIsImZvcm0iLCJzdGVwMiIsImZvcldob20iLCJob3dMb25nIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9saXN0L2l0ZW0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvbGlzdC9pdGVtL3NwZWNzLWl0ZW1zLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2xpc3QvaXRlbS9zcGVjcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZWZpbmUtYWN0aXZpdGllcy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9hY3Rpb25zLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvY292ZXItaW1hZ2UvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZHVsZS9jb3Zlci1pbWFnZS9yZWZpbmVtZW50LW1vZGFsLnRzeCIsIi90cy92aWV3cy9tb2R1bGUvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3Mvc3RlcHMvY29udGV4dC50c3giLCIvdHMvdmlld3Mvc3RlcHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL2Zvb3Rlci50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcC1jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAwL2luZGV4LnRzeCIsIi90cy92aWV3cy9zdGVwcy9zdGVwMC9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3Mvc3RlcHMvc3RlcDEudHN4IiwiL3RzL3ZpZXdzL3N0ZXBzL3N0ZXAyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsSUFB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