System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.17/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.17/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.17/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.17/components/ui", "@aimpact/ailearn-app@0.1.6-dev.17/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/image", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, ConfirmationModal, DraftContainer, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    ConfirmationModal: void 0,
    DraftContainer: void 0,
    SupportingText: void 0,
    OwnerImage: void 0,
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
    }, function (_aimpactAilearnApp016Dev17MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev17MainLayoutWidget;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsWidgets110Controller) {
      dependency_6 = _beyondJsWidgets110Controller;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_7 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_8 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk110Session) {
      dependency_9 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev17WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev17WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev17I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev17I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_13 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev17ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev17ComponentsUi;
    }, function (_aimpactAilearnApp016Dev17ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev17ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_16 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Base) {
      dependency_17 = _pragmateUi100Beta2Base;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_18 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_19 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_20 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_21 = _framerMotion2;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_22 = _pragmateUi100Beta2FormReactSelect;
    }, function (_pragmateUi100Beta2Form) {
      dependency_23 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Image) {
      dependency_24 = _pragmateUi100Beta2Image;
    }, function (_beyondJsKernel019Routing) {
      dependency_25 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2List) {
      dependency_26 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.17"], ["@aimpact/ailearn-app", "0.1.6-dev.17"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/image', dependency_24], ['@beyond-js/kernel/routing', dependency_25], ['pragmate-ui/list', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.17/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.17/modules/draft.widget');
      ims = new Map();
      /****************************
      INTERNAL MODULE: ./controller
      ****************************/
      ims.set('./controller', {
        hash: 2145005337,
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
              this.#store = _store.store;
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
        hash: 3076341850,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.store = exports.StoreManager = void 0;
          var _learningModules = require("@aimpact/ailearn-sdk/learning-modules");
          var _model = require("@beyond-js/reactive/model");
          var _session = require("@aimpact/chat-sdk/session");
          var _mainLayout = require("@aimpact/ailearn-app/main-layout.widget");
          var _texts = require("@beyond-js/kernel/texts");
          var _beyond_context = require("beyond_context");
          var _breadcrumb = require("@aimpact/ailearn-app/widgets/breadcrumb.widget");
          var _i18n = require("@aimpact/ailearn-app/i18n.ts");
          class StoreManager extends _model.ReactiveModel {
            isStore = true;
            #model;
            #alert;
            get alert() {
              return this.#alert;
            }
            get globalTexts() {
              return _i18n.globalTexts.texts;
            }
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
              const orgs = this.user.organizations.items;
              return [{
                value: this.user.id,
                label: this.user.displayName
              }, ...orgs.map(item => ({
                value: item.id,
                label: item.name
              }))];
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
              return super.ready && this.#texts.ready && _i18n.globalTexts.ready;
            }
            #objectivesGenerated = new Map();
            constructor() {
              super();
              this.__id = performance.now();
              this.reactiveProps(['fetchingDraft', 'fetchingSuggestions']);
              _i18n.globalTexts.on('change', this.triggerEvent);
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
              this.processing = true;
              _mainLayout.LayoutBroker.addModel(this.#model, true);
              await this.model.saveDraft(specs);
              this.processing = false;
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
                this.fetchingSuggestions = true;
                const data = await this.model.getObjectiveImprovements({
                  objective
                });
                this.#improvements = data;
                this.triggerEvent('change');
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingSuggestions = false;
              }
            }
            async generateObjective({
              objective,
              improvements
            }) {
              try {
                this.#currentProcess = 'changingObjective';
                this.fetchingSuggestions = true;
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
                this.fetchingSuggestions = false;
              }
            }
            async generateModuleSuggestion(specs) {
              try {
                this.#currentProcess = 'generatingDraft';
                this.fetchingDraft = true;
                await this.model.getModuleSuggestion({
                  ...specs
                });
              } catch (e) {
                console.error(e);
              } finally {
                this.#currentProcess = undefined;
                this.fetchingDraft = false;
              }
            }
            async getAdministrator(id) {
              if (this.user.id === id) {
                return this.user;
              }
              const org = this.user.organizations.items.find(item => item.id === id);
              return org;
            }
            setAlert({
              message,
              type,
              position = 'top'
            }) {
              this.#alert = {
                message,
                type,
                position
              };
              this.trigger('alert.changed');
            }
            clearAlert() {
              this.#alert = undefined;
              this.trigger('alert.changed');
            }
          }
          exports.StoreManager = StoreManager;
          const store = exports.store = new StoreManager();
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
        hash: 2552670583,
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
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
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
            ensure,
            ...props
          } = {
            ensure: true
          }) {
            const handleClick = ensure ? () => _mainLayout.LayoutBroker.ensureCredits(onClick) : onClick;
            return _react.default.createElement(_icons2.IconButton, {
              ...props,
              icon: _icons.ICONS.aiStars,
              onClick: handleClick
            }, children);
          }
        }
      });

      /****************************************
      INTERNAL MODULE: ./views/components/alert
      ****************************************/

      ims.set('./views/components/alert', {
        hash: 2743908413,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AlertRenderer = AlertRenderer;
          exports.ErrorRenderer = ErrorRenderer;
          var _react = require("react");
          var _alert = require("pragmate-ui/alert");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          function ErrorRenderer({
            texts,
            error
          }) {
            // if(typeof errors === 'string') errors = [errors];
            return _react.default.createElement(_alert.Alert, {
              variant: "error"
            }, texts[error]);
          }
          function AlertRenderer({
            type = 'success',
            message,
            className,
            time = 3000,
            show = true
          }) {
            className = `alert-message alert-message--${type}${className ? ` ${className}` : ``}`;
            const [remove, setRemove] = _react.default.useState(false);
            const [timer, setTimer] = _react.default.useState(null);
            const {
              store
            } = (0, _context.useModuleContext)();
            _react.default.useEffect(() => {
              if (!show) {
                setTimer(undefined);
                setRemove(undefined);
                return;
              }
              const timer = setTimeout(() => {
                if (show) {
                  setRemove(true);
                }
                store.clearAlert();
              }, time);
              setTimer(timer);
              return () => clearTimeout(timer);
            }, [message, show]);
            if (remove || !show) return null;
            return _react.default.createElement(_framerMotion.motion.div, {
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
              },
              className: className
            }, message);
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
        hash: 2503491862,
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

      /***********************************************
      INTERNAL MODULE: ./views/form/confirmation-modal
      ***********************************************/

      ims.set('./views/form/confirmation-modal', {
        hash: 4051622575,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ConfirmationModal = ConfirmationModal;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _context = require("../context");
          var _image = require("./image");
          var _components = require("pragmate-ui/components");
          /*bundle*/
          function ConfirmationModal({
            onClose,
            onConfirm
          }) {
            let {
              store,
              texts,
              values
            } = (0, _context.useModuleContext)();
            const {
              owner
            } = values;
            const {
              globalTexts
            } = store;
            texts = texts.setup.confirmation;
            const actionTexts = globalTexts.actions;
            const name = owner.constructor.name === 'User' ? owner.displayName : owner.name;
            return _react.default.createElement(_modal.Modal, {
              show: true,
              className: "modal-sm modal-centered",
              onClose: onClose
            }, _react.default.createElement("div", null, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.title), _react.default.createElement("span", null, texts.subtitle)), _react.default.createElement("div", {
              className: "owner-container"
            }, _react.default.createElement(_image.OwnerImage, {
              owner: owner
            }), _react.default.createElement("div", {
              className: "owner-info"
            }, _react.default.createElement("h6", null, name), _react.default.createElement("span", null, texts.ownerDescription))), _react.default.createElement("div", {
              className: "primary-container text-center"
            }, _react.default.createElement("span", null, texts.description)), _react.default.createElement("section", {
              className: "actions__container"
            }, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, actionTexts.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: onConfirm
            }, actionTexts.continue))));
          }
        }
      });

      /**************************************
      INTERNAL MODULE: ./views/form/container
      **************************************/

      ims.set('./views/form/container', {
        hash: 2809561136,
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
          var _beyond_context = require("beyond_context");
          var _ = require("./");
          /*bundle*/
          function DraftContainer({
            store,
            uri
          }) {
            const [textsReady, texts] = (0, _hooks.useTexts)(_beyond_context.module.specifier);
            const [fetching, setFetching] = React.useState(store.fetching);
            const [activePanel] = React.useState(0);
            const [, setUpdated] = React.useState({});
            const [current, setCurrent] = React.useState(0);
            const [values, setValues] = React.useState({
              ...store.values
            });
            const [error, setError] = React.useState();
            const [isFetching, setIsFetching] = React.useState(false);
            const {
              ensureCredits
            } = (0, _context.useDraftManagementContext)();
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              setFetching(store?.fetching);
            });
            if (!textsReady || !store.ready) return null; // TODO: add preload screen (or not
            const onChange = event => {
              setValues({
                ...values,
                [event.currentTarget.name]: event.currentTarget.value,
                updated: true
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
            const cls = `${fetching ? 'is-fetching' : ''}`;
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
        hash: 2222746801,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AudienceField = AudienceField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function AudienceField({
            disabled
          }) {
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
            const isDisabled = {
              isDisabled: store.saved || disabled
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.input.label), _react.default.createElement(_reactSelect.ReactSelect, {
              name: "audience",
              value: values.audience,
              placeholder: texts.input.select,
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/form/fields/language
      ********************************************/

      ims.set('./views/form/fields/language', {
        hash: 3795966877,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.LanguageField = LanguageField;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function LanguageField({
            disabled
          }) {
            const {
              texts,
              store,
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
            const isDisabled = {
              isDisabled: store.saved || disabled
            };
            return _react.default.createElement("div", null, _react.default.createElement("label", {
              htmlFor: ""
            }, texts.languages.select.label), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.languages.select.placeholder,
              value: store.model.language,
              name: "audience",
              options: options,
              onChange: onChange,
              ...isDisabled
            }));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/objective
      *********************************************/

      ims.set('./views/form/fields/objective', {
        hash: 3055597404,
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
          var _alert = require("../../components/alert");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function ObjectiveField() {
            const {
              values,
              texts,
              onChange,
              store
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.form;
            return _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective"
            }, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: formTexts.objective.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement(_alert.AlertRenderer, {
              show: !!store.alert && store.alert.position === 'objective',
              type: "success",
              className: "alert-message alert-message--success alert-fixed",
              message: texts.setup.messages.save
            }))));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 574589775,
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
          var _supportingText = require("./supporting-text");
          function OwnershipField({
            disabled
          } = {}) {
            const {
              texts: {
                setup: {
                  form: wTexts
                }
              },
              texts: {
                objectiveTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              texts
            } = (0, _context.useModuleContext)();
            const {
              setProcessing
            } = (0, _context.useDraftManagementContext)();
            const [selected, setSelected] = _react.default.useState(null);
            const [supportingText, setSupportingText] = _react.default.useState({
              content: '',
              variant: ''
            });
            let defaultOption = {
              value: '',
              label: wTexts.administrator.select
            };
            if (store.model.owner) {
              defaultOption = {
                value: store.model.owner.id,
                label: store.model.owner.name
              };
            }
            const value = store.model.owner?.id;
            const attrs = {
              isDisabled: store.ownerships?.length === 0 || store.saved || disabled
            };
            const onChange = async event => {
              setSupportingText({
                content: '',
                variant: ''
              });
              setProcessing(true);
              const owner = await store.getAdministrator(event.target.value);
              if (owner.constructor.name === 'Organization') {
                await owner.getCredits();
              }
              setSelected(owner);
              if (owner.coins?.modules === undefined) {
                console.error('the user does not have coins data loaded, refresh the page and try again.');
                return;
              }
              const {
                count
              } = owner.coins.modules;
              const messages = texts.alerts.coins;
              const message = count ? messages.available : messages.unavailable;
              const type = count ? 'success' : 'error';
              setSupportingText({
                content: message,
                variant: type
              });
              setValues(values => ({
                ...values,
                owner
              }));
              setProcessing(false);
            };
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.TourStep, {
              texts: tour,
              name: "administrator",
              as: "div",
              className: "administrator"
            }, _react.default.createElement("div", {
              className: "field-container"
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.administrator.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: wTexts.administrator.select,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            }), _react.default.createElement(_supportingText.SupportingText, {
              ...supportingText
            }))));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/form/fields/supporting-text
      ***************************************************/

      ims.set('./views/form/fields/supporting-text', {
        hash: 3724854723,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SupportingText = SupportingText;
          var _react = require("react");
          const variantClassMap = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
            success: 'text-success',
            info: 'text-info',
            error: 'text-error',
            warning: 'text-warning',
            default: 'text-default'
          };
          /*bundle*/
          function SupportingText({
            content,
            variant = 'default',
            className = '',
            ...rest
          }) {
            if (!content) return null;
            const variantClass = variantClassMap[variant] || variantClassMap.default;
            const combinedClassName = `pui-supporting-text ${variantClass} ${className}`.trim();
            return _react.default.createElement("div", {
              className: combinedClassName,
              ...rest
            }, _react.default.createElement("span", null, content));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/image
      **********************************/

      ims.set('./views/form/image', {
        hash: 315420214,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.OwnerImage = OwnerImage;
          var _react = require("react");
          var _image = require("pragmate-ui/image");
          var _icons = require("@aimpact/ailearn-app/components/icons");
          /*bundle*/
          function OwnerImage({
            owner
          }) {
            if (!owner?.photoUrl) {
              return _react.default.createElement(_icons.AppIcon, {
                icon: "school",
                className: "pui-image"
              });
            }
            return _react.default.createElement(_image.Image, {
              src: owner.photoUrl,
              className: "circle"
            });
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 2861465045,
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
          var _ownership = require("./fields/ownership");
          var _objective = require("./fields/objective");
          var _routing = require("@beyond-js/kernel/routing");
          var _components = require("pragmate-ui/components");
          var _form = require("pragmate-ui/form");
          var _suggestions = require("./suggestions");
          var _alert = require("../components/alert");
          var _language = require("./fields/language");
          var _trim = require("../../trim");
          var _action = require("./suggestions/action");
          var _pathway = require("../pathway");
          var _hooks = require("@beyond-js/react-18-widgets/hooks");
          var _confirmationModal = require("./confirmation-modal");
          function DraftForm() {
            const {
              values,
              setValues,
              store,
              texts,
              saved,
              fetching
            } = (0, _context.useModuleContext)();
            const [show, setShow] = React.useState(false);
            const onClose = () => setShow(false);
            const label = store.model.state && saved ? texts.actions.continue : texts.actions.save;
            const {
              ref: mainRef
            } = (0, _ui.useDriverTour)('moduleObjective', store.ready, texts?.objectiveTour?.buttons);
            const [processing, setProcessing] = React.useState(false);
            const invalidForm = !values.owner || !values.audience || !values.objective || !values.language;
            const isDisabled = invalidForm || processing || store.processing;
            const [showConfirmation, setShowConfirmation] = React.useState(false);
            (0, _hooks.useBinder)([store], () => setProcessing(store.fetchingSuggestions));
            const confirmationCallback = async () => {
              await store.save({
                ...values,
                state: 'created'
              });
              store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              setShowConfirmation(false);
              store.setAlert({
                message: texts.setup.messages.save,
                position: 'objective'
              });
            };
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              if (store.model.state === 'created') return;
              setShowConfirmation(true);
              setProcessing(false);
            };
            const onSubmit = async () => {
              try {
                if (processing) return;
                await onCofirmed();
                if (saved && store.model.state === 'created') {
                  setShow(true);
                  return;
                }
              } catch (e) {
                console.error(e);
              } finally {
                setProcessing(false);
              }
            };
            const cls = `form-create-draft__container ${fetching ? 'fetching' : ''} ${processing ? 'is-processing' : ''}`;
            const clsContainer = processing ? 'is-processing' : '';
            return React.createElement("div", {
              ref: mainRef,
              className: clsContainer
            }, React.createElement(_form.Form, {
              className: cls,
              onSubmit: onSubmit
            }, React.createElement(_animatedDiv.AnimatedDiv, null, React.createElement("section", {
              className: "form-body"
            }, React.createElement("header", {
              className: "setup-form-header"
            }, React.createElement("h1", null, texts.setup.title), React.createElement("span", null, texts.setup.subtitle)), React.createElement(_alert.AlertRenderer, {
              type: store.alert?.type,
              message: store.alert?.message,
              show: !!store.alert && store.alert.position === 'top',
              className: "alert--small"
            }), React.createElement("section", {
              className: "wizard-first-step-container"
            }, React.createElement(_ownership.OwnershipField, {
              disabled: processing
            }), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "parameters",
              as: "div",
              className: "parameters-container"
            }, React.createElement(_language.LanguageField, {
              disabled: processing
            }), React.createElement(_audience.AudienceField, {
              disabled: processing
            }))), React.createElement(_ui.TourStep, {
              as: "section",
              texts: texts.objectiveTour,
              name: "objective",
              className: "form-wizard__objective-section relative-container"
            }, React.createElement(_objective.ObjectiveField, null))), React.createElement(_suggestions.ObjectiveSuggestions, {
              setProcessing: setProcessing,
              processing: processing
            }), React.createElement("footer", null, React.createElement(_action.SuggestionsAction, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save",
              className: "save-button__container"
            }, React.createElement(_components.Button, {
              type: "submit",
              block: true,
              disabled: isDisabled,
              variant: "primary"
            }, label)))), React.createElement(_ui.ProcessContainer, {
              fetching: fetching
            })), React.createElement(_pathway.PathwayGeneration, {
              show: show,
              onClose: onClose
            }), showConfirmation && React.createElement(_confirmationModal.ConfirmationModal, {
              onConfirm: confirmationCallback,
              onClose: () => setShowConfirmation(false)
            }));
          }
        }
      });

      /***********************************************
      INTERNAL MODULE: ./views/form/suggestions/action
      ***********************************************/

      ims.set('./views/form/suggestions/action', {
        hash: 704421863,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.SuggestionsAction = SuggestionsAction;
          var _react = require("react");
          var _context = require("../../context");
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
            if (store.improvements) return null;
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_aiButton.AIButton, {
              disabled: !saved || !store.hasCredits,
              onClick: generateImprovements,
              variant: "primary",
              bordered: true
            }, textActions.analyse));
          }
        }
      });

      /**********************************************
      INTERNAL MODULE: ./views/form/suggestions/index
      **********************************************/

      ims.set('./views/form/suggestions/index', {
        hash: 3554607872,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ObjectiveSuggestions = ObjectiveSuggestions;
          var _react = require("react");
          var _context = require("../../context");
          var _objective = require("./objective");
          var _list = require("./list");
          function ObjectiveSuggestions({
            processing,
            setProcessing
          }) {
            const {
              store
            } = (0, _context.useModuleContext)();
            const [improvedObjective, setImprovedObjective] = _react.default.useState(false);
            // if there are no improvements, show the action to generate suggestions
            if (!store.improvements || store.improvements.irrelevant) return null;
            const contextValue = {
              improvedObjective,
              setImprovedObjective,
              processing,
              setProcessing
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
        hash: 3565375712,
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
        hash: 4225891460,
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
            const [updating, setUpdating] = _react.default.useState(false);
            if (!improvements || improvedObjective) return null;
            const onClick = async event => {
              setUpdating(true);
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
              setUpdating(false);
            };
            const cls = `objective-suggestion ${updating ? 'is-processing' : ''}`;
            return _react.default.createElement("div", {
              className: cls
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
        hash: 2212543045,
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
            const [processing, setProcessing] = React.useState(false);
            const [, setFetching] = React.useState(store.fetching);
            const [, setUpdated] = React.useState({});
            const {
              texts
            } = store;
            (0, _hooks.useBinder)([store], () => {
              setUpdated({});
              // setFetching(store?.fetching);
            });
            if (!store.ready) return null; // TODO: add preload screen (or not
            const value = {
              texts,
              store,
              processing,
              setProcessing,
              ensureCredits: _mainLayout.LayoutBroker.ensureCredits
            };
            return React.createElement(React.Fragment, null, React.createElement(_context.DraftManagementContext.Provider, {
              value: value
            }, store.model.state === 'confirmed' ? React.createElement(_management.ActivitiesManagement, {
              store: store,
              uri: props.uri
            }) : React.createElement(_container.DraftContainer, {
              store: store,
              uri: props.uri
            })));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/confirmation
      ********************************************/

      ims.set('./views/pathway/confirmation', {
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

      /***************************************
      INTERNAL MODULE: ./views/pathway/context
      ***************************************/

      ims.set('./views/pathway/context', {
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

      /****************************************
      INTERNAL MODULE: ./views/pathway/examples
      ****************************************/

      ims.set('./views/pathway/examples', {
        hash: 4146255957,
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

      /*********************************************
      INTERNAL MODULE: ./views/pathway/forms/ai-form
      *********************************************/

      ims.set('./views/pathway/forms/ai-form', {
        hash: 1544091719,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.AIGenerationForm = AIGenerationForm;
          var _react = require("react");
          var _form = require("pragmate-ui/form");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _totalActivities = require("./total-activities");
          function AIGenerationForm({}) {
            const {
              texts,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            const {
              setView,
              notes,
              setNotes
            } = (0, _context2.useModalContext)();
            const {
              store
            } = (0, _context.useModuleContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            const onGenerate = async () => {
              try {
                setFetching(true);
                await store.save({
                  ...values
                });
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
            const events = {
              onChange: event => {
                setNotes(event.currentTarget.value);
              },
              onClick: onGenerate,
              setView: () => setView('examples'),
              onBack: () => setView('selection')
            };
            return _react.default.createElement("div", {
              className: "modal__form"
            }, _react.default.createElement(_form.Form, {
              onSubmit: events.onClick
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, texts.refine.activities.title)), _react.default.createElement(_totalActivities.TotalActivities, null), _react.default.createElement(_form.Textarea, {
              label: texts.refine.textarea.label,
              name: "observations",
              value: notes,
              floating: true,
              onChange: events.onChange,
              placeholder: texts.refine.textarea.placeholder
            })), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: events.onBack
            }, texts.actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              onClick: events.onClick
            }, texts.actions.generate)), _react.default.createElement(_ui.ProcessContainer, {
              fetching: fetching
            }));
          }
        }
      });

      /***************************************************
      INTERNAL MODULE: ./views/pathway/forms/decision-type
      ***************************************************/

      ims.set('./views/pathway/forms/decision-type', {
        hash: 1447804562,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          function DecistionType({}) {
            const {
              texts,
              store
            } = (0, _context.useModuleContext)();
            const {
              onClose
            } = (0, _context2.useModalContext)();
            const formTexts = texts.setup.generation;
            const actions = texts.setup.actions;
            const [valueSelected, setValueSelected] = _react.default.useState();
            const {
              setView
            } = (0, _context2.useModalContext)();
            const onChange = event => {
              const {
                value
              } = event.currentTarget;
              setValueSelected(value);
            };
            const onClick = () => {
              if (valueSelected === 'yes' && !store.model.credits.total) {
                setView('request');
                return;
              }
              setView(valueSelected === 'yes' ? 'ai' : 'manual');
            };
            return _react.default.createElement("div", {
              className: "modal__form"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, formTexts.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, formTexts.subtitle))), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'yes',
              onChange: onChange,
              label: formTexts.options.ai,
              value: "yes",
              name: "generationWay"
            }), _react.default.createElement(_ui.RadioButton, {
              checked: valueSelected === 'manually',
              onChange: onChange,
              label: formTexts.options.manually,
              value: "manually",
              name: "generationWay"
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onClose
            }, actions.cancel), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !valueSelected,
              onClick: onClick
            }, actions.continue)));
          }
        }
      });

      /********************************************
      INTERNAL MODULE: ./views/pathway/forms/manual
      ********************************************/

      ims.set('./views/pathway/forms/manual', {
        hash: 3962229241,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _context = require("../../context");
          var _context2 = require("../context");
          var _form = require("pragmate-ui/form");
          function ManualForm({}) {
            let {
              texts,
              store,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            const formTexts = texts.setup.generation;
            const actions = store.globalTexts.actions;
            const {
              setView
            } = (0, _context2.useModalContext)();
            const [fetching, setFetching] = _react.default.useState(false);
            texts = texts.pathway;
            const [formValues, setFormValues] = _react.default.useState({
              title: '',
              description: ''
            });
            const onSubmit = async () => {
              try {
                setFetching(true);
                setValues({
                  ...values,
                  title: formValues.title,
                  description: formValues.description
                });
                await store.save({
                  ...values,
                  title: formValues.title,
                  description: formValues.description,
                  state: 'confirmed'
                });
              } catch (e) {
                console.error(e);
              } finally {
                setFetching(false);
              }
            };
            const onChange = event => {
              const {
                value,
                name
              } = event.currentTarget;
              setFormValues({
                ...formValues,
                [name]: value
              });
            };
            const onCancel = () => setView('selection');
            return _react.default.createElement("div", {
              className: "modal__form"
            }, _react.default.createElement("header", null, _react.default.createElement("h3", null, formTexts.title), _react.default.createElement("div", {
              className: "description__content"
            }, _react.default.createElement("span", null, formTexts.subtitle))), _react.default.createElement(_form.Form, {
              onSubmit: onSubmit
            }, _react.default.createElement(_form.Input, {
              label: texts.manual.title.label,
              onChange: onChange,
              value: formValues.title ?? '',
              name: "title"
            }), _react.default.createElement(_form.Textarea, {
              label: texts.manual.description.label,
              name: "description",
              variant: "floating",
              onChange: onChange,
              value: formValues.description ?? ''
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actions.back), _react.default.createElement(_components.Button, {
              variant: "primary",
              disabled: !formValues.description || !formValues.title,
              onClick: onSubmit
            }, actions.continue))));
          }
        }
      });

      /******************************************************
      INTERNAL MODULE: ./views/pathway/forms/total-activities
      ******************************************************/

      ims.set('./views/pathway/forms/total-activities', {
        hash: 1980924174,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.TotalActivities = TotalActivities;
          var _react = require("react");
          var _reactSelect = require("pragmate-ui/form/react-select");
          var _context = require("../../context");
          function TotalActivities() {
            let {
              store,
              texts,
              values,
              setValues
            } = (0, _context.useModuleContext)();
            // access to the texts object from the context
            texts = texts.pathway.ai;
            const disabled = {};
            const options = [{
              value: 15,
              label: texts.form.size.items.brief,
              totalActivities: 3
            }, {
              value: 45,
              label: texts.form.size.items.standard,
              totalActivities: 5
            }, {
              value: 60,
              label: texts.form.size.items.extended,
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
            }, texts.form.size.placeholder), _react.default.createElement(_reactSelect.ReactSelect, {
              placeholder: texts.form.size.placeholder,
              onChange: onChange,
              name: "duration",
              value: values.duration,
              ...disabled,
              options: options
            }));
          }
        }
      });

      /*************************************
      INTERNAL MODULE: ./views/pathway/index
      *************************************/

      ims.set('./views/pathway/index', {
        hash: 3635279439,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.PathwayGeneration = PathwayGeneration;
          var _react = require("react");
          var _modal = require("pragmate-ui/modal");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("../context");
          var _framerMotion = require("framer-motion");
          var _context2 = require("./context");
          var _examples = require("./examples");
          var _alert = require("../components/alert");
          var _confirmation = require("./confirmation");
          var _decisionType = require("./forms/decision-type");
          var _manual = require("./forms/manual");
          var _aiForm = require("./forms/ai-form");
          var _requestCredits = require("./request-credits");
          function PathwayGeneration({
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
            const controls = {
              confirm: _confirmation.ConfirmationForm,
              selection: _decisionType.DecistionType,
              ai: _aiForm.AIGenerationForm,
              manual: _manual.ManualForm,
              examples: _examples.SuggestionExamples,
              request: _requestCredits.RequestCreditsContainer
            };
            const viewDefined = !!improvements && !view ? 'confirm' : !view ? 'selection' : view;
            const Control = controls[viewDefined];
            const handleCLose = () => {
              setNotes('');
              setView(undefined);
              onClose();
            };
            return _react.default.createElement(_modal.Modal, {
              className: "module-setup__modal",
              show: true,
              onClose: handleCLose,
              closeBackdrop: false
            }, _react.default.createElement(_alert.ErrorRenderer, {
              error: error,
              texts: texts.refine.errors
            }), _react.default.createElement(_context2.ModalContext.Provider, {
              value: {
                view,
                onClose: () => {
                  setNotes('');
                  setView(undefined);
                  onClose();
                },
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

      /***********************************************
      INTERNAL MODULE: ./views/pathway/request-credits
      ***********************************************/

      ims.set('./views/pathway/request-credits', {
        hash: 499826368,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.RequestCreditsContainer = RequestCreditsContainer;
          var _react = require("react");
          var _ui = require("@aimpact/ailearn-app/components/ui");
          var _context = require("./context");
          var _context2 = require("../context");
          function RequestCreditsContainer() {
            const {
              onClose,
              setView
            } = (0, _context.useModalContext)();
            const {
              store
            } = (0, _context2.useModuleContext)();
            const texts = {
              ...store.globalTexts
            };
            texts.actions.cancel = store.globalTexts.actions.back;
            const onCancel = () => setView('selection');
            const onSuccess = () => setView('ai');
            return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_ui.RequestCreditsForm, {
              onConsume: store.model.consumeCoins,
              globalTexts: texts,
              owner: store.model.owner,
              onClose: onClose,
              onCancel: onCancel,
              onSuccess: onSuccess
            }));
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
        "im": "./views/form/confirmation-modal",
        "from": "ConfirmationModal",
        "name": "ConfirmationModal"
      }, {
        "im": "./views/form/container",
        "from": "DraftContainer",
        "name": "DraftContainer"
      }, {
        "im": "./views/form/fields/supporting-text",
        "from": "SupportingText",
        "name": "SupportingText"
      }, {
        "im": "./views/form/image",
        "from": "OwnerImage",
        "name": "OwnerImage"
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
        (require || prop === 'ConfirmationModal') && _export("ConfirmationModal", ConfirmationModal = require ? require('./views/form/confirmation-modal').ConfirmationModal : value);
        (require || prop === 'DraftContainer') && _export("DraftContainer", DraftContainer = require ? require('./views/form/container').DraftContainer : value);
        (require || prop === 'SupportingText') && _export("SupportingText", SupportingText = require ? require('./views/form/fields/supporting-text').SupportingText : value);
        (require || prop === 'OwnerImage') && _export("OwnerImage", OwnerImage = require ? require('./views/form/image').OwnerImage : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwidHJpZ2dlckV2ZW50IiwibGlzdGVuVGV4dHMiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiUmVhY3QiLCJ1c2VUZXh0c0NhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9pbWFnZSIsIkNvbmZpcm1hdGlvbk1vZGFsIiwic2V0dXAiLCJjb25maXJtYXRpb24iLCJhY3Rpb25UZXh0cyIsIk1vZGFsIiwic3VidGl0bGUiLCJPd25lckltYWdlIiwib3duZXJEZXNjcmlwdGlvbiIsImNvbnRpbnVlIiwiX2hvb2tzIiwiXyIsIkRyYWZ0Q29udGFpbmVyIiwidGV4dHNSZWFkeSIsInVzZVRleHRzIiwiYWN0aXZlUGFuZWwiLCJzZXRVcGRhdGVkIiwic2V0VmFsdWVzIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJ1c2VCaW5kZXIiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJ1cGRhdGVkIiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwiZm9ybVRleHRzIiwiZm9ybSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJUb3VyU3RlcCIsImFzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJtZXNzYWdlcyIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwic2V0UHJvY2Vzc2luZyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJwaG90b1VybCIsIkFwcEljb24iLCJJbWFnZSIsInNyYyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfbGFuZ3VhZ2UiLCJfdHJpbSIsIl9hY3Rpb24iLCJfcGF0aHdheSIsIl9jb25maXJtYXRpb25Nb2RhbCIsInNldFNob3ciLCJzdGF0ZSIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsImludmFsaWRGb3JtIiwic2hvd0NvbmZpcm1hdGlvbiIsInNldFNob3dDb25maXJtYXRpb24iLCJjb25maXJtYXRpb25DYWxsYmFjayIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsIm9uQ29maXJtZWQiLCJjbHNDb250YWluZXIiLCJGb3JtIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnMiLCJTdWdnZXN0aW9uc0FjdGlvbiIsImJsb2NrIiwiUHJvY2Vzc0NvbnRhaW5lciIsIlBhdGh3YXlHZW5lcmF0aW9uIiwiX2FpQnV0dG9uIiwidGV4dEFjdGlvbnMiLCJnZW5lcmF0ZUltcHJvdmVtZW50cyIsImFuYWx5c2UiLCJfbGlzdCIsImltcHJvdmVkT2JqZWN0aXZlIiwic2V0SW1wcm92ZWRPYmplY3RpdmUiLCJpcnJlbGV2YW50IiwiY29udGV4dFZhbHVlIiwiT2JqZWN0aXZlSW1wcm92ZWQiLCJTdWdnZXN0aW9uc0xpc3QiLCJfaXRlbSIsInN1Z2dlc3Rpb25zIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJpIiwic3VnZ2VzdGlvbiIsInNpemUiLCJMaXN0IiwiY29udHJvbCIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zSXRlbSIsInJlbW92ZVN1Z2dlc3Rpb25zIiwiYXBwbHlTdWdnZXN0aW9ucyIsIm9uU2VsZWN0Iiwic3RvcFByb3BhZ2F0aW9uIiwicGFyc2VJbnQiLCJkYXRhc2V0IiwiZWxlbWVudHMiLCJoYXMiLCJkZWxldGUiLCJhZGQiLCJvcmlnaW4iLCJyZWZlcmVuY2UiLCJpbXByb3ZlZCIsInVwZGF0aW5nIiwic2V0VXBkYXRpbmciLCJfY29udGFpbmVyIiwiX21hbmFnZW1lbnQiLCJfY29udGV4dDIiLCJDb25maXJtYXRpb25Gb3JtIiwib25TYXZlIiwic2V0VmlldyIsInVzZU1vZGFsQ29udGV4dCIsInJlZmluZSIsIk1vZGFsQ29udGV4dCIsIlN1Z2dlc3Rpb25FeGFtcGxlcyIsInNldE5vdGVzIiwib25CYWNrIiwiSXRlbSIsImV4YW1wbGVzIiwiX3RvdGFsQWN0aXZpdGllcyIsIkFJR2VuZXJhdGlvbkZvcm0iLCJub3RlcyIsIm9uR2VuZXJhdGUiLCJldmVudHMiLCJUb3RhbEFjdGl2aXRpZXMiLCJ0ZXh0YXJlYSIsImZsb2F0aW5nIiwiZ2VuZXJhdGUiLCJEZWNpc3Rpb25UeXBlIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwicGF0aHdheSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiSW5wdXQiLCJtYW51YWwiLCJmaXJzdFNlbGVjdGVkIiwiYXVkaWVuY2VJbmRleCIsIl9leGFtcGxlcyIsIl9jb25maXJtYXRpb24iLCJfZGVjaXNpb25UeXBlIiwiX21hbnVhbCIsIl9haUZvcm0iLCJfcmVxdWVzdENyZWRpdHMiLCJ2aWV3Iiwic3RhdHVzIiwiY29udHJvbHMiLCJzZWxlY3Rpb24iLCJyZXF1ZXN0IiwiUmVxdWVzdENyZWRpdHNDb250YWluZXIiLCJ2aWV3RGVmaW5lZCIsImhhbmRsZUNMb3NlIiwiY2xvc2VCYWNrZHJvcCIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbmZpcm1hdGlvbi1tb2RhbC50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL3N1cHBvcnRpbmctdGV4dC50c3giLCIvdHMvdmlld3MvZm9ybS9pbWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGlu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