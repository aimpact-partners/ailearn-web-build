System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "@aimpact/ailearn-app@0.0.24/config", "framer-motion@10.18.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.29"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 596012748,
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
            showHeader = false
          }) {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            const disabled = {
              disabled: store.model.type !== 'draft'
            };
            return _react.default.createElement("section", null, _react.default.createElement(_ui.PageHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
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
        hash: 4127879733,
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
              label: wTexts.grades.select
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
        hash: 3229400744,
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
              defaultValue: defaultOption,
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
        hash: 2719466693,
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
            }, _react.default.createElement("h3", null, texts.wizard.modalSuggestions.title), _react.default.createElement("div", {
              className: "mt-30"
            }, _react.default.createElement("span", null, texts.wizard.modalSuggestions.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onGenerate
            }, texts.wizard.modalSuggestions.buttons.inspiration), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave
            }, texts.wizard.modalSuggestions.buttons.manual))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.wizard.generatingModule
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsInByb3Bvc2FsIiwiY29udGVudCIsIm9iamVjdGl2ZSIsIm9ic2VydmF0aW9ucyIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIkhlYWRlciIsInNob3dIZWFkZXIiLCJQYWdlSGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJCYXR0ZXJ5IiwiUGFnZVRpdGxlIiwidGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwic2V0VmFsdWVzIiwiZ3JhZGVzIiwic2VsZWN0IiwiZXZlbnQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJNb2R1bGVMZW5ndGhGaWVsZCIsInRvdGFsQWN0aXZpdGllcyIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJmaW5kIiwiZm9ybSIsIl9mb3JtIiwiX2ljb25zIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiaWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsImxlbmd0aCIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIkRyYWZ0Rm9ybSIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInNldFN1Ym1pdHRlZCIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJzdGF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJsb2ciLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIkFuaW1hdGVQcmVzZW5jZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwib25DbG9zZSIsIl9saXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsInRleHRBY3Rpb25zIiwic2V0U2VsZWN0ZWQiLCJhbmFsaXplIiwiZGVsZXRlU3VnZ2VzdGlvbnMiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJwdXNoIiwiRnJhZ21lbnQiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwidGV4dCIsImFuYWx5c2UiLCJyZW1vdmVTdWdnZXN0aW9ucyIsInNpemUiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwiUmVhY3QiLCJfaG9va3MiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX3dpemFyZCIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiV2l6YXJkIiwiX21vZGFsIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsImluc3BpcmF0aW9uIiwibWFudWFsIiwiZ2VuZXJhdGluZ01vZHVsZSIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pdGVtLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQUVNLE1BQU9PLFlBQWEsU0FBUVcsTUFBQSxDQUFBRSxhQUEyQjtZQUM1RCxDQUFBQyxLQUFNO1lBQ047OztZQUdBLENBQUFDLEtBQU0sR0FBRyxLQUFLO1lBQ2QsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJRCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFFLFlBQWEsR0FBYSxFQUFFO1lBQzVCLElBQUlBLFlBQVlBLENBQUE7Y0FDZixPQUFPLElBQUksQ0FBQyxDQUFBQSxZQUFhO1lBQzFCO1lBRUEsQ0FBQUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ2pDLElBQUlELG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFFQSxJQUFJRSxJQUFJQSxDQUFBO2NBQ1AsT0FBT1AsUUFBQSxDQUFBUSxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxDQUFBRSxjQUFlO1lBQ2YsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sQ0FDTixHQUFHVixRQUFBLENBQUFRLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDSSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2dCQUMvQyxPQUFPO2tCQUFFQyxLQUFLLEVBQUVELElBQUksQ0FBQ0UsRUFBRTtrQkFBRUMsS0FBSyxFQUFFSCxJQUFJLENBQUNJO2dCQUFJLENBQUU7Y0FDNUMsQ0FBQyxDQUFDLENBQ0Y7WUFDRjtZQUVBLElBQUlDLFdBQVdBLENBQUE7Y0FDZCxJQUFJLElBQUksQ0FBQ2hCLEtBQUssQ0FBQ2lCLEtBQUssRUFBRTtnQkFDckIsT0FBTztrQkFBRUwsS0FBSyxFQUFFLElBQUksQ0FBQ1osS0FBSyxDQUFDaUIsS0FBSyxDQUFDSixFQUFFO2tCQUFFQyxLQUFLLEVBQUUsSUFBSSxDQUFDZCxLQUFLLENBQUNpQixLQUFLLENBQUNGO2dCQUFJLENBQUU7O1lBRXJFO1lBRUEsQ0FBQUcsUUFBUztZQUNULElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTztnQkFDTkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsT0FBTyxFQUFFLEVBQUU7Z0JBQ1hDLFNBQVMsRUFBRSxFQUFFO2dCQUNiQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEJ2QixZQUFZLEVBQUUsSUFBSUUsR0FBRztlQUNyQjtZQUNGO1lBRUEsSUFBSXNCLE1BQU1BLENBQUE7Y0FDVCxPQUFPLElBQUksQ0FBQyxDQUFBekIsS0FBTSxHQUFHLElBQUksQ0FBQ0QsS0FBSyxDQUFDMkIsYUFBYSxFQUFFLEdBQUcsSUFBSSxDQUFDUixhQUFhO1lBQ3JFO1lBRUEsQ0FBQVMsbUJBQW9CLEdBQUcsSUFBSUMsR0FBRyxFQUFrQjtZQUVoREMsWUFBQTtjQUNDLEtBQUssRUFBRTtjQUNQLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDdEM7WUFDQXJDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQU0sS0FBTSxHQUFHZ0MsU0FBUztjQUN2QixJQUFJLENBQUNDLEtBQUssR0FBRyxLQUFLO1lBQ25CO1lBRUEsTUFBTTNDLElBQUlBLENBQUN1QixFQUFFO2NBQ1osSUFBSTtnQkFDSCxJQUFJQSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUFiLEtBQU0sRUFBRWEsRUFBRSxLQUFLQSxFQUFFLEVBQUU7a0JBQ2pDOztnQkFFRCxNQUFNcUIsS0FBSyxHQUFHO2tCQUFFQyxJQUFJLEVBQUUsT0FBTztrQkFBRXRCO2dCQUFFLENBQUU7Z0JBRW5DLElBQUksQ0FBQyxDQUFBYixLQUFNLEdBQUcsSUFBSUosS0FBQSxDQUFBd0MsY0FBYyxDQUFDRixLQUFLLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxDQUFBbEMsS0FBTSxDQUFDcUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFlBQVksQ0FBQztnQkFFM0NDLFVBQVUsQ0FBQ3ZDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtnQkFDOUIsTUFBTSxJQUFJLENBQUMsQ0FBQUEsS0FBTSxDQUFDd0MsT0FBTztnQkFFekIsSUFBSTNCLEVBQUUsRUFBRTtrQkFDUCxNQUFNLElBQUksQ0FBQyxDQUFBYixLQUFNLENBQUNWLElBQUksRUFBRTtrQkFDeEIsSUFBSSxDQUFDLENBQUFXLEtBQU0sR0FBRyxJQUFJOztnQkFHbkIsSUFBSSxDQUFDZ0MsS0FBSyxHQUFHLElBQUk7Z0JBQ2pCLElBQUksQ0FBQ0ssWUFBWSxFQUFFO2VBQ25CLENBQUMsT0FBT0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQjtZQUVBRyxRQUFRQSxDQUFBO2NBQ1A7WUFBQTtZQUVELE1BQU1DLElBQUlBLENBQUNYLEtBQUs7Y0FDZixJQUFJLENBQUNZLFFBQVEsR0FBRyxJQUFJO2NBRXBCLE1BQU0sSUFBSSxDQUFDOUMsS0FBSyxDQUFDK0MsU0FBUyxDQUFDYixLQUFLLENBQUM7Y0FFakMsSUFBSSxDQUFDWSxRQUFRLEdBQUcsS0FBSztjQUNyQixJQUFJLENBQUNSLFlBQVksRUFBRTtjQUNuQixJQUFJLENBQUMsQ0FBQXJDLEtBQU0sR0FBRyxJQUFJO2NBQ2xCLE9BQU8sSUFBSSxDQUFDLENBQUFELEtBQU07WUFDbkI7WUFFQSxNQUFNZ0QsS0FBS0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBaEQsS0FBTSxDQUFDaUQsVUFBVSxDQUFDRCxLQUFLLEVBQUU7Y0FDOUIsSUFBSSxDQUFDRSxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUEsTUFBTUMsd0JBQXdCQSxDQUFDO2NBQUUzQjtZQUFTLENBQUU7Y0FDM0MsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQWpCLGNBQWUsR0FBRyxXQUFXO2dCQUNsQyxJQUFJLENBQUN1QyxRQUFRLEdBQUcsS0FBSztnQkFDckIsTUFBTU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDcEQsS0FBSyxDQUFDbUQsd0JBQXdCLENBQUM7a0JBQUUzQjtnQkFBUyxDQUFFLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxDQUFBdEIsWUFBYSxHQUFHa0QsSUFBSTtnQkFDekIsSUFBSSxDQUFDZCxZQUFZLENBQUMsUUFBUSxDQUFDO2VBQzNCLENBQUMsT0FBT0csQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFsQyxjQUFlLEdBQUd5QixTQUFTO2dCQUNoQyxJQUFJLENBQUNjLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1PLGlCQUFpQkEsQ0FBQztjQUFFN0IsU0FBUztjQUFFdEI7WUFBWSxDQUFFO2NBQ2xELElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFLLGNBQWUsR0FBRyxtQkFBbUI7Z0JBQzFDLElBQUksQ0FBQ3VDLFFBQVEsR0FBRyxJQUFJO2dCQUVwQixJQUFJLElBQUksQ0FBQyxDQUFBbEIsbUJBQW9CLENBQUMwQixHQUFHLENBQUNwRCxZQUFZLENBQUMsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFBMEIsbUJBQW9CLENBQUNuQyxHQUFHLENBQUNTLFlBQVksQ0FBQztnQkFFbkcsTUFBTWtELElBQUksR0FBRyxNQUFNLElBQUksQ0FBQ3BELEtBQUssQ0FBQ3FELGlCQUFpQixDQUFDO2tCQUFFN0IsU0FBUztrQkFBRXRCO2dCQUFZLENBQUUsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLENBQUEwQixtQkFBb0IsQ0FBQzJCLEdBQUcsQ0FBQy9CLFNBQVMsRUFBRTRCLElBQUksQ0FBQzVCLFNBQVMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDeEIsS0FBSyxDQUFDNkMsSUFBSTtnQkFDZixJQUFJLENBQUMsQ0FBQTdDLEtBQU0sQ0FBQ3dCLFNBQVMsR0FBRzRCLElBQUksQ0FBQzVCLFNBQVM7Z0JBRXRDLElBQUksQ0FBQyxDQUFBdEIsWUFBYSxHQUFHLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxDQUFBQyxvQkFBcUIsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQ2tDLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUF0QyxLQUFNLENBQUN3QixTQUFTO2VBQzVCLENBQUMsT0FBT2lCLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBbEMsY0FBZSxHQUFHeUIsU0FBUztnQkFDaEMsSUFBSSxDQUFDYyxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNVSx3QkFBd0JBLENBQUN0QixLQUFLO2NBQ25DLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUEzQixjQUFlLEdBQUcsaUJBQWlCO2dCQUN4QyxJQUFJLENBQUNrRCxhQUFhLEdBQUcsSUFBSTtnQkFDekIsT0FBTyxNQUFNLElBQUksQ0FBQ3pELEtBQUssQ0FBQzBELG1CQUFtQixDQUFDeEIsS0FBSyxDQUFDO2VBQ2xELENBQUMsT0FBT08sQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFsQyxjQUFlLEdBQUd5QixTQUFTO2dCQUNoQyxJQUFJLENBQUN5QixhQUFhLEdBQUcsS0FBSzs7WUFFNUI7O1VBQ0E5RCxPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5S0QsSUFBQXlFLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBaUYsTUFBQSxHQUFBakYsT0FBQTtVQUVNLFNBQVVrRixhQUFhQSxDQUFDO1lBQUVDLEtBQUs7WUFBRW5CO1VBQUssQ0FBaUQ7WUFDNUY7WUFFQSxPQUFPZ0IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0osTUFBQSxDQUFBSyxLQUFLO2NBQUNDLE9BQU8sRUFBQztZQUFPLEdBQUVKLEtBQUssQ0FBQ25CLEtBQUssQ0FBQyxDQUFTO1VBQ3JEOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1BBLElBQUFnQixNQUFBLEdBQUFoRixPQUFBO1VBRUEsSUFBQXdGLFdBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQVFNLFNBQVUwRixXQUFXQSxDQUFDO1lBQUVDLFdBQVcsR0FBRyxNQUFNO1lBQUVDLFFBQVE7WUFBRUMsUUFBUSxHQUFHLEtBQUs7WUFBRUMsUUFBUSxHQUFHO1VBQUksQ0FBZ0I7WUFDOUcsTUFBTTtjQUFFWCxLQUFLO2NBQUVZLFVBQVU7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNQyxVQUFVLEdBQUdmLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ1IsV0FBVyxDQUFDO1lBRTdDLE9BQ0NYLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUNFUyxRQUFRLElBQ1JkLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUFDQyxTQUFTLEVBQUMsY0FBYztjQUFDZCxPQUFPLEVBQUMsU0FBUztjQUFDZSxRQUFRO2NBQUNDLE9BQU8sRUFBRUEsQ0FBQSxLQUFNUixVQUFVLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQUMsR0FDaEdiLEtBQUssQ0FBQ2dCLE9BQU8sQ0FBQ0ssSUFBSSxDQUVwQixFQUNEeEIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csV0FBQSxDQUFBWSxNQUFNO2NBQ05DLFNBQVMsRUFBQyxjQUFjO2NBQ3hCN0MsSUFBSSxFQUFDLFFBQVE7Y0FDYitCLE9BQU8sRUFBQyxTQUFTO2NBQ2pCZ0IsT0FBTyxFQUFFWCxRQUFRO2NBQ2pCQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJZLE1BQU0sRUFBQztZQUFJLEdBRVZQLFVBQVUsQ0FDSCxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFRLEdBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBZ0YsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTJHLE9BQUEsR0FBQTNHLE9BQUE7VUFDTztVQUFVLFNBQVU0RyxNQUFNQSxDQUFDO1lBQUVDLFVBQVUsR0FBRztVQUFLLENBQUU7WUFDdkQsTUFBTTtjQUFFeEcsS0FBSztjQUFFOEU7WUFBSyxDQUFFLEdBQUcsSUFBQU0sUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUUzQyxNQUFNSixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFeEYsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDbUMsSUFBSSxLQUFLO1lBQU8sQ0FBRTtZQUUzRCxPQUNDd0IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsa0JBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNxQixHQUFBLENBQUFJLFVBQVU7Y0FDVkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ0osT0FBQSxDQUFBdkIsT0FBTSxDQUFDNEIsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUM5QixLQUFLLENBQUM0QixVQUFVLENBQUNHLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQy9CLEtBQUssQ0FBQzRCLFVBQVUsQ0FBQ0ksVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNqQyxHQUVBOUcsS0FBSyxDQUFDaUIsS0FBSyxJQUFJMEQsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQVUsT0FBTyxPQUFHLENBQ2YsRUFDWlAsVUFBVSxJQUNWN0IsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQVcsU0FBUztjQUFDQyxLQUFLLEVBQUVuQyxLQUFLLENBQUNtQztZQUFLLEdBQzVCdEMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQWEsWUFBWSxRQUFFcEMsS0FBSyxDQUFDcUMsU0FBUyxDQUFnQixDQUUvQyxDQUNRO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JNLFNBQVVDLFVBQVVBLENBQUN0QyxLQUFLO1lBQy9CLE9BQU87Y0FDTjFDLFFBQVEsRUFBRSxDQUNULENBQUMwQyxLQUFLLENBQUMxQyxRQUFRLENBQUNpRixNQUFNLEVBQUV2QyxLQUFLLENBQUMxQyxRQUFRLENBQUNpRixNQUFNLENBQUMsRUFDOUMsQ0FBQ3ZDLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQ2tGLFVBQVUsRUFBRXhDLEtBQUssQ0FBQzFDLFFBQVEsQ0FBQ2tGLFVBQVUsQ0FBQyxFQUN0RCxDQUFDeEMsS0FBSyxDQUFDMUMsUUFBUSxDQUFDbUYsT0FBTyxFQUFFekMsS0FBSyxDQUFDMUMsUUFBUSxDQUFDbUYsT0FBTyxDQUFDLENBQ2hEO2NBQ0RsRixRQUFRLEVBQUUsQ0FDVCxDQUFDLElBQUksRUFBRXlDLEtBQUssQ0FBQzBDLFlBQVksQ0FBQ0MsS0FBSyxDQUFDLEVBQ2hDLENBQUMsSUFBSSxFQUFFM0MsS0FBSyxDQUFDMEMsWUFBWSxDQUFDRSxRQUFRLENBQUMsRUFDbkMsQ0FBQyxJQUFJLEVBQUU1QyxLQUFLLENBQUMwQyxZQUFZLENBQUNHLFFBQVEsQ0FBQyxDQUNuQztjQUNEQyxRQUFRLEVBQUUsQ0FDVCxDQUFDLElBQUksRUFBRTlDLEtBQUssQ0FBQytDLFNBQVMsQ0FBQ0MsRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFaEQsS0FBSyxDQUFDK0MsU0FBUyxDQUFDRSxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUVqRCxLQUFLLENBQUMrQyxTQUFTLENBQUNHLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRWxELEtBQUssQ0FBQytDLFNBQVMsQ0FBQ0ksRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFbkQsS0FBSyxDQUFDK0MsU0FBUyxDQUFDSyxFQUFFLENBQUM7YUFFM0I7VUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQXZELE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBd0YsV0FBQSxHQUFBeEYsT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQXdJLFFBQUEsR0FBQXhJLE9BQUE7VUFDTSxTQUFVeUksV0FBV0EsQ0FBQztZQUFFckcsSUFBSTtZQUFFc0csUUFBUTtZQUFFdkcsS0FBSztZQUFFSSxRQUFRLEdBQUc7VUFBQyxDQUFFO1lBQ2xFLE1BQU07Y0FBRTRDLEtBQUs7Y0FBRTlFO1lBQUssQ0FBRSxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1KLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUV4RixLQUFLLENBQUM4RCxRQUFRLElBQUk5RCxLQUFLLENBQUNnQixLQUFLLENBQUM4QztZQUFRLENBQUU7WUFDckUsTUFBTU0sSUFBSSxHQUFHLElBQUErRCxRQUFBLENBQUFmLFVBQVUsRUFBQ3RDLEtBQUssQ0FBQztZQUU5QixNQUFNd0QsTUFBTSxHQUFHbEUsSUFBSSxDQUFDckMsSUFBSSxDQUFDLENBQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUNFLEtBQUssRUFBRUUsS0FBSyxDQUFDLEVBQUV5RyxLQUFLLEtBQ25ENUQsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csV0FBQSxDQUFBWSxNQUFNO2NBQUNoRSxJQUFJLEVBQUVBLElBQUk7Y0FBQSxHQUFNeUQsUUFBUTtjQUFBLGNBQWMrQyxLQUFLO2NBQUVyQyxPQUFPLEVBQUVtQyxRQUFRO2NBQUVHLEdBQUcsRUFBRUQsS0FBSztjQUFFM0csS0FBSyxFQUFFQTtZQUFLLEdBQzlGRSxLQUFLLENBRVAsQ0FBQztZQUVGLE9BQ0M2QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDckIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT3lELE9BQU8sRUFBRTFHO1lBQUksR0FBR0QsS0FBSyxDQUFTLEVBQ3JDNkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csV0FBQSxDQUFBdUQsV0FBVztjQUFDeEcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTXNEO1lBQVEsR0FDM0M4QyxNQUFNLENBQ00sQ0FDVDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBM0QsTUFBQSxHQUFBaEYsT0FBQTtVQW1CTyxNQUFNZ0osYUFBYSxHQUFBaEksT0FBQSxDQUFBZ0ksYUFBQSxHQUFHaEUsTUFBQSxDQUFBSSxPQUFLLENBQUM2RCxhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNaEQsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWpCLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEQsVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQ2hJLE9BQUEsQ0FBQWlGLGdCQUFBLEdBQUFBLGdCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCdEUsSUFBQWpCLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBbUosYUFBQSxHQUFBbkosT0FBQTtVQUVNLFNBQVVvSixXQUFXQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUM7VUFBRyxJQUF5QjtZQUFFRCxRQUFRLEVBQUUsSUFBSTtZQUFFQyxHQUFHLEVBQUU7VUFBRSxDQUFFO1lBQzlGLE9BQ0N0RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEQsYUFBQSxDQUFBSSxNQUFNLENBQUNDLEdBQUc7Y0FDVm5ELFNBQVMsRUFBQyxtQkFBbUI7Y0FDN0JvRCxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWGxILFFBQVEsRUFBRSxHQUFHO2tCQUNibUgsS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWGxILFFBQVEsRUFBRTtpQkFDVjtnQkFDRGdILE9BQU8sRUFBRTs7WUFDVCxHQUVBTCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QkEsSUFBQXJFLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBZ0ssWUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVWlLLFVBQVVBLENBQUE7WUFDekIsTUFBTTtjQUNMOUUsS0FBSztjQUNMOUUsS0FBSztjQUNMOEUsS0FBSyxFQUFFO2dCQUFFK0UsTUFBTSxFQUFFQztjQUFNO1lBQUUsQ0FDekIsR0FBRyxJQUFBMUUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUVtRSxTQUFTO2NBQUVySDtZQUFNLENBQUUsR0FBRyxJQUFBMEMsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUVoRCxJQUFJMUQsUUFBUSxHQUFHO2NBQUVOLEtBQUssRUFBRSxFQUFFO2NBQUVFLEtBQUssRUFBRWdJLE1BQU0sQ0FBQ0UsTUFBTSxDQUFDQztZQUFNLENBQUU7WUFDekQsTUFBTTVCLFFBQVEsR0FBRzZCLEtBQUssSUFDckJILFNBQVMsQ0FBQ3JILE1BQU0sSUFBRztjQUNsQixPQUFPO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVOLFFBQVEsRUFBRThILEtBQUssQ0FBQ3RJO2NBQUssQ0FBRTtZQUM1QyxDQUFDLENBQUM7WUFDSCxNQUFNdUksT0FBTyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQ2tGLE1BQU0sQ0FBQyxDQUFDdEksR0FBRyxDQUFDNEksSUFBSSxJQUFHO2NBQ3BEcEksUUFBUSxHQUFHb0ksSUFBSSxLQUFLNUgsTUFBTSxDQUFDTixRQUFRLEdBQUc7Z0JBQUVSLEtBQUssRUFBRTBJLElBQUk7Z0JBQUV4SSxLQUFLLEVBQUVnRCxLQUFLLENBQUNrRixNQUFNLENBQUNNLElBQUk7Y0FBQyxDQUFFLEdBQUdwSSxRQUFRO2NBQzNGLE9BQU87Z0JBQUVOLEtBQUssRUFBRTBJLElBQUk7Z0JBQUV4SSxLQUFLLEVBQUVnRCxLQUFLLENBQUNrRixNQUFNLENBQUNNLElBQUk7Y0FBQyxDQUFFO1lBQ2xELENBQUMsQ0FBQztZQUVGLE1BQU05RSxRQUFRLEdBQUc7Y0FBRStFLFVBQVUsRUFBRXZLLEtBQUssQ0FBQ2lCO1lBQUssQ0FBRTtZQUU1QyxPQUNDMEQsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsY0FDQ0wsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBT3lELE9BQU8sRUFBQztZQUFFLEdBQUVxQixNQUFNLENBQUNFLE1BQU0sQ0FBQ2xJLEtBQUssQ0FBUyxFQUMvQzZDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxZQUFBLENBQUFhLFdBQVc7Y0FBQ0MsWUFBWSxFQUFFdkksUUFBUTtjQUFFSCxJQUFJLEVBQUMsVUFBVTtjQUFDb0ksT0FBTyxFQUFFQSxPQUFPO2NBQUU5QixRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNN0M7WUFBUSxFQUFJLENBQ3RHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUFiLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBZ0ssWUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVStLLGlCQUFpQkEsQ0FBQTtZQUNoQyxNQUFNO2NBQUUxSyxLQUFLO2NBQUU4RSxLQUFLO2NBQUVwQyxNQUFNO2NBQUVxSDtZQUFTLENBQUUsR0FBRyxJQUFBM0UsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUU5RCxNQUFNSixRQUFRLEdBQUc7Y0FBRStFLFVBQVUsRUFBRXZLLEtBQUssQ0FBQ2lCO1lBQUssQ0FBRTtZQUM1QyxNQUFNb0gsUUFBUSxHQUFHNkIsS0FBSyxJQUFHO2NBQ3hCSCxTQUFTLENBQUNySCxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRThFLFlBQVksRUFBRTBDLEtBQUssQ0FBQ3RJLEtBQUs7Z0JBQUUrSSxlQUFlLEVBQUVULEtBQUssQ0FBQ1M7Y0FBZSxDQUFFLENBQUMsQ0FBQztZQUN4RyxDQUFDO1lBQ0QsSUFBSUMsYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSTFJLFFBQVEsR0FBVyxDQUFDO1lBQ3hCLElBQUlRLE1BQU0sRUFBRW1JLGFBQWEsRUFBRUQsYUFBYSxHQUFHRSxRQUFRLENBQUNwSSxNQUFNLENBQUM4RSxZQUFZLENBQUM7WUFDeEUsSUFBSTlFLE1BQU0sRUFBRThFLFlBQVksRUFBRWUsS0FBSyxFQUFFckcsUUFBUSxHQUFHNEksUUFBUSxDQUFDcEksTUFBTSxDQUFDOEUsWUFBWSxDQUFDZSxLQUFLLENBQUM7WUFDL0UsTUFBTTRCLE9BQU8sR0FBRyxDQUNmO2NBQUV2SSxLQUFLLEVBQUUsRUFBRTtjQUFFRSxLQUFLLEVBQUVnRCxLQUFLLENBQUMwQyxZQUFZLENBQUNDLEtBQUs7Y0FBRWtELGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDbEU7Y0FBRS9JLEtBQUssRUFBRSxFQUFFO2NBQUVFLEtBQUssRUFBRWdELEtBQUssQ0FBQzBDLFlBQVksQ0FBQ0UsUUFBUTtjQUFFaUQsZUFBZSxFQUFFO1lBQUMsQ0FBRSxFQUNyRTtjQUFFL0ksS0FBSyxFQUFFLEVBQUU7Y0FBRUUsS0FBSyxFQUFFZ0QsS0FBSyxDQUFDMEMsWUFBWSxDQUFDRyxRQUFRO2NBQUVnRCxlQUFlLEVBQUU7WUFBQyxDQUFFLENBQ3JFO1lBQ0QsSUFBSWhGLE9BQU8sR0FBRyxFQUFFO1lBQ2hCLElBQUlqRCxNQUFNLENBQUNMLFFBQVEsRUFBRTtjQUNwQnNELE9BQU8sR0FBR3dFLE9BQU8sQ0FBQ1ksSUFBSSxDQUFDcEosSUFBSSxJQUFJQSxJQUFJLENBQUNDLEtBQUssS0FBS2MsTUFBTSxDQUFDTCxRQUFRLENBQUM7O1lBRy9ELE9BQ0NzQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxjQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFPeUQsT0FBTyxFQUFDO1lBQUUsR0FBRTNELEtBQUssQ0FBQ2tHLElBQUksQ0FBQzNJLFFBQVEsQ0FBUyxFQUMvQ3NDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUMyRSxZQUFBLENBQUFhLFdBQVc7Y0FBQ0MsWUFBWSxFQUFFOUUsT0FBTztjQUFFMEMsUUFBUSxFQUFFQSxRQUFRO2NBQUV0RyxJQUFJLEVBQUMsVUFBVTtjQUFBLEdBQUt5RCxRQUFRO2NBQUUyRSxPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUNyRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBeEYsTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUFzTCxLQUFBLEdBQUF0TCxPQUFBO1VBQ0EsSUFBQXlGLFFBQUEsR0FBQXpGLE9BQUE7VUFDQSxJQUFBbUosYUFBQSxHQUFBbkosT0FBQTtVQUNBLElBQUF1TCxNQUFBLEdBQUF2TCxPQUFBO1VBQ00sU0FBVXdMLGNBQWNBLENBQUM7WUFBRUM7VUFBUyxDQUFFO1lBQzNDLE1BQU07Y0FDTDFJLE1BQU07Y0FDTm9DLEtBQUssRUFBRTtnQkFDTitFLE1BQU0sRUFBRTtrQkFBRXdCLFFBQVE7a0JBQUU3SSxTQUFTLEVBQUVzQztnQkFBSztjQUFFLENBQ3RDO2NBQ0R1RCxRQUFRO2NBQ1JySTtZQUFLLENBQ0wsR0FBRyxJQUFBb0YsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV0QixPQUNDakIsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2dCLFNBQVMsRUFBQztZQUFpQixHQUMvQnJCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNpRyxLQUFBLENBQUFLLFFBQVE7Y0FDUmpELFFBQVEsRUFBRUEsUUFBUTtjQUNsQnpHLEtBQUssRUFBRWMsTUFBTSxDQUFDRixTQUFTO2NBQ3ZCVCxJQUFJLEVBQUMsV0FBVztjQUNoQndKLFdBQVcsRUFBRXpHLEtBQUssQ0FBQzBHLFFBQVE7Y0FDM0JDLE9BQU87Y0FDUEMsU0FBUyxFQUFFO1lBQUcsRUFDYixFQUNETixTQUFTLElBQ1R6RyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOEQsYUFBQSxDQUFBSSxNQUFNLENBQUNDLEdBQUc7Y0FDVm5ELFNBQVMsRUFBQyxjQUFjO2NBQ3hCb0QsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hsSCxRQUFRLEVBQUU7OztZQUVYLEdBRUFnSixRQUFRLENBQUN4SCxJQUFJLEUsS0FBRWMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tHLE1BQUEsQ0FBQVMsSUFBSTtjQUFDQyxJQUFJLEVBQUM7WUFBTyxFQUFHLENBRXRDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQWpILE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBZ0ssWUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVWtNLGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUNML0csS0FBSyxFQUFFO2dCQUFFK0UsTUFBTSxFQUFFQztjQUFNLENBQUU7Y0FDekI5SixLQUFLLEVBQUU7Z0JBQUV3QjtjQUFVLENBQUU7Y0FDckJ4QjtZQUFLLENBQ0wsR0FBRyxJQUFBb0YsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNO2NBQUVtRSxTQUFTO2NBQUVySDtZQUFNLENBQUUsR0FBRyxJQUFBMEMsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUVoRCxJQUFJa0csYUFBYSxHQUFHO2NBQUVsSyxLQUFLLEVBQUUsRUFBRTtjQUFFRSxLQUFLLEVBQUVnSSxNQUFNLENBQUNpQyxPQUFPLENBQUM5QjtZQUFNLENBQUU7WUFFL0QsTUFBTStCLEtBQUssR0FBRztjQUFFekIsVUFBVSxFQUFFdkssS0FBSyxDQUFDd0IsVUFBVSxDQUFDeUssTUFBTSxLQUFLLENBQUMsSUFBSWpNLEtBQUssQ0FBQ2lCO1lBQUssQ0FBRTtZQUMxRSxNQUFNb0gsUUFBUSxHQUFHNkIsS0FBSyxJQUFHO2NBQ3hCLE1BQU1qSSxLQUFLLEdBQUdqQyxLQUFLLENBQUNxQixJQUFJLENBQUNJLGFBQWEsQ0FBQ3NKLElBQUksQ0FBQ3BKLElBQUksSUFBSUEsSUFBSSxDQUFDRSxFQUFFLEtBQUtxSSxLQUFLLENBQUN0SSxLQUFLLENBQUM7Y0FDNUVtSSxTQUFTLENBQUNySCxNQUFNLElBQUc7Z0JBQ2xCLE9BQU87a0JBQUUsR0FBR0EsTUFBTTtrQkFBRVQ7Z0JBQUssQ0FBRTtjQUM1QixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQzBDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGNBQ0NMLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU95RCxPQUFPLEVBQUM7WUFBRSxHQUFFcUIsTUFBTSxDQUFDaUMsT0FBTyxDQUFDakssS0FBSyxDQUFTLEVBQ2hENkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJFLFlBQUEsQ0FBQWEsV0FBVztjQUNYQyxZQUFZLEVBQUVxQixhQUFhO2NBQzNCL0osSUFBSSxFQUFDLE9BQU87Y0FDWm9JLE9BQU8sRUFBRW5LLEtBQUssQ0FBQ3dCLFVBQVU7Y0FDekI2RyxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkMkQ7WUFBSyxFQUNSLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQXJILE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBdU0sWUFBQSxHQUFBdk0sT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQTBHLEdBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBd00sTUFBQSxHQUFBeE0sT0FBQTtVQUNBLElBQUF5TSxhQUFBLEdBQUF6TSxPQUFBO1VBQ0EsSUFBQTBNLFVBQUEsR0FBQTFNLE9BQUE7VUFDQSxJQUFBMk0sVUFBQSxHQUFBM00sT0FBQTtVQUNBLElBQUE0TSxRQUFBLEdBQUE1TSxPQUFBO1VBQ0EsSUFBQXdGLFdBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBNk0sWUFBQSxHQUFBN00sT0FBQTtVQUNBLElBQUFtSixhQUFBLEdBQUFuSixPQUFBO1VBQ0EsSUFBQThNLE1BQUEsR0FBQTlNLE9BQUE7VUFDQSxJQUFBK00sZ0JBQUEsR0FBQS9NLE9BQUE7VUFFTSxTQUFVZ04sU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVqSyxNQUFNO2NBQUVpQixLQUFLO2NBQUVvRyxTQUFTO2NBQUUvSixLQUFLO2NBQUU4RSxLQUFLO2NBQUU3RCxLQUFLO2NBQUU2QztZQUFRLENBQUUsR0FBRyxJQUFBc0IsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0RixNQUFNLENBQUN2RixJQUFJLEVBQUV1TSxPQUFPLENBQUMsR0FBR2pJLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEgsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUN6QixTQUFTLEVBQUUwQixZQUFZLENBQUMsR0FBR25JLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEgsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUV2RCxNQUFNRSxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU1DLFVBQVUsR0FBRztnQkFBRSxHQUFHdEssTUFBTTtnQkFBRXVLLEtBQUssRUFBRTtjQUFXLENBQUU7Y0FDcERsRCxTQUFTLENBQUM7Z0JBQUUsR0FBR2lEO2NBQVUsQ0FBRSxDQUFDO2NBQzVCLE1BQU1oTixLQUFLLENBQUM2RCxJQUFJLENBQUM7Z0JBQUUsR0FBR21KO2NBQVUsQ0FBRSxDQUFDO1lBQ3BDLENBQUM7WUFDRCxNQUFNekgsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILElBQUl0RSxLQUFLLElBQUlqQixLQUFLLENBQUNnQixLQUFLLENBQUNpTSxLQUFLLEtBQUssU0FBUyxFQUFFO2tCQUM3Q0wsT0FBTyxDQUFDLElBQUksQ0FBQztrQkFDYjs7Z0JBR0QsTUFBTTVNLEtBQUssQ0FBQzZELElBQUksQ0FBQztrQkFBRSxHQUFHbkIsTUFBTTtrQkFBRXVLLEtBQUssRUFBRTtnQkFBUyxDQUFFLENBQUM7Z0JBQ2pEVixRQUFBLENBQUFXLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRW5LLFNBQVMsRUFBRSwwQkFBMEJoRCxLQUFLLENBQUNnQixLQUFLLENBQUNhLEVBQUUsRUFBRSxDQUFDO2dCQUMvRWlMLFlBQVksQ0FBQyxJQUFJLENBQUM7ZUFDbEIsQ0FBQyxPQUFPckosQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBQ0QsTUFBTThHLFVBQVUsR0FBRyxDQUFDN0gsTUFBTSxDQUFDVCxLQUFLLElBQUksQ0FBQ1MsTUFBTSxDQUFDTixRQUFRLElBQUksQ0FBQ00sTUFBTSxDQUFDTCxRQUFRLElBQUksQ0FBQ0ssTUFBTSxDQUFDRixTQUFTO1lBQzdGa0IsT0FBTyxDQUFDMEosR0FBRyxDQUFDLEVBQUUsRUFBRXBOLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQ2lNLEtBQUssRUFBRWhNLEtBQUssQ0FBQztZQUN6QyxNQUFNYSxLQUFLLEdBQUc5QixLQUFLLENBQUNnQixLQUFLLENBQUNpTSxLQUFLLElBQUloTSxLQUFLLEdBQUc2RCxLQUFLLENBQUNnQixPQUFPLENBQUN1SCxRQUFRLEdBQUd2SSxLQUFLLENBQUNnQixPQUFPLENBQUNqQyxJQUFJO1lBQ3RGLE1BQU15SixlQUFlLEdBQUd4SSxLQUFLLENBQUN5SSxjQUFjLENBQUN2TixLQUFLLENBQUN1QixjQUFjLENBQUMsR0FDL0R1RCxLQUFLLENBQUM5RSxLQUFLLENBQUN1QixjQUFjLENBQUMsR0FDM0J1RCxLQUFLLENBQUMwSSxvQkFBb0I7WUFDN0IsT0FDQzdJLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQU1nQixTQUFTLEVBQUM7WUFBdUIsR0FDdENyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeUgsTUFBQSxDQUFBNUgsYUFBYTtjQUFDbEIsS0FBSyxFQUFFQSxLQUFLO2NBQUVtQixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3Q0gsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tILFlBQUEsQ0FBQW5ELFdBQVcsUUFDWHBFLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNnQixTQUFTLEVBQUM7WUFBVyxHQUM3QnJCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFnQixTQUFTLEVBQUM7WUFBb0IsR0FDckNyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLRixLQUFLLENBQUMrRSxNQUFNLENBQUM0RCxZQUFZLENBQUN4RyxLQUFLLENBQU0sRUFDMUN0QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxlQUFPRixLQUFLLENBQUMrRSxNQUFNLENBQUM0RCxZQUFZLENBQUNDLFFBQVEsQ0FBUSxDQUN6QyxFQUNUL0ksTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzhELGFBQUEsQ0FBQTZFLGVBQWUsUUFDZmhKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVNnQixTQUFTLEVBQUM7WUFBNkIsR0FDL0NyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUgsVUFBQSxDQUFBUixjQUFjLE9BQUcsRUFDbEJsSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsTUFBQSxDQUFBdkMsVUFBVSxPQUFHLEVBQ2RqRixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0gsYUFBQSxDQUFBMUIsaUJBQWlCLE9BQUcsQ0FDWixDQUNPLEVBQ2xCL0YsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2dCLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3JCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNzSCxVQUFBLENBQUFuQixjQUFjO2NBQUNDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLEVBQ3hDekcsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dILFlBQUEsQ0FBQW9CLG9CQUFvQixPQUFHLENBQ25CLENBQ0csRUFDVmpKLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGlCQUNDTCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FDTkMsU0FBUyxFQUFDLGNBQWM7Y0FDeEI3QyxJQUFJLEVBQUMsUUFBUTtjQUNicUMsUUFBUSxFQUFFK0UsVUFBVTtjQUNwQnJGLE9BQU8sRUFBQyxTQUFTO2NBQ2pCZ0IsT0FBTyxFQUFFWDtZQUFRLEdBRWhCekQsS0FBSyxDQUNFLENBQ0QsQ0FDSSxFQUNkNkMsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQXdILGdCQUFnQjtjQUFDL0osUUFBUSxFQUFFQTtZQUFRLEdBQ25DYSxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUIsR0FBQSxDQUFBeUgsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDeEwsT0FBTyxFQUFFK0s7WUFBZSxFQUFJLENBQ3ZDLEVBQ2xCak4sSUFBSSxJQUFJc0UsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQzBILGdCQUFBLENBQUFzQix5QkFBeUI7Y0FBQ0MsT0FBTyxFQUFFQSxDQUFBLEtBQU1yQixPQUFPLENBQUMsS0FBSyxDQUFDO2NBQUVHLE1BQU0sRUFBRUE7WUFBTSxFQUFJLENBQy9FO1VBRVQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEZBLElBQUFwSSxNQUFBLEdBQUFoRixPQUFBO1VBRUEsSUFBQXdGLFdBQUEsR0FBQXhGLE9BQUE7VUFDQSxJQUFBdU8sS0FBQSxHQUFBdk8sT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBQ0EsSUFBQXdPLEtBQUEsR0FBQXhPLE9BQUE7VUFFTSxTQUFVaU8sb0JBQW9CQSxDQUFDLEVBQUU7WUFDdEMsTUFBTTtjQUNMOUksS0FBSyxFQUFFO2dCQUNOK0UsTUFBTSxFQUFFO2tCQUFFdUUsV0FBVyxFQUFFdEo7Z0JBQUssQ0FBRTtnQkFDOUJnQixPQUFPLEVBQUV1STtjQUFXLENBQ3BCO2NBQ0RyTyxLQUFLO2NBQ0wwQyxNQUFNO2NBQ056QixLQUFLO2NBQ0w4STtZQUFTLENBQ1QsR0FBRyxJQUFBM0UsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUMxRCxRQUFRLEVBQUVvTSxXQUFXLENBQUMsR0FBRzNKLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEgsUUFBUSxDQUFDLElBQUl6TCxHQUFHLEVBQUUsQ0FBQztZQUV6RCxNQUFNbU4sT0FBTyxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMxQixNQUFNdk8sS0FBSyxDQUFDbUUsd0JBQXdCLENBQUM7Z0JBQUUzQixTQUFTLEVBQUVFLE1BQU0sQ0FBQ0Y7Y0FBUyxDQUFFLENBQUM7WUFDdEUsQ0FBQztZQUVELE1BQU1nTSxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFLO2NBQzlCekUsU0FBUyxDQUFDckgsTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUV4QixZQUFZLEVBQUUsSUFBSUUsR0FBRztjQUFFLENBQUUsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxNQUFNcU4sS0FBSyxHQUFHLE1BQU12RSxLQUFLLElBQUc7Y0FDM0IsTUFBTWhILEtBQUssR0FBRztnQkFDYlYsU0FBUyxFQUFFRSxNQUFNLENBQUNGLFNBQVM7Z0JBQzNCdEIsWUFBWSxFQUFFd04sS0FBSyxDQUFDQyxJQUFJLENBQUN6TSxRQUFRLENBQUMsQ0FBQ1IsR0FBRyxDQUFFa04sQ0FBUyxJQUFLNU8sS0FBSyxDQUFDa0IsWUFBWSxDQUFDME4sQ0FBQyxDQUFDO2VBQzNFO2NBQ0QsTUFBTTVPLEtBQUssQ0FBQ3FFLGlCQUFpQixDQUFDbkIsS0FBSyxDQUFDO2NBQ3BDb0wsV0FBVyxDQUFDLElBQUlsTixHQUFHLEVBQUUsQ0FBQztjQUN0QjJJLFNBQVMsQ0FBQ3JILE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFRixTQUFTLEVBQUV4QyxLQUFLLENBQUNnQixLQUFLLENBQUN3QjtjQUFTLENBQUUsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxNQUFNOEYsTUFBTSxHQUFHLEVBQUU7WUFDakIsSUFBSXRJLEtBQUssQ0FBQ2tCLFlBQVksQ0FBQytLLE1BQU0sRUFBRTtjQUM5QjNELE1BQU0sQ0FBQ3VHLElBQUksQ0FDVmxLLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNMLE1BQUEsQ0FBQUksT0FBSyxDQUFDK0osUUFBUTtnQkFBQ3RHLEdBQUcsRUFBQztjQUFjLEdBQ2pDN0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tKLEtBQUEsQ0FBQWEsSUFBSTtnQkFDSi9JLFNBQVMsRUFBQyxrQkFBa0I7Z0JBQzVCOUMsS0FBSyxFQUFFO2tCQUFFaEIsUUFBUTtrQkFBRW9NO2dCQUFXLENBQUU7Z0JBQ2hDVSxPQUFPLEVBQUViLEtBQUEsQ0FBQWMsd0JBQXdCO2dCQUNqQ0MsS0FBSyxFQUFFbFAsS0FBSyxDQUFDa0I7Y0FBWSxFQUN4QixDQUNjLENBQ2pCOztZQUVGLE1BQU1nRixPQUFPLEdBQUdsRyxLQUFLLENBQUNrQixZQUFZLENBQUMrSyxNQUFNLEdBQUd1QyxpQkFBaUIsR0FBR0QsT0FBTztZQUN2RSxNQUFNWSxJQUFJLEdBQUcsQ0FBQ25QLEtBQUssQ0FBQ2tCLFlBQVksQ0FBQytLLE1BQU0sR0FBR29DLFdBQVcsQ0FBQ2UsT0FBTyxHQUFHZixXQUFXLENBQUNnQixpQkFBaUI7WUFFN0YsT0FDQzFLLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUFMLE1BQUEsQ0FBQUksT0FBQSxDQUFBK0osUUFBQSxRQUNFeEcsTUFBTSxFQUNQM0QsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUE7Y0FBS2dCLFNBQVMsRUFBQztZQUFpQyxHQUMvQ3JCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNHLFdBQUEsQ0FBQVksTUFBTTtjQUFDUCxRQUFRLEVBQUUsQ0FBQ3ZFLEtBQUs7Y0FBRWlGLE9BQU8sRUFBRUEsT0FBTztjQUFFaEIsT0FBTyxFQUFDLFNBQVM7Y0FBQ2UsUUFBUTtZQUFBLEdBQ3BFa0osSUFBSSxDQUNHLEVBQ1JuUCxLQUFLLENBQUNtQixvQkFBb0IsQ0FBQ21PLElBQUksR0FBRyxDQUFDLElBQ25DM0ssTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQUwsTUFBQSxDQUFBSSxPQUFBLENBQUErSixRQUFBLFFBQ0NuSyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FBQ2IsT0FBTyxFQUFDLFNBQVM7Y0FBQ2dCLE9BQU8sRUFBRXVJO1lBQUssR0FDdENKLFdBQVcsQ0FBQ2tCLGdCQUFnQixDQUNyQixDQUVWLENBQ0ksQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hFQSxJQUFBNUssTUFBQSxHQUFBaEYsT0FBQTtVQUNBLElBQUF5RixRQUFBLEdBQUF6RixPQUFBO1VBRU0sU0FBVXNQLHdCQUF3QkEsQ0FBQztZQUFFMUcsS0FBSztZQUFFbkUsSUFBSTtZQUFFbEIsS0FBSyxFQUFFO2NBQUVoQixRQUFRO2NBQUVvTTtZQUFXO1VBQUUsQ0FBRTtZQUN6RixNQUFNO2NBQUU1TCxNQUFNO2NBQUVxSCxTQUFTO2NBQUUvSjtZQUFLLENBQUUsR0FBRyxJQUFBb0YsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV2RCxNQUFNNEosUUFBUSxHQUFHdEYsS0FBSyxJQUFHO2NBQ3hCQSxLQUFLLENBQUN1RixlQUFlLEVBQUU7Y0FDdkIsTUFBTWxILEtBQUssR0FBR3VDLFFBQVEsQ0FBQ1osS0FBSyxDQUFDd0YsYUFBYSxDQUFDQyxPQUFPLENBQUNwSCxLQUFLLENBQUM7Y0FDekQsTUFBTXFILFFBQVEsR0FBRzFOLFFBQVE7Y0FDekIwTixRQUFRLENBQUN0TCxHQUFHLENBQUNpRSxLQUFLLENBQUMsR0FBR3FILFFBQVEsQ0FBQ0MsTUFBTSxDQUFDdEgsS0FBSyxDQUFDLEdBQUdxSCxRQUFRLENBQUNFLEdBQUcsQ0FBQ3ZILEtBQUssQ0FBQztjQUNsRXZJLEtBQUssQ0FBQ21CLG9CQUFvQixDQUFDMk8sR0FBRyxDQUFDdkgsS0FBSyxDQUFDO2NBQ3JDK0YsV0FBVyxDQUFDLElBQUlsTixHQUFHLENBQUN3TyxRQUFRLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTTNHLEdBQUcsR0FBRyxtQkFBbUIvRyxRQUFRLENBQUNvQyxHQUFHLENBQUNpRSxLQUFLLENBQUMsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBRXZFLE9BQ0M1RCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFFaUQsR0FBRztjQUFBLGNBQWNWLEtBQUs7Y0FBRXJDLE9BQU8sRUFBRXNKO1lBQVEsR0FDeEQ3SyxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQWUsR0FBRTVCLElBQUksQ0FBTyxDQUN0QztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCQSxJQUFBMkwsS0FBQSxHQUFBcFEsT0FBQTtVQUNBLElBQUFxUSxNQUFBLEdBQUFyUSxPQUFBO1VBR0EsSUFBQXNRLE9BQUEsR0FBQXRRLE9BQUE7VUFDQSxJQUFBdVEsZUFBQSxHQUFBdlEsT0FBQTtVQUtBLElBQUF3USxPQUFBLEdBQUF4USxPQUFBO1VBRU87VUFBVSxTQUNSUyxJQUFJQSxDQUFDZ1EsS0FBSztZQUNsQixNQUFNO2NBQUVwUTtZQUFLLENBQUUsR0FBNEJvUSxLQUFLO1lBQ2hELE1BQU0sQ0FBQ0MsVUFBVSxFQUFFdkwsS0FBSyxDQUFDLEdBQUcsSUFBQW1MLE9BQUEsQ0FBQUssUUFBUSxFQUFDSixlQUFBLENBQUFLLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzFNLFFBQVEsRUFBRTJNLFdBQVcsQ0FBQyxHQUFHVixLQUFLLENBQUNsRCxRQUFRLENBQUM3TSxLQUFLLENBQUM4RCxRQUFRLENBQUM7WUFDOUQsTUFBTSxHQUFHNE0sVUFBVSxDQUFDLEdBQUdYLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFekMsSUFBQW1ELE1BQUEsQ0FBQVcsU0FBUyxFQUFDLENBQUMzUSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCMFEsVUFBVSxDQUFDLEVBQUUsQ0FBQztjQUNkRCxXQUFXLENBQUN6USxLQUFLLEVBQUVnQixLQUFLLEVBQUU4QyxRQUFRLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDdU0sVUFBVSxJQUFJLENBQUNyUSxLQUFLLENBQUNpRCxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUU5QyxJQUFJakQsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDaU0sS0FBSyxLQUFLLFdBQVcsRUFBRTtjQUN0QyxPQUNDOEMsS0FBQSxDQUFBL0ssYUFBQSxDQUFBK0ssS0FBQSxDQUFBakIsUUFBQSxRQUNDaUIsS0FBQSxDQUFBL0ssYUFBQTtnQkFBd0JuRCxFQUFFLEVBQUU3QixLQUFLLENBQUNnQixLQUFLLENBQUNhO2NBQUUsRUFBSSxDQUM1Qzs7WUFHTCxPQUFPa08sS0FBQSxDQUFBL0ssYUFBQSxDQUFDbUwsT0FBQSxDQUFBUyxNQUFNO2NBQUM1USxLQUFLLEVBQUVBO1lBQUssRUFBSTtVQUNoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsQ0EsSUFBQTJFLE1BQUEsR0FBQWhGLE9BQUE7VUFDQSxJQUFBa1IsTUFBQSxHQUFBbFIsT0FBQTtVQUNBLElBQUF3RixXQUFBLEdBQUF4RixPQUFBO1VBQ0EsSUFBQTBHLEdBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUNNLFNBQVVxTyx5QkFBeUJBLENBQUM7WUFBRUMsT0FBTztZQUFFbEI7VUFBTSxDQUFFO1lBQzVELE1BQU07Y0FBRWpJLEtBQUs7Y0FBRTlFLEtBQUs7Y0FBRTBDO1lBQU0sQ0FBRSxHQUFHLElBQUEwQyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ25ELE1BQU0sQ0FBQzlCLFFBQVEsRUFBRTJNLFdBQVcsQ0FBQyxHQUFHOUwsTUFBQSxDQUFBSSxPQUFLLENBQUM4SCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU1pRSxVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0hMLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU16USxLQUFLLENBQUN3RSx3QkFBd0IsQ0FBQztrQkFBRSxHQUFHOUI7Z0JBQU0sQ0FBRSxDQUFDO2dCQUNuRHFLLE1BQU0sRUFBRTtlQUNSLENBQUMsT0FBT3RKLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUZ04sV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE9BQ0M5TCxNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNkwsTUFBQSxDQUFBRSxLQUFLO2NBQUMxUSxJQUFJO2NBQUM0TixPQUFPLEVBQUVBO1lBQU8sR0FDM0J0SixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQTtjQUFLZ0IsU0FBUyxFQUFDO1lBQWUsR0FDN0JyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxhQUFLRixLQUFLLENBQUMrRSxNQUFNLENBQUNtSCxnQkFBZ0IsQ0FBQy9KLEtBQUssQ0FBTSxFQUM5Q3RDLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQUtnQixTQUFTLEVBQUM7WUFBTyxHQUNyQnJCLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLGVBQU9GLEtBQUssQ0FBQytFLE1BQU0sQ0FBQ21ILGdCQUFnQixDQUFDQyxXQUFXLENBQVEsQ0FDbkQsRUFDTnRNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBO2NBQVFnQixTQUFTLEVBQUM7WUFBMEMsR0FDM0RyQixNQUFBLENBQUFJLE9BQUEsQ0FBQUMsYUFBQSxDQUFDRyxXQUFBLENBQUFZLE1BQU07Y0FBQ2IsT0FBTyxFQUFDLFNBQVM7Y0FBQ2UsUUFBUTtjQUFDQyxPQUFPLEVBQUU0SztZQUFVLEdBQ3BEaE0sS0FBSyxDQUFDK0UsTUFBTSxDQUFDbUgsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQ0MsV0FBVyxDQUMxQyxFQUNUeE0sTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ0csV0FBQSxDQUFBWSxNQUFNO2NBQUNiLE9BQU8sRUFBQyxTQUFTO2NBQUNnQixPQUFPLEVBQUU2RztZQUFNLEdBQ3ZDakksS0FBSyxDQUFDK0UsTUFBTSxDQUFDbUgsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQ0UsTUFBTSxDQUNyQyxDQUNELENBQ0osRUFDTnpNLE1BQUEsQ0FBQUksT0FBQSxDQUFBQyxhQUFBLENBQUNxQixHQUFBLENBQUF3SCxnQkFBZ0I7Y0FBQy9KLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ2EsTUFBQSxDQUFBSSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FCLEdBQUEsQ0FBQXlILGVBQWU7Y0FBQ0MsSUFBSSxFQUFDLE1BQU07Y0FBQ3hMLE9BQU8sRUFBRXVDLEtBQUssQ0FBQytFLE1BQU0sQ0FBQ3dIO1lBQWdCLEVBQUksQ0FDckQsQ0FDWjtVQUVWOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBdEIsS0FBQSxHQUFBcFEsT0FBQTtVQUNBLElBQUFxUSxNQUFBLEdBQUFyUSxPQUFBO1VBQ0EsSUFBQTBHLEdBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBeUYsUUFBQSxHQUFBekYsT0FBQTtVQUNBLElBQUFzUSxPQUFBLEdBQUF0USxPQUFBO1VBQ0EsSUFBQXVRLGVBQUEsR0FBQXZRLE9BQUE7VUFDQSxJQUFBMlIsT0FBQSxHQUFBM1IsT0FBQTtVQUdBLElBQUFzTCxLQUFBLEdBQUF0TCxPQUFBO1VBRU87VUFBVSxTQUNSaVIsTUFBTUEsQ0FBQztZQUFFNVE7VUFBSyxDQUEyQjtZQUNqRCxNQUFNLENBQUNxUSxVQUFVLEVBQUV2TCxLQUFLLENBQUMsR0FBRyxJQUFBbUwsT0FBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxDQUFDMU0sUUFBUSxFQUFFMk0sV0FBVyxDQUFDLEdBQUdWLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQzdNLEtBQUssQ0FBQzhELFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUN5TixXQUFXLENBQUMsR0FBR3hCLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxHQUFHNkQsVUFBVSxDQUFDLEdBQUdYLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDbEgsT0FBTyxFQUFFRCxVQUFVLENBQUMsR0FBR3FLLEtBQUssQ0FBQ2xELFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDbkssTUFBTSxFQUFFcUgsU0FBUyxDQUFDLEdBQUdnRyxLQUFLLENBQUNsRCxRQUFRLENBQXNCN00sS0FBSyxDQUFDMEMsTUFBTSxDQUFDO1lBQzdFLE1BQU0sQ0FBQ2lCLEtBQUssRUFBRTZOLFFBQVEsQ0FBQyxHQUFHekIsS0FBSyxDQUFDbEQsUUFBUSxFQUFVO1lBQ2xELE1BQU0sQ0FBQzRFLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUczQixLQUFLLENBQUNsRCxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELElBQUFtRCxNQUFBLENBQUFXLFNBQVMsRUFBQyxDQUFDM1EsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjBRLFVBQVUsQ0FBQyxFQUFFLENBQUM7Y0FFZEQsV0FBVyxDQUFDelEsS0FBSyxFQUFFZ0IsS0FBSyxFQUFFOEMsUUFBUSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3VNLFVBQVUsSUFBSSxDQUFDclEsS0FBSyxDQUFDaUQsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDOUMsTUFBTW9GLFFBQVEsR0FBRzZCLEtBQUssSUFBRztjQUN4QkgsU0FBUyxDQUFDO2dCQUFFLEdBQUdySCxNQUFNO2dCQUFFLENBQUN3SCxLQUFLLENBQUN3RixhQUFhLENBQUMzTixJQUFJLEdBQUdtSSxLQUFLLENBQUN3RixhQUFhLENBQUM5TjtjQUFLLENBQUUsQ0FBQztZQUNoRixDQUFDO1lBRUQsTUFBTUEsS0FBSyxHQUFHO2NBQ2I1QixLQUFLO2NBQ0xxSSxRQUFRO2NBQ1J2RCxLQUFLO2NBQ0x5TSxXQUFXO2NBQ1g1TCxPQUFPO2NBQ1BELFVBQVU7Y0FDVi9CLEtBQUs7Y0FDTDZOLFFBQVE7Y0FDUjFOLFFBQVEsRUFBRUEsUUFBUSxJQUFJMk4sVUFBVTtjQUNoQ0MsYUFBYTtjQUNielEsS0FBSyxFQUFFakIsS0FBSyxDQUFDaUIsS0FBSztjQUNsQnlCLE1BQU07Y0FDTnFIO2FBQ0E7WUFDRCxNQUFNZCxHQUFHLEdBQUcsSUFBSW5GLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBRS9DLElBQUkwQyxVQUFVLEdBQUcsS0FBSztZQUV0QixPQUNDdUosS0FBQSxDQUFBL0ssYUFBQSxDQUFBK0ssS0FBQSxDQUFBakIsUUFBQSxRQUNDaUIsS0FBQSxDQUFBL0ssYUFBQSxDQUFDSSxRQUFBLENBQUF1RCxhQUFhLENBQUNnSixRQUFRO2NBQUMvUCxLQUFLLEVBQUVBO1lBQUssR0FDbkNtTyxLQUFBLENBQUEvSyxhQUFBLENBQUNzTSxPQUFBLENBQUEvSyxNQUFNO2NBQUN6QixLQUFLLEVBQUVBLEtBQUs7Y0FBRTBCLFVBQVUsRUFBRUE7WUFBVSxFQUFJLEVBQ2hEdUosS0FBQSxDQUFBL0ssYUFBQSxDQUFDcUIsR0FBQSxDQUFBdUwsYUFBYTtjQUFDNUwsU0FBUyxFQUFFaUQsR0FBRztjQUFFbkYsUUFBUSxFQUFFQSxRQUFRLElBQUksQ0FBQyxDQUFDOUQsS0FBSyxDQUFDZ0IsS0FBSyxFQUFFaUQsVUFBVSxDQUFDZ0k7WUFBTSxHQUNwRjhELEtBQUEsQ0FBQS9LLGFBQUEsQ0FBQ2lHLEtBQUEsQ0FBQTBCLFNBQVMsT0FBRyxDQUNFLENBQ1EsQ0FDdkI7VUFFTCJ9