System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.1.0/alert", "pragmate-ui@0.1.0/components", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config", "framer-motion@10.18.0", "pragmate-ui@0.1.0/form/react-select", "pragmate-ui@0.1.0/form", "pragmate-ui@0.1.0/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.0/list", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.0/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, bimport, __Bundle, __pkg, ims, Controller, Header, View, Wizard, __beyond_pkg, hmr;
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
    }, function (_beyondJsReactive1112Model) {
      dependency_5 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_6 = _aimpactChatSdk100Session;
    }, function (_react2) {
      dependency_7 = _react2;
    }, function (_pragmateUi010Alert) {
      dependency_8 = _pragmateUi010Alert;
    }, function (_pragmateUi010Components) {
      dependency_9 = _pragmateUi010Components;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_11 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_12 = _aimpactAilearnApp0032Config;
    }, function (_framerMotion2) {
      dependency_13 = _framerMotion2;
    }, function (_pragmateUi010FormReactSelect) {
      dependency_14 = _pragmateUi010FormReactSelect;
    }, function (_pragmateUi010Form) {
      dependency_15 = _pragmateUi010Form;
    }, function (_pragmateUi010Icons) {
      dependency_16 = _pragmateUi010Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_17 = _beyondJsKernel019Routing;
    }, function (_pragmateUi010List) {
      dependency_18 = _pragmateUi010List;
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_19 = _beyondJsReact18Widgets111Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi010Modal) {
      dependency_21 = _pragmateUi010Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.0"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_11], ['@aimpact/ailearn-app/config', dependency_12], ['framer-motion', dependency_13], ['pragmate-ui/form/react-select', dependency_14], ['pragmate-ui/form', dependency_15], ['pragmate-ui/icons', dependency_16], ['@beyond-js/kernel/routing', dependency_17], ['pragmate-ui/list', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/modal', dependency_21]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "general-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/draft.widget');
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
        hash: 472305528,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
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
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
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
        hash: 1366466996,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50IiwiYWN0aXZpdHlJZCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwib24iLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX25hdmJhckhlYWRlciIsIl9jb25maWciLCJfaHRtbFJlbmRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiQmF0dGVyeSIsIkh0bWxSZW5kZXIiLCJub3RpZmljYXRpb25zIiwiY3JlZGl0cyIsImNoaWxkcmVuIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwic2V0VmFsdWVzIiwiZ3JhZGVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJMYW5ndWFnZUZpZWxkIiwicGxhY2Vob2xkZXIiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwibGVuZ3RoIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwiRHJhZnRGb3JtIiwic2V0U2hvdyIsInVzZVN0YXRlIiwic2V0U3VibWl0dGVkIiwib25DbG9zZSIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJ0aXRsZSIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiRnJhZ21lbnQiLCJpcnJlbGV2YW50Iiwic3VnZ2VzdGlvbnMiLCJBSUJ1dHRvbiIsImFuYWx5c2UiLCJfYWN0aW9uIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJjYW5jZWwiLCJjb25maXJtIiwiUmVhY3QiLCJfaG9va3MiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX3dpemFyZCIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiV2l6YXJkIiwiX21vZGFsIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hbnVhbCIsImdlbmVyYXRlIiwiZ2VuZXJhdGluZ01vZHVsZSIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy93aXphcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JCRCxJQUFBYyxLQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWtCLE1BQUEsR0FBQWxCLE9BQUE7VUFDQSxJQUFBbUIsUUFBQSxHQUFB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