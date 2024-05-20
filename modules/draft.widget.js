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

      /*****************************************
      INTERNAL MODULE: ./views/form/fields/grade
      *****************************************/

      ims.set('./views/form/fields/grade', {
        hash: 1304126336,
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
        hash: 3820395739,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIndpemFyZCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX21vZGFsIiwiX3VpIiwiX2dlbmVyYXRpb25Gb3JtIiwiX2ZyYW1lck1vdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl9leGFtcGxlcyIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwic2V0VmFsdWVzIiwibm90ZXMiLCJ2aWV3Iiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNvaW5zQWxlcnQiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJDb2luc01vZGFsIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndUZXh0cyIsImdyYWRlcyIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsIkxhbmd1YWdlRmllbGQiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsInBhcnNlSW50IiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2Vycm9yIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwic3RhdGUiLCJjb250aW51ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJpcnJlbGV2YW50IiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsIkFuaW1hdGVkTGFiZWwiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNwYW4iLCJsYXlvdXQiLCJ3aWR0aCIsIkFuaW1hdGVkIiwiYXMiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwic2hvd0JhciIsIk5hdmJhckhlYWRlciIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZ2VuZXJhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7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