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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.24"], ["@aimpact/ailearn-app", "0.0.24"]]);
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
        hash: 447864277,
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
                objective: ''
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
        hash: 1634550351,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.HtmlRender = HtmlRender;
          var _react = require("react");
          function HtmlRender({
            children
          }) {
            return _react.default.createElement("span", {
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
        hash: 1434442143,
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
        hash: 3259723049,
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
            }, _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null))), _react.default.createElement("div", {
              className: "form-wizard__objective-section"
            }, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }))), _react.default.createElement(_suggestions.ObjectiveSuggestions, null), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              block: true,
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

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 842673557,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _alert = require("pragmate-ui/alert");
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
            }, _react.default.createElement(_components.Button, {
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
        hash: 1394265001,
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
              texts,
              store,
              values,
              saved,
              setValues
            } = (0, _context.useModuleContext)();
            const [selected, setSelected] = _react.default.useState(new Set());
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            if (!store.improvements || store.improvements.irrelevant) return _react.default.createElement(_action.SuggestionsAction, null);
            const deleteSuggestions = () => setValues(values => ({
              ...values,
              improvements: new Set()
            }));
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
            console.log(20, selected);
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
        hash: 1114788501,
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
            const {
              suggestions
            } = store.improvements;
            const apply = async event => {
              const specs = {
                objective: values.objective,
                improvements: Array.from(selected).map(i => store.improvements.suggestions[i].suggestion)
              };
              await store.generateObjective(specs);
              setSelected(new Set());
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => setSelected(new Set());
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
        hash: 4052767533,
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
            return _react.default.createElement("div", {
              className: cls,
              "data-index": index,
              onClick: onSelect
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwidHJpZ2dlckV2ZW50IiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIl9odG1sUmVuZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJCYXR0ZXJ5IiwiSHRtbFJlbmRlciIsIm5vdGlmaWNhdGlvbnMiLCJjcmVkaXRzIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwic2V0VmFsdWVzIiwiZ3JhZGVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJEdXJhdGlvbkZpZWxkIiwidG90YWxBY3Rpdml0aWVzIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJmb3JtIiwiX2Zvcm0iLCJfaWNvbnMiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwibGVuZ3RoIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiRHJhZnRGb3JtIiwic2V0U2hvdyIsInVzZVN0YXRlIiwic2V0U3VibWl0dGVkIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInN0YXRlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsImludHJvZHVjdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiRnJhZ21lbnQiLCJpcnJlbGV2YW50Iiwic3VnZ2VzdGlvbnMiLCJhbmFseXNlIiwiX2FjdGlvbiIsIl9saXN0Iiwic2V0U2VsZWN0ZWQiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiZGVsZXRlU3VnZ2VzdGlvbnMiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJsb2ciLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9uIiwib25DYW5jZWwiLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRvdGFsIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJjYW5jZWwiLCJjb25maXJtIiwiUmVhY3QiLCJfaG9va3MiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiX3dpemFyZCIsInByb3BzIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwic3BlY2lmaWVyIiwic2V0RmV0Y2hpbmciLCJzZXRVcGRhdGVkIiwidXNlQmluZGVyIiwiV2l6YXJkIiwiX21vZGFsIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsImluc3BpcmF0aW9uIiwibWFudWFsIiwiZ2VuZXJhdGluZ01vZHVsZSIsIl9oZWFkZXIiLCJhY3RpdmVQYW5lbCIsInNldEVycm9yIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJQYWdlQ29udGFpbmVyIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvc3RvcmUudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3dpemFyZC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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