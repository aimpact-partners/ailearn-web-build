System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_pragmateUi011Modal) {
      dependency_9 = _pragmateUi011Modal;
    }, function (_aimpactAilearnApp0032ComponentsUi) {
      dependency_10 = _aimpactAilearnApp0032ComponentsUi;
    }, function (_aimpactAilearnApp0032ComponentsIcons) {
      dependency_11 = _aimpactAilearnApp0032ComponentsIcons;
    }, function (_pragmateUi011Components) {
      dependency_12 = _pragmateUi011Components;
    }, function (_pragmateUi011Icons) {
      dependency_13 = _pragmateUi011Icons;
    }, function (_pragmateUi011Alert) {
      dependency_14 = _pragmateUi011Alert;
    }, function (_framerMotion2) {
      dependency_15 = _framerMotion2;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_16 = _beyondJsReact18Widgets112Hooks;
    }, function (_aimpactChat101SharedHooks) {
      dependency_17 = _aimpactChat101SharedHooks;
    }, function (_pragmateUi011FormReactSelect) {
      dependency_18 = _pragmateUi011FormReactSelect;
    }, function (_pragmateUi011Form) {
      dependency_19 = _pragmateUi011Form;
    }, function (_beyondJsKernel019Routing) {
      dependency_20 = _beyondJsKernel019Routing;
    }, function (_pragmateUi011List) {
      dependency_21 = _pragmateUi011List;
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
      }, _context2.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/coins-layout.widget', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@beyond-js/kernel/texts', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/alert', dependency_14], ['framer-motion', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/form', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/list', dependency_21], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_22], ['@aimpact/ailearn-app/config', dependency_23]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsInRyaWdnZXJFdmVudCIsIkxheW91dEJyb2tlciIsImNsZWFyIiwiY2xlYXJJbXByb3ZlbWVudHMiLCJzcGVjcyIsInR5cGUiLCJMZWFybmluZ01vZHVsZSIsIm9uIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJicmVhZGNydW1iIiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwidGVzdCIsIlJlYWN0IiwiX3RleHRzIiwidXNlVGV4dHNDYWxsYmFjayIsInNwZWNpZmllciIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJ0ZXh0cyIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiZ3JhZGVzIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsInNldFRpbWVvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl91c2VUZXh0c0NhbGxiYWNrIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBYyxNQUFBLEdB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