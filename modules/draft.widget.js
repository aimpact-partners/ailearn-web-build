System.register(["@beyond-js/widgets@1.1.0/render", "@beyond-js/kernel@0.1.9/bundle", "@beyond-js/kernel@0.1.9/styles", "@beyond-js/react-18-widgets@1.1.2/page", "@aimpact/ailearn-app@0.1.6-dev.07/main-layout.widget", "react@18.2.0", "@beyond-js/widgets@1.1.0/controller", "@aimpact/ailearn-sdk@1.0.0/learning-modules", "@beyond-js/reactive@1.2.0/model", "@aimpact/chat-sdk@1.1.0/session", "@beyond-js/kernel@0.1.9/texts", "@aimpact/ailearn-app@0.1.6-dev.07/widgets/breadcrumb.widget", "@aimpact/ailearn-app@0.1.6-dev.07/i18n.ts", "pragmate-ui@1.0.0-beta.2/modal", "@aimpact/ailearn-app@0.1.6-dev.07/components/ui", "@aimpact/ailearn-app@0.1.6-dev.07/components/icons", "pragmate-ui@1.0.0-beta.2/components", "pragmate-ui@1.0.0-beta.2/base", "pragmate-ui@1.0.0-beta.2/icons", "pragmate-ui@1.0.0-beta.2/alert", "@beyond-js/react-18-widgets@1.1.2/hooks", "framer-motion@10.18.0", "pragmate-ui@1.0.0-beta.2/form/react-select", "pragmate-ui@1.0.0-beta.2/form", "pragmate-ui@1.0.0-beta.2/toast", "@beyond-js/kernel@0.1.9/routing", "pragmate-ui@1.0.0-beta.2/list"], function (_export, _context3) {
  "use strict";

  var dependency_0, dependency_1, dependency_2, dependency_3, dependency_4, dependency_5, dependency_6, dependency_7, dependency_8, dependency_9, dependency_10, dependency_11, dependency_12, dependency_13, dependency_14, dependency_15, dependency_16, dependency_17, dependency_18, dependency_19, dependency_20, dependency_21, dependency_22, dependency_23, dependency_24, dependency_25, dependency_26, bimport, __Bundle, __pkg, ims, Controller, AIButton, AIIconButton, DraftContainer, View, __beyond_pkg, hmr;
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
    }, function (_aimpactAilearnApp016Dev07MainLayoutWidget) {
      dependency_4 = _aimpactAilearnApp016Dev07MainLayoutWidget;
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
    }, function (_aimpactAilearnApp016Dev07WidgetsBreadcrumbWidget) {
      dependency_11 = _aimpactAilearnApp016Dev07WidgetsBreadcrumbWidget;
    }, function (_aimpactAilearnApp016Dev07I18nTs) {
      dependency_12 = _aimpactAilearnApp016Dev07I18nTs;
    }, function (_pragmateUi100Beta2Modal) {
      dependency_13 = _pragmateUi100Beta2Modal;
    }, function (_aimpactAilearnApp016Dev07ComponentsUi) {
      dependency_14 = _aimpactAilearnApp016Dev07ComponentsUi;
    }, function (_aimpactAilearnApp016Dev07ComponentsIcons) {
      dependency_15 = _aimpactAilearnApp016Dev07ComponentsIcons;
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
    }, function (_pragmateUi100Beta2Toast) {
      dependency_24 = _pragmateUi100Beta2Toast;
    }, function (_beyondJsKernel019Routing) {
      dependency_25 = _beyondJsKernel019Routing;
    }, function (_pragmateUi100Beta2List) {
      dependency_26 = _pragmateUi100Beta2List;
    }],
    execute: function () {
      bimport = specifier => {
        const dependencies = new Map([["@aimpact/ailearn-sdk", "1.0.0"], ["@aimpact/chat", null], ["@aimpact/auth", "0.0.1"], ["@aimpact/chat-sdk", "1.1.0"], ["@aimpact/media-manager", "0.0.1-beta.1"], ["@beyond-js/reactive", "1.2.0"], ["pragmate-ui", "1.0.0-beta.2"], ["@aimpact/http-suite", "0.0.1"], ["@beyond-js/widgets", "1.1.0"], ["@beyond-js/events", "0.0.7"], ["@beyond-js/routing", "0.0.1"], ["@beyond-js/react-18-widgets", "1.1.2"], ["@beyond-js/backend", "0.1.9"], ["@beyond-js/kernel", "0.1.9"], ["apexcharts", "3.48.0"], ["bourbon", "7.3.0"], ["dayjs", "1.11.10"], ["dexie", "3.2.7"], ["dompurify", "3.1.6"], ["driver.js", "1.3.1"], ["framer-motion", "10.18.0"], ["highlight.js", "11.10.0"], ["is-mobile", "4.0.0"], ["js-confetti", "0.12.0"], ["katex", "0.16.11"], ["markdown-it", "14.1.0"], ["markdown-it-katex", "2.0.3"], ["markdown-it-math", "4.1.1"], ["marked", "5.1.2"], ["marked-gfm-heading-id", "3.1.3"], ["marked-highlight", "2.1.1"], ["marked-mangle", "1.1.7"], ["media-suite", "0.0.4"], ["perfect-scrollbar", "1.5.5"], ["prism-react-renderer", "1.3.5"], ["prism-themes", "1.9.0"], ["prismjs", "1.29.0"], ["react-icons", "5.2.1"], ["react-katex", "3.0.1"], ["react-syntax-highlighter", "15.5.0"], ["simplebar-react", "3.2.6"], ["socket.io-client", "4.7.5"], ["tippy.js", "6.3.7"], ["wavesurfer.js", "7.8.4"], ["@beyond-js/local", "0.1.3"], ["@firebase/auth", "1.7.3"], ["@types/react", "18.2.69"], ["@types/react-dom", "18.2.22"], ["firebase", "10.12.0"], ["firebase-admin", "12.1.0"], ["react-is", "16.13.1"], ["react-select", "5.8.0"], ["swiper", "8.4.7"], ["@aimpact/ailearn-app", "0.1.6-dev.07"], ["@aimpact/ailearn-app", "0.1.6-dev.07"]]);
        return globalThis.bimport(globalThis.bimport.resolve(specifier, dependencies));
      };
      ({
        Bundle: __Bundle
      } = dependency_1);
      __pkg = new __Bundle({
        "module": {
          "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/modules/draft",
          "multibundle": true
        },
        "type": "widget"
      }, _context3.meta.url).package();
      ;
      __pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/kernel/styles', dependency_2], ['@beyond-js/react-18-widgets/page', dependency_3], ['@aimpact/ailearn-app/main-layout.widget', dependency_4], ['react', dependency_5], ['@beyond-js/widgets/controller', dependency_6], ['@aimpact/ailearn-sdk/learning-modules', dependency_7], ['@beyond-js/reactive/model', dependency_8], ['@aimpact/chat-sdk/session', dependency_9], ['@beyond-js/kernel/texts', dependency_10], ['@aimpact/ailearn-app/widgets/breadcrumb.widget', dependency_11], ['@aimpact/ailearn-app/i18n.ts', dependency_12], ['pragmate-ui/modal', dependency_13], ['@aimpact/ailearn-app/components/ui', dependency_14], ['@aimpact/ailearn-app/components/icons', dependency_15], ['pragmate-ui/components', dependency_16], ['pragmate-ui/base', dependency_17], ['pragmate-ui/icons', dependency_18], ['pragmate-ui/alert', dependency_19], ['@beyond-js/react-18-widgets/hooks', dependency_20], ['framer-motion', dependency_21], ['pragmate-ui/form/react-select', dependency_22], ['pragmate-ui/form', dependency_23], ['pragmate-ui/toast', dependency_24], ['@beyond-js/kernel/routing', dependency_25], ['pragmate-ui/list', dependency_26]]);
      brequire('@beyond-js/widgets/render').widgets.register([{
        "name": "app-module-objective-management",
        "vspecifier": "@aimpact/ailearn-app@0.1.6-dev.07/modules/draft.widget",
        "is": "page",
        "route": "/modules/management",
        "layout": "main-layout"
      }]);
      brequire('@beyond-js/kernel/styles').styles.register('@aimpact/ailearn-app@0.1.6-dev.07/modules/draft.widget');
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
        hash: 932975775,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcGFnZSIsInJlcXVpcmUiLCJfc3RvcmUiLCJfdmlld3MiLCJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJXaWRnZXQiLCJWaWV3Iiwic2hvdyIsImxvYWQiLCJ1cmkiLCJxcyIsImdldCIsImhpZGUiLCJleHBvcnRzIiwiX3JlYWN0IiwiQWN0aXZpdGllc01hbmFnZW1lbnQiLCJhY3Rpdml0eUlkIiwic2V0QWN0aXZpdHlJZCIsImRlZmF1bHQiLCJ1c2VTdGF0ZSIsInJlZiIsInVzZVJlZiIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsIm1vZGVsIiwiX2xlYXJuaW5nTW9kdWxlcyIsIl9tb2RlbCIsIl9zZXNzaW9uIiwiX21haW5MYXlvdXQiLCJfdGV4dHMiLCJfYmV5b25kX2NvbnRleHQiLCJfYnJlYWRjcnVtYiIsIl9pMThuIiwiU3RvcmVNYW5hZ2VyIiwiUmVhY3RpdmVNb2RlbCIsImlzU3RvcmUiLCJhbGVydCIsImdsb2JhbFRleHRzIiwidGV4dHMiLCJzYXZlZCIsImltcHJvdmVtZW50cyIsImhhc0NyZWRpdHMiLCJjcmVkaXRzIiwidG90YWwiLCJpbXByb3ZlbWVudHNTZWxlY3RlZCIsIlNldCIsInVzZXIiLCJzZXNzaW9uV3JhcHBlciIsImJyZWFkY3J1bWIiLCJicmVhZGNydW1iU3RvcmUiLCJjdXJyZW50UHJvY2VzcyIsIm93bmVyc2hpcHMiLCJvcmdzIiwib3JnYW5pemF0aW9ucyIsIml0ZW1zIiwidmFsdWUiLCJsYWJlbCIsImRpc3BsYXlOYW1lIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJtb2R1bGVPd25lciIsIm93bmVyIiwic2VsZWN0ZWQiLCJkZWZhdWx0VmFsdWVzIiwiYXVkaWVuY2UiLCJkdXJhdGlvbiIsIm9iamVjdGl2ZSIsInRvdGFsQWN0aXZpdGllcyIsImxhbmd1YWdlIiwidmFsdWVzIiwiZ2V0UHJvcGVydGllcyIsIkN1cnJlbnRUZXh0cyIsIm1vZHVsZSIsInNwZWNpZmllciIsInJlYWR5Iiwib2JqZWN0aXZlc0dlbmVyYXRlZCIsIk1hcCIsImNvbnN0cnVjdG9yIiwiX19pZCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVhY3RpdmVQcm9wcyIsIm9uIiwibGlzdGVuVGV4dHMiLCJ0cmlnZ2VyRXZlbnQiLCJ1bmRlZmluZWQiLCJMYXlvdXRCcm9rZXIiLCJjbGVhciIsImNsZWFySW1wcm92ZW1lbnRzIiwic3BlY3MiLCJ0eXBlIiwiTGVhcm5pbmdNb2R1bGUiLCJhZGRNb2RlbCIsImNhbkNvbnN1bWVDcmVkaXRzIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImxpc3RlbmVyIiwic2F2ZSIsInByb2Nlc3NpbmciLCJzYXZlRHJhZnQiLCJjbGVhbiIsImFjdGl2aXRpZXMiLCJ0cmlnZ2VyIiwiZ2V0T2JqZWN0aXZlSW1wcm92ZW1lbnRzIiwiZmV0Y2hpbmdTdWdnZXN0aW9ucyIsImRhdGEiLCJnZW5lcmF0ZU9iamVjdGl2ZSIsInNldCIsImdlbmVyYXRlTW9kdWxlU3VnZ2VzdGlvbiIsImZldGNoaW5nRHJhZnQiLCJnZXRNb2R1bGVTdWdnZXN0aW9uIiwiZ2V0QWRtaW5pc3RyYXRvciIsIm9yZyIsImZpbmQiLCJnZXRDcmVkaXRzIiwic2V0QWxlcnQiLCJtZXNzYWdlIiwicG9zaXRpb24iLCJjbGVhckFsZXJ0IiwidHJpbVRleHQiLCJpbnB1dCIsImNoYXJMaW1pdCIsImxlbmd0aCIsInRyaW1tZWQiLCJzbGljZSIsInRlc3QiLCJyZW1haW5kZXIiLCJlbmRPZldvcmRJbmRleCIsInNlYXJjaCIsIlJlYWN0IiwidXNlVGV4dHNDYWxsYmFjayIsImNhbGxiYWNrIiwic2V0UmVhZHkiLCJzZXRUZXh0cyIsInVzZUVmZmVjdCIsIm1vZGVsVGV4dHMiLCJpc1JlYWR5IiwiX21vZGFsIiwiX3VpIiwiQ29pbnNBbGVydCIsIm9uQ2xvc2UiLCJjb2lucyIsIkFsZXJ0TW9kYWwiLCJidXR0b25MYWJlbCIsImFjdGlvbiIsIm9uQ29uZmlybSIsInRpdGxlIiwiQmF0dGVyeSIsInBlcmNlbnQiLCJjbGFzc05hbWUiLCJkZXNjcmlwdGlvbiIsIkNvaW5zTW9kYWwiLCJmZXRjaGluZyIsInNldEZldGNoaW5nIiwic2V0RXJyb3IiLCJtb2RhbCIsImVycm9ycyIsIm5vQ3JlZGl0cyIsIkNvbmZpcm1Nb2RhbCIsImFjdGlvbnMiLCJjb25maXJtIiwidmFyaWFudCIsImNhbmNlbCIsImJvcmRlcmVkIiwib25DYW5jZWwiLCJFcnJvclJlbmRlcmVyIiwiX2ljb25zIiwiX2NvbXBvbmVudHMiLCJfaWNvbnMyIiwiQUlCdXR0b24iLCJjaGlsZHJlbiIsIm9uQ2xpY2siLCJlbnN1cmUiLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwiZW5zdXJlQ3JlZGl0cyIsIkJ1dHRvbiIsImljb24iLCJJQ09OUyIsImFpU3RhcnMiLCJBSUljb25CdXR0b24iLCJJY29uQnV0dG9uIiwiX2FsZXJ0IiwiX2NvbnRleHQiLCJfZnJhbWVyTW90aW9uIiwiQWxlcnQiLCJBbGVydFJlbmRlcmVyIiwidGltZSIsInJlbW92ZSIsInNldFJlbW92ZSIsInRpbWVyIiwic2V0VGltZXIiLCJ1c2VNb2R1bGVDb250ZXh0Iiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIm1vdGlvbiIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkZWxheSIsInkiLCJleGl0IiwiU3RlcHNGb290ZXIiLCJzdWJtaXRMYWJlbCIsIm9uU3VibWl0IiwiZGlzYWJsZWQiLCJwcmV2aW91cyIsInNldEN1cnJlbnQiLCJjdXJyZW50Iiwic3VibWl0VGV4dCIsImJhY2siLCJzaXppbmciLCJIdG1sUmVuZGVyIiwidGFnIiwiQ29udHJvbCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZ2V0T3B0aW9ucyIsInNjaG9vbCIsInVuaXZlcnNpdHkiLCJjb21wYW55IiwiYnJpZWYiLCJzdGFuZGFyZCIsImV4dGVuZGVkIiwibGFuZ3VhZ2VzIiwiZW4iLCJlcyIsInB0IiwiZnIiLCJkZSIsIl9vcHRpb25zIiwiUmFkaW9CdXR0b24iLCJvbkNoYW5nZSIsIm91dHB1dCIsImluZGV4Iiwia2V5IiwiaHRtbEZvciIsIkJ1dHRvbkdyb3VwIiwiTW9kdWxlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwiRHJhZnRNYW5hZ2VtZW50Q29udGV4dCIsInVzZURyYWZ0TWFuYWdlbWVudENvbnRleHQiLCJTdWdnZXN0aW9uc0NvbnRleHQiLCJ1c2VTdWdnZXN0aW9uc0NvbnRleHQiLCJBbmltYXRlZERpdiIsImNscyIsIl9ob29rcyIsIl8iLCJEcmFmdENvbnRhaW5lciIsInRleHRzUmVhZHkiLCJ1c2VUZXh0cyIsImFjdGl2ZVBhbmVsIiwic2V0VXBkYXRlZCIsInNldFZhbHVlcyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwidXNlQmluZGVyIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiRnJhZ21lbnQiLCJQcm92aWRlciIsIlBhZ2VDb250YWluZXIiLCJEcmFmdEZvcm0iLCJfcmVhY3RTZWxlY3QiLCJBdWRpZW5jZUZpZWxkIiwib2JqZWN0aXZlVG91ciIsInRvdXIiLCJzZWxlY3QiLCJ0YXJnZXQiLCJvcHRpb25zIiwiT2JqZWN0Iiwia2V5cyIsImFyZ2VudGluZSIsInllYXIiLCJpc0Rpc2FibGVkIiwiUmVhY3RTZWxlY3QiLCJwbGFjZWhvbGRlciIsIkxhbmd1YWdlRmllbGQiLCJ3aXphcmQiLCJ3VGV4dHMiLCJfZm9ybSIsIk9iamVjdGl2ZUZpZWxkIiwibWVzc2FnZXMiLCJkZWxheVRpbWVJblNlY29uZHMiLCJBbmltYXRlUHJlc2VuY2UiLCJtb2RlIiwiVGV4dGFyZWEiLCJ0ZXh0QXJlYSIsImNvdW50ZXIiLCJtYXhMZW5ndGgiLCJfdG9hc3QiLCJPd25lcnNoaXBGaWVsZCIsInNldFByb2Nlc3NpbmciLCJzZXRTZWxlY3RlZCIsImRlZmF1bHRPcHRpb24iLCJzY2hvb2xzIiwiYXR0cnMiLCJtb2R1bGVzIiwiY291bnQiLCJjb2luVGV4dHMiLCJhbGVydHMiLCJvcmdhbml6YXRpb24iLCJhdmFpbGFibGUiLCJ1bmF2YWlsYWJsZSIsInRvYXN0IiwiVG91clN0ZXAiLCJhcyIsIl9hbmltYXRlZERpdiIsIl9hdWRpZW5jZSIsIl9vd25lcnNoaXAiLCJfb2JqZWN0aXZlIiwiX3JvdXRpbmciLCJfc3VnZ2VzdGlvbnMiLCJfbGFuZ3VhZ2UiLCJfdHJpbSIsIl9hY3Rpb24iLCJfcGF0aHdheSIsInNldFNob3ciLCJzdGF0ZSIsImNvbnRpbnVlIiwibWFpblJlZiIsInVzZURyaXZlclRvdXIiLCJidXR0b25zIiwib25Db2Zpcm1lZCIsImxhc3RJdGVtIiwicm91dGluZyIsInJlcGxhY2VTdGF0ZSIsImNsc0NvbnRhaW5lciIsIkZvcm0iLCJpbnRyb2R1Y3Rpb24iLCJzdWJ0aXRsZSIsIk9iamVjdGl2ZVN1Z2dlc3Rpb25zIiwiU3VnZ2VzdGlvbnNBY3Rpb24iLCJibG9jayIsIlByb2Nlc3NDb250YWluZXIiLCJQYXRod2F5R2VuZXJhdGlvbiIsIl9haUJ1dHRvbiIsInRleHRBY3Rpb25zIiwiZ2VuZXJhdGVJbXByb3ZlbWVudHMiLCJhbmFseXNlIiwiX2xpc3QiLCJpbXByb3ZlZE9iamVjdGl2ZSIsInNldEltcHJvdmVkT2JqZWN0aXZlIiwiaXJyZWxldmFudCIsImNvbnRleHRWYWx1ZSIsIk9iamVjdGl2ZUltcHJvdmVkIiwiU3VnZ2VzdGlvbnNMaXN0IiwiX2l0ZW0iLCJzdWdnZXN0aW9ucyIsImFwcGx5IiwiQXJyYXkiLCJmcm9tIiwiaSIsInN1Z2dlc3Rpb24iLCJzaXplIiwiTGlzdCIsImNvbnRyb2wiLCJPYmplY3RpdmVTdWdnZXN0aW9uc0l0ZW0iLCJyZW1vdmVTdWdnZXN0aW9ucyIsImFwcGx5U3VnZ2VzdGlvbnMiLCJvblNlbGVjdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhcnNlSW50IiwiZGF0YXNldCIsImVsZW1lbnRzIiwiaGFzIiwiZGVsZXRlIiwiYWRkIiwib3JpZ2luIiwicmVmZXJlbmNlIiwiaW1wcm92ZWQiLCJ1cGRhdGluZyIsInNldFVwZGF0aW5nIiwiX2NvbnRhaW5lciIsIl9tYW5hZ2VtZW50IiwiX2NvbnRleHQyIiwiQ29uZmlybWF0aW9uRm9ybSIsIm9uU2F2ZSIsInNldFZpZXciLCJ1c2VNb2RhbENvbnRleHQiLCJyZWZpbmUiLCJNb2RhbENvbnRleHQiLCJTdWdnZXN0aW9uRXhhbXBsZXMiLCJzZXROb3RlcyIsIm9uQmFjayIsIkl0ZW0iLCJleGFtcGxlcyIsIl90b3RhbEFjdGl2aXRpZXMiLCJBSUdlbmVyYXRpb25Gb3JtIiwibm90ZXMiLCJvbkdlbmVyYXRlIiwiZXZlbnRzIiwiVG90YWxBY3Rpdml0aWVzIiwidGV4dGFyZWEiLCJmbG9hdGluZyIsImdlbmVyYXRlIiwiRGVjaXN0aW9uVHlwZSIsImZvcm1UZXh0cyIsInNldHVwIiwiZ2VuZXJhdGlvbiIsInZhbHVlU2VsZWN0ZWQiLCJzZXRWYWx1ZVNlbGVjdGVkIiwiY2hlY2tlZCIsImFpIiwibWFudWFsbHkiLCJNYW51YWxGb3JtIiwicGF0aHdheSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiSW5wdXQiLCJtYW51YWwiLCJmb3JtIiwiZmlyc3RTZWxlY3RlZCIsImF1ZGllbmNlSW5kZXgiLCJfZXhhbXBsZXMiLCJfY29uZmlybWF0aW9uIiwiX2RlY2lzaW9uVHlwZSIsIl9tYW51YWwiLCJfYWlGb3JtIiwiX3JlcXVlc3RDcmVkaXRzIiwidmlldyIsInN0YXR1cyIsImNvbnRyb2xzIiwic2VsZWN0aW9uIiwicmVxdWVzdCIsIlJlcXVlc3RDcmVkaXRzQ29udGFpbmVyIiwidmlld0RlZmluZWQiLCJoYW5kbGVDTG9zZSIsIk1vZGFsIiwiY2xvc2VCYWNrZHJvcCIsIm9uU3VjY2VzcyIsIlJlcXVlc3RDcmVkaXRzRm9ybSIsIm9uQ29uc3VtZSIsImNvbnN1bWVDb2lucyJdLCJzb3VyY2VzIjpbIi90cy9jb250cm9sbGVyLnRzIiwiL3RzL21hbmFnZW1lbnQudHN4IiwiL3RzL3N0b3JlLnRzIiwiL3RzL3RyaW0udHMiLCIvdHMvdXNlLXRleHRzLWNhbGxiYWNrLnRzIiwiL3RzL3ZpZXdzL2NvaW5zL2FsZXJ0LnRzeCIsIi90cy92aWV3cy9jb2lucy9jb2lucy1tb2RhbC50c3giLCIvdHMvdmlld3MvY29tcG9uZW50cy9haS1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvYWxlcnQudHN4IiwiL3RzL3ZpZXdzL2NvbXBvbmVudHMvZm9vdGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL2h0bWwtcmVuZGVyLnRzeCIsIi90cy92aWV3cy9jb21wb25lbnRzL29wdGlvbnMudHMiLCIvdHMvdmlld3MvY29tcG9uZW50cy9yYWRpby1idXR0b24udHN4IiwiL3RzL3ZpZXdzL2NvbnRleHQudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vYW5pbWF0ZWQtZGl2LnRzeCIsIi90cy92aWV3cy9mb3JtL2NvbnRhaW5lci50c3giLCIvdHMvdmlld3MvZm9ybS9maWVsZHMvYXVkaWVuY2UudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL2xhbmd1YWdlLnRzeCIsIi90cy92aWV3cy9mb3JtL2ZpZWxkcy9vYmplY3RpdmUudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vZmllbGRzL293bmVyc2hpcC50c3giLCIvdHMvdmlld3MvZm9ybS9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9hY3Rpb24udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvbGlzdC9pbmRleC50c3giLCIvdHMvdmlld3MvZm9ybS9zdWdnZXN0aW9ucy9saXN0L2l0ZW0udHN4IiwiL3RzL3ZpZXdzL2Zvcm0vc3VnZ2VzdGlvbnMvb2JqZWN0aXZlLnRzeCIsIi90cy92aWV3cy9pbmRleC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9jb25maXJtYXRpb24udHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvY29udGV4dC50c3giLCIvdHMvdmlld3MvcGF0aHdheS9leGFtcGxlcy50c3giLCIvdHMvdmlld3MvcGF0aHdheS9mb3Jtcy9haS1mb3JtLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL2RlY2lzaW9uLXR5cGUudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvZm9ybXMvbWFudWFsLnRzeCIsIi90cy92aWV3cy9wYXRod2F5L2Zvcm1zL3RvdGFsLWFjdGl2aXRpZXMudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvaW5kZXgudHN4IiwiL3RzL3ZpZXdzL3BhdGh3YXkvcmVxdWVzdC1jcmVkaXRzLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUFBLElBQUFBLEtBQUEsR0FBQUMsT0FBQTtVQUNBLElBQUFDLE1BQUEsR0FBQUQsT0FBQTtVQUNBLElBQUFFLE1BQUEsR0FBQUYsT0FBQTtVQUVPO1VBQVUsTUFDWEcsVUFBVyxTQUFRSixLQUFBLENBQUFLLHlCQUF5QjtZQUNqRCxDQUFBQyxLQUFNO1lBRU5DLFdBQVdBLENBQUE7Y0FDVixJQUFJLENBQUMsQ0FBQUQsS0FBTSxHQUFHSixNQUFBLENBQUFJLEtBQUs7Y0FDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQUEsS0FBTTtZQUNuQjtZQUNBLElBQUlFLE1BQU1BLENBQUE7Y0FDVCxPQUFPTCxNQUFBLENBQUFNLElBQUk7WUFDWjtZQUVBQyxJQUFJQSxDQUFBO2NBQ0gsSUFBSSxDQUFDLENBQUFKLEtBQU0sQ0FBQ0ssSUFBSSxDQUFDLElBQUksQ0FBQ0MsR0FBRyxD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