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
        hash: 2765100070,
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
                this.#model.on('change', this.listener);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwibGlzdGVuZXIiLCJnbG9iYWxUaGlzIiwiaXNSZWFkeSIsInRyaWdnZXJFdmVudCIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiSGVhZGVyIiwic2hvd0hlYWRlciIsIlBhZ2VIZWFkZXIiLCJicmVhZGNydW1iIiwiQmF0dGVyeSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwibW9kdWxlTGVuZ3RoIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImV2ZW50Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJncmFkZXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTW9kdWxlTGVuZ3RoRmllbGQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZmluZCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0IiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInNldFNlbGVjdGVkIiwiYW5hbGl6ZSIsImRlbGV0ZVN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwicHVzaCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRleHQiLCJhbmFseXNlIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJzaXplIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZHVsZVN1Z2dlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpbnNwaXJhdGlvbiIsIm1hbnVhbCIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0Ms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