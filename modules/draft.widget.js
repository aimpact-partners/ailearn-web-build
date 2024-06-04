System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-04/main-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-04/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-04/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-04/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-04/config"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0046Dev04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev04MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev04ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev04ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev04ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0046Dev04ComponentsIcons;
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
    }, function (_aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0046Dev04ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev04Config) {
      dependency_24 = _aimpactAilearnApp0046Dev04Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-04"], ["@aimpact/ailearn-app", "0.0.46.dev-04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-04/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-04/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 1654205315,
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
        hash: 3707619461,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules, '/modules/list'], [this.texts.breadcrumb.management, '']];
              }
            };
            hide() {
              this.#model = undefined;
              super.ready = false;
              this.#improvements = undefined;
              this.triggerEvent();
              _mainLayout.LayoutBroker.clear();
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
                _mainLayout.LayoutBroker.addModel(this.#model, true);
                _mainLayout.LayoutBroker.canConsumeCredits = this.#saved;
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
              _mainLayout.LayoutBroker.canConsumeCredits = true;
              return this.#model;
            }
            setBreadcrumb(breadcrumb) {
              _mainLayout.LayoutBroker.breadcrumb = breadcrumb;
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
        hash: 3851986133,
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
        hash: 86064447,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          /*bundle*/
          function AIButton({
            children,
            onClick,
            ...props
          }) {
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
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
            const handleClick = () => _mainLayout.LayoutBroker.ensureCredits(onClick);
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
        hash: 778498549,
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
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
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
              ensureCredits: _mainLayout.LayoutBroker.ensureCredits
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJSZWFjdGl2ZU1vZGVsIiwic2F2ZWQiLCJpbXByb3ZlbWVudHMiLCJoYXNDcmVkaXRzIiwiY3JlZGl0cyIsInRvdGFsIiwiaW1wcm92ZW1lbnRzU2VsZWN0ZWQiLCJTZXQiLCJ1c2VyIiwic2Vzc2lvbldyYXBwZXIiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwibGFiZWwiLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJMYXlvdXRCcm9rZXIiLCJicmVhZGNydW1iIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJ1bmRlZmluZWQiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0Iiwic2V0QnJlYWRjcnVtYiIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9saXN0IiwiX2NvbnRleHQiLCJfY29udGV4dDIiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VmlldyIsInNldE5vdGVzIiwic2V0U2VsZWN0ZWQiLCJvbkJhY2siLCJJdGVtIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwidmFyaWFudCIsInJlZmluZSIsImV4YW1wbGVzIiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9haUJ1dHRvbiIsIkdlbmVyYXRpb25Gb3JtIiwib25TYXZlIiwiZW5zdXJlQ3JlZGl0cyIsInNldEZldGNoaW5nIiwid2l6YXJkIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfbW9kYWwiLCJfdWkiLCJfZ2VuZXJhdGlvbkZvcm0iLCJfZnJhbWVyTW90aW9uIiwiX3N1Z2dlc3Rpb25zIiwiX2V4YW1wbGVzIiwiX2Vycm9yIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInZpZXciLCJzZXRFcnJvciIsInN0YXR1cyIsInN0YXRlIiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3JzIiwiUHJvdmlkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJrZXkiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZvcm0iLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJDb2luc0FsZXJ0IiwiY29pbnMiLCJhbGVydCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiQ29pbnNNb2RhbCIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImNvbmZpcm0iLCJjYW5jZWwiLCJvbkNhbmNlbCIsIl9pY29ucyIsIl9pY29uczIiLCJjaGlsZHJlbiIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkFsZXJ0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib3V0cHV0IiwiaW5kZXgiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiUGFnZUNvbnRhaW5lciIsImxlbmd0aCIsIkRyYWZ0Rm9ybSIsIl9yZWFjdFNlbGVjdCIsIkF1ZGllbmNlRmllbGQiLCJpbnB1dCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsIkxhbmd1YWdlRmllbGQiLCJ3VGV4dHMiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsInBhcnNlSW50IiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwiY29udGludWUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJBbmltYXRlZExhYmVsIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2dlbmVyYXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUVoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEs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