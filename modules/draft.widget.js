System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32-dev.48/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-dev.48/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-dev.48/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32-dev.48/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32-dev.48/config"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, Header, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    DraftContainer: void 0,
    Header: void 0,
    View: void 0
  });
  return {
    setters: [function (_beyondJsWidgets110Render) {
      dependency_0 = _beyondJsWidgets110Render;
    }, function (_beyondJsKernel019Bundle) {
      dependency_1 = _beyondJsKernel019Bundle;
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_3 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0032Dev48CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032Dev48CoinsLayoutWidget;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_7 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_8 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_pragmateUi011Components) {
      dependency_10 = _pragmateUi011Components;
    }, function (_pragmateUi011Form) {
      dependency_11 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032Dev48ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Dev48ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Dev48ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0032Dev48ComponentsIcons;
    }, function (_pragmateUi011Icons) {
      dependency_17 = _pragmateUi011Icons;
    }, function (_pragmateUi011Alert) {
      dependency_18 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_20 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_21 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsKernel019Routing) {
      dependency_22 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0032Dev48ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Dev48Config) {
      dependency_24 = _aimpactAilearnApp0032Dev48Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.32-dev.48"], ["@aimpact/ailearn-app", "0.0.32-dev.48"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-dev.48/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-dev.48/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 4059543509,
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

      /****************************
      INTERNAL MODULE: ./management
      ****************************/

      ims.set('./management', {
        hash: 1108312047,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ActivitiesManagement = ActivitiesManagement;
          var _react = require("react");
          function ActivitiesManagement({
            store,
            uri
          }) {
            const [activityId, setActivityId] = _react.default.useState(uri.qs.get('activityId') || null);
            const ref = _react.default.useRef(null);
            return _react.default.createElement("div", null, _react.default.createElement("app-modules-management", {
              id: store.model.id,
              activityId: activityId,
              ref: ref
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 3250542466,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
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
            get hasCredits() {
              return this.#model.credits?.total > 0;
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
            #texts = new _texts.CurrentTexts(_beyond_context.module.specifier);
            get texts() {
              return this.#texts?.value;
            }
            get ready() {
              return super.ready && this.#texts.ready;
            }
            #objectivesGenerated = new Map();
            constructor() {
              super();
              this.reactiveProps(['fetchingDraft']);
              this.#texts.on('change', this.listenTexts);
            }
            listenTexts = () => {
              this.triggerEvent('change');
              if (this.#texts.ready) {
                _coinsLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules, '/modules/list'], [this.texts.breadcrumb.management, '']];
              }
            };
            hide() {
              this.#model = undefined;
              super.ready = false;
              this.#improvements = undefined;
              this.triggerEvent();
              _coinsLayout.LayoutBroker.clear();
            }
            clearImprovements() {
              this.#improvements = undefined;
              this.triggerEvent('change');
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
                this.#model = await _learningModules.LearningModule.get(specs);
                this.#model.on('change', this.triggerEvent);
                this.#saved = !!id;
                _coinsLayout.LayoutBroker.addModel(this.#model, true);
                _coinsLayout.LayoutBroker.canConsumeCredits = this.#saved;
                super.ready = true;
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
              _coinsLayout.LayoutBroker.canConsumeCredits = true;
              return this.#model;
            }
            setBreadcrumb(breadcrumb) {
              _coinsLayout.LayoutBroker.breadcrumb = breadcrumb;
            }
            async clean() {
              this.#model.activities.clean();
              this.#saved = undefined;
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
                const data = await this.model.getModuleSuggestion({
                  ...specs
                });
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

      /************************************
      INTERNAL MODULE: ./use-texts-callback
      ************************************/

      ims.set('./use-texts-callback', {
        hash: 4103720571,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useTextsCallback = useTextsCallback;
          var React = require("react");
          var _texts = require("@beyond-js/kernel/texts");
          function useTextsCallback(specifier, callback) {
            const [ready, setReady] = React.useState(false);
            const [texts, setTexts] = React.useState({});
            React.useEffect(() => {
              const modelTexts = new _texts.CurrentTexts(specifier);
              const triggerEvent = () => {
                let value = modelTexts.value;
                setTexts(value);
                setReady(modelTexts.ready);
                if (modelTexts.ready) callback(value);
              };
              modelTexts.on('change', triggerEvent);
              triggerEvent();
              return () => {
                modelTexts.on('change', triggerEvent);
              };
            }, []);
            const isReady = ready && !!texts;
            return [isReady, texts];
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/activities/context
      ******************************************/

      ims.set('./views/activities/context', {
        hash: 1387262165,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useModalContext = exports.ModalContext = void 0;
          var _react = require("react");
          const ModalContext = exports.ModalContext = _react.default.createContext({});
          const useModalContext = () => _react.default.useContext(ModalContext);
          exports.useModalContext = useModalContext;
        }
      });

      /*******************************************
      INTERNAL MODULE: ./views/activities/examples
      *******************************************/

      ims.set('./views/activities/examples', {
        hash: 3861214077,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionExamples = SuggestionExamples;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _list = require("pragmate-ui/list");
          var _context = require("../context");
          var _context2 = require("./context");
          function SuggestionExamples() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              setView,
              setNotes
            } = (0, _context2.useModalContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const onBack = () => setView('selection');
            const Item = ({
              item
            }) => {
              const onClick = () => {
                setNotes(item);
                setView('suggestions');
              };
              return _react.default.createElement("li", {
                className: "list__item"
              }, _react.default.createElement("span", null, item), _react.default.createElement("div", null, _react.default.createElement(_components.Button, {
                bordered: true,
                variant: "primary",
                onClick: onClick
              }, texts.refine.examples.actions.select)));
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
              className: "modal__content--justified"
            }, _react.default.createElement("h3", null, texts.refine.examples.title), _react.default.createElement(_list.List, {
              className: "modal__list--options-selection",
              items: texts.refine.examples.items,
              control: Item
            }), _react.default.createElement("div", {
              className: "flex-container flex-end mt-30"
            }, _react.default.createElement("div", {
              className: "modal__actions"
            }, _react.default.createElement(_components.Button, {
              variant: "default",
              onClick: onBack
            }, texts.refine.examples.actions.back)))));
          }
        }
      });

      /**************************************************
      INTERNAL MODULE: ./views/activities/generation-form
      **************************************************/

      ims.set('./views/activities/generation-form', {
        hash: 234191721,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.GenerationForm = GenerationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _aiButton = require("../components/ai-button");
          var _context = require("../context");
          var _context2 = require("./context");
          function GenerationForm({
            onSave
          }) {
            const {
              texts,
              store,
              values,
              ensureCredits
            } = (0, _context.useModuleContext)();
            const {
              setView
            } = (0, _context2.useModalContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onClick = () => ensureCredits(() => setView('suggestions'));
            return _react.default.createElement("div", {
              className: "modal__header"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.wizard.modalSuggestions.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, texts.wizard.modalSuggestions.description))), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onSave
            }, texts.wizard.modalSuggestions.buttons.manual), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onClick
            }, texts.wizard.modalSuggestions.buttons.generate)));
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/activities/index
      ****************************************/

      ims.set('./views/activities/index', {
        hash: 2502212712,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitiesGeneration = ModalActivitiesGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _generationForm = require("./generation-form");
          var _framerMotion = require("framer-motion");
          var _suggestions = require("./suggestions");
          var _context2 = require("./context");
          var _examples = require("./examples");
          function ModalActivitiesGeneration({
            show,
            onClose
          }) {
            const {
              texts,
              store,
              values,
              setValues,
              ensureCredits
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState('selection');
            if (!show) return null;
            const onSave = async () => {};
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...values,
                  notes
                });
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const controls = {
              selection: _generationForm.GenerationForm,
              suggestions: _suggestions.SuggestionsForm,
              examples: _examples.SuggestionExamples
            };
            const Control = controls[view];
            const handleCLose = () => {
              setNotes('');
              setView('selection');
              onClose();
            };
            return _react.default.createElement(_context2.ModalContext.Provider, {
              value: {
                view,
                onGenerate,
                setView,
                notes,
                setNotes
              }
            }, _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_framerMotion.AnimatePresence, null, _react.default.createElement(Control, {
              onSave: onSave,
              key: "control"
            }), _react.default.createElement(_ui.ProcessContainer, {
              key: "container",
              fetching: fetching
            }))));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/activities/suggestions
      **********************************************/

      ims.set('./views/activities/suggestions', {
        hash: 1019468326,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsForm = SuggestionsForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _context2 = require("./context");
          function SuggestionsForm() {
            const {
              texts
            } = (0, _context.useModuleContext)();
            const {
              setView,
              notes,
              setNotes,
              onGenerate
            } = (0, _context2.useModalContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples'),
              onBack: () => setView('selection')
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "modal__content--justified"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title), _react.default.createElement("p", null, texts.refine.activities.description)), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", {
              className: "actions"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_components.Button, {
              variant: "outline",
              onClick: events.onBack
            }, texts.actions.back), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***********************************
      INTERNAL MODULE: ./views/coins/alert
      ***********************************/

      ims.set('./views/coins/alert', {
        hash: 100216912,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsAlert = CoinsAlert;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoinsAlert({
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            texts = texts.coins.alert;
            return _react.default.createElement(_modal.AlertModal, {
              show: true,
              buttonLabel: texts.action,
              onConfirm: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/coins/coins-modal
      *****************************************/

      ims.set('./views/coins/coins-modal', {
        hash: 2894868445,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function CoinsModal({
            store,
            show,
            onClose,
            texts
          }) {
            if (!show) return null;
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            texts = texts.coins.modal;
            const onConfirm = async () => {
              try {
                setFetching(true);
                await store.model.getCredits();
                onClose();
              } catch (e) {
                setError(texts.errors.noCredits);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement(_modal.ConfirmModal, {
              show: true,
              className: "modal-sm",
              actions: {
                confirm: {
                  label: texts.actions.confirm,
                  variant: 'primary'
                },
                cancel: {
                  label: texts.actions.cancel,
                  variant: 'primary',
                  bordered: true
                }
              },
              onConfirm: onConfirm,
              onCancel: onClose,
              onClose: onClose
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_ui.ErrorRenderer, {
              error: error
            }), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, texts.description)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/components/ai-button
      ********************************************/

      ims.set('./views/components/ai-button', {
        hash: 3389913736,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIButton = AIButton;
          exports.AIIconButton = AIIconButton;
          var _react = require("react");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          var _components = require("pragmate-ui/components");
          var _icons2 = require("pragmate-ui/icons");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_components.Button, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
          /*bundle*/
          function AIIconButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _coinsLayout.LayoutBroker.ensureCredits(onClick);
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
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
        hash: 491328270,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.useSuggestionsContext = exports.useModuleContext = exports.useDraftManagementContext = exports.SuggestionsContext = exports.ModuleContext = exports.DraftManagementContext = void 0;
          var _react = require("react");
          const ModuleContext = exports.ModuleContext = _react.default.createContext({});
          const useModuleContext = () => _react.default.useContext(ModuleContext);
          exports.useModuleContext = useModuleContext;
          const DraftManagementContext = exports.DraftManagementContext = _react.default.createContext({});
          const useDraftManagementContext = () => _react.default.useContext(DraftManagementContext);
          exports.useDraftManagementContext = useDraftManagementContext;
          const SuggestionsContext = exports.SuggestionsContext = _react.default.createContext({});
          const useSuggestionsContext = () => _react.default.useContext(SuggestionsContext);
          exports.useSuggestionsContext = useSuggestionsContext;
        }
      });

      /*****************************************
      INTERNAL MODULE: ./views/form/animated-div
      *****************************************/

      ims.set('./views/form/animated-div', {
        hash: 2040524209,
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
              className: "objective__container",
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

      /**************************************
      INTERNAL MODULE: ./views/form/container
      **************************************/

      ims.set('./views/form/container', {
        hash: 858841082,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftContainer = DraftContainer;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _ = require("./");
          /*bundle*/
          function DraftContainer({
            store,
            uri
          }) {
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel] = React.useState(0);
            const [, setUpdated] = React.useState({});
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState(store.values);
            const [error, setError] = React.useState();
            const [isFetching, setIsFetching] = React.useState(false);
            const {
              ensureCredits
            } = (0, _context.useDraftManagementContext)();
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
              ensureCredits,
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
            }, React.createElement(_ui.PageContainer, {
              className: cls,
              fetching: fetching && !!store.model?.activities.length
            }, React.createElement(_.DraftForm, null))));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/audience
      ********************************************/

      ims.set('./views/form/fields/audience', {
        hash: 1755165906,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function AudienceField() {
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
              name: "audience",
              value: values.audience,
              placeholder: wTexts.grades.select,
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
        hash: 630405900,
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
              placeholder: texts.languages.select.placeholder,
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
        hash: 1770237194,
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
              const data = options.find(item => item.value === parseInt(event.target.value));
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
        hash: 1198927874,
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
              placeholder: wTexts.schools.select,
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
        hash: 1852895073,
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
          var _audience = require("./fields/audience");
          var _moduleLength = require("./fields/module-length");
          var _ownership = require("./fields/ownership");
          var _objective = require("./fields/objective");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _suggestions = require("./suggestions");
          var _error = require("../components/error");
          var _activities = require("../activities");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("form", {
              className: "form-create-draft__container"
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), _react.default.createElement(_animatedDiv.AnimatedDiv, null, _react.default.createElement("section", {
              className: "form-body"
            }, _react.default.createElement("header", {
              className: "wizard-form-header"
            }, _react.default.createElement("h1", null, texts.wizard.introduction.title), _react.default.createElement("span", null, texts.wizard.introduction.subtitle)), _react.default.createElement("section", {
              className: "wizard-first-step-container"
            }, _react.default.createElement(_language.LanguageField, null), _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_audience.GradeField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement("div", {
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
            })), _react.default.createElement(_activities.ModalActivitiesGeneration, {
              show: show,
              onClose: onClose
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 3089290480,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
          var _alert = require("pragmate-ui/alert");
          var _aiButton = require("../../components/ai-button");
          function SuggestionsAction({}) {
            const {
              texts: {
                actions: textActions,
                ...texts
              },
              store,
              values,
              ensureCredits,
              saved
            } = (0, _context.useModuleContext)();
            const generateImprovements = async () => {
              try {
                await store.getObjectiveImprovements({
                  objective: values.objective
                });
              } catch (e) {
                console.error(e);
              }
            };
            return _react.default.createElement(_react.default.Fragment, null, store?.improvements?.irrelevant && _react.default.createElement(_alert.Alert, {
              className: "mb-30",
              type: "warning"
            }, texts.suggestions.irrelevant), _react.default.createElement("div", {
              className: "flex-container flex-center flex-05"
            }, _react.default.createElement(_aiButton.AIButton, {
              disabled: !saved,
              onClick: generateImprovements,
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
        hash: 3766540706,
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
            // if there are no improvements, show the action to generate suggestions
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
        hash: 1853802744,
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
              className: "section__actions"
            }, _react.default.createElement("span", null, texts.total, ": ", selected.size), _react.default.createElement("div", {
              className: "section__actions"
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
        hash: 801427851,
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
              className: "objective-suggestion__actions"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "section__actions"
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

      /*********************************************
      INTERNAL MODULE: ./views/header/animated-label
      *********************************************/

      ims.set('./views/header/animated-label', {
        hash: 2096490113,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AnimatedLabel = AnimatedLabel;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function AnimatedLabel({
            children
          }) {
            const [show, setShow] = _react.default.useState(!!children);
            _react.default.useEffect(() => {
              setShow(children);
              globalThis.setTimeout(() => {
                setShow(false);
              }, 2000);
            }, [children]);
            return _react.default.createElement(_framerMotion.AnimatePresence, null, show && _react.default.createElement(_framerMotion.motion.span, {
              layout: true,
              initial: {
                opacity: 0,
                width: '0'
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                },
                width: 'auto'
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children));
          }
        }
      });

      /***************************************
      INTERNAL MODULE: ./views/header/animated
      ***************************************/

      ims.set('./views/header/animated', {
        hash: 796986304,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Animated = Animated;
          var _react = require("react");
          var _framerMotion = require("framer-motion");
          function Animated({
            className,
            children,
            as = 'span'
          }) {
            const Component = (0, _framerMotion.motion)(as);
            return _react.default.createElement(Component, {
              layout: true,
              className: className,
              initial: {
                opacity: 0
              },
              animate: {
                opacity: 1,
                transition: {
                  duration: 0.3
                }
              },
              exit: {
                transition: {
                  duration: 0.3,
                  width: 0
                },
                opacity: 0
              }
            }, children);
          }
        }
      });

      /************************************
      INTERNAL MODULE: ./views/header/index
      ************************************/

      ims.set('./views/header/index', {
        hash: 446722148,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("../context");
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useDraftManagementContext)();
            const showBar = store.saved && !store.hasCredits;
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
            }));
          }
        }
      });

      /*****************************
      INTERNAL MODULE: ./views/index
      *****************************/

      ims.set('./views/index', {
        hash: 1371185060,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _container = require("./form/container");
          var _management = require("../management");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _context = require("./context");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            // the setBreadcrumb function need to be executed when the texts are ready
            const [, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!store.ready) return null; // TODO: add preload screen (or not
            const Control = store.model.state === 'confirmed' ? _management.ActivitiesManagement : _container.DraftContainer;
            const value = {
              texts,
              store,
              ensureCredits: _coinsLayout.LayoutBroker.ensureCredits
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.DraftManagementContext.Provider, {
              value: value
            }, React.createElement(Control, {
              store: store,
              uri: props.uri
            })));
          }
        }
      });
      __pkg.exports.descriptor = [{
        "im": "./controller",
        "from": "Controller",
        "name": "Controller"
      }, {
        "im": "./views/components/ai-button",
        "from": "AIButton",
        "name": "AIButton"
      }, {
        "im": "./views/components/ai-button",
        "from": "AIIconButton",
        "name": "AIIconButton"
      }, {
        "im": "./views/form/container",
        "from": "DraftContainer",
        "name": "DraftContainer"
      }, {
        "im": "./views/header/index",
        "from": "Header",
        "name": "Header"
      }, {
        "im": "./views/index",
        "from": "View",
        "name": "View"
      }];
      // Module exports
      __pkg.exports.process = function ({
        require,
        prop,
        value
      }) {
        (require || prop === 'Controller') && _export("Controller", Controller = require ? require('./controller').Controller : value);
        (require || prop === 'AIButton') && _export("AIButton", AIButton = require ? require('./views/components/ai-button').AIButton : value);
        (require || prop === 'AIIconButton') && _export("AIIconButton", AIIconButton = require ? require('./views/components/ai-button').AIIconButton : value);
        (require || prop === 'DraftContainer') && _export("DraftContainer", DraftContainer = require ? require('./views/form/container').DraftContainer : value);
        (require || prop === 'Header') && _export("Header", Header = require ? require('./views/header/index').Header : value);
        (require || prop === 'View') && _export("View", View = require ? require('./views/index').View : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIndpemFyZCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX21vZGFsIiwiX3VpIiwiX2dlbmVyYXRpb25Gb3JtIiwiX2ZyYW1lck1vdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl9leGFtcGxlcyIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwic2V0VmFsdWVzIiwibm90ZXMiLCJ2aWV3Iiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNvaW5zQWxlcnQiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJDb2luc01vZGFsIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIndUZXh0cyIsImdyYWRlcyIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsIkxhbmd1YWdlRmllbGQiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsInBhcnNlSW50IiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2Vycm9yIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwic3RhdGUiLCJjb250aW51ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIkdyYWRlRmllbGQiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJBbmltYXRlZExhYmVsIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2dlbmVyYXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkQsSUFBQWMsTUFBQSxHQUFBakIsT0FBQTtVQVNNLFNBQVVrQixvQkFBb0JBLENBQUM7WUFBRWIsS0FBSztZQUFFTztVQUFHLENBQUU7WUFDbEQsTUFBTSxDQUFDTyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHSCxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDVixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQztZQUNwRixNQUFNUyxHQUFHLEdBQUdOLE1BQUEsQ0FBQUksT0FBSyxDQUFDRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBRTlCLE9BQ0NQLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGNBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQXdCQyxFQUFFLEVBQUVyQixLQUFLLENBQUNzQixLQUFLLENBQUNELEVBQUU7Y0FBRVAsVUFBVSxFQUFFQSxVQUFVO2NBQUVJLEdBQUcsRUFBRUE7WUFBRyxFQUFJLENBQzNFO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbEJBLElBQUFLLGdCQUFBLEdBQUE1QixPQUFBO1VBQ0EsSUFBQTZCLE1BQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBOEIsUUFBQSxHQUFBOUIsT0FBQTtVQUNBLElBQUErQixZQUFBLEdBQUEvQixPQUFBO1VBQ0EsSUFBQWdDLE1BQUEsR0FBQWhDLE9BQUE7VUFDQSxJQUFBaUMsZUFBQSxHQUFBakMsT0FBQTtVQU9NLE1BQU9PLFlBQWEsU0FBUXNCLE1BQUEsQ0FBQUssYUFBMkI7WUFDNUQsQ0FBQVAsS0FBTTtZQUNOOzs7WUFHQSxDQUFBUSxLQUFNLEdBQUcsS0FBSztZQUNkLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSVIsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBUyxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVyxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3RDO1lBQ0EsQ0FBQUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ2pDLElBQUlELG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFFQSxJQUFJRSxJQUFJQSxDQUFBO2NBQ1AsT0FBT1osUUFBQSxDQUFBYSxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxDQUFBRSxjQUFlO1lBQ2YsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sQ0FDTixHQUFHZixRQUFBLENBQUFhLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDSSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2dCQUMvQyxPQUFPO2tCQUFFQyxLQUFLLEVBQUVELElBQUksQ0FBQ3RCLEVBQUU7a0JBQUV3QixLQUFLLEVBQUVGLElBQUksQ0FBQ0c7Z0JBQUksQ0FBRTtjQUM1QyxDQUFDLENBQUMsQ0FDRjtZQUNGO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLElBQUksSUFBSSxDQUFDekIsS0FBSyxDQUFDMEIsS0FBSyxFQUFFO2dCQUNyQixPQUFPO2tCQUFFSixLQUFLLEVBQUUsSUFBSSxDQUFDdEIsS0FBSyxDQUFDMEIsS0FBSyxDQUFDM0IsRUFBRTtrQkFBRXdCLEtBQUssRUFBRSxJQUFJLENBQUN2QixLQUFLLENBQUMwQixLQUFLLENBQUNGO2dCQUFJLENBQUU7O1lBRXJFO1lBRUEsQ0FBQUcsUUFBUztZQUNULElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTztnQkFDTkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFqQyxLQUFNLENBQUNpQztlQUN0QjtZQUNGO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUExQixLQUFNLEdBQUcsSUFBSSxDQUFDUixLQUFLLENBQUNtQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUNQLGFBQWE7WUFDckU7WUFDQSxDQUFBUSxLQUFNLEdBQStCLElBQUkvQixNQUFBLENBQUFnQyxZQUFZLENBQUMvQixlQUFBLENBQUFnQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN2RSxJQUFJSCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTSxFQUFFZCxLQUFLO1lBQzFCO1lBRUEsSUFBSWtCLEtBQUtBLENBQUE7Y0FDUixPQUFPLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFBSixLQUFNLENBQUNJLEtBQUs7WUFDeEM7WUFDQSxDQUFBQyxtQkFBb0IsR0FBRyxJQUFJQyxHQUFHLEVBQWtCO1lBRWhEQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUNyQyxJQUFJLENBQUMsQ0FBQVIsS0FBTSxDQUFDUyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsV0FBVyxDQUFDO1lBQzNDO1lBRUFBLFdBQVcsR0FBR0EsQ0FBQSxLQUFLO2NBQ2xCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsQ0FBQztjQUUzQixJQUFJLElBQUksQ0FBQyxDQUFBWCxLQUFNLENBQUNJLEtBQUssRUFBRTtnQkFDdEJwQyxZQUFBLENBQUE0QyxZQUFZLENBQUNDLFVBQVUsR0FBRyxDQUN6QixDQUFDLElBQUksQ0FBQ2IsS0FBSyxDQUFDYSxVQUFVLENBQUNDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDaEQsQ0FBQyxJQUFJLENBQUNkLEtBQUssQ0FBQ2EsVUFBVSxDQUFDRSxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQ3RDOztZQUVILENBQUM7WUFDRC9ELElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVksS0FBTSxHQUFHb0QsU0FBUztjQUN2QixLQUFLLENBQUNaLEtBQUssR0FBRyxLQUFLO2NBQ25CLElBQUksQ0FBQyxDQUFBL0IsWUFBYSxHQUFHMkMsU0FBUztjQUM5QixJQUFJLENBQUNMLFlBQVksRUFBRTtjQUNuQjNDLFlBQUEsQ0FBQTRDLFlBQVksQ0FBQ0ssS0FBSyxFQUFFO1lBQ3JCO1lBRUFDLGlCQUFpQkEsQ0FBQTtjQUNoQixJQUFJLENBQUMsQ0FBQTdDLFlBQWEsR0FBRzJDLFNBQVM7Y0FDOUIsSUFBSSxDQUFDTCxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQzVCO1lBQ0EsTUFBTS9ELElBQUlBLENBQUNlLEVBQUU7Y0FDWixJQUFJO2dCQUNILElBQUlBLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQUMsS0FBTSxFQUFFRCxFQUFFLEtBQUtBLEVBQUUsRUFBRTtrQkFDakM7O2dCQUdELE1BQU13RCxLQUFLLEdBQUc7a0JBQUVDLElBQUksRUFBRSxPQUFPO2tCQUFFekQ7Z0JBQUUsQ0FBRTtnQkFDbkMsSUFBSSxDQUFDLENBQUFDLEtBQU0sR0FBRyxNQUFNQyxnQkFBQSxDQUFBd0QsY0FBYyxDQUFDdEUsR0FBRyxDQUFDb0UsS0FBSyxDQUFDO2dCQUM3QyxJQUFJLENBQUMsQ0FBQXZELEtBQU0sQ0FBQzZDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDRSxZQUFZLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxDQUFBdkMsS0FBTSxHQUFHLENBQUMsQ0FBQ1QsRUFBRTtnQkFFbEJLLFlBQUEsQ0FBQTRDLFlBQVksQ0FBQ1UsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBMUQsS0FBTSxFQUFFLElBQUksQ0FBQztnQkFDeENJLFlBQUEsQ0FBQTRDLFlBQVksQ0FBQ1csaUJBQWlCLEdBQUcsSUFBSSxDQUFDLENBQUFuRCxLQUFNO2dCQUU1QyxLQUFLLENBQUNnQyxLQUFLLEdBQUcsSUFBSTtnQkFDbEIsSUFBSSxDQUFDTyxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPYSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCO1lBRUFHLFFBQVFBLENBQUE7Y0FDUDtZQUFBO1lBR0QsTUFBTUMsSUFBSUEsQ0FBQ1QsS0FBSztjQUNmLElBQUksQ0FBQ1UsUUFBUSxHQUFHLElBQUk7Y0FFcEIsTUFBTSxJQUFJLENBQUNqRSxLQUFLLENBQUNrRSxTQUFTLENBQUNYLEtBQUssQ0FBQztjQUVqQyxJQUFJLENBQUNVLFFBQVEsR0FBRyxLQUFLO2NBQ3JCLElBQUksQ0FBQ2xCLFlBQVksRUFBRTtjQUNuQixJQUFJLENBQUMsQ0FBQXZDLEtBQU0sR0FBRyxJQUFJO2NBQ2xCSixZQUFBLENBQUE0QyxZQUFZLENBQUNXLGlCQUFpQixHQUFHLElBQUk7Y0FDckMsT0FBTyxJQUFJLENBQUMsQ0FBQTNELEtBQU07WUFDbkI7WUFFQW1FLGFBQWFBLENBQUNsQixVQUFVO2NBQ3ZCN0MsWUFBQSxDQUFBNEMsWUFBWSxDQUFDQyxVQUFVLEdBQUdBLFVBQVU7WUFDckM7WUFDQSxNQUFNbUIsS0FBS0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBcEUsS0FBTSxDQUFDcUUsVUFBVSxDQUFDRCxLQUFLLEVBQUU7Y0FDOUIsSUFBSSxDQUFDLENBQUE1RCxLQUFNLEdBQUc0QyxTQUFTO2NBQ3ZCLElBQUksQ0FBQ2tCLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdkI7WUFFQTs7Ozs7OztZQU9BLE1BQU1DLHdCQUF3QkEsQ0FBQztjQUFFeEM7WUFBUyxDQUFFO2NBQzNDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUFkLGNBQWUsR0FBRyxXQUFXO2dCQUNsQyxJQUFJLENBQUNnRCxRQUFRLEdBQUcsS0FBSztnQkFDckIsTUFBTU8sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDeEUsS0FBSyxDQUFDdUUsd0JBQXdCLENBQUM7a0JBQUV4QztnQkFBUyxDQUFFLENBQUM7Z0JBQ3JFLElBQUksQ0FBQyxDQUFBdEIsWUFBYSxHQUFHK0QsSUFBSTtnQkFFekIsSUFBSSxDQUFDekIsWUFBWSxDQUFDLFFBQVEsQ0FBQztlQUMzQixDQUFDLE9BQU9hLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBM0MsY0FBZSxHQUFHbUMsU0FBUztnQkFDaEMsSUFBSSxDQUFDYSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNUSxpQkFBaUJBLENBQUM7Y0FBRTFDLFNBQVM7Y0FBRXRCO1lBQVksQ0FBRTtjQUNsRCxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBUSxjQUFlLEdBQUcsbUJBQW1CO2dCQUMxQyxJQUFJLENBQUNnRCxRQUFRLEdBQUcsSUFBSTtnQkFFcEIsSUFBSSxJQUFJLENBQUMsQ0FBQXhCLG1CQUFvQixDQUFDaUMsR0FBRyxDQUFDakUsWUFBWSxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQWdDLG1CQUFvQixDQUFDdEQsR0FBRyxDQUFDc0IsWUFBWSxDQUFDO2dCQUVuRyxNQUFNK0QsSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDeEUsS0FBSyxDQUFDeUUsaUJBQWlCLENBQUM7a0JBQUUxQyxTQUFTO2tCQUFFdEI7Z0JBQVksQ0FBRSxDQUFDO2dCQUM1RSxJQUFJLENBQUMsQ0FBQWdDLG1CQUFvQixDQUFDa0MsR0FBRyxDQUFDNUMsU0FBUyxFQUFFeUMsSUFBSSxDQUFDekMsU0FBUyxDQUFDO2dCQUN4RCxJQUFJLENBQUMvQixLQUFLLENBQUNnRSxJQUFJO2dCQUNmLElBQUksQ0FBQyxDQUFBaEUsS0FBTSxDQUFDK0IsU0FBUyxHQUFHeUMsSUFBSSxDQUFDekMsU0FBUztnQkFDdEMsSUFBSSxDQUFDLENBQUF0QixZQUFhLEdBQUcyQyxTQUFTO2dCQUM5QjtnQkFDQSxJQUFJLENBQUMsQ0FBQXZDLG9CQUFxQixHQUFHLElBQUlDLEdBQUcsRUFBRTtnQkFDdEMsSUFBSSxDQUFDaUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLENBQUMsQ0FBQS9DLEtBQU0sQ0FBQytCLFNBQVM7ZUFDNUIsQ0FBQyxPQUFPNkIsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUEzQyxjQUFlLEdBQUdtQyxTQUFTO2dCQUNoQyxJQUFJLENBQUNhLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1XLHdCQUF3QkEsQ0FBQ3JCLEtBQUs7Y0FDbkMsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQXRDLGNBQWUsR0FBRyxpQkFBaUI7Z0JBQ3hDLElBQUksQ0FBQzRELGFBQWEsR0FBRyxJQUFJO2dCQUN6QixNQUFNTCxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUN4RSxLQUFLLENBQUM4RSxtQkFBbUIsQ0FBQztrQkFBRSxHQUFHdkI7Z0JBQUssQ0FBRSxDQUFDO2VBQy9ELENBQUMsT0FBT0ssQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUEzQyxjQUFlLEdBQUdtQyxTQUFTO2dCQUNoQyxJQUFJLENBQUN5QixhQUFhLEdBQUcsS0FBSzs7WUFFNUI7O1VBQ0F4RixPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxTkQsSUFBQW1HLEtBQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBZ0MsTUFBQSxHQUFBaEMsT0FBQTtVQUVNLFNBQVUyRyxnQkFBZ0JBLENBQUN6QyxTQUFTLEVBQUUwQyxRQUFRO1lBQ25ELE1BQU0sQ0FBQ3pDLEtBQUssRUFBRTBDLFFBQVEsQ0FBQyxHQUFHSCxLQUFLLENBQUNwRixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQy9DLE1BQU0sQ0FBQ3lDLEtBQUssRUFBRStDLFFBQVEsQ0FBQyxHQUFHSixLQUFLLENBQUNwRixRQUFRLENBQUMsRUFBRSxDQUFDO1lBRTVDb0YsS0FBSyxDQUFDSyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxVQUFVLEdBQUcsSUFBSWhGLE1BQUEsQ0FBQWdDLFlBQVksQ0FBQ0UsU0FBUyxDQUFDO2NBQzlDLE1BQU1RLFlBQVksR0FBR0EsQ0FBQSxLQUFLO2dCQUN6QixJQUFJekIsS0FBSyxHQUFHK0QsVUFBVSxDQUFDL0QsS0FBSztnQkFDNUI2RCxRQUFRLENBQUM3RCxLQUFLLENBQUM7Z0JBQ2Y0RCxRQUFRLENBQUNHLFVBQVUsQ0FBQzdDLEtBQUssQ0FBQztnQkFDMUIsSUFBSTZDLFVBQVUsQ0FBQzdDLEtBQUssRUFBRXlDLFFBQVEsQ0FBQzNELEtBQUssQ0FBQztjQUN0QyxDQUFDO2NBQ0QrRCxVQUFVLENBQUN4QyxFQUFFLENBQUMsUUFBUSxFQUFFRSxZQUFZLENBQUM7Y0FDckNBLFlBQVksRUFBRTtjQUNkLE9BQU8sTUFBSztnQkFDWHNDLFVBQVUsQ0FBQ3hDLEVBQUUsQ0FBQyxRQUFRLEVBQUVFLFlBQVksQ0FBQztjQUN0QyxDQUFDO1lBQ0YsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNOLE1BQU11QyxPQUFPLEdBQUc5QyxLQUFLLElBQUksQ0FBQyxDQUFDSixLQUFLO1lBQ2hDLE9BQU8sQ0FBQ2tELE9BQU8sRUFBRWxELEtBQUssQ0FBQztVQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQTlDLE1BQUEsR0FBQWpCLE9BQUE7VUFTTyxNQUFNa0gsWUFBWSxHQUFBbEcsT0FBQSxDQUFBa0csWUFBQSxHQUFHakcsTUFBQSxDQUFBSSxPQUFLLENBQUM4RixhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUNsRSxNQUFNQyxlQUFlLEdBQUdBLENBQUEsS0FBTW5HLE1BQUEsQ0FBQUksT0FBSyxDQUFDZ0csVUFBVSxDQUFDSCxZQUFZLENBQUM7VUFBQ2xHLE9BQUEsQ0FBQW9HLGVBQUEsR0FBQUEsZUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNWcEUsSUFBQW5HLE1BQUEsR0FBQWpCLE9BQUE7VUFJQSxJQUFBc0gsV0FBQSxHQUFBdEgsT0FBQTtVQUVBLElBQUF1SCxLQUFBLEdBQUF2SCxPQUFBO1VBQ0EsSUFBQXdILFFBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBeUgsU0FBQSxHQUFBekgsT0FBQTtVQUVNLFNBQVUwSCxrQkFBa0JBLENBQUE7WUFDakMsTUFBTTtjQUFFM0Q7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFQyxPQUFPO2NBQUVDO1lBQVEsQ0FBRSxHQUFHLElBQUFKLFNBQUEsQ0FBQUwsZUFBZSxHQUFFO1lBQy9DLE1BQU0sQ0FBQzlELFFBQVEsRUFBRXdFLFdBQVcsQ0FBQyxHQUFHN0csTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFcEQsTUFBTXlHLE1BQU0sR0FBR0EsQ0FBQSxLQUFNSCxPQUFPLENBQUMsV0FBVyxDQUFDO1lBQ3pDLE1BQU1JLElBQUksR0FBR0EsQ0FBQztjQUFFaEY7WUFBSSxDQUFFLEtBQUk7Y0FDekIsTUFBTWlGLE9BQU8sR0FBR0EsQ0FBQSxLQUFLO2dCQUNwQkosUUFBUSxDQUFDN0UsSUFBSSxDQUFDO2dCQUNkNEUsT0FBTyxDQUFDLGFBQWEsQ0FBQztjQUN2QixDQUFDO2NBQ0QsT0FDQzNHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2dCQUFJeUcsU0FBUyxFQUFDO2NBQVksR0FDekJqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUFPdUIsSUFBSSxDQUFRLEVBQ25CL0IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzZGLFdBQUEsQ0FBQWEsTUFBTTtnQkFBQ0MsUUFBUTtnQkFBQ0MsT0FBTyxFQUFDLFNBQVM7Z0JBQUNKLE9BQU8sRUFBRUE7Y0FBTyxHQUNqRGxFLEtBQUssQ0FBQ3VFLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FDN0IsQ0FDSixDQUNGO1lBRVAsQ0FBQztZQUNELE9BQ0N4SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFBUixNQUFBLENBQUFJLE9BQUEsQ0FBQXFILFFBQUEsUUFDQ3pILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUM7WUFBMkIsR0FDekNqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLc0MsS0FBSyxDQUFDdUUsTUFBTSxDQUFDQyxRQUFRLENBQUNJLEtBQUssQ0FBTSxFQUN0QzFILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM4RixLQUFBLENBQUFxQixJQUFJO2NBQUNWLFNBQVMsRUFBQyxnQ0FBZ0M7Y0FBQ1csS0FBSyxFQUFFOUUsS0FBSyxDQUFDdUUsTUFBTSxDQUFDQyxRQUFRLENBQUNNLEtBQUs7Y0FBRUMsT0FBTyxFQUFFZDtZQUFJLEVBQUksRUFFdEcvRyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLeUcsU0FBUyxFQUFDO1lBQStCLEdBQzdDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS3lHLFNBQVMsRUFBQztZQUFnQixHQUM5QmpILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2RixXQUFBLENBQUFhLE1BQU07Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osT0FBTyxFQUFFRjtZQUFNLEdBQ3ZDaEUsS0FBSyxDQUFDdUUsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQ08sSUFBSSxDQUMzQixDQUNKLENBQ0QsQ0FDRCxDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaERBLElBQUE5SCxNQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFFQSxJQUFBZ0osU0FBQSxHQUFBaEosT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXlILFNBQUEsR0FBQXpILE9BQUE7VUFDTSxTQUFVaUosY0FBY0EsQ0FBQztZQUFFQztVQUFNLENBQUU7WUFDeEMsTUFBTTtjQUFFbkYsS0FBSztjQUFFMUQsS0FBSztjQUFFd0QsTUFBTTtjQUFFc0Y7WUFBYSxDQUFFLEdBQUcsSUFBQTNCLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDbEUsTUFBTTtjQUFFQztZQUFPLENBQUUsR0FBRyxJQUFBSCxTQUFBLENBQUFMLGVBQWUsR0FBRTtZQUNyQyxNQUFNLENBQUN4QixRQUFRLEVBQUV3RCxXQUFXLENBQUMsR0FBR25JLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELE1BQU0yRyxPQUFPLEdBQUdBLENBQUEsS0FBTWtCLGFBQWEsQ0FBQyxNQUFNdkIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pFLE9BQ0MzRyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLeUcsU0FBUyxFQUFDO1lBQWUsR0FDN0JqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxpQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsYUFBS3NDLEtBQUssQ0FBQ3NGLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUNYLEtBQUssQ0FBTSxFQUM5QzFILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUM7WUFBc0IsR0FDcENqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUFPc0MsS0FBSyxDQUFDc0YsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFRLENBQ25ELENBQ0UsRUFDVHRJLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQVF5RyxTQUFTLEVBQUM7WUFBMEMsR0FDM0RqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDNkYsV0FBQSxDQUFBYSxNQUFNO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNELFFBQVE7Y0FBQ0gsT0FBTyxFQUFFaUI7WUFBTSxHQUNoRG5GLEtBQUssQ0FBQ3NGLE1BQU0sQ0FBQ0MsZ0JBQWdCLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxDQUNyQyxFQUNUeEksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3VILFNBQUEsQ0FBQVUsUUFBUTtjQUFDckIsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osT0FBTyxFQUFFQTtZQUFPLEdBQzFDbEUsS0FBSyxDQUFDc0YsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQ0UsT0FBTyxDQUFDRyxRQUFRLENBQ3JDLENBQ0gsQ0FDSjtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9CQSxJQUFBMUksTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUE0SixNQUFBLEdBQUE1SixPQUFBO1VBRUEsSUFBQTZKLEdBQUEsR0FBQTdKLE9BQUE7VUFFQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUE4SixlQUFBLEdBQUE5SixPQUFBO1VBQ0EsSUFBQStKLGFBQUEsR0FBQS9KLE9BQUE7VUFDQSxJQUFBZ0ssWUFBQSxHQUFBaEssT0FBQTtVQUNBLElBQUF5SCxTQUFBLEdBQUF6SCxPQUFBO1VBQ0EsSUFBQWlLLFNBQUEsR0FBQWpLLE9BQUE7VUFDTSxTQUFVa0sseUJBQXlCQSxDQUFDO1lBQUV4SixJQUFJO1lBQUV5SjtVQUFPLENBQUU7WUFDMUQsTUFBTTtjQUFFcEcsS0FBSztjQUFFMUQsS0FBSztjQUFFd0QsTUFBTTtjQUFFdUcsU0FBUztjQUFFakI7WUFBYSxDQUFFLEdBQUcsSUFBQTNCLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDN0UsTUFBTSxDQUFDL0IsUUFBUSxFQUFFd0QsV0FBVyxDQUFDLEdBQUduSSxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUMrSSxLQUFLLEVBQUV4QyxRQUFRLENBQUMsR0FBRzVHLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQVMsRUFBRSxDQUFDO1lBQ3BELE1BQU0sQ0FBQ2dKLElBQUksRUFBRTFDLE9BQU8sQ0FBQyxHQUFHM0csTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxXQUFXLENBQUM7WUFFbkQsSUFBSSxDQUFDWixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBRXRCLE1BQU13SSxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXLENBQUUsQ0FBQztZQUM3QixNQUFNcUIsVUFBVSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUM3QixJQUFJO2dCQUNIbkIsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFFakIsTUFBTS9JLEtBQUssQ0FBQ2tHLHdCQUF3QixDQUFDO2tCQUFFLEdBQUcxQyxNQUFNO2tCQUFFd0c7Z0JBQUssQ0FBRSxDQUFDO2VBQzFELENBQUMsT0FBTzlFLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNUNkQsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUVELE1BQU1vQixRQUFRLEdBQUc7Y0FDaEJDLFNBQVMsRUFBRVgsZUFBQSxDQUFBYixjQUFjO2NBQ3pCeUIsV0FBVyxFQUFFVixZQUFBLENBQUFXLGVBQWU7Y0FDNUJwQyxRQUFRLEVBQUUwQixTQUFBLENBQUF2QzthQUNWO1lBQ0QsTUFBTWtELE9BQU8sR0FBR0osUUFBUSxDQUFDRixJQUFJLENBQUM7WUFDOUIsTUFBTU8sV0FBVyxHQUFHQSxDQUFBLEtBQUs7Y0FDeEJoRCxRQUFRLENBQUMsRUFBRSxDQUFDO2NBQ1pELE9BQU8sQ0FBQyxXQUFXLENBQUM7Y0FDcEJ1QyxPQUFPLEVBQUU7WUFDVixDQUFDO1lBQ0QsT0FDQ2xKLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNnRyxTQUFBLENBQUFQLFlBQVksQ0FBQzRELFFBQVE7Y0FBQzdILEtBQUssRUFBRTtnQkFBRXFILElBQUk7Z0JBQUVDLFVBQVU7Z0JBQUUzQyxPQUFPO2dCQUFFeUMsS0FBSztnQkFBRXhDO2NBQVE7WUFBRSxHQUMzRTVHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSSxNQUFBLENBQUFtQixLQUFLO2NBQUNySyxJQUFJO2NBQUN5SixPQUFPLEVBQUVVLFdBQVc7Y0FBRUcsYUFBYSxFQUFFO1lBQUssR0FDckQvSixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDc0ksYUFBQSxDQUFBa0IsZUFBZSxRQUNmaEssTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21KLE9BQU87Y0FBQzFCLE1BQU0sRUFBRUEsTUFBTTtjQUFFZ0MsR0FBRyxFQUFDO1lBQVMsRUFBRyxFQUN6Q2pLLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvSSxHQUFBLENBQUFzQixnQkFBZ0I7Y0FBQ0QsR0FBRyxFQUFDLFdBQVc7Y0FBQ3RGLFFBQVEsRUFBRUE7WUFBUSxFQUFJLENBQ3ZDLENBQ1gsQ0FDZTtVQUUxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyREEsSUFBQTNFLE1BQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBb0wsS0FBQSxHQUFBcEwsT0FBQTtVQUNBLElBQUE2SixHQUFBLEdBQUE3SixPQUFBO1VBQ0EsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFHQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF5SCxTQUFBLEdBQUF6SCxPQUFBO1VBRU0sU0FBVTJLLGVBQWVBLENBQUE7WUFDOUIsTUFBTTtjQUFFNUc7WUFBSyxDQUFFLEdBQUcsSUFBQXlELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDcEMsTUFBTTtjQUFFQyxPQUFPO2NBQUV5QyxLQUFLO2NBQUV4QyxRQUFRO2NBQUUwQztZQUFVLENBQUUsR0FBRyxJQUFBOUMsU0FBQSxDQUFBTCxlQUFlLEdBQUU7WUFFbEUsTUFBTSxDQUFDeEIsUUFBUSxFQUFFd0QsV0FBVyxDQUFDLEdBQUduSSxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxNQUFNK0osTUFBTSxHQUFHO2NBQ2RDLFFBQVEsRUFBRUMsS0FBSyxJQUFHO2dCQUNqQjFELFFBQVEsQ0FBQzBELEtBQUssQ0FBQ0MsYUFBYSxDQUFDdkksS0FBSyxDQUFDO2NBQ3BDLENBQUM7Y0FDRGdGLE9BQU8sRUFBRXNDLFVBQVU7Y0FDbkIzQyxPQUFPLEVBQUVBLENBQUEsS0FBTUEsT0FBTyxDQUFDLFVBQVUsQ0FBQztjQUNsQ0csTUFBTSxFQUFFQSxDQUFBLEtBQU1ILE9BQU8sQ0FBQyxXQUFXO2FBQ2pDO1lBRUQsT0FDQzNHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUFSLE1BQUEsQ0FBQUksT0FBQSxDQUFBcUgsUUFBQSxRQUNDekgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzJKLEtBQUEsQ0FBQUssSUFBSTtjQUFDdkQsU0FBUyxFQUFDO1lBQTJCLEdBQzFDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtzQyxLQUFLLENBQUN1RSxNQUFNLENBQUN0QyxVQUFVLENBQUMyQyxLQUFLLENBQU0sRUFDeEMxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxZQUFJc0MsS0FBSyxDQUFDdUUsTUFBTSxDQUFDdEMsVUFBVSxDQUFDdUQsV0FBVyxDQUFLLENBQ3BDLEVBT1R0SSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDMkosS0FBQSxDQUFBTSxRQUFRO2NBQ1J4SSxLQUFLLEVBQUVhLEtBQUssQ0FBQ3VFLE1BQU0sQ0FBQ3FELFFBQVEsQ0FBQ3pJLEtBQUs7Y0FDbENDLElBQUksRUFBQyxjQUFjO2NBQ25CRixLQUFLLEVBQUVvSCxLQUFLO2NBQ1ppQixRQUFRLEVBQUVELE1BQU0sQ0FBQ0MsUUFBUTtjQUN6Qk0sV0FBVyxFQUFFN0gsS0FBSyxDQUFDdUUsTUFBTSxDQUFDcUQsUUFBUSxDQUFDQztZQUFXLEVBQzdDLENBQ0ksRUFDUDNLLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQVF5RyxTQUFTLEVBQUM7WUFBUyxHQUMxQmpILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2RixXQUFBLENBQUFhLE1BQU07Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ0osT0FBTyxFQUFFb0QsTUFBTSxDQUFDcEQ7WUFBTyxHQUMvQ2xFLEtBQUssQ0FBQ3lFLE9BQU8sQ0FBQ21CLFFBQVEsQ0FDZixDQUNELEVBQ1QxSSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDNkYsV0FBQSxDQUFBYSxNQUFNO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNKLE9BQU8sRUFBRW9ELE1BQU0sQ0FBQ3REO1lBQU0sR0FDOUNoRSxLQUFLLENBQUN5RSxPQUFPLENBQUNPLElBQUksQ0FDWCxFQUNUOUgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29JLEdBQUEsQ0FBQXNCLGdCQUFnQjtjQUFDdkYsUUFBUSxFQUFFQTtZQUFRLEVBQUksQ0FDdEM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6REEsSUFBQTNFLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBNEosTUFBQSxHQUFBNUosT0FBQTtVQUNBLElBQUE2SixHQUFBLEdBQUE3SixPQUFBO1VBQ00sU0FBVTZMLFVBQVVBLENBQUM7WUFBRW5MLElBQUk7WUFBRXlKLE9BQU87WUFBRXBHO1VBQUssQ0FBRTtZQUNsRCxJQUFJLENBQUNyRCxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCcUQsS0FBSyxHQUFHQSxLQUFLLENBQUMrSCxLQUFLLENBQUNDLEtBQUs7WUFFekIsT0FDQzlLLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNtSSxNQUFBLENBQUFvQyxVQUFVO2NBQUN0TCxJQUFJO2NBQUN1TCxXQUFXLEVBQUVsSSxLQUFLLENBQUNtSSxNQUFNO2NBQUVDLFNBQVMsRUFBRWhDLE9BQU87Y0FBRUEsT0FBTyxFQUFFQTtZQUFPLEdBQy9FbEosTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtzQyxLQUFLLENBQUM0RSxLQUFLLENBQU0sRUFDdEIxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb0ksR0FBQSxDQUFBdUMsT0FBTztjQUFDQyxPQUFPLEVBQUMsS0FBSztjQUFDbkUsU0FBUyxFQUFDO1lBQUksRUFBRyxFQUN4Q2pILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLFlBQUlzQyxLQUFLLENBQUN3RixXQUFXLENBQUssQ0FDbEIsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQSxJQUFBdEksTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUE0SixNQUFBLEdBQUE1SixPQUFBO1VBQ0EsSUFBQTZKLEdBQUEsR0FBQTdKLE9BQUE7VUFDTSxTQUFVc00sVUFBVUEsQ0FBQztZQUFFak0sS0FBSztZQUFFSyxJQUFJO1lBQUV5SixPQUFPO1lBQUVwRztVQUFLLENBQUU7WUFDekQsSUFBSSxDQUFDckQsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNLENBQUNrRixRQUFRLEVBQUV3RCxXQUFXLENBQUMsR0FBR25JLE1BQUEsQ0FBQUksT0FBSyxDQUFDQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3JELE1BQU0sQ0FBQ21FLEtBQUssRUFBRThHLFFBQVEsQ0FBQyxHQUFHdEwsTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsRUFBRTtZQUMxQ3lDLEtBQUssR0FBR0EsS0FBSyxDQUFDK0gsS0FBSyxDQUFDVSxLQUFLO1lBRXpCLE1BQU1MLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSC9DLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU0vSSxLQUFLLENBQUNzQixLQUFLLENBQUM4SyxVQUFVLEVBQUU7Z0JBQzlCdEMsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPNUUsQ0FBQyxFQUFFO2dCQUNYZ0gsUUFBUSxDQUFDeEksS0FBSyxDQUFDMkksTUFBTSxDQUFDQyxTQUFTLENBQUM7ZUFDaEMsU0FBUztnQkFDVHZELFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxPQUNDbkksTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ21JLE1BQUEsQ0FBQWdELFlBQVk7Y0FDWmxNLElBQUk7Y0FDSndILFNBQVMsRUFBQyxVQUFVO2NBQ3BCTSxPQUFPLEVBQUU7Z0JBQ1JxRSxPQUFPLEVBQUU7a0JBQUUzSixLQUFLLEVBQUVhLEtBQUssQ0FBQ3lFLE9BQU8sQ0FBQ3FFLE9BQU87a0JBQUV4RSxPQUFPLEVBQUU7Z0JBQVMsQ0FBRTtnQkFDN0R5RSxNQUFNLEVBQUU7a0JBQUU1SixLQUFLLEVBQUVhLEtBQUssQ0FBQ3lFLE9BQU8sQ0FBQ3NFLE1BQU07a0JBQUV6RSxPQUFPLEVBQUUsU0FBUztrQkFBRUQsUUFBUSxFQUFFO2dCQUFJO2VBQ3pFO2NBQ0QrRCxTQUFTLEVBQUVBLFNBQVM7Y0FDcEJZLFFBQVEsRUFBRTVDLE9BQU87Y0FDakJBLE9BQU8sRUFBRUE7WUFBTyxHQUVoQmxKLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGlCQUNDUixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxhQUFLc0MsS0FBSyxDQUFDNEUsS0FBSyxDQUFNLEVBQ3RCMUgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29JLEdBQUEsQ0FBQW1ELGFBQWE7Y0FBQ3ZILEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQy9CeEUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29JLEdBQUEsQ0FBQXVDLE9BQU87Y0FBQ0MsT0FBTyxFQUFDLEtBQUs7Y0FBQ25FLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeENqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxZQUFJc0MsS0FBSyxDQUFDd0YsV0FBVyxDQUFLLENBQ2xCLENBQ0s7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBdEksTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUFpTixNQUFBLEdBQUFqTixPQUFBO1VBQ0EsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFDQSxJQUFBa04sT0FBQSxHQUFBbE4sT0FBQTtVQUNBLElBQUErQixZQUFBLEdBQUEvQixPQUFBO1VBRU87VUFBVSxTQUFVMEosUUFBUUEsQ0FBQztZQUFFeUQsUUFBUTtZQUFFbEYsT0FBTztZQUFFLEdBQUdtRjtVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU10TCxZQUFBLENBQUE0QyxZQUFZLENBQUN3RSxhQUFhLENBQUNsQixPQUFPLENBQUM7WUFDN0QsT0FDQ2hILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2RixXQUFBLENBQUFhLE1BQU07Y0FBQSxHQUFLaUYsS0FBSztjQUFFRSxJQUFJLEVBQUVMLE1BQUEsQ0FBQU0sS0FBSyxDQUFDQyxPQUFPO2NBQUV2RixPQUFPLEVBQUVvRjtZQUFXLEdBQzFERixRQUFRLENBQ0Q7VUFFWDtVQUVPO1VBQVUsU0FBVU0sWUFBWUEsQ0FBQztZQUFFTixRQUFRO1lBQUVsRixPQUFPO1lBQUUsR0FBR21GO1VBQUssQ0FBRTtZQUN0RSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTXRMLFlBQUEsQ0FBQTRDLFlBQVksQ0FBQ3dFLGFBQWEsQ0FBQ2xCLE9BQU8sQ0FBQztZQUM3RCxPQUNDaEgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3lMLE9BQUEsQ0FBQVEsVUFBVTtjQUFBLEdBQUtOLEtBQUs7Y0FBRUUsSUFBSSxFQUFFTCxNQUFBLENBQUFNLEtBQUssQ0FBQ0MsT0FBTztjQUFFdkYsT0FBTyxFQUFFb0Y7WUFBVyxHQUM5REYsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUFsTSxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJOLE1BQUEsR0FBQTNOLE9BQUE7VUFFTSxTQUFVZ04sYUFBYUEsQ0FBQztZQUFFakosS0FBSztZQUFFMEI7VUFBSyxDQUFpRDtZQUM1RjtZQUVBLE9BQU94RSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDa00sTUFBQSxDQUFBQyxLQUFLO2NBQUN2RixPQUFPLEVBQUM7WUFBTyxHQUFFdEUsS0FBSyxDQUFDMEIsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXhFLE1BQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBc0gsV0FBQSxHQUFBdEgsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBUU0sU0FBVTZOLFdBQVdBLENBQUM7WUFBRUMsV0FBVyxHQUFHLE1BQU07WUFBRUMsUUFBUTtZQUFFQyxRQUFRLEdBQUcsS0FBSztZQUFFQyxRQUFRLEdBQUc7VUFBSSxDQUFnQjtZQUM5RyxNQUFNO2NBQUVsSyxLQUFLO2NBQUVtSyxVQUFVO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUEzRyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXpELE1BQU15RyxVQUFVLEdBQUdySyxLQUFLLENBQUN5RSxPQUFPLENBQUNzRixXQUFXLENBQUM7WUFFN0MsT0FDQzdNLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGlCQUNFd00sUUFBUSxJQUNSaE4sTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzZGLFdBQUEsQ0FBQWEsTUFBTTtjQUFDRCxTQUFTLEVBQUMsY0FBYztjQUFDRyxPQUFPLEVBQUMsU0FBUztjQUFDRCxRQUFRO2NBQUNILE9BQU8sRUFBRUEsQ0FBQSxLQUFNaUcsVUFBVSxDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUFDLEdBQ2hHcEssS0FBSyxDQUFDeUUsT0FBTyxDQUFDTyxJQUFJLENBRXBCLEVBQ0Q5SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDNkYsV0FBQSxDQUFBYSxNQUFNO2NBQ05ELFNBQVMsRUFBQyxjQUFjO2NBQ3hCL0MsSUFBSSxFQUFDLFFBQVE7Y0FDYmtELE9BQU8sRUFBQyxTQUFTO2NBQ2pCSixPQUFPLEVBQUU4RixRQUFRO2NBQ2pCQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJLLE1BQU0sRUFBQztZQUFJLEdBRVZELFVBQVUsQ0FDSCxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUFuTixNQUFBLEdBQUFqQixPQUFBO1VBTU0sU0FBVXNPLFVBQVVBLENBQUM7WUFBRW5CLFFBQVE7WUFBRW9CLEdBQUcsR0FBRztVQUFNLENBQW1CO1lBQ3JFLE1BQU0zRCxPQUFPLEdBQUcyRCxHQUFHO1lBQ25CLE9BQU90TixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDbUosT0FBTztjQUFDNEQsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRXRCO2NBQVE7WUFBRSxFQUFJO1VBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RNLFNBQVV1QixVQUFVQSxDQUFDM0ssS0FBSztZQUMvQixPQUFPO2NBQ05QLFFBQVEsRUFBRSxDQUNULENBQUNPLEtBQUssQ0FBQ1AsUUFBUSxDQUFDbUwsTUFBTSxFQUFFNUssS0FBSyxDQUFDUCxRQUFRLENBQUNtTCxNQUFNLENBQUMsRUFDOUMsQ0FBQzVLLEtBQUssQ0FBQ1AsUUFBUSxDQUFDb0wsVUFBVSxFQUFFN0ssS0FBSyxDQUFDUCxRQUFRLENBQUNvTCxVQUFVLENBQUMsRUFDdEQsQ0FBQzdLLEtBQUssQ0FBQ1AsUUFBUSxDQUFDcUwsT0FBTyxFQUFFOUssS0FBSyxDQUFDUCxRQUFRLENBQUNxTCxPQUFPLENBQUMsQ0FDaEQ7Y0FDRHBMLFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFTSxLQUFLLENBQUNOLFFBQVEsQ0FBQ3FMLEtBQUssQ0FBQyxFQUM1QixDQUFDLElBQUksRUFBRS9LLEtBQUssQ0FBQ04sUUFBUSxDQUFDc0wsUUFBUSxDQUFDLEVBQy9CLENBQUMsSUFBSSxFQUFFaEwsS0FBSyxDQUFDTixRQUFRLENBQUN1TCxRQUFRLENBQUMsQ0FDL0I7Y0FDRHBMLFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFRyxLQUFLLENBQUNrTCxTQUFTLENBQUNDLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRW5MLEtBQUssQ0FBQ2tMLFNBQVMsQ0FBQ0UsRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFcEwsS0FBSyxDQUFDa0wsU0FBUyxDQUFDRyxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUVyTCxLQUFLLENBQUNrTCxTQUFTLENBQUNJLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRXRMLEtBQUssQ0FBQ2tMLFNBQVMsQ0FBQ0ssRUFBRSxDQUFDO2FBRTNCO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBLElBQUFyTyxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUF1UCxRQUFBLEdBQUF2UCxPQUFBO1VBQ00sU0FBVXdQLFdBQVdBLENBQUM7WUFBRXJNLElBQUk7WUFBRW1JLFFBQVE7WUFBRXBJLEtBQUs7WUFBRUksUUFBUSxHQUFHO1VBQUMsQ0FBRTtZQUNsRSxNQUFNO2NBQUVTLEtBQUs7Y0FBRTFEO1lBQUssQ0FBRSxHQUFHLElBQUFtSCxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQzNDLE1BQU1xRyxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFM04sS0FBSyxDQUFDdUYsUUFBUSxJQUFJdkYsS0FBSyxDQUFDc0IsS0FBSyxDQUFDaUU7WUFBUSxDQUFFO1lBQ3JFLE1BQU1PLElBQUksR0FBRyxJQUFBb0osUUFBQSxDQUFBYixVQUFVLEVBQUMzSyxLQUFLLENBQUM7WUFFOUIsTUFBTTBMLE1BQU0sR0FBR3RKLElBQUksQ0FBQ2hELElBQUksQ0FBQyxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDRSxLQUFLLEVBQUVDLEtBQUssQ0FBQyxFQUFFd00sS0FBSyxLQUNuRHpPLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2RixXQUFBLENBQUFhLE1BQU07Y0FBQ2hGLElBQUksRUFBRUEsSUFBSTtjQUFBLEdBQU02SyxRQUFRO2NBQUEsY0FBYzBCLEtBQUs7Y0FBRXpILE9BQU8sRUFBRXFELFFBQVE7Y0FBRUosR0FBRyxFQUFFd0UsS0FBSztjQUFFek0sS0FBSyxFQUFFQTtZQUFLLEdBQzlGQyxLQUFLLENBRVAsQ0FBQztZQUVGLE9BQ0NqQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLeUcsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBT2tPLE9BQU8sRUFBRXhNO1lBQUksR0FBR0QsS0FBSyxDQUFTLEVBQ3JDakMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzZGLFdBQUEsQ0FBQXNJLFdBQVc7Y0FBQ3RNLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU0wSztZQUFRLEdBQzNDeUIsTUFBTSxDQUNNLENBQ1Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXhPLE1BQUEsR0FBQWpCLE9BQUE7VUFvQk8sTUFBTTZQLGFBQWEsR0FBQTdPLE9BQUEsQ0FBQTZPLGFBQUEsR0FBRzVPLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEYsYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFDOUQsTUFBTVEsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTTFHLE1BQUEsQ0FBQUksT0FBSyxDQUFDZ0csVUFBVSxDQUFDd0ksYUFBYSxDQUFDO1VBQUM3TyxPQUFBLENBQUEyRyxnQkFBQSxHQUFBQSxnQkFBQTtVQU8vRCxNQUFNbUksc0JBQXNCLEdBQUE5TyxPQUFBLENBQUE4TyxzQkFBQSxHQUFHN08sTUFBQSxDQUFBSSxPQUFLLENBQUM4RixhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUM1RSxNQUFNNEkseUJBQXlCLEdBQUdBLENBQUEsS0FBTTlPLE1BQUEsQ0FBQUksT0FBSyxDQUFDZ0csVUFBVSxDQUFDeUksc0JBQXNCLENBQUM7VUFBQzlPLE9BQUEsQ0FBQStPLHlCQUFBLEdBQUFBLHlCQUFBO1VBT2pGLE1BQU1DLGtCQUFrQixHQUFBaFAsT0FBQSxDQUFBZ1Asa0JBQUEsR0FBRy9PLE1BQUEsQ0FBQUksT0FBSyxDQUFDOEYsYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFDMUUsTUFBTThJLHFCQUFxQixHQUFHQSxDQUFBLEtBQU1oUCxNQUFBLENBQUFJLE9BQUssQ0FBQ2dHLFVBQVUsQ0FBQzJJLGtCQUFrQixDQUFDO1VBQUNoUCxPQUFBLENBQUFpUCxxQkFBQSxHQUFBQSxxQkFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyQ2hGLElBQUFoUCxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQStKLGFBQUEsR0FBQS9KLE9BQUE7VUFFTSxTQUFVa1EsV0FBV0EsQ0FBQztZQUFFL0MsUUFBUTtZQUFFZ0Q7VUFBRyxJQUF5QjtZQUFFaEQsUUFBUSxFQUFFLElBQUk7WUFBRWdELEdBQUcsRUFBRTtVQUFFLENBQUU7WUFDOUYsT0FDQ2xQLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNzSSxhQUFBLENBQUFxRyxNQUFNLENBQUNDLEdBQUc7Y0FDVm5JLFNBQVMsRUFBQyxzQkFBc0I7Y0FDaENvSSxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWGhOLFFBQVEsRUFBRSxHQUFHO2tCQUNiaU4sS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWGhOLFFBQVEsRUFBRTtpQkFDVjtnQkFDRDhNLE9BQU8sRUFBRTs7WUFDVCxHQUVBcEQsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUF6RyxLQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQTZRLE1BQUEsR0FBQTdRLE9BQUE7VUFDQSxJQUFBNkosR0FBQSxHQUFBN0osT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQThRLE9BQUEsR0FBQTlRLE9BQUE7VUFDQSxJQUFBaUMsZUFBQSxHQUFBakMsT0FBQTtVQUVBLElBQUErUSxDQUFBLEdBQUEvUSxPQUFBO1VBR087VUFBVSxTQUNSZ1IsY0FBY0EsQ0FBQztZQUFFM1EsS0FBSztZQUFFTztVQUFHLENBQXFDO1lBQ3hFLE1BQU0sQ0FBQ3FRLFVBQVUsRUFBRWxOLEtBQUssQ0FBQyxHQUFHLElBQUErTSxPQUFBLENBQUFJLFFBQVEsRUFBQ2pQLGVBQUEsQ0FBQWdDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQzBCLFFBQVEsRUFBRXdELFdBQVcsQ0FBQyxHQUFHMUMsS0FBSyxDQUFDcEYsUUFBUSxDQUFDakIsS0FBSyxDQUFDdUYsUUFBUSxDQUFDO1lBQzlELE1BQU0sQ0FBQ3VMLFdBQVcsQ0FBQyxHQUFHekssS0FBSyxDQUFDcEYsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLEdBQUc4UCxVQUFVLENBQUMsR0FBRzFLLEtBQUssQ0FBQ3BGLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDNk0sT0FBTyxFQUFFRCxVQUFVLENBQUMsR0FBR3hILEtBQUssQ0FBQ3BGLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDdUMsTUFBTSxFQUFFdUcsU0FBUyxDQUFDLEdBQUcxRCxLQUFLLENBQUNwRixRQUFRLENBQXNCakIsS0FBSyxDQUFDd0QsTUFBTSxDQUFDO1lBQzdFLE1BQU0sQ0FBQzRCLEtBQUssRUFBRThHLFFBQVEsQ0FBQyxHQUFHN0YsS0FBSyxDQUFDcEYsUUFBUSxFQUFVO1lBQ2xELE1BQU0sQ0FBQytQLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUc1SyxLQUFLLENBQUNwRixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FBRTZIO1lBQWEsQ0FBRSxHQUFHLElBQUEzQixRQUFBLENBQUF1SSx5QkFBeUIsR0FBRTtZQUNyRCxJQUFBYyxNQUFBLENBQUFVLFNBQVMsRUFBQyxDQUFDbFIsS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QitRLFVBQVUsQ0FBQyxFQUFFLENBQUM7Y0FDZGhJLFdBQVcsQ0FBQy9JLEtBQUssRUFBRXNCLEtBQUssRUFBRWlFLFFBQVEsQ0FBQztZQUNwQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUNxTCxVQUFVLElBQUksQ0FBQzVRLEtBQUssQ0FBQzhELEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU1tSCxRQUFRLEdBQUdDLEtBQUssSUFBRztjQUN4Qm5CLFNBQVMsQ0FBQztnQkFBRSxHQUFHdkcsTUFBTTtnQkFBRSxDQUFDMEgsS0FBSyxDQUFDQyxhQUFhLENBQUNySSxJQUFJLEdBQUdvSSxLQUFLLENBQUNDLGFBQWEsQ0FBQ3ZJO2NBQUssQ0FBRSxDQUFDO1lBQ2hGLENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUc7Y0FDYjVDLEtBQUs7Y0FDTGlMLFFBQVE7Y0FDUnZILEtBQUs7Y0FDTG9OLFdBQVc7Y0FDWGhELE9BQU87Y0FDUEQsVUFBVTtjQUNWekksS0FBSztjQUNMMEQsYUFBYTtjQUNib0QsUUFBUTtjQUNSM0csUUFBUSxFQUFFQSxRQUFRLElBQUl5TCxVQUFVO2NBQ2hDQyxhQUFhO2NBQ2JuUCxLQUFLLEVBQUU5QixLQUFLLENBQUM4QixLQUFLO2NBQ2xCMEIsTUFBTTtjQUNOdUc7YUFDQTtZQUNELE1BQU0rRixHQUFHLEdBQUcsSUFBSXZLLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBRS9DLE9BQ0NjLEtBQUEsQ0FBQWpGLGFBQUEsQ0FBQWlGLEtBQUEsQ0FBQWdDLFFBQUEsUUFDQ2hDLEtBQUEsQ0FBQWpGLGFBQUEsQ0FBQytGLFFBQUEsQ0FBQXFJLGFBQWEsQ0FBQy9FLFFBQVE7Y0FBQzdILEtBQUssRUFBRUE7WUFBSyxHQUNuQ3lELEtBQUEsQ0FBQWpGLGFBQUEsQ0FBQ29JLEdBQUEsQ0FBQTJILGFBQWE7Y0FBQ3RKLFNBQVMsRUFBRWlJLEdBQUc7Y0FBRXZLLFFBQVEsRUFBRUEsUUFBUSxJQUFJLENBQUMsQ0FBQ3ZGLEtBQUssQ0FBQ3NCLEtBQUssRUFBRXFFLFVBQVUsQ0FBQ3lMO1lBQU0sR0FDcEYvSyxLQUFBLENBQUFqRixhQUFBLENBQUNzUCxDQUFBLENBQUFXLFNBQVMsT0FBRyxDQUNFLENBQ1EsQ0FDdkI7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxREEsSUFBQXpRLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBMlIsWUFBQSxHQUFBM1IsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBRU0sU0FBVTRSLGFBQWFBLENBQUE7WUFDNUIsTUFBTTtjQUNMN04sS0FBSztjQUNMMUQsS0FBSztjQUNMMEQsS0FBSyxFQUFFO2dCQUFFc0YsTUFBTSxFQUFFd0k7Y0FBTTtZQUFFLENBQ3pCLEdBQUcsSUFBQXJLLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFeUMsU0FBUztjQUFFdkc7WUFBTSxDQUFFLEdBQUcsSUFBQTJELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFaEQsSUFBSXJFLFFBQVEsR0FBRztjQUFFTCxLQUFLLEVBQUUsRUFBRTtjQUFFQyxLQUFLLEVBQUUyTyxNQUFNLENBQUNDLE1BQU0sQ0FBQ3JKO1lBQU0sQ0FBRTtZQUN6RCxNQUFNNkMsUUFBUSxHQUFHQyxLQUFLLElBQ3JCbkIsU0FBUyxDQUFDdkcsTUFBTSxJQUFHO2NBQ2xCLE9BQU87Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUwsUUFBUSxFQUFFK0gsS0FBSyxDQUFDd0csTUFBTSxDQUFDOU87Y0FBSyxDQUFFO1lBQ25ELENBQUMsQ0FBQztZQUNILE1BQU0rTyxPQUFPLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDbk8sS0FBSyxDQUFDK04sTUFBTSxDQUFDLENBQUMvTyxHQUFHLENBQUNvUCxJQUFJLElBQUc7Y0FDcEQ3TyxRQUFRLEdBQUc2TyxJQUFJLEtBQUt0TyxNQUFNLENBQUNMLFFBQVEsR0FBRztnQkFBRVAsS0FBSyxFQUFFa1AsSUFBSTtnQkFBRWpQLEtBQUssRUFBRWEsS0FBSyxDQUFDK04sTUFBTSxDQUFDSyxJQUFJO2NBQUMsQ0FBRSxHQUFHN08sUUFBUTtjQUMzRixPQUFPO2dCQUFFTCxLQUFLLEVBQUVrUCxJQUFJO2dCQUFFalAsS0FBSyxFQUFFYSxLQUFLLENBQUMrTixNQUFNLENBQUNLLElBQUk7Y0FBQyxDQUFFO1lBQ2xELENBQUMsQ0FBQztZQUVGLE1BQU1uRSxRQUFRLEdBQUc7Y0FBRW9FLFVBQVUsRUFBRS9SLEtBQUssQ0FBQzhCO1lBQUssQ0FBRTtZQUU1QyxPQUNDbEIsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBT2tPLE9BQU8sRUFBQztZQUFFLEdBQUVrQyxNQUFNLENBQUNDLE1BQU0sQ0FBQzVPLEtBQUssQ0FBUyxFQUMvQ2pDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNrUSxZQUFBLENBQUFVLFdBQVc7Y0FDWGxQLElBQUksRUFBQyxVQUFVO2NBQ2ZGLEtBQUssRUFBRVksTUFBTSxDQUFDTCxRQUFRO2NBQ3RCb0ksV0FBVyxFQUFFaUcsTUFBTSxDQUFDQyxNQUFNLENBQUNySixNQUFNO2NBQ2pDdUosT0FBTyxFQUFFQSxPQUFPO2NBQ2hCMUcsUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FDZDBDO1lBQVEsRUFDWCxDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNBLElBQUEvTSxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJSLFlBQUEsR0FBQTNSLE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUVNLFNBQVVzUyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FDTHZPLEtBQUs7Y0FDTDFELEtBQUs7Y0FDTDBELEtBQUssRUFBRTtnQkFBRXNGLE1BQU0sRUFBRXdJO2NBQU0sQ0FBRTtjQUN6QnpIO1lBQVMsQ0FDVCxHQUFHLElBQUE1QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0yRCxRQUFRLEdBQUdDLEtBQUssSUFBSW5CLFNBQVMsQ0FBQ3ZHLE1BQU0sS0FBSztjQUFFLEdBQUdBLE1BQU07Y0FBRUQsUUFBUSxFQUFFMkgsS0FBSyxDQUFDd0csTUFBTSxDQUFDOU87WUFBSyxDQUFFLENBQUMsQ0FBQztZQUM1RixNQUFNK08sT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDalAsR0FBRyxDQUFDQyxJQUFJLEtBQUs7Y0FBRUMsS0FBSyxFQUFFRCxJQUFJO2NBQUVFLEtBQUssRUFBRWEsS0FBSyxDQUFDa0wsU0FBUyxDQUFDak0sSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU1nTCxRQUFRLEdBQUc7Y0FBRW9FLFVBQVUsRUFBRS9SLEtBQUssQ0FBQzhCO1lBQUssQ0FBRTtZQUU1QyxPQUNDbEIsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBT2tPLE9BQU8sRUFBQztZQUFFLEdBQUU1TCxLQUFLLENBQUNrTCxTQUFTLENBQUN4RyxNQUFNLENBQUN2RixLQUFLLENBQVMsRUFDeERqQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDa1EsWUFBQSxDQUFBVSxXQUFXO2NBQ1h6RyxXQUFXLEVBQUU3SCxLQUFLLENBQUNrTCxTQUFTLENBQUN4RyxNQUFNLENBQUNtRCxXQUFXO2NBQy9DM0ksS0FBSyxFQUFFNUMsS0FBSyxDQUFDc0IsS0FBSyxDQUFDaUMsUUFBUTtjQUMzQlQsSUFBSSxFQUFDLFVBQVU7Y0FDZjZPLE9BQU8sRUFBRUEsT0FBTztjQUNoQjFHLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2QwQztZQUFRLEVBQ1gsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBL00sTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEyUixZQUFBLEdBQUEzUixPQUFBO1VBQ0EsSUFBQXdILFFBQUEsR0FBQXhILE9BQUE7VUFFTSxTQUFVdVMsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVsUyxLQUFLO2NBQUUwRCxLQUFLO2NBQUVGLE1BQU07Y0FBRXVHO1lBQVMsQ0FBRSxHQUFHLElBQUE1QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRTlELE1BQU1xRyxRQUFRLEdBQUc7Y0FBRW9FLFVBQVUsRUFBRS9SLEtBQUssQ0FBQzhCO1lBQUssQ0FBRTtZQUM1QyxNQUFNNlAsT0FBTyxHQUFHLENBQ2Y7Y0FBRS9PLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWEsS0FBSyxDQUFDTixRQUFRLENBQUNxTCxLQUFLO2NBQUVuTCxlQUFlLEVBQUU7WUFBQyxDQUFFLEVBQzlEO2NBQUVWLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWEsS0FBSyxDQUFDTixRQUFRLENBQUNzTCxRQUFRO2NBQUVwTCxlQUFlLEVBQUU7WUFBQyxDQUFFLEVBQ2pFO2NBQUVWLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWEsS0FBSyxDQUFDTixRQUFRLENBQUN1TCxRQUFRO2NBQUVyTCxlQUFlLEVBQUU7WUFBQyxDQUFFLENBQ2pFO1lBQ0QsTUFBTTJILFFBQVEsR0FBR0MsS0FBSyxJQUFHO2NBQ3hCLE1BQU1wRixJQUFJLEdBQUc2TCxPQUFPLENBQUNRLElBQUksQ0FBQ3hQLElBQUksSUFBSUEsSUFBSSxDQUFDQyxLQUFLLEtBQUt3UCxRQUFRLENBQUNsSCxLQUFLLENBQUN3RyxNQUFNLENBQUM5TyxLQUFLLENBQUMsQ0FBQztjQUM5RW1ILFNBQVMsQ0FBQ3ZHLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFSixRQUFRLEVBQUU4SCxLQUFLLENBQUN3RyxNQUFNLENBQUM5TyxLQUFLO2dCQUFFVSxlQUFlLEVBQUV3QyxJQUFJLENBQUN4QztjQUFlLENBQUUsQ0FBQyxDQUFDO1lBQzFHLENBQUM7WUFDRCxJQUFJK08sYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSXBQLFFBQVEsR0FBVyxDQUFDO1lBQ3hCLElBQUlPLE1BQU0sRUFBRThPLGFBQWEsRUFBRUQsYUFBYSxHQUFHRCxRQUFRLENBQUM1TyxNQUFNLENBQUNKLFFBQVEsQ0FBQztZQUNwRSxJQUFJSSxNQUFNLEVBQUVKLFFBQVEsRUFBRWlNLEtBQUssRUFBRXBNLFFBQVEsR0FBR21QLFFBQVEsQ0FBQzVPLE1BQU0sQ0FBQ0osUUFBUSxDQUFDaU0sS0FBSyxDQUFDO1lBRXZFLElBQUl2QixPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFJdEssTUFBTSxDQUFDSixRQUFRLEVBQUU7Y0FDcEIwSyxPQUFPLEdBQUc2RCxPQUFPLENBQUNRLElBQUksQ0FBQ3hQLElBQUksSUFBSUEsSUFBSSxDQUFDQyxLQUFLLEtBQUtZLE1BQU0sQ0FBQ0osUUFBUSxDQUFDOztZQUcvRCxPQUNDeEMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsY0FDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBT2tPLE9BQU8sRUFBQztZQUFFLEdBQUU1TCxLQUFLLENBQUNzRixNQUFNLENBQUM1RixRQUFRLENBQUNQLEtBQUssQ0FBUyxFQUN2RGpDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNrUSxZQUFBLENBQUFVLFdBQVc7Y0FDWHpHLFdBQVcsRUFBRTdILEtBQUssQ0FBQ3NGLE1BQU0sQ0FBQzVGLFFBQVEsQ0FBQ21JLFdBQVc7Y0FDOUNOLFFBQVEsRUFBRUEsUUFBUTtjQUNsQm5JLElBQUksRUFBQyxVQUFVO2NBQ2ZGLEtBQUssRUFBRVksTUFBTSxDQUFDSixRQUFRO2NBQUEsR0FDbEJ1SyxRQUFRO2NBQ1pnRSxPQUFPLEVBQUVBO1lBQU8sRUFDZixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUEvUSxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQW9MLEtBQUEsR0FBQXBMLE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUErSixhQUFBLEdBQUEvSixPQUFBO1VBQ0EsSUFBQWlOLE1BQUEsR0FBQWpOLE9BQUE7VUFDTSxTQUFVNFMsY0FBY0EsQ0FBQztZQUFFQztVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUNMaFAsTUFBTTtjQUNORSxLQUFLLEVBQUU7Z0JBQ05zRixNQUFNLEVBQUU7a0JBQUV5SixRQUFRO2tCQUFFcFAsU0FBUyxFQUFFSztnQkFBSztjQUFFLENBQ3RDO2NBQ0R1SCxRQUFRO2NBQ1JqTDtZQUFLLENBQ0wsR0FBRyxJQUFBbUgsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUV0QixPQUFRMUcsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS3lHLFNBQVMsRUFBQztZQUFpQixHQUV0Q2pILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUMySixLQUFBLENBQUFNLFFBQVE7Y0FDUkosUUFBUSxFQUFFQSxRQUFRO2NBQ2xCckksS0FBSyxFQUFFWSxNQUFNLENBQUNILFNBQVM7Y0FDdkJQLElBQUksRUFBQyxXQUFXO2NBQ2hCeUksV0FBVyxFQUFFN0gsS0FBSyxDQUFDZ1AsUUFBUTtjQUMzQkMsT0FBTztjQUNQQyxTQUFTLEVBQUU7WUFBRyxFQUNiLEVBQ0RKLFNBQVMsSUFDVDVSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNzSSxhQUFBLENBQUFxRyxNQUFNLENBQUNDLEdBQUc7Y0FDVm5JLFNBQVMsRUFBQyxjQUFjO2NBQ3hCb0ksT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hoTixRQUFRLEVBQUU7OztZQUVYLEdBRUFxUCxRQUFRLENBQUNuTixJQUFJLEUsS0FBRTFFLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUN3TCxNQUFBLENBQUFpRyxJQUFJO2NBQUM1RixJQUFJLEVBQUM7WUFBTyxFQUFHLENBRXRDLENBQ0k7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQ0EsSUFBQXJNLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBMlIsWUFBQSxHQUFBM1IsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBRU0sU0FBVW1ULGNBQWNBLENBQUE7WUFDN0IsTUFBTTtjQUNMcFAsS0FBSyxFQUFFO2dCQUFFc0YsTUFBTSxFQUFFd0k7Y0FBTSxDQUFFO2NBQ3pCeFIsS0FBSyxFQUFFO2dCQUFFd0M7Y0FBVSxDQUFFO2NBQ3JCeEM7WUFBSyxDQUNMLEdBQUcsSUFBQW1ILFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFeUMsU0FBUztjQUFFdkc7WUFBTSxDQUFFLEdBQUcsSUFBQTJELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFaEQsSUFBSXlMLGFBQWEsR0FBRztjQUFFblEsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFMk8sTUFBTSxDQUFDd0IsT0FBTyxDQUFDNUs7WUFBTSxDQUFFO1lBQy9ELElBQUlwSSxLQUFLLENBQUNzQixLQUFLLENBQUMwQixLQUFLLEVBQUU7Y0FDdEIrUCxhQUFhLEdBQUc7Z0JBQUVuUSxLQUFLLEVBQUU1QyxLQUFLLENBQUNzQixLQUFLLENBQUMwQixLQUFLLENBQUMzQixFQUFFO2dCQUFFd0IsS0FBSyxFQUFFN0MsS0FBSyxDQUFDc0IsS0FBSyxDQUFDMEIsS0FBSyxDQUFDRjtjQUFJLENBQUU7O1lBRS9FLE1BQU1GLEtBQUssR0FBRzVDLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQzBCLEtBQUssRUFBRTNCLEVBQUU7WUFDbkMsTUFBTTRSLEtBQUssR0FBRztjQUFFbEIsVUFBVSxFQUFFL1IsS0FBSyxDQUFDd0MsVUFBVSxDQUFDNE8sTUFBTSxLQUFLLENBQUMsSUFBSXBSLEtBQUssQ0FBQzhCO1lBQUssQ0FBRTtZQUMxRSxNQUFNbUosUUFBUSxHQUFHQyxLQUFLLElBQUc7Y0FDeEIsTUFBTWxJLEtBQUssR0FBR2hELEtBQUssQ0FBQ3FDLElBQUksQ0FBQ0ksYUFBYSxDQUFDMFAsSUFBSSxDQUFDeFAsSUFBSSxJQUFJQSxJQUFJLENBQUN0QixFQUFFLEtBQUs2SixLQUFLLENBQUN3RyxNQUFNLENBQUM5TyxLQUFLLENBQUM7Y0FDbkZtSCxTQUFTLENBQUN2RyxNQUFNLElBQUc7Z0JBQ2xCLE9BQU87a0JBQUUsR0FBR0EsTUFBTTtrQkFBRVI7Z0JBQUssQ0FBRTtjQUM1QixDQUFDLENBQUM7WUFDSCxDQUFDO1lBRUQsT0FDQ3BDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGNBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU9rTyxPQUFPLEVBQUM7WUFBRSxHQUFFa0MsTUFBTSxDQUFDd0IsT0FBTyxDQUFDblEsS0FBSyxDQUFTLEVBQ2hEakMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2tRLFlBQUEsQ0FBQVUsV0FBVztjQUNYcFAsS0FBSyxFQUFFQSxLQUFLO2NBQ1oySSxXQUFXLEVBQUVpRyxNQUFNLENBQUN3QixPQUFPLENBQUM1SyxNQUFNO2NBQ2xDdEYsSUFBSSxFQUFDLE9BQU87Y0FDWjZPLE9BQU8sRUFBRTNSLEtBQUssQ0FBQ3dDLFVBQVU7Y0FDekJ5SSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkZ0k7WUFBSyxFQUNSLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXJTLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBdVQsWUFBQSxHQUFBdlQsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQTZKLEdBQUEsR0FBQTdKLE9BQUE7VUFDQSxJQUFBd1QsU0FBQSxHQUFBeFQsT0FBQTtVQUNBLElBQUF5VCxhQUFBLEdBQUF6VCxPQUFBO1VBQ0EsSUFBQTBULFVBQUEsR0FBQTFULE9BQUE7VUFDQSxJQUFBMlQsVUFBQSxHQUFBM1QsT0FBQTtVQUNBLElBQUE0VCxRQUFBLEdBQUE1VCxPQUFBO1VBQ0EsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFDQSxJQUFBZ0ssWUFBQSxHQUFBaEssT0FBQTtVQUVBLElBQUE2VCxNQUFBLEdBQUE3VCxPQUFBO1VBQ0EsSUFBQThULFdBQUEsR0FBQTlULE9BQUE7VUFDQSxJQUFBK1QsU0FBQSxHQUFBL1QsT0FBQTtVQUVNLFNBQVUwUixTQUFTQSxDQUFBO1lBQ3hCLE1BQU07Y0FBRTdOLE1BQU07Y0FBRTRCLEtBQUs7Y0FBRTJFLFNBQVM7Y0FBRS9KLEtBQUs7Y0FBRTBELEtBQUs7Y0FBRTVCLEtBQUs7Y0FBRXlEO1lBQVEsQ0FBRSxHQUFHLElBQUE0QixRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBQ3RGLE1BQU0sQ0FBQ2pILElBQUksRUFBRXNULE9BQU8sQ0FBQyxHQUFHL1MsTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDN0MsTUFBTSxDQUFDdVIsU0FBUyxFQUFFb0IsWUFBWSxDQUFDLEdBQUdoVCxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNNkksT0FBTyxHQUFHQSxDQUFBLEtBQU02SixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ3BDLE1BQU01QixVQUFVLEdBQUcsQ0FBQ3ZPLE1BQU0sQ0FBQ1IsS0FBSyxJQUFJLENBQUNRLE1BQU0sQ0FBQ0wsUUFBUSxJQUFJLENBQUNLLE1BQU0sQ0FBQ0osUUFBUSxJQUFJLENBQUNJLE1BQU0sQ0FBQ0gsU0FBUyxJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsUUFBUTtZQUNqSCxNQUFNVixLQUFLLEdBQUc3QyxLQUFLLENBQUNzQixLQUFLLENBQUN1UyxLQUFLLElBQUkvUixLQUFLLEdBQUc0QixLQUFLLENBQUN5RSxPQUFPLENBQUMyTCxRQUFRLEdBQUdwUSxLQUFLLENBQUN5RSxPQUFPLENBQUM3QyxJQUFJO1lBRXRGLE1BQU1vSSxRQUFRLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzNCLElBQUk7Z0JBQ0gsSUFBSTVMLEtBQUssSUFBSTlCLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQ3VTLEtBQUssS0FBSyxTQUFTLEVBQUU7a0JBQzdDRixPQUFPLENBQUMsSUFBSSxDQUFDO2tCQUNiOztnQkFHRCxNQUFNM1QsS0FBSyxDQUFDc0YsSUFBSSxDQUFDO2tCQUFFLEdBQUc5QixNQUFNO2tCQUFFcVEsS0FBSyxFQUFFO2dCQUFTLENBQUUsQ0FBQztnQkFDakROLFFBQUEsQ0FBQVEsT0FBTyxDQUFDQyxZQUFZLENBQUMsRUFBRSxFQUFFdFAsU0FBUyxFQUFFLDBCQUEwQjFFLEtBQUssQ0FBQ3NCLEtBQUssQ0FBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQy9FdVMsWUFBWSxDQUFDLElBQUksQ0FBQztlQUNsQixDQUFDLE9BQU8xTyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxPQUNDdEUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQVIsTUFBQSxDQUFBSSxPQUFBLENBQUFxSCxRQUFBLFFBQ0N6SCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFNeUcsU0FBUyxFQUFDO1lBQThCLEdBQzdDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ29TLE1BQUEsQ0FBQTdHLGFBQWE7Y0FBQ3ZILEtBQUssRUFBRUEsS0FBSztjQUFFMUIsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDN0M5QyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDOFIsWUFBQSxDQUFBckQsV0FBVyxRQUNYalAsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBU3lHLFNBQVMsRUFBQztZQUFXLEdBQzdCakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBUXlHLFNBQVMsRUFBQztZQUFvQixHQUNyQ2pILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUtzQyxLQUFLLENBQUNzRixNQUFNLENBQUNpTCxZQUFZLENBQUMzTCxLQUFLLENBQU0sRUFDMUMxSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUFPc0MsS0FBSyxDQUFDc0YsTUFBTSxDQUFDaUwsWUFBWSxDQUFDQyxRQUFRLENBQVEsQ0FDekMsRUFFVHRULE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQVN5RyxTQUFTLEVBQUM7WUFBNkIsR0FDL0NqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDc1MsU0FBQSxDQUFBekIsYUFBYSxPQUFHLEVBQ2pCclIsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2lTLFVBQUEsQ0FBQVAsY0FBYyxPQUFHLEVBQ2xCbFMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQytSLFNBQUEsQ0FBQWdCLFVBQVUsT0FBRyxFQUNkdlQsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2dTLGFBQUEsQ0FBQWxCLGFBQWEsT0FBRyxDQUNSLEVBRVZ0UixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLeUcsU0FBUyxFQUFDO1lBQWdDLEdBQzlDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2tTLFVBQUEsQ0FBQWYsY0FBYztjQUFDQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUNuQyxDQUNHLEVBQ1Y1UixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDdUksWUFBQSxDQUFBeUssb0JBQW9CLE9BQUcsRUFDeEJ4VCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxpQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzZGLFdBQUEsQ0FBQWEsTUFBTTtjQUNORCxTQUFTLEVBQUMsY0FBYztjQUN4Qi9DLElBQUksRUFBQyxRQUFRO2NBQ2J1UCxLQUFLO2NBQ0wxRyxRQUFRLEVBQUVvRSxVQUFVO2NBQ3BCL0osT0FBTyxFQUFDLFNBQVM7Y0FDakJKLE9BQU8sRUFBRThGO1lBQVEsR0FFaEI3SyxLQUFLLENBQ0UsQ0FDRCxDQUNJLEVBQ2RqQyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDb0ksR0FBQSxDQUFBc0IsZ0JBQWdCO2NBQUN2RixRQUFRLEVBQUVBO1lBQVEsRUFBSSxDQUNsQyxFQUNQM0UsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FTLFdBQUEsQ0FBQTVKLHlCQUF5QjtjQUFDeEosSUFBSSxFQUFFQSxJQUFJO2NBQUV5SixPQUFPLEVBQUVBO1lBQU8sRUFBSSxDQUN6RDtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hGQSxJQUFBbEosTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQTJOLE1BQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBZ0osU0FBQSxHQUFBaEosT0FBQTtVQUVNLFNBQVUyVSxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0w1USxLQUFLLEVBQUU7Z0JBQUV5RSxPQUFPLEVBQUVvTSxXQUFXO2dCQUFFLEdBQUc3UTtjQUFLLENBQUU7Y0FDekMxRCxLQUFLO2NBQ0x3RCxNQUFNO2NBQ05zRixhQUFhO2NBQ2JoSDtZQUFLLENBQ0wsR0FBRyxJQUFBcUYsUUFBQSxDQUFBRyxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNa04sb0JBQW9CLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZDLElBQUk7Z0JBQ0gsTUFBTXhVLEtBQUssQ0FBQzZGLHdCQUF3QixDQUFDO2tCQUFFeEMsU0FBUyxFQUFFRyxNQUFNLENBQUNIO2dCQUFTLENBQUUsQ0FBQztlQUNyRSxDQUFDLE9BQU82QixDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxPQUNDdEUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQVIsTUFBQSxDQUFBSSxPQUFBLENBQUFxSCxRQUFBLFFBQ0VySSxLQUFLLEVBQUUrQixZQUFZLEVBQUUwUyxVQUFVLElBQy9CN1QsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2tNLE1BQUEsQ0FBQUMsS0FBSztjQUFDMUYsU0FBUyxFQUFDLE9BQU87Y0FBQy9DLElBQUksRUFBQztZQUFTLEdBQ3JDcEIsS0FBSyxDQUFDMkcsV0FBVyxDQUFDb0ssVUFBVSxDQUU5QixFQUNEN1QsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS3lHLFNBQVMsRUFBQztZQUFvQyxHQUNsRGpILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUN1SCxTQUFBLENBQUFVLFFBQVE7Y0FBQ3NFLFFBQVEsRUFBRSxDQUFDN0wsS0FBSztjQUFFOEYsT0FBTyxFQUFFNE0sb0JBQW9CO2NBQUV4TSxPQUFPLEVBQUMsU0FBUztjQUFDRCxRQUFRO1lBQUEsR0FDbkZ3TSxXQUFXLENBQUNHLE9BQU8sQ0FDVixDQUNOLENBQ0o7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQ0EsSUFBQTlULE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUNBLElBQUEyVCxVQUFBLEdBQUEzVCxPQUFBO1VBQ0EsSUFBQWdWLE9BQUEsR0FBQWhWLE9BQUE7VUFDQSxJQUFBdUgsS0FBQSxHQUFBdkgsT0FBQTtVQUVNLFNBQVV5VSxvQkFBb0JBLENBQUE7WUFDbkMsTUFBTTtjQUFFcFU7WUFBSyxDQUFFLEdBQUcsSUFBQW1ILFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFcEMsTUFBTSxDQUFDc04saUJBQWlCLEVBQUVDLG9CQUFvQixDQUFDLEdBQUdqVSxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RTtZQUNBLElBQUksQ0FBQ2pCLEtBQUssQ0FBQytCLFlBQVksSUFBSS9CLEtBQUssQ0FBQytCLFlBQVksQ0FBQzBTLFVBQVUsRUFBRSxPQUFPN1QsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3VULE9BQUEsQ0FBQUwsaUJBQWlCLE9BQUc7WUFFdEYsTUFBTVEsWUFBWSxHQUFHO2NBQUVGLGlCQUFpQjtjQUFFQztZQUFvQixDQUFFO1lBQ2hFLE9BQ0NqVSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDK0YsUUFBQSxDQUFBd0ksa0JBQWtCLENBQUNsRixRQUFRO2NBQUM3SCxLQUFLLEVBQUVrUztZQUFZLEdBQy9DbFUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2tTLFVBQUEsQ0FBQXlCLGlCQUFpQixPQUFHLEVBQ3JCblUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzhGLEtBQUEsQ0FBQThOLGVBQWU7Y0FBQ1gsS0FBSyxFQUFFLENBQUNPO1lBQWlCLEVBQUksQ0FDakI7VUFFaEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBLElBQUFoVSxNQUFBLEdBQUFqQixPQUFBO1VBRUEsSUFBQXNILFdBQUEsR0FBQXRILE9BQUE7VUFDQSxJQUFBdUgsS0FBQSxHQUFBdkgsT0FBQTtVQUNBLElBQUF3SCxRQUFBLEdBQUF4SCxPQUFBO1VBQ0EsSUFBQXNWLEtBQUEsR0FBQXRWLE9BQUE7VUFFTSxTQUFVcVYsZUFBZUEsQ0FBQztZQUFFWDtVQUFLLENBQUU7WUFDeEMsTUFBTTtjQUNMM1EsS0FBSyxFQUFFO2dCQUFFMkcsV0FBVyxFQUFFM0csS0FBSztnQkFBRXlFLE9BQU8sRUFBRW9NO2NBQVcsQ0FBRTtjQUNuRHZVLEtBQUs7Y0FDTHdELE1BQU07Y0FDTjFCLEtBQUs7Y0FDTGlJO1lBQVMsQ0FDVCxHQUFHLElBQUE1QyxRQUFBLENBQUFHLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sQ0FBQ3JFLFFBQVEsRUFBRXdFLFdBQVcsQ0FBQyxHQUFHN0csTUFBQSxDQUFBSSxPQUFLLENBQUNDLFFBQVEsQ0FBQyxJQUFJbUIsR0FBRyxFQUFFLENBQUM7WUFFekQsSUFBSSxDQUFDcEMsS0FBSyxDQUFDK0IsWUFBWSxFQUFFLE9BQU8sSUFBSTtZQUNwQyxNQUFNO2NBQUVzSTtZQUFXLENBQUUsR0FBR3JLLEtBQUssQ0FBQytCLFlBQVk7WUFFMUMsTUFBTW1ULEtBQUssR0FBRyxNQUFNaEssS0FBSyxJQUFHO2NBQzNCLE1BQU1yRyxLQUFLLEdBQUc7Z0JBQ2J4QixTQUFTLEVBQUVHLE1BQU0sQ0FBQ0gsU0FBUztnQkFDM0J0QixZQUFZLEVBQUVvVCxLQUFLLENBQUNDLElBQUksQ0FBQ25TLFFBQVEsQ0FBQyxDQUFDUCxHQUFHLENBQUUyUyxDQUFTLElBQUtyVixLQUFLLENBQUMrQixZQUFZLENBQUNzSSxXQUFXLENBQUNnTCxDQUFDLENBQUMsQ0FBQ0MsVUFBVTtlQUNsRztjQUNELE1BQU10VixLQUFLLENBQUMrRixpQkFBaUIsQ0FBQ2xCLEtBQUssQ0FBQztjQUVwQ2tGLFNBQVMsQ0FBQ3ZHLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFSCxTQUFTLEVBQUVyRCxLQUFLLENBQUNzQixLQUFLLENBQUMrQjtjQUFTLENBQUUsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxNQUFNcUosUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJqRixXQUFXLENBQUMsSUFBSXJGLEdBQUcsRUFBRSxDQUFDO2NBQ3RCcEMsS0FBSyxDQUFDNEUsaUJBQWlCLEVBQUU7WUFDMUIsQ0FBQztZQUNELE1BQU0rSSxRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUMxSyxRQUFRLENBQUNzUyxJQUFJLElBQUlsQjtZQUFLLENBQUU7WUFDdEQsTUFBTXZFLEdBQUcsR0FBRyxtQ0FBbUN1RSxLQUFLLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUU1RSxPQUNDelQsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBU3lHLFNBQVMsRUFBRWlJO1lBQUcsR0FDdEJsUCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDOEYsS0FBQSxDQUFBcUIsSUFBSTtjQUNKVixTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDaEQsS0FBSyxFQUFFO2dCQUFFNUIsUUFBUTtnQkFBRXdFLFdBQVc7Z0JBQUU0TTtjQUFLLENBQUU7Y0FDdkM1TCxPQUFPLEVBQUV3TSxLQUFBLENBQUFPLHdCQUF3QjtjQUNqQ2hOLEtBQUssRUFBRTZCO1lBQVcsRUFDakIsRUFFRnpKLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUM7WUFBa0IsR0FDaENqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxlQUNFc0MsS0FBSyxDQUFDeEIsS0FBSyxFLE1BQUllLFFBQVEsQ0FBQ3NTLElBQUksQ0FDdkIsRUFDUDNVLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUM7WUFBa0IsR0FDaENqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDNkYsV0FBQSxDQUFBYSxNQUFNO2NBQUEsR0FBSzZGLFFBQVE7Y0FBRS9GLE9BQU8sRUFBRThFLFFBQVE7Y0FBRTFFLE9BQU8sRUFBQyxTQUFTO2NBQUNELFFBQVE7WUFBQSxHQUNqRXdNLFdBQVcsQ0FBQ2tCLGlCQUFpQixDQUN0QixFQUNUN1UsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQzZGLFdBQUEsQ0FBQWEsTUFBTTtjQUFBLEdBQUs2RixRQUFRO2NBQUUzRixPQUFPLEVBQUMsU0FBUztjQUFDSixPQUFPLEVBQUVzTjtZQUFLLEdBQ3BEWCxXQUFXLENBQUNtQixnQkFBZ0IsQ0FDckIsQ0FDSixDQUNELENBQ0c7VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5REEsSUFBQTlVLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUVNLFNBQVU2Vix3QkFBd0JBLENBQUM7WUFBRW5HLEtBQUs7WUFBRTFNLElBQUk7WUFBRWtDLEtBQUssRUFBRTtjQUFFd1AsS0FBSztjQUFFcFIsUUFBUTtjQUFFd0U7WUFBVztVQUFFLENBQUU7WUFDaEcsTUFBTTtjQUNMakUsTUFBTTtjQUNOdUcsU0FBUztjQUNUL0osS0FBSztjQUNMMEQsS0FBSyxFQUFFO2dCQUFFMkcsV0FBVyxFQUFFM0c7Y0FBSztZQUFFLENBQzdCLEdBQUcsSUFBQXlELFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTXFPLFFBQVEsR0FBR3pLLEtBQUssSUFBRztjQUV4QkEsS0FBSyxDQUFDMEssZUFBZSxFQUFFO2NBQ3ZCLE1BQU12RyxLQUFLLEdBQUcrQyxRQUFRLENBQUNsSCxLQUFLLENBQUNDLGFBQWEsQ0FBQzBLLE9BQU8sQ0FBQ3hHLEtBQUssQ0FBQztjQUN6RCxNQUFNeUcsUUFBUSxHQUFHN1MsUUFBUTtjQUN6QjZTLFFBQVEsQ0FBQzlQLEdBQUcsQ0FBQ3FKLEtBQUssQ0FBQyxHQUFHeUcsUUFBUSxDQUFDQyxNQUFNLENBQUMxRyxLQUFLLENBQUMsR0FBR3lHLFFBQVEsQ0FBQ0UsR0FBRyxDQUFDM0csS0FBSyxDQUFDO2NBQ2xFclAsS0FBSyxDQUFDbUMsb0JBQW9CLENBQUM2VCxHQUFHLENBQUMzRyxLQUFLLENBQUM7Y0FDckM1SCxXQUFXLENBQUMsSUFBSXJGLEdBQUcsQ0FBQzBULFFBQVEsQ0FBQyxDQUFDO1lBQy9CLENBQUM7WUFFRCxNQUFNaEcsR0FBRyxHQUFHLG1CQUFtQjdNLFFBQVEsQ0FBQytDLEdBQUcsQ0FBQ3FKLEtBQUssQ0FBQyxHQUFHLFdBQVcsR0FBRyxFQUFFLEVBQUU7WUFDdkUsTUFBTTRELEtBQUssR0FBRztjQUFFcEwsU0FBUyxFQUFFaUksR0FBRztjQUFFLFlBQVksRUFBRVQsS0FBSztjQUFFekgsT0FBTyxFQUFFbEQ7WUFBUyxDQUFFO1lBRXpFLElBQUksQ0FBQzJQLEtBQUssRUFBRXBCLEtBQUssQ0FBQ3JMLE9BQU8sR0FBRytOLFFBQVE7WUFFcEMsT0FDQy9VLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUVpSSxHQUFHO2NBQUEsY0FBY1QsS0FBSztjQUFBLEdBQU00RDtZQUFLLEdBQ2hEclMsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU15RyxTQUFTLEVBQUM7WUFBa0IsR0FBRW5FLEtBQUssQ0FBQ3VTLE1BQU0sQ0FBUSxFQUN4RHJWLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU15RyxTQUFTLEVBQUM7WUFBc0IsR0FBRWxGLElBQUksQ0FBQ3VULFNBQVMsQ0FBUSxDQUN0RCxFQUNUdFYsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS3lHLFNBQVMsRUFBQztZQUFlLEdBQzdCakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsaUJBQ0NSLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQU15RyxTQUFTLEVBQUM7WUFBa0IsR0FBRW5FLEtBQUssQ0FBQ2IsS0FBSyxDQUFRLENBQy9DLEVBQ1JGLElBQUksQ0FBQzJTLFVBQVUsQ0FDWCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUExVSxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQXdILFFBQUEsR0FBQXhILE9BQUE7VUFDQSxJQUFBc0gsV0FBQSxHQUFBdEgsT0FBQTtVQUNNLFNBQVVvVixpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUNMclIsS0FBSyxFQUFFO2dCQUNOMkcsV0FBVyxFQUFFO2tCQUNaaEgsU0FBUyxFQUFFO29CQUFFOEUsT0FBTyxFQUFFekU7a0JBQUs7Z0JBQUU7Y0FDN0IsQ0FDRDtjQUNEMUQsS0FBSztjQUNMK0osU0FBUztjQUNUdkcsTUFBTTtjQUNOeEQsS0FBSyxFQUFFO2dCQUFFK0I7Y0FBWTtZQUFFLENBQ3ZCLEdBQUcsSUFBQW9GLFFBQUEsQ0FBQUcsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFc04saUJBQWlCO2NBQUVDO1lBQW9CLENBQUUsR0FBRyxJQUFBMU4sUUFBQSxDQUFBeUkscUJBQXFCLEdBQUU7WUFDM0UsTUFBTTtjQUFFNkUsVUFBVTtjQUFFMEI7WUFBUSxDQUFFLEdBQUdwVSxZQUFZO1lBQzdDLElBQUksQ0FBQ0EsWUFBWSxJQUFJNlMsaUJBQWlCLEVBQUUsT0FBTyxJQUFJO1lBRW5ELE1BQU1oTixPQUFPLEdBQUcsTUFBTXNELEtBQUssSUFBRztjQUM3QixJQUFJQSxLQUFLLENBQUNDLGFBQWEsQ0FBQ3ZJLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ3pDLE1BQU01QyxLQUFLLENBQUNzRixJQUFJLENBQUM7a0JBQUVqQyxTQUFTLEVBQUU4UztnQkFBUSxDQUFFLENBQUM7Z0JBQ3pDcE0sU0FBUyxDQUFDO2tCQUFFLEdBQUd2RyxNQUFNO2tCQUFFSCxTQUFTLEVBQUU4UztnQkFBUSxDQUFFLENBQUM7O2NBRzlDdEIsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDalUsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBS3lHLFNBQVMsRUFBQztZQUFzQixHQUNwQ2pILE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUsrVSxRQUFRLENBQU0sRUFDbkJ2VixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQTtjQUFLeUcsU0FBUyxFQUFDO1lBQStCLEdBQzdDakgsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBTXlHLFNBQVMsRUFBQztZQUFjLEdBQUVuRSxLQUFLLENBQUNiLEtBQUssQ0FBUSxFQUNuRGpDLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUt5RyxTQUFTLEVBQUM7WUFBa0IsR0FDaENqSCxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDNkYsV0FBQSxDQUFBYSxNQUFNO2NBQUNFLE9BQU8sRUFBQyxTQUFTO2NBQUNELFFBQVE7Y0FBQ25GLEtBQUssRUFBQyxPQUFPO2NBQUNnRixPQUFPLEVBQUVBO1lBQU8sR0FDL0RsRSxLQUFLLENBQUMrSSxNQUFNLENBQ0wsRUFDVDdMLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUM2RixXQUFBLENBQUFhLE1BQU07Y0FBQ0UsT0FBTyxFQUFDLFNBQVM7Y0FBQ3BGLEtBQUssRUFBQyxNQUFNO2NBQUNnRixPQUFPLEVBQUVBO1lBQU8sR0FDckRsRSxLQUFLLENBQUM4SSxPQUFPLENBQ04sQ0FDSixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQTVMLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBK0osYUFBQSxHQUFBL0osT0FBQTtVQUNNLFNBQVV5VyxhQUFhQSxDQUFDO1lBQUV0SjtVQUFRLENBQUU7WUFDekMsTUFBTSxDQUFDek0sSUFBSSxFQUFFc1QsT0FBTyxDQUFDLEdBQUcvUyxNQUFBLENBQUFJLE9BQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQzZMLFFBQVEsQ0FBQztZQUVsRGxNLE1BQUEsQ0FBQUksT0FBSyxDQUFDMEYsU0FBUyxDQUFDLE1BQUs7Y0FDcEJpTixPQUFPLENBQUM3RyxRQUFRLENBQUM7Y0FDakJ1SixVQUFVLENBQUNDLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjNDLE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FDZixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUM3RyxRQUFRLENBQUMsQ0FBQztZQUVkLE9BQ0NsTSxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDc0ksYUFBQSxDQUFBa0IsZUFBZSxRQUNkdkssSUFBSSxJQUNKTyxNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxDQUFDc0ksYUFBQSxDQUFBcUcsTUFBTSxDQUFDd0csSUFBSTtjQUNYQyxNQUFNO2NBQ052RyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRSxDQUFDO2dCQUNWdUcsS0FBSyxFQUFFO2VBQ1A7Y0FDRHRHLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWGhOLFFBQVEsRUFBRTtpQkFDVjtnQkFDRHFULEtBQUssRUFBRTtlQUNQO2NBQ0RsRyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWGhOLFFBQVEsRUFBRSxHQUFHO2tCQUNicVQsS0FBSyxFQUFFO2lCQUNQO2dCQUNEdkcsT0FBTyxFQUFFOztZQUNULEdBRUFwRCxRQUFRLENBRVYsQ0FDZ0I7VUFFcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekNBLElBQUFsTSxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQStKLGFBQUEsR0FBQS9KLE9BQUE7VUFDTSxTQUFVK1csUUFBUUEsQ0FBQztZQUFFN08sU0FBUztZQUFFaUYsUUFBUTtZQUFFNkosRUFBRSxHQUFHO1VBQU0sQ0FBRTtZQUM1RCxNQUFNQyxTQUFTLEdBQUcsSUFBQWxOLGFBQUEsQ0FBQXFHLE1BQU0sRUFBQzRHLEVBQUUsQ0FBQztZQUM1QixPQUNDL1YsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3dWLFNBQVM7Y0FDVEosTUFBTTtjQUNOM08sU0FBUyxFQUFFQSxTQUFTO2NBQ3BCb0ksT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1hoTixRQUFRLEVBQUU7O2VBRVg7Y0FDRG1OLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYaE4sUUFBUSxFQUFFLEdBQUc7a0JBQ2JxVCxLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0R2RyxPQUFPLEVBQUU7O1lBQ1QsR0FFQXBELFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBK0osYUFBQSxHQUFBbFgsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQXdILFFBQUEsR0FBQXhILE9BQUE7VUFHTztVQUFVLFNBQVVtWCxNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRTlXLEtBQUs7Y0FBRTBEO1lBQUssQ0FBRSxHQUFHLElBQUF5RCxRQUFBLENBQUF1SSx5QkFBeUIsR0FBRTtZQUNwRCxNQUFNcUgsT0FBTyxHQUFHL1csS0FBSyxDQUFDOEIsS0FBSyxJQUFJLENBQUM5QixLQUFLLENBQUNnQyxVQUFVO1lBQ2hELE9BQ0NwQixNQUFBLENBQUFJLE9BQUEsQ0FBQUksYUFBQSxrQkFDQ1IsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3lWLGFBQUEsQ0FBQUcsWUFBWTtjQUNaelMsVUFBVSxFQUFFLENBQ1gsQ0FBQ2IsS0FBSyxDQUFDYSxVQUFVLENBQUNDLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQ2QsS0FBSyxDQUFDYSxVQUFVLENBQUNFLFVBQVUsRUFBRSxFQUFFLENBQUM7WUFDakMsRUFDQSxDQUNPO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBLElBQUE0QixLQUFBLEdBQUExRyxPQUFBO1VBQ0EsSUFBQTZRLE1BQUEsR0FBQTdRLE9BQUE7VUFFQSxJQUFBc1gsVUFBQSxHQUFBdFgsT0FBQTtVQUNBLElBQUF1WCxXQUFBLEdBQUF2WCxPQUFBO1VBQ0EsSUFBQStCLFlBQUEsR0FBQS9CLE9BQUE7VUFDQSxJQUFBd0gsUUFBQSxHQUFBeEgsT0FBQTtVQUdPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQzJNLEtBQUs7WUFDbEIsTUFBTTtjQUFFL007WUFBSyxDQUFFLEdBQTRCK00sS0FBSztZQUNoRDtZQUVBLE1BQU0sR0FBR2hFLFdBQVcsQ0FBQyxHQUFHMUMsS0FBSyxDQUFDcEYsUUFBUSxDQUFDakIsS0FBSyxDQUFDdUYsUUFBUSxDQUFDO1lBQ3RELE1BQU0sR0FBR3dMLFVBQVUsQ0FBQyxHQUFHMUssS0FBSyxDQUFDcEYsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNO2NBQUV5QztZQUFLLENBQUUsR0FBRzFELEtBQUs7WUFDdkIsSUFBQXdRLE1BQUEsQ0FBQVUsU0FBUyxFQUFDLENBQUNsUixLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCK1EsVUFBVSxDQUFDLEVBQUUsQ0FBQztjQUNkaEksV0FBVyxDQUFDL0ksS0FBSyxFQUFFc0IsS0FBSyxFQUFFaUUsUUFBUSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQ3ZGLEtBQUssQ0FBQzhELEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBRS9CLE1BQU15RyxPQUFPLEdBQUd2SyxLQUFLLENBQUNzQixLQUFLLENBQUN1UyxLQUFLLEtBQUssV0FBVyxHQUFHcUQsV0FBQSxDQUFBclcsb0JBQW9CLEdBQUdvVyxVQUFBLENBQUF0RyxjQUFjO1lBQ3pGLE1BQU0vTixLQUFLLEdBQUc7Y0FDYmMsS0FBSztjQUNMMUQsS0FBSztjQUNMOEksYUFBYSxFQUFFcEgsWUFBQSxDQUFBNEMsWUFBWSxDQUFDd0U7YUFDNUI7WUFFRCxPQUNDekMsS0FBQSxDQUFBakYsYUFBQSxDQUFBaUYsS0FBQSxDQUFBZ0MsUUFBQSxRQUNDaEMsS0FBQSxDQUFBakYsYUFBQSxDQUFDK0YsUUFBQSxDQUFBc0ksc0JBQXNCLENBQUNoRixRQUFRO2NBQUM3SCxLQUFLLEVBQUVBO1lBQUssR0FDNUN5RCxLQUFBLENBQUFqRixhQUFBLENBQUNtSixPQUFPO2NBQUN2SyxLQUFLLEVBQUVBLEtBQUs7Y0FBRU8sR0FBRyxFQUFFd00sS0FBSyxDQUFDeE07WUFBRyxFQUFJLENBQ1IsQ0FDaEM7VUFFTCJ9