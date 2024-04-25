System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "@beyond-js/kernel@0.1.9/texts", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.2/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_5 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive1112Model) {
      dependency_6 = _beyondJsReactive1112Model;
    }, function (_aimpactChatSdk100Session) {
      dependency_7 = _aimpactChatSdk100Session;
    }, function (_aimpactAilearnApp0032CoinsLayoutWidget) {
      dependency_8 = _aimpactAilearnApp0032CoinsLayoutWidget;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-app/coins-layout.widget', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['pragmate-ui/modal', dependency_10], ['@aimpact/ailearn-app/components/ui', dependency_11], ['@aimpact/ailearn-app/components/icons', dependency_12], ['pragmate-ui/components', dependency_13], ['pragmate-ui/icons', dependency_14], ['pragmate-ui/alert', dependency_15], ['framer-motion', dependency_16], ['@beyond-js/react-18-widgets/hooks', dependency_17], ['@aimpact/chat/shared/hooks', dependency_18], ['pragmate-ui/form/react-select', dependency_19], ['pragmate-ui/form', dependency_20], ['@beyond-js/kernel/routing', dependency_21], ['pragmate-ui/list', dependency_22], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_23], ['@aimpact/ailearn-app/config', dependency_24]]);
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
        hash: 1626414526,
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
        hash: 4178577295,
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
            return _react.default.createElement("div", null, _react.default.createElement("app-modules-management", {
              id: store.model.id,
              activityId: uri.qs.get('activityId')
            }));
          }
        }
      });

      /***********************
      INTERNAL MODULE: ./store
      ***********************/

      ims.set('./store', {
        hash: 4203081590,
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
                return await this.model.getModuleSuggestion(specs);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwibW9kZWwiLCJhY3Rpdml0eUlkIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJvbiIsIkxheW91dEJyb2tlciIsImFkZE1vZGVsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0Iiwic2V0QnJlYWRjcnVtYiIsImJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiZ3JhZGVzIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VGaWVsZCIsInBsYWNlaG9sZGVyIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsInNldFRpbWVvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIkhlYWRlciIsInNob3dCYXIiLCJOYXZiYXJIZWFkZXIiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl91c2VUZXh0c0NhbGxiYWNrIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNVLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFjLE1BQUEsR0FBQWpCLE9BQUE7VUFTTSxTQUFVa0Isb0JBQW9CQSxDQUFDO1lBQUViLEtBQUs7WUFB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