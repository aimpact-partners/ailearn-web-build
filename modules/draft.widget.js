System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.1/page", "react@18.2.0", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.1.12/model", "@aimpact/chat-sdk@1.0.0/session", "@aimpact/ailearn-app@0.0.32/coins-layout.widget", "pragmate-ui@0.1.1/modal", "@aimpact/ailearn-app@0.0.32/components/ui", "@aimpact/ailearn-app@0.0.32/components/icons", "pragmate-ui@0.1.1/components", "pragmate-ui@0.1.1/icons", "pragmate-ui@0.1.1/alert", "framer-motion@10.18.0", "@beyond-js/react-18-widgets@1.1.1/hooks", "@aimpact/chat@1.0.1/shared/hooks", "pragmate-ui@0.1.1/form/react-select", "pragmate-ui@0.1.1/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@0.1.1/list", "@aimpact/ailearn-app@0.0.32/components/navbar-header.code", "@aimpact/ailearn-app@0.0.32/config"], function (_export, _context2) {
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
    }, function (_beyondJsKernel019Styles) {
      dependency_2 = _beyondJsKernel019Styles;
    }, function (_beyondJsReact18Widgets111Page) {
      dependency_3 = _beyondJsReact18Widgets111Page;
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
    }, function (_beyondJsReact18Widgets111Hooks) {
      dependency_16 = _beyondJsReact18Widgets111Hooks;
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
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.1"], ["@aimpact/chat-sdk", "1.0.0"], ["@aimpact/auth", "0.0.1"], ["@bgroup/http-suite", "1.0.3"], ["@bgroup/media-manager", "1.0.0"], ["@beyond-js/reactive", "1.1.12"], ["pragmate-ui", "0.1.1"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["@beyond-js/local", "0.1.3"], ["@beyond-js/react-18-widgets", "1.1.1"], ["apexcharts", "3.48.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["firebase", "10.9.0"], ["firebase-admin", "11.11.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-select", "5.8.0"], ["socket.io-client", "4.7.5"], ["swiper", "8.4.7"], ["tippy.js", "6.3.7"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["@aimpact/ailearn-app", "0.0.32"], ["@aimpact/ailearn-app", "0.0.32"]]);
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['react', dependency_4], ['@aimpact/ailearn-sdk/learning-modules', dependency_5], ['@beyond-js/reactive/model', dependency_6], ['@aimpact/chat-sdk/session', dependency_7], ['@aimpact/ailearn-app/coins-layout.widget', dependency_8], ['pragmate-ui/modal', dependency_9], ['@aimpact/ailearn-app/components/ui', dependency_10], ['@aimpact/ailearn-app/components/icons', dependency_11], ['pragmate-ui/components', dependency_12], ['pragmate-ui/icons', dependency_13], ['pragmate-ui/alert', dependency_14], ['framer-motion', dependency_15], ['@beyond-js/react-18-widgets/hooks', dependency_16], ['@aimpact/chat/shared/hooks', dependency_17], ['pragmate-ui/form/react-select', dependency_18], ['pragmate-ui/form', dependency_19], ['@beyond-js/kernel/routing', dependency_20], ['pragmate-ui/list', dependency_21], ['@aimpact/ailearn-app/components/navbar-header.code', dependency_22], ['@aimpact/ailearn-app/config', dependency_23]]);
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
        hash: 4228124482,
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
        hash: 3934704061,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.View = View;
          var React = require("react");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _hooks2 = require("@aimpact/chat/shared/hooks");
          var _beyond_context = require("beyond_context");
          var _container = require("./form/container");
          var _management = require("../management");
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
          var _context = require("./context");
          /*bundle*/
          function View(props) {
            const {
              store
            } = props;
            const [textsReady, texts] = (0, _hooks2.useTexts)(_beyond_context.module.specifier);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJkZWZhdWx0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwibW9kZWwiLCJhY3Rpdml0eUlkIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwicmVhY3RpdmVQcm9wcyIsImdsb2JhbFRoaXMiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImNsZWFySW1wcm92ZW1lbnRzIiwidHJpZ2dlckV2ZW50Iiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJvbiIsIkxheW91dEJyb2tlciIsImFkZE1vZGVsIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsImZldGNoaW5nIiwic2F2ZURyYWZ0IiwiY2xlYW4iLCJhY3Rpdml0aWVzIiwidHJpZ2dlciIsImdldE9iamVjdGl2ZUltcHJvdmVtZW50cyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsImhhcyIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJ0ZXh0cyIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJ1c2VTdGF0ZSIsInNldEVycm9yIiwibW9kYWwiLCJnZXRDcmVkaXRzIiwiZXJyb3JzIiwibm9DcmVkaXRzIiwiQ29uZmlybU1vZGFsIiwiYWN0aW9ucyIsImNvbmZpcm0iLCJ2YXJpYW50IiwiY2FuY2VsIiwiYm9yZGVyZWQiLCJvbkNhbmNlbCIsIkVycm9yUmVuZGVyZXIiLCJfaWNvbnMiLCJfY29tcG9uZW50cyIsIl9pY29uczIiLCJBSUJ1dHRvbiIsImNoaWxkcmVuIiwib25DbGljayIsInByb3BzIiwiaGFuZGxlQ2xpY2siLCJlbnN1cmVDcmVkaXRzIiwiQnV0dG9uIiwiaWNvbiIsIklDT05TIiwiYWlTdGFycyIsIkFJSWNvbkJ1dHRvbiIsIkljb25CdXR0b24iLCJfYWxlcnQiLCJBbGVydCIsIl9jb250ZXh0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50IiwidXNlTW9kdWxlQ29udGV4dCIsInN1Ym1pdFRleHQiLCJiYWNrIiwic2l6aW5nIiwiSHRtbFJlbmRlciIsInRhZyIsIkNvbnRyb2wiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImdldE9wdGlvbnMiLCJzY2hvb2wiLCJ1bml2ZXJzaXR5IiwiY29tcGFueSIsImJyaWVmIiwic3RhbmRhcmQiLCJleHRlbmRlZCIsImxhbmd1YWdlcyIsImVuIiwiZXMiLCJwdCIsImZyIiwiZGUiLCJfb3B0aW9ucyIsIlJhZGlvQnV0dG9uIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpbmRleCIsImtleSIsImh0bWxGb3IiLCJCdXR0b25Hcm91cCIsIk1vZHVsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsIkRyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJ1c2VEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwiU3VnZ2VzdGlvbnNDb250ZXh0IiwidXNlU3VnZ2VzdGlvbnNDb250ZXh0IiwiX2ZyYW1lck1vdGlvbiIsIkFuaW1hdGVkRGl2IiwiY2xzIiwibW90aW9uIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieSIsImV4aXQiLCJSZWFjdCIsIl9ob29rcyIsIl9ob29rczIiLCJfYmV5b25kX2NvbnRleHQiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwibGVuZ3RoIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiR3JhZGVGaWVsZCIsIndpemFyZCIsIndUZXh0cyIsImdyYWRlcyIsInNlbGVjdCIsInRhcmdldCIsIm9wdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwieWVhciIsImlzRGlzYWJsZWQiLCJSZWFjdFNlbGVjdCIsImRlZmF1bHRWYWx1ZSIsIkxhbmd1YWdlRmllbGQiLCJwbGFjZWhvbGRlciIsIkR1cmF0aW9uRmllbGQiLCJmaW5kIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJwYXJzZUludCIsIl9mb3JtIiwiT2JqZWN0aXZlRmllbGQiLCJzdWJtaXR0ZWQiLCJtZXNzYWdlcyIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiSWNvbiIsIk93bmVyc2hpcEZpZWxkIiwiZGVmYXVsdE9wdGlvbiIsInNjaG9vbHMiLCJhdHRycyIsIl9hbmltYXRlZERpdiIsIl9ncmFkZSIsIl9tb2R1bGVMZW5ndGgiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2Vycm9yIiwiX21vZGFsQWN0aXZpdGllcyIsIl9sYW5ndWFnZSIsInNldFNob3ciLCJzZXRTdWJtaXR0ZWQiLCJzdGF0ZSIsImNvbnRpbnVlIiwicHJvY2Vzc01lc3NhZ2VzIiwiaGFzT3duUHJvcGVydHkiLCJvYmplY3RpdmVTdWdnZXN0aW9ucyIsIm9uU2F2ZSIsImZpbmFsVmFsdWUiLCJyb3V0aW5nIiwicmVwbGFjZVN0YXRlIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlJvdGF0aW5nTWVzc2FnZSIsInRpbWUiLCJjb250ZW50IiwiTW9kYWxBY3Rpdml0aWVzR2VuZXJhdGlvbiIsIl9haUJ1dHRvbiIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImlycmVsZXZhbnQiLCJzdWdnZXN0aW9ucyIsImFuYWx5c2UiLCJfYWN0aW9uIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiY29udGV4dFZhbHVlIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInNldFNlbGVjdGVkIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsIml0ZW1zIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsIkFuaW1hdGVkTGFiZWwiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0IiwiQW5pbWF0ZVByZXNlbmNlIiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJfY29uZmlnIiwiSGVhZGVyIiwic2hvd0JhciIsIk5hdmJhckhlYWRlciIsImJyZWFkY3J1bWIiLCJwYXJhbXMiLCJBUFBfTkFNRSIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50Iiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Vycm9yLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2dyYWRlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbW9kdWxlLWxlbmd0aC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLWxhYmVsLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvYW5pbWF0ZWQudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9pbmRleC50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL21vZGFsLWFjdGl2aXRpZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBQ05DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHLElBQUlKLE1BQUEsQ0FBQU0sWUFBWSxFQUFFO2NBQ2hDLE9BQU8sSUFBSSxDQUFDLENBQUFGLEtBQU07WUFDbkI7WUFDQSxJQUFJRyxNQUFNQSxDQUFBO2NBQ1QsT0FBT04sTUFBQSxDQUFBTyxJQUFJO1lBQ1o7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBTCxLQUFNLENBQUNNLElBQUksQ0FBQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDRixHQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3ZFO1lBRUFDLElBQUlBLENBQUE7Y0FDSCxJQUFJLENBQUMsQ0FBQVYsS0FBTSxDQUFDVSxJQUFJLEVBQUU7WUFDbkI7O1VBQ0FDLE9BQUEsQ0FBQWIsVUFBQSxHQUFBQSxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RCRCxJQUFBYyxNQUFBLEdBQUFqQixPQUFBO1VBU00sU0FBVWtCLG9CQUFvQkEsQ0FBQztZQUFFYixLQUFLO1lBQUVPO1VBQUcsQ0FBRTtZQUNsRCxPQUNDSyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUF3QkMsRUFBRSxFQUFFaEIsS0FBSyxDQUFDaUIsS0FBSyxDQUFDRCxFQUFFO2NBQUVFLFVBQVUsRUFBRVgsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxZQUFZO1lBQUMsRUFBSSxDQUMvRTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2RBLElBQUFVLGdCQUFBLEdBQUF4QixPQUFBO1VBQ0EsSUFBQXlCLE1BQUEsR0FBQXpCLE9BQUE7VUFDQSxJQUFBMEIsUUFBQSxHQUFBMUIsT0FBQTtVQUNBLElBQUEyQixZQUFBLEdBQUEzQixPQUFBO1VBT00sTUFBT08sWUFBYSxTQUFRa0IsTUFBQSxDQUFBRyxhQUEyQjtZQUM1RCxDQUFBTixLQUFNO1lBQ047OztZQUdBLENBQUFPLEtBQU0sR0FBRyxLQUFLO1lBQ2QsSUFBSUEsS0FBS0EsQ0FBQTtjQUNSLE9BQU8sSUFBSSxDQUFDLENBQUFBLEtBQU07WUFDbkI7WUFDQSxJQUFJUCxLQUFLQSxDQUFBO2NBQ1IsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUVBLENBQUFRLFlBQWE7WUFDYixJQUFJQSxZQUFZQSxDQUFBO2NBQ2YsT0FBTyxJQUFJLENBQUMsQ0FBQUEsWUFBYTtZQUMxQjtZQUVBLElBQUlDLFVBQVVBLENBQUE7Y0FDYixPQUFPLElBQUksQ0FBQyxDQUFBVCxLQUFNLENBQUNVLE9BQU8sRUFBRUMsS0FBSyxHQUFHLENBQUM7WUFDdEM7WUFDQSxDQUFBQyxvQkFBcUIsR0FBRyxJQUFJQyxHQUFHLEVBQUU7WUFDakMsSUFBSUQsb0JBQW9CQSxDQUFBO2NBQ3ZCLE9BQU8sSUFBSSxDQUFDLENBQUFBLG9CQUFxQjtZQUNsQztZQUVBLElBQUlFLElBQUlBLENBQUE7Y0FDUCxPQUFPVixRQUFBLENBQUFXLGNBQWMsQ0FBQ0QsSUFBSTtZQUMzQjtZQUVBLENBQUFFLGNBQWU7WUFDZixJQUFJQSxjQUFjQSxDQUFBO2NBQ2pCLE9BQU8sSUFBSSxDQUFDLENBQUFBLGNBQWU7WUFDNUI7WUFFQSxJQUFJQyxVQUFVQSxDQUFBO2NBQ2IsT0FBTyxDQUNOLEdBQUdiLFFBQUEsQ0FBQVcsY0FBYyxDQUFDRCxJQUFJLENBQUNJLGFBQWEsQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLElBQUc7Z0JBQy9DLE9BQU87a0JBQUVDLEtBQUssRUFBRUQsSUFBSSxDQUFDckIsRUFBRTtrQkFBRXVCLEtBQUssRUFBRUYsSUFBSSxDQUFDRztnQkFBSSxDQUFFO2NBQzVDLENBQUMsQ0FBQyxDQUNGO1lBQ0Y7WUFFQSxJQUFJQyxXQUFXQSxDQUFBO2NBQ2QsSUFBSSxJQUFJLENBQUN4QixLQUFLLENBQUN5QixLQUFLLEVBQUU7Z0JBQ3JCLE9BQU87a0JBQUVKLEtBQUssRUFBRSxJQUFJLENBQUNyQixLQUFLLENBQUN5QixLQUFLLENBQUMxQixFQUFFO2tCQUFFdUIsS0FBSyxFQUFFLElBQUksQ0FBQ3RCLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ0Y7Z0JBQUksQ0FBRTs7WUFFckU7WUFFQSxDQUFBRyxRQUFTO1lBQ1QsSUFBSUMsYUFBYUEsQ0FBQTtjQUNoQixPQUFPO2dCQUNOQyxRQUFRLEVBQUUsRUFBRTtnQkFDWkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1pDLFNBQVMsRUFBRSxFQUFFO2dCQUNiQyxlQUFlLEVBQUUsQ0FBQztnQkFDbEJDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQWhDLEtBQU0sQ0FBQ2dDO2VBQ3RCO1lBQ0Y7WUFFQSxJQUFJQyxNQUFNQSxDQUFBO2NBQ1QsT0FBTyxJQUFJLENBQUMsQ0FBQTFCLEtBQU0sR0FBRyxJQUFJLENBQUNQLEtBQUssQ0FBQ2tDLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQ1AsYUFBYTtZQUNyRTtZQUVBLENBQUFRLG1CQUFvQixHQUFHLElBQUlDLEdBQUcsRUFBa0I7WUFFaERDLFlBQUE7Y0FDQyxLQUFLLEVBQUU7Y0FDUCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2NBQ3JDQyxVQUFVLENBQUN4RCxLQUFLLEdBQUcsSUFBSTtZQUN4QjtZQUNBVSxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFPLEtBQU0sR0FBR3dDLFNBQVM7Y0FDdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUcsS0FBSztZQUNuQjtZQUVBQyxpQkFBaUJBLENBQUE7Y0FDaEIsSUFBSSxDQUFDLENBQUFsQyxZQUFhLEdBQUdnQyxTQUFTO2NBQzlCLElBQUksQ0FBQ0csWUFBWSxDQUFDLFFBQVEsQ0FBQztZQUM1QjtZQUNBLE1BQU10RCxJQUFJQSxDQUFDVSxFQUFFLEVBQUVFLFVBQVU7Y0FDeEIsSUFBSTtnQkFDSCxJQUFJRixFQUFFLElBQUksSUFBSSxDQUFDLENBQUFDLEtBQU0sRUFBRUQsRUFBRSxLQUFLQSxFQUFFLEVBQUU7a0JBQ2pDOztnQkFFRCxNQUFNNkMsS0FBSyxHQUFHO2tCQUFFQyxJQUFJLEVBQUUsT0FBTztrQkFBRTlDO2dCQUFFLENBQUU7Z0JBRW5DLElBQUksQ0FBQyxDQUFBQyxLQUFNLEdBQUcsTUFBTUUsZ0JBQUEsQ0FBQTRDLGNBQWMsQ0FBQ3RELEdBQUcsQ0FBQ29ELEtBQUssQ0FBQztnQkFFN0MsSUFBSSxDQUFDLENBQUE1QyxLQUFNLENBQUMrQyxFQUFFLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0osWUFBWSxDQUFDO2dCQUMzQyxJQUFJLENBQUMsQ0FBQXBDLEtBQU0sR0FBRyxDQUFDLENBQUNSLEVBQUU7Z0JBQ2xCTSxZQUFBLENBQUEyQyxZQUFZLENBQUNDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQWpELEtBQU0sRUFBRSxJQUFJLENBQUM7Z0JBRXhDLElBQUksQ0FBQ3lDLEtBQUssR0FBRyxJQUFJO2dCQUNqQixJQUFJLENBQUNFLFlBQVksRUFBRTtlQUNuQixDQUFDLE9BQU9PLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQzs7WUFFbEI7WUFFQUcsUUFBUUEsQ0FBQTtjQUNQO1lBQUE7WUFHRCxNQUFNQyxJQUFJQSxDQUFDVixLQUFLO2NBQ2YsSUFBSSxDQUFDVyxRQUFRLEdBQUcsSUFBSTtjQUNwQixNQUFNLElBQUksQ0FBQ3ZELEtBQUssQ0FBQ3dELFNBQVMsQ0FBQ1osS0FBSyxDQUFDO2NBRWpDLElBQUksQ0FBQ1csUUFBUSxHQUFHLEtBQUs7Y0FDckIsSUFBSSxDQUFDWixZQUFZLEVBQUU7Y0FDbkIsSUFBSSxDQUFDLENBQUFwQyxLQUFNLEdBQUcsSUFBSTtjQUNsQixPQUFPLElBQUksQ0FBQyxDQUFBUCxLQUFNO1lBQ25CO1lBRUEsTUFBTXlELEtBQUtBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQXpELEtBQU0sQ0FBQzBELFVBQVUsQ0FBQ0QsS0FBSyxFQUFFO2NBQzlCLElBQUksQ0FBQyxDQUFBbEQsS0FBTSxHQUFHaUMsU0FBUztjQUN2QixJQUFJLENBQUNtQixPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3ZCO1lBRUE7Ozs7Ozs7WUFPQSxNQUFNQyx3QkFBd0JBLENBQUM7Y0FBRTlCO1lBQVMsQ0FBRTtjQUMzQyxJQUFJO2dCQUNILElBQUksQ0FBQyxDQUFBZCxjQUFlLEdBQUcsV0FBVztnQkFDbEMsSUFBSSxDQUFDdUMsUUFBUSxHQUFHLEtBQUs7Z0JBQ3JCLE1BQU1NLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzdELEtBQUssQ0FBQzRELHdCQUF3QixDQUFDO2tCQUFFOUI7Z0JBQVMsQ0FBRSxDQUFDO2dCQUNyRSxJQUFJLENBQUMsQ0FBQXRCLFlBQWEsR0FBR3FELElBQUk7Z0JBRXpCLElBQUksQ0FBQ2xCLFlBQVksQ0FBQyxRQUFRLENBQUM7ZUFDM0IsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVCxJQUFJLENBQUMsQ0FBQWxDLGNBQWUsR0FBR3dCLFNBQVM7Z0JBQ2hDLElBQUksQ0FBQ2UsUUFBUSxHQUFHLEtBQUs7O1lBRXZCO1lBRUEsTUFBTU8saUJBQWlCQSxDQUFDO2NBQUVoQyxTQUFTO2NBQUV0QjtZQUFZLENBQUU7Y0FDbEQsSUFBSTtnQkFDSCxJQUFJLENBQUMsQ0FBQVEsY0FBZSxHQUFHLG1CQUFtQjtnQkFDMUMsSUFBSSxDQUFDdUMsUUFBUSxHQUFHLElBQUk7Z0JBRXBCLElBQUksSUFBSSxDQUFDLENBQUFwQixtQkFBb0IsQ0FBQzRCLEdBQUcsQ0FBQ3ZELFlBQVksQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUEyQixtQkFBb0IsQ0FBQzNDLEdBQUcsQ0FBQ2dCLFlBQVksQ0FBQztnQkFFbkcsTUFBTXFELElBQUksR0FBRyxNQUFNLElBQUksQ0FBQzdELEtBQUssQ0FBQzhELGlCQUFpQixDQUFDO2tCQUFFaEMsU0FBUztrQkFBRXRCO2dCQUFZLENBQUUsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLENBQUEyQixtQkFBb0IsQ0FBQzZCLEdBQUcsQ0FBQ2xDLFNBQVMsRUFBRStCLElBQUksQ0FBQy9CLFNBQVMsQ0FBQztnQkFDeEQsSUFBSSxDQUFDOUIsS0FBSyxDQUFDc0QsSUFBSTtnQkFDZixJQUFJLENBQUMsQ0FBQXRELEtBQU0sQ0FBQzhCLFNBQVMsR0FBRytCLElBQUksQ0FBQy9CLFNBQVM7Z0JBQ3RDLElBQUksQ0FBQyxDQUFBdEIsWUFBYSxHQUFHZ0MsU0FBUztnQkFDOUI7Z0JBQ0EsSUFBSSxDQUFDLENBQUE1QixvQkFBcUIsR0FBRyxJQUFJQyxHQUFHLEVBQUU7Z0JBQ3RDLElBQUksQ0FBQzhCLFlBQVksQ0FBQyxRQUFRLENBQUM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLENBQUEzQyxLQUFNLENBQUM4QixTQUFTO2VBQzVCLENBQUMsT0FBT29CLENBQUMsRUFBRTtnQkFDWEMsT0FBTyxDQUFDQyxLQUFLLENBQUNGLENBQUMsQ0FBQztlQUNoQixTQUFTO2dCQUNULElBQUksQ0FBQyxDQUFBbEMsY0FBZSxHQUFHd0IsU0FBUztnQkFDaEMsSUFBSSxDQUFDZSxRQUFRLEdBQUcsS0FBSzs7WUFFdkI7WUFFQSxNQUFNVSx3QkFBd0JBLENBQUNyQixLQUFLO2NBQ25DLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLENBQUE1QixjQUFlLEdBQUcsaUJBQWlCO2dCQUN4QyxJQUFJLENBQUNrRCxhQUFhLEdBQUcsSUFBSTtnQkFDekIsT0FBTyxNQUFNLElBQUksQ0FBQ2xFLEtBQUssQ0FBQ21FLG1CQUFtQixDQUFDdkIsS0FBSyxDQUFDO2VBQ2xELENBQUMsT0FBT00sQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDO2VBQ2hCLFNBQVM7Z0JBQ1QsSUFBSSxDQUFDLENBQUFsQyxjQUFlLEdBQUd3QixTQUFTO2dCQUNoQyxJQUFJLENBQUMwQixhQUFhLEdBQUcsS0FBSzs7WUFFNUI7O1VBQ0F4RSxPQUFBLENBQUFULFlBQUEsR0FBQUEsWUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5TEQsSUFBQVUsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEwRixNQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTJGLEdBQUEsR0FBQTNGLE9BQUE7VUFDTSxTQUFVNEYsVUFBVUEsQ0FBQztZQUFFbEYsSUFBSTtZQUFFbUYsT0FBTztZQUFFQztVQUFLLENBQUU7WUFDbEQsSUFBSSxDQUFDcEYsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0Qm9GLEtBQUssR0FBR0EsS0FBSyxDQUFDQyxLQUFLLENBQUNDLEtBQUs7WUFFekIsT0FDQy9FLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNzRSxNQUFBLENBQUFPLFVBQVU7Y0FBQ3ZGLElBQUk7Y0FBQ3dGLFdBQVcsRUFBRUosS0FBSyxDQUFDSyxNQUFNO2NBQUVDLFNBQVMsRUFBRVAsT0FBTztjQUFFQSxPQUFPLEVBQUVBO1lBQU8sR0FDL0U1RSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsYUFBSzBFLEtBQUssQ0FBQ08sS0FBSyxDQUFNLEVBQ3RCcEYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VFLEdBQUEsQ0FBQVcsT0FBTztjQUFDQyxPQUFPLEVBQUMsS0FBSztjQUFDQyxTQUFTLEVBQUM7WUFBSSxFQUFHLEVBQ3hDdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsWUFBSTBFLEtBQUssQ0FBQ1csV0FBVyxDQUFLLENBQ2xCLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoQkEsSUFBQXhGLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBMEYsTUFBQSxHQUFBMUYsT0FBQTtVQUNBLElBQUEyRixHQUFBLEdBQUEzRixPQUFBO1VBQ00sU0FBVTBHLFVBQVVBLENBQUM7WUFBRXJHLEtBQUs7WUFBRUssSUFBSTtZQUFFbUYsT0FBTztZQUFFQztVQUFLLENBQUU7WUFDekQsSUFBSSxDQUFDcEYsSUFBSSxFQUFFLE9BQU8sSUFBSTtZQUN0QixNQUFNLENBQUNtRSxRQUFRLEVBQUU4QixXQUFXLENBQUMsR0FBRzFGLE1BQUEsQ0FBQUUsT0FBSyxDQUFDeUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNyRCxNQUFNLENBQUNsQyxLQUFLLEVBQUVtQyxRQUFRLENBQUMsR0FBRzVGLE1BQUEsQ0FBQUUsT0FBSyxDQUFDeUYsUUFBUSxFQUFFO1lBQzFDZCxLQUFLLEdBQUdBLEtBQUssQ0FBQ0MsS0FBSyxDQUFDZSxLQUFLO1lBRXpCLE1BQU1WLFNBQVMsR0FBRyxNQUFBQSxDQUFBLEtBQVc7Y0FDNUIsSUFBSTtnQkFDSE8sV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDakIsTUFBTXRHLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ3lGLFVBQVUsRUFBRTtnQkFDOUJsQixPQUFPLEVBQUU7ZUFDVCxDQUFDLE9BQU9yQixDQUFDLEVBQUU7Z0JBQ1hxQyxRQUFRLENBQUNmLEtBQUssQ0FBQ2tCLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO2VBQ2hDLFNBQVM7Z0JBQ1ROLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxPQUNDMUYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLE1BQUEsQ0FBQXdCLFlBQVk7Y0FDWnhHLElBQUk7Y0FDSjhGLFNBQVMsRUFBQyxVQUFVO2NBQ3BCVyxPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtrQkFBRXhFLEtBQUssRUFBRWtELEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ0MsT0FBTztrQkFBRUMsT0FBTyxFQUFFO2dCQUFTLENBQUU7Z0JBQzdEQyxNQUFNLEVBQUU7a0JBQUUxRSxLQUFLLEVBQUVrRCxLQUFLLENBQUNxQixPQUFPLENBQUNHLE1BQU07a0JBQUVELE9BQU8sRUFBRSxTQUFTO2tCQUFFRSxRQUFRLEVBQUU7Z0JBQUk7ZUFDekU7Y0FDRG5CLFNBQVMsRUFBRUEsU0FBUztjQUNwQm9CLFFBQVEsRUFBRTNCLE9BQU87Y0FDakJBLE9BQU8sRUFBRUE7WUFBTyxHQUVoQjVFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlCQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxhQUFLMEUsS0FBSyxDQUFDTyxLQUFLLENBQU0sRUFDdEJwRixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsR0FBQSxDQUFBOEIsYUFBYTtjQUFDL0MsS0FBSyxFQUFFQTtZQUFLLEVBQUksRUFDL0J6RCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsR0FBQSxDQUFBVyxPQUFPO2NBQUNDLE9BQU8sRUFBQyxLQUFLO2NBQUNDLFNBQVMsRUFBQztZQUFJLEVBQUcsRUFDeEN2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxZQUFJMEUsS0FBSyxDQUFDVyxXQUFXLENBQUssQ0FDbEIsQ0FDSztVQUVqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUF4RixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTBILE1BQUEsR0FBQTFILE9BQUE7VUFDQSxJQUFBMkgsV0FBQSxHQUFBM0gsT0FBQTtVQUNBLElBQUE0SCxPQUFBLEdBQUE1SCxPQUFBO1VBQ0EsSUFBQTJCLFlBQUEsR0FBQTNCLE9BQUE7VUFFTztVQUFVLFNBQVU2SCxRQUFRQSxDQUFDO1lBQUVDLFFBQVE7WUFBRUMsT0FBTztZQUFFLEdBQUdDO1VBQUssQ0FBRTtZQUNsRSxNQUFNQyxXQUFXLEdBQUdBLENBQUEsS0FBTXRHLFlBQUEsQ0FBQTJDLFlBQVksQ0FBQzRELGFBQWEsQ0FBQ0gsT0FBTyxDQUFDO1lBQzdELE9BQ0M5RyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUcsV0FBQSxDQUFBUSxNQUFNO2NBQUEsR0FBS0gsS0FBSztjQUFFSSxJQUFJLEVBQUVWLE1BQUEsQ0FBQVcsS0FBSyxDQUFDQyxPQUFPO2NBQUVQLE9BQU8sRUFBRUU7WUFBVyxHQUMxREgsUUFBUSxDQUNEO1VBRVg7VUFFTztVQUFVLFNBQVVTLFlBQVlBLENBQUM7WUFBRVQsUUFBUTtZQUFFQyxPQUFPO1lBQUUsR0FBR0M7VUFBSyxDQUFFO1lBQ3RFLE1BQU1DLFdBQVcsR0FBR0EsQ0FBQSxLQUFNdEcsWUFBQSxDQUFBMkMsWUFBWSxDQUFDNEQsYUFBYSxDQUFDSCxPQUFPLENBQUM7WUFDN0QsT0FDQzlHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN3RyxPQUFBLENBQUFZLFVBQVU7Y0FBQSxHQUFLUixLQUFLO2NBQUVJLElBQUksRUFBRVYsTUFBQSxDQUFBVyxLQUFLLENBQUNDLE9BQU87Y0FBRVAsT0FBTyxFQUFFRTtZQUFXLEdBQzlESCxRQUFRLENBQ0c7VUFFZjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0QkEsSUFBQTdHLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBeUksTUFBQSxHQUFBekksT0FBQTtVQUVNLFNBQVV5SCxhQUFhQSxDQUFDO1lBQUUzQixLQUFLO1lBQUVwQjtVQUFLLENBQWlEO1lBQzVGO1lBRUEsT0FBT3pELE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNxSCxNQUFBLENBQUFDLEtBQUs7Y0FBQ3JCLE9BQU8sRUFBQztZQUFPLEdBQUV2QixLQUFLLENBQUNwQixLQUFLLENBQUMsQ0FBUztVQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNQQSxJQUFBekQsTUFBQSxHQUFBakIsT0FBQTtVQUVBLElBQUEySCxXQUFBLEdBQUEzSCxPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFRTSxTQUFVNEksV0FBV0EsQ0FBQztZQUFFQyxXQUFXLEdBQUcsTUFBTTtZQUFFQyxRQUFRO1lBQUVDLFFBQVEsR0FBRyxLQUFLO1lBQUVDLFFBQVEsR0FBRztVQUFJLENBQWdCO1lBQzlHLE1BQU07Y0FBRWxELEtBQUs7Y0FBRW1ELFVBQVU7Y0FBRUM7WUFBTyxDQUFFLEdBQUcsSUFBQVAsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUV6RCxNQUFNQyxVQUFVLEdBQUd0RCxLQUFLLENBQUNxQixPQUFPLENBQUMwQixXQUFXLENBQUM7WUFFN0MsT0FDQzVILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlCQUNFNEgsUUFBUSxJQUNSL0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VHLFdBQUEsQ0FBQVEsTUFBTTtjQUFDM0IsU0FBUyxFQUFDLGNBQWM7Y0FBQ2EsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDUSxPQUFPLEVBQUVBLENBQUEsS0FBTWtCLFVBQVUsQ0FBQ0MsT0FBTyxHQUFHLENBQUM7WUFBQyxHQUNoR3BELEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ2tDLElBQUksQ0FFcEIsRUFDRHBJLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUFRLE1BQU07Y0FDTjNCLFNBQVMsRUFBQyxjQUFjO2NBQ3hCckMsSUFBSSxFQUFDLFFBQVE7Y0FDYmtELE9BQU8sRUFBQyxTQUFTO2NBQ2pCVSxPQUFPLEVBQUVlLFFBQVE7Y0FDakJDLFFBQVEsRUFBRUEsUUFBUTtjQUNsQk8sTUFBTSxFQUFDO1lBQUksR0FFVkYsVUFBVSxDQUNILENBQ0Q7VUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuQ0EsSUFBQW5JLE1BQUEsR0FBQWpCLE9BQUE7VUFNTSxTQUFVdUosVUFBVUEsQ0FBQztZQUFFekIsUUFBUTtZQUFFMEIsR0FBRyxHQUFHO1VBQU0sQ0FBbUI7WUFDckUsTUFBTUMsT0FBTyxHQUFHRCxHQUFHO1lBQ25CLE9BQU92SSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDcUksT0FBTztjQUFDQyx1QkFBdUIsRUFBRTtnQkFBRUMsTUFBTSxFQUFFN0I7Y0FBUTtZQUFFLEVBQUk7VUFDbEU7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDVE0sU0FBVThCLFVBQVVBLENBQUM5RCxLQUFLO1lBQy9CLE9BQU87Y0FDTjVDLFFBQVEsRUFBRSxDQUNULENBQUM0QyxLQUFLLENBQUM1QyxRQUFRLENBQUMyRyxNQUFNLEVBQUUvRCxLQUFLLENBQUM1QyxRQUFRLENBQUMyRyxNQUFNLENBQUMsRUFDOUMsQ0FBQy9ELEtBQUssQ0FBQzVDLFFBQVEsQ0FBQzRHLFVBQVUsRUFBRWhFLEtBQUssQ0FBQzVDLFFBQVEsQ0FBQzRHLFVBQVUsQ0FBQyxFQUN0RCxDQUFDaEUsS0FBSyxDQUFDNUMsUUFBUSxDQUFDNkcsT0FBTyxFQUFFakUsS0FBSyxDQUFDNUMsUUFBUSxDQUFDNkcsT0FBTyxDQUFDLENBQ2hEO2NBQ0Q1RyxRQUFRLEVBQUUsQ0FDVCxDQUFDLElBQUksRUFBRTJDLEtBQUssQ0FBQzNDLFFBQVEsQ0FBQzZHLEtBQUssQ0FBQyxFQUM1QixDQUFDLElBQUksRUFBRWxFLEtBQUssQ0FBQzNDLFFBQVEsQ0FBQzhHLFFBQVEsQ0FBQyxFQUMvQixDQUFDLElBQUksRUFBRW5FLEtBQUssQ0FBQzNDLFFBQVEsQ0FBQytHLFFBQVEsQ0FBQyxDQUMvQjtjQUNENUcsUUFBUSxFQUFFLENBQ1QsQ0FBQyxJQUFJLEVBQUV3QyxLQUFLLENBQUNxRSxTQUFTLENBQUNDLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRXRFLEtBQUssQ0FBQ3FFLFNBQVMsQ0FBQ0UsRUFBRSxDQUFDLEVBQzFCLENBQUMsSUFBSSxFQUFFdkUsS0FBSyxDQUFDcUUsU0FBUyxDQUFDRyxFQUFFLENBQUMsRUFDMUIsQ0FBQyxJQUFJLEVBQUV4RSxLQUFLLENBQUNxRSxTQUFTLENBQUNJLEVBQUUsQ0FBQyxFQUMxQixDQUFDLElBQUksRUFBRXpFLEtBQUssQ0FBQ3FFLFNBQVMsQ0FBQ0ssRUFBRSxDQUFDO2FBRTNCO1VBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEJBLElBQUF2SixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJILFdBQUEsR0FBQTNILE9BQUE7VUFDQSxJQUFBMkksUUFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUF5SyxRQUFBLEdBQUF6SyxPQUFBO1VBQ00sU0FBVTBLLFdBQVdBLENBQUM7WUFBRTdILElBQUk7WUFBRThILFFBQVE7WUFBRS9ILEtBQUs7WUFBRUksUUFBUSxHQUFHO1VBQUMsQ0FBRTtZQUNsRSxNQUFNO2NBQUU4QyxLQUFLO2NBQUV6RjtZQUFLLENBQUUsR0FBRyxJQUFBc0ksUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUMzQyxNQUFNSixRQUFRLEdBQUc7Y0FBRUEsUUFBUSxFQUFFMUksS0FBSyxDQUFDd0UsUUFBUSxJQUFJeEUsS0FBSyxDQUFDaUIsS0FBSyxDQUFDdUQ7WUFBUSxDQUFFO1lBQ3JFLE1BQU1NLElBQUksR0FBRyxJQUFBc0YsUUFBQSxDQUFBYixVQUFVLEVBQUM5RCxLQUFLLENBQUM7WUFFOUIsTUFBTThFLE1BQU0sR0FBR3pGLElBQUksQ0FBQ3RDLElBQUksQ0FBQyxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDRSxLQUFLLEVBQUVDLEtBQUssQ0FBQyxFQUFFaUksS0FBSyxLQUNuRDVKLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUFRLE1BQU07Y0FBQ3RGLElBQUksRUFBRUEsSUFBSTtjQUFBLEdBQU1rRyxRQUFRO2NBQUEsY0FBYzhCLEtBQUs7Y0FBRTlDLE9BQU8sRUFBRTRDLFFBQVE7Y0FBRUcsR0FBRyxFQUFFRCxLQUFLO2NBQUVsSSxLQUFLLEVBQUVBO1lBQUssR0FDOUZDLEtBQUssQ0FFUCxDQUFDO1lBRUYsT0FDQzNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBeUIsR0FDdkN2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFPMkosT0FBTyxFQUFFbEk7WUFBSSxHQUFHRCxLQUFLLENBQVMsRUFDckMzQixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUcsV0FBQSxDQUFBcUQsV0FBVztjQUFDaEksUUFBUSxFQUFFQSxRQUFRO2NBQUEsR0FBTStGO1lBQVEsR0FDM0M2QixNQUFNLENBQ00sQ0FDVDtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3ZCQSxJQUFBM0osTUFBQSxHQUFBakIsT0FBQTtVQW9CTyxNQUFNaUwsYUFBYSxHQUFBakssT0FBQSxDQUFBaUssYUFBQSxHQUFHaEssTUFBQSxDQUFBRSxPQUFLLENBQUMrSixhQUFhLENBQUMsRUFBbUIsQ0FBQztVQUM5RCxNQUFNL0IsZ0JBQWdCLEdBQUdBLENBQUEsS0FBTWxJLE1BQUEsQ0FBQUUsT0FBSyxDQUFDZ0ssVUFBVSxDQUFDRixhQUFhLENBQUM7VUFBQ2pLLE9BQUEsQ0FBQW1JLGdCQUFBLEdBQUFBLGdCQUFBO1VBTy9ELE1BQU1pQyxzQkFBc0IsR0FBQXBLLE9BQUEsQ0FBQW9LLHNCQUFBLEdBQUduSyxNQUFBLENBQUFFLE9BQUssQ0FBQytKLGFBQWEsQ0FBQyxFQUF3QixDQUFDO1VBQzVFLE1BQU1HLHlCQUF5QixHQUFHQSxDQUFBLEtBQU1wSyxNQUFBLENBQUFFLE9BQUssQ0FBQ2dLLFVBQVUsQ0FBQ0Msc0JBQXNCLENBQUM7VUFBQ3BLLE9BQUEsQ0FBQXFLLHlCQUFBLEdBQUFBLHlCQUFBO1VBT2pGLE1BQU1DLGtCQUFrQixHQUFBdEssT0FBQSxDQUFBc0ssa0JBQUEsR0FBR3JLLE1BQUEsQ0FBQUUsT0FBSyxDQUFDK0osYUFBYSxDQUFDLEVBQTBCLENBQUM7VUFDMUUsTUFBTUsscUJBQXFCLEdBQUdBLENBQUEsS0FBTXRLLE1BQUEsQ0FBQUUsT0FBSyxDQUFDZ0ssVUFBVSxDQUFDRyxrQkFBa0IsQ0FBQztVQUFDdEssT0FBQSxDQUFBdUsscUJBQUEsR0FBQUEscUJBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDckNoRixJQUFBdEssTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUF3TCxhQUFBLEdBQUF4TCxPQUFBO1VBRU0sU0FBVXlMLFdBQVdBLENBQUM7WUFBRTNELFFBQVE7WUFBRTREO1VBQUcsSUFBeUI7WUFBRTVELFFBQVEsRUFBRSxJQUFJO1lBQUU0RCxHQUFHLEVBQUU7VUFBRSxDQUFFO1lBQzlGLE9BQ0N6SyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDb0ssYUFBQSxDQUFBRyxNQUFNLENBQUNDLEdBQUc7Y0FDVnBGLFNBQVMsRUFBQyxtQkFBbUI7Y0FDN0JxRixPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDdJLFFBQVEsRUFBRSxHQUFHO2tCQUNiOEksS0FBSyxFQUFFO2lCQUNQO2dCQUNEQyxDQUFDLEVBQUU7ZUFDSDtjQUNEQyxJQUFJLEVBQUU7Z0JBQ0xILFVBQVUsRUFBRTtrQkFDWDdJLFFBQVEsRUFBRTtpQkFDVjtnQkFDRDJJLE9BQU8sRUFBRTs7WUFDVCxHQUVBaEUsUUFBUSxDQUNHO1VBRWY7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJBLElBQUFzRSxLQUFBLEdBQUFwTSxPQUFBO1VBQ0EsSUFBQXFNLE1BQUEsR0FBQXJNLE9BQUE7VUFDQSxJQUFBMkYsR0FBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUEySSxRQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQXNNLE9BQUEsR0FBQXRNLE9BQUE7VUFDQSxJQUFBdU0sZUFBQSxHQUFBdk0sT0FBQTtVQUVBLElBQUF3TSxDQUFBLEdBQUF4TSxPQUFBO1VBR087VUFBVSxTQUNSeU0sY0FBY0EsQ0FBQztZQUFFcE0sS0FBSztZQUFFTztVQUFHLENBQXFDO1lBQ3hFLE1BQU0sQ0FBQzhMLFVBQVUsRUFBRTVHLEtBQUssQ0FBQyxHQUFHLElBQUF3RyxPQUFBLENBQUFLLFFBQVEsRUFBQ0osZUFBQSxDQUFBSyxNQUFNLENBQUNDLFNBQVMsQ0FBQztZQUN0RCxNQUFNLENBQUNoSSxRQUFRLEVBQUU4QixXQUFXLENBQUMsR0FBR3lGLEtBQUssQ0FBQ3hGLFFBQVEsQ0FBQ3ZHLEtBQUssQ0FBQ3dFLFFBQVEsQ0FBQztZQUM5RCxNQUFNLENBQUNpSSxXQUFXLENBQUMsR0FBR1YsS0FBSyxDQUFDeEYsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN2QyxNQUFNLEdBQUdtRyxVQUFVLENBQUMsR0FBR1gsS0FBSyxDQUFDeEYsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUNzQyxPQUFPLEVBQUVELFVBQVUsQ0FBQyxHQUFHbUQsS0FBSyxDQUFDeEYsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUNyRCxNQUFNLEVBQUV5SixTQUFTLENBQUMsR0FBR1osS0FBSyxDQUFDeEYsUUFBUSxDQUFzQnZHLEtBQUssQ0FBQ2tELE1BQU0sQ0FBQztZQUM3RSxNQUFNLENBQUNtQixLQUFLLEVBQUVtQyxRQUFRLENBQUMsR0FBR3VGLEtBQUssQ0FBQ3hGLFFBQVEsRUFBVTtZQUNsRCxNQUFNLENBQUNxRyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHZCxLQUFLLENBQUN4RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3pELE1BQU07Y0FBRXNCO1lBQWEsQ0FBRSxHQUFHLElBQUFTLFFBQUEsQ0FBQTBDLHlCQUF5QixHQUFFO1lBQ3JELElBQUFnQixNQUFBLENBQUFjLFNBQVMsRUFBQyxDQUFDOU0sS0FBSyxDQUFDLEVBQUUsTUFBSztjQUN2QjBNLFVBQVUsQ0FBQyxFQUFFLENBQUM7Y0FDZHBHLFdBQVcsQ0FBQ3RHLEtBQUssRUFBRWlCLEtBQUssRUFBRXVELFFBQVEsQ0FBQztZQUNwQyxDQUFDLENBQUM7WUFFRixJQUFJLENBQUM2SCxVQUFVLElBQUksQ0FBQ3JNLEtBQUssQ0FBQzBELEtBQUssRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU00RyxRQUFRLEdBQUd5QyxLQUFLLElBQUc7Y0FDeEJKLFNBQVMsQ0FBQztnQkFBRSxHQUFHekosTUFBTTtnQkFBRSxDQUFDNkosS0FBSyxDQUFDQyxhQUFhLENBQUN4SyxJQUFJLEdBQUd1SyxLQUFLLENBQUNDLGFBQWEsQ0FBQzFLO2NBQUssQ0FBRSxDQUFDO1lBQ2hGLENBQUM7WUFFRCxNQUFNQSxLQUFLLEdBQUc7Y0FDYnRDLEtBQUs7Y0FDTHNLLFFBQVE7Y0FDUjdFLEtBQUs7Y0FDTGdILFdBQVc7Y0FDWDVELE9BQU87Y0FDUEQsVUFBVTtjQUNWdkUsS0FBSztjQUNMd0QsYUFBYTtjQUNickIsUUFBUTtjQUNSaEMsUUFBUSxFQUFFQSxRQUFRLElBQUlvSSxVQUFVO2NBQ2hDQyxhQUFhO2NBQ2JyTCxLQUFLLEVBQUV4QixLQUFLLENBQUN3QixLQUFLO2NBQ2xCMEIsTUFBTTtjQUNOeUo7YUFDQTtZQUNELE1BQU10QixHQUFHLEdBQUcsSUFBSTdHLFFBQVEsR0FBRyxhQUFhLEdBQUcsRUFBRSxFQUFFO1lBRS9DLE9BQ0N1SCxLQUFBLENBQUFoTCxhQUFBLENBQUFnTCxLQUFBLENBQUFrQixRQUFBLFFBQ0NsQixLQUFBLENBQUFoTCxhQUFBLENBQUN1SCxRQUFBLENBQUFzQyxhQUFhLENBQUNzQyxRQUFRO2NBQUM1SyxLQUFLLEVBQUVBO1lBQUssR0FDbkN5SixLQUFBLENBQUFoTCxhQUFBLENBQUN1RSxHQUFBLENBQUE2SCxhQUFhO2NBQUNoSCxTQUFTLEVBQUVrRixHQUFHO2NBQUU3RyxRQUFRLEVBQUVBLFFBQVEsSUFBSSxDQUFDLENBQUN4RSxLQUFLLENBQUNpQixLQUFLLEVBQUUwRCxVQUFVLENBQUN5STtZQUFNLEdBQ3BGckIsS0FBQSxDQUFBaEwsYUFBQSxDQUFDb0wsQ0FBQSxDQUFBa0IsU0FBUyxPQUFHLENBQ0UsQ0FDUSxDQUN2QjtVQUVMOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQSxJQUFBek0sTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEyTixZQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFFTSxTQUFVNE4sVUFBVUEsQ0FBQTtZQUN6QixNQUFNO2NBQ0w5SCxLQUFLO2NBQ0x6RixLQUFLO2NBQ0x5RixLQUFLLEVBQUU7Z0JBQUUrSCxNQUFNLEVBQUVDO2NBQU07WUFBRSxDQUN6QixHQUFHLElBQUFuRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTZELFNBQVM7Y0FBRXpKO1lBQU0sQ0FBRSxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUluRyxRQUFRLEdBQUc7Y0FBRUwsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFa0wsTUFBTSxDQUFDQyxNQUFNLENBQUNDO1lBQU0sQ0FBRTtZQUN6RCxNQUFNckQsUUFBUSxHQUFHeUMsS0FBSyxJQUNyQkosU0FBUyxDQUFDekosTUFBTSxJQUFHO2NBQ2xCLE9BQU87Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUwsUUFBUSxFQUFFa0ssS0FBSyxDQUFDYSxNQUFNLENBQUN0TDtjQUFLLENBQUU7WUFDbkQsQ0FBQyxDQUFDO1lBQ0gsTUFBTXVMLE9BQU8sR0FBR0MsTUFBTSxDQUFDQyxJQUFJLENBQUN0SSxLQUFLLENBQUNpSSxNQUFNLENBQUMsQ0FBQ3RMLEdBQUcsQ0FBQzRMLElBQUksSUFBRztjQUNwRHJMLFFBQVEsR0FBR3FMLElBQUksS0FBSzlLLE1BQU0sQ0FBQ0wsUUFBUSxHQUFHO2dCQUFFUCxLQUFLLEVBQUUwTCxJQUFJO2dCQUFFekwsS0FBSyxFQUFFa0QsS0FBSyxDQUFDaUksTUFBTSxDQUFDTSxJQUFJO2NBQUMsQ0FBRSxHQUFHckwsUUFBUTtjQUMzRixPQUFPO2dCQUFFTCxLQUFLLEVBQUUwTCxJQUFJO2dCQUFFekwsS0FBSyxFQUFFa0QsS0FBSyxDQUFDaUksTUFBTSxDQUFDTSxJQUFJO2NBQUMsQ0FBRTtZQUNsRCxDQUFDLENBQUM7WUFFRixNQUFNdEYsUUFBUSxHQUFHO2NBQUV1RixVQUFVLEVBQUVqTyxLQUFLLENBQUN3QjtZQUFLLENBQUU7WUFFNUMsT0FDQ1osTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTzJKLE9BQU8sRUFBQztZQUFFLEdBQUUrQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ25MLEtBQUssQ0FBUyxFQUMvQzNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1TSxZQUFBLENBQUFZLFdBQVc7Y0FBQ0MsWUFBWSxFQUFFeEwsUUFBUTtjQUFFSCxJQUFJLEVBQUMsVUFBVTtjQUFDcUwsT0FBTyxFQUFFQSxPQUFPO2NBQUV2RCxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUFNNUI7WUFBUSxFQUFJLENBQ3RHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUJBLElBQUE5SCxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJOLFlBQUEsR0FBQTNOLE9BQUE7VUFDQSxJQUFBMkksUUFBQSxHQUFBM0ksT0FBQTtVQUVNLFNBQVV5TyxhQUFhQSxDQUFBO1lBQzVCLE1BQU07Y0FDTDNJLEtBQUs7Y0FDTHpGLEtBQUs7Y0FDTHlGLEtBQUssRUFBRTtnQkFBRStILE1BQU0sRUFBRUM7Y0FBTSxDQUFFO2NBQ3pCZDtZQUFTLENBQ1QsR0FBRyxJQUFBckUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0QixNQUFNbkcsUUFBUSxHQUFHO2NBQUVMLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWtELEtBQUssQ0FBQ3FFLFNBQVMsQ0FBQzZELE1BQU0sQ0FBQ1U7WUFBVyxDQUFFO1lBQ3pFLE1BQU0vRCxRQUFRLEdBQUd5QyxLQUFLLElBQUlKLFNBQVMsQ0FBQ3pKLE1BQU0sS0FBSztjQUFFLEdBQUdBLE1BQU07Y0FBRUQsUUFBUSxFQUFFOEosS0FBSyxDQUFDYSxNQUFNLENBQUN0TDtZQUFLLENBQUUsQ0FBQyxDQUFDO1lBQzVGLE1BQU11TCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUN6TCxHQUFHLENBQUNDLElBQUksS0FBSztjQUFFQyxLQUFLLEVBQUVELElBQUk7Y0FBRUUsS0FBSyxFQUFFa0QsS0FBSyxDQUFDcUUsU0FBUyxDQUFDekgsSUFBSTtZQUFDLENBQUUsQ0FBQyxDQUFDO1lBQ3pGLE1BQU1xRyxRQUFRLEdBQUc7Y0FBRXVGLFVBQVUsRUFBRWpPLEtBQUssQ0FBQ3dCO1lBQUssQ0FBRTtZQUU1QyxPQUNDWixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFPMkosT0FBTyxFQUFDO1lBQUUsR0FBRWpGLEtBQUssQ0FBQ3FFLFNBQVMsQ0FBQzZELE1BQU0sQ0FBQ3BMLEtBQUssQ0FBUyxFQUN4RDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1TSxZQUFBLENBQUFZLFdBQVc7Y0FDWEMsWUFBWSxFQUFFeEwsUUFBUTtjQUN0QkwsS0FBSyxFQUFFdEMsS0FBSyxDQUFDaUIsS0FBSyxDQUFDZ0MsUUFBUTtjQUMzQlQsSUFBSSxFQUFDLFVBQVU7Y0FDZnFMLE9BQU8sRUFBRUEsT0FBTztjQUNoQnZELFFBQVEsRUFBRUEsUUFBUTtjQUFBLEdBQ2Q1QjtZQUFRLEVBQ1gsQ0FDRztVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdCQSxJQUFBOUgsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEyTixZQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFFTSxTQUFVMk8sYUFBYUEsQ0FBQTtZQUM1QixNQUFNO2NBQUV0TyxLQUFLO2NBQUV5RixLQUFLO2NBQUV2QyxNQUFNO2NBQUV5SjtZQUFTLENBQUUsR0FBRyxJQUFBckUsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUU5RCxNQUFNSixRQUFRLEdBQUc7Y0FBRXVGLFVBQVUsRUFBRWpPLEtBQUssQ0FBQ3dCO1lBQUssQ0FBRTtZQUM1QyxNQUFNcU0sT0FBTyxHQUFHLENBQ2Y7Y0FBRXZMLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWtELEtBQUssQ0FBQzNDLFFBQVEsQ0FBQzZHLEtBQUs7Y0FBRTNHLGVBQWUsRUFBRTtZQUFDLENBQUUsRUFDOUQ7Y0FBRVYsS0FBSyxFQUFFLEVBQUU7Y0FBRUMsS0FBSyxFQUFFa0QsS0FBSyxDQUFDM0MsUUFBUSxDQUFDOEcsUUFBUTtjQUFFNUcsZUFBZSxFQUFFO1lBQUMsQ0FBRSxFQUNqRTtjQUFFVixLQUFLLEVBQUUsRUFBRTtjQUFFQyxLQUFLLEVBQUVrRCxLQUFLLENBQUMzQyxRQUFRLENBQUMrRyxRQUFRO2NBQUU3RyxlQUFlLEVBQUU7WUFBQyxDQUFFLENBQ2pFO1lBQ0QsTUFBTXNILFFBQVEsR0FBR3lDLEtBQUssSUFBRztjQUN4QixNQUFNakksSUFBSSxHQUFHK0ksT0FBTyxDQUFDVSxJQUFJLENBQUNsTSxJQUFJLElBQUlBLElBQUksQ0FBQ0MsS0FBSyxLQUFLeUssS0FBSyxDQUFDYSxNQUFNLENBQUN0TCxLQUFLLENBQUM7Y0FDcEVxSyxTQUFTLENBQUN6SixNQUFNLEtBQUs7Z0JBQUUsR0FBR0EsTUFBTTtnQkFBRUosUUFBUSxFQUFFaUssS0FBSyxDQUFDYSxNQUFNLENBQUN0TCxLQUFLO2dCQUFFVSxlQUFlLEVBQUU4QixJQUFJLENBQUM5QjtjQUFlLENBQUUsQ0FBQyxDQUFDO1lBQzFHLENBQUM7WUFDRCxJQUFJd0wsYUFBYSxHQUFXLENBQUM7WUFDN0IsSUFBSTdMLFFBQVEsR0FBVyxDQUFDO1lBQ3hCLElBQUlPLE1BQU0sRUFBRXVMLGFBQWEsRUFBRUQsYUFBYSxHQUFHRSxRQUFRLENBQUN4TCxNQUFNLENBQUNKLFFBQVEsQ0FBQztZQUNwRSxJQUFJSSxNQUFNLEVBQUVKLFFBQVEsRUFBRTBILEtBQUssRUFBRTdILFFBQVEsR0FBRytMLFFBQVEsQ0FBQ3hMLE1BQU0sQ0FBQ0osUUFBUSxDQUFDMEgsS0FBSyxDQUFDO1lBRXZFLElBQUkzQixPQUFPLEdBQUcsRUFBRTtZQUNoQixJQUFJM0YsTUFBTSxDQUFDSixRQUFRLEVBQUU7Y0FDcEIrRixPQUFPLEdBQUdnRixPQUFPLENBQUNVLElBQUksQ0FBQ2xNLElBQUksSUFBSUEsSUFBSSxDQUFDQyxLQUFLLEtBQUtZLE1BQU0sQ0FBQ0osUUFBUSxDQUFDOztZQUcvRCxPQUNDbEMsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsY0FDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTzJKLE9BQU8sRUFBQztZQUFFLEdBQUVqRixLQUFLLENBQUMrSCxNQUFNLENBQUMxSyxRQUFRLENBQUNQLEtBQUssQ0FBUyxFQUN2RDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1TSxZQUFBLENBQUFZLFdBQVc7Y0FDWEcsV0FBVyxFQUFFNUksS0FBSyxDQUFDK0gsTUFBTSxDQUFDMUssUUFBUSxDQUFDdUwsV0FBVztjQUM5Qy9ELFFBQVEsRUFBRUEsUUFBUTtjQUNsQjlILElBQUksRUFBQyxVQUFVO2NBQ2ZGLEtBQUssRUFBRVksTUFBTSxDQUFDSixRQUFRO2NBQUEsR0FDbEI0RixRQUFRO2NBQ1ptRixPQUFPLEVBQUVBO1lBQU8sRUFDZixDQUNHO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUFqTixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQWdQLEtBQUEsR0FBQWhQLE9BQUE7VUFDQSxJQUFBMkksUUFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUF3TCxhQUFBLEdBQUF4TCxPQUFBO1VBQ0EsSUFBQTBILE1BQUEsR0FBQTFILE9BQUE7VUFDTSxTQUFVaVAsY0FBY0EsQ0FBQztZQUFFQztVQUFTLENBQUU7WUFDM0MsTUFBTTtjQUNMM0wsTUFBTTtjQUNOdUMsS0FBSyxFQUFFO2dCQUNOK0gsTUFBTSxFQUFFO2tCQUFFc0IsUUFBUTtrQkFBRS9MLFNBQVMsRUFBRTBDO2dCQUFLO2NBQUUsQ0FDdEM7Y0FDRDZFLFFBQVE7Y0FDUnRLO1lBQUssQ0FDTCxHQUFHLElBQUFzSSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE9BQVFsSSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLb0YsU0FBUyxFQUFDO1lBQWlCLEdBRXRDdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQzROLEtBQUEsQ0FBQUksUUFBUTtjQUNSekUsUUFBUSxFQUFFQSxRQUFRO2NBQ2xCaEksS0FBSyxFQUFFWSxNQUFNLENBQUNILFNBQVM7Y0FDdkJQLElBQUksRUFBQyxXQUFXO2NBQ2hCNkwsV0FBVyxFQUFFNUksS0FBSyxDQUFDdUosUUFBUTtjQUMzQkMsT0FBTztjQUNQQyxTQUFTLEVBQUU7WUFBRyxFQUNiLEVBQ0RMLFNBQVMsSUFDVGpPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvSyxhQUFBLENBQUFHLE1BQU0sQ0FBQ0MsR0FBRztjQUNWcEYsU0FBUyxFQUFDLGNBQWM7Y0FDeEJxRixPQUFPLEVBQUU7Z0JBQ1JDLE9BQU8sRUFBRTtlQUNUO2NBQ0RDLE9BQU8sRUFBRTtnQkFDUkQsT0FBTyxFQUFFLENBQUM7Z0JBQ1ZFLFVBQVUsRUFBRTtrQkFDWDdJLFFBQVEsRUFBRTs7O1lBRVgsR0FFQWdNLFFBQVEsQ0FBQ3ZLLElBQUksRSxLQUFFM0QsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NHLE1BQUEsQ0FBQThILElBQUk7Y0FBQ3BILElBQUksRUFBQztZQUFPLEVBQUcsQ0FFdEMsQ0FDSTtVQUVSOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNDQSxJQUFBbkgsTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEyTixZQUFBLEdBQUEzTixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFFTSxTQUFVeVAsY0FBY0EsQ0FBQTtZQUM3QixNQUFNO2NBQ0wzSixLQUFLLEVBQUU7Z0JBQUUrSCxNQUFNLEVBQUVDO2NBQU0sQ0FBRTtjQUN6QnpOLEtBQUssRUFBRTtnQkFBRWtDO2NBQVUsQ0FBRTtjQUNyQmxDO1lBQUssQ0FDTCxHQUFHLElBQUFzSSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBQ3RCLE1BQU07Y0FBRTZELFNBQVM7Y0FBRXpKO1lBQU0sQ0FBRSxHQUFHLElBQUFvRixRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRWhELElBQUl1RyxhQUFhLEdBQUc7Y0FBRS9NLEtBQUssRUFBRSxFQUFFO2NBQUVDLEtBQUssRUFBRWtMLE1BQU0sQ0FBQzZCLE9BQU8sQ0FBQzNCO1lBQU0sQ0FBRTtZQUMvRCxJQUFJM04sS0FBSyxDQUFDaUIsS0FBSyxDQUFDeUIsS0FBSyxFQUFFO2NBQ3RCMk0sYUFBYSxHQUFHO2dCQUFFL00sS0FBSyxFQUFFdEMsS0FBSyxDQUFDaUIsS0FBSyxDQUFDeUIsS0FBSyxDQUFDMUIsRUFBRTtnQkFBRXVCLEtBQUssRUFBRXZDLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ3lCLEtBQUssQ0FBQ0Y7Y0FBSSxDQUFFOztZQUUvRSxNQUFNRixLQUFLLEdBQUd0QyxLQUFLLENBQUNpQixLQUFLLENBQUN5QixLQUFLLEVBQUUxQixFQUFFO1lBQ25DLE1BQU11TyxLQUFLLEdBQUc7Y0FBRXRCLFVBQVUsRUFBRWpPLEtBQUssQ0FBQ2tDLFVBQVUsQ0FBQ2tMLE1BQU0sS0FBSyxDQUFDLElBQUlwTixLQUFLLENBQUN3QjtZQUFLLENBQUU7WUFDMUUsTUFBTThJLFFBQVEsR0FBR3lDLEtBQUssSUFBRztjQUN4QixNQUFNckssS0FBSyxHQUFHMUMsS0FBSyxDQUFDK0IsSUFBSSxDQUFDSSxhQUFhLENBQUNvTSxJQUFJLENBQUNsTSxJQUFJLElBQUlBLElBQUksQ0FBQ3JCLEVBQUUsS0FBSytMLEtBQUssQ0FBQ2EsTUFBTSxDQUFDdEwsS0FBSyxDQUFDO2NBQ25GcUssU0FBUyxDQUFDekosTUFBTSxJQUFHO2dCQUNsQixPQUFPO2tCQUFFLEdBQUdBLE1BQU07a0JBQUVSO2dCQUFLLENBQUU7Y0FDNUIsQ0FBQyxDQUFDO1lBQ0gsQ0FBQztZQUVELE9BQ0M5QixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFPMkosT0FBTyxFQUFDO1lBQUUsR0FBRStDLE1BQU0sQ0FBQzZCLE9BQU8sQ0FBQy9NLEtBQUssQ0FBUyxFQUNoRDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1TSxZQUFBLENBQUFZLFdBQVc7Y0FDWDVMLEtBQUssRUFBRUEsS0FBSztjQUNaK00sYUFBYSxFQUFFQSxhQUFhO2NBQzVCN00sSUFBSSxFQUFDLE9BQU87Y0FDWnFMLE9BQU8sRUFBRTdOLEtBQUssQ0FBQ2tDLFVBQVU7Y0FDekJvSSxRQUFRLEVBQUVBLFFBQVE7Y0FBQSxHQUNkaUY7WUFBSyxFQUNSLENBQ0c7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQTNPLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBNlAsWUFBQSxHQUFBN1AsT0FBQTtVQUNBLElBQUEySSxRQUFBLEdBQUEzSSxPQUFBO1VBQ0EsSUFBQTJGLEdBQUEsR0FBQTNGLE9BQUE7VUFDQSxJQUFBOFAsTUFBQSxHQUFBOVAsT0FBQTtVQUNBLElBQUErUCxhQUFBLEdBQUEvUCxPQUFBO1VBQ0EsSUFBQWdRLFVBQUEsR0FBQWhRLE9BQUE7VUFDQSxJQUFBaVEsVUFBQSxHQUFBalEsT0FBQTtVQUNBLElBQUFrUSxRQUFBLEdBQUFsUSxPQUFBO1VBQ0EsSUFBQTJILFdBQUEsR0FBQTNILE9BQUE7VUFDQSxJQUFBbVEsWUFBQSxHQUFBblEsT0FBQTtVQUVBLElBQUFvUSxNQUFBLEdBQUFwUSxPQUFBO1VBQ0EsSUFBQXFRLGdCQUFBLEdBQUFyUSxPQUFBO1VBQ0EsSUFBQXNRLFNBQUEsR0FBQXRRLE9BQUE7VUFFTSxTQUFVME4sU0FBU0EsQ0FBQTtZQUN4QixNQUFNO2NBQUVuSyxNQUFNO2NBQUVtQixLQUFLO2NBQUVzSSxTQUFTO2NBQUUzTSxLQUFLO2NBQUV5RixLQUFLO2NBQUVqRSxLQUFLO2NBQUVnRDtZQUFRLENBQUUsR0FBRyxJQUFBOEQsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUN0RixNQUFNLENBQUN6SSxJQUFJLEVBQUU2UCxPQUFPLENBQUMsR0FBR3RQLE1BQUEsQ0FBQUUsT0FBSyxDQUFDeUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUM3QyxNQUFNLENBQUNzSSxTQUFTLEVBQUVzQixZQUFZLENBQUMsR0FBR3ZQLE1BQUEsQ0FBQUUsT0FBSyxDQUFDeUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUN2RCxNQUFNZixPQUFPLEdBQUdBLENBQUEsS0FBTTBLLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDcEMsTUFBTWpDLFVBQVUsR0FBRyxDQUFDL0ssTUFBTSxDQUFDUixLQUFLLElBQUksQ0FBQ1EsTUFBTSxDQUFDTCxRQUFRLElBQUksQ0FBQ0ssTUFBTSxDQUFDSixRQUFRLElBQUksQ0FBQ0ksTUFBTSxDQUFDSCxTQUFTLElBQUksQ0FBQ0csTUFBTSxDQUFDRCxRQUFRO1lBQ2pILE1BQU1WLEtBQUssR0FBR3ZDLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ21QLEtBQUssSUFBSTVPLEtBQUssR0FBR2lFLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ3VKLFFBQVEsR0FBRzVLLEtBQUssQ0FBQ3FCLE9BQU8sQ0FBQ3ZDLElBQUk7WUFDdEYsTUFBTStMLGVBQWUsR0FBRzdLLEtBQUssQ0FBQzhLLGNBQWMsQ0FBQ3ZRLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxHQUMvRHdELEtBQUssQ0FBQ3pGLEtBQUssQ0FBQ2lDLGNBQWMsQ0FBQyxHQUMzQndELEtBQUssQ0FBQytLLG9CQUFvQjtZQUM3QixNQUFNQyxNQUFNLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQ3pCLE1BQU1DLFVBQVUsR0FBRztnQkFBRSxHQUFHeE4sTUFBTTtnQkFBRWtOLEtBQUssRUFBRTtjQUFXLENBQUU7Y0FDcER6RCxTQUFTLENBQUM7Z0JBQUUsR0FBRytEO2NBQVUsQ0FBRSxDQUFDO2NBQzVCLE1BQU0xUSxLQUFLLENBQUN1RSxJQUFJLENBQUM7Z0JBQUUsR0FBR21NO2NBQVUsQ0FBRSxDQUFDO1lBQ3BDLENBQUM7WUFDRCxNQUFNakksUUFBUSxHQUFHLE1BQUFBLENBQUEsS0FBVztjQUMzQixJQUFJO2dCQUNILElBQUlqSCxLQUFLLElBQUl4QixLQUFLLENBQUNpQixLQUFLLENBQUNtUCxLQUFLLEtBQUssU0FBUyxFQUFFO2tCQUM3Q0YsT0FBTyxDQUFDLElBQUksQ0FBQztrQkFDYjs7Z0JBR0QsTUFBTWxRLEtBQUssQ0FBQ3VFLElBQUksQ0FBQztrQkFBRSxHQUFHckIsTUFBTTtrQkFBRWtOLEtBQUssRUFBRTtnQkFBUyxDQUFFLENBQUM7Z0JBQ2pEUCxRQUFBLENBQUFjLE9BQU8sQ0FBQ0MsWUFBWSxDQUFDLEVBQUUsRUFBRW5OLFNBQVMsRUFBRSwwQkFBMEJ6RCxLQUFLLENBQUNpQixLQUFLLENBQUNELEVBQUUsRUFBRSxDQUFDO2dCQUMvRW1QLFlBQVksQ0FBQyxJQUFJLENBQUM7ZUFDbEIsQ0FBQyxPQUFPaE0sQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsT0FDQ3ZELE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQU1vRixTQUFTLEVBQUM7WUFBOEIsR0FDN0N2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDZ1AsTUFBQSxDQUFBM0ksYUFBYTtjQUFDL0MsS0FBSyxFQUFFQSxLQUFLO2NBQUVvQixLQUFLLEVBQUVBO1lBQUssRUFBSSxFQUM3QzdFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN5TyxZQUFBLENBQUFwRSxXQUFXLFFBQ1h4SyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFTb0YsU0FBUyxFQUFDO1lBQVcsR0FDN0J2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFRb0YsU0FBUyxFQUFDO1lBQW9CLEdBQ3JDdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsYUFBSzBFLEtBQUssQ0FBQytILE1BQU0sQ0FBQ3FELFlBQVksQ0FBQzdLLEtBQUssQ0FBTSxFQUMxQ3BGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGVBQU8wRSxLQUFLLENBQUMrSCxNQUFNLENBQUNxRCxZQUFZLENBQUNDLFFBQVEsQ0FBUSxDQUN6QyxFQUVUbFEsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBU29GLFNBQVMsRUFBQztZQUE2QixHQUMvQ3ZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNrUCxTQUFBLENBQUE3QixhQUFhLE9BQUcsRUFDakJ4TixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNE8sVUFBQSxDQUFBUCxjQUFjLE9BQUcsRUFDbEJ4TyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDME8sTUFBQSxDQUFBbEMsVUFBVSxPQUFHLEVBQ2QzTSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDMk8sYUFBQSxDQUFBcEIsYUFBYSxPQUFHLENBQ1IsRUFFVjFOLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBZ0MsR0FDOUN2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNk8sVUFBQSxDQUFBaEIsY0FBYztjQUFDQyxTQUFTLEVBQUVBO1lBQVMsRUFBSSxDQUNuQyxDQUNHLEVBQ1ZqTyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK08sWUFBQSxDQUFBaUIsb0JBQW9CLE9BQUcsRUFDeEJuUSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxpQkFDQ0gsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VHLFdBQUEsQ0FBQVEsTUFBTTtjQUNOM0IsU0FBUyxFQUFDLGNBQWM7Y0FDeEJyQyxJQUFJLEVBQUMsUUFBUTtjQUNia04sS0FBSztjQUNMdEksUUFBUSxFQUFFdUYsVUFBVTtjQUNwQmpILE9BQU8sRUFBQyxTQUFTO2NBQ2pCVSxPQUFPLEVBQUVlO1lBQVEsR0FFaEJsRyxLQUFLLENBQ0UsQ0FDRCxDQUNJLEVBQ2QzQixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsR0FBQSxDQUFBMkwsZ0JBQWdCO2NBQUN6TSxRQUFRLEVBQUVBO1lBQVEsR0FDbkM1RCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUUsR0FBQSxDQUFBNEwsZUFBZTtjQUFDQyxJQUFJLEVBQUMsTUFBTTtjQUFDQyxPQUFPLEVBQUVkO1lBQWUsRUFBSSxDQUN2QyxFQUNuQjFQLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNpUCxnQkFBQSxDQUFBcUIseUJBQXlCO2NBQUNoUixJQUFJLEVBQUVBLElBQUk7Y0FBRW1GLE9BQU8sRUFBRUEsT0FBTztjQUFFaUwsTUFBTSxFQUFFQTtZQUFNLEVBQUksQ0FDckU7VUFFVDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2RkEsSUFBQTdQLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBMkksUUFBQSxHQUFBM0ksT0FBQTtVQUNBLElBQUF5SSxNQUFBLEdBQUF6SSxPQUFBO1VBQ0EsSUFBQTJSLFNBQUEsR0FBQTNSLE9BQUE7VUFFTSxTQUFVNFIsaUJBQWlCQSxDQUFDLEVBQUU7WUFDbkMsTUFBTTtjQUNMOUwsS0FBSyxFQUFFO2dCQUFFcUIsT0FBTyxFQUFFMEssV0FBVztnQkFBRSxHQUFHL0w7Y0FBSyxDQUFFO2NBQ3pDekYsS0FBSztjQUNMa0QsTUFBTTtjQUNOMkUsYUFBYTtjQUNickc7WUFBSyxDQUNMLEdBQUcsSUFBQThHLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFFdEIsTUFBTTJJLG9CQUFvQixHQUFHLE1BQUFBLENBQUEsS0FBVztjQUN2QyxJQUFJO2dCQUNILE1BQU16UixLQUFLLENBQUM2RSx3QkFBd0IsQ0FBQztrQkFBRTlCLFNBQVMsRUFBRUcsTUFBTSxDQUFDSDtnQkFBUyxDQUFFLENBQUM7ZUFDckUsQ0FBQyxPQUFPb0IsQ0FBQyxFQUFFO2dCQUNYQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0YsQ0FBQyxDQUFDOztZQUVsQixDQUFDO1lBRUQsT0FDQ3ZELE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUFILE1BQUEsQ0FBQUUsT0FBQSxDQUFBbU0sUUFBQSxRQUNFak4sS0FBSyxFQUFFeUIsWUFBWSxFQUFFaVEsVUFBVSxJQUMvQjlRLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNxSCxNQUFBLENBQUFDLEtBQUs7Y0FBQ2xDLFNBQVMsRUFBQyxPQUFPO2NBQUNyQyxJQUFJLEVBQUM7WUFBUyxHQUNyQzJCLEtBQUssQ0FBQ2tNLFdBQVcsQ0FBQ0QsVUFBVSxDQUU5QixFQUNEOVEsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS29GLFNBQVMsRUFBQztZQUFvQyxHQUNsRHZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1USxTQUFBLENBQUE5SixRQUFRO2NBQUNrQixRQUFRLEVBQUUsQ0FBQ2xILEtBQUs7Y0FBRWtHLE9BQU8sRUFBRStKLG9CQUFvQjtjQUFFekssT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtZQUFBLEdBQ25Gc0ssV0FBVyxDQUFDSSxPQUFPLENBQ1YsQ0FDTixDQUNKO1VBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcENBLElBQUFoUixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBaVEsVUFBQSxHQUFBalEsT0FBQTtVQUNBLElBQUFrUyxPQUFBLEdBQUFsUyxPQUFBO1VBQ0EsSUFBQW1TLEtBQUEsR0FBQW5TLE9BQUE7VUFFTSxTQUFVb1Isb0JBQW9CQSxDQUFBO1lBQ25DLE1BQU07Y0FBRS9RO1lBQUssQ0FBRSxHQUFHLElBQUFzSSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXBDLE1BQU0sQ0FBQ2lKLGlCQUFpQixFQUFFQyxvQkFBb0IsQ0FBQyxHQUFHcFIsTUFBQSxDQUFBRSxPQUFLLENBQUN5RixRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ3ZFO1lBQ0EsSUFBSSxDQUFDdkcsS0FBSyxDQUFDeUIsWUFBWSxJQUFJekIsS0FBSyxDQUFDeUIsWUFBWSxDQUFDaVEsVUFBVSxFQUFFLE9BQU85USxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDOFEsT0FBQSxDQUFBTixpQkFBaUIsT0FBRztZQUV0RixNQUFNVSxZQUFZLEdBQUc7Y0FBRUYsaUJBQWlCO2NBQUVDO1lBQW9CLENBQUU7WUFDaEUsT0FDQ3BSLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1SCxRQUFBLENBQUEyQyxrQkFBa0IsQ0FBQ2lDLFFBQVE7Y0FBQzVLLEtBQUssRUFBRTJQO1lBQVksR0FDL0NyUixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDNk8sVUFBQSxDQUFBc0MsaUJBQWlCLE9BQUcsRUFDckJ0UixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDK1EsS0FBQSxDQUFBSyxlQUFlO2NBQUNuQixLQUFLLEVBQUUsQ0FBQ2U7WUFBaUIsRUFBSSxDQUNqQjtVQUVoQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQW5SLE1BQUEsR0FBQWpCLE9BQUE7VUFFQSxJQUFBMkgsV0FBQSxHQUFBM0gsT0FBQTtVQUNBLElBQUFtUyxLQUFBLEdBQUFuUyxPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBeVMsS0FBQSxHQUFBelMsT0FBQTtVQUVNLFNBQVV3UyxlQUFlQSxDQUFDO1lBQUVuQjtVQUFLLENBQUU7WUFDeEMsTUFBTTtjQUNMdkwsS0FBSyxFQUFFO2dCQUFFa00sV0FBVyxFQUFFbE0sS0FBSztnQkFBRXFCLE9BQU8sRUFBRTBLO2NBQVcsQ0FBRTtjQUNuRHhSLEtBQUs7Y0FDTGtELE1BQU07Y0FDTjFCLEtBQUs7Y0FDTG1MO1lBQVMsQ0FDVCxHQUFHLElBQUFyRSxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE1BQU0sQ0FBQ25HLFFBQVEsRUFBRTBQLFdBQVcsQ0FBQyxHQUFHelIsTUFBQSxDQUFBRSxPQUFLLENBQUN5RixRQUFRLENBQUMsSUFBSXpFLEdBQUcsRUFBRSxDQUFDO1lBRXpELElBQUksQ0FBQzlCLEtBQUssQ0FBQ3lCLFlBQVksRUFBRSxPQUFPLElBQUk7WUFDcEMsTUFBTTtjQUFFa1E7WUFBVyxDQUFFLEdBQUczUixLQUFLLENBQUN5QixZQUFZO1lBRTFDLE1BQU02USxLQUFLLEdBQUcsTUFBTXZGLEtBQUssSUFBRztjQUMzQixNQUFNbEosS0FBSyxHQUFHO2dCQUNiZCxTQUFTLEVBQUVHLE1BQU0sQ0FBQ0gsU0FBUztnQkFDM0J0QixZQUFZLEVBQUU4USxLQUFLLENBQUNDLElBQUksQ0FBQzdQLFFBQVEsQ0FBQyxDQUFDUCxHQUFHLENBQUVxUSxDQUFTLElBQUt6UyxLQUFLLENBQUN5QixZQUFZLENBQUNrUSxXQUFXLENBQUNjLENBQUMsQ0FBQyxDQUFDQyxVQUFVO2VBQ2xHO2NBQ0QsTUFBTTFTLEtBQUssQ0FBQytFLGlCQUFpQixDQUFDbEIsS0FBSyxDQUFDO2NBRXBDOEksU0FBUyxDQUFDekosTUFBTSxLQUFLO2dCQUFFLEdBQUdBLE1BQU07Z0JBQUVILFNBQVMsRUFBRS9DLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQzhCO2NBQVMsQ0FBRSxDQUFDLENBQUM7WUFDdkUsQ0FBQztZQUVELE1BQU1vRSxRQUFRLEdBQUdBLENBQUEsS0FBSztjQUNyQmtMLFdBQVcsQ0FBQyxJQUFJdlEsR0FBRyxFQUFFLENBQUM7Y0FDdEI5QixLQUFLLENBQUMyRCxpQkFBaUIsRUFBRTtZQUMxQixDQUFDO1lBQ0QsTUFBTStFLFFBQVEsR0FBRztjQUFFQSxRQUFRLEVBQUUsQ0FBQy9GLFFBQVEsQ0FBQ2dRLElBQUksSUFBSTNCO1lBQUssQ0FBRTtZQUN0RCxNQUFNM0YsR0FBRyxHQUFHLG1DQUFtQzJGLEtBQUssR0FBRyxjQUFjLEdBQUcsRUFBRSxFQUFFO1lBRTVFLE9BQ0NwUSxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFTb0YsU0FBUyxFQUFFa0Y7WUFBRyxHQUN0QnpLLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUMrUSxLQUFBLENBQUFjLElBQUk7Y0FDSnpNLFNBQVMsRUFBQyw2QkFBNkI7Y0FDdkN0QyxLQUFLLEVBQUU7Z0JBQUVsQixRQUFRO2dCQUFFMFAsV0FBVztnQkFBRXJCO2NBQUssQ0FBRTtjQUN2QzZCLE9BQU8sRUFBRVQsS0FBQSxDQUFBVSx3QkFBd0I7Y0FDakNDLEtBQUssRUFBRXBCO1lBQVcsRUFDakIsRUFDRi9RLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBZ0UsR0FDOUV2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxjQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxlQUNFMEUsS0FBSyxDQUFDN0QsS0FBSyxFLE1BQUllLFFBQVEsQ0FBQ2dRLElBQUksQ0FDdkIsQ0FDRixFQUNOL1IsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS29GLFNBQVMsRUFBQztZQUFnQyxHQUM5Q3ZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUFRLE1BQU07Y0FBQSxHQUFLWSxRQUFRO2NBQUVoQixPQUFPLEVBQUVQLFFBQVE7Y0FBRUgsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtZQUFBLEdBQ2pFc0ssV0FBVyxDQUFDd0IsaUJBQWlCLENBQ3RCLEVBQ1RwUyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUcsV0FBQSxDQUFBUSxNQUFNO2NBQUEsR0FBS1ksUUFBUTtjQUFFMUIsT0FBTyxFQUFDLFNBQVM7Y0FBQ1UsT0FBTyxFQUFFNEs7WUFBSyxHQUNwRGQsV0FBVyxDQUFDeUIsZ0JBQWdCLENBQ3JCLENBQ0osQ0FDRCxDQUNHO1VBRVo7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0RBLElBQUFyUyxNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFFTSxTQUFVbVQsd0JBQXdCQSxDQUFDO1lBQUV0SSxLQUFLO1lBQUVuSSxJQUFJO1lBQUV3QixLQUFLLEVBQUU7Y0FBRW1OLEtBQUs7Y0FBRXJPLFFBQVE7Y0FBRTBQO1lBQVc7VUFBRSxDQUFFO1lBQ2hHLE1BQU07Y0FDTG5QLE1BQU07Y0FDTnlKLFNBQVM7Y0FDVDNNLEtBQUs7Y0FDTHlGLEtBQUssRUFBRTtnQkFBRWtNLFdBQVcsRUFBRWxNO2NBQUs7WUFBRSxDQUM3QixHQUFHLElBQUE2QyxRQUFBLENBQUFRLGdCQUFnQixHQUFFO1lBRXRCLE1BQU1vSyxRQUFRLEdBQUduRyxLQUFLLElBQUc7Y0FFeEJBLEtBQUssQ0FBQ29HLGVBQWUsRUFBRTtjQUN2QixNQUFNM0ksS0FBSyxHQUFHa0UsUUFBUSxDQUFDM0IsS0FBSyxDQUFDQyxhQUFhLENBQUNvRyxPQUFPLENBQUM1SSxLQUFLLENBQUM7Y0FDekQsTUFBTTZJLFFBQVEsR0FBRzFRLFFBQVE7Y0FDekIwUSxRQUFRLENBQUNyTyxHQUFHLENBQUN3RixLQUFLLENBQUMsR0FBRzZJLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDOUksS0FBSyxDQUFDLEdBQUc2SSxRQUFRLENBQUNFLEdBQUcsQ0FBQy9JLEtBQUssQ0FBQztjQUNsRXhLLEtBQUssQ0FBQzZCLG9CQUFvQixDQUFDMFIsR0FBRyxDQUFDL0ksS0FBSyxDQUFDO2NBQ3JDNkgsV0FBVyxDQUFDLElBQUl2USxHQUFHLENBQUN1UixRQUFRLENBQUMsQ0FBQztZQUMvQixDQUFDO1lBRUQsTUFBTWhJLEdBQUcsR0FBRyxtQkFBbUIxSSxRQUFRLENBQUNxQyxHQUFHLENBQUN3RixLQUFLLENBQUMsR0FBRyxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBQ3ZFLE1BQU0rRSxLQUFLLEdBQUc7Y0FBRXBKLFNBQVMsRUFBRWtGLEdBQUc7Y0FBRSxZQUFZLEVBQUViLEtBQUs7Y0FBRTlDLE9BQU8sRUFBRWpFO1lBQVMsQ0FBRTtZQUV6RSxJQUFJLENBQUN1TixLQUFLLEVBQUV6QixLQUFLLENBQUM3SCxPQUFPLEdBQUd3TCxRQUFRO1lBRXBDLE9BQ0N0UyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLb0YsU0FBUyxFQUFFa0YsR0FBRztjQUFBLGNBQWNiLEtBQUs7Y0FBQSxHQUFNK0U7WUFBSyxHQUNoRDNPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGlCQUNDSCxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFNb0YsU0FBUyxFQUFDO1lBQWtCLEdBQUVWLEtBQUssQ0FBQytOLE1BQU0sQ0FBUSxFQUN4RDVTLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQU1vRixTQUFTLEVBQUM7WUFBc0IsR0FBRTlELElBQUksQ0FBQ29SLFNBQVMsQ0FBUSxDQUN0RCxFQUNUN1MsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS29GLFNBQVMsRUFBQztZQUFlLEdBQzdCdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsaUJBQ0NILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQU1vRixTQUFTLEVBQUM7WUFBa0IsR0FBRVYsS0FBSyxDQUFDbEQsS0FBSyxDQUFRLENBQy9DLEVBQ1JGLElBQUksQ0FBQ3FRLFVBQVUsQ0FDWCxDQUNEO1VBRVI7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDeENBLElBQUE5UixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBMkgsV0FBQSxHQUFBM0gsT0FBQTtVQUNNLFNBQVV1UyxpQkFBaUJBLENBQUE7WUFDaEMsTUFBTTtjQUNMek0sS0FBSyxFQUFFO2dCQUNOa00sV0FBVyxFQUFFO2tCQUNaNU8sU0FBUyxFQUFFO29CQUFFK0QsT0FBTyxFQUFFckI7a0JBQUs7Z0JBQUU7Y0FDN0IsQ0FDRDtjQUNEekYsS0FBSztjQUNMMk0sU0FBUztjQUNUekosTUFBTTtjQUNObEQsS0FBSyxFQUFFO2dCQUFFeUI7Y0FBWTtZQUFFLENBQ3ZCLEdBQUcsSUFBQTZHLFFBQUEsQ0FBQVEsZ0JBQWdCLEdBQUU7WUFDdEIsTUFBTTtjQUFFaUosaUJBQWlCO2NBQUVDO1lBQW9CLENBQUUsR0FBRyxJQUFBMUosUUFBQSxDQUFBNEMscUJBQXFCLEdBQUU7WUFDM0UsTUFBTTtjQUFFd0csVUFBVTtjQUFFZ0M7WUFBUSxDQUFFLEdBQUdqUyxZQUFZO1lBQzdDLElBQUksQ0FBQ0EsWUFBWSxJQUFJc1EsaUJBQWlCLEVBQUUsT0FBTyxJQUFJO1lBRW5ELE1BQU1ySyxPQUFPLEdBQUcsTUFBTXFGLEtBQUssSUFBRztjQUM3QixJQUFJQSxLQUFLLENBQUNDLGFBQWEsQ0FBQzFLLEtBQUssS0FBSyxNQUFNLEVBQUU7Z0JBQ3pDLE1BQU10QyxLQUFLLENBQUN1RSxJQUFJLENBQUM7a0JBQUV4QixTQUFTLEVBQUUyUTtnQkFBUSxDQUFFLENBQUM7Z0JBQ3pDL0csU0FBUyxDQUFDO2tCQUFFLEdBQUd6SixNQUFNO2tCQUFFSCxTQUFTLEVBQUUyUTtnQkFBUSxDQUFFLENBQUM7O2NBRzlDMUIsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFFRCxPQUNDcFIsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBS29GLFNBQVMsRUFBQztZQUFzQixHQUNwQ3ZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGFBQUsyUyxRQUFRLENBQU0sRUFDbkI5UyxNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQTtjQUFLb0YsU0FBUyxFQUFDO1lBQWdFLEdBQzlFdkYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBTW9GLFNBQVMsRUFBQztZQUFjLEdBQUVWLEtBQUssQ0FBQ2xELEtBQUssQ0FBUSxFQUNuRDNCLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBbUQsR0FDakV2RixNQUFBLENBQUFFLE9BQUEsQ0FBQUMsYUFBQSxDQUFDdUcsV0FBQSxDQUFBUSxNQUFNO2NBQUNkLE9BQU8sRUFBQyxTQUFTO2NBQUNFLFFBQVE7Y0FBQzVFLEtBQUssRUFBQyxPQUFPO2NBQUNvRixPQUFPLEVBQUVBO1lBQU8sR0FDL0RqQyxLQUFLLENBQUN3QixNQUFNLENBQ0wsRUFDVHJHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUFRLE1BQU07Y0FBQ2QsT0FBTyxFQUFDLFNBQVM7Y0FBQzFFLEtBQUssRUFBQyxNQUFNO2NBQUNvRixPQUFPLEVBQUVBO1lBQU8sR0FDckRqQyxLQUFLLENBQUNzQixPQUFPLENBQ04sQ0FDSixDQUNELENBQ0Q7VUFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1Q0EsSUFBQW5HLE1BQUEsR0FBQWpCLE9BQUE7VUFDQSxJQUFBd0wsYUFBQSxHQUFBeEwsT0FBQTtVQUNNLFNBQVVnVSxhQUFhQSxDQUFDO1lBQUVsTTtVQUFRLENBQUU7WUFDekMsTUFBTSxDQUFDcEgsSUFBSSxFQUFFNlAsT0FBTyxDQUFDLEdBQUd0UCxNQUFBLENBQUFFLE9BQUssQ0FBQ3lGLFFBQVEsQ0FBQyxDQUFDLENBQUNrQixRQUFRLENBQUM7WUFFbEQ3RyxNQUFBLENBQUFFLE9BQUssQ0FBQzhTLFNBQVMsQ0FBQyxNQUFLO2NBQ3BCMUQsT0FBTyxDQUFDekksUUFBUSxDQUFDO2NBQ2pCakUsVUFBVSxDQUFDcVEsVUFBVSxDQUFDLE1BQUs7Z0JBQzFCM0QsT0FBTyxDQUFDLEtBQUssQ0FBQztjQUNmLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQ3pJLFFBQVEsQ0FBQyxDQUFDO1lBRWQsT0FDQzdHLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvSyxhQUFBLENBQUEySSxlQUFlLFFBQ2R6VCxJQUFJLElBQ0pPLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNvSyxhQUFBLENBQUFHLE1BQU0sQ0FBQ3lJLElBQUk7Y0FDWEMsTUFBTTtjQUNOeEksT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUUsQ0FBQztnQkFDVndJLEtBQUssRUFBRTtlQUNQO2NBQ0R2SSxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1g3SSxRQUFRLEVBQUU7aUJBQ1Y7Z0JBQ0RtUixLQUFLLEVBQUU7ZUFDUDtjQUNEbkksSUFBSSxFQUFFO2dCQUNMSCxVQUFVLEVBQUU7a0JBQ1g3SSxRQUFRLEVBQUUsR0FBRztrQkFDYm1SLEtBQUssRUFBRTtpQkFDUDtnQkFDRHhJLE9BQU8sRUFBRTs7WUFDVCxHQUVBaEUsUUFBUSxDQUVWLENBQ2dCO1VBRXBCOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDQSxJQUFBN0csTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUF3TCxhQUFBLEdBQUF4TCxPQUFBO1VBQ00sU0FBVXVVLFFBQVFBLENBQUM7WUFBRS9OLFNBQVM7WUFBRXNCLFFBQVE7WUFBRTBNLEVBQUUsR0FBRztVQUFNLENBQUU7WUFDNUQsTUFBTUMsU0FBUyxHQUFHLElBQUFqSixhQUFBLENBQUFHLE1BQU0sRUFBQzZJLEVBQUUsQ0FBQztZQUM1QixPQUNDdlQsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3FULFNBQVM7Y0FDVEosTUFBTTtjQUNON04sU0FBUyxFQUFFQSxTQUFTO2NBQ3BCcUYsT0FBTyxFQUFFO2dCQUNSQyxPQUFPLEVBQUU7ZUFDVDtjQUNEQyxPQUFPLEVBQUU7Z0JBQ1JELE9BQU8sRUFBRSxDQUFDO2dCQUNWRSxVQUFVLEVBQUU7a0JBQ1g3SSxRQUFRLEVBQUU7O2VBRVg7Y0FDRGdKLElBQUksRUFBRTtnQkFDTEgsVUFBVSxFQUFFO2tCQUNYN0ksUUFBUSxFQUFFLEdBQUc7a0JBQ2JtUixLQUFLLEVBQUU7aUJBQ1A7Z0JBQ0R4SSxPQUFPLEVBQUU7O1lBQ1QsR0FFQWhFLFFBQVEsQ0FDRTtVQUVkOzs7Ozs7Ozs7Ozs7Ozs7OztVQzNCQSxJQUFBNE0sYUFBQSxHQUFBMVUsT0FBQTtVQUNBLElBQUFpQixNQUFBLEdBQUFqQixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFDQSxJQUFBMlUsT0FBQSxHQUFBM1UsT0FBQTtVQUVPO1VBQVUsU0FBVTRVLE1BQU1BLENBQUE7WUFDaEMsTUFBTTtjQUFFdlUsS0FBSztjQUFFeUY7WUFBSyxDQUFFLEdBQUcsSUFBQTZDLFFBQUEsQ0FBQTBDLHlCQUF5QixHQUFFO1lBQ3BELE1BQU13SixPQUFPLEdBQUd4VSxLQUFLLENBQUN3QixLQUFLLElBQUksQ0FBQ3hCLEtBQUssQ0FBQzBCLFVBQVU7WUFDaEQsT0FDQ2QsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsa0JBQ0NILE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUNzVCxhQUFBLENBQUFJLFlBQVk7Y0FDWkMsVUFBVSxFQUFFLENBQ1gsQ0FBQ0osT0FBQSxDQUFBeFQsT0FBTSxDQUFDNlQsTUFBTSxDQUFDQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQzdCLENBQUNuUCxLQUFLLENBQUNpUCxVQUFVLENBQUNHLE9BQU8sRUFBRSxlQUFlLENBQUMsRUFDM0MsQ0FBQ3BQLEtBQUssQ0FBQ2lQLFVBQVUsQ0FBQ0ksVUFBVSxFQUFFLEVBQUUsQ0FBQztZQUNqQyxFQUNBLENBQ087VUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwQkEsSUFBQS9JLEtBQUEsR0FBQXBNLE9BQUE7VUFDQSxJQUFBcU0sTUFBQSxHQUFBck0sT0FBQTtVQUNBLElBQUFzTSxPQUFBLEdBQUF0TSxPQUFBO1VBQ0EsSUFBQXVNLGVBQUEsR0FBQXZNLE9BQUE7VUFFQSxJQUFBb1YsVUFBQSxHQUFBcFYsT0FBQTtVQUNBLElBQUFxVixXQUFBLEdBQUFyVixPQUFBO1VBQ0EsSUFBQTJCLFlBQUEsR0FBQTNCLE9BQUE7VUFDQSxJQUFBMkksUUFBQSxHQUFBM0ksT0FBQTtVQUVPO1VBQVUsU0FDUlMsSUFBSUEsQ0FBQ3VILEtBQUs7WUFDbEIsTUFBTTtjQUFFM0g7WUFBSyxDQUFFLEdBQTRCMkgsS0FBSztZQUNoRCxNQUFNLENBQUMwRSxVQUFVLEVBQUU1RyxLQUFLLENBQUMsR0FBRyxJQUFBd0csT0FBQSxDQUFBSyxRQUFRLEVBQUNKLGVBQUEsQ0FBQUssTUFBTSxDQUFDQyxTQUFTLENBQUM7WUFDdEQsTUFBTSxHQUFHbEcsV0FBVyxDQUFDLEdBQUd5RixLQUFLLENBQUN4RixRQUFRLENBQUN2RyxLQUFLLENBQUN3RSxRQUFRLENBQUM7WUFDdEQsTUFBTSxHQUFHa0ksVUFBVSxDQUFDLEdBQUdYLEtBQUssQ0FBQ3hGLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFFekMsSUFBQXlGLE1BQUEsQ0FBQWMsU0FBUyxFQUFDLENBQUM5TSxLQUFLLENBQUMsRUFBRSxNQUFLO2NBQ3ZCME0sVUFBVSxDQUFDLEVBQUUsQ0FBQztjQUNkcEcsV0FBVyxDQUFDdEcsS0FBSyxFQUFFaUIsS0FBSyxFQUFFdUQsUUFBUSxDQUFDO1lBQ3BDLENBQUMsQ0FBQztZQUVGLElBQUksQ0FBQzZILFVBQVUsSUFBSSxDQUFDck0sS0FBSyxDQUFDMEQsS0FBSyxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFFOUMsTUFBTTBGLE9BQU8sR0FBR3BKLEtBQUssQ0FBQ2lCLEtBQUssQ0FBQ21QLEtBQUssS0FBSyxXQUFXLEdBQUc0RSxXQUFBLENBQUFuVSxvQkFBb0IsR0FBR2tVLFVBQUEsQ0FBQTNJLGNBQWM7WUFDekYsTUFBTTlKLEtBQUssR0FBRztjQUNibUQsS0FBSztjQUNMekYsS0FBSztjQUNMNkgsYUFBYSxFQUFFdkcsWUFBQSxDQUFBMkMsWUFBWSxDQUFDNEQ7YUFDNUI7WUFFRCxPQUNDa0UsS0FBQSxDQUFBaEwsYUFBQSxDQUFBZ0wsS0FBQSxDQUFBa0IsUUFBQSxRQUNDbEIsS0FBQSxDQUFBaEwsYUFBQSxDQUFDdUgsUUFBQSxDQUFBeUMsc0JBQXNCLENBQUNtQyxRQUFRO2NBQUM1SyxLQUFLLEVBQUVBO1lBQUssR0FDNUN5SixLQUFBLENBQUFoTCxhQUFBLENBQUNxSSxPQUFPO2NBQUNwSixLQUFLLEVBQUVBLEtBQUs7Y0FBRU8sR0FBRyxFQUFFb0gsS0FBSyxDQUFDcEg7WUFBRyxFQUFJLENBQ1IsQ0FDaEM7VUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EsSUFBQUssTUFBQSxHQUFBakIsT0FBQTtVQUNBLElBQUEwRixNQUFBLEdBQUExRixPQUFBO1VBQ0EsSUFBQTJILFdBQUEsR0FBQTNILE9BQUE7VUFDQSxJQUFBMkYsR0FBQSxHQUFBM0YsT0FBQTtVQUNBLElBQUEyUixTQUFBLEdBQUEzUixPQUFBO1VBQ0EsSUFBQTJJLFFBQUEsR0FBQTNJLE9BQUE7VUFDTSxTQUFVMFIseUJBQXlCQSxDQUFDO1lBQUVoUixJQUFJO1lBQUVtRixPQUFPO1lBQUVpTDtVQUFNLENBQUU7WUFDbEUsTUFBTTtjQUFFaEwsS0FBSztjQUFFekYsS0FBSztjQUFFa0QsTUFBTTtjQUFFMkU7WUFBYSxDQUFFLEdBQUcsSUFBQVMsUUFBQSxDQUFBUSxnQkFBZ0IsR0FBRTtZQUNsRSxNQUFNLENBQUN0RSxRQUFRLEVBQUU4QixXQUFXLENBQUMsR0FBRzFGLE1BQUEsQ0FBQUUsT0FBSyxDQUFDeUYsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUVyRCxJQUFJLENBQUNsRyxJQUFJLEVBQUUsT0FBTyxJQUFJO1lBQ3RCLE1BQU00VSxVQUFVLEdBQUcsTUFBQUEsQ0FBQSxLQUFXO2NBQzdCLElBQUk7Z0JBQ0gzTyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNqQixNQUFNdEcsS0FBSyxDQUFDa0Ysd0JBQXdCLENBQUM7a0JBQUUsR0FBR2hDO2dCQUFNLENBQUUsQ0FBQztnQkFDbkR1TixNQUFNLEVBQUU7ZUFDUixDQUFDLE9BQU90TSxDQUFDLEVBQUU7Z0JBQ1hDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDRixDQUFDLENBQUM7ZUFDaEIsU0FBUztnQkFDVG1DLFdBQVcsQ0FBQyxLQUFLLENBQUM7O1lBRXBCLENBQUM7WUFDRCxNQUFNb0IsT0FBTyxHQUFHQSxDQUFBLEtBQU1HLGFBQWEsQ0FBQ29OLFVBQVUsQ0FBQztZQUMvQyxPQUNDclUsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3NFLE1BQUEsQ0FBQTZQLEtBQUs7Y0FBQzdVLElBQUk7Y0FBQ21GLE9BQU8sRUFBRUE7WUFBTyxHQUMzQjVFLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBZSxHQUM3QnZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGFBQUswRSxLQUFLLENBQUMrSCxNQUFNLENBQUMySCxnQkFBZ0IsQ0FBQ25QLEtBQUssQ0FBTSxFQUM5Q3BGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBO2NBQUtvRixTQUFTLEVBQUM7WUFBTyxHQUNyQnZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLGVBQU8wRSxLQUFLLENBQUMrSCxNQUFNLENBQUMySCxnQkFBZ0IsQ0FBQy9PLFdBQVcsQ0FBUSxDQUNuRCxFQUNOeEYsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUE7Y0FBUW9GLFNBQVMsRUFBQztZQUEwQyxHQUMzRHZGLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RyxXQUFBLENBQUFRLE1BQU07Y0FBQ2QsT0FBTyxFQUFDLFNBQVM7Y0FBQ0UsUUFBUTtjQUFDUSxPQUFPLEVBQUUrSTtZQUFNLEdBQ2hEaEwsS0FBSyxDQUFDK0gsTUFBTSxDQUFDMkgsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBQ0MsTUFBTSxDQUNyQyxFQUNUelUsTUFBQSxDQUFBRSxPQUFBLENBQUFDLGFBQUEsQ0FBQ3VRLFNBQUEsQ0FBQTlKLFFBQVE7Y0FBQ1IsT0FBTyxFQUFDLFNBQVM7Y0FBQ1UsT0FBTyxFQUFFQTtZQUFPLEdBQzFDakMsS0FBSyxDQUFDK0gsTUFBTSxDQUFDMkgsZ0JBQWdCLENBQUNDLE9BQU8sQ0FBQ0UsUUFBUSxDQUNyQyxDQUNILENBQ0osRUFDTjFVLE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RSxHQUFBLENBQUEyTCxnQkFBZ0I7Y0FBQ3pNLFFBQVEsRUFBRUE7WUFBUSxHQUNuQzVELE1BQUEsQ0FBQUUsT0FBQSxDQUFBQyxhQUFBLENBQUN1RSxHQUFBLENBQUE0TCxlQUFlO2NBQUNDLElBQUksRUFBQyxNQUFNO2NBQUNDLE9BQU8sRUFBRTNMLEtBQUssQ0FBQytILE1BQU0sQ0FBQytIO1lBQWdCLEVBQUksQ0FDckQsQ0FDWjtVQUVWIiwiaWdub3JlTGlzdCI6W119