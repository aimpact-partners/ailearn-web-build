System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_4 = _aimpactAilearnApp0032CoinsLayoutWidget;
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
    }, function (_pragmateUi011Modal) {
      dependency_10 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_11 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_12 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_13 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_14 = _pragmateUi011Icons;
    }, function (_pragmateUi011Alert) {
      dependency_15 = _pragmateUi011Alert;
    }, function (_framerMotion2) {
      dependency_16 = _framerMotion2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_17 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_18 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_19 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Form) {
      dependency_20 = _pragmateUi011Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_21 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_22 = _pragmateUi011List;
    }, function (_aimpactAilearnApp0032ComponentsNavbarHeaderCode) {
      dependency_23 = _aimpactAilearnApp0032ComponentsNavbarHeaderCode;
    }, function (_aimpactAilearnApp0032Config) {
      dependency_24 = _aimpactAilearnApp0032Config;
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/coins-layout.widget', dependency_4], ['react', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/alert', dependency_15], ['framer-motion', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['pragmate-ui/form', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['pragmate-ui/list', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
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
        hash: 3833515916,
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
            #objectivesGenerated = new Map();
            constructor() {
              super();
              this.reactiveProps(['fetchingDraft']);
              globalThis.store = this;
            }
            hide() {
              this.#model = undefined;
              this.ready = false;
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
                this.ready = true;
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
                  ...specs,
                  test: true
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
        hash: 1086093448,
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
              defaultValue: selected,
              name: "audience",
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
        hash: 1201429201,
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
            const selected = {
              value: '',
              label: texts.languages.select.placeholder
            };
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
              defaultValue: selected,
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
        hash: 317351525,
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
              const data = options.find(item => item.value === event.target.value);
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
        hash: 2174441261,
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
              defaultOption: defaultOption,
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
        hash: 1290993653,
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
          var _modalActivities = require("../modal-activities");
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
            return _react.default.createElement("form", {
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
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: processMessages
            })), _react.default.createElement(_modalActivities.ModalActivitiesGeneration, {
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
        hash: 2482970037,
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
              className: "flex-container flex-space-between flex-05 flex-vertical-center"
            }, _react.default.createElement("div", null, _react.default.createElement("span", null, texts.total, ": ", selected.size)), _react.default.createElement("div", {
              className: "actions flex-container flex-05"
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
        hash: 3128993891,
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
              className: "flex-container  flex-vertical-center  flex-space-between mt-30"
            }, _react.default.createElement("span", {
              className: "primary-text"
            }, texts.label), _react.default.createElement("div", {
              className: "actions flex-container flex-space-between flex-05"
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
        hash: 3092527414,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _beyond_context = require("beyond_context");
          var _container = require("./form/container");
          var _management = require("../management");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _context = require("./context");
          var _useTextsCallback = require("../use-texts-callback");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            // the setBreadcrumb function need to be executed when the texts are ready
            const setBreadcrumb = texts => {
              store.setBreadcrumb([[texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]);
            };
            const [textsReady, texts] = (0, _useTextsCallback.useTextsCallback)(_beyond_context.module.specifier, setBreadcrumb);
            const [, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.model?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
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

      /****************************************
      INTERNAL MODULE: ./views/modal-activities
      ****************************************/

      ims.set('./views/modal-activities', {
        hash: 3699130228,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ModalActivitiesGeneration = ModalActivitiesGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _components = require("pragmate-ui/components");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _aiButton = require("./components/ai-button");
          var _context = require("./context");
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
            if (!show) return null;
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
            const onClick = () => ensureCredits(onGenerate);
            return _react.default.createElement(_modal.Modal, {
              show: true,
              onClose: onClose
            }, _react.default.createElement("div", {
              className: "modal__header"
            }, _react.default.createElement("h3", null, texts.wizard.modalSuggestions.title), _react.default.createElement("div", {
              className: "mt-30"
            }, _react.default.createElement("span", null, texts.wizard.modalSuggestions.description)), _react.default.createElement("footer", {
              className: "actions mt-30 flex-container flex-center"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onSave
            }, texts.wizard.modalSuggestions.buttons.manual), _react.default.createElement(_aiButton.AIButton, {
              variant: "primary",
              onClick: onClick
            }, texts.wizard.modalSuggestions.buttons.generate))), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }, _react.default.createElement(_ui.RotatingMessage, {
              time: "8000",
              content: texts.wizard.generatingModule
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJvbiIsIkxheW91dEJyb2tlciIsImFkZE1vZGVsIiwiY2FuQ29uc3VtZUNyZWRpdHMiLCJlIiwiY29uc29sZSIsImVycm9yIiwibGlzdGVuZXIiLCJzYXZlIiwiZmV0Y2hpbmciLCJzYXZlRHJhZnQiLCJzZXRCcmVhZGNydW1iIiwiYnJlYWRjcnVtYiIsImNsZWFuIiwiYWN0aXZpdGllcyIsInRyaWdnZXIiLCJnZXRPYmplY3RpdmVJbXByb3ZlbWVudHMiLCJkYXRhIiwiZ2VuZXJhdGVPYmplY3RpdmUiLCJoYXMiLCJzZXQiLCJnZW5lcmF0ZU1vZHVsZVN1Z2dlc3Rpb24iLCJmZXRjaGluZ0RyYWZ0IiwiZ2V0TW9kdWxlU3VnZ2VzdGlvbiIsInRlc3QiLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInNldFJlYWR5IiwidGV4dHMiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJDdXJyZW50VGV4dHMiLCJpc1JlYWR5IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJjb2lucyIsImFsZXJ0IiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJtb2RhbCIsImdldENyZWRpdHMiLCJlcnJvcnMiLCJub0NyZWRpdHMiLCJDb25maXJtTW9kYWwiLCJhY3Rpb25zIiwiY29uZmlybSIsInZhcmlhbnQiLCJjYW5jZWwiLCJib3JkZXJlZCIsIm9uQ2FuY2VsIiwiRXJyb3JSZW5kZXJlciIsIl9pY29ucyIsIl9jb21wb25lbnRzIiwiX2ljb25zMiIsIkFJQnV0dG9uIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwicHJvcHMiLCJoYW5kbGVDbGljayIsImVuc3VyZUNyZWRpdHMiLCJCdXR0b24iLCJpY29uIiwiSUNPTlMiLCJhaVN0YXJzIiwiQUlJY29uQnV0dG9uIiwiSWNvbkJ1dHRvbiIsIl9hbGVydCIsIkFsZXJ0IiwiX2NvbnRleHQiLCJTdGVwc0Zvb3RlciIsInN1Ym1pdExhYmVsIiwib25TdWJtaXQiLCJkaXNhYmxlZCIsInByZXZpb3VzIiwic2V0Q3VycmVudCIsImN1cnJlbnQiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQW5pbWF0ZWREaXYiLCJjbHMiLCJtb3Rpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ5IiwiZXhpdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsImdyYWRlcyIsInNlbGVjdCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIkxhbmd1YWdlRmllbGQiLCJwbGFjZWhvbGRlciIsIkR1cmF0aW9uRmllbGQiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIl9sYW5ndWFnZSIsInNldFNob3ciLCJzZXRTdWJtaXR0ZWQiLCJzdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIl9haUJ1dHRvbiIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJzdWdnZXN0aW9ucyIsImFuYWx5c2UiLCJfYWN0aW9uIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInNldFNlbGVjdGVkIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsIkFuaW1hdGVkTGFiZWwiLCJzZXRUaW1lb3V0IiwiQW5pbWF0ZVByZXNlbmNlIiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwibW9kdWxlcyIsIm1hbmFnZW1lbnQiLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiLCJfdXNlVGV4dHNDYWxsYmFjayIsIm9uR2VuZXJhdGUiLCJNb2RhbCIsIm1vZGFsU3VnZ2VzdGlvbnMiLCJidXR0b25zIiwibWFudWFsIiwiZ2VuZXJhdGUiLCJnZW5lcmF0aW5nTW9kdWxlIl0sInNvdXJjZXMiOlsiL3RzL2NvbnRyb2xsZXIudHMiLCIvdHMvbWFuYWdlbWVudC50c3giLCIvdHMvc3RvcmUudHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZXJyb3IudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvZ3JhZGUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9tb2R1bGUtbGVuZ3RoLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQtbGFiZWwudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2luZGV4LnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvbW9kYWwtYWN0aXZpdGllcy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFB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Q0FBQztZQUMvQyxPQUNDalYsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ3FGLE1BQUEsQ0FBQXFQLEtBQUs7Y0FBQ3pWLElBQUk7Y0FBQ3VHLE9BQU8sRUFBRUE7WUFBTyxHQUMzQmhHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtrRyxTQUFTLEVBQUM7WUFBZSxHQUM3QjFHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGFBQUsrRSxLQUFLLENBQUNxSSxNQUFNLENBQUN1SCxnQkFBZ0IsQ0FBQzVPLEtBQUssQ0FBTSxFQUM5Q3ZHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBO2NBQUtrRyxTQUFTLEVBQUM7WUFBTyxHQUNyQjFHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLGVBQU8rRSxLQUFLLENBQUNxSSxNQUFNLENBQUN1SCxnQkFBZ0IsQ0FBQ3hPLFdBQVcsQ0FBUSxDQUNuRCxFQUNOM0csTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUE7Y0FBUWtHLFNBQVMsRUFBQztZQUEwQyxHQUMzRDFHLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNvSCxXQUFBLENBQUFRLE1BQU07Y0FBQ2QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDUSxPQUFPLEVBQUU2STtZQUFNLEdBQ2hEdEwsS0FBSyxDQUFDcUksTUFBTSxDQUFDdUgsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUNyQyxFQUNUclYsTUFBQSxDQUFBSSxPQUFBLENBQUFJLGFBQUEsQ0FBQ2tSLFNBQUEsQ0FBQTVKLFFBQVE7Y0FBQ1IsT0FBTyxFQUFDLFNBQVM7Y0FBQ1UsT0FBTyxFQUFFQTtZQUFPLEdBQzFDekMsS0FBSyxDQUFDcUksTUFBTSxDQUFDdUgsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBQ0UsUUFBUSxDQUNyQyxDQUNILENBQ0osRUFDTnRWLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNzRixHQUFBLENBQUF1TCxnQkFBZ0I7Y0FBQ3BOLFFBQVEsRUFBRUE7WUFBUSxHQUNuQ2pFLE1BQUEsQ0FBQUksT0FBQSxDQUFBSSxhQUFBLENBQUNzRixHQUFBLENBQUF3TCxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRWpNLEtBQUssQ0FBQ3FJLE1BQU0sQ0FBQzJIO1lBQWdCLEVBQUksQ0FDckQsQ0FDWjtVQUVWIiwiaWdub3JlTGlzdCI6W119