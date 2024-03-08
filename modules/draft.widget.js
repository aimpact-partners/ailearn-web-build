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
        hash: 1573777793,
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
        hash: 276117913,
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
              "data-index": index
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhckltcHJvdmVtZW50cyIsInRyaWdnZXJFdmVudCIsImFjdGl2aXR5SWQiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiZ2xvYmFsVGhpcyIsImlzUmVhZHkiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJfcmVhY3QiLCJfYWxlcnQiLCJFcnJvclJlbmRlcmVyIiwidGV4dHMiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsIkFsZXJ0IiwidmFyaWFudCIsIl9jb21wb25lbnRzIiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImFjdGlvbnMiLCJCdXR0b24iLCJjbGFzc05hbWUiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJiYWNrIiwic2l6aW5nIiwiX3VpIiwiX2NvbmZpZyIsIl9odG1sUmVuZGVyIiwiSGVhZGVyIiwiTmF2YmFySGVhZGVyIiwiYnJlYWRjcnVtYiIsInBhcmFtcyIsIkFQUF9OQU1FIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJCYXR0ZXJ5IiwiSHRtbFJlbmRlciIsIm5vdGlmaWNhdGlvbnMiLCJjcmVkaXRzIiwiY2hpbGRyZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwic2V0VmFsdWVzIiwiZ3JhZGVzIiwic2VsZWN0IiwiZXZlbnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJEdXJhdGlvbkZpZWxkIiwidG90YWxBY3Rpdml0aWVzIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJmb3JtIiwiX2Zvcm0iLCJfaWNvbnMiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJpY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwibGVuZ3RoIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiRHJhZnRGb3JtIiwic2V0U2hvdyIsInVzZVN0YXRlIiwic2V0U3VibWl0dGVkIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInN0YXRlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsImludHJvZHVjdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJBbmltYXRlUHJlc2VuY2UiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiRnJhZ21lbnQiLCJpcnJlbGV2YW50Iiwic3VnZ2VzdGlvbnMiLCJhbmFseXNlIiwiX2FjdGlvbiIsIl9saXN0Iiwic2V0U2VsZWN0ZWQiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiUHJvdmlkZXIiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsIm9uQ2FuY2VsIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJ0b3RhbCIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiY2FuY2VsIiwiY29uZmlybSIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJpbnNwaXJhdGlvbiIsIm1hbnVhbCIsImdlbmVyYXRpbmdNb2R1bGUiLCJfaGVhZGVyIiwiYWN0aXZlUGFuZWwiLCJzZXRFcnJvciIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy93aXphcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxs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