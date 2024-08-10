System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.4-test.03/main-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/form", "@aimpact/ailearn-app@0.1.4-test.03/components/ui", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.4-test.03/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/form/react-select", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    DraftContainer: void 0,
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
    }, function (_aimpactAilearnApp014Test03MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp014Test03MainLayoutWidget;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_7 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Session) {
      dependency_8 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_pragmateUi100Beta1Components) {
      dependency_10 = _pragmateUi100Beta1Components;
    }, function (_pragmateUi100Beta1Form) {
      dependency_11 = _pragmateUi100Beta1Form;
    }, function (_aimpactAilearnApp014Test03ComponentsUi) {
      dependency_12 = _aimpactAilearnApp014Test03ComponentsUi;
    }, function (_pragmateUi100Beta1List) {
      dependency_13 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_14 = _pragmateUi100Beta1Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp014Test03ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp014Test03ComponentsIcons;
    }, function (_pragmateUi100Beta1Icons) {
      dependency_17 = _pragmateUi100Beta1Icons;
    }, function (_pragmateUi100Beta1Alert) {
      dependency_18 = _pragmateUi100Beta1Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_20 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta1FormReactSelect) {
      dependency_21 = _pragmateUi100Beta1FormReactSelect;
    }, function (_beyondJsKernel019Routing) {
      dependency_22 = _beyondJsKernel019Routing;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.4-test.03"], ["@aimpact/ailearn-app", "0.1.4-test.03"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.4-test.03/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.4-test.03/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.4-test.03/modules/draft.widget');
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
        hash: 3945122459,
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
              _mainLayout.LayoutBroker.addModel(this.#model, true);
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

      /***********************************************
      INTERNAL MODULE: ./views/activities/confirmation
      ***********************************************/

      ims.set('./views/activities/confirmation', {
        hash: 1814516122,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationForm = ConfirmationForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../context");
          var _context2 = require("./context");
          function ConfirmationForm({
            onSave
          }) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              setView,
              onClose
            } = (0, _context2.useModalContext)();
            const [fetching] = _react.default.useState(false);
            const onConfirm = async () => {
              // await store.clearImprovements();
              setView('selection');
            };
            return _react.default.createElement("div", {
              className: "modal__header"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.confirm.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, texts.refine.confirm.description))), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, texts.actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm
            }, texts.actions.confirm)));
          }
        }
      });

      /******************************************
      INTERNAL MODULE: ./views/activities/context
      ******************************************/

      ims.set('./views/activities/context', {
        hash: 1113930506,
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
        hash: 1690758747,
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
          var _confirmation = require("./confirmation");
          function ModalActivitiesGeneration({
            show,
            onClose
          }) {
            const {
              texts,
              store,
              values,
              improvements
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const [notes, setNotes] = _react.default.useState('');
            const [view, setView] = _react.default.useState();
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
              confirm: _confirmation.ConfirmationForm,
              selection: _generationForm.GenerationForm,
              suggestions: _suggestions.SuggestionsForm,
              examples: _examples.SuggestionExamples
            };
            const viewDefined = !!improvements && !view ? 'confirm' : !view ? 'selection' : view;
            const Control = controls[viewDefined];
            const handleCLose = () => {
              setNotes('');
              setView(undefined);
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
                onClose,
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
        hash: 584877816,
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
              variant: "primary",
              bordered: true,
              onClick: () => setCurrent(current - 1)
            }, texts.actions.back), _react.default.createElement(_components.Button, {
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
        hash: 2686182028,
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
        hash: 2453799259,
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
              improvements: store.improvements,
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
        hash: 273652162,
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
              texts: {
                objectiveTour: tour
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
            const options = Object.keys(texts.argentine).map(year => {
              selected = year === values.audience ? {
                value: year,
                label: texts.argentine[year]
              } : selected;
              return {
                value: year,
                label: texts.argentine[year]
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
        hash: 2633993659,
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
        hash: 1706635177,
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
              setValues,
              texts: {
                objectiveTour: tour
              }
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
        hash: 3739138393,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnershipField = OwnershipField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function OwnershipField() {
            const {
              texts: {
                wizard: wTexts
              },
              texts: {
                objectiveTour: tour
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
            return _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "administrator",
              as: "div",
              className: "administrator"
            }, _react.default.createElement("label", {
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
        hash: 1121118336,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DraftForm = DraftForm;
          var React = require("react");
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
              store,
              texts,
              saved,
              fetching,
              improvements
            } = (0, _context.useModuleContext)();
            const [show, setShow] = React.useState(false);
            const [submitted, setSubmitted] = React.useState(false);
            const onClose = () => setShow(false);
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective || !values.language;
            const [confirm, setConfirm] = React.useState(false);
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjectiv2e', store.ready, texts?.objectiveTour?.buttons);
            const onCofirmed = async () => {
              await store.save({
                ...values,
                state: 'created'
              });
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              setSubmitted(true);
            };
            const onSubmit = async () => {
              try {
                if (saved && store.model.state === 'created') {
                  setShow(true);
                  return;
                }
                onCofirmed();
              } catch (e) {
                console.error(e);
              }
            };
            return React.createElement("div", {
              ref: mainRef
            }, React.createElement(_form.Form, {
              className: "form-create-draft__container",
              onSubmit: onSubmit
            }, React.createElement(_error.ErrorRenderer, {
              error: error,
              texts: texts
            }), React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("section", {
              className: "form-body"
            }, React.createElement("header", {
              className: "wizard-form-header"
            }, React.createElement("h1", null, texts.wizard.introduction.title), React.createElement("span", null, texts.wizard.introduction.subtitle)), React.createElement("section", {
              className: "wizard-first-step-container"
            }, React.createElement(_ownership.OwnershipField, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "parameters",
              as: "div",
              className: "parameters-container"
            }, React.createElement(_language.LanguageField, null), React.createElement(_audience.AudienceField, null), React.createElement(_moduleLength.DurationField, null))), React.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "form-wizard__objective-section"
            }, React.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }))), React.createElement(_suggestions.ObjectiveSuggestions, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save",
              as: "footer"
            }, React.createElement(_components.Button, {
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary"
            }, label))), React.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), React.createElement(_activities.ModalActivitiesGeneration, {
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
        hash: 3461474125,
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
                objectiveTour: tour,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInNldEJyZWFkY3J1bWIiLCJsb2FkIiwidXJpIiwicXMiLCJnZXQiLCJoaWRlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIkFjdGl2aXRpZXNNYW5hZ2VtZW50IiwiYWN0aXZpdHlJZCIsInNldEFjdGl2aXR5SWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyZWYiLCJ1c2VSZWYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJtb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9jb250ZXh0MiIsIkNvbmZpcm1hdGlvbkZvcm0iLCJvblNhdmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VmlldyIsIm9uQ2xvc2UiLCJ1c2VNb2RhbENvbnRleHQiLCJvbkNvbmZpcm0iLCJjbGFzc05hbWUiLCJyZWZpbmUiLCJjb25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiY2FuY2VsIiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbGlzdCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwic2V0U2VsZWN0ZWQiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJzZWxlY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJiYWNrIiwiX2FpQnV0dG9uIiwiR2VuZXJhdGlvbkZvcm0iLCJlbnN1cmVDcmVkaXRzIiwic2V0RmV0Y2hpbmciLCJ3aXphcmQiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiYnV0dG9ucyIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfbW9kYWwiLCJfdWkiLCJfZ2VuZXJhdGlvbkZvcm0iLCJfZnJhbWVyTW90aW9uIiwiX3N1Z2dlc3Rpb25zIiwiX2V4YW1wbGVzIiwiX2Vycm9yIiwiX2NvbmZpcm1hdGlvbiIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJub3RlcyIsInZpZXciLCJzZXRFcnJvciIsInN0YXR1cyIsInN0YXRlIiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJ2aWV3RGVmaW5lZCIsIkNvbnRyb2wiLCJoYW5kbGVDTG9zZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvcnMiLCJQcm92aWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJfZm9ybSIsImV2ZW50cyIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZvcm0iLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJDb2luc0FsZXJ0IiwiY29pbnMiLCJhbGVydCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIkJhdHRlcnkiLCJwZXJjZW50IiwiQ29pbnNNb2RhbCIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsIm9uQ2FuY2VsIiwiX2ljb25zIiwiX2ljb25zMiIsImNoaWxkcmVuIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJzdWJtaXRUZXh0Iiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvdXRwdXQiLCJpbmRleCIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwiaW5wdXQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkIiwid1RleHRzIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJUb3VyU3RlcCIsImFzIiwiX2FuaW1hdGVkRGl2IiwiX2F1ZGllbmNlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfYWN0aXZpdGllcyIsIl9sYW5ndWFnZSIsInNldFNob3ciLCJzZXRTdWJtaXR0ZWQiLCJzZXRDb25maXJtIiwiY29udGludWUiLCJtYWluUmVmIiwidXNlRHJpdmVyVG91ciIsIm9uQ29maXJtZWQiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvY29udGV4dC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9nZW5lcmF0aW9uLWZvcm0udHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FFaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZ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