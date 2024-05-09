System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/form", "@aimpact/ailearn-app@0.0.32/components/ui", "pragmate-ui@0.1.1/list", "pragmate-ui@0.1.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "@beyond-js/kernel@0.1.9/routing", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, Header, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_3 = _aimpactAilearnApp0032CoinsLayoutWidget;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_8 = _beyondJsKernel019Texts;
    }, function (_pragmateUi011Components) {
      dependency_9 = _pragmateUi011Components;
    }, function (_pragmateUi011Form) {
      dependency_10 = _pragmateUi011Form;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_pragmateUi011List) {
      dependency_12 = _pragmateUi011List;
    }, function (_pragmateUi011Modal) {
      dependency_13 = _pragmateUi011Modal;
    }, function (_framerMotion2) {
      dependency_14 = _framerMotion2;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Icons) {
      dependency_16 = _pragmateUi011Icons;
    }, function (_pragmateUi011Alert) {
      dependency_17 = _pragmateUi011Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_18 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_19 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_20 = _pragmateUi011FormReactSelect;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_22 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_23 = _aimpactAilearnApp0032Config;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/coins-layout.widget', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['pragmate-ui/components', dependency_9], ['pragmate-ui/form', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['pragmate-ui/list', dependency_12], ['pragmate-ui/modal', dependency_13], ['framer-motion', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/icons', dependency_16], ['pragmate-ui/alert', dependency_17], ['@beyond-js/react-18-widgets/hooks', dependency_18], ['@aimpact/chat/shared/hooks', dependency_19], ['pragmate-ui/form/react-select', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_22], ['@aimpact/ailearn-app/config', dependency_23]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-modules-management-ceate",
        "vspecifier": "@aimpact/ailearn-app@0.0.32/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "coins-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.0.32/modules/draft.widget');
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
        hash: 3344635802,
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
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title), _react.default.createElement("p", null, texts.refine.activities.description)), _react.default.createElement("div", {
              className: "flex-container flex-end"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.setView,
              bordered: true
            }, texts.refine.examples.action)), _react.default.createElement(_form.Textarea, {
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
        hash: 2260228846,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsInVzZVRleHRzQ2FsbGJhY2siLCJjYWxsYmFjayIsInNldFJlYWR5Iiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiaXNSZWFkeSIsIk1vZGFsQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VNb2RhbENvbnRleHQiLCJ1c2VDb250ZXh0IiwiX2NvbXBvbmVudHMiLCJfbGlzdCIsIl9jb250ZXh0IiwiX2NvbnRleHQyIiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwidXNlTW9kdWxlQ29udGV4dCIsInNldFZpZXciLCJzZXROb3RlcyIsInNldFNlbGVjdGVkIiwib25CYWNrIiwiSXRlbSIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJCdXR0b24iLCJib3JkZXJlZCIsInZhcmlhbnQiLCJyZWZpbmUiLCJleGFtcGxlcyIsImFjdGlvbnMiLCJzZWxlY3QiLCJGcmFnbWVudCIsInRpdGxlIiwiTGlzdCIsIml0ZW1zIiwiY29udHJvbCIsImJhY2siLCJfYWlCdXR0b24iLCJHZW5lcmF0aW9uRm9ybSIsIm9uU2F2ZSIsImVuc3VyZUNyZWRpdHMiLCJzZXRGZXRjaGluZyIsIm9uR2VuZXJhdGUiLCJ3aXphcmQiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiZGVzY3JpcHRpb24iLCJidXR0b25zIiwibWFudWFsIiwiQUlCdXR0b24iLCJnZW5lcmF0ZSIsIl9tb2RhbCIsIl91aSIsIl9nZW5lcmF0aW9uRm9ybSIsIl9mcmFtZXJNb3Rpb24iLCJfc3VnZ2VzdGlvbnMiLCJfZXhhbXBsZXMiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwib25DbG9zZSIsIm5vdGVzIiwidmlldyIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJQcm92aWRlciIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRm9ybSIsImFjdGlvbiIsIlRleHRhcmVhIiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIkNvaW5zQWxlcnQiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwib25Db25maXJtIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJDb2luc01vZGFsIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndUZXh0cyIsImdyYWRlcyIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsIkxhbmd1YWdlRmllbGQiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsInBhcnNlSW50IiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX2Vycm9yIiwiX2FjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwic3RhdGUiLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJmaW5hbFZhbHVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJhbmFseXNlIiwiX2FjdGlvbiIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0Iiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50Il0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlbWVudC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9nZW5lcmF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENB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