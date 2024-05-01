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
        hash: 355772827,
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
        hash: 3857354124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJicmVhZGNydW1iIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwidGVzdCIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiZ3JhZGVzIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsInNldFRpbWVvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl91c2VUZXh0c0NhbGxiYWNrIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNVLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFjLE1BQUEs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