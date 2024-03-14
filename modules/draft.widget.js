System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.27/components/ui", "@aimpact/ailearn-app@0.0.27/config", "framer-motion@10.17.8", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
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
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_18 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_20 = _pragmateUi006Modal;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.11"], ["pragmate-ui", "0.0.6"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/events", "0.0.6"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.0.4"], ["@bgroup/http-suite", "1.0.3"], ["apexcharts", "3.44.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.4"], ["dompurify", "3.0.6"], ["firebase", "10.5.0"], ["firebase-admin", "11.11.0"], ["framer-motion", "10.17.8"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.2"], ["marked-highlight", "2.0.6"], ["marked-mangle", "1.1.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.2"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.32"], ["@types/react-dom", "18.2.14"], ["@aimpact/ailearn-app", "0.0.27"], ["@aimpact/ailearn-app", "0.0.27"]]);
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
        hash: 3212192333,
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
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX2NvcmUiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIlJlYWN0aXZlTW9kZWwiLCJtb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwiaWQiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJvYmplY3RpdmVzR2VuZXJhdGVkIiwiTWFwIiwiY29uc3RydWN0b3IiLCJyZWFjdGl2ZVByb3BzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhckltcHJvdmVtZW50cyIsInRyaWdnZXJFdmVudCIsImFjdGl2aXR5SWQiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiX3JlYWN0IiwiX2FsZXJ0IiwiRXJyb3JSZW5kZXJlciIsInRleHRzIiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJBbGVydCIsInZhcmlhbnQiLCJfY29tcG9uZW50cyIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJhY3Rpb25zIiwiQnV0dG9uIiwiY2xhc3NOYW1lIiwiYm9yZGVyZWQiLCJvbkNsaWNrIiwiYmFjayIsInNpemluZyIsIl91aSIsIl9jb25maWciLCJfaHRtbFJlbmRlciIsIkhlYWRlciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiQmF0dGVyeSIsIkh0bWxSZW5kZXIiLCJub3RpZmljYXRpb25zIiwiY3JlZGl0cyIsImNoaWxkcmVuIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJzZXRWYWx1ZXMiLCJncmFkZXMiLCJzZWxlY3QiLCJldmVudCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIkR1cmF0aW9uRmllbGQiLCJ0b3RhbEFjdGl2aXRpZXMiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsImZvcm0iLCJfZm9ybSIsIl9pY29ucyIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsImljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJsZW5ndGgiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJEcmFmdEZvcm0iLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZXRTdWJtaXR0ZWQiLCJvbkNsb3NlIiwic3RhdGUiLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInRpdGxlIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJGcmFnbWVudCIsImlycmVsZXZhbnQiLCJzdWdnZXN0aW9ucyIsIkFJQnV0dG9uIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzZXRTZWxlY3RlZCIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJvbkNhbmNlbCIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwidG90YWwiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsImNhbmNlbCIsImNvbmZpcm0iLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfd2l6YXJkIiwicHJvcHMiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJzZXRGZXRjaGluZyIsInNldFVwZGF0ZWQiLCJ1c2VCaW5kZXIiLCJXaXphcmQiLCJfbW9kYWwiLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwibWFudWFsIiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW5nTW9kdWxlIiwiX2hlYWRlciIsImFjdGl2ZVBhbmVsIiwic2V0RXJyb3IiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIlBhZ2VDb250YWluZXIiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9oZWFkZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3Mvd2l6YXJkLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxu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