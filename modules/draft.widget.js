System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.04/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.0.1/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.04/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.04/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.04/components/ui", "@aimpact/ailearn-app@0.1.6-dev.04/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "@aimpact/chat@1.0.2/shared/hooks", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, dependency_27, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, View, __beyond_pkg, hmr;
  _export({
    Controller: void 0,
    AIButton: void 0,
    AIIconButton: void 0,
    DraftContainer: void 0,
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
    }, function (_aimpactAilearnApp016Dev04MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev04MainLayoutWidget;
    }, function (_react2) {
      dependency_5 = _react2;
    }, function (_beyondJsWidgets110Controller) {
      dependency_6 = _beyondJsWidgets110Controller;
    }, function (_aimpactAilearnSdk100LearningModules) {
      dependency_7 = _aimpactAilearnSdk100LearningModules;
    }, function (_beyondJsReactive120Model) {
      dependency_8 = _beyondJsReactive120Model;
    }, function (_aimpactChatSdk101Session) {
      dependency_9 = _aimpactChatSdk101Session;
    }, function (_beyondJsKernel019Texts) {
      dependency_10 = _beyondJsKernel019Texts;
    }, function (_aimpactAilearnApp016Dev04WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev04WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev04I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev04I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_13 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev04ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev04ComponentsUi;
    }, function (_aimpactAilearnApp016Dev04ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev04ComponentsIcons;
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
    }, function (_aimpactChat102SharedHooks) {
      dependency_22 = _aimpactChat102SharedHooks;
    }, function (_pragmateUi100Beta2FormReactSelect) {
      dependency_23 = _pragmateUi100Beta2FormReactSelect;
    }, function (_pragmateUi100Beta2Form) {
      dependency_24 = _pragmateUi100Beta2Form;
    }, function (_pragmateUi100Beta2Toast) {
      dependency_25 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_26 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2List) {
      dependency_27 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", "1.0.2"], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.0.1"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.4"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.0.11"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.9.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.04"], ["@aimpact/ailearn-app", "0.1.6-dev.04"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['@aimpact/chat/shared/hooks', dependency_22], ['pragmate-ui/form/react-select', dependency_23], ['pragmate-ui/form', dependency_24], ['pragmate-ui/toast', dependency_25], ['@beyond-js/kernel/routing', dependency_26], ['pragmate-ui/list', dependency_27]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.04/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.04/modules/draft.widget');
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
        hash: 1033900772,
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
              this.triggerEvent();
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
              const credits = await org.getCredits();
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
        hash: 2491928272,
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
              setFetching(store?.fetching);
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
        hash: 1189490752,
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
        hash: 2225804980,
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
          function ObjectiveField() {
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
            // Define the delay time in seconds
            const delayTimeInSeconds = 1;
            return _react.default.createElement(_framerMotion.AnimatePresence, {
              mode: "wait"
            }, _react.default.createElement("div", {
              className: "objective-field "
            }, _react.default.createElement(_form.Textarea, {
              onChange: onChange,
              value: values.objective,
              name: "objective",
              placeholder: texts.textArea,
              counter: true,
              maxLength: 500
            }), _react.default.createElement(_alert.AlertRenderer, {
              show: !!store.alert && store.alert.position === 'objective',
              type: "success",
              className: "alert-message alert-message--success alert-fixed",
              message: messages.save
            })));
          }
        }
      });

      /*********************************************
      INTERNAL MODULE: ./views/form/fields/ownership
      *********************************************/

      ims.set('./views/form/fields/ownership', {
        hash: 3278725116,
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
          var _toast = require("pragmate-ui/toast");
          function OwnershipField({
            disabled
          }) {
            const {
              texts: {
                wizard: wTexts
              },
              texts: {
                objectiveTour: tour
              },
              store
            } = (0, _context.useModuleContext)();
            const {
              setValues,
              values,
              texts
            } = (0, _context.useModuleContext)();
            const {
              processing,
              setProcessing
            } = (0, _context.useDraftManagementContext)();
            const [selected, setSelected] = _react.default.useState(null);
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
              isDisabled: store.ownerships.length === 0 || store.saved || disabled
            };
            const onChange = async event => {
              setProcessing(true);
              const owner = await store.getAdministrator(event.target.value);
              setSelected(owner);
              if (owner.coins.modules?.count) {
                const {
                  count
                } = owner.coins.modules;
                const coinTexts = texts.alerts.coins;
                const messages = owner.constructor.name === 'User' ? coinTexts.user : coinTexts.organization;
                const message = count ? messages.available : messages.unavailable;
                const type = count ? 'success' : 'danger';
                _toast.toast[type](message);
                // store.setAlert({ message, type });
              }
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
            }, _react.default.createElement("label", {
              htmlFor: ""
            }, wTexts.schools.label), _react.default.createElement(_reactSelect.ReactSelect, {
              value: value,
              placeholder: wTexts.schools.select,
              name: "owner",
              options: store.ownerships,
              onChange: onChange,
              ...attrs
            })));
          }
        }
      });

      /**********************************
      INTERNAL MODULE: ./views/form/index
      **********************************/

      ims.set('./views/form/index', {
        hash: 595198095,
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
            const isDisabled = !values.owner || !values.audience || !values.duration || !values.objective || !values.language || processing;
            (0, _hooks.useBinder)([store], () => {
              setProcessing(store.fetchingSuggestions);
            });
            const onCofirmed = async () => {
              if (store.model.state === values.state && store.model.objective === values.objective) return;
              await store.save({
                ...values,
                state: 'created'
              });
              store.breadcrumb.lastItem.label = (0, _trim.trimText)(store.model.objective, 15);
              _routing.routing.replaceState({}, undefined, `/modules/management?id=${store.model.id}`);
              store.setAlert({
                message: texts.wizard.messages.save,
                position: 'objective'
              });
            };
            const onSubmit = async () => {
              try {
                setProcessing(true);
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
              className: "wizard-form-header"
            }, React.createElement("h1", null, texts.wizard.introduction.title), React.createElement("span", null, texts.wizard.introduction.subtitle)), React.createElement(_alert.AlertRenderer, {
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
            }), React.createElement("footer", {
              className: "buttons"
            }, React.createElement(_action.SuggestionsAction, null), React.createElement(_ui.TourStep, {
              texts: texts.objectiveTour,
              name: "save"
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
        hash: 3861214077,
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
            const [selected, setSelected] = _react.default.useState(null);
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
        hash: 3791738043,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.DecistionType = DecistionType;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _aiButton = require("../../components/ai-button");
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
            }, actions.cancel), _react.default.createElement(_aiButton.AIButton, {
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
        hash: 540313109,
        creator: function (require, exports) {
          "use strict";

          Object.defineProperty(exports, "__esModule", {
            value: true
          });
          exports.ManualForm = ManualForm;
          var _react = require("react");
          var _components = require("pragmate-ui/components");
          var _aiButton = require("../../components/ai-button");
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
            const [valueSelected, setValueSelected] = _react.default.useState();
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
              label: texts.manual.form.title.label,
              onChange: onChange,
              value: formValues.title ?? '',
              name: "title"
            }), _react.default.createElement(_form.Textarea, {
              label: texts.manual.form.description.label,
              name: "description",
              variant: "floating",
              onChange: onChange,
              value: formValues.description ?? ''
            }), _react.default.createElement("footer", null, _react.default.createElement(_components.Button, {
              variant: "primary",
              bordered: true,
              onClick: onCancel
            }, actions.back), _react.default.createElement(_aiButton.AIButton, {
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
        hash: 4219378715,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJnZXRDcmVkaXRzIiwic2V0QWxlcnQiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJjbGVhckFsZXJ0IiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJjb2lucyIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJtb2RhbCIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9ob29rcyIsIl9ob29rczIiLCJfIiwiRHJhZnRDb250YWluZXIiLCJ0ZXh0c1JlYWR5IiwidXNlVGV4dHMiLCJhY3RpdmVQYW5lbCIsInNldFVwZGF0ZWQiLCJzZXRWYWx1ZXMiLCJpc0ZldGNoaW5nIiwic2V0SXNGZXRjaGluZyIsInVzZUJpbmRlciIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIkZyYWdtZW50IiwiUHJvdmlkZXIiLCJQYWdlQ29udGFpbmVyIiwiRHJhZnRGb3JtIiwiX3JlYWN0U2VsZWN0IiwiQXVkaWVuY2VGaWVsZCIsIm9iamVjdGl2ZVRvdXIiLCJ0b3VyIiwic2VsZWN0IiwidGFyZ2V0Iiwib3B0aW9ucyIsIk9iamVjdCIsImtleXMiLCJhcmdlbnRpbmUiLCJ5ZWFyIiwiaXNEaXNhYmxlZCIsIlJlYWN0U2VsZWN0IiwicGxhY2Vob2xkZXIiLCJMYW5ndWFnZUZpZWxkIiwid2l6YXJkIiwid1RleHRzIiwiX2Zvcm0iLCJPYmplY3RpdmVGaWVsZCIsIm1lc3NhZ2VzIiwiZGVsYXlUaW1lSW5TZWNvbmRzIiwiQW5pbWF0ZVByZXNlbmNlIiwibW9kZSIsIlRleHRhcmVhIiwidGV4dEFyZWEiLCJjb3VudGVyIiwibWF4TGVuZ3RoIiwiX3RvYXN0IiwiT3duZXJzaGlwRmllbGQiLCJzZXRQcm9jZXNzaW5nIiwic2V0U2VsZWN0ZWQiLCJkZWZhdWx0T3B0aW9uIiwic2Nob29scyIsImF0dHJzIiwibW9kdWxlcyIsImNvdW50IiwiY29pblRleHRzIiwiYWxlcnRzIiwib3JnYW5pemF0aW9uIiwiYXZhaWxhYmxlIiwidW5hdmFpbGFibGUiLCJ0b2FzdCIsIlRvdXJTdGVwIiwiYXMiLCJfYW5pbWF0ZWREaXYiLCJfYXVkaWVuY2UiLCJfb3duZXJzaGlwIiwiX29iamVjdGl2ZSIsIl9yb3V0aW5nIiwiX3N1Z2dlc3Rpb25zIiwiX2xhbmd1YWdlIiwiX3RyaW0iLCJfYWN0aW9uIiwiX3BhdGh3YXkiLCJzZXRTaG93Iiwic3RhdGUiLCJjb250aW51ZSIsIm1haW5SZWYiLCJ1c2VEcml2ZXJUb3VyIiwiYnV0dG9ucyIsIm9uQ29maXJtZWQiLCJsYXN0SXRlbSIsInJvdXRpbmciLCJyZXBsYWNlU3RhdGUiLCJjbHNDb250YWluZXIiLCJGb3JtIiwiaW50cm9kdWN0aW9uIiwic3VidGl0bGUiLCJPYmplY3RpdmVTdWdnZXN0aW9ucyIsIlN1Z2dlc3Rpb25zQWN0aW9uIiwiYmxvY2siLCJQcm9jZXNzQ29udGFpbmVyIiwiUGF0aHdheUdlbmVyYXRpb24iLCJfYWlCdXR0b24iLCJ0ZXh0QWN0aW9ucyIsImdlbmVyYXRlSW1wcm92ZW1lbnRzIiwiYW5hbHlzZSIsIl9saXN0IiwiaW1wcm92ZWRPYmplY3RpdmUiLCJzZXRJbXByb3ZlZE9iamVjdGl2ZSIsImlycmVsZXZhbnQiLCJjb250ZXh0VmFsdWUiLCJPYmplY3RpdmVJbXByb3ZlZCIsIlN1Z2dlc3Rpb25zTGlzdCIsIl9pdGVtIiwic3VnZ2VzdGlvbnMiLCJhcHBseSIsIkFycmF5IiwiZnJvbSIsImkiLCJzdWdnZXN0aW9uIiwic2l6ZSIsIkxpc3QiLCJjb250cm9sIiwiT2JqZWN0aXZlU3VnZ2VzdGlvbnNJdGVtIiwicmVtb3ZlU3VnZ2VzdGlvbnMiLCJhcHBseVN1Z2dlc3Rpb25zIiwib25TZWxlY3QiLCJzdG9wUHJvcGFnYXRpb24iLCJwYXJzZUludCIsImRhdGFzZXQiLCJlbGVtZW50cyIsImhhcyIsImRlbGV0ZSIsImFkZCIsIm9yaWdpbiIsInJlZmVyZW5jZSIsImltcHJvdmVkIiwidXBkYXRpbmciLCJzZXRVcGRhdGluZyIsIl9jb250YWluZXIiLCJfbWFuYWdlbWVudCIsIl9jb250ZXh0MiIsIkNvbmZpcm1hdGlvbkZvcm0iLCJvblNhdmUiLCJzZXRWaWV3IiwidXNlTW9kYWxDb250ZXh0IiwicmVmaW5lIiwiTW9kYWxDb250ZXh0IiwiU3VnZ2VzdGlvbkV4YW1wbGVzIiwic2V0Tm90ZXMiLCJvbkJhY2siLCJJdGVtIiwiZXhhbXBsZXMiLCJfdG90YWxBY3Rpdml0aWVzIiwiQUlHZW5lcmF0aW9uRm9ybSIsIm5vdGVzIiwib25HZW5lcmF0ZSIsImV2ZW50cyIsIlRvdGFsQWN0aXZpdGllcyIsInRleHRhcmVhIiwiZmxvYXRpbmciLCJnZW5lcmF0ZSIsIkRlY2lzdGlvblR5cGUiLCJmb3JtVGV4dHMiLCJzZXR1cCIsImdlbmVyYXRpb24iLCJ2YWx1ZVNlbGVjdGVkIiwic2V0VmFsdWVTZWxlY3RlZCIsImNoZWNrZWQiLCJhaSIsIm1hbnVhbGx5IiwiTWFudWFsRm9ybSIsInBhdGh3YXkiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsIklucHV0IiwibWFudWFsIiwiZm9ybSIsImZpcnN0U2VsZWN0ZWQiLCJhdWRpZW5jZUluZGV4IiwiX2V4YW1wbGVzIiwiX2NvbmZpcm1hdGlvbiIsIl9kZWNpc2lvblR5cGUiLCJfbWFudWFsIiwiX2FpRm9ybSIsIl9yZXF1ZXN0Q3JlZGl0cyIsInZpZXciLCJzdGF0dXMiLCJjb250cm9scyIsInNlbGVjdGlvbiIsInJlcXVlc3QiLCJSZXF1ZXN0Q3JlZGl0c0NvbnRhaW5lciIsInZpZXdEZWZpbmVkIiwiaGFuZGxlQ0xvc2UiLCJNb2RhbCIsImNsb3NlQmFja2Ryb3AiLCJvblN1Y2Nlc3MiLCJSZXF1ZXN0Q3JlZGl0c0Zvcm0iLCJvbkNvbnN1bWUiLCJjb25zdW1lQ29pbnMiXSwic291cmNlcyI6WyIvdHMvY29udHJvbGxlci50cyIsIi90cy9tYW5hZ2VtZW50LnRzeCIsIi90cy9zdG9yZS50cyIsIi90cy90cmltLnRzIiwiL3RzL3VzZS10ZXh0cy1jYWxsYmFjay50cyIsIi90cy92aWV3cy9jb2lucy9hbGVydC50c3giLCIvdHMvdmlld3MvY29pbnMvY29pbnMtbW9kYWwudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWktYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2Zvb3Rlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9odG1sLXJlbmRlci50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9vcHRpb25zLnRzIiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvcmFkaW8tYnV0dG9uLnRzeCIsIi90cy92aWV3cy9jb250ZXh0LnRzeCIsIi90cy92aWV3cy9mb3JtL2FuaW1hdGVkLWRpdi50c3giLCIvdHMvdmlld3MvZm9ybS9jb250YWluZXIudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2F1ZGllbmNlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9sYW5ndWFnZS50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vd25lcnNoaXAudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvYWN0aW9uLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2luZGV4LnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL2xpc3QvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pdGVtLnRzeCIsIi90cy92aWV3cy9mb3JtL3N1Z2dlc3Rpb25zL29iamVjdGl2ZS50c3giLCIvdHMvdmlld3MvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29uZmlybWF0aW9uLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZXhhbXBsZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvYWktZm9ybS50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9kZWNpc2lvbi10eXBlLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL21hbnVhbC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy90b3RhbC1hY3Rpdml0aWVzLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2luZGV4LnRzeCIsIi90cy92aWV3cy9wYXRod2F5L3JlcXVlc3QtY3JlZGl0cy50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUks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