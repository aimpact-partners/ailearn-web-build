System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.1/main-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@1.0.0-beta.1/components", "pragmate-ui@1.0.0-beta.1/form", "@aimpact/ailearn-app@0.1.1/components/ui", "pragmate-ui@1.0.0-beta.1/list", "pragmate-ui@1.0.0-beta.1/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.1/components/icons", "pragmate-ui@1.0.0-beta.1/icons", "pragmate-ui@1.0.0-beta.1/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.1/form/react-select", "@beyond-js/kernel@0.1.9/routing"], function (_export, _context3) {
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
    }, function (_aimpactAilearnApp011MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp011MainLayoutWidget;
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
    }, function (_aimpactAilearnApp011ComponentsUi) {
      dependency_12 = _aimpactAilearnApp011ComponentsUi;
    }, function (_pragmateUi100Beta1List) {
      dependency_13 = _pragmateUi100Beta1List;
    }, function (_pragmateUi100Beta1Modal) {
      dependency_14 = _pragmateUi100Beta1Modal;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_aimpactAilearnApp011ComponentsIcons) {
      dependency_16 = _aimpactAilearnApp011ComponentsIcons;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.1"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.1"], ["@aimpact/ailearn-app", "0.1.1"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/components', dependency_10], ['pragmate-ui/form', dependency_11], ['@aimpact/ailearn-app/components/ui', dependency_12], ['pragmate-ui/list', dependency_13], ['pragmate-ui/modal', dependency_14], ['framer-motion', dependency_15], ['@aimpact/ailearn-app/components/icons', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['@aimpact/chat/shared/hooks', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['@beyond-js/kernel/routing', dependency_22]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.1/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.1/modules/draft.widget');
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
        hash: 1279583860,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "audience",
              as: "div"
            }, _react.default.createElement("label", {
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
        hash: 714521376,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "language",
              as: "div"
            }, _react.default.createElement("label", {
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
        hash: 1872352498,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DurationField = DurationField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_ui.TourStep, {
              name: "duration",
              texts: tour,
              as: "div"
            }, _react.default.createElement("label", {
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
        hash: 461785953,
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
              name: "ownership",
              as: "div"
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
        hash: 2582243262,
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
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
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
            return _react.default.createElement("div", {
              ref: mainRef
            }, _react.default.createElement(_form.Form, {
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
            }, _react.default.createElement(_language.LanguageField, null), _react.default.createElement(_ownership.OwnershipField, null), _react.default.createElement(_audience.AudienceField, null), _react.default.createElement(_moduleLength.DurationField, null)), _react.default.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "form-wizard__objective-section"
            }, _react.default.createElement(_objective.ObjectiveField, {
              submitted: submitted
            }))), _react.default.createElement(_suggestions.ObjectiveSuggestions, null), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary"
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
        hash: 2063487900,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveImproved = ObjectiveImproved;
          var _react = require("react");
          var _context = require("../../context");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
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
            return _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "suggestions",
              as: "div",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsInNldEJyZWFkY3J1bWIiLCJsb2FkIiwidXJpIiwicXMiLCJnZXQiLCJoaWRlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIkFjdGl2aXRpZXNNYW5hZ2VtZW50IiwiYWN0aXZpdHlJZCIsInNldEFjdGl2aXR5SWQiLCJkZWZhdWx0IiwidXNlU3RhdGUiLCJyZWYiLCJ1c2VSZWYiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJtb2RlbCIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9tYWluTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsIm9uQ2hhbmdlIiwiYmluZCIsIm9mZiIsIm92ZXJsYXkiLCJnbG9iYWxUaGlzIiwic2V0VGltZW91dCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZU1vZGFsQ29udGV4dCIsInVzZUNvbnRleHQiLCJfY29tcG9uZW50cyIsIl9saXN0IiwiX2NvbnRleHQiLCJfY29udGV4dDIiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VmlldyIsInNldE5vdGVzIiwic2V0U2VsZWN0ZWQiLCJvbkJhY2siLCJJdGVtIiwib25DbGljayIsImNsYXNzTmFtZSIsIkJ1dHRvbiIsImJvcmRlcmVkIiwidmFyaWFudCIsInJlZmluZSIsImV4YW1wbGVzIiwiYWN0aW9ucyIsInNlbGVjdCIsIkZyYWdtZW50IiwidGl0bGUiLCJMaXN0IiwiaXRlbXMiLCJjb250cm9sIiwiYmFjayIsIl9haUJ1dHRvbiIsIkdlbmVyYXRpb25Gb3JtIiwib25TYXZlIiwiZW5zdXJlQ3JlZGl0cyIsInNldEZldGNoaW5nIiwid2l6YXJkIiwibW9kYWxTdWdnZXN0aW9ucyIsImRlc2NyaXB0aW9uIiwiYnV0dG9ucyIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfbW9kYWwiLCJfdWkiLCJfZ2VuZXJhdGlvbkZvcm0iLCJfZnJhbWVyTW90aW9uIiwiX3N1Z2dlc3Rpb25zIiwiX2V4YW1wbGVzIiwiX2Vycm9yIiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIm9uQ2xvc2UiLCJzZXRWYWx1ZXMiLCJub3RlcyIsInZpZXciLCJzZXRFcnJvciIsInN0YXR1cyIsInN0YXRlIiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJDb250cm9sIiwiaGFuZGxlQ0xvc2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJFcnJvclJlbmRlcmVyIiwiZXJyb3JzIiwiUHJvdmlkZXIiLCJBbmltYXRlUHJlc2VuY2UiLCJrZXkiLCJQcm9jZXNzQ29udGFpbmVyIiwiX2Zvcm0iLCJldmVudHMiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGb3JtIiwiVGV4dGFyZWEiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiQ29pbnNBbGVydCIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJCYXR0ZXJ5IiwicGVyY2VudCIsIkNvaW5zTW9kYWwiLCJtb2RhbCIsImdldENyZWRpdHMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJjb25maXJtIiwiY2FuY2VsIiwib25DYW5jZWwiLCJfaWNvbnMiLCJfaWNvbnMyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInN1Ym1pdFRleHQiLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm91dHB1dCIsImluZGV4IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9ob29rcyIsIl9ob29rczIiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJpbnB1dCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiYXJnZW50aW5lIiwieWVhciIsImlzRGlzYWJsZWQiLCJUb3VyU3RlcCIsImFzIiwiUmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkIiwid1RleHRzIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9hY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsImNvbnRpbnVlIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2dlbmVyYXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9zdWdnZXN0aW9ucy50c3giLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9hdWRpZW5jZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFFTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FFaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sYUFBYSxFQUFFO2NBQzNCLElBQUksQ0FBQyxDQUFBTixLQUFNLENBQUNPLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FB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