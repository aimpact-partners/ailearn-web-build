System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.14/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.14/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.14/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.14/components/ui", "@aimpact/ailearn-app@0.1.6-dev.14/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/image", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, ConfirmationModal, DraftContainer, SupportingText, OwnerImage, View, __beyond_pkg, hmr;
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
    }, function (_beyondJsReact18Widgets112Page) {
      dependency_2 = _beyondJsReact18Widgets112Page;
    }, function (_aimpactAilearnApp016Dev14MainLayoutWidget) {
      dependency_3 = _aimpactAilearnApp016Dev14MainLayoutWidget;
    }, function (_react2) {
      dependency_4 = _react2;
    }, function (_beyondJsWidgets110Controller) {
      dependency_5 = _beyondJsWidgets110Controller;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_6 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_7 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk110Session) {
      dependency_8 = _aimpactChatSdk110Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_9 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev14WidgetsBreadcrumbWidget) {
      dependency_10 = _aimpactAilearnApp016Dev14WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev14I18nTs) {
      dependency_11 = _aimpactAilearnApp016Dev14I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_12 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev14ComponentsUi) {
      dependency_13 = _aimpactAilearnApp016Dev14ComponentsUi;
    }, function (_aimpactAilearnApp016Dev14ComponentsIcons) {
      dependency_14 = _aimpactAilearnApp016Dev14ComponentsIcons;
    }, function (_pragmateUi100Beta2Components) {
      dependency_15 = _pragmateUi100Beta2Components;
    }, function (_pragmateUi100Beta2Base) {
      dependency_16 = _pragmateUi100Beta2Base;
    }, function (_pragmateUi100Beta2Icons) {
      dependency_17 = _pragmateUi100Beta2Icons;
    }, function (_pragmateUi100Beta2Alert) {
      dependency_18 = _pragmateUi100Beta2Alert;
    }, function (_beyondJsReact18Widgets112Hooks) {
      dependency_19 = _beyondJsReact18Widgets112Hooks;
    }, function (_framerMotion2) {
      dependency_20 = _framerMotion2;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_21 = _pragmateUi100Beta2FormReactSelect;
    }, function (_pragmateUi100Beta2Form) {
      dependency_22 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Image) {
      dependency_23 = _pragmateUi100Beta2Image;
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
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-18-widgets/page', dependency_2], ['@aimpact/ailearn-app/main-layout.widget', dependency_3], ['react', dependency_4], ['@beyond-js/widgets/controller', dependency_5], ['@aimpact/ailearn-sdk/learning-modules', dependency_6], ['@beyond-js/reactive/model', dependency_7], ['@aimpact/chat-sdk/session', dependency_8], ['@beyond-js/kernel/texts', dependency_9], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_10], ['@aimpact/ailearn-app/i18n.ts', dependency_11], ['pragmate-ui/modal', dependency_12], ['@aimpact/ailearn-app/components/ui', dependency_13], ['@aimpact/ailearn-app/components/icons', dependency_14], ['pragmate-ui/components', dependency_15], ['pragmate-ui/base', dependency_16], ['pragmate-ui/icons', dependency_17], ['pragmate-ui/alert', dependency_18], ['@beyond-js/react-18-widgets/hooks', dependency_19], ['framer-motion', dependency_20], ['pragmate-ui/form/react-select', dependency_21], ['pragmate-ui/form', dependency_22], ['pragmate-ui/image', dependency_23], ['@beyond-js/kernel/routing', dependency_24], ['pragmate-ui/list', dependency_25]]);
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
        hash: 1166309534,
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
              if (values.state === 'created') return;
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