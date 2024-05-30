System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.45/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.45/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.45/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.45/components/navbar-header.code", "@aimpact/ailearn-app@0.0.45/config"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0045CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0045CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0045ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0045ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0045ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0045ComponentsIcons;
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
    }, function (_aimpactAilearnApp0045ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0045ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0045Config) {
      dependency_24 = _aimpactAilearnApp0045Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.45"], ["@aimpact/ailearn-app", "0.0.45"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.45/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.45/modules/draft.widget');
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
        hash: 2897178663,
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
          var _error = require("../components/error");
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
            const [error, setError] = _react.default.useState('');
            if (!show) return null;
            const onSave = async () => {
              try {
                const {
                  status
                } = await store.model.saveDraft({
                  state: 'confirmed'
                });
                if (!status) {
                  setError('default');
                  return;
                }
                onClose();
              } catch (e) {
                setError('default');
              }
            };
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
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts.refine.errors
            }), _react.default.createElement(_context2.ModalContext.Provider, {
              value: {
                view,
                onGenerate,
                setView,
                notes,
                setNotes
              }
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
        hash: 2974695986,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIndpemFyZCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJkZXNjcmlwdGlvbiIsImJ1dHRvbnMiLCJtYW51YWwiLCJBSUJ1dHRvbiIsImdlbmVyYXRlIiwiX21vZGFsIiwiX3VpIiwiX2dlbmVyYXRpb25Gb3JtIiwiX2ZyYW1lck1vdGlvbiIsIl9zdWdnZXN0aW9ucyIsIl9leGFtcGxlcyIsIl9lcnJvciIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJvbkNsb3NlIiwic2V0VmFsdWVzIiwibm90ZXMiLCJ2aWV3Iiwic2V0RXJyb3IiLCJzdGF0dXMiLCJzdGF0ZSIsIm9uR2VuZXJhdGUiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNGb3JtIiwiQ29udHJvbCIsImhhbmRsZUNMb3NlIiwiTW9kYWwiLCJjbG9zZUJhY2tkcm9wIiwiRXJyb3JSZW5kZXJlciIsImVycm9ycyIsIlByb3ZpZGVyIiwiQW5pbWF0ZVByZXNlbmNlIiwia2V5IiwiUHJvY2Vzc0NvbnRhaW5lciIsIl9mb3JtIiwiZXZlbnRzIiwib25DaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiQ29pbnNBbGVydCIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJCYXR0ZXJ5IiwicGVyY2VudCIsIkNvaW5zTW9kYWwiLCJtb2RhbCIsImdldENyZWRpdHMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJfaWNvbnMiLCJfaWNvbnMyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInN1Ym1pdFRleHQiLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm91dHB1dCIsImluZGV4IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9ob29rcyIsIl9ob29rczIiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiaW5wdXQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkIiwid1RleHRzIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9hY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsImNvbnRpbnVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJhbmFseXNlIiwiX2FjdGlvbiIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlbWVudC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9nZW5lcmF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFB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