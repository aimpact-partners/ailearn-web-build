System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.46.dev-15/main-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.46.dev-15/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.46.dev-15/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.46.dev-15/components/navbar-header.code", "@aimpact/ailearn-app@0.0.46.dev-15/config"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0046Dev15MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0046Dev15MainLayoutWidget;
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
    }, function (_aimpactAilearnApp0046Dev15ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0046Dev15ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0046Dev15ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0046Dev15ComponentsIcons;
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
    }, function (_aimpactAilearnApp0046Dev15ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0046Dev15ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0046Dev15Config) {
      dependency_24 = _aimpactAilearnApp0046Dev15Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@aimpact/http-suite", "1.0.3"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.0.46.dev-15"], ["@aimpact/ailearn-app", "0.0.46.dev-15"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.46.dev-15/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.46.dev-15/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 754132616,
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
              this.#store.setBreadcrumb();
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
        hash: 1520094361,
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
            setBreadcrumb() {
              const onChange = this.setBreadcrumb.bind(this);
              if (!this.#texts.ready) {
                this.#texts.on('change', onChange);
                return;
              }
              this.#texts.off('change', onChange);
              _mainLayout.LayoutBroker.overlay = false;
              globalThis.setTimeout(() => {
                _mainLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules, '/modules/list'], [this.texts.breadcrumb.management, '']];
              }, 100);
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
        hash: 3552193820,
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
          var _form = require("pragmate-ui/form");
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
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_form.Form, {
              className: "form-create-draft__container",
              onSubmit: onSubmit
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
        hash: 2623037919,
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
            const {
              setImprovedObjective
            } = (0, _context.useSuggestionsContext)();
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
              setImprovedObjective(false);
              setValues(values => ({
                ...values,
                objective: store.model.objective
              }));
            };
            const onCancel = () => {
              setSelected(new Set());
              setImprovedObjective(false);
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
              disabled: block,
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
        hash: 1274783086,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInNldEJyZWFkY3J1bWIiLCJsb2FkIiwidXJpIiwicXMiLCJnZXQiLCJoaWRlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIkFjdGl2aXRpZXNNYW5hZ2VtZW50IiwiYWN0aXZpdHlJZCIsInNldEFjdGl2aXR5SWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyZWYiLCJ1c2VSZWYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJtb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9saXN0IiwiX2NvbnRleHQiLCJfY29udGV4dDIiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VmlldyIsInNldE5vdGVzIiwic2V0U2VsZWN0ZWQiLCJvbkJhY2siLCJJdGVtIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwidmFyaWFudCIsInJlZmluZSIsImV4YW1wbGVzIiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9haUJ1dHRvbiIsIkdlbmVyYXRpb25Gb3JtIiwib25TYXZlIiwiZW5zdXJlQ3JlZGl0cyIsInNldEZldGNoaW5nIiwid2l6YXJkIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfbW9kYWwiLCJfdWkiLCJfZ2VuZXJhdGlvbkZvcm0iLCJfZnJhbWVyTW90aW9uIiwiX3N1Z2dlc3Rpb25zIiwiX2V4YW1wbGVzIiwiX2Vycm9yIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInZpZXciLCJzZXRFcnJvciIsInN0YXR1cyIsInN0YXRlIiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3JzIiwiUHJvdmlkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJrZXkiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJldmVudHMiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiQ29pbnNBbGVydCIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJCYXR0ZXJ5IiwicGVyY2VudCIsIkNvaW5zTW9kYWwiLCJtb2RhbCIsImdldENyZWRpdHMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJfaWNvbnMiLCJfaWNvbnMyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInN1Ym1pdFRleHQiLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm91dHB1dCIsImluZGV4IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9ob29rcyIsIl9ob29rczIiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwiaW5wdXQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkIiwid1RleHRzIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9hY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsImNvbnRpbnVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJhbmFseXNlIiwiX2FjdGlvbiIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsInNwYW4iLCJsYXlvdXQiLCJ3aWR0aCIsIkFuaW1hdGVkIiwiYXMiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwic2hvd0JhciIsIk5hdmJhckhlYWRlciIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvZ2VuZXJhdGlvbi1mb3JtLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2luZGV4LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL3N1Z2dlc3Rpb25zLnRzeCIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBRWhDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFN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