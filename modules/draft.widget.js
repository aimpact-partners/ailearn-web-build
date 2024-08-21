System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.01/main-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.01/widgets/breadcrumb.widget", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/form", "@aimpact/ailearn-app@0.1.6-dev.01/components/ui", "pragmate-ui@1.0.0-beta.2/list", "pragmate-ui@1.0.0-beta.2/modal", "framer-motion@10.18.0", "@aimpact/ailearn-app@0.1.6-dev.01/components/icons", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.2/form/react-select", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/base"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev01MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev01MainLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev01WidgetsBreadcrumbWidget) {
      dependency_10 = _aimpactAilearnApp016Dev01WidgetsBreadcrumbWidget;
    }, function (_pragmateUi100Beta2Components) {
      dependency_11 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Form) {
      dependency_12 = _pragmateUi100Beta2Form;
    }, function (_aimpactAilearnApp016Dev01ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev01ComponentsUi;
    }, function (_pragmateUi100Beta2List) {
      dependency_14 = _pragmateUi100Beta2List;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_15 = _pragmateUi100Beta2Modal;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_aimpactAilearnApp016Dev01ComponentsIcons) {
      dependency_17 = _aimpactAilearnApp016Dev01ComponentsIcons;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_18 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_19 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat102SharedHooks) {
      dependency_21 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_22 = _pragmateUi100Beta2FormReactSelect;
    }, function (_beyondJsKernel019Routing) {
      dependency_23 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2Base) {
      dependency_24 = _pragmateUi100Beta2Base;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.01"], ["@aimpact/ailearn-app", "0.1.6-dev.01"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.01/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_10], ['pragmate-ui/components', dependency_11], ['pragmate-ui/form', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['pragmate-ui/list', dependency_14], ['pragmate-ui/modal', dependency_15], ['framer-motion', dependency_16], ['@aimpact/ailearn-app/components/icons', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['@aimpact/chat/shared/hooks', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['@beyond-js/kernel/routing', dependency_23], ['pragmate-ui/base', dependency_24]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.01/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.01/modules/draft.widget');
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
        hash: 2363243396,
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
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
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
            get breadcrumb() {
              return _breadcrumb.breadcrumbStore.breadcrumb;
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

      /**********************
      INTERNAL MODULE: ./trim
      **********************/

      ims.set('./trim', {
        hash: 750512083,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.trimText = trimText;
          function trimText(input, charLimit) {
            if (input.length <= charLimit) return input;
            let trimmed = input.slice(0, charLimit);
            // Check if the slice ends in the middle of a word
            if (input[charLimit] && !/\s|[.,!?]/.test(input[charLimit])) {
              const remainder = input.slice(charLimit);
              const endOfWordIndex = remainder.search(/\s|[.,!?]/);
              trimmed += endOfWordIndex !== -1 ? remainder.slice(0, endOfWordIndex) : remainder;
            }
            return `${trimmed}...`;
          }
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
        hash: 641811823,
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

      /**************************************************
      INTERNAL MODULE: ./views/activities/request-credits
      **************************************************/

      ims.set('./views/activities/request-credits', {
        hash: 2171387713,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.CoinsModal = CoinsModal;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _context2 = require("../context");
          function CoinsModal({}) {
            const [fetching, setFetching] = _react.default.useState(false);
            const [error, setError] = _react.default.useState();
            let {
              texts,
              store
            } = (0, _context2.useModuleContext)();
            const {
              setView,
              onClose
            } = (0, _context.useModalContext)();
            texts = texts.coins.modal;
            const onConfirm = async () => {
              try {
                setFetching(true);
                const answer = await store.model.consumeCoins();
                if (!answer.status) {
                  const errors = {
                    48: 'NO_CREDITS'
                  };
                  throw new Error(errors[answer.error.code]);
                }
                onClose();
              } catch (e) {
                setError(texts.errors.noCredits);
              } finally {
                setFetching(false);
              }
            };
            return _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement(_ui.ErrorRenderer, {
              error: error,
              variant: "warning"
            }), _react.default.createElement(_ui.Battery, {
              percent: "100",
              className: "lg"
            }), _react.default.createElement("p", null, texts.description));
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
        hash: 679792599,
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
          var _trim = require("../../trim");
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
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const onCofirmed = async () => {
              await store.save({
                ...values,
                state: 'created'
              });
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              console.log(2, store.breadcrumb.lastItem.label, store.breadcrumb);
              store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
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
        hash: 1133063744,
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
        hash: 2063911443,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestionsItem = ObjectiveSuggestionsItem;
          var _react = require("react");
          var _context = require("../../../context");
          function ObjectiveSuggestionsItem(props = {}) {
            const {
              index,
              item,
              block,
              selected,
              setSelected
            } = props;
            const {
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
              'data-index': index
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIlJlYWN0aXZlTW9kZWwiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdhbml6YXRpb25zIiwibWFwIiwiaXRlbSIsInZhbHVlIiwibGFiZWwiLCJuYW1lIiwibW9kdWxlT3duZXIiLCJvd25lciIsInNlbGVjdGVkIiwiZGVmYXVsdFZhbHVlcyIsImF1ZGllbmNlIiwiZHVyYXRpb24iLCJvYmplY3RpdmUiLCJ0b3RhbEFjdGl2aXRpZXMiLCJsYW5ndWFnZSIsInZhbHVlcyIsImdldFByb3BlcnRpZXMiLCJ0ZXh0cyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiX2NvbXBvbmVudHMiLCJfY29udGV4dCIsIl9jb250ZXh0MiIsIkNvbmZpcm1hdGlvbkZvcm0iLCJvblNhdmUiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VmlldyIsIm9uQ2xvc2UiLCJ1c2VNb2RhbENvbnRleHQiLCJvbkNvbmZpcm0iLCJjbGFzc05hbWUiLCJyZWZpbmUiLCJjb25maXJtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIkJ1dHRvbiIsInZhcmlhbnQiLCJib3JkZXJlZCIsIm9uQ2xpY2siLCJhY3Rpb25zIiwiY2FuY2VsIiwiTW9kYWxDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJfbGlzdCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwic2V0U2VsZWN0ZWQiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJzZWxlY3QiLCJGcmFnbWVudCIsIkxpc3QiLCJpdGVtcyIsImNvbnRyb2wiLCJiYWNrIiwiX2FpQnV0dG9uIiwiR2VuZXJhdGlvbkZvcm0iLCJlbnN1cmVDcmVkaXRzIiwic2V0RmV0Y2hpbmciLCJ3aXphcmQiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiYnV0dG9ucyIsIm1hbnVhbCIsIkFJQnV0dG9uIiwiZ2VuZXJhdGUiLCJfbW9kYWwiLCJfdWkiLCJfZ2VuZXJhdGlvbkZvcm0iLCJfZnJhbWVyTW90aW9uIiwiX3N1Z2dlc3Rpb25zIiwiX2V4YW1wbGVzIiwiX2Vycm9yIiwiX2NvbmZpcm1hdGlvbiIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJub3RlcyIsInZpZXciLCJzZXRFcnJvciIsInN0YXR1cyIsInN0YXRlIiwib25HZW5lcmF0ZSIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwic3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0Zvcm0iLCJ2aWV3RGVmaW5lZCIsIkNvbnRyb2wiLCJoYW5kbGVDTG9zZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIkVycm9yUmVuZGVyZXIiLCJlcnJvcnMiLCJQcm92aWRlciIsIkFuaW1hdGVQcmVzZW5jZSIsImtleSIsIlByb2Nlc3NDb250YWluZXIiLCJDb2luc01vZGFsIiwiY29pbnMiLCJtb2RhbCIsImFuc3dlciIsImNvbnN1bWVDb2lucyIsIkVycm9yIiwiY29kZSIsIm5vQ3JlZGl0cyIsIkJhdHRlcnkiLCJwZXJjZW50IiwiX2Zvcm0iLCJldmVudHMiLCJvbkNoYW5nZSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZvcm0iLCJUZXh0YXJlYSIsInRleHRhcmVhIiwicGxhY2Vob2xkZXIiLCJDb2luc0FsZXJ0IiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJnZXRDcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwib25DYW5jZWwiLCJfaWNvbnMiLCJfaWNvbnMyIiwiY2hpbGRyZW4iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInN1Ym1pdFRleHQiLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm91dHB1dCIsImluZGV4IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9ob29rcyIsIl9ob29rczIiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsIlBhZ2VDb250YWluZXIiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJMYW5ndWFnZUZpZWxkIiwid1RleHRzIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJUb3VyU3RlcCIsImFzIiwiX2FuaW1hdGVkRGl2IiwiX2F1ZGllbmNlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfYWN0aXZpdGllcyIsIl9sYW5ndWFnZSIsIl90cmltIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsImNvbnRpbnVlIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJvbkNvZmlybWVkIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImxvZyIsImxhc3RJdGVtIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsImFuYWx5c2UiLCJfYWN0aW9uIiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9hY3Rpdml0aWVzL2dlbmVyYXRpb24tZm9ybS50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9pbmRleC50c3giLCIvdHMvdmlld3MvYWN0aXZpdGllcy9yZXF1ZXN0LWNyZWRpdHMudHN4IiwiL3RzL3ZpZXdzL2FjdGl2aXRpZXMvc3VnZ2VzdGlvbnMudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUVOQyxXQUFXQSxDQUFB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