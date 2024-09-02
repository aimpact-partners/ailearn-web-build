System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.14/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.14/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.14/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.14/components/ui", "@aimpact/ailearn-app@0.1.6-dev.14/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/form", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, SupportingText, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    DraftContainer: void 0,
    SupportingText: void 0,
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
    }, function (_aimpactAilearnApp016Dev14MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev14MainLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev14WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev14WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev14I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev14I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_13 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev14ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev14ComponentsUi;
    }, function (_aimpactAilearnApp016Dev14ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev14ComponentsIcons;
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
    }, function (_beyondJsKernel019Routing) {
      dependency_24 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2List) {
      dependency_25 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.6.0"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.14"], ["@aimpact/ailearn-app", "0.1.6-dev.14"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['pragmate-ui/form', dependency_23], ['@beyond-js/kernel/routing', dependency_24], ['pragmate-ui/list', dependency_25]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.14/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.14/modules/draft.widget');
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
        hash: 580155341,
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
        hash: 3841864936,
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
        hash: 421351072,
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
              setProcessing(true);
              const owner = await store.getAdministrator(event.target.value);
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
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 3747959623,
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
            (0, _hooks.useBinder)([store], () => setProcessing(store.fetchingSuggestions));
            const onCofirmed = async () => {
              setProcessing(true);
              if (store.model.state === values.state && store.model.objective === values.objective) return;
              await setValues({
                ...values,
                updated: false
              });
              await store.save({
                ...values,
                state: 'created'
              });
              store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              store.setAlert({
                message: texts.setup.messages.save,
                position: 'objective'
              });
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
        hash: 2196216442,
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
            const [processing, setProcessing] = React.useState();
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
            const Control = store.model.state === 'confirmed' ? _management.ActivitiesManagement : _container.DraftContainer;
            const value = {
              texts,
              store,
              processing,
              setProcessing,
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
        "im": "./views/form/container",
        "from": "DraftContainer",
        "name": "DraftContainer"
      }, {
        "im": "./views/form/fields/supporting-text",
        "from": "SupportingText",
        "name": "SupportingText"
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
        (require || prop === 'SupportingText') && _export("SupportingText", SupportingText = require ? require('./views/form/fields/supporting-text').SupportingText : value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJzZXRBbGVydCIsIm1lc3NhZ2UiLCJwb3NpdGlvbiIsImNsZWFyQWxlcnQiLCJ0cmltVGV4dCIsImlucHV0IiwiY2hhckxpbWl0IiwibGVuZ3RoIiwidHJpbW1lZCIsInNsaWNlIiwidGVzdCIsInJlbWFpbmRlciIsImVuZE9mV29yZEluZGV4Iiwic2VhcmNoIiwiUmVhY3QiLCJ1c2VUZXh0c0NhbGxiYWNrIiwiY2FsbGJhY2siLCJzZXRSZWFkeSIsInNldFRleHRzIiwidXNlRWZmZWN0IiwibW9kZWxUZXh0cyIsImlzUmVhZHkiLCJfbW9kYWwiLCJfdWkiLCJDb2luc0FsZXJ0Iiwib25DbG9zZSIsImNvaW5zIiwiQWxlcnRNb2RhbCIsImJ1dHRvbkxhYmVsIiwiYWN0aW9uIiwib25Db25maXJtIiwidGl0bGUiLCJCYXR0ZXJ5IiwicGVyY2VudCIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uIiwiQ29pbnNNb2RhbCIsImZldGNoaW5nIiwic2V0RmV0Y2hpbmciLCJzZXRFcnJvciIsIm1vZGFsIiwiZ2V0Q3JlZGl0cyIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9ob29rcyIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXBkYXRlZCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJhcmdlbnRpbmUiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsImZvcm1UZXh0cyIsInNldHVwIiwiZm9ybSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vZGUiLCJUb3VyU3RlcCIsImFzIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJtZXNzYWdlcyIsIl9zdXBwb3J0aW5nVGV4dCIsIk93bmVyc2hpcEZpZWxkIiwid1RleHRzIiwic2V0UHJvY2Vzc2luZyIsInNldFNlbGVjdGVkIiwic3VwcG9ydGluZ1RleHQiLCJzZXRTdXBwb3J0aW5nVGV4dCIsImNvbnRlbnQiLCJkZWZhdWx0T3B0aW9uIiwiYWRtaW5pc3RyYXRvciIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiYWxlcnRzIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJTdXBwb3J0aW5nVGV4dCIsInZhcmlhbnRDbGFzc01hcCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJ0ZXJ0aWFyeSIsInN1Y2Nlc3MiLCJpbmZvIiwid2FybmluZyIsInJlc3QiLCJ2YXJpYW50Q2xhc3MiLCJjb21iaW5lZENsYXNzTmFtZSIsInRyaW0iLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2xhbmd1YWdlIiwiX3RyaW0iLCJfYWN0aW9uIiwiX3BhdGh3YXkiLCJzZXRTaG93Iiwic3RhdGUiLCJjb250aW51ZSIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsImludmFsaWRGb3JtIiwib25Db2Zpcm1lZCIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImNsc0NvbnRhaW5lciIsIkZvcm0iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJQYXRod2F5R2VuZXJhdGlvbiIsIl9haUJ1dHRvbiIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50IiwiX2NvbnRleHQyIiwiQ29uZmlybWF0aW9uRm9ybSIsIm9uU2F2ZSIsInNldFZpZXciLCJ1c2VNb2RhbENvbnRleHQiLCJyZWZpbmUiLCJNb2RhbENvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsIl90b3RhbEFjdGl2aXRpZXMiLCJBSUdlbmVyYXRpb25Gb3JtIiwibm90ZXMiLCJvbkdlbmVyYXRlIiwiZXZlbnRzIiwiVG90YWxBY3Rpdml0aWVzIiwidGV4dGFyZWEiLCJmbG9hdGluZyIsImdlbmVyYXRlIiwiRGVjaXN0aW9uVHlwZSIsImdlbmVyYXRpb24iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImNoZWNrZWQiLCJhaSIsIm1hbnVhbGx5IiwiTWFudWFsRm9ybSIsInBhdGh3YXkiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsIklucHV0IiwibWFudWFsIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9tYW51YWwiLCJfYWlGb3JtIiwiX3JlcXVlc3RDcmVkaXRzIiwidmlldyIsInN0YXR1cyIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvc3VwcG9ydGluZy10ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2FjdGlvbi50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaXRlbS50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbmZpcm1hdGlvbi50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2V4YW1wbGVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2FpLWZvcm0udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvZGVjaXNpb24tdHlwZS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9tYW51YWwudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvdG90YWwtYWN0aXZpdGllcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9yZXF1ZXN0LWNyZWRpdHMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FB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