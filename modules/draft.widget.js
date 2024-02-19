System.register(["@beyond-js/widgets@0.1.5/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.0.4/page", "@aimpact/ailearn-sdk@1.0.0/core", "@beyond-js/reactive@1.1.11/model", "@aimpact/chat-sdk@1.0.0/session", "react@18.2.0", "pragmate-ui@0.0.6/alert", "pragmate-ui@0.0.6/components", "@aimpact/ailearn-app@0.0.24/components/ui", "framer-motion@10.17.8", "pragmate-ui@0.0.6/form/react-select", "pragmate-ui@0.0.6/form", "pragmate-ui@0.0.6/icons", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.0.6/list", "@beyond-js/react-18-widgets@1.0.4/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.0.6/modal"], function (_export, _context2) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, bimport, __Bundle, __pkg, ims, Controller, Header, View, Wizard, __beyond_pkg, hmr;
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
    }, function (_framerMotion2) {
      dependency_11 = _framerMotion2;
    }, function (_pragmateUi006FormReactSelect) {
      dependency_12 = _pragmateUi006FormReactSelect;
    }, function (_pragmateUi006Form) {
      dependency_13 = _pragmateUi006Form;
    }, function (_pragmateUi006Icons) {
      dependency_14 = _pragmateUi006Icons;
    }, function (_beyondJsKernel019Routing) {
      dependency_15 = _beyondJsKernel019Routing;
    }, function (_pragmateUi006List) {
      dependency_16 = _pragmateUi006List;
    }, function (_beyondJsReact18Widgets104Hooks) {
      dependency_17 = _beyondJsReact18Widgets104Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi006Modal) {
      dependency_19 = _pragmateUi006Modal;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-sdk/core', dependency_4], ['@beyond-js/reactive/model', dependency_5], ['@aimpact/chat-sdk/session', dependency_6], ['react', dependency_7], ['pragmate-ui/alert', dependency_8], ['pragmate-ui/components', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['framer-motion', dependency_11], ['pragmate-ui/form/react-select', dependency_12], ['pragmate-ui/form', dependency_13], ['pragmate-ui/icons', dependency_14], ['@beyond-js/kernel/routing', dependency_15], ['pragmate-ui/list', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/modal', dependency_19]]);
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
        hash: 1755667599,
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
              console.log('hola', this.uri.qs.get('id'));
              this.#store.load(this.uri.qs.get('id'));
            }
            hide() {
              console.log(2, 'si');
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
        hash: 2549238861,
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
              globalThis.store = this;
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
                this.fetching = false;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.fetching = false;
                if (this.#objectivesGenerated.has(improvements)) return this.#objectivesGenerated.get(improvements);
                const data = await this.model.generateObjective({
                  objective,
                  improvements
                });
                this.#objectivesGenerated.set(objective, data.objective);
                this.#model.objective = data.objective;
                this.#improvements = [];
                this.#improvementsSelected = new Set();
                this.triggerEvent('change');
                return this.#model.objective;
              } catch (e) {
                console.error(e);
              } finally {
                this.fetching = false;
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
        hash: 1309322947,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _react = require("react");
          var _context = require("../context");
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
              breadcrumb: [['AI-Learn', '/'], ['Modules', '/modules/list'], ['Management', '']]
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
        hash: 2429432037,
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
            const onChange = event => setValues(values => ({
              ...values,
              audience: event.value
            }));
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
        hash: 913553103,
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
            const onChange = event => setValues(values => ({
              ...values,
              audience: event.value
            }));
            let firstSelected = 0;
            let selected = 1;
            if (values?.audienceIndex) firstSelected = parseInt(values.audienceIndex);
            if (values?.audience?.index) selected = parseInt(values.audience.index);
            const options = [{
              value: 15,
              label: texts.moduleLength.brief
            }, {
              value: 45,
              label: texts.moduleLength.standard
            }, {
              value: 60,
              label: texts.moduleLength.extended
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
        hash: 986884083,
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
            }, _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_grade.GradeField, null), _react.default.createElement(_moduleLength.ModuleLengthField, null))), _react.default.createElement("div", null, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }), _react.default.createElement("div", null, saved && _react.default.createElement(_suggestions.ObjectiveSuggestions, null)))), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              className: "wizard-input",
              type: "submit",
              disabled: isDisabled,
              variant: "primary",
              onClick: onSubmit
            }, label))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.processMessages
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
        hash: 626561107,
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
                improvements: Array.from(selected)
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
              className: "flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
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
        hash: 3992595793,
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
              store,
              uri
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
        hash: 2634320791,
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
                await store.model.draft({
                  ...values,
                  type: 'module'
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
            }, _react.default.createElement("h3", null, "Empecemos"), _react.default.createElement("div", {
              className: "mt-30"
            }, _react.default.createElement("span", null, "Crea tu m\u00F3dulo de aprendizaje y sus actividades junto con nosotros")), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onGenerate
            }, "Necesito inspiraci\u00F3n"), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onSave
            }, "Continuar manualmente"))), _react.default.createElement(_ui.ProcessContainer, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9jb3JlIiwiX21vZGVsIiwiX3Nlc3Npb24iLCJSZWFjdGl2ZU1vZGVsIiwibW9kZWwiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwib3duZXJzaGlwcyIsIm9yZ2FuaXphdGlvbnMiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJpZCIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwicHJvcG9zYWwiLCJjb250ZW50Iiwib2JqZWN0aXZlIiwib2JzZXJ2YXRpb25zIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwib24iLCJ0cmlnZ2VyRXZlbnQiLCJpc1JlYWR5IiwiZSIsImVycm9yIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsIl9yZWFjdCIsIl9hbGVydCIsIkVycm9yUmVuZGVyZXIiLCJ0ZXh0cyIsImRlZmF1bHQiLCJjcmVhdGVFbGVtZW50IiwiQWxlcnQiLCJ2YXJpYW50IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYWN0aW9ucyIsIkJ1dHRvbiIsImNsYXNzTmFtZSIsImJvcmRlcmVkIiwib25DbGljayIsImJhY2siLCJzaXppbmciLCJfdWkiLCJIZWFkZXIiLCJzaG93SGVhZGVyIiwiUGFnZUhlYWRlciIsImJyZWFkY3J1bWIiLCJCYXR0ZXJ5IiwiUGFnZVRpdGxlIiwidGl0bGUiLCJQYWdlU3VidGl0bGUiLCJwb3N0VGl0bGUiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJtb2R1bGVMZW5ndGgiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZSIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNoaWxkcmVuIiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwic2V0VmFsdWVzIiwiZXZlbnQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImdyYWRlcyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJNb2R1bGVMZW5ndGhGaWVsZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJmaW5kIiwiZm9ybSIsIl9mb3JtIiwiX2ljb25zIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiaWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJzZWxlY3QiLCJhdHRycyIsImxlbmd0aCIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIkRyYWZ0Rm9ybSIsInNldFNob3ciLCJ1c2VTdGF0ZSIsInNldFN1Ym1pdHRlZCIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJzdGF0ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJjb250aW51ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiQW5pbWF0ZVByZXNlbmNlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsInByb2Nlc3NNZXNzYWdlcyIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwiX2xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwidGV4dEFjdGlvbnMiLCJzZXRTZWxlY3RlZCIsImFuYWxpemUiLCJkZWxldGVTdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwicHVzaCIsIkZyYWdtZW50IiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInRleHQiLCJhbmFseXNlIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJzaXplIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIlJlYWN0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl93aXphcmQiLCJwcm9wcyIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInNldEZldGNoaW5nIiwic2V0VXBkYXRlZCIsInVzZUJpbmRlciIsIldpemFyZCIsIl9tb2RhbCIsIm9uR2VuZXJhdGUiLCJkcmFmdCIsIk1vZGFsIiwiX2hlYWRlciIsImFjdGl2ZVBhbmVsIiwic2V0RXJyb3IiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL3N0b3JlLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2hlYWRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy93aXphcmQudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSEMsT0FBTyxDQUFDQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztjQUMxQyxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxJQUFJLENBQUMsSUFBSSxDQUFDSCxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDO1lBRUFFLElBQUlBLENBQUE7Y0FDSE4sT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztjQUNwQixJQUFJ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