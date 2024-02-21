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
        hash: 1012775208,
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