System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "framer-motion@10.17.8", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, View, Wizard, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp0024Config) {
      dependency_11 = _aimpactAilearnApp0024Config;
    }, function (_framerMotion2) {
      dependency_12 = _framerMotion2;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_13 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006Form) {
      dependency_14 = _pragmateUi006Form;
    }, function (_pragmateUi006Icons) {
      dependency_15 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_16 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006List) {
      dependency_17 = _pragmateUi006List;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_18 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['pragmate-ui/list', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/modal', dependency_20]]);
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
        hash: 1858941503,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
          var _config = require("@aimpact/ailearn-app/config");
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
              breadcrumb: [[_config.default.params.APP_NAME, '/'], ['Modules', '/modules/list'], ['Management', '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsInNob3dIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwiQmF0dGVyeSIsIlBhZ2VUaXRsZSIsInRpdGxlIiwiUGFnZVN1YnRpdGxlIiwicG9zdFRpdGxlIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwibW9kdWxlTGVuZ3RoIiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjaGlsZHJlbiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImV2ZW50Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJncmFkZXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTW9kdWxlTGVuZ3RoRmllbGQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZmluZCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwic2VsZWN0IiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwic3RhdGUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwibG9nIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJfbGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJ0ZXh0QWN0aW9ucyIsInNldFNlbGVjdGVkIiwiYW5hbGl6ZSIsImRlbGV0ZVN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwicHVzaCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRleHQiLCJhbmFseXNlIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJzaXplIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZHVsZVN1Z2dlc3Rpb24iLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpbnNwaXJhdGlvbiIsIm1hbnVhbCIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMs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