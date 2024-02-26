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
        hash: 4092277816,
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
            listener() {
              // console.log('cambio');
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
        hash: 1856556125,
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
            console.log(44, store.model.state, saved);
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
        hash: 1575323573,
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
              store
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiSGVhZGVyIiwic2hvd0hlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiQmF0dGVyeSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwibW9kdWxlTGVuZ3RoIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImV2ZW50Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJncmFkZXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTW9kdWxlTGVuZ3RoRmllbGQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZmluZCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0IiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInNldFNlbGVjdGVkIiwiYW5hbGl6ZSIsImRlbGV0ZVN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwicHVzaCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRleHQiLCJhbmFseXNlIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJzaXplIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZHVsZVN1Z2dlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpbnNwaXJhdGlvbiIsIm1hbnVhbCIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4QztZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWMsS0FBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7VUFFTSxNQUFPTyxZQUFhLFNBQVFXLE1BQUEsQ0FBQUUsYUFBMkI7WUFDNUQsQ0FBQUMsS0FBTTtZQUNOOzs7WUFHQSxDQUFBQyxLQUFNLEdBQUcsS0FBSztZQUNkLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSUQsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBRSxZQUFhLEdBQWEsRUFBRTtZQUM1QixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLENBQUFDLG9CQUFxQixHQUFHLElBQUlDLEdBQUcsRUFBRTtZQUNqQyxJQUFJRCxvQkFBb0JBLENBQUE7Y0FDdkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsb0JBQXFCO1lBQ2xDO1lBRUEsSUFBSUUsSUFBSUEsQ0FBQTtjQUNQLE9BQU9QLFFBQUEsQ0FBQVEsY0FBYyxDQUFDRCxJQUFJO1lBQzNCO1lBRUEsQ0FBQUUsY0FBZTtZQUNmLElBQUlBLGNBQWNBLENBQUE7Y0FDakIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsY0FBZTtZQUM1QjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLENBQ04sR0FBR1YsUUFBQSxDQUFBUSxjQUFjLENBQUNELElBQUksQ0FBQ0ksYUFBYSxDQUFDQyxHQUFHLENBQUNDLElBQUksSUFBRztnQkFDL0MsT0FBTztrQkFBRUMsS0FBSyxFQUFFRCxJQUFJLENBQUNFLEVBQUU7a0JBQUVDLEtBQUssRUFBRUgsSUFBSSxDQUFDSTtnQkFBSSxDQUFFO2NBQzVDLENBQUMsQ0FBQyxDQUNGO1lBQ0Y7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsSUFBSSxJQUFJLENBQUNoQixLQUFLLENBQUNpQixLQUFLLEVBQUU7Z0JBQ3JCLE9BQU87a0JBQUVMLEtBQUssRUFBRSxJQUFJLENBQUNaLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ0osRUFBRTtrQkFBRUMsS0FBSyxFQUFFLElBQUksQ0FBQ2QsS0FBSyxDQUFDaUIsS0FBSyxDQUFDRjtnQkFBSSxDQUFFOztZQUVyRTtZQUVBLENBQUFHLFFBQVM7WUFDVCxJQUFJQyxhQUFhQSxDQUFBO2NBQ2hCLE9BQU87Z0JBQ05DLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLE9BQU8sRUFBRSxFQUFFO2dCQUNYQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCdkIsWUFBWSxFQUFFLElBQUlFLEdBQUc7ZUFDckI7WUFDRjtZQUVBLElBQUlzQixNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQXpCLEtBQU0sR0FBRyxJQUFJLENBQUNELEtBQUssQ0FBQzJCLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQ1IsYUFBYTtZQUNyRTtZQUVBLENBQUFTLG1CQUFvQixHQUFHLElBQUlDLEdBQUcsRUFBa0I7WUFFaERDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ3RDO1lBQ0FyQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFNLEtBQU0sR0FBR2dDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBLE1BQU0zQyxJQUFJQSxDQUFDdUIsRUFBRTtjQUNaLElBQUk7Z0JBQ0gsSUFBSUEsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBYixLQUFNLEVBQUVhLEVBQUUsS0FBS0EsRUFBRSxFQUFFO2tCQUNqQzs7Z0JBRUQsTUFBTXFCLEtBQUssR0FBRztrQkFBRUMsSUFBSSxFQUFFLE9BQU87a0JBQUV0QjtnQkFBRSxDQUFFO2dCQUVuQyxJQUFJLENBQUMsQ0FBQWIsS0FBTSxHQUFHLElBQUlKLEtBQUEsQ0FBQXdDLGNBQWMsQ0FBQ0YsS0FBSyxDQUFDO2dCQUN2QyxJQUFJLENBQUMsQ0FBQWxDLEtBQU0sQ0FBQ3FDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDQyxZQUFZLENBQUM7Z0JBRTNDQyxVQUFVLENBQUN2QyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUFBLEtBQU07Z0JBQzlCLE1BQU0sSUFBSSxDQUFDLENBQUFBLEtBQU0sQ0FBQ3dDLE9BQU87Z0JBRXpCLElBQUkzQixFQUFFLEVBQUU7a0JBQ1AsTUFBTSxJQUFJLENBQUMsQ0FBQWIsS0FBTSxDQUFDVixJQUFJLEVBQUU7a0JBQ3hCLElBQUksQ0FBQyxDQUFBVyxLQUFNLEdBQUcsSUFBSTs7Z0JBR25CLElBQUksQ0FBQ2dDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNLLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9HLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQUcsUUFBUUEsQ0FBQTtjQUNQO1lBQUE7WUFFRCxNQUFNQyxJQUFJQSxDQUFDWCxLQUFLO2NBQ2YsSUFBSSxDQUFDWSxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNLElBQUksQ0FBQzlDLEtBQUssQ0FBQytDLFNBQVMsQ0FBQ2IsS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ1ksUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDUixZQUFZLEVBQUU7Y0FDbkIsSUFBSSxDQUFDLENBQUFyQyxLQUFNLEdBQUcsSUFBSTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBRCxLQUFNO1lBQ25CO1lBRUEsTUFBTWdELEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQWhELEtBQU0sQ0FBQ2lELFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQzlCLElBQUksQ0FBQ0UsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBLE1BQU1DLHdCQUF3QkEsQ0FBQztjQUFFM0I7WUFBUyxDQUFFO2NBQzNDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFqQixjQUFlLEdBQUcsV0FBVztnQkFDbEMsSUFBSSxDQUFDdUMsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE1BQU1NLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ3BELEtBQUssQ0FBQ21ELHdCQUF3QixDQUFDO2tCQUFFM0I7Z0JBQVMsQ0FBRSxDQUFDO2dCQUNyRSxJQUFJLENBQUMsQ0FBQXRCLFlBQWEsR0FBR2tELElBQUk7Z0JBQ3pCLElBQUksQ0FBQ2QsWUFBWSxDQUFDLFFBQVEsQ0FBQztlQUMzQixDQUFDLE9BQU9HLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBbEMsY0FBZSxHQUFHeUIsU0FBUztnQkFDaEMsSUFBSSxDQUFDYyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNTyxpQkFBaUJBLENBQUM7Y0FBRTdCLFNBQVM7Y0FBRXRCO1lBQVksQ0FBRTtjQUNsRCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBSyxjQUFlLEdBQUcsbUJBQW1CO2dCQUMxQyxJQUFJLENBQUN1QyxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsSUFBSSxJQUFJLENBQUMsQ0FBQWxCLG1CQUFvQixDQUFDMEIsR0FBRyxDQUFDcEQsWUFBWSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQTBCLG1CQUFvQixDQUFDbkMsR0FBRyxDQUFDUyxZQUFZLENBQUM7Z0JBRW5HLE1BQU1rRCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUNwRCxLQUFLLENBQUNxRCxpQkFBaUIsQ0FBQztrQkFBRTdCLFNBQVM7a0JBQUV0QjtnQkFBWSxDQUFFLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxDQUFBMEIsbUJBQW9CLENBQUMyQixHQUFHLENBQUMvQixTQUFTLEVBQUU0QixJQUFJLENBQUM1QixTQUFTLENBQUM7Z0JBQ3hELElBQUksQ0FBQ3hCLEtBQUssQ0FBQzZDLElBQUk7Z0JBQ2YsSUFBSSxDQUFDLENBQUE3QyxLQUFNLENBQUN3QixTQUFTLEdBQUc0QixJQUFJLENBQUM1QixTQUFTO2dCQUV0QyxJQUFJLENBQUMsQ0FBQXRCLFlBQWEsR0FBRyxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO2dCQUN0QyxJQUFJLENBQUNrQyxZQUFZLENBQUMsUUFBUSxDQUFDO2dCQUMzQixPQUFPLElBQUksQ0FBQyxDQUFBdEMsS0FBTSxDQUFDd0IsU0FBUztlQUM1QixDQUFDLE9BQU9pQixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQWxDLGNBQWUsR0FBR3lCLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ2MsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVUsd0JBQXdCQSxDQUFDdEIsS0FBSztjQUNuQyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBM0IsY0FBZSxHQUFHLGlCQUFpQjtnQkFDeEMsSUFBSSxDQUFDa0QsYUFBYSxHQUFHLElBQUk7Z0JBQ3pCLE9BQU8sTUFBTSxJQUFJLENBQUN6RCxLQUFLLENBQUMwRCxtQkFBbUIsQ0FBQ3hCLEtBQUssQ0FBQztlQUNsRCxDQUFDLE9BQU9PLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBbEMsY0FBZSxHQUFHeUIsU0FBUztnQkFDaEMsSUFBSSxDQUFDeUIsYUFBYSxHQUFHLEtBQUs7O1lBRTVCOztVQUNBOUQsT0FBQSxDQUFBVCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUtELElBQUF5RSxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWlGLE1BQUEsR0FBQWpGLE9BQUE7VUFFTSxTQUFVa0YsYUFBYUEsQ0FBQztZQUFFQyxLQUFLO1lBQUVuQjtVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBT2dCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNKLE1BQUEsQ0FBQUssS0FBSztjQUFDQyxPQUFPLEVBQUM7WUFBTyxHQUFFSixLQUFLLENBQUNuQixLQUFLLENBQUMsQ0FBUztVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBZ0IsTUFBQSxHQUFBaEYsT0FBQTtVQUVBLElBQUF3RixXQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFRTSxTQUFVMEYsV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsTUFBTTtZQUFFQyxRQUFRO1lBQUVDLFFBQVEsR0FBRyxLQUFLO1lBQUVDLFFBQVEsR0FBRztVQUFJLENBQWdCO1lBQzlHLE1BQU07Y0FBRVgsS0FBSztjQUFFWSxVQUFVO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFFekQsTUFBTUMsVUFBVSxHQUFHZixLQUFLLENBQUNnQixPQUFPLENBQUNSLFdBQVcsQ0FBQztZQUU3QyxPQUNDWCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxpQkFDRVMsUUFBUSxJQUNSZCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FBQ0MsU0FBUyxFQUFDLGNBQWM7Y0FBQ2QsT0FBTyxFQUFDLFNBQVM7Y0FBQ2UsUUFBUTtjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTVIsVUFBVSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUFDLEdBQ2hHYixLQUFLLENBQUNnQixPQUFPLENBQUNLLElBQUksQ0FFcEIsRUFDRHhCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUNOQyxTQUFTLEVBQUMsY0FBYztjQUN4QjdDLElBQUksRUFBQyxRQUFRO2NBQ2IrQixPQUFPLEVBQUMsU0FBUztjQUNqQmdCLE9BQU8sRUFBRVgsUUFBUTtjQUNqQkMsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCWSxNQUFNLEVBQUM7WUFBSSxHQUVWUCxVQUFVLENBQ0gsQ0FDRDtVQUVYOzs7Ozs7Ozs7Ozs7Ozs7OztVQ25DQSxJQUFBUSxHQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQWdGLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUVPO1VBQVUsU0FBVTJHLE1BQU1BLENBQUM7WUFBRXhCLEtBQUs7WUFBRXlCLFVBQVUsR0FBRztVQUFLLENBQUU7WUFDOUQsTUFBTTtjQUFFdkc7WUFBSyxDQUFFLEdBQUcsSUFBQW9GLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTUosUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXhGLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ21DLElBQUksS0FBSztZQUFPLENBQUU7WUFFM0QsT0FDQ3dCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGtCQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBRyxVQUFVO2NBQ1ZDLFVBQVUsRUFBRSxDQUNYLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxFQUNqQixDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsRUFDNUIsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO1lBQ2xCLEdBRUF6RyxLQUFLLENBQUNpQixLQUFLLElBQUkwRCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBSyxPQUFPLE9BQUcsQ0FDZixFQUNaSCxVQUFVLElBQ1Y1QixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBTSxTQUFTO2NBQUNDLEtBQUssRUFBRTlCLEtBQUssQ0FBQzhCO1lBQUssR0FDNUJqQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBUSxZQUFZLFFBQUUvQixLQUFLLENBQUNnQyxTQUFTLENBQWdCLENBRS9DLENBQ1E7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQk0sU0FBVUMsVUFBVUEsQ0FBQ2pDLEtBQUs7WUFDL0IsT0FBTztjQUNOMUMsUUFBUSxFQUFFLENBQ1QsQ0FBQzBDLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQzRFLE1BQU0sRUFBRWxDLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQzRFLE1BQU0sQ0FBQyxFQUM5QyxDQUFDbEMsS0FBSyxDQUFDMUMsUUFBUSxDQUFDNkUsVUFBVSxFQUFFbkMsS0FBSyxDQUFDMUMsUUFBUSxDQUFDNkUsVUFBVSxDQUFDLEVBQ3RELENBQUNuQyxLQUFLLENBQUMxQyxRQUFRLENBQUM4RSxPQUFPLEVBQUVwQyxLQUFLLENBQUMxQyxRQUFRLENBQUM4RSxPQUFPLENBQUMsQ0FDaEQ7Y0FDRDdFLFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFeUMsS0FBSyxDQUFDcUMsWUFBWSxDQUFDQyxLQUFLLENBQUMsRUFDaEMsQ0FBQyxJQUFJLEVBQUV0QyxLQUFLLENBQUNxQyxZQUFZLENBQUNFLFFBQVEsQ0FBQyxFQUNuQyxDQUFDLElBQUksRUFBRXZDLEtBQUssQ0FBQ3FDLFlBQVksQ0FBQ0csUUFBUSxDQUFDLENBQ25DO2NBQ0RDLFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFekMsS0FBSyxDQUFDMEMsU0FBUyxDQUFDQyxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUUzQyxLQUFLLENBQUMwQyxTQUFTLENBQUNFLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRTVDLEtBQUssQ0FBQzBDLFNBQVMsQ0FBQ0csRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFN0MsS0FBSyxDQUFDMEMsU0FBUyxDQUFDSSxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUU5QyxLQUFLLENBQUMwQyxTQUFTLENBQUNLLEVBQUUsQ0FBQzthQUUzQjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBbEQsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUF3RixXQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBbUksUUFBQSxHQUFBbkksT0FBQTtVQUNNLFNBQVVvSSxXQUFXQSxDQUFDO1lBQUVoRyxJQUFJO1lBQUVpRyxRQUFRO1lBQUVsRyxLQUFLO1lBQUVJLFFBQVEsR0FBRztVQUFDLENBQUU7WUFDbEUsTUFBTTtjQUFFNEMsS0FBSztjQUFFOUU7WUFBSyxDQUFFLEdBQUcsSUFBQW9GLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUosUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXhGLEtBQUssQ0FBQzhELFFBQVEsSUFBSTlELEtBQUssQ0FBQ2dCLEtBQUssQ0FBQzhDO1lBQVEsQ0FBRTtZQUNyRSxNQUFNTSxJQUFJLEdBQUcsSUFBQTBELFFBQUEsQ0FBQWYsVUFBVSxFQUFDakMsS0FBSyxDQUFDO1lBRTlCLE1BQU1tRCxNQUFNLEdBQUc3RCxJQUFJLENBQUNyQyxJQUFJLENBQUMsQ0FBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxFQUFFRSxLQUFLLENBQUMsRUFBRW9HLEtBQUssS0FDbkR2RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FBQ2hFLElBQUksRUFBRUEsSUFBSTtjQUFBLEdBQU15RCxRQUFRO2NBQUEsY0FBYzBDLEtBQUs7Y0FBRWhDLE9BQU8sRUFBRThCLFFBQVE7Y0FBRUcsR0FBRyxFQUFFRCxLQUFLO2NBQUV0RyxLQUFLLEVBQUVBO1lBQUssR0FDOUZFLEtBQUssQ0FFUCxDQUFDO1lBRUYsT0FDQzZDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtnQixTQUFTLEVBQUM7WUFBeUIsR0FDdkNyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPb0QsT0FBTyxFQUFFckc7WUFBSSxHQUFHRCxLQUFLLENBQVMsRUFDckM2QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFrRCxXQUFXO2NBQUNuRyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNc0Q7WUFBUSxHQUMzQ3lDLE1BQU0sQ0FDTSxDQUNUO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUF0RCxNQUFBLEdBQUFoRixPQUFBO1VBbUJPLE1BQU0ySSxhQUFhLEdBQUEzSCxPQUFBLENBQUEySCxhQUFBLEdBQUczRCxNQUFBLENBQUFJLE9BQUssQ0FBQ3dELGFBQWEsQ0FBQyxFQUFtQixDQUFDO1VBQzlELE1BQU0zQyxnQkFBZ0IsR0FBR0EsQ0FBQSxLQUFNakIsTUFBQSxDQUFBSSxPQUFLLENBQUN5RCxVQUFVLENBQUNGLGFBQWEsQ0FBQztVQUFDM0gsT0FBQSxDQUFBaUYsZ0JBQUEsR0FBQUEsZ0JBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJ0RSxJQUFBakIsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUE4SSxhQUFBLEdBQUE5SSxPQUFBO1VBRU0sU0FBVStJLFdBQVdBLENBQUM7WUFBRUMsUUFBUTtZQUFFQztVQUFHLElBQXlCO1lBQUVELFFBQVEsRUFBRSxJQUFJO1lBQUVDLEdBQUcsRUFBRTtVQUFFLENBQUU7WUFDOUYsT0FDQ2pFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxhQUFBLENBQUFJLE1BQU0sQ0FBQ0MsR0FBRztjQUNWOUMsU0FBUyxFQUFDLG1CQUFtQjtjQUM3QitDLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYN0csUUFBUSxFQUFFLEdBQUc7a0JBQ2I4RyxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RDLENBQUMsRUFBRTtlQUNIO2NBQ0RDLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYN0csUUFBUSxFQUFFO2lCQUNWO2dCQUNEMkcsT0FBTyxFQUFFOztZQUNULEdBRUFMLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBaEUsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUEySixZQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFFTSxTQUFVNEosVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQ0x6RSxLQUFLO2NBQ0w5RSxLQUFLO2NBQ0w4RSxLQUFLLEVBQUU7Z0JBQUUwRSxNQUFNLEVBQUVDO2NBQU07WUFBRSxDQUN6QixHQUFHLElBQUFyRSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRThELFNBQVM7Y0FBRWhIO1lBQU0sQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUkxRCxRQUFRLEdBQUc7Y0FBRU4sS0FBSyxFQUFFLEVBQUU7Y0FBRUUsS0FBSyxFQUFFO1lBQVEsQ0FBRTtZQUM3QyxNQUFNa0csUUFBUSxHQUFHMkIsS0FBSyxJQUNyQkQsU0FBUyxDQUFDaEgsTUFBTSxJQUFHO2NBQ2xCLE9BQU87Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRU4sUUFBUSxFQUFFdUgsS0FBSyxDQUFDL0g7Y0FBSyxDQUFFO1lBQzVDLENBQUMsQ0FBQztZQUNILE1BQU1nSSxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDaEYsS0FBSyxDQUFDaUYsTUFBTSxDQUFDLENBQUNySSxHQUFHLENBQUNzSSxJQUFJLElBQUc7Y0FDcEQ5SCxRQUFRLEdBQUc4SCxJQUFJLEtBQUt0SCxNQUFNLENBQUNOLFFBQVEsR0FBRztnQkFBRVIsS0FBSyxFQUFFb0ksSUFBSTtnQkFBRWxJLEtBQUssRUFBRWdELEtBQUssQ0FBQ2lGLE1BQU0sQ0FBQ0MsSUFBSTtjQUFDLENBQUUsR0FBRzlILFFBQVE7Y0FDM0YsT0FBTztnQkFBRU4sS0FBSyxFQUFFb0ksSUFBSTtnQkFBRWxJLEtBQUssRUFBRWdELEtBQUssQ0FBQ2lGLE1BQU0sQ0FBQ0MsSUFBSTtjQUFDLENBQUU7WUFDbEQsQ0FBQyxDQUFDO1lBRUYsTUFBTXhFLFFBQVEsR0FBRztjQUFFeUUsVUFBVSxFQUFFakssS0FBSyxDQUFDaUI7WUFBSyxDQUFFO1lBRTVDLE9BQ0MwRCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPb0QsT0FBTyxFQUFDO1lBQUUsR0FBRXFCLE1BQU0sQ0FBQ00sTUFBTSxDQUFDakksS0FBSyxDQUFTLEVBQy9DNkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLFlBQUEsQ0FBQVksV0FBVztjQUFDQyxZQUFZLEVBQUVqSSxRQUFRO2NBQUVILElBQUksRUFBQyxVQUFVO2NBQUM2SCxPQUFPLEVBQUVBLE9BQU87Y0FBRTVCLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU14QztZQUFRLEVBQUksQ0FDdEc7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5QkEsSUFBQWIsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUEySixZQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFFTSxTQUFVeUssaUJBQWlCQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRXBLLEtBQUs7Y0FBRThFLEtBQUs7Y0FBRXBDLE1BQU07Y0FBRWdIO1lBQVMsQ0FBRSxHQUFHLElBQUF0RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRTlELE1BQU1KLFFBQVEsR0FBRztjQUFFeUUsVUFBVSxFQUFFakssS0FBSyxDQUFDaUI7WUFBSyxDQUFFO1lBQzVDLE1BQU0rRyxRQUFRLEdBQUcyQixLQUFLLElBQUc7Y0FDeEJELFNBQVMsQ0FBQ2hILE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFeUUsWUFBWSxFQUFFd0MsS0FBSyxDQUFDL0gsS0FBSztnQkFBRXlJLGVBQWUsRUFBRVYsS0FBSyxDQUFDVTtjQUFlLENBQUUsQ0FBQyxDQUFDO1lBQ3hHLENBQUM7WUFDRCxJQUFJQyxhQUFhLEdBQVcsQ0FBQztZQUM3QixJQUFJcEksUUFBUSxHQUFXLENBQUM7WUFDeEIsSUFBSVEsTUFBTSxFQUFFNkgsYUFBYSxFQUFFRCxhQUFhLEdBQUdFLFFBQVEsQ0FBQzlILE1BQU0sQ0FBQ3lFLFlBQVksQ0FBQztZQUN4RSxJQUFJekUsTUFBTSxFQUFFeUUsWUFBWSxFQUFFZSxLQUFLLEVBQUVoRyxRQUFRLEdBQUdzSSxRQUFRLENBQUM5SCxNQUFNLENBQUN5RSxZQUFZLENBQUNlLEtBQUssQ0FBQztZQUMvRSxNQUFNMEIsT0FBTyxHQUFHLENBQ2Y7Y0FBRWhJLEtBQUssRUFBRSxFQUFFO2NBQUVFLEtBQUssRUFBRWdELEtBQUssQ0FBQ3FDLFlBQVksQ0FBQ0MsS0FBSztjQUFFaUQsZUFBZSxFQUFFO1lBQUMsQ0FBRSxFQUNsRTtjQUFFekksS0FBSyxFQUFFLEVBQUU7Y0FBRUUsS0FBSyxFQUFFZ0QsS0FBSyxDQUFDcUMsWUFBWSxDQUFDRSxRQUFRO2NBQUVnRCxlQUFlLEVBQUU7WUFBQyxDQUFFLEVBQ3JFO2NBQUV6SSxLQUFLLEVBQUUsRUFBRTtjQUFFRSxLQUFLLEVBQUVnRCxLQUFLLENBQUNxQyxZQUFZLENBQUNHLFFBQVE7Y0FBRStDLGVBQWUsRUFBRTtZQUFDLENBQUUsQ0FDckU7WUFDRCxJQUFJMUUsT0FBTyxHQUFHLEVBQUU7WUFDaEIsSUFBSWpELE1BQU0sQ0FBQ0wsUUFBUSxFQUFFO2NBQ3BCc0QsT0FBTyxHQUFHaUUsT0FBTyxDQUFDYSxJQUFJLENBQUM5SSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsS0FBSyxLQUFLYyxNQUFNLENBQUNMLFFBQVEsQ0FBQzs7WUFHL0QsT0FDQ3NDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9vRCxPQUFPLEVBQUM7WUFBRSxHQUFFdEQsS0FBSyxDQUFDNEYsSUFBSSxDQUFDckksUUFBUSxDQUFTLEVBQy9Dc0MsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLFlBQUEsQ0FBQVksV0FBVztjQUFDQyxZQUFZLEVBQUV4RSxPQUFPO2NBQUVxQyxRQUFRLEVBQUVBLFFBQVE7Y0FBRWpHLElBQUksRUFBQyxVQUFVO2NBQUEsR0FBS3lELFFBQVE7Y0FBRW9FLE9BQU8sRUFBRUE7WUFBTyxFQUFJLENBQ3JHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBLElBQUFqRixNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQWdMLEtBQUEsR0FBQWhMLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUE4SSxhQUFBLEdBQUE5SSxPQUFBO1VBQ0EsSUFBQWlMLE1BQUEsR0FBQWpMLE9BQUE7VUFDTSxTQUFVa0wsY0FBY0EsQ0FBQztZQUFFQztVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUNMcEksTUFBTTtjQUNOb0MsS0FBSyxFQUFFO2dCQUNOMEUsTUFBTSxFQUFFO2tCQUFFdUIsUUFBUTtrQkFBRXZJLFNBQVMsRUFBRXNDO2dCQUFLO2NBQUUsQ0FDdEM7Y0FDRGtELFFBQVE7Y0FDUmhJO1lBQUssQ0FDTCxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE9BQ0NqQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQWlCLEdBQy9CckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJGLEtBQUEsQ0FBQUssUUFBUTtjQUNSaEQsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCcEcsS0FBSyxFQUFFYyxNQUFNLENBQUNGLFNBQVM7Y0FDdkJULElBQUksRUFBQyxXQUFXO2NBQ2hCa0osV0FBVyxFQUFFbkcsS0FBSyxDQUFDb0csUUFBUTtjQUMzQkMsT0FBTztjQUNQQyxTQUFTLEVBQUU7WUFBRyxFQUNiLEVBQ0ROLFNBQVMsSUFDVG5HLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN5RCxhQUFBLENBQUFJLE1BQU0sQ0FBQ0MsR0FBRztjQUNWOUMsU0FBUyxFQUFDLGNBQWM7Y0FDeEIrQyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDdHLFFBQVEsRUFBRTs7O1lBRVgsR0FFQTBJLFFBQVEsQ0FBQ2xILElBQUksRSxLQUFFYyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNEYsTUFBQSxDQUFBUyxJQUFJO2NBQUNDLElBQUksRUFBQztZQUFPLEVBQUcsQ0FFdEMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBM0csTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUEySixZQUFBLEdBQUEzSixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFFTSxTQUFVNEwsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQ0x6RyxLQUFLLEVBQUU7Z0JBQUUwRSxNQUFNLEVBQUVDO2NBQU0sQ0FBRTtjQUN6QnpKLEtBQUssRUFBRTtnQkFBRXdCO2NBQVUsQ0FBRTtjQUNyQnhCO1lBQUssQ0FDTCxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRThELFNBQVM7Y0FBRWhIO1lBQU0sQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUk0RixhQUFhLEdBQUc7Y0FBRTVKLEtBQUssRUFBRSxFQUFFO2NBQUVFLEtBQUssRUFBRTJILE1BQU0sQ0FBQ2dDLE9BQU8sQ0FBQ0M7WUFBTSxDQUFFO1lBRS9ELE1BQU1DLEtBQUssR0FBRztjQUFFMUIsVUFBVSxFQUFFakssS0FBSyxDQUFDd0IsVUFBVSxDQUFDb0ssTUFBTSxLQUFLLENBQUMsSUFBSTVMLEtBQUssQ0FBQ2lCO1lBQUssQ0FBRTtZQUMxRSxNQUFNK0csUUFBUSxHQUFHMkIsS0FBSyxJQUFHO2NBQ3hCLE1BQU0xSCxLQUFLLEdBQUdqQyxLQUFLLENBQUNxQixJQUFJLENBQUNJLGFBQWEsQ0FBQ2dKLElBQUksQ0FBQzlJLElBQUksSUFBSUEsSUFBSSxDQUFDRSxFQUFFLEtBQUs4SCxLQUFLLENBQUMvSCxLQUFLLENBQUM7Y0FDNUU4SCxTQUFTLENBQUNoSCxNQUFNLElBQUc7Z0JBQ2xCLE9BQU87a0JBQUUsR0FBR0EsTUFBTTtrQkFBRVQ7Z0JBQUssQ0FBRTtjQUM1QixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQzBDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU9vRCxPQUFPLEVBQUM7WUFBRSxHQUFFcUIsTUFBTSxDQUFDZ0MsT0FBTyxDQUFDM0osS0FBSyxDQUFTLEVBQ2hENkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLFlBQUEsQ0FBQVksV0FBVztjQUNYQyxZQUFZLEVBQUVuSyxLQUFLLENBQUNnQyxXQUFXO2NBQy9CRCxJQUFJLEVBQUMsT0FBTztjQUNaNkgsT0FBTyxFQUFFNUosS0FBSyxDQUFDd0IsVUFBVTtjQUN6QndHLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QyRDtZQUFLLEVBQ1IsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBaEgsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFrTSxZQUFBLEdBQUFsTSxPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBMEcsR0FBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUFtTSxNQUFBLEdBQUFuTSxPQUFBO1VBQ0EsSUFBQW9NLGFBQUEsR0FBQXBNLE9BQUE7VUFDQSxJQUFBcU0sVUFBQSxHQUFBck0sT0FBQTtVQUNBLElBQUFzTSxVQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXVNLFFBQUEsR0FBQXZNLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF3TSxZQUFBLEdBQUF4TSxPQUFBO1VBQ0EsSUFBQThJLGFBQUEsR0FBQTlJLE9BQUE7VUFDQSxJQUFBeU0sTUFBQSxHQUFBek0sT0FBQTtVQUNBLElBQUEwTSxnQkFBQSxHQUFBMU0sT0FBQTtVQUVNLFNBQVUyTSxTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRTVKLE1BQU07Y0FBRWlCLEtBQUs7Y0FBRStGLFNBQVM7Y0FBRTFKLEtBQUs7Y0FBRThFLEtBQUs7Y0FBRTdELEtBQUs7Y0FBRTZDO1lBQVEsQ0FBRSxHQUFHLElBQUFzQixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RGLE1BQU0sQ0FBQ3ZGLElBQUksRUFBRWtNLE9BQU8sQ0FBQyxHQUFHNUgsTUFBQSxDQUFBSSxPQUFLLENBQUN5SCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQzdDLE1BQU0sQ0FBQzFCLFNBQVMsRUFBRTJCLFlBQVksQ0FBQyxHQUFHOUgsTUFBQSxDQUFBSSxPQUFLLENBQUN5SCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXZELE1BQU1FLE1BQU0sR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDekIsTUFBTUMsVUFBVSxHQUFHO2dCQUFFLEdBQUdqSyxNQUFNO2dCQUFFa0ssS0FBSyxFQUFFO2NBQVcsQ0FBRTtjQUNwRGxELFNBQVMsQ0FBQztnQkFBRSxHQUFHaUQ7Y0FBVSxDQUFFLENBQUM7Y0FDNUIsTUFBTTNNLEtBQUssQ0FBQzZELElBQUksQ0FBQztnQkFBRSxHQUFHOEk7Y0FBVSxDQUFFLENBQUM7WUFDcEMsQ0FBQztZQUNELE1BQU1wSCxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsSUFBSXRFLEtBQUssSUFBSWpCLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQzRMLEtBQUssS0FBSyxTQUFTLEVBQUU7a0JBQzdDTCxPQUFPLENBQUMsSUFBSSxDQUFDO2tCQUNiOztnQkFHRCxNQUFNdk0sS0FBSyxDQUFDNkQsSUFBSSxDQUFDO2tCQUFFLEdBQUduQixNQUFNO2tCQUFFa0ssS0FBSyxFQUFFO2dCQUFTLENBQUUsQ0FBQztnQkFDakRWLFFBQUEsQ0FBQVcsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRSxFQUFFOUosU0FBUyxFQUFFLDBCQUEwQmhELEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ2EsRUFBRSxFQUFFLENBQUM7Z0JBQy9FNEssWUFBWSxDQUFDLElBQUksQ0FBQztlQUNsQixDQUFDLE9BQU9oSixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFDRCxNQUFNd0csVUFBVSxHQUFHLENBQUN2SCxNQUFNLENBQUNULEtBQUssSUFBSSxDQUFDUyxNQUFNLENBQUNOLFFBQVEsSUFBSSxDQUFDTSxNQUFNLENBQUNMLFFBQVEsSUFBSSxDQUFDSyxNQUFNLENBQUNGLFNBQVM7WUFDN0ZrQixPQUFPLENBQUNxSixHQUFHLENBQUMsRUFBRSxFQUFFL00sS0FBSyxDQUFDZ0IsS0FBSyxDQUFDNEwsS0FBSyxFQUFFM0wsS0FBSyxDQUFDO1lBQ3pDLE1BQU1hLEtBQUssR0FBRzlCLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQzRMLEtBQUssSUFBSTNMLEtBQUssR0FBRzZELEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ2tILFFBQVEsR0FBR2xJLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ2pDLElBQUk7WUFDdEYsTUFBTW9KLGVBQWUsR0FBR25JLEtBQUssQ0FBQ29JLGNBQWMsQ0FBQ2xOLEtBQUssQ0FBQ3VCLGNBQWMsQ0FBQyxHQUMvRHVELEtBQUssQ0FBQzlFLEtBQUssQ0FBQ3VCLGNBQWMsQ0FBQyxHQUMzQnVELEtBQUssQ0FBQ3FJLG9CQUFvQjtZQUM3QixPQUNDeEksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBTWdCLFNBQVMsRUFBQztZQUF1QixHQUN0Q3JCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNvSCxNQUFBLENBQUF2SCxhQUFhO2NBQUNsQixLQUFLLEVBQUVBLEtBQUs7Y0FBRW1CLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzdDSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkcsWUFBQSxDQUFBbkQsV0FBVyxRQUNYL0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2dCLFNBQVMsRUFBQztZQUFXLEdBQzdCckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUWdCLFNBQVMsRUFBQztZQUFvQixHQUNyQ3JCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtGLEtBQUssQ0FBQzBFLE1BQU0sQ0FBQzRELFlBQVksQ0FBQ3hHLEtBQUssQ0FBTSxFQUMxQ2pDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU9GLEtBQUssQ0FBQzBFLE1BQU0sQ0FBQzRELFlBQVksQ0FBQ0MsUUFBUSxDQUFRLENBQ3pDLEVBQ1QxSSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUQsYUFBQSxDQUFBNkUsZUFBZSxRQUNmM0ksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBU2dCLFNBQVMsRUFBQztZQUE2QixHQUMvQ3JCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNnSCxVQUFBLENBQUFULGNBQWMsT0FBRyxFQUNsQjVHLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUM4RyxNQUFBLENBQUF2QyxVQUFVLE9BQUcsRUFDZDVFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMrRyxhQUFBLENBQUEzQixpQkFBaUIsT0FBRyxDQUNaLENBQ08sRUFDbEJ6RixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQWdDLEdBQzlDckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lILFVBQUEsQ0FBQXBCLGNBQWM7Y0FBQ0MsU0FBUyxFQUFFQTtZQUFTLEVBQUksRUFDeENuRyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsWUFBQSxDQUFBb0Isb0JBQW9CLE9BQUcsQ0FDbkIsQ0FDRyxFQUNWNUksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUNOQyxTQUFTLEVBQUMsY0FBYztjQUN4QjdDLElBQUksRUFBQyxRQUFRO2NBQ2JxQyxRQUFRLEVBQUV5RSxVQUFVO2NBQ3BCL0UsT0FBTyxFQUFDLFNBQVM7Y0FDakJnQixPQUFPLEVBQUVYO1lBQVEsR0FFaEJ6RCxLQUFLLENBQ0UsQ0FDRCxDQUNJLEVBQ2Q2QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBbUgsZ0JBQWdCO2NBQUMxSixRQUFRLEVBQUVBO1lBQVEsR0FDbkNhLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNxQixHQUFBLENBQUFvSCxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNuTCxPQUFPLEVBQUUwSztZQUFlLEVBQUksQ0FDdkMsRUFDbEI1TSxJQUFJLElBQUlzRSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUgsZ0JBQUEsQ0FBQXNCLHlCQUF5QjtjQUFDQyxPQUFPLEVBQUVBLENBQUEsS0FBTXJCLE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FBRUcsTUFBTSxFQUFFQTtZQUFNLEVBQUksQ0FDL0U7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkEsSUFBQS9ILE1BQUEsR0FBQWhGLE9BQUE7VUFFQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUFrTyxLQUFBLEdBQUFsTyxPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBbU8sS0FBQSxHQUFBbk8sT0FBQTtVQUVNLFNBQVU0TixvQkFBb0JBLENBQUMsRUFBRTtZQUN0QyxNQUFNO2NBQ0x6SSxLQUFLLEVBQUU7Z0JBQ04wRSxNQUFNLEVBQUU7a0JBQUV1RSxXQUFXLEVBQUVqSjtnQkFBSyxDQUFFO2dCQUM5QmdCLE9BQU8sRUFBRWtJO2NBQVcsQ0FDcEI7Y0FDRGhPLEtBQUs7Y0FDTDBDLE1BQU07Y0FDTnpCLEtBQUs7Y0FDTHlJO1lBQVMsQ0FDVCxHQUFHLElBQUF0RSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sQ0FBQzFELFFBQVEsRUFBRStMLFdBQVcsQ0FBQyxHQUFHdEosTUFBQSxDQUFBSSxPQUFLLENBQUN5SCxRQUFRLENBQUMsSUFBSXBMLEdBQUcsRUFBRSxDQUFDO1lBRXpELE1BQU04TSxPQUFPLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzFCLE1BQU1sTyxLQUFLLENBQUNtRSx3QkFBd0IsQ0FBQztnQkFBRTNCLFNBQVMsRUFBRUUsTUFBTSxDQUFDRjtjQUFTLENBQUUsQ0FBQztZQUN0RSxDQUFDO1lBRUQsTUFBTTJMLGlCQUFpQixHQUFHQSxDQUFBLEtBQUs7Y0FDOUJ6RSxTQUFTLENBQUNoSCxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRXhCLFlBQVksRUFBRSxJQUFJRSxHQUFHO2NBQUUsQ0FBRSxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELE1BQU1nTixLQUFLLEdBQUcsTUFBTXpFLEtBQUssSUFBRztjQUMzQixNQUFNekcsS0FBSyxHQUFHO2dCQUNiVixTQUFTLEVBQUVFLE1BQU0sQ0FBQ0YsU0FBUztnQkFDM0J0QixZQUFZLEVBQUVtTixLQUFLLENBQUNDLElBQUksQ0FBQ3BNLFFBQVEsQ0FBQyxDQUFDUixHQUFHLENBQUU2TSxDQUFTLElBQUt2TyxLQUFLLENBQUNrQixZQUFZLENBQUNxTixDQUFDLENBQUM7ZUFDM0U7Y0FDRCxNQUFNdk8sS0FBSyxDQUFDcUUsaUJBQWlCLENBQUNuQixLQUFLLENBQUM7Y0FDcEMrSyxXQUFXLENBQUMsSUFBSTdNLEdBQUcsRUFBRSxDQUFDO2NBQ3RCc0ksU0FBUyxDQUFDaEgsTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVGLFNBQVMsRUFBRXhDLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ3dCO2NBQVMsQ0FBRSxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUVELE1BQU15RixNQUFNLEdBQUcsRUFBRTtZQUNqQixJQUFJakksS0FBSyxDQUFDa0IsWUFBWSxDQUFDMEssTUFBTSxFQUFFO2NBQzlCM0QsTUFBTSxDQUFDdUcsSUFBSSxDQUNWN0osTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0wsTUFBQSxDQUFBSSxPQUFLLENBQUMwSixRQUFRO2dCQUFDdEcsR0FBRyxFQUFDO2NBQWMsR0FDakN4RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkksS0FBQSxDQUFBYSxJQUFJO2dCQUNKMUksU0FBUyxFQUFDLGtCQUFrQjtnQkFDNUI5QyxLQUFLLEVBQUU7a0JBQUVoQixRQUFRO2tCQUFFK0w7Z0JBQVcsQ0FBRTtnQkFDaENVLE9BQU8sRUFBRWIsS0FBQSxDQUFBYyx3QkFBd0I7Z0JBQ2pDQyxLQUFLLEVBQUU3TyxLQUFLLENBQUNrQjtjQUFZLEVBQ3hCLENBQ2MsQ0FDakI7O1lBRUYsTUFBTWdGLE9BQU8sR0FBR2xHLEtBQUssQ0FBQ2tCLFlBQVksQ0FBQzBLLE1BQU0sR0FBR3VDLGlCQUFpQixHQUFHRCxPQUFPO1lBQ3ZFLE1BQU1ZLElBQUksR0FBRyxDQUFDOU8sS0FBSyxDQUFDa0IsWUFBWSxDQUFDMEssTUFBTSxHQUFHb0MsV0FBVyxDQUFDZSxPQUFPLEdBQUdmLFdBQVcsQ0FBQ2dCLGlCQUFpQjtZQUU3RixPQUNDckssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUEwSixRQUFBLFFBQ0V4RyxNQUFNLEVBQ1B0RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQWlDLEdBQy9DckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csV0FBQSxDQUFBWSxNQUFNO2NBQUNQLFFBQVEsRUFBRSxDQUFDdkUsS0FBSztjQUFFaUYsT0FBTyxFQUFFQSxPQUFPO2NBQUVoQixPQUFPLEVBQUMsU0FBUztjQUFDZSxRQUFRO1lBQUEsR0FDcEU2SSxJQUFJLENBQ0csRUFDUjlPLEtBQUssQ0FBQ21CLG9CQUFvQixDQUFDOE4sSUFBSSxHQUFHLENBQUMsSUFDbkN0SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFBTCxNQUFBLENBQUFJLE9BQUEsQ0FBQTBKLFFBQUEsUUFDQzlKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUFDYixPQUFPLEVBQUMsU0FBUztjQUFDZ0IsT0FBTyxFQUFFa0k7WUFBSyxHQUN0Q0osV0FBVyxDQUFDa0IsZ0JBQWdCLENBQ3JCLENBRVYsQ0FDSSxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeEVBLElBQUF2SyxNQUFBLEdBQUFoRixPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFFTSxTQUFVaVAsd0JBQXdCQSxDQUFDO1lBQUUxRyxLQUFLO1lBQUU5RCxJQUFJO1lBQUVsQixLQUFLLEVBQUU7Y0FBRWhCLFFBQVE7Y0FBRStMO1lBQVc7VUFBRSxDQUFFO1lBQ3pGLE1BQU07Y0FBRXZMLE1BQU07Y0FBRWdILFNBQVM7Y0FBRTFKO1lBQUssQ0FBRSxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXZELE1BQU11SixRQUFRLEdBQUd4RixLQUFLLElBQUc7Y0FDeEJBLEtBQUssQ0FBQ3lGLGVBQWUsRUFBRTtjQUN2QixNQUFNbEgsS0FBSyxHQUFHc0MsUUFBUSxDQUFDYixLQUFLLENBQUMwRixhQUFhLENBQUNDLE9BQU8sQ0FBQ3BILEtBQUssQ0FBQztjQUN6RCxNQUFNcUgsUUFBUSxHQUFHck4sUUFBUTtjQUN6QnFOLFFBQVEsQ0FBQ2pMLEdBQUcsQ0FBQzRELEtBQUssQ0FBQyxHQUFHcUgsUUFBUSxDQUFDQyxNQUFNLENBQUN0SCxLQUFLLENBQUMsR0FBR3FILFFBQVEsQ0FBQ0UsR0FBRyxDQUFDdkgsS0FBSyxDQUFDO2NBQ2xFbEksS0FBSyxDQUFDbUIsb0JBQW9CLENBQUNzTyxHQUFHLENBQUN2SCxLQUFLLENBQUM7Y0FDckMrRixXQUFXLENBQUMsSUFBSTdNLEdBQUcsQ0FBQ21PLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFFRCxNQUFNM0csR0FBRyxHQUFHLG1CQUFtQjFHLFFBQVEsQ0FBQ29DLEdBQUcsQ0FBQzRELEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUU7WUFFdkUsT0FDQ3ZELE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtnQixTQUFTLEVBQUU0QyxHQUFHO2NBQUEsY0FBY1YsS0FBSztjQUFFaEMsT0FBTyxFQUFFaUo7WUFBUSxHQUN4RHhLLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtnQixTQUFTLEVBQUM7WUFBZSxHQUFFNUIsSUFBSSxDQUFPLENBQ3RDO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFzTCxLQUFBLEdBQUEvUCxPQUFBO1VBQ0EsSUFBQWdRLE1BQUEsR0FBQWhRLE9BQUE7VUFHQSxJQUFBaVEsT0FBQSxHQUFBalEsT0FBQTtVQUNBLElBQUFrUSxlQUFBLEdBQUFsUSxPQUFBO1VBS0EsSUFBQW1RLE9BQUEsR0FBQW5RLE9BQUE7VUFFTztVQUFVLFNBQ1JTLElBQUlBLENBQUMyUCxLQUFLO1lBQ2xCLE1BQU07Y0FBRS9QO1lBQUssQ0FBRSxHQUE0QitQLEtBQUs7WUFDaEQsTUFBTSxDQUFDQyxVQUFVLEVBQUVsTCxLQUFLLENBQUMsR0FBRyxJQUFBOEssT0FBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDck0sUUFBUSxFQUFFc00sV0FBVyxDQUFDLEdBQUdWLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQ3hNLEtBQUssQ0FBQzhELFFBQVEsQ0FBQztZQUM5RCxNQUFNLEdBQUd1TSxVQUFVLENBQUMsR0FBR1gsS0FBSyxDQUFDbEQsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV6QyxJQUFBbUQsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ3RRLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJxUSxVQUFVLENBQUMsRUFBRSxDQUFDO2NBQ2RELFdBQVcsQ0FBQ3BRLEtBQUssRUFBRWdCLEtBQUssRUFBRThDLFFBQVEsQ0FBQztZQUNwQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNrTSxVQUFVLElBQUksQ0FBQ2hRLEtBQUssQ0FBQ2lELEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUlqRCxLQUFLLENBQUNnQixLQUFLLENBQUM0TCxLQUFLLEtBQUssV0FBVyxFQUFFO2NBQ3RDLE9BQ0M4QyxLQUFBLENBQUExSyxhQUFBLENBQUEwSyxLQUFBLENBQUFqQixRQUFBLFFBQ0NpQixLQUFBLENBQUExSyxhQUFBO2dCQUF3Qm5ELEVBQUUsRUFBRTdCLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ2E7Y0FBRSxFQUFJLENBQzVDOztZQUdMLE9BQU82TixLQUFBLENBQUExSyxhQUFBLENBQUM4SyxPQUFBLENBQUFTLE1BQU07Y0FBQ3ZRLEtBQUssRUFBRUE7WUFBSyxFQUFJO1VBQ2hDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2xDQSxJQUFBMkUsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUE2USxNQUFBLEdBQUE3USxPQUFBO1VBQ0EsSUFBQXdGLFdBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBMEcsR0FBQSxHQUFBMUcsT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ00sU0FBVWdPLHlCQUF5QkEsQ0FBQztZQUFFQyxPQUFPO1lBQUVsQjtVQUFNLENBQUU7WUFDNUQsTUFBTTtjQUFFNUgsS0FBSztjQUFFOUUsS0FBSztjQUFFMEM7WUFBTSxDQUFFLEdBQUcsSUFBQTBDLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDbkQsTUFBTSxDQUFDOUIsUUFBUSxFQUFFc00sV0FBVyxDQUFDLEdBQUd6TCxNQUFBLENBQUFJLE9BQUssQ0FBQ3lILFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTWlFLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSEwsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXBRLEtBQUssQ0FBQ3dFLHdCQUF3QixDQUFDO2tCQUFFLEdBQUc5QjtnQkFBTSxDQUFFLENBQUM7Z0JBQ25EZ0ssTUFBTSxFQUFFO2VBQ1IsQ0FBQyxPQUFPakosQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QyTSxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBRUQsT0FDQ3pMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUN3TCxNQUFBLENBQUFFLEtBQUs7Y0FBQ3JRLElBQUk7Y0FBQ3VOLE9BQU8sRUFBRUE7WUFBTyxHQUMzQmpKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtnQixTQUFTLEVBQUM7WUFBZSxHQUM3QnJCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGFBQUtGLEtBQUssQ0FBQzZMLGdCQUFnQixDQUFDL0osS0FBSyxDQUFNLEVBQ3ZDakMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2dCLFNBQVMsRUFBQztZQUFPLEdBQ3JCckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsZUFBT0YsS0FBSyxDQUFDNkwsZ0JBQWdCLENBQUNDLFdBQVcsQ0FBUSxDQUM1QyxFQUNOak0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBUWdCLFNBQVMsRUFBQztZQUEwQyxHQUMzRHJCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUFDYixPQUFPLEVBQUMsU0FBUztjQUFDZSxRQUFRO2NBQUNDLE9BQU8sRUFBRXVLO1lBQVUsR0FDcEQzTCxLQUFLLENBQUM2TCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDQyxXQUFXLENBQ25DLEVBQ1RuTSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FBQ2IsT0FBTyxFQUFDLFNBQVM7Y0FBQ2dCLE9BQU8sRUFBRXdHO1lBQU0sR0FDdkM1SCxLQUFLLENBQUM2TCxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDRSxNQUFNLENBQzlCLENBQ0QsQ0FDSixFQUNOcE0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQW1ILGdCQUFnQjtjQUFDMUosUUFBUSxFQUFFQTtZQUFRLEdBQ25DYSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBb0gsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDbkwsT0FBTyxFQUFFdUMsS0FBSyxDQUFDbUk7WUFBZSxFQUFJLENBQzdDLENBQ1o7VUFFVjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXlDLEtBQUEsR0FBQS9QLE9BQUE7VUFDQSxJQUFBZ1EsTUFBQSxHQUFBaFEsT0FBQTtVQUNBLElBQUEwRyxHQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBaVEsT0FBQSxHQUFBalEsT0FBQTtVQUNBLElBQUFrUSxlQUFBLEdBQUFsUSxPQUFBO1VBQ0EsSUFBQXFSLE9BQUEsR0FBQXJSLE9BQUE7VUFHQSxJQUFBZ0wsS0FBQSxHQUFBaEwsT0FBQTtVQUVPO1VBQVUsU0FDUjRRLE1BQU1BLENBQUM7WUFBRXZRO1VBQUssQ0FBMkI7WUFDakQsTUFBTSxDQUFDZ1EsVUFBVSxFQUFFbEwsS0FBSyxDQUFDLEdBQUcsSUFBQThLLE9BQUEsQ0FBQUssUUFBUSxFQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ3JNLFFBQVEsRUFBRXNNLFdBQVcsQ0FBQyxHQUFHVixLQUFLLENBQUNsRCxRQUFRLENBQUN4TSxLQUFLLENBQUM4RCxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDbU4sV0FBVyxDQUFDLEdBQUd2QixLQUFLLENBQUNsRCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sR0FBRzZELFVBQVUsQ0FBQyxHQUFHWCxLQUFLLENBQUNsRCxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sQ0FBQzdHLE9BQU8sRUFBRUQsVUFBVSxDQUFDLEdBQUdnSyxLQUFLLENBQUNsRCxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQzlKLE1BQU0sRUFBRWdILFNBQVMsQ0FBQyxHQUFHZ0csS0FBSyxDQUFDbEQsUUFBUSxDQUFzQnhNLEtBQUssQ0FBQzBDLE1BQU0sQ0FBQztZQUM3RSxNQUFNLENBQUNpQixLQUFLLEVBQUV1TixRQUFRLENBQUMsR0FBR3hCLEtBQUssQ0FBQ2xELFFBQVEsRUFBVTtZQUNsRCxNQUFNLENBQUMyRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUIsS0FBSyxDQUFDbEQsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN6RCxJQUFBbUQsTUFBQSxDQUFBVyxTQUFTLEVBQUMsQ0FBQ3RRLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJxUSxVQUFVLENBQUMsRUFBRSxDQUFDO2NBRWRELFdBQVcsQ0FBQ3BRLEtBQUssRUFBRWdCLEtBQUssRUFBRThDLFFBQVEsQ0FBQztZQUNwQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNrTSxVQUFVLElBQUksQ0FBQ2hRLEtBQUssQ0FBQ2lELEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU0rRSxRQUFRLEdBQUcyQixLQUFLLElBQUc7Y0FDeEJELFNBQVMsQ0FBQztnQkFBRSxHQUFHaEgsTUFBTTtnQkFBRSxDQUFDaUgsS0FBSyxDQUFDMEYsYUFBYSxDQUFDdE4sSUFBSSxHQUFHNEgsS0FBSyxDQUFDMEYsYUFBYSxDQUFDek47Y0FBSyxDQUFFLENBQUM7WUFDaEYsQ0FBQztZQUVELE1BQU1BLEtBQUssR0FBRztjQUNiNUIsS0FBSztjQUNMZ0ksUUFBUTtjQUNSbEQsS0FBSztjQUNMbU0sV0FBVztjQUNYdEwsT0FBTztjQUNQRCxVQUFVO2NBQ1YvQixLQUFLO2NBQ0x1TixRQUFRO2NBQ1JwTixRQUFRLEVBQUVBLFFBQVEsSUFBSXFOLFVBQVU7Y0FDaENDLGFBQWE7Y0FDYm5RLEtBQUssRUFBRWpCLEtBQUssQ0FBQ2lCLEtBQUs7Y0FDbEJ5QixNQUFNO2NBQ05nSDthQUNBO1lBQ0QsTUFBTWQsR0FBRyxHQUFHLElBQUk5RSxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRTtZQUUvQyxJQUFJeUMsVUFBVSxHQUFHLEtBQUs7WUFFdEIsT0FDQ21KLEtBQUEsQ0FBQTFLLGFBQUEsQ0FBQTBLLEtBQUEsQ0FBQWpCLFFBQUEsUUFDQ2lCLEtBQUEsQ0FBQTFLLGFBQUEsQ0FBQ0ksUUFBQSxDQUFBa0QsYUFBYSxDQUFDK0ksUUFBUTtjQUFDelAsS0FBSyxFQUFFQTtZQUFLLEdBQ25DOE4sS0FBQSxDQUFBMUssYUFBQSxDQUFDZ00sT0FBQSxDQUFBMUssTUFBTTtjQUFDeEIsS0FBSyxFQUFFQSxLQUFLO2NBQUV5QixVQUFVLEVBQUVBO1lBQVUsRUFBSSxFQUNoRG1KLEtBQUEsQ0FBQTFLLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQWlMLGFBQWE7Y0FBQ3RMLFNBQVMsRUFBRTRDLEdBQUc7Y0FBRTlFLFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUMsQ0FBQzlELEtBQUssQ0FBQ2dCLEtBQUssRUFBRWlELFVBQVUsQ0FBQzJIO1lBQU0sR0FDcEY4RCxLQUFBLENBQUExSyxhQUFBLENBQUMyRixLQUFBLENBQUEyQixTQUFTLE9BQUcsQ0FDRSxDQUNRLENBQ3ZCO1VBRUwifQ==