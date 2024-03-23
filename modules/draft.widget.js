System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "framer-motion@10.18.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, bimport, __Bundle, __pkg, ims, Controller, Header, View, Wizard, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    Header: void 0,
    View: void 0,
    Wizard: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
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
    }, function (_aimpactAilearnApp0027ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0027ComponentsUi;
    }, function (_aimpactAilearnApp0027Config) {
      dependency_11 = _aimpactAilearnApp0027Config;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_18 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['pragmate-ui/list', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.27/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.27/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1626414526,
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
              this.#store.load(this.uri.qs.get('id'), this.uri.qs.get('activityId'));
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
        hash: 1361236331,
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
            #improvements;
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
                objective: '',
                language: this.#model.language
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
            clearImprovements() {
              this.#improvements = undefined;
              this.triggerEvent('change');
            }
            async load(id, activityId) {
              try {
                if (id && this.#model?.id === id) {
                  return;
                }
                const specs = {
                  type: 'draft',
                  id
                };
                this.#model = await _core.LearningModule.get(specs);
                this.#model.on('change', this.triggerEvent);
                if (id) this.#saved = true;
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
            /**
             * This method is used to get the improvements for the objective defined by the user
             *
             * It calls the model to get the improvements generated by the AI
             *
             * @param objective The original objective or idea defined by the user
             */
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
                this.#improvements = undefined;
                //@todo: review if improvementsSelected is really needed
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
        hash: 3586473301,
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
          var _htmlRender = require("./html-render");
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useModuleContext)();
            return _react.default.createElement("section", null, _react.default.createElement(_ui.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }, store.saved && _react.default.createElement(_ui.Battery, null)), store.saved && _react.default.createElement("div", {
              className: "notifications-bar center-items notifications--info"
            }, _react.default.createElement(_htmlRender.HtmlRender, null, texts.notifications.credits)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/components/html-render
      **********************************************/

      ims.set('./views/components/html-render', {
        hash: 3362016598,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlRender = HtmlRender;
          var _react = require("react");
          function HtmlRender({
            children,
            tag = 'span'
          }) {
            const Control = tag;
            return _react.default.createElement(Control, {
              dangerouslySetInnerHTML: {
                __html: children
              }
            });
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/components/options
      ******************************************/

      ims.set('./views/components/options', {
        hash: 369455942,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.getOptions = getOptions;
          function getOptions(texts) {
            return {
              audience: [[texts.audience.school, texts.audience.school], [texts.audience.university, texts.audience.university], [texts.audience.company, texts.audience.company]],
              duration: [['15', texts.duration.brief], ['45', texts.duration.standard], ['60', texts.duration.extended]],
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
        hash: 3616557354,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSuggestionsContext = exports.useModuleContext = exports.SuggestionsContext = exports.ModuleContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
          const SuggestionsContext = exports.SuggestionsContext = _react.default.createContext({});
          const useSuggestionsContext = () => _react.default.useContext(SuggestionsContext);
          exports.useSuggestionsContext = useSuggestionsContext;
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
        hash: 1086093448,
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
                audience: event.target.value
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

      /********************************************
      INTERNAL MODULE: ./views/form/fields/language
      ********************************************/

      ims.set('./views/form/fields/language', {
        hash: 1201429201,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function LanguageField() {
            const {
              texts,
              store,
              texts: {
                wizard: wTexts
              },
              setValues
            } = (0, _context.useModuleContext)();
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
            const onChange = event => setValues(values => ({
              ...values,
              language: event.target.value
            }));
            const options = ['en', 'es'].map(item => ({
              value: item,
              label: texts.languages[item]
            }));
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              defaultValue: selected,
              value: store.model.language,
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
        hash: 1461453877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DurationField = DurationField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function DurationField() {
            const {
              store,
              texts,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            const disabled = {
              isDisabled: store.saved
            };
            const options = [{
              value: 15,
              label: texts.duration.brief,
              totalActivities: 3
            }, {
              value: 45,
              label: texts.duration.standard,
              totalActivities: 5
            }, {
              value: 60,
              label: texts.duration.extended,
              totalActivities: 7
            }];
            const onChange = event => {
              const data = options.find(item => item.value === event.target.value);
              setValues(values => ({
                ...values,
                duration: event.target.value,
                totalActivities: data.totalActivities
              }));
            };
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.duration);
            if (values?.duration?.index) selected = parseInt(values.duration.index);
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
        hash: 2174441261,
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
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships.length === 0 || store.saved
            };
            const onChange = event => {
              const owner = store.user.organizations.find(item => item.id === event.target.value);
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
              value: value,
              defaultOption: defaultOption,
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
        hash: 362922468,
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
          var _error = require("../components/error");
          var _modalActivities = require("../modal-activities");
          var _language = require("./fields/language");
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
            const onClose = () => setShow(false);
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective || !values.language;
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const processMessages = texts.hasOwnProperty(store.currentProcess) ? texts[store.currentProcess] : texts.objectiveSuggestions;
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
            return _react.default.createElement("form", {
              className: "form-wizard-container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement(_animatedDiv.AnimatedDiv, null, _react.default.createElement("section", {
              className: "form-body"
            }, _react.default.createElement("header", {
              className: "wizard-form-header"
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_language.LanguageField, null), _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement("div", {
              className: "form-wizard__objective-section"
            }, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }))), _react.default.createElement(_suggestions.ObjectiveSuggestions, null), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary",
              onClick: onSubmit
            }, label))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })), _react.default.createElement(_modalActivities.ModalActivitiesGeneration, {
              show: show,
              onClose: onClose,
              onSave: onSave
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 2155613951,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _alert = require("pragmate-ui/alert");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function SuggestionsAction({}) {
            const {
              texts: {
                actions: textActions,
                ...texts
              },
              store,
              values,
              setValues,
              saved
            } = (0, _context.useModuleContext)();
            const onClick = async () => {
              await store.getObjectiveImprovements({
                objective: values.objective
              });
            };
            return _react.default.createElement(_react.default.Fragment, null, store?.improvements?.irrelevant && _react.default.createElement(_alert.Alert, {
              className: "mb-30",
              type: "warning"
            }, texts.suggestions.irrelevant), _react.default.createElement("div", {
              className: "flex-container flex-center flex-05"
            }, _react.default.createElement(_ui.AIButton, {
              disabled: !saved,
              onClick: onClick,
              variant: "primary",
              bordered: true
            }, textActions.analyse)));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 1024617094,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _context = require("../../context");
          var _objective = require("./objective");
          var _action = require("./action");
          var _list = require("./list");
          function ObjectiveSuggestions() {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            if (!store.improvements || store.improvements.irrelevant) return _react.default.createElement(_action.SuggestionsAction, null);
            const contextValue = {
              improvedObjective,
              setImprovedObjective
            };
            return _react.default.createElement(_context.SuggestionsContext.Provider, {
              value: contextValue
            }, _react.default.createElement(_objective.ObjectiveImproved, null), _react.default.createElement(_list.SuggestionsList, {
              block: !improvedObjective
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/index
      ***************************************************/

      ims.set('./views/form/suggestions/list/index', {
        hash: 2482970037,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsList = SuggestionsList;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("../../../context");
          var _item = require("./item");
          function SuggestionsList({
            block
          }) {
            const {
              texts: {
                suggestions: texts,
                actions: textActions
              },
              store,
              values,
              saved,
              setValues
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(new Set());
            if (!store.improvements) return null;
            const {
              suggestions
            } = store.improvements;
            const apply = async event => {
              const specs = {
                objective: values.objective,
                improvements: Array.from(selected).map(i => store.improvements.suggestions[i].suggestion)
              };
              await store.generateObjective(specs);
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => {
              setSelected(new Set());
              store.clearImprovements();
            };
            const disabled = {
              disabled: !selected.size || block
            };
            const cls = `objective-suggestions__container${block ? ' is-disabled' : ''}`;
            return _react.default.createElement("section", {
              className: cls
            }, _react.default.createElement(_list.List, {
              className: "objective-suggestions__list",
              specs: {
                selected,
                setSelected,
                block
              },
              control: _item.ObjectiveSuggestionsItem,
              items: suggestions
            }), _react.default.createElement("div", {
              className: "flex-container flex-space-between flex-05 flex-vertical-center"
            }, _react.default.createElement("div", null, _react.default.createElement("span", null, texts.total, ": ", selected.size)), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
            }, _react.default.createElement(_components.Button, {
              ...disabled,
              onClick: onCancel,
              variant: "primary",
              bordered: true
            }, textActions.removeSuggestions), _react.default.createElement(_components.Button, {
              ...disabled,
              variant: "primary",
              onClick: apply
            }, textActions.applySuggestions))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/list/item
      **************************************************/

      ims.set('./views/form/suggestions/list/item', {
        hash: 4075705557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../../context");
          function ObjectiveSuggestionsItem({
            index,
            item,
            specs: {
              block,
              selected,
              setSelected
            }
          }) {
            const {
              values,
              setValues,
              store,
              texts: {
                suggestions: texts
              }
            } = (0, _context.useModuleContext)();
            const onSelect = event => {
              event.stopPropagation();
              const index = parseInt(event.currentTarget.dataset.index);
              const elements = selected;
              elements.has(index) ? elements.delete(index) : elements.add(index);
              store.improvementsSelected.add(index);
              setSelected(new Set(elements));
            };
            const cls = `suggestion__item${selected.has(index) ? ' selected' : ''}`;
            const attrs = {
              className: cls,
              'data-index': index,
              onClick: undefined
            };
            if (!block) attrs.onClick = onSelect;
            return _react.default.createElement("div", {
              className: cls,
              "data-index": index,
              ...attrs
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.origin), _react.default.createElement("span", {
              className: "suggestion-reference"
            }, item.reference)), _react.default.createElement("div", {
              className: "item__content"
            }, _react.default.createElement("header", null, _react.default.createElement("span", {
              className: "suggestion-label"
            }, texts.label)), item.suggestion));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/form/suggestions/objective
      **************************************************/

      ims.set('./views/form/suggestions/objective', {
        hash: 3128993891,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveImproved = ObjectiveImproved;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          function ObjectiveImproved() {
            const {
              texts: {
                suggestions: {
                  objective: {
                    actions: texts
                  }
                }
              },
              store,
              setValues,
              values,
              store: {
                improvements
              }
            } = (0, _context.useModuleContext)();
            const {
              improvedObjective,
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
            const {
              irrelevant,
              improved
            } = improvements;
            if (!improvements || improvedObjective) return null;
            const onClick = async event => {
              if (event.currentTarget.value === 'true') {
                await store.save({
                  objective: improved
                });
                setValues({
                  ...values,
                  objective: improved
                });
              }
              setImprovedObjective(true);
            };
            return _react.default.createElement("div", {
              className: "objective-suggestion"
            }, _react.default.createElement("h3", null, improved), _react.default.createElement("div", {
              className: "flex-container  flex-vertical-center  flex-space-between mt-30"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "actions flex-container flex-space-between flex-05"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              value: "false",
              onClick: onClick
            }, texts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              value: "true",
              onClick: onClick
            }, texts.confirm))));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 4108811862,
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
            const [textsReady] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            if (store.model.state === 'confirmed') {
              return React.createElement(React.Fragment, null, React.createElement("app-modules-management", {
                id: store.model.id,
                activityId: props.uri.qs.get('activityId')
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
        hash: 1956019213,
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
            show,
            onClose,
            onSave
          }) {
            const {
              texts,
              store,
              values
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            if (!show) return null;
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
              onClick: onSave
            }, texts.wizard.modalSuggestions.buttons.manual), _react.default.createElement(_ui.AIButton, {
              variant: "primary",
              onClick: onGenerate
            }, texts.wizard.modalSuggestions.buttons.generate))), _react.default.createElement(_ui.ProcessContainer, {
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
        hash: 3053853032,
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
            return React.createElement(React.Fragment, null, React.createElement(_context.ModuleContext.Provider, {
              value: value
            }, React.createElement(_header.Header, null), React.createElement(_ui.PageContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50IiwiYWN0aXZpdHlJZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwib24iLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIl9odG1sUmVuZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJCYXR0ZXJ5IiwiSHRtbFJlbmRlciIsIm5vdGlmaWNhdGlvbnMiLCJjcmVkaXRzIiwiY2hpbGRyZW4iLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJzZXRWYWx1ZXMiLCJncmFkZXMiLCJzZWxlY3QiLCJldmVudCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIkxhbmd1YWdlRmllbGQiLCJwbGFjZWhvbGRlciIsIkR1cmF0aW9uRmllbGQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwibGVuZ3RoIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwiRHJhZnRGb3JtIiwic2V0U2hvdyIsInVzZVN0YXRlIiwic2V0U3VibWl0dGVkIiwib25DbG9zZSIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJ0aXRsZSIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiRnJhZ21lbnQiLCJpcnJlbGV2YW50Iiwic3VnZ2VzdGlvbnMiLCJBSUJ1dHRvbiIsImFuYWx5c2UiLCJfYWN0aW9uIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJjYW5jZWwiLCJjb25maXJtIiwiUmVhY3QiLCJfaG9va3MiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX3dpemFyZCIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiV2l6YXJkIiwiX21vZGFsIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hbnVhbCIsImdlbmVyYXRlIiwiZ2VuZXJhdGluZ01vZHVsZSIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy93aXphcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQkQsSUFBQWMsS0FBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFrQixNQUFBLEdBQUFsQixPQUFBO1VBQ0EsSUFBQW1CLFFBQUEsR0FBQW5CLE9BQUE7VUFP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