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
        hash: 2384267127,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJvbiIsIkxheW91dEJyb2tlciIsImFkZE1vZGVsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0Iiwic2V0QnJlYWRjcnVtYiIsImJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJ0ZXN0IiwiUmVhY3QiLCJfdGV4dHMiLCJ1c2VUZXh0c0NhbGxiYWNrIiwic3BlY2lmaWVyIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInRleHRzIiwic2V0VGV4dHMiLCJ1c2VFZmZlY3QiLCJtb2RlbFRleHRzIiwiQ3VycmVudFRleHRzIiwiaXNSZWFkeSIsIl9tb2RhbCIsIl91aSIsIkNvaW5zQWxlcnQiLCJvbkNsb3NlIiwiY29pbnMiLCJhbGVydCIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkNvaW5zTW9kYWwiLCJzZXRGZXRjaGluZyIsInNldEVycm9yIiwibW9kYWwiLCJnZXRDcmVkaXRzIiwiZXJyb3JzIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJiYWNrIiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsIkNvbnRyb2wiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJfaG9va3MiLCJfaG9va3MyIiwiX2JleW9uZF9jb250ZXh0IiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwibW9kdWxlIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJGcmFnbWVudCIsIlByb3ZpZGVyIiwiUGFnZUNvbnRhaW5lciIsImxlbmd0aCIsIkRyYWZ0Rm9ybSIsIl9yZWFjdFNlbGVjdCIsIkdyYWRlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJncmFkZXMiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJkZWZhdWx0VmFsdWUiLCJMYW5ndWFnZUZpZWxkIiwicGxhY2Vob2xkZXIiLCJEdXJhdGlvbkZpZWxkIiwiZmluZCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwicGFyc2VJbnQiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwic3VibWl0dGVkIiwibWVzc2FnZXMiLCJUZXh0YXJlYSIsInRleHRBcmVhIiwiY291bnRlciIsIm1heExlbmd0aCIsIkljb24iLCJPd25lcnNoaXBGaWVsZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJfYW5pbWF0ZWREaXYiLCJfZ3JhZGUiLCJfbW9kdWxlTGVuZ3RoIiwiX293bmVyc2hpcCIsIl9vYmplY3RpdmUiLCJfcm91dGluZyIsIl9zdWdnZXN0aW9ucyIsIl9lcnJvciIsIl9tb2RhbEFjdGl2aXRpZXMiLCJfbGFuZ3VhZ2UiLCJzZXRTaG93Iiwic2V0U3VibWl0dGVkIiwic3RhdGUiLCJjb250aW51ZSIsInByb2Nlc3NNZXNzYWdlcyIsImhhc093blByb3BlcnR5Iiwib2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJvblNhdmUiLCJmaW5hbFZhbHVlIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImludHJvZHVjdGlvbiIsInN1YnRpdGxlIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJSb3RhdGluZ01lc3NhZ2UiLCJ0aW1lIiwiY29udGVudCIsIk1vZGFsQWN0aXZpdGllc0dlbmVyYXRpb24iLCJfYWlCdXR0b24iLCJTdWdnZXN0aW9uc0FjdGlvbiIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJpcnJlbGV2YW50Iiwic3VnZ2VzdGlvbnMiLCJhbmFseXNlIiwiX2FjdGlvbiIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzZXRTZWxlY3RlZCIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJpdGVtcyIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwiZGF0YXNldCIsImVsZW1lbnRzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJBbmltYXRlZExhYmVsIiwic2V0VGltZW91dCIsIkFuaW1hdGVQcmVzZW5jZSIsInNwYW4iLCJsYXlvdXQiLCJ3aWR0aCIsIkFuaW1hdGVkIiwiYXMiLCJDb21wb25lbnQiLCJfbmF2YmFySGVhZGVyIiwiSGVhZGVyIiwic2hvd0JhciIsIk5hdmJhckhlYWRlciIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50IiwiX3VzZVRleHRzQ2FsbGJhY2siLCJvbkdlbmVyYXRlIiwiTW9kYWwiLCJtb2RhbFN1Z2dlc3Rpb25zIiwiYnV0dG9ucyIsIm1hbnVhbCIsImdlbmVyYXRlIiwiZ2VuZXJhdGluZ01vZHVsZSJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLWFjdGl2aXRpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFBQSxJQUFBQSxLQUFBLEdBQUFDLE9BQUE7VUFDQSxJQUFBQyxNQUFBLEdBQUFELE9BQUE7VUFDQSxJQUFBRSxNQUFBLEdBQUFGLE9BQUE7VUFFTztVQUFVLE1BQ1hHLFVBQVcsU0FBUUosS0FBQSxDQUFBSyx5QkFBeUI7WUFDakQsQ0FBQUMsS0FBTTtZQUNOQyxXQUFXQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUFELEtBQU0sR0FBRyxJQUFJSixNQUFBLENBQUFNLFlBQVksRUFBRTtjQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFBRixLQUFNO1lBQ25CO1lBQ0EsSUFBSUcsTUFBTUEsQ0FBQTtjQUNULE9BQU9OLE1BQUEsQ0FBQU8sSUFBSTtZQUNaO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQUwsS0FBTSxDQUFDTSxJQUFJLENBQUMsSUFBSSxDQUFDQyxHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQ0YsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN2RTtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1UsSUFBSSxFQUFFO1lBQ25COztVQUNBQyxPQUFBLENBQUFiLFVBQUEsR0FBQUEsVUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkQsSUFBQWMsTUFBQSxHQUFBakIsT0FBQTtV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