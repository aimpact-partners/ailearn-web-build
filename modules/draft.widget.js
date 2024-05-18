System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32-beta.12/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32-beta.12/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32-beta.12/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32-beta.12/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32-beta.12/config"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp0032Beta12CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032Beta12CoinsLayoutWidget;
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
    }, function (_aimpactAilearnApp0032Beta12ComponentsUi) {
      dependency_12 = _aimpactAilearnApp0032Beta12ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_13 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_14 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp0032Beta12ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp0032Beta12ComponentsIcons;
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
    }, function (_aimpactAilearnApp0032Beta12ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0032Beta12ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Beta12Config) {
      dependency_24 = _aimpactAilearnApp0032Beta12Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@aimpact/http-suite", "1.0.3"], ["@aimpact/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/react-18-widgets", "1.1.2"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["react-select", "5.8.0"], ["react-is", "16.13.1"], ["swiper", "8.4.7"], ["@firebase/auth", "1.6.2"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["@aimpact/ailearn-app", "0.0.32-beta.12"], ["@aimpact/ailearn-app", "0.0.32-beta.12"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.0.32-beta.12/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32-beta.12/modules/draft.widget');
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
        hash: 2266355034,
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
              this.triggerEvent();
              _coinsLayout.LayoutBroker.clear();
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
                return await this.model.getModuleSuggestion({
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
        hash: 3707228135,
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
        hash: 1613427586,
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
            onClose,
            onSave
          }) {
            const {
              texts,
              store,
              values,
              ensureCredits
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState('selection');
            if (!show) return null;
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.generateModuleSuggestion({
                  ...values,
                  notes
                });
                onSave();
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
        hash: 2494450792,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIm9uR2VuZXJhdGUiLCJ3aXphcmQiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwibWFudWFsIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9tb2RhbCIsIl91aSIsIl9nZW5lcmF0aW9uRm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwib25DbG9zZSIsIm5vdGVzIiwidmlldyIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNvaW5zQWxlcnQiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJDb2luc01vZGFsIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndUZXh0cyIsImdyYWRlcyIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsIkxhbmd1YWdlRmllbGQiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsInBhcnNlSW50IiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2Vycm9yIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwic3RhdGUiLCJjb250aW51ZSIsImZpbmFsVmFsdWUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJBbmltYXRlZExhYmVsIiwiZ2xvYmFsVGhpcyIsInNldFRpbWVvdXQiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2dlbmVyYXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FB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