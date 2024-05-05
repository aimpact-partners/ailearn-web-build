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
        hash: 2422983164,
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
                _coinsLayout.LayoutBroker.breadcrumb = [[this.texts.breadcrumb.modules, '/modules/list'], [this.texts.breadcrumb.management, '']];
              }
            };
            hide() {
              this.#model = undefined;
              super.ready = false;
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
        hash: 1371185060,
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
          var _coinsLayout = require("@aimpact/ailearn-app/coins-layout.widget");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZU1hbmFnZXIiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX2NvaW5zTGF5b3V0IiwiX3RleHRzIiwiX2JleW9uZF9jb250ZXh0IiwiUmVhY3RpdmVNb2RlbCIsInNhdmVkIiwiaW1wcm92ZW1lbnRzIiwiaGFzQ3JlZGl0cyIsImNyZWRpdHMiLCJ0b3RhbCIsImltcHJvdmVtZW50c1NlbGVjdGVkIiwiU2V0IiwidXNlciIsInNlc3Npb25XcmFwcGVyIiwiY3VycmVudFByb2Nlc3MiLCJvd25lcnNoaXBzIiwib3JnYW5pemF0aW9ucyIsIm1hcCIsIml0ZW0iLCJ2YWx1ZSIsImxhYmVsIiwibmFtZSIsIm1vZHVsZU93bmVyIiwib3duZXIiLCJzZWxlY3RlZCIsImRlZmF1bHRWYWx1ZXMiLCJhdWRpZW5jZSIsImR1cmF0aW9uIiwib2JqZWN0aXZlIiwidG90YWxBY3Rpdml0aWVzIiwibGFuZ3VhZ2UiLCJ2YWx1ZXMiLCJnZXRQcm9wZXJ0aWVzIiwidGV4dHMiLCJDdXJyZW50VGV4dHMiLCJtb2R1bGUiLCJzcGVjaWZpZXIiLCJyZWFkeSIsIm9iamVjdGl2ZXNHZW5lcmF0ZWQiLCJNYXAiLCJjb25zdHJ1Y3RvciIsInJlYWN0aXZlUHJvcHMiLCJvbiIsImxpc3RlblRleHRzIiwidHJpZ2dlckV2ZW50IiwiTGF5b3V0QnJva2VyIiwiYnJlYWRjcnVtYiIsIm1vZHVsZXMiLCJtYW5hZ2VtZW50IiwidW5kZWZpbmVkIiwiY2xlYXIiLCJjbGVhckltcHJvdmVtZW50cyIsInNwZWNzIiwidHlwZSIsIkxlYXJuaW5nTW9kdWxlIiwiYWRkTW9kZWwiLCJjYW5Db25zdW1lQ3JlZGl0cyIsImUiLCJjb25zb2xlIiwiZXJyb3IiLCJsaXN0ZW5lciIsInNhdmUiLCJmZXRjaGluZyIsInNhdmVEcmFmdCIsInNldEJyZWFkY3J1bWIiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZGF0YSIsImdlbmVyYXRlT2JqZWN0aXZlIiwiaGFzIiwic2V0IiwiZ2VuZXJhdGVNb2R1bGVTdWdnZXN0aW9uIiwiZmV0Y2hpbmdEcmFmdCIsImdldE1vZHVsZVN1Z2dlc3Rpb24iLCJ0ZXN0IiwiUmVhY3QiLCJ1c2VUZXh0c0NhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiYWxlcnQiLCJBbGVydE1vZGFsIiwiYnV0dG9uTGFiZWwiLCJhY3Rpb24iLCJvbkNvbmZpcm0iLCJ0aXRsZSIsIkJhdHRlcnkiLCJwZXJjZW50IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb24iLCJDb2luc01vZGFsIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiQWxlcnQiLCJfY29udGV4dCIsIlN0ZXBzRm9vdGVyIiwic3VibWl0TGFiZWwiLCJvblN1Ym1pdCIsImRpc2FibGVkIiwicHJldmlvdXMiLCJzZXRDdXJyZW50IiwiY3VycmVudCIsInVzZU1vZHVsZUNvbnRleHQiLCJzdWJtaXRUZXh0IiwiYmFjayIsInNpemluZyIsIkh0bWxSZW5kZXIiLCJ0YWciLCJDb250cm9sIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZXRPcHRpb25zIiwic2Nob29sIiwidW5pdmVyc2l0eSIsImNvbXBhbnkiLCJicmllZiIsInN0YW5kYXJkIiwiZXh0ZW5kZWQiLCJsYW5ndWFnZXMiLCJlbiIsImVzIiwicHQiLCJmciIsImRlIiwiX29wdGlvbnMiLCJSYWRpb0J1dHRvbiIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaW5kZXgiLCJrZXkiLCJodG1sRm9yIiwiQnV0dG9uR3JvdXAiLCJNb2R1bGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJEcmFmdE1hbmFnZW1lbnRDb250ZXh0IiwidXNlRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsIlN1Z2dlc3Rpb25zQ29udGV4dCIsInVzZVN1Z2dlc3Rpb25zQ29udGV4dCIsIl9mcmFtZXJNb3Rpb24iLCJBbmltYXRlZERpdiIsImNscyIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiX2hvb2tzIiwiX2hvb2tzMiIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJsZW5ndGgiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJHcmFkZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiZ3JhZGVzIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwiRHVyYXRpb25GaWVsZCIsImZpbmQiLCJwYXJzZUludCIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsInN1Ym1pdHRlZCIsIm1lc3NhZ2VzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJJY29uIiwiT3duZXJzaGlwRmllbGQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwiX2FuaW1hdGVkRGl2IiwiX2dyYWRlIiwiX21vZHVsZUxlbmd0aCIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfZXJyb3IiLCJfbW9kYWxBY3Rpdml0aWVzIiwiX2xhbmd1YWdlIiwic2V0U2hvdyIsInNldFN1Ym1pdHRlZCIsInN0YXRlIiwiY29udGludWUiLCJwcm9jZXNzTWVzc2FnZXMiLCJoYXNPd25Qcm9wZXJ0eSIsIm9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwib25TYXZlIiwiZmluYWxWYWx1ZSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUm90YXRpbmdNZXNzYWdlIiwidGltZSIsImNvbnRlbnQiLCJNb2RhbEFjdGl2aXRpZXNHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiaXJyZWxldmFudCIsInN1Z2dlc3Rpb25zIiwiYW5hbHlzZSIsIl9hY3Rpb24iLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic2V0U2VsZWN0ZWQiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwiaXRlbXMiLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsImRhdGFzZXQiLCJlbGVtZW50cyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwiQW5pbWF0ZWRMYWJlbCIsImdsb2JhbFRoaXMiLCJzZXRUaW1lb3V0IiwiQW5pbWF0ZVByZXNlbmNlIiwic3BhbiIsImxheW91dCIsIndpZHRoIiwiQW5pbWF0ZWQiLCJhcyIsIkNvbXBvbmVudCIsIl9uYXZiYXJIZWFkZXIiLCJIZWFkZXIiLCJzaG93QmFyIiwiTmF2YmFySGVhZGVyIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50Iiwib25HZW5lcmF0ZSIsIk1vZGFsIiwibW9kYWxTdWdnZXN0aW9ucyIsImJ1dHRvbnMiLCJtYW51YWwiLCJnZW5lcmF0ZSIsImdlbmVyYXRpbmdNb2R1bGUiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy91c2UtdGV4dHMtY2FsbGJhY2sudHMiLCIvdHMvdmlld3MvY29pbnMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvaW5zL2NvaW5zLW1vZGFsLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FpLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9lcnJvci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9mb290ZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvaHRtbC1yZW5kZXIudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvb3B0aW9ucy50cyIsIi90cy92aWV3cy9jb21wb25lbnRzL3JhZGlvLWJ1dHRvbi50c3giLCIvdHMvdmlld3MvY29udGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9hbmltYXRlZC1kaXYudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vY29udGFpbmVyLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9ncmFkZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvbGFuZ3VhZ2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL21vZHVsZS1sZW5ndGgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb3duZXJzaGlwLnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2hlYWRlci9hbmltYXRlZC1sYWJlbC50c3giLCIvdHMvdmlld3MvaGVhZGVyL2FuaW1hdGVkLnRzeCIsIi90cy92aWV3cy9oZWFkZXIvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9tb2RhbC1hY3Rpdml0aWVzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUEsSUFBQUEsS0FBQSxHQUFBQyxPQUFBO1VBQ0EsSUFBQUMsTUFBQSxHQUFBRCxPQUFBO1VBQ0EsSUFBQUUsTUFBQSxHQUFBRixPQUFBO1VBRU87VUFBVSxNQUNYRyxVQUFXLFNBQVFKLEtBQUEsQ0FBQUsseUJBQXlCO1lBQ2pELENBQUFDLEtBQU07WUFDTkMsV0FBV0EsQ0FBQTtjQUNWLElBQUksQ0FBQyxDQUFBRCxLQUFNLEdBQUcsSUFBSUosTUFBQSxDQUFBTSxZQUFZLEVBQUU7Y0FDaEMsT0FBTyxJQUFJLENBQUMsQ0FBQUYsS0FBTTtZQUNuQjtZQUNBLElBQUlHLE1BQU1BLENBQUE7Y0FDVCxPQUFPTixNQUFBLENBQUFPLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFMLEtBQU0sQ0FBQ00sSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxFQUFFLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUNGLEdBQUcsQ0FBQ0MsRUFBRSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdkU7WUFFQUMsSUFBSUEsQ0FBQTtjQUNILElBQUksQ0FBQyxDQUFBVixLQUFNLENBQUNVLElBQUksRUFBRTtZQUNuQjs7VUFDQUMsT0FBQSxDQUFBYixVQUFBLEdBQUFBLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEJELElBQUFjLE1BQUEsR0FBQWpC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