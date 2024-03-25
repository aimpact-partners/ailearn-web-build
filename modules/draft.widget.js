System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.31/components/ui", "@aimpact/ailearn-app@0.0.31/config", "framer-motion@10.18.0", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0031ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0031ComponentsUi;
    }, function (_aimpactAilearnApp0031Config) {
      dependency_11 = _aimpactAilearnApp0031Config;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.5"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.31"], ["@aimpact/ailearn-app", "0.0.31"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.31/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/config', dependency_11], ['framer-motion', dependency_12], ['pragmate-ui/form/react-select', dependency_13], ['pragmate-ui/form', dependency_14], ['pragmate-ui/icons', dependency_15], ['@beyond-js/kernel/routing', dependency_16], ['pragmate-ui/list', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/modal', dependency_20]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.31/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.31/modules/draft.widget');
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
        hash: 2578936865,
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
                totalActivities: 5,
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
        hash: 317351525,
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
            }, texts.wizard.duration.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.wizard.duration.placeholder,
              onChange: onChange,
              name: "duration",
              value: values.duration,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50IiwiYWN0aXZpdHlJZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwib24iLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIl9odG1sUmVuZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJCYXR0ZXJ5IiwiSHRtbFJlbmRlciIsIm5vdGlmaWNhdGlvbnMiLCJjcmVkaXRzIiwiY2hpbGRyZW4iLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJzZXRWYWx1ZXMiLCJncmFkZXMiLCJzZWxlY3QiLCJldmVudCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIkxhbmd1YWdlRmllbGQiLCJwbGFjZWhvbGRlciIsIkR1cmF0aW9uRmllbGQiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsIl9mb3JtIiwiX2ljb25zIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvbkNsb3NlIiwic3RhdGUiLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJGcmFnbWVudCIsImlycmVsZXZhbnQiLCJzdWdnZXN0aW9ucyIsIkFJQnV0dG9uIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzZXRTZWxlY3RlZCIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsImNhbmNlbCIsImNvbmZpcm0iLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfd2l6YXJkIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJXaXphcmQiLCJfbW9kYWwiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwibWFudWFsIiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW5nTW9kdWxlIiwiX2hlYWRlciIsImFjdGl2ZVBhbmVsIiwic2V0RXJyb3IiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3dpemFyZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFBbkIsT0FBQTtVQU9NLE1BQU9P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