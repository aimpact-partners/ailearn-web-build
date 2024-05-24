System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.39/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.39/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.39/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.39/components/navbar-header.code", "@aimpact/ailearn-app@0.0.39/config"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0039CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0039CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0039ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0039ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0039ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0039ComponentsIcons;
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
    }, function (_aimpactAilearnApp0039ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0039ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0039Config) {
      dependency_24 = _aimpactAilearnApp0039Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.39"], ["@aimpact/ailearn-app", "0.0.39"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.39/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.39/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.39/modules/draft.widget');
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
        hash: 1570412911,
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
              texts: {
                audience: texts
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values
            } = (0, _context.useModuleContext)();
            let selected = {
              value: '',
              label: texts.input.select
            };
            const onChange = event => setValues(values => {
              return {
                ...values,
                audience: event.target.value
              };
            });
            const options = Object.keys(texts.values).map(year => {
              selected = year === values.audience ? {
                value: year,
                label: texts.values[year]
              } : selected;
              return {
                value: year,
                label: texts.values[year]
              };
            });
            const disabled = {
              isDisabled: store.saved
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.input.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              value: values.audience,
              placeholder: texts.input.select,
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
        hash: 437832343,
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
            }, _react.default.createElement(_language.LanguageField, null), _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_audience.AudienceField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIndpemFyZCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX21vZGFsIiwiX3VpIiwiX2dlbmVyYXRpb25Gb3JtIiwiX2ZyYW1lck1vdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl9leGFtcGxlcyIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwic2V0VmFsdWVzIiwibm90ZXMiLCJ2aWV3Iiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNvaW5zQWxlcnQiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJDb2luc01vZGFsIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsImlucHV0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiTGFuZ3VhZ2VGaWVsZCIsIndUZXh0cyIsIkR1cmF0aW9uRmllbGQiLCJmaW5kIiwicGFyc2VJbnQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2F1ZGllbmNlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfZXJyb3IiLCJfYWN0aXZpdGllcyIsIl9sYW5ndWFnZSIsInNldFNob3ciLCJzZXRTdWJtaXR0ZWQiLCJzdGF0ZSIsImNvbnRpbnVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJhbmFseXNlIiwiX2FjdGlvbiIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlbWVudC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9nZW5lcmF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElB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