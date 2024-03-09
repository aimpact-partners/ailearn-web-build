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
        hash: 746179162,
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
        hash: 2333216045,
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
        hash: 3450545372,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhckltcHJvdmVtZW50cyIsInRyaWdnZXJFdmVudCIsImFjdGl2aXR5SWQiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiX3JlYWN0IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsInZhcmlhbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJhY3Rpb25zIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYmFjayIsInNpemluZyIsIl91aSIsIl9jb25maWciLCJfaHRtbFJlbmRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiQmF0dGVyeSIsIkh0bWxSZW5kZXIiLCJub3RpZmljYXRpb25zIiwiY3JlZGl0cyIsImNoaWxkcmVuIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsInNldFZhbHVlcyIsImdyYWRlcyIsInNlbGVjdCIsImV2ZW50IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiRHVyYXRpb25GaWVsZCIsInRvdGFsQWN0aXZpdGllcyIsImZpbmQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiZm9ybSIsIl9mb3JtIiwiX2ljb25zIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiaWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsImxlbmd0aCIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIkRyYWZ0Rm9ybSIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInNldFN1Ym1pdHRlZCIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJzdGF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJpbnRyb2R1Y3Rpb24iLCJ0aXRsZSIsInN1YnRpdGxlIiwiQW5pbWF0ZVByZXNlbmNlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsIkZyYWdtZW50IiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsInNldFNlbGVjdGVkIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIlByb3ZpZGVyIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsImNhbmNlbCIsImNvbmZpcm0iLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfd2l6YXJkIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJXaXphcmQiLCJfbW9kYWwiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwiaW5zcGlyYXRpb24iLCJtYW51YWwiLCJnZW5lcmF0aW5nTW9kdWxlIiwiX2hlYWRlciIsImFjdGl2ZVBhbmVsIiwic2V0RXJyb3IiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51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