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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/react-18-widgets", "1.1.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
        hash: 1122148050,
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
              console.log('show del create', this.uri.qs.get('id'), this.uri.qs.get('activityId'));
              this.#store.load(this.uri.qs.get('id'), this.uri.qs.get('activityId'));
            }
            hide() {
              console.log('hide del create');
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
        hash: 460715316,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.Header = Header;
          var _navbarHeader = require("@aimpact/ailearn-app/components/navbar-header.code");
          var _react = require("react");
          var _context = require("../context");
          var _config = require("@aimpact/ailearn-app/config");
          /*bundle*/
          function Header() {
            const {
              store,
              texts
            } = (0, _context.useDraftManagementContext)();
            const showBar = store.saved && !store.hasCredits;
            return _react.default.createElement("section", null, _react.default.createElement(_navbarHeader.NavbarHeader, {
              breadcrumb: [[_config.default.params.APP_NAME, '/'], [texts.breadcrumb.modules, '/modules/list'], [texts.breadcrumb.management, '']]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImNvbnNvbGUiLCJsb2ciLCJ1cmkiLCJxcyIsImdldCIsImxvYWQiLCJoaWRlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIkFjdGl2aXRpZXNNYW5hZ2VtZW50IiwiZGVmYXVsdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiYWN0aXZpdHlJZCIsIl9sZWFybmluZ01vZHVsZXMiLCJfbW9kZWwiLCJfc2Vzc2lvbiIsIl9jb2luc0xheW91dCIsIlJlYWN0aXZlTW9kZWwiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImN1cnJlbnRQcm9jZXNzIiwib3duZXJzaGlwcyIsIm9yZ2FuaXphdGlvbnMiLCJtYXAiLCJpdGVtIiwidmFsdWUiLCJsYWJlbCIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJnbG9iYWxUaGlzIiwidW5kZWZpbmVkIiwicmVhZHkiLCJjbGVhckltcHJvdmVtZW50cyIsInRyaWdnZXJFdmVudCIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwib24iLCJMYXlvdXRCcm9rZXIiLCJhZGRNb2RlbCIsImUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0Iiwic2V0QnJlYWRjcnVtYiIsImJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJSZWFjdCIsIl90ZXh0cyIsInVzZVRleHRzQ2FsbGJhY2siLCJzcGVjaWZpZXIiLCJjYWxsYmFjayIsInNldFJlYWR5IiwidXNlU3RhdGUiLCJ0ZXh0cyIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsIkN1cnJlbnRUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl9iZXlvbmRfY29udGV4dCIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsIm1vZHVsZSIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiZ3JhZGVzIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwiZGVmYXVsdFZhbHVlIiwiTGFuZ3VhZ2VGaWVsZCIsInBsYWNlaG9sZGVyIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsInBhcnNlSW50IiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsInNldFRpbWVvdXQiLCJBbmltYXRlUHJlc2VuY2UiLCJzcGFuIiwibGF5b3V0Iiwid2lkdGgiLCJBbmltYXRlZCIsImFzIiwiQ29tcG9uZW50IiwiX25hdmJhckhlYWRlciIsIl9jb25maWciLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwicGFyYW1zIiwiQVBQX05BTUUiLCJtb2R1bGVzIiwibWFuYWdlbWVudCIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl91c2VUZXh0c0NhbGxiYWNrIiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0hDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Y0FDcEYsSUFBSSxDQUFDLENBQUFWLEtBQU0sQ0FBQ1csSUFBSSxDQUFDLElBQUksQ0FBQ0gsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUUsSUFBSUEsQ0FBQTtjQUNITixPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztjQUM5QixJQUFJLENBQUMsQ0FBQVAsS0FBTSxDQUFDWSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWYsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3hCRCxJQUFBZ0IsTUFBQSxHQUFBbkIsT0FBQTtVQVNNLFNBQVVvQixvQkFBb0JBLENBQUM7WUFBRWYsS0FBSztZQUFFUTtVQUFHLENBQUU7WUFDbEQsT0FDQ00sTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBd0JDLEVBQUUsRUFBRWxCLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ0QsRUFBRTtjQUFFRSxVQUFVLEVBQUVaLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWTtZQUFDLEVBQUksQ0FDL0U7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNkQSxJQUFBVyxnQkFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixNQUFBLEdBQUEzQixPQUFBO1VBQ0EsSUFBQTRCLFFBQUEsR0FBQTVCLE9BQUE7VUFDQSxJQUFBNkIsWUFBQSxHQUFBN0IsT0FBQTtVQU9NLE1BQU9PLFlBQWEsU0FBUW9CLE1BQUEsQ0FBQUcsYUFBMkI7WUFDNUQsQ0FBQU4sS0FBTTtZQUNOOzs7WUFHQSxDQUFBTyxLQUFNLEdBQUcsS0FBSztZQUNkLElBQUlBLEtBQUtBLENBQUE7Y0FDUixPQUFPLElBQUksQ0FBQyxDQUFBQSxLQUFNO1lBQ25CO1lBQ0EsSUFBSVAsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFFQSxDQUFBUSxZQUFhO1lBQ2IsSUFBSUEsWUFBWUEsQ0FBQTtjQUNmLE9BQU8sSUFBSSxDQUFDLENBQUFBLFlBQWE7WUFDMUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxJQUFJLENBQUMsQ0FBQVQsS0FBTSxDQUFDVSxPQUFPLEVBQUVDLEtBQUssR0FBRyxDQUFDO1lBQ3RDO1lBQ0EsQ0FBQUMsb0JBQXFCLEdBQUcsSUFBSUMsR0FBRyxFQUFFO1lBQ2pDLElBQUlELG9CQUFvQkEsQ0FBQTtjQUN2QixPQUFPLElBQUksQ0FBQyxDQUFBQSxvQkFBcUI7WUFDbEM7WUFFQSxJQUFJRSxJQUFJQSxDQUFBO2NBQ1AsT0FBT1YsUUFBQSxDQUFBVyxjQUFjLENBQUNELElBQUk7WUFDM0I7WUFFQSxDQUFBRSxjQUFlO1lBQ2YsSUFBSUEsY0FBY0EsQ0FBQTtjQUNqQixPQUFPLElBQUksQ0FBQyxDQUFBQSxjQUFlO1lBQzVCO1lBRUEsSUFBSUMsVUFBVUEsQ0FBQTtjQUNiLE9BQU8sQ0FDTixHQUFHYixRQUFBLENBQUFXLGNBQWMsQ0FBQ0QsSUFBSSxDQUFDSSxhQUFhLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFHO2dCQUMvQyxPQUFPO2tCQUFFQyxLQUFLLEVBQUVELElBQUksQ0FBQ3JCLEVBQUU7a0JBQUV1QixLQUFLLEVBQUVGLElBQUksQ0FBQ0c7Z0JBQUksQ0FBRTtjQUM1QyxDQUFDLENBQUMsQ0FDRjtZQUNGO1lBRUEsSUFBSUMsV0FBV0EsQ0FBQTtjQUNkLElBQUksSUFBSSxDQUFDeEIsS0FBSyxDQUFDeUIsS0FBSyxFQUFFO2dCQUNyQixPQUFPO2tCQUFFSixLQUFLLEVBQUUsSUFBSSxDQUFDckIsS0FBSyxDQUFDeUIsS0FBSyxDQUFDMUIsRUFBRTtrQkFBRXVCLEtBQUssRUFBRSxJQUFJLENBQUN0QixLQUFLLENBQUN5QixLQUFLLENBQUNGO2dCQUFJLENBQUU7O1lBRXJFO1lBRUEsQ0FBQUcsUUFBUztZQUNULElBQUlDLGFBQWFBLENBQUE7Y0FDaEIsT0FBTztnQkFDTkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFFBQVEsRUFBRSxFQUFFO2dCQUNaQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsZUFBZSxFQUFFLENBQUM7Z0JBQ2xCQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUFoQyxLQUFNLENBQUNnQztlQUN0QjtZQUNGO1lBRUEsSUFBSUMsTUFBTUEsQ0FBQTtjQUNULE9BQU8sSUFBSSxDQUFDLENBQUExQixLQUFNLEdBQUcsSUFBSSxDQUFDUCxLQUFLLENBQUNrQyxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUNQLGFBQWE7WUFDckU7WUFFQSxDQUFBUSxtQkFBb0IsR0FBRyxJQUFJQyxHQUFHLEVBQWtCO1lBRWhEQyxZQUFBO2NBQ0MsS0FBSyxFQUFFO2NBQ1AsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztjQUNyQ0MsVUFBVSxDQUFDMUQsS0FBSyxHQUFHLElBQUk7WUFDeEI7WUFDQVksSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTyxLQUFNLEdBQUd3QyxTQUFTO2NBQ3ZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHLEtBQUs7WUFDbkI7WUFFQUMsaUJBQWlCQSxDQUFBO2NBQ2hCLElBQUksQ0FBQyxDQUFBbEMsWUFBYSxHQUFHZ0MsU0FBUztjQUM5QixJQUFJLENBQUNHLFlBQVksQ0FBQyxRQUFRLENBQUM7WUFDNUI7WUFDQSxNQUFNbkQsSUFBSUEsQ0FBQ08sRUFBRSxFQUFFRSxVQUFVO2NBQ3hCLElBQUk7Z0JBQ0gsSUFBSUYsRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFBQyxLQUFNLEVBQUVELEVBQUUsS0FBS0EsRUFBRSxFQUFFO2tCQUNqQzs7Z0JBRUQsTUFBTTZDLEtBQUssR0FBRztrQkFBRUMsSUFBSSxFQUFFLE9BQU87a0JBQUU5QztnQkFBRSxDQUFFO2dCQUVuQyxJQUFJLENBQUMsQ0FBQUMsS0FBTSxHQUFHLE1BQU1FLGdCQUFBLENBQUE0QyxjQUFjLENBQUN2RCxHQUFHLENBQUNxRCxLQUFLLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxDQUFBNUMsS0FBTSxDQUFDK0MsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNKLFlBQVksQ0FBQztnQkFDM0MsSUFBSSxDQUFDLENBQUFwQyxLQUFNLEdBQUcsQ0FBQyxDQUFDUixFQUFFO2dCQUNsQk0sWUFBQSxDQUFBMkMsWUFBWSxDQUFDQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUFqRCxLQUFNLEVBQUUsSUFBSSxDQUFDO2dCQUV4QyxJQUFJLENBQUN5QyxLQUFLLEdBQUcsSUFBSTtnQkFDakIsSUFBSSxDQUFDRSxZQUFZLEVBQUU7ZUFDbkIsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7Z0JBQ1gvRCxPQUFPLENBQUNnRSxLQUFLLENBQUNELENBQUMsQ0FBQzs7WUFFbEI7WUFFQUUsUUFBUUEsQ0FBQTtjQUNQO1lBQUE7WUFHRCxNQUFNQyxJQUFJQSxDQUFDVCxLQUFLO2NBQ2YsSUFBSSxDQUFDVSxRQUFRLEdBQUcsSUFBSTtjQUVwQixNQUFNLElBQUksQ0FBQ3RELEtBQUssQ0FBQ3VELFNBQVMsQ0FBQ1gsS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ1UsUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDWCxZQUFZLEVBQUU7Y0FDbkIsSUFBSSxDQUFDLENBQUFwQyxLQUFNLEdBQUcsSUFBSTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBUCxLQUFNO1lBQ25CO1lBRUF3RCxhQUFhQSxDQUFDQyxVQUFVO2NBQ3ZCcEQsWUFBQSxDQUFBMkMsWUFBWSxDQUFDUyxVQUFVLEdBQUdBLFVBQVU7WUFDckM7WUFDQSxNQUFNQyxLQUFLQSxDQUFBO2NBQ1YsSUFBSSxDQUFDLENBQUExRCxLQUFNLENBQUMyRCxVQUFVLENBQUNELEtBQUssRUFBRTtjQUM5QixJQUFJLENBQUMsQ0FBQW5ELEtBQU0sR0FBR2lDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDb0IsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUN2QjtZQUVBOzs7Ozs7O1lBT0EsTUFBTUMsd0JBQXdCQSxDQUFDO2NBQUUvQjtZQUFTLENBQUU7Y0FDM0MsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQWQsY0FBZSxHQUFHLFdBQVc7Z0JBQ2xDLElBQUksQ0FBQ3NDLFFBQVEsR0FBRyxLQUFLO2dCQUNyQixNQUFNUSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUM5RCxLQUFLLENBQUM2RCx3QkFBd0IsQ0FBQztrQkFBRS9CO2dCQUFTLENBQUUsQ0FBQztnQkFDckUsSUFBSSxDQUFDLENBQUF0QixZQUFhLEdBQUdzRCxJQUFJO2dCQUV6QixJQUFJLENBQUNuQixZQUFZLENBQUMsUUFBUSxDQUFDO2VBQzNCLENBQUMsT0FBT08sQ0FBQyxFQUFFO2dCQUNYL0QsT0FBTyxDQUFDZ0UsS0FBSyxDQUFDRCxDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQWxDLGNBQWUsR0FBR3dCLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ2MsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTVMsaUJBQWlCQSxDQUFDO2NBQUVqQyxTQUFTO2NBQUV0QjtZQUFZLENBQUU7Y0FDbEQsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVEsY0FBZSxHQUFHLG1CQUFtQjtnQkFDMUMsSUFBSSxDQUFDc0MsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLElBQUksSUFBSSxDQUFDLENBQUFuQixtQkFBb0IsQ0FBQzZCLEdBQUcsQ0FBQ3hELFlBQVksQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUEyQixtQkFBb0IsQ0FBQzVDLEdBQUcsQ0FBQ2lCLFlBQVksQ0FBQztnQkFFbkcsTUFBTXNELElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzlELEtBQUssQ0FBQytELGlCQUFpQixDQUFDO2tCQUFFakMsU0FBUztrQkFBRXRCO2dCQUFZLENBQUUsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLENBQUEyQixtQkFBb0IsQ0FBQzhCLEdBQUcsQ0FBQ25DLFNBQVMsRUFBRWdDLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDOUIsS0FBSyxDQUFDcUQsSUFBSTtnQkFDZixJQUFJLENBQUMsQ0FBQXJELEtBQU0sQ0FBQzhCLFNBQVMsR0FBR2dDLElBQUksQ0FBQ2hDLFNBQVM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBdEIsWUFBYSxHQUFHZ0MsU0FBUztnQkFDOUI7Z0JBQ0EsSUFBSSxDQUFDLENBQUE1QixvQkFBcUIsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQzhCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUEzQyxLQUFNLENBQUM4QixTQUFTO2VBQzVCLENBQUMsT0FBT29CLENBQUMsRUFBRTtnQkFDWC9ELE9BQU8sQ0FBQ2dFLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFsQyxjQUFlLEdBQUd3QixTQUFTO2dCQUNoQyxJQUFJLENBQUNjLFFBQVEsR0FBRyxLQUFLOztZQUV2QjtZQUVBLE1BQU1ZLHdCQUF3QkEsQ0FBQ3RCLEtBQUs7Y0FDbkMsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQTVCLGNBQWUsR0FBRyxpQkFBaUI7Z0JBQ3hDLElBQUksQ0FBQ21ELGFBQWEsR0FBRyxJQUFJO2dCQUN6QixPQUFPLE1BQU0sSUFBSSxDQUFDbkUsS0FBSyxDQUFDb0UsbUJBQW1CLENBQUN4QixLQUFLLENBQUM7ZUFDbEQsQ0FBQyxPQUFPTSxDQUFDLEVBQUU7Z0JBQ1gvRCxPQUFPLENBQUNnRSxLQUFLLENBQUNELENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBbEMsY0FBZSxHQUFHd0IsU0FBUztnQkFDaEMsSUFBSSxDQUFDMkIsYUFBYSxHQUFHLEtBQUs7O1lBRTVCOztVQUNBekUsT0FBQSxDQUFBWCxZQUFBLEdBQUFBLFlBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbE1ELElBQUFzRixLQUFBLEdBQUE3RixPQUFBO1VBQ0EsSUFBQThGLE1BQUEsR0FBQTlGLE9BQUE7VUFFTSxTQUFVK0YsZ0JBQWdCQSxDQUFDQyxTQUFTLEVBQUVDLFFBQVE7WUFDbkQsTUFBTSxDQUFDaEMsS0FBSyxFQUFFaUMsUUFBUSxDQUFDLEdBQUdMLEtBQUssQ0FBQ00sUUFBUSxDQUFDLEtBQUssQ0FBQztZQUMvQyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdSLEtBQUssQ0FBQ00sUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUU1Q04sS0FBSyxDQUFDUyxTQUFTLENBQUMsTUFBSztjQUNwQixNQUFNQyxVQUFVLEdBQUcsSUFBSVQsTUFBQSxDQUFBVSxZQUFZLENBQUNSLFNBQVMsQ0FBQztjQUM5QyxNQUFNN0IsWUFBWSxHQUFHQSxDQUFBLEtBQUs7Z0JBQ3pCLElBQUl0QixLQUFLLEdBQUcwRCxVQUFVLENBQUMxRCxLQUFLO2dCQUM1QndELFFBQVEsQ0FBQ3hELEtBQUssQ0FBQztnQkFDZnFELFFBQVEsQ0FBQ0ssVUFBVSxDQUFDdEMsS0FBSyxDQUFDO2dCQUMxQixJQUFJc0MsVUFBVSxDQUFDdEMsS0FBSyxFQUFFZ0MsUUFBUSxDQUFDcEQsS0FBSyxDQUFDO2NBQ3RDLENBQUM7Y0FDRDBELFVBQVUsQ0FBQ2hDLEVBQUUsQ0FBQyxRQUFRLEVBQUVKLFlBQVksQ0FBQztjQUNyQ0EsWUFBWSxFQUFFO2NBQ2QsT0FBTyxNQUFLO2dCQUNYb0MsVUFBVSxDQUFDaEMsRUFBRSxDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDO2NBQ3RDLENBQUM7WUFDRixDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ04sTUFBTXNDLE9BQU8sR0FBR3hDLEtBQUssSUFBSSxDQUFDLENBQUNtQyxLQUFLO1lBQ2hDLE9BQU8sQ0FBQ0ssT0FBTyxFQUFFTCxLQUFLLENBQUM7VUFDeEI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkJBLElBQUFqRixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBMkcsR0FBQSxHQUFBM0csT0FBQTtVQUNNLFNBQVU0RyxVQUFVQSxDQUFDO1lBQUVsRyxJQUFJO1lBQUVtRyxPQUFPO1lBQUVUO1VBQUssQ0FBRTtZQUNsRCxJQUFJLENBQUMxRixJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCMEYsS0FBSyxHQUFHQSxLQUFLLENBQUNVLEtBQUssQ0FBQ0MsS0FBSztZQUV6QixPQUNDNUYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ29GLE1BQUEsQ0FBQU0sVUFBVTtjQUFDdEcsSUFBSTtjQUFDdUcsV0FBVyxFQUFFYixLQUFLLENBQUNjLE1BQU07Y0FBRUMsU0FBUyxFQUFFTixPQUFPO2NBQUVBLE9BQU8sRUFBRUE7WUFBTyxHQUMvRTFGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlCQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxhQUFLOEUsS0FBSyxDQUFDZ0IsS0FBSyxDQUFNLEVBQ3RCakcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FGLEdBQUEsQ0FBQVUsT0FBTztjQUFDQyxPQUFPLEVBQUMsS0FBSztjQUFDQyxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQ3hDcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsWUFBSThFLEtBQUssQ0FBQ29CLFdBQVcsQ0FBSyxDQUNsQixDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDaEJBLElBQUFyRyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBMkcsR0FBQSxHQUFBM0csT0FBQTtVQUNNLFNBQVV5SCxVQUFVQSxDQUFDO1lBQUVwSCxLQUFLO1lBQUVLLElBQUk7WUFBRW1HLE9BQU87WUFBRVQ7VUFBSyxDQUFFO1lBQ3pELElBQUksQ0FBQzFGLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTSxDQUFDb0UsUUFBUSxFQUFFNEMsV0FBVyxDQUFDLEdBQUd2RyxNQUFBLENBQUFFLE9BQUssQ0FBQzhFLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDckQsTUFBTSxDQUFDeEIsS0FBSyxFQUFFZ0QsUUFBUSxDQUFDLEdBQUd4RyxNQUFBLENBQUFFLE9BQUssQ0FBQzhFLFFBQVEsRUFBRTtZQUMxQ0MsS0FBSyxHQUFHQSxLQUFLLENBQUNVLEtBQUssQ0FBQ2MsS0FBSztZQUV6QixNQUFNVCxTQUFTLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzVCLElBQUk7Z0JBQ0hPLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1ySCxLQUFLLENBQUNtQixLQUFLLENBQUNxRyxVQUFVLEVBQUU7Z0JBQzlCaEIsT0FBTyxFQUFFO2VBQ1QsQ0FBQyxPQUFPbkMsQ0FBQyxFQUFFO2dCQUNYaUQsUUFBUSxDQUFDdkIsS0FBSyxDQUFDMEIsTUFBTSxDQUFDQyxTQUFTLENBQUM7ZUFDaEMsU0FBUztnQkFDVEwsV0FBVyxDQUFDLEtBQUssQ0FBQzs7WUFFcEIsQ0FBQztZQUNELE9BQ0N2RyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0YsTUFBQSxDQUFBc0IsWUFBWTtjQUNadEgsSUFBSTtjQUNKNkcsU0FBUyxFQUFDLFVBQVU7Y0FDcEJVLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2tCQUFFcEYsS0FBSyxFQUFFc0QsS0FBSyxDQUFDNkIsT0FBTyxDQUFDQyxPQUFPO2tCQUFFQyxPQUFPLEVBQUU7Z0JBQVMsQ0FBRTtnQkFDN0RDLE1BQU0sRUFBRTtrQkFBRXRGLEtBQUssRUFBRXNELEtBQUssQ0FBQzZCLE9BQU8sQ0FBQ0csTUFBTTtrQkFBRUQsT0FBTyxFQUFFLFNBQVM7a0JBQUVFLFFBQVEsRUFBRTtnQkFBSTtlQUN6RTtjQUNEbEIsU0FBUyxFQUFFQSxTQUFTO2NBQ3BCbUIsUUFBUSxFQUFFekIsT0FBTztjQUNqQkEsT0FBTyxFQUFFQTtZQUFPLEdBRWhCMUYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGFBQUs4RSxLQUFLLENBQUNnQixLQUFLLENBQU0sRUFDdEJqRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsR0FBQSxDQUFBNEIsYUFBYTtjQUFDNUQsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0J4RCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsR0FBQSxDQUFBVSxPQUFPO2NBQUNDLE9BQU8sRUFBQyxLQUFLO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeENwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxZQUFJOEUsS0FBSyxDQUFDb0IsV0FBVyxDQUFLLENBQ2xCLENBQ0s7VUFFakI7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3hDQSxJQUFBckcsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF3SSxNQUFBLEdBQUF4SSxPQUFBO1VBQ0EsSUFBQXlJLFdBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBMEksT0FBQSxHQUFBMUksT0FBQTtVQUNBLElBQUE2QixZQUFBLEdBQUE3QixPQUFBO1VBRU87VUFBVSxTQUFVMkksUUFBUUEsQ0FBQztZQUFFQyxRQUFRO1lBQUVDLE9BQU87WUFBRSxHQUFHQztVQUFLLENBQUU7WUFDbEUsTUFBTUMsV0FBVyxHQUFHQSxDQUFBLEtBQU1sSCxZQUFBLENBQUEyQyxZQUFZLENBQUN3RSxhQUFhLENBQUNILE9BQU8sQ0FBQztZQUM3RCxPQUNDMUgsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ILFdBQUEsQ0FBQVEsTUFBTTtjQUFBLEdBQUtILEtBQUs7Y0FBRUksSUFBSSxFQUFFVixNQUFBLENBQUFXLEtBQUssQ0FBQ0MsT0FBTztjQUFFUCxPQUFPLEVBQUVFO1lBQVcsR0FDMURILFFBQVEsQ0FDRDtVQUVYO1VBRU87VUFBVSxTQUFVUyxZQUFZQSxDQUFDO1lBQUVULFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUN0RSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTWxILFlBQUEsQ0FBQTJDLFlBQVksQ0FBQ3dFLGFBQWEsQ0FBQ0gsT0FBTyxDQUFDO1lBQzdELE9BQ0MxSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0gsT0FBQSxDQUFBWSxVQUFVO2NBQUEsR0FBS1IsS0FBSztjQUFFSSxJQUFJLEVBQUVWLE1BQUEsQ0FBQVcsS0FBSyxDQUFDQyxPQUFPO2NBQUVQLE9BQU8sRUFBRUU7WUFBVyxHQUM5REgsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJBLElBQUF6SCxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXVKLE1BQUEsR0FBQXZKLE9BQUE7VUFFTSxTQUFVdUksYUFBYUEsQ0FBQztZQUFFbkMsS0FBSztZQUFFekI7VUFBSyxDQUFpRDtZQUM1RjtZQUVBLE9BQU94RCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUksTUFBQSxDQUFBQyxLQUFLO2NBQUNyQixPQUFPLEVBQUM7WUFBTyxHQUFFL0IsS0FBSyxDQUFDekIsS0FBSyxDQUFDLENBQVM7VUFDckQ7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDUEEsSUFBQXhELE1BQUEsR0FBQW5CLE9BQUE7VUFFQSxJQUFBeUksV0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBUU0sU0FBVTBKLFdBQVdBLENBQUM7WUFBRUMsV0FBVyxHQUFHLE1BQU07WUFBRUMsUUFBUTtZQUFFQyxRQUFRLEdBQUcsS0FBSztZQUFFQyxRQUFRLEdBQUc7VUFBSSxDQUFnQjtZQUM5RyxNQUFNO2NBQUUxRCxLQUFLO2NBQUUyRCxVQUFVO2NBQUVDO1lBQU8sQ0FBRSxHQUFHLElBQUFQLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFFekQsTUFBTUMsVUFBVSxHQUFHOUQsS0FBSyxDQUFDNkIsT0FBTyxDQUFDMEIsV0FBVyxDQUFDO1lBRTdDLE9BQ0N4SSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQkFDRXdJLFFBQVEsSUFDUjNJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNtSCxXQUFBLENBQUFRLE1BQU07Y0FBQzFCLFNBQVMsRUFBQyxjQUFjO2NBQUNZLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ1EsT0FBTyxFQUFFQSxDQUFBLEtBQU1rQixVQUFVLENBQUNDLE9BQU8sR0FBRyxDQUFDO1lBQUMsR0FDaEc1RCxLQUFLLENBQUM2QixPQUFPLENBQUNrQyxJQUFJLENBRXBCLEVBQ0RoSixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQ04xQixTQUFTLEVBQUMsY0FBYztjQUN4QmxELElBQUksRUFBQyxRQUFRO2NBQ2I4RCxPQUFPLEVBQUMsU0FBUztjQUNqQlUsT0FBTyxFQUFFZSxRQUFRO2NBQ2pCQyxRQUFRLEVBQUVBLFFBQVE7Y0FDbEJPLE1BQU0sRUFBQztZQUFJLEdBRVZGLFVBQVUsQ0FDSCxDQUNEO1VBRVg7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkNBLElBQUEvSSxNQUFBLEdBQUFuQixPQUFBO1VBTU0sU0FBVXFLLFVBQVVBLENBQUM7WUFBRXpCLFFBQVE7WUFBRTBCLEdBQUcsR0FBRztVQUFNLENBQW1CO1lBQ3JFLE1BQU1DLE9BQU8sR0FBR0QsR0FBRztZQUNuQixPQUFPbkosTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2lKLE9BQU87Y0FBQ0MsdUJBQXVCLEVBQUU7Z0JBQUVDLE1BQU0sRUFBRTdCO2NBQVE7WUFBRSxFQUFJO1VBQ2xFOzs7Ozs7Ozs7Ozs7Ozs7OztVQ1RNLFNBQVU4QixVQUFVQSxDQUFDdEUsS0FBSztZQUMvQixPQUFPO2NBQ05oRCxRQUFRLEVBQUUsQ0FDVCxDQUFDZ0QsS0FBSyxDQUFDaEQsUUFBUSxDQUFDdUgsTUFBTSxFQUFFdkUsS0FBSyxDQUFDaEQsUUFBUSxDQUFDdUgsTUFBTSxDQUFDLEVBQzlDLENBQUN2RSxLQUFLLENBQUNoRCxRQUFRLENBQUN3SCxVQUFVLEVBQUV4RSxLQUFLLENBQUNoRCxRQUFRLENBQUN3SCxVQUFVLENBQUMsRUFDdEQsQ0FBQ3hFLEtBQUssQ0FBQ2hELFFBQVEsQ0FBQ3lILE9BQU8sRUFBRXpFLEtBQUssQ0FBQ2hELFFBQVEsQ0FBQ3lILE9BQU8sQ0FBQyxDQUNoRDtjQUNEeEgsUUFBUSxFQUFFLENBQ1QsQ0FBQyxJQUFJLEVBQUUrQyxLQUFLLENBQUMvQyxRQUFRLENBQUN5SCxLQUFLLENBQUMsRUFDNUIsQ0FBQyxJQUFJLEVBQUUxRSxLQUFLLENBQUMvQyxRQUFRLENBQUMwSCxRQUFRLENBQUMsRUFDL0IsQ0FBQyxJQUFJLEVBQUUzRSxLQUFLLENBQUMvQyxRQUFRLENBQUMySCxRQUFRLENBQUMsQ0FDL0I7Y0FDRHhILFFBQVEsRUFBRSxDQUNULENBQUMsSUFBSSxFQUFFNEMsS0FBSyxDQUFDNkUsU0FBUyxDQUFDQyxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUU5RSxLQUFLLENBQUM2RSxTQUFTLENBQUNFLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRS9FLEtBQUssQ0FBQzZFLFNBQVMsQ0FBQ0csRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFaEYsS0FBSyxDQUFDNkUsU0FBUyxDQUFDSSxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUVqRixLQUFLLENBQUM2RSxTQUFTLENBQUNLLEVBQUUsQ0FBQzthQUUzQjtVQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBbkssTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF5SSxXQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFDQSxJQUFBdUwsUUFBQSxHQUFBdkwsT0FBQTtVQUNNLFNBQVV3TCxXQUFXQSxDQUFDO1lBQUV6SSxJQUFJO1lBQUUwSSxRQUFRO1lBQUUzSSxLQUFLO1lBQUVJLFFBQVEsR0FBRztVQUFDLENBQUU7WUFDbEUsTUFBTTtjQUFFa0QsS0FBSztjQUFFL0Y7WUFBSyxDQUFFLEdBQUcsSUFBQW9KLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDM0MsTUFBTUosUUFBUSxHQUFHO2NBQUVBLFFBQVEsRUFBRXhKLEtBQUssQ0FBQ3lFLFFBQVEsSUFBSXpFLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3NEO1lBQVEsQ0FBRTtZQUNyRSxNQUFNUSxJQUFJLEdBQUcsSUFBQWlHLFFBQUEsQ0FBQWIsVUFBVSxFQUFDdEUsS0FBSyxDQUFDO1lBRTlCLE1BQU1zRixNQUFNLEdBQUdwRyxJQUFJLENBQUN2QyxJQUFJLENBQUMsQ0FBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQ0UsS0FBSyxFQUFFQyxLQUFLLENBQUMsRUFBRTZJLEtBQUssS0FDbkR4SyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQUNsRyxJQUFJLEVBQUVBLElBQUk7Y0FBQSxHQUFNOEcsUUFBUTtjQUFBLGNBQWM4QixLQUFLO2NBQUU5QyxPQUFPLEVBQUU0QyxRQUFRO2NBQUVHLEdBQUcsRUFBRUQsS0FBSztjQUFFOUksS0FBSyxFQUFFQTtZQUFLLEdBQzlGQyxLQUFLLENBRVAsQ0FBQztZQUVGLE9BQ0MzQixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQXlCLEdBQ3ZDcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VLLE9BQU8sRUFBRTlJO1lBQUksR0FBR0QsS0FBSyxDQUFTLEVBQ3JDM0IsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ILFdBQUEsQ0FBQXFELFdBQVc7Y0FBQzVJLFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQU0yRztZQUFRLEdBQzNDNkIsTUFBTSxDQUNNLENBQ1Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkEsSUFBQXZLLE1BQUEsR0FBQW5CLE9BQUE7VUFvQk8sTUFBTStMLGFBQWEsR0FBQTdLLE9BQUEsQ0FBQTZLLGFBQUEsR0FBRzVLLE1BQUEsQ0FBQUUsT0FBSyxDQUFDMkssYUFBYSxDQUFDLEVBQW1CLENBQUM7VUFDOUQsTUFBTS9CLGdCQUFnQixHQUFHQSxDQUFBLEtBQU05SSxNQUFBLENBQUFFLE9BQUssQ0FBQzRLLFVBQVUsQ0FBQ0YsYUFBYSxDQUFDO1VBQUM3SyxPQUFBLENBQUErSSxnQkFBQSxHQUFBQSxnQkFBQTtVQU8vRCxNQUFNaUMsc0JBQXNCLEdBQUFoTCxPQUFBLENBQUFnTCxzQkFBQSxHQUFHL0ssTUFBQSxDQUFBRSxPQUFLLENBQUMySyxhQUFhLENBQUMsRUFBd0IsQ0FBQztVQUM1RSxNQUFNRyx5QkFBeUIsR0FBR0EsQ0FBQSxLQUFNaEwsTUFBQSxDQUFBRSxPQUFLLENBQUM0SyxVQUFVLENBQUNDLHNCQUFzQixDQUFDO1VBQUNoTCxPQUFBLENBQUFpTCx5QkFBQSxHQUFBQSx5QkFBQTtVQU9qRixNQUFNQyxrQkFBa0IsR0FBQWxMLE9BQUEsQ0FBQWtMLGtCQUFBLEdBQUdqTCxNQUFBLENBQUFFLE9BQUssQ0FBQzJLLGFBQWEsQ0FBQyxFQUEwQixDQUFDO1VBQzFFLE1BQU1LLHFCQUFxQixHQUFHQSxDQUFBLEtBQU1sTCxNQUFBLENBQUFFLE9BQUssQ0FBQzRLLFVBQVUsQ0FBQ0csa0JBQWtCLENBQUM7VUFBQ2xMLE9BQUEsQ0FBQW1MLHFCQUFBLEdBQUFBLHFCQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3JDaEYsSUFBQWxMLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBc00sYUFBQSxHQUFBdE0sT0FBQTtVQUVNLFNBQVV1TSxXQUFXQSxDQUFDO1lBQUUzRCxRQUFRO1lBQUU0RDtVQUFHLElBQXlCO1lBQUU1RCxRQUFRLEVBQUUsSUFBSTtZQUFFNEQsR0FBRyxFQUFFO1VBQUUsQ0FBRTtZQUM5RixPQUNDckwsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2dMLGFBQUEsQ0FBQUcsTUFBTSxDQUFDQyxHQUFHO2NBQ1ZuRixTQUFTLEVBQUMsbUJBQW1CO2NBQzdCb0YsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1h6SixRQUFRLEVBQUUsR0FBRztrQkFDYjBKLEtBQUssRUFBRTtpQkFDUDtnQkFDREMsQ0FBQyxFQUFFO2VBQ0g7Y0FDREMsSUFBSSxFQUFFO2dCQUNMSCxVQUFVLEVBQUU7a0JBQ1h6SixRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0R1SixPQUFPLEVBQUU7O1lBQ1QsR0FFQWhFLFFBQVEsQ0FDRztVQUVmOzs7Ozs7Ozs7Ozs7Ozs7OztVQzVCQSxJQUFBL0MsS0FBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBQ0EsSUFBQTJHLEdBQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBeUosUUFBQSxHQUFBekosT0FBQTtVQUNBLElBQUFtTixPQUFBLEdBQUFuTixPQUFBO1VBQ0EsSUFBQW9OLGVBQUEsR0FBQXBOLE9BQUE7VUFFQSxJQUFBcU4sQ0FBQSxHQUFBck4sT0FBQTtVQUdPO1VBQVUsU0FDUnNOLGNBQWNBLENBQUM7WUFBRWpOLEtBQUs7WUFBRVE7VUFBRyxDQUFxQztZQUN4RSxNQUFNLENBQUMwTSxVQUFVLEVBQUVuSCxLQUFLLENBQUMsR0FBRyxJQUFBK0csT0FBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDekgsU0FBUyxDQUFDO1lBQ3RELE1BQU0sQ0FBQ2xCLFFBQVEsRUFBRTRDLFdBQVcsQ0FBQyxHQUFHN0IsS0FBSyxDQUFDTSxRQUFRLENBQUM5RixLQUFLLENBQUN5RSxRQUFRLENBQUM7WUFDOUQsTUFBTSxDQUFDNEksV0FBVyxDQUFDLEdBQUc3SCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdkMsTUFBTSxHQUFHd0gsVUFBVSxDQUFDLEdBQUc5SCxLQUFLLENBQUNNLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDekMsTUFBTSxDQUFDNkQsT0FBTyxFQUFFRCxVQUFVLENBQUMsR0FBR2xFLEtBQUssQ0FBQ00sUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMxQyxNQUFNLEVBQUVtSyxTQUFTLENBQUMsR0FBRy9ILEtBQUssQ0FBQ00sUUFBUSxDQUFzQjlGLEtBQUssQ0FBQ29ELE1BQU0sQ0FBQztZQUM3RSxNQUFNLENBQUNrQixLQUFLLEVBQUVnRCxRQUFRLENBQUMsR0FBRzlCLEtBQUssQ0FBQ00sUUFBUSxFQUFVO1lBQ2xELE1BQU0sQ0FBQzBILFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUdqSSxLQUFLLENBQUNNLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDekQsTUFBTTtjQUFFNkM7WUFBYSxDQUFFLEdBQUcsSUFBQVMsUUFBQSxDQUFBMEMseUJBQXlCLEdBQUU7WUFDckQsSUFBQWUsTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQzFOLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJzTixVQUFVLENBQUMsRUFBRSxDQUFDO2NBQ2RqRyxXQUFXLENBQUNySCxLQUFLLEVBQUVtQixLQUFLLEVBQUVzRCxRQUFRLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDeUksVUFBVSxJQUFJLENBQUNsTixLQUFLLENBQUM0RCxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUM5QyxNQUFNd0gsUUFBUSxHQUFHdUMsS0FBSyxJQUFHO2NBQ3hCSixTQUFTLENBQUM7Z0JBQUUsR0FBR25LLE1BQU07Z0JBQUUsQ0FBQ3VLLEtBQUssQ0FBQ0MsYUFBYSxDQUFDbEwsSUFBSSxHQUFHaUwsS0FBSyxDQUFDQyxhQUFhLENBQUNwTDtjQUFLLENBQUUsQ0FBQztZQUNoRixDQUFDO1lBRUQsTUFBTUEsS0FBSyxHQUFHO2NBQ2J4QyxLQUFLO2NBQ0xvTCxRQUFRO2NBQ1JyRixLQUFLO2NBQ0xzSCxXQUFXO2NBQ1gxRCxPQUFPO2NBQ1BELFVBQVU7Y0FDVnBGLEtBQUs7Y0FDTHFFLGFBQWE7Y0FDYnJCLFFBQVE7Y0FDUjdDLFFBQVEsRUFBRUEsUUFBUSxJQUFJK0ksVUFBVTtjQUNoQ0MsYUFBYTtjQUNiL0wsS0FBSyxFQUFFMUIsS0FBSyxDQUFDMEIsS0FBSztjQUNsQjBCLE1BQU07Y0FDTm1LO2FBQ0E7WUFDRCxNQUFNcEIsR0FBRyxHQUFHLElBQUkxSCxRQUFRLEdBQUcsYUFBYSxHQUFHLEVBQUUsRUFBRTtZQUUvQyxPQUNDZSxLQUFBLENBQUF2RSxhQUFBLENBQUF1RSxLQUFBLENBQUFxSSxRQUFBLFFBQ0NySSxLQUFBLENBQUF2RSxhQUFBLENBQUNtSSxRQUFBLENBQUFzQyxhQUFhLENBQUNvQyxRQUFRO2NBQUN0TCxLQUFLLEVBQUVBO1lBQUssR0FDbkNnRCxLQUFBLENBQUF2RSxhQUFBLENBQUNxRixHQUFBLENBQUF5SCxhQUFhO2NBQUM3RyxTQUFTLEVBQUVpRixHQUFHO2NBQUUxSCxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUN6RSxLQUFLLENBQUNtQixLQUFLLEVBQUUyRCxVQUFVLENBQUNrSjtZQUFNLEdBQ3BGeEksS0FBQSxDQUFBdkUsYUFBQSxDQUFDK0wsQ0FBQSxDQUFBaUIsU0FBUyxPQUFHLENBQ0UsQ0FDUSxDQUN2QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBbk4sTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF1TyxZQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFFTSxTQUFVd08sVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQ0xwSSxLQUFLO2NBQ0wvRixLQUFLO2NBQ0wrRixLQUFLLEVBQUU7Z0JBQUVxSSxNQUFNLEVBQUVDO2NBQU07WUFBRSxDQUN6QixHQUFHLElBQUFqRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTJELFNBQVM7Y0FBRW5LO1lBQU0sQ0FBRSxHQUFHLElBQUFnRyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUkvRyxRQUFRLEdBQUc7Y0FBRUwsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFNEwsTUFBTSxDQUFDQyxNQUFNLENBQUNDO1lBQU0sQ0FBRTtZQUN6RCxNQUFNbkQsUUFBUSxHQUFHdUMsS0FBSyxJQUNyQkosU0FBUyxDQUFDbkssTUFBTSxJQUFHO2NBQ2xCLE9BQU87Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUwsUUFBUSxFQUFFNEssS0FBSyxDQUFDYSxNQUFNLENBQUNoTTtjQUFLLENBQUU7WUFDbkQsQ0FBQyxDQUFDO1lBQ0gsTUFBTWlNLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUM1SSxLQUFLLENBQUN1SSxNQUFNLENBQUMsQ0FBQ2hNLEdBQUcsQ0FBQ3NNLElBQUksSUFBRztjQUNwRC9MLFFBQVEsR0FBRytMLElBQUksS0FBS3hMLE1BQU0sQ0FBQ0wsUUFBUSxHQUFHO2dCQUFFUCxLQUFLLEVBQUVvTSxJQUFJO2dCQUFFbk0sS0FBSyxFQUFFc0QsS0FBSyxDQUFDdUksTUFBTSxDQUFDTSxJQUFJO2NBQUMsQ0FBRSxHQUFHL0wsUUFBUTtjQUMzRixPQUFPO2dCQUFFTCxLQUFLLEVBQUVvTSxJQUFJO2dCQUFFbk0sS0FBSyxFQUFFc0QsS0FBSyxDQUFDdUksTUFBTSxDQUFDTSxJQUFJO2NBQUMsQ0FBRTtZQUNsRCxDQUFDLENBQUM7WUFFRixNQUFNcEYsUUFBUSxHQUFHO2NBQUVxRixVQUFVLEVBQUU3TyxLQUFLLENBQUMwQjtZQUFLLENBQUU7WUFFNUMsT0FDQ1osTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VLLE9BQU8sRUFBQztZQUFFLEdBQUU2QyxNQUFNLENBQUNDLE1BQU0sQ0FBQzdMLEtBQUssQ0FBUyxFQUMvQzNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpTixZQUFBLENBQUFZLFdBQVc7Y0FBQ0MsWUFBWSxFQUFFbE0sUUFBUTtjQUFFSCxJQUFJLEVBQUMsVUFBVTtjQUFDK0wsT0FBTyxFQUFFQSxPQUFPO2NBQUVyRCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNNUI7WUFBUSxFQUFJLENBQ3RHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUExSSxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXVPLFlBQUEsR0FBQXZPLE9BQUE7VUFDQSxJQUFBeUosUUFBQSxHQUFBekosT0FBQTtVQUVNLFNBQVVxUCxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FDTGpKLEtBQUs7Y0FDTC9GLEtBQUs7Y0FDTCtGLEtBQUssRUFBRTtnQkFBRXFJLE1BQU0sRUFBRUM7Y0FBTSxDQUFFO2NBQ3pCZDtZQUFTLENBQ1QsR0FBRyxJQUFBbkUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNL0csUUFBUSxHQUFHO2NBQUVMLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRXNELEtBQUssQ0FBQzZFLFNBQVMsQ0FBQzJELE1BQU0sQ0FBQ1U7WUFBVyxDQUFFO1lBQ3pFLE1BQU03RCxRQUFRLEdBQUd1QyxLQUFLLElBQUlKLFNBQVMsQ0FBQ25LLE1BQU0sS0FBSztjQUFFLEdBQUdBLE1BQU07Y0FBRUQsUUFBUSxFQUFFd0ssS0FBSyxDQUFDYSxNQUFNLENBQUNoTTtZQUFLLENBQUUsQ0FBQyxDQUFDO1lBQzVGLE1BQU1pTSxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUNuTSxHQUFHLENBQUNDLElBQUksS0FBSztjQUFFQyxLQUFLLEVBQUVELElBQUk7Y0FBRUUsS0FBSyxFQUFFc0QsS0FBSyxDQUFDNkUsU0FBUyxDQUFDckksSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU1pSCxRQUFRLEdBQUc7Y0FBRXFGLFVBQVUsRUFBRTdPLEtBQUssQ0FBQzBCO1lBQUssQ0FBRTtZQUU1QyxPQUNDWixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFPdUssT0FBTyxFQUFDO1lBQUUsR0FBRXpGLEtBQUssQ0FBQzZFLFNBQVMsQ0FBQzJELE1BQU0sQ0FBQzlMLEtBQUssQ0FBUyxFQUN4RDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpTixZQUFBLENBQUFZLFdBQVc7Y0FDWEMsWUFBWSxFQUFFbE0sUUFBUTtjQUN0QkwsS0FBSyxFQUFFeEMsS0FBSyxDQUFDbUIsS0FBSyxDQUFDZ0MsUUFBUTtjQUMzQlQsSUFBSSxFQUFDLFVBQVU7Y0FDZitMLE9BQU8sRUFBRUEsT0FBTztjQUNoQnJELFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2Q1QjtZQUFRLEVBQ1gsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBMUksTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF1TyxZQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFFTSxTQUFVdVAsYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUVsUCxLQUFLO2NBQUUrRixLQUFLO2NBQUUzQyxNQUFNO2NBQUVtSztZQUFTLENBQUUsR0FBRyxJQUFBbkUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUU5RCxNQUFNSixRQUFRLEdBQUc7Y0FBRXFGLFVBQVUsRUFBRTdPLEtBQUssQ0FBQzBCO1lBQUssQ0FBRTtZQUM1QyxNQUFNK00sT0FBTyxHQUFHLENBQ2Y7Y0FBRWpNLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRXNELEtBQUssQ0FBQy9DLFFBQVEsQ0FBQ3lILEtBQUs7Y0FBRXZILGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDOUQ7Y0FBRVYsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFc0QsS0FBSyxDQUFDL0MsUUFBUSxDQUFDMEgsUUFBUTtjQUFFeEgsZUFBZSxFQUFFO1lBQUMsQ0FBRSxFQUNqRTtjQUFFVixLQUFLLEVBQUUsRUFBRTtjQUFFQyxLQUFLLEVBQUVzRCxLQUFLLENBQUMvQyxRQUFRLENBQUMySCxRQUFRO2NBQUV6SCxlQUFlLEVBQUU7WUFBQyxDQUFFLENBQ2pFO1lBQ0QsTUFBTWtJLFFBQVEsR0FBR3VDLEtBQUssSUFBRztjQUN4QixNQUFNMUksSUFBSSxHQUFHd0osT0FBTyxDQUFDVSxJQUFJLENBQUM1TSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsS0FBSyxLQUFLbUwsS0FBSyxDQUFDYSxNQUFNLENBQUNoTSxLQUFLLENBQUM7Y0FDcEUrSyxTQUFTLENBQUNuSyxNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUosUUFBUSxFQUFFMkssS0FBSyxDQUFDYSxNQUFNLENBQUNoTSxLQUFLO2dCQUFFVSxlQUFlLEVBQUUrQixJQUFJLENBQUMvQjtjQUFlLENBQUUsQ0FBQyxDQUFDO1lBQzFHLENBQUM7WUFDRCxJQUFJa00sYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSXZNLFFBQVEsR0FBVyxDQUFDO1lBQ3hCLElBQUlPLE1BQU0sRUFBRWlNLGFBQWEsRUFBRUQsYUFBYSxHQUFHRSxRQUFRLENBQUNsTSxNQUFNLENBQUNKLFFBQVEsQ0FBQztZQUNwRSxJQUFJSSxNQUFNLEVBQUVKLFFBQVEsRUFBRXNJLEtBQUssRUFBRXpJLFFBQVEsR0FBR3lNLFFBQVEsQ0FBQ2xNLE1BQU0sQ0FBQ0osUUFBUSxDQUFDc0ksS0FBSyxDQUFDO1lBRXZFLElBQUkzQixPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFJdkcsTUFBTSxDQUFDSixRQUFRLEVBQUU7Y0FDcEIyRyxPQUFPLEdBQUc4RSxPQUFPLENBQUNVLElBQUksQ0FBQzVNLElBQUksSUFBSUEsSUFBSSxDQUFDQyxLQUFLLEtBQUtZLE1BQU0sQ0FBQ0osUUFBUSxDQUFDOztZQUcvRCxPQUNDbEMsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBT3VLLE9BQU8sRUFBQztZQUFFLEdBQUV6RixLQUFLLENBQUNxSSxNQUFNLENBQUNwTCxRQUFRLENBQUNQLEtBQUssQ0FBUyxFQUN2RDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpTixZQUFBLENBQUFZLFdBQVc7Y0FDWEcsV0FBVyxFQUFFbEosS0FBSyxDQUFDcUksTUFBTSxDQUFDcEwsUUFBUSxDQUFDaU0sV0FBVztjQUM5QzdELFFBQVEsRUFBRUEsUUFBUTtjQUNsQjFJLElBQUksRUFBQyxVQUFVO2NBQ2ZGLEtBQUssRUFBRVksTUFBTSxDQUFDSixRQUFRO2NBQUEsR0FDbEJ3RyxRQUFRO2NBQ1ppRixPQUFPLEVBQUVBO1lBQU8sRUFDZixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUEzTixNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTRQLEtBQUEsR0FBQTVQLE9BQUE7VUFDQSxJQUFBeUosUUFBQSxHQUFBekosT0FBQTtVQUNBLElBQUFzTSxhQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXdJLE1BQUEsR0FBQXhJLE9BQUE7VUFDTSxTQUFVNlAsY0FBY0EsQ0FBQztZQUFFQztVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUNMck0sTUFBTTtjQUNOMkMsS0FBSyxFQUFFO2dCQUNOcUksTUFBTSxFQUFFO2tCQUFFc0IsUUFBUTtrQkFBRXpNLFNBQVMsRUFBRThDO2dCQUFLO2NBQUUsQ0FDdEM7Y0FDRHFGLFFBQVE7Y0FDUnBMO1lBQUssQ0FDTCxHQUFHLElBQUFvSixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE9BQVE5SSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQWlCLEdBRXRDcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NPLEtBQUEsQ0FBQUksUUFBUTtjQUNSdkUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCNUksS0FBSyxFQUFFWSxNQUFNLENBQUNILFNBQVM7Y0FDdkJQLElBQUksRUFBQyxXQUFXO2NBQ2hCdU0sV0FBVyxFQUFFbEosS0FBSyxDQUFDNkosUUFBUTtjQUMzQkMsT0FBTztjQUNQQyxTQUFTLEVBQUU7WUFBRyxFQUNiLEVBQ0RMLFNBQVMsSUFDVDNPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNnTCxhQUFBLENBQUFHLE1BQU0sQ0FBQ0MsR0FBRztjQUNWbkYsU0FBUyxFQUFDLGNBQWM7Y0FDeEJvRixPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWHpKLFFBQVEsRUFBRTs7O1lBRVgsR0FFQTBNLFFBQVEsQ0FBQ2xMLElBQUksRSxLQUFFMUQsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ2tILE1BQUEsQ0FBQTRILElBQUk7Y0FBQ2xILElBQUksRUFBQztZQUFPLEVBQUcsQ0FFdEMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBL0gsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF1TyxZQUFBLEdBQUF2TyxPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFFTSxTQUFVcVEsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQ0xqSyxLQUFLLEVBQUU7Z0JBQUVxSSxNQUFNLEVBQUVDO2NBQU0sQ0FBRTtjQUN6QnJPLEtBQUssRUFBRTtnQkFBRW9DO2NBQVUsQ0FBRTtjQUNyQnBDO1lBQUssQ0FDTCxHQUFHLElBQUFvSixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTJELFNBQVM7Y0FBRW5LO1lBQU0sQ0FBRSxHQUFHLElBQUFnRyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUlxRyxhQUFhLEdBQUc7Y0FBRXpOLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRTRMLE1BQU0sQ0FBQzZCLE9BQU8sQ0FBQzNCO1lBQU0sQ0FBRTtZQUMvRCxJQUFJdk8sS0FBSyxDQUFDbUIsS0FBSyxDQUFDeUIsS0FBSyxFQUFFO2NBQ3RCcU4sYUFBYSxHQUFHO2dCQUFFek4sS0FBSyxFQUFFeEMsS0FBSyxDQUFDbUIsS0FBSyxDQUFDeUIsS0FBSyxDQUFDMUIsRUFBRTtnQkFBRXVCLEtBQUssRUFBRXpDLEtBQUssQ0FBQ21CLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ0Y7Y0FBSSxDQUFFOztZQUUvRSxNQUFNRixLQUFLLEdBQUd4QyxLQUFLLENBQUNtQixLQUFLLENBQUN5QixLQUFLLEVBQUUxQixFQUFFO1lBQ25DLE1BQU1pUCxLQUFLLEdBQUc7Y0FBRXRCLFVBQVUsRUFBRTdPLEtBQUssQ0FBQ29DLFVBQVUsQ0FBQzRMLE1BQU0sS0FBSyxDQUFDLElBQUloTyxLQUFLLENBQUMwQjtZQUFLLENBQUU7WUFDMUUsTUFBTTBKLFFBQVEsR0FBR3VDLEtBQUssSUFBRztjQUN4QixNQUFNL0ssS0FBSyxHQUFHNUMsS0FBSyxDQUFDaUMsSUFBSSxDQUFDSSxhQUFhLENBQUM4TSxJQUFJLENBQUM1TSxJQUFJLElBQUlBLElBQUksQ0FBQ3JCLEVBQUUsS0FBS3lNLEtBQUssQ0FBQ2EsTUFBTSxDQUFDaE0sS0FBSyxDQUFDO2NBQ25GK0ssU0FBUyxDQUFDbkssTUFBTSxJQUFHO2dCQUNsQixPQUFPO2tCQUFFLEdBQUdBLE1BQU07a0JBQUVSO2dCQUFLLENBQUU7Y0FDNUIsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0M5QixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFPdUssT0FBTyxFQUFDO1lBQUUsR0FBRTZDLE1BQU0sQ0FBQzZCLE9BQU8sQ0FBQ3pOLEtBQUssQ0FBUyxFQUNoRDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpTixZQUFBLENBQUFZLFdBQVc7Y0FDWHRNLEtBQUssRUFBRUEsS0FBSztjQUNaeU4sYUFBYSxFQUFFQSxhQUFhO2NBQzVCdk4sSUFBSSxFQUFDLE9BQU87Y0FDWitMLE9BQU8sRUFBRXpPLEtBQUssQ0FBQ29DLFVBQVU7Y0FDekJnSixRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkK0U7WUFBSyxFQUNSLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQXJQLE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBeVEsWUFBQSxHQUFBelEsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTJHLEdBQUEsR0FBQTNHLE9BQUE7VUFDQSxJQUFBMFEsTUFBQSxHQUFBMVEsT0FBQTtVQUNBLElBQUEyUSxhQUFBLEdBQUEzUSxPQUFBO1VBQ0EsSUFBQTRRLFVBQUEsR0FBQTVRLE9BQUE7VUFDQSxJQUFBNlEsVUFBQSxHQUFBN1EsT0FBQTtVQUNBLElBQUE4USxRQUFBLEdBQUE5USxPQUFBO1VBQ0EsSUFBQXlJLFdBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBK1EsWUFBQSxHQUFBL1EsT0FBQTtVQUVBLElBQUFnUixNQUFBLEdBQUFoUixPQUFBO1VBQ0EsSUFBQWlSLGdCQUFBLEdBQUFqUixPQUFBO1VBQ0EsSUFBQWtSLFNBQUEsR0FBQWxSLE9BQUE7VUFFTSxTQUFVc08sU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUU3SyxNQUFNO2NBQUVrQixLQUFLO2NBQUVpSixTQUFTO2NBQUV2TixLQUFLO2NBQUUrRixLQUFLO2NBQUVyRSxLQUFLO2NBQUUrQztZQUFRLENBQUUsR0FBRyxJQUFBMkUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0RixNQUFNLENBQUN2SixJQUFJLEVBQUV5USxPQUFPLENBQUMsR0FBR2hRLE1BQUEsQ0FBQUUsT0FBSyxDQUFDOEUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUMySixTQUFTLEVBQUVzQixZQUFZLENBQUMsR0FBR2pRLE1BQUEsQ0FBQUUsT0FBSyxDQUFDOEUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNVSxPQUFPLEdBQUdBLENBQUEsS0FBTXNLLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTWpDLFVBQVUsR0FBRyxDQUFDekwsTUFBTSxDQUFDUixLQUFLLElBQUksQ0FBQ1EsTUFBTSxDQUFDTCxRQUFRLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLElBQUksQ0FBQ0ksTUFBTSxDQUFDSCxTQUFTLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxRQUFRO1lBQ2pILE1BQU1WLEtBQUssR0FBR3pDLEtBQUssQ0FBQ21CLEtBQUssQ0FBQzZQLEtBQUssSUFBSXRQLEtBQUssR0FBR3FFLEtBQUssQ0FBQzZCLE9BQU8sQ0FBQ3FKLFFBQVEsR0FBR2xMLEtBQUssQ0FBQzZCLE9BQU8sQ0FBQ3BELElBQUk7WUFDdEYsTUFBTTBNLGVBQWUsR0FBR25MLEtBQUssQ0FBQ29MLGNBQWMsQ0FBQ25SLEtBQUssQ0FBQ21DLGNBQWMsQ0FBQyxHQUMvRDRELEtBQUssQ0FBQy9GLEtBQUssQ0FBQ21DLGNBQWMsQ0FBQyxHQUMzQjRELEtBQUssQ0FBQ3FMLG9CQUFvQjtZQUM3QixNQUFNQyxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU1DLFVBQVUsR0FBRztnQkFBRSxHQUFHbE8sTUFBTTtnQkFBRTROLEtBQUssRUFBRTtjQUFXLENBQUU7Y0FDcER6RCxTQUFTLENBQUM7Z0JBQUUsR0FBRytEO2NBQVUsQ0FBRSxDQUFDO2NBQzVCLE1BQU10UixLQUFLLENBQUN3RSxJQUFJLENBQUM7Z0JBQUUsR0FBRzhNO2NBQVUsQ0FBRSxDQUFDO1lBQ3BDLENBQUM7WUFDRCxNQUFNL0gsUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILElBQUk3SCxLQUFLLElBQUkxQixLQUFLLENBQUNtQixLQUFLLENBQUM2UCxLQUFLLEtBQUssU0FBUyxFQUFFO2tCQUM3Q0YsT0FBTyxDQUFDLElBQUksQ0FBQztrQkFDYjs7Z0JBR0QsTUFBTTlRLEtBQUssQ0FBQ3dFLElBQUksQ0FBQztrQkFBRSxHQUFHcEIsTUFBTTtrQkFBRTROLEtBQUssRUFBRTtnQkFBUyxDQUFFLENBQUM7Z0JBQ2pEUCxRQUFBLENBQUFjLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRTdOLFNBQVMsRUFBRSwwQkFBMEIzRCxLQUFLLENBQUNtQixLQUFLLENBQUNELEVBQUUsRUFBRSxDQUFDO2dCQUMvRTZQLFlBQVksQ0FBQyxJQUFJLENBQUM7ZUFDbEIsQ0FBQyxPQUFPMU0sQ0FBQyxFQUFFO2dCQUNYL0QsT0FBTyxDQUFDZ0UsS0FBSyxDQUFDRCxDQUFDLENBQUM7O1lBRWxCLENBQUM7WUFFRCxPQUNDdkQsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTWlHLFNBQVMsRUFBQztZQUE4QixHQUM3Q3BHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUMwUCxNQUFBLENBQUF6SSxhQUFhO2NBQUM1RCxLQUFLLEVBQUVBLEtBQUs7Y0FBRXlCLEtBQUssRUFBRUE7WUFBSyxFQUFJLEVBQzdDakYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21QLFlBQUEsQ0FBQWxFLFdBQVcsUUFDWHBMLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQVNpRyxTQUFTLEVBQUM7WUFBVyxHQUM3QnBHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQVFpRyxTQUFTLEVBQUM7WUFBb0IsR0FDckNwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxhQUFLOEUsS0FBSyxDQUFDcUksTUFBTSxDQUFDcUQsWUFBWSxDQUFDMUssS0FBSyxDQUFNLEVBQzFDakcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsZUFBTzhFLEtBQUssQ0FBQ3FJLE1BQU0sQ0FBQ3FELFlBQVksQ0FBQ0MsUUFBUSxDQUFRLENBQ3pDLEVBRVQ1USxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFTaUcsU0FBUyxFQUFDO1lBQTZCLEdBQy9DcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQzRQLFNBQUEsQ0FBQTdCLGFBQWEsT0FBRyxFQUNqQmxPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNzUCxVQUFBLENBQUFQLGNBQWMsT0FBRyxFQUNsQmxQLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvUCxNQUFBLENBQUFsQyxVQUFVLE9BQUcsRUFDZHJOLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNxUCxhQUFBLENBQUFwQixhQUFhLE9BQUcsQ0FDUixFQUVWcE8sTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS2lHLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3BHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1UCxVQUFBLENBQUFoQixjQUFjO2NBQUNDLFNBQVMsRUFBRUE7WUFBUyxFQUFJLENBQ25DLENBQ0csRUFDVjNPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN5UCxZQUFBLENBQUFpQixvQkFBb0IsT0FBRyxFQUN4QjdRLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlCQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQ04xQixTQUFTLEVBQUMsY0FBYztjQUN4QmxELElBQUksRUFBQyxRQUFRO2NBQ2I0TixLQUFLO2NBQ0xwSSxRQUFRLEVBQUVxRixVQUFVO2NBQ3BCL0csT0FBTyxFQUFDLFNBQVM7Y0FDakJVLE9BQU8sRUFBRWU7WUFBUSxHQUVoQjlHLEtBQUssQ0FDRSxDQUNELENBQ0ksRUFDZDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNxRixHQUFBLENBQUF1TCxnQkFBZ0I7Y0FBQ3BOLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzNELE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNxRixHQUFBLENBQUF3TCxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRWQ7WUFBZSxFQUFJLENBQ3ZDLEVBQ25CcFEsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQzJQLGdCQUFBLENBQUFxQix5QkFBeUI7Y0FBQzVSLElBQUksRUFBRUEsSUFBSTtjQUFFbUcsT0FBTyxFQUFFQSxPQUFPO2NBQUU2SyxNQUFNLEVBQUVBO1lBQU0sRUFBSSxDQUNyRTtVQUVUOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZGQSxJQUFBdlEsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQXVKLE1BQUEsR0FBQXZKLE9BQUE7VUFDQSxJQUFBdVMsU0FBQSxHQUFBdlMsT0FBQTtVQUVNLFNBQVV3UyxpQkFBaUJBLENBQUMsRUFBRTtZQUNuQyxNQUFNO2NBQ0xwTSxLQUFLLEVBQUU7Z0JBQUU2QixPQUFPLEVBQUV3SyxXQUFXO2dCQUFFLEdBQUdyTTtjQUFLLENBQUU7Y0FDekMvRixLQUFLO2NBQ0xvRCxNQUFNO2NBQ051RixhQUFhO2NBQ2JqSDtZQUFLLENBQ0wsR0FBRyxJQUFBMEgsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNeUksb0JBQW9CLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3ZDLElBQUk7Z0JBQ0gsTUFBTXJTLEtBQUssQ0FBQ2dGLHdCQUF3QixDQUFDO2tCQUFFL0IsU0FBUyxFQUFFRyxNQUFNLENBQUNIO2dCQUFTLENBQUUsQ0FBQztlQUNyRSxDQUFDLE9BQU9vQixDQUFDLEVBQUU7Z0JBQ1gvRCxPQUFPLENBQUNnRSxLQUFLLENBQUNELENBQUMsQ0FBQzs7WUFFbEIsQ0FBQztZQUVELE9BQ0N2RCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFBSCxNQUFBLENBQUFFLE9BQUEsQ0FBQTZNLFFBQUEsUUFDRTdOLEtBQUssRUFBRTJCLFlBQVksRUFBRTJRLFVBQVUsSUFDL0J4UixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaUksTUFBQSxDQUFBQyxLQUFLO2NBQUNqQyxTQUFTLEVBQUMsT0FBTztjQUFDbEQsSUFBSSxFQUFDO1lBQVMsR0FDckMrQixLQUFLLENBQUN3TSxXQUFXLENBQUNELFVBQVUsQ0FFOUIsRUFDRHhSLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtpRyxTQUFTLEVBQUM7WUFBb0MsR0FDbERwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDaVIsU0FBQSxDQUFBNUosUUFBUTtjQUFDa0IsUUFBUSxFQUFFLENBQUM5SCxLQUFLO2NBQUU4RyxPQUFPLEVBQUU2SixvQkFBb0I7Y0FBRXZLLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7WUFBQSxHQUNuRm9LLFdBQVcsQ0FBQ0ksT0FBTyxDQUNWLENBQ04sQ0FDSjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BDQSxJQUFBMVIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQTZRLFVBQUEsR0FBQTdRLE9BQUE7VUFDQSxJQUFBOFMsT0FBQSxHQUFBOVMsT0FBQTtVQUNBLElBQUErUyxLQUFBLEdBQUEvUyxPQUFBO1VBRU0sU0FBVWdTLG9CQUFvQkEsQ0FBQTtZQUNuQyxNQUFNO2NBQUUzUjtZQUFLLENBQUUsR0FBRyxJQUFBb0osUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUVwQyxNQUFNLENBQUMrSSxpQkFBaUIsRUFBRUMsb0JBQW9CLENBQUMsR0FBRzlSLE1BQUEsQ0FBQUUsT0FBSyxDQUFDOEUsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RTtZQUNBLElBQUksQ0FBQzlGLEtBQUssQ0FBQzJCLFlBQVksSUFBSTNCLEtBQUssQ0FBQzJCLFlBQVksQ0FBQzJRLFVBQVUsRUFBRSxPQUFPeFIsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3dSLE9BQUEsQ0FBQU4saUJBQWlCLE9BQUc7WUFFdEYsTUFBTVUsWUFBWSxHQUFHO2NBQUVGLGlCQUFpQjtjQUFFQztZQUFvQixDQUFFO1lBQ2hFLE9BQ0M5UixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUksUUFBQSxDQUFBMkMsa0JBQWtCLENBQUMrQixRQUFRO2NBQUN0TCxLQUFLLEVBQUVxUTtZQUFZLEdBQy9DL1IsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VQLFVBQUEsQ0FBQXNDLGlCQUFpQixPQUFHLEVBQ3JCaFMsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3lSLEtBQUEsQ0FBQUssZUFBZTtjQUFDbkIsS0FBSyxFQUFFLENBQUNlO1lBQWlCLEVBQUksQ0FDakI7VUFFaEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBLElBQUE3UixNQUFBLEdBQUFuQixPQUFBO1VBRUEsSUFBQXlJLFdBQUEsR0FBQXpJLE9BQUE7VUFDQSxJQUFBK1MsS0FBQSxHQUFBL1MsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQXFULEtBQUEsR0FBQXJULE9BQUE7VUFFTSxTQUFVb1QsZUFBZUEsQ0FBQztZQUFFbkI7VUFBSyxDQUFFO1lBQ3hDLE1BQU07Y0FDTDdMLEtBQUssRUFBRTtnQkFBRXdNLFdBQVcsRUFBRXhNLEtBQUs7Z0JBQUU2QixPQUFPLEVBQUV3SztjQUFXLENBQUU7Y0FDbkRwUyxLQUFLO2NBQ0xvRCxNQUFNO2NBQ04xQixLQUFLO2NBQ0w2TDtZQUFTLENBQ1QsR0FBRyxJQUFBbkUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNLENBQUMvRyxRQUFRLEVBQUVvUSxXQUFXLENBQUMsR0FBR25TLE1BQUEsQ0FBQUUsT0FBSyxDQUFDOEUsUUFBUSxDQUFDLElBQUk5RCxHQUFHLEVBQUUsQ0FBQztZQUV6RCxJQUFJLENBQUNoQyxLQUFLLENBQUMyQixZQUFZLEVBQUUsT0FBTyxJQUFJO1lBQ3BDLE1BQU07Y0FBRTRRO1lBQVcsQ0FBRSxHQUFHdlMsS0FBSyxDQUFDMkIsWUFBWTtZQUUxQyxNQUFNdVIsS0FBSyxHQUFHLE1BQU12RixLQUFLLElBQUc7Y0FDM0IsTUFBTTVKLEtBQUssR0FBRztnQkFDYmQsU0FBUyxFQUFFRyxNQUFNLENBQUNILFNBQVM7Z0JBQzNCdEIsWUFBWSxFQUFFd1IsS0FBSyxDQUFDQyxJQUFJLENBQUN2USxRQUFRLENBQUMsQ0FBQ1AsR0FBRyxDQUFFK1EsQ0FBUyxJQUFLclQsS0FBSyxDQUFDMkIsWUFBWSxDQUFDNFEsV0FBVyxDQUFDYyxDQUFDLENBQUMsQ0FBQ0MsVUFBVTtlQUNsRztjQUNELE1BQU10VCxLQUFLLENBQUNrRixpQkFBaUIsQ0FBQ25CLEtBQUssQ0FBQztjQUVwQ3dKLFNBQVMsQ0FBQ25LLE1BQU0sS0FBSztnQkFBRSxHQUFHQSxNQUFNO2dCQUFFSCxTQUFTLEVBQUVqRCxLQUFLLENBQUNtQixLQUFLLENBQUM4QjtjQUFTLENBQUUsQ0FBQyxDQUFDO1lBQ3ZFLENBQUM7WUFFRCxNQUFNZ0YsUUFBUSxHQUFHQSxDQUFBLEtBQUs7Y0FDckJnTCxXQUFXLENBQUMsSUFBSWpSLEdBQUcsRUFBRSxDQUFDO2NBQ3RCaEMsS0FBSyxDQUFDNkQsaUJBQWlCLEVBQUU7WUFDMUIsQ0FBQztZQUNELE1BQU0yRixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFLENBQUMzRyxRQUFRLENBQUMwUSxJQUFJLElBQUkzQjtZQUFLLENBQUU7WUFDdEQsTUFBTXpGLEdBQUcsR0FBRyxtQ0FBbUN5RixLQUFLLEdBQUcsY0FBYyxHQUFHLEVBQUUsRUFBRTtZQUU1RSxPQUNDOVEsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBU2lHLFNBQVMsRUFBRWlGO1lBQUcsR0FDdEJyTCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDeVIsS0FBQSxDQUFBYyxJQUFJO2NBQ0p0TSxTQUFTLEVBQUMsNkJBQTZCO2NBQ3ZDbkQsS0FBSyxFQUFFO2dCQUFFbEIsUUFBUTtnQkFBRW9RLFdBQVc7Z0JBQUVyQjtjQUFLLENBQUU7Y0FDdkM2QixPQUFPLEVBQUVULEtBQUEsQ0FBQVUsd0JBQXdCO2NBQ2pDQyxLQUFLLEVBQUVwQjtZQUFXLEVBQ2pCLEVBQ0Z6UixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQWdFLEdBQzlFcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsZUFDRThFLEtBQUssQ0FBQ2pFLEtBQUssRSxNQUFJZSxRQUFRLENBQUMwUSxJQUFJLENBQ3ZCLENBQ0YsRUFDTnpTLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtpRyxTQUFTLEVBQUM7WUFBZ0MsR0FDOUNwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQUEsR0FBS1ksUUFBUTtjQUFFaEIsT0FBTyxFQUFFUCxRQUFRO2NBQUVILE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7WUFBQSxHQUNqRW9LLFdBQVcsQ0FBQ3dCLGlCQUFpQixDQUN0QixFQUNUOVMsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ILFdBQUEsQ0FBQVEsTUFBTTtjQUFBLEdBQUtZLFFBQVE7Y0FBRTFCLE9BQU8sRUFBQyxTQUFTO2NBQUNVLE9BQU8sRUFBRTBLO1lBQUssR0FDcERkLFdBQVcsQ0FBQ3lCLGdCQUFnQixDQUNyQixDQUNKLENBQ0QsQ0FDRztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQy9EQSxJQUFBL1MsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBRU0sU0FBVStULHdCQUF3QkEsQ0FBQztZQUFFcEksS0FBSztZQUFFL0ksSUFBSTtZQUFFd0IsS0FBSyxFQUFFO2NBQUU2TixLQUFLO2NBQUUvTyxRQUFRO2NBQUVvUTtZQUFXO1VBQUUsQ0FBRTtZQUNoRyxNQUFNO2NBQ0w3UCxNQUFNO2NBQ05tSyxTQUFTO2NBQ1R2TixLQUFLO2NBQ0wrRixLQUFLLEVBQUU7Z0JBQUV3TSxXQUFXLEVBQUV4TTtjQUFLO1lBQUUsQ0FDN0IsR0FBRyxJQUFBcUQsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV0QixNQUFNa0ssUUFBUSxHQUFHbkcsS0FBSyxJQUFHO2NBRXhCQSxLQUFLLENBQUNvRyxlQUFlLEVBQUU7Y0FDdkIsTUFBTXpJLEtBQUssR0FBR2dFLFFBQVEsQ0FBQzNCLEtBQUssQ0FBQ0MsYUFBYSxDQUFDb0csT0FBTyxDQUFDMUksS0FBSyxDQUFDO2NBQ3pELE1BQU0ySSxRQUFRLEdBQUdwUixRQUFRO2NBQ3pCb1IsUUFBUSxDQUFDOU8sR0FBRyxDQUFDbUcsS0FBSyxDQUFDLEdBQUcySSxRQUFRLENBQUNDLE1BQU0sQ0FBQzVJLEtBQUssQ0FBQyxHQUFHMkksUUFBUSxDQUFDRSxHQUFHLENBQUM3SSxLQUFLLENBQUM7Y0FDbEV0TCxLQUFLLENBQUMrQixvQkFBb0IsQ0FBQ29TLEdBQUcsQ0FBQzdJLEtBQUssQ0FBQztjQUNyQzJILFdBQVcsQ0FBQyxJQUFJalIsR0FBRyxDQUFDaVMsUUFBUSxDQUFDLENBQUM7WUFDL0IsQ0FBQztZQUVELE1BQU05SCxHQUFHLEdBQUcsbUJBQW1CdEosUUFBUSxDQUFDc0MsR0FBRyxDQUFDbUcsS0FBSyxDQUFDLEdBQUcsV0FBVyxHQUFHLEVBQUUsRUFBRTtZQUN2RSxNQUFNNkUsS0FBSyxHQUFHO2NBQUVqSixTQUFTLEVBQUVpRixHQUFHO2NBQUUsWUFBWSxFQUFFYixLQUFLO2NBQUU5QyxPQUFPLEVBQUU3RTtZQUFTLENBQUU7WUFFekUsSUFBSSxDQUFDaU8sS0FBSyxFQUFFekIsS0FBSyxDQUFDM0gsT0FBTyxHQUFHc0wsUUFBUTtZQUVwQyxPQUNDaFQsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS2lHLFNBQVMsRUFBRWlGLEdBQUc7Y0FBQSxjQUFjYixLQUFLO2NBQUEsR0FBTTZFO1lBQUssR0FDaERyUCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTWlHLFNBQVMsRUFBQztZQUFrQixHQUFFbkIsS0FBSyxDQUFDcU8sTUFBTSxDQUFRLEVBQ3hEdFQsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTWlHLFNBQVMsRUFBQztZQUFzQixHQUFFM0UsSUFBSSxDQUFDOFIsU0FBUyxDQUFRLENBQ3RELEVBQ1R2VCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQWUsR0FDN0JwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTWlHLFNBQVMsRUFBQztZQUFrQixHQUFFbkIsS0FBSyxDQUFDdEQsS0FBSyxDQUFRLENBQy9DLEVBQ1JGLElBQUksQ0FBQytRLFVBQVUsQ0FDWCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUF4UyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXlKLFFBQUEsR0FBQXpKLE9BQUE7VUFDQSxJQUFBeUksV0FBQSxHQUFBekksT0FBQTtVQUNNLFNBQVVtVCxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUNML00sS0FBSyxFQUFFO2dCQUNOd00sV0FBVyxFQUFFO2tCQUNadFAsU0FBUyxFQUFFO29CQUFFMkUsT0FBTyxFQUFFN0I7a0JBQUs7Z0JBQUU7Y0FDN0IsQ0FDRDtjQUNEL0YsS0FBSztjQUNMdU4sU0FBUztjQUNUbkssTUFBTTtjQUNOcEQsS0FBSyxFQUFFO2dCQUFFMkI7Y0FBWTtZQUFFLENBQ3ZCLEdBQUcsSUFBQXlILFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFK0ksaUJBQWlCO2NBQUVDO1lBQW9CLENBQUUsR0FBRyxJQUFBeEosUUFBQSxDQUFBNEMscUJBQXFCLEdBQUU7WUFDM0UsTUFBTTtjQUFFc0csVUFBVTtjQUFFZ0M7WUFBUSxDQUFFLEdBQUczUyxZQUFZO1lBQzdDLElBQUksQ0FBQ0EsWUFBWSxJQUFJZ1IsaUJBQWlCLEVBQUUsT0FBTyxJQUFJO1lBRW5ELE1BQU1uSyxPQUFPLEdBQUcsTUFBTW1GLEtBQUssSUFBRztjQUM3QixJQUFJQSxLQUFLLENBQUNDLGFBQWEsQ0FBQ3BMLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ3pDLE1BQU14QyxLQUFLLENBQUN3RSxJQUFJLENBQUM7a0JBQUV2QixTQUFTLEVBQUVxUjtnQkFBUSxDQUFFLENBQUM7Z0JBQ3pDL0csU0FBUyxDQUFDO2tCQUFFLEdBQUduSyxNQUFNO2tCQUFFSCxTQUFTLEVBQUVxUjtnQkFBUSxDQUFFLENBQUM7O2NBRzlDMUIsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDOVIsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS2lHLFNBQVMsRUFBQztZQUFzQixHQUNwQ3BHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGFBQUtxVCxRQUFRLENBQU0sRUFDbkJ4VCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQWdFLEdBQzlFcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTWlHLFNBQVMsRUFBQztZQUFjLEdBQUVuQixLQUFLLENBQUN0RCxLQUFLLENBQVEsRUFDbkQzQixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQW1ELEdBQ2pFcEcsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ21ILFdBQUEsQ0FBQVEsTUFBTTtjQUFDZCxPQUFPLEVBQUMsU0FBUztjQUFDRSxRQUFRO2NBQUN4RixLQUFLLEVBQUMsT0FBTztjQUFDZ0csT0FBTyxFQUFFQTtZQUFPLEdBQy9EekMsS0FBSyxDQUFDZ0MsTUFBTSxDQUNMLEVBQ1RqSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQUNkLE9BQU8sRUFBQyxTQUFTO2NBQUN0RixLQUFLLEVBQUMsTUFBTTtjQUFDZ0csT0FBTyxFQUFFQTtZQUFPLEdBQ3JEekMsS0FBSyxDQUFDOEIsT0FBTyxDQUNOLENBQ0osQ0FDRCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUNBLElBQUEvRyxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQXNNLGFBQUEsR0FBQXRNLE9BQUE7VUFDTSxTQUFVNFUsYUFBYUEsQ0FBQztZQUFFaE07VUFBUSxDQUFFO1lBQ3pDLE1BQU0sQ0FBQ2xJLElBQUksRUFBRXlRLE9BQU8sQ0FBQyxHQUFHaFEsTUFBQSxDQUFBRSxPQUFLLENBQUM4RSxRQUFRLENBQUMsQ0FBQyxDQUFDeUMsUUFBUSxDQUFDO1lBRWxEekgsTUFBQSxDQUFBRSxPQUFLLENBQUNpRixTQUFTLENBQUMsTUFBSztjQUNwQjZLLE9BQU8sQ0FBQ3ZJLFFBQVEsQ0FBQztjQUNqQjdFLFVBQVUsQ0FBQzhRLFVBQVUsQ0FBQyxNQUFLO2dCQUMxQjFELE9BQU8sQ0FBQyxLQUFLLENBQUM7Y0FDZixDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ1QsQ0FBQyxFQUFFLENBQUN2SSxRQUFRLENBQUMsQ0FBQztZQUVkLE9BQ0N6SCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0wsYUFBQSxDQUFBd0ksZUFBZSxRQUNkcFUsSUFBSSxJQUNKUyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ0wsYUFBQSxDQUFBRyxNQUFNLENBQUNzSSxJQUFJO2NBQ1hDLE1BQU07Y0FDTnJJLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZxSSxLQUFLLEVBQUU7ZUFDUDtjQUNEcEksT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYekosUUFBUSxFQUFFO2lCQUNWO2dCQUNENFIsS0FBSyxFQUFFO2VBQ1A7Y0FDRGhJLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYekosUUFBUSxFQUFFLEdBQUc7a0JBQ2I0UixLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0RySSxPQUFPLEVBQUU7O1lBQ1QsR0FFQWhFLFFBQVEsQ0FFVixDQUNnQjtVQUVwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6Q0EsSUFBQXpILE1BQUEsR0FBQW5CLE9BQUE7VUFDQSxJQUFBc00sYUFBQSxHQUFBdE0sT0FBQTtVQUNNLFNBQVVrVixRQUFRQSxDQUFDO1lBQUUzTixTQUFTO1lBQUVxQixRQUFRO1lBQUV1TSxFQUFFLEdBQUc7VUFBTSxDQUFFO1lBQzVELE1BQU1DLFNBQVMsR0FBRyxJQUFBOUksYUFBQSxDQUFBRyxNQUFNLEVBQUMwSSxFQUFFLENBQUM7WUFDNUIsT0FDQ2hVLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUM4VCxTQUFTO2NBQ1RKLE1BQU07Y0FDTnpOLFNBQVMsRUFBRUEsU0FBUztjQUNwQm9GLE9BQU8sRUFBRTtnQkFDUkMsT0FBTyxFQUFFO2VBQ1Q7Y0FDREMsT0FBTyxFQUFFO2dCQUNSRCxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFO2tCQUNYekosUUFBUSxFQUFFOztlQUVYO2NBQ0Q0SixJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWHpKLFFBQVEsRUFBRSxHQUFHO2tCQUNiNFIsS0FBSyxFQUFFO2lCQUNQO2dCQUNEckksT0FBTyxFQUFFOztZQUNULEdBRUFoRSxRQUFRLENBQ0U7VUFFZDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzQkEsSUFBQXlNLGFBQUEsR0FBQXJWLE9BQUE7VUFDQSxJQUFBbUIsTUFBQSxHQUFBbkIsT0FBQTtVQUNBLElBQUF5SixRQUFBLEdBQUF6SixPQUFBO1VBQ0EsSUFBQXNWLE9BQUEsR0FBQXRWLE9BQUE7VUFFTztVQUFVLFNBQVV1VixNQUFNQSxDQUFBO1lBQ2hDLE1BQU07Y0FBRWxWLEtBQUs7Y0FBRStGO1lBQUssQ0FBRSxHQUFHLElBQUFxRCxRQUFBLENBQUEwQyx5QkFBeUIsR0FBRTtZQUNwRCxNQUFNcUosT0FBTyxHQUFHblYsS0FBSyxDQUFDMEIsS0FBSyxJQUFJLENBQUMxQixLQUFLLENBQUM0QixVQUFVO1lBQ2hELE9BQ0NkLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGtCQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK1QsYUFBQSxDQUFBSSxZQUFZO2NBQ1p4USxVQUFVLEVBQUUsQ0FDWCxDQUFDcVEsT0FBQSxDQUFBalUsT0FBTSxDQUFDcVUsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUN2UCxLQUFLLENBQUNuQixVQUFVLENBQUMyUSxPQUFPLEVBQUUsZUFBZSxDQUFDLEVBQzNDLENBQUN4UCxLQUFLLENBQUNuQixVQUFVLENBQUM0USxVQUFVLEVBQUUsRUFBRSxDQUFDO1lBQ2pDLEVBQ0EsQ0FDTztVQUVaOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3BCQSxJQUFBaFEsS0FBQSxHQUFBN0YsT0FBQTtVQUNBLElBQUFrTixNQUFBLEdBQUFsTixPQUFBO1VBRUEsSUFBQW9OLGVBQUEsR0FBQXBOLE9BQUE7VUFFQSxJQUFBOFYsVUFBQSxHQUFBOVYsT0FBQTtVQUNBLElBQUErVixXQUFBLEdBQUEvVixPQUFBO1VBQ0EsSUFBQTZCLFlBQUEsR0FBQTdCLE9BQUE7VUFDQSxJQUFBeUosUUFBQSxHQUFBekosT0FBQTtVQUNBLElBQUFnVyxpQkFBQSxHQUFBaFcsT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQ3FJLEtBQUs7WUFDbEIsTUFBTTtjQUFFekk7WUFBSyxDQUFFLEdBQTRCeUksS0FBSztZQUNoRDtZQUNBLE1BQU05RCxhQUFhLEdBQUdvQixLQUFLLElBQUc7Y0FDN0IvRixLQUFLLENBQUMyRSxhQUFhLENBQUMsQ0FDbkIsQ0FBQ29CLEtBQUssQ0FBQ25CLFVBQVUsQ0FBQzJRLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQ3hQLEtBQUssQ0FBQ25CLFVBQVUsQ0FBQzRRLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FDakMsQ0FBQztZQUNILENBQUM7WUFDRCxNQUFNLENBQUN0SSxVQUFVLEVBQUVuSCxLQUFLLENBQUMsR0FBRyxJQUFBNFAsaUJBQUEsQ0FBQWpRLGdCQUFnQixFQUFDcUgsZUFBQSxDQUFBSyxNQUFNLENBQUN6SCxTQUFTLEVBQUVoQixhQUFhLENBQUM7WUFDN0UsTUFBTSxHQUFHMEMsV0FBVyxDQUFDLEdBQUc3QixLQUFLLENBQUNNLFFBQVEsQ0FBQzlGLEtBQUssQ0FBQ3lFLFFBQVEsQ0FBQztZQUN0RCxNQUFNLEdBQUc2SSxVQUFVLENBQUMsR0FBRzlILEtBQUssQ0FBQ00sUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUV6QyxJQUFBK0csTUFBQSxDQUFBYSxTQUFTLEVBQUMsQ0FBQzFOLEtBQUssQ0FBQyxFQUFFLE1BQUs7Y0FDdkJzTixVQUFVLENBQUMsRUFBRSxDQUFDO2NBQ2RqRyxXQUFXLENBQUNySCxLQUFLLEVBQUVtQixLQUFLLEVBQUVzRCxRQUFRLENBQUM7WUFDcEMsQ0FBQyxDQUFDO1lBRUYsSUFBSSxDQUFDeUksVUFBVSxJQUFJLENBQUNsTixLQUFLLENBQUM0RCxLQUFLLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUU5QyxNQUFNc0csT0FBTyxHQUFHbEssS0FBSyxDQUFDbUIsS0FBSyxDQUFDNlAsS0FBSyxLQUFLLFdBQVcsR0FBRzBFLFdBQUEsQ0FBQTNVLG9CQUFvQixHQUFHMFUsVUFBQSxDQUFBeEksY0FBYztZQUN6RixNQUFNekssS0FBSyxHQUFHO2NBQ2J1RCxLQUFLO2NBQ0wvRixLQUFLO2NBQ0wySSxhQUFhLEVBQUVuSCxZQUFBLENBQUEyQyxZQUFZLENBQUN3RTthQUM1QjtZQUVELE9BQ0NuRCxLQUFBLENBQUF2RSxhQUFBLENBQUF1RSxLQUFBLENBQUFxSSxRQUFBLFFBQ0NySSxLQUFBLENBQUF2RSxhQUFBLENBQUNtSSxRQUFBLENBQUF5QyxzQkFBc0IsQ0FBQ2lDLFFBQVE7Y0FBQ3RMLEtBQUssRUFBRUE7WUFBSyxHQUM1Q2dELEtBQUEsQ0FBQXZFLGFBQUEsQ0FBQ2lKLE9BQU87Y0FBQ2xLLEtBQUssRUFBRUEsS0FBSztjQUFFUSxHQUFHLEVBQUVpSSxLQUFLLENBQUNqSTtZQUFHLEVBQUksQ0FDUixDQUNoQztVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlDQSxJQUFBTSxNQUFBLEdBQUFuQixPQUFBO1VBQ0EsSUFBQTBHLE1BQUEsR0FBQTFHLE9BQUE7VUFDQSxJQUFBeUksV0FBQSxHQUFBekksT0FBQTtVQUNBLElBQUEyRyxHQUFBLEdBQUEzRyxPQUFBO1VBQ0EsSUFBQXVTLFNBQUEsR0FBQXZTLE9BQUE7VUFDQSxJQUFBeUosUUFBQSxHQUFBekosT0FBQTtVQUNNLFNBQVVzUyx5QkFBeUJBLENBQUM7WUFBRTVSLElBQUk7WUFBRW1HLE9BQU87WUFBRTZLO1VBQU0sQ0FBRTtZQUNsRSxNQUFNO2NBQUV0TCxLQUFLO2NBQUUvRixLQUFLO2NBQUVvRCxNQUFNO2NBQUV1RjtZQUFhLENBQUUsR0FBRyxJQUFBUyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ2xFLE1BQU0sQ0FBQ25GLFFBQVEsRUFBRTRDLFdBQVcsQ0FBQyxHQUFHdkcsTUFBQSxDQUFBRSxPQUFLLENBQUM4RSxRQUFRLENBQUMsS0FBSyxDQUFDO1lBRXJELElBQUksQ0FBQ3pGLElBQUksRUFBRSxPQUFPLElBQUk7WUFDdEIsTUFBTXVWLFVBQVUsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDN0IsSUFBSTtnQkFDSHZPLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLE1BQU1ySCxLQUFLLENBQUNxRix3QkFBd0IsQ0FBQztrQkFBRSxHQUFHakM7Z0JBQU0sQ0FBRSxDQUFDO2dCQUNuRGlPLE1BQU0sRUFBRTtlQUNSLENBQUMsT0FBT2hOLENBQUMsRUFBRTtnQkFDWC9ELE9BQU8sQ0FBQ2dFLEtBQUssQ0FBQ0QsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1RnRCxXQUFXLENBQUMsS0FBSyxDQUFDOztZQUVwQixDQUFDO1lBQ0QsTUFBTW1CLE9BQU8sR0FBR0EsQ0FBQSxLQUFNRyxhQUFhLENBQUNpTixVQUFVLENBQUM7WUFDL0MsT0FDQzlVLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvRixNQUFBLENBQUF3UCxLQUFLO2NBQUN4VixJQUFJO2NBQUNtRyxPQUFPLEVBQUVBO1lBQU8sR0FDM0IxRixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQWUsR0FDN0JwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxhQUFLOEUsS0FBSyxDQUFDcUksTUFBTSxDQUFDMEgsZ0JBQWdCLENBQUMvTyxLQUFLLENBQU0sRUFDOUNqRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLaUcsU0FBUyxFQUFDO1lBQU8sR0FDckJwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxlQUFPOEUsS0FBSyxDQUFDcUksTUFBTSxDQUFDMEgsZ0JBQWdCLENBQUMzTyxXQUFXLENBQVEsQ0FDbkQsRUFDTnJHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQVFpRyxTQUFTLEVBQUM7WUFBMEMsR0FDM0RwRyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDbUgsV0FBQSxDQUFBUSxNQUFNO2NBQUNkLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQ1EsT0FBTyxFQUFFNkk7WUFBTSxHQUNoRHRMLEtBQUssQ0FBQ3FJLE1BQU0sQ0FBQzBILGdCQUFnQixDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FDckMsRUFDVGxWLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpUixTQUFBLENBQUE1SixRQUFRO2NBQUNSLE9BQU8sRUFBQyxTQUFTO2NBQUNVLE9BQU8sRUFBRUE7WUFBTyxHQUMxQ3pDLEtBQUssQ0FBQ3FJLE1BQU0sQ0FBQzBILGdCQUFnQixDQUFDQyxPQUFPLENBQUNFLFFBQVEsQ0FDckMsQ0FDSCxDQUNKLEVBQ05uVixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsR0FBQSxDQUFBdUwsZ0JBQWdCO2NBQUNwTixRQUFRLEVBQUVBO1lBQVEsR0FDbkMzRCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUYsR0FBQSxDQUFBd0wsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVqTSxLQUFLLENBQUNxSSxNQUFNLENBQUM4SDtZQUFnQixFQUFJLENBQ3JELENBQ1o7VUFFViIsImlnbm9yZUxpc3QiOltdfQ==