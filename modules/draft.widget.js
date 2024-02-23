System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "framer-motion@10.17.8", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Header, View, Wizard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0,
    Wizard: void 0
  });
  return {
    setters: [function (_beyondJsWidgets015Render) {
      dependency_0 = _beyondJsWidgets015Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets104Page) {
      dependency_3 = _beyondJsReact18Widgets104Page;
    }, function (_aimpactAilearnSdk100Core) {
      dependency_4 = _aimpactAilearnSdk100Core;
    }, function (_beyondJsReactive1111Model) {
      dependency_5 = _beyondJsReactive1111Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi006Alert) {
      dependency_8 = _pragmateUi006Alert;
    }, function (_pragmateUi006Components) {
      dependency_9 = _pragmateUi006Components;
    }, function (_aimpactAilearnApp0024ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0024ComponentsUi;
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_12 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006Form) {
      dependency_13 = _pragmateUi006Form;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006List) {
      dependency_16 = _pragmateUi006List;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_17 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_19 = _pragmateUi006Modal;
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
          "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/icons', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/list', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/modal', dependency_19]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.24/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.24/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2935827165,
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
              this.#store.load(this.uri.qs.get('id'));
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
        hash: 1807242015,
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
            /**
             Used to know if the module was already saved as a draft
             */
            #saved = false;
            get saved() {
              return this.#saved;
            }
            get model() {
              return this.#model;
            }
            #improvements = [];
            get improvements() {
              return this.#improvements;
            }
            #improvementsSelected = new Set();
            get improvementsSelected() {
              return this.#improvementsSelected;
            }
            get user() {
              return _session.sessionWrapper.user;
            }
            #currentProcess;
            get currentProcess() {
              return this.#currentProcess;
            }
            get ownerships() {
              return [..._session.sessionWrapper.user.organizations.map(item => {
                return {
                  value: item.id,
                  label: item.name
                };
              })];
            }
            get moduleOwner() {
              if (this.model.owner) {
                return {
                  value: this.model.owner.id,
                  label: this.model.owner.name
                };
              }
            }
            #selected;
            get defaultValues() {
              return {
                audience: '',
                duration: 45,
                proposal: '',
                content: '',
                objective: '',
                observations: '',
                improvements: new Set()
              };
            }
            get values() {
              return this.#saved ? this.model.getProperties() : this.defaultValues;
            }
            #objectivesGenerated = new Map();
            constructor() {
              super();
              this.reactiveProps(['fetchingDraft']);
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
            }
            async load(id) {
              try {
                if (id && this.#model?.id === id) {
                  return;
                }
                const specs = {
                  type: 'draft',
                  id
                };
                this.#model = new _core.LearningModule(specs);
                this.#model.on('change', this.triggerEvent);
                globalThis.model = this.#model;
                await this.#model.isReady;
                if (id) {
                  await this.#model.load();
                  this.#saved = true;
                }
                this.ready = true;
                this.triggerEvent();
              } catch (e) {
                console.error(e);
              }
            }
            async save(specs) {
              this.fetching = true;
              await this.model.saveDraft(specs);
              this.fetching = false;
              this.triggerEvent();
              this.#saved = true;
              return this.#model;
            }
            async clean() {
              this.#model.activities.clean();
              this.trigger('change');
            }
            async getObjectiveImprovements({
              objective
            }) {
              try {
                this.#currentProcess = 'objective';
                this.fetching = false;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetching = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.#currentProcess = 'changingObjective';
                this.fetching = true;
                if (this.#objectivesGenerated.has(improvements)) return this.#objectivesGenerated.get(improvements);
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#objectivesGenerated.set(objective, data.objective);
                this.model.save;
                this.#model.objective = data.objective;
                this.#improvements = [];
                this.#improvementsSelected = new Set();
                this.triggerEvent('change');
                return this.#model.objective;
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetching = false;
              }
            }
            async generateDraft(specs) {
              try {
                this.#currentProcess = 'generatingDraft';
                this.fetchingDraft = true;
                return await this.model.draft(specs);
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingDraft = false;
              }
            }
          }
          exports.StoreManager = StoreManager;
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
      INTERNAL MODULE: ./views/components/footer
      *****************************************/

      ims.set('./views/components/footer', {
        hash: 836744112,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StepsFooter = StepsFooter;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          function StepsFooter({
            submitLabel = 'next',
            onSubmit,
            disabled = false,
            previous = true
          }) {
            const {
              texts,
              setCurrent,
              current
            } = (0, _context.useModuleContext)();
            const submitText = texts.actions[submitLabel];
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
              sizing: "lg"
            }, submitText));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/components/header
      *****************************************/

      ims.set('./views/components/header', {
        hash: 1309322947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
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
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
            }, store.saved && _react.default.createElement(_ui.Battery, null)), showHeader && _react.default.createElement(_ui.PageTitle, {
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
        hash: 54679154,
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
              store
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.fetching || store.model.fetching
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
        hash: 2152028923,
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

      /*****************************************
      INTERNAL MODULE: ./views/form/animated-div
      *****************************************/

      ims.set('./views/form/animated-div', {
        hash: 2099872162,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedDiv = AnimatedDiv;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedDiv({
            children,
            cls
          } = {
            children: null,
            cls: ''
          }) {
            return _react.default.createElement(_framerMotion.motion.div, {
              className: "wizard__container",
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
      INTERNAL MODULE: ./views/form/fields/grade
      *****************************************/

      ims.set('./views/form/fields/grade', {
        hash: 335884799,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GradeField = GradeField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function GradeField() {
            const {
              texts,
              store,
              texts: {
                wizard: wTexts
              }
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            let selected = {
              value: '',
              label: 'Select'
            };
            const onChange = event => setValues(values => {
              return {
                ...values,
                audience: event.value
              };
            });
            const options = Object.keys(texts.grades).map(year => {
              selected = year === values.audience ? {
                value: year,
                label: texts.grades[year]
              } : selected;
              return {
                value: year,
                label: texts.grades[year]
              };
            });
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.grades.label), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: selected,
              name: "audience",
              options: options,
              onChange: onChange,
              ...disabled
            }));
          }
        }
      });

      /*************************************************
      INTERNAL MODULE: ./views/form/fields/module-length
      *************************************************/

      ims.set('./views/form/fields/module-length', {
        hash: 3700281724,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModuleLengthField = ModuleLengthField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function ModuleLengthField() {
            const {
              store,
              texts,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            const disabled = {
              isDisabled: store.saved
            };
            const onChange = event => setValues(values => ({
              ...values,
              moduleLength: event.value
            }));
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.moduleLength);
            if (values?.moduleLength?.index) selected = parseInt(values.moduleLength.index);
            const options = [{
              value: 15,
              label: texts.moduleLength.brief
            }, {
              value: 45,
              label: texts.moduleLength.standard
            }, {
              value: 60,
              label: texts.moduleLength.extended
            }];
            let current = {};
            if (values.duration) {
              current = options.find(item => item.value === values.duration);
            }
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.form.duration), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: current,
              onChange: onChange,
              name: "duration",
              ...disabled,
              options: options
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/objective
      *********************************************/

      ims.set('./views/form/fields/objective', {
        hash: 1968919572,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveField = ObjectiveField;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _context = require("../../context");
          var _framerMotion = require("framer-motion");
          var _icons = require("pragmate-ui/icons");
          function ObjectiveField({
            submitted
          }) {
            const {
              values,
              texts: {
                wizard: {
                  messages,
                  objective: texts
                }
              },
              onChange,
              store
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("div", {
              className: "objective-field"
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: texts.textArea,
              counter: true,
              maxLength: 500
            }), submitted && _react.default.createElement(_framerMotion.motion.div, {
              className: "success-text",
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              }
            }, messages.save, " ", _react.default.createElement(_icons.Icon, {
              icon: "check"
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 579502365,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function OwnershipField() {
            const {
              texts: {
                wizard: wTexts
              },
              store: {
                ownerships
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            let defaultOption = {
              value: '',
              label: wTexts.schools.select
            };
            const attrs = {
              isDisabled: store.ownerships.length === 0 || store.saved
            };
            const onChange = event => {
              const owner = store.user.organizations.find(item => item.id === event.value);
              setValues(values => {
                return {
                  ...values,
                  owner
                };
              });
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.schools.label), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: store.moduleOwner,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            }));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 680496405,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var _react = require("react");
          var _animatedDiv = require("./animated-div");
          var _context = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _grade = require("./fields/grade");
          var _moduleLength = require("./fields/module-length");
          var _ownership = require("./fields/ownership");
          var _objective = require("./fields/objective");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _framerMotion = require("framer-motion");
          var _error = require("../components/error");
          var _modalActivities = require("../modal-activities");
          function DraftForm() {
            const {
              values,
              error,
              setValues,
              store,
              texts,
              saved,
              fetching
            } = (0, _context.useModuleContext)();
            const [show, setShow] = _react.default.useState(false);
            const [submitted, setSubmitted] = _react.default.useState(false);
            const onSave = async () => {
              const finalValue = {
                ...values,
                state: 'confirmed'
              };
              setValues({
                ...finalValue
              });
              await store.save({
                ...finalValue
              });
            };
            const onSubmit = async () => {
              try {
                if (saved && store.model.state === 'created') {
                  setShow(true);
                  return;
                }
                await store.save({
                  ...values,
                  state: 'created'
                });
                _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
                setSubmitted(true);
              } catch (e) {
                console.error(e);
              }
            };
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective;
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const processMessages = texts.hasOwnProperty(store.currentProcess) ? texts[store.currentProcess] : texts.objectiveSuggestions;
            return _react.default.createElement("form", {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement(_animatedDiv.AnimatedDiv, null, _react.default.createElement("section", {
              className: "form-body"
            }, _react.default.createElement("header", {
              className: "wizard-form-header"
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.ModuleLengthField, null))), _react.default.createElement("div", {
              className: "form-wizard__objective-section"
            }, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }), _react.default.createElement(_suggestions.ObjectiveSuggestions, null))), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              disabled: isDisabled,
              variant: "primary",
              onClick: onSubmit
            }, label))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })), show && _react.default.createElement(_modalActivities.ModalActivitiesGeneration, {
              onClose: () => setShow(false),
              onSave: onSave
            }));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 2358508120,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("../../context");
          var _item = require("./item");
          function ObjectiveSuggestions({}) {
            const {
              texts: {
                wizard: {
                  suggestions: texts
                },
                actions: textActions
              },
              store,
              values,
              saved,
              setValues
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(new Set());
            const analize = async () => {
              await store.getObjectiveImprovements({
                objective: values.objective
              });
            };
            const deleteSuggestions = () => {
              setValues(values => ({
                ...values,
                improvements: new Set()
              }));
            };
            const apply = async event => {
              const specs = {
                objective: values.objective,
                improvements: Array.from(selected).map(i => store.improvements[i])
              };
              await store.generateObjective(specs);
              setSelected(new Set());
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const output = [];
            if (store.improvements.length) {
              output.push(_react.default.createElement(_react.default.Fragment, {
                key: "improvements"
              }, _react.default.createElement(_list.List, {
                className: "objectives__list",
                specs: {
                  selected,
                  setSelected
                },
                control: _item.ObjectiveSuggestionsItem,
                items: store.improvements
              })));
            }
            const onClick = store.improvements.length ? deleteSuggestions : analize;
            const text = !store.improvements.length ? textActions.analyse : textActions.removeSuggestions;
            return _react.default.createElement(_react.default.Fragment, null, output, _react.default.createElement("div", {
              className: "flex-container flex-end flex-05"
            }, _react.default.createElement(_components.Button, {
              disabled: !saved,
              onClick: onClick,
              variant: "primary",
              bordered: true
            }, text), store.improvementsSelected.size > 0 && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: apply
            }, textActions.applySuggestions))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/suggestions/item
      *********************************************/

      ims.set('./views/form/suggestions/item', {
        hash: 1575835154,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../context");
          function ObjectiveSuggestionsItem({
            index,
            data,
            specs: {
              selected,
              setSelected
            }
          }) {
            const {
              values,
              setValues,
              store
            } = (0, _context.useModuleContext)();
            const onSelect = event => {
              event.stopPropagation();
              const index = parseInt(event.currentTarget.dataset.index);
              const elements = selected;
              elements.has(index) ? elements.delete(index) : elements.add(index);
              store.improvementsSelected.add(index);
              setSelected(new Set(elements));
            };
            const cls = `objectives__item${selected.has(index) ? ' selected' : ''}`;
            return _react.default.createElement("div", {
              className: cls,
              "data-index": index,
              onClick: onSelect
            }, _react.default.createElement("div", {
              className: "item__content"
            }, data));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 3992595793,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _wizard = require("./wizard");
          /*bundle*/
          function View(props) {
            const {
              store,
              uri
            } = props;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            if (store.model.state === 'confirmed') {
              return React.createElement(React.Fragment, null, React.createElement("app-modules-management", {
                id: store.model.id
              }));
            }
            return React.createElement(_wizard.Wizard, {
              store: store
            });
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/modal-activities
      ****************************************/

      ims.set('./views/modal-activities', {
        hash: 827571739,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitiesGeneration = ModalActivitiesGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          function ModalActivitiesGeneration({
            onClose,
            onSave
          }) {
            const {
              texts,
              store,
              values
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateDraft({
                  ...values,
                  type: 'module'
                });
                onSave();
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.moduleSuggestion.title), _react.default.createElement("div", {
              className: "mt-30"
            }, _react.default.createElement("span", null, texts.moduleSuggestion.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onGenerate
            }, texts.moduleSuggestion.buttons.inspiration), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave
            }, texts.moduleSuggestion.buttons.manual))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
            })));
          }
        }
      });

      /******************************
      INTERNAL MODULE: ./views/wizard
      ******************************/

      ims.set('./views/wizard', {
        hash: 2373649125,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Wizard = Wizard;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _header = require("./components/header");
          var _form = require("./form");
          /*bundle*/
          function Wizard({
            store
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel] = React.useState(0);
            const [, setUpdated] = React.useState({});
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState(store.values);
            const [error, setError] = React.useState();
            const [isFetching, setIsFetching] = React.useState(false);
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value
              });
            };
            const value = {
              store,
              onChange,
              texts,
              activePanel,
              current,
              setCurrent,
              error,
              setError,
              fetching: fetching || isFetching,
              setIsFetching,
              saved: store.saved,
              values,
              setValues
            };
            const cls = ` ${fetching ? 'is-fetching' : ''}`;
            let showHeader = false;
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, {
              texts: texts,
              showHeader: showHeader
            }), React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement(_form.DraftForm, null))));
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
      }, {
        "im": "./views/wizard",
        "from": "Wizard",
        "name": "Wizard"
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
        (require || prop === 'Wizard') && _export("Wizard", Wizard = require ? require('./views/wizard').Wizard : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlRHJhZnQiLCJmZXRjaGluZ0RyYWZ0IiwiZHJhZnQiLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiSGVhZGVyIiwic2hvd0hlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiQmF0dGVyeSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwibW9kdWxlTGVuZ3RoIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImV2ZW50Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJncmFkZXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTW9kdWxlTGVuZ3RoRmllbGQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZmluZCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0IiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInNldFNlbGVjdGVkIiwiYW5hbGl6ZSIsImRlbGV0ZVN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwicHVzaCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRleHQiLCJhbmFseXNlIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJzaXplIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZHVsZVN1Z2dlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpbnNwaXJhdGlvbiIsIm1hbnVhbCIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QztZ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