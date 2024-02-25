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
        hash: 236860734,
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
            async generateModuleSuggestion(specs) {
              try {
                this.#currentProcess = 'generatingDraft';
                this.fetchingDraft = true;
                return await this.model.getModuleSuggestion(specs);
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
        hash: 367055012,
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
            const onChange = event => {
              setValues(values => ({
                ...values,
                moduleLength: event.value,
                totalActivities: event.totalActivities
              }));
            };
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.moduleLength);
            if (values?.moduleLength?.index) selected = parseInt(values.moduleLength.index);
            const options = [{
              value: 15,
              label: texts.moduleLength.brief,
              totalActivities: 3
            }, {
              value: 45,
              label: texts.moduleLength.standard,
              totalActivities: 5
            }, {
              value: 60,
              label: texts.moduleLength.extended,
              totalActivities: 7
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
        hash: 2592069946,
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
                await store.generateModuleSuggestion({
                  ...values
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiX3JlYWN0IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsInZhcmlhbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJhY3Rpb25zIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYmFjayIsInNpemluZyIsIl91aSIsIkhlYWRlciIsInNob3dIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsIkJhdHRlcnkiLCJQYWdlVGl0bGUiLCJ0aXRsZSIsIlBhZ2VTdWJ0aXRsZSIsInBvc3RUaXRsZSIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsIm1vZHVsZUxlbmd0aCIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2hpbGRyZW4iLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJzZXRWYWx1ZXMiLCJldmVudCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiZ3JhZGVzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIk1vZHVsZUxlbmd0aEZpZWxkIiwidG90YWxBY3Rpdml0aWVzIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsImZpbmQiLCJmb3JtIiwiX2Zvcm0iLCJfaWNvbnMiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsInNlbGVjdCIsImF0dHJzIiwibGVuZ3RoIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiRHJhZnRGb3JtIiwic2V0U2hvdyIsInVzZVN0YXRlIiwic2V0U3VibWl0dGVkIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInN0YXRlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiQW5pbWF0ZVByZXNlbmNlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwidGV4dEFjdGlvbnMiLCJzZXRTZWxlY3RlZCIsImFuYWxpemUiLCJkZWxldGVTdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInB1c2giLCJGcmFnbWVudCIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJ0ZXh0IiwiYW5hbHlzZSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwic2l6ZSIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfd2l6YXJkIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJXaXphcmQiLCJfbW9kYWwiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJtb2R1bGVTdWdnZXN0aW9uIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwiaW5zcGlyYXRpb24iLCJtYW51YWwiLCJfaGVhZGVyIiwiYWN0aXZlUGFuZWwiLCJzZXRFcnJvciIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaXRlbS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3dpemFyZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0Ms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