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
        hash: 984206463,
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
        hash: 1529530766,
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
            const onClose = () => setShow(false);
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective;
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
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null))), _react.default.createElement("div", {
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
        hash: 1398243671,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhckltcHJvdmVtZW50cyIsInRyaWdnZXJFdmVudCIsImFjdGl2aXR5SWQiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiX3JlYWN0IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsInZhcmlhbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJhY3Rpb25zIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYmFjayIsInNpemluZyIsIl91aSIsIl9jb25maWciLCJfaHRtbFJlbmRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiQmF0dGVyeSIsIkh0bWxSZW5kZXIiLCJub3RpZmljYXRpb25zIiwiY3JlZGl0cyIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImdyYWRlcyIsInNlbGVjdCIsImV2ZW50IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiRHVyYXRpb25GaWVsZCIsInRvdGFsQWN0aXZpdGllcyIsImZpbmQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZm9ybSIsIl9mb3JtIiwiX2ljb25zIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiaWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsImxlbmd0aCIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIkRyYWZ0Rm9ybSIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInNldFN1Ym1pdHRlZCIsIm9uQ2xvc2UiLCJzdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwidGl0bGUiLCJzdWJ0aXRsZSIsIkFuaW1hdGVQcmVzZW5jZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsIkZyYWdtZW50IiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiQUlCdXR0b24iLCJhbmFseXNlIiwiX2FjdGlvbiIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInNldFNlbGVjdGVkIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsIm9uQ2FuY2VsIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiY2FuY2VsIiwiY29uZmlybSIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiLCJfaGVhZGVyIiwiYWN0aXZlUGFuZWwiLCJzZXRFcnJvciIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy93aXphcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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